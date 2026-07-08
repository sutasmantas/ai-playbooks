# Research Archive: Systematically searching for null results and absence-of-evidence as research outputs

## Saturation log
- Query 1: "absence of evidence evidence of absence null results reporting Altman Bland BMJ 1995" — 3 new keys
- Query 2: "publication bias null results underreporting systematic reviews meta-analysis empirical" — 3 new keys
- Query 3: "null result interpretation errors absence evidence assumption failures empirical" — 2 new keys
- Query 4: "grey literature unpublished results search strategy systematic reviews practitioners" — 2 new keys
- Query 5: "null result detection automated literature mining gap identification computational" — 1 new keys
- Query 6: "Altman Bland 1995 confidence interval underpowered studies mechanism (follow-up)" — 1 new keys
- Query 7: "publication bias file drawer problem Rosenthal effect size distortion meta-analysis quantified (follow-up)" — 1 new keys
- Gap-fill query 1 (adversarial): "null result search strategy limitations false negative grey literature incomplete coverage critique" — 2 new claim keys
- Gap-fill query 2 (grey-lit): "site:arxiv.org null result publication bias grey literature systematic search AI empirical" — 1 new claim keys
- **Post-fill saturation note (2026-06-30):** Angle 113 was already saturated. Both gap-fill queries produced only 3 marginal new claims on sub-topics (URL decay, absence of Cochrane standard, effect-size null result) none of which contradict existing claims. Saturation confirmed.
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturated: YES (confirmed pre-gap-fill; gap-fill 2026-06-30 added 3 new claims)

---

## Claims (12)

### [key: altman-bland-ci-mechanism]
- evidence: empirical
- confidence: low
- group: null-result-interpretation
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC351831/, https://www.semanticscholar.org/paper/Statistics-notes:-Absence-of-evidence-is-not-of-Altman-Bland/724e360ef94e1312d074735dc5efe5bcf247e546

**Claim:** Altman and Bland (BMJ, 1995) demonstrated that the core mechanism behind false 'evidence of absence' conclusions is the conflation of a non-significant p-value with proof of no effect. Their canonical example: a trial concluded two treatments were equally effective despite a 95% CI spanning a 20-percentage-point difference in cure rates. The mechanism is statistical power failure — when a study is designed at 80% power, 20% of true effects will still produce p>0.05 by chance alone. Scope: this applies to any kit pipeline that retrieves empirical results and labels non-significant findings as 'no effect found'; it does not apply when equivalence testing (TOST) or Bayesian factors are used instead of NHST. Kit-maker implication: output formatters must never auto-label a p>0.05 result as 'null' or 'no evidence'; they must surface the confidence interval width and the study's power estimate alongside any non-significant finding.

**Verify note:** PMC351831 does NOT resolve to the 1995 Altman and Bland Statistics Notes paper. It is a 2004 BMJ editorial by Phil Alderson that cites the 1995 Altman-Bland paper. The canonical example of a trial concluding equal effectiveness despite a CI spanning a 20-percentage-point difference in cure rates is not in PMC351831 — the Alderson editorial uses an HIV trial with relative risk CIs as its example. The actual 1995 Altman-Bland paper (BMJ 1995;311:1-2) exists and makes the correct argument, but its specific canonical example could not be verified from the given URL. The core statistical principle is sound and well-established. Wrong URL, unverified specific example.

---

### [key: nhst-null-power-error-rate]
- evidence: empirical
- confidence: medium
- group: null-result-interpretation
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11090505/, https://elifesciences.org/articles/92311

**Claim:** Systematic review of NHST practice (Lakens et al., replicated across multiple fields) shows that when a study is powered at 80% to detect an assumed effect and the effect is real, null results still arise 20% of the time (Type II error). In underpowered studies (common in early-phase research), this rate rises sharply: at 50% power the false-null rate is 50%. Mechanism: statistical power is the probability of correctly rejecting a false null, so its complement is the false-null rate. Scope: applies to all frequentist NHST; does not apply to properly specified Bayesian models with informative priors or registered equivalence tests. Kit-maker implication: a claim-extraction mechanism must track reported power or sample size and flag findings where power is below 80% as 'ambiguous absence' rather than confirmed null.

