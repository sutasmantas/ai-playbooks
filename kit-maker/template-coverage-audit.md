# Template Coverage Audit

**Purpose:** Catalog every distinct behavioral rule, check, trigger, and procedure from all instruction sources. For each: source, whether it is currently enforced by TASK_TEMPLATE.md, and whether it should be. Used to drive template improvements and the CLAUDE.md/memories trim task.

**How to read:**
- `In template?` → Y (enforced), N (absent), PARTIAL (partially enforced)
- `Should it be?` → Y (task-level enforcement needed), N (better as always-on rule), PHASE (phase-specific, not task-level), META (meta-rule about kit design, not task-level)
- `Priority` for missing items: P0 (breaking now), P1 (high value), P2 (medium), P3 (low)

**Sources read:** kit-maker/CLAUDE.md, project root CLAUDE.md, kit-maker/ENTRYPOINT.md, all 11 procedure files, selected memory files.

**Summary up front (read first):**

| Category | Count |
|----------|-------|
| Rules checked | ~80 |
| Already in template (full) | ~30 |
| Already in template (partial) | ~10 |
| Missing — should be in template | ~12 |
| Missing — should be in CLAUDE.md (always-on) | ~8 |
| Missing — phase-level or meta, not task-level | ~20 |

**Key gaps (P0/P1):**

| Gap | Priority | Fix needed |
|-----|----------|-----------|
| Task-recognition trigger absent | P0 | CLAUDE.md rule: "every user direction = new task; add to plan.md before acting" |
| 5.2/5.3 mistake-fire has no mechanism | P0 | CLAUDE.md always-on: "if anything unexpected → write mistakes.md before continuing" |
| Broad retrospective not reliably enforced | P1 | CLAUDE.md always-on: "when correction received → broad review before targeted fix" |
| Fix-not-report not in template or CLAUDE.md | P1 | CLAUDE.md always-on: "fix visible problems inline, do not announce/defer" |
| Batch proposals / one check-in per unit | P2 | CLAUDE.md advisor behavior section |
| Provisional decision procedure not in template | P2 | Add to template Section 3 (design freeze) |
| Trajectory signal not in template | P2 | Add to template Section 4 (execution-ready gate) or CLAUDE.md |
| ROI check before task start not in template | P2 | Add to template Section 1.2 or Section 4 |

---

## Source 1: kit-maker/CLAUDE.md

### Session-start checks

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Multi-task counting: enumerate all tasks before starting any | PARTIAL | Y | P1 | Template Section 0 pre-check mentions reviewing pending triggers but no explicit "count tasks in user message" check |
| Done-criteria before direction: state outcome before starting | Y | Y | — | Template Section 1.1 enforces this |
| Re-read done-criteria after completing direction | Y | Y | — | Template Section 6.1 enforces this |
| Check 0 (session start): read mistakes.md Pattern Summary, name pattern risk | Y | Y | — | Template Section 0 pre-check item 3 |
| Check 1 (session start): read plan.md, check active task, fire outstanding triggers | Y | Y | — | Template Section 0 pre-check item 2 |
| Check 2 (session start): direction drift — if last 2-3 units same direction, fire mandatory-reflection Q9 | N | N (CLAUDE.md) | — | Session-start always-on behavior; not task-level; already in CLAUDE.md Check 2 |

### Trigger table

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Research angle completed → PCR before anything else | PARTIAL | Y | P1 | Template Section 3.4 trigger check covers "does completing this task fire a trigger" but does not explicitly list all triggers from plan.md; agent must still look up plan.md |
| PCR completed → update grounding-map.md | PARTIAL | Y | P1 | Template Section 7 integration close includes grounding-map.md; could be more explicit |
| New task added → template sections 0-4 before execution | Y | Y | — | Template Section 0 pre-check; also in plan.md trigger table |
| Task marked complete → sections 6-7 verified | Y | Y | — | Template Section 6-7 required |
| Audit item investigated → propose fix before applying | Y | Y | — | Template Section 3 design freeze + Section 6.7 decision |
| **Task-recognition trigger ABSENT** | **N** | **CLAUDE.md (P0)** | **P0** | No rule defines "what counts as a new task requiring plan.md entry." File-reading directed at a user request IS execution. Fix: CLAUDE.md must state: "Every user direction with >1 step or producing an artifact = a task. Add to plan.md and fill template sections 0-4 before doing anything." |

