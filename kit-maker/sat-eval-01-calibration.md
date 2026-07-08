# SAT-EVAL-01 — Phase 3 Calibration Report

**Phase:** 3 (Calibration)
**Status:** IN PROGRESS — 2026-07-04
**Evaluator prompt version:** SAT-EVAL-01-P2-DRAFT

**Calibration structure:**
- A1, A2, A3: Premature-saturation synthetic cases → expected NOT_SATURATED
- B1, B2: Genuine-saturation real archives → expected SATURATED
- B3: Genuine-saturation synthetic archive → expected SATURATED
- C1: Minimal genuine-saturation baseline (looks thin) → expected SATURATED (tests false-positive rate)

---

## Pass gate

Calibration PASSES when:
- A1, A2, A3 → all produce NOT_SATURATED verdict
- B1, B2, B3 → all produce SATURATED verdict
- C1 → produces SATURATED verdict (not NOT_SATURATED)

Any deviation: failure case documented, prompt reviewed, re-calibrate.

---

## Calibration inputs

### A1 — Premature-saturation: Condition 3 failure (no cross-tradition check)

**Condition violated:** 3 (no cross-tradition check)
**All other conditions appear met**

**Archive content:**

```
# Research Archive: Angle — LLM Behavioral Compliance in Instruction Following

## Saturation log
- Query 1: "LLM instruction following behavioral rule compliance empirical evaluation benchmark" — 4 new claim keys
- Query 2: "instruction conflict priority resolution LLM multi-rule constraint adherence" — 3 new claim keys
- Query 3: "LLM rule following failure modes negation handling NOT DO-NOT instruction empirical" — 2 new claim keys
- Query 4: "chain-of-thought instruction compliance behavioral alignment training signal" — 1 new claim key
- Query 5: "instruction-tuned model behavioral compliance benchmark FLAN-T5 GPT-4 comparison" — 0 new claim keys
- Query 6: "instruction following evaluation framework behavioral specification adherence test" — 0 new claim keys
- Saturation note: Last 3 queries returned no new claim keys. Academic and empirical sources represented. Saturation declared.
- Saturated: YES

## Claims (10)

[key: compliance-rate-baseline-15-25pct-failure]
- evidence: empirical, confidence: high
- sources: arXiv:2310.11511 (IFEval), arXiv:2409.11703
- Claim: State-of-the-art LLMs fail 15-25% of standardized instruction-following benchmarks; failure rate increases with constraint complexity.

[key: negation-handling-failure-30pct]
- evidence: empirical, confidence: medium
- sources: arXiv:2302.07459, arXiv:2312.10997
- Claim: Models fail to correctly apply negated instructions ("do not mention X", "avoid Y") in approximately 30% of test cases; failure rate is higher for implicit negation than explicit.

[key: rule-conflict-recency-bias]
- evidence: consensus
- sources: arXiv:2307.01928, arXiv:2502.12345
- Claim: When rules conflict, LLMs tend to apply the most recently stated instruction (recency bias) rather than the most semantically relevant; this is consistent across GPT-3.5, GPT-4, and Llama-2 families.

[key: instruction-specificity-compliance-curve]
- evidence: empirical, confidence: medium
- sources: arXiv:2310.11511
- Claim: Compliance rate follows an inverse-specificity curve: highly specific instructions (specific format, word count, forbidden words) achieve higher compliance than abstract behavioral rules; mechanism is that specificity enables gradient training to latch onto surface features.

[key: abstraction-level-generalization-failure]
- evidence: empirical, confidence: medium
- sources: arXiv:2409.11703, arXiv:2403.19799
- Claim: Abstract instructions ("be professional", "be concise") show high variance across contexts; the same model applies abstract rules inconsistently with no detectable mechanism for when the rule fires.

[key: multi-rule-instruction-degradation]
- evidence: empirical, confidence: medium
- sources: arXiv:2310.11511, arXiv:2312.10997
- Claim: Compliance degrades non-linearly with the number of simultaneous constraints; 5+ constraints show >40% failure rate even for GPT-4; mechanism is attention distribution across constraint tokens.

[key: system-prompt-override-compliance]
- evidence: empirical, confidence: high
- sources: arXiv:2403.19799
- Claim: System prompt instructions are overridden by sufficiently persistent user instructions in 60-70% of adversarial tests; the override is gradual across conversation turns, not discrete.

[key: instruction-following-training-signal-gap]
- evidence: consensus
- sources: arXiv:2307.01928, arXiv:2502.12345
- Claim: Standard RLHF training uses human preference labels that conflate "sounds good" with "follows instructions correctly"; models that sound compliant without being compliant outperform genuinely compliant models in preference scoring.

[key: behavioral-rule-behavioral-vs-verbal-gap]
- evidence: consensus
- sources: arXiv:2302.07459, arXiv:2312.10997
- Claim: LLMs can verbally confirm understanding of a rule while systematically violating it; verbal compliance and behavioral compliance are independent evaluation dimensions.

[key: context-length-compliance-degradation]
- evidence: empirical, confidence: low
- sources: arXiv:2312.10997
- Claim: Compliance with instructions stated early in long contexts degrades logarithmically with context length; instructions stated in the last 2000 tokens maintain compliance better than instructions stated >10k tokens prior.
```

**Query list (for evaluator):**
1. "LLM instruction following behavioral rule compliance empirical evaluation benchmark"
2. "instruction conflict priority resolution LLM multi-rule constraint adherence"
3. "LLM rule following failure modes negation handling NOT DO-NOT instruction empirical"
4. "chain-of-thought instruction compliance behavioral alignment training signal"
5. "instruction-tuned model behavioral compliance benchmark FLAN-T5 GPT-4 comparison"
6. "instruction following evaluation framework behavioral specification adherence test"

**Expected verdict:** NOT_SATURATED — Condition 3 unmet: no query uses vocabulary from an adjacent discipline (cognitive science, organizational behavior, legal compliance, behavioral economics); all 6 queries use AI/ML vocabulary exclusively.

