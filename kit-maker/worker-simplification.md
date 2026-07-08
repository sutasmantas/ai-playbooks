# Worker Simplification Design

**Status:** INT-07-D output  
**Written:** 2026-07-04  
**Question:** Which existing worker gates does the goal checker make redundant?

---

## Method

For each candidate gate: compare (a) what the gate checks, (b) when it fires, (c) whether the goal checker covers the same case — and whether the goal checker fires at the same time or after.

The key variable is **firing time.** A gate that fires BEFORE execution (front-loaded) has different value from a gate that fires AFTER. The goal checker fires per-response — which is after the worker has done tool calls and drafted a response, but before delivery. Front-loaded gates (BEFORE execution) are not covered by the goal checker; post-draft gates are.

---

## Candidate 1: Section 1.4 — Alternatives search

**What it does:** Requires at least one alternative with a fundamentally different underlying assumption. Requires steelmanning — explicitly building the strongest case FOR the alternative before rejecting it.

**When it fires:** BEFORE execution, during task setup (Section 1 of TASK_TEMPLATE).

**Goal checker coverage:** Angle 3 ("is there a clearly better approach not being considered?") fires at response time and will catch obvious missed alternatives. But angle 3 is adversarial questioning after the fact — it asks "did you miss something?" It does not require a steelman of the rejected path. The steelman requirement in 1.4 — "build the strongest case for the alternative before rejecting it" — is not produced by the goal checker.

**Verdict: Keep Section 1.4 as designed.**

Rationale: Front-loaded timing (before execution) vs. goal checker's post-draft timing is a genuine distinction. The wrong alternative chosen wastes execution work; catching it after the draft is worse than before task start. The steelman requirement is also not covered by angle 3. Goal checker and 1.4 complement each other — 1.4 front-loads, goal checker catches what slipped through.

---

## Candidate 2: Steps 3a/3b/3c — Evaluation task pre-conditions

**What they do:**
- 3a: Name the specific claim the trial validates; state what positive and negative results mean
- 3b: Name the specific decision results will drive; expose benchmark-framing if no decision exists
- 3c: State one way the trial could produce a "correct" result while answering the wrong question

**When they fire:** BEFORE trial design — must be filled before step 4 (execution approach).

**Goal checker coverage:** In full adversarial mode on a trial-design turn, the goal checker will apply angles 1 (missing factor), 2 (symptom vs. root), and 5 (failure-pattern match — M-17, M-23, M-25 are calibration anchors in the prompt). This covers the spirit of 3a/3b/3c. But:
- The goal checker fires after the worker has drafted a trial design. 3a/3b/3c fire BEFORE the design begins.
- 3c requires explicitly naming a failure mode ("how could trial produce correct result while answering wrong question?"). The goal checker may surface this via angle 2 or 5, but there is no guarantee.

**Verdict: Keep Steps 3a/3b/3c.**

Rationale: Same front-loaded vs. post-draft timing issue. A trial designed without 3a/3b/3c can still be blocked by the goal checker — but the worker will have done the design work before the block. Front-loading is strictly more efficient for evaluation tasks. Goal checker serves as a second pass, not a replacement.

**Note:** The goal checker IS the stronger enforcement for one case: if 3a/3b/3c are filled superficially (answers written but not honest), the goal checker's adversarial mode will catch this in a way 3a/3b/3c can't self-enforce.

---

## Candidate 3: CLAUDE.md Check 2 — Direction-drift check (session start)

**What it does:** At every session start — Check 2 of 4: "Did the last 2–3 logical units of work all go in the same direction? If yes and that direction hasn't been explicitly revalidated — run mandatory-reflection.md question 9 before starting."

**When it fires:** Session start, before any new work begins.

**Goal checker coverage:** The goal checker fires before every response in always-on mode. In full adversarial mode, it applies angle 4 (future-user test / pre-mortem on the direction) and angle 2 (symptom vs. root). The goal checker at the first response of a session will catch unchallenged direction if it's visible in the project-state document.

**Why Check 2 was added:** Behavioral decay — agents continue the prior session's direction without questioning it. The always-on goal checker is the direct fix for this: the first response of every session is checked adversarially. Check 2 was compensating for the absence of that mechanism.

**Verdict: REMOVE Check 2 from CLAUDE.md session-start sequence.**

The goal checker is strictly more comprehensive — it fires before every response, not just at session start. The specific "3 in a row without revalidation" heuristic is made redundant by the adversarial check that fires at turn 1 of every session (and every subsequent turn). Removing Check 2 reduces session-start overhead with no coverage loss.

**Prerequisite:** Check 2 can only be removed after the goal checker is production-active (INT-07-G). Remove it as part of INT-07-G, not before.

---

## Candidate 4: Section 1.7 — "What does success make worse?"

**What it does:** Forced adversarial question: if this task succeeds exactly as planned, what gets worse or more fragile?

**Goal checker coverage:** Goal checker asks "what's missing?" and "what would the user say one week later?" These are directionally similar. But 1.7 specifically asks about the consequences of SUCCESS — not failure, not wrong direction, but the negative externalities of the correct outcome. This is a distinct adversarial angle the goal checker's 5 angles don't specifically cover.

**Verdict: Keep Section 1.7.**

---

## Before/after comparison

| Gate | Before (current) | After (with goal checker) | Net change |
|------|-----------------|--------------------------|------------|
| Section 1.4 — Alternatives | Required at task setup (front-loaded) | Unchanged + goal checker as second pass | **No change; coverage improves** |
| Steps 3a/3b/3c — Eval pre-conditions | Required before trial design (front-loaded) | Unchanged + goal checker catches superficial fills | **No change; enforcement improves** |
| Check 2 — Direction drift | Session-start, 4-check sequence | **REMOVE** — goal checker covers this at turn 1 of every session | **Removed; one fewer session-start check** |
| Section 1.7 — Success consequences | Required at task setup | Unchanged | **No change** |
| A1 — Mistake finder | Fires at formal task close | Unchanged — different failure class | **No change** |
| Done-criteria gate (1.1) | Structural, pre-execution | Unchanged | **No change** |
| Plan.md entry rule | Unconditional per user direction | Unchanged | **No change** |
| Class-before-instance | On problem identification | Unchanged | **No change** |

**Net simplification:** One gate removed (Check 2 from session-start sequence). All other gates kept — they fire before the goal checker's window (pre-execution) or cover failure classes outside the goal checker's scope (compliance, structural enforcement).

---

## Why the simplification is small

The goal checker covers **direction quality at response time.** Most existing gates fire **before execution** (Section 1 gates) or cover **compliance** (A1) or **structural enforcement** (plan.md entry, done-criteria). These are different failure classes at different trigger times.

The session-start direction-drift check is the only gate that was compensating for the absence of an always-on adversarial mechanism — and it was compensating imperfectly (once per session, at session start, heuristic-based). The goal checker's always-on mode makes the compensation unnecessary.

Expectation management: the goal checker is an additional quality layer, not a replacement for existing process. Workers operating with the goal checker active should expect more total overhead, not less — the goal checker adds adversarial checks that weren't there before. The only overhead reduction is Check 2.

---

## Implementation note for INT-07-G

Remove Check 2 from CLAUDE.md session-start 4-check sequence as part of INT-07-G wiring. The three remaining checks (Check 0 — mistakes pattern scan, Check 1 — pending triggers, Check 3 — methodology vintage debt) remain in full.

Also: mandatory-reflection.md question 9 was exclusively triggered by Check 2. With Check 2 removed, question 9 is no longer triggered by this path. Verify whether question 9 is triggered by any other mechanism; if not, it becomes dead reference.
