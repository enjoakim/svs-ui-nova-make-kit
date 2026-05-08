import { forwardRef, SVGProps } from 'react';

export interface EurojackpotDetailedProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the logo (width and height)
   */
  size?: number;
}

/**
 * EurojackpotDetailed - Tur logo
 *
 * Generated from: eurojackpot-detailed.svg
 */
export const EurojackpotDetailed = forwardRef<SVGSVGElement, EurojackpotDetailedProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size || 277}
        height={size || 48}
        viewBox="0 0 277 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        
      </svg>
    );
  }
);

EurojackpotDetailed.displayName = 'EurojackpotDetailed';
