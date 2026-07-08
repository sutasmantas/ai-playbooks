# Research Archive: Meta-research methodology — how to do research well; can the methodology itself be improved?

## Saturation log
- Query 1: "PRISMA reporting systematic reviews Moher 2009 research methodology checklist standards" — 3 new keys
- Query 2: "meta-research Ioannidis improving research quality research on research 2014 PLOS Medicine" — 3 new keys
- Query 3: "systematic review methodology failures limitations biases validity threats critique" — 3 new keys
- Query 4: "evidence-based practice research methodology practitioners applied guide" — 2 new keys
- Query 5: "automated systematic review NLP information retrieval AI-assisted meta-analysis" — 2 new keys
- Query 6: "PRISMA 2020 adherence compliance rate systematic review quality improvement empirical study" — 0 new keys
- Query 7: "Ioannidis why most published research findings are false statistical power bias mechanisms" — 0 new keys
- Query 8: "publication bias funnel plot systematic review effect size inflation meta-analysis methods" — 0 new keys
- Query 9: "RobotReviewer automated bias detection Cochrane NLP accuracy recall precision" — 0 new keys
- Query 10: "GRADE evidence quality certainty framework systematic review applicability limitations scope" — 0 new keys
- Query 11: "systematic review search strategy completeness sensitivity specificity grey literature bias" — 0 new keys
- Saturated: YES

---

## Claims (13)

### [key: meta-research-five-domains]
- evidence: empirical
- confidence: high
- group: meta-research-scope
- sources: https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1002264, https://pubmed.ncbi.nlm.nih.gov/29534060/

**Claim:** Ioannidis, Fanelli, Dunne & Goodman (PLoS Biology, 2015) defined meta-research as a formal discipline organized around five evaluable domains: methods, reporting, reproducibility, evaluation, and incentives. The mechanism is that each domain maps to a distinct failure pathway — poor methods produce false positives, poor reporting blocks replication, misaligned incentives produce selective publication — allowing targeted interventions rather than omnibus 'improve science' appeals. Scope: framework developed in biomedical science; generalizes to any field with peer-reviewed outputs; does not directly apply to practitioner-generated or grey literature. For kit-maker design: research quality checks should be organized along these five axes rather than a single quality score, so the kit's critique layer can assign a finding to the correct failure mechanism and propose a domain-specific fix.

**Verify note:** The primary source (Ioannidis, Fanelli, Dunne and Goodman, PLoS Biology 2015) is verified and real. The five domains — methods, reporting, reproducibility, evaluation, and incentives — are confirmed in the paper and correspond to 'how to perform, communicate, verify, evaluate, and reward research.' The PubMed 29534060 source is a separate 2018 Ioannidis paper in PLoS Biology that reiterates the same five-domain framing for meta-research ('methods, reporting, reproducibility, evaluation, and incentives'). Both sources exist and support the claim. The description of how each domain maps to a distinct failure pathway is a reasonable inference from the paper's organization, though the paper itself does not state these exact mappings as explicitly as the claim implies. The scope caveat (biomedical science origin, generalizes to peer-reviewed fields, does not directly apply to practitioner-generated literature) is a reasonable characterization. The kit-maker implication is a design extrapolation, not a claim about what the paper says. Overall the source attribution, authorship, journal, and five-domain content are all verified.

---

### [key: prisma-checklist-structure]
- evidence: empirical
- confidence: medium
- group: reporting-standards
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8005924/, https://www.sciencedirect.com/science/article/abs/pii/S0895435609001796

**Claim:** The PRISMA 2009 statement (Moher et al., 27-item checklist + flow diagram) reduces omission errors in systematic review reporting by making each decision point explicit and auditable. Mechanism: mandatory declarative reporting — authors must state what they did at each stage (identification, screening, eligibility, inclusion), forcing legibility of decisions that would otherwise be tacit or collapsed. Scope: applies to intervention-focused systematic reviews and meta-analyses; less applicable to scoping or rapid reviews that deliberately sacrifice exhaustiveness for speed. Kit-maker implication: any research pipeline should encode a checklist-gate structure — not as bureaucratic overhead but as a mechanism for surfacing hidden assumptions at each stage transition. A kit that skips declarative logging of decisions at stage boundaries will accumulate invisible bias.

