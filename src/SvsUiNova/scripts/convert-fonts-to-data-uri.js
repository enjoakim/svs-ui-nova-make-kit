#!/usr/bin/env node

/**
 * Font Data URI Converter for Figma Make
 *
 * This script converts imported font .txt files (containing base64 data)
 * into inline data URI @font-face declarations in /src/styles/fonts.css
 *
 * Usage:
 *   node convert-fonts-to-data-uri.js
 *
 * This script should be integrated into the Make Kit build process
 * to automatically fix font loading when fonts are imported from Figma.
 */

const fs = require('fs').promises;
const path = require('path');

// Configuration
const IMPORTS_DIR = path.resolve(__dirname, '../../../imports');
const FONTS_CSS_PATH = path.resolve(__dirname, '../../../styles/fonts.css');

// Font metadata mapping based on filename patterns
const FONT_METADATA = {
  'arena-pro-bold': { family: 'Svenska Spel Arena Pro', weight: 700, style: 'normal' },
  'arena-bold': { family: 'Svenska Spel Arena Pro', weight: 700, style: 'normal' },
  'plan-pro-medium': { family: 'Svenska Spel Plan Pro', weight: 500, style: 'normal' },
  'plan-medium': { family: 'Svenska Spel Plan Pro', weight: 500, style: 'normal' },
  'plan-pro-regular': { family: 'Svenska Spel Plan Pro', weight: 400, style: 'normal' },
  'plan-regular': { family: 'Svenska Spel Plan Pro', weight: 400, style: 'normal' },
};

/**
 * Parse font filename to extract metadata
 */
function parseFontFilename(filename) {
  const normalized = filename.toLowerCase().replace(/[_\s]+/g, '-');

  for (const [pattern, metadata] of Object.entries(FONT_METADATA)) {
    if (normalized.includes(pattern)) {
      return metadata;
    }
  }

  // Default fallback
  console.warn(`⚠️  Unknown font pattern: ${filename}, using defaults`);
  return { family: 'Custom Font', weight: 400, style: 'normal' };
}

/**
 * Generate @font-face CSS declaration with inline data URI
 */
function generateFontFace(base64Data, metadata) {
  return `@font-face {
  font-family: '${metadata.family}';
  src: url('data:font/woff2;base64,${base64Data}') format('woff2');
  font-weight: ${metadata.weight};
  font-style: ${metadata.style};
  font-display: swap;
}`;
}

/**
 * Find all font .txt files in imports directory
 */
async function findFontFiles(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const fontFiles = [];

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.txt')) {
        const fullPath = path.join(dir, entry.name);
        const content = await fs.readFile(fullPath, 'utf-8');

        // Check if it looks like base64 font data (starts with common WOFF2 signatures)
        if (content.match(/^[A-Za-z0-9+/=]{100,}/)) {
          fontFiles.push({
            path: fullPath,
            name: entry.name,
            content: content.trim()
          });
        }
      }
    }

    return fontFiles;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('ℹ️  No imports directory found, skipping font conversion');
      return [];
    }
    throw error;
  }
}

/**
 * Main conversion function
 */
async function convertFontsToDataUri() {
  console.log('🔍 Looking for font files in:', IMPORTS_DIR);

  const fontFiles = await findFontFiles(IMPORTS_DIR);

  if (fontFiles.length === 0) {
    console.log('✅ No font files to convert');
    return;
  }

  console.log(`📝 Found ${fontFiles.length} font file(s)`);

  const fontFaces = [];

  for (const fontFile of fontFiles) {
    console.log(`   Processing: ${fontFile.name}`);
    const metadata = parseFontFilename(fontFile.name);
    const fontFace = generateFontFace(fontFile.content, metadata);
    fontFaces.push(fontFace);
    console.log(`   ✓ ${metadata.family} (${metadata.weight})`);
  }

  // Read existing fonts.css or create header
  let existingCss = '';
  try {
    existingCss = await fs.readFile(FONTS_CSS_PATH, 'utf-8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('ℹ️  Creating new fonts.css file');
      existingCss = `/**
 * Typography - Svenska Spel Design System
 *
 * This file contains font-face declarations and typography variables for the
 * SVS UI (Nova) Design System.
 *
 * Typefaces:
 * - Svenska Spel Arena Pro: Display typeface for headlines and impact
 * - Svenska Spel Plan Pro: Body typeface for UI and readability
 */

`;
    } else {
      throw error;
    }
  }

  // Check if we already have data URI fonts to avoid duplicates
  if (existingCss.includes('data:font/woff2;base64,')) {
    console.log('⚠️  fonts.css already contains inline data URIs, skipping to avoid duplicates');
    console.log('   If you need to regenerate, please clean fonts.css first');
    return;
  }

  // Combine: new font faces at top, then existing CSS
  const separator = '\n/* ============================================================================\n   Font Face Declarations\n   ========================================================================= */\n\n';
  const newCss = existingCss.trim() + '\n\n' + separator + fontFaces.join('\n\n') + '\n';

  // Ensure directory exists
  await fs.mkdir(path.dirname(FONTS_CSS_PATH), { recursive: true });

  // Write updated CSS
  await fs.writeFile(FONTS_CSS_PATH, newCss, 'utf-8');

  console.log('✅ Font conversion complete!');
  console.log(`   Output: ${FONTS_CSS_PATH}`);
  console.log(`   Added ${fontFaces.length} @font-face declaration(s)`);
}

// Run if executed directly
if (require.main === module) {
  convertFontsToDataUri()
    .then(() => {
      console.log('\n🎉 Done!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n❌ Error:', error.message);
      console.error(error.stack);
      process.exit(1);
    });
}

module.exports = { convertFontsToDataUri, parseFontFilename, generateFontFace };
