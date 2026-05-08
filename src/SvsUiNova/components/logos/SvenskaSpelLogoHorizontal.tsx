import { forwardRef, SVGAttributes } from 'react';
import svgPaths from './svg-paths';

export interface SvenskaSpelLogoHorizontalProps extends Omit<SVGAttributes<SVGSVGElement>, 'viewBox'> {
  inverted?: boolean;
}

export const SvenskaSpelLogoHorizontal = forwardRef<SVGSVGElement, SvenskaSpelLogoHorizontalProps>(
  ({ inverted = false, className, ...props }, ref) => {
    const textColor = inverted ? 'white' : '#1B1918';

    return (
      <svg
        ref={ref}
        viewBox="0 0 457 70.4582"
        fill="none"
        className={className}
        {...props}
      >
        <g>
          <path d={svgPaths.p19af0380} fill={textColor} />
          <path d={svgPaths.p16b0a900} fill="#B30415" />
          <path d={svgPaths.p2b518800} fill="#C80011" />
          <path d={svgPaths.p43e9c00} fill="#E8E4E2" />
          <path d={svgPaths.p1163a900} fill="#FF2D29" />
          <path d={svgPaths.p358599f0} fill="white" />
          <path d={svgPaths.pe33ed00} fill="white" />
        </g>
      </svg>
    );
  }
);

SvenskaSpelLogoHorizontal.displayName = 'SvenskaSpelLogoHorizontal';
