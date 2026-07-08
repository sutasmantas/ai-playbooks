# INT-10 Blind Scoring — Input 4, Condition B, Evaluator 3

Scored: 2026-07-06
Evaluator: subagent eval3 (blind — condition identity unknown at scoring time)

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output names 12 distinct vocabulary traditions across the coverage map and angle list summary table. User input words were: "adversarial," "attacks," "LLM," "reasoning," "manipulated."

Traditions derivable from user input: AI security/adversarial ML (uses "adversarial"), NLP reasoning research (uses "reasoning"), LLM systems/ML engineering (uses "LLM"). The remaining 9 traditions are NOT derivable from user input vocabulary.

Traditions from adjacent disciplines (different primary subject matter): Argumentation theory/philosophy of logic (primary subject: philosophy/rhetoric, not ML) and Cognitive science/psychology (primary subject: human cognition, not ML). Both carry non-overlapping vocabulary — "pragma-dialectics," "enthymemes," "sophisms," "anchoring heuristic," "Kahneman System 1/2."

Score 3 thresholds all met: ≥4 distinct traditions (12 present), ≥2 not derivable from user input (9 present), ≥1 from adjacent discipline (2 present: argumentation theory, cognitive science).

**Evidence:** "Vocabulary: informal fallacies, sophisms, enthymemes, argument schemes, pragma-dialectics" (C1 cross-disciplinary slot) and "Distinct traditions: 12" (angle count summary).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements present:

**(a) Null-hypothesis angle naming a SPECIFIC failure MECHANISM:**
ANGLE N1 is titled "Evidence that adversarial reasoning attacks fail, do not generalize, or are detectable." It enumerates specific mechanisms: "scope limitations (model size, task type, attack modality)," "detection mechanisms," "negative transfer results," "failure to replicate across models or settings." This is not a generic "failures exist" claim — it names distinct mechanistic categories for failure.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Present in ANGLE D1: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]"

**(c) Cross-disciplinary angle from different primary field with non-overlapping vocabulary:**
ANGLE C1 (Argumentation theory / philosophy of logic) explicitly documents it is "NOT in intake brief (intake listed AI security, NLP reasoning, AI safety, ML engineering, cognitive science — argumentation theory is distinct from all five)" and deploys non-overlapping vocabulary: "pragma-dialectics," "enthymemes," "sophisms," "informal fallacies," "argument schemes." Primary subject is philosophy/rhetoric.

**Evidence:** "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" and "Cross-disciplinary slot (required)... Basis for selection: adversarial attacks on LLM reasoning can be formally described as fallacy injection or sophistic argument construction."

---

## Q5 — ACTIONABILITY

**Score: 3**

All 13 angles have exactly 3 runnable query strings each. All queries use tradition-specific vocabulary. All have at least one specificity operator.

Specificity operators verified across the full angle list:
- Year range (numerical threshold): "2024 2025" present in every angle's Q1 without exception.
- Named techniques: "causal tracing," "activation patching," "probing classifier" (D1); "trojan language model," "TrojAI challenge codebase" (A4); "PoisonedRAG codebase" (A7); "pragma-dialectics" (C1); "MAFALDA," "LOGIC dataset" (C1); "Kahneman System 1/2" (C2).
- Boolean AND of two distinct concepts: A4 Q2 — "trojan language model chain-of-thought reasoning corruption training-time trigger"; C1 Q2 — "sophistic argument manipulation large language model logical fallacy injection pragma-dialectics."

No angle carries generic concatenation queries. No angle has fewer than 2 queries. All use vocabulary specific to the named tradition rather than recycled generic phrases.

**Evidence:** "Q2: LLM chain-of-thought causal internal computation post-hoc rationalization probing classifier intervention" (D1 — tradition-specific terms from mechanistic interpretability, specificity operators present) and "Q2: sophistic argument manipulation large language model logical fallacy injection pragma-dialectics" (C1 — named argumentation theory term).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The Gate 2 section explicitly runs a Boolean-connective distinctness test on six highest-risk pairs: N1/A1, A1/A2, A2/A8, A3/A9, A6/A7, C1/C2 — all documented as PASS.

Examining the most plausible overlap candidates at the angle level (all queries combined):

A1 (prompt injection/jailbreaking, security tradition) vs A2 (CoT/scratchpad, NLP reasoning tradition): A1 Q1/Q2 retrieve broad jailbreaking papers; A2 Q2/Q3 retrieve intermediate-step NLP papers. Both contain "chain-of-thought" but the bulk of each angle's retrieval targets different source communities. Angle-level overlap well below 60%.

