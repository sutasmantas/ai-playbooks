# Synthesis Target: Angles 31–38 — AI-Specific Instruction Design

**Purpose:** The core empirical question for kit design: how do you write instructions that AI agents reliably follow? This cluster has the most empirical literature of the P2 clusters. Synthesis must produce specific, actionable rule-writing guidance — not "instructions should be clear."

**When to use:** Phase 4 SYNTHESIS after angles 31–38 have been researched.

**Downstream wiring:**
- Table 1 (anchoring patterns) → `scripts/verify_prompt.md` — does the current verify prompt anchor on early framing in ways that bias findings?
- Table 2 (examples vs rules) → Phase 6 BUILD — should kit procedures lead with examples or rules? Current approach: rules with trace lines. May need revision.
- Table 3 (specification gaming) → `scripts/canary_spec.md` — add specification gaming violation types to canary
- Table 4 (instruction format findings) → `procedures/` — update rule-writing guidance across all procedure files

---

## Table 1: Anchoring and Order Effects in AI Instructions

| Effect | Study (author/year) | Magnitude | Scope conditions | Kit implication |
|--------|-------------------|-----------|-----------------|----------------|
| Primacy effect — first instruction dominates | (fill) | | | |
| Recency effect — last instruction dominates | (fill) | | | |
| Anchoring on framing phrase | (fill) | | | |
| (add from research) | | | | |

**Required output:** Specific ordering recommendation for kit behavioral rules: which rules go first, which go last? Does the verify_prompt.md need reordering based on this?

---

## Table 2: Examples vs Rules as Primary Instruction Type

| Approach | Reliability | When it outperforms | When it underperforms | Evidence quality |
|----------|------------|--------------------|-----------------------|----------------|
| Rules only | (fill) | | | |
| Examples only | (fill) | | | |
| Rules + examples | (fill) | | | |
| Examples first, rules second | (fill) | | | |
| (add from research) | | | | |

**Required output:** A specific recommendation for the primary instruction type in kit procedures. The current kit uses rules with Trace: citations. If examples outperform rules: Phase 6 BUILD must add examples, and the per-file loop must include an "add at least 1 example" step.

**Flip trigger:** If research shows examples-first outperforms rules-first by >20% compliance rate in controlled studies: revise Phase 6 per-file loop to require at least one example per procedure.

---

## Table 3: Specification Gaming / Intent-Compliance Gap

| Gaming pattern | How common | Prevention mechanism | Evidence for prevention working |
|----------------|-----------|---------------------|--------------------------------|
| Technical compliance without spirit | (fill) | | |
| Loophole exploitation | (fill) | | |
| Over-literal interpretation | (fill) | | |
| (add from research) | | | |

**Required output:** Add the top 2–3 specification gaming patterns to `scripts/canary_spec.md` violation types. These are things real kits suffer from that the canary should test for.

---

## Table 4: Instruction Format Research Findings

| Property | Effect on compliance | Study evidence | Kit rule candidate |
|----------|---------------------|----------------|-------------------|
| Instruction length | (fill) | | |
| Positive vs negative framing ("do X" vs "don't do Y") | (fill) | | |
| Conditional rules ("if X then Y") | (fill) | | |
| Numbered lists vs prose | (fill) | | |
| Imperative mood vs descriptive | (fill) | | |
| (add from research) | | | |

**Required output:** For each property with high-confidence findings: add a specific rule to the kit-maker's rule-writing guidance. These are NOT provisional — they go in as evidence-based rules with Trace: citations.

---

## Contradiction pairs to resolve

1. **Examples vs rules:** if both are recommended, which leads? The synthesis must pick one: "examples-first then rules" OR "rules-first then examples" — not "use both" without ordering.

2. **Long vs short instructions:** cognitive load research suggests shorter; LLM instruction following research may suggest more complete = more reliable. These can conflict. Scope conditions matter.

3. **Positive framing vs explicit negative rules:** "do X" is cleaner, but "do NOT do Y under any circumstances" may outperform for hard prohibitions. Synthesis should separate these cases.

---

## Minimal outcome requirement

1. Ordering recommendation for behavioral rules (first/last placement)
2. Decision on examples vs rules primary type (with flip trigger if evidence is mixed)
3. At least 2 specification gaming patterns added to canary_spec.md
4. At least 3 instruction format findings converted to concrete kit-maker rules
