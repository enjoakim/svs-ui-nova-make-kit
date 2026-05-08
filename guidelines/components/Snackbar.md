# Snackbar

A brief, non-intrusive notification that confirms an action was completed successfully or if an error has occurred. Snackbars appear temporarily and then disappear automatically, keeping the experience smooth and non-disruptive.

---

## Usage

**When to use:**

A snackbar confirms that an action was completed successfully or if an error has occurred. It briefly appears and then disappears, keeping the experience smooth and non-intrusive. In some cases, it may include an action, allowing users to take a follow-up step, such as undoing a change or viewing more details.

**Key Use Cases:**

- **Action confirmations**: "Item added to cart", "Message sent", "Settings saved"
- **Success feedback**: Brief confirmation of successful operations
- **Error notifications**: Non-critical errors that don't block workflow
- **Undo actions**: Providing quick undo option for reversible actions
- **Information updates**: Lightweight status updates
- **Process feedback**: Brief updates about background processes

**Key Principles:**

#### 1. **Clarity**
- Short and to the point
- Immediately understandable without extra effort
- Avoid unnecessary details
- Keep focus on key information

#### 2. **Visibility**
- Should stand out without being intrusive
- Appears in consistent location
- Remains visible long enough to read
- Not so long that it becomes a distraction

#### 3. **Actionable**
- If includes action, it should be relevant and useful
- Undo, retry, or dismiss actions should be clear
- Easy to tap, doesn't interfere with reading message
- If no action needed, disappears automatically

**When to use snackbars:**

Snackbars deliver lightweight messages that inform without interrupting and typically require no user action.

- **Priority**: Low
- **User Action**: Optional - Snackbars disappear automatically after a short duration
- **Blocking**: Non-blocking, page remains interactive

**Commonly used with:**
- Forms - for submission feedback
- Actions - for confirmation messages
- Deletion - with undo option
- Uploads - for progress updates
- Settings - for save confirmations
- Operations - for success/error feedback

---

## Semantic Purpose

### Snackbar vs Dialog vs Toast vs Alert

**Snackbar:**
- **Priority**: Low
- **Duration**: Auto-dismiss (4-7 seconds typically)
- **User Action**: Optional
- **Blocking**: Non-blocking
- **Position**: Bottom of screen (consistent location)
- **When**: Lightweight feedback, confirmations, non-critical errors

**Dialog:**
- **Priority**: High
- **Duration**: Until user acts
- **User Action**: Required - blocks app usage until dismissed or acted upon
- **Blocking**: Modal (blocks page interaction)
- **Position**: Center of screen
- **When**: Critical decisions, important information requiring attention

**Toast:**
- Similar to Snackbar, terms often used interchangeably
- Generally synonymous in most design systems

**Alert/Banner:**
- **Priority**: Medium to High
- **Duration**: Persistent or long duration
- **User Action**: Usually required
- **Blocking**: Non-modal but prominent
- **Position**: Top of screen or inline
- **When**: Important warnings, persistent notifications

---

## Examples

### ✅ Correct Usage

**Do:**
- Keep messages short and to the point
- Use for lightweight, non-critical feedback
- Place in consistent location (bottom center/left)
- Auto-dismiss after appropriate duration (4-7 seconds)
- Include useful actions when relevant (Undo, Retry)
- Make actions clear and easy to tap
- Use for confirmations that don't require user response
- Ensure sufficient contrast for readability

**Good Examples:**
- "Item added to cart" with "Undo" action
- "Message sent successfully"
- "Settings saved"
- "Connection restored"
- "Photo uploaded" with "View" action
- "File deleted" with "Undo" action
- "Update available" with "Install" action

### ❌ Incorrect Usage

**Don't:**
- Don't use for critical errors (use Dialog instead)
- Don't include long messages that can't be read in time
- Don't use for actions requiring user decision
- Don't show multiple snackbars simultaneously
- Don't use for persistent information
- Don't make auto-dismiss too short (unreadable)
- Don't make auto-dismiss too long (becomes distraction)
- Don't use for information that requires user action