### Problem-fixing rules

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Before fixing: name general class (not instance) | PARTIAL | Y | P1 | Template Section 5.3 Q1 gets at this; but class-before-instance as a named step is only in CLAUDE.md and class-before-instance.md, not explicitly in template |
| Scan for other instances of same class | PARTIAL | Y | P1 | Template Section 5.3 Q2 "what else might be wrong" covers this; class-before-instance.md Step 3 is more explicit |
| Fix the class-level rule, then instances | PARTIAL | Y | P1 | Template Section 5.3 Q4 "if recurrence, what was inadequate about previous fix?" covers the iteration; but "fix the CLASS, not the instance" is not an explicit rule in the template |
| Fix first, angle second | PARTIAL | Y | P1 | Template Section 3.1 requires an exact approach, but no explicit "fix before angle" rule |

### Output quality rules

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| After first-pass output: one alternative with different assumption | Y | Y | — | Template Section 1.4 (alternatives table) and Section 2.2 |
| Phase 6 decision-surfacing: list structural decisions before drafting | PARTIAL | Y | P2 | Template Section 2 "exploration" covers this for Procedure-design; not explicitly a pre-draft step for all task types |
| "Am I about to make a choice without naming it?" self-check | PARTIAL | Y | P2 | Template Section 2.3 counterarguments covers some of this; no explicit "invisible decision" self-check question |

### Generated kit requirements (Hard Rule 13)

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Generated kits: gold standard, delegation model, 8 other elements required | N | META | — | This is a rule about what generated kits must contain, not about task execution. PHASE-specific (Phase 6 only). Already enforced in ENTRYPOINT Hard Rule 13. |
| NEVER-rule structural reinforcement for generated kits | N | META | — | Same — applies to generated kit content, not to task execution |
| Rule density constraint for generated kits | N | META | — | Same |

---

## Source 2: Project Root CLAUDE.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| After ANY task: proactively name next problem + propose next step + proceed | PARTIAL | N (CLAUDE.md) | P1 | Template Section 6 post-task review exists but does not include "name next obstacle and propose it." This is advisor behavior that should be in CLAUDE.md as always-on. Currently in project CLAUDE.md; should also be in kit-maker CLAUDE.md more explicitly. |
| NEVER quick-fix: name class, scan, fix class | PARTIAL | Y | P1 | Template 5.3 partially covers; class-before-instance should be more explicit as a named step in template |
| Read Goal Model before every session | N | N (CLAUDE.md) | — | Session-start always-on rule; already in CLAUDE.md |
| Surface problems proactively | N | N (CLAUDE.md) | — | Advisor behavior; always-on; in CLAUDE.md |
| Do not log discovered work and leave it | PARTIAL | Y | P1 | Template Section 7 integration close requires design_log.md entry; but "propose fixing at next opportunity" is not a closing criterion |
| Before executing any direction: state done-criteria | Y | Y | — | Template Section 1.1 |
| Fix before angle — concrete fix first | PARTIAL | Y | P1 | Template Section 3.1 (exact approach) helps; but no explicit "check: am I adding an angle instead of a fix?" |
| Behavioral contract decay: check after every response | N | N (CLAUDE.md) | — | Always-on advisor behavior; in CLAUDE.md; not task-level |

---