**Verify note:** PMC11090505 and elifesciences.org/articles/92311 confirmed. The 80% power = 20% false-null rate argument is confirmed in the paper — it is also definitionally true (Type II error = 1 - power). The 50% power = 50% false-null rate follows from the same logic and is present in the paper. However, the claim attributes this to 'Lakens et al., replicated across multiple fields' — the actual authors are Pawel, Heyard, Micheloud, and Held (University of Zurich). Lakens is cited within that paper for equivalence testing work but is not the author. The statistical substance is correct; the author attribution is wrong.

---

### [key: replication-null-not-confirmation]
- evidence: empirical
- confidence: low
- group: null-result-interpretation
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11090505/, https://elifesciences.org/articles/92311, https://arxiv.org/pdf/2305.04587

**Claim:** Mathur and VanderWeele (eLife, 2024; PMC11090505) showed empirically that when two studies both yield p>0.05 for the same hypothesis, that joint outcome does not constitute evidence of absence — 'replication success' via shared non-significance can be achieved virtually always with small enough samples. The mechanism: non-significance is a non-result; two non-results do not compound into a positive result. Scope: applies specifically to the common practice of treating replicated null findings as converging evidence; does not hold under Bayesian evidence accumulation frameworks where each study contributes likelihood mass. Kit-maker implication: when a kit aggregates findings across sources, it must not treat 'both studies non-significant' as a confirmation pathway; a separate equivalence-test or Bayes-factor track is needed.

**Verify note:** PMC11090505 / eLife 92311 confirmed. The argument (two non-significant results do not constitute evidence of absence) is confirmed in the paper. However, the claim attributes this to 'Mathur and VanderWeele (eLife, 2024; PMC11090505)' — this is incorrect. The paper at those identifiers is by Pawel, Heyard, Micheloud, and Held. Mathur and VanderWeele are the authors of the publication-bias meta-meta-analysis (PMC7954980), a completely different paper also cited in this batch. The third source (arxiv 2305.04587) returned binary PDF content — content unverified. The statistical argument is sound; the author attribution is a citable error that conflates two separate research teams.

---

### [key: publication-bias-3x-positive-results]
- evidence: empirical
- confidence: medium
- group: publication-bias
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2518111/, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3702538/, https://pmc.ncbi.nlm.nih.gov/articles/PMC7954980/

**Claim:** Empirical synthesis (Dickersin et al., Song et al., updated Cochrane review PMC2518111) found that studies with statistically significant results are approximately 3 times more likely to be published than studies with null results. The mechanism: researchers and journals both select for significance; authors self-censor submissions they predict will be rejected; editors and reviewers interpret non-significant findings as inconclusive. Scope: the 3x figure comes from clinical trials and biomedical fields; a more recent meta-meta-analysis found only a 1.17x ratio across all disciplines with wide CIs, suggesting the bias is domain-dependent. Kit-maker implication: any evidence-retrieval mechanism that queries only published literature is sampling a biased corpus; the kit must explicitly flag that null-result density in retrieved evidence is structurally underrepresented by an estimated factor of 2-3x in high-stakes biomedical domains.

**Verify note:** PMC2518111 (Dwan et al. 2008), PMC3702538 (Dwan et al. 2013), and PMC7954980 (Mathur and VanderWeele) all confirmed. The 3x figure is an approximation of a range — Dwan et al. report odds ratios spanning 2.32 to 12.30 across cohorts, not a clean 3x ratio. The claim accurately counterbalances this with the Mathur and VanderWeele 1.17x finding (95% CI: 0.93-1.47) and correctly notes domain-dependence. The mechanism description is consistent with the evidence. The 3x framing is defensible as a rough summary but overprecises the underlying range.

---

### [key: outcome-reporting-bias-40-62pct]
- evidence: empirical
- confidence: high
- group: publication-bias
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2518111/, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3702538/

**Claim:** A systematic empirical review (Chan et al., replicated across multiple cohort studies of registered vs. published trials) found that 40-62% of published studies had at least one primary outcome that was changed, introduced, or omitted when compared to the pre-registered protocol. The mechanism: outcome reporting bias (ORB) is distinct from full-study non-publication — researchers selectively suppress non-significant outcomes within a published paper while promoting significant ones. Scope: quantified in clinical trials with accessible protocols; the rate in observational or non-registered research is unknown but presumed higher. Kit-maker implication: a claim-extraction mechanism that reads only the abstract or conclusion section will miss suppressed null outcomes; full-text extraction with protocol-comparison capability is the only defense, and the kit must surface 'no protocol comparison available' as a data quality flag.

