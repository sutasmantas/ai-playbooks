# INT-10 Blind Scoring — Input 19, Condition C, Evaluator 1

Scored: 2026-07-06
Evaluator: subagent (blind — condition identity not known at scoring time)

---

## Q1 — VOCABULARY TRADITION COVERAGE: Score 3

**Distinct tradition labels present (8 total):**
1. MI circuits paradigm
2. Causal intervention methods
3. SAE / dictionary learning
4. Probing / representational analysis
5. CoT faithfulness / NLP evaluation
6. Implicit / latent reasoning
7. Philosophy of science / epistemology (adversarial)
8. Program synthesis / formal verification (cross-disciplinary)

**≥4 distinct non-synonymous labels:** 8 traditions present. None are synonymous — each names a different method family with non-overlapping primary vocabulary.

**≥2 NOT derivable from user input words:** User input contained "chain-of-thought reasoning," "mechanistic interpretability," and "explainability." Traditions clearly not derivable: SAE / dictionary learning (sparse autoencoders, dictionary learning, overcomplete features — none appear in user input); Probing / representational analysis (linear probes, representational geometry, linear representation hypothesis); Causal intervention methods (activation patching, causal tracing, mediation analysis); Program synthesis / formal verification (program execution, trace equivalence, cs.PL). Well exceeds the threshold of ≥2.

**≥1 from adjacent discipline:** Program synthesis / formal verification is explicitly from formal methods in CS (arXiv cs.PL), a primary field whose subject matter is algorithm specification and verification — structurally distinct from MI/NLP. Philosophy of science / epistemology is a second adjacent-discipline tradition. Criterion met with at least 2 adjacent-discipline traditions.

**Determining evidence:** "Vocabulary tradition: Program synthesis / formal verification — NOT in the intake brief; cross-disciplinary from computer science formal methods" and "Vocabulary tradition: Philosophy of science / epistemology of scientific explanation — NOT from MI circuits, causal intervention, SAE, probing, CoT faithfulness, or implicit reasoning traditions"

---

## Q7 — STRUCTURAL COMPLETENESS: Score 3

All three required elements present.

**Element (a) — Null-hypothesis angle naming a SPECIFIC failure MECHANISM:** Angle 7 names specific mechanisms: "spurious circuit attributions," "cases where activation patching produces misleading results," "non-replication of reported reasoning circuits," "scope conditions under which MI methods break down." These are distinct named mechanisms, not a generic "failures exist" statement.

**Element (b) — Exact text "ADVERSARIAL-FLAGGED" verbatim:** Present. Angle 8 header: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]". Coverage map: "Assigned: D1 (ADVERSARIAL-FLAGGED)". Type Allocations: "Slot D1 (Adversarial — ADVERSARIAL-FLAGGED): assigned".

**Element (c) — Cross-disciplinary angle from a different primary field with non-overlapping vocabulary:** Angle 9 — "Program Synthesis and Formal Verification Perspectives on CoT as Algorithm Execution." Explicitly stated: "Vocabulary tradition: Program synthesis / formal verification — NOT in the intake brief; cross-disciplinary from computer science formal methods." Non-overlapping vocabulary confirmed: "specification," "correctness," "trace equivalence," "cs.PL."

**Determining evidence:** "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" and "cross-disciplinary from computer science formal methods... it is NOT in the intake brief vocabulary and is structurally distinct from the MI / NLP traditions"

---

## Q5 — ACTIONABILITY: Score 3

**Every angle has ≥2 runnable query strings:** All 9 angles have exactly 3 runnable queries (27 queries total). No angle has fewer than 2.

**All use tradition-specific vocabulary:** Every query uses at least one tradition-specific anchor term. Representative examples:
- Angle 1 Q3: `"ACDC" OR "automatic circuit discovery" reasoning "large language model" arXiv cs.LG` — named technique specific to MI circuits tradition
- Angle 2 Q3: `"path patching" OR "causal scrubbing" reasoning chain language model interpretability arXiv` — causal intervention-specific technique names
- Angle 3 Q3: `"SAE" "mechanistic interpretability" reasoning "language model" features monosemanticity arXiv cs.LG` — SAE-tradition acronym + named concept
- Angle 8 Q1: `mechanistic explanation neural network underdetermined falsifiability interpretability critique adequacy` — philosophy of science vocabulary not present in other angles

