# Post-Batch Research Process Review — P1 Batch 2

Batch: Wave 2 P1 Batch 2 (clusters E/F/G/H + USER-03/04/07/08 — 14 angles)
Date: 2026-06-30
Run ID: wf_2bbd42e7-a60

---

## 1. Confidence distribution

| Type | Count | % |
|------|-------|---|
| Empirical | 136 | 69.7% |
| Consensus | 53 | 27.2% |
| Anecdote | 6 | 3.1% |
| **Total** | **195** | |

Verify results:

| Confidence | Count | % of empirical |
|-----------|-------|----------------|
| High | 54 | 39.7% |
| Medium | 56 | 41.2% |
| Low | 26 | 19.1% |

**Assessment vs Batch 1:**
- Low-confidence rate: 19.1% (Batch 1: 22.6%) — marginal improvement
- High+medium rate: 80.9% (Batch 1: 77.4%) — directional improvement
- Empirical % dropped (69.7% vs 75.6%) while consensus rose (27.2% vs 21.5%) — Batch 2 clusters (advisor behavior, direction alternatives, problem-solving) have less empirical literature than Cluster A/C topics
- The lower empirical rate is likely more accurate for these topics, not a regression in classification quality

**High-quality findings identified in Step 4b:**
- 3 HIGH confidence, verified claims in multi-task archive (IFScale omission data, attention-sink mechanistic, AOP completeness gap) — all independently verified against arxiv sources
- 2 HIGH confidence in advisor behavior archive (reactive-paradigm 85.19%, advisor-delegate paradox) — verified
- 1 HIGH confidence in disagreement archive (disempowerment-approval-paradox, 1.5M conversations) — verified
- Author misattribution continues as a systematic error (Batch 1 also had this pattern) — the mechanism is real but citations cite wrong authors

---

## 2. Saturation signal

62 new angles surfaced from 14 original angles — 4.4:1 expansion ratio (Batch 1: 4.1:1).

**Assessment:** Marginally worse than Batch 1. Angles are still too broad. However, Batch 2 had more genuinely nascent research areas (direction pivots, visual output), where literature naturally generates more open questions than conclusions. The expansion ratio may be structural for early-field topics rather than a process deficiency.

**Notable:** Two of the 14 angles (multi-task instruction completion, advisor behavior) produced the densest and most actionable archives (14 and 21 claims respectively). These were topic-focused with clear kit-maker relevance. The highest-expansion angles (direction-alternatives, double-loop) generated more exploratory terrain.

**Recommendation:** For Batch 3, separate "dense actionable area" angles from "exploratory terrain" angles. Dense actionable areas need narrower, mechanism-specific queries. Exploratory terrain can stay broader.

---

## 3. Null result rate

Not captured in batch summary output. Archive files include null results sections (as required), but totals were not extracted.

**From manual spot-check of three archives:**
- assertive-compliance: 4 documented null results (no study testing inform-once as labeled protocol; no frequency-ratio data)
- multi-task-completion: 5 documented null results (no benchmark for 2-15 concurrent task range; no prose-vs-list format comparison)
- goal-directed-advisor: 4 documented null results (no empirical comparison of CLAUDE.md wording variants; no decay rate curve data)

**Action (carried from Batch 1):** Add `nullResultCount` to research-wave.js summary output. Still not done.

---

## 4. Author misattribution as systematic error

Both Batch 1 and Batch 2 archives show a recurring pattern: research agents correctly identify a real paper (verified arxiv ID, real statistics, real findings) but attribute it to the wrong authors. Examples from Batch 2:
- PMC7945950: real paper (Babel, Kraus, Baumann) attributed to "Meng & Liang"
- PMC7673981: real paper (Yoo et al., JMIR) attributed to "Nanji et al., JAMIA"
- JPART 33/1/153: real paper (Alon-Barkat, Busuioc) attributed to "Peeters & Widlak"

**Pattern:** The verify pass catches these errors and rates them appropriately (medium rather than high), but the archive files retain wrong author names in the claim body.

**Process implication:** Author misattribution is inconvenient but does not affect the validity of the findings themselves (the real paper confirms the statistics). However, it means research archives cannot be used as citation sources directly. This should be explicitly noted in procedures/research-synthesis.md: "use claim statistics for kit decisions; do not cite archive claim text as a direct reference."

**Action:** Add to research-synthesis.md: "Archive claims are for internal decision-making only. Author attributions may be incorrect. Verify author names independently before citing externally."

---

## 5. Verify override rate

26 of 136 empirical claims rated LOW confidence = 19.1%.

From Batch 1 recommendation: "low-confidence empirical should be treated as consensus in synthesis."

**Status:** This rule exists in post-batch-review-p1-batch1.md as a recommendation but has NOT been added to procedures/research-synthesis.md. Applying it here: the 26 low-confidence empirical claims in Batch 2 archives are treated as consensus for synthesis purposes.

