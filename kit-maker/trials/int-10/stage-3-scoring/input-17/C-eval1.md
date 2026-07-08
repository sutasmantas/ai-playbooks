# INT-10 Scoring Rationale — Input 17, Condition C, Evaluator 1

Scored blind. Topic context: LLM agents operating at OS level (not factored into scores).

---

## Q1 — VOCABULARY TRADITION COVERAGE

**Score: 3**

The intake brief enumerates 10 named vocabulary traditions, and the coverage map adds two more via dedicated slots (cross-disciplinary and adversarial), giving 12 total distinct labels: ML/NLP systems, Empirical ML evaluation/benchmarking, Computer systems/OS design, Cybersecurity/security engineering, Adversarial ML/robustness, AI safety/alignment, HCI/robotic process automation, Multimodal ML/computer vision, Software engineering/code agents, Formal methods/security theory, Law/digital governance, and Business process management/enterprise IS.

User input words were "LLM agents," "operating system level," "controlling files," "processes," and "applications." Traditions NOT derivable from these words include at minimum: HCI/robotic process automation (RPA, UiPath, screen scraping — user never mentioned RPA), AI safety/alignment (corrigibility — not in user input), Formal methods/security theory (Bell-LaPadula, ambient authority — not in user input), Law/digital governance (CFAA, EU AI Act — not in user input), and BPM/enterprise IS (shadow IT, workflow governance — not in user input). This far exceeds the ≥2 required.

Adjacent-discipline criterion: Law/digital governance (Angle 13) is primary legal scholarship — vocabulary is CFAA, GDPR, EU AI Act, liability, unauthorized computer access statutes. This is unambiguously from a different primary field with non-overlapping vocabulary relative to the main topic's CS/ML framing.

**Evidence:** "Law / digital governance — NOT in intake brief — the user's framing is entirely technical" (coverage map); "Basis: Autonomous OS-level actions by AI agents raise legal accountability questions... studied in legal scholarship and governance research."

---

## Q7 — STRUCTURAL COMPLETENESS

**Score: 3**

All three required elements are present.

**(a) Null-hypothesis angle naming a specific failure mechanism (not just "failures exist"):**
Angle 11 is titled "Evidence That OS-Level LLM Agents Fail, Are Unreliable, or Cause Harm" and names specific mechanisms: "unintended system modifications, data loss, or process crashes," "benchmark performance ceilings and what tasks agents consistently fail at," "conditions under which OS agents do NOT generalize," "negative replication results." These are named, checkable failure mechanisms.

**(b) Exact text "ADVERSARIAL-FLAGGED" verbatim:**
Appears at the opening of Angle 12: "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" and in the TYPE ALLOCATIONS list: "Slot D1 (Adversarial, ADVERSARIAL-FLAGGED)."

**(c) Cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary:**
Angle 13 is Law/digital governance, explicitly labeled "NOT in intake brief — cross-disciplinary slot." Its queries use vocabulary entirely outside all 10 technical traditions: CFAA, EU AI Act, GDPR, "data controller liability," "unauthorized computer access statutes," "jurisdiction issues."

**Evidence:** "[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]" (verbatim); "computer fraud abuse act CFAA unauthorized access automated AI system legal framework liability" (cross-disciplinary legal vocabulary).

---

## Q5 — ACTIONABILITY

**Score: 3**

Every angle carries exactly 3 query strings (39 total). All use tradition-specific vocabulary. Every angle has at least one specificity operator.

Specificity operators observed:
- Named benchmarks: "OSWorld," "AgentBench," "WebArena," "SWE-bench" (Angles 2, 9)
- Named techniques/concepts: "ReAct," "syscall filtering," "Bell-LaPadula," "ambient authority," "corrigibility" (Angles 1, 3, 6, 10)
- Named frameworks/statutes: "MITRE ATLAS," "CFAA," "EU AI Act," "GDPR" (Angles 4, 13)
- Named tools/models: "CogAgent," "SeeClick," "UiPath," "Devin," "OpenDevin" (Angles 7, 8, 9)
- Year range numerical thresholds: "2019 2020 2021 2022 2023," "2024 2025" throughout
- Boolean AND of two distinct concepts: "indirect prompt injection autonomous agent environmental manipulation OS file system attack vector" (Angle 5); "capability-based security principle least privilege formal" (Angle 10)

No query reduces to a bare generic concatenation of user-input words. All queries anchor to at least one tradition-specific term not present in the user's original prompt.

**Evidence:** "Q1: OSWorld benchmark computer use agent desktop task evaluation 2024 2025" (named benchmark + year range as specificity operators); "Q3: computer fraud abuse act CFAA unauthorized access automated AI system legal framework liability" (named statute; Boolean AND of distinct concepts).

---

## Q3 — PRECISION / NON-REDUNDANCY

**Score: 3**

The output documents an explicit distinctness gate (Gate 2) checking four potentially overlapping pairs and correctly identifies distinct vocabulary pools for each:

- A3 (sandboxing/OS design) vs A4 (cybersecurity): A3 queries use "container isolation namespace privilege containment Docker VM"; A4 queries use "threat model attack surface privilege escalation lateral movement data exfiltration." Design-space vs. attack-enumeration — different paper populations.
- A4 (cybersecurity) vs A5 (adversarial ML): A4 addresses system-level attack vectors; A5 addresses adversarial NLP input manipulation via environmental content (file contents, clipboard contents read by agent). Different research communities.
- A1 (LLM agent architecture) vs A9 (code agents): A1 uses "ReAct tool use architecture agent loop"; A9 uses "SWE-bench code execution scaffolding Devin." Different task framing and different target venues (cs.CL vs cs.SE).
- A7 (RPA) vs A8 (multimodal GUI): A7 is pre-LLM scripted deterministic automation (date band 2019-2023); A8 is visual ML for GUI interaction (2023-2025). Disjoint vocabulary and temporal focus.

The closest potential unexamined overlap is A7 (RPA) vs A12 (BPM/enterprise IS), both involving organizational automation. However A7 targets HCI/IS literature with RPA-specific terminology ("UiPath," "AutoHotKey," "cognitive automation") while A12 targets management IS journals with governance vocabulary ("shadow IT," "IT governance," "compliance"). These would retrieve distinct paper populations.

**Evidence:** "A3 (sandboxing/OS design) vs A4 (cybersecurity): A3 = isolation mechanism design ('sandbox container isolation namespace'); A4 = attack enumeration ('threat model attack surface privilege escalation'). Different vocabulary pools, different paper populations. PASS."

---

## P1 — PROCEDURE ADHERENCE

**Score: 3**

All three required elements are fully present.

**(a) Coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis:**
The COVERAGE MAP section lists all 10 traditions with representative terms, planned angle slot assignments, and explicit "Gap flag: No" entries. The cross-disciplinary slot is documented with explicit selection basis: "Basis: BPM and enterprise IS research studies organizational adoption and governance of automation systems from a management perspective. Its vocabulary is entirely absent from the technical traditions and would retrieve papers that technical searches miss." The C1 cross-disciplinary slot also states its basis.

**(b) Intake brief with vocabulary traditions + question-type classification + severity assessment:**
INTAKE BRIEF contains: 10 candidate vocabulary traditions with representative terms, question type classification ("EXPLORATORY — No comparison language or intervention-outcome structure in the prompt"), scope markers, known exclusions, domain maturity estimate, and severity assessment ("Source B status: UNAVAILABLE — MODERATE; Severity assessment: MODERATE — proceeding").

**(c) ≥1 gate documented as run with GATE PASSED or GATE FAILED notation:**
The GATE SUMMARY documents all four gates (Completeness, Distinctness, Launchability, Scoring prohibition) with per-sub-item "PASS" verdicts. Final: "Overall verdict: PASS — dispatch ready."

**Evidence:** "Question type: EXPLORATORY (No comparison language or intervention-outcome structure in the prompt)"; "Overall verdict: PASS — dispatch ready."

---

## M1 — SELF-ASSESSMENT DEGRADED MODE

**Score: 2**

**(a) Exact text "VOCABULARY SELF-REPORT FLAG" verbatim:** PRESENT. The intake brief contains "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions in this brief were enumerated by LLM only." The Gate Summary also references it: "VOCABULARY SELF-REPORT FLAG — all traditions are LLM-enumerated." Criterion met.

**(b) Severity labeled "MODERATE RISK" or "HIGH RISK":** NOT MET with exact wording. The output labels the severity as "MODERATE" ("Source B status: UNAVAILABLE — MODERATE"; "Severity assessment: MODERATE — proceeding") but the word "RISK" does not follow "MODERATE." The exact strings "MODERATE RISK" or "HIGH RISK" do not appear anywhere in the document.

**(c) ≥1 tradition named as possibly absent due to source limitation:** NOT MET. The VOCABULARY SELF-REPORT FLAG states generally that "The LLM cannot enumerate traditions it has not encountered" and recommends a pearl-growing pass, but no specific tradition is identified as a candidate for absence. The acknowledgment is generic rather than tradition-specific.

**(d) Coverage described as reduced (not FULL):** BORDERLINE MET. The flag states "External validation via survey-paper probe is recommended before accepting the tradition check as complete or the angle list as covering all traditions" — this implies coverage may be incomplete. The word "reduced" is not used, but the statement that coverage should not be "accepted as complete" conveys equivalent meaning.

Scoring decision: Element (a) is clearly present. Element (b) fails on exact wording ("MODERATE" not "MODERATE RISK"). Element (c) is absent. Element (d) is approximately met. With the self-report flag unambiguously present and a clear severity acknowledgment (even without the exact "RISK" suffix), Score 2 is the correct assignment: flag + severity indicator present, but at least one required element (specific absent tradition) is missing.

**Evidence:** "VOCABULARY SELF-REPORT FLAG: All vocabulary traditions in this brief were enumerated by LLM only. No survey paper was consulted." (flag present verbatim); "Severity assessment: MODERATE — proceeding" (severity present but without "RISK" suffix; exact required label absent).

---

## Summary

| Dimension | Score |
|-----------|-------|
| Q1 Vocabulary tradition coverage | 3 |
| Q7 Structural completeness | 3 |
| Q5 Actionability | 3 |
| Q3 Precision / non-redundancy | 3 |
| P1 Procedure adherence | 3 |
| M1 Self-assessment degraded mode | 2 |