No generic phrase concatenations found.

**All have ≥1 specificity operator:** All queries satisfy at least one criterion:
- Named technique: ACDC, path patching, causal scrubbing, SAE, sparse autoencoder, activation patching, causal tracing, dictionary learning
- Boolean AND of two distinct quoted concepts: e.g., `"activation patching" "chain-of-thought"`
- Numerical/temporal threshold: date filters "2023 2024 2025" or "2024 2025" in multiple angles
- Named venue: `arXiv cs.LG`, `arXiv cs.CL`, `arXiv cs.PL` as venue specificity operators
- Named author/paper: "Turpin et al.," "Lanham et al.," "Bills et al." mentioned in angle bodies with query vocabulary drawn from their framings

**Determining evidence:** `"ACDC" OR "automatic circuit discovery" reasoning "large language model" arXiv cs.LG` (named technique + venue) and `"path patching" OR "causal scrubbing" reasoning chain language model interpretability arXiv` (two named techniques)

---

## Q3 — PRECISION / NON-REDUNDANCY: Score 3

**Checking all major angle pairs for >60% query overlap:**

Clearly distinct pairs:
- A1 (circuits: ACDC, IOI, circuit discovery) vs A2 (causal: activation patching, causal tracing, path patching): Different primary vocabulary, different seminal papers (Conmy et al. vs Meng et al.)
- A1 vs A3 (SAE: sparse autoencoder, dictionary learning): Circuit structure vs feature decomposition — different primary paper sets
- A2 vs A4 (probing: linear probes, representational geometry): Intervention vocabulary vs representational vocabulary
- A3 vs A4: Overcomplete feature dictionaries vs linear classifiers — structurally different methods
- A8 (philosophy of science) vs all MI-tradition angles: Non-overlapping vocabulary by design
- A9 (program synthesis) vs all other angles: cs.PL vocabulary has no overlap with cs.LG/cs.CL MI vocabulary

**A5 (CoT faithfulness) vs N1 (null-hypothesis) — assessed as NOT exceeding 60%:**

This is the only pair with potential overlap. The output itself flags it as an edge case. Assessment: the bulk of N1's retrieval target is MI-method-specific failures — N1 Q1 (`"mechanistic interpretability" failure spurious reasoning circuit language model limitations negative`) and N1 Q2 (`"circuit" "chain-of-thought" OR reasoning non-generalizing OR brittle explanation language model`) target papers about ACDC failures, non-generalizing circuits, brittle circuit attributions — a different primary paper set from A5's CoT faithfulness measurement literature (Turpin et al., Lanham et al.). N1 Q3 (`faithfulness failure "mechanistic" explanation reasoning`) drifts toward A5's territory, but this is one of three N1 queries; A5's full paper set (faithfulness measurement methods) and N1's full paper set (MI method failures) have meaningful non-overlapping subsets. The 60% threshold is not reached by the full angle-level retrieval sets.

**Score 3:** Zero pairs where query overlap would retrieve >60% of the same papers. A5/N1 conceptual overlap is real but does not exceed the threshold at the full-angle-set level.

**Determining evidence:** N1 Q1 `"mechanistic interpretability" failure spurious reasoning circuit language model limitations negative` targets MI-method-failure papers (different from A5's faithfulness-measurement focus); A5 Q2 `"unfaithful" "chain-of-thought" OR "post-hoc rationalization" reasoning language model empirical` targets CoT evaluation papers (different primary set from N1's circuit-failure focus).

---

## P1 — PROCEDURE ADHERENCE: Score 3

All three required elements fully present.

