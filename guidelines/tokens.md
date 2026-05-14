# Token Usage Guidelines

This file explains how token sources are organized in the repository and how to
choose the right layer when designing or implementing UI.

## Source Order

Use token layers in this order:

1. semantic theme tokens
2. product theme tokens
3. primitive tokens
4. raw color values only as a last resort

In repo terms, that means:

1. `src/design-tokens/themes/`
2. `src/design-tokens/products/`
3. `src/design-tokens/primitives/`
4. never default to hardcoded hex or rgba values in curated components

## Folder Roles

- `src/design-tokens/globals/`: shared cross-product token sources
- `src/design-tokens/primitives/`: split primitive color payloads by product or group
- `src/design-tokens/themes/svenska-spel/`: parent semantic theme modes
- `src/design-tokens/products/<product>/`: product-specific theme modes
- `src/imports/`: raw migration input from Figma, not the preferred long-term API

## Bridge Files

The checked-in token JSON files are the source of truth. The CSS files below
are bridge layers derived from that source:

- `src/styles/theme.css`: semantic runtime bridge used by app theming and
  Tailwind-style utilities
- `src/SvsUiNova/styles.css`: low-level component token bridge and typography
  utility layer

Do not treat either CSS file as the canonical authoring source when the token
value already exists under `src/design-tokens/`.

## Naming Rules

- Use lowercase kebab-case for token folders and exported token files.
- Keep theme mode files normalized to:
  - `light.tokens.json`
  - `light-secondary.tokens.json`
  - `dark.tokens.json`
  - `vibrant.tokens.json`
- Preserve product slugs consistently across docs, folder names, and imports.

## Decision Rules

- If the UI role is semantic, choose a theme token first.
- If the UI needs a product-specific expression, choose the matching product theme token.
- If the work is token-authoring or token-audit work, trace back to primitives and globals.
- If a component needs a one-off hardcoded value, treat that as a cleanup candidate and document why.

## Correct Usage

- Use semantic roles such as accent, surface, layer, stroke, and status.
- Keep product switching at the theme layer instead of changing component logic.
- Prefer normalized token files under `src/design-tokens` over ad hoc imports from `src/imports`.

## Avoid

- importing raw generated token files directly into curated component source when a normalized equivalent exists
- introducing new hardcoded colors in Make-facing components
- inventing product-specific token names that break the shared folder structure

## Related Docs

- [Color System](./foundation/ColorSystem.md)
- [Color Token Architecture](./foundation/ColorTokenArchitecture.md)
- [src/design-tokens/README.md](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/src/design-tokens/README.md)
- [src/design-tokens/index.json](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/src/design-tokens/index.json)