## Source 3: ENTRYPOINT.md — Hard Rules

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| HR1: Research before building | PARTIAL | Y | P1 | Template Section 1.6 (assumptions/dependencies) could include "are relevant archives current?"; template doesn't explicitly block Phase 6 work without Phase 3-4 |
| HR2: Reflection gate at every phase end | PARTIAL | Y | P2 | Template Section 6 post-task review is similar but not the same as mandatory-reflection.md 9-question format; gap: template should reference mandatory-reflection.md for phase-end tasks |
| HR3: Class-before-instance | PARTIAL | Y | P1 | See above |
| HR4: Alternatives generation after first-pass output | Y | Y | — | Template Section 1.4 and Section 2.2 |
| HR5: Two auditors; hard cap 3 RED rounds | N | PHASE | — | Phase 6 specific; already in ENTRYPOINT |
| HR6: Kit ships with research archive | N | PHASE | — | Phase 8 specific |
| HR7: Design log append-only during build | PARTIAL | Y | P2 | Template Section 3.3 integration plan requires tracking items to design_log.md; "during build don't interrupt" is implicit |
| HR8: User questions only at gap spots | N | PHASE | — | Phase 4 specific |
| HR9: "Wait —" before any done claim | PARTIAL | Y | P1 | Template Section 6.1 done-criteria check covers this; but "Wait —" pause is not an explicit beat in Section 6 |
| HR10: One question at a time | N | N (CLAUDE.md) | — | Always-on communication rule; in CLAUDE.md |
| HR11: No placeholders in final output | N | Y | P2 | Template Section 3.2 quality bar should include "no TBD, no 'as appropriate', no vague prose"; currently the ambiguity-check is in ENTRYPOINT Phase 6 per-file loop but not in task template |
| HR12: Document every skip | PARTIAL | Y | P2 | Template Section 7 integration close checks plan.md but no explicit "was any procedure skipped? if yes, log why" |
| HR13 elements for generated kits | N | META | — | Phase 6 output requirement; not task-level |

### ENTRYPOINT Phase Gates

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Phase gate questions answered in writing before proceeding | PARTIAL | Y | P2 | Template Section 6 covers some; but ENTRYPOINT phase gates (per-phase specific questions) are much more specific than the generic Section 6 questions |
| Phase 6 per-file loop: ambiguity check (scan for vague language) | N | Y | P2 | Not in template; should be in task-type specific "Procedure-design" section |
| Phase 6 per-file loop: scale-handling check (for-each loops need scoping rules) | N | Y | P2 | Same — procedure-design task-type should include scale check |
| Phase 6 per-file loop: classification-anchor check (classification rules must be binary-checkable) | N | Y | P2 | Same |
| Phase 6 per-file loop: trace line required | N | Y | P2 | Template Section 7 integration close should include "trace line added to each file" |

---

## Source 4: Procedure Files

### class-before-instance.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Step 1: Stop before fixing the instance | PARTIAL | Y | P1 | Template 5.3 "investigate" section does pause work; but not explicitly as a stopping gate before any fix |
| Step 2: Name the general class ("this is an instance of ___ because ___") | PARTIAL | Y | P1 | Template 5.3 Q1 asks about overall process; not the explicit class-naming sentence |
| Step 3: Scan for other instances | PARTIAL | Y | P1 | Template 5.3 Q2 covers "what else might be wrong" |
| Step 4: Fix the class-level rule, then instances | N | Y | P1 | Not in template; 5.3 Q4 asks about inadequate previous fixes but doesn't require "fix the class first" |
| Log class, instance, other instances, fix in design log | PARTIAL | Y | P2 | Template Section 7 logs mistakes.md; design_log doesn't have an explicit requirement for class-instance logging |
| Do NOT skip: anything involving AI behavior | N | Y | P1 | Template 5.2 says "fires when anything unexpected happens" — but "when to skip" criteria (as detailed in the procedure) are absent |

### mandatory-reflection.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Fire at end of every phase AND every substantive task output | PARTIAL | Y | P1 | Template Section 6.2 has some reflection questions; but is NOT the full 9-question mandatory-reflection.md format; for phase-end tasks the template should reference mandatory-reflection.md explicitly |
| 9 questions with specificity requirement | PARTIAL | Y | P1 | Template Section 6.2 has 4 questions, not 9; specificity requirement absent |
| External signal injection before firing (test results, audit findings) | N | Y | P1 | Not in template; should be in Section 6 before the pattern review |
| Persistence: actionable answers → design_log AND include in next phase start | PARTIAL | Y | P1 | Template Section 7 integration close requires design_log.md; "include in next phase start" is not a requirement |
| Trajectory signal: 3 null-deficit checkpoints → surface to user | N | Y | P2 | Not in template |

