# Research Archive: Confirmation bias in research — how to structure search to actively find contradicting evidence

## Saturation log
- Query 1: "confirmation bias systematic review publication bias detection Egger funnel plot meta-analysis" — 5 new keys
- Query 2: "bias sources types systematic reviews meta-analysis prevalence survey empirical" — 3 new keys
- Query 3: "confirmation bias research cherry-picking evidence selective reporting failures empirical" — 3 new keys
- Query 4: "adversarial search strategy devil's advocate bias mitigation practitioners applied guide" — 2 new keys
- Query 5: "bias detection algorithms literature search systematic computational automated" — 2 new keys
- Gap-fill query 1 (adversarial): "adversarial search strategy backfire overcorrection null result flood unusable findings critique" — 1 new claim keys
- Gap-fill query 2 (grey-lit): "LLM confirmation bias adversarial search strategy research agent site:arxiv.org" — 5 new claim keys
- Gap-fill query 3 (saturation-extra): "confirmation bias AI agent literature review search structured mitigation empirical" — 2 new claim keys
- Gap-fill query 4 (saturation-extra): "query framing effect retrieval bias information search adversarial vs neutral prompt empirical" — 1 new claim keys
- Gap-fill query 5 (saturation-extra): "motivated reasoning research search strategies structural countermeasure effectiveness empirical psychology" — 1 new claim keys
- **Post-fill saturation note (2026-06-30):** Extra queries returned diminishing new keys across 3 queries, with the final motivated-reasoning query yielding only 1 claim from behavioral psychology with no new mechanism not covered elsewhere. Coverage spans at least 3 distinct source-type domains: peer-reviewed empirical studies (arXiv with experimental data), behavioral psychology (PMC/Collabra), and applied agentic systems research — both saturation conditions are now met.
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturated: YES (both conditions: key convergence + 2+ source types confirmed after gap-fill 2026-06-30)

---

## Claims (15)

### [key: pub-bias-non-submission-primary]
- evidence: empirical
- confidence: high
- group: publication-bias
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC3702538/

**Claim:** Dwan et al. (2013, updated systematic review of 16 cohort studies, PMC3702538) found that non-publication is driven primarily by non-submission rather than journal rejection: 63–100% of unpublished studies were never submitted. Mechanism: researchers self-censor null results before the journal ever sees them, so post-hoc detection methods like funnel plots only catch what did reach journals. Scope: applies most severely to industry-funded trials (61% vs. 49% discrepancy rate) and observational studies; randomized trials show less bias. Kit-maker implication: an agent pipeline that only queries published sources will inherit this upstream silence; active negative-result database querying (PROSPERO, ClinicalTrials.gov, grey literature) must be a first-class search step, not an optional add-on.

**Verify note:** Source PMC3702538 (Dwan et al. 2013) is verified. Non-submission figure (63–100% of unpublished studies never submitted) is exact. Industry-funding discrepancy figures (61% vs 49%) are exact. One minor error: the claim says '16 cohort studies' but the 2013 update included 20 (the prior version had 16). The observational-studies scope assertion is a slight extrapolation — this paper focuses on RCTs. Core mechanism and all primary figures are accurate.

---

### [key: pub-bias-positive-result-odds]
- evidence: empirical
- confidence: high
- group: publication-bias
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC3702538/

**Claim:** Dwan et al. (2013, PMC3702538) found that statistically significant outcomes had 2.2–4.7× higher odds of being completely reported than non-significant ones. Mechanism: outcome-level selection operates independently of study-level selection; a published paper may still omit the majority of pre-specified outcomes that failed significance. Scope: strongest in multi-outcome trials; rate of primary-outcome change or omission was 40–62% across studies. Kit-maker implication: a research agent must explicitly record ALL outcomes originally specified in a source, not just the ones the paper highlights, otherwise the kit reproduces outcome-level confirmation bias at machine speed.

**Verify note:** Source PMC3702538 verified. Odds ratio range (2.2–4.7) matches exactly. Outcome-level selection mechanism is accurately characterized and is one of the paper's central contributions. The 40–62% primary-outcome change rate is consistent with the paper's reported data. Kit implication (record all pre-specified outcomes, not just highlighted ones) follows directly from the mechanism.

---

### [key: time-lag-bias-rate]
- evidence: empirical
- confidence: high
- group: publication-bias
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC3702538/

