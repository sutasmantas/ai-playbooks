# Procedure: API Grounding — Verifying Symbols and Patterns Before Use

**Use when:** writing code that uses an API, library feature, or pattern you're not 100% sure of. Especially when:
- The symbol isn't already in the project's codebase
- The library or pattern is recent (post-training-cutoff)
- You're integrating two libraries where neither's docs cover the integration cleanly
- You want to confirm "is this still the idiomatic way to do X in 2026, or has the convention moved?"

## Why this matters — and why "just rely on the model" is wrong

LLM training is statistical, not verbatim. The model has absorbed a probabilistic blur of patterns, not exact current signatures. For these cases the model's prior is unreliable:

- **Newer libraries / versions** — the model wasn't trained on them
- **Niche libraries** — model coverage is shallow; what's there is approximate
- **Integration patterns between two libraries** — docs cover one side at a time, the integration glue lives in real projects, not docs
- **2026 idioms** — best practices have moved since training cutoff; the model still suggests the older style

In all these cases, real-world examples are MORE current and MORE verified than the model's statistical prior. "I already know this" from the model is unreliable for anything outside its training-data sweet spot.

## Sources of truth for verifying a SIGNATURE (use as complementary, not strictly sequential)

**Source priority (project-first, never web-first):** the project's own codebase + git history > installed package source > official docs (preferably passed to the agent by URL, not free-searched) > package's own GitHub org > broad GitHub. Stack Overflow and blog posts are NOT on this list by default — they're dated, often wrong for current major versions, and trigger confirmation-biased queries. Use them only when nothing on the list above resolves the question, and treat any answer dated outside the current major version as unreliable.

**Version-cutoff trigger:** if the library/framework version in `package.json` / `pyproject.toml` / equivalent is dated AFTER the model's likely training cutoff (e.g., a 2026-released version when the model trained on early-2025 data), do NOT rely on memory for that library's API. Fetch the docs. The training-cutoff calibration problem is measured (arXiv 2502.11028: RLHF actively induces overconfidence on post-cutoff knowledge; ~9pt ECE improvement after intervention, but no production "look it up" signal exists). The version number is the closest workable proxy — check it explicitly.

1. **Local installed package source** (`node_modules/<pkg>/`, `site-packages/<pkg>/`). The truth for THIS version. No drift possible. Always start here if the package is installed.
2. **Official docs** for the installed version. Maintainers' source of truth — but docs often lag reality for newer features, edge cases, and breaking-change migrations.
3. **The package's own GitHub org** (tests, fixtures, internal usage, examples directory). Examples authored by the maintainers — very high signal.
4. **Broad GitHub code search.** Real-world usage at scale. Especially valuable for integration patterns, recent idioms, and the "does anyone actually do this?" question.

Use these as **complementary tools**, not a strictly ordered ladder. If the docs answer cleanly, you're done. If they don't (or you suspect they're outdated), GitHub search is a legitimate first stop — not a last resort.

When sources disagree, the installed source wins (it's what your code actually links against). Other sources resolve ambiguity, they don't override reality.

## Sources of truth for choosing a STYLE

- **The project's own existing code.** Your CLAUDE.md, your existing patterns, your conventions. Style comes from here.
- **NOT public GitHub examples for style.** Survivorship bias makes popular ≠ correct. Deprecated patterns persist in starred repos for years. Use external examples to confirm signatures, not aesthetics.

## How to structure a GitHub search

For signature verification (maintainer-blessed):
```
gh search code --owner <package-org> "<symbol with calling context>"
```

For integration patterns:
```
gh search code "<libA> <libB>" --filename "<plausible-extension>"
```

For "is this the current 2026 idiom":
```
gh search code "<pattern>" --sort updated --order desc
```

Restrict to recent commits when looking for current practice (`--committer-date >= 2025-01-01`). Restrict to specific orgs when looking for maintainer-blessed usage. Filter by language to cut noise.

## When to skip the procedure entirely

- The symbol is plainly in the project's own codebase — just grep it locally
- Standard library / built-in (no version drift to worry about)
- Code you wrote in the same session
- Throwaway/hackathon code where a wrong signature is cheap to fix and the cost of grounding exceeds the cost of fixing

## Failure modes to avoid (apply to ANY source, not just GitHub)

- **Copying patterns out of context** without understanding them. Read what surrounds the example.
- **Picking a STYLE from external examples** rather than confirming a SIGNATURE. Style is a project decision, not an industry vote.
- **Trusting popular ≠ correct.** Survivorship bias affects books, blogs, GitHub, and docs themselves — not just one of these.
- **Using results from a different version** of the library than you have installed. A `library@5.x` example is a different language than your `library@4.x` project.

**Trace:** ISSTA 2025 ([arXiv:2409.20550](https://arxiv.org/html/2409.20550v1)) — retrieval-augmented generation consistently improves output quality. Reframed in this version after honest reassessment: the original "GitHub is a last resort" framing was overstepping the research, which actually found no measurement either way and listed failure modes that apply to all example-lookup, not just GitHub.
