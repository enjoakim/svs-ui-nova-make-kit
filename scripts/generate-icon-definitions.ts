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
const outputPath = path.join(__dirname, '../src/SvsUiNova/components/generated-icon-data.ts');

console.log('🎨 Generating icon definitions from Icons.tsx...\n');

try {
  const content = fs.readFileSync(iconsFilePath, 'utf-8');

  // Extract all icon blocks with data-name
  const iconBlocks: Map<string, { viewBox: string; paths: string[] }> = new Map();

  // Find all divs with data-name attributes (these are top-level icon containers)
  const iconDivRegex = /<div[^>]*data-name="([^"]+)"[^>]*>([\s\S]*?)<\/div>\s*(?=<div[^>]*data-name=|<\/div>\s*$)/g;

  let match;
  while ((match = iconDivRegex.exec(content)) !== null) {
    const iconName = match[1];
    const iconContent = match[2];

    // Skip technical names
    if (
      iconName.startsWith('Vector') ||
      iconName === 'shape' ||
      iconName === 'Union' ||
      iconName.includes('Polygon') ||
      iconName.includes('Ellipse') ||
      iconName.includes('Rectangle') ||
      iconName.includes('Group') ||
      iconName.includes('(Stroke)') ||
      iconName === 'icons'
    ) {
      continue;
    }

    // Extract viewBox from SVG element
    const svgMatch = iconContent.match(/<svg[^>]*viewBox="([^"]+)"/);
    const viewBox = svgMatch ? svgMatch[1] : '0 0 24 24';

    // Extract all path elements with their d attributes
    const paths: string[] = [];
    const pathRegex = /<path[^>]*d=\{svgPaths\.([^}]+)\}[^>]*\/>/g;
    const directPathRegex = /<path[^>]*d="([^"]+)"[^>]*\/>/g;

    let pathMatch;

    // Extract paths with svgPaths references
    while ((pathMatch = pathRegex.exec(iconContent)) !== null) {
      paths.push(`svgPaths.${pathMatch[1]}`);
    }

    // Extract direct path data
    while ((pathMatch = directPathRegex.exec(iconContent)) !== null) {
      paths.push(`"${pathMatch[1]}"`);
    }

    if (paths.length > 0) {
      iconBlocks.set(iconName, { viewBox, paths });
    }
  }

  console.log(`✅ Found ${iconBlocks.size} icons with SVG data\n`);

  // Generate TypeScript code
  let output = `// Auto-generated icon data from Icons.tsx
// Do not edit manually - run 'node scripts/generate-icon-definitions.ts' to regenerate

import svgPaths from '../../imports/Icons/svg-2dqjhgc4pl';

export interface IconData {
  viewBox: string;
  paths: JSX.Element;
}

export const generatedIconData: Record<string, IconData> = {\n`;

  // Sort icons alphabetically
  const sortedIcons = Array.from(iconBlocks.entries()).sort((a, b) => a[0].localeCompare(b[0]));

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
  console.log(`📊 Total icons: ${iconBlocks.size}\n`);
  console.log('Sample icons:');
  sortedIcons.slice(0, 10).forEach(([name]) => {
    console.log(`  - ${name}`);
  });

  if (sortedIcons.length > 10) {
    console.log(`  ... and ${sortedIcons.length - 10} more`);
  }

  console.log('\n✨ Done! Now update Icon.tsx to use generatedIconData');

} catch (error) {
  console.error('❌ Error:', (error as Error).message);
  console.error((error as Error).stack);
  process.exit(1);
}
