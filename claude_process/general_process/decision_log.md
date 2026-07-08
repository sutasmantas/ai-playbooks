# general_process — Decision Log

Non-trivial decisions made while building the `general_process/` kit. Earlier entries are not deleted when superseded; the newer entry adds a `Supersedes:` link and the older gets `Superseded by:`.

---

## 2026-05-19 — Concerns organization: agnostic-flat with project-kind filtering at interview time

**Decision:** `general_process/programming-concerns/` is a flat directory of language-agnostic concerns. There is NO `by-kind/` subdirectory and NO per-language pack. Each concern declares its applicable project kinds inline; the interview routes the user to opt in/out the same way `website_process/` does.

**Alternatives considered:**

- **By-kind subdirectories** (`programming-concerns/cli/`, `/library/`, `/service/`, `/data-pipeline/`, `/script/`). Rejected: forces the user into a kind taxonomy, and many real projects span kinds (a service that ships a CLI client, a library with an example service). The taxonomy would either bloat (every kind gets a full concerns set) or fragment (concerns split across kinds, hard to find).
- **Per-language packs** (`programming-concerns-python/`, `-go/`, etc.). Rejected: per-language concerns largely repeat the same failure modes with different idiomatic names. The "language-specific addendum" subsection inside each agnostic concern (filled at interview time from grep-detected toolchain) handles language variance without duplicating structure.
- **Hybrid (cross-cutting + by-kind)**. Rejected unless the bloat check fails — current count fits the empirical cap.

**Bloat check:**

10 concerns. Same count as `website_process/`. The empirical cap (~12 well-chosen concerns before instruction-following degrades) is not breached.

| Concern | Project kinds applicable | Cross-cutting? | Language addendum? |
|---|---|---|---|
| error-handling-and-logging | CLI, library, service, script, data-pipeline | YES | YES |
| secrets-and-config | CLI, library, service, script, data-pipeline | YES | YES |
| dependency-and-supply-chain | ALL with deps | YES | YES |
| observability | service, data-pipeline (primarily) | NO (kind-specific) | YES |
| ai-authoring-security | CLI, library, service, script, data-pipeline | YES | PARTIAL |
| performance-and-profiling | situational across all | YES (situational) | YES |
| security | CLI (input), library (depends), service (always), data-pipeline (always) | YES | YES |
| distribution-and-release | library, CLI, service (primarily); scripts often skip | NO (kind-specific) | YES |
| concurrency-and-state | service, data-pipeline, concurrent library (primarily) | NO (kind-specific) | YES |
| data-and-schema | service, data-pipeline, library-with-persistence (primarily) | NO (kind-specific) | YES |

Cross-cutting: 6 of 10 (60%). Kind-specific: 4 of 10 (40%). The plan's falsification threshold was "≥40% kind-specific with no clean restructure path." We're at exactly 40%, but the kind-specific concerns map cleanly to project-kind via interview, and none of them are vague — each has a clear "Skip if" trigger. The model survives without restructure.

**Risk of borderline ratio:** if user-testing reveals the kind-specific concerns are routinely confusing or routinely opt-in-noise, revisit with a hybrid structure. Logged here so future-me knows what to look for.

**Why:** the user's directive was "copy and change from website to general, hard to do it wrong" — agnostic-flat is the lowest-overhead path that preserves the website kit's structure. The risk of over-engineering (per-language packs, by-kind subdirectories) is higher than the risk of mild bloat in opt-in-by-kind concerns. (Kit design principle: lean cores and external pointers; every generated file is a forever maintenance burden against framework churn — pre-populated registers and over-specified structures defeat the promotion discipline the kit is trying to instil.)

**How to apply:** Slice 4 fleshes out each concern file's `How to apply` section. Slice 3's interview routes user-selected concerns based on project kind + project criticality (same shape as `website_process/interview/03-scope-and-concerns.md`).

---

## 2026-05-19 — Procedures and principles copy verbatim from website_process (REVISED MID-SLICE)

**Original decision:** All 10 procedures and all 7 principles copy byte-identical from `website_process/`, with NO per-procedure re-audit.

**Revision (during Slice 4 execution):** copy was *near*-verbatim, not byte-identical. A grep audit before the copy surfaced web-specific examples that needed adaptation:

- **Principles (4 of 7):** lesson references updated from `[[01-rest-pass-isnt-truth]]` to `[[01-intermediate-pass-isnt-truth]]` (the renamed lesson). Plus 4 principles cited specific web-domain war-story examples in their `Why` sections ("65-pixel offset", "unverifiable screenshot endpoint", "13 walls at correct coordinates", "walls validated against detector-derived positions") — these were rewritten to reference the new general-programming examples in the adapted lessons (CLI flag deadlock, payment-API refund-flow gap, search returning N results without correctness check, CLI stdout snapshot with wrong column separator). The `behavior-not-counts.md` "How to apply" bullets (walls/tokens/buttons) were replaced with general-programming analogues (CLI flag colorization, library deduplication, service handler create-then-read).
- **Procedures (3 of 10):** `debugging-methodology.md` swapped "Hydration mismatch" for "initialization-order bug" in the failure-mode list. `halt-conditions.md` Rule 7 examples swapped Playwright/Chrome for a C-extension/OpenSSL build scenario (same shape, different domain). `task-decomposition.md` swapped "a11y, performance, security ... shared layout, global CSS, routing" for "error-handling, security, dependency hygiene ... shared utilities, config loading, global state" and "ML-eval into website-build language" → "ML-eval into general-programming language".

**Why the original decision was overconfident:** "procedures and principles are domain-agnostic" was true at the LEVEL of the rules they encode. The rules themselves transfer cleanly. What didn't transfer was the *illustrative examples* embedded in `Why` sections, `How to apply` bullets, and Trace lines. Those are pedagogically load-bearing (they're what makes the abstract rule concrete and memorable) but they're domain-specific. The grep audit caught the mismatch before the verifier did.

**How to apply going forward:** when forking a kit, "copy verbatim" applies to *rule text* and *trigger conditions*; *examples* always need a domain-specific pass. Update plan and decision_log to reflect what "verbatim" actually means.

**Risk:** still possible an example slipped through. The Slice 5 verifier pass should grep specifically for web-specific examples (browser, click, render, pixel, CSS, frontend, hydration, page) in the final kit.

---

---

## 2026-05-19 — Validator starter scope: 4 languages (pytest, vitest, go test, cargo test)

**Decision:** `general_process/templates/` ships exactly four validator starters: Python (pytest), Node/TS (vitest), Go (`go test`), Rust (`cargo test`). Other ecosystems (Ruby, Java, Elixir, .NET, etc.) get a placeholder `validator_starter_adapt.template.md` with porting guidance.

**Alternatives considered:**

- **Ship a starter for every major ecosystem.** Rejected: scope creep. ~85% of new-project starts in 2026 are in the four chosen languages (eyeballing GitHub language stats); covering the long tail multiplies maintenance burden against framework churn.
- **Ship only one (Python) and tell others to port.** Rejected: too thin; the website kit ships two starters (Playwright + static) and that pair handles the bulk of cases.

**Why:** the four ecosystems cover the dominant CLI / library / service / data-pipeline starts. The fifth-most-common starter would be a marginal addition with non-marginal maintenance cost.

**How to apply:** Slice 2 implements the four starters + canary. Slice 3's interview asks "what test framework" with detected defaults; non-supported frameworks route to the adapt template.

**Risk:** a user with an Elixir project might feel underserved. Mitigation: the adapt template should be concrete enough that porting takes <30 minutes.
