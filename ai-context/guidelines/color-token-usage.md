# Color Token Usage

Use semantic color roles first. The repo already provides a semantic layer in
`src/styles/theme.css` and a more detailed token source in
`src/SvsUiNova/styles.css`.

## Preferred Color Layer

Use this order:

1. semantic Tailwind color utilities from `theme.css`
2. semantic CSS variables from `theme.css`
3. detailed DS tokens from `src/SvsUiNova/styles.css`
4. raw primitive colors only when no semantic role exists

## Semantic Roles In This Repo

Theme-level semantic variables include:

- `--background` and `--foreground`
- `--card` and `--card-foreground`
- `--popover` and `--popover-foreground`
- `--primary` and `--primary-foreground`
- `--secondary` and `--secondary-foreground`
- `--muted` and `--muted-foreground`
- `--accent` and `--accent-foreground`
- `--destructive` and `--destructive-foreground`
- `--border`
- `--ring`
- `--sidebar-*`

Detailed DS tokens include:

- `--color/accent/*`
- `--color/status/*`
- `--color/surface/*`
- `--color/surface-inverted/*`
- `--color/layer/*`
- `--color/layer-inverted/*`
- `--color/stroke/*`

## Background / On Background

- Use `bg-background text-foreground` for page and app shells.
- Use `bg-card text-card-foreground` for raised content containers.
- Use `bg-popover text-popover-foreground` for floating contextual surfaces.

## Surface / On Surface

- For structural surfaces, prefer the semantic background classes first.
- For more detailed DS matching, use the `surface` and `layer` token families.
- Distinguish between base page plane, card plane, and nested contrast plane.

## Primary / On Primary

- Use `bg-primary text-primary-foreground` for primary actions.
- Use `bg-secondary text-secondary-foreground` for secondary actions.
- Use the accent variant families only when the component or pattern clearly
  needs a variant surface.

## Border Strength

- Use `border-border` as the default structural border.
- Use detailed `stroke` tokens when you need stronger semantic nuance such as:
  - low
  - medium
  - high
  - accessible
  - status-colored borders

## Status Colors

Detailed DS status groups:

- success
- attention
- important

Use status variants for banners, callouts, badges, and validation messaging.
Do not use status colors decoratively without semantic meaning.

## Interactive States

When state-specific tokens exist, use them instead of inventing custom hover
or pressed values.

Typical DS state suffixes:

- `rest`
- `hover`
- `pressed`
- `selected`

## Do

- use semantic utility classes for most screen-building work
- use detailed DS tokens for precise component-state work
- keep foreground/background pairs semantic and matched

## Do Not

- hardcode brand reds, greys, and borders when semantic tokens already exist
- use primitive product colors directly in normal component implementation
- use raw black overlays or custom neutral greys without checking token support

## Recommendation: Current Gap

The repo still contains hardcoded hex and rgba values in component files.
When generating new code, prefer the semantic layer. Only copy local hardcoded
values when editing an existing component that already relies on them and a
broader refactor is out of scope.
