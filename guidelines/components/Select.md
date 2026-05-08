# Select

A space-efficient control that allows users to make a single selection from a list of options. Options are hidden until the user opens the dropdown menu.

---

## Usage

**When to use:**

Select is suitable for handling a longer list of options for the user to pick from. Select allows for a space-efficient way for the user to make a selection from a list of options.

**Key Use Cases:**

- **Long option lists**: When you have many options that would take too much space as radio buttons
- **Form inputs**: Selecting from predefined options (country, state, month, etc.)
- **Filtering**: Choosing filter criteria from a list
- **Settings**: Configuration options from a dropdown
- **Data entry**: Selecting categorical data values
- **Navigation**: Quick access to different sections or pages

**When NOT to use:**

- **Short lists**: For 2-5 options, use radio buttons (all options visible)
- **Binary choices**: For yes/no or on/off, use checkbox or switch
- **Multiple selections**: Use multi-select or checkboxes when users can pick multiple options
- **Immediate action**: Use Switch for immediate state changes
- **More appropriate component exists**: Don't use select when there are more suitable components for the functionality

**For shorter lists of options, consider using a radio group.**

**Menu Types:**

**Native Menu:**
- Utilizes the native menus of the user's device
- Example: iOS menu, Android menu, browser default
- Platform-consistent experience
- No icon support
- Automatic accessibility features

**Custom Menu:**
- Custom-designed menu component
- Support for leading icons
- Consistent appearance across platforms
- More customization options
- Requires additional accessibility implementation

**Commonly used with:**
- Forms - for collecting user selections
- Filters - for narrowing down content
- Navigation - for jumping to sections
- Settings - for configuration options
- Input fields - for related data entry

---

## Semantic Purpose

### Select vs Radio Group vs Checkbox

**Select:**
- **Selection**: One option from a list
- **Visibility**: Options hidden until opened
- **Space**: Compact, space-efficient
- **Best for**: Long lists (6+ options)
- **When**: Many options, need to save space

**Radio Group:**
- **Selection**: One option from a group
- **Visibility**: All options visible simultaneously
- **Space**: Requires more vertical space
- **Best for**: Short lists (2-5 options)
- **When**: User needs to see all options at once

**Checkbox:**
- **Selection**: Multiple independent options
- **Visibility**: All options visible
- **Space**: Requires space for each option
- **Best for**: Independent selections
- **When**: Multiple selections allowed

---

## Examples

### ✅ Correct Usage

**Do:**
- Choose the appropriate tool for the interaction pattern
- Order your list of options in a natural manner
- Keep label text short, clear, and concise (few words maximum)
- Use help text when extra clarification is needed
- Provide clear option names
- Use for longer lists of options (6+)
- Consider default selection when appropriate
- Provide error messages when validation fails
- Make option order predictable

**Good Examples:**
- Month selector ordered January through December
- Country list ordered alphabetically
- Year selector in chronological order
- Time zone selector grouped by region
- State/Province selector alphabetically
- Size selector: XS, S, M, L, XL (logical order)

### ❌ Incorrect Usage

**Don't:**
- Don't use select when there are more appropriate components (checkbox for yes/no)
- Don't order your list in an unpredictable or confusing manner (e.g., months alphabetically)
- Don't use for very short lists (2-3 options) when radio buttons would be better
- Don't forget to provide clear labels
- Don't use unclear or vague option names
- Don't disable without explanation when possible

**Common Mistakes:**
- Using select for binary yes/no choices (use checkbox)
- Alphabetically ordering months (January, April, August... - confusing!)
- No default selection when one would be helpful
- Unclear option names
- Too many nested levels in options
- Missing label text
- No placeholder when default isn't selected
- Vague error messages

---

## API

### Anatomy

**Structure:**
```
A. Label text (required)
B. Placeholder / Selection (required)
C. Help text (optional)
D. Error text (conditional)
E. Leading icon (optional)
F. Dropdown indicator (required)
G. Container (required)
```

**Requirements:**
- At minimum: Container + Label text + Placeholder/Selection + Dropdown indicator
- Optional: Help text, Error text, Leading icon

### Properties

#### Label
- **Type**: String
- **Required**: Yes
- **Description**: Describes the expected input (e.g., "Month", "Country")
- **Guidelines**: Keep short, clear, and concise; pursue to make it no longer than a few words

#### Options
- **Type**: Array of option objects
- **Required**: Yes
- **Description**: List of selectable options
- **Structure**: Each option typically has value and label
- **Guidelines**: Order in natural, predictable manner

