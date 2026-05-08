import { forwardRef, SVGProps } from 'react';

export interface EurojackpotTextonlyDetailedProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the logo (width and height)
   */
  size?: number;
}

/**
 * EurojackpotTextonlyDetailed - Tur logo
 *
 * Generated from: eurojackpot-textonly-detailed.svg
 */
export const EurojackpotTextonlyDetailed = forwardRef<SVGSVGElement, EurojackpotTextonlyDetailedProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size || 317}
        height={size || 48}
        viewBox="0 0 317 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        
      </svg>
    );
  }
);

EurojackpotTextonlyDetailed.displayName = 'EurojackpotTextonlyDetailed';
