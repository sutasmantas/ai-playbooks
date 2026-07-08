# angle-quality.md — Angle List Quality Gates

**Purpose:** Binary-checkable quality criteria applied after angle-generation.md produces the draft list, before delivery to the user or dispatch to a research agent.

**Who runs this:** A fresh agent (or the same agent in a new pass) with access to the angle list and the intake brief. No access to the generation rationale is needed — every criterion here is checkable from observable artifacts.

**Pass standard:** All four gates must pass. A list with one failing gate is not ready for dispatch.

---

## Gate 1 — Completeness checks

For each item: mark PASS or FAIL. FAIL = not dispatch-ready.

- [ ] **Null-hypothesis angle present:** Exactly one angle is framed as "what evidence would show this does NOT work / hold?" The framing must be explicit — a confirmatory angle with a caveat does not count. Check: does the angle's query set contain at least one query using terms like "failure," "does not generalize," "negative result," "limitations," "replication failure," or equivalent disconfirming vocabulary? If no: FAIL.

- [ ] **Adversarial angle present:** At least one angle is labeled `[ADVERSARIAL-FLAGGED]` with the dispatch note ("dispatch in separate research context with no prior confirmatory results"). Label is sufficient evidence of presence. If the label is absent from all angles: FAIL.

- [ ] **Cross-disciplinary angle present:** At least one angle targets a vocabulary tradition that was NOT in the intake brief's candidate vocabulary traditions list. Check the angle's tradition label against the intake brief. If all tradition labels match intake brief traditions: FAIL.

- [ ] **Source-type coverage:** If the intake brief flagged domain maturity as practitioner-heavy or mixed — at least one angle assigns a practitioner source (GitHub, blog posts, technical reports, Stack Overflow). If no practitioner source appears anywhere in the angle list AND domain is practitioner-heavy or mixed: FAIL.

- [ ] **Vocabulary-tradition map populated:** The Step 0 coverage map from angle-generation.md has ≥2 distinct tradition names. If the coverage map is absent or lists only one tradition: FAIL.

---

## Gate 2 — Distinctness checks

**Boolean-connective test (apply to every angle pair):**

For each pair of angles in the list: can their query strings be combined with OR and still retrieve substantially the same documents as running them separately?

- If YES: the angles are synonyms. One of them must be revised or merged. Resolution options: (a) identify which vocabulary facet is covered by one but not the other and split explicitly by facet; (b) merge into one angle and acknowledge the merge in the coverage map.
- If NO: the pair passes.

**How to apply:** Take angle A's most distinctive query term. Does it also appear in angle B's query strings (or in semantically equivalent form)? If yes: apply the Boolean-connective test formally (would OR retrieve the same documents?). If no: pair passes without formal test.

**Small-literature exception:** For topics where the intake brief estimates <20 papers exist total: high pairwise overlap may reflect literature size, not angle redundancy. In this case: flag for human judgment rather than automatic merge. Write: "SMALL LITERATURE FLAG — pairwise overlap may reflect limited corpus, not angle redundancy. Human judgment required before merge."

**Vocabulary-tradition distinctness:**
Every angle must have a different vocabulary-tradition label in its record. If two angles share the same tradition label: they are candidates for merger UNLESS one is the null-hypothesis variant or adversarial variant of the other. Check: does the tradition label differ? If two non-null-hypothesis, non-adversarial angles share a label: FAIL.

---

## Gate 3 — Launchability checks

Each angle must pass all three items. FAIL on any one = angle is not dispatch-ready.

- [ ] **Has at least one concrete query string:** The angle record contains at least one query in the "Queries:" field that is a runnable search string — not a description, not a question, not a placeholder. Test: could you paste this into a search box right now? If not: FAIL.

- [ ] **No placeholder vocabulary:** No query string contains "TBD," "to be determined," "[fill in]," "insert term," or equivalent unfilled markers. Check each query string character by character if needed. If any placeholder found: FAIL.

- [ ] **Source type is named:** The "Source type (academic)" and "Source type (practitioner)" fields name a specific platform (arXiv, Semantic Scholar, GitHub, etc.) — not "some database" or "relevant sources." Specific enough that a research agent knows where to start. If either field is blank or uses vague language: FAIL.

---

## Gate 4 — Scoring prohibition

