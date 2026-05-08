# Font Loading Fix for Figma Make Kit

## Problem Summary

When importing custom fonts from Figma as `.txt` files containing base64-encoded WOFF2 data, they don't load properly when referenced as external file URLs in `@font-face` declarations.

## Root Cause

The Figma Make environment doesn't support loading fonts from external `.txt` file references. Browsers expect font files to be served with proper MIME types, but `.txt` files are served as `text/plain`, causing font loading to fail.

## Solution

Embed the base64 font data directly as data URIs in the `@font-face` declarations instead of referencing external files.

## Technical Implementation

### Step 1: Read Font Data from Imported Files

When fonts are imported from Figma, they arrive as `.txt` files in `src/imports/` containing base64-encoded WOFF2 data:

```
src/imports/font-arena-bold.txt
src/imports/font-plan-medium.txt
```

### Step 2: Convert to Inline Data URIs

The Make Kit infrastructure should:

1. Detect font `.txt` files in `src/imports/`
2. Read the base64 content from each file
3. Generate `@font-face` declarations in `/src/styles/fonts.css` with inline data URIs

### Example Transformation

**Input File** (`src/imports/font-arena-bold.txt`):
```
d09GMgABAAAAAIyUABEAAAABilQAAIwwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoFO...
```

**Output CSS** (`/src/styles/fonts.css`):
```css
@font-face {
  font-family: 'Svenska Spel Arena Pro';
  src: url('data:font/woff2;base64,d09GMgABAAAAAIyUABEAAAABilQAAIwwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoFO...') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Implementation Checklist

For the Make Kit infrastructure team:

- [ ] Add font detection logic to identify `.txt` files containing font data
- [ ] Create font parsing utility to read base64 content
- [ ] Generate `@font-face` declarations with inline data URIs
- [ ] Map font filenames to proper font-family names and weights:
  - Arena Bold → `font-family: 'Svenska Spel Arena Pro'`, `font-weight: 700`
  - Plan Medium → `font-family: 'Svenska Spel Plan Pro'`, `font-weight: 500`
  - Plan Regular → `font-family: 'Svenska Spel Plan Pro'`, `font-weight: 400`
- [ ] Ensure fonts are added to TOP of `/src/styles/fonts.css`
- [ ] Include `font-display: swap` for performance
- [ ] Remove or ignore external file references

## Code Example (Pseudocode)

```typescript
// Font loading utility for Make Kit infrastructure
async function processFontImports(importDir: string, outputCssPath: string) {
  const fontFiles = await findFiles(importDir, '*.txt');
  const fontFaces: string[] = [];
  
  for (const fontFile of fontFiles) {
    const base64Data = await readFile(fontFile, 'utf-8');
    const fontMetadata = parseFontFilename(fontFile);
    
    const fontFace = `
@font-face {
  font-family: '${fontMetadata.family}';
  src: url('data:font/woff2;base64,${base64Data}') format('woff2');
  font-weight: ${fontMetadata.weight};
  font-style: normal;
  font-display: swap;
}`;
    
    fontFaces.push(fontFace);
  }
  
  // Prepend to existing fonts.css or create new
  const existingCss = await readFile(outputCssPath, 'utf-8').catch(() => '');
  const newCss = fontFaces.join('\n') + '\n\n' + existingCss;
  await writeFile(outputCssPath, newCss);
}

function parseFontFilename(filename: string) {
  // Extract font metadata from filename
  // Examples: 
  //   "font-arena-bold.txt" → { family: "Svenska Spel Arena Pro", weight: 700 }
  //   "font-plan-medium.txt" → { family: "Svenska Spel Plan Pro", weight: 500 }
  
  if (filename.includes('arena') && filename.includes('bold')) {
    return { family: 'Svenska Spel Arena Pro', weight: 700 };
  }
  if (filename.includes('plan') && filename.includes('medium')) {
    return { family: 'Svenska Spel Plan Pro', weight: 500 };
  }
  if (filename.includes('plan') && filename.includes('regular')) {
    return { family: 'Svenska Spel Plan Pro', weight: 400 };
  }
  
  // Default fallback
  return { family: 'Custom Font', weight: 400 };
}
```

## Testing

After implementation, verify:

1. **Check generated CSS**: `@font-face` declarations should use `data:font/woff2;base64,` URLs
2. **No external references**: No `url('../imports/...')` references should exist
3. **Font rendering**: Svenska Spel fonts should display correctly in browser
4. **Console errors**: No font loading errors in browser console

## Benefits

- ✅ Fonts load reliably every time
- ✅ No CORS or MIME type issues
- ✅ Self-contained CSS file
- ✅ Better performance with `font-display: swap`
- ✅ Works in all Figma Make environments

## Notes

- This fix must be applied at **build/compile time**, not runtime
- Font data URIs can be large (~50-200KB base64), which is expected
- Modern browsers handle inline font data URIs efficiently
- This approach is standard for embedded font delivery

---

**Status**: Ready for Make Kit infrastructure team implementation  
**Priority**: High - affects all projects using custom fonts  
**Impact**: Ensures font loading works correctly in all new Figma Make projects
