# Pricelabel

A fixed visual element that emphasizes key pricing information to enhance related content. Ideal for highlighting promotional offers, showcasing value, or emphasizing specific price points with optional subtle angling for visual interest.

---

## Usage

**When to use:**

A pricelabel emphasizes key pricing information to enhance related content. Price labels are fixed elements that can be subtly angled to improve visual interest and context.

**Key Use Cases:**

- **Pricing highlights**: Emphasize specific price points or amounts
- **Promotional tags**: Showcase special offers or discounts
- **Value emphasis**: Draw attention to pricing benefits
- **Price callouts**: Highlight key pricing details in product displays
- **Offer labels**: Display limited-time pricing or deals
- **Discount indicators**: Show savings or special pricing

**Placement Guidelines:**

- Ensure clear visual separation from main content
- Don't obscure critical information
- Maintain balanced gap between pricelabel and associated content
- Create clear connection without overcrowding

**Commonly used with:**
- Cards - for product pricing displays
- Buttons - near call-to-action elements
- Images - overlaid on product visuals
- Promotional content - highlighting offers
- Product listings - emphasizing prices

---

## Semantic Purpose

### Pricelabel vs Badge vs Callout

**Pricelabel:**
- **Purpose**: Emphasize pricing information
- **Content**: Price-specific text and amounts
- **Visual**: Fixed element with optional subtle rotation
- **Edge options**: Leading, Trailing, or Double edges for anchoring
- **When**: Highlighting pricing, offers, or value

**Badge:**
- **Purpose**: Status indicators, counts, or labels
- **Content**: Brief text, numbers, or status
- **Visual**: Small, compact indicator
- **Edge options**: No edge anchoring
- **When**: Notifications, status, or categorization

**Callout:**
- **Purpose**: Editorial and marketing messaging
- **Content**: Short phrases and headlines
- **Visual**: Larger element with distinctive typography
- **Rotation**: More pronounced angles allowed
- **When**: General marketing emphasis, not price-specific

---

## Examples

### ✅ Correct Usage

**Do:**
- Use for pricing highlights and promotional offers
- Keep angles subtle (maximum 15°) to maintain readability
- Keep phrases short and concise
- Use two rows if label text becomes too long
- Maintain balanced gap between pricelabel and associated content
- Ensure clear visual separation from main content
- Choose appropriate edge direction for layout context
- Use emphasis variant for high-priority pricing messages

**Good Examples:**
- "50% OFF" pricelabel on promotional product card
- "€99" price highlight on product listing
- "Special Offer" label with subtle rotation on campaign banner
- "From €49" value emphasis on service card
- "Limited Time" promotional tag with leading edge

### ❌ Incorrect Usage

**Don't:**
- Don't rotate beyond 15° (reduces readability)
- Don't obscure critical information with pricelabel placement
- Don't overcrowd content with pricelabel
- Don't use for non-pricing content (use Badge or Callout instead)
- Don't create overly long label text
- Don't use rotation excessively or without intention

**Common Mistakes:**
- Excessive rotation angle making text hard to read
- Placing pricelabel over important content
- Using pricelabel for general labels instead of pricing
- Creating too much visual clutter with poor spacing
- Long text that wraps awkwardly
- Inconsistent edge direction within same layout

---

## API

### Anatomy

**Structure:**
```
A. Container (required) - Background surface with slightly rounded corners
B. Label (required) - Text highlighting pricing details
C. Edges (optional) - Leading, Trailing, or Double edges for anchoring
```

**Requirements:**
- At minimum: Container + Label
- Optional: Edge styling for anchoring context
- Fixed element (not interactive)

### Properties

#### Label
- **Type**: String
- **Required**: Yes
- **Description**: Text highlighting the pricing details
- **Guidelines**: Keep phrases short; use two rows if text becomes too long
- **Examples**: "50% OFF", "€99", "Special Offer", "From €49"

#### Variant
- **Type**: Enum
- **Required**: No
- **Default**: `brand`
- **Options**:
  - `brand`: Primary brand styling for standard emphasis
  - `brand-inverted`: Reversed colors for dark or high-contrast surfaces
  - `emphasis`: High-attention styling for key messages and critical pricing
- **Description**: Visual styling for different contexts and emphasis levels

#### Edge
- **Type**: Enum
- **Required**: No
- **Default**: None (no edge)
- **Options**:
  - `leading`: Anchors to the left, extends edge on left side
  - `trailing`: Anchors to the right, extends edge on right side
  - `double`: Anchors in both directions, extends edges on both sides
- **Description**: Direction of edge anchoring to connect label to associated context
- **When to use**: When pricelabel needs visual connection to adjacent content

#### Size
- **Type**: Enum
- **Required**: No
- **Default**: `md`
- **Options**:
  - `xs`: Extra small sizing
  - `sm`: Small sizing
  - `md`: Medium sizing (default)
  - `lg`: Large sizing
  - `xl`: Extra large sizing
- **Description**: Scale of the pricelabel
- **Guidelines**: Choose size based on visual hierarchy and context