- [ ] **No LLM self-evaluation ranking:** If any angles were filtered, ranked, or prioritized during generation: verify that the criterion used was structural — vocabulary-tradition coverage, source-type coverage, null-hypothesis presence, Boolean-connective distinctness. If the criterion was "which angle seems most promising," "which seems most relevant," "which appears most novel," or any equivalent subjective assessment: FAIL.

- [ ] **No implicit quality assessment:** Angle records do not contain phrases like "this angle is likely to be most useful" or "this is the strongest angle." These are LLM self-quality assessments. If present: remove them before dispatch. Structural criteria only.

**Why LLM self-evaluation is prohibited:** LLM novelty judgments are anticorrelated with actual scientific impact (ρ=−0.29, HindSight time-split evaluation; synthesis G2). LLM judges rate their own outputs 0.46 points more leniently than human judges. Structural criteria (cross-disciplinary coverage, null-hypothesis presence, facet diversity) are both more reliable and checkable by a fresh agent.

---

## Known limits of these criteria

These limits must be read before applying the gates — they change how to interpret failures:

**Limit 1 — Boolean-connective test cannot detect distinctness for small literatures.** For topics with <20 papers, two genuinely distinct angles will both retrieve the same 15 papers, producing what looks like synonymy. Automatic merge is incorrect for this case. The small-literature exception in Gate 2 handles this — but the test cannot automatically detect whether the exception applies. The agent must check the estimated corpus size from the intake brief or a quick probe search before applying the Boolean-connective test.

**Limit 2 — PICO facet test is NOT included here and should NOT be added.** The PICO Boolean facet test systematically rejects exploratory angles that cannot be mapped to PICO facets. This kit uses the Boolean-connective test as the more general alternative. Do not substitute PICO for the Boolean-connective test, especially for EXPLORATORY question types from the intake brief.

**Limit 3 — Vocabulary-tradition distinctness assumes accurate tradition enumeration.** The check "does each angle have a different tradition label" assumes the traditions in the coverage map are accurately identified. When vocabulary traditions are ALL self-reported by LLM enumeration alone (no survey paper, no external anchor): flag this explicitly. Write: "VOCABULARY SELF-REPORT FLAG — all traditions were enumerated by LLM only; external validation via survey-paper probe is recommended before accepting the tradition check as complete."

**Limit 4 — Adversarial label is necessary but not sufficient.** The ADVERSARIAL-FLAGGED label records the structural separation requirement. It does not enforce it at execution time — the downstream research agent must honor the label by running the adversarial angle in a separate context. This kit cannot enforce downstream execution discipline.

---

## Audit trail requirement

After running all four gates: produce a gate summary before reporting the list as ready or not ready.

**Gate summary format:**
```
GATE SUMMARY
============
Gate 1 — Completeness: [PASS / FAIL — list which items failed]
Gate 2 — Distinctness: [PASS / FAIL — list which angle pairs flagged; note small-literature exceptions]
Gate 3 — Launchability: [PASS / FAIL — list which angles failed and which field is missing]
Gate 4 — Scoring prohibition: [PASS / FAIL]

Overall verdict: [PASS — dispatch ready / FAIL — return to angle-generation.md with specific failure list]

Flags requiring human judgment: [list any small-literature exceptions, vocabulary-self-report flags, or other items requiring judgment that gates cannot resolve]
```

A "PASS" verdict without a gate summary is not a valid gate completion. The summary is the evidence the gates ran.

**Post-gate generation requirement:** If the gate summary reports FAIL on Gate 1 vocabulary-tradition map, or if the VOCABULARY SELF-REPORT FLAG names specific untested traditions: the gate result is not final. Generate ≥1 angle for each named missing tradition, then re-run Gate 1. A gate summary that names a coverage gap but does not close it is a partial run, not a complete gate. The gate closes only when the angle list covers all identified traditions OR an explicit scope-acceptance statement is written.

---

**Trace:** angle-quality HIGH (G7 — Boolean-connective test as gold-standard proxy for Jaccard overlap; mode collapse as LLM default; PICO facet limitation); llm-generation-failure-modes HIGH (G2 — LLM self-evaluation prohibition and anticorrelation finding; null-hypothesis blindspot gate); source-diversity HIGH (G4 — Gate 1 source-type coverage check enforces structurally distinct sources requirement); confirmation-bias HIGH (G3 — adversarial angle present check and label requirement).