### alternatives-generation.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| After first-pass output: ≥2 alternatives with DIFFERENT assumptions | Y | Y | — | Template Section 1.4 and 2.2 cover this |
| Steelman each alternative before evaluating | Y | Y | — | Template Section 1.4 "strongest case FOR" column |
| Each rejected alternative must name dimension where it wins | Y | Y | — | Template Section 1.4 "dimension where it wins" column |
| Cap at 2-3 alternatives | N | Y | P3 | Mentioned in procedure but not in template |
| Skip: administrative decisions; decisions already selected from prior round | N | Y | P3 | Skip conditions not in template |
| Fire before any Phase 6 draft (list structural decisions first) | PARTIAL | Y | P2 | Template Section 2.6 for Procedure-design; not general |
| Invisible decision failure mode — list structural decisions BEFORE drafting | N | Y | P2 | Not in template as an explicit pre-draft step |

### post-cluster-review.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Success criterion: cross-match complete + findings documented (nulls too) | PARTIAL | Y | — | Template Section 0 routing → PCR task type; Section 2 has abbreviated sections; but the specific success criterion isn't in template |
| Step 1: Extract HIGH/MEDIUM claims only | N | Y | — | PCR task-type specific section in template exists but doesn't detail claim extraction steps |
| Step 2: Cross-match against all kit files | N | Y | — | PCR template section: "finding-application cross-match table" is there; OK |
| Step 5: Second-pass re-review after changes | N | Y | P2 | Not in PCR task-type section |
| Step 6: Update grounding-map.md | Y | Y | — | In template Section 7 |
| Step 7: Add new angles to RESEARCH_ANGLES.md | Y | Y | — | In template Section 7 |

### goal-directed-continuation.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Goal model at intake: broader goal, gold standard, obstacles, delegate/own split, behavioral contract | N | PHASE | — | Phase 2 specific; not task-level |
| After every turn: (1) did this move toward goal? (2) next obstacle? (3) propose next step | PARTIAL | N (CLAUDE.md) | P1 | Template Section 6 post-task review covers (1); naming next obstacle and proposing next step are in CLAUDE.md but NOT in template Section 6 as a required closing step. Should be added to template Section 6 end. |
| Behavioral contracts decay: check before every response | N | N (CLAUDE.md) | — | Always-on; in CLAUDE.md |
| Three forms of proposal: "I'll do X" / "proposing X unless redirected" / "need your decision on X specifically" | N | N (CLAUDE.md) | — | Advisor behavior; always-on |
| Calibrated autonomy: proceed autonomously for reversible/low-stakes; propose+proceed for direction changes; genuine ask for judgment calls | N | N (CLAUDE.md) | — | Always-on advisor behavior |

### obstacle-navigation.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Name obstacle precisely before navigating | PARTIAL | Y | P2 | Template Section 1.7 "what could go wrong" + Section 6.7 blocked decision; but no explicit "if blocked: name obstacle precisely" step |
| Enumerate routes through AND routes around | N | Y | P2 | Not in template; should be triggered by Section 6.7 "blocked" decision |
| Evaluate routes against ACTUAL GOAL, not verifier | N | Y | P2 | Not in template |
| Surface to user; do NOT self-authorize workarounds | N | N (CLAUDE.md) | P1 | Always-on rule; not task-level; should be in CLAUDE.md |
| Log flip trigger for chosen route | PARTIAL | Y | P2 | Template Section 3.5 rollback includes provisional decisions; flip trigger not explicitly named |

### satisficing-and-roi.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Trajectory signal: last 3 actions smaller than previous → stop and run ROI check | N | Y | P2 | Not in template; should be in Section 4 (execution-ready gate) or Section 5 mid-work check |
| Direction-drift check at logical unit boundaries | N | N (CLAUDE.md) | — | Already in CLAUDE.md Check 2; session-level |
| Direction-drift check fires at session start when continuing | N | N (CLAUDE.md) | — | Already in CLAUDE.md Check 2 |
| Satisficing check: before additional iteration on working state, name what it adds | N | Y | P2 | Not in template; should be in Section 5.4 scope check or Section 6 |
| ROI check: before next task, is this highest-value? | PARTIAL | Y | P2 | Template Section 1.2 "why this task now" partially covers; but no explicit "scan for higher-ROI alternatives" step |
| Effort classification: quick scan / standard / deep work — never skip | N | Y | P2 | Not in template; should be in Section 0 or Section 1.2 |
| Before declaring low ROI: search for alternative approach first | N | Y | P2 | Not in template |

