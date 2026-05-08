import { forwardRef, SVGProps } from 'react';

export interface MinitrissIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the icon (width and height)
   */
  size?: number;
}

/**
 * MinitrissIcon - Tur icon
 *
 * Generated from: minitriss-icon.svg
 */
export const MinitrissIcon = forwardRef<SVGSVGElement, MinitrissIconProps>(
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
        
      
<g clipPath="url(#clip0_7068_9385)">
<path d="M0 0H60V60H0V0Z" fill="#FFED00"/>
<path fillRule="evenodd" clipRule="evenodd" d="M48.5274 19.2265C48.5274 18.3516 48.551 17.5641 49.2234 16.8478H39.5647C40.2359 17.5641 40.1975 18.3516 40.1975 19.2265V42.2221C40.1975 43.0982 40.2049 43.8869 39.5325 44.6021H49.1924C48.5199 43.8869 48.5261 43.0982 48.5261 42.2221L48.5274 19.2265Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M52.8181 19.2332V42.2289C52.8181 43.1037 52.7945 43.8912 52.1208 44.6076H61.782C61.1096 43.8912 61.148 43.1037 61.148 42.2289V30.7935L68.9171 44.6076H79.3785C78.7073 43.8912 78.7446 43.1037 78.7446 42.2289V41.8732C78.7458 41.8607 78.7483 41.8495 78.7483 41.837V18.8476C78.7595 18.1238 78.8388 17.4623 79.412 16.8533H79.3202L79.3227 16.8521L69.7993 16.8533C70.4717 17.5684 70.4643 18.3559 70.4643 19.2332V31.1292L62.6964 16.8521H52.5216L52.5228 16.8533H52.1531C52.8256 17.5684 52.8181 18.3559 52.8181 19.2332Z" fill="black"/>
<path fillRule="evenodd" clipRule="evenodd" d="M35.9673 19.2324C35.9673 18.3588 35.9909 17.57 36.6633 16.8549H26.4637L21.8844 26.6392L17.609 16.8549H7.23321C7.90441 17.57 7.86595 18.3588 7.86595 19.2324V42.2243C7.86595 43.1004 7.87215 43.8891 7.19971 44.6042H16.81C16.1376 43.8891 16.1438 43.1004 16.1438 42.2243V30.709L20.3211 41.9822H23.532L27.7131 30.709V42.2243C27.7131 43.1004 27.7205 43.8891 27.0481 44.6042H36.6311C35.9586 43.8891 35.9661 43.1004 35.9661 42.2243L35.9673 19.2324Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_7068_9385">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs></svg>
    );
  }
);

MinitrissIcon.displayName = 'MinitrissIcon';
