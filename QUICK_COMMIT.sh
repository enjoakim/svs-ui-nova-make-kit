#!/bin/bash

# QUICK_COMMIT.sh - Ultra-fast commit for Code Connect changes
# Just run: ./QUICK_COMMIT.sh
# No prompts, just commits!

set -e

echo "⚡ QUICK COMMIT - Code Connect Automation"
echo "=========================================="
echo ""

# Check if there are changes
CHANGES=$(git status --short | wc -l)

if [ "$CHANGES" -eq 0 ]; then
    echo "✅ No changes to commit"
    exit 0
fi

echo "📊 Changes detected: $CHANGES files"
echo ""

# Stage all changes
git add .
echo "✅ Files staged"

# Create commit with full message
git commit -m "feat: Add automated Code Connect system

- Auto-extract Figma component node-ids via API
- GitHub Actions workflow for weekly automation
- Complete documentation suite
- npm scripts: figma:auto-publish, figma:auto-connect, figma:mock

Result: Zero manual work for Code Connect setup"

echo ""
echo "✅ Commit created!"
echo ""

# Show commit info
COMMIT_HASH=$(git rev-parse --short HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "📋 Commit info:"
echo "   Hash: $COMMIT_HASH"
echo "   Branch: $BRANCH"
echo ""
echo "📤 To push: git push origin $BRANCH"
