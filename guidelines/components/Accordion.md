# Accordion

Accordion provides a frame with a header that can be expanded to reveal additional content. Multiple accordion elements may be grouped together.

---

## Usage

**When to use:**
- Providing additional information or controls in Q&A articles or help sections
- Adding optional form controls that are not mandatory for task completion
- Revealing extra content without navigating away from the current page

**Commonly used with:**
- Forms - for optional/advanced settings
- Help/FAQ sections - for expandable questions and answers
- Content-heavy pages - to organize information hierarchically

---

## Semantic Purpose

### Component Groups:

1. **Collapsed State**
   - **Title**: Indicates what content will be revealed
   - **Stroke**: Visual divider between accordion items
   - **Icon**: Indicates collapsed state (rotates on interaction)

2. **Expanded State**
   - **Title**: Header remains visible
   - **Stroke**: Visual divider between accordion items
   - **Icon**: Indicates expanded state (rotated 180°)
   - **Content**: The revealed information/controls

---

## Examples

### ✅ Correct Usage

**Do:**
- Use Accordion to reveal optional or extra information or controls
- Use for content that can be hidden by default without affecting task completion
- Group related accordion items together
- Provide clear, descriptive titles that indicate what will be revealed

### ❌ Incorrect Usage

**Don't:**
- Don't hide critical information or mandatory controls in a form inside an accordion
- Don't use for content that users need to see immediately
- Don't nest accordions within accordions (creates confusing navigation)
- Don't use when all content should be visible by default

### Common Mistakes:
- Hiding required form fields inside collapsed accordions
- Using unclear titles that don't describe the content
- Making all content hidden by default when users need overview

---

## API

### Anatomy

Accordion consists of a frame containing a title and an icon, along with a content section in its expanded state.

**Structure:**
1. **Collapsed**
   - Title
   - Stroke
   - Icon
2. **Expanded**
   - Title
   - Stroke
   - Icon
   - Content

### Properties

#### Title
- **Type**: String (multi-line supported)
- **Required**: Yes
- **Description**: The title of the frame displayed both in the collapsed and expanded state. The title text may overflow into multiple lines if required.

#### Stroke
- **Type**: Visual element
- **Description**: The stroke serves as a visual divider between the base items of the Accordion, helping to distinguish individual sections and improve readability.

#### Icon
- **Type**: Interactive icon
- **States**: Collapsed (default), Expanded (rotated 180°)
- **Animation**: Rotates 180 degrees during state transition
- **Description**: Indicates whether the accordion is currently in its collapsed or expanded state.

#### Content
- **Type**: Flexible content container
- **Accepts**: Text, lists, graphics, form controls
- **Description**: The content revealed in the expanded state. Allows for freedom in content type - typically text or lists, but can include graphics or additional form controls.

### Behavior

**States:**
- **Collapsed**: Default state, content hidden
- **Expanded**: Content revealed, pushes content below (unlike dropdown/popover)

**Interaction:**
- Click/tap on title or icon to toggle between states
- Smooth expansion/collapse animation
- Icon rotates 180° during transition

### Customization

**Horizontal Sizing:**
- Can be extended or contracted horizontally as desired
- Usually expands to the horizontal edges of the surrounding frame

**Theme Variants:**
- **Default**: Standard with borders and elevation
- **Flat**: Stripped of borders and elevation, intended for use within cards with expandable sub-sections

---

## Alternatives

**Contextual Dialog:**  
Specifically for contextual help, a contextual dialog may be the preferable choice of component.

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Accordion-1/Accordion.tsx`
