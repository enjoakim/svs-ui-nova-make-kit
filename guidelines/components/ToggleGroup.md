# Toggle Group

A selection control component consisting of a set of toggleable buttons, typically used within form settings for choosing between options or toggling filters. Available in single-select (mutually exclusive) and multi-select (independent) variants.

---

## Usage

**When to use:**

Use a toggle group to allow the user to make selections within an interface, either single mutually exclusive options or multiple independent options. The toggle group component is typically used within a form setting.

**Key Use Cases:**

- **Form settings**: Selecting configuration options
- **View switching**: Toggling between different view modes
- **Filtering**: Multiple independent filter options
- **Preference selection**: Choosing user preferences
- **Display options**: Selecting display modes (list/grid, compact/detailed)
- **Configuration**: System or feature settings

**When to use Toggle Group:**
- Making selections within forms
- Filtering functions where options can be toggled
- Choosing between mutually exclusive states
- Selecting multiple independent options
- Configuration settings requiring visual selection

**Important Distinctions:**

**Toggle Group (Form settings):**
- Use for selecting options in forms
- Configuration and settings
- Single or multiple selection
- No navigation

**Tabs (Content switching):**
- Use for switching content within a section
- No configuration changes
- Changes view, not settings
- Don't use Toggle Group for this purpose

**Tabs Menu (Navigation):**
- Use for navigation between pages
- Changes URL/route
- Higher level navigation
- Don't use Toggle Group for this purpose

**Radio Group (Single selection):**
- Traditional radio button UI
- Single selection only
- More vertical space
- Toggle Group is more compact alternative

**Checkbox (Multiple selection):**
- Traditional checkbox UI
- Multiple selection
- More vertical space
- Toggle Group is more compact alternative

**Commonly used with:**
- Forms - for configuration and settings
- Filters - for multiple filter options
- Settings panels - for preference selection
- Toolbars - for view or mode switching
- Labels - for describing the group's purpose

---

## Semantic Purpose

### Toggle Group vs Radio Group vs Checkbox vs Tabs

**Toggle Group:**
- **Purpose**: Select options in forms/filters
- **Selection**: Single or multiple (configured)
- **Layout**: Horizontal, compact
- **Use**: Form settings, filters, configuration
- **Visual**: Button-style toggles

**Radio Group:**
- **Purpose**: Single selection from options
- **Selection**: Single only
- **Layout**: Vertical list
- **Use**: Forms with mutually exclusive options
- **Visual**: Traditional radio circles

**Checkbox:**
- **Purpose**: Multiple independent selections
- **Selection**: Multiple only
- **Layout**: Vertical list
- **Use**: Forms with independent options
- **Visual**: Traditional checkboxes

**Tabs:**
- **Purpose**: Switch content views
- **Selection**: Single (always one active)
- **Layout**: Horizontal tabs
- **Use**: Content organization
- **Visual**: Tab-style headers

**Switch:**
- **Purpose**: Enable/disable setting
- **Selection**: Binary on/off
- **Layout**: Individual control
- **Use**: Immediate toggle actions
- **Visual**: Physical switch metaphor

---

## Examples

### ✅ Correct Usage

**Do:**
- Use short, clear, and concise labels in a logical order
- Use for form settings and configuration
- Use single-select for mutually exclusive options
- Use multi-select for independent filter options
- Provide clear visual distinction between selected and unselected
- Use appropriate size (medium default, small for limited space)
- Use icons to enhance clarity when helpful
- Use well-known standard symbols for icon-only variants

**Good Examples:**
- View mode: "List", "Grid", "Gallery"
- Time range filter: "Day", "Week", "Month", "Year"
- Sorting: "Price", "Name", "Date"
- Display density: "Compact", "Comfortable", "Spacious"
- Text alignment: Icon-only with left/center/right alignment icons
- Filters: "Active", "Pending", "Completed" (multi-select)

### ❌ Incorrect Usage

**Don't:**
- Avoid long or unclear labels
- Don't use for navigation (use Tabs Menu instead)
- Don't use for content switching (use Tabs instead)
- Don't use ambiguous icon-only options
- Don't mix icon styles within same group
- Don't use too many options (consider Select dropdown instead)
- Don't use for binary on/off states (use Switch instead)

