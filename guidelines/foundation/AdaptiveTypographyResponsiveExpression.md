# Adaptive Typography & Responsive Expression

Typography should respond to the space it lives in, not only to viewport
breakpoints. With `clamp()`, container queries, and container query units, we
can scale type and selected visual elements in a controlled way with clear
minimum and maximum boundaries.

This helps SvS UI Nova keep hierarchy expressive, layouts balanced, and
critical information readable across products, modules, and devices.

---

## Core Principle

Scale with context. Stay clear in every size.

Adaptive scaling should improve understanding, not become a visual trick.
Display typography and selected brand objects can grow with energy, while
critical UI text should stay calm, stable, and easy to scan.

---

## Use This When

- hero typography should respond to available space
- a component is reused in different widths or layouts
- a card or module heading needs to adapt to container width
- a brand expression needs to stay balanced across surfaces
- a visual object such as a cube, illustration, or hero object should scale
  with its container
- viewport breakpoints do not reflect the actual usable space

---

## Be Careful When

- scaling makes text harder to read
- expressive typography starts to overpower critical information
- similar components drift into inconsistent type behavior
- translated strings or real content create fragile wrapping
- scaling is fluid but has no clear lower or upper boundary

---

## Default Approach

1. Start with content hierarchy and readability.
2. Use container queries for reusable components and modules.
3. Use `clamp()` to define a safe minimum, a flexible preferred value, and a
   maximum.
4. Use `cqi`, `cqmin`, or related container units when scaling should follow
   the container rather than the viewport.
5. Keep critical UI text more stable than expressive display text.
6. Test with real content, translated strings, and edge cases.
7. Document where adaptive scaling is allowed and why.

---

## Practical Rules

- Prefer container-aware scaling over viewport-only scaling for reusable UI.
- Always define min and max boundaries.
- Use adaptive sizing to support hierarchy, not decoration.
- Let expressive typography feel alive without becoming unstable.
- Keep money, limits, errors, verification, and responsible-gaming messaging
  calm and readable.
- Apply the same controlled logic to selected visual objects when useful.

Do not:

- use adaptive scaling as a gimmick
- let type become cramped, oversized, or hard to scan
- rely only on viewport breakpoints for reusable components
- let expressive elements compete with critical content
- create unpredictable type behavior across similar modules

---

## Implementation Examples

### Define a query container

```css
.principle-card {
  container-type: inline-size;
}
```

### Scale a heading from the container

```css
.principle-card__title {
  font-size: clamp(1.5rem, 8cqi, 4rem);
  line-height: 0.95;
}
```

### Named hero container

```css
.hero {
  container: hero / inline-size;
}

@container hero (width > 640px) {
  .hero__word {
    font-size: clamp(5rem, 18cqi, 16rem);
  }
}
```

### Stable critical text

```css
.critical-message {
  font-size: clamp(1rem, 2cqi, 1.25rem);
  line-height: 1.4;
}
```

### Adaptive visual object

```css
.brand-object {
  width: clamp(4rem, 24cqi, 18rem);
  height: auto;
}
```

---

## Svenska Spel Framing

This guidance supports four important intentions in the design system:

- **Clarity over cleverness**: adaptive type should improve understanding
- **Accessible from the start**: text must stay usable across contexts
- **Engaging, but balanced**: expressive scale should stay controlled
- **Confidence at every step**: critical information must remain stable and legible

---

## Related Files

- [Typography](./Typography.md)
- [adaptive-typography-responsive-expression.json](../adaptive-typography-responsive-expression.json)
