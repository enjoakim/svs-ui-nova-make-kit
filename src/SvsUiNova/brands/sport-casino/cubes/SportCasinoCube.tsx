import { SVGProps } from 'react';

export interface SportCasinoCubeProps extends SVGProps<SVGSVGElement> {
  /**
   * Product variant - determines the cube color scheme
   */
  product?:
    | 'oddset'
    | 'bomben'
    | 'casino'
    | 'europatipset'
    | 'matchen'
    | 'momang'
    | 'powerplay'
    | 'stryktipset'
    | 'topptipset'
    | 'challenge'
    | 'maltipset'
    | 'hastar'
    | 'poker'
    | 'bingo';
  /**
   * Size of the cube in pixels (width and height)
   * @default 40
   */
  size?: number;
}

const CUBE_COLORS: Record<string, { top: string; left: string; right: string }> = {
  oddset: { top: '#ED0000', left: '#C80000', right: '#9B0000' },
  bomben: { top: '#FFA500', left: '#FF8C00', right: '#FF6B00' },
  casino: { top: '#8B00FF', left: '#7000CC', right: '#5500AA' },
  europatipset: { top: '#00A651', left: '#008841', right: '#006B31' },
  matchen: { top: '#0071DB', left: '#005AB3', right: '#00448A' },
  momang: { top: '#E91E63', left: '#C2185B', right: '#AD1457' },
  powerplay: { top: '#9C27B0', left: '#7B1FA2', right: '#6A1B9A' },
  stryktipset: { top: '#00823D', left: '#006B32', right: '#005427' },
  topptipset: { top: '#ED0000', left: '#C80000', right: '#9B0000' },
  challenge: { top: '#FFC107', left: '#FFA000', right: '#FF8F00' },
  maltipset: { top: '#4CAF50', left: '#388E3C', right: '#2E7D32' },
  hastar: { top: '#795548', left: '#5D4037', right: '#4E342E' },
  poker: { top: '#607D8B', left: '#455A64', right: '#37474F' },
  bingo: { top: '#E91E63', left: '#C2185B', right: '#AD1457' },
};

/**
 * SportCasinoCube - 3D cube component for Sport & Casino products
 *
 * A visual representation of different Svenska Spel Sport & Casino products
 * using a 3D cube design. Each product has its own color scheme.
 *
 * @example
 * ```tsx
 * <SportCasinoCube product="oddset" size={48} />
 * <SportCasinoCube product="casino" />
 * ```
 */
export function SportCasinoCube({
  product = 'oddset',
  size = 40,
  className,
  ...props
}: SportCasinoCubeProps) {
  const colors = CUBE_COLORS[product] || CUBE_COLORS.oddset;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Top face */}
      <path
        d="M20 4L34 12V20L20 28L6 20V12L20 4Z"
        fill={colors.top}
      />
      {/* Left face */}
      <path
        d="M6 20L20 28V36L6 28V20Z"
        fill={colors.left}
      />
      {/* Right face */}
      <path
        d="M20 28L34 20V28L20 36V28Z"
        fill={colors.right}
      />
      {/* Highlight (top edge) */}
      <path
        d="M20 4L34 12L20 20L6 12L20 4Z"
        fill="white"
        opacity="0.1"
      />
    </svg>
  );
}

SportCasinoCube.displayName = 'SportCasinoCube';
