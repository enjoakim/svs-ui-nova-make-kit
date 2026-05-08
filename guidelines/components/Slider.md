# Slider

A draggable control that allows users to select a single value from a continuous scale. Sliders provide an intuitive way to choose from a predetermined range when precision is not critical.

---

## Usage

**When to use:**

A slider lets the user select a single value from a continuous scale. Slider allows for changing a value with a draggable control.

**Key Use Cases:**

- **Range selection**: Selecting a value from a predetermined range
- **Approximate values**: When exact precision is not required
- **Visual feedback**: When user benefits from seeing value change in real-time
- **Settings and preferences**: Volume, brightness, opacity, temperature
- **Filters**: Price ranges, date ranges, age ranges
- **Adjustments**: Zoom levels, playback speed, difficulty levels

**When to use sliders:**
- Making a selection from predetermined list in a range
- Value does not need to be exact
- User benefits from visual representation of scale
- Continuous adjustment is helpful

**When NOT to use:**

- **Very large ranges**: Avoid when available range is very large (hard to control precisely)
- **Very small ranges**: Avoid when available range is very small (use buttons or input instead)
- **Exact values needed**: For scenarios where user is requested to provide an exact numerical value, consider using an input field
- **More appropriate interaction exists**: Avoid sliders for interactions where there are more appropriate interaction patterns available

**Commonly used with:**
- Input fields - for displaying/entering exact values
- Labels - for describing slider purpose
- Min/max indicators - for showing range boundaries
- Tooltips - for showing current value
- Forms - for settings and preferences
- Filters - for range-based filtering

---

## Semantic Purpose

### Slider vs Input Field vs Stepper

**Slider:**
- **Purpose**: Select approximate value from continuous range
- **Precision**: Low to medium precision
- **Interaction**: Drag thumb along track
- **Visual**: Shows position on scale
- **When**: Value doesn't need to be exact, visual feedback is helpful

**Input Field:**
- **Purpose**: Enter exact numerical value
- **Precision**: High precision
- **Interaction**: Type specific number
- **Visual**: Text input
- **When**: Exact value is required

**Stepper (Increment/Decrement):**
- **Purpose**: Adjust value by fixed increments
- **Precision**: Discrete steps
- **Interaction**: Click +/- buttons
- **Visual**: Number with buttons
- **When**: Small range with discrete values

---

## Examples

### ✅ Correct Usage

**Do:**
- Use a slider for appropriate interactions
- Use when approximate value selection is acceptable
- Provide label to inform user of slider's function
- Show min/max values at track edges when helpful
- Use for reasonable ranges (not too large or small)
- Provide visual feedback during interaction
- Consider adding tooltip showing current value

**Good Examples:**
- Volume control: 0-100
- Brightness adjustment: 0-100%
- Price filter: €0-€500
- Age range: 18-65 years
- Zoom level: 50%-200%
- Temperature setting: 16°-30°C
- Playback speed: 0.5x-2x

### ❌ Incorrect Usage

**Don't:**
- Don't use for very large ranges (e.g., 0-1,000,000)
- Don't use for very small ranges (e.g., 1-3 options)
- Don't use when exact precision is required
- Avoid sliders for interactions where there are more appropriate interaction patterns available
- Don't omit labels when slider purpose isn't obvious
- Don't disable without explanation when possible

**Common Mistakes:**
- Using slider for year selection (1900-2024 - too many values, use select/input)
- Using slider for binary choice (use switch or checkbox)
- Using slider for small discrete sets (use radio buttons)
- No label leaving user confused about purpose
- Range too large making precise selection difficult
- Missing min/max indicators on unclear ranges

---

## API

### Anatomy

**Structure:**
```
A. Rail (required) - Background track showing full range
B. Track (required) - Filled portion showing selected value
C. Thumb (required) - Draggable control for adjusting value
D. Tooltip (optional) - Shows current value during interaction
```

**Optional Elements:**
- Label - Describes slider's function
- Min/Max values - Indicate boundary values at track edges
- Help text - Additional context

**Requirements:**
- At minimum: Rail + Track + Thumb
- Optional: Tooltip, Label, Min/Max indicators

