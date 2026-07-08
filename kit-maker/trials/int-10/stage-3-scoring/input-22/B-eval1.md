# Scoring Rationale — Input-22, Condition B, Evaluator 1
**Date:** 2026-07-06
**Evaluator:** Blind (condition unknown at scoring time)

---

## Q1 — VOCABULARY TRADITION COVERAGE: Score 3

The output names 11 traditions in the coverage map plus a 12th cross-disciplinary slot. Distinct non-synonymous labels present:
1. NLP/ML empirical research
2. Prompt engineering and prompting science
3. Parameter-efficient fine-tuning (PEFT)
4. MLOps and production ML
5. Statistical learning theory and sample efficiency
6. NLP alignment and RLHF
7. Decision framework / applied ML methodology
8. NLP task taxonomy and task characterization
9. ML generalization and distribution shift
10. Retrieval-augmented generation (RAG)
11. ML reliability and continual learning
12. Software engineering / IS build-vs-buy (cross-disciplinary)

User input contained only: "fine-tune," "language model," "prompting," "task." Traditions NOT derivable from those words include at minimum: PEFT/LoRA, statistical learning theory/sample efficiency, NLP alignment/RLHF, ML generalization/distribution shift, RAG, ML reliability/continual learning, organizational behavior, and software engineering/IS — far exceeding the ≥2 threshold.

Adjacent discipline from a different primary field: Angle 14 (C1) targets software engineering / IS with vocabulary "make-or-buy theory, build-vs-buy decision analysis, capability acquisition, technical debt, vendor risk, switching cost." The output confirms: "This tradition is genuinely absent from the ML research vocabulary space."

**Quoted evidence:**
- "Tradition 3: Parameter-efficient fine-tuning (PEFT)" — not derivable from user input
- "Target tradition: Software engineering / information systems — make-or-buy theory, build-vs-buy decision analysis, capability acquisition, technical debt. Basis for selection: The fine-tune vs. prompt decision is structurally isomorphic to the software engineering 'build vs. buy' problem... This tradition is genuinely absent from the ML research vocabulary space."

**Score: 3** — ≥4 distinct non-synonymous traditions; ≥2 not derivable from user input (at least 8); ≥1 from adjacent discipline.

---

## Q7 — STRUCTURAL COMPLETENESS: Score 3

**Criterion (a) — Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**
Angle 12 (N1) is titled "Fine-Tuning Does NOT Consistently Outperform Prompting — Disconfirming Evidence." The mechanism is specific: replication failure of fine-tuning's claimed advantage — named as "replication failures of fine-tuning advantage," "conditions under which the fine-tuning improvement is negligible or not significant," and "the practitioner benefit of fine-tuning is overstated." Queries explicitly target "null result," "failure to replicate fine-tuning advantage," and "marginal improvement LLM empirical evidence." This names a specific mechanism (non-replicating gains, publication-bias distortion of the advantage) — not merely "failures exist." PRESENT.

**Criterion (b) — Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Found in TYPE ALLOCATIONS: "Slot D1 (Adversarial — organizational/systems analysis): ADVERSARIAL-FLAGGED — the fine-tune vs. prompt framing obscures the dominant practical drivers." Found again in Angle 13 header: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]." Verbatim exact text confirmed. PRESENT.

**Criterion (c) — Cross-disciplinary angle from different primary field with non-overlapping vocabulary:**
Angle 14 (C1) targets "Software engineering and information systems (build-vs-buy, make-or-buy)" with vocabulary: "capability criticality, switching cost, vendor risk, customization cost, maintenance burden." Gate 1 check confirms: "intake brief lists NLP/ML empirical, prompt engineering, PEFT, MLOps, statistical learning theory, NLP alignment, decision framework. SE/IS build-vs-buy is absent from all of these. PASS." Non-overlapping vocabulary confirmed. PRESENT.

All three criteria present.

**Quoted evidence:**
- "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"
- "intake brief lists NLP/ML empirical, prompt engineering, PEFT, MLOps, statistical learning theory, NLP alignment, decision framework. SE/IS build-vs-buy is absent from all of these. PASS."

**Score: 3**

---

## Q5 — ACTIONABILITY: Score 2

