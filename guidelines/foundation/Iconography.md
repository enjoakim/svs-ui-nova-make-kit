# Iconography and Illustrations

The Svenska Spel design system uses icons and illustrations as essential visual elements that make things easier while proving we're in the entertainment industry. Our iconography has a twinkle in the eye, with motifs that can surprise and invite smiles.

---

## Introduction

Icons and illustrations serve multiple purposes in the design system: they simplify complex information, create visual interest, and reinforce our brand personality as an entertainment company.

**Core Principles:**
- Simple and clear manner
- Different levels to cover all needs
- Used in both digital and analog communication
- Animation adds life and personality
- Entertaining and unexpected motifs
- Clear and self-explanatory for accessibility

---

## Icon System Levels

The Svenska Spel design system uses three distinct levels of iconography, each serving different purposes and contexts:

### 1. Simple Icons (Enkla Ikoner)
Functional icons for UI elements and navigation

### 2. Pictograms (Piktogram)
Illustrative icons for communication and storytelling

### 3. Explanatory Illustrations (Förklarande Illustrationer)
Full illustrations for marketing and brand content

---

## Simple Icons

### Overview

Simple icons are the foundation of our icon system. They make interfaces easier to understand while showing we belong in the entertainment industry. Our iconography has a playful spirit and simple expression that fits our brand.

**Purpose:**
- Make things easier and more intuitive
- Show we're in the entertainment industry
- Surprise and invite smiles
- Support navigation and wayfinding
- Clarify actions and states

**Visual Characteristics:**
- Clean, simple linework
- Consistent stroke weight (typically 2px)
- 24x24px base grid system
- Minimal detail for clarity
- Twinkle in the eye - subtle personality

---

### When to Use Simple Icons

**Do Use For:**
- Navigation elements (menu, search, user profile)
- Action buttons (add, edit, delete, share)
- Status indicators (success, warning, error, info)
- Form controls (checkboxes, radio buttons, dropdowns)
- Data visualization (charts, graphs)
- Content categories (sports, casino, news)

**Avoid Using For:**
- Long-form content illustration (use pictograms instead)
- Marketing hero images (use explanatory illustrations)
- Complex concepts requiring detail (use pictograms)
- Decorative purposes without function

---

### Icon Categories

#### Navigation Icons
- User/Profile
- Menu (hamburger)
- Search
- Arrow/Chevron
- Home
- Back/Forward

#### Action Icons
- Add/Plus
- Edit/Pencil
- Delete/Trash
- Share
- Download
- Upload
- Close/X
- Checkmark
- More (three dots)

#### Communication Icons
- Chat/Message
- Notification bell
- Email
- Phone
- Info (i)
- Help/Question mark

#### Content Icons
- Document/File
- Image
- Video
- Calendar
- Clock/Time

#### Gaming Icons
- Trophy
- Gift
- Dice
- Cards
- Sports equipment
- Owl (wisdom/insight)
- Parrot (fun/entertainment)

---

### Size and Spacing

**Standard Sizes:**
- **16px** - Inline with text, tight spaces
- **20px** - Small UI elements, compact layouts
- **24px** - Default size, most common use case
- **32px** - Larger touch targets, emphasis
- **48px** - Hero icons, feature highlights

**Touch Target Minimum:**
- Interactive icons must have at least 44x44px touch area
- Add padding around smaller icons to meet touch requirements

**Spacing:**
- Maintain 8px minimum spacing from text
- Align icons to text baseline or center
- Use consistent spacing in icon groups

---

### Color Usage

**Primary Colors:**
- **Foreground text color** (`#1B1918`) - Default for icons on light backgrounds
- **White** (`#FFFFFF`) - Icons on dark or colored backgrounds
- **Primary red** (`#ED0000`) - Active states, important actions
- **Muted** (`rgba(0,0,0,0.7)`) - Inactive or disabled states

**State Colors:**
- **Rest:** Foreground or muted
- **Hover:** Primary red or darker variant
- **Active:** Primary red
- **Disabled:** Muted at 40% opacity

**Best Practices:**
- Use monochrome icons in UI contexts
- Reserve color for emphasis or state indication
- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- Test icons on all background colors

---

### Accessibility

**Requirements:**
- Icons used without text must have clear meaning
- Provide alternative text for screen readers
- Maintain minimum 3:1 contrast ratio
- Ensure touch targets are at least 44x44px
- Don't rely solely on color to convey meaning

**Alternative Text:**
```jsx
// Decorative icon (with adjacent text)
<Icon name="search" aria-hidden="true" />
<span>Search</span>

// Functional icon (without adjacent text)
<button aria-label="Search">
  <Icon name="search" />
</button>
```