**Verify note:** Source 1 (PMC8005924) is confirmed as the PRISMA 2020 statement (Page et al. 2021, BMJ), not PRISMA 2009. The claim attributes the '27-item checklist + flow diagram' to 'PRISMA 2009 (Moher et al.)' and cites the PRISMA 2020 paper — a version mismatch. PRISMA 2009 did have a 27-item checklist, and PRISMA 2020 also has 27 items but they are different items. Source 2 (ScienceDirect S0895435609001796) is the correct Moher 2009 paper but returned 403, unverifiable here. The claim's mechanistic assertion — that mandatory declarative reporting surfaces tacit decisions — is a reasonable methodological argument but is not empirically tested in either cited paper; both are guideline development documents, not efficacy studies. The scope restriction (intervention reviews vs. scoping reviews) is accurate per PRISMA documentation. Verdict: MEDIUM — the core mechanism claim is plausible and the PRISMA framework description is approximately correct, but source 1 is the wrong PRISMA version, and neither source empirically validates the 'reduces omission errors' claim.

---

### [key: prisma-adherence-gap]
- evidence: empirical
- confidence: medium
- group: reporting-standards
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11795886/

**Claim:** A 2024 meta-epidemiological study of 222 systematic reviews found that only 30.18% used PRISMA 2020, and of those, none adhered completely — mean adherence was 42.64%. The worst-performing items were certainty assessment (7.46% adherence) and search strategy reporting (10.45%). Mechanism: adoption of a checklist without institutional enforcement or mandatory journal policy creates a compliance ceiling; authors default to existing habits unless the checklist is embedded in submission workflow. Scope: this gap is most acute in lower-impact-factor journals and non-registered reviews; protocol-registered and GRADE-using reviews showed significantly higher adherence. Kit-maker implication: a checklist embedded only as a reference document (not as a gating step in the pipeline) will be selectively bypassed on precisely the hardest items — those requiring the most work (certainty assessment, full search logs). The kit should make skipping these items visibly costly, not just optional.

**Verify note:** Source (PMC11795886) is confirmed: 2024/2025 meta-epidemiological study, 222 systematic reviews, 30.18% used PRISMA 2020, zero complete adherence, mean adherence 42.64%. These headline figures match the claim exactly. However, the claim misrepresents the worst-performing items. The actual five worst items are: protocol amendments (1.49%), certainty assessment (7.46%), reporting bias assessment (8.96%), excluded studies characteristics (10.45%), and search strategy (11.94%). The claim states the worst were 'certainty assessment (7.46%) and search strategy reporting (10.45%)' — omitting protocol amendments (1.49%) and reporting bias assessment (8.96%) which ranked worse. This selective omission reorders the severity hierarchy. The broader conclusion (checklist without enforcement creates compliance ceiling) is supported by the data. The scope qualifier about lower-impact journals and non-registered reviews is stated in the claim but not verifiable from the abstract alone. Verdict: MEDIUM — core statistics are real, but the 'worst items' framing is selectively inaccurate, omitting two items that ranked worse than those cited.

---

### [key: ioannidis-false-findings-framework]
- evidence: empirical
- confidence: low
- group: research-quality
- sources: https://journals.plos.org/plosmedicine/article?id=10.1371%2Fjournal.pmed.1001747

**Claim:** Ioannidis (2005, PLOS Medicine) demonstrated via formal probabilistic modeling that when prior probability of a hypothesis being true is low (as in exploratory research), statistical power is moderate (~0.80), and researcher bias (u) is nonzero, the Positive Predictive Value (PPV) of a published finding drops well below 0.50. With a 10% prior probability, 80% power, and modest bias, PPV ≈ 0.20. Mechanism: the PPV formula (PPV = (1-β)R / [(1-β)R + α]) shows that false discovery rate is dominated by the ratio of true-to-tested hypotheses, not by p-value threshold alone — low-prior domains are structurally prone to false positives regardless of individual study quality. Scope: the argument is theoretical/probabilistic, not empirical — it models conditions rather than measuring them directly; applies most strongly to hot research areas with many simultaneous labs and small samples. Kit-maker implication: a research kit that treats every search result as equally credible ignores prior probability — claims from high-discovery-rate, low-powered domains (early AI hype, novel mechanism claims) should be discounted structurally. Build prior-probability tagging into claim triage.

