import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = 'horizontal', decorative = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role={decorative ? 'none' : 'separator'}
        aria-orientation={orientation}
        className={clsx(
          'bg-border',
          orientation === 'horizontal' && 'h-px w-full',
          orientation === 'vertical' && 'w-px h-full',
          className
        )}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';
