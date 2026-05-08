#!/usr/bin/env node

/**
 * Fetch Figma Node IDs
 *
 * Automatically fetches node-ids from Figma and updates Code Connect files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_FILE_KEY = 'OQpwpaJZzLCQG8JkGAnbeJ';
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FIGMA_ACCESS_TOKEN) {
  console.error('❌ Error: FIGMA_ACCESS_TOKEN environment variable is not set');
  console.log('\nTo get your Figma access token:');
  console.log('1. Go to https://www.figma.com/settings');
  console.log('2. Scroll to "Personal access tokens"');
  console.log('3. Click "Create a new personal access token"');
  console.log('4. Set it as an environment variable:');
  console.log('   export FIGMA_ACCESS_TOKEN="your-token-here"');
  process.exit(1);
}

console.log('🔍 Fetching components from Figma...\n');

async function fetchFigmaComponents() {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/components`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.meta.components;
  } catch (error) {
    console.error('❌ Failed to fetch from Figma:', error.message);
    process.exit(1);
  }
}

async function updateCodeConnectFiles(components) {
  const basePath = path.join(__dirname, '../src/SvsUiNova/components');

  // Create a map of component names to node IDs
  const componentMap = {};
  components.forEach(component => {
    const name = component.name.split('/').pop().trim(); // Get last part after "/"
    componentMap[name] = component.node_id;
  });

  console.log(`📦 Found ${components.length} components in Figma:\n`);
  Object.entries(componentMap).forEach(([name, nodeId]) => {
    console.log(`  - ${name}: ${nodeId}`);
  });

  console.log('\n🔄 Updating Code Connect files...\n');

  let updated = 0;
  let notFound = 0;

  // Read all .figma.tsx files
  const files = fs.readdirSync(basePath).filter(f => f.endsWith('.figma.tsx'));

  files.forEach(file => {
    const filePath = path.join(basePath, file);
    const componentName = file.replace('.figma.tsx', '');

    // Try to find matching node ID
    let nodeId = componentMap[componentName];

    // Try common variations if exact match not found
    if (!nodeId) {
      // Try with spaces (e.g., "Toggle Group" for "ToggleGroup")
      const nameWithSpaces = componentName.replace(/([A-Z])/g, ' $1').trim();
      nodeId = componentMap[nameWithSpaces];
    }

    if (!nodeId) {
      // Try lowercase variations
      const lowerName = componentName.toLowerCase();
      const matchingKey = Object.keys(componentMap).find(
        key => key.toLowerCase() === lowerName
      );
      if (matchingKey) {
        nodeId = componentMap[matchingKey];
      }
    }

    if (nodeId) {
      let content = fs.readFileSync(filePath, 'utf-8');

      // Replace TODO with actual node-id
      const updatedContent = content.replace(/node-id=TODO/g, `node-id=${nodeId}`);

      if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`  ✅ ${file}: Updated with node-id=${nodeId}`);
        updated++;
      } else {
        console.log(`  ⏭️  ${file}: Already has node-id`);
      }
    } else {
      console.log(`  ⚠️  ${file}: No matching component found in Figma`);
      notFound++;
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`  Updated: ${updated}`);
  console.log(`  Already up-to-date: ${files.length - updated - notFound}`);
  console.log(`  Not found in Figma: ${notFound}`);

  if (notFound > 0) {
    console.log('\n💡 Tip: Check that component names in Figma match your file names');
    console.log('   You may need to manually update files that were not found');
  }
}

async function main() {
  const components = await fetchFigmaComponents();
  await updateCodeConnectFiles(components);
  console.log('\n✅ Done!');
}

main();