### provisional-decision.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| When making design decision before confirming research: implement, write flip trigger, write switch spec | PARTIAL | Y | P2 | Template Section 3.5 "rollback rule" partially covers; no explicit "flip trigger" concept |
| Flip trigger must be specific, falsifiable, named as authorization | N | Y | P2 | Not in template |
| "Defending this decision past this evidence is against the rules" | N | Y | P2 | Not in template |
| Skip: decision fully confirmed by existing archive | N | Y | P3 | Not in template |

### audit-backlog.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Improve-not-remove approach | N | Y | P2 | Not in template; could be in Section 3 "exact approach" for Audit task type |
| Apply concrete fix (not just research angle) for each audit item | Y | Y | — | Template Audit task-type section: "2.2: concrete fix required before proceeding" |
| Do not batch multiple open items | N | Y | P2 | Not in template; could be in Audit task-type Section 1.3 (scope: one item at a time) |

### research-quality.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Step 0 vocabulary-frame enumeration before queries | Y | Y | — | Template Research task-type Section 2.6 covers this |
| 3-5 terms per tradition (not exhaustive synonyms) | Y | Y | — | Template Research task-type covers this |
| Disambiguation qualifier for polysemous terms | N | Y | P2 | Not in template Research task-type; should be added |
| 5 query types per angle | Y | Y | — | Template Research task-type covers query planning |
| Grey literature leg required | Y | Y | — | Template Research task-type covers this |
| Alternative vocabulary tradition required | Y | Y | — | Template Research task-type covers this |
| Follow-up queries (berrypicking) allowed | N | Y | P3 | Not in template |
| Saturation: all 3 conditions before declaring | Y | Y | — | Template Research task-type Section 2.6 covers 3 conditions |
| Dual-database minimum (Semantic Scholar + arXiv) | N | Y | P2 | Not in template Research task-type; should be added |
| Verify pass: adversarial framing, 3 dimensions | N | Y | P1 | Not in template; Research task-type covers saturation tracking but not verify pass requirements |

### research-synthesis.md

| Rule | In template? | Should it be? | Priority | Notes |
|------|-------------|---------------|----------|-------|
| Group by field, ≥4 claims or merge | N | Y | P1 | Template Synthesis task-type exists; but grouping rule is not in it |
| Low-confidence empirical → consensus tier | N | Y | P1 | Not in template Synthesis task-type |
| Evidence-type scope check (observational vs controlled) | N | Y | P1 | Not in template Synthesis task-type |
| Confidence map: HIGH/CONSENSUS/CONTESTED/GAP with evidence basis column | PARTIAL | Y | P1 | Template Synthesis task-type mentions "confidence map completeness"; no format requirement |
| Dual-pass reliability check (shuffle and re-run) | N | Y | P2 | Not in template |
| Counter-prior pass (required for highest-confidence group) | N | Y | P1 | Not in template |
| Adversarial check on user assumptions | PARTIAL | Y | P1 | Template Synthesis task-type "counter-prior pass planned in 2.6"; but user-assumption check not explicitly required |
| User questions: CONTESTED and GAP only, one at a time | N | Y | P1 | Not in template |

---

## Source 5: Memory Files (Kit-Maker Relevant)

