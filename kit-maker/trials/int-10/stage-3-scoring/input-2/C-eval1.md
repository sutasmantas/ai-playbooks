# INT-10 Blind Scoring — Input 2, Condition C, Evaluator 1

**Scored:** 2026-07-05
**Output file:** stage-2-execution/input-2/cond-c-output.md
**Evaluator note:** Blind — condition identity not known at scoring time.

---

## Q1 — VOCABULARY TRADITION COVERAGE: Score 3

**Criterion:** ≥4 distinct non-synonymous tradition labels; ≥2 NOT derivable from user input; ≥1 from adjacent discipline.

**Observation:** The output lists 15 distinct vocabulary traditions in the coverage map. User input vocabulary was: "chain-of-thought reasoning," "LLMs," "when it works," "when it fails," "why."

Traditions clearly NOT derivable from user input:
- "Educational psychology / metacognition" — terms like "worked examples effect," "elaborative interrogation," "cognitive load" are absent from user input
- "Cognitive science / dual process theory" — "System 1 / System 2," "heuristics and biases" entirely outside user vocabulary
- "Formal methods / program verification" — "proof checking," "soundness," "theorem proving" entirely outside user vocabulary
- "Philosophy of mind / argumentation theory" — "confabulation," "illusory explanatory depth," "verbal overshadowing" absent from user input
- "HCI / sociotechnical" — "over-reliance," "calibration," "ACM CHI proceedings" absent from user input

Adjacent discipline (different primary subject matter): Multiple qualify. Educational psychology (primary subject: human learning, not AI/ML), cognitive science / dual process theory (primary subject: human cognition), and formal methods / program verification (primary subject: proof systems) all have non-overlapping primary subject matter from the main topic of LLM reasoning.

**Quoted evidence:**
- "Tradition 7: Educational psychology / metacognition / Representative terms: worked examples effect, self-explanation, metacognitive scaffolding, elaborative interrogation, think-aloud protocols, cognitive load"
- "Tradition 14 (Formal methods / program verification) / NOT in intake brief. / Basis for selection: Formal verification has a distinct vocabulary (proof checking, logical validity, soundness, theorem proving, deductive systems)"

**Score: 3**

---

## Q7 — STRUCTURAL COMPLETENESS: Score 3

**Criterion:** ALL THREE: (a) null-hypothesis angle with SPECIFIC failure MECHANISM; (b) exact text "ADVERSARIAL-FLAGGED" verbatim; (c) cross-disciplinary angle from different primary field with non-overlapping vocabulary.

**(a) Null-hypothesis angle with specific failure mechanism:**
Angle 14 (N1) is labeled "Conditions Where CoT Fails or Degrades Performance." It names specific mechanisms: task type failures ("classification tasks"), model size below threshold ("small model"), spurious correlations ("shortcut spurious correlation"), negative transfer from CoT to classification. This goes beyond "failures exist" — it names the mechanism class (type-specific degradation, size-threshold effects, shortcut reasoning).

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Present in Angle 16: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"
Also present in the Gate Summary: "Angle 16 (D1) — labeled [ADVERSARIAL-FLAGGED] with dispatch note."

**(c) Cross-disciplinary angle from different primary field:**
Angle 15 (C1) — "Formal methods / program verification." The output explicitly states: "NOT in intake brief — this tradition uses proof-theoretic and formal-semantic vocabulary absent from all 13 confirmed traditions above." Vocabulary: "proof-theoretic," "logical validity," "soundness," "theorem proving," "deductive systems," "Lean4 / Coq community." These are non-overlapping with NLP/ML vocabulary.

**Quoted evidence:**
- "CoT reasoning breakdown small model classification shortcut spurious correlation negative" (A14/N1 query — specific mechanism named)
- "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" (Angle 16 verbatim)

**Score: 3**

---

## Q5 — ACTIONABILITY: Score 3

**Criterion:** Every angle ≥2 queries; all use tradition-specific vocabulary; all have ≥1 specificity operator (Boolean AND of distinct concepts, named technique/author/venue, or numerical threshold).

All 16 angles have exactly 3 queries each. Sampling for tradition-specific vocabulary and specificity operators:

