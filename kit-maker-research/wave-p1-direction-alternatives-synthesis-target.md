# Synthesis Target: Angle 125 — Direction-Level Strategic Alternatives

**Purpose:** Pre-planned synthesis structure for angle 125. When the trajectory signal fires or progress is consistently diminishing, the kit needs a mechanism to identify fundamentally different directions — not just better tactics in the current direction. This synthesis determines what reliable direction-level alternative generation looks like, when it should fire, and what research says about the decision to pivot vs. persist.

**When to use:** Phase 4 SYNTHESIS after angle 125 has been researched.

**Downstream wiring:** Findings feed into three places:
1. **mandatory-reflection.md question 9** — validate current question triggers + required information format; update if research identifies better pivot-vs-persist signals
2. **satisficing-and-roi.md trajectory signal section** — validate whether "three decreasing actions" is a research-grounded threshold or arbitrary
3. **ENTRYPOINT Phase 8 REVIEW** — auditors should verify whether any direction-level alternatives exist; this synthesis specifies what that check looks like

---

## Table 1: Pivot vs. Persist Signal Inventory

| Signal | Source | Threshold (specific) | False positive rate | Research basis |
|--------|--------|----------------------|---------------------|----------------|
| N consecutive decreasing-value actions | current kit (trajectory signal) | 3 | ? | ungrounded — needs evidence |
| N consecutive phases with only incremental output | current kit (mandatory-reflection q9) | 3 | ? | ungrounded — needs evidence |
| Agent consistently failing same step type | ? | ? | ? | ? |
| Zero-new-claims in research wave | current kit (saturation check) | 2 consecutive | ? | anecdote |
| Diminishing-returns literature signal | ? | ? | ? | ? |

**Fill in from research.** For each signal: is there evidence that this threshold produces reliable pivot decisions? Does the evidence distinguish between "the direction is exhausted" vs "we hit a temporary plateau"?

---

## Table 2: Alternative Direction Generation Mechanism Inventory

| Mechanism | Description | When it fires | Evidence quality | Encodability (can agent do this?) |
|-----------|-------------|---------------|------------------|------------------------------------|
| Contrast with goal | Restate the goal, ask "what approach is maximally different from current?" | After pivot signal | ? | ? |
| Constraint relaxation | Identify the binding constraint; ask what if that constraint were lifted | After pivot signal | ? | ? |
| Reference class inversion | Find how the goal is achieved in completely different domains | After pivot signal | ? | ? |
| Adversarial stakeholder framing | Ask "what would someone who disagreed with the approach suggest?" | Any phase | ? | ? |
| First-principles reconstruction | Start only from goal and done-criteria, derive direction independently | Before pivot | ? | ? |

**Fill in from research.** Which mechanisms have empirical support for surfacing genuinely different directions? Which are noise generators that produce plausible-but-wrong pivots?

---

## Table 3: Pivot Decision Criteria

| Criterion | What it asks | Decision threshold | Evidence quality |
|-----------|-------------|-------------------|------------------|
| Sunk cost risk | How much of current work is invalidated by pivot? | ? | ? |
| Goal coverage comparison | Does alternative direction cover the goal as well or better? | ? | ? |
| Evidence strength | Is there evidence alternative direction is viable? | ? | ? |
| User authorization | Pivots must be authorized; what information does user need to authorize well? | n/a — procedural | ? |

---

## Contradiction pairs to resolve

1. **"Diminishing returns means pivot" vs "diminishing returns is normal late in a phase"** — research should indicate when diminishing returns signal exhaustion vs normal optimization completion. Is the trajectory signal a false positive in late-phase work?

2. **"Surface alternatives to user for authorization" vs "agent should identify best direction and recommend"** — how much pre-filtering before user sees alternatives? Showing 5 bad alternatives wastes user time; pre-filtering too aggressively buries the real alternatives.

3. **"Multiple different directions generate richer option space" vs "too many options produces decision paralysis"** — optimal number of alternatives to surface? Research on option set size and decision quality?

---

## Update candidates (pending research)

- **mandatory-reflection.md question 9 triggers** — if research shows three-decreasing-actions is not a reliable signal, update the trigger. If a better threshold exists (e.g., based on phase type rather than action count), substitute it.
- **mandatory-reflection.md question 9 information format** — the current instruction says "surface current direction + alternative + recommendation." If research shows a different framing produces better user decisions, update the format.
- **satisficing-and-roi.md trajectory signal threshold** — the "three consecutive" threshold is currently ungrounded. Research may support keeping it, changing it, or replacing it with a different mechanism.
- **ENTRYPOINT Phase 8** — if direction-level alternatives check is valuable, add it as an explicit auditor question in Phase 8.

---

## Minimal outcome requirement

At minimum, this synthesis must produce:
1. A grounded answer to "what threshold reliably distinguishes plateau from exhaustion?" — even if the answer is "no reliable threshold exists, use a heuristic plus user judgment"
2. At least one alternative-generation mechanism with evidence it produces genuinely different options (not just reframed versions of the same direction)
3. An updated mandatory-reflection.md question 9 trigger condition that reflects the evidence

If research produces none of these, log as a gap and note that the current ungrounded heuristics are the best available — do not delete them without replacements.
