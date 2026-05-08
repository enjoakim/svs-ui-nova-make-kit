import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  description?: string;
  alignment?: 'left' | 'right';
  destructive?: boolean;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, description, alignment = 'left', destructive = false, className, id, disabled, ...props }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    const switchControl = (
      <label htmlFor={switchId} className={clsx('relative inline-flex items-center', disabled && 'opacity-50', disabled ? 'cursor-not-allowed' : 'cursor-pointer')}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={switchId}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        <span
          className={clsx(
            'w-11 h-6 rounded-full transition-all duration-200 block',
            'bg-[rgba(40,1,14,0.06)]',
            'peer-checked:bg-[#62001d]'
          )}
        />
        <span
          className={clsx(
            'absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200',
            'shadow-[0px_1px_2px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.1)]',
            'peer-checked:translate-x-5'
          )}
        />
      </label>
    );

    const labelContent = (
      <div className="flex-1">
        <p
          className={clsx(
            'block font-["Svenska_Spel_Plan_Pro",sans-serif] text-[14px] leading-[20px] font-normal',
            'select-none',
            destructive ? 'text-[#c5281b]' : 'text-[#1b1918]'
          )}
        >
          {label}
        </p>
        {description && (
          <p className="mt-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] font-normal text-[rgba(0,0,0,0.7)]">
            {description}
          </p>
        )}
      </div>
    );

    return (
      <div className={clsx('flex items-start gap-4', className)}>
        {alignment === 'left' && switchControl}
        {labelContent}
        {alignment === 'right' && switchControl}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
