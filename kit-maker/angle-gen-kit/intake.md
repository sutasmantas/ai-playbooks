# intake.md — Angle-Gen-Kit Intake Procedure

**Purpose:** Convert a 1–2 sentence sparse input into a structured research brief that angle-generation.md can consume.

**Input required:** Nothing beyond a human prompt. The user says "I want to research X" — that is sufficient.

**Output:** A populated brief with all fields filled (no blanks) or explicitly flagged.

---

## Step 1 — Sparse-input parsing

From any human prompt, extract three elements:

| Element | What to look for | Example from "I want to research instruction-following in LLMs" |
|---------|-----------------|----------------------------------------------------------------|
| Target concept | The noun phrase the user wants to study | instruction-following in LLMs |
| Anchor vocabulary | Terms the user chose to use — these reveal which vocabulary tradition they entered from | "instruction-following" (NLP tradition), "LLMs" (ML-systems tradition) |
| Scope signals | Any constraint language: domain, date range, exclusions, population | None in this example — note absent |

If the target concept is absent or genuinely ambiguous (two plausible readings that lead to different literatures): ask. This is the only question type that passes the outcome-critical test for intake. Cap: 2 questions total across all intake steps.

**Do not ask:** What databases to use, what frameworks to apply, what the user already knows. These are inferable or irrelevant at intake.

---

## Step 2 — Vocabulary bootstrap

Given the extracted anchor terms, enumerate candidate vocabulary traditions using three sources in sequence:

**Source A — LLM translation (fast, required):**
For each anchor term: generate synonyms, alternative framings, and adjacent concepts the literature might use. Focus on terms the user did NOT use — absence is the vocabulary-gap signal.

Example:
- "instruction-following" → also called: "rule compliance," "command execution," "behavioral adherence," "policy following," "alignment," "RLHF," "constitutional AI," "prompt following"
- "LLMs" → also called: "large language models," "language models," "transformers," "foundation models," "autoregressive models"

**Source B — Survey-paper probe (recommended for unknown domains):**
Search: `"[topic]" survey 2023 2024 2025`. Examine the title terms — survey papers use the vocabulary of the field, not the vocabulary of any one tradition. Titles that use terms you have not yet listed are vocabulary audit material.

If no survey paper is found: log "no survey paper found — vocabulary-discovery pass recommended before finalizing angle list" in the brief.

**Source C — Absent-term signal:**
List 3–5 terms the LLM would expect to see associated with this topic that the user did NOT use. Example: user said "instruction-following in LLMs" but did NOT say "RLHF" or "constitutional AI" — these are candidate vocabulary gaps.

---

## Step 3 — Question-type classification

Classify the user's research question as one of two types:

**EXPLORATORY:** "What is the space of findings on X?" / "What do we know about X?" / "What approaches exist for X?"
→ Apply PCC frame (Population, Concept, Context) if structure is helpful. Do NOT apply PICO at this stage. Use exploratory-search-first at angle generation.

**STRUCTURED:** "Does A work better than B?" / "What is the effect of X on Y?" / "Which method outperforms Z?"
→ PICO/SPIDER applicable after vocabulary is established. Structured frameworks can be applied at intake because the user already has domain vocabulary (they named a comparison).

**Decision rule:** Default to EXPLORATORY if the user's prompt does not contain explicit comparison language or intervention-outcome structure. Most sparse inputs are EXPLORATORY.

**Why this matters:** Applying PICO at intake for EXPLORATORY questions is the documented failure mode. PICO requires domain vocabulary to fill its fields; at domain entry, that vocabulary does not exist yet. Forcing PICO at intake produces incomplete fields, not structure (synthesis Step 4, CONTESTED finding).

---

## Step 4 — Populate the intake brief

Fill all fields before proceeding to angle-generation.md. No blanks.

```
INTAKE BRIEF
============
Topic: [one sentence — the target concept]

Anchor vocabulary: [terms the user used, labeled by tradition if known]

Candidate vocabulary traditions:
  1. [tradition name] — [representative terms]
  2. [tradition name] — [representative terms]
  [add more; if only 1 identified: "Only 1 tradition identified at intake — vocabulary-discovery pass required before angle generation"]

Question type: [EXPLORATORY / STRUCTURED]
  [If STRUCTURED: name the comparison or intervention-outcome pair]

Scope markers: [any constraints from the prompt — domain, date range, exclusions]
  [If none: "None stated — inferred scope: [inferred scope from target concept]"]

Known exclusions: [anything the user explicitly said is out of scope]
  [If none: "None stated"]

Domain maturity estimate: [academic-heavy / practitioner-heavy / mixed]
  Basis: [how this was estimated — e.g., "anchor vocabulary is academic; user did not mention tools or implementations = academic-heavy" / "no survey paper found; most results are blog posts / GitHub repos = practitioner-heavy"]

Survey paper status: [found / not found]
  [If found: title + year + key vocabulary terms not already in traditions list]
  [If not found: "No survey paper found — vocabulary-discovery pass recommended before finalizing angle list"]

Cross-disciplinary tradition (pre-commit for angle-generation.md Slot C1):
  Target tradition: [a discipline NOT in the candidate traditions list above]
  Selection basis: [one of: similar mathematical structures / same real-world problem from human perspective / adjacent problem solved the same way]
```

---

## Step 5 — Fallback protocol

**When the only vocabulary bootstrap is LLM enumeration (no survey paper, no user anchor terms):**

Flag the following in the brief:
- Add to vocabulary traditions list: "NOTE: Vocabulary traditions listed here are LLM self-reported. The LLM cannot enumerate traditions it has not encountered. Vocabulary-discovery pass (pearl-growing from a known anchor paper) is recommended before accepting the angle list as covering all traditions."

