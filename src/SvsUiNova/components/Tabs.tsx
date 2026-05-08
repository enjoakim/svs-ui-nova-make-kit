import { forwardRef, HTMLAttributes, useState } from 'react';
import { clsx } from 'clsx';

export interface TabItem {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  items: TabItem[];
  defaultTab?: number;
  emphasis?: 'low' | 'high';
  containerBg?: 'white' | 'warm-grey';
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ items, defaultTab = 0, emphasis = 'low', containerBg = 'white', className, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const tabsContainerBg = containerBg === 'white' ? 'rgba(40, 1, 14, 0.06)' : '#FFFFFF';

    const getActiveTabBg = () => {
      if (emphasis === 'high') return '#62001d';
      return containerBg === 'warm-grey' ? '#efeae7' : '#FFFFFF';
    };

    return (
      <div ref={ref} className={className} {...props}>
        {/* Tab List */}
        <div
          role="tablist"
          className="inline-flex gap-1 p-1 rounded-lg"
          style={{ backgroundColor: tabsContainerBg }}
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
                'px-3 py-1.5 text-sm transition-colors rounded-md',
                'focus:outline-none',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                emphasis === 'low' && [
                  activeTab === index
                    ? 'text-[#1b1918]'
                    : 'text-[rgba(0,0,0,0.7)] hover:text-[#1b1918]'
                ],
                emphasis === 'high' && [
                  activeTab === index
                    ? 'text-white'
                    : 'text-[rgba(0,0,0,0.7)] hover:text-[#1b1918]'
                ]
              )}
              style={{
                fontFamily: 'var(--font-family/plan-pro)',
                fontWeight: activeTab === index ? 500 : 400,
                backgroundColor: activeTab === index ? getActiveTabBg() : 'transparent'
              }}
            >
              {item.label}
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

Tabs.displayName = 'Tabs';
