# Sport & Casino Brands

Brand assets for Svenska Spel Sport & Casino products.

## Structure

```
sport-casino/
├── logos/          # Product logos with full branding
├── icons/          # Compact product icons
├── cubes/          # 3D cube representations
└── svg-exports/    # Raw SVG exports from Figma
```

## Products

### Betting & Games
- **Oddset** - Sports betting
- **Bomben** - Jackpot game
- **Stryktipset** - Football pools
- **Topptipset** - Top league betting
- **Europatipset** - European football pools
- **Maltipset** - Goal scorer betting
- **Challenge** - Sports challenge
- **Powerplay** - Power betting
- **Matchen** - Match betting
- **Momang** - Instant betting

### Casino & Poker
- **Casino** - Online casino
- **Poker** - Online poker

### Other
- **Bingo** - Online bingo
- **Hastar** - Horse racing

## Exporting from Figma

To export brand assets from Figma:

1. Open: https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-?node-id=6703-61187
2. Navigate to "Sport & Casino" section
3. Select each logo/icon/cube component
4. Right-click → Export → SVG
5. Save to `svg-exports/{category}/` directory

## Component Variants

### Logos
- **default**: Full color logo with Svenska Spel emblem
- **inverted**: Light version for dark backgrounds
- **textonly**: Logo without emblem
- **textonly-inverted**: Light text without emblem
- **primary**: Primary brand color variant
- **secondary**: Secondary color variant

### Icons
Compact circular icons for use in navigation, lists, and compact layouts.

### Cubes
3D isometric cube representations with product-specific colors.

## Usage

```tsx
import { OddsetLogo, BombenIcon, SportCasinoCube } from '@/SvsUiNova/brands/sport-casino';

// Logo
<OddsetLogo variant="default" height={40} />

// Icon
<BombenIcon size={32} />

// 3D Cube
<SportCasinoCube product="casino" size={48} />
```

## Color System

Each product has its own color identity defined in `/guidelines/brands/Color.md`.

## Related Documentation

- [Brand Guidelines](../../../guidelines/brands/)
- [Color System](../../../guidelines/brands/Color.md)
- [Logotype Guidelines](../../../guidelines/brands/Logotype.md)
