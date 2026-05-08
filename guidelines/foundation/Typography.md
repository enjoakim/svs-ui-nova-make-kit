# Typography

The Svenska Spel design system uses a carefully crafted typography system built on two primary typefaces: Svenska Spel Arena Pro for display and Svenska Spel Plan Pro for body text. This creates a distinctive, energetic brand voice while maintaining excellent readability.

---

## Introduction

Typography is a fundamental element of the design system that establishes visual hierarchy, improves readability, and reinforces brand identity. The typography system provides a structured approach to type usage across all digital products.

**Core Principles:**
- Clear visual hierarchy with semantic heading levels
- Optimized readability across all screen sizes
- Brand consistency through custom typefaces
- Accessible contrast and sizing
- Scalable and maintainable type scales

For container-aware fluid behavior and controlled scaling of expressive type and
selected visual objects, see [Adaptive Typography & Responsive Expression](./AdaptiveTypographyResponsiveExpression.md).

---

## Typefaces

### Svenska Spel Arena Pro

**Primary Display Typeface**

Arena Pro is our bold, uppercase display typeface used for headlines, hero text, and large promotional content. It creates energy, excitement, and captures attention.

**Characteristics:**
- All caps for maximum impact
- Bold weight (700)
- Used for H1, H2, H3 headings
- Creates strong visual hierarchy
- Expresses the brand's energetic personality

**Use Cases:**
- Page titles and hero headlines
- Campaign headers
- Large promotional displays
- Jackpot amounts and big numbers
- Section headings

**Do:**
- Use uppercase for consistency
- Maintain generous spacing around Arena Pro text
- Use for short, impactful messages

**Don't:**
- Use for body text or long-form content
- Use lowercase letters
- Use at small sizes (below 24px)

---

### Svenska Spel Plan Pro

**Primary Body Typeface**

Plan Pro is our versatile, readable typeface used for all body text, UI elements, and functional content. It provides excellent readability at all sizes.

**Available Weights:**
- Regular (400) - Body text, descriptions
- Medium (500) - Labels, subheadings, buttons
- Bold (700) - Emphasis, important information

**Use Cases:**
- Body text and paragraphs
- UI labels and form fields
- Buttons and calls-to-action
- Navigation items
- Captions and helper text
- H4 headings

**Do:**
- Use Regular for body text
- Use Medium for UI elements and labels
- Use Bold sparingly for emphasis
- Maintain proper line heights for readability

**Don't:**
- Use all caps except for specific UI patterns
- Mix too many weights in close proximity
- Use below 12px for accessibility

---

## Typography Scale

The design system uses a structured scale based on specific sizes that create clear visual hierarchy:

| Token | Size | Line Height | Weight | Typeface | Usage |
|-------|------|-------------|--------|----------|-------|
| `--text-8xl` | 96px | 1.1 (105.6px) | Bold (700) | Arena Pro | Hero displays, main headlines |
| `--text-4xl` | 36px | 1.2 (43.2px) | Bold (700) | Arena Pro | H2 headings, section titles |
| `--text-3xl` | 30px | 1.3 (39px) | Bold (700) | Arena Pro | H3 headings, subsections |
| `--text-2xl` | 24px | 1.4 (33.6px) | Medium (500) | Plan Pro | H4 headings |
| `--text-base` | 16px | 1.5 (24px) | Regular (400) | Plan Pro | Body text, paragraphs |
| `--text-s` | 14px | 1.4 (19.6px) | Medium (500) | Plan Pro | Labels, small UI text |
| `--text-xs` | 12px | 1.3 (15.6px) | Medium (500) | Plan Pro | Captions, helper text |

---

## Adaptive Mapping in the Codebase

The design system now connects adaptive typography guidance to concrete tokens
and components.

Current mapping:

- `--heading/xs` to `--heading/m` drive adaptive surface and card titles
- `--body/s` to `--body/m` drive adaptive supporting and critical text
- `--line-height/leading-5` to `--line-height/leading-8` provide controlled
  vertical rhythm as containers grow

Current adaptive utility classes live in `src/SvsUiNova/styles.css`:

- `svs-cq-inline`
- `svs-adaptive-card-title`
- `svs-adaptive-surface-title`
- `svs-adaptive-body-text`
- `svs-adaptive-body-text-strong`

Current component usage:

- `CardTitle` and `CardDescription`
- `BottomSheet` title and description
- `Dialog` title, description, and supporting label text

Use this pattern when a component is reused in multiple widths and the
available space matters more than the viewport breakpoint.

## Semantic Typography

### Heading Levels

#### H1 - Display Heading
```css
font-family: var(--font-arena-pro);
font-size: var(--text-8xl); /* 96px */
font-weight: var(--font-weight-bold); /* 700 */
line-height: 1.1;
text-transform: uppercase;
```

**Usage:** Main page titles, hero headlines, campaign headers

**Example:**
```
VAR MED NÄR DET HÄNDER
JACKPOT
```

---

