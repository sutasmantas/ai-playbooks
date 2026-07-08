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

## 2026-01-01 — Example: Picked `uv` over `poetry` for dependency management

- context:
  - Need a Python package manager that produces a deterministic lockfile and integrates with CI
  - Project is a CLI tool; cold-start install time matters (run frequently in CI)
- options considered:
  - `uv` (fast resolver, lockfile in pyproject.toml, recent but stable)
  - `poetry` (mature, lockfile in poetry.lock, slower resolver)
  - `pip-tools` (minimal, two files: requirements.in + requirements.txt)
- decision:
  - `uv`
- why it beat the alternatives:
  - 10-20x faster cold install measurably reduces CI minutes for a CLI tool that runs setup on every job
  - Single-file pyproject.toml lockfile keeps the repo lean
- worry / what would flip this:
  - If `uv` deprecates a feature we depend on, or if a transitive dep we need lists `poetry`-specific metadata, we'd reconsider
- next:
  - Add `uv.lock` to the repo and update CI to use `uv sync --frozen`
