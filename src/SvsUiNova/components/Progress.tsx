import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({
    value,
    max = 100,
    showLabel = false,
    size = 'md',
    variant = 'default',
    className,
    ...props
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    const sizes = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    };

    const variants = {
      default: 'bg-primary',
      success: 'bg-green-600',
      warning: 'bg-yellow-500',
      error: 'bg-destructive',
    };

    return (
      <div className="w-full">
        {showLabel && (
          <div className="flex items-center justify-between mb-2 text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="">{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          ref={ref}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          className={clsx(
            'w-full bg-muted rounded-full overflow-hidden',
            sizes[size],
            className
          )}
          {...props}
        >
          <div
            className={clsx(
              'h-full rounded-full transition-all duration-300',
              variants[variant]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';