#### H2 - Section Heading
```css
font-family: var(--font-arena-pro);
font-size: var(--text-4xl); /* 36px */
font-weight: var(--font-weight-bold); /* 700 */
line-height: 1.2;
text-transform: uppercase;
```

**Usage:** Major section headings, category titles

**Example:**
```
HÖGÖHDENS OCHHANENS VINSTCHANS
```

---

#### H3 - Subsection Heading
```css
font-family: var(--font-arena-pro);
font-size: var(--text-3xl); /* 30px */
font-weight: var(--font-weight-bold); /* 700 */
line-height: 1.3;
text-transform: uppercase;
```

**Usage:** Subsection headings, card titles

**Example:**
```
SPELA TILLSAMMANS
```

---

#### H4 - Component Heading
```css
font-family: var(--font-plan-pro);
font-size: var(--text-2xl); /* 24px */
font-weight: var(--font-weight-medium); /* 500 */
line-height: 1.4;
```

**Usage:** Component titles, smaller headings within cards

**Example:**
```
Vi är med när det händer, från början till slut
```

---

### Body Text

#### Paragraph
```css
font-family: var(--font-plan-pro);
font-size: var(--text-base); /* 16px */
font-weight: var(--font-weight-normal); /* 400 */
line-height: 1.5;
```

**Usage:** All body text, descriptions, long-form content

**Best Practices:**
- Maximum line length: 70-80 characters for optimal readability
- Use proper paragraph spacing (24px recommended)
- Maintain consistent line height (1.5)

---

#### Label
```css
font-family: var(--font-plan-pro);
font-size: var(--text-s); /* 14px */
font-weight: var(--font-weight-medium); /* 500 */
line-height: 1.4;
```

**Usage:** Form labels, input labels, small UI text

---

#### Caption
```css
font-family: var(--font-plan-pro);
font-size: var(--text-xs); /* 12px */
font-weight: var(--font-weight-medium); /* 500 */
line-height: 1.3;
```

**Usage:** Helper text, metadata, legal disclaimers, timestamps

**Example:**
```
Villkor gäller. Spela ansvarsfullt.
```

---

### Interactive Elements

#### Button Text
```css
font-family: var(--font-plan-pro);
font-size: var(--text-base); /* 16px */
font-weight: var(--font-weight-medium); /* 500 */
line-height: 1.5;
```

**Usage:** All button labels, calls-to-action

---

#### Input Text
```css
font-family: var(--font-plan-pro);
font-size: var(--text-base); /* 16px */
font-weight: var(--font-weight-normal); /* 400 */
line-height: 1.5;
```

**Usage:** User-entered text in form fields, inputs, textareas

**Note:** Minimum 16px on mobile prevents automatic zoom on iOS

---

## Typography in Context

### Marketing & Promotional Content

**Large Displays:**
Use Arena Pro at large sizes (96px+) for maximum impact. Create excitement and energy with bold, uppercase headlines.

```
JACKPOT
VINSTCHANS
VI ÄR MED NÄR DET HÄNDER
```

**Supporting Copy:**
Use Plan Pro for explanatory text that provides context and clarity.

```
Spela tillsammans och öka vinstchanserna. Med våra spelklubbar 
kan ni som grupp spela tillsammans och dela på vinsten.
```

---

### UI Components & Forms

**Labels and Inputs:**
Use Plan Pro Medium (14px) for labels and Plan Pro Regular (16px) for input values.

**Helper Text:**
Use Plan Pro Regular or Medium (12px) for hints, validation messages, and supporting information.

---

### Data Display

**Large Numbers:**
Use Arena Pro Bold for jackpot amounts, odds, and other impactful numbers:

```
24M (Jackpot)
1/7 (Vinstchans)
13X (Högsta odds)
```

**Labels:**
Use Plan Pro Medium (12px) uppercase for number labels:

```
JACKPOT
VINSTCHANS
HÖGSTA ODDS
```

---

## Accessibility Guidelines

### Minimum Sizes
- **Body text:** Minimum 16px
- **Labels:** Minimum 14px  
- **Captions:** Minimum 12px (use sparingly)
- **Touch targets:** Ensure adequate padding around text in interactive elements (minimum 44x44px)

### Contrast Requirements

**WCAG AA Standards (minimum):**
- Normal text (below 18px): 4.5:1 contrast ratio
- Large text (18px+ or 14px+ bold): 3:1 contrast ratio

**WCAG AAA Standards (enhanced):**
- Normal text: 7:1 contrast ratio
- Large text: 4.5:1 contrast ratio

**Design System Compliance:**
- Primary text on background: Meets AAA (8.5:1)
- Muted text: Meets AA Large (4.6:1)
- White on primary red: Meets AAA (5.2:1)

### Line Length

**Optimal Reading:**
- Body text: 50-75 characters per line
- Maximum: 80 characters per line
- Narrow containers: Adjust line height proportionally

### Line Height

**Body Text:**
- Minimum: 1.5 (WCAG requirement)
- Recommended: 1.5-1.6 for paragraph text