**Element (a) — Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
- Tradition list with gap flags: 6 traditions, each with "Gap flag: No — planned"
- Gap check: "Traditions NOT yet represented in the planned confirmatory list: None — all 6 traditions from intake brief have at least one confirmatory slot."
- Cross-disciplinary slot with stated selection basis: "Target tradition: program synthesis / formal verification; Basis: this tradition frames reasoning as algorithm execution and has developed formal models of step-by-step computation that could ground MI accounts of CoT; it is NOT in the intake brief vocabulary and is structurally distinct from the MI / NLP traditions"

**Element (b) — Intake brief with vocabulary traditions + question-type classification + severity assessment:**
- Vocabulary traditions: 6 candidate traditions listed with representative terms
- Question-type classification: "Question type: EXPLORATORY (no comparison or intervention-outcome structure; user asked for the space of mechanistic approaches, not a comparison between two approaches)"
- Severity assessment: "Source B status: UNAVAILABLE — MODERATE (Source A + Source C produced 6 distinct vocabulary traditions; vocabulary-discovery confidence is MODERATE, not HIGH RISK)"

**Element (c) — ≥1 gate documented as run:** GATE SUMMARY section present with four gates (Completeness, Distinctness, Launchability, Scoring prohibition), each with explicit PASS verdicts and documented reasoning. "Overall verdict: PASS — dispatch ready."

**Determining evidence:** "COVERAGE MAP... Cross-disciplinary slot: Target tradition: program synthesis / formal verification; Basis: this tradition frames reasoning as algorithm execution..." and "Gate 1 — Completeness: Null-hypothesis angle present: PASS... Overall verdict: PASS — dispatch ready"

---

## M1 — SELF-ASSESSMENT DEGRADED MODE: Score 2

**Element (a) — Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** PRESENT. Appears as section header "## VOCABULARY SELF-REPORT FLAG", in the intake brief "proceeding with VOCABULARY SELF-REPORT FLAG", and in Gate Summary "VOCABULARY SELF-REPORT FLAG — all 8 vocabulary traditions were enumerated by LLM only." Criterion met.

**Element (b) — Severity labeled "MODERATE RISK" or "HIGH RISK":** ABSENT. The output labels severity as "MODERATE": "Source B status: UNAVAILABLE — MODERATE" and "vocabulary-discovery confidence is MODERATE, not HIGH RISK." The exact phrase "MODERATE RISK" does not appear anywhere. The output mentions "HIGH RISK" only as a negation ("not HIGH RISK"), not as the applied severity label. Neither required label form appears. Criterion NOT met.

**Element (c) — ≥1 tradition named as possibly absent due to source limitation:** PRESENT. "Cross-disciplinary traditions most at risk of being missed: formal verification / program analysis applied to LLMs, cognitive neuroscience of reasoning, information-theoretic approaches to mechanistic explanation." Gate Summary also names: "Most likely missing: information-theoretic approaches to mechanistic explanation (MDL, compression-based interpretability), cognitive neuroscience of human multi-step reasoning (analogy literature), and any post-August-2025 vocabulary." Criterion met.

**Element (d) — Coverage described as reduced (not FULL):** PRESENT. "All vocabulary traditions in this output were enumerated by LLM only... External validation via survey-paper probe is recommended before treating this list as complete." Explicitly incomplete. Criterion met.

**Score 2:** Three of four elements present. The self-report flag is present, reduced coverage is stated, and missing traditions are named. Missing only the exact severity label form — the output uses "MODERATE" where the criterion requires "MODERATE RISK."

**Determining evidence:** `"## VOCABULARY SELF-REPORT FLAG"` present verbatim; severity label `"vocabulary-discovery confidence is MODERATE, not HIGH RISK"` does not match required label form "MODERATE RISK" or "HIGH RISK."

---

## Final Scores

| Dimension | Score |
|-----------|-------|
| Q1 (Vocabulary tradition coverage) | 3 |
| Q7 (Structural completeness) | 3 |
| Q5 (Actionability) | 3 |
| Q3 (Precision / non-redundancy) | 3 |
| P1 (Procedure adherence) | 3 |
| M1 (Self-assessment degraded mode) | 2 |
