# INT-10 Blind Evaluation — Input 19, Evaluator 2
## Condition B Output Scoring Rationale

**Evaluator:** Subagent (blind — condition unknown at scoring time)
**Date scored:** 2026-07-06
**Output read:** `stage-2-execution/input-19/cond-b-output.md`

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output names 9 distinct vocabulary tradition labels across the intake brief, coverage map, and angle list:

1. Mechanistic interpretability — circuits & attention analysis
2. Mechanistic interpretability — causal mediation analysis
3. Sparse features / dictionary learning
4. CoT faithfulness evaluation
5. Representation engineering / probing
6. In-context learning mechanisms
7. Behavioral pattern learning / shortcut learning (adversarial)
8. MI methodology critique / replication and generalization limits (null-hypothesis)
9. Cognitive neuroscience / computational neuroscience (cross-disciplinary)

**≥4 distinct non-synonymous traditions:** 9 present — criterion met.

**≥2 NOT derivable from user input:** User input contained only "chain-of-thought reasoning," "mechanistic interpretability," and "explainability." Traditions NOT derivable from those words: sparse features/dictionary learning, CoT faithfulness evaluation, representation engineering/probing, behavioral pattern learning/shortcut learning, MI methodology critique, cognitive neuroscience — at least 5. Criterion met.

**≥1 from adjacent discipline:** Tradition 9 ("Cognitive neuroscience / computational neuroscience") has primary subject matter (biological neural circuits, working memory, prefrontal cortex, episodic retrieval) entirely outside ML/NLP. Evidence: "Cognitive neuroscience studies how biological neural networks implement sequential reasoning (working memory, prefrontal planning, episodic retrieval)." Criterion met.

**Key evidence:** "Tradition 3: Sparse features / dictionary learning" (absent from user input); "Cognitive neuroscience / computational neuroscience" (adjacent discipline).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present.

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM (not just "failures exist"):**
Angle 8 names specific failure mechanisms: "evidence that activation patching confounds exist specifically for CoT tasks"; "evidence that circuit findings do not replicate across model architectures or training runs"; "evidence that SAE decompositions miss causally relevant CoT computation." Each is a concrete mechanism of invalidity (confound, non-replication, incomplete decomposition), not a generic assertion that failures exist.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Present in two locations — the angle heading: "### ANGLE 7 [ADVERSARIAL-FLAGGED]:" and the opening of the angle block: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]."

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**
Angle 9 ("Cognitive Neuroscience of Sequential Reasoning as Reference Frame for CoT MI") targets cognitive neuroscience / computational neuroscience. The coverage map states its vocabulary ("working memory models," "prefrontal cortex sequential reasoning," "hierarchical prediction in neural circuits," "neural basis of planning") is "absent from all 6 MI traditions above." Source platforms are PubMed + Cognitive Science + Nature Neuroscience rather than arXiv — confirming a distinct author population.

**Key evidence:** "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" (verbatim); "activation patching confounds exist specifically for CoT tasks" (specific failure mechanism named).

---

## Q5 — ACTIONABILITY

**Score: 3**

Every angle has ≥2 runnable query strings (all have 4; Angle 8 has 5). All use tradition-specific vocabulary. All have ≥1 specificity operator.

**Sample tradition-specific vocabulary check:**
- Angle 1, Q4: "QK OV circuit decomposition chain-of-thought multi-hop inference transformer" — QK/OV matrix terminology is native to MI circuits tradition, not generic.
- Angle 3, Q3: "monosemantic features scratchpad polysemanticity superposition chain-of-thought tokens" — terminology exclusive to the SAE/dictionary learning tradition.
- Angle 7, Q1: "chain-of-thought shortcut learning surface statistics text pattern language models spurious correlation" — behavioral pattern learning vocabulary explicitly excluded from other angles; not a generic query.
- Angle 9, Q1: "neural mechanisms sequential reasoning working memory prefrontal cortex step-by-step problem solving" — cognitive neuroscience vocabulary absent from all other angles.

**Sample specificity operator check:**
- Named technique: "activation patching causal tracing chain-of-thought reasoning large language models 2024" (Angle 2, Q1 — named techniques + temporal operator).
- Named technique: "direct logit attribution multi-step reasoning mechanistic analysis transformer scratchpad" (Angle 2, Q4).
- Boolean AND of two distinct concepts: "circuit analysis does not generalize replication failure language models reasoning architecture" (Angle 8, Q2 — circuit analysis AND replication failure AND sequential reasoning, each a distinct concept).
- Named concept: "steganographic reasoning hidden computation chain-of-thought mechanistic interpretability" (Angle 4, Q4 — a specific named concept in the CoT faithfulness literature).

