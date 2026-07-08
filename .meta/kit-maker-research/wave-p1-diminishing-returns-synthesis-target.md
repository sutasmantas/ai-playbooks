# Synthesis Target: Angle 120 — Diminishing Returns Detection and Work Direction Switching

**Purpose:** Pre-planned synthesis for angle 120. This angle is self-referential: the failure it describes (continuing to iterate on saturated work) fired during the session that produced this file. Findings feed directly into `procedures/satisficing-and-roi.md` and the pitfall_register.md "over-optimization" entry.

**When to use:** Phase 4 SYNTHESIS after angle 120 has been researched.

**Downstream wiring:** Findings update `procedures/satisficing-and-roi.md`. If research finds structural mechanisms more reliable than the current "trajectory signal" check (three consecutive decreasing-value actions), replace or augment the procedure. The pitfall_register.md entry was promoted at count=2; findings should confirm or revise the guardrail.

---

## The question this synthesis must answer

Agents don't have boredom or effort-fatigue. Without these signals, they continue iterating past the point of diminishing returns because nothing tells them to stop. The synthesis must answer:

1. **What structural mechanisms** reliably signal diminishing returns in a work direction to an AI agent?
2. **What triggers work-direction switching** — how does an agent recognize it should be doing something fundamentally different rather than iterating on the current thing?
3. **What does the research say about optimal stopping** — when is "one more iteration" justified vs when is it over-optimization?

---

## Synthesis structure

### Table 1 — Diminishing returns signal mechanisms

| Mechanism | What it detects | Reliability | Agent-implementable? | Currently in satisficing-and-roi.md? |
|-----------|----------------|-------------|---------------------|--------------------------------------|
| Trajectory signal (three decreasing-value actions) | Pattern of shrinking action value | ? | Yes — visible from action history | Yes (just added) |
| Explicit ROI estimate before each iteration | Predicted value of next action | ? | Yes — requires articulating what next adds | Yes (Part 1) |
- Saturation-analog (consecutive zero-new-claims) | Research-specific: no new findings | Good for research | Yes | Partial (research only) |
| Effort-payoff ratio threshold | When effort > expected value | ? | Requires effort estimation | No |
| Cross-domain stopping rules (medicine, chess, military) | Domain-specific heuristics | ? | Partial — depends on domain transfer | No |
| Fixed iteration cap with mandatory review | After N iterations, assess before continuing | Simple but crude | Yes | No |

Fill reliability and agent-implementable from research. Add rows from angle 120 findings.

---

### Table 2 — Work direction switching triggers

What makes an agent recognize it should be doing something categorically different, not just a better version of the current thing?

| Trigger | Mechanism | Evidence | Currently encoded in kit-maker? |
|---------|-----------|----------|--------------------------------|
| ROI comparison across available work items | Calculate relative value of current vs alternatives | ? | Yes — satisficing-and-roi.md Part 2 |
| Goal-distance check | Is current work moving toward the goal or just completing tasks? | ? | Partially — goal-directed-continuation.md |
| User signal recognition | User explicitly names the pattern | Works but requires user to catch it | Not structural |
| Trajectory signal firing → mandatory alternatives | When trajectory fires, must enumerate different directions | ? | No |
| ? | ? | ? | ? |

---

### Table 3 — satisficing-and-roi.md update candidates

| Finding | Proposed change | Priority |
|---------|-----------------|----------|
| ? | ? | ? |

If research finds the trajectory signal (3 decreasing actions) is too crude: replace with a more calibrated mechanism. If research confirms it's adequate: close the provisional flag on the procedure update.

---

## Expected synthesis output

`research_archive/synthesis-diminishing-returns.md` with all three tables filled and direct proposed edits to `procedures/satisficing-and-roi.md`.
