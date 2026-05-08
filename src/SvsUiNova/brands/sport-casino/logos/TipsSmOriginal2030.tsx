import { forwardRef, SVGProps } from 'react';

export interface TipsSmOriginal2030Props extends SVGProps<SVGSVGElement> {
  /**
   * Size of the logo (width and height)
   */
  size?: number;
}

/**
 * TipsSmOriginal2030 - Sport & Casino logo
 *
 * Generated from: tips-sm-original-2030.svg
 */
export const TipsSmOriginal2030 = forwardRef<SVGSVGElement, TipsSmOriginal2030Props>(
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

TipsSmOriginal2030.displayName = 'TipsSmOriginal2030';
