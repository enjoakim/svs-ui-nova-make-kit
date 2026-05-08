import { forwardRef, SVGProps } from 'react';

export interface OddsetLogoProps extends SVGProps<SVGSVGElement> {
  /**
   * Logo variant
   * - default: Full color logo with emblem
   * - inverted: Light version for dark backgrounds
   * - textonly: Logo text without emblem
   * - textonly-inverted: Light text without emblem
   */
  variant?: 'default' | 'inverted' | 'textonly' | 'textonly-inverted';
  /**
   * Height of the logo in pixels
   * Width will be calculated automatically to maintain aspect ratio
   * @default 32
   */
  height?: number;
}

/**
 * OddsetLogo - Official Oddset brand logo
 *
 * The Oddset logo from Svenska Spel's Sport & Casino offering.
 * Available in multiple variants for different contexts.
 *
 * @example
 * ```tsx
 * <OddsetLogo variant="default" height={40} />
 * <OddsetLogo variant="inverted" />
 * <OddsetLogo variant="textonly" />
 * ```
 */
export const OddsetLogo = forwardRef<SVGSVGElement, OddsetLogoProps>(
  ({ variant = 'default', height = 32, className, ...props }, ref) => {
    // TODO: Replace with actual SVG content from Figma
    // This is a placeholder structure

    const viewBox = variant.includes('textonly') ? '0 0 120 40' : '0 0 160 40';
    const width = variant.includes('textonly') ? (height * 3) : (height * 4);

    const isDark = variant.includes('inverted');
    const textColor = isDark ? '#FFFFFF' : '#1B1918';
    const accentColor = isDark ? '#FFFFFF' : '#ED0000';

    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Oddset"
        role="img"
        {...props}
      >
        {/* Emblem (only for full logo variants) */}
        {!variant.includes('textonly') && (
          <g>
            {/* Svenska Spel Cube emblem placeholder */}
            <rect x="4" y="4" width="32" height="32" fill={accentColor} />
            <path
              d="M20 12L28 16V24L20 28L12 24V16L20 12Z"
              fill="#FFFFFF"
            />
          </g>
        )}

        {/* Logo text placeholder - TODO: Replace with actual Oddset logotype */}
        <text
          x={variant.includes('textonly') ? '10' : '44'}
          y="28"
          fill={textColor}
          fontFamily="Svenska Spel Arena Pro, sans-serif"
          fontSize="24"
          fontWeight="bold"
        >
          ODDSET
        </text>
      </svg>
    );
  }
);

OddsetLogo.displayName = 'OddsetLogo';
