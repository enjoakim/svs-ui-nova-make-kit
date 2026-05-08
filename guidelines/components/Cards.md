# Cards

A card is a container that holds information and actions related to a single concept or object.

---

## Usage

**When to use:**

Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant and actionable information. Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.

Cards can give information prominence and create predictable patterns. While they're very flexible, it's important to use them consistently for particular use cases across experiences.

**Key Use Cases:**

- **Content presentation**: Displaying articles, products, or media
- **Data summaries**: Quick overviews of key information
- **Action containers**: Grouping related actions and controls
- **Navigation**: Entry points to detailed views or pages
- **Collections**: Organizing sets of related items
- **Interactive selections**: Choosing options like checkboxes or radio groups

**Commonly used with:**
- Grids and lists - for organizing multiple cards
- Buttons and links - for actions within cards
- Images and media - for visual content
- Typography hierarchy - for headings, preambles, and supporting text
- Bottom sheets - as an alternative to expanding cards for lengthy content

---

## Semantic Purpose

### Card vs Container

**What is a Card?**

A card is, by default, interactive, but it isn't defined by its interactivity — it's defined by **semantic independence**. A card represents a distinct subject or entity, something that has standalone meaning.

**What is a Container?**

A container isn't defined by its flatness — it's defined by **structural purpose**. A container is a group or section that holds things.

**Key Distinction:**

Both can be reusable. What separates them is whether the component **represents a thing** (card) or **holds things** (container).

| Attribute | Card | Container |
|-----------|------|-----------|
| **Represents** | A distinct subject or entity | A group or section |
| **Standalone meaning** | Yes | No |
| **Interactive** | Optional (by default, yes) | Usually not (by default, no) |
| **Reusability scope** | Cross-content | Contextual |

### Card Types

There are three types of cards, each providing different levels of visual separation:

#### 1. **Elevated**
- **Purpose**: Moderate visual separation using elevation
- **Visual**: Drop shadow providing more separation than filled cards, but less than outlined
- **When to use**: Standard emphasis with depth
- **Elevation**: Shadow creates sense of layering

#### 2. **Filled**
- **Purpose**: Subtle separation from background
- **Visual**: Solid background color without border or shadow
- **When to use**: Low emphasis, minimal separation needed
- **Emphasis**: Less than elevated or outlined cards

#### 3. **Outlined**
- **Purpose**: Clear visual boundary
- **Visual**: Border/stroke around the container
- **When to use**: Greater emphasis needed, strongest separation
- **Emphasis**: Highest visual boundary of the three types

### Defining Properties

Cards have four defining properties that distinguish them as a component:

#### 1. **Contained**
- Each card is a standalone object, even within a card group
- The actions and information within one card are distinct from others
- Semantic independence from surrounding content

#### 2. **Summarized**
- A card focuses on high-level details to inform users of the card's purpose
- Aids in deciding whether to interact with more content
- Provides overview rather than full details

#### 3. **Interactive**
- Cards are, by default, interactive whether they have nested actions or not
- Can function as a button, contain actions, or enable selection
- Interactivity is optional but default

#### 4. **Reusable**
- While a card doesn't automatically have to be placed in multiple contexts, it's by default a reusable component
- Cross-content reusability scope
- Designed for consistency across experiences

---

## Examples

### ✅ Correct Usage

**Do:**
- Use cards to display content and actions on a single topic
- Establish clear hierarchy with text and images
- Keep cards scannable with relevant, actionable information
- Use card types consistently for particular use cases
- Use 16px (p-4) internal padding by default
- Group cards in collections (grids, lists, carousels)
- Make entire card surface clickable when there's one obvious action
- Use buttons/links within cards when there are multiple actions
- Add chevron indicator for expandable cards (commonly top right)
- Keep expanded content short and contextual
- Use bottom sheet or page navigation for lengthy content instead of expanding

**Good Examples:**
- Product card with image, title, price, and "Add to Cart" button
- Article card with thumbnail, headline, preamble, and read time
- Dashboard metric card showing key stats at a glance
- Expandable FAQ card with chevron indicator
- Selection card functioning like a radio button option
- Card collection in responsive grid layout

### ❌ Incorrect Usage

**Don't:**
- Don't make cards hard to scan with poor hierarchy
- Don't use cards inconsistently across similar contexts
- Don't wrap long content without considering expansion or navigation
- Don't allow internal scrolling on mobile (creates two scroll bars)
- Don't expand cards with very long content (use bottom sheet instead)
- Don't make expandable cards without clear indicators
- Don't place cards without considering layout and organization
- Don't ignore padding adjustments for specific content needs
- Don't use cards when a simple container would suffice

