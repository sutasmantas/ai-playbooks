# INT-10 Blind Evaluation — Input 19, Condition B, Evaluator 3

**Scoring date:** 2026-07-06
**Evaluator:** 3 (blind — condition unknown at time of scoring)
**Input topic:** Mechanistic interpretability of chain-of-thought reasoning

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output enumerates 9 distinct vocabulary traditions across the intake brief, coverage map, and angle list:
1. Mechanistic interpretability — circuits & attention analysis
2. Mechanistic interpretability — causal mediation analysis
3. Sparse features / dictionary learning
4. CoT faithfulness evaluation
5. Representation engineering / probing
6. In-context learning mechanisms
7. Behavioral pattern learning / shortcut learning (adversarial)
8. MI methodology critique / replication limits (null-hypothesis)
9. Cognitive neuroscience / computational neuroscience (cross-disciplinary)

That is well above the threshold of ≥4 distinct non-synonymous traditions. More than 2 are NOT derivable from user input words ("mechanistic interpretability," "chain-of-thought," "explainability"): sparse features/dictionary learning, CoT faithfulness evaluation, behavioral pattern learning, cognitive neuroscience, MI methodology critique are all outside the user's prompt vocabulary. The cognitive neuroscience tradition is explicitly from an adjacent discipline with non-overlapping vocabulary ("working memory models," "prefrontal cortex sequential reasoning," "episodic retrieval").

Key evidence: "Vocabulary tradition: Cognitive neuroscience / computational neuroscience" (Angle 9); "Vocabulary tradition: Behavioral pattern learning / shortcut learning" (Angle 7); "Tradition 3: Sparse features / dictionary learning — Representative terms: superposition hypothesis, polysemanticity, monosemantic features, sparse autoencoders (SAEs), dictionary learning."

Score 3 threshold met: ≥4 distinct non-synonymous tradition labels (9 present), ≥2 not derivable from user input (6+), ≥1 from adjacent discipline (cognitive neuroscience).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present.

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM (not just "failures exist"):**
Angle 8 is titled "Evidence That Mechanistic Interpretability Does NOT Validly Explain Chain-of-Thought" and names specific failure mechanisms throughout: "evidence that MI circuits found for CoT are not causally sufficient for CoT outputs; evidence that circuit findings do not replicate across model architectures or training runs; evidence that activation patching confounds exist specifically for CoT tasks." Queries reinforce specificity: "circuit analysis does not generalize replication failure language models reasoning architecture," "activation patching confounds limitations causal claims sequential reasoning scratchpad chain-of-thought." These are specific mechanisms, not a generic "failures exist" acknowledgment.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Present in the angle 7 section header: "### ANGLE 7 [ADVERSARIAL-FLAGGED]: Chain-of-Thought as Learned Text Pattern Without Mechanistic Reasoning Substance" and within the angle block: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]." Also in the summary table: "[ADVERSARIAL-FLAGGED] CoT as Learned Text Pattern."

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**
Angle 9 targets cognitive neuroscience / computational neuroscience. The coverage map confirms: "Confirmed distinct by tradition label check." Source types differ entirely: "PubMed + Cognitive Science journal + Nature Neuroscience (NOT arXiv — different ingest policy; this angle targets a distinct author population and publication incentive structure from all confirmatory angles)." Vocabulary is non-overlapping: "working memory," "prefrontal cortex," "episodic retrieval," "biological neural circuit."

Key evidence: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"; "Target tradition: Cognitive neuroscience / computational neuroscience — Terms such as 'working memory models,' 'prefrontal cortex sequential reasoning'... are absent from all 6 MI traditions above."

---

## Q5 — ACTIONABILITY

**Score: 3**

Every angle (1 through 9) contains 4 or 5 runnable query strings. All queries use tradition-specific vocabulary rather than generic phrase concatenation. All angles contain ≥1 specificity operator (named technique, named concept pair, or named venue/author).

Spot-checks across diverse angles:
- Angle 1 Q4: "QK OV circuit decomposition chain-of-thought multi-hop inference transformer" — named technical components (QK/OV matrices) specific to transformer circuit analysis tradition.
- Angle 2 Q3: "causal scrubbing chain-of-thought component localization MLP attention residual stream" — named technique (causal scrubbing) with Boolean AND of distinct concepts.
- Angle 3 Q3: "monosemantic features scratchpad polysemanticity superposition chain-of-thought tokens" — tradition-specific vocabulary (monosemantic, polysemanticity, superposition) from dictionary learning tradition.
- Angle 7 Q1: "chain-of-thought shortcut learning surface statistics text pattern language models spurious correlation" — adversarial-tradition vocabulary, multiple named concepts.
- Angle 8 Q3: "activation patching confounds limitations causal claims sequential reasoning scratchpad chain-of-thought" — named technique + limitation framing from MI methodology critique.
- Angle 9 Q1: "neural mechanisms sequential reasoning working memory prefrontal cortex step-by-step problem solving" — neuroscience-specific anatomical vocabulary.

No generic queries without specificity operators appear. No angle uses query strings that could be mistaken for tradition-neutral concatenation of topic words alone.

Score 3 threshold met: every angle ≥2 queries (all have 4+), all use tradition-specific vocabulary, all have ≥1 specificity operator.

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

