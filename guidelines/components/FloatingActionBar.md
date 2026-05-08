# Floating Action Bar

A "Floating Action Bar" (FAB) is a floating toolbar designed to support the user's main end action. It typically appears anchored near the bottom of the screen and provides quick access to confirm or continue, often summarizing selections or totals.

---

## Usage

**When to use:**

A Floating Action Bar supports key end actions without interrupting the user flow. It stays anchored while allowing interaction with the rest of the page, and should be used to surface high-priority choices or summaries.

Use a floating action bar when users need to confirm or complete a key action without interrupting the rest of the interface. It's best suited for flows like placing a bet or adding items to a cart.

**Key Use Cases:**

- **Purchase flows**: Confirming purchases, placing bets, completing orders
- **Shopping carts**: Adding items, viewing cart summary, proceeding to checkout
- **Multi-step flows**: Continuing to next step while showing progress or summary
- **Selection confirmation**: Confirming multiple selected items
- **Pooled selections**: Summarizing and confirming grouped choices
- **End actions**: Key actions that complete a user flow

**Principles:**

The Floating Action Bar is guided by three core principles:

#### 1. **Anchored**
- Always stays visible when user needs to make final choice or review key information
- Remains accessible throughout scroll
- Fixed position near bottom of screen
- Doesn't disappear as user interacts with page

#### 2. **Non-blocking**
- Supports actions without interrupting user's flow
- Doesn't hide the rest of the interface
- Allows continued interaction with page content
- Less intrusive than modal dialogs

#### 3. **Primary Action**
- Drives users to a primary action (e.g., confirm, buy, continue)
- Clear, focused call-to-action
- High visual prominence
- Single most important action for the flow

**Commonly used with:**
- Bottom sheets - for displaying summaries or purchase flows
- Side sheets - for extended interactions on large screens
- Buttons - for primary and supportive actions
- Badges - for cart item counts or status indicators
- Progress indicators - for threshold-based actions

---

## Semantic Purpose

### FAB vs Modal vs Bottom Sheet

**Floating Action Bar:**
- **Anchored**: Stays visible, floats above content
- **Non-blocking**: Page remains interactive
- **Purpose**: Support end action with persistent access
- **When**: Need constant access to key action during flow

**Modal (Dialog):**
- **Centered**: Overlays center of screen
- **Blocking**: Disables page interaction
- **Purpose**: Critical decisions requiring full attention
- **When**: Need to interrupt flow for important decision

**Bottom Sheet:**
- **From bottom**: Slides up from bottom edge
- **Semi-blocking**: Can be dismissible, may allow background interaction
- **Purpose**: Contextual content or actions
- **When**: Need to show additional content without navigating away

### Composable Structure

The FAB is composable – the only required element is a primary action; all other content is optional and based on product needs.

---

## Examples

### ✅ Correct Usage

**Do:**
- Balance primary and supportive content
- Keep the intention clear and concise
- Use a clear hierarchy of actions and elements to guide the user effectively
- Make supportive elements reinforce — not compete with — the main action
- Adapt contrast based on background (vibrant/light combinations)
- Use for persistent access to key end actions
- Summarize selections or totals in content slot
- Maintain logical tab order for accessibility
- Verify contrast ratios for accessibility

**Good Examples:**
- Shopping cart with item count badge and "Checkout" button
- Bet slip with selection summary and "Place bet" button
- Multi-step form with progress and "Continue" button
- Product selection with total price and "Buy now" button
- FAB with light styling on vibrant background for contrast

### ❌ Incorrect Usage

**Don't:**
- Don't make the FAB too complex
- Don't use too many calls to action
- Don't let multiple CTAs reduce clarity and create friction
- Don't surround the CTA with elements that steal attention or disrupt hierarchy
- Don't exceed 50% width on large screens (unless required by complex use case)
- Don't forget to verify contrast for accessibility
- Don't use when action doesn't need persistent visibility

