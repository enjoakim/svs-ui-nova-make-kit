# Hierarchy And Typography

This repo already exposes both semantic typography variables and concrete
`svs-*` utility classes. Use them instead of inventing a new text system.

## Typeface Roles

- `Svenska Spel Arena Pro` is the display face.
- `Svenska Spel Plan Pro` is the body and UI face.

Use Arena Pro for expressive display moments.
Use Plan Pro for body text, component labels, controls, and dense interface
content.

## Preferred Repo Typography Classes

Use these classes first when they fit:

- `svs-compact-hero-title-display`
- `svs-compact-hero-title-default`
- `svs-compact-page-title`
- `svs-compact-page-lead`
- `svs-compact-section-title`
- `svs-compact-card-title`
- `svs-compact-card-subtitle`
- `svs-relaxed-*` equivalents for more spacious layouts
- `svs-body-base-normal`
- `svs-body-base-strong`
- `svs-body-s-normal`
- `svs-body-s-strong`
- `svs-meta-label`
- `svs-meta-value`
- `svs-helper-text`
- `svs-adaptive-card-title`
- `svs-adaptive-surface-title`
- `svs-adaptive-body-text`
- `svs-adaptive-body-text-strong`

## Heading Levels

Use this structure:

- H1: page-defining headline only
- H2: major section or screen-level heading
- H3: subsection or card-title cluster
- H4: smaller component-level heading

Repo note:

- base theme styles in `src/styles/theme.css` set default typography for raw
  `h1` to `h4`
- adaptive component classes are preferred inside reusable surfaces

## Body, Meta, And Helper Roles

- Body copy: `svs-body-base-normal`
- Emphasized body copy: `svs-body-base-strong`
- Small body copy: `svs-body-s-normal`
- Small emphasized body copy: `svs-body-s-strong`
- Data labels: `svs-meta-label`
- Data values: `svs-meta-value`
- Helper and legal copy: `svs-helper-text`

## Hierarchy Spacing

Use these relationships:

- heading to supporting copy: `8`
- heading block to first action or content group: `16`
- card title to card body: `12` to `16`
- helper text under inputs: `8`
- major section heading to body region: `24`

## Density Rules

- Use compact classes in denser surfaces, admin-like views, and repeated cards.
- Use relaxed classes in hero, editorial, and lower-density landing sections.
- Do not mix compact and relaxed styles randomly within the same local pattern.

## Do

- use Arena Pro selectively for display emphasis
- use Plan Pro for UI and reading comfort
- keep helper, meta, and label text visibly subordinate to headings and body
- use adaptive classes inside reusable responsive components

## Do Not

- use display typography for long paragraphs
- use body text classes for major headings
- mix many one-off font sizes in one surface
- solve hierarchy problems only with color when spacing and type should do the
  work first

## Recommendation: Current Gap

Some components still hardcode font families and pixel values inline.
When generating new UI, prefer the shared typography classes or theme tokens
unless you are editing an existing component that already has a local
hardcoded typography constraint.
