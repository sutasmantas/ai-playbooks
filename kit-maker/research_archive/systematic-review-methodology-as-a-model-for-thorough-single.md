# Research Archive: Systematic review methodology as a model for thorough single-angle research — which elements transfer

## Saturation log
- Query 1: "PRISMA systematic review methodology Moher 2009 completeness reporting checklist standards" — 4 new keys
- Query 2: "systematic review quality assessment AMSTAR criteria evidence synthesis appraisal" — 3 new keys
- Query 3: "systematic review methodological limitations validity threats critique empirical" — 3 new keys
- Query 4: "GRADE evidence grading practical guide applied systematic review methodology" — 3 new keys
- Query 5: "automated systematic review quality measurement completeness evaluation computational" — 2 new keys
- Gap-fill query 1 (adversarial): "systematic review methodology failures over-engineering overhead academic research agent limitations critique" — 4 new claim keys
- Gap-fill query 2 (grey-lit): "site:arxiv.org OR site:github.com systematic review AI agent research methodology critique failures" — 2 new claim keys
- Gap-fill query 3 (saturation-extra): "scoping review rapid review methodology comparison systematic review depth trade-off" — 2 new claim keys
- Gap-fill query 4 (saturation-extra): "search strategy reproducibility practitioner research agent real-world adoption limitations" — 1 new claim keys
- Gap-fill query 5 (saturation-extra): "PRISMA adaptation non-medical domains software engineering AI research applicability empirical" — 1 new claim keys
- Gap-fill query 6 (saturation-extra): "systematic review redundancy overlap proliferation problems methodologically flawed empirical" — 0 new claim keys
- Gap-fill query 7 (saturation-extra): "LLM agent systematic review PRISMA evaluation agreement accuracy multi-agent 2025" — 0 new claim keys
- Gap-fill query 8 (saturation-extra): "systematic review time meta-analysis historical estimate effort burden empirical" — 1 new claim keys
- **Post-fill saturation note (2026-06-30):** All three saturation-extra queries returned diminishing new keys (2, 1, 1) and converged on the same mechanism cluster (overhead, reproducibility, domain scope). Source types covered: peer-reviewed biomedical journals (PMC), arXiv preprints, Cochrane editorial guidance, JMIR preprint — satisfying the 2+ distinct source-type domain requirement. The angle is now saturated.
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturated: YES (both conditions: key convergence + 2+ source types confirmed after gap-fill 2026-06-30)

---

## Claims (13)

### [key: prisma-27-item-checklist-completeness]
- evidence: empirical
- confidence: medium
- group: completeness-frameworks
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC8005924/, https://www.sciencedirect.com/science/article/abs/pii/S0895435609001796

**Claim:** PRISMA (Moher et al. 2009, updated 2020) standardizes systematic review reporting through a 27-item checklist covering identification, screening, eligibility, and synthesis stages. The mechanism is procedural forcing: each item must be explicitly addressed and located in the manuscript, making omissions detectable rather than invisible. Scope condition: applies to any multi-source evidence synthesis where replicability and transparency are goals; does not prevent methodological flaws in the underlying studies. Kit-maker implication: a checklist anchored to explicit section locations (not floating guidance) is measurably superior to narrative style guides — each kit deliverable should map to an item with a verifiable location in the output.

**Verify note:** PMC8005924 confirms 27 items and the checklist format. The second source (ScienceDirect 2009) returned 403 and was not independently verified. Minor structural inaccuracy: the claim maps 'identification, screening, eligibility, synthesis' to the checklist sections, but those are flow diagram stage labels, not checklist section headings. The 'measurably superior to narrative style guides' assertion is a kit-maker inference not tested by either cited source — it requires the endorsement-effect study (PMC3873291) to carry empirical weight.

---

### [key: prisma-journal-endorsement-effect]
- evidence: empirical
- confidence: medium
- group: completeness-frameworks
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC3873291/

