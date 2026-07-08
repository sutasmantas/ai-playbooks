# Synthesis Target: Angle 135 — Direction Drift in Multi-Session Agent Work

**Purpose:** The kit-maker demonstrated this failure directly: multiple consecutive sessions all advanced the same direction (research prep) without questioning whether that direction was still right. The trajectory signal (action SIZE) did not catch it because individual actions were full-sized. This synthesis validates whether the direction-drift check added to satisficing-and-roi.md is well-calibrated, or needs revision.

**When to use:** Phase 4 SYNTHESIS after angle 135 has been researched.

**Downstream wiring:**
- Table 1 (direction-drift signals) → `procedures/satisficing-and-roi.md` direction-drift check — validate or update the trigger conditions
- Table 2 (re-entry mechanisms) → `kit-maker/CLAUDE.md` session-start check — validate or update the session-start direction-drift check
- Table 3 (momentum vs direction) → `procedures/mandatory-reflection.md` question 9 — is the question well-targeted at the right level?

---

## Table 1: Direction-Drift Signal Inventory

What signals reliably indicate an agent (or person) has been going in one direction too long without questioning it?

| Signal | Research basis | Threshold | False positive risk | Agent-checkable? |
|--------|---------------|-----------|--------------------|--------------------|
| N consecutive sessions in same direction | (fill) | Current: 2-3 units | High in early phases where same direction IS right | Yes — count units |
| N consecutive phases with incremental output only | (fill) | Current: 3 | (fill) | Yes — compare phase outputs |
| Goal-subgoal distance grows (agent absorbed in sub-task) | (fill) | (fill) | (fill) | Partial |
| "When did I last question this direction?" exceeds T time/actions | (fill) | (fill) | (fill) | Partial — needs action log |
| (add from research) | | | | |

**Required output:** Is "2-3 logical units in same direction" the right trigger? Research may show better calibration (different threshold, different signal type). Update satisficing-and-roi.md if a better trigger exists.

**Special constraint:** The trigger must be agent-checkable from visible context. Wall-clock duration is NOT agent-checkable. Prefer action counts, phase counts, or output-quality trends over time durations. See `memory/feedback_agent_vs_external_enforcement.md`.

---

## Table 2: Re-Entry and Direction Challenge Mechanisms

Once direction drift is detected, what mechanism reliably surfaces genuinely different directions?

| Mechanism | Evidence | Produces genuinely different directions? | Overhead | Agent-implementable? |
|-----------|---------|----------------------------------------|---------|----------------------|
| Question 9 (mandatory-reflection) — "is this direction correct?" | Current kit | (fill from research) | Low | Yes |
| Contrast with goal — "what's maximally different from current approach?" | (fill) | | | |
| Reference class — "how would someone from a different domain approach this?" | (fill) | | | |
| Constraint relaxation — "what if the binding constraint didn't exist?" | (fill) | | | |
| (add from research) | | | | |

**Required output:** Is mandatory-reflection question 9 sufficient, or does research show a more reliable mechanism? If a better mechanism exists: add it as a step in the direction-drift check, not a replacement for question 9.

---

## Table 3: Momentum vs Productive Direction (Distinguishing the Two)

The key failure mode: momentum feels like productive direction. How do you distinguish "I'm in the right direction and making progress" from "I'm continuing because I've been going this way"?

| Distinguishing test | Evidence | How to apply in kit context |
|--------------------|---------|----------------------------|
| Can you name what's changed toward the goal? (not what was done, what CHANGED) | (fill) | Add to direction-drift check: "name one thing that is different and closer to the goal" |
| Is the output testable? (does each unit produce something usable) | (fill) | Direction D skeleton approach — runnable kit = productive direction |
| Would someone with the same goal pick this direction fresh? | Current: question 9 | (fill) |
| (add from research) | | |

**Required output:** At least one concrete test that distinguishes productive continuation from momentum. Add this to the direction-drift check in satisficing-and-roi.md if research validates it.

---

## Contradiction pairs to resolve

1. **"Same direction for N units = drift"** vs **"research phases are inherently sequential and look like the same direction"** — during a research wave, every session IS the same direction (research). Does the direction-drift check produce constant false positives during research phases? Scope condition needed: "direction-drift check fires between logical work types (research → build → verify), not within a phase."

2. **"Surface to user before pivoting"** vs **"kit should be autonomous"** — the current design says "surface to user before direction change." But if the user wants maximum autonomy, every direction check that surfaces to user is friction. Research may show when direction changes can be self-authorized vs when they genuinely require user judgment.

---

## Minimal outcome requirement

1. Validated trigger threshold for direction-drift check (or honest "no evidence; current heuristic is reasonable")
2. Scope condition: when should the direction-drift check NOT fire (within a phase vs between phases)
3. At least one concrete "productive vs momentum" distinguishing test
4. Recommendation on question 9 sufficiency vs additional mechanism needed
