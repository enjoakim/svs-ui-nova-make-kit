# HOW_TO_RUN_CODE_CONNECT.md - Complete Guide

Complete guide to setting up and running the automated Code Connect system.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Prerequisites](#prerequisites)
3. [Setup Instructions](#setup-instructions)
4. [Running the Automation](#running-the-automation)
5. [Understanding the Output](#understanding-the-output)
6. [Manual Configuration](#manual-configuration)
7. [GitHub Actions Setup](#github-actions-setup)
8. [Troubleshooting](#troubleshooting)
9. [Architecture](#architecture)

## Quick Start

If you just want to get it running quickly:

```bash
# 1. Create .env file
echo "FIGMA_TOKEN=your_figma_token" > .env

# 2. Run automation
npm run figma:auto-connect

# 3. Commit changes
./QUICK_COMMIT.sh

# 4. Push to GitHub
git push origin main
```

See [RUN_ME.md](RUN_ME.md) for the ultra-quick 60-second version.

## Prerequisites

### Required

- **Node.js** 18+ (check with `node --version`)
- **pnpm** 8+ (check with `pnpm --version`)
- **Figma Account** with API access
- **Figma Token** - Get it from [figma.com/api/tokens](https://figma.com/api/tokens)
- **Figma File ID** - `OQpwpaJZzLCQG8JkGAnbeJ` (Make Kit)

### Optional

- **GitHub CLI** for pushing changes
- **Git** configured with your credentials
- **GitHub Secrets** set up for automated workflow

## Setup Instructions

### Step 1: Get Your Figma Token

1. Go to [figma.com/api/tokens](https://figma.com/api/tokens)
2. Click "Create a new personal access token"
3. Give it a name (e.g., "Code Connect Automation")
4. Select scopes:
   - `file:read` (required)
   - `libraries:read` (optional, for library components)
5. Click "Create token"
6. Copy the token (you won't see it again!)

### Step 2: Create Environment File

In the repository root, create `.env`:

```bash
FIGMA_TOKEN=your_token_here_paste_from_step_1
FIGMA_FILE_ID=OQpwpaJZzLCQG8JkGAnbeJ
```

⚠️ **Important:** Never commit `.env` to Git!

Check that `.env` is in `.gitignore`:
```bash
grep -q "^\.env" .gitignore && echo "✅ .env is ignored" || echo "⚠️ Add .env to .gitignore"
```

### Step 3: Install Dependencies

```bash
pnpm install
```

### Step 4: Verify Setup

Test that everything is configured correctly:

```bash
npm run figma:mock
```

This runs a mock version that doesn't make actual API calls. You should see:
- ✅ Simulated Figma data fetch
- ✅ Found components
- ✅ Validation report

## Running the Automation

### Option 1: Real Automation (Recommended First)

```bash
npm run figma:auto-connect
```

This will:
1. Fetch actual data from Figma API
2. Extract all component node IDs
3. Update `.figma.tsx` files with node IDs
4. Validate the results
5. Log everything to `code-connect-automation.log`

### Option 2: Mock Mode (Safe First Test)

```bash
npm run figma:mock
```

Use this to test without making changes. Perfect for:
- Testing the setup
- Understanding the workflow
- Previewing what would happen

### Option 3: Custom Figma File

If using a different Figma file:

```bash
FIGMA_FILE_ID=your_file_id npm run figma:auto-connect
```

## Understanding the Output

### Successful Run Output

```
[2024-05-13T10:00:00.000Z] 🚀 Starting Code Connect Automation...

[2024-05-13T10:00:01.000Z] 📡 Fetching Figma data...
[2024-05-13T10:00:02.000Z] ✅ Successfully fetched Figma file: Make Kit

[2024-05-13T10:00:02.000Z] 🔍 Extracting component node IDs...
[2024-05-13T10:00:02.000Z]   ✓ Found component: Button (123:456)
[2024-05-13T10:00:02.000Z]   ✓ Found component: Input (123:457)
...
[2024-05-13T10:00:03.000Z] ✅ Extracted 24 components

[2024-05-13T10:00:03.000Z] 🔎 Scanning for existing Code Connect files...
[2024-05-13T10:00:03.000Z]   ✓ Found: Button.figma.tsx
...
[2024-05-13T10:00:03.000Z] ✅ Found 24 Code Connect files

[2024-05-13T10:00:03.000Z] 📝 Updating Code Connect files...
[2024-05-13T10:00:03.000Z]   ✓ Updated node-id in Button.figma.tsx
...
[2024-05-13T10:00:04.000Z] ✅ Automation completed successfully!
```

### Log File

All output is saved to `code-connect-automation.log`:

```bash
tail -50 code-connect-automation.log
```

## Manual Configuration

### Update Individual Files

If you need to manually update a Code Connect file:

```javascript
// In src/SvsUiNova/components/Button.figma.tsx

figma.connect(Button, "https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ", {
  props: {
    size: figma.enum("Size", { small: "sm", large: "lg" }),
  },
  node_id: '123:456'  // ← Change this to the actual Figma node ID
});
```

### Find Node IDs in Figma

1. Open the Figma file in browser
2. Select a component in the canvas
3. Look at the URL: `https://www.figma.com/design/FILE_ID/Name?node-id=123:456`
4. The node ID is `123:456` (after `node-id=`)
5. Copy it to the `.figma.tsx` file

## GitHub Actions Setup

For automated weekly runs, see [.github/SETUP_GITHUB_ACTIONS.md](.github/SETUP_GITHUB_ACTIONS.md)

Quick summary:
1. Add `FIGMA_TOKEN` to GitHub Secrets
2. GitHub Actions will run every Monday at 9 AM UTC
3. Changes are committed automatically
4. Or manually triggered anytime from Actions tab

## Troubleshooting

### Error: "FIGMA_TOKEN not found"

**Problem:** Environment variable not set

**Solutions:**
```bash
# Option 1: Check if .env exists
ls -la .env

# Option 2: Create .env
echo "FIGMA_TOKEN=your_token" > .env

# Option 3: Export directly
export FIGMA_TOKEN="your_token"
npm run figma:auto-connect
```

### Error: "Figma API error: 401"

**Problem:** Invalid or expired token

**Solution:**
1. Go to [figma.com/api/tokens](https://figma.com/api/tokens)
2. Check if token is still valid
3. Create a new token if expired
4. Update `.env` file

### Error: "No components found"

**Problem:** Can't find components in Figma file

**Causes:**
- Wrong Figma file ID
- Components not visible to token
- Components on different page

**Solution:**
```bash
# Check the file ID
echo $FIGMA_FILE_ID

# Verify token can access file
# Run mock mode to see what it finds
npm run figma:mock
```

### Some Files Still Have "TODO"

**Problem:** Some `.figma.tsx` files weren't updated

**Reasons:**
- Component name doesn't match Figma component name
- Component not exported in Figma
- Manual matching needed

**Solution:**
1. Find the correct Figma component
2. Copy its node ID from the URL
3. Update the file manually:
   ```javascript
   node_id: '123:456'  // Replace with actual ID
   ```
4. Re-run automation or commit manually

### Performance Issues

**Problem:** Script runs slowly or times out

**Solution:**
```bash
# Run with more verbose logging
DEBUG=true npm run figma:auto-connect

# Check if Figma API is slow
time npm run figma:mock  # Should be instant

# Check internet connection
ping api.figma.com
```

## Architecture

### Components

```
scripts/
├── auto-code-connect.js    ← Main automation script
├── mock-code-connect.js    ← Mock/test version
└── git-commit-code-connect.sh

.github/
└── workflows/
    └── code-connect.yml    ← GitHub Actions workflow

src/SvsUiNova/components/
└── **/
    ├── Component.tsx       ← React component
    └── Component.figma.tsx ← Figma Code Connect file
```

### Workflow

```
┌─────────────────────────────────────┐
│ Run Automation Script               │
└────────────────┬────────────────────┘
                 │
        ┌────────▼────────┐
        │ Fetch Figma API │
        └────────┬────────┘
                 │
    ┌────────────▼────────────────┐
    │ Extract Component Node IDs  │
    └────────────┬────────────────┘
                 │
    ┌────────────▼────────────────────────┐
    │ Find .figma.tsx Files in Codebase   │
    └────────────┬───────────────────────┘
                 │
    ┌────────────▼────────────────────────────┐
    │ Match Components & Update Node IDs      │
    └────────────┬────────────────────────────┘
                 │
        ┌────────▼────────┐
        │ Validate Setup  │
        └────────┬────────┘
                 │
    ┌────────────▼──────────────────┐
    │ Ready for Commit              │
    └───────────────────────────────┘
```

### File Processing

Each `.figma.tsx` file goes through:

1. **Read** - Load file content
2. **Match** - Find Figma component with similar name
3. **Extract** - Get node ID from Figma API data
4. **Update** - Replace `node-id: 'TODO'` with actual ID
5. **Validate** - Check file is valid
6. **Log** - Report success or skip

## npm Scripts

```bash
# Mock run (safe, no changes)
npm run figma:mock

# Actual automation
npm run figma:auto-connect

# Publish (if available)
npm run figma:auto-publish

# Validate manifest
npm run validate:manifest

# Manual commit
./scripts/git-commit-code-connect.sh

# Quick commit
./QUICK_COMMIT.sh
```

## Next Steps

1. ✅ Set up `.env` with Figma token
2. ✅ Run `npm run figma:mock` to test
3. ✅ Run `npm run figma:auto-connect` for real automation
4. ✅ Review changes with `git status`
5. ✅ Commit with `./QUICK_COMMIT.sh`
6. ✅ Push with `git push origin main`
7. ✅ Set up GitHub Actions (optional but recommended)

---

For questions or issues, check the troubleshooting section above!
