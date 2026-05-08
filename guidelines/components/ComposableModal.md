# Composable Modal

Composable Modal is a modal container that allows flexible content layouts. It uses the same modal behaviour and accessibility as Dialog, but does not enforce the standard header/content/footer structure.

---

## Usage

**When to use:**

Use Composable Modal for focused tasks that need a custom layout inside a modal. This component provides a blank canvas for complex, custom modal experiences that don't fit the standard Dialog structure.

**Key Use Cases:**

- **Custom layouts**: Complex modal designs requiring flexible structure
- **Unique experiences**: Modal flows that need non-standard arrangements
- **Multi-section content**: Modals with custom regions beyond header/content/footer
- **Rich interactions**: Complex modal experiences with custom component composition
- **Specialized workflows**: Task-specific modal designs

**When NOT to use:**

- **Simple confirmations**: Use Dialog component for standard confirmation messaging
- **Standard forms**: Use Dialog for simple forms with standard "Save/Cancel" flows
- **Minor notifications**: Use Snackbar for brief, non-blocking notifications
- **Standard structure**: If Dialog's header/content/footer works, use Dialog instead

**Commonly used with:**
- Dialog - for standard modal patterns (use that instead when possible)
- Snackbar - for minor notifications
- Button - for confirming and dismissive actions
- Design system components - to build custom layouts within the modal

**Component Comparison:**

| Component | Purpose | Structure | Use Case |
|-----------|---------|-----------|----------|
| **Composable Modal** | Custom layout modals | Flexible, no enforced structure | Complex, custom experiences |
| **Dialog** | Standard modals | Header/Content/Footer enforced | Confirmations, simple forms |
| **Snackbar** | Brief notifications | Fixed format | Minor status updates |

---

## Semantic Purpose

### Composable Modal vs Dialog

**Composable Modal:**
- **Flexibility**: No enforced structure (header/content/footer)
- **Use case**: Custom layouts and complex modal experiences
- **Content**: Completely free-form, build with design system components
- **Responsibility**: Developer must ensure proper hierarchy and accessibility
- **When**: Need layout freedom beyond standard modal structure

**Dialog:**
- **Structure**: Enforced header/content/footer regions
- **Use case**: Standard confirmations, simple forms, typical modal flows
- **Content**: Structured slots with predictable layout
- **Responsibility**: Built-in accessibility and standard patterns
- **When**: Standard modal needs fit the Dialog structure

**Key Distinction:**

Use Composable Modal only when Dialog's structure is too restrictive. For most modal needs, Dialog provides better consistency and built-in accessibility.

---

## Examples

### ✅ Correct Usage

**Do:**
- Use for custom layouts that don't fit Dialog structure
- Provide a clear way to cancel or close the modal
- Have a single primary confirming action
- Structure content with clear hierarchy and reading order
- Add padding to content area (at least 16px / p-4 suggested)
- Use design system components to build the layout
- Ensure accessibility requirements are met
- Provide clear secondary action for dismissing (near primary action or X button in top-right)

**Good Examples:**
- Multi-step wizard with custom navigation
- Complex form with unique layout requirements
- Modal with unconventional content arrangement
- Task-specific modal with specialized components
- Modal with custom header and footer layouts

### ❌ Incorrect Usage

**Don't:**
- Don't hide a clear way to cancel or close the modal
- Don't create multiple competing confirming actions
- Don't use for simple confirmations (use Dialog instead)
- Don't ignore accessibility requirements
- Don't forget to add padding to content area
- Don't create illogical focus order or reading sequence
- Don't omit a meaningful title for screen readers
- Don't make actions unreachable via keyboard