- A1: "zero-shot chain-of-thought 'think step by step' benchmark comparison instruction" — named technique ("think step by step") + Boolean AND of distinct concepts
- A3: "causal intervention activation patching language model reasoning step intermediate" — named technique (causal intervention, activation patching) + two distinct mechanisms
- A5: "'Big-Bench Hard' BBH chain-of-thought performance evaluation 2023 2024" — named benchmark (BBH, Big-Bench Hard) + year threshold
- A8: "process reward model chain-of-thought reasoning language model reinforcement learning step supervision 2023 2024 2025" — named technique (process reward model) + year range
- A10: "AI reasoning explanation human-AI interaction cognitive bias 2024 2025 CHI CSCW" — named venues (CHI, CSCW) + year range
- C1: "language model reasoning logical consistency formal proof checking soundness deductive" — tradition-specific vocabulary (soundness, deductive, proof checking) entirely outside main topic vocabulary
- D1: "'illusion of explanatory depth' reasoning prediction mechanism verbal articulation cognitive failure" — quoted named concept ("illusion of explanatory depth") used as Boolean operator

No generic concatenations found. Every query inspected shows tradition-specific terminology. Every query has at least one specificity operator (year range, named benchmark, named technique, named venue, quoted concept phrase, or Boolean AND pairing of two distinct tradition concepts).

**Quoted evidence:**
- "Q1: process reward model chain-of-thought reasoning language model reinforcement learning step supervision 2023 2024 2025" (named technique + year range = two specificity operators)
- "Q3: 'illusion of explanatory depth' reasoning prediction mechanism verbal articulation cognitive failure" (quoted named concept as specificity operator)

**Score: 3**

---

## Q3 — PRECISION / NON-REDUNDANCY: Score 3

**Criterion:** Zero angle pairs where query overlap would retrieve >60% of same papers.

The Gate Summary documents a systematic distinctness check across candidate overlap pairs. Independent inspection confirms:

- A1 (few-shot CoT, rationale quality, input design) vs. A12 (self-consistency sampling, tree-of-thoughts, iterative refinement): different mechanisms and different primary literature
- A3 (circuits, probing, activation patching) vs. A4 (unfaithful CoT, sycophancy, post-hoc rationalization): A3 is "what happens inside"; A4 is "does output match computation" — different literatures (mechanistic interpretability journals vs. alignment venues)
- A4 (faithfulness, alignment vocabulary) vs. D1 (confabulation, motivated reasoning, philosophy vocabulary): retrieval pools are essentially disjoint — A4 retrieves from arXiv cs.LG/alignment; D1 retrieves from Psychological Science, Cognition, philosophy journals
- A2 (scaling laws, emergent capabilities, model size thresholds) vs. A5 (GSM8K, BBH, benchmark methodology critique): A2 is about capability onset conditions; A5 is about measurement validity — different questions, different papers
- A11 (PAL, PoT, code-as-reasoning, arithmetic) vs. C1 (theorem proving, Lean4/Coq, proof-theoretic): different communities with minimal overlap

No pair identified that would retrieve >60% overlap. Each angle is anchored to a distinct tradition with distinct terminology, distinct venue recommendations, and distinct research questions.

**Quoted evidence:**
- "A3 (mechanistic: circuits, probing) vs. A4 (faithfulness: unfaithful CoT, sycophancy): Different questions. A3 = 'what happens inside'; A4 = 'does output match computation.' Different literatures. PASS." (Gate 2 distinctness check)
- "A11 (program synthesis: PoT, PAL, code-as-reasoning) vs. C1 (formal methods: theorem proving, proof checking): A11 = code as a prompting substrate for arithmetic; C1 = proof-theoretic correctness verification. Different focus and different communities. PASS."

**Score: 3**

---

## P1 — PROCEDURE ADHERENCE: Score 3

**Criterion:** ALL THREE: (a) coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis; (b) intake brief with vocabulary traditions + question-type classification + severity assessment; (c) ≥1 gate documented as run.

