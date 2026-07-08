# angle-generation.md — Core Angle Generation Procedure

**Purpose:** Generate a quality-gated angle list from a populated intake brief (output of intake.md). The list is ready for dispatch to a downstream research agent.

**Prerequisite:** Intake brief from intake.md with all fields populated. If the brief is not complete — return to intake.md. Do not proceed.

**Output:** A structured angle list with: vocabulary-tradition label, predicted research character, launchable query strings, source-type pair, and angle-type designation for each angle.

**Expected count:** 5–12 angles for a standard research question. Below 5 = undercoverage. Above 12 without explicit justification = mode collapse or scope inflation.

**Hard input (complex multi-tradition domain):** 20–30 angles is appropriate when ≥4 distinct vocabulary traditions are identified at intake and the topic spans multiple disciplines. Document the justification explicitly in the coverage map (Step 0).

---

## Step 0 — Coverage map (required before any angle is written)

Build a coverage map from the intake brief's vocabulary traditions list. This map governs what angles are generated — it is not a post-hoc description.

**Format:**

```
COVERAGE MAP
============
Tradition 1: [name]
  Representative terms: [key terms]
  Planned angle slot: [angle type — confirmatory / null-hypothesis / adversarial / cross-disciplinary]
  Gap flag: [yes / no — is this tradition currently under-represented in the planned list?]

Tradition 2: [name]
  [same fields]

[Repeat for each tradition]

Traditions NOT yet represented in the planned list:
  [List any traditions from the intake brief that have no planned angle slot]
  [If none: "All traditions from intake brief have at least one angle slot"]

Cross-disciplinary slot (required):
  Target tradition: [a tradition NOT in the intake brief — named before generation begins; should match the pre-commit from intake.md Step 4 if one was made]
  Basis for selection: [why this tradition is likely to contain relevant literature]

**Cross-disciplinary selection heuristics (Gap 5 fix — INT-10 preregistration):**
To identify a candidate cross-disciplinary tradition, check each question and use the first that yields a non-obvious answer:
1. What field uses **similar mathematical structures or formal frameworks** for this phenomenon?
2. What field addresses **the same real-world problem from a human/social/organizational perspective**?
3. What field has **solved an adjacent problem** that required the same type of solution?
The answer to any of these questions names a candidate tradition. Choose the one least likely to have been enumerated by the intake brief's vocabulary bootstrap (highest coverage novelty).
```

**Gate:** Do not write any angle content until the coverage map is populated. The map is the evidence this step ran.

**Minimum requirement:** ≥2 vocabulary traditions from the intake brief must have planned angle slots. Any tradition with no planned slot is a logged gap — not automatically added, but explicitly acknowledged.

---

## Step 1 — Structural angle-type allocation

Before generating any angle content, allocate angle TYPES. This is done against the coverage map — each type fills a slot in the map.

**Required types (cannot be skipped or substituted):**

| Type | Count required | Rule |
|------|---------------|------|
| Confirmatory | ≥2 | Each from a different vocabulary tradition in the coverage map |
| Null-hypothesis | Exactly 1 | Cannot be merged with a confirmatory angle or satisfied by hedging language |
| Adversarial | ≥1 | Must use a different starting vocabulary from all confirmatory angles; label ADVERSARIAL-FLAGGED |
| Cross-disciplinary | ≥1 | Targets a tradition NOT in the intake brief (named in coverage map cross-disciplinary slot) |

**Null-hypothesis angle format:** "What query string would retrieve literature showing [phenomenon] does NOT occur, does NOT generalize, or does NOT hold under [scope condition]?"

The null-hypothesis angle is the angle the LLM is least likely to generate without explicit structural elicitation. Its absence is the primary mode collapse signal.

**Adversarial angle format:** Generate WITHOUT access to the confirmatory angle content. If you cannot structurally separate the generation context: write the adversarial angle using explicitly different starting vocabulary — list the vocabulary terms being excluded from the generation prompt. Label: `[ADVERSARIAL-FLAGGED: dispatch in separate research context with no prior confirmatory results]`

