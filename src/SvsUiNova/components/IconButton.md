# IconButton Component

Connected to Figma: [SvS UI Nova - Icon Button](https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=7091-29009&m=dev)

## Overview

The IconButton component is a square button containing only an icon, designed for compact interfaces where space is limited or for common actions that users recognize by icon alone.

## API

```typescript
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  icon: React.ReactNode;
  'aria-label': string; // Required for accessibility
  disabled?: boolean;
}
```

## Variants

All variants match the regular Button component but in a square format.

### Primary
- **Background**: `#ed0000` (Brand Red)
- **Icon Color**: White
- **Hover**: `#D10011` (Darker Red)

```tsx
import { Plus } from 'lucide-react'

<IconButton 
  variant="primary"
  icon={<Plus className="w-4 h-4" />}
  aria-label="Lägg till"
/>
```

### Secondary
- **Background**: `#ffd5ce` (Light Pink)
- **Icon Color**: `#86102c` (Dark Red)
- **Hover**: `#ffcabf`

```tsx
import { Edit } from 'lucide-react'

<IconButton 
  variant="secondary"
  icon={<Edit className="w-4 h-4" />}
  aria-label="Redigera"
/>
```

### Neutral
- **Background**: `rgba(40, 1, 14, 0.06)` (Light warm grey)
- **Icon Color**: `#1b1918` (Dark)

```tsx
import { Settings } from 'lucide-react'

<IconButton 
  variant="neutral"
  icon={<Settings className="w-4 h-4" />}
  aria-label="Inställningar"
/>
```

### Outline
- **Background**: Transparent
- **Border**: `rgba(40, 3, 1, 0.32)`
- **Icon Color**: `#1b1918` (Dark)

```tsx
import { Download } from 'lucide-react'

<IconButton 
  variant="outline"
  icon={<Download className="w-4 h-4" />}
  aria-label="Ladda ner"
/>
```

### Ghost
- **Background**: Transparent
- **Icon Color**: `#1b1918` (Dark)

```tsx
import { MoreVertical } from 'lucide-react'

<IconButton 
  variant="ghost"
  icon={<MoreVertical className="w-4 h-4" />}
  aria-label="Fler alternativ"
/>
```

### Link
- **Background**: Transparent
- **Icon Color**: `#1b1918` (Dark)
- **Hover**: 70% opacity

```tsx
import { ExternalLink } from 'lucide-react'

<IconButton 
  variant="link"
  icon={<ExternalLink className="w-4 h-4" />}
  aria-label="Öppna i ny flik"
/>
```

### Destructive
- **Background**: `#c5281b` (Error Red)
- **Icon Color**: White
- **Hover**: `#a52317`

```tsx
import { Trash } from 'lucide-react'

<IconButton 
  variant="destructive"
  icon={<Trash className="w-4 h-4" />}
  aria-label="Ta bort"
/>
```

## Sizes

IconButtons are always square (width = height).

### Small
- **Dimensions**: 32×32px (h-8 w-8)
- **Icon Size**: 16×16px (w-4 h-4)

```tsx
import { Plus } from 'lucide-react'

<IconButton 
  size="small"
  icon={<Plus className="w-4 h-4" />}
  aria-label="Lägg till"
/>
```

### Medium (Default)
- **Dimensions**: 40×40px
- **Icon Size**: 16×16px (w-4 h-4)

```tsx
import { Plus } from 'lucide-react'

<IconButton 
  size="medium"
  icon={<Plus className="w-4 h-4" />}
  aria-label="Lägg till"
/>
```

### Large
- **Dimensions**: 48×48px (h-12 w-12)
- **Icon Size**: 20×20px (w-5 h-5)

```tsx
import { Plus } from 'lucide-react'

<IconButton 
  size="large"
  icon={<Plus className="w-5 h-5" />}
  aria-label="Lägg till"
/>
```

### XLarge
- **Dimensions**: 56×56px (h-14 w-14)
- **Icon Size**: 24×24px (w-6 h-6)

