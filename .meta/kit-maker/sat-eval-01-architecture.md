# SAT-EVAL-01 — Research Saturation Evaluator: Architecture

**Phase:** 1 (Architecture)
**Status:** DRAFT — 2026-07-04
**System-design.md phase 1 done-criteria:** A fresh agent reading this document can answer (a) what it does that nothing else does, (b) where it fits, (c) what it reads and what reads it, (d) known risks and mitigations.

---

## (a) What this does that nothing else does

SAT-EVAL-01 evaluates whether a research angle has reached genuine saturation before the worker closes it or proceeds past a checkpoint. It is the only mechanism that:

- **Fires during research** (not at task close like A1, not before every response like goal checker)
- **Reads archive content** (goal checker reads project-state only; A1 reads completion claims, not raw archive files)
- **Evaluates saturation conditions structurally** (not via the same worker who ran the research)
- **Fires without a recognition check** — the trigger is checkpoint-write (structural), not the worker deciding "I should check saturation now"

The elimination of the recognition check is the core value. The current failure mode: the worker, under execution pressure, decides mid-search that it is saturated. This judgment is made by the same agent that ran the queries, against its own anchoring on what it expected to find. SAT-EVAL-01 replaces this with a fresh subagent reading the archive cold, evaluating against explicit conditions, with no access to the worker's prior expectations.

---

## (b) Where it fits in the existing process

### Trigger point

Every research checkpoint write. The checkpoint-write rule (TASK_TEMPLATE §3.4) already requires writing archive state after every 3-4 queries. SAT-EVAL-01 fires after each checkpoint write, before the worker continues or closes the angle.

### Sequence (per checkpoint)

```
Worker runs 3-4 queries
→ Worker writes archive checkpoint (§3.4 rule, already required)
→ Worker dispatches SAT-EVAL-01 (NEW — added to §3.4 sequence)
→ Evaluator reads archive + conditions + query list → returns SATURATED / NOT_SATURATED
→ If NOT_SATURATED: worker runs more queries; next checkpoint repeats
→ If SATURATED: worker may close the angle and proceed
```

### Where it does NOT fire

