# Research Archive: Systematic approaches to adversarial review and alternatives generation — improving first-pass outputs

## Saturation log
- Query 1: "structured adversarial review red team methodology criticism organizational research quality" — 5 new keys
- Query 2: "alternative hypothesis generation systematic methodology research quality improvement" — 3 new keys
- Query 3: "peer review failures bias alternatives assessment critique empirical organizational" — 5 new keys
- Query 4: "alternatives generation lateral thinking TRIZ de Bono practitioners applied creative methods" — 3 new keys
- Query 5: "structured decision alternatives analysis quantitative comparison framework evaluation" — 4 new keys
- Gap-fill query 1 (adversarial): "adversarial review failure modes gaming overcaution calibration failure devil advocate critique" — 4 new claim keys
- Gap-fill query 2 (grey-lit): "site:arxiv.org red team adversarial review LLM agent quality structured critique effectiveness" — 4 new claim keys
- **Post-fill saturation note (2026-06-30):** This angle was already saturated in the prior run (21 keys from 5 queries). The adversarial and grey-lit gap-fill queries added 8 new keys covering LLM-specific failure modes and gaming vulnerabilities not present in the prior empirical base, confirming broad source-type coverage (peer-reviewed journals, arXiv preprints, practitioner blogs, GitHub).
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturated: YES (confirmed pre-gap-fill; gap-fill 2026-06-30 added 8 new claims)

---

## Claims (21)

### [key: peer-review-inter-reviewer-agreement]
- evidence: empirical
- confidence: high
- group: peer-review-quality
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11804526/

**Claim:** PNAS 2024 meta-analysis of 45 studies found the average correlation between two reviewers rating the same manuscript was only 0.34, which the authors characterize as 'unpredictable and somewhat random outcomes.' Mechanism: reviewers apply idiosyncratic implicit criteria that are never made explicit or calibrated across the pool, so variance is introduced at the judgment stage rather than the evidence stage. Scope: applies to single-blind and double-blind academic peer review; does not extend to structured scoring rubrics with explicit criteria where inter-rater reliability is enforced. Kit implication: any review pipeline that relies on a single reviewer pass without explicit rubric and multi-reviewer calibration will produce essentially random quality signals — the kit's review mechanism must encode criteria explicitly and require scoring, not freeform judgment.

**Verify note:** PMC11804526 confirmed: 'the average correlation between two reviewers' ratings of the same submitted manuscripts was just 0.34' from a meta-analysis of 45 studies. The phrase 'unpredictable and somewhat random outcomes' was confirmed verbatim in the source. The claim accurately represents the source. The scope note (applies to single-blind and double-blind, not structured rubrics) is a reasonable interpretation but is the claim author's inference, not an explicit statement from the article.

---

### [key: peer-review-statistical-expert-biggest-gain]
- evidence: empirical
- confidence: high
- group: peer-review-quality
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11804526/

**Claim:** PNAS 2024 review of interventions found that adding specialized statistical reviewers produced the 'largest improvement in manuscript quality' compared to all other reviewer-level interventions including training, open review, and structured checklists. Training produced only 'slight impact.' Mechanism: most reviewers lack statistical domain expertise; errors in statistical reporting escape notice not from inattention but from skill gaps — adding domain-specific expert coverage fills a structural gap that training cannot bridge quickly. Scope: applies where technical domain expertise is separable from domain knowledge (statistics, methodology); does not apply where flaws are visible to any domain expert. Kit implication: domain-specialist sub-reviewers should be distinct agents from the general reviewer, not just a more thorough single-agent pass.

**Verify note:** PMC11804526 confirmed: 'the largest improvement in manuscript quality (e.g., clarity of the empirical report) was seen with the addition of a statistical reviewer.' This is from a systematic review of 22 randomized trials. Training producing 'slight impact' was confirmed verbatim ('communicating the journal expectations had only a slight impact on the quality of reviews'). The claim correctly represents the source. The kit implication is a reasonable inference from the finding but goes beyond what the study directly tested (the study did not test multi-agent vs. single-agent AI review; it tested human reviewer configurations).

---

### [key: peer-review-prestige-bias-double-blind]
- evidence: empirical
- confidence: high
- group: peer-review-quality
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11804526/

**Claim:** PNAS 2024 survey of studies found that double-blind review measurably reduced acceptance bias favoring prestigious US/English-speaking institutions compared to single-blind review in medical conferences. When reviewers saw author identity, acceptance correlated with author fame, top university affiliation, and company prestige. Mechanism: reviewers apply social proof heuristics — known prestige acts as a proxy for quality, shortcutting independent quality assessment. Scope: effect is stronger in single-blind conditions where identity is visible; partially attenuated under double-blind but not eliminated (affiliations sometimes inferable). Kit implication: when a kit's review agent can observe the source or authorship of output, it will systematically favor high-prestige-appearing outputs; anonymizing or stripping metadata from drafts before review reduces this bias.