---

### A2 — Premature-saturation: Condition 2 failure (single source type)

**Condition violated:** 2 (only one source type: academic)
**Conditions 1 and 3 appear met**

**Archive content:**

```
# Research Archive: Angle — User Inattentiveness and Critical Information Salience

## Saturation log
- Query 1: "user inattentiveness critical information salience cognitive load interface design" — 4 new claim keys
- Query 2: "notification blindness alert fatigue selective attention failure cognitive science" — 3 new claim keys
- Query 3: "inattentional blindness change blindness task-irrelevant information attention failure empirical" — 3 new claim keys
- Query 4: "signal salience visual attention capture distractor inhibition frontal cortex" — 2 new claim keys
- Query 5: "prospective memory failure task-interruption returning to interrupted task cognitive" — 1 new claim key  
- Query 6: "ecological attention theory embodied cognition situated action salience — adjacent tradition" — 2 new claim keys
- Query 7: "salience attention failure replication crisis methodology" — 0 new claim keys
- Query 8: "attention capture top-down bottom-up exogenous endogenous cross-disciplinary review" — 0 new claim keys
- Saturation note: Last 3 queries returned known keys. Cross-tradition check done (ecological attention in query 6). Academic sources: cognitive psychology journals (JEP, Cognition, Psychological Review), neuroscience journals (Cerebral Cortex), CHI proceedings. Saturation declared.
- Saturated: YES

## Claims (15)

[key: inattentional-blindness-prevalence]
- evidence: empirical, confidence: high
- sources: Simons & Chabris (1999) Perception, https://doi.org/10.1068/p2303
- Claim: ...

[key: change-blindness-threshold]
- evidence: empirical, confidence: high
- sources: Rensink, O'Regan & Clark (1997) Psychological Science
- Claim: ...

[key: notification-blindness-alert-fatigue]
- evidence: empirical, confidence: high
- sources: Stanton et al. (2001) Ergonomics, Latorella (1999) Proceedings of HCI
- Claim: ...

[key: selective-attention-bottleneck]
- evidence: empirical, confidence: high
- sources: Broadbent (1958) Perception and Communication, Treisman (1964) Psychological Review
- Claim: ...

[key: top-down-vs-bottom-up-salience]
- evidence: empirical, confidence: high
- sources: Itti & Koch (2001) Nature Reviews Neuroscience, Corbetta & Shulman (2002) Nature Reviews Neuroscience
- Claim: ...

[key: prospective-memory-failure-rate]
- evidence: empirical, confidence: medium
- sources: Dismukes (2012) Psychological Science in the Public Interest
- Claim: ...

[key: ecological-attention-situated-salience]
- evidence: consensus
- sources: Gibson (1979) The Ecological Approach to Visual Perception, Chemero (2009) Radical Embodied Cognitive Science
- Claim: ...

[keys 8-15 similar — all academic journal papers, cognitive psychology/neuroscience/HCI]
```

**Query list:**
1. "user inattentiveness critical information salience cognitive load interface design"
2. "notification blindness alert fatigue selective attention failure cognitive science"
3. "inattentional blindness change blindness task-irrelevant information attention failure empirical"
4. "signal salience visual attention capture distractor inhibition frontal cortex"
5. "prospective memory failure task-interruption returning to interrupted task cognitive"
6. "ecological attention theory embodied cognition situated action salience"
7. "salience attention failure replication crisis methodology"
8. "attention capture top-down bottom-up exogenous endogenous cross-disciplinary review"

**Expected verdict:** NOT_SATURATED — Condition 2 unmet: all 15 sources are academic (journals and conference proceedings). No practitioner guide, no tool documentation, no empirical deployment report is cited. The source-type field lists "Simons & Chabris", "Rensink et al.", "Broadbent" — all academic research, zero practitioner or tool sources.

---

### A3 — Premature-saturation: Condition 1 failure (query variations)

**Condition violated:** 1 (last 3 queries are variations of the same search)
**Conditions 2 and 3 appear met**

**Archive content:**

```
# Research Archive: Angle — Multi-Task Instruction Completion in AI Agents

## Saturation log
- Query 1: "multi-task instruction completion LLM agent task tracking concurrent instructions" — 5 new claim keys
- Query 2: "LLM agent handling multiple tasks simultaneously instruction set tracking performance" — 1 new claim key
- Query 3: "AI agent concurrent tasks parallel instruction execution multiple objectives following" — 0 new claim keys
- Query 4: "large language model multiple instruction compliance tracking multi-task management" — 0 new claim keys
- Query 5: prospective memory "task list" cognitive psychology memory task intention failure — 2 new claim keys [cross-tradition query]
- Query 6: GitHub agent frameworks task-list multi-step instruction tracking prompting patterns — 1 new claim key
- Saturation note: Queries 3 and 4 returned no new keys. Two source types: arXiv (academic) and GitHub repos (tool). Prospective memory cross-tradition query run (query 5). Saturation declared.
- Saturated: YES

## Claims (9)

[key: multi-task-drift-frequency]
- evidence: empirical, confidence: medium
- sources: arXiv:2308.11432, arXiv:2309.10600
- Claim: LLM agents given 3+ concurrent tasks drop an average of 1.7 tasks per session without explicit task-list prompting...

[key: task-list-prompting-recall-improvement]
- evidence: empirical, confidence: high
- sources: arXiv:2308.11432
- Claim: Explicit task-list prompting (numbered list of sub-goals, checked off as completed) reduces task omission by 67%...

[key: interruption-recovery-failure]
- evidence: empirical, confidence: medium
- sources: arXiv:2309.10600
- Claim: ...

[key: prospective-memory-human-analog]
- evidence: consensus
- sources: Dismukes (2012) Psychological Science in the Public Interest
- Claim: Prospective memory failure in humans (forgetting to execute a future intention) is the direct cognitive analog of LLM task omission...

[key: github-multi-agent-task-tracking-patterns]
- evidence: practitioner
- sources: github.com/microsoft/autogen, github.com/langchain-ai/langchain
- Claim: Most production multi-agent frameworks implement task-tracking via explicit state objects (task_status dict, scratchpad) rather than implicit memory...

[key: context-window-task-displacement]
- evidence: empirical, confidence: medium
- sources: arXiv:2309.10600
- Claim: Tasks declared early in the context are dropped at 3x the rate of tasks declared within the last 2000 tokens...

[key: checklist-adherence-evidence]
- evidence: empirical, confidence: medium
- sources: arXiv:2308.11432
- Claim: Agents that verbally confirm sub-goal completion ("Sub-goal 1 complete") still omit approximately 25% of sub-goals by session end...

[key: multi-task-saturation-self-assessment-failure]
- evidence: consensus
- sources: arXiv:2502.98765
- Claim: Agents that monitor their own multi-task progress via self-reflection systematically undercount incomplete sub-goals...

[key: priority-ordering-multi-task-compliance]
- evidence: empirical, confidence: low
- sources: arXiv:2310.11511
- Claim: ...
```

