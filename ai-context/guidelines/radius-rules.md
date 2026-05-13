# Radius Rules

This repo already has a radius model in both `src/SvsUiNova/styles.css` and
`src/styles/theme.css`.

## Actual Repo Radius Values

Detailed tokens:

- `--border-radius/rounded`: `4`
- `--border-radius/rounded-md`: `6`
- `--border-radius/rounded-lg`: `8`
- `--border-radius/rounded-xl`: `12`
- `--border-radius/rounded-full`: `9999`

Theme aliases:

- `--radius`: `4px`
- `--radius-button`: `4px`
- `--radius-card`: `8px`
- `--radius-pill`: `9999px`

Tailwind theme mappings:

- `rounded-sm` maps from `--radius-sm`
- `rounded-md` maps from `--radius-md`
- `rounded-lg` maps from `--radius-lg`
- `rounded-xl` maps from `--radius-xl`
- `rounded-full` maps from `--radius-full`

## Recommended Scale

Use:

- `4` for buttons, inputs, compact controls
- `6` for mid-density control surfaces
- `8` for cards, dialogs, larger panels
- `12` for larger featured surfaces only when the surface size supports it
- `9999` for pills, chips, circular badges, and fully rounded affordances

## Use By Surface Type

- button: `4`
- input/select/checkbox field chrome: `4`
- popover/card: `8`
- dialog/bottom sheet container: `8`
- pills and token chips: `full`

## Nested Container Rule

- Inner surfaces should usually be the same radius or smaller than the outer
  surface.
- Do not put a larger-radius child inside a tighter-radius parent unless it is
  intentionally breaking out visually.

## Density Rule

- Lower-density, larger surfaces can support `8` or `12`.
- Denser controls should stay at `4` or `6`.

## Padding Interaction

- Small radius works best with tighter padding.
- Larger radius needs enough padding to avoid a cramped corner feel.
- If a surface uses `8` radius with only tiny inner padding, it often feels
  visually unbalanced.

## Do

- use `rounded` or `rounded-md` for controls
- use `rounded-lg` for cards and overlays
- keep nested radii consistent

## Do Not

- mix `4`, `6`, `8`, and `12` randomly in one pattern
- use `rounded-xl` on ordinary form controls
- create one-off values like `7px` or `10px` unless there is a documented need
