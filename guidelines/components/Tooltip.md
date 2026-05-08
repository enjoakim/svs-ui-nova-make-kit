# Tooltip

A contextual information overlay that provides short, helpful descriptions for UI elements. Tooltips appear on hover or focus and automatically dismiss when the element is no longer active.

---

## Usage

**When to use:**

Tooltips provide short, contextual information about an element — often used to describe icons, condensed labels, or actions when space is limited. They appear on hover or focus and disappear automatically when the element is no longer active.

**Key Use Cases:**

- **Icon descriptions**: Explaining icon-only buttons or controls
- **Condensed labels**: Providing full text for truncated or abbreviated labels
- **Additional context**: Offering helpful hints or clarifications
- **Functionality description**: Describing what an action will do
- **Keyboard shortcuts**: Showing available keyboard shortcuts
- **Disabled elements**: Explaining why an element is disabled

**When to use Tooltips:**
- Space is limited and full labels won't fit
- Icon-only buttons need text descriptions
- Additional context would help user understanding
- Describing functionality without cluttering interface
- Providing supplementary, non-critical information

**Important Distinctions:**

**Tooltip (Contextual information):**
- Triggered by hover or focus
- Short, supplementary information
- Automatically dismisses
- Non-interactive content
- Appears after delay (~700ms)

**Popover (Supplementary content):**
- Triggered by click/tap
- More detailed content possible
- User must explicitly dismiss
- Can contain interactive elements
- Appears immediately on click

**Snackbar (Feedback notification):**
- System-initiated feedback
- Action confirmations
- Appears automatically after user action
- Auto-dismisses after duration
- Not tied to specific element

**Commonly used with:**
- Icon buttons - for describing icon meaning
- Toolbar controls - for explaining actions
- Truncated text - for showing full content
- Form fields - for providing hints
- Disabled elements - for explaining why disabled
- Interactive elements - for additional context

---

## Semantic Purpose

### Tooltip vs Popover vs Snackbar

**Tooltip:**
- **Purpose**: Describe UI element
- **Trigger**: Hover or focus
- **Content**: Short text (1-2 lines)
- **Dismissal**: Automatic on blur/unhover
- **When**: Contextual help for specific elements

**Popover:**
- **Purpose**: Supplementary content and help
- **Trigger**: Click/tap
- **Content**: Longer text, can be interactive
- **Dismissal**: User must close
- **When**: Detailed help or explanations

**Snackbar:**
- **Purpose**: Action feedback and notifications
- **Trigger**: System/application event
- **Content**: Brief confirmation message
- **Dismissal**: Auto-dismiss after duration
- **When**: Confirming user actions

---

## Examples

### ✅ Correct Usage

**Do:**
- Keep labels short and simple
- Use for icon-only buttons
- Provide helpful, concise descriptions
- Show one tooltip at a time
- Let tooltip size adapt to content
- Use for supplementary information
- Ensure text is brief and scannable
- Use for truncated or abbreviated content

**Good Examples:**
- Icon button tooltip: "Save"
- Icon button tooltip: "Delete item"
- Truncated text tooltip: Full name when hovering over "John D..."
- Disabled button: "Complete required fields to enable"
- Keyboard shortcut: "Save (Ctrl+S)"
- Information icon: "Your email will not be shared"

### ❌ Incorrect Usage

**Don't:**
- Avoid long or complex sentences that slow down scanning
- Don't show multiple tooltips simultaneously
- Don't use fixed width for tooltips
- Don't use for critical information (use visible labels instead)
- Don't use for interactive content (use Popover instead)
- Don't repeat visible text
- Don't use for content that users must read

**Common Mistakes:**
- Long, multi-sentence descriptions
- Multiple tooltips visible at once
- Tooltips with critical information only
- Using tooltips instead of proper labels
- Repeating text that's already visible
- Tooltips on disabled elements that can't receive focus
- Fixed width causing awkward text wrapping

---

## API

### Anatomy

**Structure:**
```
1. Label (required) - The message text providing context or clarification
2. Container (required) - The background surface that holds the label, styled with rounded corners
3. Tip/Caret (required) - A small directional triangle that points toward the anchor element to indicate its relationship
```

**Requirements:**
- At minimum: All three elements (Label + Container + Tip)
- Label must be concise (1-2 lines maximum)
- Tip points toward the anchor element

### Properties

#### Content
- **Type**: String
- **Required**: Yes
- **Description**: The text content of the tooltip
- **Guidelines**: Keep text short and meaningful. Avoid wrapping where possible; wrap to a second line only when necessary.
- **Best practice**: 1-2 lines maximum, prefer single line

#### Trigger
- **Type**: Element reference
- **Required**: Yes
- **Description**: The element that triggers the tooltip
- **Note**: The element that will show the tooltip on hover or focus

#### Placement
- **Type**: Enum
- **Required**: No
- **Default**: `top` (auto-adjusts based on space)
- **Options**:
  - `top`: Above the trigger element (default)
  - `bottom`: Below the trigger element
  - `left`: To the left of the trigger element
  - `right`: To the right of the trigger element
  - `auto`: Automatically determines best placement
