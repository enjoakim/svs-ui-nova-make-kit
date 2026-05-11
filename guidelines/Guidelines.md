# Svenska Spel Design System - Guidelines

This project uses the Svenska Spel Design System (SvS UI Nova). This document provides an overview and links to detailed documentation.

---

## Documentation Structure

**MUST READ IN FULL**

### Brands
Brand identity elements and visual guidelines:

📁 [View All Brand Topics](./brands/README.md)

**Available Topics:**
- [Color](./brands/Color.md) - Brand color palette and usage guidelines
- [Logotype](./brands/Logotype.md) - Logotype system, Vinnarkuben symbol, wordmark, and usage guidelines
- [Typography](./brands/Typography.md) - Custom typeface family, Svenska Spel Arena and Plan usage guidelines
- [Imagery](./brands/Imagery.md) - Photography style, composition principles, and visual storytelling guidelines
- [Design Elements](./brands/DesignElements.md) - Word boxes, price labels, tags, and graphic design elements
- [Icons and Illustrations](./brands/IconsAndIllustrations.md) - Simple icons, pictograms, and illustrations system

### Foundation
Core design system principles and foundational systems:

📁 [View All Foundation Topics](./foundation/README.md)

**Available Topics:**
- [Intention First](./foundation/IntentionFirst.md) - Design philosophy starting with experience, not components
- [Design Principles](./foundation/DesignPrinciples.md) - Core design principles guiding all product decisions
- [Accessibility](./foundation/Accessibility.md) - Accessibility guidelines and principles for inclusive design
- [Color System](./foundation/ColorSystem.md) - Comprehensive color system with semantic tokens and modes
- [Color Token Architecture](./foundation/ColorTokenArchitecture.md) - Figma collection model, semantic groups, and parent-to-product theme mapping
- [Typography](./foundation/Typography.md) - Typography system with typefaces, scales, and usage guidelines
- [Adaptive Typography & Responsive Expression](./foundation/AdaptiveTypographyResponsiveExpression.md) - Container-aware scaling for type and selected visual elements
- [Iconography](./foundation/Iconography.md) - Icon system with simple icons, pictograms, and illustrations

### Review Frameworks
Cross-cutting review lenses and machine-readable rules used to guide
AI-assisted design work:

