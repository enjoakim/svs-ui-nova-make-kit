# SvS UI (Nova) - Components

This directory contains detailed documentation for each component in the Svenska Spel Design System.

## Component Documentation Structure

Each component file follows Figma's recommended structure:

1. **Usage** - When to use the component, including the other components it's commonly used with or within
2. **Semantic Purpose** - What each component group means
3. **Examples** - Correct and incorrect usage, especially for common mistakes
4. **API** - The API of the component, including its properties

---

## Available Components

- [Accordion](./Accordion.md) - Expandable frame with header for revealing additional content
- [Avatar](./Avatar.md) - Visual representation of users or entities using images, initials, or placeholders
- [Badge](./Badge.md) - Visual indicator for status, notifications, or descriptive labels
- [BetButton](./BetButton.md) - Interactive button for sport betting selections in game coupons
- [BetPrediction](./BetPrediction.md) - Non-interactive display of bet selections and outcomes in paid coupons
- [BottomSheet](./BottomSheet.md) - Mobile-first panel anchored to viewport bottom for complementary content and actions
- [Button](./Button.md) - Clickable element for triggering actions with six emphasis variants
- [Callout](./Callout.md) - Static highlighting element for editorial and marketing messaging with distinctive typography
- [Cards](./Cards.md) - Container holding information and actions related to a single concept or object
- [Checkbox](./Checkbox.md) - Selection control for enabling or disabling multiple independent options
- [ComposableModal](./ComposableModal.md) - Flexible modal container for custom layouts without enforced structure
- [DatePicker](./DatePicker.md) - Date selection component with input field and calendar for single dates or ranges
- [Dialog](./Dialog.md) - Interruptive modal for critical decisions, confirmations, and urgent information
- [FloatingActionBar](./FloatingActionBar.md) - Anchored floating toolbar for persistent access to key end actions and summaries
- [Input](./Input.md) - Text and number entry component with validation and multiple variants
- [Popover](./Popover.md) - Non-modal container for contextual help and supplementary information
- [Pricelabel](./Pricelabel.md) - Fixed visual element emphasizing pricing information with optional edge anchoring
- [RadioGroup](./RadioGroup.md) - Single-selection control for choosing one option from mutually exclusive choices
- [Select](./Select.md) - Space-efficient dropdown for single selection from a list of options
- [Separator](./Separator.md) - Visual divider for organizing content and establishing hierarchy
- [Slider](./Slider.md) - Draggable control for selecting a value from a continuous range
- [Snackbar](./Snackbar.md) - Brief, non-intrusive notification for action confirmations and lightweight feedback
- [Switch](./Switch.md) - Toggle control for enabling or disabling settings with immediate effect
- [Table](./Table.md) - Structured layout for displaying data in rows and columns
- [Tabs](./Tabs.md) - Control for switching between content views within a section
- [TabsMenu](./TabsMenu.md) - Navigation control for switching between different pages or sections
- [ToggleGroup](./ToggleGroup.md) - Selection control with toggleable buttons for form settings and filters
- [Tooltip](./Tooltip.md) - Contextual information overlay providing short descriptions on hover or focus

---

## Adding New Components

When importing a new component from Figma:

1. Create a new `.md` file named after the component (e.g., `Button.md`)
2. Follow the structure outlined above
3. Add a link to the component in this README
4. Add a link to the component in the main `Guidelines.md` file
