import { forwardRef, ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'xs' | 'small' | 'medium';
  icon: React.ReactNode;
  'aria-label': string; // Required for accessibility
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({
    variant = 'primary',
    size = 'small',
    icon,
    className,
    disabled,
    ...props
  }, ref) => {
    const isOutline = variant === 'outline';

    const getBackgroundStyle = () => {
      if (variant === 'neutral') {
        return { backgroundColor: 'rgba(40, 1, 14, 0.06)' };
      }
      return undefined;
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        style={getBackgroundStyle()}
        className={clsx(
          // Base styles
          'inline-flex items-center justify-center  transition-all duration-200',
          'focus:outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'shrink-0', // Prevent button from shrinking

          // Position relative for outline border overlay
          isOutline && 'relative',

          // Variant background and text colors
          variant === 'primary' && [
            'bg-[#ed0000] text-white overflow-clip',
            !disabled && 'hover:bg-[#D10011]',
          ],

          variant === 'secondary' && [
            'bg-[#ffd5ce] text-[#86102c] overflow-clip',
            !disabled && 'hover:bg-[#ffcabf]',
          ],

          variant === 'neutral' && [
            'text-[#1b1918] overflow-clip',
          ],

          variant === 'outline' && [
            'bg-transparent text-[#1b1918]',
          ],

          variant === 'ghost' && [
            'bg-transparent text-[#1b1918] overflow-clip',
          ],

          variant === 'link' && [
            'bg-transparent text-[#1b1918]',
            !disabled && 'hover:opacity-70',
          ],

          variant === 'destructive' && [
            'bg-[#c5281b] text-white overflow-clip',
            !disabled && 'hover:bg-[#a52317]',
          ],

          // Size styles - square buttons
          {
            'h-6 w-6 p-0 rounded-[4px]': size === 'xs',
            'h-8 w-8 p-0 rounded-[4px]': size === 'small',
            'h-[40px] w-[40px] p-0 rounded-[4px]': size === 'medium',
          },

          className
        )}
        {...props}
      >
        <span className="flex items-center justify-center">
          {icon}
        </span>

        {/* Absolute positioned border overlay for outline variant */}
        {isOutline && (
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[4px] border border-solid border-[rgba(40,3,1,0.32)]"
          />
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