**Every angle ≥2 queries:** Gate 3 confirms "Every angle has at least 3 concrete, runnable query strings." 14 angles × 3 queries = 42 total. Criterion met for every angle.

**Tradition-specific vocabulary:** Well above 80% of queries use tradition-specific vocabulary. Examples: "LoRA parameter-efficient fine-tuning performance comparison full fine-tuning prompting 2023 2024" (PEFT), "RLHF instruction tuning behavioral alignment versus prompting base model comparison 2023 2024" (NLP alignment), "make-or-buy decision software engineering capability customization vendor dependency criteria framework" (SE/IS). This criterion is met at the Score 3 threshold.

**Specificity operators:** Named techniques appear widely (LoRA, RLHF, DPO, RAG, catastrophic forgetting, chain-of-thought, QLoRA). Year ranges appear in many queries (2023 2024, 2024 2025). However, a subset of queries lack any of the defined specificity operators (named technique/author/venue, numerical threshold, or Boolean AND of two meaningfully distinct concepts):

- Angle 10 Q2: "fine-tuning decision criteria cost data availability task type framework practitioner guide LLM" — no year, no named technique or venue; compound of generic terms.
- Angle 10 Q3: "systematic comparison fine-tuning prompting method selection guidelines machine learning" — generic concatenation; no year, no named technique, no author/venue.
- Angle 13 Q3: "AI adoption practitioner behavior gap technical recommendation actual practice machine learning customization" — no year, no named technique; essentially a rephrasing of the angle topic.
- Angle 4 Q1: "task characteristics predict fine-tuning versus prompting language model performance taxonomy" — no year, no named technique; "taxonomy" is not a specificity operator.

Approximately 4 of 42 queries (~90%) have clear specificity operators. This exceeds the 80% threshold for Score 2 but falls short of "all" required for Score 3.

**Quoted evidence:**
- Passing: "RLHF instruction tuning behavioral alignment versus prompting base model comparison 2023 2024" — named technique (RLHF) + year range
- Failing: "systematic comparison fine-tuning prompting method selection guidelines machine learning" — generic concatenation, no specificity operator

**Score: 2** — every angle ≥2 queries; ≥80% tradition-specific; ≥80% have specificity operators; but not all queries meet the specificity operator threshold.

---

## Q3 — PRECISION / NON-REDUNDANCY: Score 3

The output runs its own Gate 2 (Boolean-connective test) on six candidate overlap pairs. All pass with one borderline flag on (A9, A11).

Examining the borderline pair:
- A9 (ML generalization) queries target "distribution shift," "out-of-distribution robustness," "compositional generalization" — inference-time behavior under input distribution change.
- A11 (ML reliability) queries target "catastrophic forgetting," "overfitting small dataset," "capability degradation" — training-induced phenomena during fine-tuning itself.

These are different causal mechanisms (inference-time distribution mismatch vs. training-induced forgetting). Papers on catastrophic forgetting predominantly appear in the continual learning literature; papers on out-of-distribution robustness appear in the generalization literature. The 60% overlap threshold is not crossed.

A1 vs. N1 share a tradition root but N1 queries explicitly filter for "null result," "failure to replicate," and "does not outperform" — structural keywords that retrieve a different (and underrepresented) segment of the literature.

No other pair approaches 60% overlap: A5 vs. A6 (inference cost vs. sample efficiency), A7 vs. A10 (RAG methods vs. decision frameworks), A8 vs. A1 (RLHF/alignment vs. benchmark comparisons) — completely different facets.

**Quoted evidence:**
- "Gate 2 verdict: PASS — with one borderline flag on (A9, A11) pair noted for human review"
- "different mechanisms: A9 is about distribution mismatch, A11 is about forgetting/overfitting during training"

**Score: 3** — no angle pairs where query overlap would retrieve >60% of same papers.

---

## P1 — PROCEDURE ADHERENCE: Score 3

**Element (a) — Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
"## COVERAGE MAP" section is present. Lists 11 traditions with representative terms and planned angle slots. Gap check: "Traditions NOT yet represented in the planned list: All identified traditions from the intake brief and absent-term expansion have planned angle slots." Cross-disciplinary slot with basis: "Cross-disciplinary slot (required): Target tradition: Software engineering / information systems — make-or-buy theory... Basis for selection: The fine-tune vs. prompt decision is structurally isomorphic to the software engineering 'build vs. buy' problem... This literature has independently developed decision criteria... that map directly onto the fine-tune vs. prompt space but are NOT cited in ML literature." Basis is explicit and substantive. PRESENT.

