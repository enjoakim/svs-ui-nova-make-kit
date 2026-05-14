# AI Context Guidelines

This folder contains the repo's operational guidance for AI-assisted UI
implementation.

## Priority Order

Follow these files in this order:

1. `implementation-rules.md`
2. `component-import-paths.md`
3. `css-variable-usage.md`
4. `color-token-usage.md`
5. `spacing-layout-rules.md`
6. `hierarchy-typography.md`
7. `radius-rules.md`
8. `optical-rules.md`
9. `component-composition-patterns.md`

## How To Interpret Priority

- If a lower-priority file conflicts with a higher-priority file, follow the
  higher-priority file.
- If the repo implementation conflicts with ideal theory, prefer the repo's
  current public API and documented structure.
- If the repo is inconsistent, follow the recommendation sections in these
  files and do not invent a second design system.

## Repo Sources Behind These Guidelines

These guidance files are derived from:

- `src/SvsUiNova/components`
- `src/SvsUiNova/styles.css`
- `src/styles/theme.css`
- `src/design-tokens`
- `src/app/AllComponentsDemo.tsx`
- `src/app/ComponentDemo.tsx`
- `guidelines/foundation/*`
- `guidelines/components/*`

External calibration references may also be used when the repo is silent or
incomplete. For this repo, see `guidelines/DesignParserReference.md`.
