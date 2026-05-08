import { forwardRef, HTMLAttributes, useEffect, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  variant?: 'default' | 'success' | 'error' | 'warning';
  duration?: number;
  position?: 'top' | 'bottom';
  action?: ReactNode;
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({
    open,
    onClose,
    variant = 'default',
    duration = 5000,
    position = 'bottom',
    action,
    children,
    className,
    ...props
  }, ref) => {
    useEffect(() => {
      if (open && duration > 0) {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
      }
    }, [open, duration, onClose]);

    if (!open) return null;

    const variants = {
      default: 'bg-[#1b1918] text-white',
      success: 'bg-[#d4f4dd] text-[#1b1918]',
      error: 'bg-[#ffd5ce] text-[#1b1918]',
      warning: 'bg-[#fff3cd] text-[#1b1918]',
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={clsx(
          'fixed left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[300px] max-w-md',
          'font-["Svenska_Spel_Plan_Pro",sans-serif] text-[14px] leading-[20px]',
          position === 'bottom' && 'bottom-4',
          position === 'top' && 'top-4',
          variants[variant],
          className
        )}
        {...props}
      >
        <div className="flex-1">{children}</div>
        {action && (
          <div className="shrink-0">
            {action}
          </div>
        )}
        <button
          onClick={onClose}
          className="text-current opacity-70 hover:opacity-100 transition-opacity shrink-0"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    );
  }
);

Snackbar.displayName = 'Snackbar';