A1 vs A6 (agentic): A1 Q3 ("indirect prompt injection reasoning subversion tool-use LLM agent attack empirical") and A6 Q2 ("AI agent reasoning hijack orchestration attack tool-use environment injection") share "tool-use LLM agent attack" vocabulary, the highest single-query proximity in the output. At the angle level, however, A1's Q1/Q2 retrieve broad jailbreaking/prompt-injection papers and A6's Q1/Q3 retrieve multi-agent planning loop papers. Combined angle-level overlap remains below 60%.

The adversarial angle (D1) explicitly excludes all confirmatory-angle vocabulary from its generation prompt, structurally preventing overlap with the nine confirmatory angles.

No fully synonymous pairs. All 12 traditions have non-overlapping primary vocabulary.

**Evidence:** "Vocabulary-tradition distinctness: All 10 confirmatory + null angles have distinct tradition labels... PASS" and "N1 vs A1: N1 uses 'failure/defense/does not transfer' query vocabulary; A1 uses 'attack/manipulation/injection' — NOT synonymous."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements present and substantively complete:

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The COVERAGE MAP section enumerates 9+ traditions each with "Planned angle slot" and "Gap flag: No" notation. Cross-disciplinary slot is present with an explicit "Basis for selection" paragraph: "adversarial attacks on LLM reasoning can be formally described as fallacy injection or sophistic argument construction — the field that studies what makes reasoning valid vs. manipulable (Aristotle's Sophistical Refutations, Toulmin's argument model, pragma-dialectics) has a literature on how valid-appearing reasoning can mislead."

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
The INTAKE BRIEF section contains: five candidate vocabulary traditions explicitly enumerated; "Question type: EXPLORATORY" with classification rationale; "Source B status: UNAVAILABLE — MODERATE" as severity/status assessment; "Domain maturity estimate: mixed" as additional assessment.

**(c) ≥1 gate documented as run with GATE PASSED or GATE FAILED notation:**
Intake gate: "Gate PASSES. Proceeding to angle-generation.md." Gate Summary: Gate 1 result: PASS, Gate 2 result: PASS, Gate 3 result: PASS, Gate 4 result: PASS. Overall verdict: "PASS — dispatch ready."

**Evidence:** "Gate PASSES. Proceeding to angle-generation.md." and "Overall verdict: PASS — dispatch ready."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** PRESENT. Appears in preamble ("Proceeding with VOCABULARY SELF-REPORT FLAG applied") and in Gate Summary ("1. VOCABULARY SELF-REPORT FLAG — all vocabulary traditions enumerated by LLM only").

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** NOT PRESENT with the exact required label. The output uses "UNAVAILABLE — MODERATE" and "this run's coverage is MODERATE, not FULL." The severity concept is clearly expressed but neither the string "MODERATE RISK" nor "HIGH RISK" appears anywhere in the document.

**(c) ≥1 tradition named as possibly absent due to source limitation:** PRESENT. From Gate Summary: "Traditions that may be missing: HCI / human-computer interaction studies of reasoning manipulation; formal logic / automated theorem proving community; neuro-symbolic AI community."

**(d) Coverage described as reduced (not FULL):** PRESENT. "Source B unavailable: this run's coverage is MODERATE, not FULL."

Three of four criteria met. The missing element is (b): the exact severity label format. Score 2 applies per rubric: "Self-report flag + severity but missing one required element."

**Evidence for (a):** "VOCABULARY SELF-REPORT FLAG — all vocabulary traditions enumerated by LLM only"
**Evidence for (b) failure:** "Source B status: UNAVAILABLE — MODERATE" — severity expressed as "MODERATE" not "MODERATE RISK"

---

## Summary Table

| Dimension | Score | Rationale summary |
|-----------|-------|-------------------|
| Q1 Vocabulary tradition coverage | 3/3 | 12 distinct traditions; 9+ not from user input; 2 from adjacent disciplines |
| Q7 Structural completeness | 3/3 | All three: specific null-hypothesis mechanism named, ADVERSARIAL-FLAGGED verbatim, cross-disciplinary angle with non-overlapping vocab |
| Q5 Actionability | 3/3 | 13 angles x 3 queries each; all tradition-specific; all have specificity operators |
| Q3 Precision/non-redundancy | 3/3 | No overlap pairs at >60% threshold; gate explicitly verified distinctness across 6 highest-risk pairs |
| P1 Procedure adherence | 3/3 | Coverage map with selection basis, intake brief with all elements, 4 gates documented with PASS notations |
| M1 Self-assessment degraded mode | 2/3 | Flag present, traditions-absent named, coverage reduced stated; severity is "MODERATE" not "MODERATE RISK" |
