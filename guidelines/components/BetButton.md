# Bet Button

Bet buttons register a user's selection as part of a game experience within our sport products.

---

## Usage

**When to use:**

Bet buttons are components specifically made to be part of game coupons within our sport products such as Powerplay, Stryktipset, and Europatipset.

Within our sport products, bet buttons enable users to register a set of bets on which team, player, or horse is expected to win.

**Commonly used with:**
- Game coupons - for sport betting selections
- Match predictions - for win/draw/loss outcomes
- Goal predictions - for number of goals
- System games - for multi-bet combinations
- Statistical displays - showing betting percentages

**Context of Use:**
- Bet buttons can be combined into composite components containing 2 or more bet buttons
- Can be single-select (choose one outcome) or multi-select (choose multiple outcomes) depending on the context and product
- Used exclusively within sport betting products

---

## Semantic Purpose

### Component Structure

#### Container
- **Purpose**: Visual boundary and interactive area
- **Function**: Provides the clickable/tappable area for bet selection

#### Content (Text)
- **Purpose**: Displays the betting option or statistics
- **Function**: Shows what the user is betting on
- **Types**:
  - Outcome labels (1, X, 2)
  - Number of goals
  - Betting statistics (percentages)
  - Mathematical hedging values

#### System Marker
- **Purpose**: Indicates prioritization in system games
- **Function**: Marks selected bets as prioritized in U-system mode
- **When shown**: Only in system games when multiple selections are made

---

## Examples

### ✅ Correct Usage

**Do:**
- Use bet buttons within game coupons for sport products
- Combine buttons into logical groups (2 or more) based on betting options
- Use clear, standard labels (1, X, 2) for win/draw/loss predictions
- Use number labels for goal predictions
- Apply system markers only in U-system game mode
- Allow users to switch between outcome labels and betting statistics
- Provide all standard interaction states (rest, hover, pressed, focus, disabled)

**Good Examples:**
- Group of three buttons for "1, X, 2" match outcome
- Row of buttons for "0-1, 2-3, 4-5, 6-7, 8+" goal ranges
- Buttons showing percentages "34%, 28%, 38%" when statistics view is enabled
- Selected button with "U" marker in system game mode

### ❌ Incorrect Usage

**Don't:**
- Don't use bet buttons outside of sport betting contexts
- Don't mix different content types in the same button group
- Don't show system markers when not in system game mode
- Don't use unclear or non-standard labels
- Don't allow ambiguous selection states

**Common Mistakes:**
- Using bet buttons for general form inputs
- Showing "U" marker when only one option is selected
- Mixing outcome labels with percentages in the same view
- Not providing visual feedback for selection states

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Content/Text (required)
C. System marker (conditional - only in system games)
```

### Properties

#### Value
- **Type**: String | Number
- **Required**: Yes
- **Examples**: "1", "X", "2", "0-1", "2-3", "34%"
- **Description**: The betting option or statistic displayed in the button

#### ContentType
- **Type**: Enum
- **Required**: Yes
- **Options**:
  - `outcome`: Standard outcome labels (1, X, 2)
  - `goals`: Number of goals range
  - `percentage`: Statistics showing how people bet
  - `hedging`: Mathematical hedging values
- **Description**: Determines what type of content is displayed

#### SelectionMode
- **Type**: Enum
- **Required**: Yes
- **Options**:
  - `single`: Only one button can be selected in the group
  - `multi`: Multiple buttons can be selected in the group
- **Description**: Controls whether users can select one or multiple options

#### Selected
- **Type**: Boolean
- **Required**: Yes
- **Default**: false
- **Description**: Whether the bet button is currently selected

#### Prioritized
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether the button is marked as prioritized in U-system mode (shows "U" marker)
- **When to use**: Only in system games when multiple selections are made within a game item

#### Disabled
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether the button is disabled and cannot be interacted with

#### OnSelect
- **Type**: Function
- **Required**: Yes
- **Description**: Callback function triggered when the button is selected/deselected

### Behavior

**Interaction States:**
1. **Rest**: Default, uninteracted state
2. **Hover**: Mouse cursor over the button
3. **Pressed**: Button actively being clicked/tapped
4. **Focus**: Keyboard focus on the button
5. **Disabled**: Button cannot be interacted with

**Selection States:**
1. **Unselected**: Default state, bet not selected
2. **Selected**: User has chosen this betting option
3. **Selected and Prioritized (U-System)**: Selected bet marked as priority in U-system game mode
   - Only shown when U-system is active as game mode
   - Only shown when more than one bet button is selected within a game item
   - Displays "U" marker on the button

**Content Switching:**
- Users can switch the content of bet buttons through coupon settings
- Default view: Outcome labels (1, X, 2) or goal ranges
- Alternative view: Statistics showing betting percentages
- All buttons in a group switch together (not individually)

### Placement

**Guidelines:**
- Place in horizontal rows within game items
- Group by betting type (outcomes, goals, etc.)
- Maintain consistent spacing between buttons
- Align with other game coupon elements
- Ensure buttons are easily tappable/clickable

### Customization

**Content Options:**
- **1, X, 2**: Standard win/draw/loss outcome labels
- **Number of goals**: Goal range labels (0-1, 2-3, 4-5, etc.)
- **Percentages**: Statistics view showing how people are betting
- **Mathematical hedging**: System calculation values

**System Marker:**
- Appears only in U-system game mode
- Shows "U" indicator on selected and prioritized bets
- Helps users identify which bets are marked as priority

---

## Reference Implementation

Imported Figma frame available at: `src/imports/BetButton/BetButton.tsx`
