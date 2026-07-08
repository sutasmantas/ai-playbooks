# Process Externalization Audit — PROC-EXT-01

**Date:** 2026-07-04  
**Scope:** All worker processes in CLAUDE.md and TASK_TEMPLATE.md  
**Question:** Which processes meet the SYSTEM-task 4-criteria and would benefit from externalization to a fresh subagent?

---

## SYSTEM Task 4-Criteria (from TASK_TEMPLATE.md)

A process qualifies for SYSTEM treatment if ALL FOUR apply:

| # | Criterion |
|---|-----------|
| 1 | Always-active — fires on every task/response, not only when recognized |
| 2 | Failure hard to detect post-hoc — if it misfires, we won't know easily |
| 3 | Getting it wrong risks all future work — a single bad call compounds |
| 4 | Requires calibration before trust — can't just write the rule; must verify it works |

---

## Process Inventory and Mapping

All processes catalogued from reading CLAUDE.md (2026-07-04) and TASK_TEMPLATE.md (2026-07-04).

| Process | Source | C1 Always-active | C2 Hard to detect | C3 Risks all future work | C4 Calibration required | SCORE | Already external? |
|---------|--------|-----------------|-------------------|--------------------------|------------------------|-------|-------------------|
| Goal checker | CLAUDE.md | YES | YES | YES | YES | 4/4 | YES (INT-07) |
| A1 external auditor | CLAUDE.md | YES | YES | YES | YES | 4/4 | YES (INT-06) |
| Research saturation assessment | TASK_TEMPLATE | YES* | YES | YES | YES | 4/4 | NO |
| Post-cluster-review (PCR) | TASK_TEMPLATE | YES* | YES | HIGH | PARTIAL | 3.5/4 | NO |
| Done-criteria quality check (at OPEN) | TASK_TEMPLATE | YES | YES | YES | PARTIAL | 3.5/4 | NO (goal checker covers CLOSE only) |
| Mistake investigation (5-question, §5.3) | TASK_TEMPLATE | CONDITIONAL | MEDIUM | YES | LOW | 2.5/4 | NO |
| Pivot-time done-criteria gate | CLAUDE.md | YES | YES | HIGH | LOW | 3/4 | NO (goal checker partially covers) |
| Plan.md entry rule | CLAUDE.md | YES | MEDIUM | YES | NO | 2/4 | NO (structural enforcement covers) |
| Mistake-fire detection (C3 + self-monitor) | CLAUDE.md | YES | YES | YES | YES | 4/4 | PARTIAL (A1 + C3; gap: mid-task) |
| D1 action-item closure | CLAUDE.md | CONDITIONAL | MEDIUM | MEDIUM | NO | 1.5/4 | NO |
| Broad-retrospective rule | CLAUDE.md | CONDITIONAL | MEDIUM | MEDIUM | NO | 1.5/4 | NO |
| Class-before-instance rule | CLAUDE.md | CONDITIONAL | MEDIUM | MEDIUM | NO | 1.5/4 | NO (A1 partially covers) |
| Alternatives generation rule | CLAUDE.md | YES | MEDIUM | MEDIUM | NO | 2/4 | NO |
| Enumeration expansion rule | CLAUDE.md | CONDITIONAL | MEDIUM | MEDIUM | NO | 1.5/4 | NO (A1 covers) |
| Mandatory reflection (§6.6) | TASK_TEMPLATE | YES | LOW | MEDIUM | NO | 1.5/4 | NO (A1 partially covers) |
| Saturation verify pass (refutation queries) | TASK_TEMPLATE | CONDITIONAL | YES | HIGH | MEDIUM | 2.5/4 | NO |
| Session-start 4 checks | CLAUDE.md | YES | MEDIUM | HIGH | NO | 2/4 | NO |
| Advisor-next-obstacle rule | CLAUDE.md | YES | MEDIUM | LOW | NO | 1/4 | NO |

*"Always-active" = fires at every instance of that event type, without recognition check. For research saturation and PCR, the event is "research session/cluster completes" — fires unconditionally at that event.

---

## Top Candidates

### Candidate 1: Research Saturation Evaluator — BUILD FIRST

**4-criteria verdict:** 4/4

**Why always-active fails now:** The agent decides mid-search when it's "saturated." This is self-monitored. There is no recognition-check-free trigger. The agent is under execution pressure when it makes the call.

**Why failure is hard to detect:** A premature saturation declaration looks correct — the archive exists, the angle has a confidence rating, the PCR runs, synthesis proceeds. The gap is invisible until a later angle surfaces a major claim that the earlier angle should have found. By then: synthesis has committed, kit files have been updated.