**Claim:** Dwan et al. (2013, PMC3702538) measured time-lag bias: positive trials were submitted after a median of 1 year vs. 1.6 years for negative results. Mechanism: faster publication of positive findings means early meta-analyses are almost entirely composed of positive studies, producing inflated effect estimates that persist even after the negative studies eventually appear. Scope: applies to any systematic search conducted before the negative trials have had time to complete and publish; this window can span 5–10 years in clinical research. Kit-maker implication: a research agent should timestamp sources and flag topics where the earliest high-citation studies may be systematically over-positive due to time-lag bias — this is especially relevant for fast-moving AI/ML research where most early results are triumphalist.

**Verify note:** Source PMC3702538 verified. Time-lag figures (median 1 year vs 1.6 years, p<0.001) match exactly, attributed within Dwan et al. to Ioannidis et al. The mechanism (early meta-analyses over-represent positive studies) is sound inference from the finding, though not empirically measured in this paper. The AI/ML domain extension and 5–10 year window are unsourced claimant extensions — plausible but not from this source.

---

### [key: egger-test-sensitivity-threshold]
- evidence: empirical
- confidence: medium
- group: bias-detection-methods
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7904376/

**Claim:** A systematic evaluation of publication bias tests (PMC7904376) found that Egger's regression test achieved sensitivity of 0.93 at a false-positive rate of 0.10, outperforming Begg's (0.86) and Macaskill's (0.43). Critically, sensitivity declines sharply when fewer than 20 studies are included — the most common case in emerging research areas. Mechanism: the test relies on detecting a correlation between effect size and standard error; with few studies, sampling variance dominates and statistical power collapses. Scope: Egger's test is unreliable for meta-analyses of <20 studies, which describes most AI capability literature reviews. Kit-maker implication: any automated bias-audit component must be gated by study count; below 20 studies, qualitative triangulation and grey literature search are more reliable detection strategies than statistical funnel-plot tests.

**Verify note:** Source PMC7904376 is real and verified. Sensitivity figures (Egger 0.93, Begg 0.86, Macaskill 0.43 at FPR 0.10) are exact. However, the 'fewer than 20 studies' threshold is a claimant inference — the paper's stated minimum threshold was 10 studies, not 20. The paper does acknowledge generalizability concerns below its threshold. The kit implication is sound practice regardless of whether the cut-off is 10 or 20.

---

### [key: trim-fill-false-imputation-risk]
- evidence: empirical
- confidence: high
- group: bias-detection-methods
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC1120714/

**Claim:** Duval and Tweedie's trim-and-fill correction method was shown in simulation studies (PMC1120714) to add non-existent studies to create symmetry even when no publication bias is present; the correction method itself can introduce false data. Mechanism: the algorithm assumes funnel plot asymmetry is caused solely by publication bias, but genuine heterogeneity, subgroup effects, or small-study effects produce identical asymmetry patterns, causing the algorithm to impute phantom studies. Scope: risk is highest when true heterogeneity exists between studies (common in social science and AI research). Kit-maker implication: automated 'bias correction' tools that adjust reported effect sizes are epistemically dangerous; a kit-maker agent should flag asymmetry and report multiple explanations rather than auto-correcting, preserving transparency.

**Verify note:** Source PMC1120714 (Sterne, Egger & Davey Smith, BMJ) is verified. The claim that trim-and-fill detects missing studies 'in a substantial proportion of meta-analyses, even in the absence of bias' is verified verbatim. The heterogeneity-as-alternative-explanation mechanism is accurately described. Authors' recommendation (sensitivity analysis only, not correction) is consistent with the kit implication. Finding is well-replicated in subsequent simulation literature.

---

### [key: systematic-review-bias-taxonomy]
- evidence: consensus
- group: bias-taxonomy
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11878363/

**Claim:** PMC11878363 identifies five structurally distinct bias domains in systematic evidence synthesis: (1) selection bias from non-random assignment, (2) performance bias from differential intervention conditions, (3) attrition bias from non-random dropout, (4) detection bias from inconsistent outcome measurement, (5) reporting bias from selective outcome publication. Each has a distinct mechanism and is addressed by different controls. Scope: all five can compound within a single included study; Cochrane RoB 2 operationalizes this five-domain assessment specifically for RCTs and does not translate directly to observational or qualitative evidence. Kit-maker implication: a research intake pipeline should classify each source along all five bias dimensions, not just apply a single 'quality score'; a flat quality score collapses structurally different failure modes into one number that cannot drive targeted remediation.