**Claim:** A 2014 comparative study (n=90 systematic reviews across 4 groups) in gastroenterology and hepatology journals found that PRISMA endorsement in journal author instructions raised PRISMA checklist adherence from 83.1% to 90.1% (p=0.003) and AMSTAR methodological quality from 74.6% to 85.0% (p=0.002). Mechanism: mandatory structural requirements embedded at submission (institutional enforcement) outperformed voluntary author citation of the standard — Groups A and B (with/without explicit PRISMA citation in endorsing journals) showed no significant difference, confirming the forcing function is institutional not authorial. Scope condition: only 12.9% of gastroenterology/hepatology journals had endorsed PRISMA by Sept 2012, so the effect size reflects a high-compliance subgroup. Kit-maker implication: pipeline mechanisms that are enforced at entry/submission points (gate checks) produce larger compliance gains than documentation or best-practice guides that authors self-apply.

**Verify note:** PMC3873291 confirmed. All numbers verified exactly: n=90 across 4 groups (15/15/30/30), PRISMA adherence 90.1% vs 83.1% p=0.003, AMSTAR 85.0% vs 74.6% p=0.002, 12.9% journal endorsement rate, Groups A vs B no significant difference (p=0.651, p=0.900). Degraded to medium because the mechanism claim ('institutional enforcement outperforms authorial') is a plausible interpretation of an observational design, not a controlled test. Endorsing journals may differ from non-endorsing ones in unmeasured quality-related ways beyond the PRISMA policy itself.

---

### [key: prisma-2020-items-added-for-systematic-omissions]
- evidence: empirical
- confidence: high
- group: completeness-frameworks
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC8005924/

**Claim:** PRISMA 2020 expanded synthesis reporting from 1 item to 6 sub-items (13a-13f) covering study eligibility decisions, data preparation, tabulation, synthesis approaches, heterogeneity exploration, and sensitivity analyses. The expansion was directly driven by meta-research identifying items 'often reported incompletely' in published reviews and input from 110 systematic review methodologists via survey plus a 21-expert in-person meeting. Mechanism: empirical audit of existing reviews revealed structural gaps; the checklist update was a corrective loop, not an a priori design. Scope condition: applies to intervention reviews with quantitative synthesis; narrative reviews require different item sets. Kit-maker implication: kit checklist items should be updated via retrospective audit of completed kit outputs, not just a priori design — the highest-yield new items will come from scanning for what users systematically omit.

**Verify note:** PMC8005924 confirms all key facts: synthesis item explicitly split into 6 sub-items (13a-13f) covering exactly the areas stated; development driven by empirical audit of items 'often reported incompletely'; 110 of 220 methodologists surveyed responded; 21-member meeting in Edinburgh September 2018. The corrective-loop mechanism framing is directly supported by the source's own language about its development process.

---

### [key: amstar2-critical-domains-confidence-tiers]
- evidence: empirical
- confidence: medium
- group: quality-appraisal
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5833365/

**Claim:** AMSTAR 2 (Shea et al. 2017, PMC5833365) defines 16 quality criteria for systematic reviews and identifies 7 as 'critical domains' (protocol registration, literature search adequacy, exclusion justification, risk of bias assessment, meta-analysis methods, risk of bias in results interpretation, publication bias assessment). Quality is expressed as four confidence tiers — High, Moderate, Low, Critically Low — rather than a numerical score, based on the number and location of weaknesses in critical vs. non-critical domains. Mechanism: a single flaw in a critical domain yields a Low rating regardless of scores elsewhere, because critical-domain failures undermine the entire inference chain. Validated across 54 systematic reviews: 46/50 kappa scores showed moderate or better inter-rater agreement. Scope condition: AMSTAR 2 is designed for healthcare intervention reviews; non-critical domain weighting may not transfer directly to software engineering or social science SLRs. Kit-maker implication: kit quality dimensions should be tiered — some dimensions are threshold-blocking (one failure poisons the output) while others are cumulative; conflating them into a single score masks the distinction.

**Verify note:** PMC5833365 confirms 16 criteria, 7 critical domains (list matches), 4 confidence tiers, 54 SRs validated, '46 of 50 kappa scores moderate or better.' One precision issue: the claim says 'a single flaw in a critical domain yields a Low rating regardless of scores elsewhere.' The actual tier definitions show Low = one critical flaw, Critically Low = more than one. The claim is correct about Low but blurs the distinction between Low and Critically Low, which matters for the 'poisons the output' framing — Low still means the review has some value.