This is a caveat in the brief, not a blocker. Angle generation can proceed. The fallback makes the limitation visible so the user can compensate.

**When the user prompt has zero anchor vocabulary (pure "I want to research X"):**
- Run Source A (LLM translation) only
- Flag that vocabulary-discovery gap is HIGH RISK
- Recommend: before running angle generation, run one survey-paper query and add its title vocabulary to the brief

**When Source B (web search / survey-paper probe) is unavailable at execution time:**

Source B may be unavailable when this kit runs inside a subagent, sandboxed environment, or shell without web access.

Severity assessment:
- **MODERATE** — if Source A + Source C together identified ≥2 distinct vocabulary traditions. Proceed; apply the VOCABULARY SELF-REPORT FLAG (above); add to intake brief: `Source B status: UNAVAILABLE — MODERATE (Source A+C produced ≥2 traditions)`.
- **HIGH RISK** — if Source A + Source C together produced only 1 vocabulary tradition, or if the topic is in a domain with poor LLM coverage (highly specialized, non-English, or post-training-cutoff research). Halt and surface to the user: "Source B unavailable; vocabulary-discovery confidence is HIGH RISK for this topic. Recommend running intake in a context with web access before proceeding."

Add this field to the intake brief when Source B is unavailable:
```
Source B status: UNAVAILABLE — [MODERATE / HIGH RISK] — [reason]
```

Do not proceed to angle generation without one of: (a) Source B completed, (b) MODERATE severity assessment written in brief, or (c) explicit user authorization to proceed despite HIGH RISK.

---

## Step 6 — Intake gate

Before proceeding to angle-generation.md, all four gate conditions must be true:

- [ ] Topic field is populated (not "TBD")
- [ ] Candidate vocabulary traditions has ≥2 entries OR explicitly states "only 1 tradition identified — vocabulary-discovery pass required"
- [ ] Question type is classified (EXPLORATORY or STRUCTURED)
- [ ] Cross-disciplinary tradition pre-commit field is populated (target tradition named, selection basis stated)

If any condition is false: do not proceed. Resolve the missing field first.

**Why the fourth gate (Gap 2 fix — INT-10 preregistration):** The coverage map's cross-disciplinary slot was a declared gate in angle-generation.md without structural enforcement — a compliant agent produced it; a non-compliant agent could skip it. Moving the tradition selection to a required intake brief field makes the gate structural: an agent cannot pass intake without naming it, and the intake gate is enforced before any angle generation begins.

The maximum number of user questions allowed to reach this gate: 2. If the gate cannot be reached in 2 questions, infer the remaining fields and flag the inference in the brief.

---

## Worked example

**Input:** "I want to research instruction-following in LLMs"

**Step 1 output:**
- Target concept: instruction-following in LLMs
- Anchor vocabulary: "instruction-following" (NLP tradition), "LLMs" (ML-systems tradition)
- Scope signals: none stated

**Step 2 output:**
- Source A — LLM translation:
  - Tradition 1 (NLP/alignment): RLHF, constitutional AI, prompt following, rule compliance, behavioral adherence, policy following
  - Tradition 2 (ML-systems): LLMs, large language models, transformers, foundation models
  - Tradition 3 (cognitive science / HCI — absent from user input): task compliance, instruction comprehension, natural language understanding, directive following
  - Absent-term signal: user did not use "alignment" or "RLHF" — these are the most academically prominent terms in this area; absence may signal the user is approaching from an applied (not research) framing
- Source B — survey probe: `"instruction following" LLMs survey 2024 2025` — check results for additional vocabulary terms
- Source C: user did NOT say: alignment, RLHF, constitutional AI, FLAN, InstructGPT

**Step 4 output (populated brief):**
```
INTAKE BRIEF
============
Topic: How language models follow (or fail to follow) natural language instructions

Anchor vocabulary: "instruction-following" (NLP tradition), "LLMs" (ML-systems tradition)

Candidate vocabulary traditions:
  1. NLP alignment — RLHF, constitutional AI, prompt following, instruction tuning, InstructGPT, FLAN
  2. ML systems — large language models, transformers, foundation models, autoregressive models
  3. Cognitive science / HCI — task compliance, instruction comprehension, directive following, command execution

Question type: EXPLORATORY
  (no comparison or intervention-outcome structure in the prompt)

Scope markers: None stated — inferred scope: general instruction-following capabilities, not specific to any model family or task type

Known exclusions: None stated

Domain maturity estimate: academic-heavy
  Basis: anchor vocabulary is academic ("instruction-following"); user did not mention specific tools or deployment contexts; area has substantial arXiv literature

Survey paper status: CHECK REQUIRED — run Source B probe before proceeding to angle generation

Cross-disciplinary tradition (pre-commit):
  Target tradition: Educational psychology / learning science
  Selection basis: Same real-world problem from human perspective — instruction-following has a parallel in human learning compliance, classroom directives, pedagogical scaffolding literature
```

**Gate check:** Topic populated ✓, 3 vocabulary traditions ✓, Question type EXPLORATORY ✓, Cross-disciplinary tradition pre-committed ✓. Proceed to angle-generation.md.

---

**Trace:** vocabulary-mismatch HIGH (G1 — vocabulary bootstrap prevents single-tradition lock-in; absent-term signal addresses Furnas 1987 mismatch mechanism); question-scoping-frameworks CONTESTED (Step 3 — exploratory-first default resolves the PICO-at-intake failure mode from synthesis Step 4); llm-generation-failure-modes HIGH (G2 — Source C absent-term signal surfaces what LLM would not enumerate without prompting); kit-design-principles.md Principle 9 (sparse-input operability — procedure works from 1-sentence prompt with no prior structured input).
