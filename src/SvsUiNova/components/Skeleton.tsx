import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({
    variant = 'text',
    width,
    height,
    animation = 'pulse',
    className,
    style,
    ...props
  }, ref) => {
    const variants = {
      text: 'rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-lg',
    };

    const animations = {
      pulse: 'animate-pulse',
      wave: 'animate-shimmer',
      none: '',
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'bg-muted',
          variants[variant],
          animations[animation],
          className
        )}
        style={{
          width: width || (variant === 'text' ? '100%' : undefined),
          height: height || (variant === 'text' ? '1em' : undefined),
          ...style,
        }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
