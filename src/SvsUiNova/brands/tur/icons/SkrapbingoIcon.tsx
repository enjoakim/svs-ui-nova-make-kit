import { forwardRef, SVGProps } from 'react';

export interface SkrapbingoIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the icon (width and height)
   */
  size?: number;
}

/**
 * SkrapbingoIcon - Tur icon
 *
 * Generated from: skrapbingo-icon.svg
 */
export const SkrapbingoIcon = forwardRef<SVGSVGElement, SkrapbingoIconProps>(
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
        
      
<g clipPath="url(#clip0_7068_9445)">
<path d="M0 0H60V60H0V0Z" fill="#ABD8E8"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12.6823 31.9827H12.2285V40.8681H13.0983C14.4598 40.8681 15.0649 39.8092 15.0649 36.6334C15.0649 32.966 13.9303 31.9827 12.6823 31.9827ZM13.0227 19.8827H12.2285V28.0117H13.0227C14.2329 28.0117 14.8758 27.3319 14.8758 23.9283C14.8758 20.223 14.0816 19.8827 13.0227 19.8827ZM13.5522 44.8768H7.19971V15.8372H13.59C17.2196 15.8372 19.6022 17.954 19.6022 23.2476C19.6022 26.5 18.808 28.8438 17.1062 29.9405C18.9215 30.886 19.9425 33.1172 19.9425 36.9737C19.9425 42.1917 17.7491 44.8768 13.5522 44.8768Z" fill="#009ACC"/>
<path fillRule="evenodd" clipRule="evenodd" d="M23.562 44.9522H28.5909V15.8379H23.562V44.9522Z" fill="#009ACC"/>
<path fillRule="evenodd" clipRule="evenodd" d="M44.0788 44.9519H40.3735L36.6295 30.0165V44.9519H32.4705V15.8375H36.7052L39.9197 28.7307V15.8375H44.0788V44.9519Z" fill="#009ACC"/>
<path fillRule="evenodd" clipRule="evenodd" d="M60.3653 44.8766H59.0039L58.2475 43.6286C57.1896 44.8388 55.8659 45.3304 53.5212 45.3304C50.1185 45.3304 47.925 43.4017 47.925 39.5074V21.8113C47.925 17.5 50.3454 15.3453 54.0885 15.3453C57.529 15.3453 59.6846 16.7068 59.6846 21.8491C59.6846 23.2484 59.5712 24.5711 59.4199 25.5544L55.6012 25.2518C55.7146 24.4198 55.8281 23.6634 55.8281 22.3786C55.8281 19.6178 55.223 19.2018 54.391 19.2018C53.2565 19.2018 52.9539 19.8069 52.9539 21.1306V39.8856C52.9539 40.9813 53.3699 41.5486 54.3532 41.5486C55.1474 41.5486 55.5634 40.9813 55.5634 39.8856V30.9614H60.3653V44.8766Z" fill="#009ACC"/>
</g>
<defs>
<clipPath id="clip0_7068_9445">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs></svg>
    );
  }
);

SkrapbingoIcon.displayName = 'SkrapbingoIcon';
