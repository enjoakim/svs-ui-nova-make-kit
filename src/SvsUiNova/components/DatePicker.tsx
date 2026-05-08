import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { clsx } from 'clsx';

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string; // Required per guidelines
  helperText?: string; // Optional guidance text
  errorText?: string; // Error message when validation fails
  error?: boolean;
  variant?: 'solid' | 'outline';
  surface?: 'base' | 'surface';
  mode?: 'single' | 'range'; // Single date or date range selection
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({
    label,
    helperText,
    errorText,
    error,
    variant = 'solid',
    surface = 'base',
    mode = 'single',
    className,
    id,
    disabled,
    ...props
  }, ref) => {
    const datePickerId = id || `datepicker-${Math.random().toString(36).substr(2, 9)}`;
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        <label
          htmlFor={datePickerId}
          className="block mb-2 font-['Svenska_Spel_Plan_Pro',sans-serif] text-xs leading-[16px] font-normal text-foreground"
        >
          {label}
        </label>
        <input
          ref={ref}
          type="date"
          id={datePickerId}
          disabled={disabled}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={clsx(
            // Base styles
            'w-full h-[48px] px-4 py-3 rounded-lg',
            'font-["Svenska_Spel_Plan_Pro",sans-serif] text-[16px] leading-[24px] font-normal',
            'transition-all duration-200',
            'focus:outline-none',

            // Calendar icon cursor
            '[&::-webkit-calendar-picker-indicator]:cursor-pointer',

            // Variant: Solid
            variant === 'solid' && [
              surface === 'base' && 'bg-white',
              surface === 'surface' && 'bg-[#F5F2EF]',
              'border-2 border-transparent',

              // States for solid
              !error && !disabled && [
                'hover:border-[rgba(40,3,1,0.16)]',
                isFocused && 'border-foreground ring-0',
              ],

              // Disabled state
              disabled && 'bg-[rgba(40,3,1,0.06)] text-[rgba(0,0,0,0.4)] cursor-not-allowed',
            ],

            // Variant: Outline
            variant === 'outline' && [
              surface === 'base' && 'bg-white',
              surface === 'surface' && 'bg-transparent',
              'border-2',

              // States for outline
              !error && !disabled && [
                'border-[rgba(40,3,1,0.16)]',
                'hover:border-[rgba(40,3,1,0.24)]',
                isFocused && 'border-foreground ring-0',
              ],

              // Disabled state
              disabled && 'border-[rgba(40,3,1,0.06)] bg-transparent text-[rgba(0,0,0,0.4)] cursor-not-allowed',
            ],

            // Error state (overrides other states)
            error && !disabled && [
              'border-[#ED0000]',
              variant === 'solid' && 'bg-[rgba(237,0,0,0.05)]',
              'focus:border-[#ED0000]',
            ],

            className
          )}
          {...props}
        />
        {(helperText || errorText) && (
          <p className={clsx(
            'mt-2 font-["Svenska_Spel_Plan_Pro",sans-serif] text-[14px] leading-[20px] font-normal',
            error && errorText ? 'text-[#ED0000]' : 'text-[rgba(0,0,0,0.7)]'
          )}>
            {error && errorText ? errorText : helperText}
          </p>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