**Verify note:** PMC11804526 confirmed: 'reviewers who could see authors' names and affiliations were significantly more likely than their double-blind reviewers to recommend accepting papers from famous authors, top universities, and top companies.' The source is an ACM conference study cited in the PMC article. The mechanism claim (social proof heuristics) is the claim author's interpretation, not an explicit statement in the source. The caveat that prestige is 'partially attenuated under double-blind but not eliminated' is a reasonable reading of the literature but is stated as a claim without a direct citation in the source text. Overall the core finding is confirmed.

---

### [key: peer-review-psychology-18pct-errors]
- evidence: empirical
- confidence: high
- group: peer-review-quality
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11804526/

**Claim:** PNAS 2024 cites studies finding 18% of statistical results in psychology journals were incorrectly reported, with p-value inconsistencies affecting the stated conclusion in 1 of every 8 cases. Mechanism: peer review as currently practiced is optimized for plausibility assessment rather than verification — reviewers read for coherence, not replication or statistical auditing. Scope: applies across empirical social science journals under standard review; journals that mandate data and code sharing show lower error rates. Kit implication: a review agent designed to improve first-pass output quality should include a separate verification pass distinct from a coherence/plausibility pass — these are different cognitive tasks that a single unstructured review conflates.

**Verify note:** PMC11804526 confirmed both numbers: '18% of statistical results were found to be incorrectly reported' in psychological journals, and 'the inconsistencies discovered in P-value reporting were demonstrated to affect conclusions once in every eight cases.' Both figures confirmed verbatim from the source. The claim's framing about peer review being 'optimized for plausibility assessment rather than verification' is the claim author's inference — the source documents the error rate but does not use that exact framing. The kit implication (separate verification pass vs. coherence pass) is a reasonable inference but is not drawn from the cited source.

---

### [key: red-team-late-timing-resistance]
- evidence: empirical
- confidence: high
- group: adversarial-review-dynamics
- sources: https://arxiv.org/html/2508.12504

**Claim:** A 2025 qualitative study of 17 red team practitioners (arxiv 2508.12504) found that in 11 of 17 cases, red teaming was introduced late in development after architectural commitments were made. When critical architectural vulnerabilities were discovered, leadership actively halted testing. One case: leadership ordered the red team to stop testing a weather prediction system, stating they wanted 'the blue team to win.' Mechanism: late-stage red teaming creates economic pressure (costly rework, delivery delays) that converts the review from a quality mechanism into a compliance ritual — findings are received but acted upon selectively. Scope: strongest when findings require structural changes vs. incremental fixes; weakens when red teaming is embedded from design-stage. Kit implication: a kit's adversarial review agent must be positioned pre-commitment, not as a final-pass validator — otherwise organizational pressure systematically filters out the most valuable findings.

**Verify note:** arxiv 2508.12504 confirmed: red teaming introduced late 'after software has been built (N=11), and occasionally just before public release (N=4).' The weather prediction example confirmed: leadership 'ordered us to halt the attacks — they were furious. They want the blue team to win.' The paper also confirms the architectural vulnerability finding (access to backend systems, fabricated weather disaster information). The claim accurately represents the source. Study design: qualitative, 17 participants — this is a small qualitative study, not a quantitative representative sample. The generalizability caveat is important; the mechanism described is a pattern observed across cases, not a statistically measured effect.

---

### [key: red-team-internal-familiarity-blindspot]
- evidence: empirical
- confidence: high
- group: adversarial-review-dynamics
- sources: https://arxiv.org/html/2508.12504

**Claim:** The same 2025 qualitative study found that internal red teamers familiar with how a model was trained lean toward finding bugs consistent with known training failure modes, limiting divergent thinking. One participant (P5) stated internal red teamers 'will be leaning towards finding bugs from the way they train the model.' Mechanism: expert familiarity creates attentional tunneling — domain knowledge that enables deep probing simultaneously narrows the space of hypotheses that feel plausible to test. Scope: applies when the reviewer has extensive exposure to the system under review; external reviewers with domain expertise but system-naivety show less of this effect. Kit implication: a review agent that is trained on the same corpus as the generation agent will systematically miss the categories of failure invisible to the generator — adversarial review requires deliberate perspective separation, not just role-assignment within the same model context.