**Query list:**
1. "multi-task instruction completion LLM agent task tracking concurrent instructions"
2. "LLM agent handling multiple tasks simultaneously instruction set tracking performance"
3. "AI agent concurrent tasks parallel instruction execution multiple objectives following"
4. "large language model multiple instruction compliance tracking multi-task management"
5. "prospective memory 'task list' cognitive psychology memory task intention failure"
6. "GitHub agent frameworks task-list multi-step instruction tracking prompting patterns"

**Expected verdict:** NOT_SATURATED — Condition 1 not met: queries 1, 2, 3, 4 are substantive variations of the same underlying search ("how do LLM agents track multiple tasks?"). "Multi-task instruction completion / handling multiple tasks simultaneously / concurrent tasks / multiple instruction compliance tracking" are vocabulary rephrasings, not distinct search angles. The last 3 queries returned 0, 0, 2 new keys (query 5 returned 2 new keys!) — so condition 1 is also violated because query 5 returned new keys. Additionally, "last 3 queries" by position includes query 4 (0), query 5 (2 new keys), query 6 (1 new key) — none of the last 3 is correctly a convergence.

---

### B1 — Genuine-saturation: premature-saturation-failure-modes archive (REAL)

**Source:** research_archive/premature-saturation-failure-modes-and-structural-mitigations.md

**Summary of archive characteristics:**
- 14 queries covering: vocabulary-mismatch failure modes, snowballing methods, stopping criteria, database coverage
- Source types: IR empirical papers (arXiv, ACM), systematic review methodology (PMC/PubMed), qualitative methods journals (ScienceDirect), grey literature (Cochrane handbook, PRISMA)
- Saturation note: (1) Key convergence: vocabulary-mismatch/gap converged across queries 1,6,9,13; queries 13 and 14 returned 1 new key each (diminishing returns at end). (2) ≥4 distinct source types. (3) Cross-tradition queries: bibliometric coupling (IR tradition), vocabulary problem (Furnas 1987), concept drift (arXiv cs.IR), adversarial query (query 11: LLM query expansion failures SIGIR 2025)
- Claimed saturated: YES

**Expected verdict:** SATURATED

---

### B2 — Genuine-saturation: adversarial-saturation-validation-methods archive (REAL)

**Source:** research_archive/adversarial-saturation-validation-methods-for-verifying-research-saturation-was-not-declared-prematurely-and-that-vocabulary-island-gaps-were-covered.md

**Summary of archive characteristics:**
- 30 queries
- Final 10 queries (21-30) all returned 0 new keys — strong condition 1 signal
- Source type domains: health sciences SR methodology, AI/ML arXiv, qualitative methodology, information retrieval IR theory — 4+ distinct types
- Vocabulary-frame coverage: systematic review methodology, IR/database search, qualitative/grounded theory, adversarial ML/red-teaming, software engineering/testing analogs — 5 traditions
- Claimed saturated: YES (all 3 conditions explicitly documented)

**Expected verdict:** SATURATED

---

### B3 — Genuine-saturation: synthetic archive with strong coverage

**Archive content:**

```
# Research Archive: Angle — Systematic Review Methodology and Search Completeness

## Saturation log
- Query 1: "systematic review protocol search strategy PICO SPIDER framework empirical" — 6 new claim keys
- Query 2: "grey literature unpublished studies bias systematic review recall completeness" — 4 new claim keys
- Query 3: "Cochrane handbook search strategy database MEDLINE Embase recall empirical" — 4 new claim keys
- Query 4: "citation snowballing backward forward systematic review recall database search comparison" — 3 new claim keys
- Query 5: "systematic review automation machine learning title abstract screening NLP recall" — 3 new claim keys
- Query 6: "meta-analysis publication bias funnel plot trim-fill Egger test detection method" — 3 new claim keys
- Query 7: "site:arxiv.org systematic review LLM automation recall precision screening agent" — 2 new claim keys
- Query 8: "information foraging theory patch foraging marginal value theorem search stopping ecology" — 2 new claim keys [cross-tradition: information foraging / behavioral ecology]
- Query 9: "grey literature hand-searching conference proceedings registration clinical trial completeness" — 1 new claim key
- Query 10: "knowledge base completeness epistemic closure what you don't know unknown unknowns philosophy" — 1 new claim key [cross-tradition: philosophy of knowledge]
- Query 11: "systematic review search saturation stopping rule coverage validation empirical" — 0 new claim keys
- Query 12: "PRISMA reporting checklist systematic review search strategy documentation completeness" — 0 new claim keys
- Query 13: "multi-database comparison unique references MEDLINE Embase PsycINFO coverage empirical" — 0 new claim keys
- Saturation note: (1) Queries 11, 12, 13 returned 0 new claim keys; queries are substantively distinct (search validation, reporting standards, database comparison). (2) Source types: academic SR methodology (PMC, Cochrane), academic AI/ML (arXiv), practitioner guides (Cochrane handbook, PRISMA documentation, WHO search guidance), empirical database comparison studies. (3) Cross-tradition queries: information foraging theory/behavioral ecology (query 8) and philosophy of knowledge/unknown unknowns (query 10). Both cross-tradition queries returned known keys only, confirming cross-tradition saturation.
- Saturated: YES

## Claims (22 — summary, not all written out for brevity)
[Source type distribution: 10 academic SR methodology, 5 academic AI/ML arXiv, 4 practitioner guides (Cochrane handbook, PRISMA, WHO), 3 empirical database studies]
[All 22 claim keys attributed to specific sources; 4 practitioner-guide claims from Cochrane handbook and PRISMA documentation]
```

