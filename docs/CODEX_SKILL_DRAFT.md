# Codex Skill Draft: SvS UI Nova Make

This is a draft skill. If you want it installed as a real Codex skill later, move this content to:

```txt
~/.codex/skills/svs-ui-nova-make/SKILL.md
```

## Metadata

```yaml
---
name: svs-ui-nova-make
description: Work on the Svenska Spel SvS UI Nova Figma Make Kit. Use when editing Make Kit source, reconciling with the SvS UI (nova) Figma design system, writing component metadata, adding manifest entries, or auditing token/design-system parity.
---
```

## Instructions

# SvS UI Nova Make Kit

Use this skill when working in the `svs-ui-nova-make-kit` repository.

## Primary Goal

Keep the Figma Make Kit aligned with the `SvS UI (nova)` design system.

## Required References

Start with:

- `src/SvsUiNova/manifest.ts`
- `src/SvsUiNova/MAKE_KIT_INTEGRATION.md`
- `docs/FIGMA_MAKE_KIT_AUDIT.md`

## Rules

1. Do not use raw generated Figma exports directly in public component APIs or demos.
2. Keep generated imports under `src/imports/_generated`.
3. Prefer curated components under `src/SvsUiNova/components`.
4. Every ready component needs source file, `.figma.tsx` metadata, docs or explicit docs gap, demo coverage, and token-backed styling.
5. Mark incomplete support explicitly in `manifest.ts`.
6. Do not mark a component `ready` until source, metadata, docs, demo, and token checks pass.
7. Avoid hardcoded colors, spacing, radii, and typography in components when DS tokens exist.
8. Treat `Mode_1.tokens.json` as migration input, not a runtime source of truth.

## Component Status Meaning

- `ready`: safe for Make generation and broad use.
- `partial`: implementation exists but metadata, docs, demo, or token parity is incomplete.
- `docs-only`: guidelines exist but no Make-ready component is confirmed.
- `missing`: known DS component gap.
- `not-supported`: intentionally out of scope.

## Quality Checks

Use these checks after source import or component edits:

```bash
rg "src/imports|\\.\\./imports|@/imports" src/SvsUiNova
rg "#[0-9a-fA-F]{3,8}|rgb\\(|rgba\\(" src/SvsUiNova/components
```

If scripts exist, run the repo's lint/typecheck/test commands.
