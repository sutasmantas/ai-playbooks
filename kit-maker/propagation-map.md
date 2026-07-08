# Kit-Maker Propagation Map

Tracks the relationship between the kit-maker's own practices and what it requires of generated kits.

**Purpose:** Every kit-maker self-improvement that doesn't update this map creates silent debt. Every row marked GAP or OPEN is a known weakness — not permission to omit, it means the debt is visible.

**How to use:**
- When any kit-maker file changes → check this file. Does the change need a new row or an update to "Required in kit via"? If yes: update Hard Rule 13 or Phase 6 checklist AND this file before closing the task.
- At Phase 6, before writing the behavioral contract → review this file. For every ALWAYS row: confirm the contract includes the equivalent. For every DOMAIN-CONDITIONAL row: check whether this kit's domain meets the condition.

**Last full audit:** 2026-07-05 (batch 4 PCR — external register + omission metrics + reversibility gate + rule density model-tier ceilings added to ENTRYPOINT.md)

---

## Always-propagating practices

Required in every generated kit regardless of domain.

| Kit-maker practice | Required in generated kit via | Status |
|--------------------|------------------------------|--------|
| Behavioral contract (CLAUDE.md) | Hard Rule 13 elements 1-12 | COVERED |
| Advisor behavior — gold standard, delegation, after-every-task, proactive surfacing | Hard Rule 13 elements 1-4 | COVERED |
| Behavioral contract decay warning | Hard Rule 13 element 5 | COVERED |
| Repeated-instance consolidation (one entry per pattern, not per instance) | Hard Rule 13 element 6 | COVERED |
| Disagreement protocol (flag once, comply; two tiers) | Hard Rule 13 element 7 | COVERED |
| Intake protocol (essential unknowns vs. safe inferences) | Hard Rule 13 element 8 | COVERED |
| Intake planning — classify complexity, generate skeleton before execution, expand phase at entry, annotate mutations, route discovered work (replaces multi-task tracking; KIT-PLAN-01 2026-07-04) | Hard Rule 13 element 9 (Intake planning rule) + kit-planning-design.md for full spec | COVERED |
| Minimum model tier declaration | Hard Rule 13 element 10 | COVERED |
| Class-before-instance when fixing problems | Hard Rule 13 element 11 | COVERED |
| Alternatives for first-pass outputs | Hard Rule 13 element 11 | COVERED |
| Done-criteria re-check before reporting complete | Hard Rule 13 element 11 | COVERED |
| Domain failure modes documentation (static, 2-3 patterns) | Hard Rule 13 element 11 | COVERED |
| NEVER-rule structural reinforcement | Hard Rule 13 NEVER-rule section | COVERED |
| Rule density constraint | Hard Rule 13 rule density section | COVERED |
| Context compaction compliance | Hard Rule 13 compaction section | COVERED |
| Critical rule placement (restate most important rule at top AND bottom) | Hard Rule 13 critical rule placement section | COVERED |
| Counter-intuitive constraint scaffolding (domain-specific worked examples) | Hard Rule 13 counter-intuitive section | COVERED |

---

## Domain-conditional practices

Required only when the generated kit's domain matches the stated condition.

