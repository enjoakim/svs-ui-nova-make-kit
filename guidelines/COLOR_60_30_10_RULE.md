# 60-30-10 Color Composition Rule

This directory contains comprehensive color composition guidelines for AI-driven UI design in Figma Make, based on the 60-30-10 color rule.

## File Location

**`color-60-30-10-rule.json`** - Machine-readable guidelines (v1.0.0)

## Overview

The 60-30-10 color rule is a composition guideline where approximately:
- **60%** of the interface uses a **dominant/base color**
- **30%** uses a **secondary/supporting color**
- **10%** uses an **accent color**

This framework ensures visually balanced, accessible, brand-aligned interfaces where color supports hierarchy, usability, meaning, and emotional tone.

## Core Principle

The 60-30-10 split guides visual balance, not exact pixel-level measurement. A good result may be 70-20-10, 65-25-10, or 60-25-15 depending on product, brand, density, and context.

## Color Distribution

### Dominant 60% - Primary Visual Foundation

**Role**: Creates overall calmness and cohesion

**Purpose**:
- Creates overall calmness and cohesion
- Defines the main background or base surface
- Supports readability and long-term comfort
- Allows content and actions to stand out

**Typical Usage**:
- Page background
- Primary surfaces
- Large layout areas
- Neutral containers
- Base cards or panels
- Main empty space

**Recommended Color Types**:
- Neutral
- Near-white
- Soft off-white
- Muted brand tint
- Dark neutral for dark mode
- Low-saturation foundation color

**AI Generation Rules**:
- Choose the dominant color first
- Keep it visually quiet enough to support content
- Avoid high-saturation dominant colors unless the product intentionally needs strong immersive brand expression
- Use the dominant color to create consistency across the full screen
- Ensure text placed on this color has sufficient contrast

**Avoid**:
- Bright saturated background across most of the UI
- Dominant color that reduces readability
- Base surface competing with content
- Dominant color changing unpredictably between screens

### Secondary 30% - Supporting Structure and Contrast

**Role**: Supporting structure and contrast

**Purpose**:
- Creates visual organization
- Separates sections and content groups
- Adds depth without overpowering the interface
- Supports hierarchy between surfaces

**Typical Usage**:
- Secondary surfaces
- Cards
- Panels
- Sidebars
- Navigation areas
- Section backgrounds
- Subtle borders or fills
- Supporting illustrations or graphical blocks

**Recommended Color Types**:
- Slightly darker or lighter neutral
- Muted complementary color
- Soft brand-support color
- Surface elevation tint
- Low-contrast structural color

**AI Generation Rules**:
- Use the secondary color to organize layout and separate content zones
- Keep it related to the dominant color so the interface feels cohesive
- Use it more visibly than the accent color but less expansively than the dominant color
- Ensure it does not compete with primary actions
- Use it to support scanning and grouping

**Avoid**:
- Secondary color with the same intensity as the accent
- Too many competing secondary colors
- Section colors that make the layout feel fragmented
- Low contrast between secondary surfaces and content

### Accent 10% - Focus, Emphasis, Brand Energy, and Action

**Role**: Focus, emphasis, brand energy, and action

**Purpose**:
- Draws attention to important actions or information
- Creates brand recognition
- Highlights selected or active states
- Supports conversion, decision-making, or task progression

**Typical Usage**:
- Primary buttons
- Important links
- Active navigation states
- Selection indicators
- Key highlights
- Progress indicators
- Small brand moments
- Important data points

**Recommended Color Types**:
- Primary brand color
- High-contrast action color
- Expressive accent color
- Accessible highlight color
- Distinct but controlled emphasis color

**AI Generation Rules**:
- Reserve accent color for the most important elements
- Use accent color sparingly to preserve visual hierarchy
- Prefer one main accent color per screen
- Do not use accent color on low-priority decoration
- Make sure accent elements remain readable and accessible
- When using multiple accents, assign clear semantic roles

**Avoid**:
- Accent color applied to every button, icon, link, badge, and decoration
- Accent color used for both positive and negative meanings
- Accent color on large areas unless intentionally part of a campaign or hero moment
- Accent color that fails contrast requirements
- Multiple accents with no clear hierarchy

## Required Color Roles

Every design system should define these 17 color roles:

