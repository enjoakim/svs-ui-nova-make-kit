# SvS UI (Nova) Component Library

A comprehensive component library for Svenska Spel built with React and Tailwind CSS, following the design system guidelines.

## Installation & Usage

The components are already set up in this project. Simply import them:

```tsx
import { Button, Input, Card } from '@/SvsUiNova/components';

// Or import from the root
import { Button, Input, Card } from '@/index';
```

## Available Components

### Button

Versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@/SvsUiNova/components';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>

// Props
<Button fullWidth disabled>Full Width Disabled</Button>
```

**Props:**
- `variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'`
- `size?: 'sm' | 'md' | 'lg'`
- `fullWidth?: boolean`
- All standard button HTML attributes

---

### Input

Form input component with label, helper text, and error states.

```tsx
import { Input } from '@/SvsUiNova/components';

<Input
  label="E-postadress"
  type="email"
  placeholder="din@email.com"
  helperText="Vi delar aldrig din e-postadress"
/>

<Input
  label="Lösenord"
  type="password"
  error
  helperText="Lösenord krävs"
/>
```

**Props:**
- `label?: string`
- `error?: boolean`
- `helperText?: string`
- All standard input HTML attributes

---

### Card

Container component with header, content, and footer sections.

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/SvsUiNova/components';

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant?: 'default' | 'elevated'`

**Sub-components:**
- `CardHeader` - Header section
- `CardTitle` - Title heading
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section (typically for actions)

---

### Badge

Small label component for status, tags, or categories.

```tsx
import { Badge } from '@/SvsUiNova/components';

<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

**Props:**
- `variant?: 'default' | 'primary' | 'secondary' | 'success' | 'destructive' | 'outline'`

---

### Checkbox

Checkbox input with optional label.

```tsx
import { Checkbox } from '@/SvsUiNova/components';

<Checkbox
  label="Jag accepterar villkoren"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>
```

**Props:**
- `label?: string`
- All standard checkbox input HTML attributes

---

### Select

Dropdown select component with label and options.

```tsx
import { Select } from '@/SvsUiNova/components';

<Select
  label="Land"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  options={[
    { value: 'se', label: 'Sverige' },
    { value: 'no', label: 'Norge' },
    { value: 'dk', label: 'Danmark' },
  ]}
  helperText="Välj ditt land"
/>
```

**Props:**
- `label?: string`
- `options: Array<{ value: string; label: string }>`
- `error?: boolean`
- `helperText?: string`
- All standard select HTML attributes

---

## Design Tokens

All components use design tokens from the theme system. Available tokens include:

### Colors
- `--color-primary` - Primary brand color (#ED0000)
- `--color-secondary` - Secondary color
- `--color-destructive` - Error/destructive actions
- `--color-background` - Page background
- `--color-foreground` - Text color
- `--color-card` - Card background
- `--color-border` - Border color
- `--color-muted` - Muted/disabled states
- `--color-accent` - Accent color

### Typography
See `/guidelines/foundation/Typography.md` for full typography system.

### Spacing
- `--gap-*` - Spacing tokens (4px increments)
- `--padding-*` - Padding tokens

### Border Radius
- `--radius` - Default radius (4px)
- `--radius-card` - Card radius (8px)
- `--radius-pill` - Pill/full radius (9999px)

---

## Styling

### Using Tailwind Classes

All components accept a `className` prop for custom styling:

```tsx
<Button className="mt-4 shadow-lg">
  Custom Styled Button
</Button>
```

### Theme Variables

Access theme variables in your CSS:

```css
.custom-element {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
  border-radius: var(--radius);
}
```

---

## Examples

### Login Form

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter, Input, Button, Checkbox } from '@/SvsUiNova/components';

function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Logga in</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          label="E-postadress"
          type="email"
          placeholder="din@email.com"
        />
        <Input
          label="Lösenord"
          type="password"
        />
        <Checkbox label="Håll mig inloggad" />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button variant="primary" fullWidth>
          Logga in
        </Button>
        <a href="#" className="text-sm text-primary">
          Glömt lösenord?
        </a>
      </CardFooter>
    </Card>
  );
}
```

### Status Cards

```tsx
import { Card, CardHeader, CardTitle, CardContent, Badge } from '@/SvsUiNova/components';

function StatusCard() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Jackpot Status</CardTitle>
          <Badge variant="success">Aktiv</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-primary">24M SEK</p>
      </CardContent>
    </Card>
  );
}
```

---

## Guidelines

For detailed usage guidelines and best practices, see:

- [Typography Guidelines](/guidelines/foundation/Typography.md)
- [Iconography Guidelines](/guidelines/foundation/Iconography.md)
- [Color System](/guidelines/foundation/ColorSystem.md)
- [Accessibility Guidelines](/guidelines/foundation/Accessibility.md)
- [Design Principles](/guidelines/foundation/DesignPrinciples.md)

---

## TypeScript

All components are fully typed with TypeScript. Import types alongside components:

```tsx
import { Button, ButtonProps } from '@/SvsUiNova/components';

// Use types in your own components
interface MyComponentProps {
  submitButton: ButtonProps;
}
```

---

## Adding New Components

To add new components to the library:

1. Create component file in `/src/SvsUiNova/components/`
2. Export from `/src/SvsUiNova/components/index.ts`
3. Add documentation to this README
4. Follow existing component patterns and design tokens

---

## Support

For issues, questions, or contributions:
- Review the design system guidelines in `/guidelines`
- Check component documentation in this README
- See the demo app in `/src/app/ComponentDemo.tsx`