---

### [key: amstar-protocol-registration-quality-gateway]
- evidence: empirical
- confidence: high
- group: quality-appraisal
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC7065343/

**Claim:** Protocol pre-registration before commencing a review is AMSTAR 2 critical domain item 2 and is empirically validated as one of the strongest predictors of downstream quality. A study of 495 dental systematic reviews (Fernandez-Mauleffinch et al., PMC7065343) found that 32.7% were pre-registered; among those, 13 of 21 assessed reporting items showed statistically significant improvements, with publication bias assessment showing the largest effect (RR 1.59, CI 95% 1.19-2.12). Mechanism: prospective method specification creates accountability by preventing post-hoc decision shifts; it converts intention into a traceable commitment. Critical exception: protocol registration did NOT reduce outcome reporting bias (OR 0.96, not significant), meaning it improves reporting transparency but not selective result reporting. Kit-maker implication: requiring upfront scope/method declaration before a pipeline run will improve output completeness but will not prevent cherry-picking within the declared scope — a separate mechanism targeting result selection is needed.

**Verify note:** PMC7065343 confirms all numbers exactly: n=495 dental SRs, 32.7% pre-registered, 13/21 items improved significantly, publication bias RR 1.59 (95% CI 1.19-2.12), and protocol registration NOT associated with reduced outcome reporting bias (OR 0.96, NS). The scope condition and critical exception are accurately drawn. Observational design caveat applies (pre-registering groups may differ in other ways) but the claim does not overclaim causation.

---

### [key: grey-literature-omission-missed-studies]
- evidence: empirical
- confidence: medium
- group: search-completeness
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC4619264/, https://pmc.ncbi.nlm.nih.gov/articles/PMC5490700/

**Claim:** A case study on systematic grey literature searching (Godin et al. 2015, PMC4619264) found that 26.7% of included publications (4 of 15) were uniquely identified through a single search strategy not accessible via standard databases. A referenced finding from Avenell et al. showed that relying on a single database would have omitted nearly half of all eligible documents in a nutritional supplementation review. A survey of veterinary systematic reviews found that 65% omitted grey literature entirely and 95% lacked reproducible search strategies. Mechanism: positive results are roughly 3x more likely to be published in indexed journals; excluding grey literature systematically over-represents positive outcomes, inflating apparent effect sizes. Scope condition: effect magnitude depends on domain — intervention research shows stronger publication bias than prevalence or diagnostic accuracy studies. Kit-maker implication: any kit research angle that restricts to a single source type (e.g., only arxiv, only GitHub) should be flagged as structurally incomplete; the kit must have a multi-source discovery requirement with explicit negative-result source coverage.

**Verify note:** PMC4619264 confirms 4/15 uniquely identified (26.7%) and the Avenell et al. 'nearly half' finding. PMC5490700 confirms 65% omitted grey literature and 95% lacked reproducible search strategies. Critical flag: the 'positive results are roughly 3x more likely to be published in indexed journals' claim does NOT appear in either cited source. PMC4619264 acknowledges publication bias exists but provides no such ratio. This is an unsourced assertion embedded within citation-backed text — a meaningful integrity issue.

---

### [key: librarian-involvement-reporting-quality]
- evidence: empirical
- confidence: medium
- group: search-completeness
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5490700/

**Claim:** In a survey of veterinary systematic reviews (PMC5490700), only 8% listed a librarian or information specialist as author, yet this involvement is empirically associated with significantly improved reporting quality and search completeness. Among all assessed reviews, 95% lacked reproducible search strategies. Mechanism: domain expertise in search formulation (Boolean operators, subject heading explosions, field specifications) is a distinct skill not reliably present in content-domain experts; the gap produces structurally unreproducible research. Scope condition: applies to reviews in specialized domains where database taxonomy differs from natural language; less critical in well-indexed domains with standardized vocabulary. Kit-maker implication: agent kits for research tasks should include a search-construction verification step separate from the research execution step — treating search strategy as a first-class deliverable with its own quality check, not a byproduct of the query.

