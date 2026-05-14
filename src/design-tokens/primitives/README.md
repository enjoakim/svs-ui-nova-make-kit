# Primitive Tokens

This folder holds product-oriented primitive token payloads.

Current structure:

```text
primitives/
  index.json
  _metadata.json
  colors/
    products/
      <product>.json
```

Use this layer for source-level product colors and split primitive payloads.
Curated component source should usually consume semantic theme tokens first and
only trace back here during token authoring, audits, or normalization work.

`index.json` acts as the machine-readable entrypoint for the primitive split.
`_metadata.json` preserves export metadata from the source pipeline.