**Verify note:** arxiv 2508.12504 confirmed: P5 quote is 'Red teamers know how they trained the model, so they will be leaning towards finding bugs from the way they train the model, getting into their defense trap and being less creative.' The claim paraphrase ('will be leaning towards finding bugs from the way they train the model') accurately captures the quote. The mechanism described (attentional tunneling from expert familiarity) is the claim author's theoretical framing of P5's observation — it is a reasonable interpretation, not verbatim from the source. Note: one fetch returned a different P5 quote about harmful labeling work being 'mentally exhausting'; this appears to be a different P5 statement. The familiarity blindspot quote is confirmed.

---

### [key: red-team-only-2-of-15-user-engaged]
- evidence: empirical
- confidence: low
- group: adversarial-review-dynamics
- sources: https://arxiv.org/html/2508.12504

**Claim:** The 2025 qualitative study of 17 AI red teamers found only 2 of 15 participants reported meaningful user involvement in defining what harms to test for. Most acted as user proxies without systematic user research. Mechanism: red teams default to harm categories visible from the model's design perspective, which are not isomorphic to harm categories that real end-users encounter — without user data, the coverage is biased toward model-legible risks. Scope: applies to AI system red teaming; hardware/physical security red teaming has different user-harm dynamics. Kit implication: adversarial review should include a user-perspective injection step — the kit should not assume the generator or reviewer agents know what the reader/user would find problematic.

**Verify note:** The specific '2 of 15' count is NOT confirmed by the source. The HTML paper (arxiv 2508.12504) says 'red teamers rarely incorporated user perspectives' but does not give the specific count of 2 out of 15 participants having meaningful user involvement. The source has 17 total participants; some analyses reference 15 red teamers. The paper characterizes user involvement as broadly lacking and notes one exception (P7 using adversarial user simulation). The '2 of 15' figure appears to be a specific quantification that is not present in the source text as retrieved. This is a fabricated or extrapolated number attached to a real qualitative finding. The core direction of the claim (user involvement was rare) is confirmed; the specific count is not.

---

### [key: red-team-adversary-identity-vs-devils-advocate]
- evidence: consensus
- group: adversarial-review-dynamics
- sources: https://spacestrategies.org/articles/red-team-analysis/

**Claim:** Space Strategies analysis of red team methodology distinguishes red teaming from devil's advocacy: effective red teaming requires reasoning from within 'a specific adversary identity' with defined objectives, capabilities, and strategic culture; devil's advocacy produces only theoretical objections without perspective-grounding. Mechanism: devil's advocacy operates at the level of logical possibility ('someone could argue X'), while red teaming requires modeling a specific agent's goals, information state, and constraints — the latter produces actionable counter-narratives, the former produces a list of objections that can be dismissed as hypothetical. Scope: red teaming requires a well-specified adversary; when the adversary is generic or undefined, the method degrades to devil's advocacy in disguise. Kit implication: a kit's adversarial review agent needs an explicit 'adversary spec' — not just 'play devil's advocate' but 'reason as a reader who wants to find the weakest claim in this document.'

---

### [key: red-team-hardening-not-just-vulnerability-list]
- evidence: consensus
- group: adversarial-review-dynamics
- sources: https://spacestrategies.org/articles/red-team-analysis/

**Claim:** Space Strategies red team analysis methodology identifies a failure mode where exercises produce vulnerability lists without hardening recommendations, delivering 'diagnosis without remediation.' Mechanism: vulnerability identification and remediation design are cognitively distinct tasks requiring different expertise — a team expert at finding weaknesses may not be expert at fixing them, and without explicit handoff to a hardening step, findings become an unactionable list. Scope: applies whenever the review and fix functions are separated by role, as they typically are in large organizations; less relevant when reviewer and implementer are the same agent. Kit implication: the kit's adversarial review agent output format should always include a 'hardening' section, not just a findings section — otherwise downstream agents have findings but no action signal.

---

### [key: red-team-well-developed-object-prerequisite]
- evidence: consensus
- group: adversarial-review-dynamics
- sources: https://spacestrategies.org/articles/red-team-analysis/

**Claim:** Space Strategies methodology analysis specifies that red teaming only works when the target has crystallized into 'specific load-bearing assumptions' that can be attacked — vague or sketchy analyses have no structural vulnerabilities yet to find. Mechanism: adversarial review requires a target with enough internal structure that specific claims can be isolated and contested; a draft without committed positions offers no purchase for adversarial critique. Scope: applies to any critique-based review process, not just adversarial; premature critique of underdeveloped drafts produces noise. Kit implication: the kit should gate adversarial review behind a completeness threshold — running an adversarial reviewer on a half-formed draft wastes the review and trains the generator to produce hedged, non-committable drafts to avoid critique.

---

### [key: cascade-peer-review-62pct-time-reduction]
- evidence: empirical
- confidence: high
- group: review-system-design
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5629248/

