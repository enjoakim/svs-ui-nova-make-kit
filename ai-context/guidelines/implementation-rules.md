# Implementation Rules

These rules are non-negotiable for AI-generated UI code in this repository.

## Core Rules

- Use existing repo components before creating new UI primitives.
- Use semantic tokens and semantic utility classes before raw values.
- Follow the existing import paths and alias patterns already used in `src/app`
  and `src/SvsUiNova`.
- Prefer composition of existing components over ad hoc markup.
- Respect the spacing scale, typography hierarchy, and radius model documented
  in this folder.
- Prefer existing typography classes and theme utilities over inline font
  styling.
- Only introduce custom CSS when the desired behavior cannot be expressed with
  the existing component API or existing utility system.
- Avoid arbitrary spacing, radius, color, and shadow values unless there is no
  token or existing pattern that fits.

## Component First

- Reach for `Button`, `Input`, `Card`, `Dialog`, `Popover`, `Tabs`, `Badge`,
  `Checkbox`, `Select`, `Table`, and other wrappers under
  `src/SvsUiNova/components` first.
- Use the brand asset barrels under `src/SvsUiNova/brands/*` for logos, brand
  icons, and cubes.
- Do not rebuild controls that already exist as repo components.

## Token First

- Prefer Tailwind semantic utilities backed by `src/styles/theme.css`, such as
  `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`,
  `border-border`, `bg-primary`, and `text-primary-foreground`.
- Use detailed token values from `src/SvsUiNova/styles.css` only when the
  semantic layer is insufficient.
- Treat `src/design-tokens` as the normalized token structure.
- Treat `src/imports` as migration input or generated source, not the first
  choice for curated implementation.

## Composition First

- Build UI from repo subcomponents such as `CardHeader`, `CardContent`,
  `CardFooter`, `TableHeader`, `TableRow`, and `DialogFooter`.
- Prefer stacking components with documented spacing instead of inserting many
  one-off wrappers.
- Reuse established demo patterns from `src/app/ComponentDemo.tsx` and
  `src/app/AllComponentsDemo.tsx` when they match the use case.

## Typography First

- Use the `svs-*` typography classes from `src/SvsUiNova/styles.css` when they
  fit the content role.
- Use the semantic type variables in `src/styles/theme.css` when building new
  utility-level styles.
- Do not invent a parallel headline/body system.

## CSS Discipline

- Prefer Tailwind utility classes that resolve to the repo's semantic theme.
- Prefer semantic colors and spacing utilities over inline `style` objects.
- Use inline styles only for:
  - token values that are not exposed through utilities
  - one-off measured layout behavior
  - controlled optical corrections

## Recommendation: Existing Gaps

The repo currently has some implementation drift:

- several components still use hardcoded hex, rgba, and px values
- some component docs and examples use prop names that do not fully match the
  TypeScript API
- some demo surfaces still reach into generated imports

When generating new code, do not copy drift forward. Follow the public API and
the guidance in this folder unless you are intentionally refactoring the
underlying component.

When you need extra layout or hierarchy calibration beyond the repo's current
documentation, use `guidelines/DesignParserReference.md` before introducing new
ad hoc rules.
