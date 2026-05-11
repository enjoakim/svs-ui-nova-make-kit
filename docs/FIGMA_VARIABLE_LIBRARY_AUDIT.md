# Figma Variable Library Audit

Date: 2026-05-09

Source exports reviewed:
- `Primitive Colors.zip`
- `Global Colors.zip`
- `Svenska Spel.zip`
- product theme zips for Bingo, Casino, Eurojackpot, Europatipset, Extratipset,
  Fler-Lotter, Joker, Keno, KenoXpress, Lordagsgodis, Lotto,
  Lyckoplatsen, Maltipset, Momang, Oddset, Poker, Rubbet, Skrapspel,
  Soc, Stryktipset, Topptipset, Triss, Tur, Vikinglotto, VM-Tipset,
  and Wireframe.

Source archive location:
- [`docs/figma-variable-exports/README.md`](./figma-variable-exports/README.md)

## Executive Summary

The variable library architecture is strong and highly consistent.

The exports confirm a clear three-layer model:

1. `Global Colors` as a shared base palette
2. `Primitive Colors` as the large product-oriented primitive layer
3. `Svenska Spel` as the parent semantic theme, extended by per-product theme collections

Product collections reuse the same semantic shape as `Svenska Spel` and override
selected aliases into product-specific primitives. This is a sound model.

The main findings are not structural failure, but cleanup opportunities:
- mixed reference styles in the exports
- a small number of likely incorrect `productid` values
- one recurring cross-set alias anomaly in `Light Secondary`
- a few semantic tokens that deserve manual review for correctness

## Confirmed Architecture

### 1. Global Colors

- 1 mode
- 151 tokens
- no alias metadata in the export
- acts as a shared base/common palette layer

### 2. Primitive Colors

- 1 mode
- 1050 tokens
- mostly true primitive tokens by product family, for example:
  - `Svs/Core/*`
  - `Bingo/Core/*`
  - `Keno/Red/*`
  - `Poker/Amber/*`
- also contains 52 aliases back to `Global Colors`

This means `Primitive Colors` is not purely primitive in the strictest sense.
It is mostly primitive, but also contains some bridged/shared aliases.

### 3. Svenska Spel Parent Theme

- 4 modes: `Light`, `Light Secondary`, `Dark`, `Vibrant`
- 149 semantic tokens per mode
- 138-139 alias-based tokens per mode
- no override flags in the export
- aliases target:
  - `Primitive Colors`
  - `Global Colors`
  - `Tailwind Primitives`

This behaves like the parent semantic theme.

### 4. Product Theme Collections

All product theme exports inspected follow the same broad pattern:
- 4 modes
- 149 semantic tokens per mode
- same semantic token naming structure as `Svenska Spel`
- many tokens marked with `com.figma.isOverride: true`
- overrides point into product-specific primitives

This strongly supports the interpretation that `Svenska Spel` is the parent and
product collections are extended semantic collections.

## Alias Chain Findings

### Expected and healthy chain

The dominant pattern is:

- semantic theme token -> primitive token
- primitive token -> concrete color value

In some cases the chain becomes:

- semantic theme token -> primitive token
- primitive token -> `Global Colors`
- `Global Colors` -> concrete color value

That is still acceptable, but it means `Global Colors` is a real dependency of
`Primitive Colors`, not just a sibling collection.

### Mixed reference styles in the export

The export uses two different mechanisms to express references:

1. `com.figma.aliasData`
   - used for many cross-collection aliases
2. DTCG-style string references in `$value`, for example:
   - `{color.Surface.Standard.bg.hover}`
   - `{color.Accent.Primary.bg.rest}`

This means some tokens that appear “non-aliased” are not actually raw values.
They are still references, just expressed differently in the export format.

This is important when auditing counts: a token without `aliasData` is not
necessarily a leaf value.

## Anomalies and Review Items

### 1. Cross-set anomaly in `Light Secondary`

The following product collections contain a `Light Secondary` token that points
to a target set named `Theme: SvS & AO` instead of the usual target sets:

- Eurojackpot
- Keno
- Lotto
- Lyckoplatsen
- Vikinglotto
- Wireframe

Affected token:
- `Components/Sidebar/hover-foreground`
- target: `exp/Surface/fg/default`
- target set: `Theme: SvS & AO`

