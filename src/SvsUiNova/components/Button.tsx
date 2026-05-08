import { forwardRef, ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  fullWidth?: boolean;
  iconPosition?: 'left' | 'right';
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    icon,
    iconPosition = 'left',
    className,
    children,
    disabled,
    ...props
  }, ref) => {
    const isOutline = variant === 'outline';
    const isLink = variant === 'link';

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
          'content-stretch inline-flex items-center justify-center transition-all duration-200',
          'focus:outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',

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
            'text-[#1b1918] underline decoration-solid',
            !disabled && 'hover:opacity-70',
          ],

          variant === 'destructive' && [
            'bg-[#c5281b] text-white overflow-clip',
            !disabled && 'hover:bg-[#a52317]',
          ],

          // Size styles with design tokens
          !isLink && {
            'px-[16px] py-[6px] gap-[4px] rounded-[var(--radius)]': size === 'small',
            'px-[12px] py-[8px] gap-[8px] rounded-[var(--radius)]': size === 'medium',
            'px-[24px] py-[10px] gap-[8px] rounded-[6px]': size === 'large',
            'px-[32px] py-[14px] gap-[8px] rounded-[var(--radius-card)]': size === 'xlarge',
          },

          // Link size styles
          isLink && {
            'px-[16px] py-[6px] gap-[4px] overflow-clip': size === 'small',
            'px-[12px] py-[8px] gap-[8px] overflow-clip': size === 'medium',
            'px-[24px] py-[10px] gap-[8px] overflow-clip': size === 'large',
            'px-[32px] py-[14px] gap-[8px] overflow-clip': size === 'xlarge',
          },

          // Width
          fullWidth && 'w-full',

          className
        )}
        {...props}
      >
        {children ? (
          <>
            {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
            <p
              className={clsx(
                'not-italic whitespace-nowrap',
                isOutline && 'relative',
                !isLink && 'shrink-0'
              )}
              style={{
                fontFamily: 'var(--font-family/plan-pro)',
                fontSize: size === 'small' ? '14px' : size === 'medium' ? '16px' : size === 'large' ? '16px' : '18px',
                fontWeight: 500,
                lineHeight: size === 'small' ? '20px' : size === 'medium' ? '24px' : size === 'large' ? '24px' : '24px'
              }}
            >
              {children}
            </p>
            {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
          </>
        ) : (
          icon && <span className="flex items-center justify-center">{icon}</span>
        )}

        {/* Absolute positioned border overlay for outline variant */}
        {isOutline && (
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[var(--radius)] border border-solid border-[rgba(40,3,1,0.32)]"
          />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
