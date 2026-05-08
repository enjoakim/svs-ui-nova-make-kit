#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const additionalMappings = {
  'RadioGroup': '2753-7734',  // Type=Radio component set
};

const basePath = path.join(__dirname, '../src/SvsUiNova/components');
let updated = 0;

Object.entries(additionalMappings).forEach(([componentName, nodeId]) => {
  const filePath = path.join(basePath, `${componentName}.figma.tsx`);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    
    content = content.replace(/node-id=TODO/g, `node-id=${nodeId}`);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ ${componentName}.figma.tsx: Updated to node-id=${nodeId}`);
      updated++;
    }
  }
});

console.log(`\n📊 Updated ${updated} more files`);
