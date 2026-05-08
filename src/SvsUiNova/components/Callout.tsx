import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error';
  title?: string;
  icon?: React.ReactNode;
}

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ variant = 'default', title, icon, children, className, ...props }, ref) => {
    const variants = {
      default: 'bg-muted border-border text-foreground',
      info: 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-100',
      success: 'bg-green-50 border-green-200 text-green-900 dark:bg-green-950 dark:border-green-800 dark:text-green-100',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-100',
      error: 'bg-red-50 border-red-200 text-red-900 dark:bg-red-950 dark:border-red-800 dark:text-red-100',
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={clsx(
          'flex gap-3 p-4 border rounded-lg',
          variants[variant],
          className
        )}
        {...props}
      >
        {icon && <div className="flex-shrink-0 mt-0.5">{icon}</div>}
        <div className="flex-1">
          {title && <div className="font-semibold mb-1">{title}</div>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    );
  }
);

Callout.displayName = 'Callout';
