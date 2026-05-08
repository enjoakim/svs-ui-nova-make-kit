import { forwardRef, HTMLAttributes, ReactNode, useEffect } from 'react';
import { clsx } from 'clsx';

export interface DialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  children?: ReactNode;
  mobile?: boolean; // When true, uses centered mobile layout
  scrollable?: boolean; // When true, content area becomes scrollable
}

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({
    open,
    onClose,
    title,
    description,
    icon,
    mobile = false,
    scrollable = false,
    children,
    className,
    ...props
  }, ref) => {
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      if (open) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [open, onClose]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop/Scrim */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Dialog */}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          aria-describedby={description ? 'dialog-description' : undefined}
          className={clsx(
            'relative bg-white rounded-[8px]',
            'flex flex-col gap-[24px] p-[24px]',

            // Width constraints
            mobile ? [
              'min-w-[280px] max-w-[560px] w-full',
              'max-h-[650px]', // Mobile has max height constraint
            ] : [
              'min-w-[400px] max-w-[640px] w-[512px]',
            ],

            // Alignment
            mobile ? 'items-center' : 'items-start',

            className
          )}
          {...props}
        >
          {/* Absolute positioned border overlay with shadow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[8px] border-0 border-[rgba(40,3,1,0.08)] border-solid shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]"
          />

          {/* Content wrapper */}
          <div className={clsx(
            'flex gap-[16px] w-full shrink-0',
            mobile ? 'flex-col items-center' : 'flex-row items-start'
          )}>
            {icon && (
              <div className="shrink-0 size-[48px] overflow-clip">
                {icon}
              </div>
            )}

            <div className={clsx(
              'flex flex-col gap-[8px] flex-1 min-w-0',
              mobile ? 'items-center' : 'items-start'
            )}>
              {title && (
                <h2
                  id="dialog-title"
                  className={clsx(
                    "text-[20px] leading-[28px] text-[#1b1918] w-full shrink-0",
                    mobile && 'text-center min-w-full w-[min-content]'
                  )}
                  style={{
                    fontFamily: 'var(--font-family/plan-pro)',
                    fontWeight: 500
                  }}
                >
                  {title}
                </h2>
              )}

              {description && !scrollable && (
                <p
                  id="dialog-description"
                  className={clsx(
                    "font-['Svenska_Spel_Plan_Pro',sans-serif] font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.7)] w-full shrink-0",
                    mobile && 'overflow-clip'
                  )}
                >
                  {description}
                </p>
              )}

              {scrollable && description && (
                <div className="h-[288px] w-full shrink-0 rounded-[6px] relative">
                  <div className="size-full overflow-x-clip overflow-y-auto">
                    <div className="p-[16px] flex flex-col gap-[16px] items-start size-full">
                      <p
                        className="text-[14px] leading-[20px] text-[#1b1918] w-full shrink-0"
                        style={{
                          fontFamily: 'var(--font-family/plan-pro)',
                          fontWeight: 500
                        }}
                      >
                        Tags
                      </p>
                      <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.7)] w-full shrink-0">
                        {description}
                      </p>

                      {/* Scrollbar thumb */}
                      <div className="absolute right-0 top-0 h-[122px] p-[2px] flex flex-col items-start overflow-clip">
                        <div className="bg-[rgba(40,3,1,0.16)] rounded-[9999px] w-[8px] flex-1 min-h-0" />
                      </div>
                    </div>
                  </div>
                  {/* Absolute positioned border overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-[6px] border border-[rgba(40,3,1,0.16)] border-solid"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Footer/Actions */}
          {children}
        </div>
      </div>
    );
  }
);

Dialog.displayName = 'Dialog';

export const DialogFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { mobile?: boolean }
>(
  ({ mobile = false, className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'flex gap-[8px] w-full shrink-0',
        mobile ? 'flex-col items-center' : 'flex-row items-center justify-end',
        className
      )}
      {...props}
    />
  )
);

DialogFooter.displayName = 'DialogFooter';