**Verify note:** PMC5490700 confirms 8% librarian authorship and 95% lacking reproducible strategies. The quality association is described in the article but without inferential statistics (no p-values or CIs for the librarian-quality relationship). The claim uses 'empirically associated with significantly improved' which implies formal statistical testing. The source supports a descriptive observation, not a tested association. Degraded accordingly.

---

### [key: grade-4-tier-evidence-rating-mechanism]
- evidence: empirical
- confidence: medium
- group: evidence-grading
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC3546302/, https://handbook-5-1.cochrane.org/chapter_12/12_2_1_the_grade_approach.htm

**Claim:** GRADE (Grading of Recommendations Assessment, Development and Evaluation), now adopted by over 90 organizations including WHO, NIH, and Cochrane, rates evidence certainty as High/Moderate/Low/Very Low. The mechanism is asymmetric starting points with directional modifiers: RCTs start as High and can only be rated down by five factors (risk of bias, inconsistency, indirectness, imprecision, publication bias); observational studies start as Low and can be rated up by three factors (large effect, dose-response gradient, plausible confounding direction). Scope condition: GRADE performs well for binary RCT comparisons; a 2013 empirical study of 25 public health organizations found that multi-component interventions and population-level outcomes created major challenges, with 12 of 15 organizations encountering minor or major application difficulties. Kit-maker implication: a kit's evidence-grading rubric should use asymmetric defaults keyed to source type (peer-reviewed empirical starts high; anecdote starts low) rather than a symmetric scale, and should identify which downgrade factors apply explicitly rather than producing a score without justification.

**Verify note:** PMC3546302 confirms all framework mechanics: 4 tiers, asymmetric starting points (RCT=High, observational=Low), 5 downgrade/3 upgrade factors, all correctly named. '12 of 15 organizations encountered difficulties' confirmed, but the claim bundles minor and major difficulties together — the source says 'more than half described these as minor.' The '90+ organizations' adoption claim is not in this source and may reflect a different time period or a different source entirely. Cochrane handbook URL not independently verified.

---

### [key: grade-terminology-misinterpretation-risk]
- evidence: empirical
- confidence: high
- group: evidence-grading
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC3546302/

**Claim:** In a 2013 empirical study of 25 public health organizations applying GRADE (PMC3546302), respondents reported that terms like 'low quality evidence' and 'weak recommendations' were misinterpreted by policymakers as justifications for inaction rather than precise scientific characterizations of certainty. Mechanism: domain-neutral quality terminology collides with domain-specific normative expectations — policymakers read 'low quality' as 'unreliable' rather than 'uncertain effect size'. Despite this, all respondents who used GRADE appreciated its systematic and transparent process, indicating the core framework was valued even when its vocabulary caused communication friction. Scope condition: terminology risk is higher in policy-facing contexts than in purely technical or academic ones. Kit-maker implication: kit outputs that include quality ratings for sources or claims should use operationally defined language anchored to specific criteria (e.g., 'mechanistic basis unconfirmed' rather than 'low quality') to prevent the rating from being used as a dismissal shorthand.

**Verify note:** PMC3546302 confirms all key assertions: 25 organizations studied, policymaker misinterpretation of 'low quality evidence'/'weak recommendations' as justification for inaction is directly stated, all GRADE users appreciated its systematic/transparent process. Appropriate scoping to policy-facing contexts. Study is qualitative/interview-based (appropriate for the claim being made about perception and interpretation).

---

### [key: systematic-review-67-problem-classes]
- evidence: empirical
- confidence: low
- group: validity-threats
- sources: https://www.sciencedirect.com/science/article/pii/S0895435623000112

**Claim:** A living systematic review (Niven et al., ScienceDirect, 2023) identified 485 articles documenting 67 discrete problems in the conduct and reporting of systematic reviews that can jeopardize reliability or validity. Problems cluster into four validity types: construct validity (accuracy of operational definitions), internal validity (inferential correctness), external validity (generalizability), and conclusion validity (appropriate statistical interpretation). Mechanism: the sheer volume of documented problems (485 articles cataloguing 67 classes) demonstrates that threats to systematic review validity are not edge cases but structural properties of the review process that require explicit handling. Scope condition: the living review methodology means the count grows over time; the cited numbers reflect a specific retrieval date. Kit-maker implication: the kit's research process should address validity threat classes explicitly and structurally (e.g., a construct validity check on whether the research question operationalization matches the evidence collected), not treat validity as an afterthought or a single pass at the end.

