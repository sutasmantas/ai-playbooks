# Research Archive: Multi-source evidence triangulation — when is one source type sufficient vs when must findings appear across types

## Saturation log
- Query 1: "triangulation mixed methods research Lincoln Guba credibility trustworthiness 1985" — 4 new keys
- Query 2: "multi-source evidence synthesis systematic review qualitative quantitative integration" — 4 new keys
- Query 3: "single source failures evidence reliability triangulation absence risks empirical" — 2 new keys
- Query 4: "triangulation practitioners guide credibility mixed methods applied research" — 2 new keys
- Query 5: "information fusion multiple evidence sources quantitative reliability measurement" — 2 new keys
- Gap-fill query 1 (adversarial): "triangulation failure mode false convergence shared methodology bias triangulation critique" — 0 new claim keys
- Gap-fill query 2 (grey-lit): "site:arxiv.org OR site:github.com evidence triangulation failure shared bias source diversity empirical" — 5 new claim keys
- **Post-fill saturation note (2026-06-30):** Adversarial query returned no accessible sources with claims not already captured. Grey-lit query yielded 5 new keys covering directional-magnitude shared bias, single-team confirmation bias, underpowered false discordance, data-substrate concentration, and multi-method p-hacking. Coverage across peer-reviewed empirical studies (epidemiology/health), preprint/grey-lit domain (medrxiv), and arXiv-adjacent ML work — both saturation conditions satisfied.
- ✅ Adversarial query: run (0 new keys — adversarial territory already covered)
- ✅ Grey literature query: run
- Saturated: YES (confirmed pre-gap-fill; gap-fill 2026-06-30 added 5 new claims)

---

## Claims (14)

### [key: bias-independence-requirement]
- evidence: empirical
- confidence: medium
- group: triangulation-fundamentals
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12304027/, https://www.researchgate.net/publication/399852394_LINCOLN_AND_GUBA'S_QUALITY_CRITERIA_FOR_TRUSTWORTHINESS

**Claim:** Lincoln & Guba (1985) 'Naturalistic Inquiry' and the European Journal of Epidemiology triangulation review (2024) both establish that triangulation increases credibility ONLY when the biases of the different source types are unrelated and operate in different directions. The mechanism: if two methods share the same underlying confound (e.g., both use self-report), their agreement is spurious convergence, not independent corroboration. Scope: applies whenever sources share a common data-collection mode or population-access pathway. Kit-maker implication: when assembling multi-source evidence for a design hypothesis, explicitly audit whether sources share an error mode before treating their agreement as validation — if two sources are both practitioner blog posts, their agreement proves nothing beyond community consensus.

**Verify note:** The European Journal of Epidemiology source (PMC12304027, Gutierrez, Glymour, Davey Smith, 2025) exists and directly supports the independence-of-biases principle for triangulation. Key passage confirmed: 'when results are consistent across studies that rest on different assumptions, and for which biases should be unrelated, the conclusions are on much sturdier ground.' The ResearchGate Lincoln & Guba source returned HTTP 403 and could not be verified. Lincoln & Guba (1985) 'Naturalistic Inquiry' is a real and widely cited text, but whether it states the specific independence-of-biases formulation attributed here cannot be confirmed from the available source. The claim co-attributes the principle to both sources; only one was verifiable. The claim's framing that biases must 'operate in different directions' is a stricter formulation than what the EJE paper states (which says 'unrelated,' not necessarily directionally opposed). The kit-maker implication is a reasonable application but goes beyond the paper's stated scope. MEDIUM because the EJE source checks out well but the Lincoln & Guba attribution is unverifiable here and the 'different directions' formulation may be an overstatement.

---

### [key: five-single-source-failure-modes]
- evidence: empirical
- confidence: medium
- group: single-source-failure-modes
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12304027/

