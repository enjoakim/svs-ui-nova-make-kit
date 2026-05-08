#!/bin/bash

# Organize exported Sport & Casino brands into categories
# Sorts SVGs into logos/, icons/, and cubes/ based on naming patterns

SOURCE_DIR="src/SvsUiNova/brands/sport-casino/svg-exports"

echo "📂 Organizing Sport & Casino brand assets..."
echo ""

# Create category directories
mkdir -p "$SOURCE_DIR/logos"
mkdir -p "$SOURCE_DIR/icons"
mkdir -p "$SOURCE_DIR/cubes"

# Move files based on naming patterns
MOVED_LOGOS=0
MOVED_ICONS=0
MOVED_CUBES=0

for file in "$SOURCE_DIR"/*.svg; do
  [ -e "$file" ] || continue

  filename=$(basename "$file")

  # Categorize based on filename
  if [[ "$filename" == *"cube"* ]] || [[ "$filename" == *"3d"* ]]; then
    mv "$file" "$SOURCE_DIR/cubes/"
    echo "  🎲 $filename → cubes/"
    ((MOVED_CUBES++))
  elif [[ "$filename" == *"-icon"* ]]; then
    mv "$file" "$SOURCE_DIR/icons/"
    echo "  🎯 $filename → icons/"
    ((MOVED_ICONS++))
  elif [[ "$filename" == *"logo"* ]] || [[ "$filename" == *"textonly"* ]] || [[ "$filename" == *"inverted"* ]]; then
    mv "$file" "$SOURCE_DIR/logos/"
    echo "  📝 $filename → logos/"
    ((MOVED_LOGOS++))
  else
    # Default to logos if unsure
    mv "$file" "$SOURCE_DIR/logos/"
    echo "  📝 $filename → logos/ (default)"
    ((MOVED_LOGOS++))
  fi
done

echo ""
echo "✅ Organization complete!"
echo ""
echo "📊 Summary:"
echo "  Logos: $MOVED_LOGOS files"
echo "  Icons: $MOVED_ICONS files"
echo "  Cubes: $MOVED_CUBES files"
echo ""
echo "📁 Organized in:"
echo "  $SOURCE_DIR/logos/"
echo "  $SOURCE_DIR/icons/"
echo "  $SOURCE_DIR/cubes/"
