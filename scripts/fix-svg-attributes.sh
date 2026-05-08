#!/bin/bash

# Fix SVG attribute naming in React components
# Convert HTML attribute names to React camelCase

echo "🔧 Fixing SVG attributes in brand components..."
echo ""

# Function to fix SVG attributes in a file
fix_svg_attrs() {
  local file=$1

  # Replace common SVG attributes with React equivalents
  sed -i 's/fill-opacity="/fillOpacity="/g' "$file"
  sed -i 's/stroke-opacity="/strokeOpacity="/g' "$file"
  sed -i 's/stop-color="/stopColor="/g' "$file"
  sed -i 's/stop-opacity="/stopOpacity="/g' "$file"
  sed -i 's/clip-path="/clipPath="/g' "$file"
  sed -i 's/clip-rule="/clipRule="/g' "$file"
  sed -i 's/fill-rule="/fillRule="/g' "$file"
  sed -i 's/stroke-width="/strokeWidth="/g' "$file"
  sed -i 's/stroke-linecap="/strokeLinecap="/g' "$file"
  sed -i 's/stroke-linejoin="/strokeLinejoin="/g' "$file"
  sed -i 's/stroke-miterlimit="/strokeMiterlimit="/g' "$file"
  sed -i 's/stroke-dasharray="/strokeDasharray="/g' "$file"
  sed -i 's/stroke-dashoffset="/strokeDashoffset="/g' "$file"
  sed -i 's/font-family="/fontFamily="/g' "$file"
  sed -i 's/font-size="/fontSize="/g' "$file"
  sed -i 's/font-weight="/fontWeight="/g' "$file"
  sed -i 's/text-anchor="/textAnchor="/g' "$file"
  sed -i 's/transform-origin="/transformOrigin="/g' "$file"
}

# Fix Sport & Casino brands
echo "🏟️  Fixing Sport & Casino brands..."
for file in src/SvsUiNova/brands/sport-casino/logos/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  echo "  ✅ $(basename "$file")"
done

for file in src/SvsUiNova/brands/sport-casino/icons/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  echo "  ✅ $(basename "$file")"
done

for file in src/SvsUiNova/brands/sport-casino/cubes/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  echo "  ✅ $(basename "$file")"
done

echo ""
echo "🎰 Fixing Tur brands..."
for file in src/SvsUiNova/brands/tur/logos/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  echo "  ✅ $(basename "$file")"
done

for file in src/SvsUiNova/brands/tur/icons/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  echo "  ✅ $(basename "$file")"
done

for file in src/SvsUiNova/brands/tur/cubes/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  echo "  ✅ $(basename "$file")"
done

echo ""
echo "✅ SVG attribute fixes complete!"
