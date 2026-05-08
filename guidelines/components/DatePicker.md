# Date Picker

A Date picker allows for selecting a date or a range of dates from a calendar view.

---

## Usage

**When to use:**

Use the Date picker to provide the user an intuitive way to pick a singular date, or a range of dates.

**Key Use Cases:**

- **Single date selection**: Birthdays, event dates, deadlines
- **Date range selection**: Travel dates, booking periods, reporting timeframes
- **Form inputs**: Any form requiring date information
- **Filtering**: Date-based filtering in lists or data views
- **Scheduling**: Appointment booking, event planning
- **Historical data**: Selecting dates from the past

**Components:**

The Date picker consists of two separate components:
1. **Date picker field**: Input field with calendar icon trigger
2. **Calendar**: Calendar view for date selection

Typically the Date picker field will be used to reveal the calendar and allow the user to pick a date or dates. However, the calendar can be displayed on its own or be triggered by another component.

**Commonly used with:**
- Forms - for date input fields
- Filters - for date-based filtering
- Buttons - for confirming range selections
- Input components - shares similar structure and states
- Select component - similar interaction patterns

---

## Semantic Purpose

### Date Picker vs Calendar

**Date Picker (Field):**
- **Purpose**: Input field for displaying and triggering date selection
- **Structure**: Label + Input/Placeholder + Calendar icon + Optional help text
- **Interaction**: Click to open calendar, or type date manually
- **Display**: Shows selected date(s) or placeholder text
- **Similar to**: Input component, Select component

**Calendar:**
- **Purpose**: Visual calendar grid for date selection
- **Structure**: Title + Month navigator + Weekday labels + Date cells
- **Interaction**: Click dates, navigate months, select ranges
- **Display**: Calendar grid with current month
- **Usage**: Triggered by Date picker or displayed standalone

**Relationship:**

The Calendar and the Date picker field are two separate components, where the former typically is triggered by the latter.

### Selection Modes

#### **Single Date Selection**
- **Purpose**: Select one specific date
- **Behavior**: Calendar closes after selection
- **Display**: Selected date shown in picker field
- **Use case**: Birthdays, single event dates, deadlines
- **Confirmation**: Immediate (no confirmation button needed)

#### **Range Selection**
- **Purpose**: Select multiple dates (start and end)
- **Behavior**: Select start date, then end date; calendar remains open
- **Display**: Date range shown in picker field (e.g., "Jan 1 - Jan 15")
- **Visual**: Range highlighted in calendar
- **Confirmation**: Requires interaction with confirmation button
- **Use case**: Travel dates, booking periods, reporting timeframes

---

## Examples

### ✅ Correct Usage

**Do:**
- Select a default value that reflects the most common use case
- Format the displayed date according to Svenska Spel guidelines
- Provide clear label describing expected input
- Use help text for additional guidance when needed
- Attempt to prevent the user from making erroneous selections
- Show current date with outline indicator
- Disable unavailable dates
- Use consistent date formatting throughout the application
- Allow manual date entry as alternative to calendar selection
- Provide clear month navigation

**Good Examples:**
- Birth date picker with default blank (user-specific)
- Event date picker with default to today (common case)
- Range picker for travel dates with confirmation button
- Date filter with disabled future dates for historical data
- Form with clear label "Select your birth date"
- Help text explaining date format requirements

### ❌ Incorrect Usage

**Don't:**
- Don't present the Date picker blank if a default selection can aid the user
- Don't present the date in an inconsistent or incorrect formatting
- Don't create unclear or confusing date formats
- Don't omit labels or rely on placeholder text alone
- Don't allow selection of invalid dates when constraints exist
- Don't make calendar navigation unclear or difficult
- Don't use inconsistent date formatting across similar contexts

**Common Mistakes:**
- Blank date picker when today's date would be helpful default
- Inconsistent date format (mixing formats in same application)
- Missing label, only placeholder text
- Allowing future dates when only past dates are valid
- Unclear range selection (no visual indication of range)
- No confirmation button for range selection
- Calendar icon not clickable
- Manual entry disabled without reason

---

## API

### Anatomy

#### Date Picker Field Structure:
```
1. Label (required)
2. Placeholder / Input text (required)
3. Calendar icon (required)
4. Container (required)
5. Help text (optional)
```

#### Calendar Structure:
```
1. Container (required)
2. Title (required - month and year)
3. Month Navigator (required - prev/next buttons)
4. Weekday labels (required)
5. Date cells (required)
   - Default
   - Selected
   - Current date
   - Range
   - Disabled
```

