# Importing The Figma Make Source

Use this checklist when moving source from Figma Make into this repository.

## Target Layout

```txt
src/
  app/
  design-tokens/
    globals/
    primitives/
    themes/
    products/
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
- Preserve the canonical token layout under `src/design-tokens`.
- Move raw generated exports into `src/imports/` or `src/imports/_generated`.
- Do not treat raw imports as the final token API when a normalized token file exists under `src/design-tokens`.
- Do not overwrite `src/SvsUiNova/manifest.ts` without merging statuses.
- Do not overwrite `src/SvsUiNova/MAKE_KIT_INTEGRATION.md` without merging the QA checklist.
- Keep package scripts intact if Figma Make generated them.
- Normalize token file and folder names to lowercase kebab-case where applicable.

## After Import

Run:

```bash
git status --short
rg --files
rg "src/imports|\\.\\./imports|@/imports" src/SvsUiNova
rg "src/design-tokens|@/design-tokens" src
rg "#[0-9a-fA-F]{3,8}|rgb\\(|rgba\\(" src/SvsUiNova/components
```

Then update `src/SvsUiNova/manifest.ts`:

- Components with source + metadata + docs + demo can move toward `ready`.
- Components with source but no metadata stay `partial`.
- Components with docs only stay `docs-only`.
- Components with no source or docs stay `missing`.

Then check token placement:

- `src/design-tokens/globals` for shared global token exports
- `src/design-tokens/primitives` for split primitive token payloads
- `src/design-tokens/themes/svenska-spel` for parent semantic themes
- `src/design-tokens/products/<product>` for per-product modes

If the import changes token structure, update:

- `src/design-tokens/README.md`
- `guidelines/tokens.md`
- `guidelines/foundation/ColorTokenArchitecture.md`
