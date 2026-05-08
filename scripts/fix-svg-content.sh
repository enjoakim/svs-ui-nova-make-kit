#!/bin/bash

# Fix empty SVG content in React components by re-extracting from source SVGs

echo "🔧 Fixing SVG content in React components..."
echo ""

# Function to fix a single React component
fix_component() {
  local tsx_file=$1
  local svg_file=$2

  if [ ! -f "$svg_file" ]; then
    echo "  ⚠️  SVG not found: $svg_file"
    return
  fi

  # Extract SVG inner content (everything between <svg> and </svg>)
  # Use perl for better multiline handling
  local inner_content=$(perl -0777 -ne 'print $1 if /<svg[^>]*>(.*)<\/svg>/s' "$svg_file")

  if [ -z "$inner_content" ]; then
    echo "  ⚠️  Could not extract content from: $svg_file"
    return
  fi

  # Escape special characters for sed
  local escaped_content=$(echo "$inner_content" | sed 's/[\/&]/\\&/g')

  # Replace empty content in TSX file
  # Match the empty space between <svg> opening and closing tags
  perl -i -0777 -pe "s/(<svg[^>]*>\s*)(\\s*<\/svg>)/\$1$escaped_content\$2/s" "$tsx_file"

  echo "  ✅ Fixed: $(basename "$tsx_file")"
}

# Fix Sport & Casino brands
echo "🏟️  Fixing Sport & Casino brands..."
echo ""

# Logos
for tsx in src/SvsUiNova/brands/sport-casino/logos/*.tsx; do
  [ -e "$tsx" ] || continue
  filename=$(basename "$tsx" .tsx)
  # Convert PascalCase to kebab-case
  svg_name=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
  svg_file="src/SvsUiNova/brands/sport-casino/svg-exports/logos/${svg_name}.svg"
  fix_component "$tsx" "$svg_file"
done

# Icons
for tsx in src/SvsUiNova/brands/sport-casino/icons/*.tsx; do
  [ -e "$tsx" ] || continue
  filename=$(basename "$tsx" .tsx)
  svg_name=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
  svg_file="src/SvsUiNova/brands/sport-casino/svg-exports/icons/${svg_name}.svg"
  fix_component "$tsx" "$svg_file"
done

# Cubes
for tsx in src/SvsUiNova/brands/sport-casino/cubes/*.tsx; do
  [ -e "$tsx" ] || continue
  filename=$(basename "$tsx" .tsx)
  svg_name=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
  svg_file="src/SvsUiNova/brands/sport-casino/svg-exports/cubes/${svg_name}.svg"
  fix_component "$tsx" "$svg_file"
done

echo ""
echo "🎰 Fixing Tur brands..."
echo ""

# Logos
for tsx in src/SvsUiNova/brands/tur/logos/*.tsx; do
  [ -e "$tsx" ] || continue
  filename=$(basename "$tsx" .tsx)
  svg_name=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
  svg_file="src/SvsUiNova/brands/tur/svg-exports/${svg_name}.svg"
  fix_component "$tsx" "$svg_file"
done

# Icons
for tsx in src/SvsUiNova/brands/tur/icons/*.tsx; do
  [ -e "$tsx" ] || continue
  filename=$(basename "$tsx" .tsx)
  svg_name=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
  svg_file="src/SvsUiNova/brands/tur/svg-exports/${svg_name}.svg"
  fix_component "$tsx" "$svg_file"
done

# Cubes
for tsx in src/SvsUiNova/brands/tur/cubes/*.tsx; do
  [ -e "$tsx" ] || continue
  filename=$(basename "$tsx" .tsx)
  svg_name=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]')
  svg_file="src/SvsUiNova/brands/tur/svg-exports/${svg_name}.svg"
  fix_component "$tsx" "$svg_file"
done

echo ""
echo "✅ SVG content fix complete!"
