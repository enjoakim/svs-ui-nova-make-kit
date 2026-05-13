# GitHub Actions Setup Guide for Code Connect

This guide explains how to set up the automated Code Connect workflow in GitHub Actions.

## Prerequisites

- Admin access to the GitHub repository
- A Figma API token
- The Figma Make Kit file connected to this repository

## Step 1: Create GitHub Secret for Figma Token

### Option A: Via GitHub Web UI

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `FIGMA_TOKEN`
5. Value: Your Figma API token
6. Click **Add secret**

### Option B: Via GitHub CLI

```bash
gh secret set FIGMA_TOKEN --body "YOUR_FIGMA_TOKEN_HERE"
```

## Step 2: Verify Workflow File

The workflow file is located at `.github/workflows/code-connect.yml`

It automatically:
- Runs every Monday at 9:00 AM UTC (configurable in the `schedule` section)
- Can be triggered manually from GitHub Actions tab
- Triggers on changes to Code Connect files

## Step 3: Configure Figma Details (Optional)

Edit `.github/workflows/code-connect.yml` if you need to:

```yaml
- name: Run Code Connect automation
  env:
    FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
    FIGMA_FILE_ID: OQpwpaJZzLCQG8JkGAnbeJ  # Change this if needed
```

## Step 4: Test the Workflow

### Manual Trigger

1. Go to **Actions** tab in your GitHub repository
2. Select **Code Connect Automation** workflow
3. Click **Run workflow**
4. Select branch (usually `main`)
5. Click **Run workflow** button

### Monitor Execution

1. The workflow will run and you can watch the progress in the **Actions** tab
2. Check the logs for any errors
3. Review the summary after completion

## Step 5: Handle First Run

On the first run, the workflow might:
- Create updates to Code Connect node IDs
- Create a Pull Request with changes
- Or commit directly to main (depending on configuration)

**Review the changes before merging!**

## Troubleshooting

### Workflow Not Running

**Problem:** Scheduled workflow doesn't trigger
- **Solution:** GitHub Actions requires at least one commit on the branch for schedules to work

**Problem:** "FIGMA_TOKEN not found"
- **Solution:** Check that the secret is properly set in Settings → Secrets

**Problem:** "rate limited"
- **Solution:** Figma API has rate limits. Check your Figma account plan

### Script Errors

Check the workflow logs:
1. Go to Actions tab
2. Click the failed workflow run
3. Click the failing job
4. Expand the step that failed
5. Look for error messages

## Configuration

### Change Schedule

Edit `.github/workflows/code-connect.yml`:

```yaml
schedule:
  - cron: '0 9 * * 1'  # Monday at 9 AM UTC
```

Common cron expressions:
- `0 9 * * 1` - Weekly on Monday at 9 AM UTC
- `0 9 * * *` - Daily at 9 AM UTC
- `0 */6 * * *` - Every 6 hours

### Disable Pull Request Creation

If you prefer direct commits instead of PRs, edit the workflow and remove or comment out the "Create Pull Request" step.

## Environment Variables

The workflow uses these environment variables:

| Variable | Source | Purpose |
|----------|--------|---------|
| `FIGMA_TOKEN` | GitHub Secret | Authenticate with Figma API |
| `FIGMA_FILE_ID` | Hardcoded | ID of the Make Kit Figma file |
| `NODE_ENV` | Auto | Set to 'production' |

## Monitoring & Logs

### View Workflow Runs

1. Go to **Actions** tab
2. Click **Code Connect Automation**
3. See all previous runs with status

### Check Logs

Click any run to see:
- Overall status
- Individual step outputs
- Complete logs for each step
- Workflow summary

### Download Logs

1. Click a workflow run
2. Click **Download logs** (top right)
3. Get ZIP with all logs

## Security Notes

⚠️ **Important:**
- Never commit your Figma token to the repository
- Only store it in GitHub Secrets
- Regularly rotate your Figma token
- Grant minimum necessary permissions to the token

## Support

For issues:
1. Check the workflow logs first
2. Verify FIGMA_TOKEN is set correctly
3. Ensure the Figma file ID is correct
4. Check that Figma API access is enabled

## Next Steps

Once the workflow is set up:
1. Test it manually first
2. Monitor the first scheduled run
3. Review the logs for any issues
4. Adjust schedule/configuration as needed

---

For detailed instructions on running Code Connect locally, see [HOW_TO_RUN_CODE_CONNECT.md](../HOW_TO_RUN_CODE_CONNECT.md)
