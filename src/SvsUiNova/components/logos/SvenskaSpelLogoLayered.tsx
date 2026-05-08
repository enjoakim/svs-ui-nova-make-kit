import { forwardRef, SVGAttributes } from 'react';
import svgPaths from './svg-paths';

export interface SvenskaSpelLogoLayeredProps extends Omit<SVGAttributes<SVGSVGElement>, 'viewBox'> {
  inverted?: boolean;
}

export const SvenskaSpelLogoLayered = forwardRef<SVGSVGElement, SvenskaSpelLogoLayeredProps>(
  ({ inverted = false, className, ...props }, ref) => {
    const textColor = inverted ? 'white' : '#1B1918';

    return (
      <svg
        ref={ref}
        viewBox="0 0 277.62 140"
        fill="none"
        className={className}
        {...props}
      >
        <g>
          {inverted ? (
            <>
              <path d={svgPaths.pf728600} fill={textColor} />
              <path d={svgPaths.p37fa5f00} fill="#B30415" />
              <path d={svgPaths.p3f14d500} fill="#C80011" />
              <path d={svgPaths.p29c7d800} fill="#E8E4E2" />
              <path d={svgPaths.p4678200} fill="#FF2D29" />
              <path d={svgPaths.p32f12280} fill="white" />
              <path d={svgPaths.p242d6400} fill="white" />
            </>
          ) : (
            <>
              <path d={svgPaths.p22ff1570} fill={textColor} />
              <path d={svgPaths.p3e014600} fill="#B30415" />
              <path d={svgPaths.p2e85b3c0} fill="#C80011" />
              <path d={svgPaths.p114d0700} fill="#E8E4E2" />
              <path d={svgPaths.p4d30200} fill="#FF2D29" />
              <path d={svgPaths.p321a4200} fill="white" />
              <path d={svgPaths.p30bc5500} fill="white" />
            </>
          )}
        </g>
      </svg>
    );
  }
);

SvenskaSpelLogoLayered.displayName = 'SvenskaSpelLogoLayered';
