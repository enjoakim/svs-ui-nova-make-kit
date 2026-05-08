import { forwardRef, SVGProps } from 'react';

export interface LyckoplatsenIconProps extends SVGProps<SVGSVGElement> {
  /**
   * Size of the icon (width and height)
   */
  size?: number;
}

/**
 * LyckoplatsenIcon - Tur icon
 *
 * Generated from: lyckoplatsen-icon.svg
 */
export const LyckoplatsenIcon = forwardRef<SVGSVGElement, LyckoplatsenIconProps>(
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
        
      
<g clipPath="url(#clip0_7068_9369)">
<path d="M0 0H60V60H0V0Z" fill="#2073E5"/>
<path d="M13.5742 14.3826V38.6575H27.5432V44.8351H7.13184V14.3826H13.5742Z" fill="white"/>
<path d="M34.0764 43.094L25.852 23.4747H32.4681L37.2113 35.9596L41.9559 23.4747H48.5721L36.6913 51.8813H30.1206L34.0804 43.094H34.0764Z" fill="white"/>
<path d="M64.0891 36.5261C63.2215 38.2325 61.4528 39.4017 59.4061 39.4017C59.1988 39.4017 58.993 39.3884 58.7924 39.3657C57.7537 39.2534 56.8312 38.8472 56.0933 38.2258C54.9115 37.2637 54.1548 35.7978 54.1548 34.1555C54.1548 32.6094 54.8233 31.221 55.8874 30.2616C56.612 29.5774 57.5425 29.1217 58.5999 28.9721C58.8633 28.932 59.1307 28.9119 59.4034 28.9119C61.3779 28.9119 63.0998 30.0037 63.9942 31.6152H69.8216C69.2561 26.7004 64.7295 23.0457 59.3766 23.0457C53.0666 23.0457 48.2793 27.8309 48.2793 34.1822C48.2793 40.5336 53.0666 45.2747 59.3766 45.2747C64.8164 45.2747 69.3858 41.62 69.8644 36.5301H64.0864L64.0891 36.5261Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_7068_9369">
<rect width="60" height="60" fill="white"/>
</clipPath>
</defs></svg>
    );
  }
);

LyckoplatsenIcon.displayName = 'LyckoplatsenIcon';
