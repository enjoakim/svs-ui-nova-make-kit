import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string; // Optional label describing slider function
  min?: number; // Minimum value (default 0)
  max?: number; // Maximum value (default 100)
  step?: number; // Increment between values (default 1)
  showMinMax?: boolean; // Show min/max values at track edges
  showValue?: boolean; // Show current value
  orientation?: 'horizontal' | 'vertical';
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({
    label,
    min = 0,
    max = 100,
    step = 1,
    showMinMax = false,
    showValue = false,
    orientation = 'horizontal',
    className,
    id,
    value,
    disabled,
    ...props
  }, ref) => {
    const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {(label || showValue) && (
          <div className="flex items-center justify-between mb-2">
            {label && (
              <label
                htmlFor={sliderId}
                className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]  text-foreground"
              >
                {label}
              </label>
            )}
            {showValue && (
              <span className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] font-normal text-muted-foreground">
                {value}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-3">
          {showMinMax && (
            <span className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] font-normal text-muted-foreground">
              {min}
            </span>
          )}

          <input
            ref={ref}
            type="range"
            id={sliderId}
            min={min}
            max={max}
            step={step}
            value={value}
            disabled={disabled}
            className={clsx(
              // Base styles
              'w-full h-[8px] rounded-[9999px] appearance-none cursor-pointer transition-all',
              'focus:outline-none',

              // Rail (background track)
              'bg-[rgba(40,1,14,0.06)]',

              // Webkit track
              '[&::-webkit-slider-runnable-track]:h-[8px]',
              '[&::-webkit-slider-runnable-track]:rounded-[9999px]',
              '[&::-webkit-slider-runnable-track]:bg-[rgba(40,1,14,0.06)]',

              // Webkit thumb
              '[&::-webkit-slider-thumb]:appearance-none',
              '[&::-webkit-slider-thumb]:w-[20px]',
              '[&::-webkit-slider-thumb]:h-[20px]',
              '[&::-webkit-slider-thumb]:bg-white',
              '[&::-webkit-slider-thumb]:border-2',
              '[&::-webkit-slider-thumb]:border-[#1b1918]',
              '[&::-webkit-slider-thumb]:border-solid',
              '[&::-webkit-slider-thumb]:rounded-[9999px]',
              '[&::-webkit-slider-thumb]:cursor-pointer',
              '[&::-webkit-slider-thumb]:transition-all',
              '[&::-webkit-slider-thumb]:-mt-[6px]',

              // Mozilla track
              '[&::-moz-range-track]:h-[8px]',
              '[&::-moz-range-track]:rounded-[9999px]',
              '[&::-moz-range-track]:bg-[rgba(40,1,14,0.06)]',

              // Mozilla thumb
              '[&::-moz-range-thumb]:w-[20px]',
              '[&::-moz-range-thumb]:h-[20px]',
              '[&::-moz-range-thumb]:bg-white',
              '[&::-moz-range-thumb]:border-2',
              '[&::-moz-range-thumb]:border-[#1b1918]',
              '[&::-moz-range-thumb]:border-solid',
              '[&::-moz-range-thumb]:rounded-[9999px]',
              '[&::-moz-range-thumb]:cursor-pointer',
              '[&::-moz-range-thumb]:transition-all',

              // Mozilla progress (filled portion)
              '[&::-moz-range-progress]:h-[8px]',
              '[&::-moz-range-progress]:rounded-[9999px]',
              '[&::-moz-range-progress]:bg-[#1b1918]',

              // Disabled state
              disabled && [
                'opacity-50',
                'cursor-not-allowed',
                '[&::-webkit-slider-thumb]:cursor-not-allowed',
                '[&::-moz-range-thumb]:cursor-not-allowed',
              ],

              className
            )}
            style={{
              background: value !== undefined
                ? `linear-gradient(to right, #1b1918 0%, #1b1918 ${((Number(value) - min) / (max - min)) * 100}%, rgba(40,1,14,0.06) ${((Number(value) - min) / (max - min)) * 100}%, rgba(40,1,14,0.06) 100%)`
                : undefined,
            }}
            {...props}
          />

          {showMinMax && (
            <span className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] font-normal text-muted-foreground">
              {max}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
