# Switch

A control that allows users to enable or disable a setting immediately. Switches provide instant feedback and take effect without requiring a confirmation action.

---

## Usage

**When to use:**

Switches allow the user to enable or disable an option. Switches allow users to enable or disable a setting immediately.

**Key Characteristic:**

Typically the expectation is that enabling or disabling the switch will **immediately** change the associated setting.

**Key Use Cases:**

- **Settings and preferences**: Toggle on/off settings
- **Immediate state changes**: Features that activate/deactivate instantly
- **Binary options**: Simple on/off, enable/disable choices
- **Notifications**: Enable/disable notification types
- **Feature toggles**: Turn features on or off
- **Privacy controls**: Enable/disable privacy settings
- **Accessibility options**: Toggle accessibility features

**When NOT to use:**

- **Multiple options**: For a list of options where only one may be enabled at one time, use a radio group
- **Form submission required**: For form settings with multiple options where a confirming action is expected, consider using checkboxes
- **Non-immediate actions**: When change shouldn't take effect until form submission

**Commonly used with:**
- Settings panels - for configuration options
- Forms - for immediate toggles
- Privacy controls - for permission toggles
- Lists - for item-specific toggles
- Feature panels - for enabling/disabling features

---

## Semantic Purpose

### Switch vs Checkbox vs Radio Group

**Switch:**
- **Action**: Immediate effect (no confirmation needed)
- **Selection**: Binary on/off state
- **Use**: Settings that take effect immediately
- **Visual**: Toggle slider
- **When**: Immediate state change, single binary option

**Checkbox:**
- **Action**: Requires confirmation (form submit)
- **Selection**: Multiple independent options can be selected
- **Use**: Form inputs requiring submission
- **Visual**: Check mark in box
- **When**: Multiple selections, confirmation needed

**Radio Group:**
- **Action**: Requires confirmation (form submit)
- **Selection**: One option from mutually exclusive group
- **Use**: Single choice from multiple options
- **Visual**: Circular selection indicator
- **When**: Choose one from set of options, confirmation needed

**Key Distinction:**
The defining characteristic of Switch is **immediate action**. Checkboxes and radio buttons typically require form submission to take effect.

---

## Examples

### ✅ Correct Usage

**Do:**
- Provide a clear, concise label for each switch
- Use for settings that take immediate effect
- Keep label text to one line
- Use description field if extra clarification is required
- Make the entire label clickable
- Provide clear feedback when state changes
- Use for binary on/off options

**Good Examples:**
- "Enable notifications" - immediately toggles notifications
- "Dark mode" - instantly switches theme
- "Wi-Fi" - immediately enables/disables WiFi
- "Auto-save" - turns auto-save on/off instantly
- "Public profile" - makes profile public/private immediately
- "Sound effects" - enables/disables sound instantly

### ❌ Incorrect Usage

**Don't:**
- Don't be unclear or unnecessarily wordy to describe what the setting means
- Don't use for actions requiring confirmation
- Don't make label text exceed one line
- Don't use when change shouldn't be immediate
- Don't use for multiple selection scenarios
- Don't use for mutually exclusive options

**Common Mistakes:**
- Long, wordy label text that wraps to multiple lines
- Using switch for form inputs that need submission
- Using switch for choices that should be confirmed first
- Unclear labels leaving user confused about what will change
- Using switch when checkbox or radio would be more appropriate
- Critical information only in label (should use description)

---

## API

### Anatomy

**Structure:**
```
A. Switch (required) - Toggle control with track and thumb
B. Label (required) - Describes what the switch controls
C. Description (optional) - Additional clarification text
```

**Requirements:**
- At minimum: Switch + Label
- Optional: Description for extra clarification

### Properties

#### Checked
- **Type**: Boolean
- **Required**: No (Yes for controlled component)
- **Default**: false
- **Description**: Whether the switch is in the on (true) or off (false) state
- **Immediate**: State change takes immediate effect

#### DefaultChecked
- **Type**: Boolean
- **Required**: No
- **Description**: Initial checked state for uncontrolled component
- **Note**: Use for uncontrolled switches

#### Label
- **Type**: String
- **Required**: Yes
- **Description**: Text that clearly indicates what option the switch enables or disables
- **Guidelines**: 
  - Keep clear and concise
  - Should not exceed one line
  - Be specific about what changes

#### Description
- **Type**: String
- **Required**: No
- **Description**: Additional text providing extra clarification about the option
- **When to use**: When further explanation is required to communicate what the option means
- **Persistent**: Always visible (unlike tooltips)

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether the switch is disabled and non-interactive
- **Accessibility**: Consider accessibility implications when using disabled state

#### Alignment
- **Type**: Enum
- **Required**: No
- **Default**: `left`
- **Options**:
  - `left`: Switch on left, label on right (default)
  - `right`: Switch on right, label on left
- **Description**: Position of switch relative to label
- **Guidelines**: Use according to design needs, maintain consistency

#### OnChange
- **Type**: Function
- **Required**: Yes (for controlled components)
- **Description**: Callback when switch state changes
- **Parameters**: Event object with new checked state
- **Important**: Called immediately on toggle, setting takes effect instantly