| Rule | Source | In template? | Should it be? | Priority | Notes |
|------|--------|-------------|---------------|----------|-------|
| One check-in per logical unit (not per file edit) | feedback_batch_proposals | N | N (CLAUDE.md) | P2 | Advisor behavior; always-on; not task-level |
| Done-criteria as outcome before executing; re-read before reporting | feedback_direction_done_criteria | Y | Y | — | Template Section 1.1 and 6.1 cover this |
| Make the call within expert domain; don't flag and ask permission | feedback_make_the_call | N | N (CLAUDE.md) | P1 | Always-on advisor behavior; calibrated-autonomy rule |
| When something goes wrong: broad open-ended retrospective FIRST | feedback_active_coherence_monitoring | PARTIAL | N (CLAUDE.md) + PARTIAL-Y | P0 | Template 5.3 investigation covers Q1-Q4; but the TRIGGER ("when correction received, broad review before any fix") needs to be in CLAUDE.md as always-on. The template 5.3 is correct content but wrong location for enforcement. |
| Fix visible problems inline; do not announce or defer | feedback_fix_not_report | N | N (CLAUDE.md) | P1 | Always-on; not in kit-maker CLAUDE.md; should be added |
| After substantive task: self-review pass | feedback_self_review_after_task | Y | Y | — | Template Section 6 post-task review covers this |
| Never flag without concrete fix | feedback_suggest_solutions_not_problems | PARTIAL | N (CLAUDE.md) | P1 | Always-on advisor behavior; partially in template ("concrete fix required" for Audit tasks) but not as a general rule |
| Don't relitigate decisions user already confirmed | feedback_acknowledge_user_answers | N | N (CLAUDE.md) | P1 | Always-on; not in CLAUDE.md |
| Session summaries: per-file detail, what changed and why | feedback_session_summaries | N | N (CLAUDE.md) | P3 | Specific to handoff context; not task-level |
| Surface structural decisions before drafting; steelman all | feedback_alternatives_depth | Y | Y | — | Template Section 1.4 and Section 2.6 (Procedure-design) cover this |
| Write progress to tracking files as you go, not only at end | feedback_handoff_documentation | PARTIAL | Y | P2 | Template Section 3.3 "when" column not "at end" covers this partially; but handoff readiness is not explicitly a template requirement |
| Research saturation: stop at saturation, not arbitrary count; include GitHub | feedback_research_saturation | Y | Y | — | Template Research task-type covers saturation conditions |
| Use Workflow not Agent for parallel research | feedback_workflow_before_agent | N | N (CLAUDE.md) | P2 | Tool-selection rule; not task-level |
| Check session resources before heavy workflow | feedback_check_before_heavy_tasks | Y | Y | — | Template Section 1.6 dependencies includes resource check |
| Write each phase's output to disk before next phase | feedback_workflow_checkpoint_writes | N | Y | P1 | Not in template; should be in Research task-type: "after each phase, write to disk before continuing" |
| For non-trivial design decisions: spawn pro/con subagents | feedback_adversarial_decisions | PARTIAL | Y | P2 | Template Section 1.4 alternatives requires alternatives; spawning subagents is a method not required |
| Kit cores should be lean; every file is maintenance burden | feedback_kit_at_right_scope | N | META | — | Meta-rule about kit design philosophy |
| Apply kit's own discipline to itself at every plateau | feedback_apply_kits_own_discipline_to_itself | N | META | — | Meta-rule; applies when building kits |
| Read ALL relevant research before proposing | feedback_research_first_brainstorm | N | N (CLAUDE.md) | P1 | Session-start always-on behavior; not task-level |

---

## Source 6: mistakes.md Patterns

These patterns are documented failures; each should be structurally prevented by the template.

| Pattern | In template? | Should it be? | Priority | Notes |
|---------|-------------|---------------|----------|-------|
| A — Execution without integration: generated items not wired into tracking state | Y | Y | — | Template Section 3.3 integration plan + 5.1 mid-work coherence check covers this |
| B — Procedure not enforced at task level: rules exist but not consulted | Y | Y | — | Template is the fix for Pattern B; but task-recognition (when to USE the template) still absent |
| C — Unvalidated procedure: applying procedure without evidence basis | PARTIAL | Y | P1 | Template Section 1.6 "assumptions — what must be true"; but no explicit "does this procedure have a research basis?" gate. Template Procedure-design task-type Section 3 has evidence basis requirement. |
| D — Narrow response to correction: targeted fix not broad retrospective | PARTIAL | Y | P0 | Template 5.3 Q3 "state problem different from obvious one" covers this; but the TRIGGER for 5.3 requires 5.2 to fire, which requires noticing something is unexpected; the chain is weak. Should be in CLAUDE.md. |
| E — Premature saturation: declaring done within one vocabulary tradition | Y | Y | — | Template Research task-type Section 2.6 saturation conditions + vocabulary frame check covers this |

---

## Gaps specific to mistake-logging mechanism (user question: does 5.2/5.3 actually fire?)

**Answer: No reliable mechanism.** Section 5.2/5.3 are defined in a document read before task start. Once in execution mode, there is nothing that re-triggers reading the template when something unexpected occurs.

