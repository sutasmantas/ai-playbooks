# Concern: Internationalization (i18n)

**Rule**
Wire the i18n scaffolding from commit #1, even if you launch in one language. Hardcoded user-facing strings, single-locale routing, and untyped translation keys cost 2–5× to retrofit later. The translations themselves can wait; the wrapper cannot.

**Why**
"We'll add i18n when we expand to French" is the most expensive engineering plan in web work. By the time the decision is made, hundreds of components have hardcoded English in JSX, dates use the host's locale by default, currency is `$` literals, and the test suite asserts against literal strings. The retrofit becomes a quarter-long migration when day-one scaffolding would have been a one-paragraph rule.

**How to apply**

- **`t()` wrapper from commit #1.** Every user-facing string goes through a translation function — `t('signup.submit_button')` — even if the only language file is `en.json` for the next 18 months. CI lint rule: fail on hardcoded user-facing strings in JSX/TSX/Vue templates. Allowlist for technical/internal strings (log messages, error codes the user never sees).
- **ICU MessageFormat for plurals and interpolation.** Plain string templates break on plural rules in most languages (the "0 items / 1 item / N items" trap is just the start). Use `intl-messageformat`, `react-intl`, `i18next` — all support ICU.
- **Locale-prefixed routing from commit #1.** URLs are `/en/products`, `/fr/products`, `/de/products`. Even if `/fr` and `/de` 404 right now, the structure is there. Adding the prefix retroactively breaks every existing link and SEO ranking.
- **Detect locale from the URL, not the browser.** `Accept-Language` headers are a fallback for the initial redirect, not the source of truth. Once a user is on `/en/...`, that's the locale — don't second-guess them.
- **Format dates, numbers, and currency with the locale.** `Intl.DateTimeFormat`, `Intl.NumberFormat`. Never `toLocaleString()` without an explicit locale arg (it inherits the host's locale, which is the developer's, which is not the user's).
- **RTL languages exist.** Arabic, Hebrew, Persian. The `dir="rtl"` attribute on `<html>` flips most layouts automatically with logical properties (`margin-inline-start` instead of `margin-left`). Audit your CSS for hardcoded `left/right` properties before you ship the first non-LTR locale.
- **Translation keys are typed.** If your stack is TypeScript, generate types from the translation JSON so a missing key is a compile error, not a runtime "{missing.key}" in production. `typesafe-i18n`, `i18next-typescript`, or codegen against your translation files.
- **Don't ship translations until they're needed.** The wrapper is the cheap part. Hiring translators, maintaining `fr.json` against the `en.json` ground truth, dealing with stale strings — that's the expensive part. Defer it until there's actual demand.

**Skip if**
The project is genuinely English-only forever — internal admin tools for an English-speaking team, single-locale developer tooling. Document the skip in CLAUDE.md. Almost no public-facing website qualifies.

**Trace:** general — Locize 2026 retrospective on i18n retrofit costs.
