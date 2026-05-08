# SvS UI (Nova) Component Library

Complete React + Tailwind CSS component library for Svenska Spel, featuring 26 production-ready components.

## 📦 Installation

Components are already installed and ready to use:

```tsx
import { Button, Input, Card } from '@/SvsUiNova/components';
```

## 🎨 Components (26 Total)

### Layout & Structure (2)
- ✅ **Card** - Container with header, content, and footer sections
- ✅ **Separator** - Visual divider (horizontal/vertical)

### Buttons & Actions (1)
- ✅ **Button** - Primary, secondary, ghost, and destructive variants

### Form Components (7)
- ✅ **Input** - Text input with label and validation
- ✅ **Checkbox** - Checkbox with optional label
- ✅ **Select** - Dropdown selection
- ✅ **RadioGroup** - Radio button group
- ✅ **Switch** - Toggle switch
- ✅ **Slider** - Range slider
- ✅ **DatePicker** - Date selection input

### Data Display (3)
- ✅ **Badge** - Status and tag labels (6 variants)
- ✅ **Avatar** - User profile images with fallback
- ✅ **Table** - Data table with striped variant

### Navigation (2)
- ✅ **Tabs** - Tab navigation (default and pills)
- ✅ **ToggleGroup** - Toggle button group (single/multiple)

### Feedback (5)
- ✅ **Snackbar** - Toast notifications
- ✅ **Callout** - Alert boxes (info, success, warning, error)
- ✅ **Tooltip** - Hover tooltips
- ✅ **Progress** - Progress bars
- ✅ **Skeleton** - Loading placeholders

### Overlays (3)
- ✅ **Dialog** - Modal dialogs
- ✅ **Popover** - Contextual popups
- ✅ **BottomSheet** - Mobile-friendly bottom sheets

### Disclosure (1)
- ✅ **Accordion** - Collapsible content sections

### Specialized (3)
- ✅ **FloatingActionBar** - Sticky action bar
- ✅ **Spinner** - Loading spinner
- ✅ **DatePicker** - Date selection

## 🚀 Quick Start

### Basic Example

```tsx
import { Card, CardHeader, CardTitle, CardContent, Button } from '@/SvsUiNova/components';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Välkommen</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Detta är ett kort med Svenska Spel design.</p>
        <Button variant="primary">Kom igång</Button>
      </CardContent>
    </Card>
  );
}
```

### Form Example

```tsx
import { Input, Checkbox, Button, Card } from '@/SvsUiNova/components';

function LoginForm() {
  return (
    <Card>
      <CardContent className="space-y-4">
        <Input label="E-post" type="email" />
        <Input label="Lösenord" type="password" />
        <Checkbox label="Håll mig inloggad" />
        <Button variant="primary" fullWidth>
          Logga in
        </Button>
      </CardContent>
    </Card>
  );
}
```

## 🎯 Features

### Design System Integration
- ✅ Uses SvS UI (Nova) design tokens
- ✅ Follows Svenska Spel brand guidelines
- ✅ Fully responsive and mobile-friendly
- ✅ Dark mode support (via theme system)

### Developer Experience
- ✅ Full TypeScript support
- ✅ Comprehensive prop types
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Consistent API across all components

### Performance
- ✅ Tree-shakeable exports
- ✅ No runtime dependencies (except React)
- ✅ Minimal bundle size
- ✅ Optimized with Tailwind CSS

## 📚 Documentation

### Component Categories

**Layout & Structure**
```tsx
<Card variant="elevated">...</Card>
<Separator orientation="horizontal" />
```

**Forms**
```tsx
<Input label="Email" error helperText="Required" />
<Select options={[...]} />
<RadioGroup options={[...]} />
<Switch label="Enable" />
<Slider min={0} max={100} />
<DatePicker label="Choose date" />
```

**Data Display**
```tsx
<Badge variant="success">Active</Badge>
<Avatar size="lg" fallback="AB" />
<Table variant="striped">...</Table>
```

**Navigation**
```tsx
<Tabs items={[...]} />
<ToggleGroup options={[...]} type="multiple" />
```

**Feedback**
```tsx
<Snackbar open={true} variant="success">Saved!</Snackbar>
<Callout variant="warning">Warning message</Callout>
<Tooltip content="Help text">...</Tooltip>
<Progress value={75} showLabel />
<Skeleton width="100%" height="20px" />
```

**Overlays**
```tsx
<Dialog open={true} onClose={...}>...</Dialog>
<Popover trigger={<Button>Open</Button>} content={...} />
<BottomSheet open={true} onClose={...}>...</BottomSheet>
```

**Disclosure**
```tsx
<Accordion items={[...]} allowMultiple />
```

## 🎨 Customization

### Using className
All components accept `className` for custom styling:

```tsx
<Button className="mt-4 shadow-lg">
  Custom Button
</Button>
```

### Using Design Tokens
Access theme variables in your styles:

```tsx
<div style={{ 
  backgroundColor: 'var(--color-primary)',
  color: 'var(--color-primary-foreground)'
}}>
  Custom styled element
</div>
```

## 📖 Full Documentation

- [Component README](/src/SvsUiNova/components/README.md) - Detailed API docs
- [Typography Guidelines](/guidelines/foundation/Typography.md)
- [Color System](/guidelines/foundation/ColorSystem.md)
- [Iconography](/guidelines/foundation/Iconography.md)
- [Design Principles](/guidelines/foundation/DesignPrinciples.md)

## 🔧 Development

### Project Structure
```
src/
├── SvsUiNova/
│   ├── components/     # All 26 components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── styles.css      # Design tokens
│   └── index.ts        # Main exports
└── app/
    ├── App.tsx              # Main app
    └── AllComponentsDemo.tsx # Component showcase
```

### Adding New Components

1. Create component file: `/src/SvsUiNova/components/MyComponent.tsx`
2. Export from: `/src/SvsUiNova/components/index.ts`
3. Follow existing patterns and design tokens

## ✅ Complete Component List

1. Accordion
2. Avatar
3. Badge
4. BottomSheet
5. Button
6. Callout
7. Card (+ Header, Title, Description, Content, Footer)
8. Checkbox
9. DatePicker
10. Dialog (+ DialogFooter)
11. FloatingActionBar
12. Input
13. Popover
14. Progress
15. RadioGroup
16. Select
17. Separator
18. Skeleton
19. Slider
20. Snackbar
21. Spinner
22. Switch
23. Table (+ Header, Body, Row, Head, Cell)
24. Tabs
25. ToggleGroup
26. Tooltip

## 🎯 Next Steps

- ✅ All core components implemented
- ✅ Design tokens integrated
- ✅ TypeScript support
- ✅ Accessibility features
- ✅ Documentation complete

**Ready to use in production!** 🚀