- Not before worker responses (goal checker's slot)
- Not at task close (A1's slot)
- Not at PCR time (PCR reads completed archives, not mid-research archives)
- Not on non-research tasks — evaluator is research-specific, dispatched only when archive checkpoints are written

---

## (c) What it reads; what reads it

### What SAT-EVAL-01 reads (inputs)

| Input | Source | Why |
|-------|--------|-----|
| Current archive file (full text) | Written by worker at checkpoint | Primary evidence for all 3 saturation conditions |
| TASK_TEMPLATE §2.6 saturation conditions (verbatim) | Kit file | The standard being evaluated against — evaluator does not define these |
| Query list (all queries run for this angle, in order) | Maintained by worker | Needed to verify condition 1 (consecutive-returns test) and condition 3 (vocabulary diversity) |
| Claim keys found | Archive file | Needed for condition 1 (which claims are already known) |

### The 3 saturation conditions (from TASK_TEMPLATE §2.6)

The evaluator evaluates against these — it does not define them:

1. **Condition 1 — Consecutive query convergence:** The last N queries (typically 3) returned only claim keys already present in the archive. No new claim key emerged. The queries were substantively distinct (not rephrases of each other).
2. **Condition 2 — Source-type breadth:** ≥2 distinct source types are represented in the archive: academic (peer-reviewed or systematic review), practitioner (implementation guide, blog, case study), tool (framework docs, GitHub implementations), empirical (benchmark, ablation study, real-deployment report). No single source type constitutes >80% of citations.
3. **Condition 3 — Cross-tradition check:** At least one query was run using vocabulary from an adjacent tradition or field (e.g., for LLM research: neuroscience, cognitive science, information retrieval, or behavioral economics vocabulary). A cross-tradition query was run, and its results either (a) produced new claim keys (→ angle was not yet saturated and that material is in the archive) or (b) returned only existing keys (→ cross-tradition saturation confirmed).

### What reads SAT-EVAL-01 output

The worker reads the evaluator's verdict:
- SATURATED: worker may close the angle (add to archive, proceed to next angle or PCR)
- NOT_SATURATED: worker must run additional queries before the angle can be closed; re-dispatch evaluator at next checkpoint

The archive file's final status section is updated to record the final SATURATED verdict (date, evaluator ID, conditions confirmed). This allows A1 and PCR to verify that saturation was externally confirmed, not self-declared.

---

## (d) Known risks and mitigations

### Risk 1: Archive-only epistemic problem (HIGH — fundamental)

**Description:** The evaluator reads what is in the archive. It cannot observe what is absent. An archive built from a narrow search trajectory may look saturated internally — consecutive queries return known keys, multiple source types are cited, a cross-tradition query was logged — while missing an entire discourse community that uses different vocabulary.

**Mitigation:**
- Condition 3 is explicitly designed to probe this: the evaluator must name the alternative vocabulary used in the cross-tradition query, not just assert "check was done." A cross-tradition query that uses the primary domain's vocabulary is not a genuine cross-tradition check.
- NOT_SATURATED output must name the vocabulary cluster used in condition 3 and the vocabulary clusters not yet probed. This makes the gap visible.
- **Residual risk documented (not solvable by prompt design):** If the worker has never encountered the alternative vocabulary, no amount of cross-tradition checking within the current vocabulary frame will find it. This is an irreducible epistemic limitation. The architecture acknowledges it rather than pretending it can be solved.

### Risk 2: Condition 1 gaming — query-burst to force convergence (MEDIUM)

**Description:** The worker could run a burst of narrow queries (variations on the same phrase) that all return known claim keys, then submit to evaluator claiming "last 3 queries returned only known keys." This satisfies condition 1 mechanically but not substantively.

**Mitigation:**
- Evaluator reads full query list, not just the last N. It checks that the last N queries were substantively distinct from each other (different vocabulary, different question framing, different search approach). If the last 3 queries are phrased variations of the same query, condition 1 is NOT met.
- Explicit rule in the evaluator prompt: "consecutive queries must be substantively distinct. Three variations of 'LLM instruction following' are one query, not three."

### Risk 3: Condition 2 source-type inflation (MEDIUM)

**Description:** The worker might include a single practitioner-blog citation alongside academic citations and claim ≥2 source types met. One citation of a minor type does not constitute genuine breadth.

**Mitigation:**
- Source-type condition is more than "present/absent." Evaluator checks whether each source type has substantive content (≥1 distinct claim key attributed to it, not a passing mention). A source-type entry that contributes no distinct claims does not count.
- NOT_SATURATED output must name the source-type distribution: "3 academic, 1 practitioner (blog post, no distinct claims)" counts as 1 type, not 2.

### Risk 4: Pattern C (unvalidated procedure applied) — THIS MECHANISM ITSELF (HIGH)

**Description:** SAT-EVAL-01 is a new mechanism. Writing the architecture and prompt does not mean it works. Deploying before Phase 3 calibration (≥3 known-failure cases, ≥3 genuine-saturation cases) risks the mechanism producing false-SATURATED verdicts systematically — the failure mode it was built to prevent.

**Mitigation:**
- Phase 3 calibration is a mandatory gate per system-design.md. The mechanism must NOT be deployed to production before Phase 3 passes.
- Calibration sources: mistakes.md M-04 and Pattern E (premature saturation), research_archive/premature-saturation-failure-modes…, research_archive/adversarial-saturation-validation-methods…
- False-SATURATED baseline cases (should NOT trigger NOT_SATURATED) required in calibration to verify the mechanism doesn't over-block genuine saturation.

### Risk 4a: Wrong-consensus failure (HIGH — design gap)

**Description:** The 3 saturation conditions use source-level redundancy as the saturation signal: new sources stop adding claim keys the archive doesn't already contain. A corpus can achieve redundancy saturation while being internally consistent, mutually reinforcing, AND wrong. When research converges on a bad consensus (all sources agree on a false claim), Condition 1 (consecutive zero-yield) declares SATURATED at maximum confidence — precisely when the corpus is most wrong and most uniform. The evaluator has no mechanism for detecting source correctness; it only measures novelty.

**Why this matters:** The gold standard is "perfect results with minimal user correction." A saturated-but-wrong corpus produces confident, well-structured kit outputs that are systematically incorrect — the maximum user-correction case. Solving "stop the research loop earlier" is a process-efficiency goal; the actual goal is "stop on correct material." These are not equivalent.

**Partial mitigation (in place):**
- Condition 2 (source-type breadth) reduces but does not eliminate same-consensus risk — requiring academic, practitioner, tool, and empirical sources makes multi-source conspiracy less likely.
- Condition 3 (cross-tradition check) forces at least one probe from outside the primary vocabulary frame — a dissenting tradition is more likely to surface counter-evidence than within-tradition sources.

**Enhancement queued (plan.md — TASK_TEMPLATE + §2.6 update):** Adversarial query condition (Condition 4): at least one query explicitly searches for contradictions, critiques, or failure modes ("critique of X," "X failure cases," "when X doesn't work"). If contradictions are found: incorporated as claim keys. If no contradictions found: null-result documented as positive finding. Requires: (a) §2.6 update; (b) sat-eval-01-prompt.md update; (c) calibration cases for Condition 4; (d) boundary protocol update (State 2: suggest adversarial query if Condition 4 unmet).

**Residual risk:** An adversarial query can be designed to return nothing (no published critique exists, or the query vocabulary is too narrow). A field with genuine consensus on a correct claim would be indistinguishable from a field with false consensus. Irreducible without external ground truth.

### Risk 4b: Breadth saturation ≠ depth adequacy (HIGH — design gap)

**Description:** The 3 saturation conditions (consecutive zero-yield, source-type breadth, cross-tradition check) are breadth-discoverability metrics. They answer: "Have we stopped finding new claim keys across diverse angles?" They do not answer: "Have we found enough about the specific mechanisms and failure modes this kit requires?" A research angle can reach breadth saturation while having thin coverage on exactly the subtopics the kit depends on.

**Why this matters:** An evaluator that declares SATURATED on breadth-saturated but depth-thin research is closing the loop at the wrong point — the researcher stops, the kit gets built on thin foundations, and the user provides correction downstream. This is the failure mode the evaluator was built to prevent.

**Partial mitigation (in place):**
- RESIDUAL_LIMITATION field names vocabulary traditions not probed — this provides a depth signal at the tradition level, not the subtopic level. PCR (post-cluster-review) reads RESIDUAL_LIMITATION fields and downgrades synthesis claims that assume completeness in unprobed areas.
- Cross-tradition check (Condition 3) forces at least one depth probe in a different vocabulary frame — reduces the chance of missing an entire approach class.

**Enhancement queued (plan.md — TASK_TEMPLATE improvement):** "Expected subtopics" declaration: worker lists key mechanisms/questions the angle should cover before queries begin. Evaluator receives this list and checks whether each subtopic has ≥1 claim key. Subtopics with zero coverage flagged as DEPTH GAP in NOT_SATURATED output or RESIDUAL_LIMITATION of SATURATED. Does not fully solve the gap (worker may not know expected subtopics upfront) but converts unknown-unknowns into known-unknowns at the angle level.

**Residual risk:** Worker-unknown subtopics (unknown unknowns) cannot be caught by any expected-subtopics check. This is an irreducible epistemic limitation — identical to the absent-vocabulary problem (Section 7 of sat-eval-01-maintenance.md).

### Risk 5: Task-executor-authored thresholds (MEDIUM — structural)

**Description:** The saturation conditions in TASK_TEMPLATE §2.6 (≥3 consecutive zero-yield queries, ≥2 source types, <80% concentration, cross-tradition query) were authored by the task-executor during the SAT-EVAL-01 design process. Wave 1 research validated the APPROACH (consecutive zero-yield as a saturation proxy; source-type breadth; cross-tradition checking). The specific numerical thresholds were chosen by the task-executor, informed by wave 1 findings but not formally derived from a quantitative external validation. Dispatching a fresh evaluator to read §2.6 adds a reading step but does not externalize the thresholds — the evaluator verifies against criteria the worker authored.

**Mitigation:**
- Wave 1 research confirms the general approach. Thresholds (≥3, ≥2, <80%) are conservative defaults from the literature, not arbitrary.
- Calibration tests (Phase 3) verify the evaluator correctly applies the thresholds. A threshold that is systematically too loose would produce false-SATURATED on A1/A2/A3/B1 cases — which Phase 3 would catch.
- Maintenance protocol (sat-eval-01-maintenance.md Section 3 thin-archive check) monitors production cases where SATURATED is declared on short arcs.
- plan.md item 3c: when wave 2 research closes, §2.6 conditions are to be reviewed against wave 2 findings; if any threshold needs revision, SAT-EVAL-01 is recalibrated.
- **Residual risk (not eliminable without external oracle):** Thresholds could be miscalibrated in ways that wave 1 research does not reveal and calibration test cases do not probe. A domain where information saturates faster or slower than the general methodology literature expects would produce false-SATURATED or false-NOT_SATURATED verdicts that neither calibration nor maintenance catches.

### Risk 6: Same-model fresh-agent limitation (MEDIUM — inherent)

**Description:** All fresh-subagent verifications (calibration, adversarial discoverability, prototype evaluation) use the same base model as the worker. If the model has a systematic bias in saturation assessment — e.g., it pattern-matches on query-count thresholds rather than genuine information-gap closure — fresh agents would reproduce that bias, making internal consistency tests pass while leaving the systematic error intact.

**Mitigation:**
- Calibration design (Phase 3) is explicitly adversarial, not confirmatory. Cases A1/A2/A3/B1 are designed to fail on different conditions. A model with a systematic "count-to-threshold" bias would misclassify A1 (fails Condition 2 regardless of query count) as SATURATED — which Phase 3 would detect as a calibration failure.
- The limitation is NOT the same as "no external verification": designed test cases can catch biases that manifest as misclassification on edge cases, even if they cannot prove deep calibration accuracy.
- **Residual risk (not solvable within same-model architecture):** A bias that is consistent with all calibration cases — not detectable by any finite test set with the same model — will not be caught by calibration. This is the irreducible constraint.
- **Comparison to the alternative:** Self-certified saturation (the mechanism SAT-EVAL-01 replaces) has a documented failure rate from Pattern E in mistakes.md. SAT-EVAL-01 with same-model limitation is better than self-certification even given this risk.
- Maintenance protocol (sat-eval-01-maintenance.md) monitors for drift in production — production verdicts can reveal calibration failures that test cases miss.

### Risk 6: Verdict not recorded in archive (MEDIUM)

**Description:** The evaluator returns a verdict to the worker, but if the verdict isn't written into the archive, A1 and PCR cannot verify external saturation confirmation later.

**Mitigation:**
- Archive format must include a `saturation_verdict` section: `{date, evaluator_dispatch_id, verdict, conditions_confirmed}`.
- TASK_TEMPLATE §3.4 updated (Phase 7) to require this field before an angle can be marked CLOSED.

---

## RESIDUAL LIMITATION field — consumer and action protocol

Every SATURATED verdict requires a RESIDUAL LIMITATION section (see Phase 2 prompt). The field has a defined consumer and action chain:

**Where it goes:** Written into the archive's `saturation_verdict` section alongside `{date, verdict, conditions_confirmed}`. The full RESIDUAL LIMITATION text is stored, not just a flag.

**Consumer 1 — PCR (post-cluster-review):** When PCR runs over a cluster of closed angles, it reads the RESIDUAL LIMITATION fields from all angles in the cluster. Its check: does any HIGH-confidence claim in the synthesis assume completeness across a vocabulary tradition that RESIDUAL LIMITATION identified as NOT probed? If yes: the synthesis claim must be downgraded or flagged with a limitation note.

**Consumer 2 — Worker note at angle close:** When writing the SATURATED verdict into the archive, the worker adds a post-angle note naming the vocabulary tradition(s) not probed. If any RESIDUAL LIMITATION names a major adjacent tradition (e.g., "cross-tradition check covered cognitive science but NOT neuroscience or information retrieval"), the worker flags this in the cluster's running notes, not just in the archive. This makes the gap visible to subsequent angle selection — the next angle selection may choose to probe the flagged tradition explicitly.

**Consumer 3 — Synthesis gate (TASK_TEMPLATE §4.x — Phase 7 update):** Before any synthesis file makes a "comprehensive coverage" claim for a domain, the claim must be checked against all RESIDUAL LIMITATION fields from the relevant research angles. A "comprehensive" claim is only valid if all residual limitations are either (a) probed by a later angle, or (b) explicitly scoped out of the synthesis claim.

**What the consumer is NOT:** RESIDUAL LIMITATION does not trigger a NOT_SATURATED recount or require the angle to be reopened. The verdict stands. The limitation is documented, flows downstream, and constrains the confidence of derived claims.

---

## Open question (documented, not solved)

**The absent-vocabulary problem:** If the search was conducted entirely within one vocabulary tradition, the evaluator cannot determine whether saturation is genuine or whether it's saturation-within-the-wrong-vocabulary-frame. Cross-tradition query checking (condition 3) mitigates this but cannot eliminate it: the worker must know what alternative vocabularies exist to probe them. When the alternative vocabulary is genuinely unknown to the worker, no external evaluator reading the archive can detect the gap.

**Implication for deployment:** The evaluator increases confidence in saturation claims for angles where the worker conducted substantively diverse queries. It cannot compensate for cases where the worker's search was vocabulary-constrained from the start. This limitation must be named in the mechanism's documentation (not buried in the architecture doc alone) — it is relevant to how confident the system can be in research outputs.

---

## Boundary protocol summary

| Mechanism | When fires | What reads | Primary output |
|-----------|-----------|------------|----------------|
| SAT-EVAL-01 | Research checkpoint (every 3-4 queries) | Archive file, query list, conditions | SATURATED / NOT_SATURATED |
| Goal checker | Before every response | project-state.md only | HARD BLOCK / SOFT CHALLENGE / CLEAR |
| A1 | Task close (Section 6) | Completion claim, task context | Compliance verdict |
| DCQC-01 (planned) | Task open (Section 1.1 gate) | Draft done-criteria, goal model | Outcome / artifact verdict |
| PCR | Post-cluster | Full cluster archives | Application table: HIGH findings applied? |

No overlap with adjacent mechanisms. SAT-EVAL-01 is the only mechanism that fires during research-in-progress with archive access.
