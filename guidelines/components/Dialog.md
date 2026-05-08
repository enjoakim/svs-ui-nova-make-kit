# Dialog

A dialog is a "conversation" between the system and the user. It is prompted when the system needs input from the user or to give the user urgent information concerning their current workflow.

---

## Usage

**When to use:**

A dialog is purposefully interruptive as it disables all functionality of the site while waiting for the user to take action. With this in mind, dialogs should be used sparingly.

Use dialogs to present critical information that requires a clear decision or acknowledgement. They can also be used to inform users about errors that block normal site functionality.

**Key Use Cases:**

- **Critical decisions**: Actions that require explicit user confirmation
- **Urgent information**: Information that must be acknowledged before proceeding
- **Confirmations**: Verifying user intent before destructive actions
- **Errors**: Blocking errors that prevent normal site functionality
- **Alerts**: Important notifications requiring acknowledgement
- **Important choices**: Decisions that significantly impact user workflow

**Priority Level:**

Dialogs have the **highest priority** of all messaging components. They block app usage until the user takes a dialog action or exits the dialog (if available).

**When NOT to use:**

- **Non-critical notifications**: Use Snackbar for prominent or medium-priority messaging
- **Supplementary information**: Use Tooltip for low-priority, supplementary information
- **Complex forms**: Use Composable Modal for custom layouts
- **Minor confirmations**: Consider if action can be undone instead

**Commonly used with:**
- Buttons - for confirming, dismissive, and acknowledgement actions
- Icons - for visual context (optional)
- Scrim/backdrop - to disable background interaction
- Error messages - for critical failures

---

## Semantic Purpose

### Dialog vs Snackbar vs Tooltip

Understanding when to use each messaging component:

| Component | Priority | Blocking | Duration | Action Required | Use Case |
|-----------|----------|----------|----------|-----------------|----------|
| **Dialog** | Highest | Yes (blocks app) | Until action taken | Yes | Critical decisions, errors, confirmations |
| **Snackbar** | Medium | No | Brief or until dismissed | Optional | Prominent notifications, status updates |
| **Tooltip** | Lowest | No | Auto-dismiss | No | Supplementary information, hints |

**Dialog:**
- Blocks app usage until user takes action
- Appears centered with scrim overlay
- Requires explicit user action to dismiss
- Highest priority messaging

**Snackbar:**
- Stays visible briefly or until dismissed
- Appears at bottom of screen
- Doesn't require action (though may offer one)
- Medium-priority messaging that doesn't require a dialog

**Tooltip:**
- Disappears automatically (hover out or tap outside)
- Appears near related element
- Low-priority, supplementary information
- No action required

### Dialog Types

There are two different types of dialogs:

#### 1. **Alert**
- **Purpose**: Single action for acknowledgement
- **Buttons**: One button only
- **When to use**: Error messages, important notifications requiring acknowledgement
- **Action**: Acknowledgement (e.g., "OK", "Got it", "Understood")
- **Dismissal**: Single button closes dialog
- **Example**: "Your session has expired. Please log in again."

#### 2. **Confirmation**
- **Purpose**: Two actions - confirm or dismiss
- **Buttons**: Two buttons (confirming + dismissive)
- **When to use**: Decisions requiring explicit user choice
- **Actions**: Confirming action + Dismissive action
- **Dismissal**: User must choose to confirm or dismiss
- **Example**: "Delete this item?" with "Delete" and "Cancel"

---

## Examples

### ✅ Correct Usage

**Do:**
- Use dialogs sparingly (they are interruptive)
- Present critical information requiring clear decision or acknowledgement
- Pose specific questions in titles
- Explain what's involved in the request concisely
- Provide clear actions that indicate outcome
- Make sure to present choices that are clear to the user
- Place dismissive actions to the left of confirming actions (side-by-side)
- Place confirming actions above dismissive actions (stacked)
- Use brief, clear statements or questions in titles
- Indicate outcome of decision in button labels
- Limit to maximum of two actions
- Use single acknowledgement action for alerts

**Good Examples:**
- "Delete this coupon?" with "Delete" and "Cancel"
- "Place bet?" with "Place bet" and "Cancel"
- "Your session has expired" with "OK"
- "Unsaved changes will be lost" with "Discard" and "Keep editing"
- Clear, specific question with clear action outcomes

### ❌ Incorrect Usage

**Don't:**
- Don't use dialog titles that pose an unclear question
- Don't use action text that fails to indicate what the selection will do
- Don't place dismissive actions to the right of confirming actions
- Don't use unclear choices or ambiguous button labels
- Don't use apologies ("Sorry for the interruption")
- Don't use alarm language ("Warning!")
- Don't use ambiguity ("Are you sure?")
- Don't provide a third action like "Learn more" (navigates away, leaves task unfinished)
- Don't use dialogs for non-critical information

