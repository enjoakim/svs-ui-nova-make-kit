# Table

A structured layout for displaying data in rows and columns, making it easy for users to scan, compare, and understand information such as transactions or game history.

---

## Usage

**When to use:**

Use a table to display structured information in rows and columns, making it easy for users to scan, compare, and understand data such as transactions or game history.

**Key Use Cases:**

- **Transaction history**: Financial transactions, payment records, betting history
- **Game history**: Past games, results, scores
- **Data comparison**: Side-by-side comparison of values
- **Listings**: Product lists, user lists, item inventories
- **Reports**: Financial reports, analytics data, statistics
- **Structured data**: Any data with multiple attributes to display

**When to use tables:**
- Data is tabular in nature (rows and columns)
- Users need to scan and compare information
- Multiple data points per item
- Sorting or filtering would be helpful
- Data needs to be readable and scannable

**Commonly used with:**
- Pagination - for large datasets
- Sorting controls - for organizing data
- Filters - for narrowing down data
- Search - for finding specific entries
- Actions - for row-specific operations
- Selection - for bulk operations

---

## Semantic Purpose

### Table vs List vs Grid

**Table:**
- **Structure**: Rows and columns with headers
- **Data**: Structured, multi-attribute data
- **Scanning**: Horizontal and vertical
- **Comparison**: Easy to compare across columns
- **When**: Tabular data with multiple attributes

**List:**
- **Structure**: Vertical stack of items
- **Data**: Simple, single-attribute or card-like
- **Scanning**: Vertical only
- **Comparison**: Less structured comparison
- **When**: Simple listings, feeds, menu items

**Grid:**
- **Structure**: Equal-sized cells in rows and columns
- **Data**: Visual content, images, cards
- **Scanning**: Visual scanning
- **Comparison**: Visual comparison
- **When**: Image galleries, product catalogs, visual content

---

## Examples

### ✅ Correct Usage

**Do:**
- Use for structured, tabular data
- Include clear column headers
- Right-align numeric values
- Use consistent cell formatting
- Provide sorting when helpful
- Use striped rows for large datasets
- Make column headers descriptive
- Consider mobile layouts for responsive design

**Good Examples:**
- Transaction history with columns: Date, Description, Amount, Status
- Game history with: Game, Date, Result, Score
- User list with: Name, Email, Role, Last Login
- Product inventory with: Product, SKU, Quantity, Price
- Leaderboard with: Rank, Player, Score, Date

### ❌ Incorrect Usage

**Don't:**
- Don't use for non-tabular data
- Don't omit column headers
- Don't left-align numeric values
- Don't make tables too wide (horizontal scroll issues)
- Don't use for very small datasets (1-2 items)
- Don't use inconsistent formatting within columns
- Don't make columns too narrow (text truncation)

**Common Mistakes:**
- Using table for layout instead of data
- Missing or unclear column headers
- Left-aligned numbers (hard to compare)
- Too many columns causing horizontal scroll
- Inconsistent data formatting
- No responsive strategy for mobile
- Poor contrast between rows

---

## API

### Anatomy

**Structure:**
```
A. Table container
B. Header row
C. Header cells (column headers)
D. Body rows
E. Body cells (data cells)
F. Optional: Footer row
```

**Cell Types:**
- **Text**: Simple labels or single pieces of information
- **Text + Description**: Main text with additional context underneath
- **Numeric**: Values like amounts or percentages (right-aligned)
- **Action**: Buttons or interactive elements
- **Selection**: Checkboxes for row selection
- **Status**: Badges or indicators

**Requirements:**
- At minimum: Container + Header row + Body rows with cells
- Recommended: Clear column headers, consistent cell types per column

### Properties

#### Columns
- **Type**: Array of column definitions
- **Required**: Yes
- **Description**: Defines the structure and behavior of each column
- **Properties per column**:
  - `key`: Unique identifier
  - `header`: Column header text
  - `type`: Cell type (text, numeric, action, etc.)
  - `width`: Column width
  - `sortable`: Whether column can be sorted
  - `align`: Text alignment (left, right, center)

#### Data
- **Type**: Array of row objects
- **Required**: Yes
- **Description**: The data to display in the table
- **Structure**: Each object represents one row

#### Variant
- **Type**: Enum
- **Required**: No
- **Default**: `default`
- **Options**:
  - `default`: Standard table with consistent row styling
  - `striped`: Alternates row backgrounds for easier scanning
- **Description**: Visual style of the table

