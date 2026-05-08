#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_FILE_KEY = 'OQpwpaJZzLCQG8JkGAnbeJ';
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN || 'figd_aQZfopHG0oxihjwaPvhqJQ5rFVJBCq3fxV6NQ6GS';
const SPORT_CASINO_NODE_ID = '6703:61187'; // Sport & Casino section

interface BrandComponent {
  id: string;
  name: string;
  category: string;
  type: string;
}

interface FigmaNode {
  id: string;
  name?: string;
  type: string;
  children?: FigmaNode[];
}

console.log('🎯 Fetching Sport & Casino brands from Figma...\n');

async function fetchFigmaNode(nodeId: string): Promise<any> {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${nodeId}`,
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
  } catch (error: any) {
    console.error('❌ Failed to fetch from Figma:', error.message);
    process.exit(1);
  }
}

function findBrandComponents(node: FigmaNode, components: BrandComponent[] = [], category: string | null = null): BrandComponent[] {
  const name = node.name?.toLowerCase() || '';

  // Determine category based on node name
  if (name === 'logos' || name.includes('logo')) {
    category = 'logos';
  } else if (name === 'icons' || name.includes('icon')) {
    category = 'icons';
  } else if (name === '3d-cube products' || name.includes('cube')) {
    category = 'cubes';
  }

  // Collect COMPONENT nodes for brand assets
  if (node.type === 'COMPONENT') {
    const productNames = [
      'oddset', 'bomben', 'casino', 'matchen', 'stryktipset', 'topptipset',
      'europatipset', 'powerplay', 'challenge', 'maltipset', 'poker',
      'hastar', 'bingo', 'momang'
    ];

    // Check if this is a brand component
    const isBrandComponent = productNames.some(product => name.includes(product));

    if (isBrandComponent || name.includes('-icon') || name.includes('cube-soc')) {
      components.push({
        id: node.id,
        name: node.name || 'unnamed',
        category: category || 'unknown',
        type: node.type
      });
    }
  }

  // Recursively search children
  if (node.children) {
    for (const child of node.children) {
      findBrandComponents(child, components, category);
    }
  }

  return components;
}

async function exportSVGs(components: BrandComponent[]): Promise<void> {
  console.log(`\n📦 Found ${components.length} brand components\n`);

  // Group by category
  const byCategory = components.reduce<Record<string, BrandComponent[]>>((acc, comp) => {
    if (!acc[comp.category]) acc[comp.category] = [];
    acc[comp.category].push(comp);
    return acc;
  }, {});

  console.log('📊 By category:');
  Object.entries(byCategory).forEach(([cat, items]) => {
    console.log(`  ${cat}: ${items.length} items`);
  });

  // Export SVGs from Figma
  const ids = components.map(c => c.id).join(',');

  console.log('\n🎨 Requesting SVG exports from Figma...');

  try {
    const response = await fetch(
      `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${ids}&format=svg`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Figma Images API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data.err) {
      throw new Error(`Figma API error: ${data.err}`);
    }

    console.log('✅ Got export URLs from Figma\n');

    // Download and save each SVG
    const outputDir = path.join(__dirname, '../src/SvsUiNova/brands/sport-casino/svg-exports');
    fs.mkdirSync(outputDir, { recursive: true });

    let downloaded = 0;

    for (const component of components) {
      const url = data.images[component.id];

      if (!url) {
        console.log(`  ⚠️  No export URL for ${component.name}`);
        continue;
      }

      try {
        const svgResponse = await fetch(url);
        const svgContent = await svgResponse.text();

        // Create category subdirectory
        const categoryDir = path.join(outputDir, component.category);
        fs.mkdirSync(categoryDir, { recursive: true });

        // Sanitize filename
        const filename = component.name.replace(/[^a-z0-9-_]/gi, '-').toLowerCase() + '.svg';
        const filepath = path.join(categoryDir, filename);

        fs.writeFileSync(filepath, svgContent);
        console.log(`  ✅ ${component.category}/${filename}`);
        downloaded++;
      } catch (error: any) {
        console.log(`  ❌ Failed to download ${component.name}: ${error.message}`);
      }
    }

    console.log(`\n📊 Summary:`);
    console.log(`  Downloaded: ${downloaded}/${components.length} SVGs`);
    console.log(`  Output: ${outputDir}`);

    // Save component metadata
    const metadataPath = path.join(outputDir, 'components.json');
    fs.writeFileSync(metadataPath, JSON.stringify(components, null, 2));
    console.log(`  Metadata: ${metadataPath}`);

  } catch (error: any) {
    console.error('❌ Failed to export SVGs:', error.message);
    process.exit(1);
  }
}

async function main() {
  const nodeData = await fetchFigmaNode(SPORT_CASINO_NODE_ID);
  const rootNode = nodeData.nodes[SPORT_CASINO_NODE_ID].document;

  const components = findBrandComponents(rootNode);

  if (components.length === 0) {
    console.log('⚠️  No brand components found');
    return;
  }

  await exportSVGs(components);

  console.log('\n✅ Done! All Sport & Casino brand assets exported');
  console.log('\n💡 Next steps:');
  console.log('  1. Review SVG files in src/SvsUiNova/brands/sport-casino/svg-exports/');
  console.log('  2. Run conversion script to create React components');
}

main();