### Properties

#### Min
- **Type**: Number
- **Required**: Yes
- **Description**: Minimum value of the range
- **Default**: 0
- **Guidelines**: Choose appropriate minimum for use case

#### Max
- **Type**: Number
- **Required**: Yes
- **Description**: Maximum value of the range
- **Guidelines**: Avoid very large ranges that make precise selection difficult

#### Value
- **Type**: Number
- **Required**: No (Yes for controlled component)
- **Description**: Current value of the slider
- **Range**: Between min and max
- **Controlled**: Use with onChange for controlled component

#### DefaultValue
- **Type**: Number
- **Required**: No
- **Description**: Initial value for uncontrolled component
- **Range**: Between min and max
- **Best practice**: Provide sensible default when appropriate

#### Step
- **Type**: Number
- **Required**: No
- **Default**: 1
- **Description**: Increment between selectable values
- **Examples**: 
  - 1: Integer values
  - 0.1: One decimal place
  - 5: Multiples of 5
- **Guidelines**: Choose step size appropriate for precision needed

#### Label
- **Type**: String
- **Required**: No (but recommended)
- **Description**: Label can be provided to inform user of the function of the slider
- **Guidelines**: Keep clear and concise

#### ShowMinMax
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to show min/max values at edges of track
- **When to use**: Min/max values can be added to indicate the boundary values

#### ShowTooltip
- **Type**: Boolean
- **Required**: No
- **Default**: false (or 'on-drag')
- **Description**: Whether to show tooltip with current value
- **Options**: false, true (always), 'on-drag' (during interaction)

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether slider is disabled and non-interactive
- **Accessibility**: For accessibility considerations, avoid using the disabled state in your designs if possible

#### Orientation
- **Type**: Enum
- **Required**: No
- **Default**: `horizontal`
- **Options**:
  - `horizontal`: Left to right slider (most common)
  - `vertical`: Bottom to top slider
- **Description**: Direction of slider

#### OnChange
- **Type**: Function
- **Required**: Yes (for controlled components)
- **Description**: Callback when value changes
- **Parameters**: New value
- **Fires**: During drag and on release

#### OnChangeCommitted
- **Type**: Function
- **Required**: No
- **Description**: Callback when user finishes changing value (on release)
- **Use case**: When you only want final value, not intermediate values

#### AriaLabel
- **Type**: String
- **Required**: No (Yes if label is not visible)
- **Description**: Accessible label for screen readers

#### AriaValueText
- **Type**: String | Function
- **Required**: No
- **Description**: Human-readable text describing current value
- **Example**: "50 percent" instead of just "50"

### States

#### **Default**
- Default state prior to user interaction
- Thumb at current value position
- Ready for interaction
- Track shows filled portion

#### **Focus**
- Slider is in focus
- Focus indicator visible on thumb
- Can be adjusted with keyboard
- Ready for interaction

#### **Hover**
- Currently hovering with pointer device in desktop mode
- Hover feedback on thumb
- Indicates interactivity
- Prepares user for click/drag

#### **Pressed (Active)**
- Slider is currently being interacted with
- User is dragging thumb
- Active visual state
- Value updating in real-time
- Tooltip may be visible

#### **Disabled**
- Slider unavailable for interaction
- Reduced opacity
- No hover or focus states
- Cannot be adjusted
- **Accessibility note**: For accessibility considerations, avoid using the disabled state in your designs if possible

### Behavior

**Interaction:**

1. **Initial State**
   - Slider shows current value position
   - Thumb positioned on track
   - Optional: Min/max values visible

2. **User Focuses (Keyboard)**
   - Focus indicator appears on thumb
   - Keyboard navigation enabled
   - Ready for adjustment

3. **User Hovers (Mouse)**
   - Hover state on thumb
   - Visual feedback
   - Indicates draggability

4. **User Drags/Adjusts**
   - Click and drag thumb along track
   - Or use keyboard arrows to adjust
   - Track fills/unfills based on position
   - Value updates continuously
   - Optional: Tooltip shows current value

5. **User Releases**
   - Thumb stays at new position
   - Value committed
   - OnChangeCommitted fires (if provided)
   - Tooltip may hide