**Verify note:** The claim describes the 2005 Ioannidis paper 'Why Most Published Research Findings Are False' (pmed.0020124) — including the PPV formula, prior probability example, and the specific PPV approximately 0.20 under stated conditions — but cites the URL for the 2014 paper 'How to Make More Published Research True' (pmed.1001747). These are different papers with different arguments. The 2005 PPV framework and formula are confirmed real (verified via direct fetch of pmed.0020124). The specific PPV figure of approximately 0.20 with 10% prior, 80% power, and modest bias is consistent with the 2005 paper's worked examples. However, the claim also slightly misquotes the formula: the paper gives PPV = (1-beta)R / [(1-beta)R + alpha] but the claim adds a bias component without noting it. The 2005 paper does include bias in a more complex version of the formula. Verdict: LOW — the mechanistic content is from the correct 2005 paper and is accurately described, but the cited URL points to the wrong paper (2014). A source citation pointing to a different paper than the one being described is a substantive error, not a typo.

---

### [key: publication-bias-effect-size-inflation]
- evidence: empirical
- confidence: medium
- group: bias-detection
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC10933152/, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1855315/

**Claim:** Publication bias — the preferential publication of statistically significant positive results — systematically inflates effect sizes in meta-analyses. Funnel plot asymmetry is the standard diagnostic: in an unbiased field, effect estimates should scatter symmetrically around the true value by precision; asymmetry indicates that small-sample negative results have been suppressed. Trim-and-fill and Egger's test are correction methods, but both require at least 25-30 studies to achieve moderate statistical power and can miss non-random patterns. Mechanism: smaller studies are only published when they produce large effects, so the published record oversamples extreme outcomes from low-powered studies. Scope: funnel plot methods are unreliable when heterogeneity is high (different populations or interventions), because asymmetry from heterogeneity looks identical to asymmetry from bias. Kit-maker implication: when synthesizing evidence across sources, a kit should flag asymmetric coverage (many positive, few null/negative findings on a topic) as a structural red flag, not merely note it. Claims supported only by a set of uniformly positive small studies should be down-weighted automatically.

**Verify note:** Source 1 (PMC10933152, 2024) is a paper on funnel plot misuse in sport and exercise medicine. It confirms funnel asymmetry as a standard diagnostic and the limitations of Egger's test and trim-and-fill, but its main message is cautionary — it warns that asymmetry does not reliably indicate publication bias and that these tests are routinely misused. This partially undercuts the confident framing in the claim. The '25-30 studies' threshold for adequate power is a commonly cited rule of thumb not explicitly attributed to this source. Source 2 (PMC1855315, 2007) is a study of 21 WHO reproductive health meta-analyses finding 85.7% showed funnel asymmetry — this supports the prevalence claim but is a single small-domain study (21 reviews), not a general demonstration of systematic effect-size inflation. The core mechanism (small studies published only when large effects, oversampling extremes) is textbook publication bias and is accurate. The heterogeneity confound caveat is also accurately described and confirmed by source 1. Verdict: MEDIUM — the core claims are real and well-established, but source 1 actually complicates the claim's confident framing rather than simply supporting it, and source 2 is a small domain-specific study.

---

### [key: systematic-review-77-error-types]
- evidence: empirical
- confidence: medium
- group: bias-detection
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12309345/

**Claim:** A comprehensive taxonomy of systematic review errors (PMC 2025) identified 77 distinct error types, concentrated in three stages: retrieval bias, selection bias, and data extraction bias. Most errors cluster at the selection and publication stages, not at analysis. Mechanism: human judgment enters most heavily at screening and inclusion/exclusion — these decisions are partially tacit, hard to audit, and vulnerable to confirmation bias and fatigue. Scope: applies to manually conducted reviews; AI-assisted screening reduces but does not eliminate selection errors, particularly for edge cases. Kit-maker implication: a research agent kit must implement dual-pass verification at the selection stage — single-reviewer screening is the documented failure mode. The kit's most expensive investment should be in selection-stage checks, not analysis-stage polish.

