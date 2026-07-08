# Kit-Maker — Design Log

Running in-session capture. Append-only during build.

---

## Session 2026-06-28

### Skeleton build — Phase 6 equivalent (first files written)

Files created:
- ENTRYPOINT.md
- procedures/mandatory-reflection.md
- procedures/class-before-instance.md
- procedures/alternatives-generation.md
- pitfall_register.md
- templates/design_log.md.template

---

### Reflection Checkpoint — Post-skeleton build — 2026-06-28

1. **Patterns not yet named:** ENTRYPOINT references files that don't exist yet: `interview/01-domain-brief.md`, `scripts/verify_prompt.md`, `templates/plan.md.template`. The skeleton has internal references to missing dependencies — this is a general pattern: building phases before building their inputs. Also: no "when to skip" sections in any procedure, which claude_process had everywhere; these prevent ritual compliance.

2. **Alternatives not considered:** The phase structure is linear (intake → research → synthesis → plan → build → verify → handoff). Alternative: hub-and-spoke / interleaved (build one skill, discover a gap, research that specific gap, build next skill). This might match actual kit-making practice better. Not decided — needs research. Keeping as open question.

3. **Adjacent problems missed:** The kit produces no example of what a good output looks like. Weakness register is named but not templated. No "canary" (known-bad kit snippet) for calibrating the kit reviewer — the ENTRYPOINT mentions this but gives no spec. The verify_prompt.md referenced in Phase 7 doesn't exist.

4. **Implications for subsequent phases:** Must write before the kit can actually run: interview/01-domain-brief.md, scripts/verify_prompt.md, templates/plan.md.template. These are blocking. Also: the `When to skip` sections for each procedure should be written in the next build session.

5. **What a critic would say is missing:** The kit has no reference output — nothing to compare your kit against. It also has no guidance on how to write kit RULES specifically (the prompt engineering deep research problem — angles 59-63 flagged DEEP RESEARCH NEEDED). Every procedure references the verifier but doesn't explain what "Completeness" vs "Correctness" looks like for kit content specifically (vs code).

---

### Discovered Work

- [2026-06-28] [Skeleton build] `interview/01-domain-brief.md` must be written — Phase 2 INTAKE references it directly and cannot run without it
- [2026-06-28] [Skeleton build] `scripts/verify_prompt.md` must be written — Phase 7 VERIFY references it; currently no auditor prompts for kit content specifically
- [2026-06-28] [Skeleton build] `templates/plan.md.template` must be written — Phase 5 PLAN references it
- [2026-06-28] [Skeleton build] `templates/weakness_register.md.template` must be written — Phase 8 HANDOFF references it
- [2026-06-28] [Skeleton build] "When to skip" sections missing from all procedures — claude_process had these; prevents ritual compliance
- [2026-06-28] [Skeleton build] Linear phase structure vs interleaved alternative needs design decision — currently linear, alternative is hub-and-spoke; wait for user input + Wave 2 research before deciding
- [2026-06-28] [Skeleton build] Canary spec needed — ENTRYPOINT mentions "if a known-bad kit example exists" but gives no spec for what it should contain
- [2026-06-28] [Skeleton build] Kit-reviewer prompts (verify_prompt.md) need to define what "completeness" and "correctness" mean for kit content specifically — not the same as code review
- [2026-06-30] [Foundational review] Synthesis canary needed — the kit needs a set of claim groups with known correct tier assignments (designed calibration cases) to validate synthesis calibration; analogous to canary_spec.md for kit auditing. Phase 6 or Phase 8 deliverable. Short-term proxy: dual-pass consistency check (Step 3.5, research-synthesis.md). Long-term: scripts/synthesis_canary.md with designed claim sets and expected tiers.
- [2026-06-30] [Foundational review] Reference-document anchored review for Phase 7 — once a known-good kit is built (example coding kit), Phase 7 should include comparison-based review (does this kit have all properties the reference kit has?) not just absolute assessment. Reduces LLM-as-judge self-preference bias for well-structured documents. Currently blocked: no reference kit exists.
- [2026-06-30] [Foundational review] Synthesis calibration research angle queued — does same-agent dual-pass catch calibration errors or do both passes produce the same wrong answer? Literature on self-consistency in LLM reasoning is relevant. This would tell us how much to weight Step 3.5 reliability signal.

---

### INT-09 Trial — Process learnings (2026-07-05)

**Verdict:** GREEN — Q1=2 (Tier 1 floor met), Q5=3 universally, all Tier 2 avg=3.0, overall condB min avg=2.625 (threshold 2.5). Kit: `kit-maker/angle-gen-kit/`.

**L1 — Phase 6 deployment-constraint gap:** The build phase validates what the kit does when all sources run. It never tests what the kit produces when Source B (web search / survey-paper probe) is unavailable — a near-universal subagent deployment constraint. The kit's VOCABULARY SELF-REPORT FLAG fires, but gives no severity estimate and no alternative procedure. Fix applied: intake.md Step 5 now has a Source B unavailability severity assessment (MODERATE vs HIGH RISK, field in intake brief, explicit halt condition).

**L2 — Rule 6 naming-to-generation gap:** The Rule 6 after-every-task self-check correctly identifies missed vocabulary traditions. But naming the gap was treated as completing the rule. No connector from "I named a missing tradition" to "I generate an angle for it." Fix applied: Rule 6 in CLAUDE.md updated with vocabulary-tradition gap sub-rule; angle-quality.md post-gate generation requirement added.

**L3 — Meta-research edge case unhandled:** When the research topic is itself a research methodology domain (e.g., "why does my research keep missing sources"), the kit has no explicit conditioning step to detect this class and adjust. The condB3 agent self-redirected via general intelligence — not via kit procedure. No structural gate exists for meta-research topics where the kit's angle-generation vocabulary is the object of study. Open — no fix applied; requires design session before adding.

**Trial design finding:** Condition A ran with full kit access, not as a no-kit baseline — differential signal unmeasurable (delta=0 on all dimensions has no interpretation). For future kit trials: Condition A must be explicitly freeform (no kit) or the trial design must pre-register that delta signal is not the measurement goal.

---

### Alternatives Considered

#### Kit phase structure: linear vs interleaved
- **Approach taken:** hybrid — Phase 3 does broad research to saturation; Phase 6 per-file loop includes a gap-check step that allows targeted research when building reveals a specific knowledge gap. Broad first, targeted during build.
- **Alternative 1:** pure linear (research fully complete before any building) — assumes complete research enables correct building; risk: research can't anticipate what building reveals
- **Alternative 2:** pure interleaved (build immediately, research only what gaps building reveals) — assumes building reveals what research is actually needed; risk: first files built on thin knowledge
- **Choice:** hybrid — gives both broad coverage AND gap-filling during build without forcing a binary
- **FLIP TRIGGER (research-dependent decision):** If Wave 2 research shows that (a) pre-build saturation causes anchoring to irrelevant findings, OR (b) interleaved research+build produces measurably better kit quality, THEN move toward pure interleaved: make Phase 3 a lightweight hypothesis-definition phase and move most research into Phase 6 gap-check steps. This trigger is the authorization to switch — defending the hybrid past this evidence is against the rules.

---

### Problem Classes Discovered (from this design session — before skeleton)

#### Scope-completion blindness
- General class: AI completes defined task scope and stops — no stepping back, no "was that all?", no alternatives, no "what does this suggest?"
- Triggering instance: after claude_process extraction, delivered output and stopped with no review
- Other instances found: no alternatives generated after any draft; fixes targeting specific examples not classes; accepting task definitions without questioning them
- Class-level fix: mandatory-reflection.md (fires at every phase end) + alternatives-generation.md (fires after any first-pass output)

#### Bandaid fixing
- General class: fixing the specific instance mentioned rather than the general class
- Triggering instance: wrote "self-review after data extraction" memory entry instead of addressing scope-completion blindness
- Other instances found: every individual memory file that captures a one-off rule instead of a class-level procedure
- Class-level fix: class-before-instance.md (stop before fixing → name class → scan → fix class)

#### Memory-as-capture failure
- General class: using cross-session memory for in-session discovery accumulation
- Triggering instance: multiple memory files written for individual mistakes during design session
- Other instances found: memory entries for project state that decays (changes session-to-session)
- Class-level fix: design_log.md as in-session capture; memory only for durable cross-session preferences

---

### Goal Model (from user — 2026-06-28)

**Broader goal:** Make kits that solve problems or tasks with high quality; improve the process, automate where possible, minimize user friction.

**Gold standard:** Perfect results with as little needed correction and feedback from the user as possible. Agent drives toward goal, user validates and makes judgment calls only.

**What the user wants to delegate:** Process control, next-step generation, problem identification, research, agenda-setting.

**What the user wants to own:** Scope decisions, contested judgment calls, approval of major architectural choices, final output validation.

---

### Open Design Questions

1. **Linear vs interleaved phases** — does research need to complete before building? Or is interleaved better? *(PROVISIONALLY CLOSED 2026-06-30: hybrid design retained for first-kit build on a novel domain — research first, gap-check during Phase 6. Rationale: intuition alone is insufficient for a novel domain the builder hasn't built before; linear research catches unknown unknowns; the Phase 6 gap-check implements demand-driven research where building reveals gaps. Flip trigger (observable, not time-based): if during Phase 6 execution ≥3 of the 5 most important kit file structural decisions are being constrained by Phase 3-4 research findings that are tangential to the actual building task — i.e., the research is forcing choices the user's domain doesn't actually need — reopen this question and move toward hub-and-spoke interleaved. "Constrained by tangential research" means: the design choice was narrowed by a finding, and the finding does not apply to the user's stated domain brief. If the flip trigger fires: Phase 3 becomes lightweight hypothesis-definition; most research moves into Phase 6 gap-check steps. Currently: trigger has not fired.)*
2. **Canary spec** — what would a known-bad kit snippet look like? What violations should it contain? *(CLOSED 2026-06-30: `scripts/canary_spec.md` exists — defines known violations and N count for auditor calibration; `scripts/verify_prompt.md` updated to reference it)*
3. **Kit-reviewer prompts** — what does "completeness" look like for kit content? What does "correctness" look like? *(CLOSED 2026-06-30: `scripts/verify_prompt.md` defines Auditor A (Completeness — "what is MISSING") and Auditor B (Correctness — "what is WRONG") with distinct failure-class framing, separate output formats, and shared 10-item checklist; dispatch protocol + skip conditions also specified)*
4. **Rule writing guidance** — how do you write kit rules that Claude reliably follows? (DEEP RESEARCH NEEDED — angles 59-63) *(OPEN)*
5. **When to skip** — what are the legitimate skip conditions for each phase? Needs explicit "when to skip / when NOT to skip even when tempted" sections in all procedures. *(CLOSED 2026-06-30: all procedures (mandatory-reflection, alternatives-generation, post-cluster-review, satisficing-and-roi, goal-directed-continuation) now have explicit "When to skip" + "Do NOT skip even when tempted" sections)*
6. **Calibrated autonomy threshold** — where exactly is the line between "proceed autonomously" vs "propose and wait"? Needs to be made explicit in goal-directed-continuation.md based on research. *(OPEN)*