**Keyboard Interaction:**
- **Arrow Up/Right**: Increase value by step
- **Arrow Down/Left**: Decrease value by step
- **Page Up**: Increase by larger increment
- **Page Down**: Decrease by larger increment
- **Home**: Jump to minimum value
- **End**: Jump to maximum value

**Mouse/Touch Interaction:**
- **Click on track**: Jump thumb to clicked position
- **Drag thumb**: Smoothly adjust value
- **Click and hold thumb**: Activate for dragging

**Value Calculation:**
- Position on track determines value
- Respects min, max, and step constraints
- Snaps to nearest valid step value

---

## Customization

### Label

**Purpose:**
- A label can be provided to inform the user of the function of the slider
- Describes what value is being adjusted

**Guidelines:**
- Keep clear and concise
- Position above or beside slider
- Always provide when purpose isn't obvious

**Examples:**
- "Volume"
- "Brightness"
- "Price Range"
- "Temperature"

### Min/Max Values

**Purpose:**
- Min/max values can be added to the edges of the track to indicate the boundary values
- Help user understand the scale

**When to Use:**
- Range isn't obvious from context
- Helps user understand scale
- Provides reference points

**Display:**
- Minimum value at left/bottom edge
- Maximum value at right/top edge
- Should match actual min/max property values

**Examples:**
- "0" ... "100"
- "€0" ... "€500"
- "0%" ... "100%"

### Tooltip

**Purpose:**
- Shows current value during interaction
- Provides precise feedback

**When to Show:**
- Always visible
- Only during drag/interaction
- Never (if value shown elsewhere)

**Content:**
- Current numerical value
- Formatted appropriately (e.g., "€50", "75%")
- Updates in real-time during drag

### Step Size

**Considerations:**
- Larger steps: Easier to control, less precision
- Smaller steps: More precision, harder to hit exact value
- Choose based on required precision

**Examples:**
- Volume: step=1 (0-100)
- Price: step=10 (€0-€500)
- Percentage: step=5 (0%-100%)
- Decimal: step=0.1 (0-10)

### Range Size

**Appropriate Ranges:**
- **Small**: 0-10, 0-100 (easy to control)
- **Medium**: 0-500, 0-1000 (acceptable with appropriate step)
- **Avoid**: 0-100000 (too large, use input field)
- **Avoid**: 0-3 (too small, use radio buttons or stepper)

---

## Accessibility

**Requirements:**
- Provide accessible label (aria-label or visible label)
- Support full keyboard navigation
- Ensure sufficient color contrast for all states
- Provide clear focus indicators
- Use semantic HTML (input type="range" or proper ARIA)
- Announce value changes to screen readers
- Make thumb large enough to interact with (minimum 44px touch target)

**Keyboard Navigation:**
- **Tab**: Focus on slider
- **Arrow keys**: Adjust value by step
- **Page Up/Down**: Larger increments
- **Home/End**: Jump to min/max
- **Shift+Tab**: Move focus backward

**Screen Reader Support:**
- Announce slider role
- Announce label
- Announce current value
- Announce min/max values
- Announce value changes as user adjusts
- Use aria-valuetext for formatted values ("50 euros" not just "50")
- Indicate orientation (horizontal/vertical)

**Best Practices:**
- Make thumb at least 44px for touch targets
- Provide visible focus indicators
- Ensure track has sufficient contrast
- Don't rely on color alone to show value
- Test with keyboard only
- Test with screen readers
- Provide alternative input method when precision needed
- Show current value visually (in tooltip, label, or separate display)

**Disabled State Accessibility:**

For accessibility considerations, avoid using the disabled state in your designs if possible. When slider is disabled:
- Cannot receive keyboard focus
- May not be announced by some screen readers
- Users may not understand why it's unavailable
- Consider alternatives: hide, explain why unavailable, or make read-only

**Value Announcements:**
- Announce value changes (but not every single step during drag)
- Use aria-valuetext for human-readable format
- Example: value=50, aria-valuetext="50 percent" or "50 euros"

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Slider/Slider.tsx`
