# Button Component

Connected to Figma: [SvS UI Nova - Button](https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2718-8237&m=dev)

## Overview

The Button component is a fundamental interactive element in the Svenska Spel design system. It supports multiple variants, sizes, states, and icon configurations.

## API

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  fullWidth?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}
```

## Variants

### Primary
- **Purpose**: Main call-to-action buttons
- **Background**: `#ed0000` (Brand Red)
- **Text**: White
- **Hover**: `#D10011` (Darker Red)

```tsx
<Button variant="primary">Lägg spel</Button>
```

### Secondary
- **Purpose**: Secondary actions, less prominent than primary
- **Background**: `#ffd5ce` (Light Pink)
- **Text**: `#86102c` (Dark Red)
- **Hover**: `#ffcabf` (Slightly darker pink)

```tsx
<Button variant="secondary">Läs mer</Button>
```

### Neutral
- **Purpose**: Neutral actions, subtle emphasis
- **Background**: `rgba(40, 1, 14, 0.06)` (Light warm grey)
- **Text**: `#1b1918` (Dark)

```tsx
<Button variant="neutral">Avbryt</Button>
```

### Outline
- **Purpose**: Less prominent actions, preserves background
- **Background**: Transparent
- **Border**: `rgba(40, 3, 1, 0.32)`
- **Text**: `#1b1918` (Dark)

```tsx
<Button variant="outline">Redigera</Button>
```

### Ghost
- **Purpose**: Minimal emphasis, tertiary actions
- **Background**: Transparent
- **Text**: `#1b1918` (Dark)

```tsx
<Button variant="ghost">Hoppa över</Button>
```

### Link
- **Purpose**: Text-based actions, navigation
- **Background**: Transparent
- **Text**: `#1b1918` (Dark) with underline
- **Hover**: 70% opacity

```tsx
<Button variant="link">Läs mer</Button>
```

### Destructive
- **Purpose**: Dangerous or irreversible actions
- **Background**: `#c5281b` (Error Red)
- **Text**: White
- **Hover**: `#a52317` (Darker error red)

```tsx
<Button variant="destructive">Ta bort</Button>
```

## Sizes

### Small
- **Height**: 32px (h-8)
- **Padding**: 12px horizontal (px-3)
- **Font Size**: 14px (text-sm)
- **Gap**: 8px (gap-2)

```tsx
<Button size="small">Small Button</Button>
```

### Medium (Default)
- **Height**: 40px
- **Padding**: 12px horizontal, 8px vertical
- **Font Size**: 16px
- **Gap**: 8px

```tsx
<Button size="medium">Medium Button</Button>
```

### Large
- **Height**: 48px (h-12)
- **Padding**: 16px horizontal (px-4)
- **Font Size**: 18px (text-lg)
- **Gap**: 8px (gap-2)

```tsx
<Button size="large">Large Button</Button>
```

### XLarge
- **Height**: 56px (h-14)
- **Padding**: 20px horizontal (px-5)
- **Font Size**: 20px (text-xl)
- **Gap**: 12px (gap-3)

```tsx
<Button size="xlarge">XLarge Button</Button>
```

## Icons

### Leading Icon
Icon appears before the text.

```tsx
import { Plus } from 'lucide-react'

<Button icon={<Plus className="w-4 h-4" />} iconPosition="left">
  Lägg till
</Button>
```

### Trailing Icon
Icon appears after the text.

```tsx
import { ArrowRight } from 'lucide-react'

<Button icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
  Fortsätt
</Button>
```

### Icon Only
Button with only an icon, no text.

```tsx
import { Plus } from 'lucide-react'

<Button 
  icon={<Plus className="w-4 h-4" />}
  className="w-8 px-0"
  aria-label="Lägg till"
/>
```

**Icon Sizing Guidelines:**
- Small/Medium buttons: `w-4 h-4` (16px)
- Large buttons: `w-5 h-5` (20px)

## States

### Default (Rest)
Normal state, ready for interaction.

```tsx
<Button>Normal</Button>
```

### Hover
Triggered when mouse hovers over button (non-touch devices).

- Primary: Background darkens to `#D10011`
- Secondary: Background darkens to `#ffcabf`
- Link: Opacity reduces to 70%

### Active/Pressed
Visual feedback when button is clicked.

```tsx
<Button className="active:scale-95">Clickable</Button>
```

### Disabled
Button cannot be interacted with.

```tsx
<Button disabled>Disabled</Button>
```

**Visual changes:**
- Opacity: 50%
- Cursor: `not-allowed`
- No hover effects

### Focus
Keyboard focus state for accessibility.

```tsx
<Button className="focus:outline-none focus:ring-2">Focusable</Button>
```

## Layout

### Full Width
Button stretches to fill container width.

```tsx
<Button fullWidth>Full Width Button</Button>
```

### Inline
Default behavior, button sizes to content.

```tsx
<Button>Inline Button</Button>
```

## Examples

### Primary CTA with Icon
```tsx
import { Plus } from 'lucide-react'

<Button 
  variant="primary" 
  size="medium"
  icon={<Plus className="w-4 h-4" />}
  iconPosition="left"
>
  Lägg spel
</Button>
```

### Secondary Action
```tsx
<Button variant="secondary" size="medium">
  Läs mer
</Button>
```

### Destructive Confirmation
```tsx
<Button 
  variant="destructive" 
  size="large"
  fullWidth
>
  Ta bort konto
</Button>
```

### Icon Button
```tsx
import { Settings } from 'lucide-react'

<Button 
  variant="ghost"
  size="medium"
  icon={<Settings className="w-4 h-4" />}
  className="w-[40px] px-0"
  aria-label="Inställningar"
/>
```

## Accessibility

- Uses semantic `<button>` element
- Supports keyboard navigation (Tab, Enter, Space)
- Includes `disabled` attribute for disabled state
- Icon-only buttons should include `aria-label`
- Focus states are visible for keyboard users

## Best Practices

1. **Variant Selection**:
   - Use Primary for main actions (1 per screen)
   - Secondary for supporting actions
   - Destructive only for dangerous actions

2. **Icon Usage**:
   - Use icons to reinforce meaning, not replace text
   - Icon-only buttons need `aria-label`
   - Keep icon size consistent with button size

3. **Text Content**:
   - Keep button text short and action-oriented
   - Start with verbs: "Lägg spel", "Ta bort", "Spara"
   - Avoid vague labels like "OK" or "Skicka"

4. **Spacing**:
   - Leave adequate space between buttons (at least 8px)
   - Stack buttons vertically on mobile when needed
   - Use fullWidth sparingly, mainly for mobile CTAs

## Figma Connection

This component is connected to Figma via Code Connect:
- **File**: SvS UI Nova
- **Node ID**: 2718-8237
- **URL**: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=2718-8237

To publish updates:
```bash
pnpm figma:publish
```
