# Importing The Figma Make Source

Use this checklist when moving source from Figma Make into this repository.

## Target Layout

```txt
src/
  app/
  styles/
  SvsUiNova/
    components/
    guidelines/
    scripts/
    manifest.ts
    MAKE_KIT_INTEGRATION.md
    styles.css
  imports/
    _generated/
guidelines/
package.json
postcss.config.mjs
```

## Rules

- Preserve curated source paths under `src/SvsUiNova`.
- Move raw generated exports into `src/imports/_generated`.
- Do not overwrite `src/SvsUiNova/manifest.ts` without merging statuses.
- Do not overwrite `src/SvsUiNova/MAKE_KIT_INTEGRATION.md` without merging the QA checklist.
- Keep package scripts intact if Figma Make generated them.

## After Import

Run:

```bash
git status --short
rg --files
rg "src/imports|\\.\\./imports|@/imports" src/SvsUiNova
rg "#[0-9a-fA-F]{3,8}|rgb\\(|rgba\\(" src/SvsUiNova/components
```

Then update `src/SvsUiNova/manifest.ts`:

- Components with source + metadata + docs + demo can move toward `ready`.
- Components with source but no metadata stay `partial`.
- Components with docs only stay `docs-only`.
- Components with no source or docs stay `missing`.