**Why it risks all future work:** Research quality is the foundation of the entire pipeline: research → synthesis → procedures → generated kit behavioral contracts. Premature saturation at angle N propagates to synthesis N, to any PCR that includes N, to any kit procedure derived from that synthesis. Every downstream decision is built on a claim that was declared HIGH without genuine saturation.

**Why calibration is required:** Documented in research_archive/adversarial-saturation-validation-methods… and research_archive/premature-saturation-failure-modes…. Premature saturation is a known, studied failure mode. The agent cannot reliably self-assess because "consecutive queries returning known claims" requires sampling correctly, which has execution-pressure failure modes.

**What externalization looks like:**

After every research session (every 3-4 queries), before the agent continues or declares saturation:
1. Write current archive state to disk (already required by checkpoint-write rule)
2. Dispatch fresh subagent with: (a) stated saturation conditions from Section 2.6, (b) current archive file, (c) list of queries run, (d) claim keys found
3. Subagent returns: SATURATED / NOT_SATURATED + reasoning
4. If SATURATED: agent can close the angle
5. If NOT_SATURATED: agent runs more queries; re-submit when next checkpoint reached

**Estimated quality gain:** HIGH. Premature saturation is a failure mode that currently has no external structural check. This closes a gap that neither A1 (fires at task close, not during research) nor goal checker (doesn't read archive files) covers.

**What calibration looks like (minimum before production use):**
- Run on 2-3 genuine premature-saturation cases (examples from research history where angle was thin)
- Run on 2-3 genuine saturated archives — should return SATURATED
- Identify where the boundary cases fail

**Task type if built:** SYSTEM — all 4 criteria met.

---

### Candidate 2: Done-Criteria Quality Check at Task OPEN — BUILD SECOND

**4-criteria verdict:** 3.5/4 (calibration partial)

**Gap the goal checker doesn't cover:** Goal checker fires at every response before delivery. It can catch "this completion claim doesn't match the done-criteria." But if the done-criteria itself was badly written at task OPEN — artifact-presence criteria disguised as outcome language — the goal checker may not catch it until the task is nearly done. The damage: the entire task ran optimizing for the wrong target.

**What externalization looks like:**

After Section 1.1 is filled and before Section 4 execution gate:
1. Worker writes the draft done-criteria + goal model to project-state
2. Dispatch fresh subagent with: (a) goal model (verbatim), (b) draft done-criteria
3. Subagent prompt: "Is this done-criteria an observable outcome — something that would be recognizable to someone who didn't do the task — or is it an artifact-presence check? For each clause: outcome language or artifact language? Could a bad output that looks complete satisfy this?"
4. If artifact language found: block; worker revises before proceeding
5. If outcome language confirmed: proceed to Section 4

**Estimated quality gain:** MEDIUM-HIGH. Catches the failure mode that A1 and goal checker both miss (artifact-presence criteria look syntactically identical to outcome criteria). Prevents a full task from running on bad done-criteria.

**Why calibration is partial:** The distinction between artifact and outcome is clear in extreme cases; boundary cases (e.g., "confidence map exists AND every HIGH finding has a kit file reflecting it") are harder to classify. Calibration set needs 3-5 boundary cases from our mistakes.md history (M-25, M-35 are good seeds).

**Task type if built:** SYSTEM — meets 3.5/4 criteria; calibration gap is manageable with a small calibration set.

---

### Candidate 3: Post-Cluster-Review as External Agent — BUILD THIRD (defer)

**4-criteria verdict:** 3.5/4

**Gap:** PCR is currently same-agent. The agent reviews its own cluster's archives — it is anchored on what it expected to find when it ran the research. A fresh agent reads the same archives without that anchoring bias.

**Specific gap:** The finding-application table (did HIGH findings make it into kit files?) requires the reviewer to independently assess which HIGH findings are present and whether they're applied. Same agent produced the research AND is checking its own application — anchoring is predictable.

**Externalization value:** HIGH but lower priority than candidates 1-2 because:
1. PCR already has structure (post-cluster-review.md procedure); externalization is an improvement, not new capability
2. Saturation evaluator prevents bad data entering the archive; PCR external catches failures in applying good data. Prevention higher value than detection.
3. PCR fires less frequently (per cluster) than saturation evaluator (per research session).

**Defer reason:** Implement after candidates 1-2 are built and calibrated. The saturation evaluator is the more systemic fix.

---

## Processes That Do NOT Qualify

**Plan.md entry rule:** Failure is visible (entry missing = evidence rule didn't fire). Doesn't meet criteria 2 or 4. Structural enforcement already works.

**D1, Broad-retrospective, Class-before-instance, Enumeration expansion, Mandatory reflection, Advisor rules:** All conditional (not always-active at the right level), low calibration requirements, or partially covered by A1. Not priority.

**Mistake-fire detection:** The detection problem (recognizing something went wrong) cannot be externalized — a fresh agent can't detect what the worker doesn't surface. A1 + C3 cover the post-hoc catches. The investigation (5-question) is a candidate but lower priority — fresh agent is useful but conditional, not always-active.

---

## Decision

### Quality Gain Estimates (grounded in observed failures)

| Candidate | Observed failure evidence | Estimated quality gain | Gain tier |
|-----------|--------------------------|----------------------|-----------|
| SAT-EVAL-01 | REVISIT_QUEUE has SUPPLEMENT items (prior research declared saturated prematurely); Research backlog re-review item shows all prior PCRs need re-run because research missed compound mechanisms — downstream symptom of premature saturation | Reduce SUPPLEMENT-rate on REVISIT_QUEUE; reduce synthesis reclassification frequency; reduce kit-file revisions after PCR catches research gaps | HIGH |
| DCQC-01 | M-06, M-25, M-35 — three documented done-criteria failures, each causing a full-task wrong-target run; artifact-criteria survived through Section 1.1 self-review and weren't caught until task close or later | Prevent artifact-criteria surviving task open; fewer tasks requiring in-flight scope correction; fewer false-complete reports | HIGH |
| PCR-EXT-01 | Plan.md Research backlog re-review item: all prior PCRs need re-run with new procedure because same-agent review missed cross-cutting implications and compound mechanisms | Fewer HIGH findings going unapplied per PCR cycle; fewer "PCR confirmed, but later work contradicts it" events | MEDIUM |

Note on propagation risk vs. quality gain: propagation risk (used above in candidate write-ups) is valid as a quality-gain proxy ONLY when upstream failure evidence exists. It applies here: REVISIT_QUEUE supplements and M-06/25/35 are observed failures, not theoretical risks.

**Build order:**

| # | What | Task type | Quality gain | Priority rationale |
|---|------|-----------|-------------|-------------------|
| 1 | SAT-EVAL-01: Research saturation evaluator | SYSTEM (4/4 criteria) | HIGH | No existing catch mechanism; persistent memory item "research saturation criterion" confirms cross-session correction; REVISIT_QUEUE supplements are latent multi-session evidence; highest compounding risk in the pipeline |
| 2 | DCQC-01: Done-criteria quality check at OPEN | SYSTEM (3.5/4) | HIGH | 3 documented failures (M-06, M-25, M-35); prevents full-task wrong-target runs; goal checker partially covers at delivery — DCQC-01 moves the catch earlier |
| 3 | PCR-EXT-01: PCR as external agent | SYSTEM (3.5/4) | MEDIUM | Improvement to existing capability; defer until 1+2 operational |

**Recommendation:** Build SAT-EVAL-01 first. No current external check exists for research saturation; the failure class has cross-session evidence (persistent memory item, REVISIT_QUEUE supplements); compounding risk is highest because research quality propagates to synthesis → procedures → generated kits. DCQC-01 second — done-criteria failures are partially covered by the goal checker at delivery; DCQC-01 moves the catch to task-open, preventing whole-task wrong-target runs.

**Tiebreaker principle (for future prioritization):** Between two candidates with similar rubric scores, use cross-session frequency evidence (persistent memory items, REVISIT_QUEUE patterns): which failure class has more multi-session corrections? Single-session frequency is only valid when the session included tasks that could generate the failure type being compared — null observations from research-free sessions do not count against SAT-EVAL-01 type candidates. A session that had no research tasks cannot produce evidence against a research-quality mechanism.

**Wave authorization note:** Building these requires system-design.md 8-phase procedure per TASK_TEMPLATE SYSTEM routing. Saturation evaluator build is a design task, not a research task — does not need wave authorization. However, it is a new mechanism build, and mechanism builds have a known overhead (calibration gate requires ≥3 known-failure cases from mistakes.md). Budget 1-2 sessions for candidate 1.

---

## Calibration Gap: Enumeration-Shallowness in Goal Checker

During the M-41 investigation, a gap was identified: the goal checker's calibration set does not include content-depth failures (enumeration shallowness, management-blind summaries). It caught structural failures (wave assignment) but not the M-41 enumeration collapse.

**Action:** Add enumeration-shallowness case to goal-checker-calibration.md.

This is logged here because it surfaced during PROC-EXT-01 investigation (adjacent problem per TASK_TEMPLATE §6.4). Plan.md entry written separately.