| Kit-maker practice | Condition | Required in kit via | Status |
|--------------------|-----------|---------------------|--------|
| Phase-gate reflection (mandatory-reflection.md equivalent) | Kit has defined phases or stages in its workflow | Hard Rule 13 element 12 | COVERED |
| Research quality procedures (research-quality.md) | Kit involves research as a primary activity | Phase 6 propagation check → include research quality procedure in kit if condition met | COVERED |
| Checkpoint writes during research (write to archive every 3-4 queries) | Kit involves research | Phase 6 propagation check | COVERED |
| Verify pass for HIGH-confidence claims | Kit involves research with evidence classification | Phase 6 propagation check | COVERED |
| Synthesis grouping rule / dual-pass | Kit involves synthesis across multiple sources | Phase 6 propagation check | COVERED |
| Post-cluster-review procedure | Kit involves batched research cycles | Phase 6 propagation check | COVERED |
| Session-start structured checks (Check 0/1/2 from CLAUDE.md) | Kit involves multi-session long-horizon use | Phase 6 checklist for long-horizon kits; Check 0 (domain mistakes scan) is a P2 gap for generated kits | PARTIAL — Check 0 (mistakes scan at session start) not yet required for generated long-horizon kits |
| Project-level task tracking (plan.md equivalent) | Kit is a meta-kit OR involves multi-session project work | Hard Rule 13 element 9 covers message-level only; project-level tracking not required for domain kits | DELIBERATE OMISSION — most kits are document-level, not project-level |
| External intention register for long-horizon execution (≥10 sequential steps or cross-domain boundaries) | Kit workflow has ≥10 sequential steps OR crosses tool-namespace boundaries | Phase 6 domain-conditional checklist row (added 2026-07-05); register design: K≤6 bounded predicates, programmatic exhaustion gate, write-confirmation step (PROVISIONAL: write discipline failure rate is open gap — see batch 4 PCR angle 4) | COVERED via Phase 6 checklist — new row added 2026-07-05 |

---

## Meta-kit only (intentionally not propagated)

These practices belong to the kit-maker as a meta-tool. Generated domain kits do not maintain these.

