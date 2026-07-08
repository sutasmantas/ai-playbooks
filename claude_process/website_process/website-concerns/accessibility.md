# Concern: Accessibility (a11y)

**Rule**
Every interactive element is reachable, operable, and understandable without a mouse and without sight. WCAG 2.2 AA is the baseline target unless the user explicitly opts out (and documents the reason).

**Why**
Accessibility is the largest invisible failure surface in web work. A site can look correct, function correctly in a sighted developer's browser, and still be unusable by 15% of its potential audience. The bug is structural — the developer who built it can't see it without active testing. Same dynamic as the verifier-as-gate principle: producer's frame excludes the failure mode.

**How to apply**
- Every interactive element has an accessible name (`aria-label`, `aria-labelledby`, or visible text).
- Tab order matches visual order. No keyboard trap. Visible focus ring on every focusable element.
- Color is never the sole carrier of meaning. Contrast ratio ≥ 4.5:1 for text, ≥ 3:1 for UI.
- Form fields have programmatic labels. Errors are announced, not just colored.
- Headings form a proper outline (h1 once, no skipped levels).
- Run an automated check (axe-core, Lighthouse a11y, or `@axe-core/playwright`) in the validator. Score 100 is necessary but not sufficient — also tab through the page yourself.
- Test with a screen reader on at least one critical flow (VoiceOver / NVDA). 30 minutes once is more useful than 0 minutes ever.

**Skip if**
The user is building a developer-only internal tool with a single known user and explicitly says a11y is out of scope. Document the skip in CLAUDE.md so the next developer doesn't quietly inherit the assumption.

**Trace:** general — not from a war story in this kit.
