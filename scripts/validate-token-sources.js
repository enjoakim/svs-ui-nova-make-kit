#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.join(__dirname, '..');

const tokenRoot = path.join(repoRoot, 'src', 'design-tokens');
const stylesPath = path.join(repoRoot, 'src', 'SvsUiNova', 'styles.css');
const themePath = path.join(repoRoot, 'src', 'styles', 'theme.css');

const modeFiles = [
  'light.tokens.json',
  'light-secondary.tokens.json',
  'dark.tokens.json',
  'vibrant.tokens.json',
];

const themeVarMappings = [
  ['background', ['color', 'Surface', 'Base', 'bg', 'rest']],
  ['foreground', ['color', 'Surface', 'fg', 'default']],
  ['card', ['color', 'Surface', 'Standard', 'bg', 'rest']],
  ['card-foreground', ['color', 'Surface', 'fg', 'default']],
  ['popover', ['color', 'Surface', 'Elevated', 'bg', 'rest']],
  ['popover-foreground', ['color', 'Surface', 'fg', 'default']],
  ['primary', ['color', 'Accent', 'Primary', 'bg', 'rest']],
  ['primary-foreground', ['color', 'Accent', 'Primary', 'fg', 'default']],
  ['secondary', ['color', 'Accent', 'Secondary', 'bg', 'rest']],
  ['secondary-foreground', ['color', 'Accent', 'Secondary', 'fg', 'default']],
  ['muted', ['color', 'Layer', 'Neutral', 'bg', 'rest']],
  ['muted-foreground', ['color', 'Layer', 'fg', 'muted']],
  ['accent', ['color', 'Accent', 'Primary Variant', 'bg', 'rest']],
  ['accent-foreground', ['color', 'Accent', 'Primary Variant', 'fg', 'default']],
  ['destructive', ['color', 'Status', 'Important', 'bg', 'rest']],
  ['destructive-foreground', ['color', 'Status', 'Important', 'fg', 'default']],
  ['border', ['color', 'Stroke', 'Medium', 'rest']],
  ['input', ['color', 'Surface', 'Standard', 'bg', 'rest']],
  ['input-background', ['color', 'Surface', 'Standard', 'bg', 'rest']],
  ['ring', ['color', 'Stroke', 'Accessible', 'rest']],
  ['sidebar', ['color', 'Surface', 'Standard', 'bg', 'rest']],
  ['sidebar-foreground', ['color', 'Surface', 'fg', 'default']],
  ['sidebar-primary', ['color', 'Accent', 'Primary', 'bg', 'rest']],
  ['sidebar-primary-foreground', ['color', 'Accent', 'Primary', 'fg', 'default']],
  ['sidebar-accent', ['color', 'Surface', 'Standard', 'bg', 'hover']],
  ['sidebar-accent-foreground', ['color', 'Surface', 'fg', 'default']],
  ['sidebar-border', ['color', 'Stroke', 'Medium', 'rest']],
  ['sidebar-ring', ['color', 'Stroke', 'Accessible', 'rest']],
];

const stylesVarMappings = [
  ['color/accent/primary/bg/rest', ['color', 'Accent', 'Primary', 'bg', 'rest']],
  ['color/accent/primary/bg/hover', ['color', 'Accent', 'Primary', 'bg', 'hover']],
  ['color/accent/primary/bg/pressed', ['color', 'Accent', 'Primary', 'bg', 'pressed']],
  ['color/accent/primary/bg/selected', ['color', 'Accent', 'Primary', 'bg', 'selected']],
  ['color/accent/primary/fg/default', ['color', 'Accent', 'Primary', 'fg', 'default']],
  ['color/accent/primary/fg/muted', ['color', 'Accent', 'Primary', 'fg', 'muted']],
  ['color/accent/primary-variant/bg/rest', ['color', 'Accent', 'Primary Variant', 'bg', 'rest']],
  ['color/accent/primary-variant/bg/hover', ['color', 'Accent', 'Primary Variant', 'bg', 'hover']],
  ['color/accent/primary-variant/bg/pressed', ['color', 'Accent', 'Primary Variant', 'bg', 'pressed']],
  ['color/accent/primary-variant/bg/selected', ['color', 'Accent', 'Primary Variant', 'bg', 'selected']],
  ['color/accent/primary-variant/fg/default', ['color', 'Accent', 'Primary Variant', 'fg', 'default']],
  ['color/status/success/bg/rest', ['color', 'Status', 'Success', 'bg', 'rest']],
  ['color/status/attention/bg/rest', ['color', 'Status', 'Attention', 'bg', 'rest']],
  ['color/status/important/bg/rest', ['color', 'Status', 'Important', 'bg', 'rest']],
  ['color/layer/neutral/bg/rest', ['color', 'Layer', 'Neutral', 'bg', 'rest']],
  ['color/layer/fg/default', ['color', 'Layer', 'fg', 'default']],
  ['color/surface/base/bg/rest', ['color', 'Surface', 'Base', 'bg', 'rest']],
  ['color/surface/standard/bg/rest', ['color', 'Surface', 'Standard', 'bg', 'rest']],
  ['color/surface/fg/default', ['color', 'Surface', 'fg', 'default']],
  ['color/stroke/medium/rest', ['color', 'Stroke', 'Medium', 'rest']],
  ['color/stroke/accessible/rest', ['color', 'Stroke', 'Accessible', 'rest']],
];

