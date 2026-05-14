# AI Context

`ai-context/` is the operational design-system context layer for AI-assisted
building in this repository.

It is written for both humans and modern AI tools such as Codex, Claude,
Cursor, Figma Make, and other UI generation systems that need precise guidance
 instead of generic design advice.

Use this folder when an AI system needs to:

- choose existing components instead of inventing new ones
- apply tokens, typography, spacing, and radius consistently
- compose real UI patterns from the available building blocks
- import components correctly inside this repo
- stay aligned with the repo's current implementation style and constraints

This folder is tool-agnostic. It does not assume one specific agent workflow.
It translates the repository's design system into practical implementation
rules that AI systems can follow during code generation, design generation, and
UI refinement.

## How To Use This Folder

Read the files in `guidelines/` in priority order before generating or editing
UI code:

1. `implementation-rules.md`
2. `component-import-paths.md`
3. `css-variable-usage.md`
4. `color-token-usage.md`
5. `spacing-layout-rules.md`
6. `hierarchy-typography.md`
7. `radius-rules.md`
8. `optical-rules.md`
9. `component-composition-patterns.md`

Use `examples/` for future worked examples and `manifests/` for future
machine-readable summaries.

For broader UI calibration, this folder can be used together with
`guidelines/DesignParserReference.md`, which explains how to translate external
rule libraries such as `designparser.de` into repo-native implementation
without creating a parallel system.

## Repo Intent

This repo is not only a Make Kit wrapper. It is also the bridge between:

- the SvS UI Nova design system
- Figma library structure
- Figma Make source
- AI-assisted implementation workflows
- design and UX guidance used by teams

AI output should preserve that bridge instead of creating a parallel system.
