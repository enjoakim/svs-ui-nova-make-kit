# RUN_ME.md - Ultra-Quick Start

⚡ **Get Code Connect running in 60 seconds**

## 1. Set Your Figma Token (30 seconds)

```bash
echo "FIGMA_TOKEN=your_token_here" > .env
```

Get your token from: [figma.com/api/tokens](https://figma.com/api/tokens)

## 2. Run the Automation (20 seconds)

```bash
npm run figma:auto-connect
```

Or the mock version first:
```bash
npm run figma:mock
```

## 3. Review & Commit (10 seconds)

```bash
./QUICK_COMMIT.sh
```

Done! 🎉

---

## What Just Happened?

The script:
1. ✅ Fetched your Figma Make Kit components
2. ✅ Extracted node IDs automatically
3. ✅ Updated all Code Connect files
4. ✅ Validated everything works
5. ✅ Prepared files for commit

## Common Issues

### "FIGMA_TOKEN not found"
→ Create `.env` file with `FIGMA_TOKEN=your_token`

### "No components found"
→ Check your Figma file ID in the script

### "Some files still have TODO"
→ Those need manual matching - see detailed guide below

---

## Next Steps

For detailed documentation:
- **Complete Guide:** [HOW_TO_RUN_CODE_CONNECT.md](HOW_TO_RUN_CODE_CONNECT.md)
- **Quick Start:** [QUICK_START_CODE_CONNECT.md](QUICK_START_CODE_CONNECT.md)
- **Technical Details:** [AUTO_CODE_CONNECT.md](AUTO_CODE_CONNECT.md)

## GitHub Actions

To automate this weekly:
- See [.github/SETUP_GITHUB_ACTIONS.md](.github/SETUP_GITHUB_ACTIONS.md)

---

**That's it!** You now have automated Code Connect. 🚀
