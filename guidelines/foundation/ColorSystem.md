# Color System

The Svenska Spel design system uses a semantic color system that translates
brand expression into consistent UI behavior across products, themes, and
modes.

---

## Introduction

The color system is not a flat palette. It is a mapping model.

Product and brand colors are first translated into a functional palette, then
mapped into semantic tokens, and finally consumed by components and states.
This keeps the system expressive for each product while still giving teams a
stable structure to design and build against.

**Core Principles:**
- Semantic naming for clear intent
- Product expression through mapping, not hard-coded component color choices
- Structural surfaces and layers, not only accent colors
- Stateful tokens for interactive behavior
- Parent theme plus product-specific extensions
- Accessible contrast ratios
- Scalable, governable architecture

---

## Architecture of the Color System

The system follows a four-step logic:

1. **Products & brands**
2. **Functional color mapping**
3. **Semantic token groups**
4. **Component and state usage**

This is implemented in Figma through a parent-and-extension collection model:

### 1. Primitive Colors

Concrete product-oriented color families such as `Svs/Core/*`, `Bingo/Core/*`,
or `Poker/Amber/*`.

These are the raw ingredients for theming, not the values components should
consume directly.

### 2. Token Layer

Semantic tokens that describe UI roles such as:

- `Accent`
- `Status`
- `Surface`
- `Surface Inverted`
- `Layer`
- `Layer Inverted`
- `Stroke`
- `Components`

This is the operational layer of the color system.

### 3. Component Tokens
Component-specific tokens that reference semantic tokens.

### 4. Theme and Mode Layer

The `Svenska Spel` collection acts as the parent semantic theme. Product theme
collections such as `Bingo`, `Casino`, or `Keno` reuse the same semantic
structure and override selected mappings into product-specific primitives.

The same semantic system is then expressed through four modes:

- `Light`
- `Light Secondary`
- `Dark`
- `Vibrant`

For a fuller breakdown of the Figma collection model and alias flow, see
[ColorTokenArchitecture.md](./ColorTokenArchitecture.md).

---

## Themes and Modes

The design system uses **product themes** and **visual modes**.

### Product Themes

Product themes determine how a product's brand expression is mapped into the
shared semantic color structure.

Examples:
- `Svenska Spel`
- `Bingo`
- `Casino`
- `Oddset`
- `Triss`

Each product keeps the same semantic model, but can override selected mappings
to create a distinct visual expression.

### Visual Modes

Modes change how the semantic system is expressed without changing the
underlying semantic roles.

Supported modes:
- `Light`
- `Light Secondary`
- `Dark`
- `Vibrant`

This means a token such as `Surface`, `Layer`, or `Accent Primary` keeps its
job even when the rendered color value changes.

### Compact and Relaxed UI Density

Compact and relaxed should be understood as **UI density patterns**, not as the
main color architecture.

#### Compact
- Tighter spacing and smaller components
- Higher information density
- Suitable for data-heavy interfaces
- Desktop-optimized experiences

#### Relaxed
- More generous spacing
- Larger touch targets
- Better readability
- Mobile-first experiences

**Note:** Color tokens remain semantically consistent across density patterns.

---

## Structural Surfaces and Layers

The system uses color to build structure, not only brand emphasis.

One of the key distinctions is between **Surface** and **Layer**:

- `Surface` establishes the main visual planes of the interface
- `Layer` introduces contained structure on top of those planes
- foreground tokens are paired with the structural context they sit on

This creates a readable stacking model:

1. base
2. surface
3. layer
4. foreground
5. accent or action

### Surface Hierarchy

Surfaces create depth and hierarchy through layered backgrounds.

Typical roles include:

- `base`
- `standard`
- `elevated`
- inverted equivalents where needed

Foreground pairs commonly include:

- `surface-fg`
- `surface-fg-muted`
- `inverted-surface-fg`
- `inverted-surface-fg-muted`

### Layer Hierarchy

Layers sit on top of surfaces and provide structured contrast.

Typical roles include:

- `neutral`
- `contrast-on-base`
- `contrast-on-surface`

Foreground pairs commonly include:

- `layers-fg`
- `layers-fg-muted`

This structure is especially useful in dense interfaces where hierarchy needs
to remain clear across products and modes.

---

## Modes

### Light
- Default mode for most experiences
- High contrast with dark text on light backgrounds
- Optimized for well-lit environments
- Better for reading-heavy content

### Light Secondary
- Secondary light expression within the same semantic model
- Useful when product tone needs to soften or shift while staying light-based
- Keeps the same semantic relationships as Light

### Dark
- Reduced eye strain in low-light environments
- Light foregrounds on dark structural layers
- Preserves semantic hierarchy with inverted visual balance

### Vibrant
- Higher brand expression and stronger accent presence
- Commonly introduces more product-specific overrides
- Still relies on the same semantic token contract

---

## Semantic Color Tokens

### Accent Colors

Accent tokens handle product expression, primary actions, and high-emphasis UI
moments.

Common roles include:
- primary
- primary fg
- primary variant
- secondary
- tertiary variants where needed

Accent tokens are usually stateful.

Typical states:
- rest
- hover
- pressed
- selected

**Example usage:**
- primary CTAs
- selected states
- brand-signature moments
- high-priority interactive emphasis

---

### Status Colors

Status tokens communicate meaning, not branding.

Typical roles:
- success
- warning
- error
- info

Use them for:
- confirmation and completion
- caution
- validation failures
- neutral guidance and messaging

---

### Surface Colors

Surface tokens define the main visual planes of the UI.

Use them for:
- page backgrounds
- cards and panels
- elevated containers
- inverted contexts

---

### Layer Colors

Layer tokens define contained elements that sit on top of surfaces.

Use them for:
- grouped content areas
- emphasis blocks
- contrast containers
- overlays and structured clusters

---

### Stroke Colors

Stroke tokens define structural boundaries.

Use them for:
- borders
- dividers
- outlines
- stronger emphasis edges and focus-adjacent structure

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
