# Button

Buttons are clickable elements that trigger events or actions. They communicate actions to users and allow them to interact with interfaces in a variety of ways.

---

## Usage

**When to use:**

Buttons inform users of possible actions they can take. Buttons can be used throughout the user interface in various contexts:

- **Forms**: Submit, cancel, reset, save actions
- **Cards**: Primary actions related to card content
- **Games**: Betting, confirming, or navigating actions
- **Widgets**: Interactive controls and options
- **Toolbars**: Quick access to common actions
- **Dialogs**: Confirmations, dismissals, or next steps
- **Navigation**: Advancing through flows or processes

**Commonly used with:**
- Forms and inputs - for submission and navigation
- Cards - for primary card actions
- Modals and dialogs - for confirmations and dismissals
- Toolbars and headers - for quick actions
- Bottom sheets - for primary actions
- Wizards and multi-step flows - for progression

---

## Semantic Purpose

### Button Emphasis Hierarchy

When designing, consider the hierarchy between available actions. The primary action should be represented by a primary button, while secondary and tertiary actions should use lower emphasis buttons.

**Emphasis Pyramid:**
```
         Primary (Highest emphasis)
              ↓
          Secondary
              ↓
           Outline
              ↓
            Ghost
              ↓
        Link (Lowest emphasis)
```

### Button Types

There are six button types, each with a specific semantic purpose and visual emphasis level:

#### 1. **Primary**
- **Purpose**: Highest visual emphasis for primary action
- **When to use**: Main action of a section or page (purchase, submit, confirm)
- **Frequency**: Generally only one per screen/section
- **Typical actions**: "Buy now", "Submit", "Confirm", "Continue"
- **Visual**: Bold, filled background with brand color

#### 2. **Secondary**
- **Purpose**: Less emphasis than primary, alternative related actions
- **When to use**: Related but not primary actions (cancel, back, alternative paths)
- **Frequency**: Can have multiple, but limit to maintain hierarchy
- **Typical actions**: "Cancel", "Back", "Skip", "Save for later"
- **Visual**: Filled background with less prominent color

#### 3. **Outline**
- **Purpose**: Visually de-emphasized, important but non-primary
- **When to use**: Optional functions without committing to confirm/cancel
- **Frequency**: Multiple allowed for supporting actions
- **Typical actions**: "More options", "View details", "Edit"
- **Visual**: Border/stroke with transparent background

#### 4. **Ghost**
- **Purpose**: Lowest emphasis, subtle contextual actions
- **When to use**: Least important option, often paired with primary button
- **Frequency**: Multiple allowed for low-priority actions
- **Typical actions**: "Learn more", "Maybe later", "Dismiss"
- **Visual**: Minimal styling, no background or border

#### 5. **Link**
- **Purpose**: Navigation to additional information or destinations
- **When to use**: Leading to other pages, external content, or supplementary info
- **Frequency**: Multiple allowed as needed
- **Typical actions**: "Learn more", "Terms and conditions", "See details"
- **Visual**: Appears as text link (underlined or colored text)

#### 6. **Destructive**
- **Purpose**: Actions that remove or delete data
- **When to use**: Deletion, removal, or destructive operations
- **Frequency**: Rare in customer-facing interfaces, more common in admin tools
- **Typical actions**: "Delete", "Remove", "Clear all"
- **Visual**: Warning color (typically red)

---

## Examples

### ✅ Correct Usage

**Do:**
- Reserve primary button for the main action of a screen/section
- Use button types to establish hierarchy (not size differences)
- Limit label text to one line within the button
- Use one icon per button maximum
- Align icon and text horizontally
- Place icons left or right of text (not center-aligned vertically)
- Use icon buttons only with well-known standard symbols
- Use medium size as default
- Choose between "hug content" or "align to grid" width

**Good Examples:**
- "Buy now" (Primary) + "Cancel" (Secondary) in a checkout
- "Submit" (Primary) + "Save draft" (Outline) in a form
- Icon-only button with recognizable symbol (search, close, menu)
- Button extending to grid width in a mobile form
- Button hugging content width in a dialog

### ❌ Incorrect Usage

**Don't:**
- Don't use multiple primary buttons in the same section
- Don't wrap label text across two lines
- Don't use multiple icons in one button
- Don't center-align icon and text vertically
- Don't group buttons of different sizes together
- Don't use icon-only buttons with ambiguous symbols
- Don't use destructive buttons casually in customer interfaces
- Don't rely solely on size to create hierarchy

**Common Mistakes:**
- Two primary buttons competing for attention
- Button label wrapping to multiple lines
- Vertical stacking of icon and text
- Multiple icons in one button
- Mixing small, medium, and large buttons in same group
- Using destructive style for non-destructive actions
- Unclear icon-only buttons requiring explanation

---

## API

### Anatomy