```tsx
import { Plus } from 'lucide-react'

<IconButton 
  size="xlarge"
  icon={<Plus className="w-6 h-6" />}
  aria-label="Lägg till"
/>
```

## Icon Sizing Guidelines

**Critical:** Icon size must match button size for proper visual balance.

| Button Size | Icon Class | Icon Dimensions |
|-------------|------------|-----------------|
| small       | w-4 h-4    | 16×16px         |
| medium      | w-4 h-4    | 16×16px         |
| large       | w-5 h-5    | 20×20px         |
| xlarge      | w-6 h-6    | 24×24px         |

## States

### Default (Rest)
Normal state, ready for interaction.

```tsx
<IconButton 
  icon={<Plus className="w-4 h-4" />}
  aria-label="Lägg till"
/>
```

### Hover
Visual feedback on mouse hover (non-touch devices).

- Primary: Background darkens
- Secondary: Background darkens
- Link/Ghost: Reduced opacity

### Active/Pressed
Visual feedback when clicked.

```tsx
<IconButton 
  icon={<Plus className="w-4 h-4" />}
  aria-label="Lägg till"
  className="active:scale-95"
/>
```

### Disabled
Button cannot be interacted with.

```tsx
<IconButton 
  icon={<Plus className="w-4 h-4" />}
  aria-label="Lägg till"
  disabled
/>
```

**Visual changes:**
- Opacity: 50%
- Cursor: `not-allowed`
- No hover effects

### Focus
Keyboard focus state for accessibility.

```tsx
<IconButton 
  icon={<Plus className="w-4 h-4" />}
  aria-label="Lägg till"
  className="focus:ring-2"
/>
```

## Common Use Cases

### Floating Action Button (FAB)
```tsx
import { Plus } from 'lucide-react'

<IconButton 
  variant="primary"
  size="large"
  icon={<Plus className="w-5 h-5" />}
  aria-label="Lägg till spel"
  className="fixed bottom-6 right-6 shadow-lg"
/>
```

### Toolbar Actions
```tsx
import { Bold, Italic, Underline } from 'lucide-react'

<div className="flex gap-1">
  <IconButton 
    variant="ghost"
    size="small"
    icon={<Bold className="w-4 h-4" />}
    aria-label="Fet stil"
  />
  <IconButton 
    variant="ghost"
    size="small"
    icon={<Italic className="w-4 h-4" />}
    aria-label="Kursiv stil"
  />
  <IconButton 
    variant="ghost"
    size="small"
    icon={<Underline className="w-4 h-4" />}
    aria-label="Understruken"
  />
</div>
```

### Card Actions
```tsx
import { Settings, MoreVertical } from 'lucide-react'

<div className="flex gap-2">
  <IconButton 
    variant="neutral"
    size="medium"
    icon={<Settings className="w-4 h-4" />}
    aria-label="Inställningar"
  />
  <IconButton 
    variant="ghost"
    size="medium"
    icon={<MoreVertical className="w-4 h-4" />}
    aria-label="Fler alternativ"
  />
</div>
```

### Delete Action
```tsx
import { Trash } from 'lucide-react'

<IconButton 
  variant="destructive"
  size="medium"
  icon={<Trash className="w-4 h-4" />}
  aria-label="Ta bort objekt"
/>
```

### Close Button
```tsx
import { X } from 'lucide-react'

<IconButton 
  variant="ghost"
  size="small"
  icon={<X className="w-4 h-4" />}
  aria-label="Stäng"
/>
```

## Accessibility

### Required: aria-label

**IconButton requires an `aria-label` prop** for screen readers since there's no visible text.

```tsx
// ✅ Good
<IconButton 
  icon={<Plus className="w-4 h-4" />}
  aria-label="Lägg till spel"
/>

// ❌ Bad - Missing aria-label
<IconButton 
  icon={<Plus className="w-4 h-4" />}
/>
```

### Guidelines

1. **Descriptive Labels**: Make `aria-label` specific and action-oriented
   - Good: "Lägg till spel", "Ta bort från varukorg"
   - Bad: "Plus", "Ikon", "Knapp"

