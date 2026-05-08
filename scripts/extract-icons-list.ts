#!/usr/bin/env node

/**
 * Extract all icon names from Icons.tsx
 * Generates a JSON file with all available icon names
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsFilePath = path.join(__dirname, '../src/imports/Icons/Icons.tsx');
const outputPath = path.join(__dirname, '../src/app/components/icon-names.json');

console.log('📋 Extracting icon names from Icons.tsx...\n');

try {
  const content = fs.readFileSync(iconsFilePath, 'utf-8');

  // Extract all data-name attributes
  const dataNameRegex = /data-name="([^"]+)"/g;
  const allMatches = [...content.matchAll(dataNameRegex)];

  // Filter out internal/technical names
  const excludePatterns = [
    /^Vector/,
    /^shape$/,
    /^Union$/,
    /^Polygon/,
    /^Ellipse/,
    /^Rectangle/,
    /^Group/,
    /\(Stroke\)$/,
    /^icons$/
  ];

  const iconNames = new Set<string>();

  allMatches.forEach(match => {
    const name = match[1];
    const shouldExclude = excludePatterns.some(pattern => pattern.test(name));

    if (!shouldExclude) {
      iconNames.add(name);
    }
  });

  const sortedIcons = Array.from(iconNames).sort();

  console.log(`✅ Found ${sortedIcons.length} unique icon names\n`);

  // Write to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(sortedIcons, null, 2), 'utf-8');

  console.log(`📁 Saved to: ${outputPath}\n`);
  console.log('Sample icons:');
  sortedIcons.slice(0, 10).forEach(name => console.log(`  - ${name}`));

  if (sortedIcons.length > 10) {
    console.log(`  ... and ${sortedIcons.length - 10} more`);
  }

} catch (error) {
  console.error('❌ Error:', (error as Error).message);
  process.exit(1);
}