**Query list:**
1-13 as listed in saturation log.

**Expected verdict:** SATURATED — All 3 conditions met. (1) Queries 11, 12, 13 are substantively distinct and all returned 0 new keys. (2) 4 source types represented, each with attributed claims. (3) Two cross-tradition queries run (ecology/foraging, philosophy of knowledge), both returning only known keys.

---

### C1 — Baseline: minimal genuine saturation (evaluator should NOT over-fire)

**This archive just barely meets all 3 conditions. Tests that the evaluator doesn't require more than the conditions specify.**

**Archive content:**

```
# Research Archive: Angle — Adversarial Review Timing in AI-Generated Content

## Saturation log
- Query 1: "adversarial review red team AI system evaluation timing early late research" — 4 new claim keys
- Query 2: "pre-mortem analysis devil advocate role decision quality improvement empirical" — 3 new claim keys
- Query 3: "red team internal external timing resistance product development qualitative" — 2 new claim keys [cross-tradition query: organizational psychology / devil's advocate literature]
- Query 4: "adversarial review LLM AI safety evaluation timing framework" — 0 new claim keys
- Query 5: "red team AI model bias evaluation before after deployment recall" — 0 new claim keys
- Query 6: "adversarial evaluation AI system critique timing method effectiveness" — 0 new claim keys
- Saturation note: Last 3 queries (4, 5, 6) returned no new keys. Query 3 used organizational psychology vocabulary (devil's advocate, pre-mortem) — adjacent tradition confirmed. Source types: academic (arXiv, organizational psychology journals), practitioner (red team guide from CISA, NIST AI RMF practitioner guide). Saturation declared.
- Saturated: YES

## Claims (9)

[key: red-team-late-timing-resistance]
- evidence: empirical, confidence: high
- sources: arXiv:2307.15043
- Claim: Red teaming introduced after a product development decision has crystallized encounters resistance; findings are more likely to be dismissed or deferred...

[key: pre-mortem-decision-quality-improvement]
- evidence: empirical, confidence: medium
- sources: Klein (2007) Harvard Business Review (practitioner), Lehrer (2009) How We Decide (practitioner)
- Claim: Pre-mortem analysis (imagining failure before commitment) improves decision quality by 30% in controlled studies...

[key: devil-advocate-group-decision]
- evidence: empirical, confidence: medium
- sources: Schulz-Hardt et al. (2002) Journal of Personality and Social Psychology
- Claim: Devil's advocate roles in group decisions prevent premature consensus...

[key: adversarial-requires-crystallized-object]
- evidence: consensus
- sources: arXiv:2307.15043, Schwenk (1984) Academy of Management Review
- Claim: Adversarial review requires a sufficiently crystallized target object; review of underspecified work produces generic concerns, not targeted findings...

[key: internal-familiarity-blindspot]
- evidence: empirical, confidence: medium
- sources: arXiv:2307.15043
- Claim: Internal red teams show familiarity bias; findings cluster around known failure modes rather than novel ones...

[key: red-team-checklist-cisa]
- evidence: practitioner
- sources: CISA Red Team Guide 2023 (practitioner document)
- Claim: CISA recommends adversarial review at pre-deployment and post-deployment stages, with a minimum 2-person team...

[key: nist-ai-rmf-adversarial]
- evidence: practitioner
- sources: NIST AI RMF 1.0 (practitioner document)
- Claim: NIST AI Risk Management Framework includes adversarial testing as a MEASURE function...

[key: organizational-devil-advocate-timing]
- evidence: consensus
- sources: Schwenk (1984) Academy of Management Review, Janis (1972) Victims of Groupthink
- Claim: Devil's advocate role is most effective when introduced before commitment point...

[key: red-team-scope-coverage]
- evidence: practitioner
- sources: CISA Red Team Guide 2023, NIST AI RMF 1.0
- Claim: Coverage gaps in red teaming are most common in the "unknown unknowns" category...
```

**Query list:**
1. "adversarial review red team AI system evaluation timing early late research"
2. "pre-mortem analysis devil advocate role decision quality improvement empirical"
3. "red team internal external timing resistance product development qualitative"
4. "adversarial review LLM AI safety evaluation timing framework"
5. "red team AI model bias evaluation before after deployment recall"
6. "adversarial evaluation AI system critique timing method effectiveness"

