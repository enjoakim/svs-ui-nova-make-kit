# UX/UI Industry Standards Guidelines

This directory contains comprehensive UX/UI industry standards and design principles for AI-driven UI design in Figma Make.

## File Location

**`ux-ui-industry-standards.json`** - Machine-readable guidelines (v1.0.0)

## Overview

These guidelines synthesize best practices from leading design systems and industry standards to ensure AI-generated UIs meet professional quality benchmarks. The framework covers user goals, accessibility, navigation, visual design, content, consistency, responsiveness, states, forms, interaction feedback, ethics, and brand expression.

## Source References

The guidelines are based on publicly available industry standards:

- **Nielsen Norman Group** - Research-based usability and UX evaluation guidance
- **WCAG 2.2** - W3C accessibility standards for web content
- **Material Design 3** - Google's open-source design system
- **Apple Human Interface Guidelines** - Platform-specific best practices
- **Microsoft Fluent 2** - Modern design system with accessibility foundations
- **IBM Carbon Design System** - Enterprise-grade design patterns
- **U.S. Web Design System** - Public-sector usability and accessibility focus

## The 12 Industry Principles

### Critical Severity

These principles must score 3+ out of 5 in every design:

- **UXUI01: Start with user goals and task success**
  - Every interface decision should support a clear user goal or product outcome
  - Primary path to completion must be obvious
  - Remove elements that don't support the user goal

- **UXUI02: Accessibility and inclusive design by default**
  - WCAG 2.2-oriented design from the beginning
  - Sufficient contrast, keyboard support, screen-reader compatibility
  - Never rely on color alone for meaning
  - Clear labels and logical focus order

- **UXUI08: Complete state and edge-case design**
  - Design beyond the ideal happy path
  - Include: loading, empty, error, success, disabled, selected, focused, offline, permission states
  - Provide recovery options for errors and interruptions
  - Differentiate no results, no access, failed load, unavailable service

- **UXUI11: Trust, ethics, privacy, and transparency**
  - Make costs, risks, commitments, data use, and consequences clear
  - Avoid dark patterns, forced choices, confusing opt-outs
  - Transparent consent and privacy controls
  - Explain AI-generated recommendations and limitations

### High Severity

- **UXUI03: Clear information architecture and navigation**
  - Users should understand where they are and how to navigate
  - Visible current location and active states
  - Labels match user language, not internal organization

- **UXUI04: Strong visual hierarchy and layout clarity**
  - Clear hierarchy between title, key content, supporting content, and actions
  - Spacing and grouping communicate relationships
  - Primary actions visually distinct from secondary

- **UXUI05: Content design and plain language**
  - Interface copy helps users understand, decide, act, and recover
  - Action-oriented button text when it improves clarity
  - Avoid jargon, vague CTAs, legalistic wording

- **UXUI06: Consistency through design-system alignment**
  - Use existing design-system components and tokens first
  - Keep labels, states, spacing, and behaviors consistent
  - Create exceptions only when user need justifies them

- **UXUI07: Responsive and adaptive design**
  - Adapt gracefully across devices, screen sizes, input methods
  - Support touch, mouse, keyboard, and assistive input
  - Avoid fixed layouts that break with longer text or zoom

- **UXUI09: Forms, inputs, and data entry quality**
  - Ask only for necessary information
  - Persistent labels and clear helper text
  - Validate close to the field at the right time
  - Support review before high-impact submission

### Medium to High Severity

- **UXUI10: Interaction feedback, motion, and perceived performance**
  - Give immediate feedback for user actions
  - Use loading indicators, skeletons, or progress appropriately
  - Use motion to explain relationships, transitions, status changes
  - Respect reduced-motion preferences

- **UXUI12: Scalable visual design and brand expression**
  - Balance brand expression with usability and accessibility
  - Make visual system scalable across simple and complex screens
  - Use brand moments intentionally, not everywhere

## UI Pattern Guidelines

### Navigation
- Clear labels and visible active states
- Choose appropriate pattern: tabs (sibling views), breadcrumbs (hierarchy), side navigation (broad sections), steppers (linear processes)

### Buttons and Actions
- One clear primary action per section
- Secondary/tertiary actions visually quieter
- Destructive actions separated, clearly labeled, confirmed or undoable

### Forms
- Persistent labels, clear validation, grouped fields
- Errors close to affected fields
- Support save, back, edit, review for longer or high-risk forms

### Cards and Lists
- Use cards when items need grouped metadata or independent actions
- Use lists when scanning and comparison are priorities
- Avoid too many equal-weight cards

### Tables and Data
- Support sorting, filtering, scanning, selection, pagination
- Keep important columns visible with clear labels
- Provide empty, no-results, loading, error states

### Modals and Overlays
- Use for focused, interruptive, or high-impact decisions
- Clear title, purpose, primary action, secondary action, close behavior
- Return focus logically after closing

### Alerts and Messages
- Inline messages for local feedback
- Banners for page/system feedback
- Toasts for temporary low-risk confirmation
- Include recovery action when needed

### Empty States
- Explain why empty and what to do next
- Guide setup, search refinement, permission request, or first action
- Keep tone helpful and concise

## Quality Thresholds

- **Minimum average score**: 4/5 across all principles
- **Critical principles**: UXUI01, UXUI02, UXUI08, UXUI11 must score 3+
- **Review rule**: If user goal clarity, accessibility, complete states, or trust/ethics score below 3, revise before handoff

## AI Review Framework

### Scoring Scale
- **0**: Not addressed
- **1**: Weak or mostly decorative
- **2**: Partially addressed
- **3**: Usable but missing edge cases
- **4**: Strong and production-minded
- **5**: Excellent, accessible, scalable, and well-calibrated

