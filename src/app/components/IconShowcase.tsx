import { useEffect, useState } from 'react';
import iconNames from './icon-names.json';
import Icons from '../../imports/Icons/Icons';

interface IconShowcaseProps {
  icons?: string[];
}

export function IconShowcase({ icons }: IconShowcaseProps) {
  const [extractedIcons, setExtractedIcons] = useState<Map<string, string>>(new Map());
  const [isExtracting, setIsExtracting] = useState(true);

  useEffect(() => {
    // Create hidden container to render Icons component
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-99999px';
    container.style.width = '10000px';
    container.style.height = '20000px';
    container.style.overflow = 'hidden';
    document.body.appendChild(container);

    // Import and render Icons component dynamically
    import('react-dom/client').then(({ createRoot }) => {
      const root = createRoot(container);
      root.render(<Icons />);

      // Wait for render
      setTimeout(() => {
        const iconsMap = new Map<string, string>();

        // Extract all icons with data-name
        const elements = container.querySelectorAll('[data-name]');

        elements.forEach((el) => {
          const name = el.getAttribute('data-name');

          // Skip technical/internal names
          if (!name ||
              name.startsWith('Vector') ||
              name === 'shape' ||
              name === 'Union' ||
              name.includes('Polygon') ||
              name.includes('Ellipse') ||
              name.includes('Rectangle') ||
              name.includes('Group') ||
              name.includes('(Stroke)') ||
              name === 'icons') {
            return;
          }

          // Find SVG within this element
          const svg = el.querySelector('svg');
          if (svg) {
            const clonedSvg = svg.cloneNode(true) as SVGElement;

            // Clean up for standalone use
            clonedSvg.removeAttribute('class');
            clonedSvg.removeAttribute('preserveAspectRatio');
            clonedSvg.setAttribute('width', '32');
            clonedSvg.setAttribute('height', '32');
            clonedSvg.style.display = 'block';

            // Replace CSS variables with currentColor
            const paths = clonedSvg.querySelectorAll('path, circle, rect, polygon, ellipse');
            paths.forEach(path => {
              ['fill', 'stroke'].forEach(attr => {
                const val = path.getAttribute(attr);
                if (val && val.includes('var(--')) {
                  path.setAttribute(attr, 'currentColor');
                }
              });
            });

            iconsMap.set(name, clonedSvg.outerHTML);
          }
        });

        setExtractedIcons(iconsMap);
        setIsExtracting(false);

        // Cleanup
        root.unmount();
        document.body.removeChild(container);
      }, 500);
    });
  }, []);

  const displayIcons = icons || iconNames;

  if (isExtracting) {
    return <div className="text-center p-8 text-muted-foreground">Extracting icons...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {displayIcons.map((name) => {
        const iconSvg = extractedIcons.get(name);

        return (
          <div
            key={name}
            className="relative flex items-center justify-center p-6 bg-surface rounded-lg border border-[rgba(40,3,1,0.16)] min-h-[120px]"
          >
            <p className="absolute top-3 left-3 text-xs font-normal text-muted-foreground">
              {name}
            </p>
            {iconSvg ? (
              <div
                className="w-8 h-8 flex items-center justify-center"
                dangerouslySetInnerHTML={{ __html: iconSvg }}
              />
            ) : (
              <div className="w-8 h-8 flex items-center justify-center text-muted-foreground/30">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