### Properties

#### Mode
- **Type**: Enum
- **Required**: Yes
- **Default**: `single`
- **Options**:
  - `single`: Single date selection
  - `range`: Date range selection (start and end)
- **Description**: Determines whether user selects one date or a range

#### Value
- **Type**: Date | DateRange
- **Required**: No
- **Default**: null
- **Description**: Selected date(s)
- **Single mode**: Date object
- **Range mode**: Object with startDate and endDate

#### DefaultValue
- **Type**: Date | DateRange
- **Required**: No
- **Description**: Default pre-selected date(s)
- **Guidelines**: Select default value that reflects most common use case

#### Label
- **Type**: String
- **Required**: Yes
- **Description**: Describes the expected input (e.g., "Select your birth date")
- **Guidelines**: Keep short, clear and concise (no longer than a few words)

#### Placeholder
- **Type**: String
- **Required**: No
- **Default**: "Select date" or "DD/MM/YYYY"
- **Description**: Hint regarding expected format
- **Note**: Replaced with user input on interaction; important info should be in label or help text

#### HelpText
- **Type**: String
- **Required**: No
- **Description**: Additional guidance or contextual information
- **When to use**: When extra clarification is needed for user to complete task

#### ErrorText
- **Type**: String
- **Required**: No
- **Description**: Error message when validation fails
- **Guidelines**: Inform user date is incorrect and what needs to be corrected

#### Variant
- **Type**: Enum
- **Required**: No
- **Default**: `solid`
- **Options**:
  - `solid`: Solid base background
  - `outline`: Outlined variant
- **Description**: Visual style of the picker field
- **Note**: When using outline variant, be mindful of background surface for accessibility

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether the date picker is disabled and non-interactive

#### MinDate
- **Type**: Date
- **Required**: No
- **Description**: Minimum selectable date (dates before are disabled)

#### MaxDate
- **Type**: Date
- **Required**: No
- **Description**: Maximum selectable date (dates after are disabled)

#### DisabledDates
- **Type**: Array<Date>
- **Required**: No
- **Description**: Specific dates to disable
- **Use case**: Unavailable dates, blackout dates, holidays

#### DateFormat
- **Type**: String
- **Required**: No
- **Default**: Follow Svenska Spel guidelines
- **Description**: Format for displaying selected date
- **Guidelines**: Use consistent formatting across application

#### AllowManualInput
- **Type**: Boolean
- **Required**: No
- **Default**: true
- **Description**: Whether user can type date manually into field

#### OnChange
- **Type**: Function
- **Required**: Yes
- **Description**: Callback when date selection changes
- **Parameters**: Selected date(s)

#### OnError
- **Type**: Function
- **Required**: No
- **Description**: Callback when validation fails

### States

#### Date Picker Field States:

**Default:**
- Default state prior to user interaction
- Displays placeholder text
- Ready for interaction

**Hover:**
- On desktop devices, reacts to hovering cursor
- Visual feedback for interactivity
- Calendar icon and field respond to hover

**Focus:**
- Date picker is in focus
- Available for accepting input
- Focus ring visible for accessibility

**Filled:**
- Date picker with a selected date
- Either selected by user or default selection by system
- Shows formatted date instead of placeholder

**Error:**
- An incorrect date is selected
- Error styling applied
- Error text displayed (if provided)
- Attempt to prevent erroneous selections

**Disabled:**
- Date picker not available for interaction
- Reduced opacity, no hover/focus states
- User cannot interact with field or calendar

#### Calendar Date Cell States:

**Default:**
- Not currently selected or the current date
- Available for selection
- Standard appearance

**Hover:**
- On desktop devices, responds to hovering cursor
- Visual feedback before selection
- Helps user identify target date

**Current:**
- The current date (today)
- Indicated with an outline
- Distinct from selected state

**Selected:**
- A selected date
- Singular date, start or end of a range
- Highlighted with filled background

**Range:**
- Indicates date is part of a selected range
- Visual connection between start and end dates
- Distinct from start/end selected dates

**Disabled:**
- Date currently unavailable for selection
- Reduced opacity or grayed out
- Cannot be clicked or selected

### Behavior

**Opening Calendar:**

Interacting with the Date picker allows the user to enter a date manually. Clicking the calendar icon triggers the display of the calendar, allowing the selection of a date or dates.

**Single Date Selection:**

1. User clicks calendar icon or field
2. Calendar opens
3. User clicks a date
4. Calendar closes automatically
5. Date picker displays the selected date
6. Interacting with the Date picker again reopens calendar with selected date indicated

