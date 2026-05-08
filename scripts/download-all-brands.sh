#!/bin/bash

# Download ALL Sport & Casino brand components from Figma
# Uses actual COMPONENT nodes, not vector elements

FIGMA_TOKEN="figd_aQZfopHG0oxihjwaPvhqJQ5rFVJBCq3fxV6NQ6GS"
FIGMA_FILE_KEY="OQpwpaJZzLCQG8JkGAnbeJ"
OUTPUT_DIR="src/SvsUiNova/brands/sport-casino/svg-exports"

echo "🎯 Downloading ALL Sport & Casino brand components..."
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Get all component IDs from the cached section data
IDS=$(cat /tmp/sport-casino-section.json | jq -r '
  .. | objects |
  select(.type == "COMPONENT" and .id != null) |
  .id
' | grep -v "^$" | sort -u | tr '\n' ',' | sed 's/,$//')

echo "📦 Found $(echo "$IDS" | tr ',' '\n' | wc -l) components"
echo ""

# Get component metadata for names
echo "🔍 Fetching component names..."
METADATA=$(cat /tmp/sport-casino-section.json)

# Request SVG exports
echo "🎨 Requesting SVG exports..."
EXPORTS=$(curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/images/$FIGMA_FILE_KEY?ids=$IDS&format=svg")

# Check for errors
ERROR=$(echo "$EXPORTS" | jq -r '.err // empty')
if [ ! -z "$ERROR" ]; then
  echo "❌ Error: $ERROR"
  exit 1
fi

echo "✅ Got export URLs"
echo ""

# Download each SVG
echo "📥 Downloading SVGs..."
DOWNLOADED=0
FAILED=0

echo "$EXPORTS" | jq -r '.images | to_entries[] | "\(.key)|\(.value)"' | while IFS='|' read -r node_id url; do
  if [ "$url" == "null" ] || [ -z "$url" ]; then
    ((FAILED++))
    continue
  fi

  # Get component name from metadata
  COMPONENT_NAME=$(echo "$METADATA" | jq -r ".. | objects | select(.id == \"$node_id\") | .name" | head -1)

  if [ -z "$COMPONENT_NAME" ] || [ "$COMPONENT_NAME" == "null" ]; then
    FILENAME="component-$(echo $node_id | tr ':' '-').svg"
  else
    # Sanitize filename
    FILENAME=$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]/-/g' | sed 's/--*/-/g').svg
  fi

  # Download SVG
  curl -s "$url" -o "$OUTPUT_DIR/$FILENAME"

  if [ -f "$OUTPUT_DIR/$FILENAME" ] && [ -s "$OUTPUT_DIR/$FILENAME" ]; then
    echo "  ✅ $FILENAME"
    ((DOWNLOADED++))
  else
    echo "  ❌ Failed: $FILENAME"
    ((FAILED++))
  fi
done

echo ""
echo "📊 Summary:"
echo "  Downloaded: $DOWNLOADED SVGs"
echo "  Failed: $FAILED"
echo ""
echo "💾 Files saved to: $OUTPUT_DIR/"
