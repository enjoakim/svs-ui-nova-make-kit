# AUTO_CODE_CONNECT.md - Technical Deep Dive

Technical documentation for the automated Code Connect system.

## Architecture Overview

The automation system consists of several interconnected components:

```
┌────────────────────────────────────────────────┐
│         Figma Code Connect Automation          │
└────────────────────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    ┌───▼───┐     ┌────▼────┐   ┌───▼────┐
    │Scripts│     │  GitHub │   │  Local │
    │ (CLI) │     │ Actions │   │  Git   │
    └───┬───┘     └────┬────┘   └───┬────┘
        │              │            │
        └──────────────┼────────────┘
                       │
            ┌──────────▼──────────┐
            │   Figma API (v1)    │
            │  - Get file data    │
            │  - Extract node IDs │
            └─────────┬───────────┘
                      │
            ┌─────────▼──────────┐
            │  Component Files   │
            │  *.figma.tsx       │
            │  (24 components)   │
            └────────────────────┘
```

## Script Components

### 1. auto-code-connect.js

**Purpose:** Main automation script that orchestrates the entire workflow.

**Exports:**
```javascript
{
  fetchFigmaData,           // Fetch from Figma API
  extractComponentNodeIds,  // Parse and extract IDs
  findCodeConnectFiles      // Find .figma.tsx files
}
```

**Workflow:**
```
1. fetchFigmaData()
   └─ Makes authenticated HTTP request to Figma API
   └─ Returns file structure with all components
   
2. extractComponentNodeIds()
   └─ Recursively traverses component hierarchy
   └─ Collects node IDs for each component
   
3. findCodeConnectFiles()
   └─ Scans src/SvsUiNova/components/ directory
   └─ Finds all .figma.tsx files
   
4. updateNodeIdInFile()
   └─ For each file, replace TODO with actual ID
   └─ Validates update succeeded
   
5. Validate & Log
   └─ Check all files updated
   └─ Report results
```

**Key Functions:**

```javascript
// Fetch Figma file data from API
async function fetchFigmaData() {
  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`,
    { headers: { 'X-Figma-Token': FIGMA_TOKEN } }
  );
  return response.json();
}

// Extract component node IDs from Figma response
function extractComponentNodeIds(figmaData) {
  const components = {};
  
  const collectComponents = (node) => {
    if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
      components[node.name] = {
        id: node.id,      // e.g., "123:456"
        type: node.type,
        name: node.name
      };
    }
    if (node.children) {
      node.children.forEach(collectComponents);
    }
  };
  
  collectComponents(figmaData.document);
  return components;
}

// Update a file with correct node ID
function updateNodeIdInFile(filePath, componentName, nodeId) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const updated = content.replace(
    /node-id:\s*['"]TODO['"]/g,
    `node-id: '${nodeId}'`
  );
  if (updated !== content) {
    fs.writeFileSync(filePath, updated);
    return true;  // Successfully updated
  }
  return false; // No update needed
}
```

### 2. mock-code-connect.js

**Purpose:** Safe testing version that simulates the workflow without making real API calls.

**Uses Mock Data:**
```javascript
MOCK_FIGMA_DATA = {
  document: {
    children: [{
      name: 'Components',
      children: [
        { name: 'Button', id: '123:456' },
        { name: 'Input', id: '123:457' },
        // ... more components
      ]
    }]
  }
}
```

**Key Difference:**
- ✅ No API calls
- ✅ No file modifications
- ✅ Fast execution
- ✅ Perfect for testing

**Usage:**
```bash
# Simulate workflow without changes
npm run figma:mock
```

### 3. git-commit-code-connect.sh

**Purpose:** Interactive git helper for staging and committing Code Connect changes.

**Workflow:**
```bash
1. Check for changes
   └─ Show git status
   
2. Prompt for confirmation
   └─ "Do you want to commit?"
   
3. Stage files
   └─ git add .
   
4. Show what will commit
   └─ git diff --cached
   
5. Determine commit message
   └─ Analyzes file changes
   └─ Generates appropriate message
   
6. Commit & summarize
   └─ git commit -m "..."
   └─ Show commit info
