# Svenska Spel Icon System

## Overview

The SVS UI Nova library includes a comprehensive icon system with **329 icons** imported from Figma. The system uses a smart `<Icon>` component with TypeScript autocomplete for all available icon names.

## Quick Start

```tsx
import { Icon } from '@/SvsUiNova/components';

// Basic usage
<Icon name="shopping-cart" />

// With size
<Icon name="video-play" size={32} />

// With custom className
<Icon name="flag" className="text-red-600" />

// With all SVG props
<Icon 
  name="horse" 
  size={48}
  className="text-blue-500 hover:text-blue-700"
  aria-label="Horse racing"
/>
```

## Available Icons

The icon system includes **329 icons** across multiple categories:

### UI Icons
- `minus`, `shopping-cart`, `video-play`, `flag`

### Sports Icons
- `soccer`, `basketball`, `tennis`, `golf`, `hockey`, `football`
- `baseball`, `volleyball`, `cricket`, `rugby`, `badminton`
- `table-tennis`, `handball`, `swimming`, `cycling`, `running`
- `skiing`, `snowboarding`, `skating`, `boxing`, `wrestling`
- `martial-arts`, `archery`, `shooting`, `fencing`, `rowing`
- `sailing`, `surfing`, `diving`, `gymnastics`, `athletics`
- `weightlifting`, `climbing`, `motorsports`, `esports`

### Horse Racing Icons
- `blinkers`, `horseshoe-off`, `horseshoe-on`, `horse`, `all-meetings`

### Weather Icons
- `cloudy`, `partly-cloudy`, `rainy`, `sunny`

*See `/tmp/icon_list.txt` for the complete list of all 329 available icon names.*

## TypeScript Support

The `Icon` component provides full TypeScript autocomplete:

```tsx
import { Icon, IconName } from '@/SvsUiNova/components';

// TypeScript will autocomplete valid icon names
const iconName: IconName = 'shopping-cart'; // ✅

// TypeScript will error on invalid names
const invalid: IconName = 'not-an-icon'; // ❌ Error
```

## API

### Props

```typescript
interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;  // Required: icon name
  size?: number;   // Optional: size in pixels (default: 24)
}
```

### Supported Props

All standard SVG props are supported:
- `className` - Tailwind/CSS classes
- `onClick` - Click handlers  
- `onMouseEnter/Leave` - Hover handlers
- `aria-label` - Accessibility labels
- `style` - Inline styles

## Styling Icons

### Size

```tsx
<Icon name="flag" size={16} />  // Small
<Icon name="flag" size={24} />  // Default
<Icon name="flag" size={32} />  // Large
<Icon name="flag" size={48} />  // Extra large
```

### Color

Icons use `currentColor` and inherit text color:

```tsx
<Icon name="horse" className="text-red-600" />
<Icon name="soccer" className="text-blue-500 hover:text-blue-700" />
```

### Responsive Sizing

```tsx
<Icon 
  name="tennis" 
  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
/>
```

## Adding More Icons

The Icon component currently has **4 fully implemented icons** (minus, shopping-cart, video-play, flag) with placeholders for the remaining **325 icons**.

To add more icon definitions:

### Step 1: Find the Icon in Figma Import

Open `/src/imports/Icons/Icons.tsx` and search for your icon by data-name:

```tsx
<div data-name="your-icon-name">
  <svg viewBox="0 0 24 24">
    <path d={svgPaths.pXXXXXX} fill="..." />
  </svg>
</div>
```

### Step 2: Extract the SVG Data

Note the:
- `viewBox` values
- `path` references (e.g., `svgPaths.pXXXXXX`)

### Step 3: Add to Icon Component

Edit `/src/SvsUiNova/components/Icon.tsx`:

```tsx
const iconDefinitions: Record<IconName, { viewBox: string; paths: JSX.Element }> = {
  // ... existing icons ...
  
  'your-icon-name': {
    viewBox: '0 0 24 24',
    paths: (
      <g>
        <path d={svgPaths.pXXXXXX} fill="currentColor" />
        {/* Add more paths if needed */}
      </g>
    )
  },
};
```

### Step 4: Update TypeScript Type

Add the icon name to the `IconName` type:

```tsx
export type IconName =
  | 'minus'
  | 'shopping-cart'
  | 'your-icon-name'  // Add here
  | // ... rest
```

## Icon Categories

Icons are organized by category in Figma. You can filter the full list (`/tmp/icon_list.txt`) by common prefixes:

- **Horse Racing**: `blinkers-*`, `horseshoe-*`, `horse`, `gallop`
- **Sports**: `soccer`, `tennis`, `basketball`, etc.
- **Weather**: `cloudy`, `rainy`, `sunny`, `partly-cloudy`
- **UI**: `minus`, `video-play`, `flag`, `shopping-cart`

## Performance

- **Tree-shaking**: Only imported icon SVG data is included in the bundle
- **No external dependencies**: All icons are inline SVG
- **Type-safe**: Full TypeScript support prevents runtime errors
- **Optimized**: Uses `currentColor` for efficient color inheritance

## Migration from Old Icons

If you were using individual icon components:

```tsx
// Old way
import { MenuLeft } from '@/SvsUiNova/components/icons';
<MenuLeft className="w-4 h-4" />

// New way (when icon is added to Icon component)
import { Icon } from '@/SvsUiNova/components';
<Icon name="menu-left" size={16} />
```

**Note**: The individual icon components (`MenuUp`, `MenuLeft`, `MenuRight`, etc.) are still available and work alongside the new Icon system.

## Best Practices

1. **Use semantic sizes**: `size={24}` instead of `className="w-6 h-6"`
2. **Add aria-labels**: `<Icon name="shopping-cart" aria-label="View cart" />`
3. **Consistent naming**: Use kebab-case icon names
4. **Color inheritance**: Prefer `className="text-*"` over `fill` attributes
5. **Responsive design**: Use Tailwind responsive classes for different sizes

## Examples

### Button with Icon

```tsx
<Button>
  <Icon name="shopping-cart" size={20} />
  Add to Cart
</Button>
```

### Icon Button

```tsx
<IconButton 
  icon={<Icon name="video-play" size={16} />}
  aria-label="Play video"
/>
```

### Interactive Icon

```tsx
<Icon 
  name="flag"
  size={24}
  className="cursor-pointer text-gray-600 hover:text-red-600 transition-colors"
  onClick={() => console.log('Flagged!')}
/>
```

### Icon Grid

```tsx
<div className="grid grid-cols-8 gap-4">
  {['soccer', 'tennis', 'basketball', 'golf'].map(sport => (
    <Icon key={sport} name={sport} size={32} />
  ))}
</div>
```

## Future Enhancements

Planned features:
- [ ] Complete all 329 icon definitions
- [ ] Icon search/preview component
- [ ] SVG sprite sheet optimization
- [ ] Icon variants (outline, filled, rounded)
- [ ] Dynamic icon loading for reduced bundle size

## Support

For questions or to request specific icons to be prioritized:
1. Check the full icon list: `/tmp/icon_list.txt`
2. Find the icon in `/src/imports/Icons/Icons.tsx`
3. Follow the "Adding More Icons" guide above

---

**Icon Library**: 329 total icons  
**Currently Implemented**: 4 fully defined icons  
**Placeholders**: 325 icons (ready to implement as needed)  
**Source**: Figma SVS UI Nova Design System