**Common Mistakes:**
- No clear exit path from modal
- Multiple primary actions competing for attention
- Using Composable Modal when Dialog would suffice
- Missing padding in content area
- Poor accessibility implementation
- Unclear hierarchy or reading order
- No keyboard support for dismissal
- Missing focus management

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Content area (required)
```

**Requirements:**
- At minimum: Container + Content area
- No enforced header or footer regions
- Developer must structure content with clear hierarchy and reading order
- Content area is a blank slot for custom layout

### Properties

#### Open
- **Type**: Boolean
- **Required**: Yes
- **Default**: false
- **Description**: Controls whether the modal is visible
- **Behavior**: When true, modal appears with backdrop; when false, modal is hidden

#### OnClose
- **Type**: Function
- **Required**: Yes
- **Description**: Callback function when modal is dismissed
- **Triggers**: Clicking backdrop, pressing Escape, or explicit close action
- **Purpose**: Updates parent state to close modal

#### MaxWidth
- **Type**: Number | String
- **Required**: No
- **Default**: `640px`
- **Description**: Maximum width of modal on larger devices
- **Guidelines**: 640px is recommended maximum for readability and balance

#### AriaLabelledBy
- **Type**: String
- **Required**: Yes
- **Description**: ID of element that labels the modal (typically a heading)
- **Accessibility**: Required for screen reader users to understand modal purpose

#### AriaDescribedBy
- **Type**: String
- **Required**: No
- **Description**: ID of element that describes the modal content
- **Accessibility**: Provides additional context for screen readers

#### InitialFocus
- **Type**: Element reference | String
- **Required**: No
- **Description**: Element to receive focus when modal opens
- **Default**: First focusable element
- **Guidelines**: Set to primary action or first input field as appropriate

#### RestoreFocus
- **Type**: Boolean
- **Required**: No
- **Default**: true
- **Description**: Whether to return focus to trigger element when modal closes
- **Accessibility**: Important for keyboard navigation continuity

### Behavior

**Modal Interaction:**

1. **Opening**
   - Modal appears centered on screen
   - Backdrop overlays page content
   - Focus moves into modal
   - Page content becomes inert (not interactive)
   - Initial focus set to specified element or first focusable element

2. **Inside Modal**
   - Focus trapped within modal
   - Tab/Shift+Tab cycles through focusable elements
   - Escape key dismisses modal (calls onClose)
   - Content scrolls if it exceeds max height

3. **Closing**
   - Modal dismissed via:
     - Confirming action (primary button)
     - Dismissive action (secondary button or X button)
     - Clicking backdrop (scrim)
     - Pressing Escape key
   - Focus returns to trigger element (if RestoreFocus=true)
   - Page content becomes interactive again

**Sizing Behavior:**

*Small Devices (Mobile):*
- Modal expands horizontally with margins from screen edges
- Provides breathing room while maximizing available space
- Content determines height
- If content exceeds max height, overflow scrolling within modal body

*Large Devices (Desktop):*
- Modal can expand freely
- Maximum width: 640px (recommended)
- Centered horizontally on screen
- Content determines height
- If content exceeds viewport height, overflow scrolling within modal body

**Scroll Behavior:**

- Content area scrolls independently if it exceeds max height
- Page content behind modal does not scroll
- Maintain scroll position within modal
- Handle overflow within modal body, not the container

### Layout

**Content Area:**

- **No default padding**: Add padding in your layout
- **Recommended minimum**: 16px (p-4) for primary content
- **Freedom**: Structure content using design system components
- **Responsibility**: Ensure clear hierarchy and reading order

**Suggested Layout Patterns:**

1. **Custom Header + Body + Footer**
   - Header: Title, close button
   - Body: Main content with padding
   - Footer: Actions (confirming/dismissive)

2. **Full-bleed Sections**
   - Sections with varying backgrounds
   - Some sections with padding, some without
   - Clear visual separation

3. **Asymmetric Layouts**
   - Sidebar + main content
   - Split sections
   - Custom grid arrangements

### Confirming and Dismissing

**Confirming Actions:**

- Typically a primary button at the bottom of the modal
- Clear, action-oriented label
- Single primary action (don't create competing actions)
- Prominent placement

**Dismissive Actions:**

Two common patterns:

1. **Footer Action**
   - Secondary button near primary action
   - Label like "Cancel", "Close", or "Dismiss"
   - Placed to left of primary action

2. **Top-right X Button**
   - Icon button in upper right corner
   - Universal close pattern
   - Can be used with or without footer action

**Important:**
- Don't hide a clear way to cancel or close
- Provide at least one obvious dismissal method
- Don't create multiple competing confirming actions

### Accessibility

**Requirements:**

Because layout and function are largely free, accessibility must be explicitly ensured:

1. **Focus Handling**
   - Trap focus within modal when open
   - Set initial focus to appropriate element
   - Return focus to trigger on close
   - Ensure logical tab order

2. **Meaningful Title**
   - Provide aria-labelledby pointing to heading
   - Title must describe modal purpose
   - Required for screen reader users

3. **Logical Focus Order**
   - Tab order follows visual/logical flow
   - No focus traps or dead ends
   - All interactive elements reachable

4. **Keyboard Reachability**
   - All actions accessible via keyboard
   - Escape key dismisses modal
   - Enter may confirm (if appropriate)
   - Tab/Shift+Tab navigates elements

5. **Screen Reader Support**
   - Role="dialog" on container
   - aria-modal="true"
   - aria-labelledby for title
   - aria-describedby for description (if present)

6. **Page Interaction**
   - Page content inert when modal open
   - Backdrop prevents background interaction
   - Clear visual focus indicators

**Best Practices:**
- Test with keyboard navigation only
- Test with screen readers
- Ensure sufficient color contrast
- Provide clear action labels
- Maintain consistent modal patterns across app
- Don't rely on color alone to convey meaning

---

## Customization

### Content Slot

**Freedom:**

As the Composable Modal is essentially an empty container, add your content in the content slot and build the layout using design system components.

**Guidelines:**
- Use design system components for consistency
- Maintain brand patterns and styles
- Structure with clear hierarchy
- Ensure readable typography
- Balance whitespace and content

### Padding

**No Default Padding:**

The content area has no default padding. You must add padding in your layout.

**Recommendations:**
- **Minimum**: 16px (p-4) for primary content
- **Sections**: Vary padding based on content type
- **Full-bleed**: Some sections may have no padding (images, dividers)
- **Consistency**: Maintain predictable spacing patterns

### Custom Layouts

**Build with Design System:**

Use available components to compose custom layouts:
- Buttons for actions
- Typography components for text hierarchy
- Form inputs for user input
- Cards or containers for content sections
- Dividers for visual separation

**Maintain Hierarchy:**
- Clear title/heading
- Organized content sections
- Prominent actions
- Logical reading flow

---

## Reference Implementation

Imported Figma frame available at: `src/imports/ComposableModal-1/ComposableModal.tsx`