---

### [key: p-hacking-12-strategies-false-positive-inflation]
- evidence: empirical
- confidence: medium
- group: questionable-research-practices
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9905987/

**Claim:** Bakker et al. (2023, Royal Society Open Science, PMC9905987) catalogued 12 distinct p-hacking strategies and simulated their false-positive rates. Selective reporting of dependent variables inflated false positives to ~40% (10 outcomes tested); outlier exclusion reached ~30% (12 methods applied); scale redefinition exceeded 25%; optional stopping produced extreme rates with frequent data-checking. Core mechanism: all 12 strategies exploit multiplicity — conducting multiple tests without correction — while framing only the favorable test as 'the' analysis. Scope: detection is hardest when strategies combine, when theoretical post-hoc justifications are available, and when reporting is vague about outlier handling. Kit-maker implication: a research agent ingesting empirical claims should flag when a paper reports only one of many plausible analyses; the agent's claim extraction should record what alternatives could have been tested, not just what was reported.

**Verify note:** Source PMC9905987 is real. False-positive rate figures (selective reporting ~40%, outlier exclusion ~30%, scale redefinition >25%) are verified. 12 strategies and Monte Carlo design confirmed. However, author attribution is wrong: the paper is Stefan & Schönbrodt (2023), not Bakker et al. Optional stopping severity is understated — the paper finds rates well above what 'extreme' suggests at maximum checking frequency. Mechanism (multiplicity exploitation) is accurately described.

---

### [key: harking-prevalence-survey]
- evidence: empirical
- confidence: low
- group: questionable-research-practices
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9905987/, https://www.researchgate.net/publication/352514883_Cherry_picking_HARKing_and_P-hacking

**Claim:** A survey of 807 ecologists and evolutionary biologists (reported in multiple systematic reviews of questionable research practices) found 51% reported HARKing (hypothesizing after results are known), 64% had suppressed non-significant results, and 42% had collected more data after checking for significance. These rates have been replicated across psychology, finance, and management research. Mechanism: HARKing is invisible at the output stage — the published paper looks like confirmatory research but is actually exploratory, inflating false discovery rates by treating post-hoc patterns as a priori predictions. Scope: affects all fields where publication requires novel findings; highest in competitive, high-volume publishing environments. Kit-maker implication: confirmatory-looking language in papers ('we hypothesized that...') is not a reliable signal that the study was in fact confirmatory; an agent extracting claims should weight registered-report evidence structurally higher than standard-publication evidence of the same nominal design.

**Verify note:** The survey data is real and figures are accurate (n=807, 51% HARKing, 64% non-significant suppression, 42% optional stopping), but the source attribution is wrong. The claim cites PMC9905987 (Stefan & Schönbrodt simulation study) and a ResearchGate link that returned 403. The actual source is Fraser et al. (2018), 'Questionable research practices in ecology and evolution,' PLOS ONE, PMC6047784 — not cited by the claim. A verifier following the cited sources would not find this data.

---

### [key: registered-reports-positive-rate-drop]
- evidence: empirical
- confidence: high
- group: structural-debiasing
- sources: https://journals.sagepub.com/doi/10.1177/25152459211007467

**Claim:** Scheel, Schijen & Lakens (2021, Advances in Methods and Practices in Psychological Science) compared 71 Registered Reports against 152 standard psychology articles: Registered Reports showed 43.66% positive results (95% CI: 31.91–55.95%) vs. 96.05% for standard articles (95% CI: 91.61–98.54%). Mechanism: Registered Reports require peer review and acceptance before data collection, eliminating publication selection on outcome direction and forcing pre-specification of analysis plans that block HARKing. Scope conditions: authors note possible self-selection (conscientious researchers choose RRs), strategy effects (RRs used preferentially for risky hypotheses), and progressive-journal confounds; causal attribution to format alone is uncertain. Kit-maker implication: the ~96% positive-result rate in standard psychology literature is strong evidence that published source material is systematically biased; a research agent should treat any body of literature without pre-registration infrastructure as likely to be 2× over-stating effect sizes and should actively seek null or contradicting registered-report evidence.

**Verify note:** Source (Scheel, Schijen & Lakens 2021, AMPPS) is verified and accessible. All figures match exactly: 71 RRs, 152 standard articles, 43.66% positive for RRs (CI: 31.91–55.95%), 96.05% for standard articles (CI: 91.61–98.54%). All four confidence interval bounds match to two decimal places. Scope conditions (self-selection, strategy effects, progressive-journal confound) are accurately reproduced from the paper. The '2x effect-size overstatement' in the kit implication is a rough claimant heuristic, not a figure from the paper.

