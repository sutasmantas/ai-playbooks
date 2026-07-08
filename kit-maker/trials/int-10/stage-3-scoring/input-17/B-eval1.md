# Scoring Rationale — Input 17, Condition B, Evaluator 1
**Date:** 2026-07-06
**Evaluator:** blind (eval1)
**Artifact scored:** cond-b-output.md

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The output lists 10 distinct parent-tradition labels across the Intake Brief (5 intake traditions) and Coverage Map (2 additional traditions discovered during generation) plus the Type Allocations block (D1 introduces Cybersecurity / Threat Research; C1 adds SE / Formal Verification; C2 adds Human Factors / Organizational Psychology). The summary table confirms: "Distinct vocabulary traditions (parent labels): 10."

User input vocabulary: "LLM agents", "operating system level", "controlling files, processes, and applications". Traditions derivable directly from these words: AI Agents / ML Systems (from "LLM agents") and Systems / OS Research (from "operating system level"). The remaining eight — Security / Safety Research, RPA / Enterprise Automation, HCI / Computer Vision, Software Engineering / DevOps, AI Policy / Legal Studies, Cybersecurity / Threat Research, Software Engineering / Formal Verification, Human Factors / Organizational Psychology — all introduce vocabulary absent from the user's phrasing.

Adjacent discipline: Human Factors / Organizational Psychology has a different primary subject matter (ergonomics and cognitive psychology of human-machine interaction), uses vocabulary such as "trust calibration", "mode confusion", "supervisory control", "situation awareness" — none overlap with CS/AI primary vocabulary.

All three Score-3 sub-conditions met: ≥4 distinct non-synonymous labels (10), ≥2 not derivable from input (8), ≥1 from adjacent discipline (Human Factors).

**Key evidence:** "10. Human Factors / Organizational Psychology" (Angle List Summary tradition count); "supervisory control automation trust AI agent situation awareness" (C2 Q3 — Human Factors vocabulary).

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

**(a) Null-hypothesis angle naming a specific failure mechanism:** Angle N1 is titled "Evidence That OS-Level LLM Agents Fail, Do Not Generalize, or Are Unreliable." The "What to extract" field specifies: "error cascades in multi-step OS tasks; scope limitations (OS versions, application types, task complexity); replication failures; evidence of task performance not generalizing beyond benchmark conditions." These are specific failure mechanisms (error cascade, scope ceiling, benchmark non-generalization), not the generic assertion that "failures exist."

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:** Present in Angle D1 header: "[ADVERSARIAL-FLAGGED: dispatch in a separate research context with no prior confirmatory results. Do not run this angle in the same session as Angles 1–13 and N1.]" Also appears in the Type Allocations block: "Slot D1 (Adversarial [ADVERSARIAL-FLAGGED] — starting vocabulary: Cybersecurity / Threat Research..."

**(c) Cross-disciplinary angle from a different primary field:** Angle C2 — Human Factors / Organizational Psychology — is explicitly marked "Cross-disciplinary: this tradition was NOT in the intake brief." Its vocabulary ("supervisory control", "situation awareness", "mode confusion") is non-overlapping with any AI/CS tradition in the output. The coverage map explains the selection basis: "human factors research on automation trust, control interface design, and situation awareness is directly applicable but uses vocabulary ... absent from AI framing."

All three sub-conditions met.

**Key evidence:** "[ADVERSARIAL-FLAGGED: dispatch in a separate research context..." (D1 header); "supervisory control automation trust AI agent situation awareness operator oversight" (C2 Q3).

---

## Q5 — ACTIONABILITY

**Score: 3**

All 17 angles have exactly 4 queries each — every angle exceeds the ≥2 threshold with no exceptions.

Tradition-specific vocabulary is present throughout, not generic phrase concatenation:
- Angle 1: "ReAct agent" (named framework)
- Angle 4: "seccomp capability" (named Linux security mechanism)
- Angle 7: "ScreenSpot Mind2Web GUI agent visual grounding evaluation" (named benchmarks)
- Angle 8: "OSWorld WindowsAgentArena" (named benchmark suites)
- Angle 9: "chain-of-thought tree-of-thought agent OS operations" (named reasoning architectures)
- Angle 12: "SWE-bench operating system environment test execution" (named benchmark)
- Angle C1: "pre-postcondition runtime" + "Coq/Lean/Isabelle" in source types (named formal verification tools; C1 Q2 uses "formal methods contract pre-postcondition runtime")
- Angle C2: "supervisory control automation trust AI agent situation awareness" (Human Factors technical vocabulary)
- Angle D1: "lateral movement attack campaign autonomous", "privilege escalation" (threat-research tradecraft vocabulary)

Specificity operators are present in all angles: named techniques (ReAct, seccomp, chain-of-thought, tree-of-thought), named benchmarks (OSWorld, WindowsAgentArena, ScreenSpot, Mind2Web, SWE-bench, GAIA, AssistGUI, AppAgent), named venues (USENIX, IEEE S&P, ACM CHI, PETS, NDSS), date ranges ("2024 2025"), and Boolean AND combinations of two distinct concepts across all query strings.

No angle relies on generic phrase concatenation. Angle 13 (Legal) uses GDPR and EU AI Act as named regulatory instruments, providing the required specificity.

**Key evidence:** "OSWorld WindowsAgentArena LLM agent operating system task benchmark evaluation 2024 2025" (A8 Q1 — named benchmarks + date range); "supervisory control automation trust AI agent situation awareness operator oversight" (C2 Q3 — Human Factors technical vocabulary as specificity operator).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 2**

