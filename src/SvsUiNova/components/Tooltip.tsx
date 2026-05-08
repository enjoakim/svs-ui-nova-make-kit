import { forwardRef, HTMLAttributes, useState } from 'react';
import { clsx } from 'clsx';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, position = 'top', children, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const positions = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    return (
      <div
        ref={ref}
        className={clsx('relative inline-block', className)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        {...props}
      >
        {children}
        {isVisible && (
          <div
            role="tooltip"
            className={clsx(
              'absolute z-50 px-3 py-2 text-xs  text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap pointer-events-none',
              positions[position]
            )}
          >
            {content}
            <div
              className={clsx(
                'absolute w-2 h-2 bg-gray-900 rotate-45',
                position === 'top' && 'bottom-[-4px] left-1/2 -translate-x-1/2',
                position === 'bottom' && 'top-[-4px] left-1/2 -translate-x-1/2',
                position === 'left' && 'right-[-4px] top-1/2 -translate-y-1/2',
                position === 'right' && 'left-[-4px] top-1/2 -translate-y-1/2'
              )}
            />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
