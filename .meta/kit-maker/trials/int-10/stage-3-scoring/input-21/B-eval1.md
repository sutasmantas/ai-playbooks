# INT-10 Blind Scoring — Input 21, Condition B, Evaluator 1

**Date scored:** 2026-07-06
**Evaluator:** eval1 (blind — condition label not inspected before scoring)
**Input topic (context only):** How LLM-based agents plan and execute multi-step tasks

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

**Criterion:** ≥4 distinct non-synonymous tradition labels; ≥2 NOT derivable from user input words; ≥1 from adjacent discipline.

**Analysis:**

User input vocabulary: "LLM-based agents," "plan," "execute," "multi-step tasks."

The output enumerates 15 vocabulary traditions in the intake brief and coverage map. Distinct, non-synonymous traditions include:

1. ML/NLP — LLM agent systems (derivable from "LLM-based agents")
2. Classical AI planning (derivable from "plan")
3. Robotics / embodied AI — NOT derivable from user input
4. HCI / workflow systems — NOT derivable from user input
5. Cognitive science / problem-solving psychology — NOT derivable; adjacent discipline (psychology, different primary subject matter)
6. Software engineering / program synthesis — NOT derivable
7. Reinforcement learning / sequential decision-making — NOT derivable
8. Formal methods / program verification — NOT derivable
9. Operations research / sequential optimization — NOT derivable
10. Management science / organizational behavior (Angle 20) — NOT derivable; adjacent discipline (business/org theory, different primary subject matter)

The count of distinct traditions (≥4) is met at 15. At minimum 10 of 15 are not derivable from user input words alone. Two clearly adjacent-discipline traditions are present (cognitive science and management science), both with non-overlapping vocabulary from the main topic.

**Evidence:** "Cognitive science / problem-solving psychology — planning cognition, executive function, means-ends analysis, working memory" (Step 2); "Management science / organizational behavior — principal-agent theory, authority hierarchy, organizational slack, bounded rationality" (Angle 20 / Cross-disciplinary slot).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

**Criterion:** ALL THREE present: (a) null-hypothesis angle naming SPECIFIC failure MECHANISM; (b) exact text "ADVERSARIAL-FLAGGED" verbatim; (c) cross-disciplinary angle from different primary field with non-overlapping vocabulary.

**Analysis:**

**(a) Null-hypothesis angle with specific failure mechanism:** Angle 18 ("Failure Modes and Null Results — Where LLM Agent Planning Breaks") names specific mechanisms: "hallucination," "out-of-distribution generalization failures," "replanning failures," "planning breakdown." Query Q2 reads "LLM agent planning does not generalize out-of-distribution failure limitation" — this is a specific failure mechanism (OOD generalization), not just a generic statement that failures exist. PRESENT.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Angle 19 header: "*[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]*" — the string "ADVERSARIAL-FLAGGED" appears verbatim. Also repeated in the type field and Gate 1 check. PRESENT.

**(c) Cross-disciplinary angle from different primary field:** Angle 20 targets Management science / organizational behavior, explicitly marked "[NOT in intake brief — cross-disciplinary slot]" with vocabulary ("principal-agent theory," "bounded rationality," "satisficing," "organizational planning hierarchy") that does not appear in any other angle. PRESENT.

**Evidence:** "ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results" (Angle 19); "Management science / organizational behavior [NOT in intake brief — cross-disciplinary slot]" (Angle 20 tradition label).

---

## Q5 — ACTIONABILITY

**Score: 3**

**Criterion:** Every angle ≥2 runnable query strings; all use tradition-specific vocabulary; all have ≥1 specificity operator (Boolean AND of two distinct concepts, named technique/author/venue, or numerical threshold).

**Analysis:**

All 20 angles have exactly 4 query strings — ≥2 met universally.

**Tradition-specific vocabulary check (sampled across all 20 angles):**
- Angle 4: "LLM PDDL planning symbolic neural integration," "hierarchical task network HTN" — tradition-specific (classical AI planning terms not in user input)
- Angle 5: "Monte Carlo tree search MCTS," "world model simulation planning rollout" — tradition-specific
- Angle 6: "task and motion planning TAMP," "SayCan code as policies LLM robot" — tradition-specific
- Angle 9: "RLHF sequential decision making policy optimization," "MDP Markov decision process" — tradition-specific
- Angle 14: "executive function goal hierarchy means-ends analysis," "prefrontal cortex goal-directed behavior psychology" — tradition-specific (cognitive science vocabulary)
- Angle 20: "principal-agent theory information asymmetry," "bounded rationality satisficing" — tradition-specific (management science vocabulary)

No angle uses only generic phrase concatenation.

**Specificity operator check:**
- Named techniques present throughout: ReAct, Plan-and-Execute, PDDL, HTN, MCTS, TAMP, SayCan, MemGPT, SWE-bench, RLHF, AgentBench, WebArena, GAIA, AutoGen, MetaGPT
- Date range "2024 2025" appears in 18 of 20 angles' first query (numerical threshold)
- Boolean AND of two distinct concepts: every query uses multi-term combinations where both terms are independently meaningful ("LLM PDDL planning symbolic neural integration task planning" — five distinct concepts)

All queries use tradition-specific vocabulary and all have at least one specificity operator.

**Evidence:** "LLM PDDL planning symbolic neural integration task planning 2024 2025" (Angle 4, Q1); "principal-agent theory information asymmetry task planning delegation uncertainty" (Angle 20, Q2).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