1. **background** - Usually part of dominant 60%, supports readability and visual calm
2. **surface** - Usually part of dominant or secondary, used for cards and containers
3. **surface_alt** - Usually part of secondary 30%, creates grouping and section separation
4. **text_primary** - Must prioritize contrast over color expression
5. **text_secondary** - Clearly readable but visually less dominant
6. **border** - Separates structure without creating unnecessary noise
7. **primary_action** - Usually belongs to accent 10%, visually distinct and accessible
8. **primary_action_hover** - Hover state for primary actions
9. **primary_action_pressed** - Pressed state for primary actions
10. **focus_ring** - Must be visible and accessible
11. **link** - Must remain distinguishable from body text
12. **selected** - Can use accent color or clear selected state pattern
13. **disabled** - Visibly inactive without becoming unreadable
14. **error** - Reserved for destructive, invalid, or failed states
15. **warning** - Reserved for caution, risk, or attention before harm
16. **success** - Reserved for completion, confirmation, or positive outcome
17. **info** - Reserved for neutral system guidance or contextual information

## AI Color Selection Process

### Step 1: Define product mood and brand intent
Identify whether the interface should feel calm, playful, premium, energetic, trustworthy, editorial, operational, or campaign-driven.

### Step 2: Select dominant 60% color
Choose a stable base color that supports readability, consistency, and long-term use.

### Step 3: Select secondary 30% color
Choose a supporting color that structures content and creates surface hierarchy without fighting the base.

### Step 4: Select accent 10% color
Choose one expressive color for primary actions, emphasis, selected states, and key highlights.

### Step 5: Assign semantic colors
Define error, warning, success, and info colors separately from the decorative accent unless the brand system explicitly supports overlap.

### Step 6: Check accessibility
Verify contrast for text, icons, controls, focus states, and semantic messages. Do not rely on color alone.

### Step 7: Test screen balance
Review the full screen visually. If accent colors dominate, reduce them. If the design feels flat, increase secondary structure or subtle elevation.

### Step 8: Review across states and themes
Check default, hover, pressed, focused, selected, disabled, loading, success, warning, error, and empty states. Include light and dark mode if relevant.

## Accessibility Requirements

### Contrast
- Text and icons must have sufficient contrast against their background
- Primary actions must be readable in all states
- Disabled states must look inactive while still being understandable
- Focus indicators must be clearly visible against adjacent colors
- Do not place small text on saturated or complex backgrounds without readable surface treatment

### Non-Color Cues
- Use text, icons, labels, borders, or patterns in addition to color for errors, warnings, success messages, and selected states
- Never communicate critical meaning using color alone
- Ensure users with color-vision differences can understand state and hierarchy

### State Visibility
- Hover, pressed, focused, selected, and disabled states should be visually distinct
- Error and warning states should be noticeable but not unnecessarily alarming
- Success states should confirm completion without overpowering the next task

## Design Quality Checks

### Balance Questions
- Does the screen have a calm dominant foundation?
- Does the secondary color help structure the layout?
- Is the accent color reserved for what truly matters?
- Can the user identify the primary action within two seconds?
- Does the design feel balanced rather than noisy or flat?

### Usability Questions
- Is text readable on every surface?
- Are interactive states clear?
- Are semantic colors used only for their intended meaning?
- Does color support hierarchy rather than replace it?
- Can users understand status and meaning without relying only on color?

### Brand Questions
- Does the palette express the brand without overwhelming the UI?
- Is the brand color used with enough restraint to remain meaningful?
- Do neutral and secondary colors support the brand color?
- Would the palette scale across many product screens?

### Common Failure Patterns
- Accent color overuse
- Too many saturated colors
- Weak contrast
- Decorative color competing with task-critical UI
- Semantic colors used as decoration
- Primary and secondary actions looking equally important
- Color roles changing between screens
- Dark mode created through simple inversion only
- Color used as the only state indicator

## Distribution Examples

### Calm Product UI
- **Dominant 60%**: Warm off-white or soft neutral background
- **Secondary 30%**: Subtle grey, beige, or muted surface color for cards and sections
- **Accent 10%**: Clear brand color for primary actions, selected states, and key highlights

### Bold Brand UI
- **Dominant 60%**: Neutral or deep base that lets brand color stand out
- **Secondary 30%**: Brand-tinted surface or complementary muted color
- **Accent 10%**: Strong brand color used carefully for action and emphasis

### Dark Mode UI
- **Dominant 60%**: Dark neutral background
- **Secondary 30%**: Elevated dark surface or muted tinted panels
- **Accent 10%**: Accessible bright accent used for primary actions and active states