---

### Research Angles Generated in This Session

- 81. [FROM GOAL-DIRECTION] Goal internalization in LLM agents — what mechanisms enable goal frame vs task frame? Agents that maintain a persistent goal model and generate their own agenda items.
- 82. [FROM GOAL-DIRECTION] Autonomous agenda generation in long-horizon agents — how do self-directed agents generate their own work queues? What research exists on this?
- 83. [FROM GOAL-DIRECTION] Proactive obstacle identification — can agents reliably spot upcoming problems before the user sees them? Research on proactive vs reactive problem-handling.
- 84. [FROM GOAL-DIRECTION] Calibrated autonomy — the proceed vs ask threshold. Research on when AI initiative helps vs creates problems. What threshold produces best user outcomes?
- 85. [FROM GOAL-DIRECTION] Goal drift detection — agents absorbed in subproblems that aren't the bottleneck. Research on detecting and correcting goal drift in multi-step AI work.
- 86. [FROM GOAL-DIRECTION] Human-AI collaboration allocation — optimal split of what AI owns vs human owns in long-horizon tasks. Which decisions benefit from human judgment?
- 87. [FROM GOAL-DIRECTION] Initiative vs deference in instruction-following models — why do models trained on instruction-following underperform at goal-driven behavior? What closes this gap?

---

### Session 2026-06-28 (continued — resumed after context compaction)

Files created since compaction resume:
- `scripts/verify_prompt.md` — Phase 7 VERIFY unblocked. Two-auditor model with shared 10-point checklist, distinct framing (what's MISSING vs what's WRONG), dispatch protocol with 3 RED cap, Phase 7 whole-kit additions, "When to skip" section, canary integration section
- `templates/plan.md.template` — Phase 5 PLAN unblocked. Includes: domain brief carry-forward, strongest-unsupported-assumption field, explicit NOT section, file manifest with testable done-criteria, riskiest-first rationale, provisional decisions table, discovered work append-only section, verify schedule
- `templates/weakness_register.md.template` — Phase 8 HANDOFF unblocked. Includes: confirmed gaps, provisional decisions still unconfirmed, coverage limits, known fragile spots, open research questions, improvement process (targeted patch, not full re-run)

#### Mandatory reflection — post-verify_prompt.md

Gaps found in verify_prompt.md immediately after writing:
1. No "When to skip" — fixed inline (lightweight single-field edits may skip full dispatch)
2. Canary integration missing — fixed inline (auditors told to test against canary BEFORE reviewing real file; calibration signal)
3. `diagnostics/` directory not in kit structure — not created yet; ENTRYPOINT should reference it

Action: resolve diagnostics/ directory gap next (either create the directory or document it as auto-created during Phase 7).

#### Discovered work (continued)

- [2026-06-28] [Resume] `diagnostics/` directory referenced in verify_prompt.md dispatch protocol but not created or documented in ENTRYPOINT — need to add to either the kit manifest or ENTRYPOINT "directories" section
- [2026-06-28] [Resume] "When to skip" sections still missing from individual procedures (mandatory-reflection, class-before-instance, alternatives-generation, goal-directed-continuation, satisficing-and-roi, provisional-decision, obstacle-navigation) — verify_prompt.md now has one but the procedures themselves don't; this was the previously-logged gap
- [2026-06-28] [Resume] plan.md.template references `{{CANARY_FILE_IF_EXISTS}}` — canary spec still unwritten; this is a placeholder in the template (acceptable for template; NOT acceptable in a generated plan)

### Session 2026-06-28 (continued — angles + research quality)

Files created:
- `scripts/canary_spec.md` — provisional canary design; provisional flip trigger on angle 67
- `lessons/_README.md` — directory populated from real runs; currently empty
- `principles/kit-design-principles.md` — 8 provisional principles from Wave 1 + claude_process extraction; flip triggers on research-dependent claims
- `procedures/research-quality.md` — per-angle research quality floor: fact+mechanism, scope, triangulation, contradicting-evidence search, null results; wired into ENTRYPOINT Phase 3

Added to RESEARCH_ANGLES.md:
- Angles 98-107: Human Problem Solving cluster — comprehensive survey, metacognition, problem representation, decomposition, expert intuition, creative methodologies, cognitive biases, System 1/2 duality, insight, improvement over time
- Angles 108-114: Research Quality cluster — systematic research methodology, search strategy documentation, bias detection, source triangulation, depth signals, null results, meta-research methodology

ENTRYPOINT Phase 3 updated: research-quality.md requirements now mandatory in dispatch.

#### Reflection checkpoint — post-research-quality session

1. **Pattern not named:** Phase 4 SYNTHESIS has no quality floor analogous to what Phase 3 now has. Well-researched angles can still produce a shallow synthesis if findings aren't combined across angles to find emergent patterns. Synthesis depth is a gap.

2. **Alternative not considered:** Simple 3-criterion quality bar (source + mechanism + scope) vs the 6-criterion bar written. Chose 6 because shallowness is the exact problem; 3 might be adequate. Not changing — provisional decision with flip trigger: if research-quality procedure causes agents to produce overhead without quality improvement, simplify to 3 criteria.

3. **Adjacent problem:** Angles 98-107 (human problem solving) will produce findings across 10 angles that need synthesis into a coherent model of "what does human problem-solving mean for AI agent kit design?" No synthesis structure planned for this yet. Should be a pre-planned Phase 4 task before those angles run.

4. **Self-referential gap:** Angles 108-114 are about research quality methodology. When those angles run, who ensures THEY are researched to the quality standard? The research-quality procedure governs the research that tells us what the procedure should say. This is acceptable (bootstrapping problem, inherent in meta-kit design) but worth naming.

#### Discovered work (continued)

- [2026-06-28] [Reflection] Phase 4 SYNTHESIS has no per-synthesis quality floor — add analogous criteria to what Phase 3 now has (cross-angle patterns, not just within-angle findings)
- [2026-06-28] [Reflection] Angles 98-107 (human problem solving) need a pre-planned synthesis structure before they run — they'll produce 10 separate angle files that need to be combined into a coherent model; plan this before dispatching those angles

### Session 2026-06-28 (continued — book research pipeline extraction)

**Root cause addressed:** I had not read the reference material the user explicitly provided (book research pipeline at C:\Users\masuta\Desktop\Coding\book\research\_raw\). This is a scope-completion blindness instance at the session level — the reference was in context from the brainstorming skill invocation, but I never extracted from it.

