# SvsUiNova Design System Setup

This file contains critical setup instructions that must be executed when installing the SvsUiNova design system in a new Figma Make project.

## Font Loading Configuration

**CRITICAL**: Custom fonts imported from Figma as `.txt` files containing base64-encoded WOFF2 data must be converted to inline data URIs in `@font-face` declarations. File-based font loading fails in the Make environment.

### Required Actions

When fonts are imported from Figma, the Make Kit infrastructure must:

1. **Detect font imports**: Look for `.txt` files in `src/imports/` that contain base64-encoded font data
2. **Read font data**: Extract the base64 content from each `.txt` file
3. **Generate inline data URIs**: Create `@font-face` declarations in `/src/styles/fonts.css` using the format:

```css
@font-face {
  font-family: 'Font Name';
  src: url('data:font/woff2;base64,<BASE64_DATA_HERE>') format('woff2');
  font-weight: <WEIGHT>;
  font-style: normal;
  font-display: swap;
}
```

### Font Weight Mapping

For Svenska Spel fonts, use these weight mappings:
- **Svenska Spel Arena Pro Bold**: `font-weight: 700`
- **Svenska Spel Plan Pro Medium**: `font-weight: 500`
- **Svenska Spel Plan Pro Regular**: `font-weight: 400`

### What Does NOT Work

❌ **INCORRECT** - External file references fail:
```css
@font-face {
  font-family: 'Arena Pro';
  src: url('../imports/font-arena-bold.txt') format('woff2');
  font-weight: 700;
}
```

✅ **CORRECT** - Inline data URIs work:
```css
@font-face {
  font-family: 'Svenska Spel Arena Pro';
  src: url('data:font/woff2;base64,d09GMgABAAAAAIyU...') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Implementation Notes

- Font imports must be added to the TOP of `/src/styles/fonts.css`
- Include `font-display: swap` for better loading performance
- Do NOT create separate font files - embed directly as data URIs
- Ensure font-weight values match the actual font file (Bold=700, Medium=500, Regular=400)

## Verification

After setup, verify fonts are loading by:
1. Checking that `@font-face` declarations in `/src/styles/fonts.css` use `data:font/woff2;base64,` URLs
2. Confirming no external file references like `url('../imports/...')`
3. Testing that Svenska Spel fonts render correctly in the browser

---

**For Make Kit Infrastructure Team**: This setup must be executed automatically when the SvsUiNova package is installed in a new Make project. The font conversion should happen at build/compile time, not runtime.
