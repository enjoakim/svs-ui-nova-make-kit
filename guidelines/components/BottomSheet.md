# Bottom Sheet

The primary purpose of bottom sheets is to offer complementary content and functionality to what the webpage offers, supporting the service in offering a seamless, ergonomic experience.

---

## Usage

**When to use:**

Bottom sheets are anchored to the bottom of the viewport and are most often used on mobile interfaces. They display supporting content that complements the screen's primary content.

**Key Characteristics:**
- **Complementary**: Provides additional content/functionality without replacing primary UI
- **Mobile-first**: Primarily designed for mobile devices and tablets
- **Flexible**: Can contain various content types and layouts
- **Contextual**: Appears when needed to support user tasks

**Commonly used with:**
- Mobile applications - for filters, settings, actions
- Forms - for additional options or multi-step flows
- Content views - for details, previews, or related information
- Actions - for confirmations, choices, or supplementary controls
- Navigation - for menus or secondary navigation options

---

## Semantic Purpose

### Bottom Sheet Types

There are two main types of bottom sheets, each serving a distinct interaction pattern:

#### 1. **Non-Modal (Standard)**
- **Purpose**: Co-exists with the main UI
- **Behavior**: Allows simultaneous viewing and interaction with both the sheet and main content
- **When to use**: When main UI needs to remain accessible (frequently scrolled or panned content)
- **User can**: Interact with both sheet and main content
- **Dismissal**: Swipe down, click header to collapse, or use close action

#### 2. **Modal**
- **Purpose**: Focuses attention on sheet content
- **Behavior**: Appears in front of app content, disabling all other functionality
- **When to use**: When action must be confirmed, dismissed, or completed before proceeding
- **User can**: Only interact with the sheet (main content disabled via scrim)
- **Dismissal**: Required action, explicit dismiss, or click scrim
- **Visual**: Includes scrim overlay on main content

---

## Examples

### ✅ Correct Usage

**Do:**
- Use bottom sheets to display complementary content
- Choose non-modal for frequently accessed supporting content
- Choose modal when user must complete or dismiss an action
- Set appropriate height (Auto, Half, Full) based on content needs
- Provide drag handle for expandable sheets
- Use scrim overlay for modal sheets
- Allow content to scroll if it exceeds container
- Set max-width for inner content on large screens
- Consider switching to side sheet on desktop
- Place sheets at viewport bottom on mobile

**Good Examples:**
- Filter panel that updates main content as filters change (non-modal)
- Confirmation dialog requiring user action (modal)
- Multi-step form in a bottom sheet
- Detail view for selected item from a list
- Settings panel with toggles and options

### ❌ Incorrect Usage

**Don't:**
- Don't show dialogs on top of bottom sheets
- Don't stack bottom sheets on top of each other
- Don't set inner content to full width on large screens
- Don't use for content that should be in main UI
- Don't hide critical primary actions in a bottom sheet
- Don't create confusing hierarchy with overlapping components

