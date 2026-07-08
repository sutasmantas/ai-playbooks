# Synthesis Target: Angles 48–55 — claude_process Patterns to Validate

**Purpose:** The kit-maker's existing design choices (riskiest-first, pre-mortem, two-auditor model, phase gates with named outputs) came from claude_process without systematic validation. This cluster validates or refutes those choices with research. The goal is to either confirm "this works — trace it" or "this doesn't work — here's what does."

**When to use:** Phase 4 SYNTHESIS after angles 48–55 have been researched.

**Downstream wiring:**
- Table 1 (two-auditor validation) → `scripts/verify_prompt.md` — update auditor structure if evidence favors alternative
- Table 2 (riskiest-first ordering) → `templates/plan.md.template` + Phase 5 ENTRYPOINT ordering rationale
- Table 3 (pre-mortem / unsupported assumption) → `templates/plan.md.template` strongest-unsupported-assumption guidance
- Table 4 (phase gates) → ENTRYPOINT phase structure — validate or simplify

---

## Table 1: Two-Auditor Model Validation (Angle 48)

| Design choice | Evidence basis | Alternative considered | Should we keep it? |
|--------------|---------------|----------------------|-------------------|
| Two auditors (not one or three) | (fill from research) | One auditor with multiple passes; three auditors | (fill) |
| Completeness + Correctness framing | (fill) | Single "quality" auditor | (fill) |
| Read-only tools only | (fill) | Allow tool use | (fill) |
| 3-RED-round cap | (fill) | No cap; lower cap (2); higher cap (5) | (fill) |
| Parallel dispatch | (fill) | Sequential | (fill) |

**Required output:** Each row must have a verdict: KEEP (evidence supports), REVISE (evidence favors an alternative — specify), or NO EVIDENCE (current choice is a heuristic, label it as such in verify_prompt.md).

---

## Table 2: Riskiest-First Ordering (Angles 53–54)

| Claim | Evidence | Study/source | Confidence | Kit implication |
|-------|---------|-------------|-----------|----------------|
| Building riskiest file first reveals problems early | (fill) | | | |
| Front-loaded risk reduces total rework | (fill) | | | |
| Pre-mortem raises plan quality | (fill) | | | |
| Naming strongest unsupported assumption improves decisions | (fill) | | | |

**Required output:** Specific evidence trace for the riskiest-first ordering rule. If supported: add Trace: citations to plan.md.template. If not supported: revise to whatever ordering has evidence.

---

## Table 3: Phase Model with Named Inputs/Outputs (Angle 55)

| Claim | Evidence | Scope conditions | Kit implication |
|-------|---------|-----------------|----------------|
| Named phase outputs enable retry in isolation | (fill) | | |
| Phase gates improve process completion rates | (fill) | | |
| Named inputs/outputs reduce handoff errors | (fill) | | |
| Phase model outperforms monolithic process | (fill) | | |

**Required output:** Is the 8-phase structure justified? If research shows diminishing returns past N phases: simplify to N. If research shows more phases = more reliable: keep or add.

---

## Table 4: Specific claude_process Pattern Verdicts

For each pattern from the original claude_process extraction that isn't covered by Tables 1-3:

| Pattern | Verdict | Evidence | Update needed |
|---------|---------|---------|--------------|
| Reflection checkpoint after every phase | (fill) | | |
| Design log append-only | (fill) | | |
| Canary test for auditor calibration | (fill) | | |
| Discovered-work items tracked separately from plan | (fill) | | |
| User questions only at gap spots (not throughout) | (fill) | | |

**Required output:** Each verdict is KEEP, REVISE (with specific change), or NO EVIDENCE (keep as heuristic, label explicitly).

---

## Contradiction pairs to resolve

1. **Riskiest-first vs dependency-first:** angle 129 also addresses this; coordinate findings. If the two angles produce different recommendations, that is itself a finding to resolve.

2. **Phase count vs overhead:** more phases = more checkpoints = more overhead. Is the 8-phase structure optimal, or would 5 phases with the same gates be better?

---

## Minimal outcome requirement

1. Each two-auditor design choice: KEEP/REVISE/NO EVIDENCE verdict
2. Riskiest-first ordering: evidence trace or "heuristic — no evidence" label
3. Phase structure: validated or simplified based on evidence
4. At least 3 claude_process patterns confirmed with evidence (adds Trace: lines to ENTRYPOINT)