#### Size
- **Type**: Enum
- **Required**: No
- **Default**: `medium`
- **Options**:
  - `xsmall`: Extra compact spacing (high density)
  - `small`: Compact spacing
  - `medium`: Balanced spacing (default)
  - `large`: Spacious (comfortable readability)
- **Description**: Cell padding and overall density
- **When to use**:
  - **Xsmall/Small**: Dense data, many rows, limited space
  - **Medium**: General use, balanced readability
  - **Large**: Few rows, comfortable reading priority

#### Sortable
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether columns can be sorted
- **When true**: Column headers become interactive

#### Selectable
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether rows can be selected (checkboxes in first column)
- **Use case**: Bulk actions on multiple rows

#### OnSort
- **Type**: Function
- **Required**: No (Yes if sortable=true)
- **Description**: Callback when column header is clicked for sorting
- **Parameters**: Column key, sort direction

#### OnRowClick
- **Type**: Function
- **Required**: No
- **Description**: Callback when row is clicked
- **Use case**: Navigate to detail view, expand row

#### OnSelectionChange
- **Type**: Function
- **Required**: No (Yes if selectable=true)
- **Description**: Callback when row selection changes
- **Parameters**: Array of selected row IDs

#### Pagination
- **Type**: Object
- **Required**: No
- **Description**: Pagination configuration for large datasets
- **Properties**:
  - `page`: Current page number
  - `pageSize`: Items per page
  - `total`: Total number of items

#### Loading
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether table is in loading state
- **Visual**: Loading indicator or skeleton rows

#### EmptyState
- **Type**: String | Component
- **Required**: No
- **Description**: Content to show when table has no data
- **Example**: "No transactions found"

### Cell Types

#### **Text**
- **Purpose**: Simple labels or single pieces of information
- **Alignment**: Left (default)
- **Use**: Names, descriptions, categories, general text
- **Example**: "John Doe", "Deposit", "Active"

#### **Text + Description**
- **Purpose**: Main text with additional context underneath
- **Alignment**: Left
- **Structure**: Primary text (larger/bold) + secondary text (smaller/muted)
- **Use**: When additional context is needed under main text
- **Example**: 
  - Primary: "Monthly Subscription"
  - Description: "Renews on Jan 15, 2026"

#### **Numeric**
- **Purpose**: Values like amounts or percentages
- **Alignment**: Right (always right-aligned for readability)
- **Use**: Money amounts, quantities, percentages, scores
- **Format**: Consistent formatting (currency symbols, decimal places)
- **Example**: "€100.00", "75%", "1,234"

#### **Action**
- **Purpose**: Interactive elements
- **Alignment**: Center or right
- **Content**: Buttons, icon buttons, dropdowns
- **Use**: Row-specific actions
- **Example**: "Edit", "Delete", "View details"

#### **Status/Badge**
- **Purpose**: Status indicators
- **Alignment**: Left or center
- **Content**: Badge or indicator component
- **Use**: Status, categories, labels
- **Example**: "Completed", "Pending", "Error"

#### **Selection**
- **Purpose**: Checkbox for row selection
- **Alignment**: Left (first column)
- **Use**: Bulk actions, multi-select
- **Header**: Checkbox to select/deselect all

### Variants

#### **Default**
- Standard table appearance
- Consistent row styling
- Clear row boundaries
- Balanced spacing for general use
- Comfortable readability

**When to use:**
- Standard data display
- Moderate number of rows
- General use cases

#### **Striped**
- Alternating row backgrounds
- Zebra striping pattern
- Enhanced visual separation

**When to use:**
- Large datasets
- Many rows
- Makes rows easier to scan
- Helps eye track across columns

**Benefits:**
- Reduces visual fatigue
- Easier to follow rows horizontally
- Better for dense tables

### Sizes

#### **Xsmall**
- Extra compact spacing
- Minimal padding
- High density
- Fits more rows in limited space

**When to use:**
- Very large datasets
- Limited vertical space
- Dashboard widgets
- Dense information displays

#### **Small**
- Compact spacing
- Moderate padding
- Good density while maintaining readability

**When to use:**
- Large datasets
- Space-conscious layouts
- Many rows to display

#### **Medium (Default)**
- Balanced spacing
- Standard padding
- Comfortable readability
- General use

**When to use:**
- Standard use cases
- Moderate number of rows
- General data display

#### **Large**
- Spacious padding
- Maximum comfort
- Easy scanning

**When to use:**
- Few rows
- Readability priority
- Prominent data display
- Touch-friendly interfaces

### Behavior

