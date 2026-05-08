# Callout

Callouts are static highlighting elements used to draw attention to specific messages or content. They provide visual emphasis for editorial or marketing messaging through distinctive typography and orientation.

---

## Usage

**When to use:**

Callouts are used to highlight important messages, promotional content, or editorial statements that need to stand out from the main content. They're particularly effective for:

- **Marketing campaigns**: Promotional messages, special offers, announcements
- **Editorial content**: Featured quotes, highlights, key takeaways
- **Event promotion**: Upcoming events, deadlines, important dates
- **Product highlights**: New features, special offerings, unique selling points
- **Seasonal messaging**: Holiday themes, seasonal promotions
- **Brand messaging**: Taglines, mission statements, brand values

**Commonly used with:**
- Hero sections - for promotional messaging
- Landing pages - for campaign highlights
- Product pages - for feature callouts
- Event pages - for date/time emphasis
- Marketing banners - for special offers
- Editorial content - for pull quotes or highlights

---

## Semantic Purpose

### Callout Variants

There are three callout variants, each serving a distinct visual and contextual purpose:

#### 1. **Brand**
- **Purpose**: Primary expressive design with brand identity
- **When to use**: Standard promotional or editorial messaging
- **Visual**: Brand colors, distinctive typography, rotated orientation
- **Context**: General marketing, editorial highlights, standard callouts

#### 2. **Brand Inverted**
- **Purpose**: Contrasting version for dark surfaces
- **When to use**: On dark backgrounds where standard brand variant lacks contrast
- **Visual**: Inverted colors maintaining brand identity
- **Context**: Dark-themed sections, contrasting backgrounds

#### 3. **Emphasis**
- **Purpose**: Highest attention and visual impact
- **When to use**: Critical messages requiring maximum visibility
- **Visual**: Bold colors, strong contrast, eye-catching design
- **Context**: Limited-time offers, urgent messaging, high-priority announcements

### Row Configurations

Callouts can be configured with different row layouts for message flexibility:

#### **Single Row**
- **When to use**: Short, punchy messages (1-5 words)
- **Behavior**: Text on single line, can be rotated
- **Best for**: Taglines, short phrases, single words

#### **Two Rows (Top-Aligned)**
- **When to use**: Longer messages split across two lines
- **Behavior**: Text split into two rows, top-aligned, can rotate together
- **Best for**: Phrases that benefit from line breaks, emphasis on first line

#### **Two Rows (Bottom-Aligned)**
- **When to use**: Longer messages with emphasis on second line
- **Behavior**: Text split into two rows, bottom-aligned, can rotate together
- **Best for**: Messages where second line is the focus or punchline

### Size Hierarchy

Three sizes provide flexibility for different contexts:

#### **Small**
- **Font size**: text-lg
- **When to use**: Subtle highlights, secondary callouts, space-limited contexts
- **Impact**: Low to medium attention

#### **Medium**
- **Font size**: text-4xl
- **When to use**: Standard promotional messaging, primary callouts
- **Impact**: Medium to high attention
- **Default**: Most common size for general use

#### **Large**
- **Font size**: text-5xl
- **When to use**: Hero sections, maximum impact messaging
- **Impact**: Highest attention
- **Note**: Use sparingly for critical messaging

---

## Examples

### ✅ Correct Usage

**Do:**
- Keep phrases short and impactful (preferably under 10 words)
- Use rotation to create visual interest (max 15° rotation)
- Maintain sufficient safe space around callout (minimum 24px)
- Adjust line lengths to differ in two-row layouts for visual interest
- Use two rows for longer messages rather than cramming into one line
- Choose variant based on background (brand vs brand inverted)
- Use emphasis variant sparingly for truly critical messages
- Ensure callout doesn't obscure important content
- Maintain clear visual separation from main content

**Good Examples:**
- "New Season Starts Now" (single row, medium size)
- "Limited Time / Only Today" (two rows top-aligned, emphasis variant)
- "Spring Sale / Up to 50% Off" (two rows bottom-aligned, large size)
- "Don't Miss Out" (single row, rotated 10°, small size)

### ❌ Incorrect Usage

**Don't:**
- Don't exceed 15° rotation (becomes hard to read)
- Don't place callouts over critical UI elements or text
- Don't use multiple callouts competing for attention
- Don't make lines equal length in two-row layouts (reduces visual interest)
- Don't use callouts for functional UI elements or actions
- Don't use long sentences or paragraphs
- Don't ignore safe space requirements
- Don't use emphasis variant for standard messaging
- Don't rotate callouts beyond readability

