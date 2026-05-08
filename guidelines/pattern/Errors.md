# Errors

Error patterns and messaging that help users understand and resolve issues when an application is unable to execute an intended action. Effective error management enhances user understanding and guides them toward resolution.

---

## Usage

Errors appear when an application is unable to execute an intended action.

Effective error management enhances user understanding and resolution of these issues, optimizing the functionality of your digital products. Design products that simplify user input, reducing errors. Apps should identify and understand common data formats, offering valuable hints to assist users.

**Key Principles:**
- **Prevent errors** when possible through good design
- **Detect errors** early and clearly
- **Communicate errors** in user-friendly language
- **Guide users** toward resolution
- **Learn from errors** to improve the experience

---

## Types of Errors

### Application Failures

**An app failing to load**

**Characteristics:**
- Complete application failure
- Unable to render content
- Network or server issues
- Critical system errors

**Examples:**
- Server unavailable (500 error)
- Network connection lost
- Application crash
- Critical resource loading failure

**Best Practices:**
- Provide clear error message
- Explain what happened
- Offer retry option
- Suggest alternative actions (contact support)
- Show when service might be restored

### Incompatible Actions

**Incompatible actions are executed simultaneously**

**Characteristics:**
- User attempts conflicting operations
- System cannot process both actions
- Business logic prevents combination
- State conflicts

**Examples:**
- Editing and deleting same item
- Submitting form while validation pending
- Multiple simultaneous transactions
- Conflicting settings selected

**Best Practices:**
- Prevent conflicting actions through UI design
- Disable incompatible actions
- Clear error message explaining conflict
- Guide user to correct action sequence

### User Input Not Understood

**When user input is not understood**

**Characteristics:**
- Invalid format or data type
- Unrecognized input pattern
- Missing required information
- Data doesn't match expected format

**Examples:**
- Invalid email format
- Incorrect date format
- Non-numeric input in number field
- Password doesn't meet requirements

**Best Practices:**
- Validate input client-side when possible
- Show format examples
- Provide helpful error messages
- Indicate what format is expected
- Highlight specific issue in input

### Page Loading Failure

**Page or resource fails to load**

**Characteristics:**
- Resource not found
- Network timeout
- Server error
- Broken link or moved content

**Examples:**
- 404 Not Found
- 503 Service Unavailable
- Network timeout
- Broken image or resource

**Best Practices:**
- Friendly error message
- Explain what's missing
- Offer navigation alternatives
- Provide search functionality
- Contact support option

---

## Form Error Patterns

### Text Field Input

Helper text can be provided before, during, or after a user interacts with each field on a form. Error messages should only show up after a user interacts with a field. If the user inputs incorrect data, helper text may transform into error text.

Minimize form text to the essentials. Not every text field needs helper and/or error text.

#### Helper Text

**Purpose:**
- Provide guidance before error occurs
- Explain format requirements
- Offer examples
- Clarify expectations

**When to Use:**
- Complex input formats
- Unusual requirements
- Format-specific fields (dates, phone numbers)
- Password requirements

**Best Practices:**
- Keep concise and clear
- Show format examples
- Place below field
- Don't overwhelm with too much help text

**Example:**
"Enter your email address (e.g., name@example.com)"

#### Error Text

**Purpose:**
- Indicate invalid input
- Explain what went wrong
- Guide toward correction

**When to Show:**
- After user interacts with field (on blur)
- On form submission attempt
- When validation fails

**Best Practices:**
- Show only after interaction
- Be specific about the issue
- Explain how to fix it
- Use clear, friendly language
- Visual indication (red color, error icon)

**Example:**
"Please enter a valid email address"

### Incompatible Values

Display errors for conflicting values when a user interacts with a text field, either during or after their interaction. If two or more fields contain incompatible inputs:

**In the text field:**
- Show that a correction is necessary
- Visual error state (border, color)
- Error icon

**Below the field:**
- Place an error message for clarity
- Explain the conflict
- Guide toward resolution

**Examples:**
- Start date after end date
- Minimum value greater than maximum
- Password and confirm password don't match
- Conflicting selections in related fields

**Best Practices:**
- Show error on both conflicting fields
- Explain the relationship
- Indicate which field to change
- Real-time validation when possible
- Clear resolution path

### Incomplete Form

Show empty form fields with both the field and an error message below. If a user misses a field while moving through the form, let them know with incomplete form errors. If we can't tell their progress, show an error after they try to submit.

**Label error messages individually as the user fills out the form.**

#### During Form Fill

**Progressive Validation:**
- Validate fields as user completes them
- Show errors after field blur (not during typing)
- Individual field error messages
- Allow user to continue filling form