### Data Heavy UI
- **Dominant 60%**: Neutral background that supports long reading
- **Secondary 30%**: Surface and table structure colors
- **Accent 10%**: Highlight color for selected data, key actions, and important alerts

## Figma Make Generation Rules

### Screen Level
- Use the dominant color for the main background and large quiet surfaces
- Use the secondary color for cards, navigation, panels, and grouped sections
- Use the accent color only for the highest-priority interactions and highlights
- Create a clear primary action using the accent color
- Ensure secondary actions are visually calmer than primary actions
- Avoid making every interactive element the accent color
- Use neutral spacing, typography, and hierarchy to support the color system
- Check that semantic colors do not clash with the main palette

### Component Level
- Define color states for default, hover, pressed, focused, selected, disabled, loading, error, success, and warning where relevant
- Use the same color role consistently across equivalent components
- Make selected and active states visible through more than color when needed
- Use borders, icons, labels, patterns, or text to reinforce semantic meaning
- Ensure components remain usable on dominant and secondary surfaces

### Theme Level
- Map colors to semantic tokens rather than raw color names
- Create light and dark variants if the product supports themes
- Keep accent usage restrained across both light and dark mode
- Do not invert colors mechanically; adjust contrast, elevation, and saturation for each theme
- Preserve brand recognition while protecting readability

## Figma Make Prompt Snippets

### Screen Generation
```
Apply the 60-30-10 color rule. Use a calm dominant base for roughly 60% of the UI, a secondary supporting color for around 30% of surfaces and structure, and a restrained accent color for around 10% of primary actions, highlights, and selected states. Ensure accessibility, clear hierarchy, and semantic color consistency.
```

### Theme Generation
```
Create a color theme using semantic tokens. Define dominant, secondary, accent, text, surface, border, focus, disabled, error, warning, success, and info roles. Apply the 60-30-10 rule flexibly and ensure all text, controls, states, and focus indicators are accessible.
```

### Component Generation
```
Generate component color states using the palette roles. Primary actions may use the accent color; secondary actions should be calmer. Include default, hover, pressed, focused, selected, disabled, loading, error, warning, and success states where relevant. Do not rely on color alone.
```

### Color Review
```
Review this design against the 60-30-10 color rule. Identify whether dominant, secondary, and accent colors are balanced. Check contrast, hierarchy, semantic color use, accessibility, state visibility, brand expression, and accent overuse. Recommend precise changes.
```

## AI System Instructions

### Behavioral Rules
- Use color to support usability first, aesthetics second
- Apply the 60-30-10 rule as a flexible composition guide, not a strict mathematical constraint
- Ensure the dominant 60% color creates a calm and stable base
- Use the secondary 30% color to structure surfaces, sections, cards, panels, and supporting UI areas
- Reserve the accent 10% color for emphasis, primary actions, key states, highlights, and moments of brand expression
- Do not overuse accent colors; overuse weakens hierarchy and creates visual noise
- Always check color contrast, legibility, state clarity, and accessibility
- Do not rely on color alone to communicate status, errors, success, warnings, or interactivity
- Respect existing brand tokens and design-system color roles before inventing new colors
- When a brand color is visually intense, use it with restraint and support it with neutral or calmer colors

### Do Not
- Do not apply accent colors to too many elements
- Do not use the 60-30-10 rule to justify poor contrast
- Do not make the interface colorful at the cost of clarity
- Do not assign colors randomly without semantic or hierarchical purpose
- Do not use color only for decoration when it competes with task-critical content
- Do not use the same color for conflicting meanings
- Do not use error, warning, success, or info colors as general decorative accents
- Do not ignore dark mode or theme variants if the design requires them

## Quality Threshold

- **Minimum average score**: 4/5
- **Critical checks**: contrast, primary_action_visibility, semantic_color_consistency, accent_restraint, state_visibility
- **Rule**: If contrast, state visibility, or semantic color meaning fails, revise the palette before design handoff

## For Developers

When consuming this package, the color composition guidelines file is available at:

```bash
node_modules/@make-kits/svs-ui-nova/guidelines/color-60-30-10-rule.json
```

You can reference this in your own AI-driven design tools, theme generators, or color validation systems.

## Version History

- **v1.0.0** - Initial comprehensive color composition guidelines based on the 60-30-10 rule
- Includes 8-step AI color selection process
- 17 required color roles with guidance
- Accessibility requirements and quality checks
- 4 distribution examples (calm, bold brand, dark mode, data-heavy)
- Ready-to-use Figma Make prompt snippets
