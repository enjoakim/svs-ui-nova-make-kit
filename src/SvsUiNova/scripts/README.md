# SvsUiNova Font Conversion Scripts

This directory contains utility scripts for the SvsUiNova design system.

## convert-fonts-to-data-uri.js

Converts imported font `.txt` files (containing base64-encoded WOFF2 data) into inline data URI `@font-face` declarations in `/src/styles/fonts.css`.

### Purpose

Fixes font loading issues in Figma Make by converting external file references to inline data URIs. See `../guidelines/FONT_LOADING_FIX.md` for technical details.

### Usage

**Manual execution:**
```bash
node src/SvsUiNova/scripts/convert-fonts-to-data-uri.js
```

**As npm script** (add to package.json):
```json
{
  "scripts": {
    "fonts:convert": "node src/SvsUiNova/scripts/convert-fonts-to-data-uri.js",
    "postinstall": "npm run fonts:convert"
  }
}
```

**Integrated into build process** (recommended for Make Kit):
```javascript
// In vite.config.ts or build script
import { convertFontsToDataUri } from './src/SvsUiNova/scripts/convert-fonts-to-data-uri.js';

// Run before build
await convertFontsToDataUri();
```

### How It Works

1. Scans `src/imports/` for `.txt` files containing base64 font data
2. Parses filenames to determine font family and weight
3. Generates `@font-face` declarations with inline data URIs
4. Appends to `/src/styles/fonts.css`

### Font Filename Patterns

The script recognizes these patterns:

| Pattern | Font Family | Weight |
|---------|-------------|--------|
| `*arena*bold*` | Svenska Spel Arena Pro | 700 |
| `*plan*medium*` | Svenska Spel Plan Pro | 500 |
| `*plan*regular*` | Svenska Spel Plan Pro | 400 |

### Example Output

**Input:** `src/imports/font-arena-bold.txt` (contains base64 data)

**Output in fonts.css:**
```css
@font-face {
  font-family: 'Svenska Spel Arena Pro';
  src: url('data:font/woff2;base64,d09GMgABAAAAAIyU...') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Integration with Make Kit

For the Make Kit infrastructure team, this script should be:

1. **Automatically executed** when a project using SvsUiNova is created
2. **Run during build** to ensure fonts are always properly loaded
3. **Triggered on font import** when new fonts are added from Figma

### Recommended Integration Points

1. **Post-install hook**: Run after package installation
2. **Pre-build hook**: Run before Vite build starts
3. **Font import handler**: Run when new fonts are detected in imports

## Troubleshooting

**Fonts still not loading?**
- Check that `@font-face` declarations use `data:font/woff2;base64,` URLs
- Verify no external file references like `url('../imports/...')` exist
- Ensure fonts.css is imported in your application
- Check browser console for font loading errors

**Script not finding fonts?**
- Verify font files are in `src/imports/` directory
- Check that font files have `.txt` extension
- Ensure files contain valid base64 data

**Duplicate font declarations?**
- Script checks for existing data URIs to prevent duplicates
- If you need to regenerate, clear fonts.css first

## Development

To test the script:

```bash
# Install dependencies (none required for basic usage)
npm install

# Run conversion
npm run fonts:convert

# Verify output
cat src/styles/fonts.css | head -n 50
```

## Related Documentation

- [setup.md](../guidelines/setup.md) - Setup requirements
- [FONT_LOADING_FIX.md](../guidelines/FONT_LOADING_FIX.md) - Technical details
- [Guidelines.md](../guidelines/Guidelines.md) - Main guidelines
