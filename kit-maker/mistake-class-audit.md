# Mistake Class Audit — M-01 to M-34

**Purpose:** Classify each documented mistake by what type of detection mechanism could have caught it BEFORE user correction. This is the ground truth the fix must be tested against. No fix was designed from this before INT-06 (M-34 — that was the error).

**Key question for each entry:** What would have had to exist — structurally — for this mistake to be caught without the user pointing it out?

---

## Detection mechanism taxonomy

| Code | Mechanism | What it is |
|------|-----------|-----------|
| EXT | External auditor | A separate agent reads the conversation and checks which rules should have fired |
| C3 | User-correction unconditional trigger | User correction fires mistake-fire rule unconditionally — catches mistakes after the user responds but before any further work |
| TG-START | Task-start structural gate | TASK_TEMPLATE check at task START (e.g., falsifiability gate, goal-model alignment) |
| TG-CLOSE | Task-close structural gate | Required output at task CLOSE (e.g., grounding-map entry, done-criteria verification) |
| PROC | Procedure fix | The check must be embedded in the relevant procedure (synthesis, saturation, etc.) — not a behavioral rule |
| OBS-FILE | Observable: file edited → plan.md check | Catches: response produced file write without plan.md entry |
| OBS-SEQ | Observable: steps resequenced → dependency check | Catches: procedure ordering changed without checking dependencies |
| OBS-PRIN | Observable: principle stated → contradiction check | Catches: rule stated and violated in same response |
| NONE | No in-agent mechanism | Only catchable by external enforcement (user, audit, design review) |

---

## Per-entry audit