The output's Gate 2 performs explicit pairwise distinctness checks for same-parent-tradition angle pairs and finds all checked pairs distinct. Security sub-tradition pairs (A4/A5, A4/A11, A5/A11) are clearly distinct. AI Agents sub-tradition pairs (A1/A2, A1/A8, A1/A9, A2/A8, A9/A10, N1) are checked and pass. SE pair (A12 vs C1) is verified as different sub-traditions.

**Unchecked borderline pair — Angle 2 vs Angle 7:**
Gate 2 does not check A2 (Computer Use — screenshot-based OS control) against A7 (Visual Grounding and GUI element localization). Both angles share significant query vocabulary:
- A2 Q2: "vision language model GUI interaction screen understanding action grounding"
- A7 Q2: "multimodal language model UI element detection screen understanding widget grounding"
Both contain "vision/multimodal language model" + "GUI/screen" + "understanding." The broader VLM-for-GUI-tasks literature is the primary target of both angles. A2's unique terms ("computer use," "mouse keyboard simulation," "accessibility tree") and A7's unique terms ("ScreenSpot," "Mind2Web," "element localization," "widget grounding") do provide differentiation, but the shared vocabulary overlap is substantial enough that >60% retrieval overlap from broader queries is plausible. This pair is not checked in Gate 2, constituting a gap in the distinctness verification.

The A2/A8 expected overlap is acknowledged in the output but justified as non-synonymous (different scope), and no fully synonymous pairs exist anywhere in the list. One potential overlap pair (A2/A7) unchecked; no fully synonymous pairs. Score: 2.

**Key evidence:** A2 Q2 "vision language model GUI interaction screen understanding action grounding" vs A7 Q2 "multimodal language model UI element detection screen understanding widget grounding" — shared vocabulary pool; pair absent from Gate 2 pairwise check.

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:** Present at the COVERAGE MAP section. Lists all 5 intake traditions with representative terms and planned angle slots. Gap flags are stated for each tradition (e.g., Tradition 2 Systems/OS Research: "Gap flag: Yes — only one angle planned"). Cross-disciplinary slots C1 and C2 appear with stated selection basis: C1 rationale is "SE and formal verification communities study correctness of programs that interact with OS APIs ... this tradition uses entirely different vocabulary from the ML/AI community"; C2 rationale is "human factors research on automation trust ... is directly applicable but uses vocabulary (trust calibration, mode confusion, supervisory control) absent from AI framing."

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:** Full INTAKE BRIEF block is present. Vocabulary traditions: 5 candidate entries. Question type: "EXPLORATORY." Severity: "Source B status: UNAVAILABLE — MODERATE." Domain maturity estimate: "MIXED." Scope markers and known exclusions present.

**(c) ≥1 gate documented as run with GATE PASSED or GATE FAILED notation:** Four gates documented: "Gate 1: PASS", "Gate 2: PASS (with VOCABULARY SELF-REPORT FLAG)", "Gate 3: PASS", "Gate 4: PASS." Overall verdict: "PASS — dispatch ready."

All three Score-3 sub-conditions met.

**Key evidence:** "Gate 1 — Completeness: PASS" (Gate Summary table); "C1 target: Software Engineering / Formal Verification — Basis: OS-level agents invoke system APIs that have formal specifications..." (Coverage Map cross-disciplinary slot with stated selection basis).

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** Present in two locations. In the Intake Brief: "Source B status: UNAVAILABLE — MODERATE — Source A + Source C produced 5 distinct vocabulary traditions; angle generation may proceed; VOCABULARY SELF-REPORT FLAG applies throughout." In Gate 2: "**VOCABULARY SELF-REPORT FLAG:** All traditions were enumerated by LLM only (Source B unavailable). External validation via survey-paper probe is recommended before treating the tradition check as definitive." Also in Gate Summary: "VOCABULARY SELF-REPORT FLAG — all 5 intake-brief traditions were enumerated by LLM only..."

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK" verbatim:** NOT MET. The document uses "UNAVAILABLE — MODERATE" throughout (header line 5, intake brief line 64). The word "RISK" does not appear after "MODERATE" in any severity label. The criterion requires the exact string "MODERATE RISK" or "HIGH RISK"; the output provides only "MODERATE."

**(c) ≥1 tradition named as possibly absent due to source limitation:** Present. From the "What is missing" section: "The largest risk is a tradition this LLM has not encoded — e.g., a robotics sub-tradition that frames OS agents as 'digital embodied agents' or a systems security tradition using different vocabulary than what I've covered." Also from the Intake Brief: "NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered."

**(d) Coverage described as reduced (not FULL):** Partially met. The Gate Summary states "traditions the LLM cannot enumerate may be missing," and the Survey paper status is "NOT FOUND — Source B unavailable," with a recommendation for a vocabulary-discovery pass "before finalizing tradition list." Coverage is described as uncertain and unvalidated rather than explicitly labeled "REDUCED" or contrasted against "FULL." The intent is present; the explicit reduction label is absent.

Three of four elements present (a, c, d-partial); (b) definitively absent due to missing "RISK" word. Score 2 applies: self-report flag + partial severity indicator present; one required element (verbatim "MODERATE RISK"/"HIGH RISK") is missing.

**Key evidence:** "VOCABULARY SELF-REPORT FLAG applies throughout" (Intake Brief — (a) confirmed); "UNAVAILABLE — MODERATE" (header/intake brief — (b) fails verbatim test; word "RISK" absent).

---

## Summary Table

| Dimension | Score |
|-----------|-------|
| Q1 — Vocabulary Tradition Coverage | 3 |
| Q7 — Structural Completeness | 3 |
| Q5 — Actionability | 3 |
| Q3 — Precision / Non-Redundancy | 2 |
| P1 — Procedure Adherence | 3 |
| M1 — Self-Assessment Degraded Mode | 2 |
