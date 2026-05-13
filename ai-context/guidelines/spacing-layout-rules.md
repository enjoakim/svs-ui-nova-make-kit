# Spacing And Layout Rules

This repo already suggests a 4px-based scale through `--gap/*` and
`--padding/*` tokens in `src/SvsUiNova/styles.css`. Use that scale consistently.

## Default Scale

Use these values as the default working scale:

- `4`: micro spacing inside tight controls
- `8`: default inline gap inside controls and small stacks
- `12`: compact vertical grouping
- `16`: default card padding and standard control padding
- `24`: section-internal spacing and dialog spacing
- `32`: larger container padding and wider layout rhythm
- `48`: major section spacing
- `64+`: page rhythm and large feature separation

## Token Mapping

Repo token equivalents include:

- `--gap/gap-1` = `4`
- `--gap/gap-2` = `8`
- `--gap/gap-3` = `12`
- `--gap/gap-4` = `16`
- `--gap/gap-6` = `24`
- `--gap/gap-8` = `32`
- `--gap/gap-12` = `48`

And similarly for `--padding/*`.

## Layout Rules

- Use outer layout spacing for page structure.
- Use container padding for interior breathing room.
- Use gaps for sibling relationships inside a container.
- Do not use the same spacing value for every layer of the layout.

## Inner Gap vs Padding vs Outer Spacing

- Outer spacing separates sections from each other.
- Container padding separates content from its container edge.
- Inner gap separates related siblings.

Good default:

- page section spacing: `48` to `64`
- card padding: `16` or `24`
- standard control gap: `8`
- grouped form fields: `16`
- card header text spacing: `6` to `8`

## Section Spacing

Repo demos suggest:

- `space-y-12` for medium page rhythm
- `space-y-16` for large page rhythm
- `space-y-6` inside sections

Use:

- `48` for standard section separation
- `64` for major section breaks
- `24` inside section groups

## Stack Spacing

Use vertical stacks intentionally:

- dense metadata stacks: `4` to `8`
- form label plus field plus helper text: `8`
- related content blocks inside a card: `16`
- card section groups: `24`

## Card Padding

Current component defaults:

- `CardHeader`: `p-4`
- `CardContent`: `p-4 pt-0`
- `CardFooter`: `p-4 pt-0`

Use these as the baseline.

Recommendation:

- compact card: `16`
- richer card, dialog, or settings surface: `24`
- do not exceed `32` unless the card is acting like a page section

## Form Spacing

Use:

- `8` between label and field
- `8` between field and helper/error text
- `16` between related fields
- `24` between field groups
- `32` between major form sections

For grid forms:

- prefer `gap-4` or `gap-6`
- collapse to one column on smaller widths

## Table And List Spacing

Repo defaults:

- table head height: `48`
- cell padding: `16`

Use:

- `16` cell padding as the default
- `8` to `12` row-internal inline spacing for chips, meta, or actions
- avoid cramped tables with less than `12` cell padding unless density is a
  deliberate requirement

## Responsive Behavior

- Reduce column count before reducing spacing too aggressively.
- Preserve readable interior padding on cards and dialogs.
- Keep `16` as the safe minimum for most surface padding on mobile.
- Stack actions vertically before squeezing them into a crowded horizontal row.

## Good Usage

- card with `p-4`, internal stack `gap-4`, footer actions `gap-2`
- form grid with `gap-4` and field-group `space-y-6`
- page layout with `max-w-*`, side padding, and `space-y-12` or `space-y-16`

## Bad Usage

- using `8` for page section spacing
- using `32` for every card, every field gap, and every section regardless of
  density
- nesting `p-6` inside `p-6` inside `p-6` without a reason
- mixing arbitrary values like `13px`, `18px`, `22px` where scale tokens exist
