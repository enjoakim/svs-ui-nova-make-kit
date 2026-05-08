import { forwardRef, SVGProps } from 'react';

export interface TipsSmOriginal2026Props extends SVGProps<SVGSVGElement> {
  /**
   * Size of the logo (width and height)
   */
  size?: number;
}

/**
 * TipsSmOriginal2026 - Sport & Casino logo
 *
 * Generated from: tips-sm-original-2026.svg
 */
export const TipsSmOriginal2026 = forwardRef<SVGSVGElement, TipsSmOriginal2026Props>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size || 96}
        height={size || 117}
        viewBox="0 0 96 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        
      </svg>
    );
  }
);

TipsSmOriginal2026.displayName = 'TipsSmOriginal2026';
