# DCQC-01 — Done-Criteria Quality Check: Simplification Accounting

**Phase:** 5 (Simplification accounting)
**Status:** COMPLETE (2026-07-04)
**Purpose:** Map what existing gates become redundant when DCQC-01 is added; and which are kept with the reason.

---

## Summary result

**Zero existing gates are removed.** DCQC-01 fills a structural gap — no prior gate covered done-criteria quality prospectively with external verification. One existing checkpoint is upgraded from self-report to evidence-based.

---

## Gates evaluated

### Q1: Which existing gates fire at the same moment as DCQC-01?

DCQC-01 fires at TASK_TEMPLATE Section 1.1, after the done-criteria is written, before Section 4 (execution gate).

**TASK_TEMPLATE Section 1.1 Step 5 advisory:** "Done-criteria as an OUTCOME — not as an artifact." Same timing (done-criteria writing), same question (is it outcome-based?).

**Verdict: NOT REDUNDANT — different functions.** Step 5 is worker-side guidance — it instructs the worker what to aim for when writing the done-criteria. DCQC-01 is external evaluation — it verifies whether the worker hit the target. Removing Step 5 would remove the worker's direction and leave them writing done-criteria without knowing what DCQC-01 will check. Step 5 stays as preparation; DCQC-01 is the evaluation. Analogous to keeping the rubric when adding a grader.

---

### Q2: Which existing gates fire BEFORE DCQC-01 (and are therefore not replaced)?

DCQC-01 fires at Section 1.1 sign-off, which is within Section 1. Every gate before Section 1 is earlier and unaffected:
- TASK_TEMPLATE Section 0 pre-check (plan.md entry, pattern risk scan): fires before Section 1
- TASK_TEMPLATE Section 1.1 Steps 1–4 (goal model, evidence required, falsifiability check, task in one sentence): fire before Step 5 (done-criteria writing)

**Verdict: ALL KEPT — fire before DCQC-01 triggers.**

---

### Q3: Which existing gates cover different failure classes (not replaced even if they fire at the same point)?

**TASK_TEMPLATE Section 4.1 first checkbox: "Done-criteria stated as outcome, not artifact (Section 1.1)"**

This fires AFTER DCQC-01 (at Section 4, not Section 1.1). With DCQC-01 in place, this checkbox changes character: it was a self-report judgment ("do I believe my done-criteria is outcome-based?"). With DCQC-01, it becomes an evidence lookup ("is DCQC-01's OUTCOME-BASED sign-off present in Section 1.1?"). The self-report failure class is eliminated; the checkpoint is upgraded rather than removed.

**Action in Phase 7:** Reword checkbox 1 in Section 4.1 from self-report to evidence lookup: "DCQC-01 sign-off field in Section 1.1 reads OUTCOME-BASED — [date] present."

**TASK_TEMPLATE Section 6.1: "Does the current state meet the outcome — not just the artifact?"**

Fires at task CLOSE. DCQC-01 fires at task OPEN. Different question: DCQC-01 asks "is the done-criteria properly framed?" — prospective. Section 6.1 asks "did I achieve the outcome?" — retrospective. These are complementary, not competing. A well-framed done-criteria at open does not guarantee achievement at close; 6.1 checks achievement.

**Verdict: KEPT — different failure class (framing vs. achievement).**

**TASK_TEMPLATE Section 6.0 goal checker sign-off:**

Fires at task close. Checks whether the completion claim advances the goal model. DCQC-01 checks done-criteria quality, not goal advancement. Different failure classes.

**Verdict: KEPT — different failure class (criteria quality vs. direction validity).**

**CLAUDE.md: "Done-criteria for informal directions — state the done-criteria as an OUTCOME before starting"**

Covers informal directions (not registered as formal tasks in TASK_TEMPLATE). DCQC-01 fires only on formal tasks (TASK_TEMPLATE Section 1.1). Different scope.

**Verdict: KEPT — covers informal tasks; DCQC-01 covers formal tasks only.**

**A1 external auditor (at task close):**

Checks rule compliance. DCQC-01 checks done-criteria quality. Different failure classes. A1 does retrospectively verify done-criteria achievement (6.1 section); DCQC-01 prospectively verifies framing. Complementary.

**Verdict: KEPT — different failure class.**

**Brainstorm-type routing row (TASK_TEMPLATE Section 0): "Done-criteria MUST enumerate both implementation and testing"**

Task-type-specific elaboration (content of done-criteria for mechanism tasks). DCQC-01 checks framing (outcome vs. artifact). A done-criteria that enumerates implementation and testing still needs to be framed as an outcome, not an artifact — DCQC-01 and this row interact (DCQC-01 may reject the brainstorm done-criteria if it's artifact-framed even when properly enumerated). Not redundant; both are needed.

**Verdict: KEPT — different question (what to include vs. how to frame).**

---

## Net simplification

| Existing gate | Action | Reason |
|---------------|--------|--------|
| TASK_TEMPLATE 1.1 Step 5 advisory | KEPT | Preparation step; DCQC-01 is the evaluation |
| TASK_TEMPLATE 4.1 checkbox 1 | UPGRADED | Self-report → evidence lookup; reword in Phase 7 |
| TASK_TEMPLATE 6.1 done-criteria check | KEPT | Different question (achievement, not framing) |
| TASK_TEMPLATE 6.0 goal checker | KEPT | Different failure class (direction, not criteria) |
| CLAUDE.md informal direction rule | KEPT | Different scope (informal tasks) |
| A1 external auditor | KEPT | Different failure class (compliance, not criteria quality) |
| Brainstorm-type done-criteria row | KEPT | Different question (content, not framing) |

**Removals:** 0
**Upgrades:** 1 (TASK_TEMPLATE 4.1 checkbox 1 — reword in Phase 7)
**Adds:** 1 new structural gate (DCQC-01 sign-off field in Section 1.1 — wired in Phase 7)

---

## "No redundancy found" rationale

DCQC-01 fills a structural gap: done-criteria quality was previously enforced only by self-report (TASK_TEMPLATE 1.1 Step 5 advisory + 4.1 self-check). No prior mechanism dispatched an independent external evaluator prospectively at task open. The gap exists because M-06, M-25, and M-35 all reached Section 4 without the done-criteria quality problem being caught. DCQC-01 is a net addition, not a replacement.

---

## Phase 5 alternatives gate

**Chosen approach:** Evaluate each existing gate independently against three questions (same moment / before / different class). Produces a principled keep/remove/upgrade decision for each.

**Rejected alternative:** Treat all existing done-criteria guidance as redundant and remove it in favor of DCQC-01 as sole authority. Would have won if DCQC-01 replaced all advisory guidance — but Step 5 is preparation (helps write good done-criteria), not evaluation (judges whether the done-criteria is good). Removing Step 5 would leave the worker without direction before dispatching DCQC-01.