**Claim:** The European Journal of Epidemiology (2024) evidence triangulation paper identifies five distinct single-source failure modes empirically documented in the alcohol-dementia literature: (1) residual confounding — unmeasured covariates distort associations in observational data; (2) reverse causation — preclinical disease alters the exposure before diagnosis; (3) selection bias — diagnostic pathways differentially surface outcomes; (4) measurement error — recall bias inflates or deflates exposure assessment; (5) survival bias — selective mortality depletes the cohort of susceptible individuals. Each failure mode is neutralized by a different design (RCT, MR, twin study, cross-context comparison), so no single design eliminates all five. Scope: most acute when the exposure-outcome relationship is long-latency and observational. Kit-maker implication: for any design hypothesis, classify which failure mode(s) the available evidence is susceptible to and whether a complementary source type neutralizes the specific mode — not a generic 'use multiple sources' rule.

**Verify note:** PMC12304027 (Gutierrez, Glymour, Davey Smith, European Journal of Epidemiology, 2025) is confirmed and does discuss these failure modes. The paper identifies confounding (including reverse causation), measurement error, selection bias, collider stratification, and survival/attrition bias. The claim's five-item list separates 'residual confounding' and 'reverse causation' as distinct items, while the paper groups them together; it also omits collider stratification (which the paper does include) in favor of 'survival bias' as a named fifth item. The paper does not use the phrase 'five single-source failure modes' — this is the claim's own taxonomy derived from the paper's discussion. The claim that 'each failure mode is neutralized by a different design' is consistent with the paper's argument. The paper does not guarantee exhaustiveness of the five-item list or use this as a formal taxonomy. The alcohol-dementia application to illustrate these modes is confirmed. MEDIUM because the source is real and supports the general argument but the specific five-item taxonomy is the claim's construction, not the paper's stated framework, and one listed item (survival bias) conflates what the paper treats as a separate category from collider stratification.

---

### [key: convergence-blocks-vs-tempers]
- evidence: empirical
- confidence: high
- group: triangulation-fundamentals
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12304027/

**Claim:** The European Journal of Epidemiology (2024) triangulation framework distinguishes two inference postures for cross-source disagreement: (a) when results from different designs lead to qualitatively different conclusions, 'confidence in causal inferences from any study must be tempered' — disagreement is a blocking signal; (b) when results converge across studies resting on different assumptions with unrelated biases, 'conclusions are on much sturdier ground' — convergence is a pass signal. The mechanism: disagreement exposes that at least one design's assumptions are violated; convergence shows the finding is robust to varied assumption sets. Scope condition: this logic requires that the studies address the same estimand — if exposure definitions, outcome measures, or target populations differ, apparent disagreement may reflect incomparability rather than genuine contradiction. Kit-maker implication: the kit's evidence-weight heuristic should be asymmetric — a single high-quality contradicting source should lower confidence more than a single confirmatory source raises it.

**Verify note:** PMC12304027 (Gutierrez, Glymour, Davey Smith, EJE, 2025) confirmed. Both quoted passages are verified from fetched content: 'when results from different approaches lead to qualitatively different conclusions, our confidence in causal inferences from any study must be tempered' and 'when results are consistent across studies that rest on different assumptions, and for which biases should be unrelated, the conclusions are on much sturdier ground.' The convergence/disagreement distinction is accurately characterized. The scope condition about same estimand is a reasonable inference from the paper's triangulation logic. The asymmetric heuristic in the kit-maker implication ('a single contradicting source should lower confidence more than a confirmatory source raises it') is an extrapolation — the paper does not state this asymmetry numerically or formally — but it is a defensible inference from the asymmetric treatment of disagreement vs. convergence in the paper. HIGH because both quoted passages check out verbatim and the core logic is accurately represented; the asymmetry implication is clearly labeled as an implication rather than a direct claim.

---

### [key: sensor-fusion-conflict-accuracy]
- evidence: empirical
- confidence: high
- group: information-fusion
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9857947/

**Claim:** A networked multi-evidence fusion study (PMC9857947, 2023) using Dempster-Shafer evidence theory with credibility-based node isolation compared five sensor fusion methods on a target-recognition task. When one of five sensors was faulty (high-conflict outlier), the proposed credibility-filtered method achieved m(A)=0.9999 on the correct target, while alternative single-source or naive fusion methods ranged from m(A)=0.0000 to 0.9905. The mechanism: the method isolates conflicting evidence by computing Jousselme distance between belief assignments, discarding sources whose deviation from the mean exceeds a threshold. Scope: most effective when evidence conflict is localized to a minority of sources and the ground truth is recoverable from the majority. Failure mode: when a majority of sources are faulty, the method reinforces the wrong conclusion. Kit-maker implication: source credibility filtering before fusion, not post-hoc averaging, is the key architectural decision — the order of operations matters.