**Verify note:** Source (PMC12309345, 2025) is confirmed: systematic review identifying 77 error types in systematic reviews. The paper exists and the count is accurate. However, the claim asserts errors 'cluster at the selection and publication stages, not at analysis' and that '46 errors are between-studies (including publication bias) and 17 are within-studies.' The actual paper reports 46 between-study errors and 17 within-study errors, but the claim's characterization of where errors 'cluster' as 'retrieval bias, selection bias, and data extraction bias' is an interpretation not directly verifiable from the abstract and may compress the actual taxonomy. The AI-assisted screening qualifier is stated in the claim but not verifiable from the fetched content. The claim's kit implication ('dual-pass verification at selection stage') is reasonable inference but goes beyond what the source directly recommends. Verdict: MEDIUM — the 77-type taxonomy and the 2025 paper are real, but the specific cluster characterization and the kit implication are extrapolations.

---

### [key: search-sensitivity-over-specificity]
- evidence: consensus
- group: search-methodology
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6148622/, https://guides.mclibrary.duke.edu/sysreview/search

**Claim:** The canonical guidance for systematic review search strategy (Lefebvre, Cochrane Handbook; Sampson et al. 2008) establishes that sensitivity should be maximized over specificity: a search that misses relevant studies introduces unrecoverable bias, whereas including irrelevant studies only creates manageable screening burden. MeSH/controlled vocabulary terms improve recall versus free-text alone. Mechanism: false negatives in search are invisible in the final product — there is no downstream signal that a study was missed — whereas false positives are caught at screening. Scope: this principle applies to gold-standard systematic reviews; for rapid or scoping reviews with explicit time constraints, a sensitivity-specificity tradeoff is acceptable if stated explicitly. Kit-maker implication: a kit that runs narrow queries to reduce noise is making the wrong tradeoff. The kit's search stage should bias toward over-retrieval and push work to the triage/screening stage where errors are recoverable.

---

### [key: grey-literature-publication-bias-mitigation]
- evidence: consensus
- group: search-methodology
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4619264/

**Claim:** Excluding grey literature (conference papers, preprints, dissertations, technical reports) from a systematic review predictably inflates the pooled effect size because grey literature contains proportionally more null and negative findings. The mechanism is the same as publication bias: peer-reviewed journals preferentially accept positive results, so the academic literature systematically over-represents them; grey literature corrects this skew. Scope: grey literature inclusion increases search burden significantly and introduces quality heterogeneity — the tradeoff is manageable when explicit inclusion/exclusion criteria are applied to grey sources. Kit-maker implication: a research kit that queries only formal published literature (PubMed, ACM, IEEE) while ignoring GitHub repos, preprint servers (arXiv, bioRxiv), and technical reports will produce a systematically optimistic view of its domain. Include grey source channels as a structural pipeline requirement.

---

### [key: grade-certainty-four-level]
- evidence: empirical
- confidence: medium
- group: evidence-grading
- sources: https://www.bjanaesthesia.org.uk/article/S0007-0912(19)30643-9/fulltext, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6350753/

**Claim:** The GRADE framework (Guyatt et al., BMJ 2008 series) operationalizes evidence certainty as four levels (high, moderate, low, very low) per outcome, using five downgrade criteria: risk of bias, inconsistency, indirectness, imprecision, and publication bias. RCTs start at high certainty; observational studies start at low. Mechanism: by forcing separate certainty ratings per outcome, GRADE prevents a single high-quality study from inflating confidence in adjacent outcomes — directness (does the study population match the target population?) is evaluated independently of internal validity. Scope: GRADE is optimized for clinical intervention questions; applying it to AI/software research requires adapting the 'indirectness' criterion to address distribution shift and deployment-context mismatch. Kit-maker implication: a research kit should rate claims per-outcome, not per-source — a strong paper may produce high-certainty evidence on one dimension and low-certainty evidence on another. Claim extraction should be outcome-tagged, not source-tagged.

**Verify note:** Source 1 (BJA, S0007-0912(19)30643-9) returned 403, unverifiable. Source 2 (PMC6350753, 2019, BMJ Global Health) is confirmed and accurately describes GRADE: four certainty levels (high/moderate/low/very low), five downgrade domains (risk of bias, inconsistency, indirectness, imprecision, publication bias), and RCTs starting at high certainty. The claim's attribution to 'Guyatt et al., BMJ 2008 series' is accurate for the original GRADE papers; the PMC source is a 2019 derivative paper that confirms the same framework. The claim's description of GRADE mechanics — per-outcome rating, directness evaluated independently of internal validity, RCTs starting high, observational studies starting low — is accurate and well-established. The adaptation suggestion for AI/software research ('distribution shift and deployment-context mismatch') is a reasonable extrapolation but is not in the cited sources. Verdict: MEDIUM — the GRADE framework description is accurate and the secondary source confirms it, but the primary source (BJA) could not be verified, and the AI-adaptation suggestion is extrapolation.

