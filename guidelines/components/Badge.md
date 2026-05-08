# Badge

A badge is a visual indicator that communicates a status or description of an associated component. They use short text and color for quick recognition and are placed near the relevant content.

---

## Usage

**When to use:**

Badges are used to indicate a notification, item count, or other information. Badges should be placed on or near the component they describe. Common scenarios include:

- **Notifications**: Displaying unread count or new items
- **Status Indicators**: Showing online/offline, busy, away status
- **Item Counts**: Indicating number of items in a cart or list
- **State Communication**: Conveying completion, attention needed, or important information
- **Labels**: Short descriptive tags for quick recognition

**Commonly used with:**
- Avatars - for status indicators (online, busy, away)
- Navigation items - for notification counts
- Icons/Buttons - to show pending actions or counts
- List items - to highlight status or priority
- Cards - to label or categorize content

---

## Semantic Purpose

### Badge Variants

There are six badge variants, each serving a distinct semantic purpose:

#### 1. **Brand**
- **Purpose**: Brand expression and identity
- **When to use**: Information with strong connection to the brand
- **Context**: Suitable for use outside product interfaces where brand expression is emphasized
- **Emphasis Levels**: Filled (high emphasis), Tint (subtle)

#### 2. **Contrast**
- **Purpose**: High visibility information
- **When to use**: Information that needs high visual contrast to stand out within a product interface
- **Context**: Important information that requires attention
- **Emphasis Levels**: Filled (high emphasis), Tint (subtle)

#### 3. **Neutral**
- **Purpose**: Balanced, non-emphatic information
- **When to use**: Information presented in a neutral way without emphasizing importance or status
- **Context**: General labels or tags
- **Emphasis Levels**: Filled (high emphasis), Tint (subtle)

#### 4. **Success (Green)**
- **Purpose**: Positive status indicators
- **When to use**: Statuses such as "online" or "completed"
- **Context**: Confirming successful actions or positive states
- **Emphasis Levels**: Filled (high emphasis), Tint (subtle)

#### 5. **Attention (Yellow/Orange)**
- **Purpose**: Warnings or situations needing acknowledgment
- **When to use**: Statuses such as "away", "be right back", or "needs attention"
- **Context**: Non-critical alerts or temporary states
- **Emphasis Levels**: Filled (high emphasis), Tint (subtle)

#### 6. **Important (Red)**
- **Purpose**: Critical or urgent information
- **When to use**: Notifications and statuses such as "busy" or "do not disturb"
- **Context**: Alerts requiring immediate attention or blocking states
- **Emphasis Levels**: Filled (high emphasis), Tint (subtle)

### Color Theming

- **Brand** and **Contrast** colors adapt to the specific product's color theme
- **Success**, **Attention**, and **Important** use global colors that may be adjusted if they conflict with the brand's accent color

---

## Examples

### ✅ Correct Usage

**Do:**
- Place badges on the edge of a lockup to avoid visual collisions
- Use words that describe a state or status (1-2 words maximum)
- Keep badge text short and descriptive
- Use appropriate badge size for the context
- Create balance by considering size and position
- Place badges on or next to the component they describe
- Use filled badges for higher emphasis, tint badges for subtle appearance
- Ensure icon-only badges have aria labels for accessibility

**Good Examples:**
- Badge on avatar showing "Online" status
- Notification count "3" on navigation item
- "New" label on product card
- "Completed" status on task item

### ❌ Incorrect Usage

**Don't:**
- Don't mix badges of different sizes in the same content
- Don't use a large badge when it might overlap with trailing elements
- Don't use labels that will truncate
- Don't try to include too much text (keep to 1-2 words)
- Don't let badges compete with important interactive components
- Don't place badges where they create visual collisions

**Common Mistakes:**
- Using long text that truncates in badges
- Mixing different badge sizes in a single component
- Placing large badges that overlap other elements
- Using multiple words when one would suffice
- Missing aria labels on icon-only badges

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Label (optional - available in small to large badges)
C. Icon (optional - available in small to large badges)
```

**Notes:**
- Extra small badges contain only a container (no label or icon)
- Small to extra large badges don't require both icon and label, but need at least one

### Properties

#### Variant
- **Type**: Enum
- **Required**: Yes
- **Options**:
  - `brand`: Brand-focused styling
  - `contrast`: High contrast for visibility
  - `neutral`: Balanced, non-emphatic
  - `success`: Positive states (green)
  - `attention`: Warnings (yellow/orange)
  - `important`: Critical alerts (red)
- **Description**: Determines the semantic meaning and color of the badge

#### Emphasis
- **Type**: Enum
- **Required**: Yes
- **Options**:
  - `filled`: High emphasis with solid background
  - `tint`: Subtle appearance with lighter background
- **Description**: Controls the visual weight and prominence of the badge

#### Size
- **Type**: Enum
- **Required**: Yes
- **Default**: medium
- **Options**:
  1. `extra-small`: Smallest size, container only (no label/icon)
  2. `small`: Compact size with label and/or icon
  3. `medium`: Default size with label and/or icon
  4. `large`: Larger size for increased visibility
  5. `extra-large`: Largest size for maximum emphasis
- **Description**: Different sizes support different content and contexts

#### Label
- **Type**: String
- **Required**: No (but required if no icon in small-to-large badges)
- **Max Length**: 1-2 words recommended
- **Description**: Short text describing state or status

#### Icon
- **Type**: Icon component
- **Required**: No (but required if no label in small-to-large badges)
- **Description**: Visual symbol representing status or category
- **Accessibility**: Must include aria-label if badge is icon-only

#### AriaLabel
- **Type**: String
- **Required**: Yes (when badge is icon-only)
- **Description**: Accessible label for screen readers when badge contains only an icon

### Behavior

**Width:**
- Badges don't have a built-in max-width and will keep growing
- You can add your own max-width and truncation style as needed
- Best practice: Keep text short to avoid truncation

**Theming:**
- Context-adaptive badges will be color-mapped according to the overlying theme of the product or context
- Corner radius of badges is set as part of the overlying theme

### Placement

**Guidelines:**
- Place badges on or near the component they describe
- Position close enough that users can make intuitive connections
- Two placement strategies:
  1. **Placed on top**: Overlaid on component (e.g., status badge on avatar)
  2. **Placed next to**: Adjacent to component (e.g., count badge next to navigation item)

**Best Practices:**
- Place on the edge of a lockup to avoid visual collisions
- Avoid large badges that might overlap trailing elements
- Use extra small badge instead if space is constrained
- Consider size and position to create visual balance

### Customization

**Content:**
- Keep text to 1-2 words that describe a state
- Avoid labels that will truncate
- Use appropriate variant for semantic meaning
- Choose emphasis level based on visual hierarchy needs

**Sizing:**
- Use appropriate size for the context
- Avoid mixing different sizes in the same content area
- Consider the component size when selecting badge size

---

## Accessibility

**Requirements:**
- If a badge is only an icon, its information needs to be communicated with an aria-label
- If the badge is connected to another component, that component's aria-label should communicate the badge's information
- Ensure sufficient color contrast for visibility
- Don't rely on color alone to convey meaning

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Badge-1/Badge.tsx`
