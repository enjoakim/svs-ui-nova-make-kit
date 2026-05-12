# Theme Tokens

This folder holds parent semantic theme collections.

Current expected structure:

```text
themes/
  svenska-spel/
    light.tokens.json
    light-secondary.tokens.json
    dark.tokens.json
    vibrant.tokens.json
```

`svenska-spel` acts as the parent semantic theme. Product folders under
`src/design-tokens/products/` should extend that structure rather than invent a
new semantic shape.
