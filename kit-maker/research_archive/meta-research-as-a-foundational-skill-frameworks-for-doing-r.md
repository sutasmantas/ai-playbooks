# Research Archive: Meta-research as a foundational skill — frameworks for doing research well across domains

## Saturation log
- Query 1: "Ioannidis meta-research research on research discipline 2015 PLoS Biology evidence quality" — 2 new keys
- Query 2: "meta-research methodology systematic review research quality framework improvement" — 2 new keys
- Query 3: "research quality failures meta-research evidence base critique empirical reproducibility bias" — 3 new keys
- Query 4: "evidence-based practice practitioners meta-research application skills guide training" — 0 new keys
- Query 5: "computational meta-research automated quality assessment NLP applied systematic review" — 1 new keys
- Gap-fill query 1 (adversarial): "meta-research methodology critique limitations over-specification practitioner adoption failure empirical" — 4 new claim keys
- Gap-fill query 2 (grey-lit): "site:arxiv.org OR site:lesswrong.com OR site:github.com meta-research methodology AI agent research quality framework" — 0 new claim keys
- **Post-fill saturation note (2026-06-30):** Adversarial query produced 4 new keys on genuine failure modes and structural critiques not previously captured. Grey-lit query returned zero relevant results — confirming saturation across academic (PMC, PLoS, arXiv), practitioner blog, and adversarial-critique source domains.
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturated: YES (confirmed pre-gap-fill; gap-fill 2026-06-30 added 4 new claims)

---

## Claims (8)

### [key: meta-research-five-domains]
- evidence: empirical
- confidence: high
- group: meta-research-scope
- sources: https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1002264, https://pubmed.ncbi.nlm.nih.gov/29534060/

**Claim:** Ioannidis, Fanelli, Dunne & Goodman (PLoS Biology, 2015) defined meta-research as a formal discipline organized around five evaluable domains: methods, reporting, reproducibility, evaluation, and incentives. The mechanism is that each domain maps to a distinct failure pathway — poor methods produce false positives, poor reporting blocks replication, misaligned incentives produce selective publication — allowing targeted interventions rather than omnibus 'improve science' appeals. Scope: framework developed in biomedical science; generalizes to any field with peer-reviewed outputs; does not directly apply to practitioner-generated or grey literature. For kit-maker design: research quality checks should be organized along these five axes rather than a single quality score, so the kit's critique layer can assign a finding to the correct failure mechanism and propose a domain-specific fix.

**Verify note:** The primary source (Ioannidis, Fanelli, Dunne and Goodman, PLoS Biology 2015) is verified and real. The five domains — methods, reporting, reproducibility, evaluation, and incentives — are confirmed in the paper and correspond to 'how to perform, communicate, verify, evaluate, and reward research.' The PubMed 29534060 source is a separate 2018 Ioannidis paper in PLoS Biology that reiterates the same five-domain framing for meta-research ('methods, reporting, reproducibility, evaluation, and incentives'). Both sources exist and support the claim. The description of how each domain maps to a distinct failure pathway is a reasonable inference from the paper's organization, though the paper itself does not state these exact mappings as explicitly as the claim implies. The scope caveat (biomedical science origin, generalizes to peer-reviewed fields, does not directly apply to practitioner-generated literature) is a reasonable characterization. The kit-maker implication is a design extrapolation, not a claim about what the paper says. Overall the source attribution, authorship, journal, and five-domain content are all verified.

---

### [key: chalmers-85pct-waste]
- evidence: empirical
- confidence: medium
- group: meta-research-scope
- sources: https://journals.plos.org/plosbiology/article?id=10.1371%2Fjournal.pbio.1002264, https://pmc.ncbi.nlm.nih.gov/articles/PMC11563668/

**Claim:** Chalmers & Glasziou (Lancet, 2009, cited by Ioannidis 2015) estimated that approximately 85% of biomedical research investment is wasted. The mechanism operates across four failure stages: wrong question selection (~50% waste), inadequate study design/methods (~86% of animal studies have avoidable design flaws), incomplete or biased reporting (~50% of trials go unpublished), and redundant research that ignores prior evidence (~50% of trials fail to cite existing systematic reviews). Scope: estimate is biomedical-specific, but the four-stage decomposition applies to any knowledge-building domain. For kit-maker: the four stages map to concrete checkpoints a research scaffold should enforce before a user advances — question clarity, design pre-registration, reporting completeness, prior-literature audit.