The structural requirement for adversarial separation is empirically grounded: a same-context adversarial pass does not escape the prior-belief vocabulary pool (synthesis G3, confirmation-bias HIGH). The label ensures the downstream research agent can enforce context separation at execution time.

**Allocation record:** Write the type allocations before writing any angle content. Format:

```
TYPE ALLOCATIONS
================
Slot A1 (Confirmatory — Tradition 1): [tradition name]
Slot A2 (Confirmatory — Tradition 2): [tradition name]
Slot N1 (Null-hypothesis): assigned
Slot D1 (Adversarial): [starting vocabulary — NOT FROM: (list traditions used in A1/A2)]
Slot C1 (Cross-disciplinary): [tradition name from coverage map cross-disciplinary slot]
[Additional confirmatory slots as needed]
```

---

## Step 2 — Coverage-gap conditioning generation

Generate angle content for each allocated slot using coverage-gap conditioning. The prompt for each slot is different:

**Confirmatory slots:** "Given the following vocabulary traditions already covered in prior slots: [list traditions already assigned]. Which aspect of [topic] is NOT yet addressed by queries in those traditions?"

**Null-hypothesis slot:** "Formulate the angle as a disconfirming search: what query string would retrieve literature showing [phenomenon] does NOT occur or does NOT generalize?"

**Adversarial slot:** Explicitly exclude prior vocabulary from generation. Write: "Generating from this tradition: [new tradition]. Excluding these terms from the generation prompt: [all terms used in prior confirmatory slots]." Then generate.

**Cross-disciplinary slot:** Name the target discipline explicitly before generating. Write: "Generating from [named discipline] vocabulary, not from the user's apparent [apparent discipline] framing." Then generate.

**Why coverage-gap conditioning is required:** Unconstrained LLM angle generation produces density-sampling from training data — centroids and close neighbors, not coverage of the conceptual space. Coverage-gap conditioning shifts the generation from "what is related to this" to "what is NOT yet covered" — which is the operative mechanism that produces vocabulary-diverse output (synthesis G8, query-expansion-mechanics HIGH).

---

## Step 3 — Source-type assignment per angle

Every angle receives a source-type pair before being finalized. Use platform-calibration.md for platform-specific rules.

**Assignment rule:**

| Topic type (from intake brief) | Academic source (required) | Practitioner source |
|-------------------------------|---------------------------|---------------------|
| academic-heavy | arXiv (correct category per platform-calibration.md), Semantic Scholar, PubMed (field-dependent) | GitHub, technical reports — OPTIONAL but recommended |
| practitioner-heavy | arXiv/Semantic Scholar where applicable | GitHub, blog posts, technical reports, Stack Overflow — REQUIRED |
| mixed | arXiv/Semantic Scholar | GitHub, blog posts — REQUIRED |

**Structural distinctness check:** arXiv + Semantic Scholar = NOT structurally distinct for AI topics (same preprint ingest policy). If your two sources are arXiv and Semantic Scholar: one of them is not an independent source. Substitute a practitioner source for one.

**What "structurally distinct" means:** Different ingest policy, different author population, different publication incentive. arXiv + GitHub issues = structurally distinct. Semantic Scholar + the same arXiv preprints via a different interface = not structurally distinct.

---

## Step 4 — Query generation within each angle

Generate 3–5 queries per angle using expansion-as-facet-generation.

**Expansion-as-facet-generation:** Each additional query within an angle addresses a different facet of the angle — not a synonym or paraphrase of a prior query. Ask before each additional query: "Has the facet covered by this new query already been addressed by a prior query in this angle?" If yes: skip it.

**Specificity gate (apply before generating any expanded query):**
- If the query is anchored by a proper noun, a specific tool name, or a post-2023 niche topic: run the original query WITHOUT expansion. Expansion degrades retrieval for these cases (synthesis G8, domain-dependent variance finding). Write: "SPECIFICITY GATE APPLIED — original query only."
- If the query is a general concept with multiple entry points: expansion is appropriate. Proceed.