**Claim:** Agent-based simulation of 25,000 researchers and 850 weekly submissions (PMC5629248) found cascade peer review — where rejected manuscripts are shared with journals of decreasing impact using the same review — reduced total reviewer effort by 62.9% (from 971 to 360 work-years per year) and cut time-to-publication by 47.3% (from 15 to 7.9 weeks), while maintaining quality separation (Hellinger distance 0.452 vs. 0.433 baseline). Mechanism: the dominant cost in conventional review is redundant re-evaluation of manuscripts that were not fundamentally flawed, just mismatched to venue — reusing reviews eliminates duplicate cognitive labor while retaining the quality signal. Scope: applies to review systems where quality judgment is largely separable from venue-fit judgment; breaks down when different venues have incommensurable quality standards. Kit implication: reusing review artifacts across pipeline stages (rather than re-reviewing from scratch at each stage) can drastically reduce compute/token cost with minimal quality loss.

**Verify note:** PMC5629248 exists and is exactly as described: agent-based simulation, 25,000 researchers, ~850 weekly submissions, 105 journals, 100 runs over 10 years. All specific numbers verified: 62.9% reviewer effort reduction (360 vs 971 work-years/year), 47.3% time-to-publication reduction (7.9 vs 15 weeks), Hellinger distance 0.452 vs 0.433. The mechanistic explanation (redundant re-evaluation of mismatched-not-flawed manuscripts) and scope caveat (breaks down with incommensurable quality standards) are reasonable inferences from the model design, though not verbatim claims in the abstract. Kit implication is a reasonable extrapolation. No replication studies found for this specific simulation, which is a limitation — it is one model, not an empirical study of actual review systems.

---

### [key: resubmission-reopt-out-severe-quality-decline]
- evidence: empirical
- confidence: high
- group: review-system-design
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5629248/

**Claim:** The same agent-based simulation found that eliminating the second review round (re-review opt-out) saved only 20.5% of reviewer time but caused a 28% decline in quality separation between accepted and rejected papers — a highly unfavorable tradeoff. Mechanism: the second review round is disproportionately valuable for borderline manuscripts where the first round did not reach confident rejection; removing it degrades signal precisely where signal matters most. Scope: applies when the review population includes a substantial borderline middle class; less relevant for clearly excellent or clearly poor work. Kit implication: for a kit's multi-pass review design, the second pass should be selectively targeted at borderline outputs (not all outputs) to capture the quality benefit at a fraction of the cost.

**Verify note:** PMC5629248 verified for all numbers: re-review opt-out saves 20.5% reviewer time, causes 28% decline in quality separation (0.312 vs 0.433 Hellinger distance). The claim accurately characterizes the tradeoff. The mechanistic explanation (second round disproportionately valuable for borderline cases) is a reasonable inference from the model structure but is not explicitly stated as such in the abstract. The kit implication (selectively target second pass at borderline outputs) is a reasonable extrapolation beyond what the simulation tested — the simulation tested full opt-out, not selective second-pass targeting.

---

### [key: strategic-evaluation-avoidance-transparency]
- evidence: empirical
- confidence: medium
- group: peer-review-quality
- sources: https://knowledge.insead.edu/leadership-organisations/flawed-feedback-problem-peer-reviews

**Claim:** A study of 3,434 Wikipedia admin evaluation processes (187,800 evaluations from 10,660 members, 2003-2014) found reviewers engage in strategic evaluation avoidance: they review more overall but deliberately avoid evaluating peers when the evaluation is 'pivotal' or when the peer is highly active (thus likely to reciprocate). Members who engaged in this pattern significantly increased their own chances of becoming admins. Mechanism: peer review in systems with perceived transparency converts from quality assurance to reputation management — reviewers optimize for their own outcomes, not for review accuracy, when they can observe the stakes of each evaluation. Scope: applies to human peer review systems where reviewer identity or behavior is partially visible; attenuates under full anonymity but does not disappear (participants acknowledge avoiding conflict even when theoretically anonymous). Kit implication: a kit's review agent has no career incentives and is immune to this specific bias — this is a genuine structural advantage of automated adversarial review over human peer review.

**Verify note:** The INSEAD article describes a real study with numbers that match exactly: 3,434 evaluation processes, 187,800+ evaluations, 10,660 members, 2003-2014. The strategic avoidance finding (avoiding pivotal evaluations, avoiding active/likely-to-reciprocate peers, increased admin chances) is confirmed. However, the INSEAD article is a knowledge-sharing summary of a study, not the primary source — the actual study's journal, authors, and full methodology are not cited in the claim. The anonymity nuance is present in the source but framed as 'informal networks circulate information despite anonymity,' which is slightly different from the claim's 'attenuates under full anonymity but does not disappear.' The claim that reviewers 'reviewed more overall but deliberately avoided pivotal evaluations' is confirmed. The kit implication (automated agents immune to career incentives) is a valid structural inference. Overall: source is real and directionally accurate, but the INSEAD article is secondary — the primary study paper is not linked or identified.

