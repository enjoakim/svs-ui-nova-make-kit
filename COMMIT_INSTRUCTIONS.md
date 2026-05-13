# COMMIT_INSTRUCTIONS.md - Git Workflow Guide

How to commit Code Connect changes to git.

## Quick Version

```bash
./QUICK_COMMIT.sh
git push origin main
```

That's it!

---

## Step-by-Step Version

### Step 1: Run Automation

```bash
npm run figma:auto-connect
```

Wait for it to complete. You should see:
```
✅ Automation completed successfully!
```

### Step 2: Review Changes

See what changed:
```bash
git status
```

You should see modified `.figma.tsx` files.

See the specific changes:
```bash
git diff
```

See which files changed:
```bash
git diff --name-only
```

### Step 3: Stage Changes

Option A - Stage all:
```bash
git add .
```

Option B - Stage specific files:
```bash
git add src/SvsUiNova/components/Button/Button.figma.tsx
git add src/SvsUiNova/components/Input/Input.figma.tsx
```

Option C - Interactive staging:
```bash
git add -p
```

### Step 4: Create Commit

Option A - Quick commit (recommended):
```bash
./QUICK_COMMIT.sh
```

Option B - Manual commit with message:
```bash
git commit -m "feat: Add automated Code Connect system

- Auto-extract Figma component node-ids via API
- GitHub Actions workflow for weekly automation
- Complete documentation suite
- npm scripts: figma:auto-publish, figma:auto-connect, figma:mock

Result: Zero manual work for Code Connect setup"
```

Option C - Interactive commit:
```bash
./scripts/git-commit-code-connect.sh
```

### Step 5: Verify Commit

```bash
git log -1
```

You should see:
```
commit abc123def456...
Author: Your Name <you@example.com>
Date:   Mon May 13 10:00:00 2024 +0000

    feat: Add automated Code Connect system
    
    - Auto-extract Figma component node-ids via API
    ...
```

### Step 6: Push to GitHub

```bash
git push origin main
```

Wait for it to complete. You should see:
```
To github.com:your-org/your-repo.git
   abc123..def456  main -> main
```

---

## Commit Message Guidelines

### Format

```
feat: Short description (50 chars max)

- Bullet point 1
- Bullet point 2
- Bullet point 3

Result: What was accomplished
```

### Examples

**For Code Connect updates:**
```
chore: Update Code Connect node IDs

- Updated Button component node-id
- Updated Input component node-id
- Validated all 24 components

Result: All Code Connect files in sync
```

**For complete system setup:**
```
feat: Add automated Code Connect system

- Auto-extract Figma component node-ids via API
- GitHub Actions workflow for weekly automation
- Complete documentation suite
- npm scripts: figma:auto-publish, figma:auto-connect, figma:mock

Result: Zero manual work for Code Connect setup
```

**For GitHub Actions first setup:**
```
ci: Configure GitHub Actions for Code Connect

- Add weekly automation trigger
- Set up FIGMA_TOKEN secret
- Enable automatic PR creation

Result: Weekly automated Code Connect sync
```

### Commit Types

- `feat:` - New feature
- `fix:` - Bug fix
- `chore:` - Routine task (updates, cleanup)
- `ci:` - CI/CD changes
- `docs:` - Documentation only
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Test changes

---

## Common Workflows

### Scenario 1: Full System Setup (First Time)

```bash
# 1. Run automation
npm run figma:auto-connect

# 2. Review changes
git status
git diff

# 3. Commit everything
./QUICK_COMMIT.sh

# 4. Push
git push origin main

# 5. Set up GitHub Actions (optional)
# See .github/SETUP_GITHUB_ACTIONS.md
```

### Scenario 2: Regular Updates

```bash
# Run monthly/weekly
npm run figma:auto-connect

# Check changes
git status

# Commit if changes exist
if [ -n "$(git status --short)" ]; then
  ./QUICK_COMMIT.sh
  git push origin main
fi
```

### Scenario 3: GitHub Actions Setup

```bash
# 1. Add GitHub secret (one time)
gh secret set FIGMA_TOKEN --body "your_token"

# 2. Create workflow if not exists
mkdir -p .github/workflows
# Copy code-connect.yml to that directory

# 3. Commit workflow
git add .github/workflows/code-connect.yml
git commit -m "ci: Add GitHub Actions for Code Connect"
git push origin main

# Now automated! Runs every Monday at 9 AM UTC
```