```

**Exit Codes:**
- `0` - Success
- `1` - Cancelled or error

## Figma API Integration

### Authentication

```javascript
headers: {
  'X-Figma-Token': process.env.FIGMA_TOKEN
}
```

**Token Requirements:**
- Personal access token (not OAuth)
- Scopes: `file:read`
- Never exposed in code (use .env)

### API Endpoints

**Get File Data:**
```
GET /v1/files/{FILE_ID}
```

Response structure:
```javascript
{
  name: "Make Kit",
  id: "OQpwpaJZzLCQG8JkGAnbeJ",
  document: {
    id: "0:0",
    name: "Document",
    type: "DOCUMENT",
    children: [
      {
        name: "Components",
        type: "FRAME",
        children: [
          {
            name: "Button",
            type: "COMPONENT",
            id: "123:456"
          }
          // ... more components
        ]
      }
    ]
  }
}
```

### Rate Limiting

Figma API has rate limits:
- **Free Plan:** 300 requests/minute
- **Paid Plan:** Higher limits
- **Check headers:** `X-Ratelimit-Remaining`

**Handling:**
- Queue requests if needed
- Cache results locally
- Implement exponential backoff for retries

## Code Connect File Format

### Example Structure

```typescript
// src/SvsUiNova/components/Button/Button.figma.tsx

import { Button } from './Button';
import { figma } from 'figma-plugin';

figma.connect(Button, "https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ", {
  props: {
    variant: figma.enum("Variant", {
      primary: "primary",
      secondary: "secondary",
    }),
    size: figma.enum("Size", {
      small: "sm",
      medium: "md",
      large: "lg",
    }),
    disabled: figma.boolean("Disabled"),
    children: figma.string("Label"),
  },
  node_id: '123:456'  // ← Auto-filled by script
});
```

### Node ID Format

```
node_id: '123:456'
├─ 123 = Page ID in Figma
└─ 456 = Component ID on that page
```

**Finding Node IDs:**
1. Open component in Figma
2. Select it on canvas
3. Look at URL: `node-id=123:456`
4. Copy the ID

## File Matching Algorithm

The script matches `.figma.tsx` files to Figma components:

```javascript
// Match component by name similarity
const matchingComponent = Object.values(components).find(
  (comp) =>
    comp.name.toLowerCase().includes(fileName.toLowerCase()) ||
    fileName.toLowerCase().includes(comp.name.toLowerCase())
);
```

**Examples:**
- `Button.figma.tsx` ← → `Button` component ✅
- `input-field.figma.tsx` ← → `InputField` component ✅
- `Custom.figma.tsx` ← → `Custom` component ✅

**Cases that might fail:**
- Name doesn't match at all
- Component renamed since file creation
- Multiple components with similar names

**Solution:** Manual update in the `.figma.tsx` file

## Validation Logic

```javascript
function validateCodeConnectFiles() {
  const filesWithoutNodeId = codeConnectFiles.filter((filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.includes("node-id: 'TODO'");
  });
  
  return {
    valid: filesWithoutNodeId.length === 0,
    filesNeedingAttention: filesWithoutNodeId,
    totalFiles: codeConnectFiles.length
  };
}
```

## Logging System

All operations logged to `code-connect-automation.log`:

```
[2024-05-13T10:00:00.000Z] 🚀 Starting Code Connect Automation...
[2024-05-13T10:00:01.000Z] 📡 Fetching Figma data...
[2024-05-13T10:00:02.000Z] ✅ Successfully fetched Figma file: Make Kit
[2024-05-13T10:00:02.000Z] 🔍 Extracting component node IDs...
[2024-05-13T10:00:02.000Z]   ✓ Found component: Button (123:456)
...
```

**Log Format:**
```
[ISO_TIMESTAMP] EMOJI MESSAGE
```

**Levels:**
- ✅ Success
- ❌ Error
- 🚀 Start/End
- 📡 API calls
- 🔍 Processing
- ⚠ Warnings

## Environment Variables

### Required

```bash
FIGMA_TOKEN=<your_figma_api_token>
```

### Optional

```bash
FIGMA_FILE_ID=OQpwpaJZzLCQG8JkGAnbeJ
NODE_ENV=production
DEBUG=true  # For verbose logging
```

### GitHub Actions Secrets

```yaml
env:
  FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
```

## Error Handling

### Common Error Scenarios

```javascript
// 1. Missing token
if (!FIGMA_TOKEN) {
  error('FIGMA_TOKEN not found in environment');
  process.exit(1);
}

// 2. API error
if (!response.ok) {
  throw new Error(`Figma API error: ${response.statusText}`);
}

