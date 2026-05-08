# Popover

A container that positions itself above other content on the page when triggered. Popovers are non-modal, allowing interaction with the rest of the page while remaining visible. Typically used for contextual help and supplementary information.

---

## Usage

**When to use:**

Use popovers to provide supplementary information that may not be directly available in the main interface. Popovers are typically used for contextual help, but may also support other small pieces of inline information or guidance.

**Key Use Cases:**

- **Contextual help**: In-place guidance when users need extra support to complete a task
- **Supplementary information**: Additional details that enhance understanding without cluttering the interface
- **Inline guidance**: Help text that appears when needed without navigation
- **Explanations**: Clarification of features, terms, or functionality
- **Definitions**: Quick reference information for specific elements

**Principles:**

The Popover follows these key principles:

#### 1. **Non-modal**
- Does not block interaction with the rest of the page
- Users can continue to interact with underlying content
- Less intrusive than modal dialogs

#### 2. **Contextual**
- Appears in relation to the triggering element
- Maintains visual connection to the trigger
- Provides information relevant to the specific context

#### 3. **Supplementary**
- Contains helpful but non-essential information
- Supports the main interface without being critical to it
- Enhances understanding without being required

**Important Guidelines:**

- **Do** use Popovers to provide additional information
- **Don't** hide essential information in a Popover
- Essential information or controls should be part of the main interface

**Alternatives:**

**Popover vs Tooltip:**
- **Tooltip**: Brief text only, appears on hover, auto-dismisses
- **Popover**: More flexible content (text, images, custom), opened with click/tap, user-dismisses

Use tooltips for brief hints, popovers for richer contextual help.

**Commonly used with:**
- Icon buttons - typical trigger element
- Form fields - for contextual help
- Complex interfaces - for explanatory content
- Help icons - standard pattern for accessing help

---

## Semantic Purpose

### Popover vs Tooltip vs Dialog

**Popover:**
- **Trigger**: Click or tap
- **Content**: Flexible (title, text, media, custom)
- **Modal**: Non-modal (page remains interactive)
- **Dismissal**: User action required (click trigger, click outside, ESC)
- **When**: Contextual help and supplementary information

**Tooltip:**
- **Trigger**: Hover
- **Content**: Brief text only
- **Modal**: Non-modal
- **Dismissal**: Automatic on mouse leave
- **When**: Short hints and labels

**Dialog:**
- **Trigger**: User action or system event
- **Content**: Structured (header, content, actions)
- **Modal**: Modal (blocks page interaction)
- **Dismissal**: User must confirm or dismiss
- **When**: Critical decisions requiring full attention

---

## Examples

### ✅ Correct Usage

**Do:**
- Use for contextual help and supplementary information
- Keep content brief and to the point
- Ensure easy dismissal (trigger, click outside, ESC key)
- Maintain visual connection to triggering element
- Use icon buttons as typical triggers
- Prevent multiple popovers from being open simultaneously
- Make sure popover remains fully visible in viewport

**Good Examples:**
- Help icon next to form field that opens popover with detailed instructions
- Information icon that explains a complex feature
- Contextual help for unfamiliar terminology
- Supplementary details about a product feature
- Definition popover for technical terms

### ❌ Incorrect Usage

**Don't:**
- Don't hide essential information in a Popover
- Don't allow multiple popovers to be open at the same time
- Don't fill popover with excessive content
- Don't use for critical information that users must see
- Don't use for primary actions or controls
- Don't let popovers extend outside the viewport