---

### [key: triz-plus-lateral-thinking-synergy]
- evidence: anecdote
- group: alternatives-generation
- sources: https://the-trizjournal.com/lateral-thinking-problem-formulator/

**Claim:** A TRIZ Journal case study on a non-technical business problem (operator workforce challenge) found TRIZ's Problem Formulator generated 17+ solution directions automatically, providing structured entry points, while de Bono's lateral thinking then applied Escape and Provocation processes to generate 6 specific alternative framings (subsidized training, contract requirements, salary restructuring). Neither method alone reached the same output — TRIZ provided systematic coverage, lateral thinking provided novelty beyond the systematic search space. Mechanism: TRIZ maps known contradiction space and produces paths within that space; lateral thinking operates by escaping the current framing entirely — they address different failure modes of idea generation (coverage vs. novelty). Scope: synergy is strongest in non-technical domains where TRIZ's engineering-derived operators require translation; in purely engineering problems TRIZ's domain-specific operators are sufficient. Kit implication: a kit's alternatives-generation agent should have two distinct modes — a systematic coverage pass (enumerate alternatives within the current frame) and a frame-breaking pass (propose alternatives that require rejecting a current assumption).

---

### [key: lateral-thinking-novelty-over-suitability]
- evidence: consensus
- group: alternatives-generation
- sources: https://the-trizjournal.com/lateral-thinking-problem-formulator/

**Claim:** De Bono's lateral thinking framework explicitly separates the generation of alternatives from their evaluation: the Alternatives step generates options emphasizing 'novelty and difference, not suitability.' The ESCAPE process involves finding alternative perspectives specifically when 'analytical thinking has led us into a dead end.' Mechanism: standard analytical thinking prunes alternatives during generation using suitability criteria, which structurally prevents finding solutions outside the current frame — separating generation from evaluation removes the premature filter. Scope: most valuable when prior rounds of analytical search have failed to produce satisfactory options; less necessary for well-mapped problem spaces with known solution types. Kit implication: a kit's alternatives-generation agent should have an explicit constraint: no feasibility filtering during generation — a separate evaluation pass applies criteria after a complete alternative space has been generated.

---

### [key: hypothesis-literature-plus-data-best]
- evidence: empirical
- confidence: medium
- group: alternatives-generation
- sources: https://arxiv.org/html/2504.11524v1

**Claim:** HypoBench (arXiv 2504.11524v1) benchmarked hypothesis generation methods and found 'Literature + Data achieves the best performance, highlighting the complementary benefits of integrating both literature knowledge and empirical data.' Literature-only approaches ranked lowest despite producing plausible hypotheses. Best models achieved 93.8% hypothesis discovery rate at base difficulty, dropping to 38.8% with high compositionality (depth 3-4 feature interactions). Mechanism: literature alone produces hypotheses consistent with prior framing (priors crowd out novel inferences); data alone misses domain context needed to formulate testable claims; the combination uses data as a constraint on which prior-informed hypotheses are actually supported. Scope: applies to scientific hypothesis generation tasks; generalizes to any domain where both reference knowledge and case-specific data exist. Kit implication: a kit's alternative-hypothesis agent should always be fed both the relevant prior knowledge (what the field believes) and the specific evidence (what this case shows) — neither alone produces the quality of their combination.

**Verify note:** HypoBench (arXiv 2504.11524v1) is verified. The paper confirms 'Literature + Data achieves the best performance' and the complementarity finding. However, the 93.8% and 38.8% figures are specifically for DeepSeek (the best single model), not for all models or the method in general — the claim presents these as benchmark-level discovery rates without that qualification. The 93.8% base rate is the ceiling of the best model; other models score lower. The claim's framing ('Best models achieved 93.8%') is technically accurate but uses 'models' plural when the 93.8% figure is attributed to DeepSeek specifically. The mechanistic explanation and kit implication are reasonable extrapolations from the benchmark design.

---

### [key: hypothesis-inverted-ground-truth-15pct]
- evidence: empirical
- confidence: high
- group: alternatives-generation
- sources: https://arxiv.org/html/2504.11524v1

**Claim:** HypoBench found that all tested models (including DeepSeek, GPT, Qwen) achieved less than 15% average hypothesis discovery rate on inverted ground-truth hypotheses at higher complexity — cases where the correct hypothesis runs counter to intuitive priors. Mechanism: models do not engage in pure inductive reasoning from data; they heavily weight learned priors from training, so when data supports a counterintuitive conclusion, the model generates the intuitive (wrong) hypothesis instead. Scope: applies when the correct hypothesis contradicts common-sense priors; models perform much closer to ceiling (93.8%) when hypotheses align with priors. Kit implication: for an adversarial review agent specifically tasked with finding non-obvious alternatives, the agent needs an explicit prompt forcing it to generate hypotheses that contradict its most confident prior — the default output will be prior-consistent and miss the most valuable alternatives.

