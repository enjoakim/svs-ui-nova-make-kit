import { forwardRef, HTMLAttributes, useState } from 'react';
import { clsx } from 'clsx';

export interface TabMenuItem {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsMenuProps extends HTMLAttributes<HTMLDivElement> {
  items: TabMenuItem[];
  defaultTab?: number;
}

export const TabsMenu = forwardRef<HTMLDivElement, TabsMenuProps>(
  ({ items, defaultTab = 0, className, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
      <div ref={ref} className={className} {...props}>
        {/* Tab Menu List */}
        <div
          role="tablist"
          className="flex items-center border-b border-[rgba(40,3,1,0.16)]"
        >
          {items.map((item, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tabpanel-${index}`}
              disabled={item.disabled}
              onClick={() => !item.disabled && setActiveTab(index)}
              className={clsx(
                'relative flex flex-col items-center gap-2 px-1.5 pt-5 pb-4 w-[120px]',
                'transition-colors focus:outline-none',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
            >
              {/* Icon */}
              {item.icon && (
                <div
                  className={clsx(
                    'w-7 h-7 flex items-center justify-center',
                    activeTab === index ? 'text-[#1B1918]' : 'text-[rgba(0,0,0,0.7)]'
                  )}
                >
                  {item.icon}
                </div>
              )}

              {/* Label */}
              <div
                className={clsx(
                  'text-center whitespace-nowrap text-base leading-6',
                  activeTab === index
                    ? 'text-[#1B1918]'
                    : 'text-[rgba(0,0,0,0.7)]'
                )}
                style={{
                  fontFamily: 'var(--font-family/plan-pro)',
                  fontWeight: activeTab === index ? 500 : 400
                }}
              >
                {item.label}
              </div>

              {/* Active Indicator */}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ED0000]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        {items.map((item, index) => (
          <div
            key={index}
            id={`tabpanel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            hidden={activeTab !== index}
            className="mt-4"
          >
            {activeTab === index && item.content}
          </div>
        ))}
      </div>
    );
  }
);

TabsMenu.displayName = 'TabsMenu';