**Verify note:** The Chalmers and Glasziou 2009 Lancet paper ('Avoidable waste in the production and reporting of research evidence') is a real, well-known paper — PubMed ID 19525005 confirms the title and authors. The 85% figure is widely cited and correctly attributed. However, the specific four-stage decomposition in the claim (~50% from wrong question selection, ~86% animal study design flaws, ~50% unpublished trials, ~50% failing to cite prior systematic reviews) could not be verified from the cited sources: the Lancet paper abstract was not available on PubMed, and the PMC11563668 source (Ioannidis 2024) does not discuss Chalmers and Glasziou or the four failure stages. The PLoS Biology 2015 paper (Ioannidis et al.) cites Chalmers and Glasziou but the specific sub-percentages are not confirmed in those accessible sources. The 85% headline figure is well-established in the literature; the specific sub-percentages (especially ~86% animal design flaw figure) are plausible but unverified from the cited sources in this batch. Confidence is medium: the headline claim is real, the four-stage decomposition is the correct structure of the Chalmers-Glasziou argument, but the specific sub-percentages could not be confirmed from the sources provided.

---

### [key: oncology-reproducibility-6-of-53]
- evidence: empirical
- confidence: medium
- group: research-waste-and-bias
- sources: https://www.annualreviews.org/content/journals/10.1146/annurev-med-050124-050859, https://pmc.ncbi.nlm.nih.gov/articles/PMC7821256/

**Claim:** Begley & Ellis (Nature, 2012) reported that only 6 of 53 landmark oncology studies (~11%) could be reproduced by Amgen scientists. The mechanism is a confluence of publication bias, HARKing (Hypothesizing After Results are Known), underpowered studies with high false-positive rates, and insufficient methods detail. Scope: the 11% rate is specific to preclinical oncology with commercial replication teams; social-science replication rates are closer to 50-60% (OSC 2015); the mechanism is general. For kit-maker: claims extracted from single high-impact studies in any domain should carry an explicit 'single-study risk' flag; the kit should prompt users to seek at least one independent replication before treating a finding as settled.

**Verify note:** The Begley and Ellis 2012 Nature paper ('Drug development: Raise standards for preclinical cancer research') is a real, well-established paper — PubMed ID 22460880 confirms the title and authors. The '6 of 53 landmark oncology studies' finding (~11%) is widely cited and correctly attributed to Amgen scientists. The cited Annual Reviews source (annurev-med-050124-050859) returned HTTP 403 and could not be verified. PMC7821256 (McGee and Dawson, 'Fake news and fake research') is verified and real but does not cite Begley and Ellis — that source does not support this specific claim. The mechanism described (publication bias, HARKing, underpowered studies, insufficient methods) is accurately characterized and consistent with the paper's known content. The scope caveat (11% is preclinical oncology-specific; social science rates are ~50-60% per OSC 2015) is accurate. Confidence is medium rather than high because: (a) the primary Nature paper abstract was unavailable for direct verification, (b) one cited supporting source (PMC7821256) does not actually discuss Begley and Ellis, and (c) the Annual Reviews source was inaccessible. The finding itself is well-known and extremely unlikely to be fabricated, but direct source verification was partial.

---

### [key: qrp-prevalence-33pct]
- evidence: empirical
- confidence: medium
- group: research-waste-and-bias
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11563668/, https://www.pnas.org/doi/10.1073/pnas.1618569114

**Claim:** John, Loewenstein & Prelec (Psychological Science, 2012) found ~33% of surveyed psychologists admitted to at least one questionable research practice (QRP) and ~2% admitted to data fabrication. The mechanism is that QRPs (p-hacking, optional stopping, selective reporting) are individually low-cost and norm-tolerated, so they aggregate into systematic bias at the field level even without deliberate misconduct. Scope: self-report surveys undercount actual rates; field is psychology but QRP incentives are universal across publish-or-perish contexts. For kit-maker: research claims sourced from pre-replication-crisis psychology (pre-2015) carry elevated QRP risk; the kit should flag the publication year and whether the finding has been replicated in a post-crisis study.

