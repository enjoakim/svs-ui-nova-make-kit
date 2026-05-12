# Primitive Tokens

This folder holds product-oriented primitive token payloads.

Recommended placement:

```text
primitives/
  colors/
    products/
      <product>.json
```

Use this layer for source-level product colors and split primitive payloads.
Curated component source should usually consume semantic theme tokens first and
only trace back here during token authoring, audits, or normalization work.
