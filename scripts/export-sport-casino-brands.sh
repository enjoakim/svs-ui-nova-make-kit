#!/bin/bash

# Export Sport & Casino brands from Figma using provided node IDs
# Reads from figma-designs.md and exports all SVGs

FIGMA_FILE_KEY="OQpwpaJZzLCQG8JkGAnbeJ"
FIGMA_TOKEN="figd_aQZfopHG0oxihjwaPvhqJQ5rFVJBCq3fxV6NQ6GS"
OUTPUT_DIR="src/SvsUiNova/brands/sport-casino/svg-exports"
NODE_IDS_FILE="src/imports/pasted_text/figma-designs.md"

echo "🎯 Exporting Sport & Casino brands from Figma..."
echo ""

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Extract all node IDs from the file
NODE_IDS=$(grep -o 'node-id=[^&]*' "$NODE_IDS_FILE" | cut -d= -f2 | tr '\n' ',' | sed 's/,$//')

# Convert dashes to colons for Figma API
NODE_IDS_FORMATTED=$(echo "$NODE_IDS" | sed 's/-/:/g')

echo "📦 Found $(echo "$NODE_IDS" | tr ',' '\n' | wc -l) components"
echo ""

# First, get the names of all components
echo "🔍 Fetching component names from Figma..."
METADATA=$(curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FIGMA_FILE_KEY/nodes?ids=$NODE_IDS_FORMATTED")

# Save metadata for reference
echo "$METADATA" > "$OUTPUT_DIR/components-metadata.json"
echo "✅ Metadata saved to $OUTPUT_DIR/components-metadata.json"
echo ""

# Request SVG exports for all components
echo "🎨 Requesting SVG exports..."
EXPORT_RESPONSE=$(curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/images/$FIGMA_FILE_KEY?ids=$NODE_IDS_FORMATTED&format=svg")

# Save export URLs
echo "$EXPORT_RESPONSE" > "$OUTPUT_DIR/export-urls.json"

# Check for errors
ERROR=$(echo "$EXPORT_RESPONSE" | grep -o '"err":"[^"]*"' | cut -d'"' -f4)
if [ ! -z "$ERROR" ] && [ "$ERROR" != "null" ]; then
  echo "❌ Figma API Error: $ERROR"
  exit 1
fi

echo "✅ Got export URLs"
echo ""

# Download each SVG
echo "📥 Downloading SVGs..."
DOWNLOADED=0
FAILED=0

# Parse the JSON and download each SVG
echo "$EXPORT_RESPONSE" | jq -r '.images | to_entries[] | "\(.key)|\(.value)"' | while IFS='|' read -r node_id url; do
  if [ "$url" == "null" ] || [ -z "$url" ]; then
    echo "  ⚠️  Skipping $node_id (no URL)"
    ((FAILED++))
    continue
  fi

  # Get component name from metadata
  COMPONENT_NAME=$(echo "$METADATA" | jq -r ".nodes[\"$node_id\"].document.name" 2>/dev/null)

  if [ -z "$COMPONENT_NAME" ] || [ "$COMPONENT_NAME" == "null" ]; then
    # Fallback to node ID as filename
    FILENAME="component-$(echo $node_id | tr ':' '-').svg"
  else
    # Sanitize filename
    FILENAME=$(echo "$COMPONENT_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -cd 'a-z0-9-').svg
  fi

  # Download SVG
  curl -s "$url" -o "$OUTPUT_DIR/$FILENAME"

  if [ -f "$OUTPUT_DIR/$FILENAME" ] && [ -s "$OUTPUT_DIR/$FILENAME" ]; then
    echo "  ✅ $FILENAME ($COMPONENT_NAME)"
    ((DOWNLOADED++))
  else
    echo "  ❌ Failed: $FILENAME"
    ((FAILED++))
  fi
done

echo ""
echo "📊 Summary:"
echo "  Total: $(echo "$NODE_IDS" | tr ',' '\n' | wc -l) components"
echo "  Downloaded: $DOWNLOADED SVGs"
echo "  Failed: $FAILED"
echo ""
echo "💾 SVG files saved to: $OUTPUT_DIR/"
echo ""
echo "💡 Next step: Review the SVGs and categorize them into logos/, icons/, and cubes/"