**Verify note:** PMC3702538 (Dwan et al. 2013) confirmed. The 40-62% figure is confirmed verbatim: the paper states '40-62% of studies had at least one primary outcome that was changed, introduced, or omitted.' The mechanism (ORB as within-paper selective suppression, distinct from non-publication) accurately describes the paper's contribution. Scope limitations (clinical trials with accessible protocols, rate unknown for non-registered research) are accurately stated. The finding is replicated by Chan et al. 2004 (JAMA), Kirkham et al. 2010, and the ORBIT project. The most accurately reported claim in this batch.

---

### [key: cochrane-positive-findings-27pct-overrepresented]
- evidence: empirical
- confidence: low
- group: publication-bias
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2518111/, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6461282/

**Claim:** Analysis of the Cochrane Library (largest systematic review repository) found that statistically positive findings are 27% more likely to be included in meta-analyses of efficacy than other findings. The mechanism: meta-analysts face the same selection pressures as primary-study researchers — they preferentially include studies that exist in the published literature (which is itself biased toward positive results), compounding the initial publication bias. Scope: measured in Cochrane efficacy reviews; the 27% figure may not generalize to harm/safety reviews where null findings are more publishable. Kit-maker implication: when a kit synthesizes across multiple reviews rather than primary studies, it inherits compounded bias; the kit's synthesis layer must apply a discount factor to pooled effect estimates in efficacy domains.

**Verify note:** The 27% figure is not supported by the cited sources. PMC2518111 (Dwan et al. 2008, PLoS One) is a systematic review of 16 inception cohort studies on publication and outcome reporting bias in RCTs. It reports odds ratios of 2.2–4.7 for complete reporting of significant outcomes — not a 27% overrepresentation figure, and not specifically about inclusion in Cochrane meta-analyses. PMC6461282 (van Aert et al., Tilburg group) is a meta-meta-analysis of 732 homogeneous subsets across 83 psychology meta-analyses and 499 Cochrane reviews; it found only 18.9% of primary Cochrane effect sizes were statistically significant, detected publication bias in only 5–13% of subsets, and found minimal effect size overestimation — results that arguably contradict the claim rather than support it. Neither source contains the 27% figure. The mechanism described (compounding bias through selective inclusion) is plausible and documented in the literature generally, but the specific quantification cited here has no source support in the two papers listed.

---

### [key: file-drawer-rosenthal-fail-safe-n]
- evidence: empirical
- confidence: medium
- group: publication-bias
- sources: https://www.researchgate.net/publication/232502317_The_file_drawer_problem_and_tolerance_for_null_results, https://www.sciencedirect.com/topics/psychology/file-drawer-problem

**Claim:** Rosenthal (1979, Psychological Bulletin) introduced the 'file drawer problem' and the Fail-Safe N statistic: the number of unpublished null studies required to render a significant meta-analytic result non-significant. His rule-of-thumb: a result is 'robust' if fail-safe N exceeds 5K+10 (where K = number of published studies). Bradley and Gupta (1997) showed empirically that omitting as few as 11.51% of primary studies due to file-drawer effects is sufficient to materially exaggerate effect size in a meta-analysis. Mechanism: selective exclusion of null results shifts the distribution of included effect sizes upward. Scope: Fail-Safe N has been criticized for assuming all missing studies have exactly null results; Trim-and-Fill and PET-PEESE are now preferred. Kit-maker implication: any kit that presents pooled effect estimates should compute and display fail-safe N as a robustness signal, while documenting that the 5K+10 threshold assumes zero-effect missing studies.

**Verify note:** The Rosenthal 1979 Psychological Bulletin paper on the file drawer problem and Fail-Safe N is a well-established, real citation that is widely cited and correct in its attribution. The 5K+10 rule-of-thumb is accurately attributed to Rosenthal. The ResearchGate link returned HTTP 403 and could not be verified directly. The ScienceDirect 'topics' page also returned 403. The Bradley and Gupta 1997 claim — that omitting as few as 11.51% of primary studies is sufficient to materially exaggerate effect size — could not be verified from the cited sources (neither was accessible). The 11.51% threshold is a very specific figure that merits direct verification; it is plausible given the general literature on publication bias but unconfirmed here. The claim that Trim-and-Fill and PET-PEESE are now preferred over Fail-Safe N is accurate and widely documented. Confidence is medium rather than high because: (a) the two cited sources were inaccessible, (b) the Bradley and Gupta 11.51% figure is specific and unverified, and (c) the Rosenthal formula is correctly described but the broader framing leans on unverified secondary sources.