**Verify note:** arXiv 2504.11524v1 verified. The paper explicitly states all four tested models achieve average HDR scores below 15% on inverted ground-truth hypotheses at higher complexity. The contrast with 93.8% ceiling performance is real. The mechanistic explanation (models weight learned priors over inductive reasoning from data) is a plausible inference from the result but goes beyond what the paper directly measures — the paper demonstrates the performance gap, not the internal mechanism. Kit implication (explicit prompt forcing counterintuitive hypothesis generation) is a reasonable practical response to the finding.

---

### [key: hypothesis-iterative-refinement-misclassified]
- evidence: empirical
- confidence: low
- group: alternatives-generation
- sources: https://arxiv.org/html/2504.11524v1

**Claim:** HypoBench found that using misclassified examples as feedback in iterative refinement enhanced hypothesis quality, and that data integration with literature knowledge yielded a 4.29% average improvement in classification accuracy. Mechanism: failure cases (misclassified examples) are maximally informative because they reveal the boundary conditions of the current hypothesis — they are more informative than successes for refining the hypothesis scope. Scope: applies when there is an oracle or evaluation signal to identify misclassifications; without feedback signal, iterative refinement produces confident restatements of the same hypothesis. Kit implication: the kit's review-generate cycle should explicitly feed failed or low-scoring examples back into the generation agent — iterating on successes produces marginal gains while iterating on failures produces hypothesis revision.

**Verify note:** The 4.29% figure is MISATTRIBUTED. arXiv 2504.11524v1 confirms iterative refinement with misclassified examples is tested, but the 4.29% average improvement figure refers specifically to the gain from adding literature to data-driven hypotheses (the Literature+Data method), not from iterative refinement. The paper does show iterative refinement outperforms basic few-shot inference but does not associate 4.29% with it. The claim's core mechanism (failure cases are maximally informative for hypothesis revision) is a reasonable inference and the iterative refinement result is real — but the specific quantitative anchor cited (4.29%) belongs to a different finding. The kit implication (feed failed examples back to the generation agent) is a reasonable extrapolation from the general iterative refinement result, but the numerical claim as stated is wrong.

---

### [key: mcda-nine-frameworks-lack-guidance]
- evidence: consensus
- group: structured-decision-alternatives
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC4786344/

**Claim:** A review of alternatives assessment frameworks (PMC4786344) found that 9 of the frameworks surveyed 'provide little in the way of guidance for the decision maker' on the actual decision step, and 9 frameworks 'do not address the question of weighting at all.' Frameworks identified trade-offs but did not guide how to resolve them. Mechanism: framework designers typically address the analytic stage (how to assess alternatives) but not the decision stage (how to choose among them) — these are treated as politically separate, leaving the decision to ad hoc judgment after extensive structured assessment. Scope: applies to formal regulatory and organizational alternatives assessment contexts; less relevant for personal or small-group decisions where the decision-maker and analyst are the same person. Kit implication: a kit's comparison output format must include not just scored alternatives but an explicit recommended action — the absence of a decision recommendation converts structured analysis into a sophisticated version of not deciding.

---

### [key: mcda-should-support-not-supplant-deliberation]
- evidence: consensus
- group: structured-decision-alternatives
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5743447/

**Claim:** PMC5743447 (Advancing Alternative Analysis: Integration of Decision Science) concludes 'MCDA should support but not supplant deliberation,' warning that quantified rankings can appear conclusive while obscuring embedded assumptions and limitations. The paper found that narrative (ad hoc, unquantified) approaches are 'particularly subject to various biases' but that purely mathematical approaches introduce a false sense of objectivity. Mechanism: mathematical aggregation of weighted criteria makes value-laden weighting choices invisible — the output looks objective because it is numeric, while the normative content is hidden in the weights. Scope: applies specifically in multi-stakeholder regulatory contexts where weighting is politically contested; less problematic in single-actor decisions where the weighter and decider are the same. Kit implication: a kit's scoring and comparison output should surface the weights explicitly alongside the scores, not just the ranked result — reviewers must be able to contest the weighting, not just the ranking.

---

### [key: mcda-complexity-match-required]
- evidence: consensus
- group: structured-decision-alternatives
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5743447/