**Common Mistakes:**
- Unclear question in title: "Are you sure?"
- Vague actions: "Yes" and "No" instead of specific outcomes
- Dismissive action on right side (side-by-side layout)
- Confirming action below dismissive (stacked layout)
- Multiple competing actions
- Using dialog for minor notifications (use Snackbar instead)
- Too much scrolling content

---

## API

### Anatomy

**Structure:**
```
A. Icon (optional)
B. Title (required)
C. Message (optional)
D. Container (required)
E. Dismissive action (optional)
F. Supportive action (optional)
G. Primary action (required)
```

**Requirements:**
- At minimum: Container + Title + Primary action
- Alert dialog: Single acknowledgement button
- Confirmation dialog: Confirming button + Dismissive button

### Properties

#### Type
- **Type**: Enum
- **Required**: Yes
- **Default**: `confirmation`
- **Options**:
  - `alert`: Single button for acknowledgement
  - `confirmation`: Two buttons (confirm + dismiss)
- **Description**: Determines dialog structure and button configuration

#### Open
- **Type**: Boolean
- **Required**: Yes
- **Default**: false
- **Description**: Controls whether dialog is visible

#### Title
- **Type**: String
- **Required**: Yes
- **Description**: Dialog title - should be brief, clear statement or question
- **Guidelines**:
  - Contain a brief, clear statement or question
  - Avoid apologies ("Sorry for the interruption")
  - Avoid alarm ("Warning!")
  - Avoid ambiguity ("Are you sure?")

#### Message
- **Type**: String
- **Required**: No
- **Description**: Optional body content providing additional context
- **Guidelines**: Keep concise, avoid excessive scrolling

#### Icon
- **Type**: Icon component
- **Required**: No
- **Description**: Optional icon for visual context
- **When to use**: Error messages (red icon), status indicators
- **Error messages**: Use alert type with red icon

#### ConfirmLabel
- **Type**: String
- **Required**: Yes (for confirmation type)
- **Description**: Label for confirming action button
- **Guidelines**: Clearly indicate outcome (e.g., "Delete", "Place bet", "Save")

#### DismissLabel
- **Type**: String
- **Required**: Yes (for confirmation type)
- **Default**: "Cancel"
- **Description**: Label for dismissive action button
- **Guidelines**: Clear dismissal intent (e.g., "Cancel", "Go back", "Keep editing")

#### AcknowledgeLabel
- **Type**: String
- **Required**: Yes (for alert type)
- **Default**: "OK"
- **Description**: Label for acknowledgement action button
- **Examples**: "OK", "Got it", "Understood"

#### OnConfirm
- **Type**: Function
- **Required**: Yes (for confirmation type)
- **Description**: Callback when confirming action is taken

#### OnDismiss
- **Type**: Function
- **Required**: Yes
- **Description**: Callback when dialog is dismissed

#### MaxWidth
- **Type**: Number
- **Required**: No
- **Default**: Responsive (560px small, 640px large)
- **Description**: Maximum width of dialog
- **Guidelines**:
  - Small screens: 560px maximum
  - Large screens: 640px maximum
  - Maintain 24px margin from screen edges

#### ButtonLayout
- **Type**: Enum
- **Required**: No
- **Default**: `auto` (responsive)
- **Options**:
  - `auto`: Responsive (stacked on small, side-by-side on large)
  - `side-by-side`: Horizontal button arrangement
  - `stacked`: Vertical button arrangement
- **Description**: How buttons are arranged

### Behavior

**Opening:**
- Dialog appears centered on screen
- Scrim overlay appears below dialog
- Background content becomes inert
- Focus moves to dialog
- Page scrolling disabled

**Inside Dialog:**
- Focus trapped within dialog
- Tab cycles through focusable elements
- Escape key may dismiss (if allowed)
- Content area scrolls if exceeds height
- Header and footer remain fixed

**Closing:**
- User takes confirming action
- User takes dismissive action
- User takes acknowledgement action (alerts)
- Escape key (if enabled)
- Clicking scrim (if enabled)

**After Closing:**
- Focus returns to trigger element
- Background content becomes interactive
- Page scrolling re-enabled
- Scrim removed

### Button Arrangements

#### **Side-by-side (Recommended)**
- Buttons placed horizontally
- Confirming action to the far right
- Dismissive action to the left
- Used on larger screens
- Default for desktop

**Order (left to right):**
`[Dismissive] [Confirming]`

#### **Stacked**
- Buttons arranged vertically
- Accommodates longer button labels
- Confirming action appears above dismissive action
- Used on smaller screens
- Default for mobile

**Order (top to bottom):**
```
[Confirming]
[Dismissive]
```

#### **Solo**
- Alert dialogs only
- Single acknowledgement button
- Centered in footer

### Scaling and Adaptation

**Small Screens:**
- Actions stacked vertically
- Maximum width: 560px
- Minimum distance: 24px to each screen edge
- Confirming action above dismissive

**Large Screens:**
- Actions arranged horizontally
- Maximum width: 640px
- Confirming action to the right
- Dismissive action to the left

