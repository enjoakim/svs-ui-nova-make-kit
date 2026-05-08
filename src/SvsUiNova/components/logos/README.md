# Svenska Spel Logos

Official Svenska Spel brand logos and symbols for the SvS UI Nova design system.

## Available Logos

### 1. SvenskaSpelLogoHorizontalTwoRows
Two-row horizontal logo (standard and inverted variants)

**Usage:**
```tsx
import { SvenskaSpelLogoHorizontalTwoRows } from '@/SvsUiNova/components';

// Default (dark text)
<SvenskaSpelLogoHorizontalTwoRows className="h-20" />

// Inverted (white text)
<SvenskaSpelLogoHorizontalTwoRows inverted className="h-20" />
```

**Aspect Ratio:** ~2.8:1 (391.3 x 140)

---

### 2. SvenskaSpelLogoLayered
Layered logo with stacked text (standard and inverted variants)

**Usage:**
```tsx
import { SvenskaSpelLogoLayered } from '@/SvsUiNova/components';

// Default (dark text)
<SvenskaSpelLogoLayered className="h-20" />

// Inverted (white text)
<SvenskaSpelLogoLayered inverted className="h-20" />
```

**Aspect Ratio:** ~1.98:1 (277.6 x 140)

---

### 3. SvenskaSpelLogoVertical
Vertical stacked logo (standard and inverted variants)

**Usage:**
```tsx
import { SvenskaSpelLogoVertical } from '@/SvsUiNova/components';

// Default (dark text)
<SvenskaSpelLogoVertical className="h-32" />

// Inverted (white text)
<SvenskaSpelLogoVertical inverted className="h-32" />
```

**Aspect Ratio:** ~1.32:1 (264.8 x 200)

---

### 4. SvenskaSpelLogoHorizontal
Single-line horizontal logo (standard and inverted variants)

**Usage:**
```tsx
import { SvenskaSpelLogoHorizontal } from '@/SvsUiNova/components';

// Default (dark text)
<SvenskaSpelLogoHorizontal className="h-12" />

// Inverted (white text)
<SvenskaSpelLogoHorizontal inverted className="h-12" />
```

**Aspect Ratio:** ~6.5:1 (457 x 70.5)

---

### 5. SvenskaSpelCube
Vinnarkuben cube symbol (no inverted variant)

**Usage:**
```tsx
import { SvenskaSpelCube } from '@/SvsUiNova/components';

<SvenskaSpelCube className="h-24" />
```

**Aspect Ratio:** ~1.05:1 (208.4 x 199.3)

---

## Props

### Common Props (All Logo Components)

All logo components accept standard SVG props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `inverted` | `boolean` | `false` | Use white text variant (not available for Cube) |
| `className` | `string` | - | Tailwind classes for styling |
| All SVG props | - | - | `width`, `height`, `aria-label`, etc. |

**Note:** The `viewBox` prop is managed internally and cannot be overridden.

---

## Usage Guidelines

### When to Use Each Logo

- **HorizontalTwoRows**: Most common, use in headers, footers, and standard placements
- **Layered**: Alternative horizontal format with layered cube
- **Vertical**: Narrow spaces, sidebars, mobile vertical layouts
- **Horizontal**: Compact horizontal spaces, navigation bars
- **Cube**: Symbol-only usage, icons, decorative elements

### Sizing

Control size using Tailwind height classes:
- `className="h-12"` - Small (48px)
- `className="h-16"` - Medium (64px)
- `className="h-20"` - Large (80px)
- `className="h-24"` - Extra Large (96px)

Width automatically adjusts to maintain aspect ratio.

### Color Variants

- **Default**: Use on light backgrounds (white, light gray)
- **Inverted**: Use on dark backgrounds (dark gray, black, colors)

### Accessibility

Always provide `aria-label` for screen readers:

```tsx
<SvenskaSpelLogoHorizontal 
  className="h-12" 
  aria-label="Svenska Spel logotyp"
/>
```

---

## Examples

### Header with Dark Logo
```tsx
<header className="bg-white py-4 px-6">
  <SvenskaSpelLogoHorizontalTwoRows 
    className="h-16" 
    aria-label="Svenska Spel"
  />
</header>
```

### Footer with Inverted Logo
```tsx
<footer className="bg-gray-900 py-8 px-6">
  <SvenskaSpelLogoHorizontal 
    inverted 
    className="h-12" 
    aria-label="Svenska Spel"
  />
</footer>
```

### Sidebar with Vertical Logo
```tsx
<aside className="w-20 bg-white p-4">
  <SvenskaSpelLogoVertical 
    className="h-32 mx-auto" 
    aria-label="Svenska Spel"
  />
</aside>
```

### Cube Symbol as Icon
```tsx
<div className="flex items-center gap-2">
  <SvenskaSpelCube className="h-6" aria-label="Svenska Spel symbol" />
  <span>Vinnarkuben</span>
</div>
```

---

## Technical Details

- All logos are SVG components
- Colors are hardcoded to match Svenska Spel brand guidelines
- No dependencies on external icon libraries
- Fully accessible with proper ARIA support
- TypeScript types included
