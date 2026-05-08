import { forwardRef, SVGAttributes } from 'react';
import svgPaths from './svg-paths';

export interface SvenskaSpelLogoHorizontalTwoRowsProps extends Omit<SVGAttributes<SVGSVGElement>, 'viewBox'> {
  inverted?: boolean;
}

export const SvenskaSpelLogoHorizontalTwoRows = forwardRef<SVGSVGElement, SvenskaSpelLogoHorizontalTwoRowsProps>(
  ({ inverted = false, className, ...props }, ref) => {
    const textColor = inverted ? 'white' : '#1B1918';

    return (
      <svg
        ref={ref}
        viewBox="0 0 391.307 140"
        fill="none"
        className={className}
        {...props}
      >
        <g>
          <path d={svgPaths.p173a9000} fill={textColor} />
          <path d={svgPaths.p2d60a780} fill="#B30415" />
          <path d={svgPaths.p259cff00} fill="#C80011" />
          <path d={svgPaths.p3869b080} fill="#E8E4E2" />
          <path d={svgPaths.p29ea2f00} fill="#FF2D29" />
          <path d={svgPaths.p25bcba40} fill="white" />
          <path d={svgPaths.p2a8ed280} fill="white" />
        </g>
      </svg>
    );
  }
);

SvenskaSpelLogoHorizontalTwoRows.displayName = 'SvenskaSpelLogoHorizontalTwoRows';