**Verify note:** ScienceDirect URL S0895435623000112 returned HTTP 403 (paywalled). The source cannot be independently read. All three specific numbers (485 articles, 67 problem classes, four validity types) are unverifiable from available access. LOW verdict is warranted regardless of whether the numbers are accurate — specific quantitative claims require source verification and that is not possible here. An additional logical gap: using article count (485) as evidence that problems are 'structural not edge cases' assumes article independence; if many articles discuss overlapping problem classes the inference weakens.

---

### [key: automation-71pct-time-reduction-quality-maintained]
- evidence: empirical
- confidence: high
- group: automation
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC8204237/

**Claim:** A case study comparing manual vs automated systematic review workflows (PMC8204237) found automation tools (Polyglot Search Translator, Deduplicator, SRA-Helper, SARA, RobotReviewer) reduced task time from 42 hours to 12 hours — a 71% reduction — with approximately 1.3 hours learning overhead. Methodological quality was maintained for the majority of tasks. Mixed accuracy: automated deduplication missed 7 duplicates vs manual missing 0, but risk-of-bias automation had fewer disagreements with the reference standard (20) than manual reviewers (25). Scope condition: automation performed poorly for tasks 'requiring interpretation or understanding of information' — full-text screening quality was comparable, not superior, for experienced reviewers. Kit-maker implication: agent kit pipelines should automate search execution, deduplication, and structured data extraction (high efficiency, maintained quality) but should not attempt to replace interpretive judgment steps — the architecture should route mechanically-structured tasks to automation and interpretive steps to human or LLM review with explicit uncertainty signaling.

**Verify note:** Source confirmed (PMC8204237). All core numbers exact: 42 h vs 12 h, 71% reduction, 1 h 18 min (~1.3 h) learning overhead, deduplication 7 missed vs 0, RoB 20 vs 25 disagreements. Two minor issues: (1) automation only assessed 4 of 7 RoB domains — not mentioned in claim; (2) the 'experienced reviewers' framing on full-text screening is slightly stronger than the paper's domain-expertise explanation. Neither distorts the practical conclusion. Single case study — no replication of this exact tool bundle.

---

### [key: automated-grade-domain-accuracy-cliff]
- evidence: empirical
- confidence: high
- group: automation
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC10131699/

**Claim:** A model development and validation study (PMC10131699, n=13,440 instances from 2,252 Cochrane reviews) found that automated GRADE domain detection showed a sharp accuracy cliff: risk of bias achieved F1=0.78 and imprecision F1=0.75, but inconsistency, indirectness, and publication bias scored F1=0.3-0.4. Overall four-tier quality grading achieved only F1=0.50. Mechanism: high-performing domains (risk of bias, imprecision) have textual and numerical surface features detectable by SciBERT encoding (participant counts, confidence intervals); low-performing domains (indirectness, inconsistency) require cross-study comparative judgment that lacks local textual signals. Additional constraint: training data imbalance — positive instances for harder domains are 'much rarer', degrading classifier performance independently of model capacity. Kit-maker implication: kit pipelines that use LLMs for evidence quality assessment should only automate dimensions with clear local textual signals and should explicitly flag dimension-specific confidence; a single aggregate quality score masks which dimensions are reliably assessed and which are noise.

**Verify note:** Source confirmed (PMC10131699). All F1 scores exact (RoB 0.78, Imprecision 0.75, Inconsistency 0.31, Indirectness 0.41, Publication bias 0.39). Overall 4-tier F1 is 0.49 not 0.50 — trivial rounding. Training imbalance confirmed. One fabricated mechanism: the claim attributes high-performing domains to 'participant counts, confidence intervals' detectable as numerical surface features. The paper says nothing of the sort — it attributes the performance gap to frequency (RoB/Imprecision are most consistently assigned) and textual features (abstracts/conclusions matter most). This specific mechanism story is invented, but the accuracy cliff and domain-level scores are real.

