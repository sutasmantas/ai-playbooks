# Blind Scoring Rationale — INT-10, Input-10, Condition A, Evaluator 1

Scored: 2026-07-06
Input topic: Memory in LLMs — how models store and access information

---

## Q1 — VOCABULARY TRADITION COVERAGE — Score: 3

The output lists 15 angles with distinct tradition labels. Counting non-synonymous distinct traditions (collapsing same-name repeats):

1. Mechanistic interpretability (Angles 1, 3, 14 — all map to the same label)
2. Cognitive-computational neuroscience (Angle 2)
3. Model editing / lifelong learning (Angle 4)
4. In-context learning / meta-learning (Angle 5)
5. Memorization / privacy / security (Angle 6)
6. Continual learning (Angle 7)
7. Long-context / efficient transformers (Angle 8)
8. Grokking / phase transitions (Angle 9)
9. Neural Turing Machines / differentiable memory (Angle 10)
10. Cognitive science / neuropsychology (Angle 11)
11. Hallucination research / reliability (Angle 12)
12. Probing / BERTology (Angle 13)
13. Information theory / model compression (Angle 15)

That is 13 distinct non-synonymous traditions — well above the ≥4 threshold.

NOT derivable from user input ("memory in LLMs — how models store and access information"):
- "Grokking; phase transitions in learning; double descent" (Angle 9) — none of these words appear in the prompt
- "Neural Turing Machines; differentiable memory" (Angle 10) — not in prompt
- "Memorization research; privacy/security" (Angle 6) — not in prompt
- "Information theory of deep learning; model compression" (Angle 15) — not in prompt

Easily ≥2 not derivable from user input.

Adjacent discipline (different primary subject matter): Angle 11 — "Cognitive science; neuropsychology; cognitive architecture" is clearly a different primary field (psychology/neuroscience) with vocabulary like "Tulving's distinction," "episodic binding," "temporal tagging" that has no native home in ML.

Evidence: "Tulving's distinction between semantic memory (general world knowledge) and episodic memory (specific contextual events)"; "Grokking; phase transitions in learning; double descent"

Score = 3.

---

## Q7 — STRUCTURAL COMPLETENESS — Score: 2

Checking all three required elements:

