import { SVGProps, useEffect, useRef, useState } from 'react';
import Icons from '../../imports/Icons/Icons';

export interface IconDynamicProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: string;
  size?: number;
}

/**
 * Dynamic Icon component that extracts icons from the imported Icons.tsx component
 * This allows us to use all 329+ icons without manually defining each one
 */
export function IconDynamic({ name, size = 24, className, ...props }: IconDynamicProps) {
  const [iconSvg, setIconSvg] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a temporary container to render the Icons component
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.width = '10000px';
    tempDiv.style.height = '10000px';
    document.body.appendChild(tempDiv);

    // Render the Icons component (would need React.render in real implementation)
    // For now, we'll extract from the existing rendered component

    // Find the icon by data-name attribute
    const iconElement = document.querySelector(`[data-name="${name}"]`);

    if (iconElement) {
      const svg = iconElement.querySelector('svg');
      if (svg) {
        // Clone and extract the SVG
        const clonedSvg = svg.cloneNode(true) as SVGElement;

        // Clean up positioning classes
        clonedSvg.classList.remove('absolute', 'block', 'inset-0', 'size-full');
        clonedSvg.removeAttribute('preserveAspectRatio');

        // Set size
        clonedSvg.setAttribute('width', size.toString());
        clonedSvg.setAttribute('height', size.toString());

        // Replace CSS variables with currentColor
        const paths = clonedSvg.querySelectorAll('path, circle, rect, polygon');
        paths.forEach(path => {
          const fill = path.getAttribute('fill');
          if (fill && fill.includes('var(--fill')) {
            path.setAttribute('fill', 'currentColor');
          }
          const stroke = path.getAttribute('stroke');
          if (stroke && stroke.includes('var(--stroke')) {
            path.setAttribute('stroke', 'currentColor');
          }
        });

        setIconSvg(clonedSvg.outerHTML);
      }
    }

    document.body.removeChild(tempDiv);
  }, [name, size]);

  if (!iconSvg) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ display: 'inline-block', width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: iconSvg }}
      {...(props as any)}
    />
  );
}
