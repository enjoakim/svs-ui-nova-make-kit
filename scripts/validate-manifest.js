#!/usr/bin/env node

/**
 * Validate Component Manifest
 *
 * Checks that all components in the manifest actually exist
 * and identifies missing Code Connect files.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manifestPath = path.join(__dirname, '../src/SvsUiNova/component-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

const basePath = path.join(__dirname, '../src/SvsUiNova');

console.log('🔍 Validating Component Manifest...\n');

let errors = 0;
let warnings = 0;
const missingCodeConnect = [];

// Validate components
console.log('📦 Components:');
Object.entries(manifest.components).forEach(([name, component]) => {
  // Check if implementation file exists
  if (component.path) {
    const fullPath = path.join(basePath, component.path);
    if (!fs.existsSync(fullPath)) {
      console.log(`  ❌ ${name}: Implementation file not found at ${component.path}`);
      errors++;
    } else {
      console.log(`  ✅ ${name}: Implementation exists (${component.status})`);
    }
  } else if (component.status !== 'docs-only' && component.status !== 'missing') {
    console.log(`  ⚠️  ${name}: No path specified but status is ${component.status}`);
    warnings++;
  }

  // Check if Code Connect file exists
  if (component.status === 'partial' && !component.figmaConnect) {
    missingCodeConnect.push(name);
  }
});

// Validate logos
console.log('\n🎨 Logos:');
Object.entries(manifest.logos).forEach(([name, logo]) => {
  const fullPath = path.join(basePath, logo.path);
  if (!fs.existsSync(fullPath)) {
    console.log(`  ❌ ${name}: Logo file not found at ${logo.path}`);
    errors++;
  } else {
    console.log(`  ✅ ${name}: Logo exists`);
  }
});

// Summary
console.log('\n📊 Summary:');
console.log(`  Total components: ${Object.keys(manifest.components).length}`);
console.log(`  Complete: ${Object.values(manifest.components).filter(c => c.status === 'complete').length}`);
console.log(`  Partial: ${Object.values(manifest.components).filter(c => c.status === 'partial').length}`);
console.log(`  Docs-only: ${Object.values(manifest.components).filter(c => c.status === 'docs-only').length}`);
console.log(`  Missing: ${Object.values(manifest.components).filter(c => c.status === 'missing').length}`);

console.log(`\n  ❌ Errors: ${errors}`);
console.log(`  ⚠️  Warnings: ${warnings}`);

if (missingCodeConnect.length > 0) {
  console.log(`\n🔗 Missing Code Connect (${missingCodeConnect.length}):`);
  missingCodeConnect.forEach(name => {
    console.log(`  - ${name}`);
  });
}

// Exit with error if validation failed
if (errors > 0) {
  console.log('\n❌ Validation failed!');
  process.exit(1);
} else {
  console.log('\n✅ Validation passed!');
  process.exit(0);
}
