# Accessibility

Guidelines and principles for creating accessible digital experiences that work for all people, regardless of their abilities. Svenska Spel is committed to meeting legal requirements and best practices for digital accessibility.

---

## Introduction

Svenska Spel is constantly working to improve our digital experience and environment to meet the requirements of the law on accessibility to digital public service. The Web is fundamentally designed to work for all people, whatever their hardware, software, language, location, or ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability.

Thus the impact of disability is radically changed on the Web because the Web removes barriers to communication and interaction that many people face in the physical world.

**Core Principle:**
> Digital services and information should be based on user needs and be accessible to everyone.

---

## Overview

### EU Directive and Swedish Law

Since 2 December 2016, it has been clear that all EU countries will have laws aimed at increasing digital accessibility for all users, including people with disabilities. At that time, the EU directive (2016/2102) on accessibility regarding public authorities' websites and mobile applications was published in the EU's official newspaper. In Sweden, the directive is implemented by the law on accessibility to digital public services came into force on 1 January 2019.

**Key Standard:**
- **Harmonised European Standard EN 301 549** - The technical standard for digital accessibility compliance

### DIGG - Agency for Digital Government

DIGG - Agency for Digital Government is working to improve digital accessibility on all public websites and digital platforms. Digital services and information should be based on user needs and be accessible to everyone.