**Element (b) — Intake brief with vocabulary traditions + question-type classification + severity assessment:**
"## INTAKE BRIEF" is present. Contains 7 vocabulary traditions with representative terms. Question type: "Question type: STRUCTURED — The user's prompt 'when to fine-tune vs. use prompting' contains explicit comparison language (fine-tuning vs. prompting) and an intervention-outcome structure." Severity assessment: "Source B status: UNAVAILABLE — MODERATE (Source A + C produced ≥5 distinct vocabulary traditions; topic is well-represented in LLM training data as a major NLP/ML research area)." PRESENT.

**Element (c) — ≥1 gate documented as run (GATE PASSED or GATE FAILED notation):**
Multiple gates with explicit verdicts. Intake gate: "Gate: PASSED. Proceeding to angle-generation.md." Gate summary: "Gate 1 — Completeness: PASS," "Gate 2 — Distinctness: PASS," "Gate 3 — Launchability: PASS," "Gate 4 — Scoring prohibition: PASS." PRESENT.

All three elements present and substantive.

**Quoted evidence:**
- "Gate: PASSED. Proceeding to angle-generation.md."
- "Cross-disciplinary slot (required): Target tradition: Software engineering / information systems... Basis for selection: The fine-tune vs. prompt decision is structurally isomorphic to the software engineering 'build vs. buy' problem..."

**Score: 3**

---

## M1 — SELF-ASSESSMENT DEGRADED MODE: Score 2

**Element (a) — Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:**
Found in the Intake Gate Check: "- [x] VOCABULARY SELF-REPORT FLAG applied."
Found in the Gate Summary: "2. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions were enumerated by LLM only (Source B unavailable)."
Verbatim exact text confirmed. PRESENT.

**Element (b) — Severity labeled "MODERATE RISK" or "HIGH RISK":**
The output uses "UNAVAILABLE — MODERATE" as the Source B status label: "Source B status: UNAVAILABLE — MODERATE (Source A + C produced ≥5 distinct vocabulary traditions; topic is well-represented in LLM training data as a major NLP/ML research area)." The exact strings "MODERATE RISK" or "HIGH RISK" do not appear anywhere in the output. Severity is communicated as "MODERATE" without the "RISK" suffix required for Score 3. ABSENT (exact format).

**Element (c) — ≥1 tradition named as possibly absent due to source limitation:**
Gate Summary: "A survey paper in this space may surface additional traditions (e.g., human factors / cognitive load of prompt writing, regulatory compliance as a driver of fine-tuning)." Two traditions named as possibly absent. PRESENT.

**Element (d) — Coverage described as reduced (not FULL):**
Intake Brief NOTE: "The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting this angle list as covering all traditions."
Gate Summary: "External validation via survey-paper probe... is recommended before treating the tradition coverage as complete."
Coverage explicitly described as requiring external validation — not FULL. PRESENT.

**Assessment:** Elements (a), (c), and (d) are present. Element (b) is missing — "MODERATE RISK" or "HIGH RISK" exact text not found; the output uses "UNAVAILABLE — MODERATE" instead, which conveys severity but does not match the required phrasing.

**Quoted evidence:**
- "VOCABULARY SELF-REPORT FLAG applied" (gate check) — element (a) present
- "Source B status: UNAVAILABLE — MODERATE" — severity labeled, but "MODERATE RISK" verbatim absent

**Score: 2** — self-report flag present, severity acknowledged (as "MODERATE"), traditions named as possibly absent, coverage described as reduced; one element missing (exact "MODERATE RISK"/"HIGH RISK" phrasing).

---

## Summary

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary Tradition Coverage | 3 |
| Q7 — Structural Completeness | 3 |
| Q5 — Actionability | 2 |
| Q3 — Precision / Non-Redundancy | 3 |
| P1 — Procedure Adherence | 3 |
| M1 — Self-Assessment Degraded Mode | 2 |
