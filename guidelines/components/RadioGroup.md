# Radio Group

A graphical control element that allows the user to choose only one of a predefined set of mutually exclusive options. Radio buttons must be presented in a group of at least two.

---

## Usage

**When to use:**

The radio group component allows the user to select one (and only one) option out of a group. Radio buttons must be presented in a group of at least two.

**Key Use Cases:**

- **Single selection from options**: When user must choose exactly one option from a set
- **Mutually exclusive choices**: Options where selecting one automatically deselects others
- **Settings and preferences**: Configuration options where only one can be active
- **Question responses**: Survey or form questions with single-answer choices
- **Mode selection**: Choosing between different modes or states
- **Filter options**: Selecting one filter criterion from multiple options

**When NOT to use:**

- **Multiple selections**: Use checkboxes when multiple options can be enabled simultaneously
- **Large option sets**: Consider using Select component for many options
- **Single option**: Radio requires at least two options in a group
- **Immediate action**: Use Switch for immediate state changes without confirmation

**Commonly used with:**
- Forms - for collecting user selections
- Settings panels - for configuration options
- Filters - for single-selection filtering
- Survey forms - for single-answer questions
- Wizards - for step-by-step option selection

---

## Semantic Purpose

### Radio Group vs Checkbox vs Switch vs Select

**Radio Group:**
- **Selection**: One and only one option from a group
- **Minimum**: At least 2 options required
- **Visibility**: All options visible simultaneously
- **Action**: Selection typically requires confirmation (form submit)
- **When**: Mutually exclusive choices from small set

**Checkbox:**
- **Selection**: Multiple independent options can be selected
- **Minimum**: Can be single checkbox or multiple
- **Visibility**: All options visible
- **Action**: Selection typically requires confirmation
- **When**: Independent options that can be combined

**Switch:**
- **Selection**: Binary on/off state
- **Minimum**: Single control
- **Visibility**: Current state visible
- **Action**: Immediate effect without confirmation
- **When**: Toggle immediate state changes

**Select (Dropdown):**
- **Selection**: One option from a list
- **Minimum**: Can have many options
- **Visibility**: Options hidden until opened
- **Action**: Selection typically requires confirmation
- **When**: Large number of options (space-saving)

---

## Examples

### ✅ Correct Usage

**Do:**
- Present radio buttons in groups of at least two
- Ensure only one radio button can be selected at a time
- Keep label text short and concise (one line maximum)
- Use description field for extra clarification when needed
- Make the entire label clickable, not just the radio button
- Provide clear, distinct options
- Align radio buttons consistently (all left or all right)
- Use for mutually exclusive options

**Good Examples:**
- Payment method selection: "Credit Card", "PayPal", "Bank Transfer"
- Delivery speed: "Standard", "Express", "Overnight"
- Account type: "Personal", "Business"
- Gender selection: "Male", "Female", "Other", "Prefer not to say"
- Notification preference: "Email", "SMS", "Push notification"

### ❌ Incorrect Usage

**Don't:**
- Don't use for multiple selections (use checkboxes instead)
- Don't be unclear or unnecessarily wordy to describe what the setting means
- Don't make label text exceed one line
- Don't use for large numbers of options (use Select instead)
- Don't present only a single radio button
- Don't mix alignment within the same group
- Don't use for immediate actions (use Switch instead)

**Common Mistakes:**
- Long, wordy label text that wraps to multiple lines
- Using radio buttons when checkboxes would be appropriate
- Single radio button without other options
- Critical information only in label (should use description)
- Unclear option names
- Too many options making the list overwhelming
- Mixing left and right alignment in same group

---

## API

### Anatomy

**Structure:**
```
A. Radio button (required) - Circular selection indicator
B. Label (required) - Describes the option
C. Description (optional) - Additional clarification text
```

**Requirements:**
- At minimum: Radio button + Label
- Optional: Description for extra clarification
- Group: At least 2 radio buttons per group

### Properties

#### Name
- **Type**: String
- **Required**: Yes (for grouping)
- **Description**: Groups radio buttons together so only one can be selected
- **Technical**: All radio buttons in a group share the same name attribute
- **Note**: Essential for mutual exclusivity

#### Value
- **Type**: String
- **Required**: Yes
- **Description**: The value associated with this radio option
- **Usage**: Submitted when form is sent if this option is selected

#### Label
- **Type**: String
- **Required**: Yes
- **Description**: Text that clearly indicates what option the radio button enables
- **Guidelines**: 
  - Keep short and concise
  - Should not exceed one line
  - Be clear and specific
  - Avoid being unnecessarily wordy

#### Description
- **Type**: String
- **Required**: No
- **Description**: Additional text providing extra clarification about the option
- **When to use**: When further explanation is required to communicate what the option means
- **Persistent**: Always visible (unlike tooltips)
- **Guidelines**: Use for necessary context, not as a replacement for clear labels

#### Checked
- **Type**: Boolean
- **Required**: No (but one should be selected by default in many cases)
- **Default**: false
- **Description**: Whether this radio button is currently selected
- **Note**: Only one radio in a group can be checked at a time

#### DefaultChecked
- **Type**: Boolean
- **Required**: No
- **Description**: Initial checked state for uncontrolled component
- **Best practice**: Consider providing a sensible default selection

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether the radio button is disabled and non-interactive
- **Accessibility**: Consider accessibility implications when using disabled state