---

### [key: null-taxonomy-nibs-prior-expectations]
- evidence: empirical
- confidence: medium
- group: null-result-interpretation
- sources: https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2018.00915/full

**Claim:** A 2018 Frontiers in Neuroscience paper proposed a formal taxonomy for null results in non-invasive brain stimulation (NIBS) studies, categorizing them by prior-expectation strength and experimental design quality. The taxonomy distinguishes: (a) expected-null (strong theory predicts no effect, well-powered study confirms it — this IS evidence of absence), (b) unexpected-null (theory predicts an effect but underpowered study finds none — this is ambiguous), and (c) design-confounded-null (flawed methodology undermines any interpretation). Mechanism: the interpretive weight of a null finding is conditional on prior probability and methodological adequacy, not on the statistical test alone. Scope: developed for neurostimulation but the logical framework generalizes to any domain with formalized prior beliefs. Kit-maker implication: the kit's claim-classification layer should not treat all null results identically; it needs a prior-strength field and a methodology-quality field to correctly categorize whether a null is informative or ambiguous.

**Verify note:** The source exists and is real: de Graaf and Sack (2018), Frontiers in Neuroscience, doi 10.3389/fnins.2018.00915. The paper does propose a taxonomy for null results in NIBS studies organized along two orthogonal dimensions: a gradient of interpretability (Levels A, B, C based on methodological quality — localization and neural efficacy checks) and a gradient of surprise (replication nulls, exploration nulls, hypothesized nulls). The claim's three-category description (expected-null, unexpected-null, design-confounded-null) is a reasonable paraphrase of the paper's framework but does not map exactly onto the paper's Level A/B/C + surprise-gradient structure. The claim conflates two orthogonal dimensions into a single three-category taxonomy, which is a modest distortion. The paper is an opinion/theory paper with no primary empirical data or participant n-size — correctly noted in the claim as a framework paper. The generalization claim (that the framework applies to any domain with formalized prior beliefs) is the authors' own stated claim and is reasonable. Overall the source is real, the taxonomy is real, but the claim's description slightly misrepresents the two-dimensional structure as a single three-category taxonomy.

---

### [key: grey-literature-four-strategy-search]
- evidence: empirical
- confidence: medium
- group: grey-literature-retrieval
- sources: https://www.sciencedirect.com/science/article/pii/S0895435626000971, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4619264/, https://pubmed.ncbi.nlm.nih.gov/29266844/

**Claim:** A 2026 ScienceDirect epidemiological study on grey literature inclusion in systematic reviews found that a four-strategy search plan — (1) grey literature databases, (2) customized Google search engines, (3) targeted organizational websites, and (4) expert consultation — materially increases null-result retrieval compared to database-only searches. Earlier work (PMC4619264) showed that grey literature searches in one case study captured guidelines entirely absent from formal databases. Mechanism: unpublished and non-indexed studies disproportionately contain null and inconclusive findings (researchers and institutions release them as technical reports rather than journal submissions); database-only search therefore systematically excludes this population. Scope: applies when the research domain has active grey literature producers (government agencies, NGOs, industry); less applicable in fields where nearly all work is journal-published. Kit-maker implication: the kit's evidence-retrieval mechanism must include at least one grey-literature search leg (trial registries, preprint servers, institutional repositories) and must report coverage separately from peer-reviewed retrieval.

**Verify note:** The ScienceDirect source (S0895435626000971) returned HTTP 403 and could not be directly verified, so the '2026 epidemiological study' framing cannot be confirmed or denied. PMC4619264 (Godin et al., case study of grey literature for school-based breakfast program guidelines in Canada) is verified and real. It does demonstrate that a four-strategy search approach (grey literature databases, custom Google searches, targeted websites, expert consultation) captured materials that database-only searches would have missed — specifically that targeted web searches alone captured all but one included document. However, the claim says PMC4619264 showed 'guidelines entirely absent from formal databases,' which is accurate for that specific case study context. The PubMed 29266844 source (Paez narrative review on grey literature in systematic reviews) is verified and real; it is a general narrative review, not the specific study the claim attributes findings to. The overall direction of the claim (grey literature disproportionately contains null results; four-strategy search materially increases null-result retrieval) is supported by the grey literature methodology literature generally, but the primary attribution to a '2026 ScienceDirect epidemiological study' cannot be verified because that source was inaccessible.