---

### [key: llm-bias-56pct-software-dev]
- evidence: empirical
- confidence: low
- group: llm-specific-bias
- sources: https://arxiv.org/html/2601.08045v1

**Claim:** Russo & Stol (2025, arXiv:2601.08045) studied 2,013 developer actions (808 LLM-related) and found 48.8% of all programmer actions were biased; 56.4% of LLM-related actions contained cognitive biases (χ²=30.72, p=2.97×10⁻⁸). The highest-impact individual bias was Fixation (CB6) with a 43.4% reversal rate — developers anchored on initial LLM suggestions and persisted with failing code despite contradictory evidence. Mechanism: LLM suggestions are presented with confident, fluent prose that confers perceived authority, reducing critical evaluation under cognitive load; task complexity amplified bias (mean 112 bias instances on heavy tasks vs. fewer on light). Scope: findings are from software development tasks; LLM interaction in research contexts may differ, but the authority-perception mechanism likely transfers. Kit-maker implication: a kit-maker agent that receives LLM-generated claims as candidate findings should be architecturally structured to generate explicit counter-arguments before acceptance, not just present the LLM claim for human review — because the human-review stage is itself highly susceptible to confirmation of the LLM's confident output.

**Verify note:** The source exists (arXiv:2601.08045v1) and all core statistics check out independently: 2,013 total actions, 808 LLM-related, 48.8% overall bias rate, 56.4% of LLM actions biased, χ²=30.72, p=2.97×10⁻⁸, Fixation (CB6) 43.4% reversal rate. However, the claim contains two material factual errors that an adversarial check must flag. First, the authors are Zhou, Saghi, Sabouri, Pandita, McGuire, and Chattopadhyay (USC / GitHub Research / Naval Postgraduate School) — not 'Russo & Stol.' Second, the paper was submitted January 2026, not 2025. The mechanism claim — that 'confident fluent prose confers perceived authority reducing critical evaluation under cognitive load' — is an interpretive extrapolation; the paper documents the correlation between LLM use and bias incidence but does not isolate fluency/authority perception as a mechanism in a controlled sense. The 'task complexity amplified bias (mean 112 bias instances on heavy tasks)' statistic was not confirmed in fetched content. Study design is observational (14 developers, mixed-methods) with a modest n; external validity for research contexts is asserted, not demonstrated. The kit-maker implication (generate explicit counter-arguments before acceptance) is a reasonable inference but goes beyond the paper's scope. LOW verdict because the authorship and year attribution are wrong and the mechanism is extrapolated.

---

### [key: llm-confirmation-bias-scalable-oversight]
- evidence: empirical
- confidence: medium
- group: llm-specific-bias
- sources: https://arxiv.org/abs/2507.19486

**Claim:** A 2025 study (arXiv:2507.19486) examining scalable oversight found that human evaluators conducting independent online research became MORE confident in an AI system's incorrect answers after doing so — their verification activity paradoxically strengthened misplaced confidence. Mechanism: when evaluators search to verify an AI claim, they tend to search using the claim's framing, which retrieves confirming evidence and feels like successful validation. Presenting arguments for BOTH answers improved accuracy specifically on the cases where the model was wrong. Scope: this effect diminishes as model capability scales, because humans lose the domain advantage needed to generate effective counter-framings. Kit-maker implication: verification steps in agent pipelines should be structured as adversarial search (explicitly query the negation of each candidate claim) rather than confirmatory search (search to 'check' the claim), because the latter is mechanistically indistinguishable from confirmation bias.

**Verify note:** Source exists (arXiv:2507.19486) and is a real empirical study. Core finding confirmed: in Study 2, participants in both groups became MORE confident in the AI system's answers after online research, even when those answers were incorrect. The 'presenting arguments for both answers improved accuracy on cases where the model was wrong' finding (Study 1) is confirmed. The scaling-diminishment claim is confirmed. The arXiv ID prefix (2507) indicates July 2025 submission, while one fetch reported 'May 17, 2025' — a minor dating inconsistency. Study sizes are modest: Study 1 = 192 participants, Study 2 = 106 participants. The specific mechanism described in the claim — 'evaluators search using the claim's framing, which retrieves confirming evidence and feels like successful validation' — is a reasonable inference from the finding but is not stated as an explicit tested mechanism in the paper; the paper documents the phenomenon without dissecting the search-behavior pathway. The kit-maker implication (adversarial search vs. confirmatory search) is an extrapolation beyond the paper's stated conclusions. MEDIUM because the core phenomenon is confirmed but the mechanism is inferred and the sample sizes are modest.