**Criterion:** Zero angle pairs where query overlap would retrieve >60% of same papers.

**Analysis:**

The output includes a Gate 2 distinctness check that explicitly tests 8 high-risk pairs. All 8 pass. I independently verified the most likely problem pairs:

- Angle 1 (ReAct, planning prompts) vs Angle 2 (tool use, function calling): Angle 1 targets architectural reasoning strategies; Angle 2 targets grounding and API execution. Query vocabularies do not overlap beyond "LLM agent." Estimated overlap: <20%.
- Angle 4 (PDDL, symbolic-neural) vs Angle 13 (formal verification, plan correctness): Angle 4 targets generation of planning domain descriptions; Angle 13 targets post-hoc correctness verification. Shared papers likely exist (LLM + PDDL verification) but <40% — the distinctive terms "verification," "temporal logic," "CAV/TACAS" versus "STRIPS," "goal decomposition," "ICAPS" would filter substantially.
- Angle 12 (RAG, retrieval-augmented) vs Angle 16 (knowledge graph, ontologies): Different access mechanisms and communities (IR/retrieval vs semantic web/KR). Shared papers possible but likely <30%.
- Angle 18 (failure modes) vs Angle 19 (specification gaming): Angle 18 uses "hallucination," "out-of-distribution," "benchmark failure"; Angle 19 uses "specification gaming," "reward hacking," "goal misgeneralization." These address failure through entirely different conceptual frames and would retrieve different literatures.

No pair reaches the 60% overlap threshold. The tradition labels across all 20 angles are fully distinct.

**Evidence:** Gate 2 table showing: "Angle 18 (failure modes) vs Angle 19 (specification gaming): 'does not generalize' / 'failure modes' — No — A19 uses 'specification gaming,' 'goal misgeneralization,' 'reward hacking' — PASS."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

**Criterion:** ALL present: (a) coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis; (b) intake brief with vocabulary traditions + question-type classification + severity assessment; (c) ≥1 gate documented as run with GATE PASSED or GATE FAILED notation.

**Analysis:**

**(a) Coverage map:** Present as Part 2. Lists all 15 traditions from intake brief plus additional slots. Gap check present: "Traditions NOT yet represented in the planned list: Operations research / sequential optimization → PLANNED: A15; Knowledge representation / ontologies → PLANNED: A16; Interpretability / explainability → PLANNED: A17." Cross-disciplinary slot stated with selection basis: "LLM agents executing delegated multi-step tasks mirror organizational delegation problems — management science has studied task decomposition, authority boundaries, goal conflict resolution, and plan revision under uncertainty for decades using entirely different vocabulary (principal-agent theory, authority hierarchy, organizational slack, bounded rationality)." PRESENT.

**(b) Intake brief:** Present as Part 1, Steps 1–5. Includes vocabulary traditions (15 listed), question-type classification (EXPLORATORY, with PCC frame), severity assessment ("Source B status: UNAVAILABLE — MODERATE"). PRESENT.

**(c) Gate notation:** Part 5 contains: "Gate 1: PASS," "Gate 2: PASS," "Gate 3: PASS," "Gate 4: PASS" with explicit pass/fail verdicts for each sub-check. PRESENT.

**Evidence:** "COVERAGE MAP ... Cross-disciplinary slot (required): Target tradition: Management science / organizational behavior. Basis for selection: LLM agents executing delegated multi-step tasks mirror organizational delegation problems"; "Gate 1: PASS" (Part 5).

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**Criterion:** ALL present for score 3: (a) exact text "VOCABULARY SELF-REPORT FLAG" verbatim; (b) severity labeled "MODERATE RISK" or "HIGH RISK"; (c) ≥1 tradition named as possibly absent due to source limitation; (d) coverage described as reduced (not FULL).

**Analysis:**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** Present in Step 5: "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions listed above were enumerated by LLM only (Source B unavailable)." Also appears in the Gate Summary. PRESENT.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** The output says "Severity: MODERATE" (Step 2) and "Source B status: UNAVAILABLE — MODERATE" (intake brief) and "Expected coverage: MODERATE, not FULL" (Gate Summary). The word "RISK" does not appear alongside the severity label. The criterion requires exactly "MODERATE RISK" or "HIGH RISK." NOT MET — the label reads "MODERATE" only, not "MODERATE RISK."

**(c) ≥1 tradition named as possibly absent due to source limitation:** Gate Summary: "Traditions most likely to be missing: fields underrepresented in LLM training (non-English AI planning literature, specialized industrial planning communities)." PRESENT.

**(d) Coverage described as reduced (not FULL):** Gate Summary: "Expected coverage: MODERATE, not FULL." PRESENT.

Three of four criteria met; criterion (b) fails on exact wording ("MODERATE" vs. "MODERATE RISK").

**Score: 2** (self-report flag + reduced coverage + absent tradition named, but severity label does not include "RISK").

**Evidence:** "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions listed above were enumerated by LLM only" (Step 5); "Severity: MODERATE (Source A+C produced ≥2 distinct traditions; 15 traditions enumerated)" — severity label missing "RISK" suffix.

---

## Final Score Summary

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary tradition coverage | 3 |
| Q7 — Structural completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / non-redundancy | 3 |
| P1 — Procedure adherence | 3 |
| M1 — Self-assessment degraded mode | 2 |