**Common Mistakes:**
- Hiding required information in popovers
- Multiple overlapping popovers creating confusion
- Overly long content that should be on the main page
- Essential controls buried in popover instead of main interface
- Poor positioning that cuts off content
- Unclear dismissal methods

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Title (optional)
C. Message (optional)
D. Content slot (optional)
```

**Default Configuration:**
- Container + Title + Message
- Supports typical contextual help scenarios

**Custom Configuration:**
- Container + Content slot
- Replace default content with custom elements

**Requirements:**
- At minimum: Container with some content
- Typically: Container + Title + Message
- Optional: Content slot for custom content

### Properties

#### Title
- **Type**: String
- **Required**: No (but recommended for default configuration)
- **Description**: Header text defining the context
- **Guidelines**: Keep concise, clearly identify the topic

#### Message
- **Type**: String
- **Required**: No (but recommended for default configuration)
- **Description**: Main text content conveying the information
- **Guidelines**: Be brief and to the point, avoid excessive content

#### ContentSlot
- **Type**: Custom content area
- **Required**: No
- **Description**: Flexible area for custom content
- **Use cases**:
  - Add media (images)
  - Add interactive elements
  - Replace default title/message entirely
  - Custom layouts for specific needs
- **Guidelines**: Use purposefully, maintain clarity

#### Trigger
- **Type**: UI element (typically icon button)
- **Required**: Yes (implicit - needed to open popover)
- **Description**: Element that opens the popover
- **Typical**: Icon button with help or info icon
- **Other options**: Can be other UI elements depending on context

#### Placement
- **Type**: Auto-calculated
- **Description**: Position relative to trigger
- **Default**: 4px below trigger, horizontally centered
- **Behavior**: Shifts to remain fully visible in viewport
- **Vertical**: Below trigger (default), shifts above if no space below
- **Horizontal**: Centered on trigger, shifts to remain in viewport

#### Width
- **Type**: Responsive
- **Default**: 80% of available horizontal content section
- **Minimum**: 240px
- **Maximum**: 400px
- **Description**: Horizontal sizing to avoid blending with underlying content
- **Height**: Expands vertically to support content

#### OnDismiss
- **Type**: Function
- **Required**: Yes (for controlled component)
- **Description**: Callback when popover is dismissed
- **Triggers**: Click trigger, click outside, confirm action, ESC key

### States

#### **Closed (Default)**
- Popover not visible
- Trigger visible and interactive
- Ready to be opened

#### **Open**
- Popover visible above content
- Positioned relative to trigger
- Maintains visual connection to trigger
- Page remains interactive (non-modal)

### Behavior

**Opening:**
1. User interacts with trigger (typically click/tap icon button)
2. Popover appears positioned relative to trigger
3. Default: 4px below trigger, horizontally centered
4. Shifts position if needed to remain fully visible in viewport

**Positioning Logic:**

*Vertical:*
- Attempts to position 4px below trigger
- If insufficient space below, shifts to position above
- Maintains 4px gap from trigger

*Horizontal:*
- Attempts to center on trigger
- Shifts to remain within viewport bounds
- Example: If trigger is on left edge, popover shifts right to stay fully visible

**Sizing:**
- Width: 80% of available horizontal content section
- Constrained by minimum (240px) and maximum (400px)
- Height: Expands to fit content

**Dismissal:**

Popovers should be dismissable by:
1. Interacting with the triggering UI element
2. Interacting with another part of the page (click outside)
3. Performing a confirming action within the Popover (if applicable)
4. Pressing the ESC key on keyboard (on applicable devices)

**Multiple Popovers:**
- Avoid allowing multiple popovers to be open at the same time
- When a new popover is triggered, close any previously opened popovers
- Prevents confusion and visual clutter

---

## Customization

### Text Content

**Default Configuration:**
The default setup features a title and message text.

**Title:**
- Defines the context
- Keep concise
- Clearly identify the topic

**Message:**
- Conveys the information
- Be brief and to the point
- Avoid excessive content
- Keep focused on the specific help needed

**Best Practices:**
- Don't fill popover with excessive content
- Keep information scannable
- Focus on specific, actionable guidance

### Content Slot

**Purpose:**
The content slot can be used to add additional content or replace the default content completely.

**Use Cases:**

*Adding to Default:*
- Include media like images
- Add visual examples
- Enhance text with graphics

*Replacing Default:*
- Custom layouts for specific needs
- Interactive elements
- Product-specific content formats

**Guidelines:**
- Use purposefully
- Maintain clarity and simplicity
- Don't overcomplicate the popover
- Keep content relevant to the trigger context

### Trigger Element

**Typical Trigger:**
In most situations, the trigger for the Popover is an Icon button.

**Common Icons:**
- Help icon (?) - for general help
- Info icon (i) - for information
- Question mark - for clarification

**Alternative Triggers:**
Other UI elements may be appropriate depending on context:
- Text links
- Buttons
- Form field labels
- Interactive elements

**Guidelines:**
- Make trigger clearly identifiable
- Use consistent trigger patterns
- Ensure trigger is accessible

---

## Accessibility

**Requirements:**
- Popover must be dismissable via keyboard (ESC key)
- Support keyboard navigation to trigger
- Provide appropriate ARIA attributes
- Ensure sufficient color contrast
- Make relationship between trigger and popover clear
- Support screen reader announcements

**Keyboard Navigation:**
- **Tab**: Navigate to trigger element
- **Enter/Space**: Open popover from trigger
- **ESC**: Close popover
- **Tab (when open)**: Navigate within popover content (if interactive)
- **Shift+Tab**: Navigate backward

**ARIA Attributes:**
- Use `aria-describedby` or `aria-controls` to link trigger to popover
- Set `aria-expanded` on trigger (true when open, false when closed)
- Use `role="tooltip"` or `role="dialog"` depending on content complexity
- Provide `aria-label` if trigger has no visible label

**Screen Reader Support:**
- Announce when popover opens
- Announce popover content
- Indicate relationship to trigger
- Announce when popover closes
- Provide clear labels for all interactive elements

**Focus Management:**
- Focus can remain on trigger for simple popovers
- Move focus to popover if it contains interactive elements
- Return focus to trigger on dismissal
- Maintain logical focus order

**Best Practices:**
- Make trigger at least 40px for touch targets
- Provide visible focus indicators
- Ensure text has sufficient contrast
- Test with keyboard only
- Test with screen readers
- Don't trap focus if popover is non-modal
- Make dismissal methods clear and easy

**Non-Modal Behavior:**
- Popover is non-modal (page remains interactive)
- Don't trap focus in popover
- Allow interaction with page while open
- Ensure clear visual distinction from page content

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Popover/Popover.tsx`
