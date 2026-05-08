import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { clsx } from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  errorText?: string;
  label?: string;
  variant?: 'solid' | 'outline';
  surface?: 'base' | 'surface';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    error,
    helperText,
    errorText,
    label,
    variant = 'solid',
    surface = 'base',
    className,
    id,
    disabled,
    ...props
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={clsx('w-full flex flex-col gap-[8px]', disabled && 'opacity-50')}>
        {label && (
          <div className="flex items-start w-full">
            <label
              htmlFor={inputId}
              className="flex-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] font-normal text-[#1b1918]"
            >
              {label}
            </label>
          </div>
        )}

        <div className="relative w-full group">
          <input
            ref={ref}
            id={inputId}
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
              'w-full px-[12px] py-[8px] rounded-[4px]',
              'font-["Svenska_Spel_Plan_Pro",sans-serif] text-[16px] leading-[24px] font-normal',
              'transition-all duration-200',
              'focus:outline-none',
              'text-ellipsis overflow-hidden whitespace-nowrap',

              // Text color
              'text-[#1b1918]',

              // Placeholder color
              'placeholder:text-[rgba(0,0,0,0.7)]',

              // Variant backgrounds
              variant === 'solid' && surface === 'base' && 'bg-white',
              variant === 'solid' && surface === 'surface' && 'bg-[#faf6f3]',
              variant === 'outline' && 'bg-transparent',

              // Remove default border (we use absolute positioned border)
              'border-0',

              // Disabled cursor
              disabled && 'cursor-not-allowed',

              className
            )}
            {...props}
          />

          {/* Absolute positioned border overlay - matches Figma exactly */}
          <div
            aria-hidden="true"
            className={clsx(
              'absolute inset-0 pointer-events-none rounded-[4px]',

              // Default border (when not focused and no error)
              !error && !isFocused && [
                'border border-solid border-[rgba(40,3,1,0.32)]',
                // Hover state - increases border opacity when hovering
                !disabled && 'group-hover:border-[rgba(40,3,1,0.4)]',
              ],

              // Focus border with shadow ring
              !error && isFocused && [
                'border border-solid border-[rgba(40,3,1,0.48)]',
                surface === 'base' && 'shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#1b1918]',
                surface === 'surface' && 'shadow-[0px_0px_0px_2px_#faf6f3,0px_0px_0px_4px_#1b1918]',
              ],

              // Error border with shadow ring (overrides all other states)
              error && [
                'border border-solid border-[rgba(40,3,1,0.32)]',
                'shadow-[0px_0px_0px_2px_#faf6f3,0px_0px_0px_4px_#c5281b]',
              ],
            )}
          />
        </div>

        {(helperText || errorText) && (
          <p className={clsx(
            'font-["Svenska_Spel_Plan_Pro",sans-serif] text-[14px] leading-[20px] font-normal w-full',
            error && errorText ? 'text-[#c5281b]' : 'text-[rgba(0,0,0,0.7)]'
          )}>
            {error && errorText ? errorText : helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