| Gap | Priority | Fix |
|-----|----------|-----|
| 5.2 mistake-log trigger has no always-on enforcement | P0 | Add to CLAUDE.md: "If anything unexpected happens during any task execution: immediately write mistakes.md entry (class, fix, recurrence check) before continuing any other work. Do not defer." |
| 5.3 investigation trigger same problem | P0 | Same CLAUDE.md rule should include: "Immediately after 5.2 fires: answer the 4 investigation questions (5.3) in the task entry or mistakes.md before continuing." |
| Template 5.2/5.3 defines format correctly | — | Template stays; CLAUDE.md provides the trigger |

---

## Priority action list (sorted)

### P0 — Immediate fixes (breaking now)

1. **CLAUDE.md: task-recognition rule** — "Every user direction with >1 step or producing an artifact = a new task. Add to plan.md and fill template sections 0-4 before doing anything (including file reads)."
2. **CLAUDE.md: mistake-fire always-on rule** — "If anything unexpected happens during execution: write mistakes.md entry (class, fix, recurrence) BEFORE continuing. Run 5.3 investigation immediately after."
3. **CLAUDE.md: broad-retrospective trigger** — "When a correction is received: broad open-ended review first ('what am I doing wrong in general?') before any targeted fix. Test: would a different mistake come from the same review?"

### P1 — High value (next improvement cycle)

4. **Template Section 5.2/5.3: strengthen class-naming** — Add explicit step "Complete this sentence: 'This is an instance of ___ because ___.' The class must be more abstract than the instance."
5. **CLAUDE.md: fix-not-report** — "Fix visible problems inline. Do not announce, propose, or defer inline-fixable problems."
6. **Template Section 6 close: add next-obstacle naming** — "Before closing this task: name the next obstacle toward the goal and propose the next step."
7. **CLAUDE.md: don't relitigate settled decisions** — "Do not raise concerns that the user has already confirmed a decision about unless new evidence warrants it."
8. **CLAUDE.md: calibrated autonomy / make-the-call** — "Decisions within the expert domain: make the call and act. Only surface to user when: (a) irreversible, (b) genuine scope boundary, (c) information only user has."
9. **Template Synthesis task-type: add required steps** — grouping rule (4 claims), evidence-tier adjustment, dual-pass, counter-prior pass, user-questions scope.
10. **Template Research task-type: verify pass requirements** — adversarial framing, 3 dimensions, dispatch as separate agents.
11. **Template Research task-type: checkpoint writes** — "After each query batch: write findings to archive before continuing."
12. **Template Section 6: mandatory-reflection reference** — "For phase-end tasks: run mandatory-reflection.md full 9-question format before closing. External signals injection required first."

### P2 — Medium value (template growth cycle)

13. Template Section 3 (design freeze): add flip-trigger concept for provisional decisions
14. Template Section 4 (execution-ready gate): add trajectory signal check and effort classification
15. Template Section 1.2 (why now): add explicit ROI scan step
16. Template Phase 6 per-file loop: ambiguity check, scale-handling check, classification-anchor check
17. Template Audit task-type: add improve-not-remove step, one-item-at-a-time scope
18. CLAUDE.md: workflow-before-agent rule (tool selection)
19. CLAUDE.md: research-first-brainstorm (read all relevant research before proposing)
20. Template Research task-type: add disambiguation qualifier, dual-database minimum

### P3 — Low value (future maintenance)

21. Template Section 1.4: cap at 2-3 alternatives note
22. Template Research task-type: follow-up berrypicking queries
23. Session summary format in CLAUDE.md

---

## Template structure decisions (for later: template vs CLAUDE.md vs separate file)

| Decision | Recommendation |
|----------|---------------|
| 5.2/5.3 content: stays in template, trigger in CLAUDE.md | Template defines format; CLAUDE.md provides trigger. Both needed. |
| Advisor behavior (after-every-task, fix-not-report, broad retrospective): CLAUDE.md | These fire outside task execution; template cannot reach them |
| Task-recognition: CLAUDE.md session-start rule | Pre-template; must fire before template is invoked |
| Procedure-specific steps (synthesis dual-pass, research vocab frame): template task-type sections | Task-level; correct location |
| Phase-gate requirements (ENTRYPOINT phases 1-8): ENTRYPOINT.md | Phase-level; not task-level; correctly located |

---

*Created: 2026-07-02. Based on: kit-maker/CLAUDE.md, project root CLAUDE.md, kit-maker/ENTRYPOINT.md, all 11 procedure files, 8 memory files.*
