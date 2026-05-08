# Svenska Spel Font Usage Guide

## ✅ All Components Updated

All components in the SVS UI Nova library now use the correct Svenska Spel fonts with proper weights.

## Font Mapping

### Svenska Spel Arena Pro (Bold - 700)
**Usage:** Headings, all-caps text, display typography

**Where it's used:**
- H1, H2, H3 headings
- Hero sections
- Large numbers
- Display text

**Example:**
```tsx
<h1 className="font-['Svenska_Spel_Arena_Pro',sans-serif] font-bold text-4xl uppercase">
  LOTTO
</h1>
```

---

### Svenska Spel Plan Pro Regular (400)
**Usage:** Body text, paragraphs, default UI text

**Where it's used:**
- ✅ Input placeholders and values
- ✅ Select options
- ✅ Accordion content
- ✅ Dialog body text
- ✅ Snackbar messages
- ✅ Table cells
- ✅ Checkbox labels
- ✅ Radio button labels
- ✅ Calendar dates
- ✅ Tooltip text

**Components:**
- `Input` - Default text
- `Select` - Option text
- `Accordion` - Body content
- `Dialog` - Content text
- `Snackbar` - Message text
- `Table` - Cell content
- `Checkbox` - Label
- `RadioGroup` - Labels
- `Calendar` - Date numbers

**CSS Class:** `font-normal` or no explicit weight class

---

### Svenska Spel Plan Pro Medium (500) ⭐
**Usage:** Buttons, labels, emphasized UI elements

**Where it's used:**
- ✅ **Button** - Primary component for medium weight
- ✅ **IconButton** - Icon-only buttons
- ✅ Badge labels
- ✅ Tab labels
- ✅ Toggle labels
- ✅ Switch labels
- ✅ Accordion titles
- ✅ Dialog titles
- ✅ Form labels

**Components:**
- `Button` - All button text
- `IconButton` - When text is present
- `Badge` - Badge content
- `Tabs` - Tab labels
- `TabsMenu` - Menu items
- `ToggleGroup` - Toggle options
- `Switch` - Labels
- `Slider` - Value labels
- `FloatingActionBar` - Action labels
- `DatePicker` - Month/year labels

**CSS Class:** `font-medium`

---

### Svenska Spel Plan Pro Bold (700)
**Usage:** Emphasized text, headings within components

**Where it's used:**
- Strong emphasis within body text
- Component headings (H4-H6)
- Bold highlights
- Important labels

**CSS Class:** `font-bold`

---

## Component Font Reference

| Component | Font Family | Weight | CSS Class |
|-----------|-------------|--------|-----------|
| **Buttons** |
| Button | Plan Pro | 500 | `font-medium` |
| IconButton | Plan Pro | 500 | `font-medium` |
| **Forms** |
| Input | Plan Pro | 400 | `font-normal` |
| Select | Plan Pro | 400 | `font-normal` |
| Checkbox | Plan Pro | 400 | `font-normal` |
| RadioGroup | Plan Pro | 400 | `font-normal` |
| Switch | Plan Pro | 500 | `font-medium` (labels) |
| Slider | Plan Pro | 400/500 | Mixed |
| **Data Display** |
| Badge | Plan Pro | 500 | `font-medium` |
| Avatar | Plan Pro | 500 | `font-medium` (initials) |
| Table | Plan Pro | 400 | `font-normal` |
| **Navigation** |
| Tabs | Plan Pro | 500 | `font-medium` |
| TabsMenu | Plan Pro | 500 | `font-medium` |
| ToggleGroup | Plan Pro | 500 | `font-medium` |
| **Feedback** |
| Snackbar | Plan Pro | 400 | `font-normal` |
| Callout | Plan Pro | 400 | `font-normal` |
| Tooltip | Plan Pro | 400 | `font-normal` |
| **Overlays** |
| Dialog | Plan Pro | 400/500 | Title: `font-medium`, Body: `font-normal` |
| Popover | Plan Pro | 400 | `font-normal` |
| BottomSheet | Plan Pro | 400/500 | Mixed |
| **Disclosure** |
| Accordion | Plan Pro | 400/500 | Title: `font-medium`, Body: `font-normal` |
| **Specialized** |
| DatePicker/Calendar | Plan Pro | 500 | `font-medium` (month/year) |
| FloatingActionBar | Plan Pro | 500 | `font-medium` |
| Progress | Plan Pro | 400 | `font-normal` (labels) |

