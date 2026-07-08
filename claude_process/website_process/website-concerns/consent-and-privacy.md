# Concern: Consent and Privacy

**Rule**
Cookie consent and privacy disclosure follow the strictest applicable jurisdiction. As of 2026 that's GDPR (EU/UK/EEA) + CCPA/CPRA (California) + the Global Privacy Control header. Symmetric choice: reject must be as easy as accept. No pre-ticked non-essential cookies. No third-party cookies before consent. Privacy policy and terms of service exist before launch — not "we'll add them later."

**Why**
2026 enforcement is real and asymmetric — fines exceed seven figures (CNIL €200M against Google for asymmetric consent UI; ICO £1.4M for cookie-banner violations in 2025). Symmetric-choice rules are now machine-checked by EU regulators using ML-based banner scanners. "We thought it was fine" stopped being a defense in 2024.

The technical surface is small. The legal surface is large. Mismatch between them is the typical failure mode.

**How to apply**

- **Symmetric consent UI.** The "Reject all" button must be:
  - Same size, color contrast, position-equivalent, and ≤ same number of clicks as "Accept all."
  - Visible without scrolling on initial load (no "Accept" prominent and "Reject" buried in a "Customize" submenu).
  - Snapshot-test this — a banner that drifts toward dark-pattern over redesigns is the documented failure mode.
- **No pre-ticked non-essential cookies.** Default state for analytics, marketing, personalization toggles is OFF. Essential cookies (auth session, CSRF) may be on by default; the banner discloses them.
- **Honor Global Privacy Control header.** When `Sec-GPC: 1` is set on a request, treat the user as having opted out of all non-essential cookies. No banner needed in that case — just respect the header.
- **No third-party cookies before consent.** Google Analytics, Facebook Pixel, Hotjar, ad networks — none fire until consent is recorded. Lint rule: fail CI if any script tag or `fetch` to a known third-party tracker exists outside a consent-gated boundary.
- **Privacy policy and terms of service exist at launch.** Linked from the banner, the footer, and any signup form. Generate them with a real tool (Termly, iubenda, or written by counsel) — not a placeholder.
- **Disclose what data each cookie holds.** A bare "we use cookies" banner is no longer compliant. The disclosure names each cookie category, its purpose, and its retention period.
- **Right-to-delete and right-to-export endpoints.** GDPR and CCPA both require these. Build them on day 1 or document them as a known gap in `EXCEPTIONS.md` with a `Revisit by:` before launch.
- **Cookie consent state is server-side, not localStorage-only.** Localstorage gets cleared; the user gets re-prompted; the second click is noise, not consent. Store the consent record server-side with the timestamp and the banner version that produced it.

**Skip if**
You are building an authenticated-only internal tool with no public-facing surface and no third-party trackers. Document the skip in CLAUDE.md's `What was skipped at bootstrap and why` section. Note that "internal" tools that expand to external users later need this concern retroactively — at which point retrofit cost is real.

**Trace:** general — 2026 enforcement landscape (CookieHub 2026 guide, Clym CCPA 2026, CNIL/ICO enforcement actions).
