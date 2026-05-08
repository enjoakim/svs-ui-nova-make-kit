# Checkbox

Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on or off.

---

## Usage

**When to use:**

Checkboxes allow the user to enable or disable options in a form setting. Multiple checkboxes may be presented in a group, where the user can enable none, one or several options.

**Key Use Cases:**

- **Form settings**: Enable/disable multiple options
- **Multi-select**: Choosing multiple items from a list
- **Preferences**: Toggling user settings or configurations
- **Filters**: Selecting multiple filter criteria
- **Agreements**: Terms and conditions, consent forms
- **Nested selections**: Parent-child checkbox relationships with indeterminate state

**When NOT to use:**

- **Single selection**: Use radio group when only one option may be enabled at one time
- **Long option lists**: For a longer list of options consider using the select component
- **Immediate action**: For designs outside of a form setting, where the enabling or disabling is expected to be triggered immediately, consider using a switch

**Commonly used with:**
- Forms - for multi-select options and settings
- Buttons - to confirm changed settings (Submit, Apply, Save)
- Labels and descriptions - for clear option explanation
- Checkbox groups - for organizing related options
- Indeterminate parent checkboxes - for hierarchical selections

**Action confirmation:**

Typically an associated action is required for settings changed to be confirmed (e.g., a Submit or Apply button).

---

## Semantic Purpose

### Checkbox vs Radio vs Switch

Understanding when to use each selection control:

#### **Checkbox**
- **Purpose**: Enable or disable multiple independent options
- **Selection**: None, one, or multiple options can be selected
- **Action**: Requires confirmation (form submission)
- **Context**: Form settings and configuration
- **Example**: "Select toppings: [ ] Cheese [ ] Lettuce [ ] Tomato"

#### **Radio Group**
- **Purpose**: Choose exactly one option from a set
- **Selection**: Only one option can be enabled at a time
- **Action**: Requires confirmation (form submission)
- **Context**: Mutually exclusive choices
- **Example**: "Size: ( ) Small ( ) Medium ( ) Large"

#### **Switch**
- **Purpose**: Toggle a setting on or off with immediate effect
- **Selection**: Binary on/off state
- **Action**: Triggers immediately (no confirmation needed)
- **Context**: Outside of traditional form settings
- **Example**: "Dark mode: [ON/OFF]"

### Checkbox States

There are three states that communicate the selection status:

#### 1. **Selected**
- **Purpose**: Option is enabled/checked
- **Visual**: Checkmark inside checkbox
- **Meaning**: User has chosen this option
- **Action**: Clicking will unselect

#### 2. **Unselected**
- **Purpose**: Option is disabled/unchecked
- **Visual**: Empty checkbox
- **Meaning**: User has not chosen this option
- **Action**: Clicking will select

#### 3. **Indeterminate**
- **Purpose**: Mixed state for grouped selections
- **Visual**: Horizontal line inside checkbox
- **Meaning**: A subgroup of checkboxes have a mix of selected and unselected states
- **Use case**: Parent checkbox representing child checkboxes with partial selection
- **Action**: Clicking typically selects all children

---

## Examples

### ✅ Correct Usage

**Do:**
- Provide a clear, concise label for each checkbox
- Keep label text to one line
- Use the description field if extra clarification is required
- Group related checkboxes together
- Use indeterminate state for parent checkboxes with partial child selection
- Align checkboxes consistently (all left or all right)
- Provide associated action for confirmation (Submit, Apply, etc.)
- Use checkboxes for multi-select scenarios
- Make both checkbox and label clickable

**Good Examples:**
- Newsletter preferences with multiple options
- Filter panel with multiple criteria
- "Select all" parent checkbox with indeterminate state
- Terms and conditions acceptance
- Permission settings with clear labels
- Multi-select list with checkbox per item

### ❌ Incorrect Usage

**Don't:**
- Don't be unclear or unnecessarily wordy to describe what the setting means
- Don't let label text exceed one line
- Don't use checkboxes for single-selection scenarios (use radio instead)
- Don't use checkboxes for immediate actions (use switch instead)
- Don't mix alignment within the same group
- Don't omit labels or rely on checkbox alone
- Don't use checkboxes without confirmation action in forms
- Don't create overly long checkbox lists (consider select component)

**Common Mistakes:**
- Long, wordy label text spanning multiple lines
- Unclear or ambiguous option descriptions
- Using checkbox for mutually exclusive options
- No Submit/Apply button for form settings
- Inconsistent alignment within a group
- Missing description when option needs clarification
- Checkbox without accompanying label text

---

## API

### Anatomy

**Structure:**
```
A. Checkbox (required - the input control)
B. Label (required - descriptive text)
C. Description (optional - additional explanation)
```

**Requirements:**
- At minimum: Checkbox + Label
- Optional: Description text for clarification

### Properties

#### Checked
- **Type**: Boolean
- **Required**: Yes
- **Default**: false
- **Description**: Whether the checkbox is selected/checked
- **States**: true (selected), false (unselected)

#### Indeterminate
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether the checkbox is in an indeterminate/mixed state
- **When to use**: Parent checkbox representing children with partial selection
- **Visual**: Shows horizontal line instead of checkmark
- **Note**: Indeterminate is independent of checked state

#### Label
- **Type**: String
- **Required**: Yes
- **Max Length**: Single line (no wrapping)
- **Description**: Text label describing what the checkbox enables/disables
- **Guidelines**: Clear, concise, action-oriented