### Scenario 4: Fix Failed Automation

```bash
# 1. Check logs
tail -50 code-connect-automation.log

# 2. Fix manually if needed
# Edit src/SvsUiNova/components/*/Component.figma.tsx
# Update node-id values manually

# 3. Stage and commit
git add src/SvsUiNova/components/
git commit -m "fix: Manually update Code Connect node IDs"
git push origin main
```

---

## Advanced Git Commands

### See What Changed Between Commits

```bash
# Between last two commits
git diff HEAD~1 HEAD

# Between current state and main
git diff main

# With file stats
git diff --stat
```

### Undo Last Commit (Before Push!)

```bash
# Keep changes, undo commit
git reset --soft HEAD~1

# Discard commit and changes
git reset --hard HEAD~1
```

### Amend Last Commit (Before Push!)

```bash
# Fix commit message
git commit --amend -m "new message"

# Add forgotten file
git add forgotten-file.txt
git commit --amend --no-edit
```

### Cherry-Pick Specific Commits

```bash
# Copy commits from one branch to another
git checkout main
git cherry-pick abc123def456
```

### Squash Multiple Commits

```bash
# Combine last 3 commits into 1
git rebase -i HEAD~3
# Change 'pick' to 'squash' for commits to combine
```

---

## Troubleshooting

### "nothing to commit"

**Problem:** No changes detected

**Solution:**
```bash
# Check if changes really exist
git status --short

# Run automation again
npm run figma:auto-connect

# Check specifically
git diff src/SvsUiNova/components/
```

### "refusing to merge unrelated histories"

**Problem:** Repository history conflict

**Solution:**
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

### "Your branch is behind"

**Problem:** Remote has changes you don't have

**Solution:**
```bash
# Get latest
git pull origin main

# Then push your changes
git push origin main
```

### "merge conflict"

**Problem:** Both you and remote changed same file

**Solution:**
```bash
# See conflicts
git status

# Edit conflicted files manually
# Remove conflict markers (<<<, >>>)

# Mark as resolved
git add conflicted-file.txt

# Commit the resolution
git commit -m "Resolve merge conflict"
```

### "fatal: not a git repository"

**Problem:** Not in a git repository

**Solution:**
```bash
# Go to repository root
cd /path/to/repo

# Or initialize if not a repo
git init
```

---

## Best Practices

### ✅ DO

- Write clear commit messages
- Commit related changes together
- Push regularly (daily or more)
- Review `git diff` before committing
- Use atomic commits (one logical change per commit)

### ❌ DON'T

- Commit `.env` files
- Use vague messages ("update", "fix")
- Commit large binary files
- Force-push to shared branches
- Leave uncommitted changes overnight

---

## GitHub Pull Requests (Optional)

If using pull requests instead of direct commits:

### Create a PR

```bash
# 1. Create feature branch
git checkout -b feat/code-connect-updates

# 2. Make changes
npm run figma:auto-connect

# 3. Commit
git commit -m "feat: Update Code Connect nodes"

# 4. Push branch
git push origin feat/code-connect-updates

# 5. Go to GitHub and create PR
# - Base: main
# - Compare: feat/code-connect-updates
# - Add description
# - Request reviewers
# - Click "Create pull request"
```

### Merge PR

```bash
# GitHub UI:
# 1. Review changes
# 2. Click "Approve"
# 3. Click "Merge pull request"

# Or from CLI:
gh pr merge <pr-number>
```

---

## Continuous Integration

Once GitHub Actions is set up, it will:

1. Run automation automatically
2. Create commits or PRs
3. Run any tests
4. Push to main
5. No manual commits needed!

See [.github/SETUP_GITHUB_ACTIONS.md](.github/SETUP_GITHUB_ACTIONS.md)

---

## Summary

**Minimal workflow:**
```bash
npm run figma:auto-connect  # Run automation
./QUICK_COMMIT.sh           # Commit with standard message
git push origin main        # Push to GitHub
```

**That's all you need!** 🚀

---

For more help:
- [RUN_ME.md](RUN_ME.md) - 60-second start
- [HOW_TO_RUN_CODE_CONNECT.md](HOW_TO_RUN_CODE_CONNECT.md) - Complete guide
- [CODE_CONNECT_SUMMARY.md](CODE_CONNECT_SUMMARY.md) - System overview
