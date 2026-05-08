# Input

The input component facilitates entry and editing of text and numbers.

---

## Usage

**When to use:**

The input component is used to allow the user to input letters and numbers into a field. The input can be validated to ensure it conforms to the expected format.

**Key Use Cases:**

- **Form inputs**: Email addresses, names, phone numbers, addresses
- **Numeric entry**: Amounts, quantities, measurements, currency
- **Short text**: Single-line text entries
- **Longer text**: Multi-line text areas for messages or descriptions
- **Validated input**: Fields requiring specific formats (email, phone, etc.)
- **Search fields**: User search queries
- **Settings**: User preferences and configuration values

**Input Restrictions:**

Depending on context, accepted input can be restricted to, for example, only numbers when adding a telephone number.

**Clarity Guidelines:**

When incorporating an input field into a design, ensure users clearly understand the expected input by effectively using labels, placeholders, and help text.

**Commonly used with:**
- Forms - for collecting user information
- Buttons - for form submission
- Labels - for describing expected input
- Error messages - for validation feedback
- Help text - for additional guidance

---

## Semantic Purpose

### Input Field vs Text Area

**Input Field:**
- **Purpose**: Short input that fits on one line
- **Height**: Single line (fixed height)
- **When to use**: Email address, amount of currency, short text
- **Examples**: "john@example.com", "250 kr", "John Smith"

**Text Area:**
- **Purpose**: Larger bodies of text across multiple lines
- **Height**: Multi-line (configurable height)
- **When to use**: Written messages, descriptions, comments, feedback
- **Examples**: Message text, product description, user feedback

### Input Types

Common input types based on expected data:

- **Text**: General text input (default)
- **Email**: Email address validation
- **Number**: Numeric values only
- **Tel**: Telephone numbers
- **Password**: Masked text input
- **URL**: Web addresses
- **Search**: Search queries
- **Date/Time**: Date and time values (consider DatePicker component)

---

## Examples

### ✅ Correct Usage

**Do:**
- Keep label text short, clear and concise (no longer than a few words)
- Use help text when extra clarification is needed
- Provide clear error messages explaining what needs to be corrected
- Use placeholder text for format hints or examples
- Restrict input types appropriately (numbers for phone, etc.)
- Use suffix for contextual information (e.g., "kr" for currency)
- Use icon leading to visually aid user understanding
- Validate input and provide clear feedback
- Consider accessibility when using outline variant

**Good Examples:**
- "Email address" label with "you@example.com" placeholder
- "Deposit amount" with "kr" suffix and help text "Minimum 100 kr"
- Password field with trailing action to show/hide
- Phone number field restricted to numeric input
- Error message: "Please enter a valid email address"

### ❌ Incorrect Usage

**Don't:**
- Don't use placeholder text for critical information (it disappears on input)
- Don't make label text overly long or complex
- Don't use disabled state if avoidable (accessibility concerns)
- Don't provide vague error messages ("Invalid input")
- Don't forget to validate input appropriately
- Don't ignore accessibility considerations with outline variant
- Don't use input field for multi-line text (use text area)

**Common Mistakes:**
- Critical instructions only in placeholder (user loses them when typing)
- Vague error message without guidance on how to fix
- Using input field when text area would be better
- Missing label text (relying only on placeholder)
- Poor contrast on outline variant
- Overly long label text
- No validation or unclear validation feedback

---

## API

### Anatomy

**Structure:**
```
A. Label text (required)
B. Input text (user-entered)
C. Placeholder text (optional)
D. Help text (optional)
E. Error text (conditional)
F. Container (required)
G. Focus indicator (state)
H. Error indicator (state)
I. Icon leading (optional)
J. Action trailing (optional)
K. Suffix (optional)
```

**Requirements:**
- At minimum: Container + Label text
- Optional elements based on context and needs

### Properties

#### Type
- **Type**: Enum
- **Required**: No
- **Default**: `text`
- **Options**:
  - `text`: General text input
  - `email`: Email address
  - `number`: Numeric values
  - `tel`: Telephone numbers
  - `password`: Masked input
  - `url`: Web addresses
  - `search`: Search queries
- **Description**: Determines input type and validation behavior
- **Note**: May trigger specific keyboards on mobile devices

#### Multiline
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to render as text area (multi-line) or input field (single-line)
- **When true**: Renders as text area for longer text blocks

#### Label
- **Type**: String
- **Required**: Yes
- **Description**: Describes expected input (e.g., "Email address", "Deposit amount")
- **Guidelines**: Keep short, clear and concise; no longer than a few words