- **Description**: Preferred placement position relative to trigger
- **Behavior**: Tooltips position themselves automatically based on available space

#### Delay
- **Type**: Number (milliseconds)
- **Required**: No
- **Default**: 700
- **Description**: Delay before tooltip appears on hover
- **Standard**: Around 700ms for optimal UX
- **Purpose**: Prevents tooltips from appearing during quick mouse movements

#### Open
- **Type**: Boolean
- **Required**: No (Yes for controlled component)
- **Description**: Controls tooltip visibility (controlled mode)
- **Use case**: For programmatic control of tooltip visibility

#### DisableHoverListener
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to disable hover trigger
- **Use case**: When only focus trigger is desired

#### DisableFocusListener
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to disable focus trigger
- **Use case**: When only hover trigger is desired

#### Arrow
- **Type**: Boolean
- **Required**: No
- **Default**: true
- **Description**: Whether to show the tip/caret
- **Note**: In this design system, the tip is a standard part of the anatomy

#### EnterDelay
- **Type**: Number (milliseconds)
- **Required**: No
- **Default**: 700
- **Description**: Delay before tooltip appears

#### LeaveDelay
- **Type**: Number (milliseconds)
- **Required**: No
- **Default**: 0
- **Description**: Delay before tooltip hides
- **Standard**: Hides immediately when element is no longer active

### States

#### **Hidden (Default)**
- Tooltip is not visible
- No hover or focus on trigger element
- Default state prior to interaction
- Awaiting user interaction

#### **Appearing**
- Delay period after hover/focus begins
- Around 700ms delay
- Tooltip preparing to show
- Fade-in animation begins

#### **Visible**
- Tooltip is fully displayed
- Element is hovered or focused
- Content clearly readable
- Positioned relative to trigger
- Only one tooltip visible at a time

#### **Dismissing**
- Tooltip is fading out
- Element lost hover or focus
- Or another tooltip triggered
- Hides immediately (no delay)

### Behavior

**Presentation:**

1. **Triggering**
   - User hovers over trigger element
   - Or trigger element receives keyboard focus
   - Delay begins (around 700ms)
   
2. **Appearing**
   - After delay period
   - Tooltip fades in smoothly
   - Positions automatically based on available space
   - Tip points toward anchor element
   
3. **Visible State**
   - Tooltip remains visible while hover/focus persists
   - Only one tooltip visible at a time
   - If new tooltip triggered, previous one hides immediately
   - Content is readable and properly positioned

**Dismissing:**

The tooltip disappears when:
- The anchor loses hover (mouse moves away)
- The anchor loses focus (tab away, click elsewhere)
- Another tooltip is triggered
- Element is scrolled out of view (optional)

**Dismissal is immediate** (no delay) when element is no longer active.

**Text Overflow:**

- Avoid long text where possible
- When wrapping occurs, the tip remains visually centered relative to the anchor
- Text wraps to second line only when necessary
- Tooltip width adapts to content (not fixed width)

**Placement:**

1. **Default Placement**
   - Above the trigger element (preferred)
   - Tip points downward toward trigger

2. **Automatic Repositioning**
   - Tooltips position themselves automatically based on available space
   - Can appear below, to the left, or to the right when needed
   - Automatically repositions to stay visible within viewport
   - Tip adjusts to indicate direction

3. **Viewport Awareness**
   - Stays within viewport boundaries
   - Adjusts position if default placement would overflow
   - Tip always points toward anchor element
   - Maintains consistent spacing from trigger

---

## Customization

### Label Text

**Guidelines:**
- The label displays the accessible name of the trigger element
- Keep text short and meaningful
- Avoid wrapping where possible; wrap to a second line only when necessary
- Keep labels short and simple
- Avoid long or complex sentences that slow down scanning

**Best Practices:**
- Prefer 1-2 words when possible
- Maximum 1-2 lines of text
- Be concise and specific
- Use sentence case or title case consistently
- Make meaning immediately clear
- Don't repeat visible text

**Examples:**
- Good: "Save", "Delete", "Copy link"
- Acceptable: "Save changes", "Add to favorites"
- Avoid: "Click this button to save all of your current changes to the database"
- Good: "Search (Ctrl+K)"
- Avoid: "Use this search box to find items. You can also use Ctrl+K as a keyboard shortcut."

### Tooltip Width

**Configuration:**
- Let the tooltip size adapt to its content
- Avoid a fixed width for the tooltip
- Width should be flexible based on text length
- Minimum width based on content
- Maximum width to prevent excessively wide tooltips

**Best Practices:**
- Don't constrain width unnecessarily
- Allow natural sizing based on content
- Prevent awkward wrapping with fixed width
- Ensure text is readable

### Delay Timing

**Enter Delay (~700ms):**
- Standard delay before tooltip appears
- Prevents tooltips during quick mouse movements
- Balances discoverability with annoyance
- Around 700ms is optimal