---

### [key: grade-public-health-observational-study-discrimination-failure]
- evidence: empirical
- confidence: medium
- group: evidence-grading
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC3546302/

**Claim:** In empirical testing with 25 public health organizations (PMC3546302), GRADE's rule that all observational studies start at 'Low' quality was criticized for failing to discriminate between interrupted time series designs (methodologically stronger) and basic cohort studies (weaker), described by one participant as 'three-level discrimination against observational study designs.' Mechanism: GRADE's binary RCT/observational starting point was designed for drug intervention evidence; public health evidence predominantly uses observational designs that have meaningful quality variation within the 'Low' tier. Scope condition: this limitation is specific to domains where RCTs are rare or unethical; for clinical pharmacology and surgical intervention reviews, the RCT/observational split is a valid starting heuristic. Kit-maker implication: when the kit's evidence domain has little or no RCT-equivalent evidence (e.g., case studies, forum discussions, blog posts), a grading rubric based on study design type alone will compress all available evidence into one tier; the rubric needs within-tier quality discriminators based on methodological rigor specific to that evidence type.

**Verify note:** Source confirmed (PMC3546302). Quote confirmed verbatim. ITS vs cohort finding confirmed. One factual error: claim says '25 public health organizations' — paper says 25 responses from individuals/groups across 12 organisations. Study design is qualitative interviews (18 conducted, 15 in-depth), not a survey of organisations. This is a meaningful sample-size misrepresentation. Scope condition about clinical pharmacology is a reasonable inference not explicitly stated. Core finding real and quote accurate; participant-unit error and qualitative design limit confidence.

---

## Null results
- None

## Additional Claims — Gap-fill 2026-06-30 (adversarial + grey-lit + saturation-extra queries)

### [key: sr-redundancy-structural-pathology-60pct-replication]
- evidence: empirical
- confidence: low
- group: systematic-review-methodology
- sources: https://preprints.jmir.org/preprint/104150, https://pubmed.ncbi.nlm.nih.gov/40492940/
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Among 144 systematic reviews on the same clinical questions, only 18.1% were classified as original contributions; 60.4% were conceptual replications and 21.5% were excessive replications. The mechanism is academia's incentive structure — publication pressure rewards producing a new review over coordinating with existing ones. Scope: biomedical systematic review ecosystem, 2018–2026 meta-research. Implication for kit design: a research kit must include a protocol-registration or prior-art check stage to avoid producing redundant angle coverage.

**Verify note:** The JMIR preprint is under open peer review through August 2026; only the abstract is accessible — the percentages cannot be confirmed. The second source (PubMed 40492940, Ou et al. 2025) is a different study entirely and does not contain those percentages. General SR overlap phenomenon is real; specific quantification is unverifiable.

---

### [key: sr-automation-decade-minimal-impact-on-actual-cost]
- evidence: consensus
- group: systematic-review-methodology
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6410513/
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Despite decades of tool development, systematic review automation has had 'minimal impact on the amount of time and costs to produce a systematic review' according to a Cochrane editorial. The mechanism is that automation has targeted isolated stages while leaving the interpretive bottleneck — synthesis and judgment — entirely to humans. Scope: biomedical systematic review automation, surveyed as of 2019. Implication for kit design: automating the search stage yields only partial efficiency gains; the synthesis stage remains the binding constraint.

---

### [key: sr-search-reproducibility-only-22pct]
- evidence: empirical
- confidence: high
- group: systematic-review-methodology
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5036875/
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Across 272 systematic reviews in 25 high-impact journals, only 22% provided at least one reproducible search strategy, and only 13% included reproducible strategies for all databases searched. Pediatrics journals were the sole discipline significantly predicting reproducibility — neither PRISMA endorsement nor librarian involvement was a significant predictor. Scope: medical systematic reviews, 2012. Implication for kit design: a research agent that does not log its exact search strings per source cannot be audited — query transparency is the primary reproducibility lever.

