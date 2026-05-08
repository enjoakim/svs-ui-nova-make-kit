# Font Loading Fix - Make Kit Integration Guide

## Executive Summary

**Problem**: Custom fonts imported from Figma as `.txt` files fail to load when referenced as external files in `@font-face` declarations.

**Solution**: Convert base64 font data to inline data URIs in CSS at build time.

**Status**: ✅ Implementation ready - scripts and documentation complete

---

## Quick Start for Make Kit Team

### Option 1: Automated Script (Recommended)

Use the provided conversion script in your build pipeline:

```javascript
// In Make Kit font import handler
import { convertFontsToDataUri } from '@make-kits/svs-ui-nova/src/SvsUiNova/scripts/convert-fonts-to-data-uri.js';

// After fonts are imported to src/imports/
await convertFontsToDataUri();
```

### Option 2: Manual Implementation

Follow the pseudocode in `guidelines/FONT_LOADING_FIX.md` to build your own converter.

---

## Integration Points

The font fix should be triggered at these points in the Make Kit workflow:

### 1. **On Project Creation** ✓ Highest Priority
When a new Make project is created using SvsUiNova:
- Detect if fonts are imported from Figma
- Run font conversion before first build
- Ensure `/src/styles/fonts.css` contains data URI declarations

### 2. **On Font Import** ✓ High Priority
When user imports new fonts from Figma:
- Detect new `.txt` files in `src/imports/`
- Automatically convert to data URIs
- Update `/src/styles/fonts.css`

### 3. **Pre-Build Hook** ✓ Medium Priority
As a safety net before builds:
- Check for unconverted font files
- Run conversion if needed
- Prevents font loading failures in production

### 4. **Post-Install Hook** (Optional)
After `npm install` of `@make-kits/svs-ui-nova`:
- Can run `npm run fonts:convert`
- Only useful if fonts already exist in consuming project

---

## Technical Implementation

### Required Changes in Make Kit Infrastructure

#### 1. Font Detection Logic

Add detection for font imports:

```typescript
// Detect when fonts are imported from Figma
function detectFontImports(importedFiles: string[]): boolean {
  return importedFiles.some(file => {
    if (!file.endsWith('.txt')) return false;
    
    // Check if content looks like base64 font data
    const content = readFileSync(file, 'utf-8');
    return /^[A-Za-z0-9+/=]{100,}/.test(content);
  });
}
```

#### 2. Font Conversion Integration

Integrate the conversion script:

```typescript
// In Make Kit build/import process
import { convertFontsToDataUri } from '@make-kits/svs-ui-nova/src/SvsUiNova/scripts/convert-fonts-to-data-uri.js';

async function handleFigmaImport(figmaNode, targetProject) {
  // ... existing import logic ...
  
  // After files are written to src/imports/
  const hasFonts = detectFontImports(importedFiles);
  
  if (hasFonts) {
    console.log('🔤 Converting fonts to data URIs...');
    await convertFontsToDataUri();
    console.log('✅ Font conversion complete');
  }
  
  // ... continue with build ...
}
```

#### 3. Build Process Integration

Add to Vite config or build script:

```typescript
// In vite.config.ts plugin
import { convertFontsToDataUri } from '@make-kits/svs-ui-nova/src/SvsUiNova/scripts/convert-fonts-to-data-uri.js';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'convert-fonts',
      async buildStart() {
        // Run font conversion before build
        await convertFontsToDataUri();
      }
    }
  ]
});
```

---

## Testing the Integration

### Test Case 1: New Project with Fonts

```bash
# 1. Create new Make project using SvsUiNova
# 2. Import Figma frame with custom fonts
# 3. Verify fonts.css contains data URIs:
grep "data:font/woff2;base64," src/styles/fonts.css

# Expected: Should find @font-face declarations with inline data URIs
```

### Test Case 2: Font Rendering

```bash
# 1. Build and run project
npm run build
npm run preview

# 2. Open browser and check:
# - Fonts display correctly
# - No font loading errors in console
# - Network tab shows no failed font requests
```

### Test Case 3: Multiple Font Imports

```bash
# 1. Import multiple fonts (Arena Bold, Plan Medium, Plan Regular)
# 2. Run conversion
npm run fonts:convert

# 3. Verify all fonts are in fonts.css
# Expected: 3 separate @font-face declarations
```

---

## File Structure

After integration, projects using SvsUiNova should have:

```
project/
├── src/
│   ├── imports/
│   │   ├── font-arena-bold.txt      (if fonts imported)
│   │   ├── font-plan-medium.txt     (if fonts imported)
│   │   └── ...
│   └── styles/
│       └── fonts.css                 (contains data URI @font-face declarations)
├── node_modules/
│   └── @make-kits/
│       └── svs-ui-nova/
│           ├── src/SvsUiNova/
│           │   ├── scripts/
│           │   │   ├── convert-fonts-to-data-uri.js  ← The converter
│           │   │   └── README.md
│           │   └── guidelines/
│           │       ├── setup.md                       ← Setup instructions
│           │       ├── FONT_LOADING_FIX.md           ← Technical details
│           │       └── Guidelines.md
│           └── ...
└── package.json
```

---

## Rollback Plan

If issues occur, the fix can be disabled by:

1. **Remove from build process**: Comment out font conversion calls
2. **Revert fonts.css**: Remove data URI declarations, use external references (though this brings back the original problem)
3. **Use system fonts**: Fallback to system fonts temporarily

---

## Performance Considerations

### Bundle Size
- Each font adds ~50-200KB base64 to CSS
- This is expected and acceptable for embedded fonts
- Modern browsers handle inline font data efficiently

### Loading Performance
- `font-display: swap` prevents render blocking
- Data URIs eliminate separate font file requests
- Overall: **No performance degradation, often faster**

---

## Monitoring & Validation

After deployment, monitor for:

- ✅ Font rendering in browser
- ✅ No console errors related to fonts
- ✅ No failed network requests for `.txt` files
- ✅ Proper font families applied to text

---

## Documentation Reference

| Document | Purpose | Audience |
|----------|---------|----------|
| `guidelines/setup.md` | Setup requirements | Auto-loaded by Make Kit |
| `guidelines/FONT_LOADING_FIX.md` | Technical details | Make Kit developers |
| `scripts/README.md` | Script usage | Developers using script |
| `MAKE_KIT_INTEGRATION.md` | Integration guide | Make Kit team (this doc) |

---

## Support & Questions

For questions about this integration:

1. Read `guidelines/FONT_LOADING_FIX.md` for technical details
2. Check `scripts/README.md` for script usage
3. Review example output in `src/styles/fonts.css` of this project

---

## Checklist for Make Kit Team

- [ ] Add font detection logic to import handler
- [ ] Integrate `convertFontsToDataUri()` after font imports
- [ ] Add pre-build hook to run conversion
- [ ] Test with new project creation
- [ ] Test with multiple font imports
- [ ] Verify fonts render correctly in browser
- [ ] Document in Make Kit user guide
- [ ] Add to release notes

---

**Status**: Ready for implementation  
**Priority**: High - affects all projects using custom fonts  
**Impact**: Ensures reliable font loading in all Figma Make projects using SvsUiNova  
**Effort**: Low - script ready, integration points identified