let errors = 0;
let warnings = 0;

function fail(message) {
  errors += 1;
  console.log(`❌ ${message}`);
}

function warn(message) {
  warnings += 1;
  console.log(`⚠️  ${message}`);
}

function ok(message) {
  console.log(`✅ ${message}`);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function getByPath(object, pathParts) {
  return pathParts.reduce((value, key) => (value && key in value ? value[key] : undefined), object);
}

function decodeCssVarName(name) {
  return name.replace(/\\\//g, '/').replace(/\\,/g, ',');
}

function extractBlock(css, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = css.match(new RegExp(`${escaped}\\s*\\{([\\s\\S]*?)\\n\\}`, 'm'));
  return match ? match[1] : null;
}

function parseVars(block) {
  const vars = new Map();
  const regex = /--([^:]+):\s*([^;]+);/g;
  let match;
  while ((match = regex.exec(block)) !== null) {
    vars.set(decodeCssVarName(match[1].trim()), match[2].trim());
  }
  return vars;
}

function hexToRgba(hex) {
  const clean = hex.replace('#', '').trim();
  const normalized = clean.length <= 4
    ? clean.split('').map((char) => char + char).join('')
    : clean;

  const hasAlpha = normalized.length === 8;
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  const a = hasAlpha ? parseInt(normalized.slice(6, 8), 16) / 255 : 1;

  return { r, g, b, a };
}

function parseCssColor(value) {
  if (value.startsWith('#')) {
    return hexToRgba(value);
  }

  const rgbMatch = value.match(/rgba?\(([^)]+)\)/i);
  if (!rgbMatch) {
    return null;
  }

  const parts = rgbMatch[1].split(',').map((part) => part.trim());
  const [r, g, b] = parts.slice(0, 3).map((part) => Number(part));
  const a = parts[3] !== undefined ? Number(parts[3]) : 1;
  return { r, g, b, a };
}

function tokenColorToRgba(tokenNode) {
  if (!tokenNode || !tokenNode.$value) {
    return null;
  }

  if (typeof tokenNode.$value === 'string') {
    return parseCssColor(tokenNode.$value);
  }

  if (tokenNode.$value.hex) {
    const rgba = hexToRgba(tokenNode.$value.hex);
    if (typeof tokenNode.$value.alpha === 'number') {
      rgba.a = tokenNode.$value.alpha;
    }
    return rgba;
  }

  if (Array.isArray(tokenNode.$value.components)) {
    const [r, g, b] = tokenNode.$value.components.map((component) => Math.round(component * 255));
    const a = tokenNode.$value.alpha ?? 1;
    return { r, g, b, a };
  }

  return null;
}

function colorsMatch(left, right) {
  return (
    Math.abs(left.r - right.r) <= 1 &&
    Math.abs(left.g - right.g) <= 1 &&
    Math.abs(left.b - right.b) <= 1 &&
    Math.abs(left.a - right.a) <= 0.015
  );
}

function validateStructure() {
  console.log('🔍 Validating token structure...');

  const requiredFiles = [
    'index.json',
    path.join('globals', 'colors.json'),
    path.join('primitives', 'index.json'),
    path.join('primitives', '_metadata.json'),
    path.join('products', 'index.json'),
    path.join('themes', 'svenska-spel', 'light.tokens.json'),
    path.join('themes', 'svenska-spel', 'light-secondary.tokens.json'),
    path.join('themes', 'svenska-spel', 'dark.tokens.json'),
    path.join('themes', 'svenska-spel', 'vibrant.tokens.json'),
  ];

  for (const relativePath of requiredFiles) {
    const absolutePath = path.join(tokenRoot, relativePath);
    if (!fs.existsSync(absolutePath)) {
      fail(`Missing required token file: src/design-tokens/${relativePath}`);
    }
  }

  const productRoot = path.join(tokenRoot, 'products');
  const productDirs = fs
    .readdirSync(productRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  if (productDirs.length !== 26) {
    warn(`Expected 26 product directories, found ${productDirs.length}`);
  } else {
    ok(`Found ${productDirs.length} product theme directories`);
  }

  for (const product of productDirs) {
    for (const modeFile of modeFiles) {
      const filePath = path.join(productRoot, product, modeFile);
      if (!fs.existsSync(filePath)) {
        fail(`Missing ${modeFile} in src/design-tokens/products/${product}`);
      }
    }
  }

  const productIndex = readJson(path.join(productRoot, 'index.json'));
  const indexedProducts = Object.values(productIndex.products).flat().sort();

  if (indexedProducts.some((entry) => entry.endsWith('.zip'))) {
    fail('src/design-tokens/products/index.json still references ZIP files instead of checked-in product directories');
  }

  const unmatchedDirs = productDirs.filter((dir) => !indexedProducts.includes(dir));
  const unmatchedIndex = indexedProducts.filter((product) => !productDirs.includes(product));

  if (unmatchedDirs.length > 0) {
    fail(`Product directories missing from products/index.json: ${unmatchedDirs.join(', ')}`);
  }

  if (unmatchedIndex.length > 0) {
    fail(`products/index.json references missing product directories: ${unmatchedIndex.join(', ')}`);
  }
}

function validateThemeBridge() {
  console.log('\n🎨 Validating semantic theme bridge...');

  const css = fs.readFileSync(themePath, 'utf-8');
  const rootBlock = extractBlock(css, ':root');
  const darkBlock = extractBlock(css, '.dark');

  if (!rootBlock || !darkBlock) {
    fail('Could not parse :root and .dark blocks from src/styles/theme.css');
    return;
  }

  const rootVars = parseVars(rootBlock);
  const darkVars = parseVars(darkBlock);

  const lightTokens = readJson(path.join(tokenRoot, 'themes', 'svenska-spel', 'light.tokens.json'));
  const darkTokens = readJson(path.join(tokenRoot, 'themes', 'svenska-spel', 'dark.tokens.json'));

  let matched = 0;

  for (const [varName, tokenPath] of themeVarMappings) {
    const lightCssValue = rootVars.get(varName);
    const darkCssValue = darkVars.get(varName);
    const lightTokenValue = tokenColorToRgba(getByPath(lightTokens, tokenPath));
    const darkTokenValue = tokenColorToRgba(getByPath(darkTokens, tokenPath));

    if (!lightCssValue || !darkCssValue || !lightTokenValue || !darkTokenValue) {
      warn(`Skipping incomplete theme bridge mapping for --${varName}`);
      continue;
    }

    const parsedLightCss = parseCssColor(lightCssValue);
    const parsedDarkCss = parseCssColor(darkCssValue);

    if (!parsedLightCss || !parsedDarkCss) {
      warn(`Skipping non-color theme bridge value for --${varName}`);
      continue;
    }

    if (!colorsMatch(parsedLightCss, lightTokenValue)) {
      warn(`theme.css :root --${varName} is out of sync with themes/svenska-spel/light.tokens.json`);
      continue;
    }

    if (!colorsMatch(parsedDarkCss, darkTokenValue)) {
      warn(`theme.css .dark --${varName} is out of sync with themes/svenska-spel/dark.tokens.json`);
      continue;
    }

    matched += 1;
  }

  ok(`Validated ${matched} semantic theme bridge variables against checked-in theme tokens`);
}

function validateStylesBridge() {
  console.log('\n🧩 Validating low-level component token bridge...');

  const css = fs.readFileSync(stylesPath, 'utf-8');
  const rootBlock = extractBlock(css, ':root');

  if (!rootBlock) {
    fail('Could not parse :root block from src/SvsUiNova/styles.css');
    return;
  }

  const rootVars = parseVars(rootBlock);
  const lightTokens = readJson(path.join(tokenRoot, 'themes', 'svenska-spel', 'light.tokens.json'));

  let matched = 0;

  for (const [varName, tokenPath] of stylesVarMappings) {
    const cssValue = rootVars.get(varName);
    const tokenValue = tokenColorToRgba(getByPath(lightTokens, tokenPath));

    if (!cssValue || !tokenValue) {
      warn(`Skipping incomplete styles bridge mapping for --${varName}`);
      continue;
    }

    const parsedCss = parseCssColor(cssValue);
    if (!parsedCss) {
      warn(`Skipping non-color styles bridge value for --${varName}`);
      continue;
    }

    if (!colorsMatch(parsedCss, tokenValue)) {
      warn(`src/SvsUiNova/styles.css --${varName} is out of sync with themes/svenska-spel/light.tokens.json`);
      continue;
    }

    matched += 1;
  }

  ok(`Validated ${matched} low-level component bridge variables against the parent light theme`);
}

function main() {
  validateStructure();
  validateThemeBridge();
  validateStylesBridge();

  console.log('\n📊 Summary');
  console.log(`Errors: ${errors}`);
  console.log(`Warnings: ${warnings}`);

  if (errors > 0) {
    process.exit(1);
  }
}

main();
