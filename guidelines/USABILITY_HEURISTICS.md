# Nielsen Norman Group's 10 Usability Heuristics

This directory contains the comprehensive usability guidelines for AI-driven UI design in Figma Make, based on Nielsen Norman Group's 10 Usability Heuristics.

## File Location

**`usability-heuristics.json`** - Machine-readable guidelines (v2.0.0)

## Overview

The usability heuristics provide a framework for evaluating and designing user interfaces. The AI system uses these guidelines to ensure all generated UIs meet high usability standards.

## The 10 Heuristics

### Critical Severity

- **H05: Error Prevention** - Prevent errors before they occur through good design
  - Component implications: Form validation, confirmation dialogs, undo functionality
  - Minimum score required: 3/5

### High Severity

- **H01: Visibility of System Status** - Keep users informed about what's happening
  - Component implications: Loading states, progress indicators, status messages
  - Minimum score required: 3/5

- **H02: Match Between System and Real World** - Use familiar language and concepts
  - Component implications: Clear labels, intuitive icons, natural metaphors

- **H03: User Control and Freedom** - Provide undo/redo and easy navigation
  - Component implications: Cancel buttons, back navigation, clear exit paths
  - Minimum score required: 3/5

- **H09: Help Users Recognize, Diagnose, and Recover from Errors** - Clear error messages
  - Component implications: Specific error messages, solutions, recovery paths
  - Minimum score required: 3/5

### Medium to High Severity

- **H04: Consistency and Standards** - Follow platform conventions
  - Component implications: Consistent patterns, standard UI elements

- **H06: Recognition Rather Than Recall** - Minimize memory load
  - Component implications: Visible options, tooltips, autocomplete

### Medium Severity

- **H07: Flexibility and Efficiency of Use** - Support both novice and expert users
  - Component implications: Shortcuts, customization, progressive disclosure

- **H08: Aesthetic and Minimalist Design** - Remove unnecessary elements
  - Component implications: Clean layouts, focused content, visual hierarchy

### Low to Medium Severity

- **H10: Help and Documentation** - Provide accessible help when needed
  - Component implications: Contextual help, tooltips, documentation links

## Quality Thresholds

- **Minimum average score**: 4/5 across all heuristics
- **Critical heuristics**: H01, H03, H05, H09 must score 3+
- **Per-screen evaluation**: Each screen must meet these thresholds

## AI System Instructions

The JSON file includes specific behavioral rules for AI-driven design:

1. **Always apply heuristics** - Every design decision must consider all 10 heuristics
2. **Prioritize critical heuristics** - H05 (Error Prevention) and other high-severity items first
3. **Component-specific guidance** - Each heuristic includes component implications
4. **Cross-heuristic patterns** - Common patterns that satisfy multiple heuristics
5. **Copywriting rules** - Guidelines for clear, accessible UI text

## Usage in Figma Make

The usability heuristics are automatically applied when generating UIs. The AI:

1. Reviews each design against all 10 heuristics
2. Identifies potential usability issues
3. Suggests improvements based on heuristic guidance
4. Validates final designs meet quality thresholds

## File Structure

```json
{
  "$schema": "...",
  "metadata": { ... },
  "ai_system_instructions": { ... },
  "heuristics": [
    {
      "id": "H01",
      "name": "...",
      "severity": "...",
      "description": "...",
      "component_implications": [ ... ],
      "screen_review_questions": [ ... ],
      "common_failure_patterns": [ ... ],
      "figma_make_prompt_snippet": "..."
    }
  ],
  "cross_heuristic_patterns": { ... },
  "copywriting_rules": [ ... ],
  "quality_thresholds": { ... }
}
```

## For Developers

When consuming this package, the usability heuristics file is available at:

```bash
node_modules/@make-kits/svs-ui-nova/guidelines/usability-heuristics.json
```

You can reference this in your own AI-driven design tools or validation systems.

## Related Files

- [usability-heuristics.json](./usability-heuristics.json)
- [Guidelines.md](./Guidelines.md)

## Version History

- **v2.0.1** - Repo-native metadata and placement guidance
- **v2.0.0** - Comprehensive calibrated guidelines with AI system instructions
- Includes all 10 heuristics with detailed component implications
- Ready-to-use Figma Make prompt snippets
- Machine-readable quality thresholds
