import { forwardRef, SVGAttributes } from 'react';
import svgPaths from './svg-paths';

export interface SvenskaSpelLogoVerticalProps extends Omit<SVGAttributes<SVGSVGElement>, 'viewBox'> {
  inverted?: boolean;
}

export const SvenskaSpelLogoVertical = forwardRef<SVGSVGElement, SvenskaSpelLogoVerticalProps>(
  ({ inverted = false, className, ...props }, ref) => {
    const textColor = inverted ? 'white' : '#1B1918';

    return (
      <svg
        ref={ref}
        viewBox={inverted ? "0 0 264.151 200" : "0 0 264.789 200"}
        fill="none"
        className={className}
        {...props}
      >
        <g>
          {inverted ? (
            <>
              <path d={svgPaths.p372ecb80} fill={textColor} />
              <path d={svgPaths.pc250f70} fill="#B30415" />
              <path d={svgPaths.p3e607500} fill="#C80011" />
              <path d={svgPaths.p1b679a00} fill="#E8E4E2" />
              <path d={svgPaths.p212e4900} fill="#FF2D29" />
              <path d={svgPaths.p465a780} fill="white" />
              <path d={svgPaths.p4b5c740} fill="white" />
            </>
          ) : (
            <>
              <path d={svgPaths.p3c9b4600} fill={textColor} />
              <path d={svgPaths.p21dffe00} fill="#B30415" />
              <path d={svgPaths.p1e5ac000} fill="#C80011" />
              <path d={svgPaths.p25866700} fill="#E8E4E2" />
              <path d={svgPaths.pa6a5400} fill="#FF2D29" />
              <path d={svgPaths.p26d1e800} fill="white" />
              <path d={svgPaths.p19024a00} fill="white" />
            </>
          )}
        </g>
      </svg>
    );
  }
);

SvenskaSpelLogoVertical.displayName = 'SvenskaSpelLogoVertical';
