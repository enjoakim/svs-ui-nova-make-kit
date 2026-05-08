# Color System

The Svenska Spel design system uses a comprehensive color system built on semantic tokens, supporting both light and dark modes with consistent surfaces, contrasts, and accessibility standards.

---

## Introduction

The color system provides a structured approach to color usage across all digital products. It's built on design tokens that adapt to different themes and modes while maintaining visual consistency and accessibility.

**Core Principles:**
- Semantic naming for clear intent
- Theme and mode support (light/dark)
- Accessible contrast ratios
- Consistent surface hierarchy
- Scalable and maintainable

---

## Architecture of the Color System

The color system is organized in layers from primitive values to semantic tokens:

### 1. Primitive Colors
Raw color values (HEX, RGB) that form the foundation of the system.

### 2. Token Layer
Semantic tokens that reference primitive colors and provide meaning.

### 3. Component Tokens
Component-specific tokens that reference semantic tokens.

### 4. Theme Layer
Theme variations (compact, relaxed) that modify token values.

### 5. Mode Layer
Light and dark mode adaptations.

---

## Themes

The design system supports two theme variants that affect spacing, sizing, and color application:

### Compact Theme
- Tighter spacing and smaller components
- Higher information density
- Suitable for data-heavy interfaces
- Desktop-optimized experiences

### Relaxed Theme
- More generous spacing
- Larger touch targets
- Better readability
- Mobile-first experiences

**Note:** Color tokens remain consistent across themes, but their application context may vary.

---

## Modes

### Light Mode
- Default mode for most experiences
- High contrast with dark text on light backgrounds
- Optimized for well-lit environments
- Better for reading-heavy content

**Base Surface:**
- Background: `#FFFFFF` (White) or `#FAF6F3` (Beige Light)
- Text: `#1B1918` (Black)
- High contrast for readability

---

### Dark Mode
- Reduced eye strain in low-light environments
- Lower contrast with light text on dark backgrounds
- Energy efficient on OLED displays
- Modern aesthetic

**Base Surface:**
- Background: `#1B1918` (Black)
- Text: `#FFFFFF` (White)
- Adjusted contrast for comfort

---

## Surface and Contrast

### Surface Hierarchy

Surfaces create depth and hierarchy in the interface through layered backgrounds:

**Level 0 - Base Surface:**
- The foundation layer
- Light mode: `#FFFFFF` or `#FAF6F3`
- Dark mode: `#1B1918`
- Used for: Page backgrounds

**Level 1 - Elevated Surface:**
- Cards and containers
- Light mode: `#FAF6F3` or `#E5DFDA`
- Dark mode: Lighter than base (subtle variation)
- Used for: Cards, panels, modals

**Level 2 - Higher Elevation:**
- Dialogs and overlays
- Light mode: `#FFFFFF`
- Dark mode: Further lightened
- Used for: Floating elements, tooltips

**Level 3 - Highest Elevation:**
- Top-most elements
- Light mode: `#FFFFFF`
- Dark mode: Maximum lightness variation
- Used for: Dropdowns, menus

---

### Contrast Levels

The system defines contrast tokens for text and UI elements:

**Primary Contrast:**
- Highest contrast for primary content
- Light mode: `#1B1918` (Black)
- Dark mode: `#FFFFFF` (White)
- Used for: Headings, body text, important content

**Secondary Contrast:**
- Medium contrast for supporting content
- Light mode: `rgba(27, 25, 24, 0.7)` (70% opacity)
- Dark mode: `rgba(255, 255, 255, 0.7)`
- Used for: Helper text, labels, secondary information

**Tertiary Contrast:**
- Low contrast for subtle elements
- Light mode: `rgba(27, 25, 24, 0.4)` (40% opacity)
- Dark mode: `rgba(255, 255, 255, 0.4)`
- Used for: Placeholders, disabled states, dividers

---

## Semantic Color Tokens

### Accent Colors

