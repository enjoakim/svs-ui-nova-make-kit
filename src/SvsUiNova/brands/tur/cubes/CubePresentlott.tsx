import { forwardRef, SVGProps } from 'react';

export interface CubePresentlottProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the cube (width and height)
   */
  size?: number;
}

/**
 * CubePresentlott - Tur cube
 *
 * Generated from: cube-presentlott.svg
 */
export const CubePresentlott = forwardRef<SVGSVGElement, CubePresentlottProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size || 240}
        height={size || 220}
        viewBox="0 0 240 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        
      </svg>
    );
  }
);

CubePresentlott.displayName = 'CubePresentlott';
