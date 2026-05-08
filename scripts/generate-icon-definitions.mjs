#!/usr/bin/env node

/**
 * Generate Icon Definitions from Icons.tsx
 *
 * This script parses the Icons.tsx file and extracts all icon SVG data
 * to generate proper icon definitions for the Icon component
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsFilePath = path.join(__dirname, '../src/imports/Icons/Icons.tsx');
const outputPath = path.join(__dirname, '../src/SvsUiNova/components/generated-icon-data.tsx');

console.log('🎨 Generating icon definitions from Icons.tsx...\n');

try {
  const content = fs.readFileSync(iconsFilePath, 'utf-8');

  // Extract icons simple approach - find each data-name and its corresponding SVG
  const iconData = new Map();
  
  // Split by divs with data-name
  const lines = content.split('\n');
  let currentIcon = null;
  let currentViewBox = null;
  let currentPaths = [];
  let inIcon = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for data-name
    const dataNameMatch = line.match(/data-name="([^"]+)"/);
    if (dataNameMatch) {
      // Save previous icon if exists
      if (currentIcon && currentPaths.length > 0) {
        iconData.set(currentIcon, {
          viewBox: currentViewBox || '0 0 24 24',
          paths: currentPaths
        });
      }
      
      currentIcon = dataNameMatch[1];
      currentViewBox = null;
      currentPaths = [];
      inIcon = true;
    }
    
    // Extract viewBox
    const viewBoxMatch = line.match(/viewBox="([^"]+)"/);
    if (viewBoxMatch && inIcon) {
      currentViewBox = viewBoxMatch[1];
    }
    
    // Extract path d attributes
    const pathSvgMatch = line.match(/d=\{svgPaths\.([a-zA-Z0-9]+)\}/);
    if (pathSvgMatch && inIcon) {
      currentPaths.push(`svgPaths.${pathSvgMatch[1]}`);
    }
    
    const pathDirectMatch = line.match(/d="([^"]+)"/);
    if (pathDirectMatch && inIcon && line.includes('<path')) {
      currentPaths.push(`"${pathDirectMatch[1]}"`);
    }
  }
  
  // Save last icon
  if (currentIcon && currentPaths.length > 0) {
    iconData.set(currentIcon, {
      viewBox: currentViewBox || '0 0 24 24',
      paths: currentPaths
    });
  }
  
  // Filter out technical names
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
  
  for (const [name] of iconData) {
    if (excludePatterns.some(pattern => pattern.test(name))) {
      iconData.delete(name);
    }
  }

  console.log(`✅ Found ${iconData.size} icons with SVG data\n`);

  // Generate TypeScript code
  let output = `// Auto-generated icon data from Icons.tsx
// Do not edit manually - run 'node scripts/generate-icon-definitions.mjs' to regenerate

import svgPaths from '../../imports/Icons/svg-2dqjhgc4pl';

export interface IconData {
  viewBox: string;
  paths: JSX.Element;
}

export const generatedIconData: Record<string, IconData> = {\n`;

  // Sort icons alphabetically
  const sortedIcons = Array.from(iconData.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  sortedIcons.forEach(([name, data]) => {
    const { viewBox, paths } = data;

    // Sanitize icon name for TypeScript key (replace special chars)
    const safeName = name.replace(/[^a-zA-Z0-9-_]/g, '-');

    if (paths.length === 1) {
      output += `  '${safeName}': {
    viewBox: '${viewBox}',
    paths: <path d={${paths[0]}} fill="currentColor" />
  },\n`;
    } else {
      output += `  '${safeName}': {
    viewBox: '${viewBox}',
    paths: (
      <g>\n`;

      paths.forEach(path => {
        output += `        <path d={${path}} fill="currentColor" />\n`;
      });

      output += `      </g>
    )
  },\n`;
    }
  });

  output += `};\n\n`;

  // Generate icon name type
  output += `export type GeneratedIconName =\n`;
  sortedIcons.forEach(([name], index) => {
    const safeName = name.replace(/[^a-zA-Z0-9-_]/g, '-');
    output += `  | '${safeName}'${index === sortedIcons.length - 1 ? ';' : ''}\n`;
  });

  // Write output file
  fs.writeFileSync(outputPath, output, 'utf-8');

  console.log(`📁 Generated: ${outputPath}\n`);
  console.log(`📊 Total icons: ${iconData.size}\n`);
  console.log('Sample icons:');
  sortedIcons.slice(0, 10).forEach(([name]) => {
    console.log(`  - ${name}`);
  });

  if (sortedIcons.length > 10) {
    console.log(`  ... and ${sortedIcons.length - 10} more`);
  }

  console.log('\n✨ Done! Now update Icon.tsx to use generatedIconData');

} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