**Learn More:**
- [digg.se/en](https://digg.se/en)

---

## Design and Principles

Accessibility design is considered an important element of overall user experience of a website/application. W3C (World Wide Web Consortium) has formulated guidelines for accessibility design. Various countries, such as Sweden have also proposed their own accessibility guidelines. In many cases, accessibility of website/application is mandatory by law of the land (e.g. USA).

### W3C Guidelines

The W3C provides information on the following aspects to help us get started:

**1. Guidelines for UI and Visual Design**
- [W3C Designing for Accessibility](https://www.w3.org/WAI/tips/designing/)
- Covers color contrast, layout, forms, controls, and visual design principles
- Provides practical tips for designers

**2. Guidelines for Development**
- [W3C Developing for Accessibility](https://www.w3.org/WAI/tips/developing/)
- Technical implementation guidance
- Code examples and best practices
- Semantic HTML and ARIA usage

**3. Principles of Accessibility**

In addition to this, the W3C also provides good guidance on the [Principles of Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-principles/). It is recommended that such principles should be followed when designing for accessibility.

**Four Core Principles (POUR):**

1. **Perceivable** - Information and user interface components must be presentable to users in ways they can perceive
2. **Operable** - User interface components and navigation must be operable
3. **Understandable** - Information and the operation of user interface must be understandable
4. **Robust** - Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies

---

## How Do We Know a Website/Application is Accessibility Compliant?

The W3C provides a guide on how to check the accessibility of a website/application.

**Evaluation Guide:**
- [W3C Easy Checks - A First Review of Web Accessibility](https://www.w3.org/WAI/test-evaluate/preliminary/)
- Step-by-step guide for preliminary accessibility checks
- Can be performed without specialized tools or expertise
- Good starting point before comprehensive testing

### Testing Approaches

**Manual Testing:**
- Keyboard navigation testing
- Screen reader testing
- Color contrast verification
- Content structure review

**Automated Testing:**
- Accessibility testing tools (aXe, WAVE, Lighthouse)
- CI/CD integration for continuous compliance
- Regular audits and monitoring

**User Testing:**
- Testing with users who have disabilities
- Assistive technology compatibility testing
- Real-world usage scenarios

---

## Accessibility Requirements by Component Type

### Forms and Inputs

**Requirements:**
- All form fields must have associated labels
- Error messages must be clearly announced
- Required fields must be indicated
- Sufficient color contrast for all states
- Keyboard accessible (Tab, Shift+Tab, Enter)
- ARIA attributes for complex controls

**Best Practices:**
- Avoid relying on placeholder text alone
- Provide clear error messages with guidance
- Use help text for additional context
- Associate error text with aria-describedby
- Support screen reader announcements

**References:**
- See [Input Component Documentation](../components/Input.md)
- See [Form Foundation Patterns](./Form.md)

---

### Buttons and Interactive Elements

**Requirements:**
- Clear, descriptive labels
- Sufficient touch target size (minimum 40px)
- Visible focus indicators
- Keyboard accessible (Enter, Space)
- ARIA labels for icon-only buttons
- Not relying on color alone to convey meaning

**Best Practices:**
- Use semantic HTML (button element)
- Provide clear hover and focus states
- Avoid disabled states when possible
- Ensure sufficient contrast ratios

**References:**
- See [Button Component Documentation](../components/Button.md)

---

### Navigation

**Requirements:**
- Logical tab order
- Skip navigation links
- Clear focus indicators
- Breadcrumb trails for orientation
- Consistent navigation patterns
- ARIA landmarks (nav, main, footer)

**Best Practices:**
- Use semantic HTML structure
- Provide multiple ways to navigate
- Clear current page indication
- Mobile-friendly navigation

**References:**
- See [Navigation Foundation Patterns](./Navigation.md)

---

### Color and Contrast

**Requirements:**
- WCAG AA minimum: 4.5:1 for normal text
- WCAG AA minimum: 3:1 for large text (18pt+)
- WCAG AAA: 7:1 for normal text
- Do not rely on color alone to convey information
- Sufficient contrast for all interactive states

**Brand Color Compliance:**

Our primary red (#ED0000) with white text:
- Contrast ratio: 3.99:1
- Meets AA for large text (18pt+)
- Use dark red tones for better text contrast when needed

**Testing:**
- Use color contrast analyzers
- Test with color blindness simulators
- Verify all states (hover, focus, disabled)

**References:**
- See [Color Guidelines](../brands/Color.md)

---

### Typography

**Requirements:**
- Readable font sizes (minimum 16px for body text)
- Sufficient line height (minimum 1.5)
- Adequate letter spacing
- Left-aligned text (avoid full justification)
- No text in images (unless necessary)

**Best Practices:**
- Use semantic heading hierarchy (h1, h2, h3)
- Don't skip heading levels
- Limit line length (50-75 characters optimal)
- Allow text resize up to 200%

---

### Images and Media

**Requirements:**
- Alternative text for all informative images
- Empty alt="" for decorative images
- Captions for videos
- Transcripts for audio content
- Audio descriptions for video when necessary
- No autoplay with sound

**Best Practices:**
- Descriptive, concise alt text
- Avoid "image of" or "picture of"
- Provide context for complex images
- Consider long descriptions for detailed graphics

---

### Keyboard Navigation

**Requirements:**
- All interactive elements keyboard accessible
- Logical tab order
- Visible focus indicators
- No keyboard traps
- Skip navigation functionality
- Consistent navigation patterns

**Standard Keyboard Shortcuts:**
- Tab: Move forward
- Shift+Tab: Move backward
- Enter: Activate button/link
- Space: Activate button, toggle checkbox
- Arrow keys: Radio buttons, menus, sliders
- Esc: Close dialogs, cancel actions

---

### Screen Reader Support

**Requirements:**
- Semantic HTML structure
- ARIA labels and descriptions
- Proper heading hierarchy
- Form field associations
- Error announcements
- Dynamic content updates (aria-live)

**Best Practices:**
- Test with multiple screen readers (NVDA, JAWS, VoiceOver)
- Avoid relying on visual context
- Provide text alternatives
- Use ARIA sparingly (HTML first)
- Announce state changes

---

## Implementation Checklist

### Design Phase

✓ Color contrast meets WCAG AA standards (minimum)
✓ Text is readable and scalable
✓ Interactive elements have clear focus states
✓ Layout works at 200% zoom
✓ Information not conveyed by color alone
✓ Touch targets are at least 40px
✓ Forms have clear labels and error patterns

### Development Phase

✓ Semantic HTML structure
✓ Proper heading hierarchy
✓ All images have appropriate alt text
✓ Forms are keyboard accessible
✓ Focus management for modals/dialogs
✓ ARIA attributes used correctly
✓ No keyboard traps
✓ Skip navigation links implemented

### Testing Phase

✓ Keyboard navigation works throughout
✓ Screen reader testing completed
✓ Automated accessibility testing (aXe, WAVE)
✓ Color contrast verified
✓ Zoom functionality tested (up to 200%)
✓ Mobile accessibility verified
✓ User testing with assistive technologies

---

## Common Accessibility Mistakes to Avoid

### Don't:
- ❌ Use placeholder text for critical information (it disappears)
- ❌ Rely on color alone to indicate errors or states
- ❌ Create keyboard traps (user can't tab away)
- ❌ Use disabled states excessively (accessibility issues)
- ❌ Skip heading levels (h1 → h3)
- ❌ Use divs/spans for buttons (not semantic)
- ❌ Forget alt text for informative images
- ❌ Use insufficient color contrast
- ❌ Make click targets too small (<40px)
- ❌ Use ARIA when semantic HTML would work

### Do:
- ✓ Provide persistent labels for form fields
- ✓ Use multiple indicators (color + icon + text)
- ✓ Test keyboard navigation thoroughly
- ✓ Consider alternatives to disabled states
- ✓ Use proper heading hierarchy
- ✓ Use semantic HTML (button, nav, main, etc.)
- ✓ Provide descriptive alt text
- ✓ Meet WCAG AA contrast standards minimum
- ✓ Make interactive elements easy to tap
- ✓ Prefer HTML over ARIA when possible

---

## Resources

### W3C Web Accessibility Initiative (WAI)

**Guidelines:**
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [Designing for Accessibility](https://www.w3.org/WAI/tips/designing/)
- [Developing for Accessibility](https://www.w3.org/WAI/tips/developing/)
- [Principles of Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-principles/)

**Testing:**
- [Easy Checks - First Review](https://www.w3.org/WAI/test-evaluate/preliminary/)
- [Evaluation Tools List](https://www.w3.org/WAI/test-evaluate/tools/list/)

### Swedish Resources

**DIGG - Agency for Digital Government:**
- [digg.se/en](https://digg.se/en)
- Swedish accessibility law and guidelines
- Implementation support

**Standards:**
- Harmonised European Standard EN 301 549
- Swedish accessibility legislation

### Testing Tools

**Automated Testing:**
- [aXe DevTools](https://www.deque.com/axe/) - Browser extension
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Chrome DevTools

**Screen Readers:**
- NVDA (Windows) - Free
- JAWS (Windows) - Commercial
- VoiceOver (macOS, iOS) - Built-in
- TalkBack (Android) - Built-in

**Color Contrast:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)
- Browser DevTools contrast checkers

---

## Reach Out to the Team

We are constantly striving to improve the accessibility of our website so please reach out to the DesignTech-team if you want to report any flaws or have any questions regarding accessibility.

**Contact:**
- Team Design-Tech Q-A

**Reporting Issues:**
When reporting accessibility issues, please include:
- Description of the issue
- Which page/component is affected
- Which assistive technology you're using (if applicable)
- Steps to reproduce
- Screenshots or recordings (if possible)

---

## Legal Compliance

### Swedish Law

**Lag om tillgänglighet till digital offentlig service (2018:1937)**
- Effective: January 1, 2019
- Applies to public sector bodies
- Requires WCAG 2.1 Level AA compliance
- Regular accessibility statements required

### EU Directive

**EU Directive 2016/2102**
- Accessibility of public sector websites and mobile apps
- Implemented across all EU member states
- Based on EN 301 549 standard

### Key Requirements

**Our Commitment:**
1. Meet WCAG 2.1 Level AA standards (minimum)
2. Strive for AAA where feasible
3. Regular accessibility audits
4. Continuous improvement process
5. User feedback integration
6. Staff training on accessibility

---

## Accessibility Statement

Svenska Spel is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.

**Conformance Status:**
We strive to conform to WCAG 2.1 Level AA standards and EN 301 549.

**Ongoing Efforts:**
- Regular accessibility audits
- Component library accessibility testing
- Staff training and awareness
- User testing with assistive technologies
- Continuous monitoring and improvement

**Feedback:**
We welcome feedback on the accessibility of our digital services. If you encounter accessibility barriers, please contact the DesignTech team.

---

## Summary

**Key Principles:**
1. Design for all users from the start
2. Follow WCAG 2.1 Level AA guidelines (minimum)
3. Use semantic HTML before ARIA
4. Test with real users and assistive technologies
5. Ensure keyboard accessibility
6. Provide sufficient color contrast
7. Don't rely on color alone
8. Make content perceivable, operable, understandable, and robust

**Remember:**
Accessibility is not a feature - it's a requirement. Building accessible products benefits everyone and is required by law for public sector services in Sweden and the EU.

---

## Related Topics

- [Navigation](../pattern/Navigation.md) - Accessible navigation patterns
- [Login](../pattern/Login.md) - Accessible authentication flows
- [Errors](../pattern/Errors.md) - Accessible error handling
- [Form](../pattern/Form.md) - Accessible form patterns
- [Color](../brands/Color.md) - Color contrast and usage
- [Input Component](../components/Input.md) - Accessible input fields
- [Button Component](../components/Button.md) - Accessible buttons

---

## Reference Implementation

Imported Figma frame available at: `src/imports/Accessibility/Accessibility.tsx`