| # | What happened | Detection that would have worked | Notes |
|---|---------------|--------------------------------|-------|
| M-01 | Archive angles generated without numbered entries in tracking file | TG-CLOSE: "every generated angle → numbered entry required output" | Fixed by procedure change — now standard |
| M-02 | Workflow terminal agent failure: all writes deferred to last step | NONE: workflow architecture problem; no in-agent rule catches absent writes | Structural design problem — checkpoint writes are the fix |
| M-03 | Same as M-02 in 3 scripts | NONE: same as M-02 | Workflow design |
| M-04 | Premature saturation in one vocabulary tradition | PROC: saturation check requires cross-vocabulary confirmation | Now in research-quality.md — procedure fix |
| M-05 | Post-cluster-review trigger didn't fire | TG-CLOSE: trigger-check at task close | Added to plan.md trigger table |
| M-06 | Wrong trial objective (designed to prove kit better, not diagnose failures) | TG-START: falsifiability gate ("this trial could be correct artifact while not advancing goal if...") | TASK_TEMPLATE Section 1.1 exists — question is whether it fires |
| M-07 | Synthesis procedure applied without validation | TG-START: "is the procedure being used validated?" as a required gate | Not fully enforced — TASK_TEMPLATE doesn't require this check |
| M-08 | Reflection procedure measured effort proxy instead of quality | PROC: procedure validation before use | Same as M-07 |
| M-09 | Rule had no edge case provision | NONE: rule specification review required | Low-frequency; hard to systematize |
| M-10 | Broad review wasn't broad enough after correction | EXT: external auditor reading the broad review would catch "only surfaced the one thing the user pointed at" | C3 catches it after the next correction; EXT catches in-flight |
| M-11 | Same as M-10, repeated 4+ times | EXT: same as M-10 | Pattern D most persistent failure mode |
| M-12 | Grounding map not updated when procedure changed | TG-CLOSE: grounding-map entry as required output at task close | Trigger exists in plan.md — compliance is the question |
| M-13 | Backlog items accumulated without enforcement | TG-START: Check 3 (REVISIT_QUEUE.md) at session start | Session-start checks exist; fire only once per session |
| M-14 | Behavioral contract decay (generic) | EXT: external auditor reviewing conversation for rule-fire evidence | Same class as M-22/M-24/M-26 |
| M-15 | Session resource check skipped before heavy workflow | TG-START: TASK_TEMPLATE Section 1.6 dependencies | Template section exists; question is compliance |
| M-16 | Plan.md entry skipped in conversational mode | OBS-FILE: "file edited this response → plan.md written first?" | TC-04 class — only when file was actually edited |
| M-17 | Experiment executed without validity audit (experimental design wrong) | TG-START: trial validity check — "is this design capable of producing valid signal for the stated objective?" | Not in current TASK_TEMPLATE for evaluation tasks |
| M-18 | Mistake-fire rule didn't fire when trial contradicted research predictions | EXT: external auditor would flag "research predictions contradicted, no mistakes.md entry" | Cannot be caught by self-monitoring by definition |
| M-19 | User correction acknowledged verbally without routing to tracking | C3: user correction unconditional → fire mistake-fire rule before any other work | C3 addresses this directly |
| M-20 | Fix descriptions written without execution (log-as-resolution) | TG-CLOSE: "Fix applied: [file citation required]" — format enforced | Format already updated in mistakes.md |
| M-21 | Mistake-fire rule didn't fire for its own non-firing | EXT: only mechanism that catches meta-failures | Cannot be caught by self-monitoring by definition |
| M-22 | Unconditional rules stopped firing in conversational mode | EXT: external auditor checking conversation for rule compliance | C3 catches after next user correction |
| M-23 | Trial framed as benchmark instead of diagnostic | TG-START: "state intended output of this trial: what decision/improvement will results drive?" | Not in current TASK_TEMPLATE |
| M-24 | Self-monitoring confirmed unreliable (meta-realization) | N/A: this was a correct realization during investigation, not a mistake in execution | Not a catchable error |
| M-25 | Trial designed around wrong goal (issue-finding vs. autonomous execution) | TG-START: goal-model alignment check — "this task validates claim X about the goal: ___" | TASK_TEMPLATE Section 1.1 has goal model field |
| M-26 | Plan.md entry skipped in conversational mode (again) | OBS-FILE: if file was edited; C3: if user corrected | C3 handles after correction; OBS-FILE handles when file was written |
| M-27 | Research impossibility claim (over-generalization from tested setup) | PROC: synthesis procedure requires "ceiling in tested setup vs. all setups" distinction | Now in research-synthesis.md Step 3.7 calibration |
| M-28 | Mechanism design validity gap (external state ≠ goal proximity) | TG-START: falsifiability gate on mechanism design tasks | TASK_TEMPLATE Section 1.1 exists — question is routing |
| M-29 | Idea generation anchored to research not goal-model | TG-START: "goal-model-first derivation before consulting research" | Added to TASK_TEMPLATE brainstorm routing |
| M-30 | Research used as prescription throughout project | PROC: synthesis procedure calibration + Step 3.7 | Added to research-synthesis.md |
| M-31 | Principle stated and immediately violated | OBS-PRIN: "principle stated → contradiction check" | Only mistake A3-obs would catch reliably |
| M-32 | Broad retrospective skipped; action items unexecuted | C3: user correction fires rule unconditionally; D1: action items → plan.md | C3 + D1 address this |
| M-33 | Mistake-fire rule failed during INT-05 | EXT: external auditor reviewing INT-05 conversation for unfired rules | Cannot be caught by self-monitoring |
| M-34 | Premature solution selection — fix tested against cherry-picked scenarios | EXT: external auditor reviewing test design; TG-START: falsifiability gate on INT-06 fix itself | The fix-design task never went through TASK_TEMPLATE |

---

## Distribution summary

| Mechanism | # of mistakes it would address | Examples |
|-----------|-------------------------------|---------|
| EXT (external auditor) | ~14 | M-10, M-11, M-14, M-18, M-21, M-22, M-24(partial), M-33, M-34 + several others |
| C3 (user correction unconditional) | ~7 | M-10, M-11, M-19, M-22, M-26, M-32 — catches after user correction |
| TG-START (task-start gate) | ~6 | M-06, M-17, M-23, M-25, M-28, M-29 |
| PROC (procedure fix) | ~6 | M-04, M-07, M-08, M-27, M-30, M-31(partially) |
| TG-CLOSE (task-close gate) | ~4 | M-01, M-05, M-12, M-20 |
| OBS-FILE (file edit → plan.md) | ~2 | M-16, M-26 (when file was edited) |
| OBS-PRIN (principle → contradiction) | ~1 | M-31 |
| NONE / structural design | ~4 | M-02, M-03, M-09, M-24 |