**Benefits:**
- Immediate feedback
- Fixes errors as they occur
- Less overwhelming than all errors at once
- User maintains context

#### On Form Submission

**Summary Validation:**
- Validate all fields on submit attempt
- Show all errors at once
- Scroll to first error
- Prevent submission until resolved

**Error Summary:**
- List all errors at top of form
- Link to each error field
- Allow user to correct systematically
- Maintain form data entered

**Best Practices:**
- Clearly mark required fields upfront
- Use asterisks or "required" labels
- Show error state on field
- Specific error message per field
- Preserve user input when possible
- Focus first error field

---

## Error Dialogs

### Error from a Dialog

Clear and simple error messages are important. Use easy-to-understand language to explain the issue and guide users on how to fix it. Avoid technical terms and be helpful to ensure a smooth user experience.

#### Good Error Dialog

**Example of an error with guidance on resolving the user's issue**

**Elements:**
- Clear error title
- Explanation of what happened
- Specific guidance on resolution
- Action buttons (Try Again, Cancel, etc.)
- Contact support option (if needed)

**Structure:**
```
[Error Icon] Error Title
Clear explanation of what went wrong.
Specific steps to resolve the issue.

[Primary Action] [Secondary Action]
```

**Best Practices:**
- Plain language, not technical jargon
- Explain impact on user's task
- Actionable resolution steps
- Appropriate tone (apologetic but helpful)
- Clear next actions

#### Poor Error Dialog

**Example of an error with limited information**

**Problems:**
- Vague error message
- No explanation
- No guidance
- Technical error codes only
- No clear next steps

**What to Avoid:**
- "Error occurred"
- "Error 500"
- "Something went wrong"
- Technical stack traces
- Blame language ("You did X wrong")

---

## Specific Error Types

### 404 - Page Not Found

If you come across a 404 error, it means the page or resource you're looking for isn't available. The message should be simple and direct, letting users know that the requested page doesn't exist.

**To help users in this situation, consider offering suggestions like:**
- Returning to the homepage
- Checking the URL
- Using search functionality
- Browsing main sections
- Contacting support for assistance

**Making the error message user-friendly ensures a smoother experience and helps users find the information they need.**

#### Elements of Good 404 Page

**Clear Message:**
"Sorry, we couldn't find that page"

**Explanation:**
"The page you're looking for doesn't exist or has been moved."

**Helpful Actions:**
- Return to homepage
- Search for content
- Browse main sections
- Check URL for typos
- Contact support

**Optional:**
- Friendly illustration or image
- Popular pages or content
- Site map
- Search box

**Best Practices:**
- Maintain site navigation
- Keep brand identity
- Don't blame user
- Provide clear path forward
- Make it helpful, not frustrating
- Consider adding humor (brand-appropriate)

---

## Empty States

Empty state messages can be formulated with the necessary action to fix the issue, or they can simply provide a general message about the problem. The content of the message depends on how much information the system has about the issue. It might suggest users to try again later or contact support for assistance. If required, a call to action can be used to further help the user.

### Empty State with Action

**When the system lacks the necessary information to provide guidance and presents you with a call to action**

**Characteristics:**
- Action needed from user
- Clear CTA button
- Explanation of empty state
- Guidance on what to do

**Examples:**
- "No items in cart - Start shopping"
- "No favorites yet - Browse products"
- "No search results - Try different keywords"
- "No messages - Send your first message"

**Structure:**
```
[Icon/Illustration]
Heading explaining empty state
Brief description of situation
[Call to Action Button]
```

**Best Practices:**
- Clear, friendly message
- Relevant icon or illustration
- Single primary action
- Make action obvious and easy
- Motivate user to take action

### Empty State without Action

**When the system has the required information and no action is required**

**Characteristics:**
- Informational only
- No action available or needed
- Explains why empty
- Sets expectations

**Examples:**
- "No notifications - You're all caught up"
- "No transactions yet - They'll appear here when you make a purchase"
- "No results match your filters - Try adjusting filters"
- "Service temporarily unavailable - Check back soon"

**Structure:**
```
[Icon/Illustration]
Heading explaining empty state
Brief description explaining why empty
```

**Best Practices:**
- Positive or neutral tone
- Clear explanation
- Set expectations for future
- Reassuring message
- Relevant visual element

### Example: Empty State with Icon

**This illustrates an empty state scenario where no numerical or sales data is available for collection and viewing. Enhanced with an icon to capture attention and provide additional value to the message.**

