# Tabs

A control for switching between different views or content panels within a section. Tabs organize related content in a single container, allowing users to navigate between views without leaving the page.

---

## Usage

**When to use:**

Use Tabs to allow the user to switch content within a section. Tabs are used to switch content within a section.

**Key Use Cases:**

- **Content organization**: Organizing related content in a single view
- **Section switching**: Switching between different views of the same data
- **Settings panels**: Grouping related settings
- **Dashboard views**: Different perspectives on the same context
- **Feature sets**: Related features in grouped panels
- **Data views**: Different visualizations of the same data

**Important Distinctions:**

**Tabs (Content switching):**
- Use for switching content within a section
- Content changes, context remains the same
- No page navigation
- Hierarchically lower level organization

**Tabs Menu (Navigation):**
- For navigation patterns
- Navigates between different pages
- Changes URL/route
- Higher level navigation
- Don't use Tabs component for this purpose

**Toggle Group (Form settings):**
- For selecting options within form settings
- Changes configuration values
- Don't use Tabs component for this purpose

**Commonly used with:**
- Tabs menu - at hierarchically higher level for page navigation
- Content panels - the content each tab displays
- Cards - for organizing content within tabs
- Forms - for grouping related form sections

---

## Semantic Purpose

### Tabs vs Tabs Menu vs Toggle Group vs Accordion

**Tabs (Content):**
- **Purpose**: Switch content within a section
- **Navigation**: No page/URL change
- **Context**: Same context, different views
- **Level**: Lower hierarchy
- **When**: Organize related content in single view

**Tabs Menu (Navigation):**
- **Purpose**: Navigate between pages
- **Navigation**: Changes URL/route
- **Context**: Different pages/sections
- **Level**: Higher hierarchy
- **When**: Main navigation patterns

**Toggle Group:**
- **Purpose**: Select options in forms
- **Navigation**: No navigation
- **Context**: Configuration/settings
- **Level**: Form control
- **When**: Form setting selections

**Accordion:**
- **Purpose**: Progressive disclosure
- **Navigation**: Expand/collapse sections
- **Context**: Vertical stacking
- **Level**: Content organization
- **When**: Long content that needs collapsing

---

## Examples

### ✅ Correct Usage

**Do:**
- Use tabs for switching within a section
- Label tabs to clearly indicate what the associated content contains
- Keep tab labels clear and concise
- Use when content is related but distinct
- Maintain consistent content structure across tabs
- Use stretched labels when appropriate for layout

**Good Examples:**
- Account settings with tabs: "Profile", "Security", "Notifications"
- Product details with: "Overview", "Specifications", "Reviews"
- Dashboard with: "Summary", "Analytics", "Reports"
- User profile with: "Posts", "About", "Photos"
- Game history with: "Recent", "Favorites", "All"

### ❌ Incorrect Usage

**Don't:**
- Don't use the tabs component for navigation patterns where an item link navigates to a separate destination
- Don't use the tabs component for changing configurations in a form setting
- Don't label tabs in an unclear manner
- Don't use too many tabs (5-7 maximum recommended)
- Don't use for unrelated content
- Don't hide critical content in non-default tabs

