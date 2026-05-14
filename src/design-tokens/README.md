# Design Tokens

This folder is the canonical checked-in token structure for the SvS UI Nova
Make Kit.

It mirrors the organization used in the latest Figma Make Kit export while
keeping raw import data separate from curated source.

## Structure

```text
src/design-tokens/
+-- index.json
+-- globals/
+   +-- colors.json
+-- primitives/
|   +-- index.json
|   +-- _metadata.json
|   +-- colors/
|       +-- products/
+-- themes/
|   +-- svenska-spel/
|       +-- light.tokens.json
|       +-- light-secondary.tokens.json
|       +-- dark.tokens.json
|       +-- vibrant.tokens.json
+-- products/
|   +-- index.json
|   +-- bingo/
|   +-- casino/
|   +-- ...
```

## Layer Model

Use these folders as separate layers in the token pipeline:

1. `globals/`
2. `primitives/`
3. `themes/svenska-spel/`
4. `products/<product>/`

This keeps the mapping between Figma variables, design documentation, and code
explicit.

## Working Rules

- Put normalized token payloads here, not in `src/imports/`.
- Keep folder names lowercase and kebab-case.
- Keep theme mode filenames normalized to `light`, `light-secondary`, `dark`,
  and `vibrant`.
- Preserve the parent-theme model where `svenska-spel` acts as the semantic
  baseline and product folders hold product-specific overrides.
- Preserve `index.json` and metadata files when refreshing exports so the
  token graph remains machine-readable.

## Relationship To Other Folders

- `src/imports/` holds raw or generated migration inputs from Figma.
- `src/styles/` holds application styling entrypoints and CSS output.
- `src/design-tokens/index.json` is the machine-readable source index for AI,
  build tooling, and audits.
- `guidelines/` explains how the token system should be interpreted and used.

## Related Docs

- [guidelines/tokens.md](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/guidelines/tokens.md)
- [src/design-tokens/index.json](/Users/joakim/Documents/GitHub/svs-ui-nova-make-kit/src/design-tokens/index.json)
- [Color Token Architecture](../../guidelines/foundation/ColorTokenArchitecture.md)
- [Figma Make Source Import](../../docs/FIGMA_MAKE_SOURCE_IMPORT.md)