**(a) Coverage map:** Present as "COVERAGE MAP" section. Lists 15 traditions with gap flags ("Gap flag: NO" for each). Cross-disciplinary slot (Formal methods / program verification) present with explicit selection basis: "Formal verification has a distinct vocabulary (proof checking, logical validity, soundness, theorem proving, deductive systems) that would retrieve literature on whether CoT steps constitute valid logical inferences — a question different from both the ML benchmark framing... and the mechanistic framing."

**(b) Intake brief:** Present as "INTAKE BRIEF" section. Contains vocabulary traditions (7 candidate traditions listed), question-type classification ("Question type: EXPLORATORY"), and severity assessment ("Severity = MODERATE; proceeding with VOCABULARY SELF-REPORT FLAG active").

**(c) Gates documented as run:** Gate Summary section contains four gate verdicts: "Gate 1 verdict: PASS," "Gate 2 verdict: PASS," "Gate 3 verdict: PASS," "Gate 4 verdict: PASS," and "Overall verdict: PASS — dispatch ready." Multiple gates documented as run.

**Quoted evidence:**
- "Question type: EXPLORATORY / (The prompt asks 'when it works, when it fails, and why' — covers the landscape of findings...)" (intake brief — question-type classification)
- "Gate 1 verdict: PASS ... Gate 2 verdict: PASS ... Gate 3 verdict: PASS ... Gate 4 verdict: PASS" (gates documented as run)

**Score: 3**

---

## M1 — SELF-ASSESSMENT DEGRADED MODE: Score 2

**Criterion:** ALL FOUR: (a) exact text "VOCABULARY SELF-REPORT FLAG" verbatim; (b) severity labeled "MODERATE RISK" or "HIGH RISK"; (c) ≥1 tradition named as possibly absent due to source limitation; (d) coverage described as reduced (not FULL).

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** Present. "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only." Also appears in Gate Summary: "1. VOCABULARY SELF-REPORT FLAG (active throughout):"

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** NOT FULLY MET. The output says "Severity = MODERATE" and "Source B status: UNAVAILABLE — MODERATE" but not the exact compound phrase "MODERATE RISK" or "HIGH RISK." The severity marker is present as "MODERATE" without the "RISK" qualifier required by the scoring criterion.

**(c) ≥1 tradition named as possibly absent due to source limitation:** Present. "Traditions most at risk of gap: Formal methods / verification (C1): LLM training data underrepresents this community's CoT-specific work / Philosophy of mind / argumentation theory (D1): Niche intersection with AI reasoning / Educational psychology (A7): May have relevant self-explanation literature not captured by LLM enumeration."

**(d) Coverage described as reduced (not FULL):** Present. "All vocabulary traditions were enumerated by LLM only. External validation via survey-paper probe is recommended before accepting the tradition check as complete." Also: "Source B unavailability means no survey-paper vocabulary audit ran."

Three of four elements fully met. Element (b) is semantically present but does not contain the exact text "MODERATE RISK" or "HIGH RISK" as required by the criterion — only "MODERATE" appears.

**Quoted evidence:**
- "**VOCABULARY SELF-REPORT FLAG:** All vocabulary traditions were enumerated by LLM only." (element a — verbatim)
- "Severity = MODERATE; proceeding with VOCABULARY SELF-REPORT FLAG active." (element b — severity labeled as MODERATE, not MODERATE RISK)

**Score: 2**

---

## Summary Table

| Dimension | Score | Range |
|-----------|-------|-------|
| Q1 — Vocabulary tradition coverage | 3 | 0–3 |
| Q7 — Structural completeness | 3 | 0–3 |
| Q5 — Actionability | 3 | 0–3 |
| Q3 — Precision / non-redundancy | 3 | 0–3 |
| P1 — Procedure adherence | 3 | 0–3 or -1 |
| M1 — Self-assessment degraded mode | 2 | 0–3 or -1 |

**Deciding note for M1:** The single deduction is solely the absence of the exact compound phrase "MODERATE RISK" or "HIGH RISK" — the severity is clearly labeled as "MODERATE" and all other M1 elements are fully present. If the scoring rubric treats "MODERATE" as equivalent to "MODERATE RISK," M1 would be 3.