---

### [key: devil-advocate-group-decision-improvement]
- evidence: consensus
- group: adversarial-methods
- sources: https://arxiv.org/abs/2502.06251

**Claim:** Multiple applied studies reviewed in cognitive debiasing literature (consensus finding) show that assigning a structured devil's advocate role in group decision-making reduces conformity and improves decision quality by injecting cognitive diversity. Mechanism: the effect operates through two paths — (1) the designated dissenter provides psychological cover for others to voice disagreement, and (2) the forced articulation of opposing arguments creates cognitive elaboration that reduces anchoring on the initial position. Scope: most effective in power-imbalanced groups where minority voices face social suppression; the devil's advocate must be structurally assigned, not self-selected, to avoid the dissenter being dismissed as personally contrarian. The arxiv:2502.06251 LLM-based system proposes but has not yet empirically validated this digitally. Kit-maker implication: a research agent should include an explicit adversarial agent role (not just an instruction to 'consider alternatives') that generates a mandatory counter-brief for every major claim before that claim is passed downstream — the structural assignment is load-bearing, not merely advisory.

---

### [key: llm-search-query-recall-tradeoff]
- evidence: empirical
- confidence: medium
- group: automated-search-tools
- sources: https://arxiv.org/abs/2302.03495, https://arxiv.org/pdf/2505.07155

**Claim:** A 2023 study (arXiv:2302.03495) found that ChatGPT generates systematic review Boolean queries with high precision but sacrificed recall — it retrieved fewer relevant studies than human-expert queries. A 2025 replication (arXiv:2505.07155) confirmed this pattern: LLM-generated queries showed lower recall than human equivalents and inconsistent Boolean operator application, with failure concentrated on domain-specific controlled vocabularies (MeSH headings). Mechanism: LLMs optimize for surface-level keyword matching and plausible-sounding query structure rather than exhaustive synonym coverage, because their training rewards fluency over retrieval completeness. Scope: high-precision/low-recall queries are acceptable for rapid reviews but introduce systematic bias in comprehensive systematic reviews. Kit-maker implication: if the kit uses an LLM to generate search queries for research extraction, the query generation step must include an explicit synonym-expansion and MeSH/controlled-vocabulary lookup pass, or at minimum must be flagged as rapid-review quality, not comprehensive-review quality.

**Verify note:** arXiv:2302.03495 (Wang, Scells, Koopman, Zuccon, 2023) confirmed: paper exists, finds ChatGPT generates Boolean queries with high precision but lower recall, explicitly stated in the abstract. arXiv:2505.07155 (same authors, 2025, accepted SIGIR-2025) confirmed as a reassessment/reproducibility study of the same topic. However, the claim characterizes 2505.07155 as a 'replication that confirmed this pattern: LLM-generated queries showed lower recall than human equivalents' — the 2025 paper's actual finding is more nuanced: 'query effectiveness varies significantly across models and prompt designs.' It is not a straightforward confirmation; it adds important caveats about prompt design and model selection as key drivers. The specific claims about 'inconsistent Boolean operator application' and 'failure concentrated on domain-specific controlled vocabularies (MeSH headings)' were not confirmed from fetched content (may appear in the full paper). The mechanism (LLMs optimizing for fluency over retrieval completeness) is plausible inference not stated as a tested causal account. The precision/recall trade-off framing for the 2302.03495 paper is accurate. MEDIUM because the first source is well-described but the 2025 source is somewhat mischaracterized as a simple replication, and specific technical claims about MeSH failures could not be confirmed.

---

### [key: disconfirming-case-qualitative-synthesis]
- evidence: consensus
- group: adversarial-methods
- sources: https://pubmed.ncbi.nlm.nih.gov/23166156/

