#!/bin/bash

# Git Commit Helper for Code Connect Automation
# This script handles staging and committing Code Connect changes

set -e

echo "🚀 Code Connect Git Commit Helper"
echo "=================================="
echo ""

# Check if there are any changes
if [ -z "$(git status --short)" ]; then
    echo "✅ No changes to commit"
    exit 0
fi

echo "📊 Changes to be committed:"
git status --short
echo ""

# Ask for confirmation
read -p "Do you want to commit these changes? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Commit cancelled"
    exit 1
fi

echo ""
echo "📝 Staging files..."
git add .

echo "✅ Files staged"
echo ""

# Show what will be committed
echo "📋 Files to be committed:"
git diff --cached --name-only
echo ""

# Determine commit message based on changes
HAS_SCRIPTS=$(git diff --cached --name-only | grep -c "scripts/" || true)
HAS_WORKFLOWS=$(git diff --cached --name-only | grep -c ".github/workflows" || true)
HAS_DOCS=$(git diff --cached --name-only | grep -c ".md" || true)

if [ "$HAS_SCRIPTS" -gt 0 ] && [ "$HAS_WORKFLOWS" -gt 0 ] && [ "$HAS_DOCS" -gt 0 ]; then
    MESSAGE="feat: Add automated Code Connect system

- Auto-extract Figma component node-ids via API
- GitHub Actions workflow for weekly automation
- Complete documentation suite
- npm scripts: figma:auto-publish, figma:auto-connect, figma:mock

Result: Zero manual work for Code Connect setup"
else
    MESSAGE="chore: Update Code Connect automation files"
fi

echo "💬 Commit message:"
echo "$MESSAGE"
echo ""

read -p "Continue with commit? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Commit cancelled"
    git reset
    exit 1
fi

# Create commit
git commit -m "$MESSAGE"

echo ""
echo "✅ Commit created successfully!"
echo ""
echo "📤 Next: Push to origin with:"
echo "   git push origin $(git rev-parse --abbrev-ref HEAD)"
