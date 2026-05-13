# CSS Variable Usage

This repo uses two token-facing layers:

- `src/styles/theme.css` for semantic app-facing variables and Tailwind theme
  mapping
- `src/SvsUiNova/styles.css` for detailed design-system tokens

Use the semantic layer first.

## Tailwind-First Usage

Because `src/styles/theme.css` maps semantic variables into Tailwind 4 theme
tokens, prefer utility classes such as:

- `bg-background`
- `text-foreground`
- `bg-card`
- `text-card-foreground`
- `bg-primary`
- `text-primary-foreground`
- `border-border`
- `text-muted-foreground`
- `rounded-md`
- `rounded-lg`

This is the cleanest path for most AI-generated UI in this repo.

## Direct CSS Variable Usage

Use direct CSS variables when the needed token is not available through a
semantic utility.

Examples:

```css
.custom-surface {
  background: var(--card);
  color: var(--card-foreground);
  border-radius: var(--radius-card);
}
```

```tsx
style={{ boxShadow: 'var(--elevation-sm)' }}
```

## Unitless Token Warning

Many tokens in `src/SvsUiNova/styles.css` are unitless numeric values, for
example:

- `--gap/gap-4: 16`
- `--padding/p-4: 16`
- `--font-size/text-base: 16`

When using those directly in CSS, add units with `calc()`:

```css
.stack {
  gap: calc(var(--gap\/gap-4) * 1px);
  padding: calc(var(--padding\/p-4) * 1px);
}
```

Do not assume they already include `px`.

## Escaped Token Names

Detailed DS tokens use escaped names such as:

- `var(--color\/surface\/fg\/default)`
- `var(--gap\/gap-4)`
- `var(--border-radius\/rounded-lg)`

Use the exact token name when referencing them.

## Inline Style Guidance

Inline styles are acceptable when:

- a DS token exists but is not mapped into a utility
- a one-off optical adjustment is needed
- a shadow, exact token, or state value must match DS output closely

Inline styles are not the default for normal layout or colors.

## Fallback Guidance

Prefer no fallback when the token is required by the design system and expected
to exist.

Use a fallback only when:

- you are bridging generated content into a less controlled environment
- the semantic variable may legitimately be absent

Example:

```css
color: var(--foreground, #1b1918);
```

## Do

- use semantic theme utilities first
- use `calc(... * 1px)` for unitless spacing and sizing tokens
- use repo-defined radius and color variables instead of one-off values

## Do Not

- write `gap: var(--gap-4)` because that token does not exist here
- use raw hex values when `bg-primary`, `border-border`, or similar semantic
  utilities already exist
- pull runtime UI colors from `src/imports/Mode_1.tokens.json`

## Common AI Mistakes In This Repo

- assuming design-token variables are all pixel-valued strings
- using `src/imports` artifacts as the stable token API
- mixing semantic theme variables and raw hardcoded colors in the same small
  component
- creating new utility classes for tokens that are already exposed through
  Tailwind theme mapping
