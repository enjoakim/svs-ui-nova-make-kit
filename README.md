# SvS UI Nova Make Kit

Repository for connecting the Svenska Spel `SvS UI (nova)` design system to a Figma Make Kit.

## Purpose

This repo is the source-of-truth workspace for:

- Make-ready component wrappers
- Figma Make component metadata
- design-system parity tracking
- token usage rules
- QA checklists for keeping the Make Kit aligned with the Figma design system

## Current State

The repository has been initialized with a manifest and integration checklist. The next step is to add or export the actual Figma Make source files into this repo.

## Next Step

Copy the exported Make source into this repository using the target structure
described in `docs/FIGMA_MAKE_SOURCE_IMPORT.md`.

Recommended landing zones:

- `src/SvsUiNova/components/` for curated components and `.figma.tsx`
- `src/imports/_generated/` for raw generated exports
- `src/styles/` for shared style and token files
- `src/app/` for demo surfaces such as `App.tsx` and `AllComponentsDemo.tsx`
- `guidelines/` for usage and authoring guidance

## Key Files

- `src/SvsUiNova/manifest.ts` tracks component coverage and readiness.
- `src/SvsUiNova/MAKE_KIT_INTEGRATION.md` describes the quality gate.
- `docs/FIGMA_MAKE_KIT_AUDIT.md` captures the first audit findings.
- `docs/CALIBRATION_PLAN.md` turns the audit into an execution plan.
- `docs/CODEX_SKILL_DRAFT.md` is a draft Codex skill for future repeatable work.

## Recommended Flow

1. Add the Make Kit source files to this repository.
2. Keep curated components under `src/SvsUiNova/components`.
3. Keep generated Figma exports quarantined under `src/imports/_generated`.
4. Update `src/SvsUiNova/manifest.ts` whenever component support changes.
5. Make every `ready` component render in `AllComponentsDemo`.