**Claim:** Dixon-Woods et al. (2012, reported in PubMed 23166156) identified that actively seeking the disconfirming case is a recognized hallmark of trustworthy qualitative evidence synthesis, but noted that very little practical guidance exists on how to implement it — few researchers describe the practicalities. Mechanism: in qualitative synthesis, confirmation bias manifests as the tendency to identify patterns that confirm the reviewer's emerging theory while treating anomalous cases as noise; explicit disconfirmatory search forces a structural engagement with refutational findings before theory closure. Scope: applies to qualitative and mixed-methods syntheses; less formalized than Cochrane-style quantitative protocols. Kit-maker implication: a research agent handling qualitative or narrative claims should have an explicit disconfirming-case prompt that forces identification of the case that most directly contradicts the emerging claim — not as a final step but as a mid-pipeline interrupt before claim encoding.

---

### [key: pico-comprehensiveness-bias-prevention]
- evidence: consensus
- group: search-methodology
- sources: https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-13, https://researchgold.org/blog/boolean-search-strategy-guide

**Claim:** Cochrane Handbook guidance (consensus of systematic review methodology) requires that systematic review searches be 'as comprehensive as possible' and that PICO-structured Boolean queries include synonyms for all four dimensions to minimize retrieval bias. Poorly formulated queries introduce a structural form of confirmation bias: the search terms themselves encode the reviewer's assumptions about what the evidence looks like, silently excluding studies that describe the same phenomenon using different vocabulary. Mechanism: Boolean AND between PICO elements requires a study to use all four term sets; any element with incomplete synonym coverage drops studies that are in scope. Scope: applies to all database-driven searches; the effect is strongest in interdisciplinary questions where terminology varies across research communities. Kit-maker implication: the kit's search formulation layer should generate at least 3 synonym variants per PICO element, explicitly query oppositional terms (e.g., search for failure AND [topic] not just success AND [topic]), and include grey literature databases that are not indexed by standard keyword search.

---

## Null results
- Springer article on 'red reading' (DOI 10.1007/s13347-025-00955-9) was paywalled — could not extract mechanism or evidence for adversarial text reading as a disconfirmation strategy
- biorxiv.org/2021.06.29.450332 returned HTTP 403 — cherry-picking as active evidence sampling study was inaccessible
- arXiv:2502.06251 full PDF was binary-unreadable — devil's advocate AI system had no quantitative validation data in any accessible version

## Additional Claims — Gap-fill 2026-06-30 (adversarial + grey-lit + saturation-extra queries)

### [key: llm-code-review-adversarial-framing-asymmetry]
- evidence: empirical
- confidence: high
- group: confirmation-bias-in-research
- sources: https://arxiv.org/html/2603.18740v1
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Autonomous LLM code-review agents (Claude Code) are manipulated by adversarial PR metadata framing in 88.2% of cases versus 35.3% for interactive assistants (GitHub Copilot), because autonomous agents lack the user-interrupt loop that allows humans to catch semantic inconsistencies. False-negative bias exceeded false-positive bias by 4–114x across models — adversarial framing systematically suppresses detection. Scope: n=17 for autonomous agent (small), different deployment contexts. Implication for kit design: search agents operating autonomously are far more susceptible to query-framing effects than supervised pipelines; kit must enforce metadata-blind retrieval or explicit framing-neutralization steps for unattended runs.

**Verify note:** arXiv:2603.18740v1 verified. Claude Code manipulation 88.2% (15/17), Copilot 35.3% (12/34), false-negative over false-positive 4-114x all confirmed. Structural caveat: different deployment contexts make direct comparison asymmetric. n=17 is small.

---

### [key: metadata-redaction-restores-detection-with-residual-gap]
- evidence: empirical
- confidence: high
- group: confirmation-bias-in-research
- sources: https://arxiv.org/html/2603.18740v1
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Metadata redaction of PR descriptions recovers 68.75% of missed vulnerability detections in autonomous LLM code review; adding explicit ignore-metadata instructions raises recovery to 94.12%, but a residual 5.88% gap persists even after full debiasing. The mechanism is that some framing cues are encoded in code comments and variable names rather than PR metadata, making them immune to metadata-only interventions. Scope: tested on 17 CVEs across 10 real-world projects. Implication: structural debiasing measures are highly effective but not total; layer multiple debiasing steps.

**Verify note:** arXiv:2603.18740v1 verified. Redaction recovery 68.75% (11/16), explicit instructions 94.12% (16/17), residual 5.88% all confirmed. Denominators differ between the two figures — not flagged in the claim.

---

