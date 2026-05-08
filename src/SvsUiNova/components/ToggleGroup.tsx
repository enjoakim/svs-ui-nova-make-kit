import { forwardRef, HTMLAttributes, useState } from 'react';
import { clsx } from 'clsx';

export interface ToggleOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface ToggleGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: ToggleOption[];
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  type?: 'single' | 'multiple';
  size?: 'sm' | 'md' | 'lg';
  emphasis?: 'base' | 'low';
}

export const ToggleGroup = forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({
    options,
    value: controlledValue,
    defaultValue,
    onChange,
    type = 'single',
    size = 'md',
    emphasis = 'base',
    className,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = useState<string | string[]>(
      defaultValue ?? (type === 'multiple' ? [] : '')
    );

    const value = controlledValue ?? internalValue;

    const handleToggle = (optionValue: string) => {
      let newValue: string | string[];

      if (type === 'multiple') {
        const currentValue = Array.isArray(value) ? value : [];
        newValue = currentValue.includes(optionValue)
          ? currentValue.filter(v => v !== optionValue)
          : [...currentValue, optionValue];
      } else {
        newValue = value === optionValue ? '' : optionValue;
      }

      setInternalValue(newValue);
      onChange?.(newValue);
    };

    const isSelected = (optionValue: string) => {
      return Array.isArray(value)
        ? value.includes(optionValue)
        : value === optionValue;
    };

    // Sizes based on Figma: medium (px-3 py-2 text-base) and small (px-2 py-1.5 text-sm)
    const sizes = {
      sm: 'px-2 py-1.5 text-sm gap-1',
      md: 'px-3 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2',
    };

    return (
      <div
        ref={ref}
        role="group"
        className={clsx(
          'inline-flex gap-1 rounded-[4px] overflow-clip w-full',
          className
        )}
        style={{
          backgroundColor: emphasis === 'base' ? '#FAF6F3' : 'transparent'
        }}
        {...props}
      >
        <div className="grid gap-1 grid-flow-col auto-cols-fr w-full">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              disabled={option.disabled}
              onClick={() => handleToggle(option.value)}
              className={clsx(
                'relative rounded-[4px] transition-all flex items-center justify-center',
                'focus:outline-none',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                sizes[size],
                emphasis === 'base' && 'border-2',
                emphasis === 'low' && 'border',
                isSelected(option.value)
                  ? emphasis === 'base'
                    ? 'bg-white text-[#1b1918] font-["Svenska_Spel_Plan_Pro",sans-serif] border-[#ed0000]'
                    : 'bg-[#ffd5ce] text-[#1b1918] font-["Svenska_Spel_Plan_Pro",sans-serif] border-[#ed0000]'
                  : 'bg-transparent text-[rgba(0,0,0,0.7)] font-["Svenska_Spel_Plan_Pro",sans-serif] border-transparent'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
);

ToggleGroup.displayName = 'ToggleGroup';