**Pipeline structure learned (key innovations):**
- Angle = title + 4-5 specific queries per angle (different queries → different entry points)
- Output unit = claim (key/claim text/group/evidence type/sourceUrls), not "sources found"
- Evidence classification at claim level: empirical/consensus/anecdote
- Verify pass ONLY for empirical claims — resource allocation by claim type
- Verdict structure: source confirmed, n-size named, extrapolation explicitly flagged, confidence high/medium/low with explanation
- LOW confidence can be assigned even when source is real and numbers are right (if inference structure doesn't follow from study design)
- Group minimum threshold of 4 items before separate category
- Batch size 12 for verify agents

**Files updated based on extraction:**
- `procedures/research-quality.md` — complete rewrite with angle format, claim format, evidence types, verify-pass structure, per-angle saturation mechanism
- `ENTRYPOINT.md` Phase 3 — four steps now: angle list + queries → research wave (claims not sources) → verify pass (empirical only) → whole-wave saturation check
- `RESEARCH_ANGLES.md` — format header added; angles 115-118 added from extraction
- `book_research_pipeline_extraction.md` — H16 extraction created

**Open questions added:**
- JSON vs markdown for research archive (115) — book pipeline uses JSON; kit-maker uses markdown; trade-offs not resolved
- Contradiction synthesis procedure (117) — pipeline accumulates contradictions, doesn't resolve at claim time; Phase 4 SYNTHESIS needs a procedure for this

#### Discovered work (continued)

- [2026-06-28] [Pipeline extraction] Phase 4 SYNTHESIS needs a contradiction-resolution procedure — when a group contains claims that contradict each other, the synthesis step needs explicit handling; currently no procedure for this
- [2026-06-28] [Pipeline extraction] Research archive format decision unresolved — JSON (parseable, book pipeline approach) vs markdown (human-readable, current approach); needs a decision or a hybrid design before Phase 3 runs

---

### Discovered Work Triage — 2026-06-29

Disposition of all discovered-work items logged above. Required before Phase 1 gate passes.

| Item | Status | Evidence |
|------|--------|----------|
| `interview/01-domain-brief.md` must be written | **CLOSED** | File exists, fully written — 6-question interview script with what-to-do-with-answer for each |
| `scripts/verify_prompt.md` must be written | **CLOSED** | File exists — two-auditor model, 10-point checklist, dispatch protocol, canary integration |
| `templates/plan.md.template` must be written | **CLOSED** | File exists |
| `templates/weakness_register.md.template` must be written | **CLOSED** | File exists |
| "When to skip" sections missing from all procedures | **CLOSED** | Added to all 7 procedures: mandatory-reflection, class-before-instance, alternatives-generation, satisficing-and-roi, provisional-decision, obstacle-navigation, goal-directed-continuation |
| Kit-reviewer prompts need completeness/correctness definitions for kit content | **CLOSED** | `scripts/verify_prompt.md` defines both: Completeness = what's missing; Correctness = what's wrong; 10-point checklist specific to behavioral guidance files |
| `diagnostics/` directory referenced but not documented | **CLOSED** | ENTRYPOINT Phase 7 documents diagnostics/ as auto-create-if-absent; files named explicitly |
| Phase 4 SYNTHESIS has no per-synthesis quality floor | **CLOSED** | `procedures/research-synthesis.md` exists — 5-step procedure with grouping threshold, contradiction scan (scope-explanation test), four-tier confidence map, adversarial check, user questions for CONTESTED/GAP only |
| Phase 4 SYNTHESIS needs a contradiction-resolution procedure | **CLOSED** | research-synthesis.md Step 4.2 is the contradiction scan with explicit scope-explanation test |
| Research archive format decision unresolved (JSON vs markdown) | **CLOSED** | Decided: structured markdown. research-quality.md documents the archive format; rationale: auditors (Read/Grep/Glob only) can read it directly; no extraction script required |
| `scripts/canary_spec.md` not written | **CLOSED (provisional)** | File exists. Provisional design with 8 violation types and canary template. Flip trigger: if angle 67 research (LLM-as-judge calibration ceiling) shows current violation menu is wrong, revise. Awaiting Wave 2. |
| Linear vs interleaved phase structure — design decision needed | **DEFERRED — waiting on Wave 2** | Flip trigger written in Alternatives Considered section above. Decision blocked by research. Hybrid (broad research + per-file gap-check during build) is the current approach. |
| Angles 98-107 (human problem solving) need pre-planned synthesis structure | **OPEN** | No file or plan exists for this. Wave P3 cannot dispatch those angles without one. |

**Net open items after triage: 1**
- Angles 98-107 synthesis structure — needs design before P3 wave runs

### 2026-06-29 — Angles 98-107 synthesis target written

File: `kit-maker-research/wave-p3-human-problem-solving-synthesis-target.md`

Pre-planned synthesis structure for the 10 human problem-solving angles. Defines three required output tables: (1) mechanism map — human behavior vs AI analogue, (2) encodability verdict — can a kit procedure trigger this?, (3) kit procedure candidates — mechanisms where AI is worse AND encodable. Contradiction pairs pre-identified (102 vs 105, 103 vs 102, 106 as likely un-encodable). Expected synthesis output: `research_archive/synthesis-human-problem-solving.md`.

**Discovered work items: 0 open.**

### 2026-06-29 — Angles 59-63 synthesis target written

File: `kit-maker-research/wave-p1-rule-writing-synthesis-target.md`

Pre-planned synthesis structure for the five rule-writing / prompt engineering angles. Defines three required output tables: (1) rule pattern typology — structural forms and reliability verdicts, (2) anti-pattern register — what makes rules ambiguous to Claude, (3) rule-writing specification candidates — concrete writing guidance. Pre-identified three contradiction pairs: specificity vs generality (59 vs 62), negative vs conditional rules (60 vs 61), process vs atomic rule design (63 vs 59-62). Downstream wiring: synthesis output feeds both Phase 5 PLAN (which procedures to build) and verify_prompt.md 10-point checklist validation.

Expected research character noted: mostly CONSENSUS/anecdote; GAP entries expected; weakness_register.md must state this honestly.

### 2026-06-29 — Angles 12-14 and 108-114 synthesis targets written

Files:
- `kit-maker-research/wave-p1-meta-research-synthesis-target.md` — angles 12-14 (process-level methodology)
- `kit-maker-research/wave-p1-research-quality-synthesis-target.md` — angles 108-114 (per-angle quality criteria)

Key design decision encoded in both: findings from these clusters may trigger blocking updates to `procedures/research-quality.md` before P2/P3 waves run. Each synthesis target has a Table 3/4 of update candidates with a HIGH = blocking priority flag. The two synthesis outputs should be applied together, not piecemeal.

Self-referential bootstrapping problem named: angles 108-114 were researched using the procedure they're evaluating. Both targets include honest self-assessment requirements.

### 2026-06-29 — Angles 22-24 synthesis target written

File: `kit-maker-research/wave-p1-kit-validation-synthesis-target.md`

Defines three tables: (1) validation method inventory with agent-executable flag, (2) edge case classes kits systematically miss, (3) Phase 7 update candidates. Key constraint encoded: Phase 7 must stay agent-executable — no human trial runs. If Table 3 is empty after synthesis, the gap goes into weakness_register.md ("behavioral testing against live tasks is manual"). Canary update decision wired: if angle 24 changes the violation menu, update `scripts/canary_spec.md`.

### 2026-06-29 — Diminishing returns / over-optimization batch fix

**Problem class fired:** Over-optimization past diminishing returns (pitfall_register.md). Fixes getting smaller and smaller across the last ~8 actions; satisficing-and-roi.md procedure not firing. Count promoted to 2.

Changes made:
- **pitfall_register.md** — promoted "over-optimization past diminishing returns" to full entry (count=2, guardrail documented)
- **procedures/satisficing-and-roi.md** — added "Trajectory signal" section before Part 2: if three consecutive actions were each smaller than the last, ROI check fires immediately
- **RESEARCH_ANGLES.md** — added angle 120 (diminishing returns detection, P1)
- **wave2-p1-queries.md** — angle 119 and 120 added; GitHub queries added to angles 59 and 119; angle 120 notes added to expected research character section
- **wave2-launch-instructions.md** — complete launch guide: args construction, Workflow call, archive writing, synthesis order (C→B→A→D→E), post-synthesis blocking updates, saturation check
- **wave-p1-diminishing-returns-synthesis-target.md** — synthesis target for angle 120

**Phase 1 gate status:** All discovered work addressed. 0 open items. Wave 2 fully prepped — 6 synthesis targets, all P1 angles with queries, launch instructions written. Blocked only on user authorization.

---

### 2026-06-29 — Goal-directed advisor behavior as kit output requirement

**User requirement:** Every kit the kit-maker produces must include goal-directed advisor behavior — not just the kit-maker itself. The gold standard (perfect results with minimal user correction; agent drives toward goal, user owns judgment calls) is a required output property of every generated kit, not just of the kit-making process.

Three changes made:

1. **ENTRYPOINT.md Hard Rule 13** — every generated kit must include a behavioral contract (CLAUDE.md or equivalent) with: gold standard, delegation model (what agent owns / what user owns), rule that fires after every task completion, and proactive problem surfacing. Domain-independent structure; wording adjusts per domain.

2. **templates/weakness_register.md.template** — added "Pre-identified gaps" section at the top with five known gaps that must appear in every generated kit's weakness register regardless of Phase 7 results: goal-directed behavior in generated kits, behavioral testing gap, rule-writing guidance is consensus-not-empirical, canary is provisional, kit rule compliance under novel inputs untested.

3. **RESEARCH_ANGLES.md** — added angle 119 (goal-directed advisor behavior in generated kits): minimal file set and wording for advisor behavior across domains; what transfers vs what must be domain-specific; behavioral contract decay resistance. Priority: P1.

4. **wave-p1-advisor-behavior-synthesis-target.md** — synthesis target for angle 119. Tables: (1) behavioral contract element inventory, (2) minimal file set options, (3) domain-specific wording adaptations, (4) decay resistance mechanisms. Phase 6 ordering rule encoded: behavioral contract file is always built first, before domain-specific skills.

All four P1 synthesis targets now exist:
- `wave-p1-rule-writing-synthesis-target.md` (angles 59-63)
- `wave-p1-meta-research-synthesis-target.md` (angles 12-14)
- `wave-p1-research-quality-synthesis-target.md` (angles 108-114)
- `wave-p1-kit-validation-synthesis-target.md` (angles 22-24)
Plus P3 cluster: `wave-p3-human-problem-solving-synthesis-target.md` (angles 98-107)

---

### 2026-06-29 — Direction-drift structural fix + postponed approaches logged

**Problem class fired:** Direction-drift — multiple consecutive sessions all in the same direction (research prep: angles, queries, synthesis targets, launch instructions) without questioning whether that direction was still right. Trajectory signal checks action SIZE within a session; this is a different failure mode (direction assumed correct across sessions without revalidation).

**Structural fix applied:**
1. `procedures/satisficing-and-roi.md` — added "Direction-drift check" section before trajectory signal. Fires at logical unit boundaries. Checks whether last 2-3 logical units were all in the same direction. Explicitly distinguishes direction-drift from trajectory signal. Fires at session start when continuing from a previous session.
2. `kit-maker/CLAUDE.md` — added "At every session start — direction-drift check" as the first rule in the file. Named as the most common failure mode (previous session ended in one direction, current session picks it up without questioning it).
3. `RESEARCH_ANGLES.md` — added angle 135 (direction-drift in multi-session agent work, P1). Queries into exploration/exploitation switching, project direction revalidation, meta-cognitive direction monitoring.
4. `wave2-p1-queries.md` — angle 135 added as Cluster G.
5. `wave2-launch-instructions.md` — Cluster G added to synthesis order (7th, after direction alternatives).

**Direction decision logged (from user):**
- Direction B (build minimal kit now, test immediately): User noted this may overlap with work already done. **Postponed** — revisit when building the book kit; will have clearer test case then.
- Direction C (redefine validation per-domain with user as ground truth): **Postponed** — useful when starting a domain-specific kit where user knows what "good" looks like. Not applicable to kit-maker self-research phase.
- Direction D (research continues but kit evolves in parallel): Currently partially in place via post-synthesis updates in launch instructions. **Action item: build skeleton kit output files so synthesis updates land on real files, not just "update candidates" in synthesis targets.** Next session should start here unless user redirects.

**Net discovered work from this session:**
- [ ] Build skeleton kit output files for a toy domain so Direction D is real: each synthesis cluster updates real files, not just stored findings. Kit is runnable at all times. Next session start.

---

### 2026-06-29 — Directions B/C/D executed + structural fixes from test run

**Direction C (define "working" first):**
- `kit-maker/definitions/working-kit.md` written — 5 verifiable properties of a working kit, backward trace from each to what phase must produce, shipping criteria (including: user decides, never truly done)
- Backward trace exposed 4 concrete gaps — all fixed immediately (fix before angle)

**Direction D (skeleton kit built — meeting notes summarizer):**
- `kit-maker-test/meeting-notes-summarizer/CLAUDE.md` — behavioral contract skeleton (provisional)
- `kit-maker-test/meeting-notes-summarizer/domain-brief.md` — Phase 2 output
- `kit-maker-test/meeting-notes-summarizer/procedures/summarize.md` — Phase 6 procedure skeleton
- `kit-maker-test/meeting-notes-summarizer/weakness_register.md` — pre-identified gaps + provisional decisions
- All files marked [PROVISIONAL] with update triggers pointing to research clusters

**Direction B (test run — phases 1-2 run, gaps through phase 7 analyzed):**
- `kit-maker-test/meeting-notes-summarizer/direction-b-test-log.md` — full break log
- 10 breaks identified; 5 fixed immediately; 2 need design decisions; 1 is a known gap

**Fixes applied from test run breaks #1-6, #8:**

| Break | Fix |
|-------|-----|
| #1: Phase 1 no fallback for fresh domain | Added "Fresh domain fallback" note + "Important distinction" to Phase 1 ENTRYPOINT |
| #2: Phase 1 conflates kit-maker + domain orientation | Same fix — preamble now distinguishes |
| #4: Phase 2 confirmation no format | Added structured confirmation format to Phase 2 ENTRYPOINT |
| Q2b quality dimensions: add to interview | Added to `interview/01-domain-brief.md` as question 2b |
| #6: Strongest-unsupported-assumption no guidance | Added "How to find it" section to `templates/plan.md.template` |
| #8: Provisional markers no tracking mechanism | Added provisional marker inventory to Phase 6 post-all-files gate; `provisionals.md` tracking file introduced |
| Meta-rule: angles instead of fixes | Added "Fix first, angle second" rule to `kit-maker/CLAUDE.md` |

**Fixes needing design decisions (logged for next session):**
- Break #5: No lightweight track for thin-evidence domains — full research wave ROI is poor when academic literature is thin; practitioner consensus domains should have a fast-path
- Break #10: Auditors on skeleton produce false positives — skeleton shouldn't be dispatched to auditors until research clusters have updated it; need a "skeleton vs final" state distinction

**Net discovered work:**
- [x] Design a lightweight research track for thin-evidence/practitioner-consensus domains (Break #5) — DONE: Phase 3 Step 3.0 research character assessment added to ENTRYPOINT; Practitioner-Consensus Track defined with 3-5 angles, no verify pass, mandatory weakness_register.md entry
- [x] Design a skeleton-vs-final state distinction so auditors don't fire on provisional content (Break #10) — DONE: Phase 6 step 6 (Verifier dispatch) now conditional; SKELETON state defined; provisionals.md tracking introduced; trigger added: after each synthesis cluster completes, update blocked files and dispatch auditors
- [x] Hard Rule 13 gap: generic behavioral contract not enough — domain-specific next-step patterns required — DONE: added 6th required element to Hard Rule 13 with example
- [x] Angles 126–130 added to wave2-p2-queries.md with queries
- [x] Synthesis target for angles 126–130 written: `wave-p2-adversarial-test-gaps-synthesis-target.md`
- [x] P2 synthesis targets written — all 5 clusters now have targets: github-examples, kit-limits, ai-instruction-design, claude-process-patterns, adversarial-test-gaps
- [x] ENTRYPOINT Phase 4 synthesis target list updated — P1, P2, P3 clusters all listed with file paths
- [x] Meeting-notes-summarizer research angles written (Phase 3 output for Direction D) — 4 angles, practitioner-consensus track, synthesis target structure defined
- [ ] Continue Direction D: update skeleton files as each Wave 2 synthesis cluster completes (ongoing — depends on wave running)
- [ ] Run meeting-notes-summarizer research (4 angles) — can do now without waiting for Wave 2 (separate domain)
- [x] Synthesis target for angle 135 written: `kit-maker-research/wave-p1-direction-drift-synthesis-target.md` — includes scope condition contradiction (drift check should fire BETWEEN phase types, not WITHIN a phase)

**ROI triage — 2026-06-29:**
- HIGH: meeting-notes-summarizer phases 3-8 → first complete kit → tests whether the goal is achievable → doing now
- MEDIUM (after): Wave 2 P1 launch → procedure improvements, needs session authorization
- LOW (postponed until user decides): more B test runs (diminishing returns), workflow-script alternative (reliability not quality), continued synthesis target writing (targets for research not yet running)
- Stopping criterion is ROI drop, not saturation — "continue until saturated" without ROI check could run indefinitely

**Direction-drift check (firing now):**
Last 3 logical units: (1) directions B/C/D execution + breaks #1-8, (2) breaks #5/#10 + Hard Rule 13 + P2 queries, (3) [current].
All three are in the same direction: fixing the kit based on test findings. Is this direction still right?
→ Yes — each unit produced concrete file changes to real kit procedures, not just research prep. The skeleton kit exists and is being actively improved. Direction D is live. This direction is producing value.
Next highest-ROI action: the skeleton kit needs research angles generated from its domain brief (Phase 3 Step 3.1 for meeting-notes-summarizer), so Direction D can continue to advance even without Wave 2 running. OR: write P2 synthesis targets for the remaining clusters (7-11, 18-21, 31-38, 48-55) so P2 can launch immediately after P1 completes.

---

### 2026-06-29 — Two-domain structural comparison (meeting notes + code review)

Both kits complete at 90% functional. Structural comparison findings:

**STRUCTURAL — appeared in both kits:**

1. **Systematic omission bias requires a named explicit extraction pass.**
   - Meeting notes: positional bias → final-third check
   - Code review: coverage bias (security 88-100% miss rate without prompting) → six-dimension pass
   - Every domain has a systematic omission bias. "Review thoroughly" is insufficient — the bias is in what "thorough" means by default. The procedure must name the bias and build a compensating pass.
   - **Implication:** Phase 2 domain brief must identify the systematic omission bias for the domain.

2. **Classification requires an operationalizable anchor, not judgment.**
   - Meeting notes: decision 4-field; [RATIONALE NOT CAPTURED] flag
   - Code review: "every must-fix must tie to a named policy or risk"
   - Classification rules must be binary-checkable. "Important items should be flagged" fails; "items in the final third must be verified against the extraction list" passes.
   - **Implication:** Phase 6 procedure classification rules must include the exact testable criterion.

3. **Repeated-instance consolidation rule is required in every output procedure.**
   - Meeting notes: duplicate items from multiple speakers → extract once, note both
   - Code review: comment avalanche → 1 comment per pattern, not per instance
   - Agents produce one output unit per input instance by default. The rule must override this explicitly.
   - **Implication:** Add to Hard Rule 13 checklist.

4. **Two-auditor model is validated across both extractive and generative output.**
   - Meeting notes: 4 REDs + 2 YELLOWs found and fixed
   - Code review: 2 REDs + 7 YELLOWs found and fixed
   - Completeness + consistency pair find non-overlapping error classes. Both required.

**NEW STRUCTURAL PATTERN — team policy parameterization:**
- Code review: required two external parameters before running (team test policy, severity guide). Neither derivable from the input.
- Meeting notes equivalent: "what counts as a decision?" is implicitly team-defined.
- Some domains require a small set of team-specific parameters the kit cannot infer. These should be in Phase 2 as "parameterization inputs" and in the procedure's "Before you start" section.
- **Implication:** Add "parameterization inputs" question to 01-domain-brief.md.

**Hypothesis tested:**
- Hypothesis: code review (subjective quality) would be harder to formalize than meeting notes (objective quality).
- WRONG for severity: "must-fix requires named policy or risk" is more binary than meeting notes classification decisions. Severity was easier to operationalize than expected.
- CONFIRMED for coverage: security omission harder to compensate for than positional bias — six-dimension pass is a stronger intervention than final-third check.

**Kit functional ratings:**
- Meeting notes: 90% (YELLOW on informal affirmation classification)
- Code review: 90% (full pass criteria met; known limitation on cross-cutting auth)

**Discovered work (all closed same session):**
- [x] Add "systematic omission bias" question to 01-domain-brief.md — DONE: Q4b added with examples from both kits
- [x] Add "parameterization inputs" to 01-domain-brief.md — DONE: Q5b added
- [x] Add repeated-instance consolidation to Hard Rule 13 checklist (ENTRYPOINT.md) — DONE: 6th required element added
- [x] Add classification-anchor requirement to Phase 6 procedure writing guidance — DONE: classification-anchor check added to Ambiguity check step
- [x] Phase 2 domain brief template updated with systematic omission bias + parameterization inputs fields

**Wave 2 status:** BLOCKED — awaiting user authorization.

---

### 2026-06-29 — Alternatives-generation procedural fix + 7 new Wave 2 angles queued

**Problem class fired:** Performative alternatives generation + invisible micro-decisions (two failure modes).

User feedback: alternatives-generation fires rarely; when it does, alternatives are too few and not genuinely evaluated. Root cause: (1) structural decisions made invisibly during Phase 6 drafting, so the procedure's "first-pass output" trigger never fires; (2) when it does fire, agent anchors on first approach and generates strawman alternatives to confirm it.

**Fixes applied (no research required):**

1. `procedures/alternatives-generation.md`:
   - Trigger expanded: now fires on invisible structural decisions during Phase 6 (how to organize a section, what to include/exclude, classification systems, scope boundaries) — not only on "first-pass output"
   - New Step 2b (steelmanning): before evaluating any alternative against done-criteria, required: "build the strongest case FOR this alternative — why would a domain expert choose it?" Discards alternatives that can't be steelmanned (they were strawmen)
   - Rejected alternative must name one dimension where it would have been better — if none can be named, it was a strawman; generate a better one

2. `kit-maker/CLAUDE.md`:
   - Added "Before any structural decision during Phase 6" section: decision-surfacing rule, with explicit self-check question, and steelmanning requirement

**7 new angles added to RESEARCH_ANGLES.md (136-142, P2 priority):**
- 136: Agent self-review and critique methodology
- 137: Productive iteration loops (when does iteration produce genuine improvement?)
- 138: Persona-based prompting for cognitive diversity
- 139: Calibrated skepticism in AI agents
- 140: Strawmanning vs steelmanning in agent reasoning
- 141: Alternatives generation where agent actually selects the better one
- 142: Brainstorming methodology for LLM agents

**Wave 2 angles prepped (not yet launched):** 136-142 added to RESEARCH_ANGLES.md as P2. Queries written for each. Not in wave2-p2-queries.md yet — add before launch.

**Tech spec domain: Option 1 selected (scoped research).**
Rationale: human spec-writing research transfers for "what makes a spec good" (target definition) but not for "how to produce it via LLM" (the generation layer requires LLM-specific research). Scope: spec quality dimensions + LLM-specific failure modes only; drop human spec-writing process research. Angle list revised — see Phase 3 entry for technical-spec kit.

**Discovered work:**
- [ ] Add angles 136-142 to wave2-p2-queries.md before Wave 2 launches
- [ ] Launch tech spec Phase 3 research (7 scoped angles — separate from Wave 2)

---

### 2026-06-30 — PCR-22-24: Angles 22-24 synthesis applied to ENTRYPOINT.md

**PCR trigger:** Synthesis complete for angles 22-24 (validation-methodology + systematic-failure-modes). Cross-match run per post-cluster-review.md procedure.

**Applied (score ≥4):**

1. **Minimum model tier declaration** — `agentic-workflow-small-model-collapse` (HIGH, ICML 2026). Plan-and-Execute workflows fail at 77-87% on models ≤7B. Three changes to ENTRYPOINT.md:
   - Phase 2 domain brief: added "Target model tier" field (frontier / mid-tier / small ≤7B)
   - Hard Rule 13: added "Minimum model tier declaration" as a required behavioral contract element
   - Phase 7 gate: added "Minimum model tier validated" checklist item

2. **Per-constraint validation gate** — `constraint-type-specificity` + `sequential-instruction-universal-failure` (both HIGH). Monolithic pass/fail testing is insufficient; rule-by-rule evaluation required; co-present rule interactions are a distinct failure mode. One change to ENTRYPOINT.md:
   - Phase 7 gate: added "Per-constraint validation" checklist item requiring rule-by-rule exercise

**Deferred (score <4):**

- **Repeat runs ≥3 for Phase 7 test** (`non-determinism-repeat-testing`, CONSENSUS). Score: 1×1 = 1. CONSENSUS evidence base too weak to mandate a specific repeat-count without empirical backing; will be revisited if a HIGH-confidence study on minimum repeat count for behavioral compliance testing is found.

- **Trajectory-level inspection vs output-only** (`task-completion-vs-behavioral-deviation`, MEDIUM). Score: 2×1 = 2. Valid finding but applies primarily to agentic tool-call kits; current kit-maker scope does not prescribe trajectory logging. Relevant if the kit-maker adds an agentic Phase 7 test track.

- **Code-generation first-line robustness** (`code-robustness-first-line-omission`, HIGH narrow scope). Score: 3×1 = 3 (low impact due to narrow scope — Java + small models only). Relevant when building a code-generation kit for a specific small-model target. Should appear as a note in kit-maker domain brief intake when "code generation" domain is detected.

**Step 5 second pass:** The minimum model tier change exposes a gap: the Phase 2 domain brief "Target model tier" field is now a required input, but the Phase 2 gate checklist does not verify it. However, the existing gate item "Parameterization inputs field is filled or explicitly marked 'none'" covers model tier implicitly — it could be captured there. Not adding a separate gate item; model tier is a parameterization input by nature. Null second-pass finding.

**grounding-map.md updated:** PCR-22-24 applied status noted on all affected rows. Last-updated note updated.

---

### 2026-06-30 — PCR-168-174-175: Reflection quality + compliance framing + salience applied

**Angles:** 168 (mandatory reflection quality), 174 (behavioral-rule compliance framing), 175 (user inattentiveness / critical-rule salience). 3 archives, ~113 total claims.

**Applied (score ≥4):**

1. **mandatory-reflection.md — effectiveness conditions section added** (`iclr2024-cannot-self-correct` HIGH + `external-feedback-requirement` HIGH + `persistent-memory-requirement` HIGH + `self-bias-calibration` HIGH). Score: 9.
   - Three independent peer-reviewed sources confirm intrinsic self-correction without external signal degrades performance — ICLR 2024, MIT Press TACL, NeurIPS 2023
   - Procedure's structural role (scope-completion blindness prevention) is NOT contradicted; quality-improvement assumption IS
   - Applied: "Effectiveness conditions" section added before the checkpoint — limits documented, deficit answers framed as hypotheses, external-signal injection guidance, persistence requirement

2. **Hard Rule 13 — NEVER-rule structural reinforcement** (`omission-commission-asymmetry` HIGH, 4,416 trials, 12 models). Score: 9.
   - NEVER/prohibition rules decay from ~73% to ~33% compliance at turn 16; DO/MUST rules maintain ~100%
   - Applied to ENTRYPOINT.md and CLAUDE.md Hard Rule 13: convert to commission form where possible; bookend NEVER rules; re-injection for long sessions

3. **Hard Rule 13 — rule density constraint** (`constraint-count-compliance-exponential-decay` HIGH + `MMLU-drop-17-23pct` HIGH). Score: 9.
   - Compliance drops approximately exponentially with constraint count; adding rules costs 17-23% on task accuracy
   - Applied to ENTRYPOINT.md and CLAUDE.md: 12-15 rule culling threshold; prefer fewer hard-verifiable rules; treat rule count as cost

4. **Phase 7 gate — long-session compliance item** (`governance-decay-compaction` HIGH). Score: 6.
   - Context compaction raises violations from 0% to 30-59%; behavioral instructions dropped as low-salience content
   - Applied to ENTRYPOINT.md Phase 7 gate: conditional checklist item for long-horizon kits

5. **CLAUDE.md Hard Rule 13 sync** — element 10 (minimum model tier declaration) was added to ENTRYPOINT in PCR-22-24 but never synced to CLAUDE.md. Fixed.

**Deferred (score <4 or scope-limited):**

- Reflection gating by uncertainty (`self-reflection-mixed-results`, HIGH) — Score 6, but gating mechanism (uncertainty estimator) is a research question, not a design decision available today. Queued as angle 179. Provisional note: "gating would improve hit rate; practical mechanism unresolved."
- TTS-based audit of existing checkpoints (`true-thinking-score`, HIGH) — Score 3 (impact 1 — one tool for validation). Design_log discovered work item.
- Proactive interference supersession language (`proactive-interference-working-memory-limits`, MEDIUM) — Score 4 (at threshold). Deferred: applies to versioned kit maintenance, not kit generation. Note added conceptually.
- Metacognitive prompting 5-stage structure (`metacognitive-prompting-framework`, MEDIUM) — Score 4. Deferred: worth exploring but requires a dedicated research angle (179/180 captures this).
- Cross-lingual imperative inversion (`imperative-cross-lingual-inversion`, HIGH) — No kit element contradicted; scope limited to multilingual deployment, not English-primary kits. No action needed.
- Phrasing sensitivity confirmation (`phrasing-sensitivity-drop`, HIGH, reliable@k) — CONFIRMS existing imperative-phrasing requirement from PCR-22-24; no new change needed.

**Second-pass (Step 5):**
The NEVER-rule decay finding exposes a secondary gap: the kit's own CLAUDE.md contains NEVER-language rules (e.g., "not allowed to certify its own output"). These are first-party rules, not generated-kit rules — but they're subject to the same decay. However, the kit's CLAUDE.md is re-read at session start, not used in a multi-turn agent session, so long-horizon decay is not applicable here. Null finding: no additional P0/P1 items.

**New research angles (queued to plan.md Phase 4.3 or 4.4):**
- 179: Reflection gating mechanism — uncertainty estimators for gating reflection checkpoint firing
- 180: External signal injection designs for reflection — what specific signal types improve reflection quality?
- 181: Declarative vs imperative rule specification as design axis — does "X: disabled" outperform "NEVER do X" in monolingual settings?
- 182: Rule density optimization — optimal rule count per constraint type and model family

**grounding-map.md updated:** mandatory-reflection row ❌→🔬, rows 13-14 added, row 9 extended, summary counts updated.

---

### 2026-07-01 — Phase 5: Cluster B synthesis (angles 12-14, meta-research methodology)

**Synthesis output:** `kit-maker/research_archive/synthesis-meta-research-methodology.md`  
**Archives synthesized:** meta-research-methodology-12.md (13 claims) + search-strategies-query-formulation-13.md (14 claims) + systematic-approaches-adversarial-review-14.md (21+8 gap-fill claims = 29)  
**Cluster C cross-check:** synthesis-research-quality-per-angle.md (Cluster C, 108-114) reviewed — four blocking updates already applied (adversarial query, grey-lit leg, saturation cross-source-type, verify framing). Not duplicated.

**Applied (HIGH evidence, applied immediately):**

1. **research-synthesis.md Step 3.6 — counter-prior pass (new required step)** (`hypothesis-inverted-ground-truth-15pct`, HIGH, HypoBench arXiv:2504.11524v1, all frontier models tested). All frontier models achieve <15% hypothesis discovery rate on counter-prior hypotheses at higher complexity; 93.8% on prior-aligned hypotheses. Default synthesis is heavily prior-biased. Applied: mandatory counter-prior pass added after Step 3.5 in research-synthesis.md — forces articulation of what would falsify the highest-confidence group's main conclusion before proceeding.

2. **research-quality.md — follow-up query (berrypicking) formalization** (`berrypicking-evolving-query`, HIGH, Bates 1989, 3,187 citations; `recall-bias-most-common-error`, HIGH, N=137, 78.1% recall errors). Queries that cannot evolve based on retrieved vocabulary cannot discover unknown-at-outset concepts. Applied: follow-up query guidance added to angle format — allow up to 3 follow-up queries when query 1 or 2 returns ≥3 new keys, using terminology surfaced in those results.

**Deferred:**

- Synonym expansion at query design (`search-error-rate-90-percent` MEDIUM, `query-expansion-recall-improvement` MEDIUM) — MEDIUM evidence base; net effect (recall gain vs precision loss) unquantified for AI agent research. Added to Table 3 non-blocking queue.
- Cascade review artifact reuse for Phase 7 (`cascade-peer-review-62pct-time-reduction`, HIGH, simulation N=25,000 researchers: 62.9% reviewer effort reduction, only ~4.5% quality reduction) — Phase 7 design note only; Phase 7 doesn't exist yet.
- Full dual-verify (different model family) — `peer-review-inter-reviewer-agreement` (HIGH, r=0.34) implies single-reviewer pass is essentially random. Adversarial framing is the practical mitigation; full dual-verify deferred (resource cost).

**Phase-transition check (CLAUDE.md required):**

1. Patterns not named: alternatives-generation.md cross-check per synthesis target completed — result: VALIDATES existing procedure; minor extension opportunity from <15% counter-prior finding (procedure generates alternatives but may produce prior-aligned alternatives even when instructed otherwise); no structural change needed.
2. Alternatives not considered: counter-prior pass placement (Step 3.6 vs Step 4) was an invisible decision. Step 3.6 chosen because it targets synthesis conclusions; Step 4 targets user assumptions — different scope. Reasonable; not flagging as contested.
3. Adjacent problems missed: Phase 4.3 (angles 176-182) vs Phase 5.5 (trial run) ordering is ambiguous — both are "after Phase 5 complete." Phase 5.5 is explicitly the next gate; Phase 4.3 can run before or after the trial. User decision needed on ordering.
4. Best possible version: counter-prior pass and berrypicking formalization are both applied. Table 1 PRISMA verdicts filled. The synthesis target check ("cross-check alternatives-generation.md") is complete.

**Discovered work:**
- [ ] Phase 5.5 trial run design — user authorization and task selection needed (resource-intensive; max 2 trials total; target 2-4hr expert-judgment task in coding domain)
- [ ] Phase 4.3 vs Phase 5.5 ordering decision — proceed with trial first, or run Phase 4.3 research batch first? Candidate angles 176-182 are P2 priority
- [ ] Cascade review artifact reuse — Phase 7 design note when Phase 7 kit-building begins

**grounding-map.md updated:** 2 reference rows updated (12-14 status), 2 new SYNTHESIZED rows added (berrypicking + single-reviewer limitation), research-synthesis.md row trial count 1→2, summary counts updated (SYNTHESIZED ~21→~24).

---

### 2026-07-01 — Phase 5.5: Trial Run Gate (coding domain — Practitioner-Consensus Track)

**Research:** 3-angle PCR wave on code review domain. Track: Practitioner-Consensus (no verify pass — documented). 68 total claims across 3 archives.

Archives written to `trial-coding-review-kit/research_archive/`:
- `ai-code-review-systematic-omissions.md` (22 claims — LLM false rejection patterns, security coverage gaps, cross-cutting omissions, reviewer biases from LLM use)
- `expert-code-review-quality.md` (28 claims — expert vs novice strategy differences, comment quality, review scope effects, severity classification, automated vs human quality gap)
- `security-omissions-code-review.md` (18 claims — CWE coverage gaps, confirmation bias framing collapse, SAST false negative distribution, resolution gap)

**Synthesis:** `trial-coding-review-kit/synthesis.md` — confidence map:
- omission-categories: **HIGH** (10+ independent HIGH empirical claims)
- reviewer-behavior: **HIGH** (15+ HIGH empirical; eye-tracking lab studies + large observational)
- automated-vs-human: **HIGH** (3 independent HIGH empirical, 2026 data)
- review-scope-effects: **HIGH** (2 HIGH empirical, n=25k+ each)
- severity-classification: CONSENSUS
- cross-cutting-omissions: CONSENSUS
- comment-quality-dimensions: CONSENSUS

Counter-prior pass (Step 3.6): reviewer-behavior group. Counter-hypothesis: knowledge gaps, not cognitive bias, are primary driver — process interventions have near-zero effect. Supporting evidence found: partially (`reviewer-experience-not-predictive-security`, `individual-differences-dominant`). Reveals scope condition: security-specific passes reduce knowledge barrier but cannot eliminate it for zero-background reviewers.

User assumption contradicted: "LLM can do most of this review" — CONTRADICTED (HIGH). LLM finds 10% of what humans find (`llm-vs-human-quality-gap` HIGH). Kit architecture must be: SAST pre-pass → LLM structured extraction passes → human judgment.

**Kit generated:**
- `trial-coding-review-kit/CLAUDE.md` — behavioral contract (all 10 Hard Rule 13 elements); includes framing control rule (diff before PR metadata), 5-pass structure, scale handling (400-LOC gate), finding format with counter-check requirement
- `trial-coding-review-kit/procedures/review-procedure.md` — checklist form of all 5 passes with evidence basis table

**Trial task:** `kit-maker/scripts/research-wave.js` (~336 LOC, 1 directory, no SAST available)

**Trial output:** `trial-coding-review-kit/trial-review-output.md`

**Results:** 0 P0 | 2 P1 | 4 P2 | 1 P3 — all confirmed by four false rejection check.

Key findings from the review:
1. `allNewAngles → RESEARCH_ANGLES.md` gap (P1): New angles from research waves are collected in `return.summary.newAngles` but never written to RESEARCH_ANGLES.md — only a text instruction is returned. Systematic reliability gap in the kit-maker's own research pipeline.
2. `args` null guard missing (P1): `args.angles` throws if workflow invoked without args parameter.
3. `pipeline()` used for synchronous data transformation (P2): archive phase uses the async pipeline() orchestration primitive for a sync `.map()` operation — architectural category error.
4. Archive phase never writes files (P2): `phase('Archive')` label is misleading; writing is delegated to caller via text instruction string.
5. Semantic dedup gap unmitigated (P2): acknowledged in code comment, no structural mitigation.

**Kit failure modes discovered during trial:**

1. **Security pass: no fast-path for non-security code** — 8 security categories + anti-satisficing requirement ran fully for a ~300 LOC internal workflow script with zero external-facing attack surface. Cost: ~equal to all other passes combined for this file type. Fix needed: "attack surface triage" step before security pass; non-applicable classes should be documentable as "N/A — [reason]" without running the full check.

2. **Four false rejection check: overhead for structural findings** — the check fires for ALL P0/P1 findings. For obvious structural bugs (null guard, missing write step), constructing a counterexample was mechanical overhead. The check pays off for logic-error findings based on reasoning about code behavior, not for pattern-based structural findings. Fix: narrow the check trigger to "P0/P1 findings based on behavioral reasoning" rather than all P0/P1.

3. **SAST absent: scrutiny not increased** — kit says "if SAST is available, inject; if not, proceed to Pass 1." When SAST is absent, security pass should be MORE careful (no backstop), but the procedure doesn't escalate. Fix: add "if SAST is absent: flag this to reviewer; the security pass is the only automated coverage."

4. **Hard Rule 1 structural gap (pre-identified before trial)**: Kit-maker's Hard Rule 1 ("no kit content without Phase 3 research") blocks generating a trial kit quickly. The 3-angle PCR track was an ad-hoc workaround requiring explicit designer intervention. The kit-maker needs a formalized "trial mode" provision.

5. **Archive file write delegation is a recurring pattern** — research-wave.js, the archive phase, and the `allNewAngles` gap all share the same root: the kit-maker's workflow scripts generate artifacts and return them with text instructions, but don't write them. The trial surfaced this as P1 in the kit under review, which means it's a class-level problem in the kit-maker itself.

**Phase 5.5 done-criteria check:**
- [x] Real output produced from real task using kit — review output written to trial-review-output.md
- [x] At least one failure mode documented — 5 kit failure modes logged above + 7 review findings
- [x] Findings routed to design_log.md — this entry

**Phase 5.5 COMPLETE 2026-07-01.**

**Discovered work from Phase 5.5:**

- [x] Attack surface triage step needed in CLAUDE.md security pass — DONE 2026-07-01: 30-second triage step added before Pass 1 categories; scopes out Injection/Auth/Race/Business Logic when no external input surface
- [x] Four false rejection check: narrow trigger to behavioral-reasoning findings — DONE 2026-07-01: each of 4 check criteria made binary-checkable (produce specific input+trace for Logic Error; quote verbatim for Added Requirements; state all three parts for Boundary Error; paraphrase+quote match for Spec Misread)
- [x] When SAST absent: add "security pass is sole automated coverage" escalation — DONE 2026-07-01: pre-pass updated to log miss-rate increase (~47%) and recommend flagging to PR author
- [x] Hard Rule 1 trial mode provision — DONE 2026-07-01: ENTRYPOINT.md Hard Rule 1 updated with parenthetical: "PCR track and condensed research for validation trials are authorized research paths — NOT violations of this rule"
- [x] Archive file write delegation (class-level) — DONE earlier in session: all 3 research-wave scripts (research-wave.js, batch1.js, batch2.js) fixed; archive phase now writes files directly via parallel write agents + persist-angles agent

---

### 2026-07-01 — Phase 7 Trial: Second Trial Run (3-condition code review)

**Trial type:** Second and final trial (max 2 total). Ground-truth comparison methodology.

**Test file:** `trial-coding-review-kit/phase7-test/upload-service.js` (~290 LOC, Node.js upload service)

**4 embedded issues (designed from low-detection-rate categories):**
1. TOCTOU race condition — `reserveSlot()` + `persistUpload()` (fs.existsSync → separate writeFile, non-atomic)
2. XSS — `buildUploadNotification()` template literal refactor removed escapeHtml() calls; PR description says "readability refactor, no logic changes" (framing bias test)
3. Missing auth on external webhook path — `processUpload()` has no auth check; documented as webhook endpoint in JSDoc; handleUpload() has auth but processUpload() does not
4. Silent error swallow — `readMetadata()` catch block returns undefined; callers access `meta.size` without null-check → TypeError

**Three conditions run in parallel (workflow wf_b47fd864-7f1):**
- Condition A: freeform, no PR framing
- Condition B: PR description shown first ("template literal refactor, no logic changes" framing)
- Condition C: full kit procedure (CLAUDE.md 5-pass structure, diff-first rule)

**Results:**

| Issue | A | B | C |
|-------|---|---|---|
| TOCTOU | FOUND | FOUND | FOUND |
| XSS | FOUND | FOUND | FOUND |
| Missing auth | FOUND | FOUND | FOUND |
| Silent error | PARTIAL | FOUND | FOUND |

**Recall:** A=3/4 · B=4/4 · C=4/4
**False positives:** A=10 · B=5 · C=9
**Prediction accuracy:** A=2/4 · B=1/4 · C=4/4

**Key surprises:**

1. **Framing bias effect did NOT manifest for XSS in Condition B.** The primary research claim under test (97%→3.6% detection collapse under misleading framing) was not confirmed. Condition B found XSS with full root cause and fix despite "readability refactor" framing. Most likely explanation: escapeHtml() is defined 3 functions above buildUploadNotification and visibly unused — a local-signal cue that overrides framing bias. The research effect likely applies to implicit or cross-file security issues where no single-file signal is present.

2. **TOCTOU found by all 3 conditions.** Predicted LIKELY MISSED by A and B; all 3 found it. The race is between two functions in the same file with visible proximity (~20 lines). Cross-file or cross-service TOCTOU would be harder and more kit-dependent.

3. **Issue 4 (silent error) was the only issue where A showed a gap.** A produced PARTIAL — found the catch block but traced only to processUpload's `if (!meta) return null` guard, not to handleUpload's unguarded `meta.size` access. B and C both traced the full caller chain.

4. **Kit did not reduce false positives.** A=10, B=5, C=9 — the four-false-rejection check did not visibly filter false positives. Many "false positives" were real quality concerns (path traversal in admin functions, non-atomic index.json writes, deprecated rmdir) — the kit's thoroughness may be producing real additional findings that were scored as false positives because they weren't in the ground truth.

**Workflow failure:** The write-results agent (8th agent) hit the session limit. Recovered manually from task output. Root cause: all file writes deferred to terminal agent. Fix: per-phase checkpoint writes in future workflows (memory saved: `feedback_workflow_checkpoint_writes.md`).

**Full results:** `trial-coding-review-kit/phase7-trial-results.md`

**Kit implication discoveries:**

- Framing control rule scope: diff-first rule is structurally correct; its practical impact may be smaller than research predicted for local-signal XSS. Most relevant for implicit/cross-file security issues.
- Race condition check: same-file TOCTOU is found without the kit; the check adds delta for cross-file and cross-service races.
- Omission pass: needs harder trigger — "trace all callers of functions that can return null/undefined" — to produce consistent delta over freeform.
- Four-false-rejection check: needs minimum-evidence threshold (must produce input-to-failure trace, not just name a vulnerability class).

**Phase 7 trial done-criteria check:**
- [x] Ground truth document written before trial ran
- [x] All 3 conditions run and scored
- [x] Scoring table filled and compared against predictions
- [x] Failures and surprises documented
- [x] Kit implications documented

**Discovered work from Phase 7 trial:**

- [x] Framing control rule in CLAUDE.md: scope condition added (line 30) — "most effective for implicit/cross-file security issues; limited impact for local-signal XSS with visible in-file cues" ✅ applied
- [x] Race condition check in CLAUDE.md: narrowed to cross-function/cross-file temporal gaps (line 64); same-file TOCTOU with visible proximity noted as found without the kit ✅ applied
- [x] Omission pass: "trace all callers of functions that can return null/undefined" added as explicit null/undefined propagation check (line 80) ✅ applied
- [x] Four-false-rejection check: minimum-evidence gate added before the four-check fires (line 121) ✅ applied

**Phase 7 verdict (2026-07-02): INVALID — trial redesign required**

Trial produced near-zero differential signal (A=3/4, B=4/4, C=4/4; false positives A=10 C=9). This is not a YELLOW result — it is an invalid trial. The experimental design had 8 fundamental flaws that prevented it from measuring kit delta (see M-17 in mistakes.md). Phase 7 does not pass until a valid trial runs. Phase 8 files (weakness_register.md, pitfall_register.md) written on 2026-07-02 are PROVISIONAL — they reflect trial data that is not valid evidence.

Trial design failures enumerated:
1. Single file (290 LOC) — kit's cross-cutting and multi-entry-point checks cannot fire
2. All 4 issues had strong local signals — discoverable without structural scaffolding
3. Research track was Practitioner-Consensus (3 archives, verify skipped) — below kit-maker standard
4. Framing was too mild for frontier model (escapeHtml visible in same file cancels it)
5. LLM heavily saturated on coding tasks — baseline recall too high to measure delta
6. N=1, no statistical power — cannot distinguish signal from noise
7. Conditions possibly cross-contaminated (sequential runs, same session)
8. Contradicted HIGH research claims treated as calibration findings, not experimental failure signal

**What a valid Phase 7 trial requires (per redesigned criteria in plan.md):**
- Multi-file codebase (6-8 files, ~1000 LOC)
- Issues requiring cross-file reasoning that produces no local single-file signal
- Research track: full standard track (not Practitioner-Consensus)
- Adversarial framing that redirects attention to the wrong concern class
- N≥3 per condition, fresh sessions (no cross-contamination)
- Baseline model recall on embedded issues <80% without kit (pre-trial calibration run)
- Done-criteria must include validity check: "Does the design have conditions where the baseline model will fail?"

**Original verdict struck — YELLOW invalid. Phase 7 remains open.**

---

**Original (now superseded) YELLOW verdict notes (kept for record):**

All 4 ground-truth issues found by Condition C. Key caveats at time of verdict:
- Framing control effect is scope-limited to implicit/cross-file issues; local-signal XSS (visible utility, unused in-file) detected despite misleading framing — scope condition documented in kit
- False positive rate did not decrease under kit (A=10, C=9); minimum-evidence gate added to address this; many "false positives" were real quality findings not in ground truth — this may reflect thorough coverage rather than noise
- Omission pass produced delta over freeform only on Issue 4 (silent error swallow); null/undefined propagation trigger added to make this consistent
- B outperformed A on Issue 4 — possible mechanism: "no logic changes" framing prompted harder caller tracing; insufficient data to confirm (N=1 trial)

---

### 2026-07-02 — Phase 8 HANDOFF: trial-coding-review-kit

**Phase 8 gate:** research_archive/ ✅ + weakness_register.md ✅ + pitfall_register.md ✅

All three Phase 8 artifacts present in `trial-coding-review-kit/`.

**weakness_register.md contents:**
- Pre-identified gaps: 5 (goal-directed advisor behavior, behavioral testing gap, consensus-not-empirical rules, N=1 trial coverage, SAST recovery figure)
- Confirmed gaps from Phase 7: 3 (framing effect scope, false positive rate unchanged, omission pass delta N=1)
- Provisional decisions: 4 (97%→3.6% stat, SAST 47%, 400-LOC threshold, race condition miss "regardless of effort")
- Coverage limits: 7 (cross-repo, IaC, DB migrations, binary, visual output, pentest scope, multi-language)
- Known fragile spots: 4 (framing rule, race condition check, null/undefined propagation, minimum-evidence gate)
- Open research questions: 4 (framing effect vs. model tier, omission pass across multiple trials, evidence gate threshold, 400-LOC gate for structured passes)

**pitfall_register.md contents:**
- Active entries: 4 (satisficing on first security finding, PR description read before pass completion, four-check as evidence-gathering, consolidation blindness)
- Anti-patterns (awareness vocabulary): 4 (false-negative asymmetry, experience-plateau, file-position attention, diff-scope blindness)

**Phase 8 gate closed.** trial-coding-review-kit is at HANDOFF complete.

---

### 2026-07-04 — Process externalization audit (PROC-EXT-01) + Goal checker calibration (GCAL-01)

#### Discovered Work — SAT-EVAL-01, DCQC-01, PCR-EXT-01

- [2026-07-04] [PROC-EXT-01] **SAT-EVAL-01** — Research saturation evaluator: fresh subagent fires at every research checkpoint (every 3-4 queries); reads archive + stated saturation conditions + query list → SATURATED/NOT_SATURATED verdict. Meets all 4 SYSTEM criteria. Priority 1. Evidence: persistent memory item "research saturation criterion"; REVISIT_QUEUE supplements as cross-session failure evidence; NO existing external check. Task entry: plan.md SAT-EVAL-01.
- [2026-07-04] [PROC-EXT-01] **DCQC-01** — Done-criteria quality check at task OPEN: fresh subagent reads draft done-criteria + goal model → outcome-based / artifact-based verdict; fires before Section 4 execution gate. Meets 3.5/4 SYSTEM criteria. Priority 2. Evidence: M-06, M-25, M-35 (three full-task wrong-target runs); goal checker partially covers at delivery, DCQC-01 moves catch to task-open. Task entry: plan.md DCQC-01.
- [2026-07-04] [PROC-EXT-01] **PCR-EXT-01** — PCR as external agent: deferred. Improvement to existing capability; lower priority than new-check mechanisms. Evidence: plan.md Research backlog re-review item.
- [2026-07-04] [GCAL-01] **Goal checker calibration: S12** — Canonical enumeration-collapse calibration case. S11 had confound (routing vs. enumeration concern). S12 (behavioral compliance + N-examples-in → N-outputs-out scenario) produced HARD BLOCK specifically on enumeration collapse. Attack angle 5 confirmed working for this failure class.

#### Design Decisions

**Tiebreaker principle for SYSTEM build prioritization:**
When two externalization candidates have similar rubric scores, use cross-session frequency evidence to break the tie: which failure class has more multi-session corrections (persistent memory items, REVISIT_QUEUE patterns)? Single-session frequency is ONLY valid when the session included tasks that could generate the failure type being compared. A session with no research tasks cannot provide valid frequency evidence against a research-quality mechanism (null observation, not zero frequency).

**How SAT-EVAL-01 was prioritized over DCQC-01:**
- SYSTEM rubric: SAT-EVAL-01 = 4/4, DCQC-01 = 3.5/4
- PROC-EXT-01 session had no research tasks → 0 observed research-saturation failures in that session is a null observation
- Cross-session evidence: "research saturation criterion" is a persistent memory item; REVISIT_QUEUE has supplement entries; no equivalent persistent item for done-criteria failures
- Build order: SAT-EVAL-01 first (detection gap + highest compounding risk) → DCQC-01 second (moves existing check earlier) → PCR-EXT-01 third (deferred)

**Full audit:** `kit-maker/proc-externalization-audit.md` — 18 processes mapped, 3 candidates with SYSTEM criteria scores, quality gain estimates, observed failure evidence, and build order rationale.

---

### 2026-07-04 — Architectural insight: Plan as primary enforcement mechanism

**Identified by:** User, during review of KIT-PLAN-01 gap.

**The insight:**
Distributed process triggers (mistake-fire rule, goal-checker, saturation check, etc.) all require *recognition* — the agent must notice that the trigger condition is met. This recognition step has failed 45 documented times. The pattern is consistent: rules exist, triggers are defined, recognition fails under execution pressure.

The structural alternative: **a comprehensive plan that expands at phase entry** does not require recognition. The agent follows the plan. If the plan is detailed enough, everything that needs to happen is listed as a required step. The plan is *checked*, not *noticed*.

**Three-property planning architecture (design principle for KIT-PLAN-01):**
- **Wide at intake (mandatory):** When given a goal, the first output is a full-width plan structure — all phases anticipated, all major work categories listed, even if sections are labeled "TBD / expand at entry." The skeleton exists before any execution starts. Purpose: prevents phases from being added mid-execution only when noticed.
- **Deep at phase entry (mandatory):** Before starting any phase, that section of the plan must be expanded to full detail — sub-steps with explicit done-criteria, what-to-check items, discovered-work routing, what-could-go-wrong notes. No phase begins without full expansion.
- **Adaptive during execution (mandatory):** The plan evolves as results arrive. Tasks can be removed, restructured, or re-scoped when prior results change what's needed. Some tasks are explicitly conditional on prior results and should be tagged as such at planning time: "Phase C: depends on Phase B result — if B shows X, execute as planned; if B shows Y, restructure to [alternative]." A stiff plan that gets followed regardless of what's discovered is as bad as no plan — it runs unnecessary steps and misses that dependencies changed.

**Design tension — adaptive vs. permissive:**
Adaptive must not become an excuse to skip hard work. Plan changes require explicit reasoning: a dropped or restructured task is not deleted but annotated with "removed/changed because: [what result made this necessary]." This is the same pattern as goal-checker overrides — the agent can change course, but must explain why, and the explanation is traceable. The distinction between legitimate evolution (result changed what's needed) and illegitimate abandonment (step is inconvenient) is enforced by the annotation requirement, not by agent judgment alone.

**Why this matters:**
The plan replaces distributed triggers as the enforcement mechanism. A rule that says "run an adversarial query" requires the agent to recognize it's time to run one. A plan step that says "Q3: adversarial query — [framing] — done when: contradicting keys logged OR null result documented" fires every time because it's in the sequence being executed. The difference: recognition-based vs. sequence-based enforcement.

**Implication: "if it's not in the plan, it can't be done."**
This is stronger than "plan.md entry required for every task." It means: the plan at the phase level must be comprehensive enough that an agent following only the plan (no CLAUDE.md, no separate rules) would hit every required step. CLAUDE.md behavioral rules remain, but they are a safety net, not the primary mechanism.

**Current state:** Generated kits have CLAUDE.md rules and a fixed procedure. Neither produces a wide-then-deep plan. TASK_TEMPLATE.md is the kit-maker's own equivalent — but it is not generated into kits. This is the KIT-PLAN-01 gap.

**Connection to existing ideas:** goal-achieving-ideas.md Idea #1 (goal-derived backlog generation) is adjacent for the kit-maker's own process. KIT-PLAN-01 extends this to generated kits and adds the depth-at-phase-entry requirement.

---

### 2026-07-04 — Discovered Work from M-46 (KIT-PLAN-01 A1 audit)

**Item 1 — Cross-audit violation recurrence tracking (P3)**
The A1 audit at KIT-PLAN-01 close found 8 violations. Every prior A1 audit has produced similar findings. There is no mechanism for tracking whether violations of the same class recur across consecutive audits — which would signal that a fix applied between tasks did not work. Without cross-audit tracking, the violation log accumulates entries without producing a trend signal. Low priority; the process works without it; surfacing the gap is the value here.

**Item 2 — Apply KIT-PLAN-01 state-machine approach to kit-maker's own execution (P3)**
M-46 Q1 surfaces: the kit-maker designed structural enforcement (state machine, required fields, phase gates) for generated kits but does not use it itself. TASK_TEMPLATE.md is the kit-maker's equivalent of a planning mechanism, but it's still a checklist with recognition-based triggers, not a state machine. Applying the three-property planning architecture (wide-at-intake skeleton, deep-at-phase-entry expansion, adaptive annotation) to the kit-maker's own operation would be the meta-application of KIT-PLAN-01. Not wave 2 territory — design question. Status: P3 (design insight logged; no implementation until wave 2 research is unblocked and higher-priority items addressed).

**Task:** plan.md KIT-PLAN-01.

---

### 2026-07-04 — 9b: Research Synthesis Kit — Phase 2 Domain Brief

**Phase 1 gate:** All discovered-work items P3 or addressed. No open items blocking Phase 2. Pitfall risks: behavioral contract decay (promoted, count ≥ 2), scope-completion blindness, bandaid fixing.

**Domain brief:**
- **Domain:** Research synthesis — given a set of research archive files (angle outputs from systematic search), produce a structured synthesis with confidence ratings, evidence calibration, and counter-prior analysis.
- **Kit produces:** synthesis.md with: confidence map table (HIGH/MEDIUM/CONSENSUS/LOW per claim group), key findings by cluster, explicit contradiction resolution, ≥1 counter-prior hypothesis per cluster, decision-driving questions for the user.
- **User:** Kit-maker operator (expert in research methodology; has completed angle files; gap: no structured procedure for moving from "pile of findings" to "defensible synthesis with calibrated confidence").
- **Quality dimensions:** (1) Evidence calibration — HIGH claims have ≥2 independent sources; CONSENSUS explicitly distinguished from empirical. (2) Completeness — no silent claim omissions. (3) Counter-prior coverage — explicit attempt to surface what falsifies main conclusions. (4) Actionability — each synthesis group links to a design decision. (5) Conflict resolution — contradicting claims acknowledged and resolved (not merged or silently dropped).
- **Systematic omission bias:** Confirming evidence. Agents group convergent findings and under-represent divergent/contradicting/null results. Compensating steps: mandatory counter-prior pass + explicit contradiction log.
- **Parameterization inputs:** Research archive directory path; cluster definition (which angle files); priority design decisions.
- **Realistic input scale:** 5–15 angle files, 100–200 claims per cluster. Hard case: 20+ angles, 250+ claims, multiple HIGH-confidence contradictions.
- **Visual output:** No.
- **Target model tier:** Frontier (Claude Opus/Sonnet class).
- **Success condition:** First synthesis run on "advisor behavior" cluster (5 angle files: goal-directed-advisor-behavior, assertive-compliance, direction-level-pivot-signals, direction-drift-detection, diminishing-returns-detection) produces output with: no silently dropped contradicting HIGH claim; CONSENSUS not labeled as empirical; ≥1 counter-prior hypothesis.
- **Out of scope:** Primary research (searching/extraction); academic publication format; synthesis of non-research content.
- **Broader goal:** Force precision about research-synthesis.md. Divergences from current procedure are findings. Test Phase 6 build process with 9c improvements.

**Alternatives considered for domain framing:**
- Broader framing (generic synthesis kit for any workflow): steelman = wider applicability; rejected because divergences from our procedure are the key finding — a generic kit won't expose them.
- Narrower framing (synthesis quality checker only): steelman = simpler scope; rejected because building is more instructive than checking.
Decision: specialized for our synthesis workflow. First-person domain expert as user.

**Phase 2 gate:** Domain brief confirmed (builder = domain expert; confirmation gate self-applied). Quality dimensions listed. Systematic omission bias filled. Parameterization inputs listed. Realistic input scale filled. Visual output: No. Goal model written below.

**Goal model:**
- Broader goal: build a synthesis kit that forces explicitness about what "good synthesis" means; produce a kit the kit-maker can reuse for future synthesis tasks.
- Gold standard: synthesis output passes the 3 success criteria on first try; no auditor RED findings on the core procedure.
- Agent owns: procedure execution, confidence classification, contradiction identification, counter-prior generation.
- User owns: design decisions driven by synthesis findings; judgment calls on contested contradictions; scope of which cluster to synthesize.

---

### 2026-07-05 — Discovered Work from PCR re-run (restructured procedure)

**Item 1 — Recall-biased authoring vs. density constraint (P2 — design conflict)**
`berrypicking-evolving-query` (HIGH, N=137 reviews) implies rule-recall authoring: when writing behavioral contract rules, order or phrase rules so the most-used rules appear at recall-favorable positions (last, first, repeated). Score 6 (above apply threshold). NOT applied because it directly conflicts with `constraint-count-compliance-exponential-decay` (HIGH validated) — recall-biased rule authoring increases token count and rule density, which density constraint penalizes. Two HIGH findings in tension: recall benefit vs. density cost. Requires a design session to determine whether retrieval benefit outweighs density cost for kit-maker's specific rule architecture before any rule changes.
Cluster: meta-research (synthesis-meta-research-methodology.md). Claim key: `berrypicking-evolving-query`.

**Item 2 — Missed synthesis application: external completion manifest (P3)**
`bdi-intention-commitment-reconsideration-planning`, `seqbench-recall-precision-divergence-path-length`, `mast-14-failure-modes-task-verification-11pct`, and `sagallm-saga-pattern-partial-completion-rollback` (angle-176 cluster) collectively support an external completion manifest recommendation. This recommendation was not applied in synthesis Step 6 when the angle-176 cluster was originally synthesized. CONSENSUS evidence tier, score <4 for PCR application, but the miss at synthesis Step 6 should be logged as a gap in synthesis completeness. Suggests synthesis Step 6 (action list) should more explicitly prompt for external-mechanism candidates when sequential task completion findings are present.
Cluster: angle-176.

**Item 3 — `omission-completion-state` principle extension to research-synthesis.md Step 3.6 (P3)**
The `omission-completion-state` principle (angle-176) — enumerated-set items at last position receive disproportionate omission — has a natural extension to research-synthesis.md Step 3.6 counter-prior passes: the last HIGH group in the confidence map (by position) is most likely to be omitted from the counter-prior pass. The count-parity observable already catches this, but the principle suggests adding a last-group specific prompt or reordering so the last group is processed first. CONSENSUS tier derivation — deferred pending empirical evidence that position effect applies to this specific context.
Cluster: angle-176. Claim key: `omission-completion-state` derivation.

**Item 4 — Second-pass borderline output specialist targeting (P2 — partial gap)**
`cascade-peer-review-62pct-time-reduction` × `peer-review-statistical-expert-biggest-gain` compound (research-quality cluster): second pass should target borderline outputs AND use specialist framing for NEVER-rule decay detection. PCR-RQ-A3 applied specialist detection for NEVER rules. Full cascade targeting principle (second pass specifically targeting borderline outputs in any review context) not yet a design principle in Phase 7. Score borderline; deferred for Phase 7 design session when cascade review architecture is specified.
Cluster: research-quality.

