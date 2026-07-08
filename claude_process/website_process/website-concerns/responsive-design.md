# Concern: Responsive Design

**Rule**
The site is validated at minimum three viewport widths: a small mobile (375px), a tablet (768px), and a desktop (1280px+). Validation opens the truth surface at each, not just the largest.

**Why**
The desktop browser at 1440px is one of many environments and increasingly the minority. A layout that works there can be unusable at 375px and nobody on the dev side will notice. Same model-vs-truth gap as lesson 01: the markup is correct, the rendered surface is wrong.

**How to apply**
- Add a "mobile screenshot" step to the validator. Playwright/Puppeteer at 375x812 with a real device user agent.
- Test the critical flow (signup, checkout, primary CTA) at all three widths.
- No horizontal scroll on mobile. No content cut off at common breakpoints (375, 414, 768).
- Touch targets ≥ 44px square. Spacing between targets ≥ 8px.
- Hover-only interactions have a non-hover fallback for touch devices.
- Test landscape orientation on mobile if the project has any portrait-locked assumption.

**Skip if**
Desktop-only internal tool with a written "we don't support mobile" statement. Add the statement to CLAUDE.md, not memory.

**Trace:** general — not from a war story in this kit.