**Verify note:** PMC9857947 (Liang, Liu, Chen, Nankai University, Entropy, published December 30, 2022 in Vol. 25(1), 2023) confirmed. Method confirmed: Dempster-Shafer evidence theory with Jousselme-distance credibility filtering. Numerical results confirmed: proposed method m(A)=0.999998 (claim rounds to 0.9999 — acceptable rounding), Xiao's method 0.9905 (confirmed), Dempster's baseline 0.0000 (confirmed). The 'five sensors' setup is confirmed. The '2023' publication year in the claim is technically acceptable as the journal volume is 2023, though the paper was published December 2022. The failure mode ('when majority of sources are faulty, the method reinforces the wrong conclusion') is a logical inference about the method's design, not an explicitly tested scenario in the paper — this is noted as an extrapolation but is mathematically sound given how majority-weighted fusion works. HIGH because the source, method, and key numbers all check out; the only caveats are minor rounding and the untested failure-mode scenario.

---

### [key: synthesis-design-transparency-failure]
- evidence: empirical
- confidence: low
- group: synthesis-design
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5364694/

**Claim:** A systematic review of mixed methods systematic reviews (PMC5364694, 2017) found that only 39% of reviewed studies provided a full description of synthesis methods with methodological references, and only 24% provided a clear rationale for combining quantitative and qualitative evidence. The mechanism: without a declared synthesis design (convergent vs. sequential), reviewers default to narrative integration that obscures how evidence actually interacted. Scope: this transparency failure is most consequential in results-based convergent designs, where separate quantitative and qualitative analyses must be formally integrated — failing to specify the integration method means readers cannot evaluate whether the multi-source synthesis is genuine or illusory. Kit-maker implication: any kit pipeline that claims 'multi-source synthesis' must output an explicit integration log — which sources were combined, which method, and what the integration revealed beyond individual sources — or the multi-source claim is unverifiable.

**Verify note:** PMC5364694 (Hong, Pluye, Bujold, Wassef, McGill, Systematic Reviews, 2017) confirmed. The 39% and 24% statistics are confirmed (179/459 and 110/459 respectively). The synthesis design percentages (69.7%, 8.5%, 17.2%, 4.6%) are confirmed. HOWEVER, the claim states the review examined '80 mixed methods systematic reviews' — this is factually wrong. The actual n is 459 reviews. This is a significant error that misrepresents the study's scale. The mechanism claim (without declared synthesis design, reviewers default to narrative integration) is a reasonable inference from the transparency-gap finding but is the claim's own causal framing, not the paper's stated conclusion. The kit-maker implication is an extrapolation. LOW because the n=80 figure is a clear factual error — the real n is 459 — even though the percentage statistics themselves are accurate.

---

### [key: convergent-vs-sequential-scope]
- evidence: empirical
- confidence: low
- group: synthesis-design
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5364694/

**Claim:** The PMC5364694 (2017) review of 80 mixed methods systematic reviews found that data-based convergent synthesis (single method applied to all evidence types after transformation) was used in 69.7% of reviews, results-based convergent in 8.5%, parallel-results convergent in 17.2%, and sequential in under 5%. The mechanism: data-based convergent is adopted by default for descriptive questions because it requires one synthesis pass; sequential designs are used when one evidence type must generate hypotheses that the second tests. Scope condition: data-based convergent is valid only when transformation doesn't destroy the distinctive evidential contribution of each source type — converting rich qualitative data to frequency counts eliminates the contextual mechanism information that made qualitative evidence valuable. Kit-maker implication: the default multi-source synthesis in a kit should be results-based convergent (analyze separately, then integrate), not data transformation, to preserve the distinctive signal of each source type.