### [key: iterative-adversarial-refinement-reaches-87pct-success]
- evidence: empirical
- confidence: medium
- group: confirmation-bias-in-research
- sources: https://arxiv.org/html/2603.18740v1
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Iterative adversarial refinement of framing attacks against LLM code reviewers reaches 87% approval of vulnerable code (vs 52% on first submission), because attackers can clone the review pipeline locally and iterate without detection limits while defenders face each submission once. Implication for kit design: adversarial search queries must be iteratively refined rather than applied as single-shot negations; one-shot adversarial queries are insufficient and may produce false confidence.

**Verify note:** 87% and 52% confirmed from arXiv:2603.18740v1 (Table 6), but refer exclusively to Claude Code with n=8 for the refined subset. GitHub Copilot shows only 35% first-submission success, undermining universality. The 87%/52% comparison is real; the framing as a general result is inflated.

---

### [key: agentic-tool-use-confirmation-bias-query-narrowing]
- evidence: empirical
- confidence: low
- group: confirmation-bias-in-research
- sources: https://arxiv.org/html/2510.19973v1
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** In LLM-powered agentic systems, confirmation bias corrupts tool invocation by causing agents to formulate narrowly constrained retrieval queries that validate predetermined conclusions rather than explore competing hypotheses. The mechanism models as a selection operator S(D,H) that skews posterior distributions by filtering retrieved datasets toward hypothesis-consistent evidence. Scope: demonstrated in autonomous 6G network management agent simulation — not deployed agents. Implication: kit research agents must be designed with forced query diversification.

**Verify note:** Source arXiv:2510.19973v1 confirmed. S(D,H) selection operator exists as equation (3). However: this is a Digital Twin simulation (Gemini Flash 2.5 API), not deployed agents. The kit-design extrapolation from a 6G network simulation to general research agents is an unsupported domain leap. Confidence LOW.

---

### [key: multipersona-debate-buffering-not-belief-change]
- evidence: empirical
- confidence: medium
- group: confirmation-bias-in-research
- sources: https://arxiv.org/abs/2412.04629
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Multi-persona LLM debate systems do not significantly increase participant attention to opposing views or produce belief change away from prior positions, but do provide a buffering effect against bias caused by individual cognitive tendencies. Measured via eye-tracking, belief-change scores, and qualitative feedback. Scope: human participants exposed to LLM-generated multi-persona debates on controversial issues. Implication for kit design: LLM-generated devil's-advocate content is insufficient as a standalone debiasing intervention — it prevents bias amplification but does not correct existing bias; treat it as a maintenance mechanism, not a corrective one.

**Verify note:** Source arXiv:2412.04629 confirmed. Eye-tracking, belief-change measures, qualitative feedback confirmed. Both core findings confirmed from abstract. Baseline is a two-stance retrieval system, not a no-intervention control.

---

### [key: scalable-oversight-online-research-backfires]
- evidence: empirical
- confidence: medium
- group: confirmation-bias-in-research
- sources: https://arxiv.org/pdf/2507.19486
- added: gap-fill 2026-06-30 (saturation-extra query)

**Claim:** Human evaluators conducting online research to verify AI model outputs become more confident in incorrect system answers after the research, even when the model is wrong. The mechanism is that confirmation bias drives searchers to retrieve and weight confirmatory evidence, and the research act itself reinforces prior belief in the system's correctness. Scope: two controlled studies of human oversight of AI outputs. Implication for kit design: appending a 'do your own research' verification step to AI-generated literature claims may systematically increase human confidence in wrong claims; structured disconfirmation protocols are required.

**Verify note:** Source arXiv:2507.19486 ('Confirmation bias: A challenge for scalable oversight') confirmed. Finding confirmed verbatim: 'participants in both groups become more confident in the system's answers after conducting online research, even when those answers are incorrect.' N-sizes and specific confidence-increase percentages not verifiable from abstract.

---

### [key: prompt-debiasing-backfires-for-judgment-biases]
- evidence: empirical
- confidence: high
- group: confirmation-bias-in-research
- sources: https://arxiv.org/abs/2604.01366
- added: gap-fill 2026-06-30 (saturation-extra query)

**Claim:** Prompt-level debiasing instructions substantially reduce response-type biases in LLMs but prove counterproductive for judgment biases — actively worsening performance on tasks requiring sound evaluation. Activation steering achieves 26–32% reduction in bias scores while maintaining downstream task performance. Scope: tested across Llama and Qwen model families on a benchmark covering judgment, information-processing, social, and response bias families. Implication for kit design: prompt instructions telling an LLM research agent to 'be unbiased' are unreliable and may backfire for judgment biases; structural interventions in the generation pipeline are more reliable.