**Common Mistakes:**
- Using snackbar for critical error that needs immediate attention
- Message too long to read before auto-dismiss
- Multiple snackbars stacking up confusingly
- Using for persistent warnings (use banner instead)
- Action button too small or unclear
- Insufficient contrast making it hard to read
- Blocking interaction with page content

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Leading icon (optional)
C. Message text (required)
D. Action button (optional)
E. Close button (optional)
```

**Requirements:**
- At minimum: Container + Message text
- Optional: Leading icon, Action button, Close button

### Properties

#### Message
- **Type**: String
- **Required**: Yes
- **Description**: The text content of the snackbar
- **Guidelines**: 
  - Keep short and to the point
  - Single line preferred
  - Maximum 2 lines
  - Immediately understandable

#### Variant
- **Type**: Enum
- **Required**: No
- **Default**: `default`
- **Options**:
  - `default`: Standard snackbar (neutral)
  - `success`: Success confirmation (with success icon)
  - `info`: Informational message (with info icon)
  - `warning`: Warning message (with warning icon)
  - `error`: Error notification (with error icon)
- **Description**: Visual style and semantic meaning

#### IconLeading
- **Type**: Icon component | Boolean
- **Required**: No
- **Description**: Icon displayed at start of snackbar
- **Purpose**: Supports quick message scanning by combining visual and textual cues
- **When**: Icon helps signal message type (success, info, warning, error)
- **Auto**: May be automatically shown based on variant

#### Action
- **Type**: Object
- **Required**: No
- **Description**: Optional action button configuration
- **Properties**:
  - `label`: String - Button text (e.g., "Undo", "Retry", "View")
  - `onClick`: Function - Action handler
- **Guidelines**:
  - Keep label short (1-2 words)
  - Make action relevant and useful
  - Easy to tap, clear purpose
  - Don't interfere with reading message

#### ShowClose
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to show close/dismiss button
- **When to use**: For snackbars that persist longer or contain important information user may want to dismiss early

#### Duration
- **Type**: Number (milliseconds)
- **Required**: No
- **Default**: 4000-7000ms (4-7 seconds)
- **Description**: How long snackbar remains visible before auto-dismissing
- **Guidelines**:
  - Minimum: 4 seconds (enough time to read)
  - Maximum: 7 seconds (not too distracting)
  - Longer for messages with actions
  - Consider message length when setting duration

#### Position
- **Type**: Enum
- **Required**: No
- **Default**: `bottom-center` or `bottom-left`
- **Options**:
  - `bottom-center`: Centered at bottom (most common)
  - `bottom-left`: Left-aligned at bottom
  - `bottom-right`: Right-aligned at bottom
  - `top-center`: Centered at top (less common)
- **Description**: Position on screen
- **Guidelines**: Use consistent location throughout app

#### OnClose
- **Type**: Function
- **Required**: No
- **Description**: Callback when snackbar is dismissed (auto or manual)

#### Persistent
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether snackbar persists until manually dismissed
- **When to use**: For important information that shouldn't auto-dismiss
- **Note**: Should include close button if persistent

#### AriaLive
- **Type**: Enum
- **Required**: No
- **Default**: `polite`
- **Options**: `polite`, `assertive`, `off`
- **Description**: ARIA live region politeness for screen readers

### Configuration Types

#### **None (Text Only)**
- **Structure**: Container + Message text
- **Purpose**: Deliver short, single-line messages about completed action
- **Focus**: Clarity and simplicity
- **When**: Simple confirmations without required action

#### **Default (With Action)**
- **Structure**: Container + Message text + Action button
- **Purpose**: Communicating feedback with action, such as "Undo"
- **Allows**: Users to respond directly to process or operation
- **When**: Reversible actions, optional follow-up actions

#### **Icon**
- **Structure**: Container + Leading icon + Message text (+ optional Action/Close)
- **Purpose**: Support quick message scanning
- **Benefit**: Combines visual and textual cues
- **When**: Signal message type (success, info, warning, error)
- **Adds**: Clarity in fast-paced user flows

#### **Close Action**
- **Structure**: Container + Message text + Close button (+ optional Icon/Action)
- **Purpose**: Allow user to dismiss manually
- **When**: Persistent snackbars or when user may want early dismissal

### Behavior

**Appearance:**
1. **Trigger Event**
   - Action completes (save, delete, send, etc.)
   - System event occurs
   - Process updates

2. **Snackbar Appears**
   - Slides in from position (bottom/top)
   - Smooth animation
   - Appears in consistent location
   - Non-blocking (page remains interactive)

3. **Display Duration**
   - Remains visible for set duration (4-7 seconds)
   - User can read message
   - User can interact with action if provided
   - Timer may pause on hover (optional)

4. **Dismissal**
   - Auto-dismiss after duration
   - Or user clicks action button
   - Or user clicks close button (if provided)
   - Or user swipes away (mobile)
   - Smooth exit animation

**Interaction:**
- **Read message**: User reads the brief notification
- **Take action** (optional): Click action button if provided
- **Close** (optional): Click close button if provided
- **Ignore**: Let it auto-dismiss

**Multiple Snackbars:**
- Typically show one at a time
- Queue additional snackbars if needed
- Show next after current dismisses
- Or stack vertically (less common)

**Page Interaction:**
- Snackbar is non-blocking
- User can continue using app
- Positioned to not cover critical content
- May appear above/below main content

---

## Customization

### Message Text

**Guidelines:**
- Short and to the point
- Single line preferred (max 2 lines)
- Immediately understandable
- Focus on key information
- Action-oriented language

**Examples:**
- Good: "Item added to cart"
- Bad: "The item you selected has been successfully added to your shopping cart and you can now proceed to checkout"
- Good: "Message sent"
- Bad: "Your message has been sent successfully and the recipient will receive it shortly"

### Duration

**Considerations:**
- **Short messages**: 4-5 seconds
- **Messages with actions**: 6-7 seconds (more time to read and act)
- **Long messages**: 7 seconds (or consider breaking up)
- **Persistent**: No auto-dismiss (must include close button)

**Balance:**
- Long enough to read comfortably
- Short enough to not be distracting
- Consider reading speed

### Actions

**Good Actions:**
- **Undo**: Reverse the action
- **Retry**: Try again after error
- **View**: See details
- **Dismiss**: Manually close
- **Install**: For updates
- **Refresh**: Reload content

**Guidelines:**
- Keep button label short (1-2 words)
- Make purpose clear
- Relevant to the message
- Easy to tap (large enough touch target)
- High contrast for visibility

### Icons

**Purpose by Variant:**
- **Success**: Checkmark icon
- **Info**: Information icon
- **Warning**: Warning/alert icon
- **Error**: Error/X icon

**Benefits:**
- Quick visual scanning
- Immediate message type recognition
- Supports colorblind users
- Reinforces message tone

---

## Accessibility

**Requirements:**
- Use ARIA live regions to announce to screen readers
- Ensure sufficient color contrast (WCAG AA minimum)
- Make action buttons large enough (minimum 44px touch target)
- Support keyboard interaction for actions
- Don't rely on color alone to convey message type
- Provide adequate display time for reading

**ARIA Live Regions:**
- Use `aria-live="polite"` for most snackbars
- Use `aria-live="assertive"` for urgent errors
- Screen readers announce message when snackbar appears

**Keyboard Support:**
- **Tab**: Focus on action button (if present)
- **Enter/Space**: Activate focused action
- **Escape**: Dismiss snackbar (if close button present)

**Screen Reader Support:**
- Announce message text
- Announce action button label
- Indicate snackbar role
- Don't announce too frequently (can be disruptive)

**Visual Accessibility:**
- High contrast for text and background
- Don't rely on color alone (use icons)
- Clear, readable typography
- Sufficient size for touch targets

**Timing:**
- Provide adequate time to read (minimum 4 seconds)
- Consider users who read slower
- Allow manual dismissal for users who need more time
- Pause on hover (optional but helpful)

**Best Practices:**
- Make snackbars predictable and consistent
- Position consistently
- Don't cover important content
- Test with screen readers
- Verify color contrast
- Ensure keyboard accessibility
- Consider users with cognitive disabilities (simple messages, adequate time)

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Snackbar/Snackbar.tsx`
