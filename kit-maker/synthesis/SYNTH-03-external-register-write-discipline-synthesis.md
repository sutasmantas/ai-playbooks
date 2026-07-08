# SYNTH-03 — External Register / Write Discipline Cross-Batch Conflict Synthesis

**Date:** 2026-07-05
**Scope:** Reconcile OdysseyBench (batch 4) vs arXiv:2603.29231 (batch 5) conflict on external register net-benefit
**Status:** SYNTHESIZED (PROVISIONAL) — architectural distinction resolves the contradiction; causal variable not yet directly tested

---

## Contradiction statement

**Claim A (batch 4, OdysseyBench, arXiv:2508.09124, HIGH):**
External register improves step completion: GPT-4o step omission 75%→45.61% on 3-app multi-domain long-horizon office workflows. Primary failure mode without the register = information retrieval from dialogue history, not reasoning failure.

**Claim B (batch 5, arXiv:2603.29231, HIGH):**
External memory scaffolds NEVER improve long-horizon agent reliability. Hurt 6/10 models (Kimi K2.5 −0.14 GDS, Mistral 24B −0.13 GDS); 4 neutral. Mechanism: calling `add_to_memory()` and injecting a growing scratchpad into every turn consumes step budget and context space — per-step write overhead exceeds benefit at extended task horizons.

---

## Step 4.2 — Scope-explanation test

**Candidate resolution: architectural distinction**

| Dimension | OdysseyBench architecture (positive) | arXiv:2603.29231 architecture (negative) |
|-----------|--------------------------------------|------------------------------------------|
| Register type | Bounded structured predicate list (K≤6) | Unbounded natural language scratchpad |
| Growth behavior | Fixed fields (does not grow with task length) | `add_to_memory()` appends every turn — grows monotonically |
| Context injection | External; retrieved on-demand | Full scratchpad injected into every turn |
| Purpose | Step-completion tracking; structured state (step status, dependencies, output handles) | Semantic memory accumulation; free-form knowledge retention |
| Write cost per step | Bounded (updates to pre-allocated fields) | Grows with task length (longer scratchpad → larger injection) |
| Architectural precedent | Bounded predicate register (CGDP, K≤6) | Unbounded scratch pad / memory log |

**Mechanism alignment:**
The negative-outcome mechanism in arXiv:2603.29231 is explicit: "calling `add_to_memory()` and injecting a growing scratchpad into every turn consumes step budget and context space." This mechanism requires BOTH:
1. The register GROWS with each step (each `add_to_memory()` call appends)
2. The FULL register content is injected into every turn's context window

A bounded K≤6 predicate register violates condition 1 (it has fixed fields, not a growing append log) and may violate condition 2 (it can be selectively retrieved). The mechanism that produces the negative result in arXiv:2603.29231 does not structurally apply to the OdysseyBench architecture.

**Scope-explanation verdict:** RESOLVES WITH SCOPE CONDITIONS — the contradiction dissolves when architectural type is specified. Bounded structured predicate registers (OdysseyBench architecture) and unbounded growing scratchpads (arXiv:2603.29231 architecture) are not the same construct. The apparent contradiction is a terminology collision: both are called "external memory" or "external register" but they test fundamentally different architectures.

---

## Remaining uncertainty

**Neither paper directly tested the architectural distinction as a variable.** The synthesis infers the explanatory variable (bounded vs unbounded architecture) from:
- The explicit mechanism statement in arXiv:2603.29231 (per-step write overhead + growing injection)
- The architectural description of OdysseyBench's register (K≤6 predicates, step-completion tracking, structured fields)

But no study has directly compared: bounded K≤6 predicate register vs unbounded growing scratchpad vs in-context tracking, holding all else equal. The resolution is mechanistically coherent and has converging indirect evidence, but is not directly confirmed.

**Flip trigger for VALIDATED upgrade:** A study that directly compares bounded structured predicate register vs unbounded growing scratchpad vs in-context tracking on long-horizon tasks (≥10 steps), using the same task set and the same models, reporting net-benefit by architecture type.

---

## Additional converging evidence

