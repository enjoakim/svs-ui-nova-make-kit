import { forwardRef } from 'react';
import { clsx } from 'clsx';

export interface AvatarBadge {
  variant: 'important' | 'attention' | 'success' | 'neutral';
  content: string | number; // Short text (1-2 words) or number
  position?: 'bottom-right'; // Only one position currently
}

export interface AvatarProps {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'L' | 'XL' | 'XXL';
  type?: 'text' | 'image' | 'signedOut';
  userName?: string; // Required when type is 'text'
  imageSrc?: string; // Required when type is 'image'
  badge?: AvatarBadge; // Optional badge indicator
  className?: string;
  alt?: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ size = 'm', type = 'text', userName, imageSrc, badge, className, alt }, ref) => {
    const sizes = {
      xxs: 'w-4 h-4 text-[8px]',
      xs: 'w-6 h-6 text-[10px]',
      s: 'w-8 h-8 text-xs',
      m: 'w-10 h-10 text-sm',
      L: 'w-12 h-12 text-base',
      XL: 'w-14 h-14 text-lg',
      XXL: 'w-16 h-16 text-xl',
    };

    const badgeSizes = {
      xxs: 'w-2 h-2',
      xs: 'w-2.5 h-2.5',
      s: 'w-3 h-3',
      m: 'w-3.5 h-3.5',
      L: 'w-4 h-4',
      XL: 'w-5 h-5',
      XXL: 'w-6 h-6',
    };

    const badgeVariants = {
      important: 'bg-[#ED0000]',
      attention: 'bg-[#FFB800]',
      success: 'bg-[#00A651]',
      neutral: 'bg-[rgba(40,3,1,0.6)]',
    };

    const getInitial = () => {
      if (userName) {
        return userName.charAt(0).toUpperCase();
      }
      return '?';
    };

    const renderContent = () => {
      if (type === 'image' && imageSrc) {
        return (
          <img
            src={imageSrc}
            alt={alt || userName || 'Avatar'}
            className="w-full h-full object-cover"
          />
        );
      }

      if (type === 'signedOut') {
        return (
          <svg className="w-2/3 h-2/3 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        );
      }

      // Default: text type
      return (
        <span className=" text-foreground">
          {getInitial()}
        </span>
      );
    };

    return (
      <div ref={ref} className={clsx('relative inline-flex', className)}>
        <div
          className={clsx(
            'flex items-center justify-center rounded-full overflow-hidden',
            'bg-[rgba(40,3,1,0.08)]',
            'ring-1 ring-[rgba(40,3,1,0.12)]',
            sizes[size]
          )}
        >
          {renderContent()}
        </div>

        {badge && (
          <div
            className={clsx(
              'absolute bottom-0 right-0',
              'flex items-center justify-center',
              'rounded-full',
              'ring-2 ring-white',
              badgeSizes[size],
              badgeVariants[badge.variant]
            )}
          >
            {typeof badge.content === 'number' && badge.content > 9 ? (
              <span className="text-[8px]  text-white">
                9+
              </span>
            ) : typeof badge.content === 'number' ? (
              <span className="text-[8px]  text-white">
                {badge.content}
              </span>
            ) : (
              <span className="text-[8px]  text-white truncate px-1">
                {badge.content}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