**Sorting:**
- Click column header to sort
- First click: Ascending
- Second click: Descending
- Third click: Remove sort (optional)
- Visual indicator shows sort direction
- Only one column sorted at a time (typically)

**Selection:**
- Checkbox in first column
- Click checkbox to select/deselect row
- Header checkbox selects/deselects all
- Selected rows have visual indication
- Selection state maintained through sorting/filtering

**Row Interaction:**
- Hover state on rows
- Click row for details (optional)
- Highlight selected rows
- Focus state for keyboard navigation

**Responsive:**
- Consider horizontal scroll for many columns
- Stack or hide columns on mobile
- Use cards instead of table on mobile (alternative)
- Prioritize most important columns

---

## Customization

### Column Headers

**Best Practices:**
- Use clear, descriptive labels
- Keep headers concise
- Use title case
- Make sortable headers visually distinct
- Show sort indicators clearly

**Examples:**
- Good: "Date", "Amount", "Status"
- Bad: "D", "Amt", "St" (too abbreviated)

### Cell Formatting

**Consistency:**
- Format data consistently within each column
- Use same date format throughout
- Use same number format (decimal places, separators)
- Apply consistent case for text

**Numeric Values:**
- Always right-align
- Use consistent decimal places
- Include currency symbols
- Use separators for readability (1,234.56)
- Consider color coding (red for negative, green for positive)

**Dates:**
- Use consistent format
- Consider relative dates ("2 days ago" vs "Jan 20, 2026")
- Include time when relevant

**Text:**
- Truncate long text with ellipsis
- Consider tooltips for truncated content
- Use consistent case

### Row Styling

**Hover:**
- Subtle background change
- Indicates interactivity
- Helps focus attention

**Selection:**
- Clear visual indication
- Checkbox state visible
- Background color change or border

**States:**
- Active/Selected rows
- Disabled rows (reduced opacity)
- Loading rows (skeleton or spinner)

---

## Accessibility

**Requirements:**
- Use semantic HTML table elements
- Provide clear column headers with scope
- Support keyboard navigation
- Ensure sufficient color contrast
- Make interactive elements keyboard accessible
- Announce sorting changes to screen readers
- Support screen reader table navigation

**Semantic HTML:**
- `<table>` - Main container
- `<thead>` - Table header
- `<tbody>` - Table body
- `<tfoot>` - Table footer (optional)
- `<tr>` - Table row
- `<th>` - Header cell (with scope attribute)
- `<td>` - Data cell

**ARIA Attributes:**
- `role="table"` - If not using table element
- `aria-label` - Table description
- `aria-sort` - Sort state on headers
- `aria-selected` - Row selection state
- `scope="col"` - Column headers
- `scope="row"` - Row headers

**Keyboard Navigation:**
- **Tab**: Navigate through interactive elements
- **Arrow keys**: Navigate between cells (optional)
- **Enter/Space**: Activate interactive elements
- **Shift+Click**: Multi-select rows

**Screen Reader Support:**
- Announce table dimensions
- Read column headers with each cell
- Announce sort state changes
- Indicate selected rows
- Provide context for complex cells

**Best Practices:**
- Provide table caption or aria-label
- Use th for all header cells with scope
- Ensure sufficient contrast (WCAG AA)
- Make sortable headers clearly indicated
- Test with keyboard only
- Test with screen readers
- Provide alternative views for complex tables
- Consider responsive alternatives for mobile

**Color Contrast:**
- Text and background: minimum 4.5:1
- Interactive elements: clear focus indicators
- Don't rely on color alone for information
- Striped rows must maintain contrast

---

## Best Practices

### Column Design

**Number of Columns:**
- Limit to essential columns
- Avoid horizontal scrolling when possible
- Prioritize most important columns
- Consider hiding columns on smaller screens

**Column Width:**
- Give adequate space to each column
- Avoid truncation when possible
- Make numeric columns narrow (right-aligned)
- Allow flexible width for text columns

### Data Presentation

**Large Datasets:**
- Use pagination
- Implement sorting
- Provide filtering
- Use striped variant
- Consider virtual scrolling for huge datasets

**Empty States:**
- Provide clear empty state message
- Suggest actions (e.g., "Add your first transaction")
- Use helpful illustration or icon
- Don't show empty table shell

**Loading States:**
- Show skeleton rows during load
- Or display loading spinner
- Maintain table structure
- Don't flash content

### Mobile Considerations

**Responsive Strategies:**
- Horizontal scroll with fixed columns
- Hide less important columns
- Stack columns vertically (card view)
- Provide expandable rows
- Use tabs to switch between column groups

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Table-1/Table.tsx`
