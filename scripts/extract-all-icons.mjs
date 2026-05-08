#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsFilePath = path.join(__dirname, '../src/imports/Icons/Icons.tsx');
const outputPath = path.join(__dirname, '../src/SvsUiNova/components/generated-icon-data.tsx');

console.log('🎨 Extracting all icons from Icons.tsx...\n');

const content = fs.readFileSync(iconsFilePath, 'utf-8');

// Find all top-level icon divs (those with position absolute and data-name)
const iconDivRegex = /<div className="absolute[^>]+data-name="([^"]+)"[^>]*>([\s\S]*?)(?=<div className="absolute[^>]+data-name="|<\/div>\s*<\/div>\s*$)/g;

const icons = new Map();
const excludePatterns = [/^Vector/, /^shape$/, /^Union$/, /^Polygon/, /^Ellipse/, /^Rectangle/, /^Group/, /\(Stroke\)$/, /^icons$/];

let match;
let count = 0;

while ((match = iconDivRegex.exec(content)) !== null) {
  const iconName = match[1];
  const iconContent = match[2];
  
  // Skip technical names
  if (excludePatterns.some(p => p.test(iconName))) continue;
  
  // Extract viewBox from first SVG
  const viewBoxMatch = iconContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  
  // Extract all path d attributes (both svgPaths references and direct paths)
  const paths = [];
  
  // Match svgPaths references
  const svgPathMatches = [...iconContent.matchAll(/d=\{svgPaths\.([a-zA-Z0-9]+)\}/g)];
  svgPathMatches.forEach(m => paths.push(`svgPaths.${m[1]}`));
  
  // Match direct path data
  const directPathMatches = [...iconContent.matchAll(/<path[^>]+d="([^"]+)"/g)];
  directPathMatches.forEach(m => paths.push(`"${m[1]}"`));
  
  if (paths.length > 0) {
    icons.set(iconName, { viewBox, paths });
    count++;
  }
}

console.log(`✅ Found ${count} icons\n`);

// Generate TypeScript
let output = `// Auto-generated from Icons.tsx - ${count} icons
// Run 'node scripts/extract-all-icons.mjs' to regenerate

import svgPaths from '../../imports/Icons/svg-2dqjhgc4pl';

export interface IconData {
  viewBox: string;
  paths: JSX.Element;
}

export const generatedIconData: Record<string, IconData> = {\n`;

const sorted = Array.from(icons.entries()).sort((a, b) => a[0].localeCompare(b[0]));

sorted.forEach(([name, { viewBox, paths }]) => {
  const safeName = name.replace(/[^a-zA-Z0-9-_]/g, '-');
  
  if (paths.length === 1) {
    output += `  '${safeName}': { viewBox: '${viewBox}', paths: <path d={${paths[0]}} fill="currentColor" /> },\n`;
  } else {
    output += `  '${safeName}': {\n    viewBox: '${viewBox}',\n    paths: (\n      <g>\n`;
    paths.forEach(p => output += `        <path d={${p}} fill="currentColor" />\n`);
    output += `      </g>\n    )\n  },\n`;
  }
});

output += `};\n\nexport type GeneratedIconName =\n`;
sorted.forEach(([name], i) => {
  const safeName = name.replace(/[^a-zA-Z0-9-_]/g, '-');
  output += `  | '${safeName}'${i === sorted.length - 1 ? ';' : ''}\n`;
});

fs.writeFileSync(outputPath, output, 'utf-8');

console.log(`📁 Saved to: ${outputPath}`);
console.log(`\n📊 Total: ${count} icons`);
console.log('\nSample (first 15):');
sorted.slice(0, 15).forEach(([name]) => console.log(`  - ${name}`));
console.log(count > 15 ? `  ...and ${count - 15} more\n` : '\n');

