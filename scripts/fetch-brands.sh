#!/bin/bash

# Sport & Casino Brands Fetcher for Figma
# Downloads all brand logos, icons, and 3D cubes from Figma

FIGMA_FILE_KEY="OQpwpaJZzLCQG8JkGAnbeJ"
FIGMA_TOKEN="figd_aQZfopHG0oxihjwaPvhqJQ5rFVJBCq3fxV6NQ6GS"
OUTPUT_DIR="src/SvsUiNova/brands/sport-casino/svg-exports"

echo "🎯 Fetching Sport & Casino brands from Figma..."
echo ""

# Create output directories
mkdir -p "$OUTPUT_DIR/logos"
mkdir -p "$OUTPUT_DIR/icons"
mkdir -p "$OUTPUT_DIR/cubes"

# Component IDs extracted from the Figma file structure
# Format: CATEGORY:ID:NAME

# Logos
declare -a LOGOS=(
  "logos:6829:13251:oddset"
  "logos:6829:13250:oddset-inverted"
  "logos:6829:13219:oddset-textonly"
  "logos:6829:13220:oddset-textonly-inverted"
  "logos:6829:13322:bomben"
  "logos:6829:13321:bomben-inverted"
  "logos:6829:13314:bomben-textonly"
  "logos:6829:13315:bomben-textonly-inverted"
  "logos:6829:13463:casino"
  "logos:6829:13462:casino-inverted"
  "logos:6829:13458:casino-primary"
  "logos:6829:13442:casino-textonly"
  "logos:6829:13443:casino-textonly-inverted"
  "logos:6829:13459:casino-textonly-primary"
)

# Icons
declare -a ICONS=(
  "icons:6828:6644:oddset-icon"
  "icons:6828:6673:bomben-icon"
  "icons:6828:6702:casino-icon"
  "icons:6829:14142:Europatipset-icon"
  "icons:6828:6731:matchen-icon"
  "icons:6828:6760:momang-icon"
  "icons:6828:6789:powerplay-icon"
  "icons:6828:6818:stryktipset-icon"
  "icons:6828:6847:topptipset-icon"
  "icons:6828:6876:challenge-icon"
  "icons:6829:14150:maltipset-icon"
  "icons:6829:14163:hastar-icon"
  "icons:6829:14171:poker-icon"
  "icons:6829:14178:bingo-icon"
)

# 3D Cubes
declare -a CUBES=(
  "cubes:6829:12963:cube-soc-Oddset"
  "cubes:6829:12964:cube-soc-Bomben"
  "cubes:6829:12965:cube-soc-Casino"
  "cubes:6829:12966:cube-soc-Europatipset"
  "cubes:6829:12967:cube-soc-Matchen"
  "cubes:6829:12968:cube-soc-Momang"
  "cubes:6829:12969:cube-soc-Powerplay"
  "cubes:6829:12970:cube-soc-Stryktipset"
  "cubes:6829:12971:cube-soc-Topptipset"
  "cubes:6829:12972:cube-soc-Challenge"
  "cubes:6829:12973:cube-soc-Maltipset"
  "cubes:6829:12974:cube-soc-Hastar"
  "cubes:6829:12975:cube-soc-Poker"
  "cubes:6829:12976:cube-soc-Bingo"
)

# Function to download SVG from Figma
download_svg() {
  local category=$1
  local node_id=$2
  local name=$3

  echo "  📥 Fetching $category/$name..."

  # Get export URL from Figma
  local response=$(curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
    "https://api.figma.com/v1/images/$FIGMA_FILE_KEY?ids=$node_id&format=svg")

  # Extract URL from JSON response
  local url=$(echo $response | grep -o '"'$node_id'":"[^"]*"' | cut -d'"' -f4)

  if [ -z "$url" ] || [ "$url" == "null" ]; then
    echo "    ⚠️  No export URL for $name (might be a compound component)"
    return 1
  fi

  # Download SVG
  local output_file="$OUTPUT_DIR/$category/${name}.svg"
  curl -s "$url" -o "$output_file"

  if [ -f "$output_file" ] && [ -s "$output_file" ]; then
    echo "    ✅ $category/${name}.svg"
    return 0
  else
    echo "    ❌ Failed to download $name"
    return 1
  fi
}

# Download all assets
echo "📦 Downloading logos..."
for item in "${LOGOS[@]}"; do
  IFS=':' read -r category id name <<< "$item"
  download_svg "$category" "$id" "$name"
done

echo ""
echo "📦 Downloading icons..."
for item in "${ICONS[@]}"; do
  IFS=':' read -r category id name <<< "$item"
  download_svg "$category" "$id" "$name"
done

echo ""
echo "📦 Downloading 3D cubes..."
for item in "${CUBES[@]}"; do
  IFS=':' read -r category id name <<< "$item"
  download_svg "$category" "$id" "$name"
done

echo ""
echo "✅ Download complete!"
echo ""
echo "📊 Summary:"
echo "  Logos: $(ls -1 $OUTPUT_DIR/logos/*.svg 2>/dev/null | wc -l) files"
echo "  Icons: $(ls -1 $OUTPUT_DIR/icons/*.svg 2>/dev/null | wc -l) files"
echo "  Cubes: $(ls -1 $OUTPUT_DIR/cubes/*.svg 2>/dev/null | wc -l) files"
echo ""
echo "💡 SVG files saved to: $OUTPUT_DIR"
