import { forwardRef, SVGProps } from 'react';

export interface LivecasinoTextonlyInvertedProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the logo (width and height)
   */
  size?: number;
}

/**
 * LivecasinoTextonlyInverted - Sport & Casino logo
 *
 * Generated from: livecasino-textonly-inverted.svg
 */
export const LivecasinoTextonlyInverted = forwardRef<SVGSVGElement, LivecasinoTextonlyInvertedProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size || 124}
        height={size || 48}
        viewBox="0 0 124 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        
      
<path d="M32.2868 7.852H41.3177V40.148H32.2868V48H58.5374V40.148H49.5064V7.852H58.5374V0H32.2868V7.852ZM124 6.59007V0H98.2642V48H124V41.4099H106.453V26.6407H122.924V20.0039H106.453V6.59007H124ZM8.14189 0H0V48H25.2679V40.0545H8.14189V0ZM73.7449 48V45.2892H91.2453V38.6991H65.5562V48H73.7449ZM91.0581 0L82.4951 32.1558H74.3064L65.7434 0H74.166L78.4241 17.3866L82.6823 0H91.0581Z" fill="white"/></svg>
    );
  }
);

LivecasinoTextonlyInverted.displayName = 'LivecasinoTextonlyInverted';
