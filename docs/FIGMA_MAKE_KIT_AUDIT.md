# Figma Make Kit Audit

Date: 2026-05-07

Make Kit:
https://www.figma.com/make/rCQbYmSkHVcvlC97il4nwB/SvS-UI--nova-

Design system:
https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-

## Current Findings

The full Figma Make source has now been imported into this repo. The connector
limitations still apply for direct Make edits, but we now have the real source
tree locally and can calibrate it as a normal codebase.

Imported source includes:

- App shell files: `App.tsx`, `ComponentDemo.tsx`, `AllComponentsDemo.tsx`
- Style files: `index.css`, `fonts.css`, `globals.css`, `tailwind.css`, `theme.css`
- DS package files under `src/SvsUiNova`
- Root scripts under `scripts`
- Guidelines under both `guidelines` and `src/SvsUiNova/guidelines`
- Review-framework files under `guidelines`, including:
  - `USABILITY_HEURISTICS.md` and `usability-heuristics.json`
  - `UX_UI_INDUSTRY_STANDARDS.md` and `ux-ui-industry-standards.json`
  - `COLOR_60_30_10_RULE.md` and `color-60-30-10-rule.json`
- Generated imports under `src/imports`
- A generated token artifact: `src/imports/Mode_1.tokens.json`

## Metadata Coverage

Actual `.figma.tsx` coverage is much stronger than the first remote index
implied:

- 26 `.figma.tsx` files are present under `src/SvsUiNova/components`
- `Progress` now has a Code Connect template and matches a published `progress`
  component set in the design system
- Implemented public components without `.figma.tsx` include:
  - `Skeleton`
  - `Spinner`
- Helper or internal files without `.figma.tsx` include:
  - `Icon`
  - `IconDynamic`
  - `generated-icon-data`

This means the main metadata gap is no longer "missing metadata everywhere".
It is now more specific: finish node-id wiring, decide which remaining
components should be Make-exposed, and tighten the manifest.

## Structural Strengths

- A real component manifest already exists:
  - `src/SvsUiNova/component-manifest.json`
- Figma Code Connect config already exists:
  - `figma.config.json`
- A substantial DS component surface is already implemented in source
- The repo now versions both human-readable and machine-readable design review
  guidance, which gives the Make Kit a clearer shared quality baseline
- Root scripts exist for manifest validation, icon extraction, and Code Connect support

## High-Priority Gaps

- Reconcile `src/SvsUiNova/manifest.ts` with the imported source and the JSON manifest
- Decide whether `Skeleton` and `Spinner` should get Code Connect metadata
- Stop direct generated-import dependencies in curated surfaces:
  - `src/app/AllComponentsDemo.tsx`
  - `src/SvsUiNova/components/generated-icon-data.tsx`
- `IconShowcase` and `IconDynamic` have already been rerouted away from direct
  raw `Icons` imports and now use curated generated icon data instead
- Reduce token drift caused by hardcoded colors and shadows in curated components and demos
- Make missing DS components explicit, especially:
  - `Textarea`
  - `Combobox`
  - `SideSheet`
  - `BetButton`
  - `BetPrediction`
  - `Pricelabel`
  - `ComposableModal`

## Recommended Next Steps

1. Reconcile the TypeScript manifest with the imported JSON manifest and actual files.
2. Decide whether `Skeleton` and `Spinner` belong in the public Make surface.
3. Replace the remaining direct imports from `src/imports` with curated wrappers where possible.
4. Normalize hardcoded design values toward the canonical token layer.