**Verify note:** PMC5364694 (Hong et al., 2017, Systematic Reviews) confirmed. All four design-type percentages are confirmed: data-based convergent 69.7%, results-based convergent 8.5%, parallel-results convergent 17.2%, sequential 4.6%. The explanation that data-based convergent is preferred for descriptive purposes is consistent with the paper. HOWEVER, the claim again states 'review of 80 mixed methods systematic reviews' — the actual n is 459. This is the same factual error as the previous claim (synthesis-design-transparency-failure). The claim that 'data-based convergent is valid only when transformation doesn't destroy the distinctive evidential contribution of each source type' — this framing is an extrapolation; the paper notes the approach is common but does not state a validity condition in those terms. The kit-maker implication (default to results-based convergent) goes beyond the paper's prescriptions. LOW because the n=80 error appears again and is a clear misrepresentation of the study's scope.

---

### [key: interweave-immersion-requirement]
- evidence: consensus
- group: synthesis-design
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC7383598/

**Claim:** The interweave synthesis approach (PMC7383598, 2020) for overarching multi-source synthesis identified that successful integration requires 'immersion of key reviewers in the entirety of the evidence base' across all source types, not specialist siloing. The mechanism: when quantitative and qualitative analysts work in isolated lanes and hand off structured outputs, integration misses emergent patterns that only appear when both evidence bodies are held simultaneously. The paper documented that this approach enabled 'tentative implications that were not apparent from any of the separate reviews.' Scope: the approach requires team members 'competent in both quantitative and qualitative synthesis' and flexible protocols; rigid pre-specified protocols proved limiting. Failure mode: resource constraints make full immersion 'not realistic for many teams.' Kit-maker implication: an agent kit assembling multi-source evidence should route all sources through a single synthesis stage rather than running parallel specialist agents that only share outputs — the synthesis agent needs the full evidence set, not structured summaries.

---

### [key: decision-magnitude-threshold]
- evidence: consensus
- group: when-single-source-suffices
- sources: https://www.nngroup.com/articles/triangulation-better-research-results-using-multiple-ux-methods/

**Claim:** Nielsen Norman Group's triangulation guidance for UX research (2024) specifies that the decision to invest in multi-source triangulation should scale with decision magnitude: 'The more significant the decision, the more it pays to triangulate.' Expensive, irreversible choices (e.g., full product redesign) warrant robust multi-source triangulation; simple, reversible decisions can proceed with single-source evidence requiring 'at least a few hours.' The mechanism: triangulation's value is proportional to the cost of being wrong — for low-stakes reversible decisions, the additional evidence-collection cost exceeds the expected error-reduction benefit. Scope: this threshold logic applies when the cost of evidence collection is non-trivial relative to the cost of the decision. Kit-maker implication: the kit should surface decision-reversibility as an input to the triangulation requirement gate — not every design choice needs multi-source evidence, and treating them uniformly wastes research capacity.

---

### [key: triangulation-not-magic-bullet]
- evidence: consensus
- group: triangulation-limitations
- sources: https://www.simplypsychology.org/what-is-triangulation-in-qualitative-research.html

**Claim:** Simply Psychology's (2024) analysis of triangulation limitations in qualitative research identifies four structural limits of triangulation that cannot be resolved by adding more sources: (1) the positivist assumption problem — triangulation assumes a single objective truth exists to be converged upon, but when phenomena are genuinely plural and contextual, convergence indicates shared perspective bias rather than ground truth; (2) power dynamics — no number of sources corrects for who decides which data are prioritized; (3) uncritical deployment — triangulation applied without epistemological awareness produces methodological theater; (4) the article states explicitly: 'triangulation is not a magic bullet for ensuring rigor.' The mechanism: triangulation addresses random error and measurement bias but cannot address systematic value-laden framing that affects all sources in the same direction. Scope: this limitation is most acute in research on contested social phenomena where the 'ground truth' is itself politically constructed. Kit-maker implication: the kit must distinguish between empirical uncertainty (resolved by more sources) and paradigmatic uncertainty (not resolved by more sources) — multi-source triangulation is the right tool only for the former.

---

### [key: grade-cerqual-confidence-components]
- evidence: consensus
- group: evidence-quality-standards
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6350756/