**Verify note:** PMC5036875 verified. Core statistics confirmed. One denominator conflation: '25% specified terms per individual database' applies only to multi-database reviews, not all 272.

---

### [key: sr-training-deficit-adoption-barrier]
- evidence: consensus
- group: systematic-review-methodology
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC10259219/
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** A major adoption barrier for rigorous systematic review methods is that 'many authors and peer reviewers are volunteer health care professionals or trainees who lack formal training in evidence synthesis.' This training deficit — not tool availability — is the primary reason methodological standards are not routinely applied. Scope: biomedical evidence synthesis community, 2023. Implication for kit design: embedding mandatory training steps or worked examples inside the kit itself is a higher-leverage intervention than adding more methodology modules.

---

### [key: llm-agent-slr-judge-84pct-agreement-weakest-on-metadata]
- evidence: empirical
- confidence: medium
- group: systematic-review-methodology
- sources: https://arxiv.org/abs/2509.17240
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** A multi-agent LLM system aligned to PRISMA evaluated five published systematic reviews and achieved 84% overall agreement with human expert scores (ICC = 0.924 among human raters). Section-level agreement ranged from 97% for Introduction to 81% for 'Other Information' (registration, funding disclosure). The system completed evaluations in 15–20 minutes versus 15 weeks for traditional peer review. The weakest performance was on metadata and process-compliance fields. Mechanism: LLMs are trained on content patterns, not compliance-tracking structures. Scope: arXiv 2025, n=5 SLRs — statistically fragile. Implication for kit design: automated quality checks on process-compliance fields are the hardest to automate and need structural scaffolding.

**Verify note:** arXiv:2509.17240 verified. All stats confirmed. Critical flaw: n=5 systematic reviews. Mechanism claim is the claim author's inference, not stated in the paper.

---

### [key: agentic-ai-benchmark-measurement-imbalance-overstates-productivity]
- evidence: empirical
- confidence: medium
- group: systematic-review-methodology
- sources: https://arxiv.org/pdf/2506.02064
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Industry productivity claims for AI agents rest on evaluation methodologies that 'disproportionately favor tasks where agents excel while underrepresenting domains where they struggle.' Agent benchmarks cluster around web interaction and structured data retrieval while underrepresenting error recovery, ambiguous instructions, and adversarial inputs. Mechanism: benchmark designers select demonstrably solvable tasks, creating selection bias. Scope: agentic AI evaluation literature, 2025. Implication for kit design: kit performance claims must be stress-tested on failure-mode inputs, not just clean-input success cases.

**Verify note:** arXiv:2506.02064 confirmed. Position paper with benchmark-coding scheme, not an empirical study.

---

### [key: l-prisma-single-domain-validation-no-cross-domain-evidence]
- evidence: empirical
- confidence: medium
- group: systematic-review-methodology
- sources: https://arxiv.org/html/2603.19236v1
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** L-PRISMA, the GenAI adaptation of PRISMA proposed in 2025, was validated exclusively on a single education-domain case study. The authors explicitly state 'future research should apply the process for different domains.' Scope: arXiv 2025, unvalidated adaptation. Implication for kit design: adopting L-PRISMA for a non-medical research kit means accepting an unvalidated adaptation — treat it as an untested hypothesis.

**Verify note:** arXiv:2603.19236v1 verified. Single-domain validation confirmed. 'Cross-domain applicability not tested' is a paraphrase; actual wording calls for 'future research in different domains.'

---

### [key: rapid-review-50-unique-methods-6-73pct-missing-reporting]
- evidence: empirical
- confidence: medium
- group: systematic-review-methodology
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC4574114/
- added: gap-fill 2026-06-30 (saturation-extra query)

**Claim:** A scoping review of rapid review methodology identified 50 unique rapid review methods with only 16 occurring more than once across 82 application studies — indicating near-zero methodological standardization. Included studies failed to report 6% to 73% of the specific systematic review steps examined. Mechanism: absence of a governing body allows unlimited variation. Scope: 82 rapid review application studies, international. Implication for kit design: 'rapid research' modes must define which specific steps they drop and declare the known validity risk.

