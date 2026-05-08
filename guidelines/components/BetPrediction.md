# Bet Prediction

Bet predictions display a user's selections within a paid coupon and the outcomes of the associated games.

---

## Usage

**When to use:**

Bet predictions are non-interactive components used to display the selections a customer has made within a coupon, along with the outcome of those selections based on the game results. They are designed specifically for use in game coupons within our sports products, such as Powerplay.

**Key Characteristics:**
- **Non-interactive**: Display-only component, not for making new selections
- **Post-purchase**: Shows selections after a coupon has been paid for
- **Outcome display**: Indicates whether predictions were correct or incorrect based on game results

**Commonly used with:**
- Paid coupon views - showing completed bet selections
- Coupon history - reviewing past bets
- Results pages - displaying outcomes of finished games
- Bet tracking - monitoring active and completed bets
- Game summaries - showing all predictions for a game

---

## Semantic Purpose

### Component Types

There are four types of bet predictions, each representing a different selection state:

#### 1. **Unselected**
- **Purpose**: Shows outcomes that were not chosen by the user
- **Visual**: Minimal styling, indicates "not my selection"
- **When shown**: Displays all possible outcomes, highlighting what the user didn't bet on

#### 2. **Selected**
- **Purpose**: Standard user selection
- **Visual**: Emphasized styling to show "this is what I chose"
- **When shown**: Default selection display in most game modes

#### 3. **Selected and Prioritized (U-System)**
- **Purpose**: Shows prioritized selections in U-system games
- **Visual**: Selected styling plus "U" system marker
- **When shown**: Only in U-system game mode when selections are marked as priority
- **Function**: Indicates which bets are prioritized in the system play

#### 4. **Selected (Free Reduction)**
- **Purpose**: Shows selections made using free reduction feature
- **Visual**: Selected styling plus adaptive fill
- **When shown**: Only when free reduction game mode is active
- **Function**: Differentiates free reduction selections from standard selections

### Component Elements

#### Container (Required)
- **Purpose**: Visual boundary for the prediction
- **Function**: Provides structure and styling for the prediction display

#### Content/Text (Required)
- **Purpose**: Displays the prediction value
- **Examples**: "1", "X", "2", goal ranges, or other betting outcomes
- **Function**: Shows what was (or wasn't) selected

#### System Marker (Conditional)
- **Purpose**: Indicates U-system prioritization
- **Visual**: "U" marker overlay
- **When shown**: Only in system games when selections are prioritized

#### Adaptive Fill (Conditional)
- **Purpose**: Indicates free reduction selections
- **Visual**: Special fill pattern or styling
- **When shown**: Only in free reduction game mode

---

## Examples

### ✅ Correct Usage

**Do:**
- Use bet predictions to display selections in paid coupons
- Show all possible outcomes (both selected and unselected)
- Display the correct outcome status (correct/incorrect) based on game results
- Apply system markers only in U-system game mode
- Apply adaptive fill only in free reduction game mode
- Use appropriate size (small/medium) based on context
- Maintain visual hierarchy between selected and unselected predictions

**Good Examples:**
- Row showing "1 X 2" with "1" selected and marked as correct (green)
- Predictions showing user selected "X" but "1" was correct (showing incorrect state)
- U-system predictions with "U" marker on prioritized selections
- Free reduction selections with adaptive fill styling

### ❌ Incorrect Usage

**Don't:**
- Don't use bet predictions for making new selections (use BetButton instead)
- Don't show system markers when not in system game mode
- Don't show adaptive fill when not in free reduction mode
- Don't make bet predictions interactive or clickable
- Don't mix sizes inconsistently within the same coupon
- Don't hide unselected outcomes (show full context)

**Common Mistakes:**
- Making bet predictions clickable (they should be display-only)
- Showing "U" marker on all selected items instead of only prioritized ones
- Using in active betting flows instead of completed/paid coupons
- Not clearly distinguishing between correct and incorrect outcomes
- Missing outcome status indicators after game results are available

---

## API

### Anatomy

**Structure:**
```
A. Container (required)
B. Content/Text (required)
C. System marker (conditional - only in system games)
D. Adaptive fill (conditional - only in free reduction)
```

### Properties

#### Value
- **Type**: String | Number
- **Required**: Yes
- **Examples**: "1", "X", "2", "0-1", "2-3"
- **Description**: The betting outcome value displayed

#### Type
- **Type**: Enum
- **Required**: Yes
- **Options**:
  - `unselected`: Outcome not chosen by user
  - `selected`: Standard user selection
  - `selected-prioritized`: Selection with U-system priority
  - `selected-free-reduction`: Selection using free reduction
- **Description**: Determines the visual treatment and markers

#### Status
- **Type**: Enum
- **Required**: Yes
- **Options**:
  - `default`: Game not yet completed or results pending
  - `correct`: User's prediction was correct
  - `incorrect`: User's prediction was incorrect
- **Description**: Shows the outcome based on game results

#### Size
- **Type**: Enum
- **Required**: Yes
- **Options**:
  - `small`: Compact display
  - `medium`: Standard display
- **Description**: Controls the visual size of the prediction component

#### ShowSystemMarker
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to display the "U" system marker
- **When to use**: Only in U-system game mode for prioritized selections

#### ShowAdaptiveFill
- **Type**: Boolean
- **Required**: No
- **Default**: false
- **Description**: Whether to display the adaptive fill styling
- **When to use**: Only in free reduction game mode

### Behavior

**Status Display:**

The bet prediction component is able to show the selection and the outcome of the selection based on the game result:

1. **Default**
   - Shown when: Game has not yet completed or results are pending
   - Visual: Standard selected/unselected styling
   - Purpose: Displays predictions without outcome indication

2. **Correct**
   - Shown when: User's prediction matches the actual game result
   - Visual: Success/positive styling (typically green)
   - Purpose: Confirms the user predicted correctly

3. **Incorrect**
   - Shown when: User's prediction does not match the actual game result
   - Visual: Error/negative styling (typically red or muted)
   - Purpose: Shows the user's prediction was wrong

**Non-Interactive:**
- Bet predictions are display-only components
- They do not respond to clicks, taps, or other interactions
- They have no hover, pressed, or focus states
- They only show information, they don't accept input

### Placement

**Guidelines:**
- Place in paid coupon displays
- Group by game item (show all outcomes together)
- Align with corresponding game information
- Maintain consistent spacing with other coupon elements
- Use in coupon history and results views

### Customization

**Size Selection:**
- **Small**: Use in compact views, mobile layouts, or when space is limited
- **Medium**: Use in standard desktop views or when emphasis is needed

**Status Styling:**
- Apply success styling for correct predictions
- Apply error or muted styling for incorrect predictions
- Keep default styling neutral for pending results

**Game Mode Indicators:**
- Show "U" marker only in U-system mode for prioritized bets
- Show adaptive fill only in free reduction mode
- Don't show mode indicators outside their respective contexts

---

## Relationship to BetButton

**BetButton vs BetPrediction:**
- **BetButton**: Interactive component for making bet selections
- **BetPrediction**: Non-interactive component for displaying past selections and outcomes

**Usage Flow:**
1. User makes selections using **BetButton** components
2. User pays for the coupon
3. Selections are displayed using **BetPrediction** components
4. After game results are available, **BetPrediction** shows correct/incorrect status

---

## Reference Implementation

Imported Figma frame available at: `src/imports/BetPrediction/BetPrediction.tsx`