**Common Mistakes:**
- Using Tabs for main navigation (use Tabs Menu instead)
- Using Tabs for form options (use Toggle Group or Radio instead)
- Unclear or ambiguous tab labels
- Too many tabs causing horizontal overflow
- Inconsistent content structure between tabs
- Critical information only in non-primary tab

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Text label (required for each tab)
C. Selected label (visual state)
D. Default label (visual state)
E. Close button (optional)
```

**Requirements:**
- At minimum: Container + Multiple text labels (2+ tabs)
- Optional: Close button for closable tabs

### Properties

#### Tabs
- **Type**: Array of tab objects
- **Required**: Yes
- **Description**: List of tabs to display
- **Properties per tab**:
  - `key`: Unique identifier
  - `label`: Text label for the tab
  - `content`: Content to display when tab is selected
  - `closable`: Whether tab can be closed (optional)
  - `disabled`: Whether tab is disabled (optional)

#### Value
- **Type**: String
- **Required**: No (Yes for controlled component)
- **Description**: Currently selected tab key
- **Controlled**: Use with onChange for controlled component

#### DefaultValue
- **Type**: String
- **Required**: No
- **Description**: Initially selected tab for uncontrolled component

#### StretchedLabels
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether labels extend to fill available horizontal space
- **Options**:
  - `false` (default): Width determined by text content length
  - `true`: Labels extend to fill available space

#### Closable
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether tabs can be closed
- **When true**: Close button (icon button) added to right edge of label
- **Note**: In stretched label variant, label text is adjusted to left

#### OnChange
- **Type**: Function
- **Required**: Yes (for controlled component)
- **Description**: Callback when selected tab changes
- **Parameters**: New tab key

#### OnClose
- **Type**: Function
- **Required**: No (Yes if closable=true)
- **Description**: Callback when tab close button is clicked
- **Parameters**: Tab key being closed

#### Variant
- **Type**: Enum
- **Required**: No
- **Default**: `default`
- **Description**: Visual style variant
- **Note**: May support different visual treatments

### States

#### **Selected**
- Tab is currently active
- Content panel is visible
- Distinct background and text color
- Indicates current view
- One tab selected at a time

#### **Default (Unselected)**
- Tab is not currently active
- Content panel is hidden
- Standard appearance
- Can be clicked to select

#### **Hover**
- Mouse over unselected tab
- Visual feedback indicates interactivity
- Background and text may change color
- Prepares user for click

#### **Pressed (Active)**
- Tab is being clicked
- Active state visual feedback
- Background and text change color
- Indicates click action

#### **Disabled** (optional)
- Tab cannot be selected
- Reduced opacity
- No hover or click interaction
- Use sparingly

### Behavior

**Tab Selection:**

1. **Initial State**
   - One tab is selected (default or specified)
   - Corresponding content panel is visible
   - Other tabs are unselected

2. **User Clicks Tab**
   - Previous tab becomes unselected
   - Clicked tab becomes selected
   - Previous content hides
   - New content displays
   - onChange callback fires

3. **Content Switching**
   - Smooth transition between content
   - No page reload
   - Context maintained
   - URL may update (optional, for deep linking)

**Closable Tabs:**

1. **Close Button**
   - Icon button on right edge of tab
   - Separate from tab selection area
   - Visible on hover or always

2. **Closing Tab**
   - Click close button
   - onClose callback fires
   - Tab removed from list
   - If selected tab closed, select adjacent tab
   - Associated content removed

**Label Width:**

**Default:**
- Width determined by text content length
- Labels hug their content
- Variable width per tab
- More compact

**Stretched:**
- Labels extend to fill available horizontal space
- Equal width distribution (typically)
- Fills container width
- More balanced appearance

---

## Customization

### Label Text

**Guidelines:**
- Label tabs to clearly indicate what the associated content contains
- Text labels should be clear and concise
- Properly guide user to desired content
- Don't label tabs in an unclear manner

**Best Practices:**
- Keep labels short (1-2 words preferred)
- Use parallel structure (all nouns or all verbs)
- Make labels scannable
- Use title case
- Be specific and descriptive

**Examples:**
- Good: "Overview", "Details", "Reviews"
- Bad: "Tab 1", "Tab 2", "Tab 3"
- Good: "Profile Settings", "Privacy", "Notifications"
- Bad: "Settings", "Other Settings", "More"

### Stretched Labels

**When to Use:**

**Default (Hug Content):**
- Variable label lengths
- Compact horizontal space
- Many tabs
- Content-driven width

**Stretched (Fill Space):**
- Consistent label lengths
- Fixed container width
- Few tabs (2-4)
- Balanced appearance desired
- Equal visual weight needed

**Visual Impact:**
- Default: More compact, variable spacing
- Stretched: Balanced, equal distribution

### Closable Labels

**Configuration:**
- Tabs can be closable
- Typically along with associated content
- Close button (icon button) added to right edge
- In stretched variant, label text adjusted to left

**When to Use:**
- Dynamic tabs (user-created)
- Temporary views
- Multi-document interface
- User can remove unwanted tabs

**Behavior:**
- Click close button to remove tab
- If selected tab closed, auto-select adjacent
- onClose callback handles cleanup

**Examples:**
- Browser tabs
- Document editors
- Workspace panels
- Custom filters/views

---

## Best Practices

### Number of Tabs

**Recommended:**
- 2-5 tabs: Ideal range
- 6-7 tabs: Maximum recommended
- 8+ tabs: Consider alternative organization

**Too Many Tabs:**
- Horizontal overflow issues
- Difficult to scan
- Consider dropdown or menu instead
- Or reorganize content hierarchy

### Content Organization

**Do:**
- Keep content structure consistent across tabs
- Put most important content in first tab
- Don't hide critical information in later tabs
- Ensure content fits within tab panels
- Load content efficiently (lazy load if needed)

**Tab Order:**
- Most important/frequently used first
- Logical progression (e.g., Setup → Configure → Review)
- Alphabetical (if no natural order)
- User-customizable (advanced feature)

### Responsive Design

**Mobile Considerations:**
- Tabs may overflow on small screens
- Consider horizontal scroll
- Or use dropdown menu instead
- Or stack vertically
- Reduce number of tabs on mobile

**Strategies:**
- Scrollable tab bar
- "More" dropdown for overflow tabs
- Convert to accordion on mobile
- Hide less important tabs

---

## Navigation and Content

**Tabs with Tabs Menu:**

The Tabs component is often used alongside a Tabs menu, at a hierarchically lower level to further organize content.

**Hierarchy:**
- **Tabs Menu** (higher level): Navigation between different pages
- **Tabs** (lower level): Content switching within a page/section

**Example:**
A fictional example where Tabs menu and Tabs are used in combination for navigation and organization:
- Tabs Menu: "Dashboard", "Games", "Account"
- Within "Games" page, Tabs: "Active", "History", "Favorites"

**Distinction:**
- Tabs Menu: Changes page/route
- Tabs: Changes content view within page

---

## Accessibility

**Requirements:**
- Use ARIA tab pattern
- Support keyboard navigation
- Indicate selected tab to screen readers
- Ensure sufficient color contrast
- Make tab labels descriptive
- Provide keyboard shortcuts (optional)

**ARIA Attributes:**
- `role="tablist"` - Container
- `role="tab"` - Each tab
- `role="tabpanel"` - Content panels
- `aria-selected="true|false"` - Selection state
- `aria-controls` - Links tab to panel
- `id` and `aria-labelledby` - Associates panel with tab

**Keyboard Navigation:**
- **Tab**: Enter tab list
- **Arrow Left/Right**: Navigate between tabs
- **Arrow Up/Down**: Navigate between tabs (vertical tabs)
- **Home**: First tab
- **End**: Last tab
- **Enter/Space**: Activate focused tab
- **Delete**: Close tab (if closable)

**Screen Reader Support:**
- Announce "tab list"
- Announce tab labels
- Announce selected state
- Announce tab position (e.g., "tab 2 of 4")
- Announce panel content

**Focus Management:**
- Tab into tab list
- Arrow keys navigate between tabs
- Selection follows focus (recommended)
- Or manual activation (select on Enter/Space)

**Best Practices:**
- Provide clear tab labels
- Ensure selected state is visually distinct
- Don't rely on color alone
- Test with keyboard only
- Test with screen readers
- Ensure sufficient contrast (WCAG AA)
- Make tab panels accessible
- Consider skip links for many tabs

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Tabs-1/Tabs.tsx`