**Range Selection:**

1. User clicks calendar icon or field
2. Calendar opens
3. User clicks start date (highlighted)
4. User clicks end date (range highlighted)
5. Calendar remains open
6. User clicks confirmation button
7. Calendar closes
8. Date picker displays selected range

**Manual Input:**

- User can type date directly into field
- Date validated on blur or submit
- Invalid dates trigger error state
- Successful manual entry updates calendar when reopened

**Month Navigation:**

- Previous/Next month buttons
- Click to navigate backward/forward
- Title updates to show current month and year
- Date cells update to show new month

**Date Formatting:**

- Follow Svenska Spel guidelines for date formatting
- Use consistent formatting throughout application
- Display format may differ from internal value format
- Consider localization requirements

### Validation

**Prevent Erroneous Selections:**

- Disable dates outside min/max range
- Disable specific unavailable dates
- Validate manual input format
- Provide clear error messages
- Show error state visually

**Error Text:**

- Displayed when validation fails
- Informs user the selected date is incorrect
- Ideally explains what needs to be corrected to achieve success
- Clear, actionable guidance

---

## Customization

### Label

**Guidelines:**
- Describes the expected input (e.g., "Select your birth date")
- Keep label text short, clear and concise
- Pursue to make it no longer than a few words
- Essential information (not in placeholder which disappears)

### Placeholder Text

**Purpose:**
- Can provide a hint regarding the expected format
- Example: "DD/MM/YYYY" or "Select date"

**Important:**
- Once user starts interacting, placeholder text is replaced with user input
- Don't rely on placeholder for essential information
- Important information should be in label or help text

### Input Text

**Display:**
- The selected date provided by the user, or pre-selected by the system
- Formatted according to DateFormat property
- Replaces placeholder when date is selected

### Help Text

**When to Use:**
- Optional field for additional guidance or contextual information
- Consider using when extra clarification is needed for user to complete task
- Persistent (unlike placeholder which disappears)

**Examples:**
- "Must be at least 18 years ago"
- "Format: DD/MM/YYYY"
- "Select a date within the next 30 days"

### Error Text

**Display:**
- Shown when validation fails
- Replaces help text when error occurs
- Clearly indicates what's wrong and how to fix it

**Guidelines:**
- Be specific about the error
- Provide actionable guidance
- Example: "Date must be in the future" or "Invalid date format"

### Default Values

**Best Practice:**
- Select a default value that reflects the most common use case
- Don't present the Date picker blank if a default selection can aid the user

**Examples:**
- Event date: Default to today
- Birth date: Default to blank (user-specific)
- Report date: Default to current month start/end
- Booking: Default to today for start, tomorrow for end (range)

### Variants

**Solid (Default):**
- Solid base background
- Standard appearance
- Works on most surfaces

**Outline:**
- Border only, no background fill
- Lighter visual weight
- Be mindful of background surface to ensure accessibility is maintained
- Ensure sufficient contrast

---

## Accessibility

**Requirements:**
- Provide clear, descriptive labels
- Support keyboard navigation for calendar
- Ensure sufficient color contrast for all states
- Indicate current date clearly
- Support manual date entry as alternative to calendar
- Provide error messages for invalid dates
- Use semantic HTML for calendar structure
- Announce date selections to screen readers

**Keyboard Navigation:**

**Date Picker Field:**
- **Tab**: Focus on date picker field
- **Enter/Space**: Open calendar
- **Type**: Manual date entry (if enabled)

**Calendar:**
- **Arrow keys**: Navigate between dates
- **Home**: First day of month
- **End**: Last day of month
- **Page Up/Down**: Previous/Next month
- **Enter/Space**: Select focused date
- **Escape**: Close calendar

**Screen Reader Support:**
- Announce selected dates
- Announce month/year when navigating
- Announce disabled dates
- Announce current date
- Provide context for range selections
- Announce errors clearly

**Best Practices:**
- Make touch targets at least 40px for date cells
- Provide visible focus indicators
- Ensure calendar icon is keyboard accessible
- Test with screen readers
- Don't rely on color alone to indicate states
- Support manual input for users who prefer typing
- Provide clear error recovery

**Visual Indicators:**
- Current date: Outline indicator
- Selected date: Filled background
- Range: Connected highlighting
- Disabled: Reduced opacity or grayed out
- Error: Border color change + error text

---

## Reference Implementation

Imported Figma frame available at: `src/imports/DatePicker/DatePicker.tsx`
