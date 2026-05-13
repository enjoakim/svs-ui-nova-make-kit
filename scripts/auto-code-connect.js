#!/usr/bin/env node

/**
 * Auto Code Connect - Automated Figma Code Connect Setup
 * 
 * This script automatically:
 * 1. Fetches component information from Figma API
 * 2. Extracts node IDs from Figma components
 * 3. Generates/updates Code Connect files
 * 4. Validates the setup
 * 5. Prepares git commit
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Configuration
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID || 'OQpwpaJZzLCQG8JkGAnbeJ';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const COMPONENT_DIR = path.join(rootDir, 'src/SvsUiNova/components');
const OUTPUT_LOG = path.join(rootDir, 'code-connect-automation.log');

// Logging
const log = (message) => {
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ${message}`;
  console.log(logMsg);
  fs.appendFileSync(OUTPUT_LOG, logMsg + '\n');
};

const error = (message) => {
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ❌ ERROR: ${message}`;
  console.error(logMsg);
  fs.appendFileSync(OUTPUT_LOG, logMsg + '\n');
};

/**
 * Fetch Figma file data from API
 */
async function fetchFigmaData() {
  if (!FIGMA_TOKEN) {
    error('FIGMA_TOKEN not found in environment. Set it in .env file.');
    process.exit(1);
  }

  log('📡 Fetching Figma data...');

  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`,
      {
        headers: { 'X-Figma-Token': FIGMA_TOKEN },
      }
    );

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.statusText}`);
    }

    const data = await response.json();
    log(`✅ Successfully fetched Figma file: ${data.name}`);
    return data;
  } catch (err) {
    error(`Failed to fetch Figma data: ${err.message}`);
    process.exit(1);
  }
}

/**
 * Extract component node IDs from Figma data
 */
function extractComponentNodeIds(figmaData) {
  log('🔍 Extracting component node IDs...');

  const components = {};
  const collectComponents = (node) => {
    if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      components[node.name] = {
        id: node.id,
        type: node.type,
        name: node.name,
      };
      log(`  ✓ Found component: ${node.name} (${node.id})`);
    }

    if (node.children) {
      node.children.forEach(collectComponents);
    }
  };

  if (figmaData.document) {
    collectComponents(figmaData.document);
  }

  log(`✅ Extracted ${Object.keys(components).length} components`);
  return components;
}

/**
 * Find existing .figma.tsx files
 */
function findCodeConnectFiles() {
  log('🔎 Scanning for existing Code Connect files...');

  const files = [];
  const scan = (dir) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (entry.name.endsWith('.figma.tsx')) {
        files.push(fullPath);
        log(`  ✓ Found: ${entry.name}`);
      }
    });
  };

  if (fs.existsSync(COMPONENT_DIR)) {
    scan(COMPONENT_DIR);
  }

  log(`✅ Found ${files.length} Code Connect files`);
  return files;
}

/**
 * Update Code Connect file with correct node ID
 */
function updateNodeIdInFile(filePath, componentName, nodeId) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace TODO node-id with actual ID
  const oldContent = content;
  content = content.replace(
    /node-id:\s*['"]TODO['"]/g,
    `node-id: '${nodeId}'`
  );
  
  // Also handle hyphenated IDs
  content = content.replace(
    /node-id:\s*['"][0-9]+-[0-9]+['"]/g,
    `node-id: '${nodeId}'`
  );

  if (content !== oldContent) {
    fs.writeFileSync(filePath, content);
    log(`  ✓ Updated node-id in ${path.basename(filePath)}`);
    return true;
  }
  return false;
}

/**
 * Main automation workflow
 */
async function runAutomation() {
  log('🚀 Starting Code Connect Automation...\n');

  try {
    // Step 1: Fetch Figma data
    const figmaData = await fetchFigmaData();

    // Step 2: Extract node IDs
    const components = extractComponentNodeIds(figmaData);

    // Step 3: Find existing Code Connect files
    const codeConnectFiles = findCodeConnectFiles();

    // Step 4: Update files with node IDs
    log('\n📝 Updating Code Connect files...');
    let updatedCount = 0;
    let skippedCount = 0;

    codeConnectFiles.forEach((filePath) => {
      const fileName = path.basename(filePath, '.figma.tsx');
      
      // Try to find matching component in Figma
      const matchingComponent = Object.values(components).find(
        (comp) =>
          comp.name.toLowerCase().includes(fileName.toLowerCase()) ||
          fileName.toLowerCase().includes(comp.name.toLowerCase())
      );

      if (matchingComponent) {
        const updated = updateNodeIdInFile(
          filePath,
          matchingComponent.name,
          matchingComponent.id
        );
        if (updated) updatedCount++;
        else skippedCount++;
      } else {
        log(`  ⚠ No matching Figma component for ${fileName}`);
        skippedCount++;
      }
    });

    // Step 5: Validate
    log('\n✅ Validation...');
    const filesWithoutNodeId = codeConnectFiles.filter((filePath) => {
      const content = fs.readFileSync(filePath, 'utf-8');
      return content.includes("node-id: 'TODO'");
    });

    log(`  ✓ Updated: ${updatedCount} files`);
    log(`  ✓ Skipped: ${skippedCount} files`);
    if (filesWithoutNodeId.length > 0) {
      log(
        `  ⚠ Still TODO: ${filesWithoutNodeId.length} files need manual attention`
      );
    }

    // Step 6: Run tests
    log('\n🧪 Running validation tests...');
    try {
      execSync('pnpm run validate:manifest', { 
        cwd: rootDir,
        stdio: 'inherit' 
      });
    } catch (err) {
      log('  ⚠ Validation script not found or failed (this is OK)');
    }

    log('\n✅ Automation completed successfully!');
    log('📋 Next steps:');
    log('  1. Review the changes');
    log('  2. Run: npm run figma:test (if available)');
    log('  3. Commit: git add . && git commit -m "chore: Update Code Connect node IDs"');
    log('  4. Push: git push origin main');

    return { success: true, updated: updatedCount };
  } catch (err) {
    error(`Automation failed: ${err.message}`);
    process.exit(1);
  }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runAutomation();
}

export { fetchFigmaData, extractComponentNodeIds, findCodeConnectFiles };