*Note: Some mistakes are counted in multiple mechanisms (e.g., C3 catches after the correction; EXT catches before). Numbers overlap.*

---

## Key findings

**1. The largest uncovered class is "external auditor required" (~14 mistakes)**
These are cases where the agent genuinely doesn't know something went wrong. No self-monitoring rule catches them because self-monitoring requires recognition. Only an external agent reading the conversation can detect them.

**2. A3-obs (observable conditions) catches 1 mistake reliably (M-31)**
OBS-PRIN catches TC-05/M-31 class. OBS-FILE catches M-16/M-26 class (2 entries) when a file was actually edited — misses the conversational version. OBS-SEQ catches nothing in M-01–M-34. Total: ~1-2 of 34 mistakes. This confirms M-34's diagnosis.

**3. C3 (user correction unconditional) addresses ~7 mistakes**
This is the highest per-mechanism ROI among the non-EXT mechanisms. It doesn't catch mistakes before the user sees them, but it eliminates the "user corrects, agent classifies, rule may or may not fire" bypass path.

**4. Task-start gates address ~6 mistakes**
The TASK_TEMPLATE falsifiability gate already exists but wasn't applied to evaluation design tasks (M-06, M-17, M-23, M-25) or to INT-06 itself (M-34). Routing these task types through the gate is a structural fix.

**5. The external auditor is the only mechanism that addresses the EXT class**
The EXT class includes the most severe and recurring failures: behavioral decay, mistake-fire rule non-fires, broad retrospective non-fires. No rule rewrite touches this. The auditor reads the conversation and asks "which CLAUDE.md rules should have fired and didn't?"

---

## What the test design should look like for external auditor (A1)

The test question is NOT "would the rule have fired?" (prediction). It's: "given a conversation excerpt and CLAUDE.md, can an external agent correctly identify which rules should have fired but didn't?"

**Test input:** A real conversation excerpt where we know the ground truth (from M-01–M-34 — we know exactly what rules didn't fire and when).

**Ground truth:** For each excerpt, the rules that should have fired are documented in the mistakes.md entry for that session.

**Subagent task:** "Read this conversation excerpt and CLAUDE.md. List every CLAUDE.md rule that should have fired in this conversation but did not. Show your evidence for each."

**Measurement:** TP rate = rules correctly identified as unfired / total known unfired rules. FP rate = rules incorrectly claimed as unfired.

**Why this is valid:** The auditor is doing detection (reading evidence), not compliance (following rules). The confound "subagent performs for the test" doesn't apply — the auditor isn't the one who was supposed to follow the rules.

---

## Recommended priority order for INT-06 Phase 4 (revised)

1. **Implement external auditor (A1) and test it against real conversation excerpts from M-01–M-34**
   - Use M-10/M-11 excerpt (broad review non-fire), M-22 excerpt (conversational mode decay), M-33 excerpt (INT-05 rule non-fire) as test inputs
   - Measure detection rate on known unfired rules
   - This is the only mechanism that addresses the largest failure class

2. **Lock in C3 (already implemented) — test that it fires on real user corrections**
   - Verify C3 actually fires: give a subagent CLAUDE.md + a task where a user correction arrives, observe whether the mistake-fire rule fires before any other work
   - C3 is in CLAUDE.md; test that it's followed

3. **Apply TASK_TEMPLATE falsifiability gate to evaluation/mechanism design tasks**
   - The gate exists but isn't routed to evaluation-type tasks
   - Add routing: "Task type = Research / Design / Evaluation → state what claim about the goal model this task validates before starting"

4. **Revert A3-obs (already done — M-34 fix applied)**

Current plan.md INT-06 status: Phases 1-3 complete; Phase 4 revised (external auditor is the primary mechanism); Phase 5 (verification) follows implementation.