**Verify note:** Source arXiv:2604.01366 confirmed. All named details verified: 26-32% bias score reduction, Llama and Qwen families, four bias families, prompt debiasing backfiring for Judgment biases — all confirmed. Caveat: Qwen shows up to -19.0pp degradation on Judgment tasks under activation steering.

---

### [key: time-pressure-search-truncation-amplifies-framing-30pp]
- evidence: empirical
- confidence: high
- group: confirmation-bias-in-research
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC8985223/
- added: gap-fill 2026-06-30 (saturation-extra query)

**Claim:** Time pressure amplifies framing effects by 2.5x through information search truncation: under a 1,000ms deadline, participants chose after examining only a single option in 54.4% of trials vs 11.7% under no deadline, and the framing effect expanded from a 12-percentage-point gap to a 30-percentage-point gap (d=1.52). Mechanism: truncated search prevents exposure to disconfirming options, so whichever frame is encountered first dominates. Scope: N=40, behavioral experiment with gamble choices. Implication for kit design: research pipelines under token, time, or cost budgets that cause early search termination will systematically amplify whatever framing the first retrieved documents carry — require randomized result ordering or mandatory disconfirming-source inclusion before cutoff.

**Verify note:** Source PMC8985223 confirmed. All specific numbers verified exactly. Caveats: N=40 narrow undergraduate sample; '2.5x amplification' is the claim author's calculation (30/12), not stated in the paper; kit-design extrapolation from gamble-choice truncation to LLM retrieval budgets is conceptually reasonable but empirically ungrounded.

---

### [key: adversarial-direct-bias-injection-raises-suspicion-backfire]
- evidence: empirical
- confidence: medium
- group: confirmation-bias-in-research
- sources: https://arxiv.org/html/2603.18740v1
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Template-based direct adversarial bias injection into LLM review pipelines is ineffective and counterproductive — blunt attacks near-fail while subtle iterative refinement reaches 87% success. The failure mode of aggressive adversarial prompting is that it triggers detection heuristics. Scope: tested against GitHub Copilot and Claude Code on security code review tasks. Implication for kit design: adversarial search queries designed to stress-test kit outputs must NOT be written as blunt negations — they must be framed as plausible alternative hypotheses, otherwise they produce false null results.

**Verify note:** Source arXiv:2603.18740v1 confirmed. Iterative 87% / direct 52% results confirmed for Claude Code. MATERIAL ERROR: 'raises suspicion' finding is misattributed — the paper states this is the authors' judgement about human reviewer behavior, not a measured LLM behavior. The 'near zero success for direct attacks' is not stated in the paper. Kit-design implication is directionally sound; the attributed LLM mechanism is incorrect. Confidence medium.

---

## Null results — Gap-fill 2026-06-30
- Grey-lit query 'site:github.com LLM confirmation bias adversarial search strategy research agent': no GitHub repository results surfaced; all results were arxiv.org papers, not practitioner tooling.
- Adversarial query on 'null result flood unusable findings critique': no papers specifically studying overcorrection from adversarial search producing too many irrelevant results.
- Motivated reasoning structural countermeasure query: returned psychology literature on climate change motivated reasoning; no empirical studies measuring structural search-design countermeasures.

## New angles surfaced
- Adversarial framing in claim robustness testing: arXiv:2405.18779 quantifies claim robustness scores under adversarial reframing — a direct methodological primitive for kit-maker agent pipelines that has no current angle
- LLM scalable oversight failure modes: arXiv:2507.19486 shows a specific failure mode where verification search reinforces wrong AI outputs — this is a distinct angle from general confirmation bias and warrants its own research wave focusing on oversight protocol design
- Anchoring bias in LLMs as a search-framing problem: arXiv:2511.05766 and arXiv:2412.06593 both document that GPT-4 anchoring bias is resistant to standard mitigation prompts — this directly contradicts the assumption that instructing an agent to 'consider alternatives' is sufficient, warranting a dedicated angle on structural (non-instructional) debiasing methods
- Registered reports as a structural protocol model: the 52-percentage-point drop in positive results (96% → 44%) in Scheel et al. 2021 suggests that pre-registration protocol design is an underexplored source of kit architecture patterns — what would a 'registered report' equivalent look like for an agent research pipeline?