**Headings:**
- Larger headings: 1.1-1.3
- Smaller headings: 1.3-1.4

### Text Spacing

Users should be able to adjust:
- Line height to at least 1.5x font size
- Paragraph spacing to at least 2x font size
- Letter spacing to at least 0.12x font size
- Word spacing to at least 0.16x font size

---

## Responsive Typography

### Mobile (320px - 767px)

**Adjustments:**
- H1: Consider reducing from 96px to 48-60px
- H2: Scale from 36px to 28-32px
- Body text: Maintain 16px minimum
- Increase line height slightly (1.6) for small screens

**Considerations:**
- Shorter line lengths on narrow screens
- Adequate touch targets around interactive text
- Avoid all-caps for long headlines on mobile

---

### Tablet (768px - 1023px)

**Adjustments:**
- H1: 60-80px depending on context
- H2: 32-36px
- Body text: 16-18px
- Maintain comfortable line lengths

---

### Desktop (1024px+)

**Adjustments:**
- Use full scale sizes
- Optimize line length with max-width
- Utilize larger display sizes for hero content

---

## Implementation

### CSS Variables

Typography tokens are defined in `/src/styles/theme.css`:

```css
:root {
  /* Font Families */
  --font-arena-pro: 'Svenska Spel Arena Pro', sans-serif;
  --font-plan-pro: 'Svenska Spel Plan Pro', sans-serif;
  
  /* Font Sizes */
  --text-8xl: 96px;
  --text-4xl: 36px;
  --text-3xl: 30px;
  --text-2xl: 24px;
  --text-base: 16px;
  --text-s: 14px;
  --text-xs: 12px;
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
}
```

### Default Styles

Base typography styles are automatically applied to semantic HTML elements:

```css
h1 {
  font-family: var(--font-arena-pro);
  font-size: var(--text-8xl);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  text-transform: uppercase;
}

p {
  font-family: var(--font-plan-pro);
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
}
```

### Tailwind CSS Classes

For one-off adjustments, use Tailwind utilities:

```jsx
// Custom font family
<h1 className="font-['Svenska_Spel_Arena_Pro',sans-serif]">
  HEADLINE
</h1>

// Custom sizing (use sparingly, prefer semantic HTML)
<p className="text-[20px] leading-[28px]">
  Custom sized text
</p>
```

**Note:** Avoid overriding default typography styles with Tailwind classes unless absolutely necessary. Use semantic HTML elements to ensure consistency.

---

## Best Practices

### Do's

✓ **Use semantic HTML** - Let `<h1>`, `<h2>`, `<p>` tags apply default styles  
✓ **Maintain hierarchy** - Follow the established heading order  
✓ **Use Arena Pro for impact** - Headlines, large numbers, attention-grabbing content  
✓ **Use Plan Pro for clarity** - Body text, UI elements, functional content  
✓ **Check contrast** - Ensure all text meets WCAG AA minimum  
✓ **Test responsiveness** - Verify typography scales appropriately  
✓ **Limit line length** - Keep text readable at 50-75 characters  
✓ **Use proper spacing** - Add breathing room around text blocks  

### Don'ts

✗ **Don't use Arena Pro for body text** - It's designed for display only  
✗ **Don't use too many font sizes** - Stick to the defined scale  
✗ **Don't skip heading levels** - Follow semantic order (H1 → H2 → H3)  
✗ **Don't set text below 12px** - Maintain accessibility standards  
✗ **Don't ignore line height** - Tight leading reduces readability  
✗ **Don't use low contrast** - Avoid muted text for critical content  
✗ **Don't override defaults unnecessarily** - Trust the system  

---

## Examples

### Hero Section
```jsx
<section>
  <h1>VAR MED NÄR DET HÄNDER</h1>
  <p>
    Vi är med när det händer, från början till slut. 
    Spela tillsammans och öka vinstchanserna.
  </p>
  <button>Kom igång nu</button>
</section>
```

### Card Component
```jsx
<div className="card">
  <h3>SPELA TILLSAMMANS</h3>
  <p>
    Med våra spelklubbar kan ni som grupp spela tillsammans 
    och dela på vinsten.
  </p>
  <p className="caption">Villkor gäller. Spela ansvarsfullt.</p>
</div>
```

### Stats Display
```jsx
<div className="stats">
  <div>
    <p className="font-['Svenska_Spel_Arena_Pro',sans-serif] text-5xl font-bold">
      24M
    </p>
    <p className="caption uppercase">JACKPOT</p>
  </div>
</div>
```

---

## Related Guidelines

- [Color System](./ColorSystem.md) - Ensure proper contrast with text colors
- [Accessibility](./Accessibility.md) - Typography accessibility requirements
- [Design Principles](./DesignPrinciples.md) - How typography supports design principles

---

## Updates & Changelog

**Version 1.0** (April 2026)
- Initial typography system documentation
- Defined type scale and semantic usage
- Established Arena Pro and Plan Pro guidelines
- Added accessibility standards
