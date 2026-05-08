import { forwardRef, SVGProps } from 'react';

export interface FlerLotterIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the icon (width and height)
   */
  size?: number;
}

/**
 * FlerLotterIcon - Tur icon
 *
 * Generated from: fler-lotter-icon.svg
 */
export const FlerLotterIcon = forwardRef<SVGSVGElement, FlerLotterIconProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size || 60}
        height={size || 60}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        
      
<g clipPath="url(#clip0_7068_9332)">
<path d="M0 0H60V60H0V0Z" fill="#9231FF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M31.8713 41.2V13.422H25.7533V41.2H31.8713ZM16.6612 41.2V30.75H22.7412V24.898H16.6612V20.832H22.9312V14.904H10.3152V41.2H16.6612ZM53.466 37.0961C52.858 38.2741 50.578 41.5421 44.878 41.5421C38.684 41.5421 34.428 37.6281 34.428 31.1301C34.428 25.0501 38.494 20.5281 44.422 20.5281C50.654 20.5281 54.416 24.5941 54.416 30.6741C54.416 31.282 54.416 32.0041 54.34 33.0301H40.774C41.04 34.9681 42.598 36.146 44.916 36.146C47.158 36.146 48.374 34.8161 48.754 34.3601L53.466 37.0961ZM48.0701 28.7359H40.9261C41.0401 27.1779 42.2561 25.6199 44.4221 25.6199C46.6261 25.6199 47.9181 27.0639 48.0701 28.7359ZM62.9762 29.078V41.2H56.8582V20.87H62.9762V22.276C63.7362 21.288 64.7242 20.756 66.5482 20.756V27.178H65.0282C63.3942 27.178 62.9762 27.824 62.9762 29.078Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_7068_9332">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs></svg>
    );
  }
);

FlerLotterIcon.displayName = 'FlerLotterIcon';
