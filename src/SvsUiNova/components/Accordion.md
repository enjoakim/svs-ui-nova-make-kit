# Accordion Component

Connected to Figma:
- [Accordion Container](https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=7375-34626&m=dev)
- [Accordion Item](https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=24907-320623&m=dev)

## Overview

The Accordion component displays collapsible content sections. Users can expand/collapse sections to show or hide content, making it ideal for FAQs, settings panels, and progressive disclosure patterns.

## API

```typescript
interface AccordionItemProps {
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  variant?: 'default' | 'low-emphasis' | 'mid-emphasis';
  label?: string; // Optional label for card variants
}
```

## Variants

### Default
- **Style**: Minimal, with bottom borders separating items
- **Background**: Transparent
- **Use**: In-page content, simple FAQs

```tsx
<Accordion
  items={[
    { title: 'Hur funkar Lotto?', content: 'Välj 7 nummer mellan 1-35...' },
    { title: 'När dras vinnande nummer?', content: 'Varje onsdag och lördag...' },
  ]}
/>
```

### Low Emphasis
- **Style**: Card container with lighter borders
- **Background**: White card with rounded corners
- **Title Weight**: Regular (400)
- **Use**: Secondary information panels

```tsx
<Accordion
  variant="low-emphasis"
  label="Inställningar"
  items={[
    { title: 'Notiser', content: 'Välj när du vill få notiser...' },
    { title: 'Språk', content: 'Svenska, English, Norsk...' },
  ]}
/>
```

### Mid Emphasis
- **Style**: Card container with prominent label
- **Background**: White card with rounded corners
- **Title Weight**: Medium (500)
- **Label Size**: 18px (larger than low-emphasis)
- **Use**: Primary content sections, important FAQs

```tsx
<Accordion
  variant="mid-emphasis"
  label="Vanliga frågor"
  items={[
    { title: 'Hur skapar jag ett konto?', content: 'Klicka på Registrera...' },
    { title: 'Hur gör jag en insättning?', content: 'Gå till Mitt konto...' },
  ]}
/>
```

## Features

### Single vs Multiple Open

**Single Open (Default)**
Only one item can be open at a time. Opening a new item closes the previous one.

```tsx
<Accordion
  items={items}
  // allowMultiple is false by default
/>
```

**Multiple Open**
Users can have multiple items open simultaneously.

```tsx
<Accordion
  items={items}
  allowMultiple={true}
/>
```

### Default Open State

Set which items are open by default:

```tsx
<Accordion
  items={[
    { title: 'First item', content: '...', defaultOpen: true },
    { title: 'Second item', content: '...', defaultOpen: false },
    { title: 'Third item', content: '...', defaultOpen: true },
  ]}
  allowMultiple={true}
/>
```

## Styling

### Heights
- **Collapsed (Default variant)**: 56px
- **Collapsed (Card variants)**: 64px
- **Expanded**: Auto (content height + padding)

### Spacing
- **Padding (Default variant)**: 16px vertical
- **Padding (Card variants)**: 16px all sides
- **Gap between title and icon**: 24px
- **Content padding**: 16px right (card variants only)

### Typography

**Title:**
- Font: Svenska Spel Plan Pro
- Size: 16px
- Line Height: 24px
- Weight: 
  - Default/Mid-emphasis: Medium (500)
  - Low-emphasis: Regular (400)

**Content:**
- Font: Svenska Spel Plan Pro
- Size: 16px
- Line Height: 24px
- Weight: Regular (400)

**Label (Card Variants):**
- Font: Svenska Spel Plan Pro
- Weight: Medium (500)
- Size:
  - Low-emphasis: 16px
  - Mid-emphasis: 18px

### Borders

**Default Variant:**
- Bottom border: `rgba(40, 3, 1, 0.16)`
- Each item separated by border

**Card Variants:**
- Top border between items: `rgba(40, 3, 1, 0.16)`
- First item after label: `rgba(40, 3, 1, 0.08)` (lighter)
- Card border radius: 8px

## Icon

Uses `MenuUp` icon component:
- Size: 16×16px
- Color: `#1B1918`
- Rotation: 180° when collapsed (points down)
- Rotation: 0° when expanded (points up)

## Examples

### FAQ Section
```tsx
<Accordion
  variant="mid-emphasis"
  label="Vanliga frågor om Lotto"
  items={[
    {
      title: 'Hur funkar Lotto?',
      content: 'Välj 7 nummer mellan 1-35 så är du med! Vi drar varje onsdag och lördag kl 18:00.',
    },
    {
      title: 'När dras vinnande nummer?',
      content: 'Dragning sker varje onsdag och lördag klockan 18:00. Resultaten publiceras direkt efter dragningen.',
    },
    {
      title: 'Hur tar jag ut vinster?',
      content: 'Vinster under 20 000 kr sätts in automatiskt på ditt spelkonto inom 24 timmar.',
    },
  ]}
/>
```

### Settings Panel
```tsx
<Accordion
  variant="low-emphasis"
  label="Inställningar"
  allowMultiple={true}
  items={[
    {
      title: 'Notifikationer',
      content: 'Välj när och hur du vill bli meddelad om vinster, spelgränser och kampanjer.',
      defaultOpen: true,
    },
    {
      title: 'Språk och region',
      content: 'Välj mellan Svenska, English, Norsk och Dansk.',
    },
    {
      title: 'Säkerhet',
      content: 'Hantera tvåfaktorsautentisering, lösenord och inloggningshistorik.',
    },
  ]}
/>
```