**Query count guidance:** 3 queries covers Bradford zone 1 (majority of relevant material). 4–5 queries reaches zone 2 with diminishing returns. Above 5 queries per angle: state the justification. More queries from the same vocabulary tradition do not substitute for a different tradition.

**Predicted research character:** For each angle, predict one of:
- **empirical** — expect peer-reviewed studies with measurements, effect sizes, or controlled comparisons
- **consensus** — expect practitioner guides, expert-authored frameworks, documented conventions
- **gap** — expect minimal literature; this angle's purpose is to document absence

Document this prediction in the angle record. It is used downstream to calibrate how many non-results are expected before calling an angle saturated.

---

## Angle record format

Each angle in the output list uses this format:

```
ANGLE [N]: [descriptive title]
===========
Vocabulary tradition: [tradition name from coverage map]
Angle type: [Confirmatory / Null-hypothesis / Adversarial-FLAGGED / Cross-disciplinary]
Predicted research character: [empirical / consensus / gap]
What to extract: [specific types of findings to pull — e.g., "effect sizes, scope conditions, failure cases" / "implementation patterns, failure modes practitioners report" / "absence of literature in these search terms"]

Source type (academic): [specific platform — see platform-calibration.md for category rules]
Source type (practitioner): [specific platform — or "deprioritized: academic-heavy topic, minimal practitioner production"]

Queries:
  Q1: [exact query string — no "TBD"]
  Q2: [exact query string — new facet from Q1]
  Q3: [exact query string — new facet from Q1, Q2]
  [Q4, Q5 if justified — state facet]

Coverage-gap note: [what aspect of the angle is NOT addressed by these queries — left for human judgment or a follow-up angle]
```

---

## Worked example (partial — instruction-following in LLMs, EXPLORATORY)

**Coverage map (Step 0):**
```
Tradition 1: NLP alignment (RLHF, instruction tuning, constitutional AI)
  Slot: Confirmatory A1
Tradition 2: ML systems (LLMs, transformers, foundation models)
  Slot: Confirmatory A2
Tradition 3: HCI / cognitive science (task compliance, directive following)
  Slot: Cross-disciplinary C1
NOT YET REPRESENTED: [none — all traditions covered]
Cross-disciplinary slot: philosophy of action / command semantics (NOT in intake brief)
```

**Angle N1 (Null-hypothesis):**
```
ANGLE 1: Evidence that instruction-following fails or does not generalize
===========
Vocabulary tradition: NLP alignment (disconfirming variant)
Angle type: Null-hypothesis
Predicted research character: empirical
What to extract: Conditions under which models fail to follow instructions, scope limitations, negative results

Source type (academic): arXiv cs.CL
Source type (practitioner): GitHub issues on major LLM evaluation frameworks

Queries:
  Q1: instruction following failure large language models robustness 2024 2025
  Q2: LLM instruction following breakdown adversarial prompts out-of-distribution
  Q3: language model rule compliance failure generalization limits empirical
```

---

**Trace:** vocabulary-mismatch HIGH (G1 — Step 0 coverage map is the operative intervention that determines the accessible literature space); llm-generation-failure-modes HIGH (G2 — Step 1 null-hypothesis gate and Step 2 coverage-gap conditioning address LLM mode collapse and null-hypothesis blindspot); confirmation-bias HIGH (G3 — adversarial slot structural separation requirement and ADVERSARIAL-FLAGGED label); source-diversity HIGH (G4 — Step 3 source-type assignment and structural distinctness check); query-expansion-mechanics HIGH (G8 — specificity gate and coverage-gap conditioning in Step 4); platform-search-strategies HIGH (G6 — pointer to platform-calibration.md for category rules); angle-quality HIGH (G7 — type allocation allocation before generation is the pre-generation mode-collapse check).