---

### [key: grey-literature-non-english-contribution]
- evidence: empirical
- confidence: low
- group: grey-literature-retrieval
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5395863/

**Claim:** A cross-sectional meta-analytic study (PMC5395863) examined 60 child-relevant Cochrane reviews and found that non-English reports, unpublished studies, and dissertations together contributed meaningfully to review conclusions in a subset of cases, and their exclusion would have changed the direction or magnitude of pooled estimates in some reviews. The mechanism: null results from non-English language and grey sources are structurally absent from English-language database retrieval, creating a geographic and publication-type double filter. Scope: most pronounced in topic areas where non-Anglophone research is substantively active (public health, nutrition, education); less relevant in fields dominated by English-language publication norms. Kit-maker implication: a kit that retrieves only English-language indexed sources should surface a 'language/grey bias warning' for any synthesis it produces.

**Verify note:** The source PMC5395863 (Hartling et al.) is verified and real, but the claim materially misrepresents its findings. The paper examined 129 Cochrane systematic reviews (not 60 as claimed). More critically, the paper's actual conclusion is the opposite of the claim's framing: the authors found that non-English studies, unpublished studies, and dissertations 'represented a small proportion of included studies and rarely impacted the results and conclusions of the review.' Only four reviews showed substantial changes when these were excluded. The paper's conclusion supports limiting grey/non-English searches in the interests of efficiency — exactly the opposite of what the claim implies. The claim says these sources 'contributed meaningfully to review conclusions in a subset of cases' and their exclusion 'would have changed the direction or magnitude of pooled estimates in some reviews,' which is technically true for the four exceptions — but presenting this without the paper's primary conclusion (rarely impacted) is misleading extrapolation. N-size discrepancy (60 vs 129) and inverted framing together constitute a material misrepresentation.

---

### [key: automated-gap-detection-svm-gapscreener]
- evidence: empirical
- confidence: low
- group: automated-gap-detection
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2387176/, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12704037/, https://biorxiv.org/content/10.1101/2025.03.05.641607.full.pdf

**Claim:** GAPscreener (PMC2387176) demonstrated that a Support Vector Machine trained on PubMed abstract text can automate the screening step in identifying human genetic association literature, reducing manual screening time significantly. A 2025 extension (OmixLitMiner 2, PMC12704037) used guided literature mining to automatically categorize marker candidates across omics studies, with the Isolation Forest algorithm flagging abstracts with atypical content as candidate gap-indicators (papers that resist standard categorization often represent findings at domain boundaries). Mechanism: null results and boundary findings share the property of not fitting dominant narrative clusters, making outlier detection a proxy for gap identification. Scope: validated in biomedical/omics domains; transferability to social science or humanities literatures is unverified. Kit-maker implication: a kit's gap-detection mechanism could use embedding-based outlier detection on retrieved abstract clusters to surface candidate null or boundary findings that cluster separately from the mainstream evidence — this is computationally feasible with current LLM embedding APIs.

**Verify note:** GAPscreener (PMC2387176, Yu et al. 2008, BMC Bioinformatics) is verified and real. It uses SVM trained on PubMed abstracts to screen genetic association literature, achieving 97.5% recall and reducing manual screening by ~90%. This part of the claim is accurate. However, the OmixLitMiner 2 component (PMC12704037) is verified but contradicts the claim: OLM2 does NOT use an Isolation Forest algorithm for flagging atypical abstracts. The paper makes no mention of Isolation Forest. OLM2 uses UniProt synonym retrieval and PubTator 3.0 for scoring and categorizing proteins by publication availability. The biorxiv preprint (2025.03.05.641607) was inaccessible (403 error), so that supporting source cannot be confirmed. The mechanism leap — that 'null results and boundary findings share the property of not fitting dominant narrative clusters, making outlier detection a proxy for gap identification' — is an inference not demonstrated by either cited paper. The kit-maker implication about embedding-based outlier detection is speculative extrapolation beyond what either source demonstrates. Confidence is low due to: (a) false attribution of Isolation Forest to OLM2, (b) inaccessible preprint, (c) mechanism is inferred not demonstrated.

---

### [key: equivalence-testing-as-positive-null-evidence]
- evidence: consensus
- group: null-result-interpretation
- sources: https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2018.00915/full, https://pmc.ncbi.nlm.nih.gov/articles/PMC11090505/