---

### Animation

Animation brings icons to life and adds personality to the interface.

**Animation Types:**
- **Micro-interactions:** Hover states, click feedback
- **State transitions:** Loading to success, unchecked to checked
- **Attention-grabbing:** Notifications, important updates

**Guidelines:**
- Keep animations subtle (200-400ms)
- Use easing functions (ease-out, ease-in-out)
- Avoid excessive or distracting motion
- Respect reduced motion preferences

**Examples:**
- Checkmark drawing in on success
- Menu icon morphing to X
- Loading spinner rotation
- Like button bounce

---

## Pictograms

### Overview

Pictograms should not be confused with simple icons. They have greater creative freedom and are used to quickly convey messages and simplify complex ideas. Our illustrative pictograms visualize information in a simple and clear way.

**Purpose:**
- Make information more playful and engaging
- Communicate complex concepts simply
- Support storytelling and marketing
- Create memorable visual moments

**Visual Characteristics:**
- More detailed than simple icons
- Greater creative freedom
- Drawn in a freer grid
- Can include multiple elements
- Personality and character

---

### When to Use Pictograms

**Do Use For:**
- Feature explanations
- Process steps and workflows
- Marketing communications
- Onboarding screens
- Category illustrations
- Empty states with personality

**Avoid Using For:**
- Small UI elements (use simple icons)
- Navigation (use simple icons)
- Time-sensitive actions (use simple icons)
- Contexts requiring universal understanding

---

### Size and Usage

**Minimum Size:**
- 64px minimum (pictograms are designed for larger formats)
- Optimal at 128px and above
- Can scale to 256px+ for marketing use

**Context:**
- Only use in larger formats where details are visible
- Provide ample spacing around pictograms
- Use as focal points, not supporting elements

---

### Visual Style

**Design Characteristics:**
- Line-based illustration style
- Consistent stroke weight (2-3px)
- Simplified forms with personality
- Occasional fills for emphasis
- Playful and entertaining motifs

**Color Approach:**
- Primarily monochrome (black on light backgrounds)
- Can use brand colors for emphasis
- Avoid excessive color complexity
- Maintain visual hierarchy

**Examples from System:**
- Hammer and ruler (building/construction)
- Paint drip (creativity)
- Serving dish (service/dining)
- Detective (investigation/search)
- Foam finger (sports/support)
- Hot dog (food/entertainment)

---

### Creating New Pictograms

**Guidelines:**
- Start with clear concept and purpose
- Sketch multiple variations
- Simplify details while maintaining personality
- Test at intended display size
- Ensure consistency with existing pictograms
- Add subtle unexpected elements

**Don'ts:**
- Don't over-complicate with excessive detail
- Don't use photorealistic rendering
- Don't mix illustration styles
- Don't sacrifice clarity for creativity

---

## Explanatory Illustrations

### Overview

Explanatory illustrations are our most expressive visual element. They're used for marketing, storytelling, and creating engaging brand moments. The illustration style is vibrant, playful, and uniquely Svenska Spel.

**Current Status:**
⚠️ The illustration style is under development. When finalized, the complete color palette will be established.

**Purpose:**
- Create memorable brand moments
- Support marketing campaigns
- Tell stories and convey emotion
- Differentiate from competitors
- Express brand personality fully

---

### Visual Characteristics

**Style Elements:**
- Bold, flat color fields
- Black outlines for definition
- Simplified geometric shapes
- Playful proportions
- Character and personality

**Color Palette (In Development):**
- Primary red (`#ED0000`)
- Secondary burgundy (`#62001D`)
- Pink/magenta accents
- Neutral grays and beiges
- Limited but bold color choices

**Subjects:**
- People in everyday situations
- Sports and gaming elements
- Everyday objects with personality
- Abstract shapes and forms
- Unexpected combinations

---

### When to Use Explanatory Illustrations

**Do Use For:**
- Marketing hero sections
- Campaign landing pages
- Social media graphics
- Large-format displays
- Storytelling moments
- Brand personality expression

**Avoid Using For:**
- Functional UI elements
- Small-scale applications
- Information-dense contexts
- Where precision is critical

---

### Size and Format

**Recommended Sizes:**
- Marketing headers: 1200px+ width
- Social media: Platform-specific dimensions
- Print materials: Vector format, high resolution

**Formats:**
- SVG for web (scalable, crisp)
- PNG for raster needs (with transparency)
- Print: Vector formats (AI, EPS, PDF)

---

### Creating New Illustrations

**Process:**
1. Define the concept and message
2. Sketch rough compositions
3. Refine shapes and proportions
4. Apply color palette
5. Add black outlines for definition
6. Test at various sizes
7. Ensure brand consistency