// 3. File not found
if (!fs.existsSync(COMPONENT_DIR)) {
  log('Component directory not found - skipping scan');
}

// 4. Invalid file path
try {
  fs.readFileSync(filePath);
} catch (err) {
  error(`Failed to read file: ${err.message}`);
}
```

## Performance Characteristics

### Time Complexity

- **Fetching:** O(1) - Single API call
- **Extracting:** O(n) - Linear tree traversal
- **Finding files:** O(n) - Directory scan
- **Updating files:** O(n*m) - n files, m bytes average

### Space Complexity

- **API Response:** ~1-5 MB (cached in memory)
- **Components Map:** O(n) - One entry per component
- **File Cache:** O(n*m) - All files in memory

### Typical Performance

| Operation | Time |
|-----------|------|
| Fetch Figma API | 0.5-2s |
| Extract components | <100ms |
| Find .figma.tsx files | 100-500ms |
| Update files | 500ms-1s |
| Validate & log | <500ms |
| **Total** | **1-5 seconds** |

## GitHub Actions Integration

### Workflow File

`.github/workflows/code-connect.yml`

**Triggers:**
- ✅ Cron schedule (weekly Monday 9 AM UTC)
- ✅ Manual trigger (workflow_dispatch)
- ✅ On push to changes

**Steps:**
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Configure git
5. Run automation script
6. Check for changes
7. Commit if changes found
8. Push to main
9. Optional: Create PR
10. Publish summary

### Scheduling

```yaml
schedule:
  - cron: '0 9 * * 1'  # Every Monday, 9 AM UTC
```

**Cron Format:** `minute hour day month day-of-week`

### GitHub Environment

```yaml
env:
  FIGMA_TOKEN: ${{ secrets.FIGMA_TOKEN }}
```

**Secrets:** Stored in Settings → Secrets and variables

## Testing Strategy

### Unit Tests

```javascript
// Test component extraction
const data = mockFigmaData;
const components = extractComponentNodeIds(data);
assert(components.Button.id === '123:456');
```

### Integration Tests

```javascript
// Test full workflow
npm run figma:mock
# Verify mock output is correct
```

### Smoke Tests

```bash
# Check script is valid JavaScript
node --check scripts/auto-code-connect.js

# Check shell scripts are valid
bash -n scripts/git-commit-code-connect.sh
```

## Extending the System

### Adding New Features

1. **New automation step:**
   - Add function to `auto-code-connect.js`
   - Update workflow in `runAutomation()`
   - Add logging via `log()`

2. **New GitHub Action:**
   - Edit `.github/workflows/code-connect.yml`
   - Add new step in jobs
   - Test with manual trigger

3. **New documentation:**
   - Create markdown file in repo root
   - Link from index guides
   - Add to workflow summary

### Customization Examples

**Change Figma file:**
```bash
FIGMA_FILE_ID=your_file_id npm run figma:auto-connect
```

**Change schedule:**
```yaml
schedule:
  - cron: '0 12 * * 0'  # Sunday at noon
```

**Add custom matching:**
```javascript
const matchingComponent = components[fileNameWithoutExt] ||
  customComponentMapping[fileNameWithoutExt];
```

## Troubleshooting Guide

### API Connection Issues

```javascript
// Verify token is valid
console.log('Token length:', FIGMA_TOKEN?.length);

// Check API endpoint
fetch('https://api.figma.com/v1/files/test')
  .then(r => console.log(r.status))
  .catch(e => console.error(e));
```

### File System Issues

```bash
# Check permissions
ls -la src/SvsUiNova/components/

# Check free space
df -h

# Check file encoding
file src/SvsUiNova/components/*.figma.tsx
```

### GitHub Actions Issues

Check workflow logs:
1. Go to Actions tab
2. Click workflow run
3. View logs for each step

## Future Enhancements

Possible improvements:

1. **Parallel processing** - Use Promise.all for faster updates
2. **Caching** - Cache Figma responses locally
3. **Diff preview** - Show changes before commit
4. **Error recovery** - Rollback on specific errors
5. **Metrics tracking** - Track automation success rate
6. **Slack notifications** - Alert team on updates
7. **Custom matchers** - Pluggable matching strategies
8. **Batch operations** - Group multiple updates

---

**Questions?** See [HOW_TO_RUN_CODE_CONNECT.md](HOW_TO_RUN_CODE_CONNECT.md) for usage guide.