**Verify note:** The John, Loewenstein and Prelec 2012 Psychological Science paper is a real, well-established paper. The ~33% QRP admission figure and ~2% data fabrication figure are widely cited and correctly attributed. However, direct verification of this paper was not possible from any of the cited sources: the PNAS doi (10.1073/pnas.1618569114) returned HTTP 403, and PMC11563668 (McGee and Dawson) does cite the 33% and 2% figures — confirming those numbers appear in the literature — but as a secondary citation, not the primary source. The paper's correct citation is Psychological Science 2012, Vol. 23(5), pp. 524–532 (doi 10.1177/0956797611430953); multiple attempts to access Sage Journals returned only the homepage. The mechanism described (QRPs are low-cost and norm-tolerated, aggregate into systematic bias) is an accurate characterization of the paper's argument. The scope caveat (self-report undercount, pre-replication-crisis psychology) is accurate and appropriate. Confidence is medium: the finding is well-known, the secondary source (PMC7821256) confirms the figures, but the primary source was not directly accessible for verification of exact wording and methodology.

---

### [key: early-small-studies-overestimate]
- evidence: empirical
- confidence: low
- group: research-waste-and-bias
- sources: https://link.springer.com/article/10.3758/s13428-021-01644-z, https://pmc.ncbi.nlm.nih.gov/articles/PMC11563668/

**Claim:** Meta-analytic reviews consistently show that small, early, highly-cited studies overestimate effect sizes relative to later large replication studies — the 'winner's curse' or 'decline effect.' The mechanism is winner's curse amplified by citation gravity: the first positive study sets the reference point; later, less extreme replications receive less attention; meta-analyses that weight by sample size attenuate but do not eliminate the overestimate because they cannot correct for unpublished null studies. Scope: strongest in underpowered fields (small N, noisy dependent variable); less pronounced in fields with pre-registration norms or mandatory data sharing. For kit-maker: the kit should down-weight early high-citation studies lacking independent large-sample replication, and apply a warning on claims sourced from n<100 studies.

