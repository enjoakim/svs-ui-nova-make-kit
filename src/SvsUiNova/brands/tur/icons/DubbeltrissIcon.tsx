import { forwardRef, SVGProps } from 'react';

export interface DubbeltrissIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the icon (width and height)
   */
  size?: number;
}

/**
 * DubbeltrissIcon - Tur icon
 *
 * Generated from: dubbeltriss-icon.svg
 */
export const DubbeltrissIcon = forwardRef<SVGSVGElement, DubbeltrissIconProps>(
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
        
      
<g clipPath="url(#clip0_7068_9344)">
<path d="M0 0H60V60H0V0Z" fill="#FFED00"/>
<path fillRule="evenodd" clipRule="evenodd" d="M32.1994 18.594C32.1994 17.6982 32.2479 16.6569 31.4895 15.9275H41.5768C40.8961 16.6604 40.9037 17.4072 40.8936 18.6117V33.7369C40.8936 36.2365 41.6761 37.1511 43.8364 37.1511C46.0224 37.1511 46.6533 36.1978 46.6533 33.7369V18.6207C46.6533 17.7249 46.6425 16.6053 45.9669 15.9259H56.0241C55.3437 16.6591 55.3491 17.2185 55.3396 18.594V33.883C55.3396 40.3575 49.8549 45.5282 43.6493 45.5282C37.4439 45.5282 32.1994 40.3575 32.1994 33.883V18.594Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M18.6908 37.2706H15.97V23.1864H18.6908C20.2624 23.1864 22.6188 24.3925 22.6188 29.5306C22.6188 37.6145 18.6908 37.2706 18.6908 37.2706ZM30.763 29.4828C30.763 29.4828 30.7132 15.9225 19.8203 15.9225H7.19995C7.71378 16.4751 7.847 16.9831 7.87047 17.6664V42.2547L7.88506 42.9376C7.86159 43.6209 7.72837 44.1441 7.21486 44.6967L19.8348 44.6983C32.0847 44.6983 30.7351 29.1402 30.763 29.4828Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M69.3907 37.1209H65.0869V33.238H69.3374C70.8387 33.238 71.3813 33.8648 71.3813 35.1277C71.3813 36.3841 70.8859 37.1209 69.3907 37.1209ZM65.0869 22.758H69.3907C70.8859 22.758 71.3214 23.3867 71.3214 24.6432C71.3214 25.9057 70.8387 26.677 69.3374 26.677H65.0869V22.758ZM57.2827 15.9241C57.762 16.4406 57.9126 16.9086 57.9339 17.5467V43.0677C57.9126 43.7054 57.762 44.1951 57.2827 44.7112H70.0191C79.1212 44.7112 79.0803 36.6041 79.0803 36.6041C79.0803 36.6041 79.3677 32.099 75.6351 29.9296C78.9576 27.9274 78.6689 23.6809 78.6689 23.6809C78.6689 23.6809 78.8688 15.9241 70.0191 15.9241H57.2827Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_7068_9344">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs></svg>
    );
  }
);

DubbeltrissIcon.displayName = 'DubbeltrissIcon';