**Key Principles:**
- Keep it playful and approachable
- Surprise with unexpected details
- Maintain visual clarity
- Express energy and movement
- Show people enjoying themselves

---

## Implementation

### SVG Icons

Icons should be implemented as inline SVG for maximum flexibility:

```jsx
// Simple icon component
export function Icon({ name, size = 24, color = 'currentColor', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Icon paths */}
    </svg>
  );
}

// Usage
<Icon name="search" size={24} />
```

---

### Icon Library

All icons should be:
- Stored as individual SVG files
- Organized by category
- Named consistently (kebab-case)
- Documented with usage examples
- Exported at 24x24px base size

**File Organization:**
```
icons/
├── navigation/
│   ├── menu.svg
│   ├── search.svg
│   └── user.svg
├── actions/
│   ├── add.svg
│   ├── edit.svg
│   └── delete.svg
└── content/
    ├── document.svg
    └── image.svg
```

---

### Accessibility Implementation

**ARIA Labels:**
```jsx
// Icon with visible label
<button>
  <Icon name="search" aria-hidden="true" />
  <span>Search</span>
</button>

// Icon as label
<button aria-label="Close dialog">
  <Icon name="x" />
</button>

// Icon with title for tooltips
<Icon name="info" title="More information" />
```

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .icon-animated {
    animation: none;
    transition: none;
  }
}
```

---

## Best Practices

### Do's

✓ **Use simple icons for UI** - Keep navigation and actions clear  
✓ **Add personality thoughtfully** - Surprise without compromising usability  
✓ **Test at intended size** - Ensure icons are legible at final display size  
✓ **Maintain consistency** - Use established icon style and stroke weight  
✓ **Provide text alternatives** - Support screen readers and accessibility  
✓ **Use pictograms for storytelling** - Make complex ideas engaging  
✓ **Reserve illustrations for marketing** - Create memorable brand moments  
✓ **Animate with purpose** - Add life without distraction  

### Don'ts

✗ **Don't mix styles** - Maintain visual consistency across icon types  
✗ **Don't use icons too small** - Minimum 16px for simple icons  
✗ **Don't rely on color alone** - Ensure shape communicates meaning  
✗ **Don't over-detail simple icons** - Keep UI icons clean and clear  
✗ **Don't use pictograms in UI** - They're too detailed for small sizes  
✗ **Don't skip accessibility** - Always provide alternative text  
✗ **Don't animate excessively** - Respect user preferences and focus  

---

## Icon Audit Checklist

When creating or reviewing icons:

- [ ] Icon has clear, single purpose
- [ ] Visual style matches existing icons
- [ ] Tested at minimum size (16px)
- [ ] Works in monochrome
- [ ] Meets contrast requirements (3:1 minimum)
- [ ] Alternative text provided
- [ ] Touch target adequate (44x44px)
- [ ] Appropriate category assigned
- [ ] Documented with usage examples
- [ ] Exported at correct dimensions

---

## Related Guidelines

- [Typography](./Typography.md) - Pairing icons with text
- [Color System](./ColorSystem.md) - Icon colors and contrast
- [Accessibility](./Accessibility.md) - Icon accessibility requirements
- [Design Principles](./DesignPrinciples.md) - How icons support principles

---

## Examples

### Navigation Bar
```jsx
<nav>
  <button aria-label="Menu">
    <Icon name="menu" size={24} />
  </button>
  <button aria-label="Search">
    <Icon name="search" size={24} />
  </button>
  <button aria-label="User profile">
    <Icon name="user" size={24} />
  </button>
</nav>
```

### Feature Card with Pictogram
```jsx
<div className="feature-card">
  <Pictogram name="trophy" size={128} />
  <h3>Vinn stora priser</h3>
  <p>Delta i våra tävlingar och få chansen att vinna fantastiska priser.</p>
</div>
```

### Marketing Hero with Illustration
```jsx
<section className="hero">
  <div className="hero-content">
    <h1>UNDER 25?</h1>
    <p>Visa legitimation.</p>
    <button>Läs mer</button>
  </div>
  <Illustration name="couch-25" />
</section>
```

---

## Resources

### Icon Library Access
Contact the design team for access to the complete icon library in Figma.

### Design Assets
- Figma icon components library
- SVG export templates
- Animation guidelines
- Pictogram style guide (in development)
- Illustration style guide (in development)

---

## Updates & Changelog

**Version 1.0** (April 2026)
- Initial iconography system documentation
- Defined three icon levels: simple icons, pictograms, illustrations
- Established usage guidelines and best practices
- Added accessibility requirements
- Noted illustration style under development
