# SvS UI Nova Make Kit

Repository for connecting the Svenska Spel `SvS UI (nova)` design system to:

- Figma Make
- Codex and Figma-assisted workflows
- design-system documentation and review guidance
- theme-aware product implementation across the Svenska Spel portfolio

## Purpose

This repo is the working source of truth for:

- curated component source under `src/SvsUiNova`
- Figma Make metadata and readiness tracking
- design guidelines, UX review frameworks, and authoring rules
- design token structure and theme organization
- alignment between Figma libraries, Make Kit source, and code

## Current Structure

Core landing zones:

- `src/SvsUiNova/components/` for curated components and `.figma.tsx`
- `src/SvsUiNova/manifest.ts` for Make Kit coverage and readiness
- `src/design-tokens/` for the canonical token folder structure
- `src/imports/` for raw or generated migration inputs from Figma
- `src/styles/` for shared app-level styling entrypoints
- `src/app/` for demo and verification surfaces
- `guidelines/` for design, UX, and writing guidance
- `docs/` for audits, calibration notes, and import/sync procedures

## Design Token Model

The repository uses a four-part token model:

1. `globals/` for shared global colors
2. `primitives/` for product-oriented primitive color families
3. `themes/` for parent theme collections such as `svenska-spel`
4. `products/` for per-product theme overrides and theme-mode variants

For detailed structure guidance, see [src/design-tokens/README.md](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/src/design-tokens/README.md).

## Working Rules

- Keep curated component source separate from raw Figma exports.
- Treat `src/design-tokens/` as the canonical checked-in token structure.
- Treat `src/imports/` as migration input, not the final design-token API.
- Update `src/SvsUiNova/manifest.ts` and `src/SvsUiNova/component-manifest.json` when public Make Kit support changes.
- Keep guidelines versioned with the same repo so design and code use the same quality rules.

## Key Files

- [src/SvsUiNova/manifest.ts](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/src/SvsUiNova/manifest.ts)
- [src/SvsUiNova/MAKE_KIT_INTEGRATION.md](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/src/SvsUiNova/MAKE_KIT_INTEGRATION.md)
- [src/design-tokens/README.md](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/src/design-tokens/README.md)
- [docs/FIGMA_MAKE_SOURCE_IMPORT.md](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/docs/FIGMA_MAKE_SOURCE_IMPORT.md)
- [docs/FIGMA_MAKE_KIT_AUDIT.md](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/docs/FIGMA_MAKE_KIT_AUDIT.md)
- [guidelines/Guidelines.md](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/guidelines/Guidelines.md)