### Review Sequence

1. Identify the user goal, context, and primary task
2. Check hierarchy, layout, navigation, and primary action clarity
3. Check accessibility: contrast, labels, focus, keyboard, color independence, motion
4. Check design-system alignment: components, tokens, spacing, states, naming
5. Check complete states and edge cases
6. Check content quality and tone
7. Check responsiveness and input methods
8. Check forms, data entry, errors, and recovery
9. Check trust, privacy, ethics, and high-impact decisions
10. Remove clutter and improve visual focus
11. Flag assumptions and design-system gaps

## Cross-Cutting Quality Rules

### Accessibility
- WCAG-oriented contrast and interaction thinking
- Don't rely on color alone
- Support keyboard navigation and visible focus
- Use accessible names and logical structure
- Respect reduced motion and zoom

### Responsive Design
- Define behavior across breakpoints
- Avoid fixed layouts that break with text expansion
- Keep actions reachable and content scannable
- Adapt navigation and data-heavy patterns

### Content
- Use user-facing language
- Keep headings informative
- Make CTAs specific when outcome matters
- Write errors and empty states with next steps
- Avoid internal jargon

### States
All components should consider:
- Default, Hover, Pressed, Focused, Selected
- Disabled, Loading, Empty
- Success, Error, Warning
- No access, Offline/unavailable, Partial data

### Ethics
- Avoid dark patterns
- Make consent reversible
- Use fair defaults
- Explain consequences before commitment
- Respect user autonomy

## Figma Make Prompt Snippets

### General Screen Generation
```
Generate this screen using current UX/UI industry standards. Start with the user goal, create clear hierarchy, use accessible and responsive design, align with design-system components and tokens, include complete states and edge cases, use plain language, provide visible feedback, avoid dark patterns, and make the primary action obvious.
```

### Product Flow Generation
```
Design the complete flow from entry to success. Include happy path, cancellation, editing, loading, empty, error, permission, success, and recovery states. Prioritise user control, accessibility, trust, and clear consequences.
```

### Component Generation
```
Create this component using design-system conventions. Include default, hover, pressed, focused, selected, disabled, loading, success, warning, and error states where relevant. Ensure accessible names, visible focus, readable contrast, and consistent token usage.
```

### UX Review
```
Review this design against modern UX/UI standards. Score user goal clarity, accessibility, navigation, hierarchy, content, consistency, responsiveness, states, forms, feedback, trust, and visual scalability from 0-5. List risks and recommended improvements.
```

### Red Team Review
```
Act as a critical UX reviewer. Find where users could misunderstand, get lost, make errors, feel manipulated, miss feedback, struggle with accessibility, or fail on smaller screens. Recommend concrete fixes.
```

## Machine-Readable Summary

### Must Have
- clear_user_goal
- obvious_primary_action
- accessible_contrast
- visible_focus_state
- keyboard_and_touch_support
- responsive_layout
- plain_language
- design_system_alignment
- complete_ui_states
- error_recovery
- safe_defaults
- trustworthy_consent
- semantic_tokens
- scalable_visual_hierarchy

### Avoid
- aesthetic_only_design
- happy_path_only
- low_contrast
- colour_only_meaning
- placeholder_only_labels
- unclear_navigation
- multiple_primary_actions
- one_off_components
- desktop_only_layout
- generic_error_messages
- dark_patterns
- hidden_costs_or_consequences
- visual_clutter
- inconsistent_states

### Critical Checks
1. Can the user complete the main task?
2. Is the interface accessible enough to proceed?
3. Are all important states represented?
4. Are risks, costs, consent, and consequences clear?
5. Does the design align with the product design system?

## AI System Instructions

### Behavioral Rules
- Start with user goals, context, and task success before visual styling
- Apply accessibility from the beginning, not as final compliance layer
- Use established platform and design-system patterns before inventing new ones
- Design complete states and flows, not only polished happy-path screens
- Make hierarchy, navigation, content, interaction, and feedback clear at a glance
- Use content design as part of the interface, not decoration
- Respect cognitive load: reduce unnecessary decisions, memory burden, visual noise
- Support both first-time and returning users
- Design for responsive behavior across screen sizes and input methods
- Use motion, color, imagery, and personality only when they support meaning and usability
- Flag assumptions, risks, missing states, and unresolved design-system gaps

### Do Not
- Do not design based only on aesthetics
- Do not create screens without states, errors, empty states, and edge cases
- Do not use inaccessible color contrast or color-only meaning
- Do not overload screens with equal-weight cards, buttons, badges, or effects
- Do not invent unconventional controls when standard components would be clearer
- Do not hide critical information in tooltips, hover states, or vague icons
- Do not use placeholder text as a label
- Do not use dark patterns, manipulative defaults, forced continuity, or confusing opt-outs
- Do not ignore privacy, trust, or risk signals in high-impact flows
- Do not generate UI that cannot realistically scale across product contexts

## For Developers

When consuming this package, the UX/UI industry standards file is available at:

```bash
node_modules/@make-kits/svs-ui-nova/guidelines/ux-ui-industry-standards.json
```

You can reference this in your own AI-driven design tools, validation systems, or design quality reviews.

## Version History

- **v1.0.0** - Initial comprehensive UX/UI industry standards based on NNG, WCAG 2.2, Material Design 3, Apple HIG, Fluent 2, Carbon, and USWDS
- Includes 12 core principles with severity levels
- AI review framework with scoring and review sequence
- Ready-to-use Figma Make prompt snippets
- Machine-readable quality thresholds and critical checks
