# Calibration Plan

This plan describes what needs to happen to bring the SvS UI Nova Figma Make Kit into strong alignment with the `SvS UI (nova)` design system.

## Calibration Goal

The Make Kit should:

- expose the same component language as the Figma design system
- use canonical design-system tokens
- make support status explicit
- avoid hidden fallbacks to generated or stale assets
- be predictable for both designers and Codex

## Phase 1: Import And Normalize Source

Goal: get the real Make source into this repo without losing structure.

Tasks:

- Add the Figma Make source files to this repository.
- Preserve curated files under `src/SvsUiNova`.
- Move raw generated Figma exports into `src/imports/_generated`.
- Keep generated token files as migration inputs only.
- Confirm which file is the canonical token source:
  - `src/SvsUiNova/styles.css`
  - `src/styles/theme.css`

Exit criteria:

- The repo contains the actual Make source tree.
- No generated files sit next to curated public components.
- The source tree matches `docs/FIGMA_MAKE_SOURCE_IMPORT.md`.

## Phase 2: Component Parity Audit

Goal: make the support map fully explicit.

Tasks:

- Reconcile imported files against `src/SvsUiNova/manifest.ts`.
- Confirm whether each listed component actually exists in source.
- Update every component status:
  - `ready`
  - `partial`
  - `docs-only`
  - `missing`
  - `not-supported`
- Add newly discovered components if they were omitted.

Highest-priority components:

- Button
- IconButton
- Input
- Checkbox
- RadioGroup
- Switch
- Tabs
- Dialog
- Select
- Textarea
- Combobox

Exit criteria:

- The manifest reflects reality.
- There are no ambiguous or guessed component states.

## Phase 3: Metadata Coverage

Goal: make Figma Make understand the components properly.

Tasks:

- Add `.figma.tsx` files for all implemented components missing metadata.
- Define props, variants, examples, and usage notes.
- Align metadata naming with the Figma DS component names.
- Ensure metadata reflects real component behavior, not aspirational docs.

Top priority metadata gaps:

- Input
- Checkbox
- RadioGroup
- Switch
- Tabs
- TabsMenu
- Dialog
- BottomSheet
- Popover
- Tooltip
- Snackbar
- Card
- Callout

Exit criteria:

- Every `ready` component has metadata.
- Every `partial` component has a known reason for remaining partial.

## Phase 4: Token Calibration

Goal: remove styling drift.

Tasks:

- Verify all curated components use design-system token CSS variables.
- Search for hardcoded color, spacing, radius, and typography values.
- Replace hardcoded values with token-backed values where possible.
- Confirm spacing, typography, and semantic color usage follows the DS model.

Checks:

```bash
rg "#[0-9a-fA-F]{3,8}|rgb\\(|rgba\\(" src/SvsUiNova/components
rg "padding:|margin:|gap:|border-radius:" src/SvsUiNova/components
```

Exit criteria:

- No accidental hardcoded design values remain in curated components.
- Styling uses the canonical token layer.

## Phase 5: Generated Import Quarantine

Goal: stop stale assets from quietly becoming the product.

Tasks:

- Search for direct imports from `src/imports`.
- Replace those imports with curated wrappers.
- Remove duplicate public components that are just generated exports.
- Keep only migration/reference assets under `src/imports/_generated`.

Check:

```bash
rg "src/imports|\\.\\./imports|@/imports" src/SvsUiNova
```

Exit criteria:

- Public Make Kit components do not depend directly on generated imports.

## Phase 6: Demo And Quality Surface

Goal: make the kit easy to validate.

Tasks:

- Ensure every `ready` component appears in `AllComponentsDemo`.
- Add representative states for each component:
  - default
  - disabled
  - error
  - selected
  - loading
  - open
- Use the demo to spot layout, token, and metadata mismatches.

Exit criteria:

- `AllComponentsDemo` functions as a trustworthy visual regression surface.

## Phase 7: Close The Known Gaps

Goal: deal with important missing DS areas.

Likely gaps to resolve or explicitly defer:

- Textarea
- Combobox
- Bet button
- Bet prediction
- Price Label
- Side Sheet
- Composable Modal
- Header variants
- Gamesmenu variants
- Usermenu variants

Each gap must end in one of two outcomes:

- implementation added
- explicit `docs-only`, `missing`, or `not-supported` status with notes

## Definition Of "Perfection"

We can call the kit calibrated when:

- the repo contains the actual Make source
- the manifest is trustworthy
- every ready component has `.figma.tsx`
- token usage is canonical
- generated imports are quarantined
- demo coverage is complete for ready components
- missing support is explicit instead of hidden

## Suggested Execution Order

1. Import the real Make source.
2. Reconcile the manifest.
3. Add metadata to high-priority components.
4. Calibrate tokens.
5. Quarantine generated imports.
6. Expand demo coverage.
7. Resolve or defer remaining DS gaps explicitly.