**Common Mistakes:**
- Stacking multiple bottom sheets
- Showing dialog overlays on top of sheets
- Full-width content on desktop (breaks accessibility)
- Using bottom sheets for primary navigation
- Missing scrim on modal sheets
- Not providing clear dismissal methods

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Header (required)
C. Content area (required)
D. Footer (optional)
E. Drag handle (required for expandable sheets)
F. Back action (optional)
G. Title (required)
H. Close action (modal only)
I. Supportive text (optional)
J. Primary action (optional)
K. Dismissive action (optional)
L. Scrim (modal only)
```

### Properties

#### Type
- **Type**: Enum
- **Required**: Yes
- **Options**:
  - `non-modal`: Standard sheet, allows main UI interaction
  - `modal`: Blocks main UI interaction, requires action
- **Description**: Determines whether main content remains interactive

#### Height
- **Type**: Enum
- **Required**: Yes
- **Default**: `auto`
- **Options**:
  - `auto`: Grows to fit content up to full height
  - `half`: Uses 50% of parent container
  - `full`: Uses 100%* of parent container (*Always leaves minimum 32px to top)
- **Description**: Controls the vertical size of the sheet

#### Resizable
- **Type**: Boolean
- **Required**: No
- **Default**: true
- **Description**: Whether the sheet can be expanded/collapsed via drag or header click

#### InitialState
- **Type**: Enum
- **Required**: No
- **Default**: `collapsed`
- **Options**:
  - `collapsed`: Minimal height showing header
  - `half-expanded`: 50% of viewport (for two-step expansion)
  - `fully-expanded`: Maximum height based on height property
- **Description**: The initial display state when sheet appears

#### HasFooter
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to include a footer with actions

#### HasBackAction
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to show back button in header

#### HasCloseAction
- **Type**: Boolean
- **Required**: No (Yes for modal)
- **Default**: false (true for modal)
- **Description**: Whether to show close button in header

#### Title
- **Type**: String
- **Required**: Yes
- **Description**: The header title text

#### Description
- **Type**: String
- **Required**: No
- **Description**: Optional supportive text below title

#### OnDismiss
- **Type**: Function
- **Required**: Yes (for modal)
- **Description**: Callback when sheet is dismissed

#### OnBack
- **Type**: Function
- **Required**: No
- **Description**: Callback for back action

### Behavior

**Height Modes:**

1. **Auto (Default)**
   - Sheet grows to fit content up to full height
   - Content exceeding space continues under container and footer
   - Most flexible for varying content sizes

2. **Half**
   - Uses 50% of parent container
   - Content exceeding space becomes scrollable
   - Overflows under footer if present
   - Good for two-step expansion pattern

3. **Full**
   - Uses 100% of parent container minus 32px minimum top margin
   - Content exceeding space becomes scrollable
   - Maximum screen utilization

**Content & Scroll:**
- Content that doesn't fit flows under container/footer or over sides
- Vertical and horizontal scroll available when needed
- Scrolling content respects sheet expansion/collapse gestures

### Control Methods

**Collapsed Sheet:**
- **A.** Swipe up to expand (if resizable)
- **B.** Press header to expand (if resizable)
- **C.** Click back action to return to previous stage
- **D.** Click an action to advance

**Fully Expanded Sheet:**
- **A.** Swipe sheet down to collapse
- **B.** Click header to collapse
- **C.** If content overflows, swipe scrolls content; reaching top allows continued swipe to collapse
- **D.** Click back action to return to previous step
- **E.** Click an action to advance
- **F.** Click scrim to collapse (modal only)

**Two-Step Expansion (Half Mode):**

*Sheet at 50%:*
1. Swipe up to expand or down to collapse
2. Click header to expand to fully expanded state
3. If content overflows, swipe scrolls; at content end, continue swipe to expand/collapse
4. Click back action to return to previous step
5. Click action to advance
6. Click scrim to collapse (modal)

*Sheet at 100%:*
1. Swipe down to return to 50% or collapse
2. Click header to return to 50%
3. If content overflows, swipe scrolls; at top, continue swipe to collapse
4. Click back action to return to previous step
5. Click action to advance
6. Click scrim to collapse (modal)

**Desktop (Mouse/Trackpad):**
- **A.** Click container to expand
- **B.** Click and drag to expand
- **C.** Click to return to previous step
- **D.** Click an action to advance

### Placement

**Mobile & Tablet:**
- Anchored to bottom of viewport
- Extends across full width of screen
- Elevated above primary content
- Slides up from bottom

**Desktop/Large Screens:**
- Three adaptation strategies:
  1. **Max-width content**: Set maximum width for inner content to maintain balance and accessibility
  2. **Floating sheet**: Convert to centered overlay/modal dialog
  3. **Side sheet**: Switch to side panel to reduce space on larger screens

### Responsive Layout

**Scaling Guidelines:**

✅ **Do:**
- Set maximum width of inner content on large screens for balance and accessibility
- Consider switching to floating sheet/overlay modal on desktop
- Swap for side sheet on larger screens to show supporting content

❌ **Don't:**
- Don't set inner content to full width on large screens (breaks accessibility)

**Adaptation Options:**
1. **Maximum Width**: Constrain content width while sheet spans full width
2. **Floating Sheet**: Convert to centered modal dialog
3. **Side Sheet**: Switch to vertical side panel for larger screens

---

## Customization

### Content Freedom

**Flexibility:**
- No specific rules for content types or layouts
- Can contain various content: forms, lists, images, actions, settings
- Content should complement main webpage UI
- Maintain clear hierarchy and purpose

**Guidelines:**
- Keep content complementary to main UI
- Don't replace primary content with sheet content
- Ensure content fits the ergonomic purpose of bottom sheets
- Support seamless user experience

### Footer Actions

**Optional Footer:**
- **Primary action**: Main call-to-action button
- **Dismissive action**: Cancel or close button (optional)
- Stack buttons vertically in footer
- Footer remains visible when content scrolls

### Header Options

**Required:**
- Title (always present)
- Drag handle (for resizable sheets)

**Optional:**
- Back action (navigation to previous state)
- Close action (explicit dismissal - required for modal)
- Supportive text (description below title)

---

## Accessibility

**Interaction Considerations:**
- Provide clear dismissal methods
- Ensure drag handle is recognizable and accessible
- Include keyboard support for all interactions
- Use appropriate ARIA labels for actions
- Ensure scrim overlay is properly labeled (modal)
- Maintain focus management when sheet opens/closes
- Support screen reader announcements for state changes

**Visual Hierarchy:**
- Avoid stacking components on bottom sheets
- Don't show dialogs over bottom sheets
- Maintain clear z-index hierarchy
- Use scrim to indicate modal state

---

## Reference Implementation

Imported Figma frame available at: `src/imports/BottomSheet/BottomSheet.tsx`