No angle pair would retrieve >60% of the same papers based on query vocabulary analysis.

The document runs a Gate 2 distinctness check and flags A1/A6 as the closest pair. Evaluating this:

**A1 vs A6 (closest flagged pair):**
A1 queries: "mechanistic interpretability chain-of-thought attention heads circuits transformers," "QK OV circuit decomposition chain-of-thought multi-hop inference transformer."
A6 queries: "task vectors induction heads multi-step reasoning chain-of-thought relationship mechanistic," "retrieval heads chain-of-thought factual reasoning mechanistic interpretability associative recall."
Both involve attention analysis and induction heads appear in A1-Q3 and A6. However, A6's primary literature is the ICL mechanism cluster (Olsson et al., Todd et al., Geva et al.) while A1 targets CoT-specific circuit discovery. Different research question; different primary paper population. Overlap well below 60%.

**A2 vs A4:** A2 asks where computation happens (causal localization via activation patching). A4 asks whether CoT text reflects that computation (faithfulness). Partial vocabulary overlap on "causal" but distinct research question and literature population.

**A3 vs A5:** Unsupervised (SAEs) vs. supervised (probing classifiers) — methodologically distinct; different primary literature.

**A7 vs all:** Structurally designed with vocabulary explicitly excluded from A1–A6. Zero overlap by construction.

**A9 vs all:** Different venue (PubMed not arXiv), different author population, completely non-overlapping vocabulary.

Score 3 threshold met: zero angle pairs where >60% paper overlap would result.

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are present and complete.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The COVERAGE MAP section lists 6 traditions, each with "Gap flag: no," a "Traditions NOT yet represented in the planned list" subsection confirming all traditions have planned slots, and a "Cross-disciplinary slot (required)" section with explicit three-sentence selection basis: "Cognitive neuroscience studies how biological neural networks implement sequential reasoning (working memory, prefrontal planning, episodic retrieval). This tradition provides a theoretical framework for what MI approaches are trying to find. Terms such as 'working memory models,' 'prefrontal cortex sequential reasoning,' 'hierarchical prediction in neural circuits'... are absent from all 6 MI traditions above."

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
The INTAKE BRIEF section lists 5 candidate vocabulary traditions with representative terms and key researchers, classifies question type as "EXPLORATORY" with rationale, and includes severity assessment: "Source B status: UNAVAILABLE — MODERATE (Source A + Source C produced 5 distinct vocabulary traditions; proceeding with VOCABULARY SELF-REPORT FLAG active)."

**(c) ≥1 gate documented as run with GATE PASSED or GATE FAILED notation:**
The GATE SUMMARY section documents four gates with explicit verdicts: "Gate 1 Overall: PASS," "Gate 2 Overall: PASS," "Gate 3 Overall: PASS," "Gate 4 Overall: PASS." Additionally at intake brief close: "Gate conditions satisfied. Proceeding to angle-generation.md."

Key evidence: "Gate 1 Overall: PASS"; "Cross-disciplinary slot (required): Target tradition: Cognitive neuroscience / computational neuroscience — Basis for selection: [3 sentences]"; "Question type: EXPLORATORY."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

Three of four required elements are present; one is not met with the required exact label.

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** PRESENT. Appears in the opening block of the document: "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only. Source B (web search / survey-paper probe) is unavailable in this execution context."

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** NOT MET with exact required phrasing. The output uses "MODERATE severity" throughout ("Source B unavailable — MODERATE severity per intake.md Step 5," "MODERATE severity per intake.md Step 5"). The exact label formulations "MODERATE RISK" or "HIGH RISK" do not appear anywhere in the output. The severity level is communicated (at the MODERATE level) but the label format is "MODERATE severity" not "MODERATE RISK."

**(c) ≥1 tradition named as possibly absent due to source limitation:** PRESENT. "Missing traditions may exist in the MI+CoT literature that LLM enumeration did not surface. This is a structural constraint of the subagent deployment context." Also in the intake brief: "Survey-paper vocabulary probe recommended before accepting as complete."

**(d) Coverage described as reduced (not FULL):** PRESENT verbatim. "Expected coverage: MODERATE, not FULL (per CLAUDE.md deployment constraints)."

Three of four elements are present. Element (b) is present in substance (MODERATE severity is communicated) but does not use the exact required label text "MODERATE RISK" or "HIGH RISK." Score 2 per rubric: "Self-report flag + severity but missing one required element."

Key evidence for (a): "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only."; evidence for (b) gap: "MODERATE severity per intake.md Step 5" — the exact phrase "MODERATE RISK" or "HIGH RISK" does not appear.

---

## Score Summary

| Dimension | Score | Max |
|-----------|-------|-----|
| Q1 Vocabulary tradition coverage | 3 | 3 |
| Q7 Structural completeness | 3 | 3 |
| Q5 Actionability | 3 | 3 |
| Q3 Precision / non-redundancy | 3 | 3 |
| P1 Procedure adherence | 3 | 3 |
| M1 Self-assessment degraded mode | 2 | 3 |

**Total: 17 / 18**

Primary deduction: M1 loses 1 point because the severity label used is "MODERATE severity" rather than the required exact text "MODERATE RISK" or "HIGH RISK."
