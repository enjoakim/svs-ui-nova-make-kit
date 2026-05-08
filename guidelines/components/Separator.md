# Separator

A visual divider between different sections within a design. The separator helps organize content, create visual rhythm, and establish hierarchy.

---

## Usage

**When to use:**

Use the separator to organize content, create visual rhythm, and establish hierarchy in your design. The separator serves the role of a visual divider between different sections within a design.

**Key Use Cases:**

- **Content organization**: Dividing different sections or groups of content
- **Visual rhythm**: Creating consistent spacing patterns in layouts
- **Hierarchy establishment**: Showing clear boundaries between content levels
- **List separation**: Dividing items in lists or menus
- **Section breaks**: Marking transitions between different content areas
- **Layout structure**: Defining visual boundaries in complex layouts

**Important Guidelines:**

- **Use sparingly**: Be mindful of not overusing separators
- **Avoid clutter**: Overusing can result in a cluttered impression
- **Combine with spacing**: Use separators in conjunction with spacing to create an appealing design
- **Meaningful separation**: Use separators where they separate content in a meaningful way

**Commonly used with:**
- Lists - for dividing list items
- Cards - for separating card content sections
- Forms - for grouping form sections
- Navigation - for menu item separation
- Content sections - for visual breaks between areas
- Layouts - for structural division

---

## Semantic Purpose

### Separator vs Spacing vs Borders

**Separator:**
- **Purpose**: Visual divider between sections
- **Appearance**: Standalone horizontal or vertical line
- **Use**: Organize and divide content
- **When**: Need explicit visual division

**Spacing:**
- **Purpose**: Create breathing room between elements
- **Appearance**: Empty space (no visible line)
- **Use**: Improve readability and visual hierarchy
- **When**: Subtle separation is sufficient

**Borders:**
- **Purpose**: Define boundaries of containers
- **Appearance**: Lines around entire elements
- **Use**: Enclose or frame content
- **When**: Need to contain or highlight specific elements

---

## Examples

### ✅ Correct Usage

**Do:**
- Use separators sparingly
- Use to organize content meaningfully
- Create visual rhythm in layouts
- Establish clear hierarchy
- Combine separators with appropriate spacing
- Use where explicit visual division is needed
- Maintain consistent separator styling throughout design

**Good Examples:**
- Between major sections of a page
- Dividing navigation menu items
- Separating different types of content in a list
- Between form sections
- Dividing header and content areas
- In card footers to separate actions from content

### ❌ Incorrect Usage

**Don't:**
- Don't overuse separators
- Don't use when spacing alone would suffice
- Don't create cluttered designs with too many lines
- Don't use inconsistent separator styles
- Don't use separators where they don't add meaningful division
- Don't ignore spacing when using separators

**Common Mistakes:**
- Separator between every single list item when spacing would be cleaner
- Multiple separators close together creating visual noise
- Using separators and heavy borders together (redundant)
- Inconsistent separator placement
- Separators without adequate surrounding spacing
- Using separators when content grouping is already clear

---

## API

### Anatomy

**Structure:**
```
A. Stroke (required) - Single horizontal or vertical line
```

**Requirements:**
- Only component: A stroke (horizontal or vertical line)
- Simplest possible anatomy

### Properties

#### Orientation
- **Type**: Enum
- **Required**: No
- **Default**: `horizontal`
- **Options**:
  - `horizontal`: Horizontal divider line (left to right)
  - `vertical`: Vertical divider line (top to bottom)
- **Description**: Direction of the separator line
- **Common**: Horizontal is most common; vertical used in toolbars, sidebars

#### Variant
- **Type**: Enum
- **Required**: No
- **Default**: `default`
- **Options**:
  - `default`: Standard separator appearance
  - Custom variants may exist based on design system
- **Description**: Visual style of the separator

#### Thickness
- **Type**: Number (pixels)
- **Required**: No
- **Default**: 1px (typically)
- **Description**: Stroke width of the separator
- **Guidelines**: Usually subtle (1px); thicker for stronger emphasis

#### Color
- **Type**: Color
- **Required**: No
- **Default**: System default separator color
- **Description**: Color of the separator stroke
- **Guidelines**: 
  - Typically subtle, low-opacity color
  - Should not dominate the design
  - Ensure adequate contrast while remaining subtle

