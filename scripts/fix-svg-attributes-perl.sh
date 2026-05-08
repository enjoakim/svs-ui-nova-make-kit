#!/bin/bash

# Fix SVG attribute naming in React components using perl
# Convert HTML attribute names to React camelCase

echo "🔧 Fixing SVG attributes in brand components..."
echo ""

# Function to fix SVG attributes in a file
fix_svg_attrs() {
  local file=$1

  perl -i -pe '
    s/fill-opacity="/fillOpacity="/g;
    s/stroke-opacity="/strokeOpacity="/g;
    s/stop-color="/stopColor="/g;
    s/stop-opacity="/stopOpacity="/g;
    s/clip-path="/clipPath="/g;
    s/clip-rule="/clipRule="/g;
    s/fill-rule="/fillRule="/g;
    s/stroke-width="/strokeWidth="/g;
    s/stroke-linecap="/strokeLinecap="/g;
    s/stroke-linejoin="/strokeLinejoin="/g;
    s/stroke-miterlimit="/strokeMiterlimit="/g;
    s/stroke-dasharray="/strokeDasharray="/g;
    s/stroke-dashoffset="/strokeDashoffset="/g;
    s/font-family="/fontFamily="/g;
    s/font-size="/fontSize="/g;
    s/font-weight="/fontWeight="/g;
    s/text-anchor="/textAnchor="/g;
    s/transform-origin="/transformOrigin="/g;
  ' "$file"
}

count=0

# Fix Sport & Casino brands
echo "🏟️  Fixing Sport & Casino brands..."
for file in src/SvsUiNova/brands/sport-casino/logos/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  ((count++))
done
echo "  ✅ Fixed $count logo files"

count=0
for file in src/SvsUiNova/brands/sport-casino/icons/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  ((count++))
done
echo "  ✅ Fixed $count icon files"

count=0
for file in src/SvsUiNova/brands/sport-casino/cubes/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  ((count++))
done
echo "  ✅ Fixed $count cube files"

echo ""
echo "🎰 Fixing Tur brands..."
count=0
for file in src/SvsUiNova/brands/tur/logos/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  ((count++))
done
echo "  ✅ Fixed $count logo files"

count=0
for file in src/SvsUiNova/brands/tur/icons/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  ((count++))
done
echo "  ✅ Fixed $count icon files"

count=0
for file in src/SvsUiNova/brands/tur/cubes/*.tsx; do
  [ -e "$file" ] || continue
  fix_svg_attrs "$file"
  ((count++))
done
echo "  ✅ Fixed $count cube files"

echo ""
echo "✅ SVG attribute fixes complete!"