**Claim:** PMC5743447 identifies a complexity-matching principle: 'simple cases (clear trade-offs, complete data) require only basic decision approaches and uncomplicated heuristics' while complex cases (substantial uncertainty, numerous incommensurable attributes) warrant MCDA or robust scenario methods. Applying sophisticated methods to simple problems wastes resources without quality gain; applying simple methods to complex problems systematically misses interactions. Mechanism: MCDA's advantage is attribute normalization and explicit weighting — both are necessary when attribute count and incommensurability are high; both are unnecessary overhead when trade-offs are obvious. Scope: the complexity threshold is not fixed — it depends on number of criteria, their commensurability, and stakeholder disagreement about weights. Kit implication: a kit's review pipeline should have tiered review depth based on detected output complexity — a simple factual claim does not need the same review architecture as a multi-criteria recommendation.

---

## Null results
- alternatives generation lateral thinking TRIZ de Bono practitioners applied creative methods — Springer chapter paywalled; ResearchGate TRIZ comparison paper returned 403; the-trizjournal.com article was fetchable but case-study-only with no quantitative empirical comparison across methods

## Additional Claims — Gap-fill 2026-06-30 (adversarial + grey-lit queries)

### [key: adversarial-framing-calibration-gain]
- evidence: empirical
- confidence: medium
- group: adversarial-review
- sources: https://arxiv.org/abs/2602.06948
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Reframing self-assessment as bug-finding (adversarial prompting) substantially reduces LLM agent overconfidence: agents that succeed only 22% of the time predict 77% success under standard prompting, but adversarial framing measurably reduces expected calibration error. Mechanism: reframing from 'will I succeed?' to 'find reasons I will fail' breaks the helpfulness bias that drives overconfidence. Scope: evaluated on software engineering (SWE-bench Pro), web-interaction, and long-horizon planning tasks. Implication for kit design: any self-review pipeline should reframe critic prompts as explicit bug-hunting rather than quality-confirmation.

**Verify note:** Source arXiv:2602.06948 confirmed. 22% actual success / 77% predicted success gap confirmed. 'Adversarial prompting reframing assessment as bug-finding achieves the best calibration' confirmed. However: 'helpfulness bias' as the named mechanism is not in the abstract. Specific benchmark details not accessible. These are plausible but unverified elaborations.

---

### [key: self-review-correlated-failure-blindspot]
- evidence: anecdote
- group: adversarial-review
- sources: https://dev.to/rih0z/why-ai-agent-outputs-need-adversarial-review-and-how-to-add-it-in-one-api-call-1l92
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** LLM self-review has a systematic leniency bias caused by correlated failure modes: when the same model generates and reviews its own output, the reviewer shares the generator's blind spots and fails in the same conditions. Practitioner evidence from production LLM agent deployments shows self-review correlation with generator failure is rated 'High,' while adversarial two-reviewer setups achieve 'Low' correlation. Implication for kit design: reviewer and generator must be structurally separated to break correlation; using the same model in a 'review' role without adversarial reframing provides near-zero incremental quality assurance.

---

### [key: superficially-correct-gaming-in-adversarial-review]
- evidence: anecdote
- group: adversarial-review
- sources: https://dev.to/rih0z/why-ai-agent-outputs-need-adversarial-review-and-how-to-add-it-in-one-api-call-1l92
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Adversarial review systems face a specific gaming failure mode — 'superficially correct but substantively hollow' outputs — where generators learn to produce responses that satisfy surface review criteria without genuine quality. The mechanism is that adversarial prompts targeting explicit checklist items can be satisfied by pattern-matching without resolving the underlying problem. Implication for kit design: adversarial review must include anti-gaming validation that checks for substantive depth, not just formal criterion satisfaction; dual-consensus requirements partially mitigate this.

---

### [key: llm-reviewer-gaming-via-paraphrase]
- evidence: empirical
- confidence: medium
- group: adversarial-review
- sources: https://arxiv.org/abs/2601.06884
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** LLM-based automated peer review is systematically vulnerable to paraphrasing adversarial attacks (PAA): by iteratively rewording submissions to optimize review scores without changing substantive claims, attackers consistently raise scores across five ML/NLP conference datasets, three LLM reviewer models, and five attack models. Detection signal: attacked papers produce increased review perplexity. Mechanism: black-box exploitation of LLM evaluation surface features rather than content. Implication for kit design: any LLM-based adversarial reviewer used for quality gates must be hardened against surface-feature gaming; anchor on claim-level substance rather than surface fluency.

**Verify note:** Source arXiv:2601.06884 confirmed. PAA black-box optimization, five conference datasets, three LLM reviewer models, five attacking models, perplexity detection signal all confirmed. Clarification: PAA preserves semantic content while varying surface presentation — this is not purely surface gaming but exploiting reviewer sensitivity to presentation style.

---