(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:
Angle 14 "Null Results and Failure-to-Localize Studies" explicitly names: "causal scrubbing experiments, distributed representations across layers, and failures to replicate ROME-style localization on harder tasks." These are specific mechanisms, not a generic statement that failures exist.
Evidence: "causal scrubbing experiments, distributed representations across layers, and failures to replicate ROME-style localization on harder tasks"
Present: YES.

(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:
Searched entire output. This exact string does not appear anywhere.
Present: NO.

(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:
Angle 11 draws on "Cognitive science; neuropsychology; cognitive architecture" with vocabulary like "Tulving," "episodic binding," "temporal tagging," "semantic generalization" — none of these are standard ML vocabulary.
Evidence: "Vocabulary tradition / field: Cognitive science; neuropsychology; cognitive architecture"
Present: YES.

Two of three present. Score = 2.

---

## Q5 — ACTIONABILITY — Score: 3

Every one of the 15 angles has exactly 3 runnable query strings (total: 45 queries). Checking tradition-specificity and specificity operators:

All queries use tradition-specific vocabulary throughout:
- Angle 1 uses "feed-forward" "key-value memory" "knowledge neurons" — not generic; specific to the FFN-as-memory literature
- Angle 6 uses Carlini as a named author: `Carlini "extracting training data" language models memorization`
- Angle 9 uses "grokking" "double descent" — field-specific terminology
- Angle 15 uses "PAC-Bayes" "information bottleneck" — theory-specific terms

Every angle has ≥1 specificity operator:
- Named techniques: ROME, MEMIT, causal tracing, causal scrubbing, indirect object identification, BERTology, PAC-Bayes, information bottleneck
- Named authors: Carlini, Ramsauer (implied by "modern Hopfield networks"), Tulving
- Named venues: `site:arxiv.org` in Angle 1
- Boolean AND of two distinct concepts throughout (e.g., `"grokking" modular arithmetic transformers weight structure memorization`)
- NOT operator in Angle 14: `"factual knowledge" NOT localized distributed transformer null result`

No angle has fewer than 2 queries. No generics like "LLM memory" alone.

Evidence: `Carlini "extracting training data" language models memorization`; `"PAC-Bayes" LLM generalization capacity parametric memory information theory`

Score = 3.

---

## Q3 — PRECISION / NON-REDUNDANCY — Score: 2

Most angle pairs are clearly differentiated. However, two overlap concerns:

**Pair 1 — Angle 3 vs Angle 4:** Both explicitly use "causal tracing" and "knowledge localization" vocabulary. Angle 3 query 3: `"knowledge localization" transformer "causal tracing" factual associations`; Angle 4 query 3: `"locate and edit" factual associations transformer "causal tracing"`. The ROME paper (Meng et al., "Locating and Editing Factual Associations in GPT") would be retrieved by queries in both angles. The Angle 3 description also names Meng et al. (ROME) as a central work — the same work that is the core of Angle 4. Retrieval overlap for these two angles plausibly exceeds 60%.

**Pair 2 — Angle 1 vs Angle 3:** Both are labeled "Mechanistic interpretability." Angle 1 focuses on FFN key-value memory (Geva et al.); Angle 3 focuses on factual recall circuits (Wang et al., ROME). There is meaningful overlap in the mechanistic interpretability papers on factual knowledge, though the specific vocabulary ("key-value memory" vs. "circuits") separates them somewhat. Borderline case — likely under 60%.

No fully synonymous pair is present. The two angles have different stated foci and use different terminology as their anchors, but the ROME-overlap case is real.

Evidence: `"knowledge localization" transformer "causal tracing" factual associations` (Angle 3) vs `"locate and edit" factual associations transformer "causal tracing"` (Angle 4); Angle 3 description: "Meng et al. (ROME)"

Score = 2 (≤2 overlap pairs; no fully synonymous pairs).

---

## P1 — PROCEDURE ADHERENCE — Score: -1

The output contains:
- 15 research angle descriptions (narrative + queries + source type)
- A summary table listing angle titles and tradition/field labels

The output does NOT contain:
- A coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis
- An intake brief with vocabulary traditions, question-type classification, or severity assessment
- Any gate notation ("GATE PASSED" or "GATE FAILED")

The summary table is a list, not a coverage map — it does not include a gap check or state the basis for including a cross-disciplinary slot. No procedural framing is visible at any point in the document.

Evidence: The document begins directly with "## Angle 1:" and ends with the summary table; no procedural preamble, no gate logs, no intake brief.

Score = -1 (no coverage map, intake brief, or gate notation visible anywhere).

---

## M1 — SELF-ASSESSMENT DEGRADED MODE — Score: -1

The output contains no:
- "VOCABULARY SELF-REPORT FLAG" text (exact string absent)
- Severity label ("MODERATE RISK" or "HIGH RISK")
- Any tradition named as possibly absent due to source limitation
- Any language describing coverage as reduced or incomplete

The final line reads "Distinct vocabulary traditions: 15" — this asserts completeness rather than acknowledging any limitation.

Evidence: "Total angles: 15 / Distinct vocabulary traditions: 15" — no qualification, no limitation acknowledgment.

Score = -1 (no VOCABULARY SELF-REPORT FLAG and no coverage limitation language visible).

---

## Final Scores

| Dimension | Score |
|-----------|-------|
| Q1 Vocabulary Tradition Coverage | 3 |
| Q7 Structural Completeness | 2 |
| Q5 Actionability | 3 |
| Q3 Precision / Non-Redundancy | 2 |
| P1 Procedure Adherence | -1 |
| M1 Self-Assessment Degraded Mode | -1 |