Why this matters:
- this is inconsistent with the rest of the semantic theme system
- it may be intentional, but it looks like a migration leftover or an older
  theme source that survived only in one token path

Recommendation:
- manually verify whether `Theme: SvS & AO` is still a valid intended source
- if not, repoint these tokens to the current semantic source used by the rest
  of the system

### 2. `Components/productid` values contain likely mistakes or legacy values

Observed values:
- `Svenska Spel` -> `svsid`
- `Eurojackpot` -> `euorjackpot`
- `Lotto` -> `lottoid`
- `Triss` -> `trissid`
- `Maltipset` -> `svsid`
- `VM-Tipset` -> `svsid`

Potential issues:
- `euorjackpot` appears to be a typo
- `lottoid` and `trissid` may be intentional identifiers, but they are not
  aligned with the simple slug pattern used by most products
- `Maltipset` and `VM-Tipset` using `svsid` looks suspicious unless they are
  intentionally inheriting the parent product identifier

Recommendation:
- review `Components/productid` as a small dedicated cleanup pass
- decide whether this token is meant to be a strict product slug, an app ID, or
  a legacy integration identifier
- document the rule once decided

### 3. Likely semantic mismatch in the parent theme

In `Svenska Spel` Light mode:
- `Components/Sidebar/hover-foreground` -> `{color.Surface.Standard.bg.hover}`

That reads like a background token being used as a foreground token.

By contrast:
- `Bingo` Light maps `Components/Sidebar/hover-foreground` -> `{color.Layer.fg.default}`
- `Eurojackpot` Light maps it -> `{color.Surface.fg.default}`

This makes the parent value look suspicious.

Recommendation:
- manually verify `Svenska Spel / Components / Sidebar / hover-foreground`
- compare expected behavior against actual sidebar usage in the component library

### 4. Likely semantic mismatch in `Button Ghost`

In the inspected theme exports:
- `Components/Button Ghost/fg/default` -> `{color.Accent.Primary.bg.rest}`

This may be intentional if ghost buttons borrow accent background as text/icon
color, but it is worth reviewing because the token name implies foreground while
its source implies a background semantic.

Recommendation:
- verify whether this is deliberate semantic reuse or a naming drift issue
- if deliberate, consider whether the source semantic should be normalized for
  clarity

### 5. Override volume is consistent, but not uniform

Typical override counts:
- Light / Light Secondary: often around 41-44
- Dark: often around 42-44
- Vibrant: often around 78-90

Notable lower-override outliers:
- Maltipset: 30-31 in Light/Dark
- VM-Tipset: 38 in Light/Dark

This is not automatically a problem. It likely means those products inherit more
from the parent theme.

Recommendation:
- treat this as informational unless visual output suggests missing branding
- if desired, compare these products visually against others to confirm whether
  the lower override count is intentional

## Interpretation of the Non-Aliased Semantic Tokens

A recurring set of semantic tokens in the theme files is not represented via
`aliasData`, including:
- `Components/Sidebar/*`
- `Components/Button Ghost/fg/default`
- `Components/productid`

These split into two groups:

1. internal token references expressed as `{...}` strings
   - likely intentional component-level semantic references
2. raw string values like `bingo`, `svsid`, `euorjackpot`
   - likely intended as product identifiers

So these should not be treated as a broken alias system. They are part of a
mixed export model.

## Overall Assessment

The library design is strong.

The parent/extended theme model is clear, reusable, and consistent across the
product portfolio. The exports preserve enough alias metadata to make the
structure auditable, and the override behavior looks disciplined rather than
chaotic.

The highest-value cleanup items are:
1. review the `Theme: SvS & AO` references in `Light Secondary`
2. normalize `Components/productid`
3. verify `Sidebar/hover-foreground` in the parent theme
4. sanity-check `Button Ghost/fg/default`

## Recommended Next Step

Use the normalization checklist in
[`docs/figma-variable-exports/README.md`](./figma-variable-exports/README.md)
to classify semantic-layer cleanup findings into three categories:
- `confirmed intentional`
- `needs semantic rename`
- `needs alias/source fix`

That would turn this audit into an actionable cleanup pass without changing the
underlying architecture.