**Structure:**
```
A. Icon (optional)
B. Label (required - can be text or icon-only)
C. Container (required)
```

**Requirements:**
- At minimum: Container + Label (text or icon)
- Optional: Icon (when paired with text label)
- Icon-only buttons: Container + Icon (no text label)

### Properties

#### Variant
- **Type**: Enum
- **Required**: Yes
- **Options**:
  - `primary`: Highest emphasis, main action
  - `secondary`: Alternative related action
  - `outline`: De-emphasized, optional action
  - `ghost`: Lowest emphasis, subtle action
  - `link`: Navigation or informational link
  - `destructive`: Removal or deletion action
- **Description**: Determines visual emphasis and semantic meaning

#### Size
- **Type**: Enum
- **Required**: Yes
- **Default**: `medium`
- **Options**:
  - `small`: Space-limited contexts (use sparingly)
  - `medium`: Default size for most use cases
  - `large`: Extra attention needed (use sparingly)
  - `xlarge`: Maximum emphasis (rare, hero CTAs)
- **Description**: Physical size of button

**Icon-only Button Sizes:**
- `extra-small`: 24px
- `small`: 32px
- `medium`: 40px
- **Note**: Large and XLarge sizes NOT available for icon-only buttons

#### Label
- **Type**: String
- **Required**: Yes (unless icon-only)
- **Max Length**: Single line (no wrapping)
- **Description**: Text label displayed on button
- **Guidelines**: Keep concise, action-oriented ("Buy now", "Submit", "Cancel")

#### IconPosition
- **Type**: Enum
- **Required**: No (Yes if icon is used with label)
- **Options**:
  - `left`: Icon before text
  - `right`: Icon after text
- **Description**: Position of icon relative to text label

#### Icon
- **Type**: Icon component
- **Required**: No (Yes for icon-only buttons)
- **Limit**: Maximum one icon per button
- **Description**: Optional icon to enhance action recognition
- **Guidelines**: Use well-known standard symbols for clarity

#### IconOnly
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether button displays only an icon without text label
- **When to use**: Space-limited contexts with universally recognized icons

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether button is disabled and non-interactive

#### FullWidth
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether button extends to fill container width ("align to grid" mode)

#### OnClick
- **Type**: Function
- **Required**: Yes
- **Description**: Callback function when button is clicked

#### AriaLabel
- **Type**: String
- **Required**: Yes (for icon-only buttons)
- **Description**: Accessible label for screen readers, especially critical for icon-only buttons

### Behavior

**Width Modes:**

1. **Hug Content**
   - Button width determined by content (text + icon + padding)
   - Default behavior
   - Use when button should be compact

2. **Align to Grid**
   - Button extends to fill container width
   - Use in forms, mobile layouts, or structured grids
   - Provides consistent alignment

**States:**
- **Rest**: Default uninteracted state
- **Hover**: Mouse cursor over button
- **Pressed**: Button actively being clicked
- **Focus**: Keyboard focus on button
- **Disabled**: Button cannot be interacted with

**Icon Alignment:**
- Icons align horizontally with text
- Never center-align icon and text vertically within button
- Maintain consistent spacing between icon and text

### Placement

**General Guidelines:**
- Place primary button in prominent position
- Position secondary/outline buttons near related primary action
- Group related buttons together
- Maintain consistent button order (e.g., primary right, cancel left)

**Common Patterns:**
- **Forms**: Primary (Submit) at bottom right, Secondary (Cancel) at bottom left
- **Dialogs**: Primary right, Destructive/Cancel left
- **Cards**: Primary action in footer or header
- **Mobile**: Full-width buttons in forms

### Customization

#### Text Labels
- **Best Practice**: Keep to one line, action-oriented language
- **Guideline**: If space is too narrow, move button below content
- **Avoid**: Multi-line wrapping (breaks legibility)

#### Icons
- **Placement**: Left or right of text label
- **Limit**: One icon per button
- **Alignment**: Horizontal only (not vertical center)
- **Icon-only**: Use standard symbols, provide aria-label

#### Sizing
- **Hierarchy**: Establish through button type, not size
- **Default**: Use medium size whenever possible
- **Grouping**: Don't mix different sizes in same group
- **Special cases**: Large/XLarge for hero CTAs, Small for space constraints

---

## Accessibility

**Requirements:**
- Provide clear, descriptive labels
- Include aria-label for icon-only buttons
- Ensure sufficient color contrast
- Support keyboard navigation (focus states)
- Indicate disabled state clearly
- Use semantic button element (not div)
- Communicate button purpose through text (not color alone)

**Best Practices:**
- Make touch targets at least 40px (medium size minimum on mobile)
- Provide visible focus indicators
- Ensure button labels describe the action clearly
- Don't rely on icon alone without aria-label
- Test with screen readers

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Button/Button.tsx`