### Simple List (Default)
```tsx
<Accordion
  items={[
    {
      title: 'Vad är spelgräns?',
      content: 'En gräns du själv sätter för hur mycket du kan satsa per dag, vecka eller månad.',
    },
    {
      title: 'Hur ändrar jag min spelgräns?',
      content: 'Gå till Mitt konto → Spelgränser. Sänkningar gäller direkt, höjningar efter 72 timmar.',
    },
  ]}
/>
```

### Pre-expanded Item
```tsx
<Accordion
  items={[
    {
      title: 'Viktigt meddelande',
      content: 'Ditt konto kommer att uppdateras med nya säkerhetsfunktioner den 15 maj.',
      defaultOpen: true,
    },
    {
      title: 'Tidigare meddelanden',
      content: 'Se tidigare meddelanden i din inkorg.',
    },
  ]}
/>
```

## Accessibility

### Keyboard Navigation
- **Tab**: Move focus to next/previous accordion trigger
- **Enter/Space**: Toggle accordion item
- **Arrow Keys**: (Optional) Navigate between items

### ARIA Attributes
- `aria-expanded`: Indicates if item is open/closed
- Button role: Each trigger is a semantic button
- Proper heading hierarchy recommended for titles

### Screen Readers
- Trigger clearly announces expand/collapse state
- Content is hidden from screen readers when collapsed
- Label provides context for card variants

## Best Practices

### Content Guidelines

**Do:**
- Keep titles concise and descriptive (5-10 words)
- Use action-oriented language: "Hur...", "Vad...", "När..."
- Provide complete answers in content
- Group related items together

**Don't:**
- Nest accordions inside accordions (use list instead)
- Use for navigation (use Tabs or TabsMenu instead)
- Hide critical information users need immediately
- Write vague titles like "Mer information"

### Usage Guidelines

**When to Use Accordion:**
- ✅ FAQ sections
- ✅ Settings and preferences
- ✅ Progressive disclosure of details
- ✅ Long content that users may skip
- ✅ Mobile interfaces with limited space

**When NOT to Use Accordion:**
- ❌ Primary navigation (use Tabs/TabsMenu)
- ❌ Critical information that should always be visible
- ❌ Small amounts of content (just show it)
- ❌ Complex forms (better as wizard/steps)

### Variant Selection

| Variant        | Use When                                      |
|----------------|-----------------------------------------------|
| Default        | In-page content, simple lists, minimal style |
| Low-emphasis   | Secondary panels, less important content     |
| Mid-emphasis   | Primary sections, important FAQs, standalone |

### Multiple vs Single

**Single open (default):**
- Keeps UI clean and focused
- Prevents information overload
- Good for FAQs where users scan for one answer

**Multiple open:**
- Good for comparing information
- Settings panels where users adjust multiple options
- Reference documentation

## Interactions

### States

**Collapsed (Rest)**
- Icon points down (rotated 180°)
- Only title visible
- Fixed height (56px or 64px)

**Collapsed (Hover)**
- Consider adding subtle hover state (optional)
- Cursor: pointer

**Expanded**
- Icon points up
- Content visible
- Dynamic height based on content

**Expanded (Hover)**
- Same hover treatment as collapsed

**Disabled** (if implemented)
- Reduced opacity
- Cursor: not-allowed
- No interaction

### Animation

Accordion uses CSS transitions for smooth expand/collapse:
- Icon rotation: 200ms ease
- Height transition: Handled by React state

Consider adding:
```tsx
<div className="transition-all duration-200 ease-in-out">
  {/* content */}
</div>
```

## Responsive Behavior

### Mobile
- Touch target minimum: 44×44px ✅ (56px/64px height)
- Full-width on mobile
- Card variants may need adjusted padding

### Desktop
- Consider max-width for readability
- Adequate spacing between items
- Maintain touch-friendly sizes

## Common Patterns

### With Icons in Title
```tsx
<Accordion
  items={[
    {
      title: (
        <div className="flex items-center gap-2">
          <InfoIcon className="w-4 h-4" />
          <span>Information</span>
        </div>
      ),
      content: 'Content here...',
    },
  ]}
/>
```

### With Rich Content
```tsx
<Accordion
  items={[
    {
      title: 'Kontaktinformation',
      content: (
        <div className="space-y-2">
          <p>E-post: support@svenskaspel.se</p>
          <p>Telefon: 020-123 456</p>
          <p>Öppet: Mån-Fre 08:00-20:00</p>
        </div>
      ),
    },
  ]}
/>
```

## Figma Connection

This component is connected to Figma via Code Connect:
- **Accordion Container**: node-id=7375-34626
- **Accordion Item**: node-id=24907-320623

To publish updates:
```bash
pnpm figma:publish
```

## Related Components

- **Tabs**: For mutually exclusive content that's always visible
- **TabsMenu**: For navigation between major sections
- **Callout**: For static expandable notices
- **Dialog**: For focused content overlays
