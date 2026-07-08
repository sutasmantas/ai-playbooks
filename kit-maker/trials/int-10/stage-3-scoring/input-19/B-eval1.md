# INT-10 Blind Evaluation — Input 19, Condition B, Evaluator 1

**Date:** 2026-07-06
**Evaluator:** eval1 (blind — condition not known at scoring time)
**Scoring version:** pre-registered criteria locked 2026-07-05

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output enumerates 9 distinct vocabulary traditions across the intake brief, coverage map, type allocations, and angle records:

1. Mechanistic interpretability — circuits & attention analysis
2. Mechanistic interpretability — causal mediation analysis
3. Sparse features / dictionary learning
4. CoT faithfulness evaluation
5. Representation engineering / probing
6. In-context learning mechanisms
7. Behavioral pattern learning / shortcut learning (adversarial slot)
8. MI methodology critique / replication and generalization limits (null-hypothesis slot)
9. Cognitive neuroscience / computational neuroscience (cross-disciplinary slot)

User input words were: "explainability," "chain-of-thought reasoning," "mechanistic interpretability." Traditions 1 and 2 are derivable from those words. Traditions 3 through 9 are NOT derivable from user input: "sparse autoencoders / dictionary learning," "faithfulness evaluation," "representation engineering / probing," "in-context learning mechanisms," "shortcut learning," "replication limits," and "cognitive neuroscience" all introduce vocabulary absent from the prompt.

Tradition 9 (cognitive neuroscience / computational neuroscience) is unambiguously from an adjacent discipline with non-overlapping primary subject matter: the coverage map states "Terms such as 'working memory models,' 'prefrontal cortex sequential reasoning,' 'hierarchical prediction in neural circuits,' and 'neural basis of planning' are absent from all 6 MI traditions above."

All three score-3 conditions satisfied: ≥4 distinct non-synonymous tradition labels (9 present), ≥2 not derivable from user input (at least 7), ≥1 from an adjacent discipline (Tradition 9).

**Evidence:** "Tradition 3: Sparse features / dictionary learning — Representative terms: superposition hypothesis, polysemanticity, monosemantic features, sparse autoencoders (SAEs), dictionary learning"; "Slot C1 (Cross-disciplinary — cognitive neuroscience): Focus: biological neural circuit models of sequential reasoning as a reference frame for CoT."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present.

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM (not just "failures exist"):**

Angle 8 names multiple specific, testable failure mechanisms: "circuits found for CoT are not causally sufficient for CoT outputs," "circuit findings do not replicate across model architectures or training runs," "activation patching confounds exist specifically for CoT tasks," "SAE decompositions miss causally relevant CoT computation." These are mechanistically specific — not generic acknowledgments that failures exist.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**

Present in both the angle header line ("### ANGLE 7 [ADVERSARIAL-FLAGGED]: Chain-of-Thought as Learned Text Pattern...") and inside the angle record ("[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"). Also present in the summary table row.

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**

Angle 9 targets "Cognitive neuroscience / computational neuroscience" with source types "PubMed + Cognitive Science journal + Nature Neuroscience — NOT arXiv" and vocabulary that does not appear in any of the 6 confirmatory traditions: "working memory," "prefrontal cortex," "episodic retrieval," "biological neural circuit."

**Evidence:** "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"; "evidence that activation patching confounds exist specifically for CoT tasks"; "Target tradition: Cognitive neuroscience / computational neuroscience... Terms such as 'working memory models,' 'prefrontal cortex sequential reasoning'... are absent from all 6 MI traditions above."

---

## Q5 — ACTIONABILITY

**Score: 3**

Every angle has ≥2 runnable query strings (all angles have 4 queries; Angle 8 has 5). No angle has fewer than 2.

All queries use tradition-specific vocabulary rather than generic concatenation of user-input words:
- A1 Q4: "QK OV circuit decomposition chain-of-thought multi-hop inference transformer" — named technical constructs from circuit analysis
- A3 Q3: "monosemantic features scratchpad polysemanticity superposition chain-of-thought tokens" — SAE/dictionary learning vocabulary
- A4 Q4: "steganographic reasoning hidden computation chain-of-thought mechanistic interpretability" — CoT faithfulness tradition vocabulary
- A8 Q3: "activation patching confounds limitations causal claims sequential reasoning scratchpad chain-of-thought" — methodology critique vocabulary
- A9 Q1: "neural mechanisms sequential reasoning working memory prefrontal cortex step-by-step problem solving" — cognitive neuroscience vocabulary

All angles have ≥1 specificity operator. Examples: named techniques (QK OV, path patching, sparse autoencoders, linear representation hypothesis, task vectors, steganographic reasoning, activation patching); year threshold ("large language models 2024" in A2 Q1); named brain regions ("prefrontal cortex" in A9). Every query combines at least two distinct named concepts as a Boolean intersection rather than a generic string.

**Evidence:** "QK OV circuit decomposition chain-of-thought multi-hop inference transformer"; "monosemantic features scratchpad polysemanticity superposition chain-of-thought tokens."

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output runs an explicit Gate 2 pairwise distinctness check and flags the closest pair. Evaluating the two most concerning pairs:

