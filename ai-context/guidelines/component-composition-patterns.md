# Component Composition Patterns

Use existing components and subcomponents to assemble screens. Prefer repo
patterns over bespoke markup.

## Cards

Preferred structure:

- `Card`
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardContent`
- `CardFooter`

Spacing rules:

- header copy spacing: tight, usually `6` to `8`
- content groups: `16`
- footer actions: `8`

Hierarchy rules:

- title and description stay in the header
- primary content goes in `CardContent`
- actions go in `CardFooter`

Common mistakes:

- placing large action groups directly under the title without a content layer
- mixing unrelated content blocks with no internal grouping

## Forms

Preferred structure:

- section heading
- grouped fields in a stack or responsive grid
- helper and validation text owned by each field
- submit actions separated from field body

Use existing components:

- `Input`
- `Select`
- `Checkbox`
- `RadioGroup`
- `Switch`
- `DatePicker`
- `Button`

Spacing rules:

- field stack gap: `16`
- field group gap: `24`
- submit block separation: `24` to `32`

Common mistakes:

- mixing helper text outside the field component
- packing too many unrelated fields into a single visual group

## Settings Panels

Preferred structure:

- `Card` as the section container
- heading and short explanation in header
- content rows inside `CardContent`
- action or save controls in footer

Use `Switch`, `Checkbox`, `RadioGroup`, or `Select` instead of ad hoc toggles.

## Pricing Blocks

Preferred structure:

- `Card`
- title
- short value statement
- one prominent value
- supporting bullets or meta
- one primary CTA and one secondary action at most

Hierarchy rules:

- one clear price/value focal point
- supporting text stays visually subordinate

Common mistakes:

- multiple equal-weight numbers
- too many badges and accents competing with the value

## Dashboard Sections

Preferred structure:

- section heading
- optional lead or filters
- grid of cards or a table/list surface

Recommended pattern:

- `space-y-6` inside the section
- `grid gap-6` for cards
- `Table` for structured repeated records

Common mistakes:

- using cards for dense tabular content that should be a table
- collapsing hierarchy by giving every card the same visual emphasis

## Tables And Lists

Preferred structure:

- `Table`
- `TableHeader`
- `TableBody`
- `TableRow`
- `TableHead`
- `TableCell`

Spacing rules:

- default cell padding: `16`
- meta or badge clusters inside a cell: `8`

Common mistakes:

- hand-rolling table markup when the repo table exists
- mixing card spacing and table spacing in the same data pattern

## Empty States

Preferred structure:

- title
- short description
- one primary action
- optional secondary action
- optional icon or illustration

Use a card or centered content block depending on context.

Do not:

- write long paragraphs
- use multiple equally strong actions

## Dialogs And Drawers

Repo surfaces:

- `Dialog`
- `BottomSheet`

Preferred dialog structure:

- title
- short description
- content body if necessary
- `DialogFooter` for actions

Spacing rules:

- dialog internal gap is large enough already; do not compress it aggressively
- action gap should stay around `8`

Common mistakes:

- putting long-form page content into dialogs
- mixing inline actions into the title block instead of the footer

## Filter Bars

Preferred structure:

- `TabsMenu` or `ToggleGroup` for mode/filter switching
- `Select` for compact single filters
- `Input` for search when appropriate
- `Button` only for clear apply/reset moments

Spacing rules:

- inline filter control gap: `8` to `16`
- bar to results spacing: `16` to `24`

Common mistakes:

- using too many equal-priority controls in one row
- mixing navigation tabs and action buttons without visual grouping

## Recommendation: Use Demo Patterns Carefully

`src/app/ComponentDemo.tsx` and `src/app/AllComponentsDemo.tsx` are useful
structural references, but they are demos, not product screens. Reuse their
component combinations and spacing logic, not their literal showcase layout.