**Leave Delay (0ms):**
- Tooltip hides immediately when element is no longer active
- No delay on dismissal
- Quick response to user action

---

## Best Practices

### Content Guidelines

**Do:**
- Keep labels short and simple
- Use for supplementary information only
- Make text scannable and concise
- Provide helpful context
- Use consistent tone and style

**Don't:**
- Don't use for critical information
- Avoid long or complex sentences
- Don't repeat visible text
- Don't use for interactive content
- Don't use as primary labels

### Display Rules

**One at a Time:**
- Show one tooltip at a time
- Avoid multiple tooltips simultaneously
- New tooltip dismisses previous one immediately
- Prevents visual clutter and confusion

**Why:**
- Multiple tooltips are confusing
- Difficult to read multiple overlays
- Unclear which element is being described
- Creates visual chaos

### Accessibility Considerations

**For Disabled Elements:**
- Disabled elements may not receive focus
- Consider alternative ways to explain disabled state
- Use aria-describedby or visible helper text
- Or wrap disabled element in focusable container

**For Critical Information:**
- Don't hide critical information in tooltips
- Use visible labels or helper text instead
- Tooltips are supplementary only
- Not all users will discover tooltips

### Tooltip vs Visible Labels

**Use Tooltips when:**
- Space is extremely limited
- Information is supplementary
- Icon-only design is preferred
- Additional context is helpful but not required

**Use Visible Labels when:**
- Space is available
- Information is important
- Users need to see it without interaction
- Accessibility is a priority

---

## Accessibility

**Requirements:**
- Provide accessible name for trigger element
- Support keyboard focus for showing tooltip
- Ensure tooltip content is announced to screen readers
- Don't rely on tooltip for critical information
- Make trigger element keyboard accessible
- Ensure sufficient color contrast
- Use appropriate ARIA attributes

**ARIA Attributes:**
- `aria-describedby` - Links trigger to tooltip content
- `role="tooltip"` - Identifies tooltip role
- `id` - Unique ID for tooltip element
- `aria-label` or `aria-labelledby` - For trigger element if no visible label

**Keyboard Support:**
- **Focus**: Shows tooltip when trigger receives focus
- **Blur**: Hides tooltip when trigger loses focus
- **Esc**: Can hide tooltip (optional)

**Screen Reader Support:**
- Announce trigger element name
- Announce tooltip content when visible
- Use aria-describedby for proper association
- Don't interrupt with tooltip announcements
- Tooltip text read after trigger element description

**Focus Management:**
- Trigger element must be focusable
- Tab to trigger element shows tooltip (after delay)
- Tab away hides tooltip
- Tooltip itself is not focusable (not interactive)

**Best Practices:**
- Ensure trigger element is keyboard accessible
- Provide visible label or aria-label for trigger
- Use aria-describedby for tooltip content
- Don't put critical info in tooltips only
- Test with keyboard navigation
- Test with screen readers
- Ensure sufficient contrast (text and background)
- Make tooltip content concise for screen reader users

**Color Contrast:**
- Tooltip text and background: minimum 4.5:1 (WCAG AA)
- Ensure tooltip is readable against all backgrounds
- Don't rely on color alone to convey meaning

**Touch Devices:**
- Tooltips may not work well on touch devices
- Consider alternative patterns for mobile
- Long press can trigger tooltip (optional)
- Or use click/tap to show tooltip
- Ensure touch target is at least 44x44px

**Disabled Element Accessibility:**
- Disabled elements may not receive focus
- Tooltip may not appear on disabled elements
- Consider wrapping in focusable container
- Or use visible helper text instead
- Or use aria-describedby on parent container

---

## Tooltip vs Alternatives

### When to Use Each

**Tooltip:**
- Brief, supplementary information
- Icon descriptions
- Hover-triggered help
- Non-critical context
- Space-saving labels

**Popover:**
- More detailed information
- Interactive content
- Click-triggered help
- Persistent until dismissed
- Formatted content

**Helper Text:**
- Always visible
- Critical information
- Form field guidance
- Important context
- No interaction required

**Label:**
- Primary identification
- Always visible
- Essential information
- Main element description
- Required for understanding

---

## Technical Considerations

### Positioning

**Automatic Positioning:**
- Tooltips position themselves automatically based on available space
- Default placement is above the trigger element
- Can appear below, left, or right when needed
- Automatically repositions to stay visible within viewport
- Tip adjusts to indicate direction toward anchor

**Viewport Awareness:**
- Checks available space before positioning
- Prevents overflow outside viewport
- Adjusts placement to remain visible
- Maintains consistent spacing from trigger
- Tip always points toward anchor element

### Performance

**Delay Optimization:**
- 700ms delay prevents excessive tooltip creation
- Only shows tooltip if hover persists
- Quick mouse movements don't trigger tooltips
- Reduces unnecessary rendering

**Single Instance:**
- Only one tooltip visible at a time
- New tooltip dismisses previous immediately
- Prevents multiple tooltip instances
- Reduces DOM overhead

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Tooltip/Tooltip.tsx`
