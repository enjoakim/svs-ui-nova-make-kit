#!/usr/bin/env node

/**
 * Auto Code Connect - Fetch Figma component nodes and update .figma.tsx node IDs.
 *
 * Figma file: OQpwpaJZzLCQG8JkGAnbeJ
 * Component directory: src/SvsUiNova/components/
 * Code Connect files: *.figma.tsx
 *
 * Usage:
 *   node scripts/auto-code-connect.js          # Update files
 *   node scripts/auto-code-connect.js --dry-run  # Preview changes only
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const envPath = path.join(rootDir, '.env');

if (fs.existsSync(envPath)) {
  const env = fs.readFileSync(envPath, 'utf8');
  env.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const [key, ...rest] = trimmed.split('=');
    if (!key) return;
    process.env[key.trim()] = rest.join('=').trim();
  });
}

const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID || 'OQpwpaJZzLCQG8JkGAnbeJ';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const COMPONENT_DIR = path.join(rootDir, 'src/SvsUiNova/components');
const OUTPUT_LOG = path.join(rootDir, 'code-connect-automation.log');

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run') || args.includes('-d');

const log = (message) => {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}`;
  console.log(entry);
  if (!isDryRun) {
    fs.appendFileSync(OUTPUT_LOG, entry + '\n');
  }
};

const error = (message) => {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ❌ ERROR: ${message}`;
  console.error(entry);
  if (!isDryRun) {
    fs.appendFileSync(OUTPUT_LOG, entry + '\n');
  }
};

const normalizeName = (name) => name.replace(/[^a-z0-9]+/gi, '').toLowerCase();

const loadFigmaFile = async () => {
  if (!FIGMA_TOKEN) {
    error('FIGMA_TOKEN is required. Add it to .env or environment variables.');
    process.exit(1);
  }

  log(`📡 Fetching Figma components from ${FIGMA_FILE_ID}...`);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

  try {
    // Use the components endpoint instead of the full file to avoid large response
    const response = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_ID}/components`, {
      headers: { 'X-Figma-Token': FIGMA_TOKEN },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const text = await response.text();
      error(`Figma API request failed: ${response.status} ${response.statusText} - ${text}`);
      process.exit(1);
    }

    const data = await response.json();
    log(`✅ Figma components loaded: ${Object.keys(data.meta?.components || {}).length} components`);
    return data;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      error('Figma API request timed out after 30 seconds.');
      process.exit(1);
    }
    throw err;
  }
};

const extractComponents = (data) => {
  const components = new Map();

  // The components endpoint returns { meta: { components: { key: componentData } } }
  if (data.meta?.components) {
    Object.entries(data.meta.components).forEach(([key, component]) => {
      if (component.name && component.node_id) {
        const normalizedKey = normalizeName(component.name);
        components.set(normalizedKey, {
          id: component.node_id,
          name: component.name,
          key: key
        });
        log(`  📋 Found component: ${component.name} → ${component.node_id}`);
      }
    });
  }

  log(`🔍 Extracted ${components.size} Figma component entries`);
  return components;
};

const findFigmaFiles = () => {
  if (!fs.existsSync(COMPONENT_DIR)) {
    error(`Component directory not found: ${COMPONENT_DIR}`);
    process.exit(1);
  }

  const results = [];
  const scan = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const resolved = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(resolved);
      } else if (entry.isFile() && entry.name.endsWith('.figma.tsx')) {
        results.push(resolved);
      }
    }
  };

  scan(COMPONENT_DIR);
  log(`📁 Found ${results.length} Code Connect .figma.tsx files`);
  return results;
};

const updateNodeId = (filePath, nodeId) => {
  const raw = fs.readFileSync(filePath, 'utf8');
  // Match node-id in URL format: ?node-id=123-456
  const urlPattern = /node-id=([0-9]+-[0-9]+)/g;
  let updated = false;
  const content = raw.replace(urlPattern, (match, currentId) => {
    if (currentId !== nodeId) {
      updated = true;
      return `node-id=${nodeId}`;
    }
    return match;
  });

  if (updated && content !== raw) {
    if (isDryRun) {
      log(`  ✓ [DRY-RUN] Would update ${path.relative(rootDir, filePath)} → ${nodeId}`);
    } else {
      fs.writeFileSync(filePath, content, 'utf8');
      log(`  ✓ Updated ${path.relative(rootDir, filePath)} → ${nodeId}`);
    }
    return true;
  }

  return false;
};

const run = async () => {
  log(`🚀 Starting auto-code-connect workflow${isDryRun ? ' (DRY-RUN)' : ''}`);

  const figmaData = await loadFigmaFile();
  const components = extractComponents(figmaData);
  const files = findFigmaFiles();

  if (files.length === 0) {
    error('No .figma.tsx files found to update.');
    process.exit(1);
  }

  let updatedCount = 0;
  let skippedCount = 0;
  const missingMatches = [];

  for (const filePath of files) {
    const fileName = path.basename(filePath, '.figma.tsx');
    const normalizedName = normalizeName(fileName);
    const candidate = components.get(normalizedName);

    if (!candidate) {
      const fallback = Array.from(components.values()).find((component) =>
        normalizeName(component.name) === normalizedName ||
        normalizeName(component.name).includes(normalizedName) ||
        normalizedName.includes(normalizeName(component.name))
      );

      if (fallback) {
        log(`  ⚠ Partial match for ${fileName} → ${fallback.name}`);
      }

      const component = fallback || candidate;
      if (!component) {
        log(`  ✖ No Figma match for ${fileName}`);
        missingMatches.push(fileName);
        skippedCount += 1;
        continue;
      }

      const updated = updateNodeId(filePath, component.id);
      if (updated) {
        updatedCount += 1;
      } else {
        skippedCount += 1;
      }
      continue;
    }

    const updated = updateNodeId(filePath, candidate.id);
    if (updated) {
      updatedCount += 1;
    } else {
      skippedCount += 1;
    }
  }

  log(`✅ Completed updates: ${updatedCount} files`);
  log(`⚠ Skipped: ${skippedCount} files`);

  if (missingMatches.length > 0) {
    log(`⚠ Missing Figma matches for ${missingMatches.length} file(s): ${missingMatches.join(', ')}`);
  }

  const remainingTodos = files.filter((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    return /TODO.*node-id|node-id.*TODO/i.test(content) || !/node-id=[0-9]+-[0-9]+/.test(content);
  });

  if (remainingTodos.length > 0) {
    log(`⚠ ${remainingTodos.length} file(s) still contain TODO node IDs or missing node IDs:`);
    remainingTodos.forEach((filePath) => log(`    - ${path.relative(rootDir, filePath)}`));
  }

  if (!isDryRun) {
    try {
      execSync('pnpm run validate:manifest', { cwd: rootDir, stdio: 'inherit' });
    } catch (err) {
      log('⚠ Skipped manifest validation or validation failed.');
    }
  }

  log(`✅ Auto-code-connect finished${isDryRun ? ' (DRY-RUN)' : ''}`);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  run().catch((err) => {
    error(err.message || String(err));
    process.exit(1);
  });
}

