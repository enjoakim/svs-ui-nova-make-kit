# Manifests

This folder is reserved for future machine-readable context files that can help
AI systems reason about the design system without re-parsing the full repo.

## What Could Live Here Later

- component surface summaries derived from `src/SvsUiNova/component-manifest.json`
- token source indexes derived from `src/design-tokens`
- import-surface summaries for components, brand assets, and examples
- pattern manifests that map UI tasks to preferred repo components

## Existing Repo Precedents

The repo already suggests manifest-style data in:

- `src/SvsUiNova/component-manifest.json`
- `src/SvsUiNova/manifest.ts`

Use those as the source of truth if future AI manifests are added here.

Do not invent new machine-readable manifests unless they are generated from
real repo structure and kept in sync.