**From batch 5 archive (write-discipline-failure-rate):**
- `retrieval-dominates-write-quality-secondary` (HIGH, arXiv:2603.02473): retrieval bottleneck is 20pp spread vs write strategy's 3–8pp spread. This means even if writing to a bounded register has some cost, optimizing write strategy is the secondary concern — the dominant bottleneck is retrieval. A bounded register minimizes retrieval cost by providing a compact, structured, exhaustible state.
- `structural-write-failure-predicts-correctness-parametric-does-not` (HIGH, arXiv:2605.28840): write failure is primarily structural (tool selection/omission/sequence), not parametric (argument errors). This means the primary benefit of an external register is enabling correct tool sequencing — a function served by a bounded predicate list, not by an unbounded scratchpad.
- `write-trigger-depends-on-unreliable-internal-state` (MEDIUM, arXiv:2505.10571): agents cannot reliably know WHEN to issue a write. Mandatory checkpoints at fixed structure (e.g., update step status after each step) outperform discretionary writes. This is the design of a bounded predicate register — write protocol is mandatory and structured, not "add to memory when useful."

**From batch 4 archive (external-intention-register):**
- `sagallm-constraint-omission-external-saga-state` (HIGH, arXiv:2503.11951): systematic constraint omission without external state — fire safety violations, travel time miscalculations. SagaLLM's architecture uses three orthogonal state dimensions (S_A/S_O/S_D), not an unbounded memory log.
- `write-discipline-adversarial-failure-mode` (ANECDOTE, MemFail): precondition for net-positive external register: high write accuracy + low retrieval noise. Bounded registers with fixed schemas have lower retrieval noise than unbounded scratchpads.

---

## Synthesis decision

**The architectural distinction resolves the conflict:**

1. **Bounded K≤6 predicate register (ENTRYPOINT.md recommended architecture):**
   - Stores step status, dependency graph, confirmed parameters, output handles
   - NOT raw conversation history (explicitly specified in ENTRYPOINT.md)
   - NOT an unbounded memory log
   - Write cost: bounded and predictable; does not grow with task length
   - Context injection: structured, compact, selective — not "inject full scratchpad every turn"
   - Evidence: OdysseyBench (HIGH) positive outcome, SagaLLM (HIGH) structured dimensions, CGDP (HIGH) programmatic exhaustion detection

2. **Unbounded growing scratchpad (NOT the ENTRYPOINT.md recommendation):**
   - `add_to_memory()` pattern that appends every turn
   - Injects growing content into every context window
   - Write cost: grows monotonically with task length
   - Evidence: arXiv:2603.29231 (HIGH) universally non-positive at long horizon; MemFail null results across 6 tested frameworks

**The ENTRYPOINT.md recommendation (K≤6 bounded predicate list) is the architecture associated with the positive-outcome condition, not the negative-outcome condition.** The CONTESTED marker can be removed; replaced with SYNTHESIZED (PROVISIONAL) plus explicit architectural constraint.

---

## ENTRYPOINT.md update required

**Action:** Update external register row in domain-conditional checklist:
- Remove CONTESTED marker
- Add: "Positive-outcome architectural condition: bounded structured predicate register (K≤6) with programmatic exhaustion detection — NOT an unbounded growing scratchpad or raw conversation history. The negative-outcome finding (arXiv:2603.29231, HIGH) applies to unbounded `add_to_memory()` scratchpads that inject growing content into every turn; this mechanism does not apply to a bounded predicate register. (SYNTH-03, 2026-07-05, PROVISIONAL — architectural distinction inferred from mechanism alignment; not directly tested as controlled variable.)"
- Status: SYNTHESIZED (PROVISIONAL)

---

## grounding-map.md update required

Row 15: upgrade from CONTESTED to SYNTHESIZED (PROVISIONAL). Add SYNTH-03 closing angle. Add flip trigger.

---

*SYNTH-03 complete: 2026-07-05. Conflict resolved via architectural scope-explanation. Bounded predicate register ≠ unbounded growing scratchpad. ENTRYPOINT.md recommendation (K≤6 bounded predicate list) aligns with positive-outcome architecture.*

---

## Post-Cluster-Review (PCR) — 2026-07-05

**Result:** PASS-WITH-NOTES

### What passed

**F-PASS-1 — ENTRYPOINT.md propagation: CORRECT**
The external register row in the domain-conditional checklist was correctly updated. The CONTESTED marker was removed and replaced with SYNTHESIZED (PROVISIONAL) language including: explicit positive-outcome architectural condition (bounded K≤6 predicate list, NOT unbounded `add_to_memory()` scratchpad), mechanism explanation for why the negative finding does not apply, flip trigger for VALIDATED upgrade, and SYNTH-03 citation. The propagated text is more complete than the synthesis's specification for the update — this is correct, not excess.

