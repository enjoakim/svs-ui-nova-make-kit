import { forwardRef, SVGAttributes } from 'react';
import svgPaths from './svg-paths';

export interface SvenskaSpelCubeProps extends Omit<SVGAttributes<SVGSVGElement>, 'viewBox'> {}

export const SvenskaSpelCube = forwardRef<SVGSVGElement, SvenskaSpelCubeProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 208.372 199.298"
        fill="none"
        className={className}
        {...props}
      >
        <g>
          <path d={svgPaths.p36cbf000} fill="#B30415" />
          <path d={svgPaths.p1a2a0500} fill="#C80011" />
          <path d={svgPaths.p2e6bdef2} fill="#E8E4E2" />
          <path d={svgPaths.p7087200} fill="#FF2D29" />
          <path d={svgPaths.p11bd8780} fill="white" />
          <path d={svgPaths.pf883100} fill="white" />
        </g>
      </svg>
    );
  }
);

SvenskaSpelCube.displayName = 'SvenskaSpelCube';
