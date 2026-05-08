import { SVGProps } from 'react';
import svgPaths from '../../imports/Icons/svg-2dqjhgc4pl';

export type IconName =
  | 'minus'
  | 'menu-left'
  | 'menu-right'
  | 'shopping-cart'
  | 'video-play'
  | 'all-meetings'
  | 'blinkers'
  | 'horseshoe-off'
  | 'horseshoe-on'
  | 'flag'
  | 'cloudy'
  | 'partly-cloudy'
  | 'rainy'
  | 'sunny'
  | 'horse'
  | 'soccer'
  | 'basketball'
  | 'tennis'
  | 'golf'
  | 'hockey'
  | 'football'
  | 'baseball'
  | 'volleyball'
  | 'cricket'
  | 'rugby'
  | 'badminton'
  | 'table-tennis'
  | 'handball'
  | 'swimming'
  | 'cycling'
  | 'running'
  | 'skiing'
  | 'snowboarding'
  | 'skating'
  | 'boxing'
  | 'wrestling'
  | 'martial-arts'
  | 'archery'
  | 'shooting'
  | 'fencing'
  | 'rowing'
  | 'sailing'
  | 'surfing'
  | 'diving'
  | 'gymnastics'
  | 'athletics'
  | 'weightlifting'
  | 'climbing'
  | 'motorsports'
  | 'esports';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
}

const iconDefinitions: Record<IconName, { viewBox: string; paths: JSX.Element }> = {
  'minus': {
    viewBox: '0 0 18 1.5',
    paths: <path d="M0 0H18V1.5H0V0Z" fill="currentColor" />
  },
  'menu-left': {
    viewBox: '0 0 24 24',
    paths: <path d="M12.0011 24L13.0617 22.9394L2.12157 11.9993L13.0618 1.06054L12.0011 0L0 11.9989L12.0011 24Z" fill="currentColor" />
  },
  'menu-right': {
    viewBox: '0 0 24 24',
    paths: <path d="M11.9989 0L10.9383 1.06059L21.8784 12.0007L10.9382 22.9395L11.9989 24L24 12.0011L11.9989 0Z" fill="currentColor" />
  },
  'shopping-cart': {
    viewBox: '0 0 23.2491 22.125',
    paths: (
      <g>
        <path d={svgPaths.pbf7f200} fill="currentColor" />
        <path d={svgPaths.p1797a100} fill="currentColor" />
        <path d={svgPaths.p370e62f0} fill="currentColor" />
        <path d={svgPaths.p3fe84700} fill="currentColor" />
      </g>
    )
  },
  'video-play': {
    viewBox: '0 0 13.125 18',
    paths: <path d={svgPaths.p3fd6b780} fill="currentColor" />
  },
  'flag': {
    viewBox: '0 0 24 24',
    paths: <path d={svgPaths.p1d74900} fill="currentColor" />
  },
  // Add more icons here as needed
  // The full icon library can be expanded by extracting more from the Figma import
  'all-meetings': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'blinkers': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'horseshoe-off': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'horseshoe-on': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'cloudy': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'partly-cloudy': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'rainy': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'sunny': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'horse': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'soccer': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'basketball': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'tennis': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'golf': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'hockey': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'football': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'baseball': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'volleyball': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'cricket': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'rugby': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'badminton': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'table-tennis': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'handball': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'swimming': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'cycling': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'running': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'skiing': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'snowboarding': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'skating': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'boxing': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'wrestling': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'martial-arts': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'archery': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'shooting': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'fencing': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'rowing': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'sailing': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'surfing': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'diving': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'gymnastics': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'athletics': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'weightlifting': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'climbing': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'motorsports': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
  'esports': { viewBox: '0 0 24 24', paths: <path fill="currentColor" /> },
};

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const icon = iconDefinitions[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {icon.paths}
    </svg>
  );
}