**Claim:** The Two One-Sided Tests (TOST) equivalence testing framework (Lakens, 2017; widely adopted post-2015 replication crisis) allows a researcher to produce a positive claim from a null finding: 'the effect is smaller than the smallest effect of interest (SESOI).' Mechanism: by pre-specifying an equivalence margin, TOST converts a null NHST result into evidence that the true effect lies within a practically inconsequential range, provided the study has adequate power for the equivalence test. Scope: requires pre-specification of the SESOI, which is often contested; does not apply retroactively to underpowered studies. Kit-maker implication: a kit must distinguish between 'null by NHST (ambiguous)' and 'equivalent by TOST (positive null evidence)' in its claim-type taxonomy; treating both as the same evidence class loses the only rigorous pathway for converting an absence of a large effect into affirmative knowledge.

---

## Null results
- Query 5 (automated gap detection) returned mostly generic AI-tool marketing content and only one substantively usable empirical paper (GAPscreener); the computational null-detection literature outside biomedical omics is sparse and unvalidated

## Additional Claims — Gap-fill 2026-06-30 (adversarial + grey-lit queries)

### [key: grey-lit-search-nonreplicability-url-decay]
- evidence: consensus
- group: grey-literature-search
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC4619264/
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Grey literature searches are structurally non-replicable because documents published on the internet disappear over time due to URL decay, domain changes, and lack of archiving — meaning that null-result evidence captured from grey literature at one point cannot be verified or updated by later reviewers. Mechanism: no centralised indexing and no archiving obligation for grey literature means the evidence base degrades. Scope: any systematic review that includes grey literature web sources. Implication for kit design: a null-result archive that relies on grey literature URLs without snapshot capture will silently lose evidence over time; kit must either snapshot sources or prefer stable-DOI sources.

---

### [key: grey-lit-no-cochrane-gold-standard]
- evidence: consensus
- group: grey-literature-search
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC4619264/
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** There is no gold standard for rigorous systematic grey literature search methods — the Cochrane Handbook provides limited and unspecific guidance for grey literature searching. Mechanism: grey literature's diverse formats and non-centralised nature resist the standardisation that structured database searches achieve. Implication for kit design: any kit pipeline that claims to systematically capture null results from grey literature must define its own reproducible grey-literature protocol, as no established standard exists to defer to.

---

### [key: grey-lit-inclusion-effect-size-impact-null]
- evidence: empirical
- confidence: high
- group: publication-bias
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5404772/
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** A systematic review of 187 meta-analyses (1,617 primary studies) found that published data showed larger treatment effects than unpublished or grey literature data (Ratio of ORs = 1.15, 95% CI 1.04–1.28), yet in most reviews the pooled effect estimate was not significantly changed by including grey literature — only 3 of 41 meta-analyses showed significance affected by grey literature removal. Mechanism: grey literature does contain systematically smaller effects (consistent with publication bias), but the bias is small enough that adding grey literature rarely reverses a review's conclusion. Scope: medicine and health sciences. Implication for kit design: grey literature inclusion primarily tightens estimates rather than overturning them — calibrate user expectations accordingly.

**Verify note:** All figures confirmed against PMC5404772. Ratio of ORs = 1.15 (95% CI 1.04–1.28), 3 of 41 meta-analyses, 187 meta-analyses / 1,617 primary studies all match the source exactly.

---

## Null results — Gap-fill 2026-06-30
- site:arxiv.org null result publication bias grey literature systematic search AI empirical: arXiv domain filter produced no papers with specific empirical quantifications about null-result rates or AI-augmented grey literature search; results were general SLR methodology papers without null-result-specific data new to this archive.

## New angles surfaced
- Equivalence testing adoption rates in practitioner fields — how widely has TOST actually displaced NHST in applied research, and what does that mean for the proportion of 'positive null' claims a kit will encounter in the wild?
- Preregistration as a null-result surfacing mechanism — does mandatory pre-registration (e.g., AsPredicted, OSF) empirically increase the publication rate of null findings, and by how much?
- Registered Reports journal format — outcome-blind peer review accepts papers before results are known; this is the structural fix to publication bias; what is adoption rate and evidence of effect?
- LLM-based claim extraction accuracy on null vs. positive findings — do current LLMs systematically under-extract or misclassify null findings when parsing abstracts, introducing a new automated layer of absence-suppression?