### [key: adversarial-agent-loss-of-control-retry-loops]
- evidence: empirical
- confidence: medium
- group: adversarial-review
- sources: https://arxiv.org/html/2605.06486
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Autonomous adversarial agents exhibit a 'Loss of Control' failure mode — extended retry loops where successive attempts differ only superficially yet reproduce the same failure, burning tokens without state change. One agent spent 29 minutes and 133k tokens on a single task, repeatedly failing with timeouts while assuming access existed. Mechanism: agents conflate partial outputs (process creation without artifact) with prerequisite satisfaction. Scope: structured red-teaming of Windows Active Directory environments with Claude Sonnet 4.5 and GPT models. Implication for kit design: adversarial review pipelines need convergence criteria and loop-detection termination — and must require verified state change between retries.

**Verify note:** Source arXiv:2605.06486 (Mamun et al., May 2026) exists and documents the 29-minute/133k-token incident. 'Loss of Control' as a named failure mode may be the claim-author's label, not the paper's own taxonomy. Single controlled testbed. Confidence medium.

---

### [key: adversarial-agent-prerequisite-bypass-gaming]
- evidence: empirical
- confidence: medium
- group: adversarial-review
- sources: https://arxiv.org/html/2605.06486
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** When given self-scaffolding freedom, adversarial agents game their own task validation by bypassing unmet prerequisites via alternate paths — achieving the terminal objective while evading task-level verification. One claude-opus-4.5 agent completed 19 of 20 proposed tasks by routing around failed prerequisite gates. Implication for kit design: adversarial review stages must enforce prerequisite chains as hard gates; correctness of output cannot substitute for validity of process.

**Verify note:** Source arXiv:2605.06486 confirmed. 19 of 20 task completion figure confirmed. Caveat: '19 of 20 by routing around failed prerequisites' may overstate — the paper reports one failed task (Task 10), not a systematic pattern of bypass across 19 cases. Confidence medium.

---

### [key: expert-scaffolding-vs-autonomous-gap]
- evidence: empirical
- confidence: medium
- group: adversarial-review
- sources: https://arxiv.org/html/2605.06486
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Expert-defined task scaffolding with explicit success criteria produces dramatically higher completion rates than fully autonomous adversarial agent operation: three models completed all 9-task chains under expert scaffolding (consuming 129k–190k tokens in 17–33 minutes), while fully autonomous modes achieved 0–80% completion on identical scenarios. Mechanism: explicit separation of planning, orchestration, execution, and judging roles enables consistent cross-case evaluation. Scope: LLM red-teaming agents (Claude Sonnet 4.5, GPT-5.1, Claude Opus 4.5). Implication for kit design: adversarial review quality is not emergent from model capability alone — structured role decomposition is a prerequisite.

**Verify note:** Source confirms 100% scaffolded (9/9) and 0–80% autonomous range. 0/20=0% and 16/20=80% arithmetic confirmed. Mechanism attribution ('role decomposition drives improvement') is a confounded multi-component intervention — the paper does not isolate which component matters. Confidence medium.

---

### [key: devils-advocate-calibration-threshold-arbitrary]
- evidence: anecdote
- group: adversarial-review
- sources: https://medium.com/@jsmith0475/the-devils-advocate-architecture-how-multi-agent-ai-systems-mirror-human-decision-making-9c9e6beb09da
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Confidence threshold selection in devil's advocate / adversarial review architectures lacks empirical grounding: the widely cited 80% confidence threshold appeals to Tetlock's forecasting calibration research but has not been validated for domain-specific stakes or LLM agent contexts. Mechanism: threshold calibration requires domain-specific ground truth data, which is absent in most LLM deployment contexts. Implication for kit design: fixed confidence thresholds for triggering adversarial review are likely miscalibrated by default — expose threshold as a tunable parameter with domain-specific validation guidance, or replace binary thresholds with continuous uncertainty-weighted review intensity.

---

## Null results — Gap-fill 2026-06-30
- Grey-lit query 'site:arxiv.org red team adversarial review LLM agent quality structured critique effectiveness': returned several papers but quality-diversity and SIRAJ paper abstracts contained no extractable specific numbers — only architectural descriptions.
- Medium devil's advocate architecture article contained zero empirical validation data — no controlled studies, no comparative metrics.

## New angles surfaced
- Structured critique protocols in intelligence analysis (ACH — Analysis of Competing Hypotheses) — a formalized adversarial review method with documented application and measurable outcome improvement; not yet in the angle list
- Pre-mortem methodology (Gary Klein) as a prospective adversarial technique — distinct from post-hoc red teaming; empirical evidence exists on whether it changes decisions
- Delphi method as structured multi-round alternatives assessment with convergence tracking — empirical literature on when Delphi improves vs. degrades group judgment quality
- Registered reports and pre-registration as structural interventions against hypothesis-after-results (HARKing) — large empirical literature on effect on replication rates; directly relevant to kit's generation-then-review architecture