**Primary Accent:**
- Token: `--color/accent/primary/bg/rest`
- Value: `#ED0000` (Svenska Spel Red)
- Usage: Primary CTAs, brand moments, key actions
- States: rest, hover, active, disabled

**Secondary Accent:**
- Token: `--color/accent/secondary/bg/rest`
- Value: `#A20020` (Dark Red 1)
- Usage: Secondary actions, hover states
- States: rest, hover, active, disabled

---

### Status Colors

**Success:**
- Token: `--color/status/success/bg`
- Value: `#00823D` (Green)
- Usage: Success messages, confirmations, positive states

**Warning:**
- Token: `--color/status/warning/bg`
- Value: Orange/Yellow tones
- Usage: Warning messages, caution states

**Error:**
- Token: `--color/status/error/bg`
- Value: `#ED0000` (Red)
- Usage: Error messages, validation failures, destructive actions

**Info:**
- Token: `--color/status/info/bg`
- Value: `#0071DB` (Blue)
- Usage: Informational messages, neutral notifications

---

### Surface Colors

**Base Surface:**
- Token: `--color/surface/base/bg/rest`
- Light: `#FFFFFF` or `#FAF6F3`
- Dark: `#1B1918`
- Usage: Page background, foundation layer

**Elevated Surface:**
- Token: `--color/surface/elevated/bg/rest`
- Light: `#FAF6F3` or `#E5DFDA`
- Dark: Subtle lighter variation
- Usage: Cards, containers, panels

**Overlay:**
- Token: `--color/surface/overlay/bg`
- Value: `rgba(27, 25, 24, 0.5)` (50% opacity)
- Usage: Modal backdrops, scrim layers

---

### Stroke Colors

**Default Stroke:**
- Token: `--color/stroke/default`
- Light: `#E5DFDA`
- Dark: Subtle lighter variation
- Usage: Borders, dividers, outlines

**Strong Stroke:**
- Token: `--color/stroke/strong`
- Light: `#1B1918`
- Dark: `#FFFFFF`
- Usage: Emphasized borders, focus rings

**Subtle Stroke:**
- Token: `--color/stroke/subtle`
- Light: `rgba(27, 25, 24, 0.1)`
- Dark: `rgba(255, 255, 255, 0.1)`
- Usage: Light dividers, subtle separations

---

## Business Area Colors

### Sport & Casino
- Token: `--color/business/sport-casino`
- Value: `#0071DB` (Blue)
- Usage: Sport & Casino category identification
- Application: Headers, tabs, icons, category indicators

### Turspel (Lottery)
- Token: `--color/business/turspel`
- Value: `#00823D` (Green)
- Usage: Turspel category identification
- Application: Headers, tabs, icons, category indicators

**Important:** Business colors are for category differentiation only, not for primary CTAs or interactions.

---

## Color States

Interactive elements have multiple states with corresponding color tokens:

### Rest State
- Default, uninteracted state
- Token pattern: `--color/*/rest`
- Full color saturation

### Hover State
- Mouse cursor over element
- Token pattern: `--color/*/hover`
- Typically darker or more saturated

### Active/Pressed State
- Element being clicked/activated
- Token pattern: `--color/*/active`
- Darkest or most saturated variant

### Focus State
- Keyboard focus on element
- Token pattern: `--color/*/focus`
- Often uses accent color ring

### Disabled State
- Element not interactive
- Token pattern: `--color/*/disabled`
- Reduced opacity or desaturated

---

## Opacity and Overlays

### Scrim/Backdrop
- Used behind modals, dialogs, drawers
- Value: `rgba(27, 25, 24, 0.5)` (50% black)
- Creates focus by dimming background

### Surface Overlays
- Subtle overlays on surfaces
- Values: 5%, 10%, 20% opacity
- Creates depth and elevation

### Interaction Overlays
- Hover and active state overlays
- Values: 5-10% accent color
- Provides visual feedback

---

## Color Usage Guidelines