---

### [key: robotreviewer-nlp-bias-recall]
- evidence: empirical
- confidence: low
- group: ai-automation
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4713900/, https://abstracts.cochrane.org/2019-santiago/using-robotreviewer-assist-humans-conducting-risk-bias-assessments-randomized-user

**Claim:** RobotReviewer (Marshall et al., JAMIA 2016) demonstrated that NLP-based automated risk-of-bias assessment of RCTs achieved recall 0.90 (SD 0.14) and precision 0.87 on text highlight extraction, with human reviewers accepting 91% of ML judgments and 62% of text highlights without modification. Semi-automated assessment was faster than fully manual (755 vs. 824 seconds per paper). Mechanism: BERT-family models fine-tuned on Cochrane annotated data can learn to identify bias-relevant sentences (randomization, allocation concealment, blinding) because these concepts have consistent lexical signatures across clinical trial reports. Scope: performance degrades outside the clinical trial domain where bias reporting language is less standardized; recall on non-English papers and grey literature is untested. Kit-maker implication: NLP-assisted quality/bias screening is viable at recall >0.85 for structured document types with consistent vocabulary. For unstructured web sources or informal documents, the kit should default to rule-based heuristics rather than trained classifiers until domain-specific training data is available.

**Verify note:** Source 1 (PMC4713900) is confirmed as the RobotReviewer paper, but it was published in 2015 (Journal of the American Medical Informatics Association), not 2016 as the claim states — a minor error. Source 2 (Cochrane 2019 abstract) confirmed the specific metrics: recall 0.90, precision 0.87, 755 vs. 824 seconds, 91% judgment acceptance, 62% text highlight acceptance. These figures match the claim precisely. However, the claim's mechanistic description is critically wrong: it states 'BERT-family models fine-tuned on Cochrane annotated data' — but the 2015 paper uses Support Vector Machines (SVM), not BERT. BERT was not released until 2018. This is a substantive anachronism that misattributes the mechanism. The claim's scope note (performance degrades outside clinical trial domain) is reasonable. The kit implication is valid inference. Verdict: LOW — the performance metrics are accurate and the source exists, but the stated mechanism ('BERT-family models') is factually wrong for this paper. SVM, not BERT, is the actual method. A later RobotReviewer iteration may use BERT, but that is not this paper.

---

### [key: ai-slr-automation-state]
- evidence: empirical
- confidence: high
- group: ai-automation
- sources: https://link.springer.com/article/10.1007/s10462-024-10844-w, https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-019-1074-9

**Claim:** A 2024 Springer Artificial Intelligence Review comprehensive survey found that NLP and deep learning methods have been applied to all major SLR pipeline stages — search term generation, title/abstract screening, full-text eligibility, data extraction, and risk-of-bias assessment — with the greatest automation maturity at the screening stage and the least at data extraction and synthesis. Mechanism: screening is a binary classification task with large training sets (Cochrane has millions of labeled abstract pairs); extraction and synthesis require structured reading across multi-sentence contexts, which current models handle with lower reliability. Scope: automation gains are most pronounced for large review corpora (>500 screened studies); for small reviews, automation setup costs exceed savings. Kit-maker implication: a kit performing research synthesis should automate screening and deduplification (mature, high-ROI) and keep data extraction and synthesis human-in-the-loop or heavily verified (immature, high-error-rate). Do not over-automate the back-half of the pipeline.

**Verify note:** Source 1 (Springer 10462-024-10844-w, Artificial Intelligence Review 2024) is confirmed: 52-study survey, screening most mature (33 studies covering it), data extraction least mature (6 studies), risk-of-bias assessment minimal (2 studies). The claim's characterization of automation maturity — highest at screening, lowest at data extraction and synthesis — matches the source. Source 2 (BioMedCentral 2019) is confirmed as a 2019 commentary reaching the same conclusion (screening reasonably developed, data extraction 'in formative stages'). The caveat about small reviews (automation setup costs exceeding savings for under-500-study corpora) is a reasonable inference not directly verified from these sources but consistent with the literature. The kit implication — automate screening/dedup, keep data extraction human-in-loop — follows directly from the maturity findings. Verdict: HIGH — both sources exist, match the claims, are the correct study types and years, and the extrapolations are well-grounded.