**Scrollable Content:**
- Dialogs should avoid excessive scrolling whenever possible
- If content exceeds available space, only content area scrolls
- Header and footer remain fixed to preserve context and access to actions
- Dialogs scroll independently of background (which remains static)

### Elevation

- Displayed at 24dp elevation
- Display a shadow
- Appear above other content
- Typically have a scrim below covering all content
- Highest z-index priority

---

## Actions

### Types of Actions

Dialogs present a distinct choice to users through their title, content, and available actions. Dialog actions are represented as buttons and allow users to resolve what triggered the dialog.

There are three types of dialog actions:

#### 1. **Confirming Actions**
- **Purpose**: Confirm a proposed action
- **Examples**: "Delete", "Remove", "Place bet", "Save", "Submit"
- **Placement**:
  - **Side-by-side**: Right side (far right)
  - **Stacked**: Top position
- **Style**: Primary button emphasis
- **Can involve removal**: "Delete" or "Remove" if it suits context

#### 2. **Dismissive Actions**
- **Purpose**: Dismiss proposed action, return to originating screen
- **Examples**: "Cancel", "Go back", "Keep editing", "Dismiss"
- **Placement**:
  - **Side-by-side**: Left side (left of confirming)
  - **Stacked**: Bottom position (below confirming)
- **Style**: Secondary or outline button

#### 3. **Acknowledgement Actions**
- **Purpose**: User acknowledgement to proceed (alerts only)
- **Examples**: "OK", "Got it", "Understood"
- **Placement**: Centered in footer
- **Style**: Primary button emphasis
- **When**: Single action required

### Number of Actions

**Rules:**
- Dialogs should contain a **maximum of two actions**
- If **single action** provided: Must be acknowledgement action (alert type)
- If **two actions** provided: One confirming + one dismissive (confirmation type)

**Avoid:**
- Providing a third action such as "Learn more" is not recommended
- Third actions navigate user away from dialog, leaving task unfinished
- If more extensive information needed, provide it before entering dialog or after dialog resolved

---

## Customization

### Title Guidelines

A dialog's purpose should be communicated by its title and button labels.

**Titles should:**
- Contain a brief, clear statement or question
- Pose specific questions
- Concisely explain what's involved in the request
- Avoid apologies ("Sorry for the interruption")
- Avoid alarm ("Warning!")
- Avoid ambiguity ("Are you sure?")

**Examples:**
- ✅ "Delete this coupon?"
- ✅ "Place bet?"
- ✅ "Unsaved changes will be lost"
- ❌ "Are you sure?"
- ❌ "Warning!"

### Button Labels

Dialogs should be closed through a clear user action. Each action should clearly communicate the outcome.

**Guidelines:**
- Action text should indicate what the selection will do
- Use specific, outcome-oriented labels
- Avoid vague generic labels like "Yes" / "No"
- Indicate the result of the action
- Keep labels concise

**Examples:**
- ✅ "Place bet" (indicates outcome)
- ✅ "Delete" and "Cancel"
- ❌ "Yes" and "No" (fails to indicate outcome)
- ❌ "OK" and "Close" (unclear/conflicting for confirmation)

### Button Choices

To minimize confusion, make sure to present choices that are clear to users.

**Guidelines:**
- Provide clear, distinct options
- Avoid conflicting actions
- Avoid unclear choices
- Each button should have obvious purpose
- Don't use "Close" when it conflicts with dismissive action

### Message Content

**Optional body content:**
- Provides additional context beyond title
- Keep concise to avoid excessive scrolling
- Supplement title, don't repeat it
- Provide necessary details for decision-making

### Icon Usage

**When to use:**
- **Error messages**: Red icon with alert type
- **Status indicators**: Contextual icons (success, warning, info)
- **Visual context**: When icon adds meaningful context

**When not to use:**
- Don't use icons for decoration
- Don't rely on icon alone to convey meaning
- Ensure icon supports the message, doesn't replace it

### Theming

Dialogs are themed depending on business area and the information being conveyed. Follow the guidelines for theming.

---

## Accessibility

**Requirements:**
- Provide clear, descriptive titles
- Ensure sufficient color contrast
- Support keyboard navigation
- Trap focus within dialog when open
- Return focus to trigger on close
- Provide clear action labels
- Use semantic HTML (role="dialog")
- Implement aria-labelledby for title
- Implement aria-describedby for message

**Keyboard Navigation:**
- **Tab/Shift+Tab**: Navigate between actions
- **Enter**: Activate focused action
- **Escape**: Dismiss dialog (if enabled)
- **Focus trap**: Focus stays within dialog

**Screen Reader Support:**
- Announce dialog opening
- Read title and message
- Identify action buttons clearly
- Announce dialog closing
- Support aria-modal="true"

**Best Practices:**
- Make touch targets at least 40px
- Provide visible focus indicators
- Don't rely on color alone for error states
- Test with screen readers
- Ensure logical tab order
- Clear action button labels (avoid "Yes"/"No")

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Dialog/Dialog.tsx`
