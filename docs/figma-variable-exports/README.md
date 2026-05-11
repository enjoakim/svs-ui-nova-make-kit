# Figma Variable Exports

This directory stores the reviewed Figma variable exports for the Svenska Spel
Nova color system.

These files are source snapshots from Figma. They are kept here so the color
architecture, audit notes, and future cleanup work can be traced back to the
same exported variable data.

Current archive snapshot: `2026-05-09`.

## Folder Structure

```text
docs/figma-variable-exports/
+-- base/
|   +-- Global Colors.zip
|   +-- Primitive Colors.zip
|   +-- Svenska Spel.zip
+-- products/
    +-- Bingo.zip
    +-- Casino.zip
    +-- ...
```

## Collection Roles

| Export | Role | Modes in archive |
| --- | --- | --- |
| `base/Global Colors.zip` | Shared base palette and cross-product anchors | `Mode 1` |
| `base/Primitive Colors.zip` | Product-oriented primitive color families | `Mode 1` |
| `base/Svenska Spel.zip` | Parent semantic theme collection | `Light`, `Light Secondary`, `Dark`, `Vibrant` |
| `products/*.zip` | Product semantic theme extensions | `Light`, `Light Secondary`, `Dark`, `Vibrant` |

The intended dependency flow is:

1. `Global Colors`
2. `Primitive Colors`
3. `Svenska Spel`
4. Product theme collections

Components should consume semantic tokens from the theme layer. They should not
bind directly to global or primitive colors unless a documented exception has
been approved.

## Product Exports

The current product export set includes:

- `Bingo`
- `Casino`
- `Eurojackpot`
- `Europatipset`
- `Extratipset`
- `Fler-Lotter`
- `Joker`
- `Keno`
- `KenoXpress`
- `Lordagsgodis`
- `Lotto`
- `Lyckoplatsen`
- `Maltipset`
- `Momang`
- `Oddset`
- `Poker`
- `Rubbet`
- `Skrapspel`
- `Soc`
- `Stryktipset`
- `Topptipset`
- `Triss`
- `Tur`
- `VM-Tipset`
- `Vikinglotto`
- `Wireframe`

## Related Documentation

- [Figma Variable Library Audit](../FIGMA_VARIABLE_LIBRARY_AUDIT.md)
- [Color System](../../guidelines/foundation/ColorSystem.md)
- [Color Token Architecture](../../guidelines/foundation/ColorTokenArchitecture.md)

## Normalization Checklist

These items came out of the first export audit and should be checked before
normalizing the source Figma library:

| Item | Provisional category | Notes |
| --- | --- | --- |
| `Theme: SvS & AO` references in `Light Secondary` | `needs alias/source fix` or `confirmed intentional` | Seen on `Components/Sidebar/hover-foreground` in Eurojackpot, Keno, Lotto, Lyckoplatsen, Vikinglotto, and Wireframe. |
| `Components/productid` values | `needs alias/source fix` or `confirmed intentional` | Clarify whether values are product slugs, app IDs, or legacy integration identifiers. |
| `Svenska Spel / Components / Sidebar / hover-foreground` | `needs alias/source fix` or `needs semantic rename` | Currently reads like a foreground token mapped through a background semantic. |
| `Components/Button Ghost/fg/default` | `needs semantic rename` or `confirmed intentional` | May be intentional accent reuse, but should be confirmed and documented. |

Use the final category names consistently when closing each item:

- `confirmed intentional`
- `needs semantic rename`
- `needs alias/source fix`

## Maintenance Rules

- Keep raw Figma export archives in `base/` or `products/`.
- Do not commit extracted token JSON unless it is part of a deliberate generated
  artifact or comparison report.
- When a new export is added, preserve the Figma collection name in the archive
  filename.
- When the exports are refreshed, update the audit and architecture docs in the
  same cleanup pass.
- Treat `Global Colors` and `Primitive Colors` as source layers, and
  `Svenska Spel` plus product collections as semantic theme layers.