No queries are generic phrase concatenations. All pass tradition-specific and specificity checks.

**Key evidence:** "QK OV circuit decomposition chain-of-thought multi-hop inference transformer" (named techniques, tradition-specific); "monosemantic features scratchpad polysemanticity superposition chain-of-thought tokens" (tradition-specific vocabulary, specificity via named concepts).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

No angle pair found where query overlap would retrieve >60% of the same papers.

The output's Gate 2 distinctness section runs systematic pairwise comparisons. The closest pair flagged is A1 (circuits & attention) vs A6 (ICL mechanisms), because both involve attention head analysis and the term "induction heads" appears in both. Assessment:
- A1 targets "which CoT-specific circuits exist and their causal necessity via ablation" — primary literature: Wang et al., Elhage et al. circuit discovery papers. Queries anchor on "circuit analysis," "QK OV," "ablation."
- A6 targets "whether ICL mechanisms (induction heads, task vectors) already discovered in prior literature transfer to CoT" — primary literature: Olsson et al. induction head papers, Todd et al. task vector papers. Queries anchor on "task vectors," "associative recall," "retrieval heads," "few-shot prompting mechanism."

Different research questions, different primary publication sets. The gate note — "OR retrieval would overlap partially but not substantially" — is a reasonable assessment. Even the shared term "induction heads" is used in different roles (discovering them vs. asking if they transfer), which would change which papers match.

All other pairs (adversarial A7, null-hypothesis A8, cross-disciplinary A9) use structurally divergent vocabulary and target different platforms (LessWrong/workshop vs. arXiv; PubMed vs. arXiv). No pair approaches >60% retrieval overlap.

**Key evidence:** Gate 2: "A1 vs A6: Second-closest pair... Different research question and different primary literature. PASS — but human reviewer should check if execution returns substantially overlapping paper sets."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements fully present.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The COVERAGE MAP section lists all 6 traditions with representative terms and planned slots, explicitly checks for gaps ("Traditions NOT yet represented in the planned list: All 6 traditions from the intake brief have planned angle slots"), and states the cross-disciplinary selection basis: "Cognitive neuroscience studies how biological neural networks implement sequential reasoning... Terms such as 'working memory models,' 'prefrontal cortex sequential reasoning,' 'hierarchical prediction in neural circuits,' and 'neural basis of planning' are absent from all 6 MI traditions above."

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
INTAKE BRIEF section: 5 vocabulary traditions with representative terms and researchers, question type "EXPLORATORY" with basis, severity "MODERATE severity per intake.md Step 5" with explicit "Source B status: UNAVAILABLE — MODERATE."

**(c) ≥1 gate documented as run (GATE PASSED or GATE FAILED notation):**
GATE SUMMARY section documents four gates: "Gate 1 Overall: PASS," "Gate 2 Overall: PASS," "Gate 3 Overall: PASS," "Gate 4 Overall: PASS." Each with substantive supporting analysis.

**Key evidence:** "Gate 1 Overall: PASS" (explicit gate notation); "MODERATE severity per intake.md Step 5" (severity assessment in intake brief).

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** PRESENT — first paragraph: "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only."

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** ABSENT as exact label. The output uses "MODERATE severity" (deployment context line: "Source B unavailable — MODERATE severity per intake.md Step 5") and standalone "MODERATE" in the gate summary. Neither matches the exact required strings "MODERATE RISK" or "HIGH RISK." The substance of the warning is present but the required label phrasing is not.

**(c) ≥1 tradition named as possibly absent due to source limitation:** PRESENT — "NOTE: Vocabulary traditions listed here are LLM self-reported. Source B (web search) is unavailable. Survey-paper vocabulary probe recommended before accepting as complete" and in the gate summary: "Missing traditions may exist in the MI+CoT literature that LLM enumeration did not surface."

**(d) Coverage described as reduced (not FULL):** PRESENT — "Expected coverage: MODERATE, not FULL (per CLAUDE.md deployment constraints)."

Three of four elements met. Element (b) fails because the severity label uses "MODERATE severity" not "MODERATE RISK." Score 2.

**Key evidence:** "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions were enumerated by LLM only" (verbatim flag, element a); "Expected coverage: MODERATE, not FULL" (element d); "MODERATE severity" used instead of "MODERATE RISK" (element b fails).

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
