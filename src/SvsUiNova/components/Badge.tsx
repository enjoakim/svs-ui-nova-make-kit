import { forwardRef, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Checkmark } from './icons';

export interface BadgeProps {
  variant?: 'brand' | 'neutral' | 'success' | 'attention' | 'important';
  emphasis?: 'filled' | 'tint';
  size?: 'dot' | 'small' | 'medium' | 'large';
  children?: ReactNode; // Badge text
  showIcon?: boolean; // Show checkmark icon
  className?: string;
  'aria-label'?: string;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (props, ref) => {
    const {
      variant = 'brand',
      emphasis = 'filled',
      size = 'medium',
      children,
      showIcon = false,
      className,
      ...restProps
    } = props;

    // Variant colors - exact from Figma
    const variantStyles = {
      brand: {
        filled: 'bg-[#ed0000] text-white',
        tint: 'bg-[#ffd5ce] text-[#86102c]',
      },
      neutral: {
        filled: 'bg-[rgba(40,3,1,0.8)] text-white',
        tint: 'bg-[rgba(40,3,1,0.08)] text-[#1b1918]',
      },
      success: {
        filled: 'bg-[#017e0f] text-white',
        tint: 'bg-[#ebffe2] text-[#002201]',
      },
      attention: {
        filled: 'bg-[#e6b037] text-[#3e2e09]',
        tint: 'bg-[#fcefd9] text-[#241a03]',
      },
      important: {
        filled: 'bg-[#c5281b] text-white',
        tint: 'bg-[#fceeeb] text-[#3b0603]',
      },
    };

    const getVariantStyle = () => {
      return variantStyles[variant]?.[emphasis] || variantStyles.brand.filled;
    };

    // Dot badge - 8px circle, no content
    if (size === 'dot') {
      return (
        <div
          ref={ref}
          className={clsx(
            'size-[8px] rounded-[9999px]',
            getVariantStyle(),
            className
          )}
          {...restProps}
        />
      );
    }

    // Size configurations - exact from Figma
    const sizeConfig = {
      small: {
        height: 'h-[20px]',
        minWidth: 'min-w-[20px]',
        padding: 'px-[4px] py-[2px]',
        fontSize: 'text-[12px]',
        lineHeight: 'leading-[16px]',
        iconSize: 'size-[12px]',
      },
      medium: {
        height: 'h-[24px]',
        minWidth: 'min-w-[24px]',
        padding: 'px-[6px] py-[2px]',
        fontSize: 'text-[12px]',
        lineHeight: 'leading-[16px]',
        iconSize: 'size-[12px]',
      },
      large: {
        height: 'h-[28px]',
        minWidth: 'min-w-[28px]',
        padding: 'px-[6px] py-[4px]',
        fontSize: 'text-[14px]',
        lineHeight: 'leading-[20px]',
        iconSize: 'size-[14px]',
      },
    };

    const config = sizeConfig[size];

    return (
      <div
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center rounded-[9999px] overflow-clip',
          "text-center whitespace-nowrap",
          config.height,
          config.minWidth,
          config.padding,
          config.fontSize,
          config.lineHeight,
          getVariantStyle(),
          className
        )}
        style={{
          fontFamily: 'var(--font-family/plan-pro)',
          fontWeight: 500
        }}
        {...restProps}
      >
        {showIcon && (
          <div className={clsx('overflow-clip shrink-0', config.iconSize)}>
            <Checkmark className="size-full" />
          </div>
        )}
        {children && (
          <div className="flex items-center justify-center px-[4px] shrink-0">
            {children}
          </div>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
