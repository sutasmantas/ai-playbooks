# Kit-Maker Plan — Archive

Completed, closed, and superseded entries from plan.md. Moved here when tasks complete so plan.md stays lean.

**Format:** task name | date | outcome | artifacts

---

## Closed active tasks

### AUDIT-02 — Mistake-finding architecture rethink
**Closed:** 2026-07-06
**Outcome:** All 5 done-criteria met. A1 auditor trigger expanded from 1/13 scenarios to 11/13. New architecture: worker passes unmediated evidence (last user message + draft response + plan.md + mistakes.md) to auditor before every response; auditor classifies event type [C/D/A/T/S] and checks per-event rule-firing evidence. Worker-mediated summary eliminated from evidence chain.
**Artifacts:** audit-02-coverage-map.md, audit-02-trigger-model.md, audit-02-tests.md
**Files modified:** CLAUDE.md (A1 rule), goal-checker-architecture.md (tables + sequencing), TASK_TEMPLATE.md (Section 6.0 note), blocking-protocol.md (State 1 resolvable-block path)
**Secondary:** M-60 logged (autonomous continuation failure + protocol conflict); blocking-protocol.md State 1 fixed; INT-06 Phase 5 formally superseded

---

## Closed interrupted tasks

### INT-01 — Fix task-template enforcement
**Closed:** 2026-07-02
**Outcome:** Done-criteria met — 3 subsequent tasks each had plan.md entries before execution started.
**Applied:** CLAUDE.md task-recognition conditional → unconditional entry rule; TASK_TEMPLATE.md Section 0 evidence checkpoint added; mistakes.md "Fix applied" format updated to require file citation.

### INT-02 — Review, deepen, and differentiate TASK_TEMPLATE.md
**Closed:** 2026-07-02
**Outcome:** All sections complete; template has genuine task-type variants, evidence-to-close gates, deep mistakes investigation, task-entry quality review mechanism.
**Applied:** TASK_TEMPLATE.md restructured with sections 0-7, evidence gates, task-type routing table.

### INT-03 — Phase 7 trial redesign (calibration task)
**Closed:** 2026-07-02
**Outcome:** Calibration result: 4/4 (coding domain too easy; near-ceiling baseline recall). Domain change to scientific paper review decided.
**Files:** kit-maker/phase7-trial/src/ (coding codebase — superseded); new trial in kit-maker/phase7-trial-v2/

### INT-04 — User's "one more thing"
**Closed:** 2026-07-02
**Outcome:** User said "nothing now." No pending item.

---

## Completed tasks

### TASK — Fix task-template enforcement (2026-07-02)
*Same as INT-01 — see above.*

### TASK — Review, deepen, and differentiate TASK_TEMPLATE.md (2026-07-02)
*Same as INT-02 — see above.*

### TASK — Phase 7 domain decision: change domain and rebuild kit (2026-07-02)
**Outcome:** Domain changed to scientific paper / systematic literature review methodology. Coding domain had near-ceiling baseline recall (4/4 twice); paper review has natural differential signal. INT-03 closed.
**Decision recorded in:** design_log.md entry 2026-07-02.

### TASK — Phase 7 trial v2 redesign: scale and complexity audit (2026-07-02)
**Status:** SUPERSEDED — replaced by comprehensive audit-dimensions task.

### TASK — Phase 7: comprehensive audit-dimensions list (2026-07-02)
**Outcome:** 38-dimension audit list across 6 categories created.
**Artifact:** kit-maker/trial-audit-dimensions.md

### TASK — Goal-directed advisor behavior: list of solutions (2026-07-03)
**Outcome:** 14 solutions produced; user approved most. See goal-achieving-ideas.md for per-idea status.
**Artifact:** kit-maker/goal-achieving-ideas.md

### TASK — RL research + final goal-directing plan consolidation (2026-07-03)
**Outcome:** (1) RL research complete — 7 mechanisms with implementations, evidence tier, build order. (2) 22 ideas → 12 distinct implementation units (conflicts resolved). (3) Consolidated plan written.
**Artifacts:**
- kit-maker/research_archive/rl-mechanisms-2026-07-03.md
- kit-maker/goal-achieving-ideas.md (updated)
- kit-maker/goal-achieving-plan.md (new)
**Queued follow-up:** RLHF runtime implications (P2), GCRL for LLM agents (P3) — both in plan.md QUEUED TASKS.