#### Placeholder
- **Type**: String
- **Required**: No
- **Description**: Example or hints regarding expected format, value, or syntax
- **Guidelines**: Don't use for critical information (it disappears when user types)
- **Examples**: "you@example.com", "Enter amount", "123-456-7890"

#### Value
- **Type**: String | Number
- **Required**: No
- **Description**: Current value of the input
- **Controlled**: Use with onChange for controlled component

#### DefaultValue
- **Type**: String | Number
- **Required**: No
- **Description**: Initial value for uncontrolled component

#### HelpText
- **Type**: String
- **Required**: No
- **Description**: Additional guidance or contextual information about expected input
- **When to use**: When extra clarification is needed for user to complete task
- **Persistent**: Remains visible (unlike placeholder)

#### ErrorText
- **Type**: String
- **Required**: No (Yes when error state)
- **Description**: Displayed when validation fails
- **Guidelines**: Inform user text/value is incorrect and ideally what needs correcting
- **Examples**: "Please enter a valid email address", "Amount must be at least 100 kr"

#### Error
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether input is in error state
- **Visual**: Shows error indicator and error text

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether input is disabled and non-interactive
- **Accessibility**: Avoid using disabled state if possible (accessibility considerations)

#### Variant
- **Type**: Enum
- **Required**: No
- **Default**: `solid`
- **Options**:
  - `solid`: Container with filled background (default)
  - `outline`: Container with border only, no background
- **Description**: Visual style of input container
- **Accessibility**: When using outline, ensure contrast for input and placeholder text against background

#### IconLeading
- **Type**: Icon component
- **Required**: No
- **Description**: Icon displayed at start of input field
- **Purpose**: Visually aid user in correctly filling field with expected input
- **Examples**: Envelope icon for email, phone icon for telephone

#### ActionTrailing
- **Type**: Icon button component
- **Required**: No
- **Description**: Icon button for actions within input field
- **Common uses**:
  - Clear input (X icon)
  - Show/hide password (eye icon)
  - Search action (magnifying glass)
  - Copy value

#### Suffix
- **Type**: String
- **Required**: No
- **Description**: Text displayed at end of input to provide additional context
- **When to use**: For certain input types to show units or context
- **Examples**: "kr" (currency), "%" (percentage), "kg" (weight), "cm" (length)

#### Rows
- **Type**: Number
- **Required**: No (Yes if multiline=true)
- **Default**: 3
- **Description**: Number of visible text lines for text area
- **Only applies**: When multiline=true

#### MaxLength
- **Type**: Number
- **Required**: No
- **Description**: Maximum number of characters allowed

#### Required
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether field is required for form submission

#### Pattern
- **Type**: String (regex)
- **Required**: No
- **Description**: Regex pattern for validation

#### OnChange
- **Type**: Function
- **Required**: Yes (for controlled components)
- **Description**: Callback when input value changes
- **Parameters**: Event object with current value

#### OnBlur
- **Type**: Function
- **Required**: No
- **Description**: Callback when input loses focus
- **Use case**: Trigger validation on blur

#### OnFocus
- **Type**: Function
- **Required**: No
- **Description**: Callback when input receives focus

#### AriaLabel
- **Type**: String
- **Required**: No (Yes if label is not visible)
- **Description**: Accessible label for screen readers

#### AriaDescribedBy
- **Type**: String
- **Required**: No
- **Description**: ID of element describing the input (help text or error text)

### States

#### **Default**
- Default state prior to user interaction
- Shows placeholder text (if provided)
- No focus indicator
- Ready for interaction

#### **Focus**
- Input field is in focus
- Available for accepting input
- Focus indicator visible
- Placeholder may still be visible (until user types)

#### **Filled**
- User has entered text
- Input text displayed
- Placeholder text replaced by user input
- Can still be edited

#### **Error**
- Validation has failed
- Error indicator visible
- Error text displayed (replaces help text)
- Error styling applied to container
- User can still edit to correct

#### **Disabled**
- Input field not available for interaction
- Reduced opacity
- No hover or focus states
- **Accessibility note**: Avoid using disabled state if possible

### Behavior

**Input Interaction:**

1. **Initial State**
   - Shows label and placeholder
   - Help text visible (if provided)
   - Ready for focus

2. **User Focuses**
   - Focus indicator appears
   - Cursor positioned in field
   - Ready for text entry
   - Placeholder remains until typing starts

