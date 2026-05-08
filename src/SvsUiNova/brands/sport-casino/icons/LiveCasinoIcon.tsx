import { forwardRef, SVGProps } from 'react';

export interface LiveCasinoIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the icon (width and height)
   */
  size?: number;
}

/**
 * LiveCasinoIcon - Sport & Casino icon
 *
 * Generated from: live-casino-icon.svg
 */
export const LiveCasinoIcon = forwardRef<SVGSVGElement, LiveCasinoIconProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size || 48}
        height={size || 48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        
      
<g clipPath="url(#clip0_6840_60990)">
<path d="M0 0H48V48H0V0Z" fill="#FFD6E4"/>
<path d="M23.7223 15.6124H28.7912V33.7609H23.7223V38.1733H38.4565V33.7609H33.3875V15.6124H38.4565V11.2H23.7223V15.6124ZM75.2 14.9032V11.2H60.7547V38.1733H75.2V34.47H65.3509V26.1706H74.5959V22.4411H65.3509V14.9032H75.2ZM10.17 11.2H5.6V38.1733H19.7826V33.7084H10.17V11.2ZM46.9923 38.1733V36.65H56.8151V32.9467H42.3961V38.1733H46.9923ZM56.71 11.2L51.9037 29.2697H47.3075L42.5011 11.2H47.2287L49.6187 20.9703L52.0088 11.2H56.71Z" fill="#C70053"/>
</g>
<defs>
<clipPath id="clip0_6840_60990">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs></svg>
    );
  }
);

LiveCasinoIcon.displayName = 'LiveCasinoIcon';
