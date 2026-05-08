import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string; // Required per guidelines
  description?: string; // Optional additional explanation
  indeterminate?: boolean; // For parent checkboxes with partial child selection
  destructive?: boolean; // Destructive state with red text
  alignment?: 'left' | 'right'; // Checkbox alignment
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, indeterminate = false, destructive = false, alignment = 'left', className, id, disabled, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const checkboxElement = (
      <div className={clsx('relative h-5 w-5 mt-0.5', disabled && 'opacity-50')}>
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          disabled={disabled}
          className={clsx(
            // Base styles
            'h-5 w-5 rounded border-2 cursor-pointer transition-all appearance-none',
            'focus:outline-none peer',

            // Unselected state - stroke-high
            !disabled && [
              'border-[#1b1918]',
              'hover:border-[rgba(27,25,24,0.7)]',
              'active:border-[rgba(27,25,24,0.5)]',
            ],

            // Checked state
            'checked:bg-[#62001d] checked:border-[#62001d]',
            'checked:hover:bg-[#4a0015] checked:hover:border-[#4a0015]',

            // Indeterminate state
            indeterminate && 'bg-[#62001d] border-[#62001d]',

            // Disabled state
            disabled && 'cursor-not-allowed border-[rgba(27,25,24,0.3)]',

            className
          )}
          {...props}
        />
        {/* Checkmark icon for selected state */}
        <div className={clsx(
          'absolute left-[2px] top-[2px] w-4 h-4 overflow-clip pointer-events-none',
          indeterminate ? 'hidden' : 'hidden peer-checked:block'
        )}>
          <svg className="absolute left-[12.22%] top-[20.05%] w-[71.71%] h-[53.4%]" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4733 8.54483">
            <path d="M11.4733 0.667124L10.8035 0L3.60122 7.21123L0.669829 4.29483L0 4.96195L3.35879 8.30403L3.35945 8.30338L3.60188 8.54483L11.4733 0.667124Z" fill="white" />
          </svg>
        </div>
        {/* Minus icon for indeterminate state */}
        {indeterminate && (
          <div className="absolute left-[2px] top-[2px] w-4 h-4 overflow-clip pointer-events-none">
            <svg className="absolute left-[12.5%] top-[45.83%] w-[75%] h-[6.25%]" fill="none" preserveAspectRatio="none" viewBox="0 0 12 1">
              <path d="M0 0H12V1H0V0Z" fill="white" />
            </svg>
          </div>
        )}
      </div>
    );

    const contentElement = (
      <div className="flex-1">
        <label
          htmlFor={checkboxId}
          className={clsx(
            'block font-["Svenska_Spel_Plan_Pro",sans-serif] text-[14px] leading-[20px] font-normal',
            'select-none',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            destructive ? 'text-[#c5281b]' : 'text-[#1b1918]'
          )}
        >
          {label}
        </label>
        {description && (
          <p className={clsx(
            'mt-1 font-["Svenska_Spel_Plan_Pro",sans-serif] text-[14px] leading-[20px] font-normal',
            'text-[rgba(0,0,0,0.7)]'
          )}>
            {description}
          </p>
        )}
      </div>
    );

    return (
      <div className={clsx('flex items-start gap-2', alignment === 'right' && 'flex-row-reverse')}>
        {alignment === 'left' ? (
          <>
            {checkboxElement}
            {contentElement}
          </>
        ) : (
          <>
            {contentElement}
            {checkboxElement}
          </>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