#### Name
- **Type**: String
- **Required**: No
- **Description**: Name attribute for form integration

#### Value
- **Type**: String
- **Required**: No
- **Description**: Value attribute for form integration

#### Required
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether the switch must be in a specific state

#### AriaLabel
- **Type**: String
- **Required**: No (Yes if label is not visible)
- **Description**: Accessible label for screen readers

#### AriaDescribedBy
- **Type**: String
- **Required**: No
- **Description**: ID of element describing the switch (description text)

### States

#### **Unselected (Off)**
- Switch is in off state
- Track shows off appearance
- Thumb positioned at left/start
- Setting is disabled

#### **Selected (On)**
- Switch is in on state
- Track shows on appearance (typically colored)
- Thumb positioned at right/end
- Setting is enabled

#### **Disabled**
- Switch cannot be interacted with
- Reduced opacity
- Cannot be toggled
- Consider accessibility implications before using

#### **Hover**
- Mouse over switch or label
- Visual feedback indicating interactivity
- Entire label area should be hoverable

#### **Focus**
- Switch has keyboard focus
- Focus indicator visible
- Can be toggled with keyboard (Space/Enter)
- Important for keyboard navigation

### Behavior

**Immediate Action:**

1. **Initial State**
   - Switch shows current state (on or off)
   - Label describes what the switch controls
   - Optional description provides context

2. **User Toggles**
   - User clicks/taps switch or label
   - Or uses keyboard (Space/Enter) when focused
   - Switch animates to new state
   - **Setting takes effect immediately**
   - No confirmation needed

3. **State Change**
   - Visual state updates instantly
   - onChange callback fires
   - Associated setting is enabled/disabled
   - User sees immediate feedback

**Interaction Area:**
- Entire label area should be clickable, not just the switch control
- Increases usability and accessibility
- Larger touch target for mobile devices

**Animation:**
- Smooth transition when toggling
- Thumb slides from one position to other
- Track color changes (typically)
- Visual feedback confirms state change

---

## Customization

### Label Text

**Guidelines:**
- Provide clear label to indicate what option the switch enables or disables
- Keep clear and concise
- Content should not exceed one line
- Be specific and unambiguous

**Best Practices:**
- Use action-oriented language
- Make it clear what will happen
- "Enable notifications" not "Notifications"
- "Auto-save drafts" not "Auto-save"

**Examples:**
- Good: "Enable push notifications"
- Bad: "This switch controls whether you will receive push notifications on your device"
- Good: "Dark mode"
- Bad: "Use dark mode theme instead of light mode"

### Description Field

**When to Use:**
- Further explanation is required
- Option needs clarification
- Additional context helps user decide
- Complex settings need detail

**Best Practices:**
- Use only when necessary
- Keep concise but informative
- Don't repeat information from label
- Provide value-added context

**Examples:**
- Label: "Auto-save"
- Description: "Automatically save your work every 5 minutes"

- Label: "Public profile"
- Description: "Allow others to view your profile and activity"

**When NOT to Use:**
- Label is already clear
- Information is obvious
- Creating visual clutter
- Repeating label text

### Alignment

**Left Alignment (Default):**
- Switch on left
- Label on right
- Most common pattern
- Familiar to users
- Easy to scan vertically

**Right Alignment:**
- Switch on right
- Label on left
- Less common
- Use according to design needs
- Maintain consistency within same context

**Consistency:**
- All switches in same list/group should use same alignment
- Don't mix left and right within same context
- Maintain alignment across related settings when possible

---

## Accessibility

**Requirements:**
- Clearly associate labels with switches
- Support keyboard navigation
- Provide clear focus indicators
- Ensure sufficient color contrast
- Use semantic HTML (checkbox role with switch behavior)
- Announce state changes to screen readers
- Make entire label clickable

**Keyboard Navigation:**
- **Tab**: Navigate to switch
- **Space**: Toggle switch state
- **Enter**: Toggle switch state (some implementations)
- **Shift+Tab**: Navigate backward

**Screen Reader Support:**
- Announce switch role
- Announce label text
- Announce current state (on/off, checked/unchecked)
- Announce state changes when toggled
- Announce description text if present
- Use aria-checked to indicate state

**ARIA Attributes:**
- `role="switch"` - Identifies as switch (not checkbox)
- `aria-checked="true|false"` - Current state
- `aria-label` - If label not visible
- `aria-describedby` - Link to description text
- `aria-disabled` - If disabled

**Best Practices:**
- Make entire label clickable (minimum 40px touch target)
- Provide visible focus indicators
- Ensure labels clearly describe what changes
- Use description for additional context
- Test with keyboard only
- Test with screen readers
- Verify color contrast for all states
- Don't rely on color alone to indicate state
- Provide immediate feedback when state changes
- Announce state changes to assistive technology

**State Communication:**
- Visual: Track color and thumb position
- Screen reader: aria-checked attribute
- Don't rely on color alone
- Provide clear visual distinction between on/off

**Disabled State Considerations:**
- Some screen readers don't announce disabled elements
- User may not understand why switch is unavailable
- Consider alternatives to disabling (hide, explain why unavailable)

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Switch/Switch.tsx`