#### Length
- **Type**: String | Number
- **Required**: No
- **Default**: `100%` (full width/height)
- **Description**: Length of the separator
- **Options**: 
  - `100%`: Full width (horizontal) or height (vertical)
  - Custom: Specific pixel or percentage value

#### Spacing
- **Type**: String | Number
- **Required**: No
- **Description**: Margin or padding around the separator
- **Important**: Use separators in conjunction with spacing for appealing design

#### AriaHidden
- **Type**: Boolean
- **Required**: No
- **Default**: true
- **Description**: Whether separator is hidden from screen readers
- **Note**: Typically decorative, so hidden from assistive technology

#### Role
- **Type**: String
- **Required**: No
- **Default**: `separator`
- **Description**: ARIA role for semantic meaning
- **Options**: `separator`, `none` (if purely decorative)

### Behavior

**Static Element:**
- Separator is a non-interactive, purely visual element
- Provides visual structure only
- No user interaction
- No state changes

**Layout:**
- Horizontal separators typically span full width of container
- Vertical separators span full height of section
- Respects container boundaries
- Works with flexbox, grid, and other layout systems

**Responsive:**
- May change orientation on different screen sizes
- May be hidden on mobile if redundant with spacing
- Adapts to container width/height

---

## Customization

### Orientation

**Horizontal (Default):**
- Left to right divider
- Most common orientation
- Used for vertical content separation
- Typical use: Between content sections, list items

**Vertical:**
- Top to bottom divider
- Less common
- Used for horizontal content separation
- Typical use: Between toolbar items, sidebar sections, column divisions

### Thickness

**Subtle (1px):**
- Most common
- Light visual division
- Non-intrusive
- Best for most use cases

**Emphasized (2px+):**
- Stronger visual division
- Use sparingly
- For major section breaks
- Can feel heavy if overused

### Color and Opacity

**Subtle Colors:**
- Low-opacity borders (10-20% opacity)
- Neutral grays
- Adapts to light/dark themes
- Most common approach

**Emphasized Colors:**
- Brand colors (use sparingly)
- Higher contrast
- For important divisions
- Can dominate if overused

### Spacing Guidelines

**With Separators:**
- Always provide adequate spacing above and below
- Spacing should be balanced
- Typical: Equal spacing on both sides
- Use separator + spacing together for best results

**Without Separators:**
- Often spacing alone is sufficient
- Cleaner, less cluttered appearance
- Consider if separator is truly necessary

---

## Best Practices

### When to Use Separators

**Good Use Cases:**
- Clear section breaks between different content types
- Long lists where grouping helps comprehension
- Between header/footer and main content
- In toolbars to group related actions
- Between form sections

**When NOT to Use:**
- Between every single item (use spacing instead)
- When content grouping is already clear
- In minimalist designs where spacing is sufficient
- When it creates visual clutter

### Design Principles

**Sparingly:**
- Use separators sparingly to avoid clutter
- Less is often more
- Don't overuse separators

**Meaningfully:**
- Each separator should serve a purpose
- Use where they separate content in a meaningful way
- Don't add separators just for decoration

**Consistently:**
- Maintain consistent separator styling
- Use same thickness, color, spacing throughout
- Predictable placement patterns

**With Spacing:**
- Always combine separators with appropriate spacing
- Spacing + separators = appealing design
- Never place separators without surrounding space

---

## Accessibility

**Decorative Element:**
- Separators are typically purely visual/decorative
- Usually hidden from screen readers (aria-hidden="true")
- Convey visual structure, not content
- Don't convey critical information

**Semantic HTML:**
- Use `<hr>` for horizontal rules when semantic
- Use `role="separator"` for ARIA compliance
- Or `role="none"` / `aria-hidden="true"` if purely decorative

**Best Practices:**
- Don't rely on separators alone to convey meaning
- Ensure content structure is clear without visual separators
- Screen readers rely on heading hierarchy and semantic HTML
- Separators are enhancement, not requirement
- Test design with CSS disabled to ensure structure remains clear

**When Separator is Not Decorative:**
- If separator has semantic meaning, don't hide from screen readers
- Provide appropriate ARIA role
- Example: Separator in toolbar with `role="separator"` and `aria-orientation`

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Separator/Separator.tsx`