**Verify note:** The underlying phenomenon (winner's curse, decline effect) is real and well-documented in the literature (Open Science Collaboration 2015, Young et al. 2008, Smaldino & McElreath 2016), and the mechanistic description is accurate. However, neither cited source actually demonstrates it. Source 1 (10.3758/s13428-021-01644-z, Behavior Research Methods 2021) is a meta-review of 100 meta-analyses examining transparency and reproducibility practices — it does not study early vs. late effect size differences or winner's curse. Its main findings are about missing analysis scripts, unreported weighting formulas, and low preregistration rates. Source 2 (PMC11563668) is Ioannidis's 2024 AAP Presidential Address broadly surveying reproducibility problems — it mentions publication bias and low replication rates but is a narrative address, not a meta-analytic review of the decline effect. The claim is making a correct argument but is not supported by the sources it cites. Verdict: LOW — claim is directionally defensible from other literature, but the cited sources do not demonstrate it.

---

### [key: prisma-amstar-grade-layer-cake]
- evidence: consensus
- group: qc-frameworks
- sources: https://www.frontiersin.org/journals/research-metrics-and-analytics/articles/10.3389/frma.2023.1268045/full, https://www.ncbi.nlm.nih.gov/books/NBK83619/

**Claim:** The research methodology community has converged on a layered quality framework: PRISMA (reporting transparency for systematic reviews), AMSTAR-2 (methodological quality of systematic reviews), and GRADE (strength-of-evidence grading for recommendations). The mechanism is division of labor across three distinct failure modes — PRISMA catches unreported decisions, AMSTAR-2 catches methodological shortcuts, and GRADE converts evidence strength into actionable recommendation confidence. A source can be fully reported (PRISMA-compliant) but methodologically weak (AMSTAR-2 low), yet the recommendation could still be strong if multiple independent streams converge (GRADE moderate). Scope: originally clinical/health; widely adopted in education, social policy, environmental science; weakest for practitioner-produced or unpublished evidence. For kit-maker: the kit's evidence-appraisal layer should implement analogues to all three, not just one.

---

### [key: ebp-5A-skill-decomposition]
- evidence: consensus
- group: practitioner-skills
- sources: https://oxford-review.com/evidence-based-practice-essential-guide/, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10852226/

**Claim:** The evidence-based practice (EBP) literature has converged on a five-skill decomposition for translating research into decisions: Ask (convert practical problem to answerable question), Acquire (systematic retrieval), Appraise (critical quality judgment), Aggregate (synthesize across sources), Apply (incorporate into decision under real-world constraints). Each skill has a distinct failure mode: Ask fails on vague framing; Acquire fails on search strategy; Appraise fails on bias detection; Aggregate fails on weighting conflicting evidence; Apply fails on context transfer. Scope: developed in clinical medicine and social work; validated in nursing education (web-based training showed significant knowledge/attitude improvement, PMC10852226, 2024); generalizes to any applied domain. For kit-maker: a research scaffold should route users through all five stages explicitly and not allow jump-to-Apply, because skipping Appraise is the documented failure mode in practitioner settings.

---

### [key: ml-sr-automation-screening-rob]
- evidence: anecdote
- group: automation-and-nlp
- sources: https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-019-1074-9, https://arxiv.org/html/2504.20113v1, https://pmc.ncbi.nlm.nih.gov/articles/PMC9795520/

**Claim:** Machine learning applied to systematic review automation has demonstrated feasibility in two specific sub-tasks: title/abstract screening (classifying abstracts as relevant/irrelevant) and risk-of-bias (RoB) assessment (classifying study designs as high/low bias). The mechanism is supervised text classification: both tasks reduce to labeling text segments against a fixed schema, which suits ML once sufficient labeled training data exists. Performance degrades sharply outside the training domain; manual review still required for full-text extraction and data synthesis; the field suffers from inconsistent reporting standards making cross-study comparisons unreliable (PMC8487512). Scope: current feasibility is at the screening and flagging stages only; end-to-end automation is not supported at acceptable error rates. For kit-maker: an agent-based research kit can automate the Acquire and initial Appraise stages (screening and bias flagging) but should not automate Aggregate or Apply without a human checkpoint.

---

## Null results
- Query 4 (evidence-based practice practitioner skills guide training): returned practitioner training literature but no claims not already captured under the EBP five-skill framework or the meta-research scope claims; 0 new keys.
- Query 5 (computational meta-research automated quality assessment NLP): confirmed ML-for-SR feasibility claims already visible in prior queries; the only new distinguishable finding was the text-classification-for-RoB mechanism, which yielded one anecdote-level claim; no further new keys beyond that one.

## Additional Claims — Gap-fill 2026-06-30 (adversarial + grey-lit queries)

### [key: meta-analysis-rct-kappa-035]
- evidence: empirical
- confidence: medium
- group: research-waste-and-bias
- sources: https://brookbushinstitute.com/articles/meta-analysis-problems-why-do-so-many-imply-that-nothing-works
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Meta-analytic conclusions agree with subsequent large randomized controlled trials only at 'fair' levels: one classic comparison study found kappa = 0.35 between meta-analytic conclusions and later large RCT results (CI 0.06–0.64, falling in the 'fair' range on Landis-Koch scale). Mechanism: meta-analyses pool heterogeneous smaller studies whose idiosyncratic variance does not cancel in the aggregate; the large subsequent RCT controls one context with one protocol. Scope: documented in clinical medicine contexts; comparison is based on only 12 large RCTs matched to 19 meta-analyses. Implication for kit design: a kit that treats meta-analytic conclusions as settled evidence should flag whether a confirmatory large RCT exists.

**Verify note:** LeLorier et al. 1997 (NEJM 337:536-542) is a real paper and kappa = 0.35 is consistent with secondary citations (CI 0.06–0.64 confirmed). Critical limit: comparison is based on only 12 large RCTs. A kappa CI spanning 0.06–0.64 means 'barely above chance' is editorial overstatement, not a statistical conclusion. Cited source is the Brookbush Institute article, not the primary paper. Subsequent work (Ioannidis & Lau 1998) criticized the comparison for differing populations and time periods.

---

### [key: structural-reliability-ceiling-significance]
- evidence: empirical
- confidence: medium
- group: meta-research-scope
- sources: https://arxiv.org/abs/2603.03445
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Binary significance-based publication systems impose a hard ceiling on achievable research reliability that cannot be overcome by increasing sample size alone. Mechanism: posterior log-odds = prior log-odds + log(Lambda); once the publication decision reduces experimental output to a binary pass/fail signal, the decision rule itself caps maximum posterior odds regardless of N. Using documented pre-reform psychology parameters (prior ~0.10, power ~0.35), the framework predicts ~36% replication rate, which matches the Open Science Collaboration's empirical result. Scope: applies to any field using binary significance thresholds. Implication for kit design: QRP-reduction checklists and sample-size rules are insufficient; the kit must address the publication/decision architecture (pre-registration, registered reports).

**Verify note:** Source arXiv:2603.03445 confirmed. Posterior log-odds formula confirmed, 36% replication rate prediction confirmed, two collapse pathways confirmed. MATERIAL ERROR: the claim attributes this to 'Levin & colleagues' — the paper has a single author, Marco Pollanen (Trent University). No co-authors. The paper is a preprint under open peer review at Meta-Psychology, not yet peer-reviewed.

---

### [key: review-type-confusion-methodology-mismatch]
- evidence: consensus
- group: practitioner-skills
- sources: https://arxiv.org/abs/2205.01163
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** Cruzes & Dyba (arXiv 2205.01163) identify seven distinct secondary-research types (ad hoc review, case survey, critical review, meta-analysis, meta-synthesis, rapid review, scoping review) and argue that confusion between these types is undermining the effectiveness of secondary research — specifically in software engineering, where authors misidentify their review type and reviewers apply mismatched evaluation criteria. Mechanism: each review type has a distinct purpose and requires different quality standards; when type is mislabeled, methodological rigor is judged against the wrong standard. Scope: documented in software engineering secondary research. Implication for kit design: a research kit must enforce explicit review-type declaration at intake and route each type to the appropriate appraisal checklist — a single universal quality rubric applied across types is the documented failure mode.

---

### [key: publication-bias-prevalence-overstatement]
- evidence: empirical
- confidence: medium
- group: research-waste-and-bias
- sources: https://brookbushinstitute.com/articles/meta-analysis-problems-why-do-so-many-imply-that-nothing-works
- added: gap-fill 2026-06-30 (adversarial query)

**Claim:** A meta-research review found that only 3.9% of meta-analyses showed evidence of publication bias after formal assessment, suggesting that publication bias — while real — is substantially overdiagnosed as the primary explanation for small-study effects. Mechanism: small studies are more heterogeneous than large studies for structural reasons (narrower eligibility criteria, single-center variation), meaning funnel-plot asymmetry typically reflects population heterogeneity rather than suppressed null results. Scope: 5,534 meta-analyses across medical specialties (Schwab et al. BMJ Open 2021). Implication for kit design: a kit that flags 'possible publication bias' based on funnel-plot asymmetry alone will generate false positives; distinguish publication bias from small-study heterogeneity.

**Verify note:** The 3.9% figure is real, sourced from Schwab et al. (BMJ Open 2021, confirmed via PMC8442042). SCOPE ERROR: the study covers 5,534 meta-analyses across medical specialties broadly, not 'rehabilitation meta-analyses specifically' as the claim's Brookbush Institute source frames it. Additional caveat: the 3.9% is based on funnel-plot detection which has documented low statistical power — meaning the prevalence estimate is likely an underestimate.

---

## Null results — Gap-fill 2026-06-30
- Grey-lit query (site:arxiv.org OR site:lesswrong.com OR site:github.com meta-research methodology AI agent research quality framework): All high-ranking results concerned AI agent evaluation benchmarks — platforms for measuring AI performance, not frameworks for improving human meta-research skill. Zero new claims relevant to this angle.

## New angles surfaced
- Pre-registration as a structural kit-enforced gate — the literature repeatedly names pre-registration as the highest-leverage single intervention against QRPs and publication bias; this is a separate implementable angle for how a kit enforces or rewards pre-registration of research questions before search begins.
- Replication tagging as a first-class metadata field — the decline-effect and winner's-curse evidence suggests every claim in a kit's evidence store should carry a replication-status tag (original, replicated, failed-to-replicate, not-yet-replicated); this is an angle for kit data-model design not covered by any current wave-1 angle.
- Domain-transfer limits of EBP frameworks — PRISMA/AMSTAR/GRADE were built for clinical RCTs; their application to practitioner-generated, computational, or grey literature is an open problem; this is a gap angle for kit design when the evidence base is non-academic.

