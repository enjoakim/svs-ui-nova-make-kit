#!/bin/bash

# Convert Sport & Casino SVGs to React components
# Generates TypeScript components from SVG files

SVG_DIR="src/SvsUiNova/brands/sport-casino/svg-exports"
OUTPUT_BASE="src/SvsUiNova/brands/sport-casino"

echo "🔄 Converting SVGs to React components..."
echo ""

# Function to convert SVG to React component
svg_to_react() {
  local svg_file=$1
  local output_dir=$2
  local component_type=$3  # 'logo', 'icon', or 'cube'

  local filename=$(basename "$svg_file" .svg)
  local component_name=$(echo "$filename" | sed -E 's/(^|-)([a-z])/\U\2/g' | sed 's/-//g')

  # Read SVG content
  local svg_content=$(cat "$svg_file")

  # Extract viewBox if exists
  local viewbox=$(echo "$svg_content" | grep -o 'viewBox="[^"]*"' | head -1 | cut -d'"' -f2)
  if [ -z "$viewbox" ]; then
    viewbox="0 0 24 24"
  fi

  # Extract width and height
  local width=$(echo "$svg_content" | grep -o 'width="[^"]*"' | head -1 | cut -d'"' -f2)
  local height=$(echo "$svg_content" | grep -o 'height="[^"]*"' | head -1 | cut -d'"' -f2)

  # Extract SVG inner content (everything between <svg> tags)
  local inner_content=$(echo "$svg_content" | sed -n 's/.*<svg[^>]*>\(.*\)<\/svg>.*/\1/p')

  # Determine component suffix based on type
  local suffix=""
  case $component_type in
    logo) suffix="Logo" ;;
    icon) suffix="Icon" ;;
    cube) suffix="Cube" ;;
  esac

  # Generate React component
  cat > "$output_dir/${component_name}.tsx" << EOF
import { forwardRef, SVGProps } from 'react';

export interface ${component_name}Props extends SVGProps<SVGSVGElement> {
  /**
   * Size of the ${component_type} (width and height)
   */
  size?: number;
}

/**
 * ${component_name} - Sport & Casino ${component_type}
 *
 * Generated from: ${filename}.svg
 */
export const ${component_name} = forwardRef<SVGSVGElement, ${component_name}Props>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size || ${width:-40}}
        height={size || ${height:-40}}
        viewBox="${viewbox}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        ${inner_content}
      </svg>
    );
  }
);

${component_name}.displayName = '${component_name}';
EOF

  echo "  ✅ Generated ${component_name}.tsx"
}

# Convert logos
echo "📝 Converting logos..."
mkdir -p "$OUTPUT_BASE/logos"
for svg in "$SVG_DIR/logos"/*.svg; do
  [ -e "$svg" ] || continue
  svg_to_react "$svg" "$OUTPUT_BASE/logos" "logo"
done

echo ""
echo "🎯 Converting icons..."
mkdir -p "$OUTPUT_BASE/icons"
for svg in "$SVG_DIR/icons"/*.svg; do
  [ -e "$svg" ] || continue
  svg_to_react "$svg" "$OUTPUT_BASE/icons" "icon"
done

echo ""
echo "🎲 Converting cubes..."
mkdir -p "$OUTPUT_BASE/cubes"
for svg in "$SVG_DIR/cubes"/*.svg; do
  [ -e "$svg" ] || continue
  svg_to_react "$svg" "$OUTPUT_BASE/cubes" "cube"
done

echo ""
echo "✅ Conversion complete!"
echo ""
echo "📊 Summary:"
echo "  Logos: $(ls -1 $OUTPUT_BASE/logos/*.tsx 2>/dev/null | wc -l) components"
echo "  Icons: $(ls -1 $OUTPUT_BASE/icons/*.tsx 2>/dev/null | wc -l) components"
echo "  Cubes: $(ls -1 $OUTPUT_BASE/cubes/*.tsx 2>/dev/null | wc -l) components"