### TASK — Log M-26–M-29; check wrongly-closed research roads; assess adversarial verifier (2026-07-03)
**Outcome:** M-26–M-29 logged with full 5.3; A5 self-correction road reopened (research tested bare intrinsic self-correction, NOT separate adversarial agent); adversarial verifier (#23) added to goal-achieving-ideas.md; #24 and #25 derived via goal-model-first derivation.
**Artifacts:** mistakes.md (M-26–M-29), autonomy-coverage-audit-2026-07-02.md (A5 corrected), goal-achieving-ideas.md (#23–#26 added).

### TASK — Fix research usage: calibration principle + principles-extraction step (2026-07-03)
**Outcome:** M-30 logged; research-synthesis.md updated with calibration contract and Step 3.7 (principles extraction for ALL confidence groups).
**Artifacts:** research-synthesis.md (calibration contract + Step 3.7), mistakes.md (M-30).

### TASK — Implement CONVERT-6, A1+A2, D1 (meta-pipeline improvements batch 1) (2026-07-03)
**Outcome:** Three P1 improvements applied. CONVERT-6: post-cluster-review.md Step 5 now dispatches a fresh subagent (no access to PCR reasoning) instead of same-agent second-pass — same class as CONVERT-1/2. A1+A2: Step 4 evidence-strength routing now writes to state/rule-outcome-register.md for ALL evidence tiers — outcome statement (what improvement is expected, check after N=5 trials) and flip trigger (specific condition for revision/removal); file state/rule-outcome-register.md created. D1: TASK_TEMPLATE.md 5.3 now has Q5 (research-gap routing: if the failure class suggests a research gap → write angle + draft query to RESEARCH_ANGLES.md immediately; else state explicitly no research gap); CLAUDE.md mistake-fire rule updated from 4-question to 5-question to match.
**Artifacts:** procedures/post-cluster-review.md (Step 4 and Step 5 updated), TASK_TEMPLATE.md (5.3 Q5 added), CLAUDE.md (mistake-fire rule updated), state/rule-outcome-register.md (new file), grounding-map.md (3 new rows), propagation-map.md (post-cluster-review.md row updated)

### TASK — Implement 7 finding-to-process translation improvements (2026-07-03)
**Outcome:** post-cluster-review.md fully restructured. Step 2 now has four sub-steps: 2.0 (principle-level pre-read from synthesis.md Step 3.7), 2.1 (dimension-centric cross-match with 7 named dimensions before file identification), 2.2 (per-claim questions, added Principle extension as 5th type), 2.3 (cross-finding pass — HIGH×HIGH combinations for compound mechanisms). New Step 3.5 inserted: mandatory mechanism-options generation before any application. Step 4 restructured with Gate A (Pattern I check), Gate B (structural type routing: A/B/C), evidence-strength routing (HIGH→structural gate, CONSENSUS→labelled guideline, SYNTHESIZED→provisional+flip trigger). grounding-map.md updated (5 new rows). propagation-map.md updated.
**Artifacts:** procedures/post-cluster-review.md (major restructure), grounding-map.md, propagation-map.md

### TASK — Research-to-process pipeline: gaps and improvement list (2026-07-03)
**Outcome:** Two documents produced. (1) 7 improvements to the finding→process translation mechanism specifically (PCR Steps 2-4: principle-level cross-match, mechanism-options step, evidence-strength routing, Pattern I gate, dimension-centric cross-match, structural-addition routing, cross-finding pass). (2) 13 meta-pipeline improvements (tracking, loop-closing, research direction). Both queued in plan.md PIPELINE IMPROVEMENT BACKLOG.
**Artifacts:** kit-maker/research_archive/finding-to-process-translation-2026-07-03.md, kit-maker/research_archive/research-to-process-improvements-2026-07-03.md

### TASK — Apply CONVERT-3, CONVERT-4, CONVERT-5 (2026-07-03)
**Outcome:** Three remaining subagent conversions applied. CONVERT-3: goal-achieving-plan.md Best-of-N (#21) now has worker-generates/judge-scores/worker-selects structure. CONVERT-4: research-quality.md Query 3b now dispatches adversarial subagent (no confirmatory context) instead of same-agent self-argumentation. CONVERT-5: goal-achieving-plan.md ExpeL (#20) now dispatches blind synthesis subagent (context-stripped lesson log) before worker writes candidates. Triggers fired: propagation-map.md updated (research-quality.md row), grounding-map.md updated with 3 new rows.
**Artifacts:** goal-achieving-plan.md (Layer 2 Step 2 + Layer 4 ExpeL rewritten), procedures/research-quality.md (Query 3b rewritten), propagation-map.md, grounding-map.md (3 new rows)

### INT-07 — Goal checker / quality manager architecture (2026-07-04)
**Outcome:** Full three-agent architecture designed, calibrated, and integrated. All 8 sub-tasks complete.
**What it does:** Always-on goal checker fires before every response. Worker executes; A1 fires at task close for compliance; goal checker fires prospectively for quality direction before every response. Reads only goal model + project-state.md — no CLAUDE.md (prevents compliance-mode slippage).
**Key decisions:**
- Always-on trigger — removes recognition check that failed in all prior self-monitoring rules
- 5 rotating attack angles enforced via "last angle used" field in project-state.md
- Hard block / soft challenge / no critical flaw authority model
- CLAUDE.md Check 2 removed; replaced by always-on goal checker invocation
- Override dual record: project-state.md (ephemeral) + goal-checker-calibration.md Override log (permanent)
**Calibration:** 5/5 primary failure cases hard-blocked; 0/10 false positives. Gaps: angles 2-5 rotation not end-to-end tested; angle 3 not exercised in prototype; clean-pass scenario not confirmed.
**Artifacts:** goal-checker-architecture.md, goal-checker-prompt.md, blocking-protocol.md, worker-simplification.md, goal-checker-calibration.md, goal-checker-maintenance.md, project-state.md; CLAUDE.md (Check 2 replaced); TASK_TEMPLATE.md (Section 6.0 added)

### INT-08 — SYSTEM task type generalization (2026-07-04)
**Outcome:** SYSTEM task type procedure and routing formalized from INT-07 process.
**Deliverables:** `kit-maker/procedures/system-design.md` — 8-phase procedure, each phase annotated [U]niversal/[S]pecific/[C]alibrate. TASK_TEMPLATE.md — SYSTEM routing row added with 4 selector criteria and 3 extra requirements (calibration gate, adversarial verification, maintenance design).
**Key decision:** Phase annotations prevent N=1 over-constraint on future SYSTEM builds. Procedure provisional until second SYSTEM build validates it.

### MULTI-01 — Multi-agent quality pattern research angles (2026-07-04)
**Outcome:** 19 research angles added (178–196) across 11 clusters: output aggregation, critique loops, debate architectures, role assignment, evaluation calibration, judge panels, process reward models, framework architectures, red team, orchestrator-verifier hierarchy, context isolation.
**Side effects:** M-41 logged (enumeration collapse); CLAUDE.md enumeration-expansion rule added (always-on).
**Artifacts:** RESEARCH_ANGLES.md (angles 178-196), mistakes.md (M-41), CLAUDE.md.

### PROC-EXT-01 — Process externalization audit (2026-07-04)
**Outcome:** 18 processes mapped against SYSTEM task type 4-criteria; 3 externalization candidates identified. SAT-EVAL-01: 4/4 → built immediately. DCQC-01: 3.5/4 → next after SAT-EVAL-01. PCR-EXT-01: 3.5/4 → deferred.
**Artifact:** kit-maker/proc-externalization-audit.md

### GCAL-01 — Goal checker calibration: enumeration-shallowness case (2026-07-04)
**Outcome:** 2 new scenarios added (S11, S12). S12 is the canonical enumeration-collapse case — HARD BLOCK on "textbook enumeration collapse; discovery burden transferred back to user." Attack angle 5 (failure-pattern match) confirmed working for content-depth failures.
**Artifact:** goal-checker-calibration.md (S11, S12 added)

### Sub-items 2b, 2d, 2e, 2f — within task 2 ("Audit M-01–M-33 action items") (2026-07-03/04)
**2b (COMPLETE 2026-07-03):** Behavioral compliance test design. Detection rate 13/13; FP 0/3. Implemented as A1 in CLAUDE.md and mistake-process-solutions.md Phase 4.
**2d (COMPLETE 2026-07-04):** TASK_TEMPLATE compound done-criteria enumeration. Section 1.1 Step 5 updated: compound tasks require enumerated done-criteria per sub-goal; single aggregated criterion invalid.
**2e (COMPLETE 2026-07-04):** A1 known gap fix. Pivot-time done-criteria gate added to CLAUDE.md; A1 gap documented inline.
**2f (COMPLETE 2026-07-04):** Execution-based mechanism tests. TC-1/TC-2/TC-3 all PASSED.

### SAT-EVAL-01 — Research saturation evaluator (2026-07-04)
**Outcome:** Phases 1–8 complete + formal Section 6 close with A1 audit.
**What it does:** Fresh-subagent evaluator dispatched after every research checkpoint. Reads archive + §2.6 conditions + query list → SATURATED/NOT_SATURATED verdict. Replaces self-assessed saturation declaration. 4 saturation conditions (Condition 4 adversarial query added at close).
**Key decisions:**
- Phase 3 calibration: 9 cases (A1–A4, B1'/B2/B3, C1) — all correct; Condition 4 live-calibrated (A4)
- TASK_TEMPLATE SAT-EVAL-01 gate: 4-check format (verdict + evaluator_dispatch + conditions_confirmed with measured evidence + residual_limitation non-generic)
- Architecture risks documented: 4a (wrong-consensus), 4b (breadth/depth), 5 (self-authored thresholds), 6 (same-model limitation)
- 16 goal-checker blocks during close: 14 fixed/overridden; 2 architectural-limitation overrides at end
**A1 audit findings:** V1/V2/V3 (M-43): mistake-fire + class investigation did not fire at Blocks 11 and 13/14. V4 (M-44): alternatives rule not enforced for phase-level decisions; Condition 4 calibration incomplete at deployment (1 case vs. ≥3 threshold). Action items queued: plan.md 3f (blocking-protocol.md State 4), 3g (system-design.md phase alternatives gate), 3h (Condition 4 calibration completion).
**Artifacts:** sat-eval-01-architecture.md, sat-eval-01-prompt.md, sat-eval-01-calibration.md, sat-eval-01-boundary.md, sat-eval-01-maintenance.md, TASK_TEMPLATE.md (§2.6 + Section 6 gate), goal-checker-calibration.md (override log + retrospective)
**Queued follow-on:** DCQC-01 (done-criteria quality check at task open) is next.

### INT-05 — Paper review kit build (Phase 6) (2026-07-03)
**Outcome:** Paper-review-kit built and audited to YELLOW (no blocking gaps). 7 auditor rounds (A+B pairs). Kit covers 8 study types (RCT, observational, survey, qualitative, quasi-experimental, systematic review, mixed-methods, protocol papers — clinical trial, observational, systematic review, qualitative subtypes). Phase B has type-specific checklists + reporting standard cross-checks (CONSORT, SPIRIT, PRISMA, PRISMA-P, STROBE, COREQ/SRQR, STARD). Scale-handling with 4 required elements. Phase-gate reflection at all 5 phases. All Hard Rule 13 elements confirmed present.
**Artifacts:**
- kit-maker/paper-review-kit/CLAUDE.md
- kit-maker/paper-review-kit/procedures/review-paper.md
- kit-maker/paper-review-kit/diagnostics/last_verify_completeness.md
- kit-maker/paper-review-kit/diagnostics/last_verify_correctness.md
**Key learnings logged:**
- Coverage matrix (types × phases) must be explicit in Phase 5 before Phase 6 — missing types are found serially during auditing (7 rounds vs. what 1 matrix would have caught in 1)
- Phase-skip rules and phase-order rules must be co-located
- Standard identification in Phase A creates Phase B cross-check obligations
**Propagation-map update:** Coverage matrix gap added as P2 OPEN item.
**Done-criteria met:** (a) works on 20–50 page papers; (b) complete methodology critique with all major flaw classes covered; (c) consolidation by pattern class enforced at 4 points (immediate, Phase B check, Phase C check, Phase E merge).

### TASK — Apply CONVERT-1 and CONVERT-2 to research-synthesis.md (2026-07-03)
**Outcome:** Steps 3.5 and 3.6 in research-synthesis.md converted to subagent-based procedures. Step 3.5: fresh independent synthesis subagent instead of same-agent shuffled second pass. Step 3.6: adversarial subagent with no synthesis context instead of same-agent counter-hypothesis generation. Old "same agent" language gone; shortcut in 3.5 preserved; prior context (why each step exists) preserved. Triggers fired: propagation-map.md updated, grounding-map.md updated with 2 new rows, research backlog re-review task updated with second reason.
**Artifacts:** procedures/research-synthesis.md (Steps 3.5+3.6 rewritten), propagation-map.md, grounding-map.md (2 new rows added)

### TASK — Subagent mapping: where should kit-maker use subagents? (2026-07-03)
**Outcome:** 5 conversion recommendations (CONVERT-1 through CONVERT-5), ordered by impact. 4 already-correct subagent uses confirmed. 9 single-agent usages confirmed correct with reasoning. P1 items: Step 3.5 dual-pass and Step 3.6 counter-prior in research-synthesis.md (both explicitly acknowledge the failure mode they fail to fix).
**Artifact:** kit-maker/research_archive/subagent-task-mapping-2026-07-03.md

### TASK — Subagent benefits research: comprehensive list (2026-07-03)
**Outcome:** 26 benefits across 8 categories produced; each names the single-agent failure it prevents; each specific enough to map to a kit-maker decision point. Covers: Bias/anchoring (B1-B5), Context/freshness (B6-B8), Coverage (B9-B11), Specialization (B12-B14), Scale (B15-B17), Verification (B18-B20), Research/synthesis (B21-B23), Decision quality (B24-B26). Section on what subagents do NOT fix also included.
**Artifact:** kit-maker/research_archive/subagent-benefits-2026-07-03.md

### TASK — Fix mistake process: broad retrospective first, 5.3 action items executed (2026-07-03)
**Outcome:** M-31 (Step 3.7 scoped incorrectly) and M-32 (retrospective skipped, action items as documentation) logged; TASK_TEMPLATE.md updated with 5.3 action item status requirement ([EXECUTED] or [QUEUED]); CLAUDE.md updated with output-type trigger for plan.md entries.
**Artifacts:** mistakes.md (M-31, M-32), TASK_TEMPLATE.md (5.3 format), CLAUDE.md (output-type trigger).

### 3h — SAT-EVAL-01 Condition 4 calibration completion (2026-07-04)
**Outcome:** Done-criteria met. ≥3 Condition 4 cases total, all run against fresh subagents:
- B4 (null-result adversarial → SATURATED with false-consensus flag): ✅ PASS — evaluator correctly returned SATURATED; false-consensus flag in RESIDUAL_LIMITATION confirmed recognized
- B5 (contradicting keys found, Condition 1 not re-established → NOT_SATURATED): ✅ PASS — bonus case; evaluator correctly rejected researcher's circular "incorporated means already present" argument; confirmed Condition 4 MET does not override Condition 1 NOT MET
- B5-corrected (contradicting keys incorporated + 3 follow-up queries re-established convergence → SATURATED): ✅ PASS — evaluator correctly used Q9/Q10/Q11 as the post-incorporation convergence window; positive-contradiction variant verified
Total Condition 4 cases: 4 (A4 pre-existing + B4 + B5 + B5-corrected). Known gap from sat-eval-01-calibration.md closed.
**Key finding:** Evaluator correctly enforces Condition 4 × Condition 1 interaction — incorporating adversarial findings resets the convergence window; follow-up queries must re-establish it before SATURATED is valid.
**Artifact:** sat-eval-01-calibration.md (B4/B5/B5-corrected cases + final calibration table added)

### 3g — system-design.md Phase alternatives gate (2026-07-04)
**Outcome:** Done-criteria met. Two locations updated: (1) system-design.md Cross-cutting requirements section — "Alternatives gate" added as a named requirement with the parameter-variation test ("different theory of how mechanism should work, not different settings for same theory"), M-44 example (threshold vs. evidence-chain), and A1-checkable evidence standard (phase output with no documented alternative = observable violation). (2) TASK_TEMPLATE.md SYSTEM routing row — item (4) added: ≥1 alternative with different underlying assumption at every phase; chosen approach stated with reason; rejected alternative(s) logged; A1 checks at phase close.
**Why:** M-44 A1 finding: alternatives rule not enforced for phase-level decisions during SAT-EVAL-01 build.
**Artifacts:** procedures/system-design.md (Cross-cutting requirements section), TASK_TEMPLATE.md (SYSTEM routing row)

### DCQC-01 — Done-criteria quality check at task OPEN (2026-07-04)
**Outcome:** Phases 1–8 complete. All adversarial verification passes.
**What it does:** Evaluates draft done-criteria at TASK_TEMPLATE Section 1.1 before Section 4 (execution gate). Fresh subagent dispatch → OUTCOME-BASED or ARTIFACT-BASED verdict. If ARTIFACT-BASED: done-criteria must be rewritten before task execution can begin. Replaces self-report "done-criteria stated as outcome" with structural external verification.
**Key decisions:**
- Phase 3 calibration: 8 cases — 3/3 artifact cases, 3/3 outcome cases, multi-part rule, run-and-record trap; all correct
- Phase 4 boundary: 8 gaps found (Gap 1 post-escalation most critical); all fixed across one revision pass
- Phase 6 prototype: TOOLS-04 (real pending task) — artifact-biased draft → ARTIFACT-BASED; revised → OUTCOME-BASED; rewrite path end-to-end functional
- Phase 7 integration: 3 adversarial passes; 5 gaps total closed; final PASS
- TASK_TEMPLATE Section 4.1 checkpoint upgraded from self-report to evidence-based (DCQC-01 sign-off lookup)
- N=1 caveat: second SYSTEM build validates procedure; N=1 annotations should be reviewed after DCQC-01 field evidence accumulates
**Artifacts:** dcqc-01-architecture.md, dcqc-01-prompt.md, dcqc-01-calibration.md, dcqc-01-boundary.md, dcqc-01-simplification.md, dcqc-01-prototype.md, dcqc-01-maintenance.md; TASK_TEMPLATE.md (Section 1.1 DCQC-01 sign-off field + N/A path; Section 4.1 checkbox upgraded)

### GH-01 — Research query construction methodology (2026-07-04)
**Outcome:** All 3 done-criteria sub-goals verified PASS by fresh-agent dispatch. research-quality.md fully updated with per-source construction guidance.
**What it does:** Fills the gap between "what types of queries to run" (previously in research-quality.md) and "how to write queries in each source's syntax" (now added). Covers arXiv (field qualifiers, boolean operators, category codes, worked examples, failure modes), Semantic Scholar (API operators, API vs web decision rule, endpoints, auth, worked examples, failure modes), GitHub (search operators, quality thresholds, claim extraction priority, failure modes), web search (operators, academic vs grey-lit patterns, Google Scholar vs web decision, failure modes), failed-query recovery (diagnosis table, per-mode recovery, cross-source translation), tool decision matrix, API access guide (Semantic Scholar + arXiv + Exa.ai), adversarial calibration (A1-A7: 7 irreducible limitations), divergences (D1-D4).
**Key findings (convergent across 3+ angles):**
- C1: Vocabulary mismatch is structural baseline (80% divergence, 30-40% docs missed — Sparck Jones 1972, replicated)
- C2: Acronym expansion required for all primary terms (LLM OR "large language model")
- C3: Operator budget sweet spot = 3; 7-8+ consistently thin/empty results
- C4: `cat:cs.AI` = classical AI planning, NOT LLM research — misses majority of LLM papers; use `cs.LG + cs.CL`
- C5: API threshold = >20-30 papers
- C6: Union multiple synonym-targeted queries for fragmented vocabularies
**Critical PCR finding:** research-quality.md listed `cat:cs.AI / cat:cs.MA` as primary LLM/agent categories — directly contradicted by GH-01-A1. Fixed before implementation. REVISIT-A-09 added to REVISIT_QUEUE for prior arXiv searches using cs.AI only.
**A1 audit:** 6 violations (V1-V6), all Pattern B. M-47 logged. Immediate fixes: REVISIT_QUEUE + grounding-map updated, retroactive alternative noted. Queued: plan.md 9f (Research task alternatives gate) + 9g (TASK_TEMPLATE trigger-table rules).
**Verification:**
- Sub-goal 1 PASS: fresh agent wrote correct queries for all 4 sources with field qualifiers, named failure modes, cited guidance elements
- Sub-goal 2 PASS: 500+ paper scenario → Semantic Scholar API + arXiv API; quick 3-term check → web; both with concrete guidance citations
- Sub-goal 3 PASS: FM-1 (vocabulary mismatch) diagnosed; seed-paper method applied; 3 revised arXiv queries produced; Semantic Scholar source-switch with parameters
**Artifacts:** kit-maker/procedures/research-quality.md (large addition), kit-maker/research_archive/gh-01-a1 through gh-01-a7 + synthesis-2026-07-04.md (8 files), kit-maker/GH01_RESUME_INSTRUCTIONS.md, kit-maker/REVISIT_QUEUE.md (REVISIT-A-09 added), kit-maker/grounding-map.md (2 rows added/updated)

### KIT-PLAN-01 — Generated kit planning architecture (2026-07-04)
**Outcome:** All 4 done-criteria sub-goals verified PASS by fresh-agent dispatch.
**What it does:** Replaces ENTRYPOINT.md Hard Rule 13 multi-task tracking (enumerate tasks) with a full intake planning mechanism. At task intake: classify TRIVIAL/STANDARD/LARGE; generate complete phase skeleton before any execution; expand each phase at entry with 6 required fields; annotate every plan mutation with causal evidence; route discovered work to named structural slots.
**Key decisions:**
- Wide-at-intake skeleton required before any execution — 6 research angles converge (strongest finding)
- Adaptive annotation (plan_mutations[] with trigger_evidence + goal_unchanged fields) — 7-angle convergent null: absent from every surveyed framework; this is the primary design gap the mechanism fills
- Discovered-work routing (two-tier: current-phase queue + phase backlog) — 7-angle convergent null
- Structural enforcement over behavioral rules — 5 angles, empirical (13% compliance drop data from SWE-agent study)
- Complexity gate (TRIVIAL/STANDARD/LARGE) — A8 adversarial findings confirm planning overhead is net-negative below threshold
- Outcome-anchored phase nodes — A8: wrong high-level method selection causes cascading downstream waste
- LARGE sub-agent scoped plan format added inline after sub-goal 2 gap finding
**Research recovery:** Workflow wf_0c656816-d07 killed by mid-session user interrupt (4/8 agents); A8 + synthesis run manually. All 8 checkpoint files + synthesis in research_archive/ (kit-planning-a1-a8 + synthesis, 2026-07-04).
**Verification:**
- Sub-goal 1 PASS: fresh agent from 8 research sources independently derived all 6 core structural properties (wide-at-intake, two-level, external artifact, structural enforcement, mutation annotation, discovered-work routing)
- Sub-goal 2 PASS: fresh agent from design doc produced correct skeleton, expansion, mutation record for competitive analysis scenario; 4 minor documented gaps
- Sub-goal 3 PASS: fresh agent from ENTRYPOINT.md generated correct intake structure for content creation scenario; 5 minor documented gaps
- Sub-goal 4 PASS: fresh agent traced Pattern B (missed task) prevention to skeleton status field and global re-read; named residual gap (skeleton completeness at intake is still behavioral)
**Artifacts:** kit-planning-design.md (new), ENTRYPOINT.md Hard Rule 13 element 9 updated, propagation-map.md element 9 row updated, research_archive/kit-planning-a1-a8-2026-07-04.md + synthesis, RESUME_INSTRUCTIONS.md

### 9c — ENTRYPOINT.md kit-test value-extraction (2026-07-04)
**Outcome:** All four done-criteria met. SOFT CHALLENGE + PASS from goal checker Angle 5 (Success-criteria reversal). COMPLETE.
**What it does:** Four additions to ENTRYPOINT.md from INT-05 post-mortem — prevent the failure modes that cost 7 auditor rounds in the previous kit test:
- **Phase 5 gate — input-type coverage matrix:** Required when kit has >3 input types from Phase 2; format: each type → specific kit file/procedure step; unmapped types require explicit log entry; N/A path for ≤3 types.
- **Phase 6 gate-after-files-built — real-input validation:** ≥1 run on actual work-queue input (not toy/synthetic) before Phase 7; documented in diagnostics/test_run_01.md with pass/fail per done-criteria.
- **Phase 7 canary — required, format-specified:** "known-bad" defined via 3 criteria (exercises ≥2 pitfall_register failure modes / TYPE-aligned deliberate flaws / prior RED-finding input); PASS = ≥50% expected findings caught; anti-circular rule: TYPE-aligned (valid) vs. finding-predetermined (circular).
- **Phase 6 BUILD — subagent dispatch + goal-model transmission:** phase6-brief.md required before worktree dispatch (goal standard, done-criteria, real-input test case, high-risk files); CLAUDE.md (delegation model) also transmitted; subagent returns verdict + key learnings only.
**Key incident:** Goal checker hard-blocked criterion (iii) — "known-bad" definition absent from initial canary text; evaluation procedure was specified (expected-findings list + ≥50% match) but qualifying criteria for the input were not. Fixed with 3-criteria definition + TYPE-aligned/finding-predetermined distinction.
**Inline fix:** Anti-circular test clarified to TYPE-aligned vs. finding-predetermined per goal checker Angle 5 soft challenge.
**Artifacts:** ENTRYPOINT.md (Phase 5 gate + Phase 6 gate + Phase 6 BUILD preamble + Phase 7 canary), grounding-map.md (4 new ❌ UNRESEARCHED rows), REVISIT_QUEUE.md (methodology timeline row)

### 9e+9f+9g — TASK_TEMPLATE Research task: Pattern B structural gates (2026-07-04)
**Outcome:** All three done-criteria PASS by firing tests (agents halt, not just identify). COMPLETE.
**What it does:** Three structural gates added to TASK_TEMPLATE.md Research task type, fixing documented Pattern B failures (procedures not followed under execution pressure):
- 9e: Pre-synthesis PCR gate in Section 5 — agents must confirm PCR ran on all completed angles or write explicit exception before synthesis starts. Silent skip structurally blocked.
- 9f: Alternatives gate in Section 6 after first-pass synthesis — agents must generate ≥1 alternative with different underlying assumption before running verification.
- 9g: Procedure-file modification trigger in Section 7 — when a Research task modifies any procedure file, REVISIT_QUEUE.md methodology timeline + grounding-map.md updates are required checkboxes before closing.
**Key incident (M-50):** Goal checker hard-blocked at initial close: "done-criteria verify gate presence, not gate firing." Pattern A class. Root cause: DCQC-01 N/A incorrectly applied to mechanism-change tasks. Fix: firing tests run (3 independent execution scenarios — all agents halted correctly). Action item 9j queued: tighten TASK_TEMPLATE N/A path eligibility criterion ("does this task add/change/remove a behavioral gate? YES = N/A not eligible").
**Firing test results (behavioral evidence):**
- 9e: Agent with 3 complete angles + no PCR → correctly halted; stated must run PCR on all 3 or write explicit exception per angle before synthesis
- 9f: Agent with first-pass synthesis ready → correctly halted; stated must generate alternatives + log choice before verification
- 9g: Agent closing task after modifying research-quality.md → correctly identified both checkboxes (REVISIT_QUEUE + grounding-map) verbatim
**Artifacts:** TASK_TEMPLATE.md (3 section additions), grounding-map.md (3 new rows), REVISIT_QUEUE.md (methodology timeline entry), mistakes.md (M-50), plan.md (9j queued)

### 9j + 9i — DCQC-01 N/A tightening + propagation-map Phase 6 mechanism files (2026-07-04)
**Outcome:** Both done-criteria met. COMPLETE.
**9j:** TASK_TEMPLATE Section 1.1 N/A path updated with observable yes/no gate: "Does this task add, change, or remove any behavioral gate, rule, or procedure? YES = N/A not eligible." Fresh-agent firing test PASS — agent correctly identified that a task adding a TASK_TEMPLATE gate cannot claim N/A, quoted the M-50 note, and named why narrow-execution routing doesn't override the eligibility check.
**9i:** propagation-map.md procedures table updated — `agent-control-mechanisms.md` row added. Notes: Phase 6 now produces mechanism files as a new output class (skills, hooks config, custom agent types, settings.json permissions); tagged META-ONLY (domain kits don't generate further kits).
**Source:** 9j = M-50 action item (DCQC-01 N/A misuse on mechanism-change tasks). 9i = CTRL-01 discovered work.
**Artifacts:** TASK_TEMPLATE.md (N/A path), propagation-map.md (agent-control-mechanisms.md row)

### 9h — TASK_TEMPLATE Research task: agentType tool-requirements gate (2026-07-04)
**Outcome:** Done-criteria PASS by firing tests. COMPLETE.
**What it does:** Adds "Adds to Section 3" block to TASK_TEMPLATE Research task type. Before any `agentType` is assigned to a workflow angle: enumerate all required tools (Read/Write/Agent/Workflow/Bash); verify agentType provides them. **Default rule: omit agentType when Write, Agent, Workflow, or Bash required.** `claude-code-guide` and similar read-only types provide only Glob/Grep/Read/WebFetch/WebSearch; assigning them to checkpoint-writing angles causes silent failure (files never written; synthesis runs on missing data).
**Firing test results:**
- Scenario A: Researcher planning to assign `agentType: 'claude-code-guide'` to Write-needing angles A1/A2/A4 — agent correctly halted; identified the structural error; prescribed omitting agentType for all three
- Scenario B: Write-free angle (WebFetch/WebSearch only) — agent correctly stated the M-48 gate still fires; verification required before any assignment; default is still agentType-free unless there is a documented sandboxing reason
**Source:** M-48 — CTRL-01 workflow dispatched A1/A2/A3 with read-only agentType; checkpoint files were never written; synthesis ran from A4 only.
**Artifacts:** TASK_TEMPLATE.md ("Adds to Section 3" for Research tasks), grounding-map.md (1 new row)

### CTRL-01 — Agent control surface survey (2026-07-04)
**Outcome:** Done-criteria DC1/DC2/DC3 all PASS by fresh-agent dispatch. CTRL-01: COMPLETE.
**What it does:** Determines which Claude Code/agent control mechanisms (skills, hooks, custom agent types, permissions) the kit-maker should generate per kit type, and provides implementation specs for each in a Phase 6 mechanism pre-draft gate.
**Key decisions:**
- Default-minimal posture: absent mechanism = gap (recoverable); wrong mechanism = active harm. Asymmetry supports generating 0 mechanisms by default; gate prevents over-generation.
- Mechanism hierarchy: CLAUDE.md > Skill > Hook > Custom agent type > Permissions restriction (convergent adversarial finding CF-1)
- Phase 6 Step 0 gate: per-mechanism criteria (3 conditions each); "wrong mechanism = active harm" justifies hard gate
- Skill frontmatter requires BOTH `name:` (kebab slug) AND `description:` (one sentence) — critical correction from synthesis which showed only description:
- Custom agent format: `.claude/agents/<name>.md` — corrected from synthesis which described "CLAUDE.md files or separate instruction profiles"
- Hooks criterion (c) reworded from "tested on target platform" (not checkable at design time) to "syntax confirmed correct at generation time" — DC1 verification exposed this gap
**Research recovery:** Workflow wf_343c465a-bc5 NOT SATURATED — A1/A2/A3 used `agentType: 'claude-code-guide'` (no Write tool) → checkpoint files never written (M-48). Synthesis ran from A4 adversarial only. Documentation verification inline caught two critical synthesis errors. Action: M-48 logged + plan.md 9h queued (tool-requirements check before agentType selection).
**Verification:**
- DC1 PASS (threshold): fresh agent from Phase 6 checklist identified 4 mechanisms; correctly applied per-mechanism gate; ≥2 non-CLAUDE.md mechanisms selected with correct reasoning
- DC2 PASS (clear): fresh agent generated syntactically correct skill file with both required frontmatter fields populated with scenario-appropriate content
- DC3 PASS (clear): fresh agent generated correct hooks config (Stop event, correct settings.json format, scenario-appropriate trigger, justified vs CLAUDE.md)
**A1 audit:** 8 items; 2 genuine (M-49 logged; REVISIT_QUEUE + grounding-map fixed), 2 already-queued (plan.md sections 5/6 written), 1 fixed immediately (sections 5-7), 3 borderline addressed without new mistakes entries.
**Artifacts:** procedures/agent-control-mechanisms.md (new), ENTRYPOINT.md (Phase 6 Step 0 gate + count check), plan.md (9h + CTRL-01 Sections 5-7), mistakes.md (M-48 + M-49), REVISIT_QUEUE.md (methodology timeline row), grounding-map.md (Phase Gates row)
**Queued follow-on:** 9e (pre-synthesis PCR gate), 9f (Research task alternatives gate), 9g (TASK_TEMPLATE trigger-table rules), 9h (tool-requirements check for agentType selection) — all Pattern B fixes.

### 3f — blocking-protocol.md State 4: override requires mistake-fire (2026-07-04)
**Outcome:** Done-criteria met. State 4 now has a numbered pre-log sequence (3 required steps before any override is logged): (1) write mistakes.md entry for blocked concern with class identified, (2) run 5-question investigation, (3) feed class into override reason field. Evidence standard added: A1 checks for mistakes.md entry + class field in override log entry. Override log format updated in both project-state.md template and goal-checker-calibration.md template to require `[mistake class: CLASS]` field.
**Why:** M-43 A1 finding: at Blocks 11 and 13/14, classes were not investigated at override time — recurred within same session because the class was never named or examined.
**Artifact:** blocking-protocol.md (State 4 — "Before applying override" section added; override log format updated)

### 9b — Research synthesis kit build (Phases 1–8) (2026-07-04)
**Outcome:** Kit reached GREEN verdict from Phase 7 auditors. Phase 6 real-input validation PASS on 5-file advisor-behavior cluster. Phase 7 canary CALIBRATED PASS. 3 cross-file correctness fixes applied. 4 divergences from research-synthesis.md documented. All 3 done-criteria MET.

**Done-criteria check:**
- Kit reaches YELLOW or GREEN verdict from Phase 7 auditors: ✅ GREEN (after 3 cross-file inline fixes)
- Phase 6 real-input validation ran against Cluster E research archive: ✅ PASS (80 claims, 10 groups, 2 CONTESTED, 6 counter-priors; diagnostics/test_run_01.md written)
- Key learnings logged in plan-archive.md: ✅ (5 learnings below)
- Divergences from research-synthesis.md documented: ✅ (4 divergences; propagation task 9k queued)

**Phase 6 build rounds:**
- CLAUDE.md: Round 1 RED → Round 2 GREEN (3 completeness fixes + 3 correctness fixes: scope-explanation test definition, rule density note, goal-anchor in disagreement protocol, intake/session-start ordering conflict, counter-prior threshold, CONTESTED vs. flag-once priority)
- procedures/synthesis.md: Round 1 RED → Round 2 YELLOW (inline) → GREEN (cross-group scan absent, "independently" undefined, zero-HIGH fallback absent, write-timing inoperable in Step 6, short-form skip, scale gate conflict)
- templates/synthesis-output.md.template: Round 1 RED → Round 2 GREEN (observable violation cardinality, Action column misread, CONTESTED/GAP variants absent, repeated-pattern format, skeleton timing, footer scale-gate state)

**Phase 7 cross-file fixes (3):**
1. Threshold "empirical" consistency — "empirical" was absent from Preamble and Step 3 reference; consensus/anecdotal claims could count toward HIGH; fixed in synthesis.md + template + CLAUDE.md
2. Observable violation for counter-prior — old: "section is empty (zero entries)"; new: "number of entries fewer than number of HIGH groups"; partial-coverage failure now fires; fixed in all 3 files
3. Canary validation confirmed Fix 2 was necessary — pre-fix observable would not have caught 5 entries / 6 HIGH groups scenario

**Key learnings (5):**
1. **Cross-group contradiction scan is the most commonly missed structural gap.** Step 2 procedures default to intra-group only. The second pass — checking across groups for implication-level conflicts between conclusions — is the structural gap most likely to be omitted and most consequential when missed. Propagate to research-synthesis.md.
2. **Threshold terms must be defined in the Preamble, not where they first matter.** Shorthand introduced in early steps propagates through the procedure without a visible definition. Rule: define all precision threshold terms in the Preamble; only the defined form appears in subsequent steps.
3. **Write-timing checkpoint instructions must be placed at the step whose output they guard.** A "write X before Y" at Step 6 does not protect Steps 2–5. Placement at the end of Step 2 fires before Step 3 begins.
4. **Observable violation conditions must match the mandatory rule's exact cardinality.** "Zero entries" catches total absence; "fewer than N" catches partial-coverage failures. Rules written from the "typical case" miss the boundary case. Fix: count-parity condition, not boolean-presence condition.
5. **Template column design for status-tracking vs. result-tracking requires explicit labeling.** When a column contains "the next required action text" rather than "the result of an action," mark it explicitly — auditors and fresh agents will misread unlabeled status-tracking columns as meta-instructions.

**Divergences from research-synthesis.md (4) → 9k queued:**
- D1: Cross-group scan: research-synthesis.md Step 2 has intra-group scan only — missing cross-group pass
- D2: Threshold "empirical": research-synthesis.md HIGH definition may not include "empirical" qualifier explicitly
- D3: Observable violation for counter-prior: likely "zero entries" in upstream — same cardinality gap
- D4: Counter-prior position: research-synthesis.md uses Step 3.6 ordering; synthesis kit uses same; confirmed alignment

**Artifacts:**
- `research-synthesis-kit/CLAUDE.md` (behavioral contract, GREEN after Phase 7)
- `research-synthesis-kit/procedures/synthesis.md` (synthesis procedure, GREEN after Phase 7)
- `research-synthesis-kit/templates/synthesis-output.md.template` (output template, GREEN after Phase 7)
- `research-synthesis-kit/diagnostics/test_run_01.md` (Phase 6 real-input validation)
- `research-synthesis-kit/plan.md` (Phase 5 plan with 4 discovered-work items)
- `research-synthesis-kit/phase6-brief.md` (goal-model transmission to Phase 6 subagent)
- `research-synthesis-kit/weakness_register.md` (W-01 through W-04)
- `research-synthesis-kit/pitfall_register.md` (P-01 through P-05)
- `research-synthesis-kit/research_archive/index.md` (research source index)

**Propagation-map update needed:** research-synthesis.md changes from 9k should be logged in grounding-map.md after execution.

### 9k — Propagate 9b Phase 6/7 learnings to research-synthesis.md (2026-07-05)
**Outcome:** All 3 done-criteria PASS by fresh-agent dispatch. 4 targeted edits applied.

**Done-criteria check:**
- Step 2 requires two scan passes (intra + cross-group): ✅ PASS — "Second pass — cross-group implication scan (required)" added with explicit "Do not skip it"
- HIGH threshold requires empirical claims in both sub-cases: ✅ PASS — "Both cases require the claims to be empirical — consensus or anecdotal claims do not count toward this threshold regardless of verify confidence" added
- Counter-prior observable fires at count fewer than HIGH groups (not only at zero): ✅ PASS — "Completion check (observable violation):" section added + Step 3.6 scope changed from single group to every HIGH group

**4 edits to kit-maker/procedures/research-synthesis.md:**
1. Step 2: cross-group implication scan added after intra-group scan — separate labeled section, required, explicitly not to be skipped; explains division of labor (claim-level vs. conclusion-level contradictions)
2. Step 3 threshold note: "2 independent empirical claims at high-verify confidence, or 3 independent empirical claims at medium-verify confidence" — "empirical" now explicit in both sub-cases; added sentence "Both cases require the claims to be empirical — consensus or anecdotal claims do not count toward this threshold regardless of verify confidence"
3. Step 3.6 scope: heading changed from "dispatch an adversarial subagent to challenge the highest-confidence conclusion" to "for every HIGH-tier group in the confidence map, dispatch an adversarial subagent" + added count-parity completion check ("count must equal the number of HIGH-tier groups"; "A synthesis with 5 HIGH groups and 4 counter-prior entries is not a complete synthesis")
4. Step 3.6 execution sub-steps: "The main conclusion of the highest-confidence group" → "The main conclusion of this group" + "Repeat Steps 1–3 for each HIGH group before proceeding to Step 3.7"

**Divergence assessment:**
- D1 (cross-group scan): REAL — genuinely absent; now fixed
- D2 (empirical qualifier): PARTIALLY REAL — main HIGH definition and threshold note both had "empirical" in at least one sub-case; but the "3 at medium confidence" sub-case was implicit; now explicit
- D3 (count-parity observable): REAL — original targeted single highest-confidence group only; now per-group with count-parity check
- D4 (counter-prior position): REAL DIVERGENCE FOUND — plan-archive 9b incorrectly said "confirmed alignment"; Step 3.6 was targeting one group, not every HIGH group; this was the most significant divergence

**Source:** 9b Phase 6/7 test findings, plan-archive 9b (D1-D4).
**Artifact:** kit-maker/procedures/research-synthesis.md (4 edits to Steps 2, 3, 3.6)
**REVISIT_QUEUE update:** methodology timeline updated — research-synthesis.md 3 structural changes, scope = every future synthesis run in kit-maker.
**grounding-map update:** 3 existing ❌ UNRESEARCHED rows (9b findings) now have applied status noted; research-synthesis.md procedure-structure row (🔬 SYNTHESIZED) now notes the 3 structural additions.

### Batch 4 research + post-batch review (task 16) — COMPLETE 2026-07-05
**Outcome:** wf_6c4a7009-81f; 5 archive files; 74 claims, 20 HIGH (32% HIGH rate). Steps 4a–4d complete. 7 ENTRYPOINT.md changes applied as provisionals. Synthesis gate: OPEN (SYNTH-02 required before batch 5).
**Angles:** action-counterfactual operationalization (PARTIALLY CLOSED — structured schemas only), reversibility as grounding criterion (CLOSED — two-factor gate + tool metadata hardcoding), instruction count complexity budget (CLOSED with PROVISIONAL markers), external intention register (PROVISIONALLY CLOSED — K≤6 predicates; write discipline gap open P0), omission vs commission failure ratio (CLOSED — 34.88:1 omission dominance; recall-based metrics required).
**Artifacts:** kit-maker/research_archive/ (5 files), ENTRYPOINT.md (7 edits), kit-maker-research/post-batch-review-p1-batch4.md, kit-maker-research/batch4-resume.md

### SYNTH-02 — Instruction count cluster synthesis (task 17) — COMPLETE 2026-07-05
**Outcome:** Groups A/C HIGH confirmed. Groups B/D CONTESTED (Step 3.5 disagreement). "15-20 rule ceiling" struck (extrapolation not in paper). PROVISIONAL markers removed from ENTRYPOINT.md rule density section. Scope conditions added. Batch 5 synthesis gate CLEARED.
**Key findings:** compliance is instruction-type-conditional (behavioral ≠ declarative); count is sufficient budget signal for declarative instructions (conservative lower bound); ceiling is architecture-conditional (reasoning models 3.7× advantage at n=10, no upper bound tested); KBV rates are model-dependent (Sonnet 4.6: 99%; GPT-5.4: 8%); semantic complexity direction uncertain.
**Artifacts:** kit-maker/synthesis/SYNTH-02-instruction-count-cluster.md, ENTRYPOINT.md (PROVISIONAL markers removed + scope conditions), grounding-map.md (row 13 → VALIDATED+SYNTHESIZED)

### M-52 — Step 4b verify-note scope check gate (task 18) — COMPLETE 2026-07-05
**Outcome:** wave2-launch-instructions.md Step 4b updated with 5-keyword verify-note scan (extrapolation / not in the paper / beyond tested range / assumes / inferred). Claims matching keywords blocked from ENTRYPOINT.md even as PROVISIONAL; logged as NEEDS-SYNTHESIS-CONFIRMATION instead. M-52 logged.
**Root cause:** Evidence-tier (HIGH) captures confidence within scope; does not capture whether claim exceeds source paper scope. PROVISIONAL marker was defense mechanism (a); scope-check gate prevents entry of known-overreach claims (b). Two distinct failure modes; now both addressed.
**Artifacts:** kit-maker-research/wave2-launch-instructions.md (Step 4b gate), mistakes.md (M-52)

### SYNTH-03 — External register cross-batch conflict synthesis (task 21) — COMPLETE 2026-07-05
**Outcome:** Cross-batch conflict between OdysseyBench (batch 4, bounded K≤6 predicate register → positive step-omission) and arXiv:2603.29231 (batch 5, unbounded growing scratchpad → never improves long-horizon) resolved via architectural scope-explanation. The two papers test structurally different constructs: bounded structured predicate list (K≤6 fixed fields, does not grow) vs unbounded natural language scratchpad (add_to_memory() appends every turn + full injection every turn context window). The negative-outcome mechanism (per-step write overhead consuming step budget and context space) requires BOTH (1) register grows with each step AND (2) full register injected every turn — bounded predicate register violates condition 1. Resolution PROVISIONAL: causal variable (architecture type) not directly tested; inferred from mechanism alignment and converging indirect evidence.
**Applied:** ENTRYPOINT.md external register row: CONTESTED marker → SYNTHESIZED (PROVISIONAL); explicit positive-outcome architectural condition added (bounded K≤6 predicate list, NOT unbounded add_to_memory() scratchpad). Flip trigger stated. grounding-map.md row 15: status CONTESTED→SYNTHESIZED (PROVISIONAL), trials 1→2.
**Batch 6 gate:** CLEARED — SYNTH-03 was the only batch 6 blocker. Batch 6 P0 angles can proceed: distributional EVPI via BED-LLM (arXiv:2508.21184), write omission rate isolated metric, mandatory checkpoint writes design, annotation enforcement architecture (required-field vs trusted-server).
**Synthesis document:** kit-maker/synthesis/SYNTH-03-external-register-write-discipline-synthesis.md

### SYNTH-04 — Reversibility taxonomy synthesis — COMPLETE 2026-07-05
**Outcome:** All 4 done-criteria met. PCR PASS (no blocking items). Workflow wf_d7c857f9-50f, 4 agents.
**Key findings:** (1) `when-to-clarify` group: HIGH_CONTESTED (PLAUSIBLE_WITH_SCOPE) — HIGH holds for "uncertainty and irreversibility are orthogonal, uncertainty-only gate is structurally insufficient"; HIGH does NOT extend to prescribing a separate structural gate (evidence equally consistent with enriching EVPI with reversibility-weighted consequence terms). (2) All other 8 groups: CONSENSUS or GAP. (3) CG-02 (gradient vs. binary classification) resolved via "stack by stability" principle: Layer 1 external-boundary binary, Layer 2 domain-category, Layer 3 gradient deferred. (4) Enforcement is structural requirement: voluntary annotation degrades regardless of schema quality.
**Applied:** ENTRYPOINT.md reversibility domain-conditional row: PROVISIONAL pending SYNTH-04 → SYNTHESIZED with scope condition on `when-to-clarify`; `when-to-clarify` contested choice explicitly documented. grounding-map.md row 17: PROVISIONAL removed, trials 1→2. grounding-map.md row 19: new row added for `when-to-clarify` HIGH (scoped).
**3 principles derived:** P1: uncertainty and reversibility are orthogonal signals → mandatory annotation field independent of confidence scores; P2: voluntary annotation degrades regardless of schema → required field at registration, schema validation blocking; P3: stack classifiers by stability — external-boundary first (L1), domain-category second (L2), gradient deferred (L3).
**4 new research angles added to RESEARCH_ANGLES.md (non-blocking):** PCR-S04-A1 two-axis annotation comparison; PCR-S04-A2 reversibility-weighted EVPI extension; PCR-S04-A3 MCP protocol-level approval primitive; PCR-S04-A4 confirmation volume empirical validation.
**Synthesis document:** kit-maker/synthesis/synth-04-reversibility-taxonomy.md

### Batch 5 research + PCR + ENTRYPOINT.md edits (task 19) — COMPLETE 2026-07-05
**Outcome:** wf_370b5344-713; 3 archive files; 50 claims, 10 HIGH (20% HIGH rate). Steps 4a–4d complete. 4 ENTRYPOINT.md changes applied. grounding-map.md rows 15/17/18 updated/added; row 7 element 8 batch 5 supplement added.
**Angles:** (1) EVPI to open-ended tasks — structural epistemic circularity confirmed for creative tasks; tool-use (TRUST HIGH), structured QA (Clarify DPO HIGH), research synthesis (ARBOR+DeepRubric HIGH) all CLOSED with operationalization; (2) Write discipline failure rate — CLOSED: write failure is structural not parametric; TSS=0.87 predicts, AC=0.69 doesn't; cross-batch CONTESTED conflict with batch 4 (OdysseyBench bounded register vs. arXiv:2603.29231 unbounded scratch pad); (3) Reversibility annotation taxonomy — CLOSED composite: four-dimension schema (reversibility, idempotency, scope, data sensitivity), SAFE/LOW/HIGH tiers, MCP floor, saga compensation link; PROVISIONAL pending SYNTH-04.
**M-52 gate:** 7/35 empirical claims (20%) blocked (cross-paper contamination, fabricated taxonomies, source-contradicting claims).
**Synthesis gate:** SYNTH-03 required before batch 6 (reconcile external register cross-batch conflict). SYNTH-04 (reversibility) can defer.
**Artifacts:** research_archive/ (3 files), post-batch-review-p1-batch5.md, ENTRYPOINT.md (4 edits), grounding-map.md (3 rows)

### TASK — Work through interrupted tasks INT-01, INT-02, INT-03 (2026-07-02)
**Outcome:** All three closed. INT-01 done-criteria met. INT-02 completed. INT-03 calibration result: domain change decided.

### TASK — Log M-21 + run 5.3 + queue backlog tasks (2026-07-02)
**Outcome:** M-21 logged with full 5.3; action items queued in plan.md.

### TASK — Run Section 5.3 investigations for M-19 and M-20 (2026-07-02)
**Outcome:** 5.3 four-question investigation written in mistakes.md for M-19 and M-20 as separate entries.

---

## Completed research phases

### Phase 3.1 — Post-cluster-review for angle 162 ✅ COMPLETE 2026-06-30
Two gaps applied to research-quality.md: GS coverage instability guidance; arXiv field qualifier precision/recall tradeoffs.

### Phase 3.2 — Post-cluster-review for angle 166 ✅ COMPLETE 2026-06-30
Cross-match run — all HIGH/MEDIUM claims already applied in prior session. Near-null result.

### Phase 4.1 — Research batch 1 (angles 167, 170, 173) + PCR ✅ COMPLETE 2026-06-30
- Angle 167: Synthesis procedure validation — 5 changes to research-synthesis.md
- Angle 170: Vocabulary-frame enumeration — 3 changes to research-quality.md Step 0
- Angle 173: Behavioral testing methods — 8 claims merged into behavioral-testing archive; 2 grounding-map entries
- Synthesis angles 22-24: kit-maker/synthesis/angles-22-24-synthesis.md; HIGH: kit-validation-methodology, workflow-pattern-model-tier

### Phase 4.2 — Research batch 2 (angles 168, 174, 175) + PCR ✅ COMPLETE 2026-06-30
- mandatory-reflection.md: effectiveness conditions section added
- ENTRYPOINT + CLAUDE.md: NEVER-rule structural reinforcement, rule density constraint

### Phase 5 — Cluster B synthesis ✅ COMPLETE 2026-07-01
Output: kit-maker/research_archive/synthesis-meta-research-methodology.md
Key: research-synthesis.md Step 3.6 counter-prior pass; 2 new grounding-map SYNTHESIZED rows.

### Phase 5.5 — Trial run gate ✅ COMPLETE 2026-07-01
Domain: code review. Track: Practitioner-Consensus. Results: 0 P0 | 2 P1 | 4 P2 | 1 P3. 5 kit failure modes in design_log.md.
Finding: coding domain near-ceiling baseline → domain change to paper review.

---

## Ordered task list (historical reference — all phases complete or superseded)

**Phase 1 — Audit:** Items 10-15 worked through by 2026-07-02.
**Phase 2 — General review:** Completed.
**Phase 3 — Catch up on skipped triggers:** 3.1 and 3.2 complete (above).
**Phase 4 — Research batches:** 4.1 and 4.2 complete (above); 4.3 candidates (176-182) queued as research backlog.
**Phase 5 — Cluster B synthesis:** Complete (above).
**Phase 5.5 — Trial run gate:** Complete (above). Found coding domain too easy → domain changed to paper review.
**Phase 7 trial:** Domain changed; paper review kit now being built (INT-05).

---

### INT-09 — Task 22: Angle generation kit Phases 3–7
**Closed:** 2026-07-05
**Outcome:** VERDICT GREEN. Workflow wf_64c5e010-be5, 20 agents. Tier 1 floor met (Q1=2, Q5=3). All Tier 2 avg=3.0. condB min avg=2.625 (threshold 2.5). 3 process learnings logged to design_log.md. F1+F3 kit fixes applied inline (intake.md Source B severity gate, CLAUDE.md Rule 6 sub-rule, angle-quality.md post-gate generation requirement). F2 user scope decision open (Source B file-based vocab reference vs degraded-mode declaration).
**Files:** kit-maker/angle-gen-kit/ (all kit files), kit-maker/design_log.md (L1/L2/L3), angle-gen-kit/RESUME_INSTRUCTIONS.md

### M-53 TASK — Log mistake-fire non-fires
**Closed:** 2026-07-05
**Outcome:** M-53 logged (3 C3 non-fires from prior session + session-start skipped). M-54 logged (Agent-instead-of-Workflow, task-type-scoped gate failure). CLAUDE.md Check 1 updated with compacted-summary carry-forward. INT-06 Phase 5 blocked pending harder C3 tests.
**Files:** kit-maker/mistakes.md (M-53, M-54), kit-maker/CLAUDE.md (Check 1 updated), kit-maker/plan.md (INT-06 Phase 5 blocker entry)

---

## Current state snapshot (as of 2026-06-30 — preserved for reference)

| Area | State |
|------|-------|
| Angles completed | 162, 166, 167, 170, 173, 168, 174, 175 |
| Post-cluster-review | PCR-22-24 ✅, PCR-162 ✅, PCR-166 ✅, PCR-167/170/173 ✅, PCR-168/174/175 ✅ |
| Synthesis | Angles 22-24: complete. Cluster B: complete. |
| grounding-map | Updated through PCR-168/174/175 (2026-06-30) |
| Next phase (as of that date) | Phase 4.3 candidates 176-182 queued; trial domain change to paper review decided |