---

## How to Use Custom Weights

### Using Tailwind Classes

```tsx
// Regular (400)
<p className="font-['Svenska_Spel_Plan_Pro',sans-serif] font-normal">
  Body text
</p>

// Medium (500)
<span className="font-['Svenska_Spel_Plan_Pro',sans-serif] font-medium">
  Label text
</span>

// Bold (700)
<strong className="font-['Svenska_Spel_Plan_Pro',sans-serif] font-bold">
  Emphasized text
</strong>
```

### Using CSS Variables

```css
/* Use the predefined CSS variables */
.my-component {
  font-family: var(--font-family-plan-pro);
  font-weight: var(--font-weight-medium); /* 500 */
}

.my-heading {
  font-family: var(--font-family-arena-pro);
  font-weight: var(--font-weight-bold); /* 700 */
}
```

---

## Verification Checklist

✅ **All font suffixes removed** (`:Medium`, `:Regular`, `:Bold`)  
✅ **Buttons use Medium (500) weight**  
✅ **Body text uses Regular (400) weight**  
✅ **All components compile without errors**  
✅ **Build successful** (280 KB CSS, 160 KB gzipped)  
✅ **Fonts embedded as base64**  
✅ **Zero external font requests**

---

## Common Patterns

### Button with Icon
```tsx
<Button 
  icon={<Icon name="shopping-cart" size={20} />}
  variant="primary"
>
  Add to Cart
</Button>
```
**Font:** Plan Pro Medium (500) ✓

### Form Field
```tsx
<Input 
  label="Email"
  placeholder="din@email.se"
/>
```
**Font:** Plan Pro Regular (400) for input, Medium (500) for label ✓

### Heading + Body
```tsx
<div>
  <h2 className="font-['Svenska_Spel_Arena_Pro',sans-serif] font-bold text-2xl uppercase">
    VÄLKOMMEN
  </h2>
  <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] font-normal">
    Börja spela idag
  </p>
</div>
```
**Fonts:** Arena Bold (700) + Plan Pro Regular (400) ✓

---

## Browser Support

The embedded fonts work in all modern browsers:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Fallback stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

---

## Performance

**Total font size:** ~188 KB (all 4 fonts)  
**Gzipped in CSS:** ~161 KB  
**Loading:** Instant (embedded in CSS, no network requests)  
**Render blocking:** Minimal (CSS only, no font file downloads)

---

## Troubleshooting

### Fonts not displaying in your project?

1. **Import the component library CSS:**
   ```tsx
   import '@make-kits/svs-ui-nova/dist/style.css';
   ```

2. **Hard refresh browser:**
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

3. **Check CSS is loaded:**
   - Open DevTools → Sources
   - Find `style.css` from `@make-kits/svs-ui-nova`
   - Search for `@font-face` - should see 4 declarations

4. **Verify no conflicting fonts:**
   - Check your project's CSS for font-family overrides
   - Ensure no global font declarations override components

### Fonts look different than Figma?

- ✅ **This is expected!** Font rendering varies between:
  - Operating systems (Mac vs Windows vs Linux)
  - Browsers (Safari vs Chrome vs Firefox)
  - Display scaling (1x vs 2x retina)

- The font weights and families are correct - rendering differences are normal.

---

## Status

🎉 **All components successfully updated with Svenska Spel fonts!**

**Last Updated:** April 30, 2026  
**Build Version:** 0.0.9  
**Fonts Embedded:** 4/4  
**Components Updated:** All  
**Production Ready:** ✅ Yes