**Common Mistakes:**
- Over-rotating text (>15°) making it difficult to read
- Placing callout on top of important content or CTAs
- Using same line length for both rows (looks rigid)
- Cramming long messages into single row
- Multiple callouts creating visual clutter
- Using callouts as interactive elements
- Insufficient spacing around callout

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Label (required - text content)
C. Connecting radius (two-row variants only)
```

**Requirements:**
- At minimum: Container + Label
- Two-row variants: Container + Label (row 1) + Label (row 2) + Connecting radius

### Properties

#### Variant
- **Type**: Enum
- **Required**: Yes
- **Default**: `brand`
- **Options**:
  - `brand`: Primary expressive design with brand identity
  - `brand-inverted`: Contrasting version for dark surfaces
  - `emphasis`: Highest attention and impact
- **Description**: Determines visual style and color scheme

#### Rows
- **Type**: Enum
- **Required**: Yes
- **Default**: `single`
- **Options**:
  - `single`: Text on one line
  - `two-top-aligned`: Two rows with top alignment
  - `two-bottom-aligned`: Two rows with bottom alignment
- **Description**: Layout configuration for message text

#### Size
- **Type**: Enum
- **Required**: Yes
- **Default**: `medium`
- **Options**:
  - `small`: text-lg font size
  - `medium`: text-4xl font size
  - `large`: text-5xl font size
- **Description**: Controls the font size and overall scale

#### Label
- **Type**: String
- **Required**: Yes
- **Max Length**: Keep short (preferably under 10 words)
- **Description**: The text content displayed in the callout
- **Guidelines**: Use impactful, concise phrases

#### LabelRow2
- **Type**: String
- **Required**: Yes (for two-row variants)
- **Description**: The second line of text for two-row layouts
- **Guidelines**: Vary line length from first row for visual interest

#### Rotation
- **Type**: Number
- **Required**: No
- **Default**: 0
- **Range**: -15° to +15°
- **Unit**: Degrees
- **Description**: Rotation angle for visual interest
- **Guidelines**: Keep rotation subtle and within ±15° for readability

#### SafeSpace
- **Type**: Number
- **Required**: No
- **Default**: 24
- **Unit**: Pixels
- **Description**: Minimum spacing around callout to ensure it doesn't overlap content
- **Guidelines**: Maintain at least 24px clearance on all sides

### Behavior

**Static Element:**
- Callouts are non-interactive visual elements
- No hover, click, or focus states
- Purely decorative/informational
- Should not be used for interactive actions

**Rotation:**
- Rotation can be applied to create visual dynamism
- Maximum recommended rotation: ±15°
- Beyond 15°, readability significantly degrades
- Rotation applied to entire callout (container + labels)

**Two-Row Layouts:**
- Lines should have different lengths for visual interest
- Top-aligned: Emphasis on first line
- Bottom-aligned: Emphasis on second line
- Connecting radius joins the two rows visually

### Placement

**General Guidelines:**
- Position in areas that complement (not compete with) main content
- Maintain minimum 24px safe space around callout
- Avoid placing over critical UI elements or text
- Consider visual hierarchy: callouts should enhance, not distract
- Works best in hero sections, feature areas, or marketing sections

**Spacing Requirements:**
- **Minimum safe space**: 24px clearance on all sides
- **Avoid overlap**: Don't place on functional elements (buttons, forms, navigation)
- **Visual separation**: Ensure clear distinction from surrounding content

**Common Placements:**
- **Hero sections**: Large size, prominent positioning
- **Feature highlights**: Medium size, near related content
- **Promotional banners**: Emphasis variant for urgency
- **Editorial content**: Small to medium, as pull quotes or highlights

### Customization

#### Message Length

**Best Practices:**
- **Single row**: 1-5 words ideal
- **Two rows**: 6-10 words total (split across rows)
- **General rule**: Shorter is better for impact

**Line Length Variation (Two-Row):**
- Adjust line lengths to differ for visual interest
- Avoid equal-length lines (appears rigid)
- Create dynamic composition through varied lengths

#### Rotation Guidelines

**Recommended Ranges:**
- **Subtle**: 3-7° rotation (gentle dynamism)
- **Moderate**: 8-12° rotation (noticeable angle)
- **Maximum**: 15° rotation (approaching readability limit)
- **Avoid**: >15° rotation (difficult to read)

#### Variant Selection

**Brand vs Brand Inverted:**
- Use Brand on light/neutral backgrounds
- Use Brand Inverted on dark backgrounds
- Ensure sufficient contrast with background

**Emphasis:**
- Reserve for truly critical or urgent messaging
- Don't overuse (diminishes impact)
- Typically for limited-time offers or high-priority announcements

---

## Accessibility

**Readability Considerations:**
- Keep rotation within ±15° for legibility
- Ensure sufficient color contrast with background
- Use clear, readable typography
- Don't rely on callout alone to convey critical information
- Provide alternative text representation for screen readers

**Visual Clarity:**
- Maintain safe space to prevent overlap
- Don't place on busy backgrounds or images
- Ensure callout stands out but doesn't obscure content
- Consider users with visual impairments when selecting colors

**Best Practices:**
- Include aria-label for screen reader context
- Mark as decorative if purely visual
- Ensure core message is also available in accessible format
- Test with contrast checkers
- Don't use callouts for essential functionality or navigation

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Callout/Callout.tsx`