#### Value
- **Type**: String | Number
- **Required**: No
- **Description**: Currently selected value
- **Controlled**: Use with onChange for controlled component

#### DefaultValue
- **Type**: String | Number
- **Required**: No
- **Description**: Initial value for uncontrolled component
- **Best practice**: Consider providing sensible default

#### Placeholder
- **Type**: String
- **Required**: No
- **Description**: Text shown when no option is selected
- **When to use**: When a first default option is not pre-selected
- **Purpose**: Further guide the user in making selection

#### HelpText
- **Type**: String
- **Required**: No
- **Description**: Additional guidance or contextual information about expected options
- **When to use**: When extra clarification is needed for user to complete task
- **Persistent**: Remains visible

#### ErrorText
- **Type**: String
- **Required**: No (Yes when error state)
- **Description**: Error message displayed when validation fails
- **When shown**: User omitted required selection or made invalid selection
- **Guidelines**: Be specific about what needs to be corrected

#### Error
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether select is in error state
- **Visual**: Shows error indicator and error text

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether select is disabled and non-interactive
- **Accessibility**: Avoid using disabled state if possible (accessibility considerations)

#### Variant
- **Type**: Enum
- **Required**: No
- **Default**: `solid`
- **Options**:
  - `solid`: Container with filled background (default)
  - `outline`: Container with border only, no background
- **Description**: Visual style of select container
- **Accessibility**: When using outline, be aware of accessibility considerations for input and placeholder text against underlying background

#### IconLeading
- **Type**: Icon component
- **Required**: No
- **Description**: Icon displayed at start of select field
- **Availability**: Only supported in custom menu implementation
- **Purpose**: Visual context for the type of selection

#### MenuType
- **Type**: Enum
- **Required**: No
- **Default**: `native`
- **Options**:
  - `native`: Uses device's native select menu (iOS menu, Android menu, browser default)
  - `custom`: Custom-designed menu with additional features
- **Description**: Type of dropdown menu to display

#### OnChange
- **Type**: Function
- **Required**: Yes (for controlled components)
- **Description**: Callback when selection changes
- **Parameters**: Event object with selected value

#### OnBlur
- **Type**: Function
- **Required**: No
- **Description**: Callback when select loses focus
- **Use case**: Trigger validation on blur

#### OnFocus
- **Type**: Function
- **Required**: No
- **Description**: Callback when select receives focus

#### Required
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether user must make a selection before form submission

#### AriaLabel
- **Type**: String
- **Required**: No (Yes if label is not visible)
- **Description**: Accessible label for screen readers

#### AriaDescribedBy
- **Type**: String
- **Required**: No
- **Description**: ID of element describing the select (help text or error text)

### States

#### **Default**
- Default state prior to user interaction
- Shows placeholder text (if no default selected)
- Shows selected value (if default provided)
- Dropdown indicator visible
- Ready for interaction

#### **Focus**
- Select field is in focus
- Focus indicator visible
- Ready to open dropdown
- Can be activated with keyboard

#### **Open**
- Dropdown menu is visible
- Options list displayed (native or custom menu)
- User can select an option
- Can navigate options with keyboard

#### **Selected**
- An option has been chosen
- Selection text displays chosen option
- Placeholder replaced by selected value
- Can be changed by reopening dropdown

#### **Error**
- Validation has failed
- Error indicator visible
- Error text displayed (replaces help text)
- Error styling applied to container
- User can still interact to correct

#### **Disabled**
- Select component not available for interaction
- Reduced opacity
- No hover or focus states
- Cannot open dropdown
- **Accessibility note**: For accessibility considerations, avoid using the disabled state in your designs if possible

### Behavior

**Selection Process:**

1. **Initial State**
   - Shows label and placeholder (or default selection)
   - Help text visible (if provided)
   - Dropdown closed

2. **User Activates**
   - User clicks select field or dropdown indicator
   - Or user focuses with keyboard and presses Enter/Space
   - Dropdown menu opens

3. **Menu Displays**
   - **Native**: Device-specific menu appears
   - **Custom**: Custom menu component appears
   - Options list shown

4. **User Selects**
   - User clicks an option
   - Or navigates with keyboard and presses Enter
   - Menu closes
   - Selected value displays in field

5. **Validation** (if applicable)
   - Can occur on blur, on change, or on submit
   - Success: Normal state continues
   - Failure: Error state activated, error text shown

**Option Ordering:**