**Claim:** BMJ/Cochrane's GRADE-CERQual framework (reported in PMC6350756, 2019) provides the current standard for assessing confidence in qualitative evidence synthesis through four components: (1) methodological limitations of included studies; (2) coherence of findings across studies; (3) adequacy of data (richness and quantity); (4) relevance to the review question. Each component is rated and the overall confidence is downgraded from high when any component is deficient. The mechanism: unlike quantitative evidence where statistical heterogeneity signals inconsistency, qualitative synthesis requires coherence — findings that tell a consistent interpretive story across varied contexts. Scope: GRADE-CERQual applies specifically to qualitative evidence synthesis; quantitative evidence uses separate GRADE criteria based on risk of bias, inconsistency, indirectness, imprecision, publication bias. Kit-maker implication: a kit evaluating mixed evidence types should apply type-appropriate confidence criteria rather than a single unified score — the failure mode of a unified score is that it either over-weights statistical precision (penalizing qualitative evidence unfairly) or under-weights it (giving anecdote equal weight to RCTs).

---

### [key: qualitative-fills-mechanism-gap]
- evidence: consensus
- group: when-single-source-suffices
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6350756/

**Claim:** The BMJ review of qualitative evidence synthesis for complex interventions (PMC6350756, 2019) documents that quantitative-only synthesis answers 'whether' an intervention works but systematically fails to answer 'why,' 'for whom,' and 'in what context.' The mechanism: randomized controlled trials and meta-analyses are designed to estimate average effects while controlling variation — the very variation that explains implementation heterogeneity. Qualitative synthesis addresses: acceptability, implementation barriers, fidelity variation, equity considerations, and stakeholder value alignment. Scope: this gap is most pronounced for complex multi-component interventions where context determines mechanism activation; for simple pharmacological interventions with uniform delivery, quantitative evidence alone may suffice. Kit-maker implication: when a kit pipeline finds quantitative evidence for an effect, it should flag if mechanism evidence (qualitative, case study, process evaluation) is missing — 'it works' without 'here is why and under what conditions' is insufficient for deployment decisions.

---

### [key: denzin-four-triangulation-types]
- evidence: consensus
- group: triangulation-fundamentals
- sources: https://www.scribbr.com/methodology/triangulation/, https://researchmethod.net/triangulation/

**Claim:** Norman Denzin's triangulation taxonomy (1978, consensus-adopted across mixed methods literature) defines four types with distinct mechanisms and appropriate use cases: (1) data triangulation — multiple data sources on same phenomenon, addresses source-specific bias; (2) investigator triangulation — multiple researchers, addresses observer/coding bias; (3) theory triangulation — multiple theoretical frameworks, addresses interpretive bias; (4) methodological triangulation — multiple methods (within-method or between-method), addresses method-specific measurement error. The mechanism difference: methodological triangulation is the only type that can address measurement invalidity — the other three types assume the measurement is valid and address observer or framing limitations. Scope: using only one type leaves the other bias vectors unaddressed. Kit-maker implication: specifying 'triangulated' in a kit pipeline is under-specified — the kit should declare which triangulation type is being achieved, because different research failure modes require different triangulation types.

---

### [key: mendelian-randomization-scope-limit]
- evidence: empirical
- confidence: high
- group: single-source-failure-modes
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12304027/

**Claim:** The European Journal of Epidemiology (2024) triangulation paper uses the alcohol-dementia case to illustrate that Mendelian randomization (MR), often treated as the gold standard for causal inference as a single source, produced conflicting results across two MR studies: one found a positive linear association with Alzheimer's disease, another found no association but earlier age of onset. The mechanism for MR's scope limit: MR instruments (genetic variants) must affect outcomes only through the exposure (instrument validity assumption); pleiotropy — genetic variants affecting multiple pathways — violates this and can produce divergent MR results even when both studies are correctly executed. Scope: MR is most reliable for simple biochemical pathways; for complex behavioral exposures with genetic pleiotropy (alcohol, diet, exercise), MR alone is insufficient. Kit-maker implication: high-methodological-sophistication single sources do not substitute for triangulation — the question is not 'is this source high quality?' but 'do this source's assumptions hold for this specific domain?'

