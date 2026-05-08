import { forwardRef, SVGProps } from 'react';

export interface BiltrissIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the icon (width and height)
   */
  size?: number;
}

/**
 * BiltrissIcon - Tur icon
 *
 * Generated from: biltriss-icon.svg
 */
export const BiltrissIcon = forwardRef<SVGSVGElement, BiltrissIconProps>(
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
        
      
<g clipPath="url(#clip0_7068_9411)">
<path d="M0 0H60V60H0V0Z" fill="#FFED00"/>
<path fillRule="evenodd" clipRule="evenodd" d="M52.0233 36.9737H56.435C58.4259 36.9737 58.965 37.0396 60 36.4922V44.3998H43.2C43.8517 43.697 43.8413 42.9107 43.8413 42.0517V19.3775C43.8413 18.2554 43.8517 17.5029 43.2 16.7998H52.6802C52.0288 17.5029 52.0233 18.2403 52.0233 19.3775V36.9737Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M19.1957 37.1225H14.9319V33.3997H19.1429C20.6302 33.3997 21.1678 34.0006 21.1678 35.2114C21.1678 36.4161 20.677 37.1225 19.1957 37.1225ZM14.9319 23.3519H19.1957C20.677 23.3519 21.1084 23.9547 21.1084 25.1594C21.1084 26.3699 20.6302 27.1094 19.1429 27.1094H14.9319V23.3519ZM7.2002 16.7998C7.675 17.295 7.82426 17.7437 7.84531 18.3555V42.824C7.82426 43.4355 7.675 43.905 7.2002 44.3998H19.8182C28.8357 44.3998 28.7951 36.627 28.7951 36.627C28.7951 36.627 29.0798 32.3076 25.3819 30.2277C28.6735 28.3081 28.3876 24.2367 28.3876 24.2367C28.3876 24.2367 28.5855 16.7998 19.8182 16.7998H7.2002Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M40.1112 19.165C40.1112 18.2944 40.1335 17.511 40.7999 16.7998H31.2313C31.8974 17.511 31.8595 18.2944 31.8595 19.165L31.859 42.0333C31.859 42.9049 31.8664 43.6886 31.2 44.3998H40.7692C40.103 43.6886 40.1106 42.9049 40.1106 42.0333L40.1112 19.165Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_7068_9411">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs></svg>
    );
  }
);

BiltrissIcon.displayName = 'BiltrissIcon';
