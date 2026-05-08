import { SVGProps } from 'react';

export function Checkmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.29688 9.05859L1.19531 5.95703L0.132812 7.01953L4.29688 11.1836L11.8672 3.61328L10.8047 2.55078L4.29688 9.05859Z"
        fill="currentColor"
      />
    </svg>
  );
}