### Do's

**Semantic Tokens:**
- ✓ Always use semantic tokens (not primitive colors)
- ✓ Reference tokens by their meaning, not appearance
- ✓ Use appropriate state tokens (rest, hover, active)
- ✓ Respect surface hierarchy
- ✓ Maintain contrast ratios

**Accessibility:**
- ✓ Meet WCAG AA standards minimum (4.5:1 for text)
- ✓ Test in both light and dark modes
- ✓ Don't rely on color alone for meaning
- ✓ Verify all interactive states

**Consistency:**
- ✓ Use accent colors for primary actions
- ✓ Use status colors appropriately
- ✓ Maintain surface hierarchy
- ✓ Follow business color guidelines

---

### Don'ts

**Anti-Patterns:**
- ✗ Don't use hex values directly in components
- ✗ Don't create custom colors outside the system
- ✗ Don't mix business colors for CTAs
- ✗ Don't use status colors decoratively
- ✗ Don't ignore state tokens

**Accessibility:**
- ✗ Don't use insufficient contrast
- ✗ Don't rely on color alone for information
- ✗ Don't forget to test dark mode
- ✗ Don't use primary red for large text areas

---

## Implementation

### CSS Custom Properties

All color tokens are available as CSS custom properties in `/src/SvsUiNova/styles.css`:

```css
/* Accent Colors */
--color/accent/primary/bg/rest: #ED0000;
--color/accent/primary/bg/hover: #A20020;
--color/accent/primary/bg/active: #62001D;

/* Surface Colors */
--color/surface/base/bg/rest: #FFFFFF;
--color/surface/elevated/bg/rest: #FAF6F3;

/* Text Colors */
--color/text/primary: #1B1918;
--color/text/secondary: rgba(27, 25, 24, 0.7);
--color/text/tertiary: rgba(27, 25, 24, 0.4);

/* Status Colors */
--color/status/success/bg: #00823D;
--color/status/error/bg: #ED0000;
--color/status/info/bg: #0071DB;

/* Stroke Colors */
--color/stroke/default: #E5DFDA;
--color/stroke/strong: #1B1918;
```

---

### Token Naming Convention

Tokens follow a structured naming pattern:

```
--color / category / role / property / state
```

**Examples:**
- `--color/accent/primary/bg/rest` - Primary accent background at rest
- `--color/surface/base/bg/rest` - Base surface background at rest
- `--color/text/primary` - Primary text color (no state)
- `--color/status/error/text` - Error status text color

**Categories:**
- `accent` - Brand accent colors
- `surface` - Background surfaces
- `text` - Text colors
- `stroke` - Border and outline colors
- `status` - Status indicator colors
- `business` - Business area colors

**Properties:**
- `bg` - Background
- `text` - Text/foreground
- `border` - Border color
- `icon` - Icon color

**States:**
- `rest` - Default state
- `hover` - Hover state
- `active` - Active/pressed state
- `focus` - Focus state
- `disabled` - Disabled state

---

## Dark Mode Implementation

### Automatic Adaptation

The color system automatically adapts to dark mode through CSS custom properties:

```css
/* Light mode (default) */
:root {
  --color/surface/base/bg/rest: #FFFFFF;
  --color/text/primary: #1B1918;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color/surface/base/bg/rest: #1B1918;
    --color/text/primary: #FFFFFF;
  }
}
```

### Manual Dark Mode Toggle

Support for manual dark mode switching:

```css
[data-theme="dark"] {
  --color/surface/base/bg/rest: #1B1918;
  --color/text/primary: #FFFFFF;
}
```

---

## Accessibility Considerations

### Contrast Ratios

**WCAG AA Standards:**
- Normal text (< 18pt): 4.5:1 minimum
- Large text (≥ 18pt): 3:1 minimum
- UI components: 3:1 minimum