**A1 (circuits & attention analysis) vs A6 (ICL mechanisms):** Flagged by the output as "closest pair." A1's queries target CoT-specific circuit discovery: "QK OV circuit decomposition," "circuit analysis multi-step reasoning... ablation." A6's queries target whether existing ICL mechanism literature transfers to CoT: "task vectors induction heads multi-step reasoning," "retrieval heads chain-of-thought factual reasoning... associative recall," "few-shot prompting mechanism... induction head role." Both angles mention induction heads, but A1 asks what CoT-native circuits exist, while A6 asks whether pre-existing ICL mechanisms are operative during CoT. The primary publication populations differ (Elhage/circuits thread vs. Olsson/ICL/task-vector thread). Estimated retrieval overlap well under 60%.

**A2 (causal tracing) vs A4 (CoT faithfulness):** A2 asks WHERE computation happens inside the model via activation patching. A4 asks WHETHER CoT tokens causally influence the final answer. Orthogonal research questions despite partial vocabulary overlap on "causal."

No pair is identified as fully synonymous. No single tradition dominates (9 traditions, 9 angles). Zero pairs estimated to exceed 60% retrieval overlap.

**Evidence:** "A1 vs A2: Distinctive terms — A1: 'attention heads circuits QK OV'; A2: 'activation patching causal tracing.' Different literature... OR retrieval would not produce the same documents. PASS."; "A6 vs A1: Second-closest pair... PASS — but human reviewer should check if execution returns substantially overlapping paper sets."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are present.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**

The "COVERAGE MAP" section lists 6 traditions with individual gap flags ("Gap flag: no"), a "Traditions NOT yet represented in the planned list" subsection confirming all 6 have slots, and an explicit "Cross-disciplinary slot (required)" entry with multi-sentence selection basis: "Basis for selection: Cognitive neuroscience studies how biological neural networks implement sequential reasoning (working memory, prefrontal planning, episodic retrieval)."

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**

The "INTAKE BRIEF" block lists 5 candidate vocabulary traditions with representative terms and named key researchers; classifies question type as "EXPLORATORY" with basis; includes severity: "Source B status: UNAVAILABLE — MODERATE (Source A + Source C produced 5 distinct vocabulary traditions; proceeding with VOCABULARY SELF-REPORT FLAG active)."

**(c) ≥1 gate documented as run (GATE PASSED or GATE FAILED notation):**

The "GATE SUMMARY" section documents 4 gates with explicit verdicts: "Gate 1 Overall: PASS," "Gate 2 Overall: PASS," "Gate 3 Overall: PASS," "Gate 4 Overall: PASS," and "Overall verdict: PASS — dispatch ready." An intake-level gate check also appears: "Gate conditions satisfied. Proceeding to angle-generation.md."

**Evidence:** "Gate 1 Overall: PASS"; "Source B status: UNAVAILABLE — MODERATE... proceeding with VOCABULARY SELF-REPORT FLAG active"; "Cross-disciplinary slot (required): Target tradition: Cognitive neuroscience / computational neuroscience. Basis for selection: Cognitive neuroscience studies how biological neural networks implement sequential reasoning..."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Checking each required element:

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** PRESENT. Appears in the preamble header: "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only." Also present in the GATE SUMMARY and intake brief body.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** NOT PRESENT with exact required label. The output uses "MODERATE severity" throughout: "MODERATE severity per intake.md Step 5" (preamble and gate summary). The severity level conveyed is MODERATE, but the exact required strings "MODERATE RISK" or "HIGH RISK" do not appear anywhere in the output.

**(c) ≥1 tradition named as possibly absent due to source limitation:** NOT PRESENT. The output says "Missing traditions may exist in the MI+CoT literature that LLM enumeration did not surface," but no specific tradition is named as a candidate for being absent. The acknowledgment is generic, not naming any particular tradition that might be missing.

**(d) Coverage described as reduced (not FULL):** PRESENT. Stated in the preamble: "Expected coverage: MODERATE, not FULL (per CLAUDE.md deployment constraints)."

Elements (a) and (d) are satisfied; element (b) is conveyed but with wrong exact phrasing ("severity" vs. "RISK"); element (c) is absent (no specific tradition named as possibly missing). Missing one required element clearly ((c)) and one approximately ((b) exact label). Fits score 2: self-report flag + severity acknowledged + coverage reduced, but missing one fully required element (specific absent tradition named).

**Evidence:** "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only. Source B (web search / survey-paper probe) is unavailable in this execution context."; "Expected coverage: MODERATE, not FULL"; "Missing traditions may exist in the MI+CoT literature that LLM enumeration did not surface." [generic — no specific tradition named]

---

## Summary Table

| Dimension | Score | Max |
|-----------|-------|-----|
| Q1 — Vocabulary tradition coverage | 3 | 3 |
| Q7 — Structural completeness | 3 | 3 |
| Q5 — Actionability | 3 | 3 |
| Q3 — Precision / non-redundancy | 3 | 3 |
| P1 — Procedure adherence | 3 | 3 |
| M1 — Self-assessment degraded mode | 2 | 3 |

**Total: 17 / 18**

**Primary deduction:** M1 loses 1 point — element (b) uses "MODERATE severity" rather than the required exact label "MODERATE RISK" or "HIGH RISK," and element (c) provides only a generic acknowledgment of possibly missing traditions without naming any specific tradition.