**F-PASS-2 — grounding-map.md row: CORRECT**
Row 15 (external intention register) was correctly updated: status CONTESTED → 🔬 SYNTHESIZED (PROVISIONAL), trials 1→2, closing angle entry present, SYNTH-03 fully documented. The grounding-map footer contains the SYNTH-03 update record.

**F-PASS-3 — Conflict resolution logic: MECHANISTICALLY SOUND**
The scope-explanation test resolves the OdysseyBench/arXiv:2603.29231 conflict correctly. The bounded vs unbounded architectural distinction is a genuine scope condition, not a rationalization: the negative outcome mechanism in arXiv:2603.29231 (per-step write overhead from growing injection) structurally requires both (1) register grows with each step AND (2) full register injected every turn — a bounded predicate register violates condition 1. The PROVISIONAL status is correctly applied: the architectural distinction is inferred from mechanism alignment, not directly tested as a controlled variable.

**F-PASS-4 — Converging evidence correctly incorporated**
The three converging HIGH/MEDIUM findings from batches 4/5 (`retrieval-dominates-write-quality-secondary` HIGH, `structural-write-failure-predicts-correctness-parametric-does-not` HIGH, `write-trigger-depends-on-unreliable-internal-state` MEDIUM) are correctly cited. Their propagation to ENTRYPOINT.md occurred through batch 5 angle 2's grounding-map row 18, not SYNTH-03 directly — which is appropriate since these findings have broader scope than the conflict synthesis.

---

### Findings with notes

**N1 — Step 3.7 (Principled derivations): FORMAT GAP**
The synthesis lacks a formally labeled "Step 3.7 Principles and extensions" section per the research-synthesis.md procedure ("A synthesis that stops at Step 3.6 produces a literature report, not a design foundation"). The principles are embedded in the Synthesis Decision section but are not extracted in the required sub-step A/B/C format. Extracted here for record:

**Principle A** — Register architecture type determines outcome polarity for external state in multi-step agents. Bounded structured schemas (fixed fields, non-growing, selective retrieval) produce positive outcomes at extended horizons. Unbounded accumulating schemas (append every turn, full-content injection every turn) produce degradation because write overhead + context growth consume step budget. The causal variable is the growth mechanism and injection pattern, not external state itself.
- *Setup fit*: ENTRYPOINT.md specifies the bounded predicate architecture. Principle correctly applied.
- *Derivation beyond finding*: The principle implies ANY external store whose content grows monotonically with task length would fail — not only text scratchpads. This includes growing tool result logs, cumulative evidence registers, expanding plan buffers. A fixed-size circular buffer with eviction would qualify as positive-outcome by this principle — not tested by either paper.

**Principle B** — Contradiction resolution by mechanism alignment is the correct procedure when two HIGH findings appear to test the same construct. The correct question is: does the mechanism behind the negative finding structurally apply to the positive-finding setup? If the mechanism requires conditions X AND Y, and the positive-finding setup violates condition X, the negative mechanism cannot produce its effect there.
- *Setup fit*: General procedure principle for future conflict syntheses.
- *Derivation*: Mechanism-alignment resolutions carry more uncertainty than scope-explanation resolutions based on explicit study-level moderators, because the mechanism conditions must be correctly identified from the paper's own description. The resolution is only as strong as the mechanistic reading of both papers.

**Principle C** — Mandatory structured checkpoints outperform agent-discretionary writes for external register updates because agents lack architectural mechanisms for reliable internal state maintenance. A bounded predicate register is both a schema AND a checkpoint design — write protocol is mandatory (update step status after each step) and structured (fixed fields, not free-form). Evidence: MEDIUM (arXiv:2505.10571).
- *Setup fit*: The "include explicit write-confirmation step in the register update procedure" guidance in ENTRYPOINT.md implements this principle. Already applied.

Cross-match against kit procedures (PCR Step 2.0): No violations found. Principle A is implemented as the positive-outcome architectural condition; Principle B is a meta-procedure principle (no kit procedure contradicts it); Principle C is implemented in the register update guidance.

---

**N2 — Counter-prior passes on converging HIGH groups: MISSING (assessed inline)**
SYNTH-03 has five HIGH-evidence groups. The research-synthesis.md Step 3.6 completion check requires the count of counter-prior entries to equal the number of HIGH groups. SYNTH-03 fails count-parity:

