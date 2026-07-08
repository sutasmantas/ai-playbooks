<!--
TEMPLATE METADATA — REMOVE THIS BLOCK WHEN GENERATING
Target: <new-project-root>/decision_log.md
Generated only if interview 03.4 was answered yes (opt-in). Starts with one example entry that the user removes after the first real entry.
Placeholders:
  {{PROJECT_NAME}} — from interview 01.1
-->

# {{PROJECT_NAME}} — Decision Log

A running register of non-trivial decisions on this project. Newest at the top.

A "decision" means anything that, if reversed later, you'd want to know why it was made the first time:
- Picking one library/framework/pattern over another
- Architectural choices (SSR vs CSR, monolith vs split, etc.)
- Scope decisions (cutting a feature, deferring a concern, raising a budget)
- Reversals of earlier decisions

If a decision is too small to deserve an entry, it's also too small to justify revisiting later. When in doubt, write it down.

## Entry template

Copy this block per decision. Keep fields short. Bullets, not paragraphs.

```markdown
## YYYY-MM-DD — <short title that captures the decision, not the action>

- context:
  - <one or two bullets on the situation>
- options considered:
  - <option A — one line>
  - <option B — one line>
  - <do-nothing / defer — one line>
- decision:
  - <chosen option>
- why it beat the alternatives:
  - <one or two bullets>
- worry / what would flip this:
  - <the real concern; what observation would tell us this was wrong>
- next:
  - <the concrete next action this unblocks>
```

## Style guidelines

- One decision per entry. If a single change required three decisions, write three entries.
- The title describes the decision, not the work. "Picked SQLite over Postgres for v1" — good. "Database work" — not good.
- The "what would flip this" field is the single most useful one. If you can't write a falsifier, you don't yet understand the decision well enough.
- Write the entry **at the time the decision is made**, not retrospectively. Retroactive entries rationalize.

---

<!-- Example entry (delete after first real entry) -->

## 2026-01-01 — Example: Picked Playwright over Puppeteer for the validator

- context:
  - Need to open the rendered page in the tier-1 validator
  - Stack is Next.js; team already uses Playwright in CI elsewhere
- options considered:
  - Playwright (multi-browser, modern API, existing CI familiarity)
  - Puppeteer (Chrome only, simpler API, smaller dep)
  - curl + HTML diff (no real browser; misses client-side rendering bugs)
- decision:
  - Playwright
- why it beat the alternatives:
  - Cross-browser coverage matters because Safari is in our target matrix
  - Reusing existing CI familiarity reduces setup cost
- worry / what would flip this:
  - If Playwright proves flaky in CI on our infra, we'd reconsider Puppeteer + a Safari-only manual check
- next:
  - Write the truth-surface capture in `scripts/validate_state.ts` using Playwright