**Benefits of Icons:**
- Draws attention
- Reinforces message
- Makes page feel less empty
- Adds visual interest
- Brand personality

**Icon Guidelines:**
- Relevant to context
- Appropriate tone
- Clear and simple
- Consistent with design system
- Not overwhelming

---

## Error Message Writing

### Language Guidelines

**Do:**
- Use plain, simple language
- Explain what happened
- Explain why it happened (when helpful)
- Tell user how to fix it
- Be specific and actionable
- Be polite and helpful
- Use active voice

**Don't:**
- Use technical jargon
- Blame the user
- Use passive voice
- Be vague or generic
- Show error codes alone
- Use all caps
- Be condescending

### Tone

**Appropriate Tone:**
- Friendly and helpful
- Apologetic when system fails
- Clear and direct
- Professional but human
- Empathetic to user frustration

**Examples:**

**Good:**
- "We couldn't save your changes. Please try again."
- "That email address is already registered. Try signing in instead."
- "The password must be at least 8 characters long."

**Bad:**
- "ERROR: Save operation failed."
- "Invalid input detected."
- "You entered the wrong password."

### Structure

**Effective Error Messages:**

1. **What happened**
   - "We couldn't complete your purchase"

2. **Why it happened** (optional, when helpful)
   - "Your card was declined"

3. **What to do**
   - "Please check your payment details and try again, or use a different payment method"

4. **Additional help** (when needed)
   - "Contact your bank if you continue to have issues"

---

## Visual Design

### Error States

**Visual Indicators:**
- Red color for errors (use design system error color)
- Error icon (typically exclamation mark or X)
- Red border on affected fields
- Error text below field
- Remove visual error when corrected

**Accessibility:**
- Don't rely on color alone
- Use icons and text together
- Sufficient color contrast
- Screen reader announcements
- ARIA attributes for errors

### Field-Level Errors

**Components:**
- Error state on input field
- Error icon
- Error message text
- Preserved input (don't clear field)

**Visual Treatment:**
- Red border on field
- Error icon at end of field
- Red error text below
- Maintains field focus/context

### Form-Level Errors

**Components:**
- Error summary at top
- Individual field errors
- Scroll to first error
- Visual connection between summary and fields

**Error Summary:**
- List of all errors
- Links to specific fields
- Dismissible or persistent
- Clear, scannable format

---

## Error Prevention

**Design Strategies:**

### Input Validation
- Real-time format checking
- Autocorrect common mistakes
- Accept flexible formats
- Provide format examples
- Show character counts

### Smart Defaults
- Pre-fill known information
- Suggest common values
- Remember user preferences
- Reduce manual entry

### Progressive Disclosure
- Show only necessary fields
- Add fields as needed
- Reduce form complexity
- Guide users step by step

### Clear Requirements
- State requirements upfront
- Show password requirements
- Indicate required fields
- Provide examples

### Constraints
- Limit invalid selections
- Disable incompatible options
- Prevent conflicting actions
- Guide valid choices

---

## Accessibility

**Requirements:**
- Announce errors to screen readers
- Use ARIA live regions for dynamic errors
- Associate errors with fields (aria-describedby)
- Sufficient color contrast
- Don't rely on color alone
- Keyboard accessible error dismissal
- Focus management after errors

**ARIA Attributes:**
- `aria-invalid="true"` on error fields
- `aria-describedby` linking to error message
- `role="alert"` for critical errors
- `aria-live="polite"` for form validation
- `aria-errormessage` for error association

**Screen Reader Support:**
- Announce error on field blur
- Read error message with field
- Announce error count on submit
- Navigate to errors easily
- Clear announcement when corrected

**Best Practices:**
- Test with screen readers
- Ensure keyboard navigation works
- Provide text alternatives for icons
- Make error summary keyboard accessible
- Don't trap focus in error states

---

## Error Recovery

**Help Users Recover:**

### Preserve User Input
- Don't clear form on error
- Maintain entered values
- Preserve partial progress
- Auto-save when possible

### Provide Alternatives
- Offer alternative actions
- Suggest workarounds
- Contact support option
- FAQ or help links

### Learn from Errors
- Track common errors
- Improve validation
- Update help text
- Refine error messages
- Fix root causes

---

## Related Components

Error patterns utilize various components from the design system:

- **[Input](../components/Input.md)** - Field-level error states
- **[Dialog](../components/Dialog.md)** - Error dialogs
- **[Snackbar](../components/Snackbar.md)** - Brief error notifications
- **[Callout](../components/Callout.md)** - Inline error messaging
- **[Badge](../components/Badge.md)** - Error indicators

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Errors/Errors.tsx`
