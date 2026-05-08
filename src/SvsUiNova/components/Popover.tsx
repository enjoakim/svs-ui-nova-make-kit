import { forwardRef, HTMLAttributes, useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ trigger, content, position = 'bottom', className, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const positions = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    return (
      <div ref={popoverRef} className="relative inline-block" {...props}>
        <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
        {isOpen && (
          <div
            ref={ref}
            className={clsx(
              'absolute z-50 bg-popover text-popover-foreground border border-border rounded-lg shadow-lg p-4 min-w-[200px]',
              positions[position],
              className
            )}
          >
            {content}
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';