---

## 6. New angle triage (Step 4a results)

62 new angles triaged in RESEARCH_ANGLES.md as B2-P1, B2-P2, B2-P3, and B2-DUP entries.

| Tier | Count |
|------|-------|
| P1 (foundational, affect current decisions) | 13 |
| P2 (important, narrower scope) | 33 |
| P3 (refinement) | 10 |
| DUP (duplicate, do not dispatch) | 3 |
| **Total** | **62** |

**High urgency P1 angles** (may validate or invalidate current provisional decisions):
- B2-P1-04: Sycophancy suppression in RLHF — directly informs whether disagreement protocol needs structural changes
- B2-P1-05: Autonomy-preserving correction framing — may refine disagreement protocol wording
- B2-P1-06: Stakes-calibrated assertiveness — validates or revises the two-tier threshold
- B2-P1-09: Commitment-and-verify loop — informs multi-task tracking rule
- B2-P1-10: Criteria contamination in multi-turn loops — informs alternatives-generation procedure
- B2-P1-11: Structural separation as pipeline primitive — informs alternatives-generation

---

## 7. Evidence sufficiency check (Step 4b results)

Three archive files reviewed. Findings with immediate kit application:

### Disagreement protocol (HR13 element 7)
**Applied immediately (see ENTRYPOINT.md and CLAUDE.md updates):**
- Selective adherence finding (N=605-1345): corrections must be anchored to user's stated goal; filtering-out of corrections that contradict stated intent is documented empirically
- Robot assertiveness (N=154): explanatory framing (60-86% compliance) vs imperative framing (10-33% reactance)
- Adaptive confirmation (CHI 2026): risk-stratified flagging validated; high-stakes = flag once, routine = skip
- These together validate the two-tier structure and add a required wording element: anchor to user's stated goal

**Grounding map update:** HR13 element 6 (disagreement protocol) → 🔬 SYNTHESIZED (synthesis ran, result is directional but not high-confidence empirical on the specific inform-once protocol)

### Multi-task tracking rule (HR13 element 9)
**Applied to grounding map (rule design unchanged — already correct):**
- IFScale (2025): omission 20-35x more likely than modification; wholesale dropout not degraded execution — validates why enumerate+verify matters
- Attention-sink asymmetry: first tokens are retrieval keys; enumeration header at top recovers coverage
- AOP +7.1pp from detector component (enumerate requirements, check coverage) — validates the structure

**Grounding map update:** HR13 element 9 (multi-task tracking) → 📋 ARCHIVE EXISTS with strong directional support (approaching 🔬 SYNTHESIZED pending formal synthesis)

### Advisor behavior (HR13 elements 1-3)
**Applied to grounding map (rules validated, no wording change needed):**
- Reactive paradigm paper (85.19% improvement): re-anchoring triggers at session boundaries validate the session-start direction-drift check
- Advisor-delegate paradox (Delegate outperforms Advisor on outcomes): validates proceed-unless-redirected design — the kit correctly acts and presents, not recommends and waits

**Grounding map update:** HR13 elements 1-3 → 📋 ARCHIVE EXISTS with directional support

---

## 8. What to change for Batch 3+

Carrying forward from Batch 1 (not yet applied):
1. Null result count in summary — still missing from research-wave.js
2. Evidence downgrade in verify pass — low-confidence empirical should be tagged in archive files
3. Query cap at 7 — some Batch 2 archives also ran past 5 queries

New recommendations from Batch 2:
4. **Pre-triage in workflow** — the research agent already identifies new angles; add a priority-tier assignment step in the script prompt so post-batch triage is shorter
5. **Author attribution warning in template** — archive file template should include: "NOTE: Author names in claims may be misattributed. Verify before citing externally." This surfaces in every archive rather than requiring the reader to know from the process review.
6. **Separate "actionable density" from "exploratory" angles** — before dispatching, estimate whether an angle is in a dense-empirical-literature zone or an exploratory zone. Dense zones need 5-7 targeted queries. Exploratory zones need 3 queries maximum (document what exists, don't manufacture findings).

---

## Actions not completed during post-batch

- [ ] Add `nullResultCount` to research-wave.js summary output (carried from Batch 1)
- [ ] Add evidence-downgrade rule to procedures/research-synthesis.md (carried from Batch 1)
- [ ] Add author-attribution warning to archive file template
- [ ] Add "archive claims are for internal use only" note to research-synthesis.md
- [ ] Add priority-tier pre-triage step to research-wave.js agent prompt
- [ ] Formal synthesis for Cluster E (advisor behavior) — archive exists, findings actionable
- [ ] Formal synthesis for USER-03/04 (disagreement protocol) — archive exists, immediate application done; synthesis would move to SYNTHESIZED
- [ ] Formal synthesis for USER-07/08 (multi-task) — archive exists, rule validated; synthesis pending