**Common Mistakes:**
- Too many competing actions in the FAB
- Cluttered content slot distracting from primary action
- Unclear visual hierarchy between primary and supportive actions
- Poor contrast between FAB and background
- Overly wide FAB on desktop (>50% without justification)
- Missing accessibility considerations (keyboard access, contrast)

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Supportive action (optional)
C. Content slot (optional)
D. Primary action (required)
```

**Requirements:**
- At minimum: Container + Primary action
- Optional: Supportive action, Content slot
- Flexible composition based on product needs

### Properties

#### PrimaryAction
- **Type**: Button component
- **Required**: Yes
- **Description**: The main call-to-action
- **Guidelines**: Clear, action-oriented label (e.g., "Place bet", "Checkout", "Continue")
- **Width**: 
  - Mobile: 160px fixed width
  - Desktop: 240px fixed width
  - Accommodates longer labels like specific sum amounts

#### SupportiveAction
- **Type**: Button component
- **Required**: No
- **Description**: Secondary action that supports the primary action
- **When to use**: Shorter flows where secondary action is helpful (e.g., "View cart", "Review")
- **Guidelines**: Should reinforce, not compete with, main action
- **Can include**: Badge for item counts or status

#### ContentSlot
- **Type**: Custom content area
- **Required**: No
- **Description**: Flexible area for contextual information
- **Use cases**:
  - Summary information (totals, selections)
  - Progress indicators
  - Product-specific content
  - Status information
- **Guidelines**: Use purposefully, not as space for anything; maintain clear hierarchy

#### Alignment
- **Type**: Enum
- **Required**: No
- **Default**: `right`
- **Options**:
  - `right`: Default alignment (most common)
  - `center`: Centered alignment
  - `left`: Left alignment
- **Description**: Horizontal alignment of FAB
- **Guidelines**: Realign when it better supports product's layout, UI structure, or flow

#### Width
- **Type**: Enum | Number
- **Required**: No
- **Default**: `full` (mobile), `50%` (desktop)
- **Options**:
  - `full`: Full width (mobile default)
  - `50%`: Half width (desktop default, Large-2XL breakpoint)
  - Custom: Specific width (use sparingly)
- **Guidelines**: On large screens, width should not exceed 50% unless required by complex use cases

#### Variant
- **Type**: Enum
- **Required**: Yes
- **Default**: Auto-determined by background
- **Options**:
  - `vibrant`: Vibrant FAB on light background
  - `light`: Light FAB on vibrant background or light background (when less attention needed)
- **Description**: Visual style adapting to background contrast
- **Contrast behavior**:
  - Vibrant background → Light FAB
  - Light background → Vibrant FAB (default)
  - Light background → Light FAB (when less visual attention needed)
- **Accessibility**: Always verify contrast ratios

#### ShowProgress
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to show progress indicator
- **When to use**: When certain amount needs to be reached before action can be done

### FAB Types

The component supports multiple configurations:

#### 1. **Primary Action Only**
- Minimal configuration
- Just container + primary action button
- Simplest form
- Direct call-to-action

#### 2. **With Supportive Action**
- Container + supportive action + primary action
- Used for shorter flows where secondary action is helpful
- Great for reviewing and confirming selections
- Example: "View cart" (supportive) + "Checkout" (primary)

#### 3. **With Content Slot and Primary Action**
- Container + content slot + primary action
- Adds contextual information while maintaining single, focused action
- Useful for informed decisions
- Example: Total price in content slot + "Buy now" button

#### 4. **With Supportive Action, Content Slot, and Primary Action**
- Full configuration
- Container + supportive action + content slot + primary action
- Used when summary action is needed (carts, pooled selections)
- Space for additional, product-specific content in content slot
- Example: Cart count badge + total price + "Checkout"

#### 5. **Status, In Progress**
- Includes progress indicator
- Shows progress toward threshold
- When certain amount needs to be reached before action can proceed
- Example: "Add 50 kr more for free shipping"

### Behavior

**Positioning:**
- Anchored near bottom of screen
- Floats above page content
- Remains visible during scroll
- Does not block page interaction

**Interaction:**
- Primary action: Main flow continuation (opens bottom sheet, proceeds to checkout, etc.)
- Supportive action: Secondary function (view cart summary, review selections, etc.)
- Content slot: Non-interactive summary/information (or contains interactive elements like toggles)

**Responsive Behavior:**

*Mobile:*
- Full width by default
- Compact padding
- Vertical stacking of elements
- Primary action: 160px fixed width
- Typically triggers bottom sheet

*Desktop (Large screens):*
- Maximum 50% width (default)
- More spacious padding for visual balance
- Horizontal layout of content
- Primary action: 240px fixed width
- May trigger side sheet for extended interactions
- Breakpoint: Large-2XL for 50% width layout

**Contrast Adaptation:**

To maintain clarity and strong visual hierarchy, the FAB adapts its style based on the background:

1. **Vibrant background → Light FAB**: Use light FAB on vibrant or colored surfaces to ensure contrast and visibility
2. **Light background → Vibrant FAB**: On light or neutral backgrounds, vibrant FAB stands out as clear primary action surface
3. **Light background → Light FAB**: In some cases, light FAB may be preferred when less visual attention is needed; always verify contrast ratios for accessibility

This contrast-driven logic ensures the FAB remains noticeable without overwhelming the surrounding interface.

### Content Slot Guidelines

**How to use the content slot:**

The content slot is designed to meet the specific needs of your product — but that doesn't mean it's a space for anything. Use it purposefully and in line with the component's intended structure and behavior.

**Appropriate uses:**
- Summary information (totals, item counts, selections)
- Progress indicators toward goals
- Key contextual data supporting the action
- Product-specific status information

**Best practices:**
- Keep content concise and scannable
- Support the primary action, don't distract from it
- Maintain clear visual hierarchy
- Use consistent formatting
- Consider mobile constraints

**Button sizing in content slot:**
- Button can be set to "fill container" or "hug content"
- Adapt based on layout needs

### Sizing

**Padding:**
- Adapted across screen sizes
- More compact on smaller devices
- More spacious on larger screens
- Supports clarity and visual balance

**Primary Action Width:**
- **Mobile**: 160px fixed width
- **Desktop**: 240px fixed width
- Fixed width accommodates longer labels (e.g., specific sum amounts)

**Overall Width:**
- **Mobile**: Full width (edge to edge with margins)
- **Desktop**: Up to 50% width maximum (default)
- **Complex cases**: May exceed 50% if required, but use sparingly

---

## Customization

### Best Practices

#### Balance and Hierarchy

**Do:**
- Balance primary and supportive content
- Keep the intention clear and concise
- Use clear hierarchy of actions and elements
- Guide the user effectively
- Make supportive elements reinforce main action

**Don't:**
- Make the FAB too complex
- Include too many calls to action
- Let multiple CTAs reduce clarity
- Surround CTA with elements that steal attention
- Disrupt hierarchy with competing elements

### Alignment Options

**Right (Default):**
- Most common alignment
- Familiar pattern for users
- Works well for most flows

**Center:**
- Use when better supports product's layout
- Centered focus on action
- May work better for symmetrical designs

**Left:**
- Alternative alignment option
- Use when UI structure or flow benefits
- Less common, use purposefully

### Badge Usage

**Supportive Action Badge:**
- Shows total item count in cart
- Displays status information
- Provides at-a-glance context
- Small, non-intrusive indicator

---

## Interaction Examples

### FAB with Cart Features

**Flow:**
1. **Supportive action**: Tapping opens bottom sheet with summary of selected items for review
2. **Primary action**: Tapping opens purchase flow in bottom sheet, allowing user to complete transaction seamlessly

**Elements:**
- Supportive action may include badge showing item count
- Content slot may show total price
- Primary action: "Checkout" or "Place order"

### Sports Game Product Example

**Flow:**
1. **Supportive action**: Opens bottom sheet with summary of selected rows for review
2. **Primary action**: User proceeds to purchase flow, which triggers bottom sheet for focused, uninterrupted experience

**Elements:**
- Summary of selections in content slot
- Clear primary action to proceed
- Non-blocking interaction with main page

### Large Screen Interactions

**Desktop Behavior:**
- FAB content laid out horizontally to optimize space and maintain clarity
- Actions may trigger side sheet instead of bottom sheet
- Side sheet supports extended interactions without disrupting layout
- Maximum 50% width maintains focus and avoids visual crowding

---

## Accessibility

**Requirements:**
- FAB should be reachable via keyboard
- Maintain logical tab order
- All content inside FAB must meet WCAG AA contrast guidelines
- Ensure sufficient color contrast for all states
- Support keyboard navigation for all interactive elements
- Provide clear focus indicators
- Use semantic HTML for actions

**Keyboard Navigation:**
- **Tab**: Navigate to FAB actions
- **Enter/Space**: Activate focused action
- **Shift+Tab**: Navigate backward
- All interactive elements must be keyboard accessible

**Contrast Guidelines:**
- Verify contrast ratios for all variants
- Test against various backgrounds
- Ensure text readability
- Check interactive element contrast
- Meet WCAG AA standards minimum

**Screen Reader Support:**
- Announce primary action clearly
- Identify supportive actions
- Describe content slot information if relevant
- Provide context for badges and counts

**Best Practices:**
- Make touch targets at least 40px
- Provide visible focus indicators
- Ensure logical tab order (supportive action → content → primary action)
- Test with keyboard only
- Test with screen readers
- Verify contrast in both light and vibrant variants

---

## Reference Implementation

Imported Figma frame available at: `src/imports/FloatingActionBar/FloatingActionBar.tsx`