2. **Keyboard Navigation**: 
   - Supports Tab navigation
   - Activates with Enter or Space

3. **Focus Indicators**: 
   - Visible focus ring for keyboard users
   - Never remove focus styles

4. **State Communication**:
   - Disabled state is communicated to screen readers
   - Consider `aria-pressed` for toggle buttons

## Best Practices

### When to Use IconButton

✅ **Good Use Cases:**
- Space-constrained interfaces (mobile headers, toolbars)
- Common, universally recognized actions (close, menu, search)
- Repeated actions in lists or grids
- Secondary actions that complement labeled buttons

❌ **Avoid IconButton for:**
- Primary CTAs (use regular Button with text)
- Complex or unfamiliar actions
- Actions without clear iconography
- When users might not recognize the icon

### Icon Selection

1. **Use Familiar Icons**:
   - Stick to widely recognized icons (trash for delete, pencil for edit)
   - Test with users if uncertain

2. **Consistent Library**:
   - Use one icon library throughout (e.g., lucide-react)
   - Maintain consistent visual weight

3. **Size Appropriately**:
   - Follow the sizing guidelines table
   - Larger icons for touch targets on mobile

### Layout & Spacing

1. **Touch Targets**:
   - Minimum 44×44px on touch devices (use size="large" or larger)
   - Adequate spacing between buttons (at least 8px)

2. **Grouping**:
   - Group related actions together
   - Use consistent variants within a group

3. **Alignment**:
   - Align to edges or other UI elements
   - Consider using `shrink-0` class to prevent squishing

## Comparison: IconButton vs Button with Icon

### Use IconButton when:
- Space is very limited
- Icon is universally understood
- Button is secondary/tertiary action
- Pattern is repeated many times

### Use Button with Icon when:
- Primary call-to-action
- Action needs clarification
- Desktop interface with space
- Users might not recognize icon alone

```tsx
// Primary action - use Button with text + icon
<Button 
  variant="primary"
  icon={<Plus className="w-4 h-4" />}
>
  Lägg spel
</Button>

// Secondary action in toolbar - use IconButton
<IconButton 
  variant="ghost"
  icon={<Plus className="w-4 h-4" />}
  aria-label="Lägg till"
/>
```

## Examples

### All Variants (Medium Size)
```tsx
import { Plus } from 'lucide-react'

<div className="flex gap-3">
  <IconButton variant="primary" icon={<Plus className="w-4 h-4" />} aria-label="Primary" />
  <IconButton variant="secondary" icon={<Plus className="w-4 h-4" />} aria-label="Secondary" />
  <IconButton variant="neutral" icon={<Plus className="w-4 h-4" />} aria-label="Neutral" />
  <IconButton variant="outline" icon={<Plus className="w-4 h-4" />} aria-label="Outline" />
  <IconButton variant="ghost" icon={<Plus className="w-4 h-4" />} aria-label="Ghost" />
  <IconButton variant="link" icon={<Plus className="w-4 h-4" />} aria-label="Link" />
  <IconButton variant="destructive" icon={<Plus className="w-4 h-4" />} aria-label="Destructive" />
</div>
```

### All Sizes (Primary Variant)
```tsx
import { Plus } from 'lucide-react'

<div className="flex gap-3 items-center">
  <IconButton size="small" icon={<Plus className="w-4 h-4" />} aria-label="Small" />
  <IconButton size="medium" icon={<Plus className="w-4 h-4" />} aria-label="Medium" />
  <IconButton size="large" icon={<Plus className="w-5 h-5" />} aria-label="Large" />
  <IconButton size="xlarge" icon={<Plus className="w-6 h-6" />} aria-label="XLarge" />
</div>
```

## Figma Connection

This component is connected to Figma via Code Connect:
- **File**: SvS UI Nova
- **Node ID**: 7091-29009
- **URL**: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=7091-29009

To publish updates:
```bash
pnpm figma:publish
```