- **Natural order**: Order options in a manner that is predictable and intuitive
- **Chronological**: Dates, months, years in time order
- **Alphabetical**: Names, countries, states when no natural order exists
- **Numerical**: Numbers, sizes in sequential order
- **Logical grouping**: Related items grouped together
- **Frequency**: Most common options first (when appropriate)

**Important**: Make sure your list is ordered in a predictable fashion to allow the user to easily find the desired option. Don't order in an unpredictable or confusing manner, such as ordering months of the year alphabetically.

---

## Customization

### Label Text

**Guidelines:**
- Describes the expected input clearly
- Examples: "Month", "Country", "State"
- Keep short, clear, and concise
- Pursue to make it no longer than a few words
- Always provide a label (don't rely only on placeholder)

### Placeholder Text

**Purpose:**
- Shown when no option is selected
- In case a first default option is not pre-selected
- Can be used to further guide the user

**Examples:**
- "Select a month"
- "Choose your country"
- "Pick an option"

**Important:**
- Placeholder disappears when option is selected
- Don't put critical information only in placeholder
- Use label and help text for essential information

### Selection Text

**Display:**
- Shows the currently selected option
- Replaces placeholder when user makes selection
- Clearly indicates current choice
- Can be changed by reopening dropdown

### Help Text

**When to Use:**
- Optional field for additional guidance
- Provide contextual information about expected options
- Consider using when extra clarification is needed

**Examples:**
- "Choose the month of your birth"
- "Select your primary residence country"
- "This will be your default setting"

**Best Practices:**
- Provide value-added context
- Don't repeat label text
- Keep concise but informative
- Persistent (unlike placeholder)

### Error Text

**Purpose:**
- Displayed when validation fails
- User has omitted making a required selection
- Or invalid selection has been made

**Best Practices:**
- Be specific about the error
- Provide actionable guidance
- Examples:
  - "Please select a month"
  - "Country selection is required"
  - "Please choose a valid option"

### Leading Icon (Custom Menu Only)

**Purpose:**
- Provides visual context for the selection type
- Only available in custom menu implementation
- Not supported in native menus

**Examples:**
- Calendar icon for date-related selects
- Location pin for location selects
- User icon for user-type selects

### Variants

**Solid (Default):**
- Container with filled background
- Standard appearance
- Clear visual boundary
- Works on most surfaces

**Outline:**
- Container with border only
- No background fill
- Lighter visual weight
- **Important**: Be aware of accessibility considerations for input and placeholder text against underlying background
- Ensure sufficient contrast

---

## Accessibility

**Requirements:**
- Provide clear, descriptive labels
- Associate label with select (for/id or wrapping)
- Include aria-describedby for help text and error text
- Ensure sufficient color contrast for all states
- Support keyboard navigation
- Indicate error state clearly
- Use semantic HTML (select element)
- Announce changes to screen readers

**Keyboard Navigation:**
- **Tab**: Focus on select field
- **Enter/Space**: Open dropdown menu
- **Arrow Up/Down**: Navigate through options (when open)
- **Enter**: Select focused option
- **Escape**: Close dropdown without selecting
- **Shift+Tab**: Move focus backward

**Screen Reader Support:**
- Announce label
- Announce current selection or placeholder
- Announce when dropdown opens/closes
- Announce options as user navigates
- Announce error messages when validation fails
- Associate help/error text with aria-describedby
- Indicate required fields

**Native vs Custom Accessibility:**

**Native Menu:**
- Automatic accessibility features from browser/OS
- Built-in screen reader support
- Standard keyboard navigation
- Familiar to users
- Less custom implementation needed

**Custom Menu:**
- Requires additional accessibility implementation
- Must manually add ARIA attributes
- Custom keyboard navigation handling
- Focus management needed
- More testing required

**Best Practices:**
- Make select fields easily tappable (minimum 40px height)
- Provide visible focus indicators
- Ensure labels clearly describe expected selection
- Don't rely on placeholder alone (it disappears)
- Avoid disabled state when possible (accessibility considerations)
- Test with screen readers
- Verify color contrast, especially for outline variant
- Don't rely on color alone to indicate error state
- Test keyboard navigation thoroughly
- Provide meaningful error messages

**Disabled State Accessibility:**

For accessibility considerations, avoid using the disabled state in your designs if possible. When select is disabled:
- Cannot receive keyboard focus
- May not be announced by some screen readers
- Users may not understand why it's unavailable
- Consider alternatives: hide, explain why unavailable, or make read-only with explanation

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Select/Select.tsx`
