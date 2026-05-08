# Brand Icons & Logos Usage

## Installation

```bash
npm install @make-kits/svs-ui-nova@latest
# or
pnpm add @make-kits/svs-ui-nova@latest
```

## Import Brand Assets

All brand assets are exported from the main package entry:

```tsx
import {
  // Sport & Casino Logos
  BingoPrimary,
  CasinoPrimary,
  PokerTextonly,
  StryktipsetIcon,
  
  // Sport & Casino Icons
  BingoIcon,
  CasinoIcon,
  PokerIcon,
  OddsetIcon,
  
  // Sport & Casino Cubes
  CubeSocBingo,
  CubeSocCasino,
  
  // Tur Logos
  LottoPrimary,
  TrissTextonly,
  EurojackpotDetailed,
  
  // Tur Icons
  LottoIcon,
  TrissIcon,
  EurojackpotIcon,
  
  // Tur Cubes
  CubeLotto,
  CubeTriss,
  CubeEurojackpot,
} from '@make-kits/svs-ui-nova';
```

## Available Brand Assets

### Sport & Casino

**Logos** (~150 variants):
- Bingo (Primary, Inverted, Textonly, etc.)
- Casino (Primary, Inverted, Textonly, etc.)
- Poker (Primary, Inverted, Textonly, etc.)
- Oddset (Primary, Inverted, Textonly, etc.)
- Stryktipset (Primary, Inverted, Textonly, etc.)
- Toppipset (Primary, Inverted, Textonly, etc.)
- Maltipset (Primary, Inverted, Textonly, etc.)
- Challenge (Primary, Inverted, Textonly, etc.)
- Europatipset (Primary, Inverted, Textonly, etc.)
- Bomben (Primary, Inverted, Textonly, etc.)
- Hastar (Primary, Inverted, Textonly, etc.)
- Matchen (Primary, Inverted, Textonly, etc.)
- Momang (Primary, Inverted, Textonly, etc.)
- Powerplay (Primary, Inverted, Textonly, etc.)
- Livecasino (Primary, Inverted, Textonly, etc.)

**Icons** (15):
- BingoIcon
- BombenIcon
- CasinoIcon
- ChallengeIcon
- EuropatipsetIcon
- HastarIcon
- LiveCasinoIcon
- MaltipsetIcon
- MatchenIcon
- MomangIcon
- OddsetIcon
- PokerIcon
- PowerplayIcon
- StryktipsetIcon
- TopptipsetIcon

**Cubes** (14):
- CubeSocBingo
- CubeSocBomben
- CubeSocCasino
- CubeSocChallenge
- CubeSocEuropatipset
- CubeSocHastar
- CubeSocLivecasino
- CubeSocMaltipset
- CubeSocMatchen
- CubeSocMomang
- CubeSocOddset
- CubeSocPoker
- CubeSocPowerplay
- CubeSocStryktipset

### Tur

**Logos** (~150 variants):
- Lotto (Primary, Inverted, Textonly, etc.)
- Triss (Primary, Inverted, Textonly, etc.)
- Eurojackpot (Primary, Inverted, Textonly, Detailed, etc.)
- Vikinglotto (Primary, Inverted, Textonly, etc.)
- FlerLotter (Primary, Inverted, Textonly, etc.)
- Keno (Primary, Inverted, Textonly, etc.)
- Skrapspel (Primary, Inverted, Textonly, etc.)
- And many more scratch card variants

**Icons** (26):
- BiltrissIcon
- DubbeltrissIcon
- Eurojackpot100Icon
- EurojackpotIcon
- FlerLotterIcon
- KenoIcon
- KenoxpressIcon
- LordagsgodisIcon
- LottoIcon
- LyckoplatsenIcon
- MinitrissIcon
- MittemellanIcon
- RubbetIcon
- SjuttonellermerIcon
- Skrap7anIcon
- SkrapPacmanIcon
- SkrapbingoIcon
- SkrapkenoIcon
- SkrapkryssIcon
- SkrapmatchaIcon
- SkrapspelIcon
- TreiradIcon
- TrissIcon
- VikinglottoIcon

**Cubes** (25):
- CubeBiltriss
- CubeDubbeltriss
- CubeEurojackpot
- CubeEurojackpot100
- CubeFlerLotter
- CubeKeno
- CubeLordagsgodis
- CubeLotto
- CubeLyckoplatsen
- CubeMinitriss
- CubeMittemellan
- CubePresentlott
- CubeRubbet
- CubeSjuttonellemer
- CubeSkrap7an
- CubeSkrapPacman
- CubeSkrapbingo
- CubeSkrapkeno
- CubeSkrapkryss
- CubeSkrapmatcha
- CubeSkrapspel
- CubeTreirad
- CubeTriss
- CubeVikinglotto

## Usage Example

```tsx
import { BingoIcon, LottoIcon, CubeSocCasino } from '@make-kits/svs-ui-nova';

function MyComponent() {
  return (
    <div>
      <BingoIcon size={48} className="text-blue-600" />
      <LottoIcon size={48} />
      <CubeSocCasino size={100} />
    </div>
  );
}
```

## Component Props

All icons and logos accept standard SVG props:

```tsx
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;        // Size in pixels (width & height)
  className?: string;   // CSS classes
  // ...all other SVG props
}
```

## Publishing

When publishing a new version with brand updates:

```bash
# 1. Build the package
pnpm build

# 2. Update version in package.json (or use npm version)
npm version patch  # or minor/major

# 3. Publish to npm
npm publish
```

## Version History

- **v0.1.7** - Added all Sport & Casino and Tur brand assets to published package
- **v0.1.6** - Previous version (brands not included in npm package)