#### Rotation
- **Type**: Number (degrees)
- **Required**: No
- **Default**: 0
- **Range**: -15° to +15°
- **Description**: Angle of rotation for visual interest
- **Guidelines**: 
  - Use sparingly and intentionally
  - Keep angles subtle (maximum 15°)
  - Maintain readability
  - Don't use rotation excessively

#### Rows
- **Type**: Number
- **Required**: No
- **Default**: 1
- **Options**: 1 or 2
- **Description**: Number of text rows for label
- **When to use**: Use two rows if label text becomes too long for single row

### Behavior

**Fixed Element:**
- Pricelabel is a static, non-interactive element
- Provides visual emphasis only
- Does not respond to user interaction
- Fixed position relative to associated content

**Visual Anchoring:**
- Edge property creates visual connection to adjacent content
- Leading edge connects to left-side content
- Trailing edge connects to right-side content
- Double edge creates bidirectional connection

**Rotation Behavior:**
- Optional subtle rotation adds visual interest
- Applied to entire pricelabel container
- Maximum 15° in either direction
- Should maintain readability at all angles

---

## Customization

### Variant Selection

**Brand (Default):**
- Primary brand styling
- Standard emphasis level
- Works on light backgrounds
- General pricing highlights

**Brand Inverted:**
- Reversed colors
- For dark or high-contrast surfaces
- Maintains brand consistency on darker backgrounds
- Ensures readability across background variations

**Emphasis:**
- High-attention styling
- For key messages and critical pricing
- Maximum visual prominence
- Use for most important pricing callouts

**Selection Guidelines:**
- Use Brand for standard pricing highlights
- Use Brand Inverted on dark surfaces
- Reserve Emphasis for high-priority pricing messages
- Maintain consistency within same layout

### Edge Direction

**Leading Edge:**
- Anchors to the left
- Use when pricelabel relates to content on the left
- Creates leftward visual connection
- Common for left-aligned layouts

**Trailing Edge:**
- Anchors to the right
- Use when pricelabel relates to content on the right
- Creates rightward visual connection
- Common for right-aligned layouts

**Double Edge:**
- Anchors in both directions
- Use when pricelabel spans or connects multiple elements
- Creates bidirectional visual flow
- Use sparingly for maximum impact

**No Edge:**
- Standalone pricelabel without anchoring
- Use when no directional connection needed
- Cleaner, simpler appearance
- Most common configuration

### Size Selection

Choose size based on:
- Visual hierarchy in the layout
- Importance of the pricing information
- Available space
- Surrounding content size
- Context (mobile vs desktop)

**Size Guidelines:**
- **XS**: Subtle pricing notes, secondary information
- **SM**: Standard product pricing, minor highlights
- **MD**: Default size for most use cases
- **LG**: Featured pricing, important offers
- **XL**: Hero pricing, major promotional emphasis

### Rotation Guidelines

**When to Use Rotation:**
- Adding visual interest to static layouts
- Creating dynamic feel in promotional content
- Drawing attention to special offers
- Breaking up grid-based layouts

**Rotation Best Practices:**
- Maximum 15° angle
- Use sparingly and intentionally
- Maintain readability first
- Test at different viewport sizes
- Ensure text remains clear
- Consider accessibility implications

**When NOT to Rotate:**
- Dense layouts with multiple pricelabels
- When readability might be compromised
- Small text sizes
- Mobile-first contexts where space is limited

### Content Guidelines

**Label Text:**
- Keep phrases short and concise
- Focus on pricing information
- Use clear, scannable text
- Avoid jargon or complex terms

**Single Row:**
- Best for short pricing callouts
- "50% OFF", "€99", "Special Offer"
- Maximum readability
- Cleanest appearance

**Two Rows:**
- Use when single row becomes too long
- Break at logical points
- Maintain balance between rows
- Example: "Special / Offer" or "From / €49"

---

## Accessibility

**Readability:**
- Ensure sufficient color contrast (WCAG AA minimum)
- Keep rotation subtle (maximum 15°) for readability
- Use clear, legible font sizes
- Test readability at all rotation angles
- Verify contrast for all variants

**Text Clarity:**
- Make pricing information easily readable
- Don't rely solely on color to convey meaning
- Ensure adequate font size for rotated text
- Test with screen magnification

**Visual Hierarchy:**
- Pricelabel should not obscure critical content
- Maintain clear separation from main content
- Ensure pricing emphasis is intentional and clear
- Don't create visual clutter

**Screen Reader Considerations:**
- Provide text alternative for pricing information
- Ensure pricing details are accessible to assistive technologies
- Don't hide critical pricing in visual-only elements
- Use semantic HTML for pricing content

**Best Practices:**
- Test at different zoom levels
- Verify contrast ratios for all variants and backgrounds
- Ensure rotated text remains readable
- Don't rely on rotation alone to convey importance
- Make sure pricing information is programmatically accessible

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Pricelabel/Pricelabel.tsx` (if available)
