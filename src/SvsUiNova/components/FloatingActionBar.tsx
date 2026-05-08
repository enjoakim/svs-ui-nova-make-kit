import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface FloatingActionBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  position?: 'bottom' | 'top';
  alignment?: 'left' | 'center' | 'right';
  supportiveAction?: ReactNode;
  contentSlot?: ReactNode;
  primaryAction?: ReactNode;
  showProgress?: boolean;
  progressValue?: number; // 0-100
  progressSum?: string; // e.g., "0 kr"
  badgeCount?: number;
}

export const FloatingActionBar = forwardRef<HTMLDivElement, FloatingActionBarProps>(
  ({
    position = 'bottom',
    alignment = 'right',
    supportiveAction,
    contentSlot,
    primaryAction,
    showProgress = false,
    progressValue = 0,
    progressSum = '0 kr',
    badgeCount,
    className,
    ...props
  }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'fixed left-0 right-0 z-40',
          position === 'bottom' && 'bottom-6',
          position === 'top' && 'top-0',
          className
        )}
        {...props}
      >
        <div
          className={clsx(
            'mx-auto bg-white rounded-[8px]',
            'shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]',
            'grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))]',

            // Mobile: 8px padding and gap
            'p-[8px] gap-x-[8px] gap-y-[8px]',

            // Desktop (Large+): 16px padding and gap
            'lg:p-[16px] lg:gap-x-[16px] lg:gap-y-[16px]',

            // Alignment
            alignment === 'right' && 'mr-4 lg:mr-8',
            alignment === 'left' && 'ml-4 lg:ml-8',
            alignment === 'center' && 'mx-auto',

            // Width - full on mobile, 50% on desktop
            'w-full lg:max-w-[50%]'
          )}
        >
          {/* Left section: Supportive action + Content slot */}
          <div className="col-1 row-1 flex items-center gap-[8px] lg:gap-[16px] self-start">
            {supportiveAction && (
              <div className="relative shrink-0">
                {supportiveAction}
                {badgeCount !== undefined && badgeCount > 0 && (
                  <div className="absolute -right-[3px] -top-[3px] bg-[#c5281b] rounded-[9999px] min-w-[20px] h-[20px] flex items-center justify-center px-[4px] py-[2px]">
                    <p className=" text-[12px] leading-[16px] text-white whitespace-nowrap">
                      {badgeCount > 9 ? '9+' : badgeCount}
                    </p>
                  </div>
                )}
              </div>
            )}
            {contentSlot && (
              <div className="flex-1">
                {contentSlot}
              </div>
            )}
          </div>

          {/* Right section: Primary action or Progress */}
          {showProgress ? (
            <div className="col-2 row-1 flex flex-col gap-[4px] h-[40px] items-center justify-center shrink-0 w-[157.5px] lg:w-[240px] justify-self-end self-center">
              <div className="flex items-center justify-center gap-[4px] w-full  text-[14px] leading-[20px] text-[#1b1918] whitespace-nowrap">
                <span>{progressSum}</span>
              </div>
              <div className="w-full h-[4px] bg-[#ffd5ce] rounded-[9999px] overflow-clip relative">
                <div
                  className="absolute top-0 bottom-0 left-0 bg-[#ed0000]"
                  style={{ width: `${Math.max(0.001, progressValue)}%` }}
                />
              </div>
            </div>
          ) : (
            primaryAction && (
              <div className="col-2 row-1 flex items-center justify-end shrink-0">
                {primaryAction}
              </div>
            )
          )}
        </div>
      </div>
    );
  }
);

FloatingActionBar.displayName = 'FloatingActionBar';
