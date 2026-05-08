import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'current';
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', variant = 'primary', className, ...props }, ref) => {
    const sizes = {
      sm: 'w-4 h-4 border-2',
      md: 'w-8 h-8 border-3',
      lg: 'w-12 h-12 border-4',
    };

    const variants = {
      primary: 'border-primary border-t-transparent',
      secondary: 'border-secondary border-t-transparent',
      current: 'border-current border-t-transparent',
    };

    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading"
        className={clsx(
          'inline-block rounded-full animate-spin',
          sizes[size],
          variants[variant],
          className
        )}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