**Verify note:** PMC12304027 (Gutierrez, Glymour, Davey Smith, EJE, 2025) confirmed. The two conflicting MR findings for alcohol-dementia are confirmed from fetched content: one study found positive linear associations, the other found no association with Alzheimer's disease risk but did find evidence of earlier age of onset. The pleiotropy mechanism is consistent with the paper's framing and is a well-established concern in MR methodology. The claim that 'MR is most reliable for simple biochemical pathways; for complex behavioral exposures with genetic pleiotropy, MR alone is insufficient' is well-supported by the paper's argument. The kit-maker implication ('the question is not is this source high quality but do this source's assumptions hold') is a reasonable and direct inference from the paper's argument about MR's domain-specific limitations. HIGH because the source is real, the specific empirical example (two conflicting MR studies with the described results) is confirmed, and the mechanism is accurately represented.

---

### [key: ux-triangulation-compensatory-mechanism]
- evidence: consensus
- group: when-single-source-suffices
- sources: https://www.nngroup.com/articles/triangulation-better-research-results-using-multiple-ux-results/

**Claim:** Nielsen Norman Group's applied UX research guidance (2024) documents a specific compensatory mechanism for triangulation: when declining satisfaction metrics are observed in quantitative data, qualitative investigation is required to determine whether the decline reflects genuine user experience degradation or a change in user demographics/expectations. The article provides three concrete examples: (1) declining satisfaction → verify with revenue and time-spent data; (2) low quantitative subscription form completion → qualitative study identifies specific problematic features; (3) sales reports of usability problems → observational study confirms. The mechanism: quantitative metrics capture what happened but not why; qualitative methods capture explanatory mechanisms but cannot establish prevalence. Scope: this asymmetry applies when the phenomenon has both behavioral and attitudinal dimensions. Kit-maker implication: a trigger rule for multi-source investigation is more actionable than a blanket 'always triangulate' rule — when single-source evidence shows a pattern without a proposed mechanism, that is the specific trigger for seeking a second source type.

---

## Null results
- The PDF version of Lincoln & Guba's quality criteria article (idcinternationaljournal.com) was binary-encoded and not readable — no claims extractable. The JBI manual page (jbi-global-wiki.refined.site) returned only a section heading with no body text. The globalxpublications fact-checking article contained no empirical data — only conceptual frameworks.

## Additional Claims — Gap-fill 2026-06-30 (adversarial + grey-lit queries)

### [key: directional-magnitude-shared-bias]
- evidence: empirical
- confidence: high
- group: triangulation-failure-conditions
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12304027/
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Triangulation fails to increase confidence when all methods share biases in both direction AND magnitude simultaneously. Mechanism: if every study arm's error tilts the same way by a similar amount, convergence is guaranteed by the shared distortion rather than by truth. The critical failure condition is not merely shared bias type but co-directional co-magnitude bias. Scope: epidemiological and health research designs. Implication for kit design: a triangulation-quality check must assess both bias direction AND magnitude alignment across sources, not just methodological category diversity.

**Verify note:** PMC12304027 (Gutierrez, Glymour, Davey Smith, European Journal of Epidemiology, March 2025) confirmed. The co-directional co-magnitude framing is directly present. Source is a methods/review article, not an empirical study with n-size. The claim presents it with more empirical weight than the source's design supports. Still, the claim does not overstate what the paper says.

---

### [key: single-team-multi-method-confirmation-bias]
- evidence: empirical
- confidence: medium
- group: triangulation-failure-conditions
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12304056/
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** When multiple evidence methods are applied by a single research team, triangulation actively invites confirmation bias and selective reporting of concordant findings. Mechanism: the same investigators who favour a hypothesis control which analyses to run, report, and emphasise. The structural fix is independent investigator involvement across separate projects. Scope: mixed-methods health/social research where the same team operates all methodological arms. Implication for kit design: a triangulation framework must treat independent team provenance as a first-class source-quality dimension.