#### Alignment
- **Type**: Enum
- **Required**: No
- **Default**: `left`
- **Options**:
  - `left`: Radio button on left, label on right (default)
  - `right`: Radio button on right, label on left
- **Description**: Position of radio button relative to label
- **Guidelines**: Align consistently within the same group

#### OnChange
- **Type**: Function
- **Required**: Yes (for controlled components)
- **Description**: Callback when selection changes
- **Parameters**: Event object with selected value
- **Note**: Fires when user selects a different option

#### Required
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether user must select an option before form submission

#### AriaLabel
- **Type**: String
- **Required**: No (Yes if label is not visible)
- **Description**: Accessible label for screen readers

#### AriaDescribedBy
- **Type**: String
- **Required**: No
- **Description**: ID of element describing the radio (description text)

### States

#### **Unselected (Default)**
- Radio button is not selected
- Empty circle indicator
- Can be clicked to select
- Exactly one radio in group should be selected (or none before first interaction)

#### **Selected**
- Radio button is selected
- Filled circle indicator with inner dot
- Clicking another radio in group will deselect this one
- Only one radio in a group can be in selected state

#### **Disabled**
- Radio button cannot be interacted with
- Reduced opacity
- Cannot be selected or deselected
- Consider accessibility implications before using

#### **Hover**
- Mouse over radio button or label
- Visual feedback indicating interactivity
- Entire label area should be hoverable

#### **Focus**
- Radio button has keyboard focus
- Focus indicator visible
- Can be selected with keyboard (Space/Enter)
- Important for keyboard navigation

### Behavior

**Selection:**

1. **Initial State**
   - Group shows all radio options
   - Typically one option is selected by default (recommended)
   - Or no selection if user must make explicit choice

2. **User Selects Option**
   - User clicks radio button or label
   - Selected option becomes checked
   - Previously selected option automatically unchecks
   - Only one option selected at any time

3. **Mutual Exclusivity**
   - Selecting one radio automatically deselects others in the group
   - This is the defining characteristic of radio groups
   - All radios in group must share the same name

4. **Form Submission**
   - Selected option's value is submitted with form
   - If no option selected and field is required, validation error occurs

**Interaction Area:**
- Entire label area should be clickable, not just the radio button
- Increases usability and accessibility
- Larger touch target for mobile devices

**Group Requirements:**
- Minimum 2 radio buttons per group
- All radios in group share same name attribute
- Only one can be selected at a time
- Options should be mutually exclusive

---

## Customization

### Label Text

**Guidelines:**
- Provide clear label to indicate what option the radio enables
- Keep short and concise
- Content should not exceed one line
- Be specific and unambiguous

**Best Practices:**
- "Standard Delivery" not just "Standard"
- "Email notifications" not "Email"
- "Personal Account" not "Personal"
- Use parallel structure for all options in group

**Examples:**
- Good: "Same-day delivery (+€5)"
- Bad: "This option provides delivery on the same day for an additional cost of €5"

### Description Field

**When to Use:**
- Further explanation is required
- Option needs clarification
- Additional context helps user decide
- Complex options need detail

**Best Practices:**
- Use only when necessary
- Keep concise but informative
- Don't repeat information from label
- Provide value-added context

**Examples:**
- Label: "Express Delivery"
- Description: "Delivered within 24 hours to most locations"

**When NOT to Use:**
- Label is already clear
- Information is obvious
- Creating visual clutter
- Repeating label text

### Alignment

**Left Alignment (Default):**
- Radio button on left
- Label on right
- Most common pattern
- Familiar to users
- Easy to scan vertically

**Right Alignment:**
- Radio button on right
- Label on left
- Less common
- Use when layout requires
- Maintain consistency within group

**Consistency:**
- All radios in group should use same alignment
- Don't mix left and right within same group
- Maintain alignment across related groups when possible

---

## Accessibility

**Requirements:**
- Clearly associate labels with radio buttons
- Support keyboard navigation
- Provide clear focus indicators
- Ensure sufficient color contrast
- Use semantic HTML (radio input type)
- Group related radios (fieldset/legend)
- Announce state changes to screen readers

**Keyboard Navigation:**
- **Tab**: Navigate to radio group
- **Arrow keys**: Move between radios in group (up/down or left/right)
- **Space**: Select focused radio
- **Shift+Tab**: Navigate backward

**Screen Reader Support:**
- Announce radio button role
- Announce label text
- Announce current state (selected/unselected)
- Announce which option is selected in group
- Announce description text if present
- Indicate total number of options in group

**Grouping:**
- Use `<fieldset>` to group related radios
- Use `<legend>` for group title/question
- Helps screen readers understand relationship
- Example: 
  ```html
  <fieldset>
    <legend>Delivery method</legend>
    <!-- radio buttons here -->
  </fieldset>
  ```

**Best Practices:**
- Make entire label clickable (minimum 40px touch target)
- Provide visible focus indicators
- Ensure labels clearly describe options
- Use description for additional context
- Test with keyboard only
- Test with screen readers
- Verify color contrast for all states
- Don't rely on color alone to indicate selection
- Provide default selection when appropriate
- Consider providing "None" or "Other" option if needed

**Disabled State Considerations:**
- Some screen readers don't announce disabled elements
- User may not understand why option is unavailable
- Consider alternatives to disabling (hide, explain why unavailable)

---

## Reference Implementation

Imported Figma frame available at: `src/imports/RadioGroup-1/RadioGroup.tsx`
