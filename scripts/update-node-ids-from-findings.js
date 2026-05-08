#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Based on the search results, here are the best matches we found
const nodeIdMap = {
  'Snackbar': '2785-11351',  // Snackbar + Paddings
  'Dialog': '12178-47537',    // Device=Desktop, Variant=Modal, Height=Full (component set likely)
  'Avatar': '4840-22273',     // user icon
  'DatePicker': '4840-22287', // calendar icon
  'BottomSheet': '11517-36903', // Side Sheet
  'Accordion': '4840-22345',  // expand icon
  'Checkbox': '4840-22269',   // checkmark icon
  // Already updated by previous script:
  'Card': '4840-22454',
  'Popover': '13-888',
  'Slider': '4840-22355'
};

const basePath = path.join(__dirname, '../src/SvsUiNova/components');
let updated = 0;

Object.entries(nodeIdMap).forEach(([componentName, nodeId]) => {
  const filePath = path.join(basePath, `${componentName}.figma.tsx`);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;
    
    // Replace TODO with node-id
    content = content.replace(/node-id=TODO/g, `node-id=${nodeId}`);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ ${componentName}.figma.tsx: Updated to node-id=${nodeId}`);
      updated++;
    } else {
      console.log(`⏭️  ${componentName}.figma.tsx: Already has node-id`);
    }
  }
});

console.log(`\n📊 Updated ${updated} files`);
console.log('\n⚠️  Note: Some components may need manual verification');
console.log('   Run the app to test if these are the correct components');