**Common Mistakes:**
- Card lacking clear visual hierarchy
- Inconsistent padding across similar cards
- Mobile card with internal scrolling
- Expanding card with excessive content
- No chevron indicator on expandable card
- Poorly organized card collections
- Using card when semantic independence isn't present
- Confusing card interactivity patterns

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Headline (optional)
C. Preamble (optional)
D. Supporting text (optional)
E. Image (optional)
F. Button (optional)
```

**Requirements:**
- At minimum: Container (only required element)
- Card layouts can vary to support the types of content they contain
- The configuration above represents a common arrangement

### Properties

#### Type
- **Type**: Enum
- **Required**: Yes
- **Default**: `elevated`
- **Options**:
  - `elevated`: Drop shadow for moderate separation
  - `filled`: Subtle background separation
  - `outlined`: Visual border boundary
- **Description**: Determines the visual separation style of the card

#### Padding
- **Type**: Number | Enum
- **Required**: No
- **Default**: `16` (p-4 in Tailwind)
- **Options**: Any valid spacing value
- **Description**: Internal padding of the card container
- **Guidelines**: Default 16px works for most cases; adjust for content density or when images need to span full width

#### Interactive
- **Type**: Boolean
- **Required**: No
- **Default**: true
- **Description**: Whether the card is interactive
- **When true**: Card responds to user interaction (entire surface clickable)
- **When false**: Card is display-only (may still contain interactive children)

#### Expandable
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether the card can expand to show additional content
- **Note**: Should include expansion indicator (e.g., chevron) when true

#### FullWidthContent
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether content (like images) spans full card width without padding
- **Use case**: Hero images, full-bleed media

#### OnClick
- **Type**: Function
- **Required**: No (Yes if interactive=true and no child actions)
- **Description**: Callback function when entire card is clicked
- **When to use**: Single obvious action for the card

#### AriaLabel
- **Type**: String
- **Required**: Yes (if interactive and no visible text)
- **Description**: Accessible label for screen readers

### Behavior

**Padding Modes:**

1. **Default (16px)**
   - Standard internal padding (p-4)
   - Provides consistent content layout and spacing
   - Should be the standard choice in most cases

2. **Custom Padding**
   - Adjusted to better suit the content
   - Images may need to span full width (no padding)
   - Headings may need less spacing if typography already adds space
   - Guided by content density inside the card

**Interaction Modes:**

1. **Entire Card Interactive**
   - When there is one obvious action
   - Entire card surface functions as a button
   - Clear hover/focus states
   - Single click target

2. **Multiple Actions**
   - Card holds buttons and links
   - Individual interactive elements within card
   - Card container may not be directly interactive
   - Multiple click targets

3. **Selection Mode**
   - Card used like checkbox or radio button
   - Selected state visually indicated
   - Can be part of a selection group
   - Similar to form controls

**Expansion Behavior:**

*Collapsed State:*
- Card shows summary/preview content
- Content taller than max height is truncated (doesn't scroll)
- Expansion indicator visible (e.g., chevron)

*Expanded State:*
- Card reveals additional content
- By default, pushes other content down (expands height)
- Keep expanded content short and contextual
- Can scroll within screen if exceeds viewport height

*Mobile:*
- Cards can expand to reveal more content
- Card scrolls within the screen, not internally
- Content within cards doesn't scroll (no nested scroll)
- Avoid two scroll bars

*Desktop:*
- Card content can expand and scroll within a card
- Alternative to forcing grid content to reflow
- Internal scrolling allowed on desktop

**Clear Indicators:**
- Use chevron or similar indicator for expandable cards
- Most commonly placed in top right
- Be consistent across cards in the same context
- Strengthens affordance of expandability

**Alternatives to Expansion:**
- If content is too long, use bottom sheet instead
- Navigate to a page for extensive content
- Bottom sheet can hold more information than expanded card

### Placement

**Card Collections:**

Multiple cards can be grouped together into collections. By default, cards in a collection are coplanar, sharing the same resting elevation unless they are picked up or dragged.

**Layout Options:**

1. **Grid**
   - Cards displayed in grid layout
   - Default: uniform grid
   - Custom: mosaic or staggered grids
   - Responsive columns

2. **Vertical List**
   - Cards stacked vertically
   - Single column
   - Consistent width
   - Good for mobile

3. **Carousel**
   - Horizontal row of cards
   - Scrollable/swipeable
   - Partial cards visible at edges
   - Navigation controls optional

**Organization Guidelines:**
- Organize card collections so they are easy to use
- Layout affects how they are perceived
- Place cards in a straightforward, easy-to-use manner
- Consider user scanning patterns and priority

### Customization

#### Content Flexibility

**Card layouts can vary to support the types of content they contain:**

- **Headlines**: Title or main subject
- **Preamble**: Introductory text or summary
- **Supporting text**: Additional details
- **Images**: Visual content, hero images, thumbnails
- **Buttons**: Primary and secondary actions
- **Links**: Navigation to related content
- **Icons**: Visual indicators or status
- **Badges**: Status labels or notifications
- **Media**: Videos, charts, graphics

**Content Density:**
- Denser layouts often need less padding
- Lighter layouts can allow for more generous spacing
- Adjust padding based on content needs
- Balance whitespace and information

#### Image Treatment

**Full-width images:**
- May need to span full width of card
- No padding applied to image
- Common for hero images or main visual

**Padded images:**
- Standard padding maintained
- Image inset within card
- More contained appearance

#### Typography Hierarchy

**Establish clear hierarchy:**
- Headline: Primary focus
- Preamble: Secondary emphasis
- Supporting text: Tertiary detail
- Ensure scannability and readability

---

## Accessibility

**Requirements:**
- Provide clear, descriptive labels for interactive cards
- Include aria-label when card is interactive without visible text
- Ensure sufficient color contrast for all card types
- Support keyboard navigation (focus states)
- Indicate interactive state clearly
- Use semantic HTML elements
- Communicate card purpose through text and structure
- Provide expansion indicators for expandable cards

**Best Practices:**
- Make touch targets at least 40px (especially on mobile)
- Provide visible focus indicators
- Ensure card actions are keyboard accessible
- Don't rely on color alone to convey information
- Test with screen readers
- Announce expansion state changes
- Avoid nested scroll on mobile (two scroll bars)

**Interactive Considerations:**
- If entire card is clickable, ensure clear focus ring
- If card has multiple actions, ensure all are keyboard accessible
- Provide skip links if card collections are large
- Consider reduced motion preferences for expansion animations

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Cards/Cards.tsx`