- [Nielsen Norman Group's 10 Usability Heuristics](./USABILITY_HEURISTICS.md)
  - heuristic-based UI review guidance
  - machine-readable source: [usability-heuristics.json](./usability-heuristics.json)
- [UX/UI Industry Standards](./UX_UI_INDUSTRY_STANDARDS.md)
  - broader product, accessibility, content, and state-completeness review rules
  - machine-readable source: [ux-ui-industry-standards.json](./ux-ui-industry-standards.json)
- [60-30-10 Color Composition Rule](./COLOR_60_30_10_RULE.md)
  - color-balance guidance for hierarchy and brand expression
  - machine-readable source: [color-60-30-10-rule.json](./color-60-30-10-rule.json)
- [Adaptive Typography & Responsive Expression](./foundation/AdaptiveTypographyResponsiveExpression.md)
  - typography resilience and contextual scaling guidance
  - machine-readable source: [adaptive-typography-responsive-expression.json](./adaptive-typography-responsive-expression.json)

### Patterns
User experience patterns and common interaction flows:

📁 [View All Pattern Topics](./pattern/README.md)

**Available Topics:**
- [Navigation](./pattern/Navigation.md) - Navigation principles and patterns
- [Login](./pattern/Login.md) - Authentication patterns and login flows
- [Errors](./pattern/Errors.md) - Error patterns and messaging
- [Form](./pattern/Form.md) - ⚠️ WIP

### Writing
Content guidelines and voice & tone principles:

📁 [View All Writing Topics](./writing/README.md)

**Available Topics:**
- [Tone and Voice](./writing/ToneAndVoice.md) - Swedish language brand voice guidelines
- [Tone Scale](./writing/ToneScale.md) - Tone adaptation across contexts
- [Writing Rules](./writing/WritingRules.md) - Comprehensive writing conventions and formatting standards
- [Vocabulary](./writing/Vocabulary.md) - Alphabetical glossary of Svenska Spel-specific terms

### Component Documentation
Each component has its own detailed documentation file covering:
- Usage - When to use the component
- Semantic purpose - What each component group means
- Examples - Correct and incorrect usage
- API - Properties and behavior

📁 [View All Components](./components/README.md)

**Available Components:**
- [Accordion](./components/Accordion.md)
- [Avatar](./components/Avatar.md)
- [Badge](./components/Badge.md)
- [BetButton](./components/BetButton.md)
- [BetPrediction](./components/BetPrediction.md)
- [BottomSheet](./components/BottomSheet.md)
- [Button](./components/Button.md)
- [Callout](./components/Callout.md)
- [Cards](./components/Cards.md)
- [Checkbox](./components/Checkbox.md)
- [ComposableModal](./components/ComposableModal.md)
- [DatePicker](./components/DatePicker.md)
- [Dialog](./components/Dialog.md)
- [FloatingActionBar](./components/FloatingActionBar.md)
- [Input](./components/Input.md)
- [Popover](./components/Popover.md)
- [Pricelabel](./components/Pricelabel.md)
- [RadioGroup](./components/RadioGroup.md)
- [Select](./components/Select.md)
- [Separator](./components/Separator.md)
- [Slider](./components/Slider.md)
- [Snackbar](./components/Snackbar.md)
- [Switch](./components/Switch.md)
- [Table](./components/Table.md)
- [Tabs](./components/Tabs.md)
- [TabsMenu](./components/TabsMenu.md)
- [ToggleGroup](./components/ToggleGroup.md)
- [Tooltip](./components/Tooltip.md)

### Technical Guidelines
- [SvsUiNova Guidelines](../src/SvsUiNova/guidelines/Guidelines.md) - SvS UI (nova) technical guidelines

---

## Design System Overview

The Svenska Spel Design System provides:

### Design Tokens (CSS Custom Properties)
All design tokens are available as CSS custom properties in `/src/SvsUiNova/styles.css`:

- **Colors**: Accent, status, surface, stroke colors with semantic naming
  - `--color/accent/primary/bg/rest`, `--color/surface/base/bg/rest`, etc.
- **Spacing**: Gap and padding tokens
  - `--gap/gap-4`, `--padding/p-4`, etc.
- **Border Radius**: Rounded corner values
  - `--border-radius/rounded`, `--border-radius/rounded-lg`, etc.
- **Typography**: Font size and line height tokens
  - `--font-size/text-base`, `--line-height/leading-6`, etc.

### Typography Classes
Pre-defined typography classes for consistent text styling:

- **Hero**: `.svs-compact-hero-title-display`, `.svs-relaxed-hero-title-default`
- **Page**: `.svs-compact-page-title`, `.svs-compact-page-lead`
- **Section**: `.svs-compact-section-title`
- **Card**: `.svs-compact-card-title`, `.svs-compact-card-subtitle`
- **Body**: `.svs-body-base-normal`, `.svs-body-base-strong`, `.svs-body-s-normal`
- **System**: `.system-product-text-base-regular`, `.system-product-text-lg-medium`

### Themes
The design system supports two theme variants:
- **Compact**: Tighter spacing, smaller text sizes for dense layouts
- **Relaxed**: More spacious, larger text sizes for comfortable reading

---

## Important Notes

- Some base components may have default styling (gap/typography) baked in
- Always explicitly set any styling information from the guidelines in your React components to override defaults
- Follow the component documentation patterns outlined in Components.md
- Reference the imported Figma frames for visual implementation examples
- The review frameworks in this folder should stay versioned with the repo so
  Figma Make exports and local calibration work use the same design-quality rules