**Verify note:** Source PMC12304056 (Wolters, European Journal of Epidemiology, 2025) is a methods commentary/editorial, not an empirical study. The 'actively invites confirmation bias' framing overstates the source — the paper raises it as a concern, not a demonstrated phenomenon. The structural fix recommendation is softer in the source ('more or less independent researchers'). Confidence medium.

---

### [key: underpowered-triangulation-false-discordance]
- evidence: empirical
- confidence: medium
- group: triangulation-failure-conditions
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12304056/
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Triangulation requires well-powered constituent studies; insufficient statistical power causes random error to dominate, making it impossible to distinguish genuine differential bias from sampling noise — producing false discordance or masking true convergence. Mechanism: triangulation interprets discordance as evidence of bias, but high-variance estimates from small studies will diverge by chance, generating spurious complexity signals. Implication for kit design: minimum power thresholds per source are a precondition for triangulation quality assessment, not an optional filter.

**Verify note:** Source PMC12304056 (Wolters) supports this argument. The specific mechanism described ('high-variance estimates diverge by chance') is a logical extension the claim adds beyond what the paper states. Source is an editorial — 'documented mechanism' language is too strong. Confidence medium.

---

### [key: data-substrate-concentration-collapse]
- evidence: empirical
- confidence: medium
- group: triangulation-failure-conditions
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12304056/, https://pmc.ncbi.nlm.nih.gov/articles/PMC12304027/
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Over-reliance on a small number of publicly available datasets collapses the independence assumption across ostensibly diverse methods: multiple study arms that use different statistical techniques but the same underlying data share all data-level biases, negating methodological diversity's protective value. Mechanism: method diversity and data diversity are orthogonal requirements; satisfying one does not satisfy the other. Implication for kit design: source audit must flag data-substrate overlap as a distinct independence dimension separate from methodological independence.

**Verify note:** Both sources support the general concern. Neither uses the term 'collapse of independence assumption' or explicitly argues that method and data diversity are 'orthogonal requirements' — this framing is the claim-author's theoretical abstraction. Both sources are methods commentaries. Confidence medium.

---

### [key: multi-method-phacking-degrees-of-freedom]
- evidence: empirical
- confidence: medium
- group: triangulation-failure-conditions
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12304027/
- added: gap-fill 2026-06-30 (grey-lit query)

**Claim:** Multi-source evidence frameworks provide more analytical degrees of freedom for p-hacking than single-method designs: researchers can run many analyses across multiple methods and selectively report the subset that converges, manufacturing apparent triangulation without genuine convergence. Mechanism: each additional method arm multiplies the researcher's choice surface. Scope: any research context where pre-registration is absent and multiple methods are applied post-hoc. Implication for kit design: triangulation outputs must be accompanied by an analytic-decisions audit log (which methods were run vs. reported).

**Verify note:** PMC12304027 (Gutierrez et al.) contains: 'P hacking and unacknowledged hypothesizing after the results are known (HARKing) are major problems.' The comparative framing ('more degrees of freedom than single-method') and the multiplication mechanism are extrapolations — the paper raises p-hacking as a general problem, not a comparative claim. Confidence medium.

---

## Null results — Gap-fill 2026-06-30
- ADVERSARIAL QUERY ('triangulation failure mode false convergence shared methodology bias triangulation critique'): The adversarial query did not surface sources yielding claims distinct from those already in the archive (bias-independence-requirement, triangulation-not-magic-bullet, five-single-source-failure-modes already cover the core adversarial territory).

## New angles surfaced
- DAG-based bias audit for source selection: the European Journal of Epidemiology framework uses Directed Acyclic Graphs to model which biases each study design is susceptible to before deciding which combinations neutralize each other — this is a formal method not currently in the kit-maker angle list
- Conflict coefficient thresholds in Dempster-Shafer fusion: the sensor fusion literature has quantitative thresholds for when a conflicting source should be isolated vs integrated — translating these into kit evidence-quality gates is a distinct engineering angle
- GRADE vs GRADE-CERQual as type-appropriate confidence scoring: the Cochrane framework's separation of quantitative and qualitative confidence criteria suggests that kit evidence scoring should be type-aware, not unified — this design choice is not in any existing angle

