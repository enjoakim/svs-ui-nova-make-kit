# Figma Code Connect - Svenska Spel UI (Nova)

Guide för att koppla ditt komponentbibliotek till Figma Design System.

## 📋 Översikt

Figma Code Connect synkar dina React-komponenter med Figma-komponenter så att:
- Designers ser rätt kod när de inspekterar komponenter i Figma
- Props och varianter mappas automatiskt mellan Figma och kod
- Design tokens (variabler) kopplas till CSS-variabler

## 🚀 Installation (Klart!)

✅ `@figma/code-connect` är redan installerat
✅ `figma.config.json` är redan skapad
✅ Exempel Code Connect-filer finns för Button och Badge

## 📝 Steg-för-steg Guide

### 1. Logga in i Figma CLI

```bash
pnpm figma:connect
```

Detta öppnar en browser där du loggar in med ditt Figma-konto.

### 2. Hitta Figma Component URLs

För varje komponent du vill koppla:

1. Öppna din Figma Design System-fil
2. Högerklicka på huvudkomponenten (t.ex. Button)
3. Välj **Copy link**
4. URL:en ser ut ungefär så här:
   ```
   https://www.figma.com/design/ABC123/Design-System?node-id=123-456
   ```

### 3. Skapa Code Connect-filer

För varje komponent, skapa en `.figma.tsx` fil bredvid komponentfilen:

```
src/SvsUiNova/components/
├── Button.tsx
├── Button.figma.tsx  ← Ny fil
├── Badge.tsx
├── Badge.figma.tsx   ← Ny fil
```

**Exempel struktur för en Code Connect-fil:**

```typescript
import { figma } from '@figma/code-connect'
import { ComponentName } from './ComponentName'

figma.connect(
  ComponentName,
  'https://www.figma.com/design/...', // Din Figma component URL
  {
    props: {
      // Mappa Figma properties till React props
      variant: figma.enum('variant', {
        'Primary': 'primary',      // Figma value → React value
        'Secondary': 'secondary',
      }),
      size: figma.enum('size', {
        'Small': 'small',
        'Medium': 'medium',
        'Large': 'large',
      }),
      disabled: figma.boolean('disabled'),
      children: figma.string('text'),
    },
    example: props => (
      <ComponentName
        variant={props.variant}
        size={props.size}
        disabled={props.disabled}
      >
        {props.children}
      </ComponentName>
    ),
  }
)
```

### 4. Publicera till Figma

När du har skapat `.figma.tsx` filer för dina komponenter:

```bash
# Testa att Code Connect-filerna är korrekta
pnpm figma:connect parse

# Publicera till Figma
pnpm figma:publish
```

### 5. Koppla Design Tokens/Variables

För att koppla Figma Variables till dina CSS-variabler, lägg till i din Code Connect-fil:

```typescript
import { figma } from '@figma/code-connect'

// Koppla Figma color tokens
figma.connect(
  'FIGMA_VARIABLE_COLLECTION_URL',
  {
    // Exempel: Koppla Figma "color/primary" till CSS --color-primary
    variables: {
      'color/primary': 'var(--color-primary)',
      'color/secondary': 'var(--color-secondary)',
      'spacing/sm': 'var(--spacing-sm)',
      'radius/md': 'var(--radius-md)',
    }
  }
)
```

## 🎯 Komponenter att koppla

Här är alla komponenter i ditt bibliotek som bör kopplas:

### Layout
- [ ] Card
- [ ] Separator

### Buttons
- [x] Button (exempel redan skapat)

### Forms
- [ ] Input
- [ ] Checkbox
- [ ] Select
- [ ] RadioGroup
- [ ] Switch
- [ ] Slider
- [ ] DatePicker

### Data Display
- [x] Badge (exempel redan skapat)
- [ ] Avatar
- [ ] Table

### Navigation
- [ ] Tabs
- [ ] TabsMenu
- [ ] ToggleGroup

### Feedback
- [ ] Snackbar
- [ ] Callout
- [ ] Tooltip

### Overlays
- [ ] Dialog
- [ ] Popover
- [ ] BottomSheet

### Disclosure
- [ ] Accordion

### Specialized
- [ ] FloatingActionBar
- [ ] Progress
- [ ] Skeleton
- [ ] Spinner

## 🔧 Vanliga Mappningar

### Enums (variant, size, etc.)
```typescript
variant: figma.enum('variant', {
  'Figma Value': 'react-value',
})
```

### Booleans
```typescript
disabled: figma.boolean('disabled')
```

### Text/Strings
```typescript
children: figma.string('text')
label: figma.string('label')
```

### Nested Components (icons, etc.)
```typescript
icon: figma.instance('icon')
```

### Conditional Props
```typescript
icon: figma.boolean('hasIcon', {
  true: figma.instance('icon'),
  false: undefined
})
```

## 📚 Resources

- [Figma Code Connect Docs](https://www.figma.com/developers/code-connect)
- [Code Connect React Guide](https://github.com/figma/code-connect)

## 💡 Tips

1. **Börja med de vanligaste komponenterna**: Button, Input, Badge
2. **Använd samma naming**: Se till att Figma variant-namn matchar dina React props
3. **Testa lokalt först**: Kör `pnpm figma:connect parse` innan du publicerar
4. **Uppdatera regelbundet**: Kör `pnpm figma:publish` efter varje komponentuppdatering

## 🐛 Troubleshooting

**Problem**: "Component not found"
- Kolla att Figma URL:en är korrekt
- Se till att du har tillgång till Figma-filen

**Problem**: "Props don't match"
- Kontrollera att Figma property-namn matchar exakt (case-sensitive)
- Kolla att variant-värden i Figma matchar dina mappningar

**Problem**: "Cannot publish"
- Logga in igen: `pnpm figma:connect`
- Kontrollera att du har edit-access till Figma-filen
