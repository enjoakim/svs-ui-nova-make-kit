# Tabs Menu

A navigation control for switching between different pages or sections within an application. Tabs Menu serves as the primary navigation pattern, typically implemented at the first level to switch between core functions or sections.

---

## Usage

**When to use:**

The Tabs Menu is used to display a list of options or items for navigation. It can be used in the top navigation or within your layout to group information and functions within a context.

**Key Use Cases:**

- **Primary navigation**: First-level navigation between main sections
- **Top navigation bar**: Main application navigation
- **Section navigation**: Navigation within a specific context or panel
- **Product navigation**: Switching between different product areas
- **Feature navigation**: Navigating between major features
- **Page switching**: Changing the current page or route

**When to use Tabs Menu:**
- Navigating between different pages or sections
- Changes URL/route when clicked
- Primary or first-level navigation
- Navigation within a specific context

**Important Distinctions:**

**Tabs Menu (Navigation):**
- Use for navigation between pages
- Changes URL/route
- Higher hierarchy navigation
- Different pages/sections

**Tabs (Content switching):**
- Use for switching content within a section
- No page navigation or URL change
- Lower hierarchy organization
- Same context, different views
- Don't use Tabs Menu for this purpose

**Commonly used with:**
- Page layouts - as primary navigation
- Tabs component - at hierarchically lower level for content switching
- Badges - for alerting users to updates
- Icons - for visual identification
- Layouts - for organizing navigation structure

---

## Semantic Purpose

### Tabs Menu vs Tabs vs Toggle Group

**Tabs Menu (Navigation):**
- **Purpose**: Navigate between pages
- **Navigation**: Changes URL/route
- **Context**: Different pages/sections
- **Level**: Higher hierarchy (first-level navigation)
- **When**: Main navigation patterns

**Tabs (Content):**
- **Purpose**: Switch content within a section
- **Navigation**: No page/URL change
- **Context**: Same context, different views
- **Level**: Lower hierarchy
- **When**: Organize related content in single view

**Toggle Group:**
- **Purpose**: Select options in forms
- **Navigation**: No navigation
- **Context**: Configuration/settings
- **Level**: Form control
- **When**: Form setting selections

### Navigation Hierarchy

**First Level Navigation:**
- Main navigation between primary destinations
- Example: Navigation between core product areas like "Lotto" sections
- Uses larger size variants (Large or Medium)
- More prominent visual treatment

**Navigation Within Context:**
- Secondary navigation within a limited context
- Example: Navigation within a side panel for guides, statistics, etc.
- Often uses smaller size variants
- More localized scope

---

## Examples

### ✅ Correct Usage

**Do:**
- Use Tabs Menu for navigation patterns where items navigate to separate destinations
- Arrange menu links logically with concise labels
- Group related items together
- Prioritize commonly accessed items
- Use different styles for hierarchically separated menus
- Create user-centric menu hierarchy
- Order items for desired navigation
- Prioritize important options at the top
- Use icons to enhance visual identification

**Good Examples:**
- Top navigation: "Home", "Sports", "Casino", "Account"
- Product navigation: "Lotto", "Eurojackpot", "Vikinglotto"
- Section navigation: "Overview", "My Bets", "History", "Settings"
- Context navigation: "Guide", "Statistics", "Results"
- Feature navigation: "Dashboard", "Analytics", "Reports"

### ❌ Incorrect Usage

**Don't:**
- Don't use Tabs Menu for switching content within a section (use Tabs instead)
- Don't use for form options (use Toggle Group or Radio instead)
- Avoid vague or confusing labels
- Don't use overly long labels
- Don't use the same menu style for hierarchically separated menus
- Don't prioritize less important items
- Don't use unclear or ambiguous labels
- Don't hide important navigation options

