# Component Import Paths

Import paths in this repo are explicit and should be followed closely.

## Inside This Repo

For app code, demos, and internal implementation that consumes the public
component surface, prefer:

```tsx
import { Button, Card, Input } from '@/SvsUiNova/components';
```

For brand assets, prefer:

```tsx
import { OddsetIcon, CasinoIcon } from '@/SvsUiNova/brands/sport-casino';
import { LottoIcon } from '@/SvsUiNova/brands/tur';
```

Or group-level imports when you need one asset family specifically:

```tsx
import * as SportCasinoIcons from '@/SvsUiNova/brands/sport-casino/icons';
import * as TurLogos from '@/SvsUiNova/brands/tur/logos';
```

## Root Export

The repo root entrypoint `src/index.ts` re-exports the component barrel:

```tsx
import { Button, Card, Input } from '@/index';
```

Inside the repo, this is valid but secondary. Prefer `@/SvsUiNova/components`
for clarity when editing repo code.

## External Package Consumption

When this package is built and consumed outside the repo, use the package root:

```tsx
import { Button, Card, Input } from '@make-kits/svs-ui-nova';
```

## Do Not Import From Generated Sources

Avoid importing curated UI from:

- `src/imports/*`
- `src/imports/Icons/*`
- `src/imports/Mode_1.tokens.json`

Those files are migration input or generated artifacts, not the stable UI API.

## Deep Import Guidance

Deep imports are acceptable when:

- you are editing implementation details inside the component package
- you are intentionally consuming a brand-specific subgroup such as
  `/logos`, `/icons`, or `/cubes`

Deep imports are not the default for ordinary UI composition.

## Correct Examples

```tsx
import { Button, Dialog, DialogFooter } from '@/SvsUiNova/components';
import { OddsetIcon } from '@/SvsUiNova/brands/sport-casino';
import * as TurIcons from '@/SvsUiNova/brands/tur/icons';
```

## Incorrect Examples

```tsx
import Button from '@/SvsUiNova/components/Button';
import Icons from '@/imports/Icons/Icons';
import tokens from '@/imports/Mode_1.tokens.json';
```

## Recommendation: Alias Use

The repo defines:

- `@/*` -> `src/*`
- `@/SvsUiNova/*` -> `src/SvsUiNova/*`

Use those aliases instead of long relative import chains in new app-facing code.
