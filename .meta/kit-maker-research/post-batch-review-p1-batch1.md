# Post-Batch Research Process Review — P1 Batch 1

Batch: Wave 2 P1 Batch 1 (clusters C, B, A, D — 18 angles)
Date: 2026-06-30
Status: RETROACTIVE — written after batch, not during. Step 4c was not in the procedure at the time of the batch.

---

## 1. Confidence distribution

| Type | Count | % |
|------|-------|---|
| Empirical | 186 | 75.6% |
| Consensus | 53 | 21.5% |
| Anecdote | 6 | 2.4% |
| **Total** | **246** | |

Verify results:

| Confidence | Count | % of empirical |
|-----------|-------|----------------|
| High | 64 | 34.4% |
| Medium | 80 | 43.0% |
| Low | 42 | 22.6% |

**Assessment:** 22.6% low-confidence is notable. This is above the threshold that would suggest systematic over-classification. The low-confidence claims are concentrated in Cluster A (behavioral rule compliance) and Cluster D (kit validation) — both fields where LLM-specific empirical literature is sparse. Research agents were classifying practitioner-consensus findings as "empirical" when source studies had small n, single-lab, or no replication. This is a known risk flagged in the pre-launch notes but it still materialized.

The empirical rate (75.6%) is higher than expected given the pre-launch warning for Clusters A and D ("expect mostly consensus/anecdote"). Either: (a) more empirical work exists than anticipated, or (b) research agents over-classified consensus findings as empirical. Given the 22.6% low verify rate, (b) is plausible. Net usable empirical (high + medium confidence): 144/186 = 77.4% of empirical claims survived the verify pass with medium or high confidence.

---

## 2. Saturation signal

73 new angles surfaced from 18 original angles — a 4.1:1 expansion ratio.

**Assessment:** This is high. A ratio above 2:1 suggests the original angles were too broad — each angle found a topic but didn't exhaust it, instead generating sub-questions. This is expected for a first wave (the field is new and angles were deliberately broad), but for the next wave the angles should be narrower and more targeted at the specific mechanism or finding rather than a broad topic area.

Several archive files show saturation logs running to 10-15 queries before reporting saturated. The original 5-query design underestimated how deep these topics are, particularly Cluster A (behavioral rules) and Cluster C (research methodology).

**Recommendation for next wave:** Reduce angle breadth. Instead of "behavioral rule compliance — all patterns," try "negation instruction format comparison: do-not vs avoid vs never." Smaller scope = faster saturation = cleaner archive files.

---

## 3. Null result rate

Not fully documented in the batch output. Archive files include a null results section but aggregate counts weren't captured in the summary.

**Assessment:** Unknown. The post-batch procedure should capture this as a summary field. Add to the research-wave.js script: count null result entries across all archive files and include in the summary object.

**Action:** Add `nullResultCount` to the summary returned by the workflow script.

---

## 4. Verify override rate

42 of 186 empirical claims rated LOW confidence = 22.6%. These claims were not formally downgraded in the archive files (they retain `evidence: empirical`) but the verify note flags them.

**Assessment:** The archive files show `evidence: empirical` with `confidence: low` — this is a mixed signal. Synthesis will need to treat low-confidence empirical claims as functionally equivalent to consensus for decision-making purposes, but the schema doesn't enforce this. Either: (a) the verify pass should explicitly downgrade the evidence tier when confidence is low, or (b) the synthesis procedure should have an explicit rule: "low-confidence empirical = consensus-tier for decision purposes."

**Recommendation:** Add a rule to `procedures/research-synthesis.md`: low-confidence empirical claims are treated as consensus tier during synthesis. Do not block on them for decisions that need empirical grounding.

---

## 5. New angle triage (retroactive — Step 4a)

73 new angles were added to RESEARCH_ANGLES.md without triage. Retroactive assessment:

**High urgency (may contradict current provisional decisions):**
- A-NEW-10: Implicit rule precedence from training data — contradicts assumption that kit-defined rules dominate; may affect all Hard Rules
- C-NEW-12: Anchoring bias resistant to standard mitigation prompts — directly contradicts assumption that "consider alternatives" instructions are sufficient; affects alternatives-generation.md
- C-NEW-18: Process trace access as prerequisite for depth evaluation — architecture requirement not in current design; affects Phase 3 workflow instrumentation
- D-NEW-14: Belief-update protocols as explicit kit components — may warrant Hard Rule 13 element (not yet added)

**P1 candidates (foundational, should be in next wave):**
- A-NEW-01 to A-NEW-05: Rule conflict, retirement, checkers, activation, ordering — all directly affect how kit rules are written
- D-NEW-01: Behavioral drift detection — affects deployed kit maintenance
- D-NEW-08: Recovery prompt engineering — directly actionable; salience reminders already mentioned in Batch 1 findings

**P2 candidates (important but narrower):**
- B-NEW-01 to B-NEW-10: Publication bias, preregistration — improve research quality but don't block kit design decisions
- C-NEW-01 to C-NEW-09: Documentation standards, PRESS, tiered standards — improve process but aren't blocking

**P3 candidates (refinement after P1/P2):**
- C-NEW-13 to C-NEW-16: DAG bias audit, Dempster-Shafer fusion, GRADE-CERQual — advanced methodology improvements

**Duplicate check:**
- B-NEW-02, B-NEW-05, B-NEW-09 are variations on the same pre-registration idea — should be consolidated into one angle before dispatching
- A-NEW-11 (conflict detection as pipeline stage) and A-NEW-12 (prompt injection as rule conflict) overlap significantly — consider merging

---

## 6. Evidence sufficiency check (retroactive — Step 4b)

Angles with evidence strong enough for immediate provisional decisions, without waiting for synthesis:

**Cluster A — Behavioral rules:**
- Terminal constraint decay (50% drop for end-of-response rules): HIGH confidence, verified. Actionable now: Hard Rule 13 should specify that critical behavioral rules appear at BOTH top and end of system prompt, not just once. **Not yet applied.**
- Salience-enhanced format restores compliance to 90-100%: HIGH confidence, verified. Same action as above. **Not yet applied.**
- Counter-intuitive constraints fail at 10-100% regardless of format: HIGH confidence. Actionable: kit rule writing procedure should include a step to identify counter-intuitive constraints and add structural scaffolding (examples, reasoning chains), not just restate them more clearly. **Not yet applied.**

**Cluster C — Research quality:**
- Appears well-grounded but synthesis needed before changing research-quality.md.

**Cluster D — Kit validation:**
- Significant gaps in validation methodology — synthesis needed before Phase 7 gate changes.

**Conclusion:** Three high-confidence Cluster A findings should be applied to Hard Rule 13 and kit rule writing procedures before synthesis. These are clear enough to act on now.

---

## 7. What to change for next batch (Batch 2 is already running — applies to Batch 3+)

1. **Narrow angle scope** — target specific mechanisms not broad topics. Current angles generate 4:1 new angle expansion; narrower angles would generate 1:1 or 2:1.
2. **Add null result count to workflow summary** — currently not surfaced.
3. **Add explicit evidence downgrade in verify pass** — when confidence is LOW, the archive file should tag `evidence: empirical (downgraded to consensus)` not just note low confidence.
4. **Cap queries at 7 per angle** — several angles ran 10-15 queries. 5-query cap is insufficient for mature research areas (methodology, cognitive psychology). 7 is a better default; add early-stop logic if 3 consecutive queries return 0 new keys.
5. **Pre-triage new angles in the workflow** — the research agent already identifies new angles; add a triage step where the agent also assigns priority tier before returning. Reduces post-batch triage overhead.

---

## Actions not completed during post-batch

- [ ] Triage of 73 new angles: done retroactively above (partial)
- [ ] Apply three high-confidence Cluster A findings to Hard Rule 13 and procedures
- [ ] Consolidate duplicate pre-registration angles (B-NEW-02, B-NEW-05, B-NEW-09)
- [ ] Add null result count to research-wave.js summary output
- [ ] Add evidence-downgrade rule to procedures/research-synthesis.md
