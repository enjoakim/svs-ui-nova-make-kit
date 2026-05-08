import { forwardRef, HTMLAttributes, useEffect, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface BottomSheetProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title: string; // Required per guidelines
  description?: string; // Optional supportive text
  type?: 'modal' | 'non-modal';
  height?: 'auto' | 'half' | 'full';
  hasFooter?: boolean;
  hasCloseAction?: boolean;
  footer?: ReactNode;
}

export const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
  ({
    open,
    onClose,
    title,
    description,
    type = 'modal',
    height = 'auto',
    hasFooter = false,
    hasCloseAction = true,
    footer,
    children,
    className,
    ...props
  }, ref) => {
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }

      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [open]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50">
        {/* Scrim (backdrop) - only for modal type */}
        {type === 'modal' && (
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
        )}

        {/* Sheet */}
        <div
          ref={ref}
          className={clsx(
            'absolute bottom-0 left-0 right-0',
            'bg-card rounded-t-2xl shadow-lg',
            'font-["Svenska_Spel_Plan_Pro",sans-serif]',
            'animate-in slide-in-from-bottom duration-300',

            // Height modes
            height === 'auto' && 'max-h-[90vh]',
            height === 'half' && 'h-[50vh]',
            height === 'full' && 'h-[calc(100vh-32px)]',

            // Scrolling
            'overflow-hidden flex flex-col',

            className
          )}
          {...props}
        >
          {/* Drag Handle */}
          <div className="flex justify-center py-3 flex-shrink-0">
            <div className="w-12 h-1 bg-[rgba(40,3,1,0.16)] rounded-full" />
          </div>

          {/* Header */}
          <div className="px-6 pb-4 border-b border-[rgba(40,3,1,0.16)] flex-shrink-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-[20px] leading-[28px]  text-foreground">
                  {title}
                </h2>
                {description && (
                  <p className="mt-1 text-[14px] leading-[20px] font-normal text-muted-foreground">
                    {description}
                  </p>
                )}
              </div>
              {hasCloseAction && type === 'modal' && (
                <button
                  onClick={onClose}
                  className="ml-4 p-2 hover:bg-accent rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 5L15 15M5 15L15 5" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Content - scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">{children}</div>
          </div>

          {/* Footer (optional) */}
          {hasFooter && footer && (
            <div className="px-6 py-4 border-t border-[rgba(40,3,1,0.16)] flex-shrink-0">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';
