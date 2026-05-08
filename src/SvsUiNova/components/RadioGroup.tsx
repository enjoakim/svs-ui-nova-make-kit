import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { clsx } from 'clsx';

export interface RadioOption {
  value: string;
  label: string;
  description?: string; // Optional additional explanation
  disabled?: boolean;
  destructive?: boolean; // Red text for error/destructive states
}

export interface RadioGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string; // Group label
  options: RadioOption[]; // Must have at least 2 options per guidelines
  name: string; // Required for grouping
  orientation?: 'horizontal' | 'vertical';
  alignment?: 'left' | 'right'; // Radio position relative to label
  defaultValue?: string; // Default selected value
  value?: string; // Controlled value
  onChange?: (value: string) => void; // Change handler
}

export const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({
    label,
    options,
    name,
    orientation = 'vertical',
    alignment = 'left',
    defaultValue,
    value,
    onChange,
    className,
    ...props
  }, ref) => {
    const [focusedValue, setFocusedValue] = useState<string | null>(null);

    return (
      <div className={className}>
        {label && (
          <label className="block mb-3 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]  text-[#1b1918]">
            {label}
          </label>
        )}
        <div
          role="radiogroup"
          className={clsx(
            'flex',
            orientation === 'vertical' && 'flex-col gap-4',
            orientation === 'horizontal' && 'flex-row flex-wrap gap-6'
          )}
        >
          {options.map((option) => {
            const radioId = `${name}-${option.value}`;
            const isFocused = focusedValue === option.value;

            return (
              <div
                key={option.value}
                className={clsx(
                  'flex items-start gap-[8px]',
                  option.disabled && 'opacity-50'
                )}
              >
                {alignment === 'right' && (
                  <div className="flex-1">
                    <label
                      htmlFor={radioId}
                      className={clsx(
                        'block font-["Svenska_Spel_Plan_Pro",sans-serif] text-[14px] leading-[20px] font-normal select-none',
                        option.destructive ? 'text-[#c5281b]' : 'text-[#1b1918]',
                        option.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                      )}
                    >
                      {option.label}
                    </label>
                    {option.description && (
                      <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] font-normal text-[rgba(0,0,0,0.7)]">
                        {option.description}
                      </p>
                    )}
                  </div>
                )}

                {/* Custom Radio Button */}
                <label
                  htmlFor={radioId}
                  className={clsx(
                    'relative shrink-0 size-[20px]',
                    !option.disabled && 'cursor-pointer'
                  )}
                >
                  <input
                    ref={ref}
                    type="radio"
                    id={radioId}
                    name={name}
                    value={option.value}
                    disabled={option.disabled}
                    {...(value !== undefined
                      ? { checked: value === option.value }
                      : { defaultChecked: defaultValue === option.value }
                    )}
                    onChange={(e) => onChange?.(e.target.value)}
                    onFocus={() => setFocusedValue(option.value)}
                    onBlur={() => setFocusedValue(null)}
                    className="sr-only peer"
                    {...props}
                  />

                  {/* Radio base (border) */}
                  <div
                    className={clsx(
                      'absolute left-0 top-0 size-[20px] rounded-[9999px] border border-solid transition-all pointer-events-none',
                      // Unselected border
                      'border-[#1b1918]',
                      // Selected border
                      'peer-checked:border-[#62001d]',
                      // Focus ring
                      isFocused && 'shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#1b1918]'
                    )}
                  />

                  {/* Radio check (filled circle when selected) */}
                  <div className="absolute left-[4px] top-[4px] size-[12px] peer-checked:block hidden pointer-events-none">
                    <svg
                      className="absolute block inset-0 size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 12 12"
                    >
                      <circle
                        cx="6"
                        cy="6"
                        r="5.5"
                        fill="#62001d"
                        stroke="#62001d"
                      />
                    </svg>
                  </div>
                </label>

                {alignment === 'left' && (
                  <div className="flex-1 flex flex-col gap-[4px]">
                    <label
                      htmlFor={radioId}
                      className={clsx(
                        'font-["Svenska_Spel_Plan_Pro",sans-serif] text-[14px] leading-[20px] font-normal select-none w-full shrink-0',
                        option.destructive ? 'text-[#c5281b]' : 'text-[#1b1918]',
                        option.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
                      )}
                    >
                      {option.label}
                    </label>
                    {option.description && (
                      <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] font-normal text-[rgba(0,0,0,0.7)] w-full shrink-0">
                        {option.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
