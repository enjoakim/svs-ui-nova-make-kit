# Sport & Casino Brands - Usage Guide

All Sport & Casino product brands are now available as React components.

## Quick Start

```tsx
import { 
  Oddset, OddsetIcon, CubeSocOddset,
  Casino, CasinoIcon, CubeSocCasino 
} from '@/SvsUiNova/brands/sport-casino';

// Use logos
<Oddset size={120} />
<Casino size={100} />

// Use icons
<OddsetIcon size={32} />
<CasinoIcon size={40} />

// Use 3D cubes
<CubeSocOddset size={48} />
<CubeSocCasino size={48} />
```

## Available Products

### ⚽ Sports Betting
- **Oddset** - Sports betting
- **Stryktipset** - Football pools
- **Topptipset** - Top league betting
- **Europatipset** - European football pools
- **Maltipset** - Goal scorer betting
- **Matchen** - Match betting
- **VM-tipset** - World Cup betting
- **EM-tipset** - European Championship betting

### 🎮 Games
- **Bomben** - Jackpot game
- **Challenge** - Sports challenge
- **Powerplay** - Power betting
- **Momang** - Instant betting

### 🎰 Casino & Poker
- **Casino** - Online casino
- **LiveCasino** - Live casino
- **Poker** - Online poker
- **Bingo** - Online bingo

### 🏇 Horse Racing
- **Hästar** - Horse racing

## Component Types

Each product has three component types:

### 1. Logos (Full Branding)
Full product logos with variants:
- **Default**: Standard logo
- **Inverted**: For dark backgrounds
- **Textonly**: Logo without emblem
- **Primary/Secondary**: Color variants

```tsx
import { 
  Oddset,           // Default
  OddsetInverted,   // Dark backgrounds
  OddsetTextonly    // Without emblem
} from '@/SvsUiNova/brands/sport-casino';

<Oddset size={120} />
<OddsetInverted size={120} />
<OddsetTextonly size={100} />
```

### 2. Icons (Compact)
Compact circular icons for navigation:

```tsx
import { OddsetIcon, CasinoIcon } from '@/SvsUiNova/brands/sport-casino';

<OddsetIcon size={32} />
<CasinoIcon size={40} />
```

### 3. 3D Cubes (Visual)
Isometric cube representations:

```tsx
import { CubeSocOddset, CubeSocCasino } from '@/SvsUiNova/brands/sport-casino';

<CubeSocOddset size={48} />
<CubeSocCasino size={48} />
```

## Component Props

All components support:

```tsx
interface BrandComponentProps extends SVGProps<SVGSVGElement> {
  size?: number;  // Width and height in pixels
  className?: string;
  // ...all standard SVG props
}
```

## Import Paths

```tsx
// Import specific components
import { Oddset, OddsetIcon } from '@/SvsUiNova/brands/sport-casino';

// Or from main component library
import { Oddset, Casino } from '@/SvsUiNova/components';

// Import by category
import { Oddset, Casino } from '@/SvsUiNova/brands/sport-casino/logos';
import { OddsetIcon, CasinoIcon } from '@/SvsUiNova/brands/sport-casino/icons';
import { CubeSocOddset } from '@/SvsUiNova/brands/sport-casino/cubes';
```

## File Structure

```
src/SvsUiNova/brands/sport-casino/
├── logos/          # 82 logo components
├── icons/          # 16 icon components  
├── cubes/          # 16 3D cube components
├── svg-exports/    # Original SVG files
└── index.ts        # Main export file
```

## Total Components

- **114 React Components** generated
- **82 Logos** (with variants)
- **16 Icons**
- **16 3D Cubes**

All components are TypeScript with full type safety.
