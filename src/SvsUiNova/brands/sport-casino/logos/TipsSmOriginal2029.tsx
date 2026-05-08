import { forwardRef, SVGProps } from 'react';

export interface TipsSmOriginal2029Props extends SVGProps<SVGSVGElement> {
  /**
   * Size of the logo (width and height)
   */
  size?: number;
}

/**
 * TipsSmOriginal2029 - Sport & Casino logo
 *
 * Generated from: tips-sm-original-2029.svg
 */
export const TipsSmOriginal2029 = forwardRef<SVGSVGElement, TipsSmOriginal2029Props>(
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

TipsSmOriginal2029.displayName = 'TipsSmOriginal2029';