**Common Mistakes:**
- Using Tabs Menu for content switching (use Tabs component instead)
- Using Tabs Menu for form settings (use Toggle Group instead)
- Vague labels like "Tab 1", "Option A"
- Overly long labels that don't fit
- Same visual style for different hierarchy levels causing confusion
- Poor organization without logical grouping
- Missing icons in Large/Medium variants (icons are obligatory)

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Label (required for each menu item)
C. Icon (required for Large/Medium, optional for Small)
D. Stroke (selected state indicator)
E. Badge (optional)
```

**Requirements:**
- At minimum: Container + Multiple labels (2+ items)
- Large/Medium variants: Icon is obligatory
- Small variant: Icon is optional
- Optional: Badge for alerts/notifications

### Properties

#### Items
- **Type**: Array of menu item objects
- **Required**: Yes
- **Description**: List of navigation items to display
- **Properties per item**:
  - `key`: Unique identifier
  - `label`: Text label for the menu item
  - `href`: URL or route destination
  - `icon`: Icon component (required for Large/Medium, optional for Small)
  - `badge`: Badge configuration (optional)
  - `disabled`: Whether item is disabled (optional)

#### Value
- **Type**: String
- **Required**: No (Yes for controlled component)
- **Description**: Currently selected menu item key
- **Controlled**: Use with onChange for controlled component

#### DefaultValue
- **Type**: String
- **Required**: No
- **Description**: Initially selected item for uncontrolled component

#### Size
- **Type**: Enum
- **Required**: No
- **Default**: `medium`
- **Options**:
  - `large`: Largest size, icon obligatory
  - `medium`: Standard size, icon obligatory
  - `small`: Compact size, icon optional
- **Description**: Visual size variant of the menu
- **When to use**:
  - **Large**: Primary navigation, prominent placement
  - **Medium**: Standard navigation, general use
  - **Small**: Compact contexts, secondary navigation

#### Alignment
- **Type**: Enum
- **Required**: No
- **Default**: `left`
- **Options**:
  - `left`: Items aligned to the left
  - `center`: Items centered horizontally
- **Description**: Horizontal alignment of menu items
- **Purpose**: Design consistency and visual flow

#### OnChange
- **Type**: Function
- **Required**: Yes (for controlled component)
- **Description**: Callback when selected item changes (before navigation)
- **Parameters**: New item key

#### OnNavigate
- **Type**: Function
- **Required**: No
- **Description**: Callback when navigation occurs
- **Parameters**: Item key, href
- **Use case**: For custom navigation handling or analytics

### States

#### **Selected**
- Menu item is currently active
- Indicated by stroke at the bottom of the item
- Distinct visual appearance
- One and only one item selected at a time
- Represents current page/section

#### **Default (Unselected)**
- Menu item is not currently active
- Standard appearance
- Can be clicked to navigate
- No stroke indicator

#### **Hover**
- Mouse over unselected item
- Visual feedback indicates interactivity
- Background and text may change color
- Prepares user for click

#### **Pressed (Active)**
- Item is being clicked
- Active state visual feedback
- Indicates click action
- Before navigation occurs

#### **Disabled** (optional)
- Menu item cannot be selected
- Reduced opacity
- No hover or click interaction
- Use sparingly

### Behavior

**Menu Selection:**

1. **Initial State**
   - One menu item is selected (current page)
   - Stroke indicator shows at bottom of selected item
   - Other items are unselected
   - Corresponds to current URL/route

2. **User Clicks Item**
   - Previous item becomes unselected
   - Clicked item becomes selected
   - Stroke indicator moves to new item
   - Navigation occurs (URL/route changes)
   - onChange and onNavigate callbacks fire
   - New page/section loads

3. **Navigation**
   - Page changes (not just content)
   - URL updates
   - Context may change completely
   - Application navigates to new destination

**Badge Behavior:**

1. **Alert Notification**
   - Badge appears on menu item
   - Alerts user to something requiring attention
   - Typically in associated section/page
   - May show count or indicator

2. **Clearing Badge**
   - Badge disappears when issue resolved
   - Or when user visits the section
   - Application logic controls badge visibility

---

## Customization

### Label Text

**Guidelines:**
- Arrange menu links logically with concise labels
- Labels should clearly indicate destination
- Keep labels short and scannable
- Don't use vague or confusing labels
- Avoid overly long labels
- Use parallel structure

**Best Practices:**
- Keep labels short (1-2 words preferred)
- Use specific, descriptive terms
- Make purpose immediately clear
- Use title case
- Prioritize important items

**Examples:**
- Good: "Home", "Sports", "My Account"
- Bad: "Main Page", "All The Sports We Offer", "Settings and Preferences and More"
- Good: "Overview", "Bets", "History"
- Bad: "Tab 1", "Section A", "Other"

### Sizes

**Configuration:**
Tabs Menu is available in three sizes.

#### **Large**
- Largest visual size
- Icon obligatory
- Most prominent appearance
- Best for primary navigation

**When to use:**
- Main application navigation
- Top-level navigation bar
- First-level navigation
- High visibility requirement

#### **Medium**
- Standard size
- Icon obligatory
- Balanced appearance
- General use

**When to use:**
- Standard navigation contexts
- General navigation patterns
- Default choice for most cases
- Good balance of size and space

#### **Small**
- Compact size
- Icon optional
- Space-efficient
- More subtle appearance

**When to use:**
- Secondary navigation
- Limited space contexts
- Side panels or constrained layouts
- Navigation within a specific context

### Icon

**Configuration:**
- **Large variant**: Icon obligatory
- **Medium variant**: Icon obligatory
- **Small variant**: Icon optional

**Purpose:**
- Visual identification of menu items
- Enhances scannability
- Improves recognition
- Reinforces meaning of labels

**Best Practices:**
- Use clear, recognizable icons
- Match icon meaning to destination
- Use consistent icon style
- Don't use decorative icons without meaning
- Ensure icons are accessible

### Badge

**Purpose:**
Each item in the Tabs Menu allows for the use of a badge, typically to alert the user of something they need to pay attention to in the associated section or page.

**When to Use:**
- Unread notifications
- Updates available
- Action required
- New content
- Counts (e.g., number of items)

**Behavior:**
- Appears on menu item
- Draws attention to section
- May show count or simple indicator
- Cleared when issue resolved

**Examples:**
- "Settings" with badge: 2 items need attention
- "Messages" with badge: 5 unread messages
- "Updates" with badge: New content available

### Alignment

**Purpose:**
Alignment is key for design consistency and user experience. It ensures elements in your menu are properly positioned, improving navigation, aesthetics, and maintaining a consistent visual flow in your interface.

**Options:**

**Left Alignment:**
- Items aligned to the left
- Standard for most layouts
- Natural reading flow
- **When to use**: Left-aligned design, most common pattern

**Center Alignment:**
- Items centered horizontally
- Balanced appearance
- Equal spacing on both sides
- **When to use**: Center-aligned design, symmetric layouts

---

## Best Practices

### Menu Organization

**Hierarchy:**
- Create user-centric menu hierarchy
- Order items for desired navigation
- Prioritize important options at the top
- Guide users to key features efficiently
- Group related items together

**Structure:**
- Organize menu for easy navigation
- Logical grouping
- Commonly accessed items prioritized
- Enhance usability through organization

### Visual Hierarchy

**Different Styles for Different Levels:**
- Use different menu styles for hierarchically separated menus
- Don't use the same style for different hierarchy levels
- Prevents confusion
- Helps users understand structure
- Clear visual distinction between levels

**Example:**
- First-level navigation: Large Tabs Menu
- Context navigation: Small Tabs Menu or Tabs component
- Content switching: Tabs component (not Tabs Menu)

### Number of Items

**Recommended:**
- 3-6 items: Ideal range for main navigation
- 7-8 items: Maximum recommended for horizontal menu
- 9+ items: Consider reorganizing or using dropdown

**Too Many Items:**
- Horizontal overflow issues
- Difficult to scan
- Consider dropdown menu for additional items
- Or reorganize navigation hierarchy

### Content Guidelines

**Do:**
- Arrange menu links logically
- Use concise labels
- Group related items
- Prioritize commonly accessed items
- Make labels clear and specific

**Don't:**
- Use vague labels
- Use confusing labels
- Use overly long labels
- Mix different hierarchy levels in same menu

### Responsive Design

**Mobile Considerations:**
- Items may overflow on small screens
- Consider horizontal scroll
- Or use hamburger menu
- Or reduce number of visible items
- Prioritize most important items

**Strategies:**
- Scrollable menu bar
- "More" dropdown for overflow items
- Hamburger menu on mobile
- Collapsible navigation
- Reduce to essential items only

---

## Navigation and Content

**Tabs Menu with Tabs:**

The Tabs Menu component is often used alongside the Tabs component, at different hierarchy levels to organize navigation and content.

**Hierarchy:**
- **Tabs Menu** (higher level): Navigation between different pages
- **Tabs** (lower level): Content switching within a page/section

**Example:**
- Tabs Menu (first level): "Lotto", "Eurojackpot", "Vikinglotto"
- Within "Lotto" page, Tabs Menu (context): "Guide", "Statistics", "Results"
- Within a section, Tabs (content): "Recent", "Favorites", "All"

**Distinction:**
- Tabs Menu: Changes page/route, navigation pattern
- Tabs: Changes content view within page, content switching

**When Switching Between Content:**
When switching between content hierarchically lower than navigation, consider using the Tabs component instead of Tabs Menu.

---

## Accessibility

**Requirements:**
- Use semantic navigation elements
- Support keyboard navigation
- Indicate selected state to screen readers
- Ensure sufficient color contrast
- Make labels descriptive
- Provide skip navigation link
- Support screen reader navigation

**Semantic HTML:**
- `<nav>` - Navigation container
- `<ul>` / `<li>` - Menu list structure
- `<a>` - Links for navigation items
- Or use ARIA navigation pattern

**ARIA Attributes:**
- `role="navigation"` - Navigation landmark
- `aria-label` - Descriptive navigation label
- `aria-current="page"` - Indicates current page
- `aria-label` or `aria-labelledby` - For each item
- `aria-disabled` - For disabled items

**Keyboard Navigation:**
- **Tab**: Enter navigation menu
- **Arrow Left/Right**: Navigate between items (optional)
- **Enter/Space**: Activate focused item (navigate)
- **Home**: First item (optional)
- **End**: Last item (optional)

**Screen Reader Support:**
- Announce "navigation" landmark
- Announce menu item labels
- Announce current page state
- Announce item position (e.g., "item 2 of 5")
- Announce badge content
- Describe icons in labels

**Focus Management:**
- Tab into navigation
- Current page item may receive focus
- Or first item receives focus
- Arrow keys for navigation (optional)
- Enter/Space to activate

**Best Practices:**
- Provide clear, descriptive labels
- Ensure selected state is visually distinct
- Don't rely on color alone (use stroke indicator)
- Test with keyboard only
- Test with screen readers
- Ensure sufficient contrast (WCAG AA)
- Make icon meaning available to screen readers
- Provide skip navigation link
- Announce badge content to screen readers

**Color Contrast:**
- Text and background: minimum 4.5:1
- Interactive elements: clear focus indicators
- Selected state: stroke indicator plus color
- Don't rely on color alone
- Ensure stroke indicator is visible

**Badge Accessibility:**
- Announce badge content to screen readers
- Make badge meaning clear
- Don't rely on badge alone for critical info
- Ensure badge text has sufficient contrast

---

## Reference Implementation

Imported Figma frame available at: `src/imports/TabsMenu/TabsMenu.tsx`