**Our Standards:**
- Black on White: 19.37:1 ✓ AAA
- Black on Beige Light: 18.23:1 ✓ AAA
- White on Primary Red: 3.99:1 ✓ AA Large
- White on Dark Red 1: 7.36:1 ✓ AAA
- White on Dark Red 2: 12.85:1 ✓ AAA

### Color Blindness

**Considerations:**
- Don't rely on color alone for information
- Use icons, labels, or patterns alongside color
- Test with color blindness simulators
- Ensure sufficient contrast regardless of hue

**Status Indicators:**
- Success: Green + checkmark icon
- Error: Red + X icon or error text
- Warning: Yellow/Orange + warning icon
- Info: Blue + info icon

---

## Migration Guide

### From Hard-Coded Colors

**Before:**
```css
.button {
  background-color: #ED0000;
  color: #FFFFFF;
}
```

**After:**
```css
.button {
  background-color: var(--color/accent/primary/bg/rest);
  color: var(--color/accent/primary/text);
}
```

### From Old Token System

**Before:**
```css
.card {
  background: var(--bg-surface-01);
  border: 1px solid var(--border-default);
}
```

**After:**
```css
.card {
  background: var(--color/surface/elevated/bg/rest);
  border: 1px solid var(--color/stroke/default);
}
```

---

## Color Token Reference

### Complete Token List

Refer to `/src/SvsUiNova/styles.css` for the complete list of available color tokens.

**Categories:**
- Accent (primary, secondary)
- Surface (base, elevated, overlay)
- Text (primary, secondary, tertiary)
- Stroke (default, strong, subtle)
- Status (success, error, warning, info)
- Business (sport-casino, turspel)

---

## Best Practices

### Component Development

**Always:**
1. Use semantic tokens, never hard-coded colors
2. Support both light and dark modes
3. Include all interactive states (rest, hover, active, focus, disabled)
4. Verify contrast ratios
5. Test with color blindness simulators

**Component Example:**
```tsx
<button
  className="
    bg-[var(--color/accent/primary/bg/rest)]
    hover:bg-[var(--color/accent/primary/bg/hover)]
    active:bg-[var(--color/accent/primary/bg/active)]
    text-[var(--color/accent/primary/text)]
    disabled:bg-[var(--color/accent/primary/bg/disabled)]
  "
>
  Click Me
</button>
```

---

## Testing

### Color System Testing

**Checklist:**
- ✓ Tokens resolve correctly in light mode
- ✓ Tokens resolve correctly in dark mode
- ✓ All interactive states are visually distinct
- ✓ Contrast ratios meet WCAG AA minimum
- ✓ Color blindness simulation passes
- ✓ Business colors are used appropriately
- ✓ Status colors convey clear meaning

### Tools

**Browser DevTools:**
- Inspect computed CSS custom properties
- Verify contrast ratios
- Toggle prefers-color-scheme

**External Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Color blindness simulators
- Accessibility audit tools (aXe, Lighthouse)

---

## Summary

**Key Principles:**
1. Use semantic tokens for all color application
2. Support light and dark modes
3. Maintain accessible contrast ratios
4. Follow surface hierarchy
5. Use state tokens for interactions
6. Business colors for category identification only
7. Status colors for meaningful feedback

**Token Structure:**
- Category / Role / Property / State
- Example: `--color/accent/primary/bg/rest`

**Modes:**
- Light mode: High contrast, white/beige surfaces
- Dark mode: Reduced contrast, black surfaces

**Accessibility:**
- WCAG AA minimum, AAA where possible
- Don't rely on color alone
- Test with assistive technologies

---

## Related Topics

- [Color](../brands/Color.md) - Brand color palette and values
- [Accessibility](./Accessibility.md) - Accessibility guidelines and contrast requirements
- [Button Component](../components/Button.md) - Button color implementation
- [Input Component](../components/Input.md) - Form input color states

---

## Reference Implementation

Technical implementation: `/src/SvsUiNova/styles.css`
Imported Figma frame: `src/imports/ColorSystem/ColorSystem.tsx`