| HIGH group | Counter-prior present? |
|---|---|
| OdysseyBench bounded register positive outcome (HIGH) | YES — arXiv:2603.29231 is the counter-prior by design |
| arXiv:2603.29231 unbounded scratchpad negative outcome (HIGH) | YES — OdysseyBench is the counter-prior by design |
| `retrieval-dominates-write-quality-secondary` (arXiv:2603.02473, HIGH) | NO |
| `structural-write-failure-predicts-correctness` (arXiv:2605.28840, HIGH) | NO |
| `sagallm-constraint-omission-external-saga-state` (arXiv:2503.11951, HIGH) | NO |

Count: 2 counter-prior entries vs 5 HIGH groups. Procedure says: run for all HIGH groups before proceeding. Counter-priors assessed inline for the three missing groups:

- **Group 3** (`retrieval-dominates-write-quality-secondary`): Counter-prior — what if write strategy matters more than retrieval for bounded registers? Partially supported by MemFail ANECDOTE (write accuracy is a precondition for net-positive outcome). But the bounded register specifically minimizes retrieval noise, which is exactly the bottleneck this HIGH finding names. Counter-prior does not undermine synthesis direction; it reinforces the write-accuracy caveat already noted under "Remaining uncertainty." Tier: UNCHANGED.
- **Group 4** (`structural-write-failure-predicts-correctness`): Counter-prior — what if structural write failure doesn't apply to fixed-schema predicate registers? A bounded schema may enforce correct tool selection (only one field to write per step), potentially reducing structural failure to near-zero for this architecture. This counter-prior, if true, STRENGTHENS the bounded register case — the architecture prevents the dominant failure class. Tier: UNCHANGED.
- **Group 5** (`sagallm-constraint-omission-external-saga-state`): Counter-prior — what if three orthogonal state dimensions (S_A/S_O/S_D) produce over-engineering for simple workflows? K≤6 is simpler than SagaLLM's full model; simple workflows may not need orthogonal dimensions. Counter-prior is bounded — SYNTH-03 targets "≥10 sequential steps or cross-domain boundaries" where SagaLLM's complexity is warranted. Tier: UNCHANGED.

**None of the three counter-priors undermines the synthesis conclusion.** No tier revision required. No additional research angle warranted from these counter-priors. The missing counter-prior passes were a procedural gap; assessment above closes them.

---

**N3 — rule-outcome-register.md entry: MISSING — ADDED IN THIS PCR**
PCR Step 4 requires writing to `state/rule-outcome-register.md` after applying changes. SYNTH-03 applied changes to ENTRYPOINT.md and grounding-map.md. No SYNTH-03 entry existed. Entry SYNTH-03-A1 added.

**N4 — RESEARCH_ANGLES.md flip trigger angle: MISSING — ADDED IN THIS PCR**
PCR Step 7 requires adding P1+ new angles to `kit-maker-research/RESEARCH_ANGLES.md`. SYNTH-03 documents a VALIDATED upgrade flip trigger requiring a head-to-head study comparing bounded K≤6 predicate register vs unbounded growing scratchpad vs in-context tracking. Batch 5 angles cover related questions (write omission rate, mandatory checkpoint scheduling, net-negative crossover step count) but none tests architecture type as the isolated variable. Angle added.

---

### Files verified

| File | Check | Result |
|---|---|---|
| ENTRYPOINT.md (external register row) | Propagation correct, CONTESTED removed, SYNTHESIZED (PROVISIONAL) with architectural condition and flip trigger | PASS |
| grounding-map.md (row 15) | Status CONTESTED → SYNTHESIZED (PROVISIONAL), trials 1→2, SYNTH-03 documented | PASS |
| rule-outcome-register.md | SYNTH-03-A1 entry | ADDED (N3) |
| RESEARCH_ANGLES.md | Bounded vs unbounded architecture comparison angle | ADDED (N4) |

### Step 5 (re-review from new vantage): scope-limited null

PCR additions are record-entries only (rule-outcome-register entry + RESEARCH_ANGLES.md angle). No procedural changes made. No adjacent procedure dependencies. Step 5 subagent dispatch not warranted. Explicit null: "Step 5 null — PCR additions are additive records with no dependency implications; no adjacent inconsistencies to surface."

---

*PCR complete: 2026-07-05. Result: PASS-WITH-NOTES. ENTRYPOINT.md and grounding-map.md correctly propagated. Three procedural gaps found: Step 3.7 format gap (principles extracted inline in N1 above); missing counter-prior passes on converging HIGH groups (assessed inline in N2 — no tier revision needed); missing rule-outcome-register and RESEARCH_ANGLES.md entries (both added as N3/N4). Substantive synthesis conclusion is sound; no changes to ENTRYPOINT.md or grounding-map.md required.*