---

### [key: evidence-based-practice-iowa-model]
- evidence: consensus
- group: evidence-based-practice
- sources: https://oxford-review.com/evidence-based-practice-essential-guide/

**Claim:** The Iowa Model of Evidence-Based Practice (2017 revision, University of Iowa) provides a decision-tree framework for practitioners to determine when evidence is sufficient to change practice versus when additional research is needed. Key node: if a 'sufficient' evidence base does not exist after piloting, the model loops back to research rather than forcing premature adoption. Mechanism: the model separates the trigger (problem- vs. knowledge-focused) from the evidence-sufficiency threshold, preventing the common practitioner failure mode of acting on weak evidence because it is conveniently available. Scope: designed for healthcare settings; applicable to any domain where an agent must decide whether to act on current evidence or seek more — directly analogous to a kit's decision to synthesize vs. flag a gap. Kit-maker implication: a research kit should implement an explicit evidence-sufficiency gate: is there enough, consistent, directly applicable evidence to generate a confident claim, or should this go into a 'research gap' queue? Acting on thin evidence without flagging uncertainty is the documented failure mode in EBP and equally relevant in AI-assisted research.

---

### [key: research-reproducibility-replication-crisis]
- evidence: empirical
- confidence: medium
- group: research-quality
- sources: https://journals.plos.org/plosmedicine/article?id=10.1371%2Fjournal.pmed.1001747

**Claim:** Ioannidis's 2014 PLOS Medicine paper 'How to Make More Published Research True' identified six correlated conditions that inflate false discovery rates: small study sizes, small effect sizes, many tested relationships, flexible study designs, financial conflicts of interest, and competitive research environments. Each condition multiplies the others. Mechanism: the interaction effects are nonlinear — a field with small n, many hypotheses tested, AND flexible analysis rules has combinatorially worse reliability than any single factor suggests. Scope: the analysis targets biomedical research specifically; the conditions have been partially validated in psychology (Open Science Collaboration 2015 replication study found ~36% of findings replicated) but vary by field. Kit-maker implication: when sourcing claims from fast-moving, competitive domains (early AI capabilities, novel agent architectures), apply a skepticism multiplier proportional to the number of Ioannidis risk factors present. High-citation early claims in hot topics are among the least reliable category.

**Verify note:** The cited URL (pmed.1001747) is confirmed as the 2014 Ioannidis paper 'How to Make More Published Research True' — the claim correctly identifies this as the 2014 paper, unlike the ioannidis-false-findings-framework claim which confuses the two. The 2014 paper's content is accurately described: it discusses conditions inflating false discovery rates and the perverse incentive structure. However, the claim specifies 'six correlated conditions' (small study sizes, small effect sizes, many tested relationships, flexible designs, financial conflicts, competitive environments) — the paper does discuss these factors but the claim of exactly 'six' as a numbered list may not reflect the paper's own taxonomy precisely; the paper is a qualitative argument, not a formal enumeration of six. The Open Science Collaboration 2015 figure is cited as '~36% of findings replicated' — the actual paper found approximately 39% replicated with p<0.05 (97 of 100 studies), so ~36% is close but slightly imprecise. The scope note (biomedical focus, partially validated in psychology) is accurate. Verdict: MEDIUM — the correct source is cited and accurately identified as 2014, the content is broadly correct, but the 'six conditions' framing may impose more structure than the original paper contains, and the OSC replication rate is slightly off.

---

## Null results
- evidence-based practice research methodology practitioners applied guide — yielded textbook/commercial results only; no empirical findings with effect sizes extractable; Iowa Model was the one usable claim

## New angles surfaced
- Replication crisis in AI/ML research specifically — do AI agent kit claims suffer the same false-positive inflation as biomedical claims, and can kit-design borrow Ioannidis's PPV framework for AI capability claims?
- Protocol pre-registration as a bias-prevention mechanism — PROSPERO and OSF pre-registration demonstrably reduces outcome-switching and HARKing; a kit could enforce pre-registration of its own research questions before running queries
- Living systematic reviews — continuously updated reviews (vs. point-in-time snapshots) are an emerging methodology with specific automation requirements; relevant to a kit that synthesizes evolving literatures like AI agent design

