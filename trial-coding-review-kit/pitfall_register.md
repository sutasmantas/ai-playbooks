# Pitfall Register: Coding Review Kit

Re-read before starting any review session. Entries describe failure patterns that have been observed in practice during the kit's development and trial runs.

Promotion rules:
- count = 1 → watch item (stays here)
- count ≥ 2 → promote to CLAUDE.md rule or procedure update
- count ≥ 5 → promote to permanent hard rule, bypasses review

Size cap: 100 active entries. If exceeded: retire entries with count=1 and last_observed > 60 days.

---

## Active entries — observed during kit trial runs

---

### Satisficing on first security finding

- **Pattern:** The security pass produces one P0 finding early in the pass, and the subsequent checks run more superficially or stop implicitly. The anti-satisficing rule is in CLAUDE.md but the pull toward "I already found the main issue" is strong.
- **How it bites:** The first finding (often injection/XSS) gets thorough treatment; later checks (race conditions, auth composition, business logic) receive progressively less attention. Recall drops from ~4/4 to ~2/4 for issues appearing later in the pass order.
- **Guardrail:** CLAUDE.md anti-satisficing rule: "Finding one security issue does NOT conclude this pass. Complete all classes above before reporting security findings." Structural enforcement: attack-surface triage happens before any check results are reported.
- **Trajectory signal:** If the response for a later security check is shorter than the response for the first check by >50%, the anti-satisficing rule has probably decayed.
- **Count:** 1
- **First observed:** 2026-07-01 — Phase 5.5 trial run; security pass found XSS early; subsequent checks reported more briefly
- **Last observed:** 2026-07-01
- **Status:** open watch item

---

### PR description read before pass completion

- **Pattern:** The reviewer reads the PR title, description, or commit message before completing all extraction passes. Often triggered by "I should understand what this PR is trying to do before I review it" — which feels like good practice but is actually confirmation-bias injection.
- **How it bites:** Framing from the PR description biases all subsequent findings. "Minor readability refactor" framing collapses security detection for implicit issues. The issue is not reading the PR description at all — it's reading it before extraction passes are complete.
- **Guardrail:** CLAUDE.md critical framing rule: "Review the diff first. Read PR title and description only AFTER completing all extraction passes." Pass 5 is explicitly labeled "PR metadata check (ONLY after all passes complete)."
- **Trajectory signal:** Any reference to what the PR "is supposed to do" appearing before the Pass 5 header is a failure of this rule.
- **Count:** 1
- **First observed:** 2026-07-02 — Phase 7 trial design session; Condition B test designed specifically to measure this; trial showed effect is limited for local-signal issues but rule remains structurally correct
- **Last observed:** 2026-07-02
- **Status:** open watch item

---

### Pass 4 four-check used as evidence-gathering (not quality gate)

- **Pattern:** The minimum-evidence gate fires and the reviewer attempts to gather the evidence by running the four-check — tracing execution paths, reading callers, constructing the counterexample during the four-check. The minimum-evidence gate is meant to filter out findings that DON'T already have the evidence. Running it to gather evidence inverts its purpose.
- **How it bites:** Findings that would have been P2/P3 (insufficient evidence) get inflated to P0/P1 by the evidence gathered during the four-check. The gate doesn't function as a filter; it becomes a research step that upgrades findings.
- **Guardrail:** CLAUDE.md minimum-evidence gate: "Before running the four-check, confirm the finding meets this threshold..." The word "confirm" is the signal — confirm evidence already in hand, not gather it. If the evidence is not already in hand, the finding is below the floor and stays at P2/P3 until it is.
- **Count:** 1
- **First observed:** 2026-07-02 — Phase 7 trial design review; observed that the gate structure could be misapplied in this direction
- **Last observed:** 2026-07-02
- **Status:** open watch item

---

### Consolidation blindness — same root cause reported N times

- **Pattern:** The same root cause (e.g., path traversal via userId injection, no null check on readMetadata callers, unvalidated external input) appears in 3–5 functions across the file. Each instance gets its own finding entry. The reviewer treats them as separate issues rather than one pattern with multiple locations.
- **How it bites:** Finding count inflates (A=10, C=9 in Phase 7 trial). The same fix advice is repeated N times. The pattern is not named, so the root-cause fix (validate at entry, not at each use site) is not surfaced. Human reviewer has to deduplicate before acting.
- **Guardrail:** CLAUDE.md scale handling — pattern consolidation: "When the same root cause appears in multiple locations, report it once as a pattern: 'This pattern appears in [N] locations: [list]. Root cause: [single explanation]. Fix: apply once, then propagate.'"
- **Trajectory signal:** If >2 consecutive findings share the same root-cause class (injection, null dereference, missing auth), a consolidation check must fire before reporting the third.
- **Count:** 1
- **First observed:** 2026-07-02 — Phase 7 Condition A output: userId path injection, path traversal in deleteFile/purgeUserUploads, and filePath in processUpload were reported separately; shared root cause (no input validation at entry points) not named
- **Last observed:** 2026-07-02
- **Status:** open watch item

---

## Named anti-patterns (awareness vocabulary — observed in code review research, not yet in this kit's trial)

These are documented failure patterns from code review research. They live here as recognition vocabulary. If observed in kit reviews at least twice, promote to a full entry above.

### False-negative asymmetry
Reviewers approve questionable changes at 4×–114× the rate they reject valid ones. Manifests as: mild language on potential security issues ("you might want to consider..."), not marking findings as blocking when they are. Guardrail: CLAUDE.md finding format requires explicit `Blocking: YES | NO` per finding; P0/P1 are always blocking.

### Experience-plateau usefulness
Developer expertise plateau effect: mid-level developers (3–8 years) produce the highest-quality reviews; senior developers spend more time but find fewer issues per hour due to domain familiarity over-filtering. Manifests in kit use as: "this is standard practice so it's fine" dismissals without checking the specific code path. Guardrail: minimum-evidence gate requires tracing the specific input-to-failure path, not reasoning from general domain knowledge.

### File-position attention decrement
Security issues in the last 30% of a PR diff are found significantly less often than issues in the first 30%. Manifests as: thorough Pass 1 output for the first few functions, brief output for the last few. Guardrail: attack-surface triage runs on the full file first; pass structure prevents sequential attention depletion.

### Diff-scope blindness
Review bounded to the diff misses: callers of changed functions in other files, downstream consumers of changed APIs, database migration consequences. Manifests as: "not in this PR" responses to blast-radius questions. Guardrail: Pass 3 (cross-cutting impact) is explicitly diff-unbounded; blast radius question asks about callers/consumers not in the diff.