| Practice | Reason not propagated |
|----------|-----------------------|
| grounding-map.md (design decision tracking) | Meta-research tracking — generated kits don't self-research |
| design_log.md (discovered work log) | Meta-session tracking — not applicable to domain kits |
| RESEARCH_ANGLES.md (research backlog) | Meta-research management — not applicable |
| pitfall_register.md (kit-maker's own pitfalls) | Kit-maker packages weakness_register.md as kit output (Phase 8); domain kits don't self-maintain pitfall registers |
| propagation-map.md (this file) | Meta-kit only — domain kits don't produce further kits |
| Task-level process template (TASK_TEMPLATE.md) | Only needed for meta-kits with complex multi-type task tracking; domain kits get element 11 of Hard Rule 13 instead |
| Living mistake log (mistakes.md) | Domain kits get static domain failure modes (element 11); living log is meta-kit overhead |
| TASK_TEMPLATE.md task type routing | Meta-kit overhead; generated kits have simpler scope |

---

---

## Procedure files (procedures/ directory)

All 11 procedure files assessed. For each: whether the procedure or its core principle should propagate, and via what mechanism.

| Procedure | Core principle | Propagation decision | Required in kit via | Status |
|-----------|---------------|---------------------|---------------------|--------|
| class-before-instance.md | Stop → name class → scan instances → fix class | ALWAYS (rule); DOMAIN-CONDITIONAL (procedure file) | Hard Rule 13 element 11 (rule). Procedure file included by Phase 6 checklist for kits where agent iteratively improves complex outputs | COVERED |
| mandatory-reflection.md | 9-question checkpoint: 4 deficit + 5 opportunity; trajectory signal; external signal injection | ALWAYS (minimal gate, element 12); DOMAIN-CONDITIONAL (full procedure) | Hard Rule 13 element 12 (minimal). Full adapted procedure via Phase 6 checklist for extended multi-phase kits | COVERED |
| alternatives-generation.md | 4-step; steelmanning required; cap at 2-3 | ALWAYS | Hard Rule 13 element 11 — steelmanning and 2-3 cap now added | COVERED (updated) |
| post-cluster-review.md | Restructured 2026-07-03: Step 2 now has principle-level pre-read (2.0), dimension-centric cross-match (2.1), per-claim questions (2.2), and cross-finding pass (2.3). New Step 3.5: mechanism-options before application. Step 4: Pattern I gate + structural-type routing + evidence-strength routing + rule-outcome-register writes for all tiers (A1+A2, 2026-07-03). Step 5: fresh subagent dispatch instead of same-agent second-pass (CONVERT-6, 2026-07-03). | DOMAIN-CONDITIONAL (research kits) | Phase 6 checklist | COVERED — the updated procedure propagates to generated research kits via Phase 6 checklist |
| goal-directed-continuation.md | 3-step after every turn; goal-model-at-intake (re-read goal before any session action); behavioral contract decay | ALWAYS | Hard Rule 13 element 3 — "goal-model-at-intake" step now added to session-start sub-rule | COVERED (updated) |
| obstacle-navigation.md | Routes through AND around; never self-authorize workarounds; flip trigger (surface to user when all paths blocked) | ALWAYS | Hard Rule 13 element 7 (disagreement protocol) — "never self-authorize workarounds" now added | COVERED (updated) |
| satisficing-and-roi.md | Trajectory signal (actions getting smaller = flag); direction-drift check; satisficing check; ROI check; effort classification | DOMAIN-CONDITIONAL (kits with iterative extended work) | Phase 6 domain-conditional checklist — added | COVERED (updated) |
| provisional-decision.md | Implement provisional + write flip trigger + write switch spec | DOMAIN-CONDITIONAL (kits with design decisions under uncertainty) | Phase 6 domain-conditional checklist — added | COVERED (updated) |
| audit-backlog.md | Improve-not-remove; one item at a time | META-ONLY | N/A — generated kits don't manage their own audit backlog | COVERED |
| research-synthesis.md | 7 steps: grouping, contradiction scan, confidence map, adversarial user-assumption check, user questions, write synthesis.md, principles extraction (Step 3.7); Steps 3.5 and 3.6 use subagent dispatch (updated 2026-07-03); LOW empirical → consensus tier | DOMAIN-CONDITIONAL (research kits) | Phase 6 checklist | COVERED — the subagent dispatch in Steps 3.5/3.6 is a kit-maker-level practice; generated research kits inherit the procedure description via Phase 6 propagation check; the subagent dispatch is part of the procedure, not a separate Kit-maker-only practice |
| research-quality.md | Vocab frame enumeration; 5 query types per angle (Query 3b now dispatches adversarial subagent — updated 2026-07-03); 3-condition saturation | DOMAIN-CONDITIONAL (research kits) | Phase 6 checklist | COVERED — subagent dispatch is part of the Query 3b procedure; propagates to research kits via Phase 6 checklist |
| agent-control-mechanisms.md | Decision rules for when to generate skills, hooks, custom agent types, permissions restrictions in Phase 6. Per-mechanism criteria (3 conditions each); default-minimal posture. **Phase 6 output note:** Phase 6 now produces mechanism files as a new output class: skill files (.claude/skills/<name>/SKILL.md), hooks configuration (settings.json hooks block), custom agent type files (.claude/agents/<name>.md), permissions allow/deny-list (settings.json permissions block). These are META-ONLY outputs — domain kits don't generate further kits. Phase 6 checklist now includes a mechanism pre-draft gate (Step 0) and mechanism count check. | META-ONLY | N/A — procedure governs kit-maker Phase 6 only; generated domain kits don't produce further mechanism files | COVERED (added 2026-07-04 CTRL-01) |

---

## Known gaps

| Gap | Priority | Status |
|-----|----------|--------|
| Check 0 (domain mistakes pattern scan at session start) for long-horizon generated kits | P2 | CLOSED 2026-07-02 — added to long-horizon row of ENTRYPOINT.md domain-conditional checklist |
| Coverage matrix (input types × phases × checklist items) not required before Phase 6 | P2 | OPEN — INT-05 test (7 auditor rounds) revealed that missing study types are discovered serially during auditing. Fix: Phase 5 plan should include an explicit coverage matrix for kits with N input types (N>3). Each cell = does Phase B/C/D/E handle this type explicitly? Proposed addition to Phase 5 gate requirements. |
