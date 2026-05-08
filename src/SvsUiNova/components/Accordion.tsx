import { forwardRef, HTMLAttributes, ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import { MenuUp } from './icons';

export interface AccordionItemProps {
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  variant?: 'default' | 'low-emphasis' | 'mid-emphasis';
  label?: string; // Optional label for card variants
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, allowMultiple = false, variant = 'default', label, className, ...props }, ref) => {
    const [openItems, setOpenItems] = useState<number[]>(
      items.map((item, index) => item.defaultOpen ? index : -1).filter(i => i >= 0)
    );

    const toggleItem = (index: number) => {
      if (allowMultiple) {
        setOpenItems(prev =>
          prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
      } else {
        setOpenItems(prev => prev.includes(index) ? [] : [index]);
      }
    };

    const hasLabel = variant !== 'default' && label;

    return (
      <div
        ref={ref}
        className={clsx(
          'flex flex-col items-start w-full shrink-0',
          variant !== 'default' && 'bg-white rounded-[8px]',
          className
        )}
        {...props}
      >
        {/* Label for card variants */}
        {hasLabel && (
          <div className="w-full shrink-0 relative">
            <div className="p-[16px] flex items-start size-full">
              <p
                className={clsx(
                  "text-[#1b1918] shrink-0 whitespace-nowrap",
                  variant === 'mid-emphasis' ? 'text-[18px] leading-[24px]' : 'text-[16px] leading-[24px]'
                )}
                style={{
                  fontFamily: 'var(--font-family/plan-pro)',
                  fontWeight: 500
                }}
              >
                {label}
              </p>
            </div>
          </div>
        )}

        {/* Accordion Items */}
        {items.map((item, index) => {
          const isOpen = openItems.includes(index);
          const isFirst = index === 0;

          return (
            <div
              key={index}
              className={clsx(
                'relative w-full shrink-0',
                !isOpen && (hasLabel ? 'h-[64px]' : 'h-[56px]')
              )}
            >
              {/* Border overlay */}
              <div
                aria-hidden="true"
                className={clsx(
                  'absolute inset-0 pointer-events-none border-solid',
                  variant === 'default' ? [
                    'border-b border-[rgba(40,3,1,0.16)]',
                  ] : [
                    'border-t',
                    isFirst && hasLabel ? 'border-[rgba(40,3,1,0.08)]' : 'border-[rgba(40,3,1,0.16)]',
                  ]
                )}
              />

              {/* Content */}
              <div className={clsx(
                'flex flex-col items-start size-full',
                isOpen ? (hasLabel ? 'pb-[16px] px-[16px]' : '') : (hasLabel ? 'justify-center px-[16px]' : 'justify-center')
              )}>
                {/* Trigger */}
                <button
                  onClick={() => toggleItem(index)}
                  className={clsx(
                    'flex gap-[24px] items-center w-full shrink-0',
                    hasLabel || variant === 'default' ? 'py-[16px]' : 'py-[16px]'
                  )}
                  aria-expanded={isOpen}
                >
                  <p
                    className="flex-1 min-w-0 text-[16px] leading-[24px] text-[#1b1918] text-left"
                    style={{
                      fontFamily: 'var(--font-family/plan-pro)',
                      fontWeight: variant === 'low-emphasis' ? 400 : 500
                    }}
                  >
                    {item.title}
                  </p>

                  {/* Icon */}
                  <div className={clsx(
                    'shrink-0 size-[16px]',
                    !isOpen && 'rotate-180'
                  )}>
                    <MenuUp className="size-full text-[#1B1918]" />
                  </div>
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="w-full shrink-0 relative">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className={clsx(
                        'flex items-center justify-center relative size-full',
                        hasLabel ? 'pr-[16px]' : ''
                      )}>
                        <p className="flex-1 min-w-0 font-['Svenska_Spel_Plan_Pro',sans-serif] font-normal text-[16px] leading-[24px] text-[#1b1918]">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