#### Description
- **Type**: String
- **Required**: No
- **Description**: Optional supplementary text providing additional clarification
- **When to use**: When the label alone is insufficient to communicate the option's meaning
- **Placement**: Below the label

#### Alignment
- **Type**: Enum
- **Required**: No
- **Default**: `left`
- **Options**:
  - `left`: Checkbox on left, label on right (standard)
  - `right`: Label on left, checkbox on right
- **Description**: Position of checkbox relative to label text
- **Consistency**: Use same alignment for all checkboxes in a group

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether checkbox is disabled and non-interactive
- **Visual**: Reduced opacity, no hover/focus states

#### Name
- **Type**: String
- **Required**: Yes (for form submission)
- **Description**: Name attribute for form data

#### Value
- **Type**: String
- **Required**: Yes (for form submission)
- **Description**: Value submitted when checkbox is checked

#### OnChange
- **Type**: Function
- **Required**: Yes
- **Description**: Callback function when checkbox state changes
- **Parameters**: Event object with checked state

#### AriaLabel
- **Type**: String
- **Required**: No (Yes if label is not visible)
- **Description**: Accessible label for screen readers

#### AriaDescribedBy
- **Type**: String
- **Required**: No (Yes if description is present)
- **Description**: ID of description element for screen reader association

### Behavior

**Interaction:**

1. **Click Target**
   - Both checkbox and label are clickable
   - Clicking either toggles the checkbox state
   - Large click target improves accessibility

2. **Keyboard Navigation**
   - **Tab**: Focus on checkbox
   - **Space**: Toggle checkbox state
   - **Enter**: May submit form (default browser behavior)

3. **State Changes**
   - **Unselected → Selected**: Click toggles to checked
   - **Selected → Unselected**: Click toggles to unchecked
   - **Indeterminate → Selected**: First click typically selects all children
   - **Selected → Unselected**: From indeterminate-selected, click unchecks

**States:**

- **Rest**: Default uninteracted state
- **Hover**: Mouse cursor over checkbox or label
- **Focus**: Keyboard focus on checkbox
- **Active/Pressed**: Checkbox actively being clicked
- **Disabled**: Checkbox cannot be interacted with

**Indeterminate Behavior:**

- Used for parent checkbox when children have mixed states
- Indicates partial selection in nested checkbox groups
- Typically clicking indeterminate checkbox selects all children
- Automatically updates based on child checkbox states

### Checkbox Groups

**Related Checkboxes:**

When multiple checkboxes are related, group them together:

1. **Visual Grouping**
   - Use consistent spacing between checkboxes
   - Group related options visually
   - Consider fieldset/legend for accessibility

2. **Hierarchical Groups**
   - Parent checkbox with indeterminate state
   - Child checkboxes indented or visually nested
   - Parent state reflects children selection

3. **Alignment Consistency**
   - All checkboxes in a group use same alignment
   - Maintain consistent spacing
   - Labels align vertically

### Placement

**General Guidelines:**
- Position in forms where multi-select is needed
- Group related options together
- Place in logical order (alphabetical, priority, or usage-based)
- Maintain consistent vertical spacing

**Common Patterns:**
- **Forms**: Vertically stacked list of options
- **Filters**: Grouped by category or type
- **Settings**: Organized by functional area
- **Tables**: Row selection with checkboxes
- **Lists**: Item selection for bulk actions

---

## Customization

### Label Text

**Best Practices:**
- Keep to one line
- Clear and concise
- Describes what will be enabled/disabled
- Action-oriented language

**Guidelines:**
- Avoid unnecessary wordiness
- Don't be unclear or ambiguous
- Use parallel structure for related options
- Maintain consistency across similar contexts

### Description Text

**When to Use:**
- Option requires further explanation
- Clarification improves user understanding
- Complex settings need context

**Best Practices:**
- Keep description brief
- Supplement label, don't repeat it
- Provide relevant additional context
- Use consistent tone and style

### Alignment Options

**Left-aligned (Default):**
- Checkbox on left, label on right
- Standard pattern, most common
- Natural reading flow for LTR languages

**Right-aligned:**
- Label on left, checkbox on right
- Less common, use for specific layouts
- Can align with right-side actions or controls

**Consistency:**
- Use same alignment throughout a group
- Don't mix left and right alignment
- Maintain alignment across similar contexts

---

## Accessibility

**Requirements:**
- Provide clear, descriptive labels
- Associate label with checkbox (for/id or wrapping)
- Include aria-describedby for description text
- Ensure sufficient color contrast for all states
- Support keyboard navigation (Tab, Space)
- Indicate disabled state clearly
- Use semantic HTML (input type="checkbox")
- Communicate indeterminate state to screen readers

**Best Practices:**
- Make touch targets at least 40px (includes label)
- Provide visible focus indicators
- Ensure labels clearly describe the option
- Use fieldset/legend for checkbox groups
- Test with screen readers
- Announce state changes (checked/unchecked/indeterminate)
- Don't rely on color alone to convey state

**Keyboard Interaction:**
- **Tab**: Move focus to checkbox
- **Shift + Tab**: Move focus backward
- **Space**: Toggle checkbox state
- **Enter**: May submit form (browser default)

**Screen Reader Considerations:**
- Announce label text
- Announce checked/unchecked state
- Announce indeterminate state when present
- Associate description with aria-describedby
- Group related checkboxes with fieldset/legend

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Checkbox/Checkbox.tsx`
