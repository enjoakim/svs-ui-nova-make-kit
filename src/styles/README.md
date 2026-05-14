## App styles

Place shared application-level styles here, such as:

- `globals.css`
- `theme.css`
- `fonts.css`
- `tailwind.css`

During calibration, pick one canonical token entrypoint and document it in
`src/SvsUiNova/MAKE_KIT_INTEGRATION.md`.

The current repository direction is to treat `src/design-tokens/` as the
canonical checked-in token structure and `src/imports/` as migration input.

Bridge responsibilities:

- `theme.css` is the semantic runtime bridge from checked-in theme tokens to
  app-level CSS variables and Tailwind theme values.
- `../SvsUiNova/styles.css` is the low-level component token bridge and
  typography utility layer used by the component library.
