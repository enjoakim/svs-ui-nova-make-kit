#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_FILE_KEY = 'OQpwpaJZzLCQG8JkGAnbeJ';
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN || 'figd_aQZfopHG0oxihjwaPvhqJQ5rFVJBCq3fxV6NQ6GS';

console.log('🔍 Fetching file structure from Figma...\n');

async function fetchFigmaFile() {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('❌ Failed to fetch from Figma:', error.message);
    process.exit(1);
  }
}

function findComponentByName(node, searchName, found = []) {
  if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
    const nodeName = node.name.toLowerCase();
    const search = searchName.toLowerCase();
    
    // Exact match
    if (nodeName === search) {
      found.push({ name: node.name, id: node.id, type: node.type });
    }
    // Component set match (for variants)
    else if (node.type === 'COMPONENT_SET' && nodeName.includes(search)) {
      found.push({ name: node.name, id: node.id, type: node.type });
    }
  }
  
  if (node.children) {
    for (const child of node.children) {
      findComponentByName(child, searchName, found);
    }
  }
  
  return found;
}

async function updateCodeConnectFiles(fileData) {
  const basePath = path.join(__dirname, '../src/SvsUiNova/components');
  const files = fs.readdirSync(basePath).filter(f => f.endsWith('.figma.tsx'));
  
  console.log('🔄 Searching for components and updating files...\n');
  
  let updated = 0;
  let notFound = 0;
  const notFoundList = [];
  
  for (const file of files) {
    const filePath = path.join(basePath, file);
    const componentName = file.replace('.figma.tsx', '');
    
    // Search for component in Figma file
    const matches = findComponentByName(fileData.document, componentName);
    
    if (matches.length > 0) {
      // Prefer COMPONENT_SET over COMPONENT
      const match = matches.find(m => m.type === 'COMPONENT_SET') || matches[0];
      const nodeId = match.id.replace(':', '-');
      
      let content = fs.readFileSync(filePath, 'utf-8');
      const updatedContent = content.replace(/node-id=TODO/g, `node-id=${nodeId}`);
      
      if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent);
        console.log(`  ✅ ${file}: ${match.name} → node-id=${nodeId}`);
        updated++;
      } else {
        console.log(`  ⏭️  ${file}: Already updated`);
      }
    } else {
      console.log(`  ⚠️  ${file}: Not found in Figma`);
      notFoundList.push(componentName);
      notFound++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  Updated: ${updated}`);
  console.log(`  Already up-to-date: ${files.length - updated - notFound}`);
  console.log(`  Not found: ${notFound}`);
  
  if (notFoundList.length > 0) {
    console.log(`\n📝 Components not found in Figma:`);
    notFoundList.forEach(name => console.log(`  - ${name}`));
    console.log('\n💡 These may need manual node-id updates');
  }
}

async function main() {
  const fileData = await fetchFigmaFile();
  await updateCodeConnectFiles(fileData);
  console.log('\n✅ Done!');
}

main();