**Common Mistakes:**
- Long descriptive labels that don't fit well
- Unclear abbreviations or labels
- Using for page navigation (use Tabs Menu)
- Using for content switching (use Tabs)
- Icon-only buttons with unclear meaning
- Too many options causing horizontal overflow
- Single button in a group (use Switch or Checkbox instead)

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Label (optional but recommended)
C. Selected button (visual state)
D. Unselected button (visual state)
```

**Requirements:**
- At minimum: Container + Multiple buttons (2+ options)
- Recommended: Label to describe the group's purpose
- Each button needs text label or icon (or both)

### Properties

#### Type
- **Type**: Enum
- **Required**: Yes
- **Default**: `single`
- **Options**:
  - `single`: Single-select mode (mutually exclusive)
  - `multiple`: Multi-select mode (independent options)
- **Description**: Selection behavior of the toggle group
- **Visual**: Single and multi variants have slightly different designs indicating their function

#### Options
- **Type**: Array of option objects
- **Required**: Yes
- **Description**: List of toggleable options
- **Properties per option**:
  - `value`: Unique identifier
  - `label`: Text label (required unless icon-only)
  - `icon`: Icon component (optional)
  - `disabled`: Whether option is disabled (optional)
  - `ariaLabel`: Accessible label (required for icon-only)

#### Value
- **Type**: String | Array of strings
- **Required**: No (Yes for controlled component)
- **Description**: Currently selected value(s)
- **Single mode**: String (single value)
- **Multiple mode**: Array of strings (multiple values)
- **Controlled**: Use with onChange for controlled component

#### DefaultValue
- **Type**: String | Array of strings
- **Required**: No
- **Description**: Initially selected value(s) for uncontrolled component
- **Single mode**: String
- **Multiple mode**: Array of strings

#### Size
- **Type**: Enum
- **Required**: No
- **Default**: `medium`
- **Options**:
  - `medium`: Default size, use in most situations
  - `small`: Compact variant for limited vertical space
- **Description**: Visual size of the toggle group

#### Label
- **Type**: String
- **Required**: No (but recommended)
- **Description**: Label for the toggle group
- **Purpose**: Describes what the group controls
- **Guidelines**: Keep clear and concise

#### IconPosition
- **Type**: Enum
- **Required**: No
- **Default**: `left`
- **Options**:
  - `left`: Icon positioned before text
  - `right`: Icon positioned after text
  - `only`: Icon only, no text label
- **Description**: Position of icon relative to text

#### Orientation
- **Type**: Enum
- **Required**: No
- **Default**: `horizontal`
- **Options**:
  - `horizontal`: Buttons arranged horizontally
  - `vertical`: Buttons arranged vertically (less common)
- **Description**: Layout direction of toggle buttons

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether entire toggle group is disabled
- **Note**: Individual options can also be disabled

#### OnChange
- **Type**: Function
- **Required**: Yes (for controlled component)
- **Description**: Callback when selection changes
- **Parameters**: New value (string for single, array for multiple)

### States

#### **Selected**
- Button is currently active/selected
- Distinct visual appearance (filled background, different color)
- Indicates chosen option
- In single mode: Only one button selected
- In multi mode: Multiple buttons can be selected

#### **Unselected (Default)**
- Button is not currently active
- Standard appearance
- Can be clicked to select
- More subtle visual treatment

#### **Hover**
- Mouse over button
- Visual feedback indicates interactivity
- Background or border may change
- Prepares user for click

#### **Pressed (Active)**
- Button is being clicked
- Active state visual feedback
- Indicates click action
- Brief state during interaction

#### **Focus**
- Button has keyboard focus
- Focus indicator visible
- Can be activated with keyboard
- Follows keyboard navigation

#### **Disabled** (optional)
- Button cannot be selected
- Reduced opacity
- No hover or click interaction
- Indicates unavailable option

### Variants

#### **Single Select**
- **Purpose**: Select one option from mutually exclusive choices
- **Behavior**: Only one option allowed to be active at a time
- **Selection**: Clicking new option deselects previous
- **Visual**: Slightly different design indicating exclusive selection
- **Use cases**: View modes, sort options, exclusive settings

**Characteristics:**
- One active button at a time
- Selecting new option automatically deselects previous
- Similar to radio button behavior
- More compact than radio group
- Horizontal layout

**Examples:**
- View mode: "List" or "Grid" or "Gallery"
- Sort order: "Price" or "Name" or "Date"
- Time range: "Day" or "Week" or "Month"

#### **Multi Select**
- **Purpose**: Select multiple independent options
- **Behavior**: Multiple options allowed to be active simultaneously
- **Selection**: Each option toggles independently
- **Visual**: Slightly different design indicating independent selection
- **Use cases**: Filters, feature toggles, multi-option settings

**Characteristics:**
- Multiple active buttons allowed
- Each button toggles independently
- Similar to checkbox behavior
- More compact than checkbox group
- Horizontal layout

**Examples:**
- Filters: "Active" and/or "Pending" and/or "Completed"
- Features: "Bold" and/or "Italic" and/or "Underline"
- Display options: Multiple independent settings

### Behavior

**Single Select Mode:**

1. **Initial State**
   - Zero or one option selected
   - Other options unselected
   - Clear visual distinction

2. **User Clicks Option**
   - Previous selection becomes unselected (if any)
   - Clicked option becomes selected
   - Only one option active at a time
   - onChange callback fires with new value

3. **Toggling**
   - Clicking selected option may deselect it (configuration dependent)
   - Or selection is required (always one selected)

**Multi Select Mode:**

1. **Initial State**
   - Zero or more options selected
   - Each option independent
   - Clear visual distinction

2. **User Clicks Option**
   - Clicked option toggles (selected ↔ unselected)
   - Other options remain unchanged
   - Multiple options can be active
   - onChange callback fires with array of selected values

3. **Independent Toggling**
   - Each option acts independently
   - No limit on number of selections (unless configured)
   - Similar to checkbox behavior

---

## Customization

### Label Text

**Group Label:**
- Describes what the toggle group controls
- Positioned above or beside the group
- Keep clear and concise
- Use when purpose isn't obvious from context

**Button Labels:**
- Short, clear, and concise labels in a logical order
- Avoid long or unclear labels
- Use parallel structure (all nouns, all verbs, etc.)
- Keep scannable and easy to read

**Best Practices:**
- Keep labels brief (1-2 words preferred)
- Use specific, descriptive terms
- Maintain consistent length across options
- Use title case
- Make meaning immediately clear

**Examples:**
- Good: "List", "Grid", "Gallery"
- Bad: "Display as list view", "Grid view option", "Gallery"
- Good: "Day", "Week", "Month"
- Bad: "Daily", "By week", "Monthly view"

### Sizes

**Medium (Default):**
- Default size
- Should always be used in most situations
- Comfortable spacing and sizing
- Good balance of compactness and usability

**When to use:**
- Standard forms
- General settings panels
- Most use cases
- Default choice

**Small:**
- Compact variant
- Can be used in designs where vertical screen estate is limited
- Tighter spacing
- More space-efficient

**When to use:**
- Limited vertical space
- Dense layouts
- Compact toolbars
- Space-constrained designs

### Icons

**Purpose:**
Icons can be added to the toggle buttons to further help guide the user.

**Icon Configurations:**
- **Text only**: No icons, just text labels
- **Text + icon**: Both icon and text label
- **Icon only**: Only icon, no text label

**Icon Only Guidelines:**
When using the icon-only option, be sure to use well-known standard symbols to avoid potential ambiguity.

**Best Practices:**
- Use clear, recognizable icons
- Match icon meaning to option
- Use consistent icon style
- Provide accessible labels for icon-only buttons
- Use standard symbols for icon-only (alignment, format, etc.)
- Ensure icons are clear at the given size

**Good Icon-Only Examples:**
- Text alignment: Left/Center/Right alignment icons
- Text formatting: Bold/Italic/Underline icons
- View modes: List/Grid icons
- Media controls: Play/Pause/Stop icons

**Avoid:**
- Ambiguous or unclear icons
- Icons that need text to understand
- Mixing icon styles
- Custom icons without clear meaning

---

## Accessibility

**Requirements:**
- Use ARIA radio group pattern (single-select) or toolbar pattern (multi-select)
- Support full keyboard navigation
- Provide clear focus indicators
- Ensure sufficient color contrast
- Provide accessible labels for all options
- Announce selection state to screen readers
- Make buttons large enough to interact with

**ARIA Attributes:**

**Single-select mode:**
- `role="radiogroup"` - Container
- `role="radio"` - Each button
- `aria-checked="true|false"` - Selection state
- `aria-labelledby` or `aria-label` - Group label

**Multi-select mode:**
- `role="group"` or `role="toolbar"` - Container
- `role="button"` or `aria-pressed` - Each button
- `aria-pressed="true|false"` - Selection state
- `aria-labelledby` or `aria-label` - Group label

**For all modes:**
- `aria-label` - For icon-only buttons (required)
- `aria-disabled="true"` - For disabled buttons

**Keyboard Navigation:**
- **Tab**: Enter/exit toggle group
- **Arrow Left/Right**: Navigate between options (single-select)
- **Arrow Up/Down**: Navigate between options (vertical orientation)
- **Space**: Toggle focused option
- **Enter**: Activate focused option (optional)

**Screen Reader Support:**
- Announce group label
- Announce option labels
- Announce selected/unselected state
- Announce position (e.g., "option 2 of 4")
- Announce when selection changes
- Describe icon meaning for icon-only buttons

**Focus Management:**
- Tab into group (focuses first or selected button)
- Arrow keys navigate within group
- Tab out of group continues to next control
- Focus indicator clearly visible
- Selected button may receive initial focus

**Best Practices:**
- Make buttons at least 44px for touch targets
- Provide visible focus indicators
- Ensure sufficient contrast (WCAG AA)
- Don't rely on color alone for selection state
- Test with keyboard only
- Test with screen readers
- Provide text labels or aria-label for all buttons
- Use semantic HTML and ARIA patterns
- Ensure icon-only buttons have accessible labels

**Color Contrast:**
- Text and background: minimum 4.5:1
- Selected vs unselected: clear visual distinction
- Don't rely on color alone (use different visual treatment)
- Ensure contrast in all states (hover, focus, selected)

**Touch Targets:**
- Minimum 44x44px touch target
- Adequate spacing between buttons
- Easy to tap without accidentally selecting adjacent option

---

## Best Practices

### Number of Options

**Recommended:**
- 2-4 options: Ideal range
- 5-6 options: Acceptable
- 7+ options: Consider alternative (Select dropdown, etc.)

**Too Many Options:**
- Horizontal overflow issues
- Difficult to scan
- May not fit on smaller screens
- Consider using Select component instead

### When to Use Each Variant

**Use Single-Select when:**
- Options are mutually exclusive
- Only one choice makes sense at a time
- Replacing radio buttons in compact layout
- View modes or sort options

**Use Multi-Select when:**
- Options are independent
- Multiple selections make sense simultaneously
- Filtering with multiple criteria
- Feature toggles that can be combined

### Responsive Design

**Mobile Considerations:**
- Toggle groups may overflow on small screens
- Consider stacking vertically on mobile
- Or reduce number of visible options
- Ensure touch targets are adequate (44x44px)

**Strategies:**
- Horizontal scroll for overflow
- Vertical orientation on mobile
- Dropdown for additional options
- Reduce to essential options only
- Wrap to multiple rows (if appropriate)

### Label Guidelines

**Do:**
- Keep labels short and concise
- Use logical order
- Maintain parallel structure
- Make meaning clear
- Use consistent length

**Don't:**
- Use long, verbose labels
- Use unclear abbreviations
- Mix different label styles
- Use ambiguous terms
- Vary label length drastically

### Integration with Forms

**Form Context:**
- Position logically within form flow
- Provide group label for context
- Consider validation and error states
- Submit with form data
- Maintain state appropriately

**Validation:**
- Indicate required selections
- Show validation errors clearly
- Provide helpful error messages
- Validate on submit or on change

---

## Reference Implementation

Imported Figma frame available at: `src/imports/ToggleGroup/ToggleGroup.tsx`