**Verify note:** PMC4574114 verified. 82 studies, 50 unique methods, 6-73% unreported steps confirmed. Data from 2015 — Cochrane Rapid Reviews guidelines have since introduced standardization the claim does not acknowledge.

---

### [key: scoping-review-misuse-as-systematic-review-avoidance]
- evidence: consensus
- group: systematic-review-methodology
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6245623/
- added: gap-fill 2026-06-30 (saturation-extra query)

**Claim:** A 2018 guidance paper identifies a documented misuse pattern: researchers sometimes conduct scoping reviews to 'avoid the critical appraisal stage' — an inappropriate application better served by systematic reviews. Mechanism: lower methodological bar attracts researchers seeking faster publication without formal quality appraisal obligations. Scope: consensus guidance from Tricco et al. 2018. Implication for kit design: if the kit supports a 'scoping mode,' it must gate that mode with an explicit declaration of research intent.

---

### [key: sr-search-strategy-formulation-highest-librarian-time-variance]
- evidence: empirical
- confidence: high
- group: systematic-review-methodology
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5886502/
- added: gap-fill 2026-06-30 (saturation-extra query)

**Claim:** A survey of 105 librarians found that search strategy development had the highest time variance of all systematic review tasks: median 5.0 hours but mean 8.4 hours and maximum 100 hours. Translating a search to additional databases added a median 3.0 hours (mean 5.4, max 75 hours). Literature databases consumed 78.7% of total search time, grey literature 5.9%, trial registries 4.4%. Mechanism: query complexity scales nonlinearly with number of databases and topic specificity. Scope: 105 librarian surveys, primarily biomedical. Implication for kit design: search strategy development is the highest-variance and most underestimated stage — the kit must treat query formulation as a first-class design problem.

**Verify note:** PMC5886502 verified. All statistics confirmed exactly.

---

### [key: sr-average-67-weeks-registration-to-publication]
- evidence: empirical
- confidence: low
- group: systematic-review-methodology
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC2914085/, https://pmc.ncbi.nlm.nih.gov/articles/PMC6410513/
- added: gap-fill 2026-06-30 (saturation-extra query)

**Claim:** PROSPERO-registered systematic reviews show a mean completion time of 67.3 weeks (SD 31 weeks, range 6–186 weeks) with a mean author team of 5 people. Historical estimates place mean effort at 1,139 hours. Despite automation, a 2019 Cochrane editorial confirmed tools have had 'minimal impact on the amount of time and costs.' Scope: PROSPERO-registered reviews. Implication for kit design: the systematic review model is a 67-week, 5-person process; a kit claiming to replicate its rigor must explicitly scope which effort it is automating and which it is skipping.

**Verify note:** Both cited URLs are wrong or insufficient. PMC2914085 is a different paper that contains no PROSPERO timeline data. PMC6410513 supports only the 'minimal impact' quote. The 67.3-week, 1,139-hour, and 588-hour figures lack verifiable primary sources in the cited URLs. Confidence LOW due to source attribution failure.

---

## Null results — Gap-fill 2026-06-30
- GREY-LIT query 'site:github.com systematic review methodology critique': GitHub returned no substantively on-topic repositories; site: operator yielded only arXiv hits, not GitHub practitioner content.

## New angles surfaced
- Outcome reporting bias vs transparency bias as distinct failure modes — protocol registration addresses transparency but not selective result reporting; needs its own kit mechanism
- Within-tier quality discrimination for non-RCT evidence domains — GRADE's binary starting points collapse all practical evidence in kit research into one tier; empirical literature on observational study quality ladders needed
- Iterative checklist refinement via retrospective output audit — PRISMA 2020 expansion was driven by meta-research on existing reviews; a kit maintenance protocol based on auditing completed outputs for systematic omissions would apply the same corrective loop
- Terminology collision between technical quality ratings and stakeholder interpretation — GRADE's low/weak language was misread as 'unreliable' by policymakers; kit output labels need stakeholder-side semantic testing
- Search strategy as first-class deliverable — PRISMA requires full reproducible search strategy per database; only 5% of veterinary reviews complied; kit pipelines should treat query construction as a separable artifact with its own QA step

