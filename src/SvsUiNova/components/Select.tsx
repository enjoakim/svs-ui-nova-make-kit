import { forwardRef, useState, useRef, useEffect } from 'react';
import { clsx } from 'clsx';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  flag?: React.ReactNode;
}

export interface SelectProps {
  label: string;
  helperText?: string;
  errorText?: string;
  error?: boolean;
  options: SelectOption[];
  variant?: 'solid' | 'outline';
  surface?: 'base' | 'surface';
  showFlag?: boolean;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  id?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({
    label,
    helperText,
    errorText,
    error,
    options,
    variant = 'outline',
    surface = 'base',
    className,
    id,
    disabled,
    showFlag,
    value,
    defaultValue,
    onChange,
  }, ref) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value || defaultValue || options[0]?.value);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === selectedValue);

    useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
      setSelectedValue(optionValue);
      onChange?.(optionValue);
      setIsOpen(false);
    };

    return (
      <div className={clsx("w-full", className)} ref={ref}>
        <label
          htmlFor={selectId}
          className="block mb-2 text-foreground text-[14px] leading-[20px]"
          style={{ fontFamily: 'var(--font-family/plan-pro)' }}
        >
          {label}
        </label>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            id={selectId}
            disabled={disabled}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={clsx(
              // Base styles
              'w-full h-[40px] relative rounded-[var(--radius)]',
              'transition-all duration-200',
              'focus:outline-none',

              // Variant: Solid
              variant === 'solid' && [
                surface === 'base' && 'bg-card',
                surface === 'surface' && 'bg-[var(--color-sidebar-accent)]',

                // States for solid
                !error && !disabled && [
                  'border border-[rgba(40,3,1,0.32)] border-solid',
                  'hover:border-[rgba(40,3,1,0.48)]',
                  isOpen && 'border-ring',
                ],

                // Disabled state
                disabled && 'bg-muted text-muted-foreground cursor-not-allowed border border-muted border-solid',
              ],

              // Variant: Outline
              variant === 'outline' && [
                surface === 'base' && 'bg-card',
                surface === 'surface' && 'bg-transparent',

                // States for outline
                !error && !disabled && [
                  'border border-border border-solid',
                  'hover:border-[rgba(40,3,1,0.24)]',
                  isOpen && 'border-ring',
                ],

                // Disabled state
                disabled && 'border border-border border-solid bg-transparent text-muted-foreground cursor-not-allowed opacity-40',
              ],

              // Error state
              error && !disabled && [
                'border border-primary border-solid',
                variant === 'solid' && 'bg-[rgba(237,0,0,0.05)]',
                isOpen && 'border-primary',
              ],
            )}
          >
            <div className="flex gap-2 items-center px-3 py-2 size-full overflow-hidden rounded-[inherit]">
              {showFlag && selectedOption?.flag && (
                <div className="w-6 h-4 flex items-center justify-center shrink-0">
                  {selectedOption.flag}
                </div>
              )}
              <p
                className={clsx(
                  'flex-[1_0_0] min-w-px overflow-hidden text-ellipsis whitespace-nowrap not-italic text-left',
                  !selectedValue && 'text-muted-foreground',
                  selectedValue && 'text-foreground'
                )}
                style={{
                  fontFamily: 'var(--font-family/plan-pro)',
                  fontSize: '16px',
                  fontWeight: 'var(--font-weight/font-normal)',
                  lineHeight: '1.5'
                }}
              >
                {selectedOption?.label}
              </p>
              <div className="relative shrink-0 size-4">
                <div className="absolute inset-[22.79%_0]">
                  <svg
                    className={clsx('absolute block inset-0 size-full transition-transform duration-200', isOpen && 'rotate-180')}
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 16 8.70787"
                  >
                    <path d="M16 0.707107L15.2929 4.83195e-05L7.9995 7.29349L0.707011 0L0 0.707107L7.99924 8.70787L16 0.707107Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {isOpen && (
            <div
              className="absolute z-50 w-full mt-2 bg-popover border border-border border-solid shadow-lg max-h-[240px] overflow-auto"
              style={{ borderRadius: 'var(--radius)' }}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  disabled={option.disabled}
                  onClick={() => !option.disabled && handleSelect(option.value)}
                  className={clsx(
                    'w-full px-3 py-2',
                    'transition-colors duration-150',
                    'flex gap-2 items-center',
                    option.disabled && 'opacity-40 cursor-not-allowed',
                    !option.disabled && 'hover:bg-[var(--color-sidebar-accent)] cursor-pointer',
                    selectedValue === option.value && 'bg-[var(--color-sidebar-accent)]',
                  )}
                >
                  {showFlag && option.flag && (
                    <div className="w-6 h-4 flex items-center justify-center shrink-0">
                      {option.flag}
                    </div>
                  )}
                  <p
                    className="flex-[1_0_0] min-w-px overflow-hidden text-ellipsis whitespace-nowrap not-italic text-left text-foreground"
                    style={{
                      fontFamily: 'var(--font-family/plan-pro)',
                      fontSize: '16px',
                      fontWeight: 'var(--font-weight/font-normal)',
                      lineHeight: '1.5'
                    }}
                  >
                    {option.label}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>
        {(helperText || errorText) && (
          <p
            className={clsx(
              'mt-2 text-[14px] leading-[20px]',
              error && errorText ? 'text-primary' : 'text-muted-foreground'
            )}
            style={{ fontFamily: 'var(--font-family/plan-pro)', fontWeight: 'var(--font-weight/font-normal)' }}
          >
            {error && errorText ? errorText : helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