3. **User Types**
   - Placeholder disappears
   - Input text replaces placeholder
   - Value updates with each keystroke
   - onChange fires (controlled components)

4. **User Exits (Blur)**
   - Focus indicator removed
   - Validation may trigger (onBlur)
   - Input text remains visible
   - If empty, placeholder returns

5. **Validation**
   - Can occur on blur, on change, or on submit
   - Success: Normal state continues
   - Failure: Error state activated, error text shown

**Placeholder Text Behavior:**

- Visible when field is empty and unfocused
- Remains visible when focused (until user types)
- Disappears once user starts typing
- Important: Don't rely on placeholder for critical information (it's not persistent)

**Text Area Specific:**

- Supports multiple lines of text
- Configurable height (rows)
- May include scrolling for overflow
- Auto-resize may be available

---

## Customization

### Label Text

**Guidelines:**
- Describes expected input clearly
- Examples: "Email address", "Deposit amount"
- Keep short, clear, and concise
- Pursue to make it no longer than a few words
- Always provide a label (don't rely only on placeholder)

### Placeholder Text

**Purpose:**
- Provides examples or hints regarding expected format, value, or syntax
- Examples: "you@example.com", "1000", "Enter your message here"

**Important Limitation:**
- Once user starts interacting with input field, placeholder text is replaced with user input
- Make sure important information is available in label or help text (not just placeholder)
- Placeholder is supplementary, not essential

### Input Text

**Display:**
- The provided input by the user
- Replaces placeholder when user types
- Can be edited at any time (unless disabled)

### Help Text

**When to Use:**
- Optional field for additional guidance or contextual information
- Consider using when extra clarification is needed
- Provides persistent information (unlike placeholder)

**Examples:**
- "We'll never share your email"
- "Minimum 100 kr, maximum 10,000 kr"
- "Use at least 8 characters with mixed case and numbers"

### Error Text

**Purpose:**
- Displayed when validation fails
- Informs user that text or value is incorrect
- Ideally explains what needs to be corrected to achieve success

**Best Practices:**
- Be specific about the error
- Provide actionable guidance
- Examples:
  - "Please enter a valid email address"
  - "Amount must be between 100 and 10,000 kr"
  - "Password must be at least 8 characters"

### Suffix

**When to Use:**
- For certain types of input to provide additional context related to entered value
- Shows units or category of the value

**Examples:**
- "kr" when currency amount is expected
- "%" for percentages
- "kg", "g", "cm", "m" for measurements
- "€", "$", "£" for different currencies

### Icon Leading

**Purpose:**
- Visually further aid user in correctly filling input field
- Provides visual context for expected input type

**Examples:**
- Envelope icon for email fields
- Phone icon for telephone fields
- Lock icon for password fields
- Search icon for search fields
- User icon for name fields

### Action Trailing

**Purpose:**
- Icon button for actions within the input field

**Typical Uses:**
- **Clear input**: X icon to clear all entered text
- **Show/hide password**: Eye icon to reveal or hide password value
- **Search**: Magnifying glass to trigger search
- **Copy**: Clipboard icon to copy value
- **Info**: Information icon for additional help

**Interaction:**
- Clickable icon button
- Performs action without submitting form
- Contextual to the input type

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
- Associate label with input (for/id or wrapping)
- Include aria-describedby for help text and error text
- Ensure sufficient color contrast for all states
- Support keyboard navigation
- Indicate error state clearly
- Use semantic HTML (input element)
- Announce error messages to screen readers

**Keyboard Navigation:**
- **Tab**: Focus on input field
- **Shift+Tab**: Move focus backward
- **Type**: Enter text
- **Arrow keys**: Navigate within text (text area)
- **Enter**: May submit form (single-line inputs)

**Screen Reader Support:**
- Announce label
- Announce current value
- Announce error messages when validation fails
- Announce help text for context
- Associate help/error text with aria-describedby
- Indicate required fields

**Best Practices:**
- Make input fields easily tappable (minimum 40px height)
- Provide visible focus indicators
- Ensure labels clearly describe expected input
- Don't rely on placeholder alone (it disappears)
- Avoid disabled state when possible (accessibility considerations)
- Test with screen readers
- Verify color contrast, especially for outline variant
- Don't rely on color alone to indicate error state

**Disabled State Accessibility:**

For accessibility considerations, avoid using the disabled state in your designs if possible. When input is disabled, it:
- Cannot receive keyboard focus
- Is not announced by some screen readers
- May be difficult for users to understand why it's unavailable
- Consider alternatives like making field read-only with explanation

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Input/Input.tsx`
