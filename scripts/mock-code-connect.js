#!/usr/bin/env node

/**
 * Mock Code Connect - Testing/Development Version
 * 
 * This script demonstrates the Code Connect automation workflow
 * without making actual API calls or file modifications.
 * Perfect for testing and local development.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Mock Figma data (simulated)
const MOCK_FIGMA_DATA = {
  document: {
    children: [
      {
        name: 'Components',
        type: 'FRAME',
        children: [
          { name: 'Button', type: 'COMPONENT', id: '123:456' },
          { name: 'Input', type: 'COMPONENT', id: '123:457' },
          { name: 'Checkbox', type: 'COMPONENT', id: '123:458' },
          { name: 'Switch', type: 'COMPONENT', id: '123:459' },
          { name: 'Select', type: 'COMPONENT', id: '123:460' },
          { name: 'Card', type: 'COMPONENT', id: '123:461' },
          { name: 'Dialog', type: 'COMPONENT', id: '123:462' },
          { name: 'Tabs', type: 'COMPONENT', id: '123:463' },
          { name: 'Badge', type: 'COMPONENT', id: '123:464' },
          { name: 'Avatar', type: 'COMPONENT', id: '123:465' },
        ],
      },
    ],
  },
};

const log = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
};

/**
 * Mock fetch of Figma data
 */
async function mockFetchFigmaData() {
  log('📡 [MOCK] Fetching Figma data...');
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
  log('✅ [MOCK] Successfully fetched Figma file: Make Kit Components');
  return MOCK_FIGMA_DATA;
}

/**
 * Extract component node IDs from mock data
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
 * Mock find Code Connect files
 */
function findCodeConnectFiles() {
  log('🔎 Scanning for existing Code Connect files...');

  const COMPONENT_DIR = path.join(rootDir, 'src/SvsUiNova/components');
  const files = [];

  const scan = (dir) => {
    try {
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
    } catch (err) {
      // Directory might not exist in mock
    }
  };

  if (fs.existsSync(COMPONENT_DIR)) {
    scan(COMPONENT_DIR);
  }

  log(`✅ Found ${files.length} Code Connect files`);
  return files;
}

/**
 * Mock validation - show what would be done
 */
function mockValidation(codeConnectFiles) {
  log('\n✅ [MOCK] Validation Report:');
  
  let filesWithTodo = 0;
  let totalTodo = 0;

  codeConnectFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const todoMatches = content.match(/node-id:\s*['"]TODO['"]/g);
    if (todoMatches) {
      filesWithTodo++;
      totalTodo += todoMatches.length;
      log(`  ⚠ ${path.basename(filePath)}: ${todoMatches.length} TODO(s)`);
    } else {
      log(`  ✓ ${path.basename(filePath)}: complete`);
    }
  });

  log(`\n📊 Summary:`);
  log(`  Total files: ${codeConnectFiles.length}`);
  log(`  Files with TODOs: ${filesWithTodo}`);
  log(`  Total TODOs: ${totalTodo}`);

  return { filesWithTodo, totalTodo };
}

/**
 * Main mock workflow
 */
async function runMockAutomation() {
  log('🚀 [MOCK] Starting Code Connect Automation (Mock Mode)...\n');

  try {
    // Step 1: Fetch mock Figma data
    const figmaData = await mockFetchFigmaData();

    // Step 2: Extract node IDs
    const components = extractComponentNodeIds(figmaData);

    // Step 3: Find Code Connect files
    const codeConnectFiles = findCodeConnectFiles();

    // Step 4: Mock validation
    const validation = mockValidation(codeConnectFiles);

    log('\n💡 [MOCK] What would happen in real mode:');
    log(`  1. Match each .figma.tsx file to Figma components`);
    log(`  2. Update ${codeConnectFiles.length - validation.filesWithTodo} files with node IDs`);
    log(`  3. Mark ${validation.filesWithTodo} files as requiring manual review`);
    log(`  4. Create git commit with changes`);

    log('\n✅ [MOCK] Automation simulation completed!');
    log('\n📖 To run actual automation:');
    log('  npm run figma:auto-connect');
    log('\n📝 To commit changes manually:');
    log('  npm run figma:commit');

    return { success: true, mock: true };
  } catch (err) {
    log(`❌ [MOCK] Error: ${err.message}`);
    process.exit(1);
  }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runMockAutomation();
}

export { mockFetchFigmaData, extractComponentNodeIds, findCodeConnectFiles };