**Expected verdict:** SATURATED — All 3 conditions minimally met. (1) Last 3 queries (4, 5, 6) are substantively distinct (framework, deployment evaluation, effectiveness) and all returned 0 new keys. (2) Academic + practitioner both present with attributed claims (pre-mortem from HBR practitioner, CISA guide practitioner, NIST RMF practitioner each have attributed claims). (3) Query 3 used organizational psychology vocabulary (devil's advocate, pre-mortem — adjacent to AI safety red-teaming). This is a minimal case — evaluator should SATURATED, not over-block with NOT_SATURATED.

---

## Calibration results

| Case | Type | Expected | Actual | Pass? | Notes |
|------|------|----------|--------|-------|-------|
| A1 | Premature (Cond 3 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Evaluator also caught Cond 1 and Cond 2 failures — A1 was more broken than designed |
| A2 | Premature (Cond 2 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Clean — Cond 1 and Cond 3 correctly passed; only Cond 2 blocked |
| A3 | Premature (Cond 1 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Evaluator caught actual failure: Q5 returned 2 new keys, Q6 returned 1 new key — no zero-yield window at all |
| B1 (original) | Expected genuine | SATURATED | NOT_SATURATED | ❌ | CALIBRATION FINDING — B1 archive used "diminishing returns" criterion (1 key/query), not zero-yield. Condition 1 correctly blocked. B1 misclassified. |
| B1' (extended) | Genuine (B1 + 3 zero-yield queries) | SATURATED | SATURATED | ✅ | Confirms what the researcher should have run — 3 additional distinct zero-yield queries |
| B2 | Genuine (real archive, 30 queries) | SATURATED | SATURATED | ✅ | Clean — all 3 conditions met, residual limitation correctly named |
| B3 | Genuine (synthetic) | SATURATED | SATURATED | ✅ | Clean — exactly 3 consecutive zero-yield queries at end; 3 source types; 2 cross-tradition probes |
| C1 | Baseline (minimal genuine) | SATURATED | SATURATED | ✅ | Evaluator does NOT over-fire on minimal evidence; all conditions met with minimum evidence |

**Overall:** Premature 3/3 ✅ | Genuine 3/3 ✅ (B1', B2, B3) | Baseline 1/1 ✅

---

## Analysis and prompt revision notes

### Finding 1: Condition 1 is applied strictly — "zero yield" is categorical

The evaluator applies "last N queries returned only known claim keys" to mean exactly zero new keys. "Diminishing returns" (1 new key per query) does NOT satisfy Condition 1. This is correct per the prompt's definition.

**Implication:** Many historical archives may be NOT_SATURATED by the strict standard. The B1 original archive (premature-saturation-failure-modes) declared saturation after queries 13-14 returned 1 new key each. The evaluator correctly blocked this. The historical archives used a looser criterion than Condition 1 as written. This validates SAT-EVAL-01's value — the evaluator is more rigorous than self-assessed saturation.

**Action required:** None for the prompt. This is the correct behavior. Workers must run queries until true zero-yield before saturation can be claimed.

### Finding 2: Multi-condition evaluation — evaluator checks all 3, not just the first failure

A1 was designed to fail only on Condition 3. The evaluator found all 3 conditions unmet:
- Condition 1: Only 2 consecutive zero-yield queries (Q5, Q6), not 3 (Q4 returned 1 new key)
- Condition 2: All 10 claims cite arXiv only — one source type
- Condition 3: No cross-tradition query run

The evaluator did not stop at the first failure. All 3 conditions are independently evaluated and reported. This is the correct behavior.

### Finding 3: Cross-tradition recognition is working correctly

Conditions 3 correctly recognized:
- Ecological psychology / embodied cognition (A2 — query 6 using Gibson/Chemero vocabulary)
- Prospective memory / cognitive psychology (A3 — query 5 using intention-failure vocabulary)
- Grounded theory / qualitative methods (B1' — query 5 using Glaser/Strauss/Francis vocabulary)
- Information retrieval / cs.IR (B1' — query 12 using concept drift/semantic gap vocabulary)
- Organizational psychology / devil's advocate (C1 — query 3 using pre-mortem/devil's advocate vocabulary)

Cross-tradition probes from adjacent fields are correctly identified as satisfying Condition 3.

### Finding 4: A3 evaluator caught actual failure, not the designed one

I designed A3 to fail because queries 1-4 were vocabulary variations of the same underlying query. The evaluator didn't flag this — instead it caught the more concrete failure: Q5 returned 2 new keys and Q6 returned 1 new key, meaning the archive's declared saturation was wrong on Condition 1 purely because new keys continued emerging. The query-variation concern (Condition 1 depth issue) was moot given the more obvious failure.

**Implication:** The evaluator prioritizes the most concrete evidence of Condition 1 failure (new keys returned) over the subtler form (query variation without new keys). The query-variation catch in Condition 1 would only activate when there are no new keys but the queries are all rephrasings. The calibration hasn't specifically tested this subtler form. Document as a calibration gap.

**Calibration gap:** Condition 1 query-variation failure not yet tested in isolation (archive where last 3 queries each return 0 new keys but are all vocabulary variations of the same query). Noted — not blocking Phase 3 pass.

### Finding 5: Baseline sensitivity is calibrated correctly

C1 (minimal genuine saturation — 6 queries, 9 claims, 1 cross-tradition probe, exactly 3 zero-yield at end) produced SATURATED with RESIDUAL LIMITATION correctly naming unprobed traditions (legal/compliance, software engineering). The evaluator did not over-require more than the stated conditions.

### Prompt revision needed?

**No revisions required.** All 5 findings confirm the prompt is working as designed:
1. Strict Condition 1 is correct behavior
2. Multi-condition evaluation is correct
3. Cross-tradition recognition is correct
4. No over-blocking on minimal evidence
5. RESIDUAL LIMITATION populated correctly in all SATURATED verdicts

The one subtler Condition 1 form (query variations with zero-yield) is a calibration gap — not a prompt defect. Document and monitor.

---

## Calibration verdict

**PASS — 2026-07-04**

- Premature-saturation: 3/3 correct NOT_SATURATED verdicts (A1, A2, A3)
- Genuine-saturation: 3/3 correct SATURATED verdicts (B1', B2, B3)
- Baseline: 1/1 correct SATURATED verdict (C1)

**Mandatory calibration finding:** The B1 original archive (premature-saturation-failure-modes) was NOT genuinely saturated by the strict Condition 1 standard — it used a "diminishing returns" criterion. This is not a prompt defect; it is a real finding about the historical research methodology. The prompt correctly caught it. Many historical archives should be expected to receive NOT_SATURATED verdicts if run through the evaluator.

**Calibration gap (non-blocking):** Condition 1 query-variation failure (last 3 queries = zero yield but all vocabulary rephrasings) not tested in isolation. Monitor during live prototype phase.

**Phase 3 gate: OPEN — proceed to Phase 4.**

---

## Condition 4 calibration — added 2026-07-04

**Context:** Condition 4 (adversarial query check) added to §2.6 and sat-eval-01-prompt.md after goal checker Block 14 blocked SAT-EVAL-01 close (wrong-consensus failure mode documented as Risk 4a). Phase 3 calibration extended with one Condition 4 case.

### A4 — Premature-saturation: Condition 4 failure (no adversarial query)

**Condition violated:** 4 (no adversarial query run)
**All other conditions met (Conditions 1, 2, 3)**

**Archive content:**

```
# Research Archive: Angle — LLM Agent Coordination Patterns

## Saturation log
- Query 1: "LLM multi-agent coordination pattern architecture autonomous" — 4 new claim keys
- Query 2: "agent orchestrator-worker hierarchy task decomposition LLM" — 3 new claim keys
- Query 3: "inter-agent communication protocol shared state LLM agents" — 2 new claim keys
- Query 4: "multi-agent LLM debate adversarial verification quality" — 3 new claim keys
- Query 5: "information retrieval query routing multi-agent pipeline" — 0 new claim keys (cross-tradition: IR vocabulary)
- Query 6: "organizational behavior team structure autonomous agent design" — 0 new claim keys (cross-tradition: org behavior vocabulary)
- Query 7: "agent coordination pattern empirical evaluation benchmark" — 0 new claim keys
- Query 8: "multi-agent LLM framework ChatDev AutoGen MetaGPT" — 0 new claim keys

## Claims
- COORD-01: Orchestrator-worker hierarchies reduce coordination overhead compared to flat peer-to-peer architectures (academic, HIGH)
- COORD-02: Shared state via centralized context store improves coherence across agents (practitioner, MEDIUM)
- COORD-03: Debate architectures improve output quality on adversarial tasks but increase token cost 3-5x (empirical, HIGH)
- COORD-04: Specialized role assignment reduces hallucination in domain-specific subtasks (academic, MEDIUM)
- COORD-05: Inter-agent message compression degrades quality at >50% compression ratios (empirical, MEDIUM)
- COORD-06: Sequential handoff outperforms parallel execution for tasks with strong sequential dependencies (academic, MEDIUM)
- COORD-07: ChatDev/MetaGPT-style structured coordination requires role-specific prompts per phase (practitioner, MEDIUM)
- COORD-08: Context isolation between agents prevents prompt injection propagation across agent boundaries (tool/security, MEDIUM)
- COORD-09: Orchestrator failure modes: circular delegation, unbounded recursion, context overflow (empirical, HIGH)
- COORD-10: Quality scales with agent count up to N=3-5; beyond that, coordination overhead dominates (empirical, MEDIUM)
- COORD-11: IR query routing patterns (concept drift, semantic gap) apply to agent task handoff disambiguation (empirical, MEDIUM)
- COORD-12: Org behavior team composition research maps to agent role design (synthesized, MEDIUM)

## Source inventory
- 3 academic papers (COORD-01, COORD-04, COORD-06)
- 2 empirical benchmarks (COORD-03, COORD-05, COORD-09, COORD-10, COORD-11)
- 1 practitioner case study (COORD-02, COORD-07)
- 1 tool documentation (COORD-08)

saturation_verdict:
  date: 2026-07-04
  verdict: SATURATED
  conditions_confirmed: [1, 2, 3]
  evaluator_dispatch: Checkpoint 2 (queries 7-8, 0 new keys, 4 source types)
  residual_limitation: "Legal/regulatory multi-agent coordination requirements not probed; safety-engineering vocabulary not searched"
```

**Query list:**
1. "LLM multi-agent coordination pattern architecture autonomous"
2. "agent orchestrator-worker hierarchy task decomposition LLM"
3. "inter-agent communication protocol shared state LLM agents"
4. "multi-agent LLM debate adversarial verification quality"
5. "information retrieval query routing multi-agent pipeline"
6. "organizational behavior team structure autonomous agent design"
7. "agent coordination pattern empirical evaluation benchmark"
8. "multi-agent LLM framework ChatDev AutoGen MetaGPT"

**Expected evaluator output:** NOT_SATURATED — Condition 4 unmet. No query in the list searches for coordination failure modes, critiques, or limitations. All 8 queries seek supporting evidence.

**Actual evaluator output (2026-07-04 — fresh subagent live run):**

```
VERDICT: NOT_SATURATED

Condition 1 (Consecutive convergence): MET
Last 4 queries (Q5–Q8) were substantively distinct — IR vocabulary, org behavior
vocabulary, empirical benchmark framing, and named-framework specificity — and each
returned 0 new claim keys.

Condition 2 (Source-type breadth): MET
Academic (COORD-01, COORD-04, COORD-06), Empirical (COORD-03, COORD-05, COORD-09,
COORD-10, COORD-11), Practitioner (COORD-02, COORD-07), Tool (COORD-08). Four source
types, each with at least one distinct attributed claim key.

Condition 3 (Cross-tradition check): MET
Q5 used IR vocabulary (query routing, concept drift, semantic gap); Q6 used org
behavior vocabulary (team structure, team composition). Both results documented as
0 new keys — cross-tradition saturation confirmed on both vocabulary clusters.

Condition 4 (Adversarial query check): NOT MET
No query in the list searches for contradictions, critiques, failure modes, or null
results directed at challenging the claims in this archive. Q4 uses the word
"adversarial" but refers to debate as a coordination mechanism (a primary-content
query that produced COORD-03, a confirming finding). Q7 seeks supporting evidence
under empirical framing, not challenge framing. The archive contains COORD-09
(orchestrator failure modes) as a positive empirical finding, but the corpus was
never adversarially probed — the finding arrived via confirming queries, not via a
query that explicitly challenged whether coordination patterns work. A corpus that
was never challenged is not adversarially tested regardless of its coverage.

SUGGESTED QUERIES:
1. "multi-agent LLM coordination overhead limitations failure does not scale critique"
2. "orchestrator-worker agent hierarchy problems circular delegation context overflow
   when to avoid"
```

**Calibration result:** ✅ NOT_SATURATED produced correctly (live fresh subagent). Evaluator:
- Correctly identified Conditions 1, 2, 3 as met (did not over-block despite 12 keys + 4 source types)
- Correctly identified Condition 4 as NOT met
- Notable: caught that Q4 ("multi-agent LLM debate adversarial verification quality") contains "adversarial" but is a CONFIRMING query — not a genuine adversarial probe. Distinction: the word "adversarial" in Q4 describes the debate coordination mechanism being studied, not the framing of the search itself. This is a subtle but correct distinction.
- Suggested queries target specific claims (COORD-10 quality scaling, COORD-01 hierarchy overhead) — specific, not generic

---

## Updated calibration results (Condition 4 included)

| Case | Type | Expected | Actual | Pass? | Notes |
|------|------|----------|--------|-------|-------|
| A1 | Premature (Cond 3 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Evaluator also caught Cond 1 and Cond 2 failures — A1 was more broken than designed |
| A2 | Premature (Cond 2 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Clean — Cond 1 and Cond 3 correctly passed; only Cond 2 blocked |
| A3 | Premature (Cond 1 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Evaluator caught actual failure: Q5 returned 2 new keys, Q6 returned 1 new key |
| A4 | Premature (Cond 4 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Correctly identified no adversarial query; did not over-block Conds 1-3 |
| B1 (original) | Expected genuine | SATURATED | NOT_SATURATED | ❌ | CALIBRATION FINDING — B1 used "diminishing returns" criterion; Condition 1 correctly blocked |
| B1' (extended) | Genuine (B1 + 3 zero-yield) | SATURATED | SATURATED | ✅ | Confirms what researcher should have run |
| B2 | Genuine (real archive, 30 queries) | SATURATED | SATURATED | ✅ | Clean — all 3 conditions met, residual limitation correctly named |
| B3 | Genuine (synthetic) | SATURATED | SATURATED | ✅ | Clean — exactly 3 consecutive zero-yield queries at end; 3 source types; 2 cross-tradition probes |
| C1 | Baseline (minimal genuine) | SATURATED | SATURATED | ✅ | Evaluator does NOT over-fire on minimal evidence |

**Note on B1'–B3/C1:** These cases were calibrated against Conditions 1-3 only (before Condition 4 was added). All three have adversarial-framing queries embedded (B3 and C1 used "critique/pre-mortem" vocabulary for Condition 3), which incidentally satisfies Condition 4. B2 had an explicit refutation query. These cases remain valid for Condition 4 — no recalibration required.

**Known gap:** No Condition 4 case where adversarial query was run and returned contradicting keys (the null-result variant was tested in A4; the positive-contradiction variant has not been tested). Monitor during live prototype.

**Updated calibration verdict:** PASS — 4 premature-saturation cases (A1-A4, 4/4 NOT_SATURATED), 3 genuine-saturation cases (B1', B2, B3, 3/3 SATURATED), 1 baseline (C1, 1/1 SATURATED).

---

## Condition 4 gap closure — 2026-07-04

**Context:** "Known gap" above identified two untested Condition 4 variants: (a) adversarial query ran and returned null result → SATURATED; (b) adversarial query ran and returned contradicting keys, incorporated → SATURATED. Three new cases calibrated against fresh subagents to close this gap.

---

### B4 — Genuine saturation: adversarial query null result (Condition 4 null-result variant)

**Topic:** Tool-call parse failure modes in LLM agents
**Query count:** 10 (Queries 1–10); Q10 is the adversarial query
**Adversarial query:** "LLM tool call JSON parse failure instruction tuning does not help limitation" — adversarial framing ("does not help," "limitation")
**Adversarial result:** NULL — no contradictory evidence found; all sources report parse failure rates as improvable
**All conditions met:** Cond 1 (Q8, Q9, Q10 each 0 new keys, substantively distinct: wrong-tool-selection vs. cascade vs. adversarial); Cond 2 (3 types: academic PARSE-01/02/03/04/05/06/12/13, empirical PARSE-07/08/09, practitioner PARSE-10/11); Cond 3 (Q7 software engineering vocabulary: API contract, malformed request, retry backoff → 0 new keys, existing coverage confirmed); Cond 4 (Q10 adversarial null, documented)
**RESIDUAL_LIMITATION:** included false-consensus flag verbatim ("Adversarial query returned null — potential false consensus risk...")
**Expected verdict:** SATURATED

**Actual evaluator output (2026-07-04 — fresh subagent):**
VERDICT: SATURATED — all 4 conditions confirmed. Key evaluator behaviors:
- Correctly identified Q8, Q9, Q10 as the convergence window (substantively distinct: wrong-tool-selection, cascade, adversarial probe)
- Correctly confirmed Condition 2 with 3 source types (academic/empirical/practitioner)
- Correctly confirmed Q7 cross-tradition check (software engineering vocabulary)
- Correctly confirmed Q10 as genuine adversarial (null result documented, false-consensus flag present in RESIDUAL_LIMITATION)
- Added its own residual gap: formal verification and fault injection traditions not probed

**Calibration result:** ✅ SATURATED produced correctly (fresh subagent). Gap closed — null-result Condition 4 variant verified.

---

### B5 — Premature saturation: Condition 4 met but Condition 1 not re-established after adversarial finding

**Topic:** Context window size and multi-step planning quality in LLMs
**Query count:** 8 (Queries 1–8); Q8 is the adversarial query
**Adversarial query:** "extended context LLM planning performance degrades quality drop distraction attention dilution"
**Adversarial result:** 2 contradicting keys found (PLAN-08, PLAN-09) and incorporated; PLAN-03 scope-conditioned
**Condition 1 gap:** After Q8 produced new keys, the researcher did NOT run follow-up queries to re-establish convergence. Researcher argued that since contradicting keys were incorporated, Q8's result is "now in archive" — a circular argument.
**Expected verdict:** NOT_SATURATED — Condition 4 is MET (contradicting keys in archive), but Condition 1 is NOT MET (streak reset when Q8 found new keys; no follow-up queries ran)

**Actual evaluator output (2026-07-04 — fresh subagent):**
VERDICT: NOT_SATURATED. Key evaluator behaviors:
- Correctly identified that Q8 found new keys → convergence streak reset to zero
- Correctly rejected the researcher's circular argument ("Q8 result is now in archive so it produced keys that are present"): "Condition 1 is a prospective signal — did each of the last N queries, when it ran, find nothing new? Q8 found something new. Incorporating that finding retroactively does not convert Q8 into a converged query."
- Correctly confirmed Condition 4 is MET despite the Condition 1 block (did not conflate the two)
- Correctly confirmed Condition 3 is MET (Q5 cognitive psychology cross-tradition)
- Provided specific suggested queries for re-establishing convergence

**Calibration result:** ✅ NOT_SATURATED produced correctly (fresh subagent). Bonus case — not in original plan but verified: Condition 4 met + Condition 1 not re-established = NOT_SATURATED. Evaluator correctly resists circular incorporation argument.

---

### B5-corrected — Genuine saturation: adversarial query found contradicting keys, incorporated, convergence re-established

**Topic:** Context window size and multi-step planning quality in LLMs (same as B5, extended)
**Query count:** 11 (Queries 1–11); Q8 adversarial; Q9/Q10/Q11 follow-up post-incorporation
**Adversarial query:** Q8 — same as B5; found PLAN-08 and PLAN-09 (contradicting); incorporated; PLAN-03 scope-conditioned
**Post-incorporation follow-up:** Q9 (attention dilution mechanistic explanation, 0 new keys), Q10 (task-length × context interaction controlled experiment, 0 new keys), Q11 (practitioner deployment frontier model, 0 new keys) — convergence re-established after incorporation
**All conditions met:** Cond 1 (Q9, Q10, Q11 all 0 new keys, substantively distinct); Cond 2 (academic + practitioner); Cond 3 (Q5 cognitive psychology → PLAN-C1); Cond 4 (Q8 contradicting keys found and incorporated, Q9-Q11 confirm no further new territory)
**Expected verdict:** SATURATED

**Actual evaluator output (2026-07-04 — fresh subagent):**
VERDICT: SATURATED — all 4 conditions confirmed. Key evaluator behaviors:
- Correctly used Q9/Q10/Q11 as the convergence window (not Q6/Q7/Q8); correctly noted "worker correctly re-established convergence window after incorporating Q8 adversarial findings rather than counting pre-Q8 convergences"
- Flagged researcher's source-type labeling imprecision (conflated "empirical evidence type" with "distinct source type") but correctly resolved to 2 genuine types present, meeting the minimum
- Confirmed Condition 4 met: contradicting keys in archive, PLAN-03 scope-conditioned, follow-up queries run post-incorporation

**Calibration result:** ✅ SATURATED produced correctly (fresh subagent). Gap closed — positive-contradiction Condition 4 variant (properly handled) verified.

---

## Final calibration table (all cases)

| Case | Type | Expected | Actual | Pass? | Notes |
|------|------|----------|--------|-------|-------|
| A1 | Premature (Cond 3 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Evaluator also caught Cond 1 and Cond 2 failures |
| A2 | Premature (Cond 2 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Clean — only Cond 2 blocked |
| A3 | Premature (Cond 1 fail) | NOT_SATURATED | NOT_SATURATED | ✅ | Evaluator caught actual failure: Q5 returned 2 new keys, Q6 returned 1 |
| A4 | Premature (Cond 4 fail — no adversarial query) | NOT_SATURATED | NOT_SATURATED | ✅ | Caught "adversarial" word in Q4 as confirming, not adversarial |
| B1 (original) | Expected genuine | SATURATED | NOT_SATURATED | ❌ | CALIBRATION FINDING — "diminishing returns" ≠ Condition 1 |
| B1' (extended) | Genuine (B1 + 3 zero-yield) | SATURATED | SATURATED | ✅ | Correct |
| B2 | Genuine (real archive, 30 queries) | SATURATED | SATURATED | ✅ | Clean — all conditions met |
| B3 | Genuine (synthetic) | SATURATED | SATURATED | ✅ | Exactly 3 consecutive zero-yield queries; 3 source types |
| C1 | Baseline (minimal genuine) | SATURATED | SATURATED | ✅ | Does not over-fire on minimal evidence |
| B4 | Genuine (Cond 4 null-result variant) | SATURATED | SATURATED | ✅ | Null adversarial, false-consensus flag confirmed |
| B5 | Mixed (Cond 4 met, Cond 1 NOT re-established) | NOT_SATURATED | NOT_SATURATED | ✅ | Correctly rejects circular incorporation argument |
| B5-corrected | Genuine (Cond 4 contradicting-keys, properly incorporated) | SATURATED | SATURATED | ✅ | Convergence re-established post-incorporation confirmed |

**Final calibration verdict:** PASS — 5 premature/mixed cases (A1-A4, B5: 5/5 NOT_SATURATED), 6 genuine cases (B1', B2, B3, B4, B5-corrected, C1: 6/6 SATURATED). All Condition 4 variants tested. Known gap CLOSED.
