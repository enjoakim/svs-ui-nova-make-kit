# QUICK_START_CODE_CONNECT.md

Get Code Connect automation running in 5 minutes.

## TL;DR (60 seconds)

```bash
# 1. Set Figma token
echo "FIGMA_TOKEN=paste_your_token_here" > .env

# 2. Install & run
pnpm install
npm run figma:auto-connect

# 3. Commit
./QUICK_COMMIT.sh

# 4. Push
git push origin main
```

Done! 🎉

---

## Detailed 5-Minute Setup

### Step 1: Get Figma Token (1 minute)

1. Go to https://figma.com/api/tokens
2. Click "Create a new personal access token"
3. Name it "Code Connect" 
4. Click create, copy the token

### Step 2: Set Token in .env (1 minute)

In repository root:

```bash
echo "FIGMA_TOKEN=your_copied_token" > .env
```

Verify:
```bash
cat .env  # Should show: FIGMA_TOKEN=your_token
```

### Step 3: Install Dependencies (1 minute)

```bash
pnpm install
```

### Step 4: Run Automation (1 minute)

```bash
npm run figma:auto-connect
```

Wait for it to finish. You should see:
- ✅ Fetching Figma data
- ✅ Extracting components
- ✅ Updating files
- ✅ Validation complete

### Step 5: Commit & Push (1 minute)

```bash
./QUICK_COMMIT.sh
git push origin main
```

## What Happened?

The automation:
1. Connected to Figma API
2. Read your Make Kit components
3. Found all component node IDs
4. Updated every `.figma.tsx` file with the correct ID
5. Validated everything works

## Verify It Worked

Check the log:
```bash
tail code-connect-automation.log
```

Check git status:
```bash
git status
```

Check specific file:
```bash
cat src/SvsUiNova/components/Button/Button.figma.tsx | grep "node-id"
```

Should show: `node-id: '123:456'` (with actual ID, not "TODO")

## Common Issues

| Issue | Fix |
|-------|-----|
| "FIGMA_TOKEN not found" | Run: `echo "FIGMA_TOKEN=your_token" > .env` |
| "401 Unauthorized" | Token invalid. Get new one from figma.com/api/tokens |
| "No components found" | Check that Figma file ID is correct in script |
| pnpm not installed | Install with: `npm install -g pnpm@8` |

## Next Steps

- See [RUN_ME.md](RUN_ME.md) for ultra-quick (60 sec) version
- See [HOW_TO_RUN_CODE_CONNECT.md](HOW_TO_RUN_CODE_CONNECT.md) for complete guide
- See [.github/SETUP_GITHUB_ACTIONS.md](.github/SETUP_GITHUB_ACTIONS.md) to automate weekly

---

**Questions?** Check [HOW_TO_RUN_CODE_CONNECT.md](HOW_TO_RUN_CODE_CONNECT.md#troubleshooting) troubleshooting section.
