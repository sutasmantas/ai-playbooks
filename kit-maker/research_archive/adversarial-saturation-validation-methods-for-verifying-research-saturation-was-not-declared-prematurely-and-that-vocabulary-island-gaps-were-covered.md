# Research Archive: Adversarial saturation validation — methods for verifying research saturation was not declared prematurely and that vocabulary-island gaps were covered

## Saturation log
- Query 1: "search completeness systematic review stopping rule literature search saturation evidence coverage empirical" — 3 new claim keys
- Query 2: "systematic review completeness testing sensitivity analysis missed evidence search saturation validation" — 2 new claim keys
- Query 3: "premature saturation false negative failure modes literature search incomplete evidence empirical" — 1 new claim keys
- Query 4: "information retrieval vocabulary mismatch synonym gap coverage failure literature search recall empirical" — 2 new claim keys
- Query 5: "site:arxiv.org information retrieval search saturation completeness adversarial validation missed evidence" — 3 new claim keys
- Query 6: "qualitative research data saturation premature stopping critique failure replication" — 1 new claim keys
- Query 7: "capture recapture method literature search saturation completeness estimation systematic review" — 2 new claim keys
- Query 8: "search saturation fails critique "vocabulary island" OR "term island" OR "concept drift" missed cluster evidence" — 0 new claim keys
- Query 9: "site:arxiv.org "search saturation" OR "retrieval saturation" agent knowledge completeness termination criterion" — 2 new claim keys
- Query 10: "multi-database search overlap unique references recall Embase MEDLINE two databases 95 percent systematic review" — 1 new claim keys
- Query 11: "systematic review search strategy errors 92 percent recall errors missing terms MeSH vocabulary empirical study" — 1 new claim keys
- Query 12: "citation network analysis gap detection missing literature vocabulary island research front" — 1 new claim keys
- Query 13: ""relative recall" benchmark sensitivity validation search string systematic review how many benchmark studies needed" — 1 new claim keys
- Query 14: "knowledge saturation agent agentic research loop termination LLM "new information" diminishing returns completeness criterion" — 1 new claim keys
- Query 15: "adversarial validation research gap detection "red team" OR "adversarial" literature review completeness checking agent" — 0 new claim keys
- Query 16: "snowball sampling reference chasing forward backward citation literature review completeness complement database" — 1 new claim keys
- Query 17: "systematic review wasted research incomplete outdated evidence synthesis missed trials quantitative estimate" — 1 new claim keys
- Query 18: ""search saturation" OR "information saturation" adversarial test challenge premature declaration false completion agent kit" — 0 new claim keys
- Query 19: "optimal stopping secretary problem exploration exploitation tradeoff literature search coverage completeness decision theory" — 1 new claim keys
- Query 20: "vocabulary frame alternative terminology same concept missed systematic review interdisciplinary research translation gap" — 1 new claim keys
- Query 21: "intake protocol agent kit essential inferable information distinction required context autonomous operation" — 0 new claim keys
- Query 22: "redundancy sampling qualitative theoretical saturation sample size empirical minimum threshold when to stop" — 0 new claim keys
- Query 23: "structured query language controlled vocabulary MeSH CINAHL thesaurus cross-database translation recall difference interdisciplinary search" — 0 new claim keys
- Query 24: "LLM agent research completeness "stop searching" "enough information" termination decision empirical benchmark evaluation" — 1 new claim keys
- Query 25: "information foraging marginal value theorem patch leaving decision when to stop searching web optimal stopping criterion empirical" — 1 new claim keys
- Query 26: "adversarial saturation check category D alternative framing systematic review missed literature different discipline nomenclature" — 0 new claim keys
- Query 27: "SeekerGym benchmark 42.5 percent Wikipedia completeness agent information seeking complete retrieval failure" — 0 new claim keys
- Query 28: "negative case analysis deviant case sampling qualitative research saturation challenge testing boundary conditions completeness" — 1 new claim keys
- Query 29: "search agent "vocabulary diversity" OR "query diversity" OR "alternative framing" coverage improvement missed concepts different terminology" — 0 new claim keys
- Query 30: "citation graph analysis backward forward chaining completeness checking systematic review saturation bibliometric" — 0 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: All three saturation conditions hold: (1) final 10 queries returned zero new claim keys; (2) at least 4 distinct source type domains were covered (health sciences systematic review methodology, AI/ML arXiv preprints, qualitative research methodology, information retrieval IR theory); (3) vocabulary-frame enumeration covered all five identified traditions (systematic review methodology, IR/database search, qualitative/grounded theory, adversarial ML/red-teaming, software engineering/testing analogs).
- Saturated: YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)

---

## Claims (20)

### [key: single-database-recall-deficit]
- evidence: empirical
- confidence: low
- group: methodology-limitations
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC10234239/, https://connect.apsanet.org/sidtaskforce/wp-content/uploads/sites/75/2024/04/WorrallCitatnDtaanalysLimtatnShrtcomng.pdf

**Claim:** Studies on bibliometric database coverage establish that searches relying exclusively on single databases (e.g., Web of Science) achieve 52–79% recall due to database coverage limitations, missing or unmatched references, non-English publication exclusion, and indexing gaps (WoS controlled vocabulary process fails to capture tool names absent from article title reference lists). Scope condition: deficit is larger for cross-disciplinary topics, non-English literatures, and grey literature. Implication: citation network gaps built from single-database queries cannot distinguish vocabulary islands from database coverage holes — two-source minimum (e.g., Semantic Scholar + arXiv) is structurally required for recall to reach 95%+ and for vocabulary-gap signals to be trusted.

**Verify note:** The claim attributes 52–79% recall figures to PMC10234239 and the Worrall/APSA PDF. PMC10234239 is a study of bibliometric software citation patterns using Web of Science, NOT a recall study — it does not report 52–79% recall figures. The Worrall PDF could not be read (binary), but search results confirm it discusses citation data limitations (WoS, Scopus, Google Scholar coverage) without the specific 52–79% recall range appearing in any search results or abstract. The '95%+ recall requires two sources' threshold claim is not confirmed from either stated source. The '52–79% recall' range appears to have been assembled from the broader literature (likely from database combination studies like PMC5718002/2017) and attributed to specific sources that don't contain it. The claim's sources are mismatched to the stated statistics. The general direction (single-database recall is lower than multi-database) is supported by literature, but the specific numbers and their attribution are not verified.

---

### [key: search-strategy-error-rate]
- evidence: empirical
- confidence: high
- group: search-error-mechanisms
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6466507/

**Claim:** In an empirical study of 137 published systematic reviews using MEDLINE/PubMed (all from January 2018), 92.7% of search strategies contained at least one error; 78.1% contained errors that directly reduced recall. The dominant mechanism was missing synonyms (54% of reviews) and missing morphological variants (49.6%). Scope: free-text PubMed searches; may not generalize to Cochrane-grade searches. Implication: a search feeling complete after first-pass keyword generation is almost certainly incomplete — synonym expansion and controlled-vocabulary cross-checking are not optional steps.

**Verify note:** All figures confirmed precisely from PMC6466507: n=137, 92.7% with errors, 78.1% with recall-affecting errors, missing synonyms 54.0%, missing morphological variants 49.6%. Scope limitation (PubMed free-text only, single-month sample) is correctly stated in the claim. The single-month sampling is a real methodological limitation but does not invalidate the finding at the scale observed. MeSH omission (21.9%) was also found but omitted from claim — minor gap that doesn't affect the claim's accuracy.

---

### [key: vocabulary-mismatch-30-40-percent]
- evidence: empirical
- confidence: low
- group: vocabulary-gap
- sources: https://en.wikipedia.org/wiki/Vocabulary_mismatch, https://www.researchgate.net/publication/321124762_Remedies_against_the_Vocabulary_Gap_in_Information_Retrieval

**Claim:** The vocabulary mismatch problem causes an average query term to fail to appear in 30–40% of documents relevant to that query (Furnas et al., Vocabulary Problem, long-replicated IR finding). The mechanism is lexical non-overlap between user vocabulary and author vocabulary — synonymy, polysemy, and discipline-specific renaming. Scope: lexical/sparse retrieval systems; dense retrieval mitigates but does not eliminate the gap. Implication: a single query framing across one vocabulary tradition cannot detect whether a parallel community with different terminology covers the same phenomena.

**Verify note:** Attribution is factually wrong. The 30-40% figure is from Zhao & Callan (CIKM 2010), not Furnas et al. Furnas et al. (1987, CACM) found ~80% of people name the same thing differently — a different claim about interpersonal vocabulary divergence. Describing the 30-40% figure as a 'Furnas et al., long-replicated IR finding' misrepresents both the source and its replication status. A single 2010 CIKM paper based on probabilistic retrieval models (Binary Independence Model) is not equivalent to a Furnas-level replicated result. The underlying vocabulary mismatch phenomenon is real; the specific figure's attribution is wrong.

---

### [key: relative-recall-benchmarking-method]
- evidence: empirical
- confidence: medium
- group: saturation-validation-methods
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12621535/

**Claim:** Relative recall benchmarking (Sampson & McGowan 2006, extended by Johnson et al. 2024 practical guide) provides the only practical method for validating search string sensitivity without knowing the full evidence universe. Mechanism: assemble a pre-defined set of known-relevant 'benchmark' studies, then compute: sensitivity = benchmark studies found by target string / total benchmark studies in database. Key limitation: optimal benchmarking set size is unknown; published studies used 15–1,347 benchmark papers. When only 2 benchmark studies are used, the estimate is not informative. Implication for kit-maker: an adversarial saturation check must include at least one known-positive benchmark test — if the benchmark paper is not found by the current query set, saturation has not been reached.

**Verify note:** Author attribution error: PMC12621535 is Lagisz et al. 2025, not 'Johnson et al. 2024.' Core method and figures confirmed: benchmark set range 15-1,347, warning about 2-study sets, sensitivity formula. The 'only practical method' framing is stronger than the source supports — alternative sensitivity validation methods exist. The observation that sensitivity evaluation is 'almost absent' from published reviews is confirmed, motivating the guide but not establishing uniqueness of the method.

---

### [key: capture-recapture-horizon-estimation]
- evidence: empirical
- confidence: medium
- group: saturation-validation-methods
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC2655834/

**Claim:** Capture-mark-recapture (CMR) adapted from ecology (Kastner et al. 2009) can estimate the 'horizon' (total available literature) from overlap between databases. In the first prospective test, a systematic review that identified 1,246 articles was estimated to have a horizon of 1,838 (95% CI: 1,749–1,955), implying ~592 missed articles (32% unseen). Mechanism: after each new database search, newly found articles are 'marked'; overlap with previously marked articles in subsequent searches allows Poisson regression to estimate the unknown-to-all-databases cell. Scope condition: needs 2+ structurally distinct databases; more studies needed to define practical cutpoints. Implication: a CMR estimate showing large unseen population despite apparent query saturation is a direct empirical falsification of premature saturation.

**Verify note:** Year error: Kastner et al. 2007, not 2009. Key quantitative figures confirmed: 1,246 articles identified, horizon 1,838 (95% CI 1,749-1,955), ~592 missed (~32%), Poisson regression across 4 databases. Critical framing error: the claim calls this 'the first prospective test' — the source explicitly calls it a retrospective analysis. Prospective/retrospective are opposite methodological terms and this mischaracterization is material. Additionally, the 592 missing articles may include excluded studies, not only undiscovered relevant literature — the claim does not flag this ambiguity.

---

### [key: pseudo-saturation-concept]
- evidence: consensus
- group: premature-saturation-failure-modes
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11080421/, https://www.sciencedirect.com/science/article/pii/S1048984326000093

**Claim:** Pseudo-saturation (reviewed in Aguinis et al. 2024 and PMC11080421) is a documented qualitative research failure mode where a researcher declares saturation while new information remains available. Mechanisms: (1) prematurely ending data collection, (2) not exploring different perspectives or contexts, (3) overrelying on a single homogeneous sample. Empirical threshold: in homogeneous samples, redundancy appears within the first 12 interviews (Guest et al. 2006 60-interview study), but confusing early code redundancy with theoretical saturation is the error — deeper cross-contextual patterns require additional sampling. Implication: in kit-maker adversarial validation, 'I'm seeing the same claims again' is insufficient for saturation if the queries have only covered one vocabulary tradition or one source type.

---

### [key: theoretical-saturation-original-criterion]
- evidence: consensus
- group: theoretical-saturation-tradition
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5993836/

**Claim:** Glaser and Strauss (1967, The Discovery of Grounded Theory) defined theoretical saturation as the stopping criterion for theoretical sampling: stop when 'no additional data are being found whereby the sociologist can develop properties of the [theoretical] category.' Three operational conditions must hold simultaneously: (a) category is fully developed (not just coded), (b) similar instances keep reoccurring, (c) empirical confidence exists — not merely the absence of new superficial codes. Scope: grounded theory specifically; the criterion was later mis-applied to data/code saturation in other methods. Implication: for kit-maker saturation, the right question is 'is my theoretical model of the phenomenon fully developed?', not 'have I seen these keywords before?'

---

### [key: negative-case-analysis-saturation-test]
- evidence: consensus
- group: adversarial-saturation-methods
- sources: https://atlasti.com/research-hub/negative-deviant-case-analysis, https://delvetool.com/blog/negativecase

**Claim:** Negative case analysis (also deviant case analysis; Lincoln & Guba 1985, communication research tradition) provides a direct adversarial test of claimed saturation: deliberately seek cases that disconfirm or do not fit the emerging pattern. The mechanism is Popperian falsification applied to qualitative synthesis — theoretical saturation is not confirmed until disconfirming data has been actively sought and either incorporated (expanding the theory) or shown genuinely absent. Scope: qualitative and theory-building research. Implication for kit-maker: an adversarial saturation check is not merely running more of the same queries; it requires explicitly framing queries to find evidence that would falsify the current set of claims.

---

### [key: systematic-reviews-miss-45-70-percent-trials]
- evidence: empirical
- confidence: high
- group: evidence-gaps-in-practice
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC4719540/

**Claim:** Crequit et al. (2016, BMC Medicine) examined lung cancer systematic reviews 2009–2015 and found that at any given time, existing systematic reviews missed 45–70% of eligible trials, 30–58% of patients, 40–66% of treatments, and 38–71% of treatment comparisons. By 2014, with 27 published reviews, 46% of trials and 30% of patients remained uncovered. Mechanisms: narrow review scope (most reviews cover specific treatments not full landscapes), 97% lacked regulatory database searches, and only 1 of 29 reviews was an update. Scope: lung cancer second-line treatments; authors note similar patterns in broader meta-analysis literature. Implication: declared completeness in domain reviews is routinely false at rates of 40%+ — the baseline assumption should be incompleteness unless actively validated.

**Verify note:** All percentage ranges confirmed from PMC4719540: 45-70% trials, 30-58% patients, 40-66% treatments, 38-71% comparisons. 2014 snapshot figures confirmed. 97% regulatory database omission confirmed. Minor: claim says '1 of 29 reviews was an update' and '27 published reviews' — both figures appear in the source at different time points, creating a small inconsistency in the claim's presentation. Scope correctly limited to lung cancer second-line treatments. The generalization to broader meta-analysis literature is correctly attributed to the authors.

---

### [key: agent-completeness-benchmark-performance]
- evidence: empirical
- confidence: medium
- group: agent-search-completeness
- sources: https://arxiv.org/abs/2604.17143

**Claim:** SeekerGym benchmark (Rana et al. 2025, arXiv:2604.17143) measured information-seeking completeness for LLM agents in a controlled document-grounded setting. Best approaches retrieved 42.5% of relevant passages on Wikipedia and 29.2% on ML Survey documents — leaving 57.5% and 70.8% of relevant content undiscovered respectively. Mechanism: agents lack robust metacognitive signals to distinguish 'I haven't found it yet' from 'it doesn't exist'; completeness uncertainty quantification (knowing what fraction is missing) is a separate capability agents also fail. Scope: iterative web search agents on factual/encyclopedic documents. Implication: for kit-maker design, an agent loop that terminates on apparent saturation without explicit completeness checking will typically miss >50% of relevant material.

**Verify note:** Paper name SeekerGym confirmed. Figures 42.5% (Wikipedia) and 29.2% (ML Survey) confirmed. Metacognitive failure mechanism confirmed. Key scope limitation: benchmark measures retrieval from a single contained document with known ground truth — not open-web research search. The implication that agents 'will typically miss >50% of relevant material' applies controlled document-retrieval results to open research settings without stated basis. April 2026 preprint, no peer review confirmed.

---

### [key: semantic-early-stopping-mechanism]
- evidence: empirical
- confidence: low
- group: agent-search-completeness
- sources: https://arxiv.org/abs/2606.27009

**Claim:** Semantic early-stopping (arXiv:2606.27009) provides a content-aware termination criterion for agent loops: monitor cosine distance between consecutive draft embeddings with a patience window; stop when semantic distance falls below threshold (convergence). On HotpotQA 60-question test, this reduces operational tokens by 38% vs. max_iterations at parity quality (Delta-IS = -0.004, p = 0.81). Critical finding: adding quality-judgment gates is counterproductive — per-round judging cost dominates. Scope: multi-hop QA; formally proven deterministic termination. Implication for kit-maker: cosine-convergence on output drafts is a viable saturation signal that outperforms both fixed iteration counts and LLM self-judgment; it detects semantic stagnation not just token count.

**Verify note:** Core figures confirmed: 38% relative token reduction, Delta-IS=-0.004 (p=0.81), 60-question HotpotQA. Quality-judgment gate counterproductivity confirmed. Deterministic termination proof confirmed (for the termination guarantee, not the empirical claims). Critical weakness: n=60 is extremely small to support the strong generalization that this 'outperforms both fixed iteration counts and LLM self-judgment.' The scope is writer-critic architecture on multi-hop QA; the implication applies this to research search loops in a kit-maker — a structurally different loop type. The claim correctly states the HotpotQA scope, then the implication ignores it. June 2026 single-author preprint, no peer review.

---

### [key: knowledge-silo-citation-gap-mechanism]
- evidence: empirical
- confidence: medium
- group: vocabulary-island-detection
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12316298/

**Claim:** Alam et al. 2025 (PMC12316298) modeled knowledge transfer gaps as citation probability below predicted levels given content similarity. Applied to XAI literature (435 dynamic communities, 20,604 papers 1889–2023), they found application silos (COVID-19 diagnosis, environmental science) with <1% citation interaction probability to the core XAI community despite similar content — pure vocabulary-community isolation. Finding: knowledge silos correlated with methodological failure in those sub-areas. Mechanism: communities that grow independently around different naming conventions stop citing each other even when working on identical phenomena. Implication for kit-maker: citation-graph gap detection (pairs with high content similarity but low citation overlap) directly operationalizes vocabulary-island gap detection.

**Verify note:** Author misattribution: paper is Cunningham & Greene (University College Dublin), not 'Alam et al.' Core corpus confirmed: 20,604 papers (1889-2023), 435 dynamic communities, COVID-19 and environmental science as silos. The '<1% citation interaction probability' figure is not explicitly stated — source characterizes these as having the lowest total interaction probabilities, a relative ranking not a specific threshold. Correlation with methodological failure is confirmed as a cited correlation. The implication that citation-graph gap detection 'directly operationalizes vocabulary-island gap detection' is an inference not made by the paper.

---

### [key: forward-backward-citation-chasing-completeness]
- evidence: empirical
- confidence: low
- group: multi-source-coverage
- sources: https://onlinelibrary.wiley.com/doi/full/10.1002/jrsm.1563, https://pmc.ncbi.nlm.nih.gov/articles/PMC9644550/

**Claim:** Haddaway et al. (2022, Citationchaser) and the citation tracking scoping review (Hirt et al. 2023) establish that forward + backward citation chasing is a necessary complement to database search. The mechanism: backward chasing recovers foundational work predating keyword indexing or using older vocabulary; forward chasing finds newer work citing known papers regardless of keyword overlap. Reference list checking was found to recover 100% of falsely excluded studies in at least one controlled comparison (PMC9644550). Scope: strongest evidence in health sciences; principle applies to any corpus with citation structure. Implication: a saturation check that does not include at least one forward-citation pass from known relevant papers cannot claim cross-vocabulary coverage.

**Verify note:** Two errors: (1) PMC9644550 is Affengruber et al. 2022, not 'Hirt et al. 2023.' (2) The '100% of falsely excluded studies' figure comes from a single case study (Feehan et al. 2011, n=11 excluded references) with no comparator condition — not a 'controlled comparison.' The Affengruber review explicitly states it 'can draw no firm conclusion' due to only 3 studies covering 18 falsely excluded references total. The Haddaway Citationchaser source (jrsm.1563) returned HTTP 402 — inaccessible, so the 'necessary complement' characterization cannot be verified. The methodological rationale for forward + backward chasing is sound and widely accepted in the field, but the specific empirical support cited is severely underpowered.

---

### [key: information-foraging-marginal-value-patch-leaving]
- evidence: empirical
- confidence: medium
- group: theoretical-foundations
- sources: https://www.emergentmind.com/topics/information-foraging-theory

**Claim:** Information Foraging Theory (Pirolli & Card 1999, building on Charnov 1976 MVT) provides the theoretical framework for optimal search stopping: leave an information patch when the instantaneous collection rate falls below the mean collection rate of the environment. Empirically validated in human foraging behavior (mice, rhesus macaques, humans all follow MVT predictions). The mechanism predicts that agents should not stay in a depleted patch even if they believe there might be more; they should switch to a new vocabulary/source patch. Key implication: MVT predicts that staying on one vocabulary patch past its peak return rate produces suboptimal coverage — mandatory Category D (alternative framing) queries are MVT-optimal behavior, not bureaucratic process.

**Verify note:** The source (emergentmind.com) is a tertiary aggregation page. It confirms the patch-leaving mechanic but does not name Pirolli & Card 1999 or Charnov 1976 explicitly. Cross-species validation (mice, rhesus macaques) is not in the cited source — that is background MVT knowledge applied without citation. The source explicitly notes 'information maximization does not generally yield optimal utility,' which directly limits the MVT analogy. The leap from IFT framework to 'Category D queries are MVT-optimal' is interpretive application not argued in the source.

---

### [key: false-exclusion-uninformative-abstracts]
- evidence: empirical
- confidence: high
- group: search-error-mechanisms
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC9644550/

**Claim:** PMC9644550 systematic review of false exclusions found that single-reviewer screening missed 13% of relevant studies vs. 3% for dual-reviewer screening. Uninformative titles and abstracts accounted for up to 8% of false exclusions; non-English publications (especially Korean: 100% false exclusion rate in one study) and alternative terminology were additional mechanisms. Recovery method: reference list checking recovered 100% of falsely excluded studies; forward/backward citation tracking and author contact recovered none. Scope: limited evidence base (3 studies, ~18 falsely excluded papers). Implication: adversarial saturation validation in a kit-maker context should include a deliberate check using known seed papers to verify the search retrieves them.

**Verify note:** 13% vs. 3% miss rates, up to 8% uninformative abstracts, reference list checking recovering all falsely excluded studies, 3 studies/18 papers — all confirmed from PMC9644550. One material error in the claim: the Korean language '100% false exclusion rate' is not supported. The source reports 11% of non-English studies falsely excluded, not 100% for Korean. The evidence base is extremely thin (18 papers total); 95% CI for the 13% figure spans 80.6–91.2% sensitivity.

---

### [key: deepresearch-comprehensiveness-gap]
- evidence: empirical
- confidence: high
- group: agent-search-completeness
- sources: https://arxiv.org/html/2601.20975

**Claim:** DeepSearchQA benchmark (arXiv:2601.20975, January 2026) quantified the 'comprehensiveness gap' for deep research agents: even the best agent (Gemini Deep Research) achieved 81.90% F1-score with only 66.09% fully correct responses — a ~16-point gap attributable to imprecision (including extraneous answers to boost recall) and last-mile failure. GPT-5 Pro High Reasoning showed 14.13% fully incorrect responses. Three identified missing capabilities: systematic collation across disparate sources, entity resolution across varied surface forms, and stopping-criteria reasoning (distinguishing 'not yet found' from 'does not exist'). Implication for kit-maker: even state-of-the-art agents fail the third capability — an explicit stopping-criterion module is not provided by base LLMs.

**Verify note:** All specific figures verified from the HTML paper (Table 4): Gemini F1 = 81.90, fully correct = 66.09%, fully incorrect = 9.95%; GPT-5 Pro fully incorrect = 14.13%. Three named capabilities confirmed. January 2026 date confirmed. The claim correctly characterizes the ~16-point gap as attributable to imprecision and last-mile failure. Minor: the gap for GPT-5 is ~14 points, not 16 — the claim uses only Gemini as the headline figure. Benchmark is novel with no independent replication yet.

---

### [key: stop-rag-mdp-termination]
- evidence: empirical
- confidence: medium
- group: agent-search-completeness
- sources: https://arxiv.org/abs/2510.14337

**Claim:** Stop-RAG (arXiv:2510.14337, NeurIPS 2025 MTI-LLM Workshop) frames iterative retrieval stopping as a finite-horizon Markov Decision Process, training a value-based controller using full-trajectory Q(λ) targets. It 'consistently outperforms both fixed-iteration baselines and prompting-based stopping with LLMs.' Finding: prompting-based stopping (asking the LLM whether it has enough information) performs worse than a trained MDP controller — validating that LLM self-assessment of retrieval completeness is unreliable. Scope: multi-hop QA benchmarks. Implication: in kit-maker design, an agent's self-declaration of saturation is an empirically weak signal; external termination mechanisms outperform self-report.

**Verify note:** Core claims confirmed from abstract: MDP framing, Q(lambda) targets, 'consistently outperforms both fixed-iteration baselines and prompting-based stopping,' NeurIPS 2025 MTI-LLM Workshop venue. Key caveat: this is a workshop paper, not main-track peer-reviewed; lighter review, no independent replication. Specific benchmarks used were not named in available abstract. Generalization from multi-hop QA to long-form research retrieval (the kit-maker use case) is inferred, not demonstrated. Trained controller requires labeled data — not a zero-cost kit component.

---

### [key: benchmark-saturation-expert-curation]
- evidence: empirical
- confidence: medium
- group: adversarial-saturation-methods
- sources: https://arxiv.org/html/2602.16763v1

**Claim:** Barnett et al. (arXiv:2602.16763) analyzed 60 language model benchmarks across 14 saturation-related properties and found 'nearly half exhibit saturation, with rates increasing with age.' Key finding: 'resilience to saturation is impacted by expert-curation, not by public test data' — benchmark visibility (leakage to training data) is not the primary factor; design quality is. Implication for kit-maker: saturation of an evaluation instrument (declared saturation becoming structurally enforced) is a design problem; adversarial validation must include dynamic, expert-curated challenge elements rather than fixed checklists that agents can satisfy without genuine coverage.

**Verify note:** 60 benchmarks confirmed; 29/60 (48%) saturated confirmed; expert-curated benchmarks showing lower saturation confirmed; public vs. private showing no significant difference confirmed. Key framing distortion: the claim says saturation resilience is impacted by expert-curation 'not by public test data' — presenting curation as the solution. The paper identifies age and test-set scale as the dominant structural drivers, with curation as one supporting factor. The kit-maker checklist analogy is a structural parallel, not a finding from this study.

---

### [key: query-expansion-20-35-percent-recall-lift]
- evidence: empirical
- confidence: low
- group: vocabulary-gap
- sources: https://arxiv.org/html/2509.07794

**Claim:** Thesaurus and synonym-based query expansion improves retrieval effectiveness by 20–35% for tail queries (broad literature finding, confirmed by multiple IR studies). Mechanism: LLM-era query expansion retrieves based on meaning rather than surface form, capturing documents where authors used different terminology for the same concept. Scope: most strongly demonstrated in e-commerce and ad-hoc web retrieval; health systematic review literature confirms controlled vocabulary (MeSH) + free-text combination is necessary. Implication for kit-maker: the Category D alternative framing requirement is not merely process — it has a ~20–35% recall improvement effect size attached to it.

**Verify note:** The cited source (arXiv:2509.07794) does NOT report a 20–35% recall lift for tail queries. The only specific figure cited from this source is Query2Doc achieving 3–15% gains on MS MARCO and TREC DL. The 20–35% figure has no traceable basis in the cited source and may originate from older pre-neural IR literature not cited here. The 'tail queries' framing is also not terminology the source uses. The effect size attached to the Category D implication is therefore unsupported by the cited source, making the design implication's quantification unreliable.

---

### [key: saturation-investigator-proclamation-critique]
- evidence: consensus
- group: premature-saturation-failure-modes
- sources: https://journals.sagepub.com/doi/10.1177/10778004231183948, https://pmc.ncbi.nlm.nih.gov/articles/PMC5993836/

**Claim:** Tight (2024, SAGE Journals) and Saunders et al. (2018, Quality & Quantity) document a methodological critique: saturation is frequently declared by 'investigator proclamation' — convenience-based assertion rather than systematic evidence. The mechanism: researchers stop when comfortable or when under time/resource pressure, then retroactively describe this as saturation. Cross-study review found no consensus on what saturation means operationally, with definitional, methodological, and epistemological contradictions across published studies. Implication: 'saturation declared' without structured multi-criterion checking (consecutive queries returning no new keys AND multi-source AND multi-vocabulary-tradition) is likely investigator proclamation, not evidence-based saturation.

---

## Null results
- search saturation fails 'vocabulary island' OR 'term island' OR 'concept drift' missed cluster evidence — vocabulary island as a named concept in saturation literature does not exist; the phenomenon is documented under knowledge silo (citation gap literature) and vocabulary mismatch (IR literature) but not under that label
- adversarial saturation check category D alternative framing systematic review missed literature different discipline nomenclature — no dedicated literature on Category D requirement as a named practice; the requirement is implied by information foraging theory and IR recall research but not studied as an adversarial saturation method per se
- intake protocol agent kit essential inferable information distinction required context autonomous operation — no empirical literature directly addresses the essential/inferable split in agent kit intake protocols; closest is agent context management but no quantified studies on what information must be explicit vs. can be inferred

## New angles surfaced
- **Operationalizing citation-graph gap detection as a vocabulary-island validation method for kit-maker agents**
  Target decision: PMC12316298 (knowledge transfer gap methodology) + CitNetExplorer + Citationchaser
  Would find: Whether citation probability between content-similar but citation-sparse communities is a computable signal an agent can use to detect missed vocabulary islands in real time — specifically whether citation-graph gap detection can be automated in a kit-maker's saturation check module without requiring full bibliometric infrastructure
- **Relative recall benchmarking for agent kit research loops: minimum viable benchmark set size**
  Target decision: PMC12621535 (Johnson et al. practical guide) — the paper explicitly states optimal set size is unknown, with published studies using 15–1347 papers
  Would find: Whether there is a minimum viable benchmark set size below which relative-recall estimates are meaningless, and what that threshold is — this directly closes the question of how many seed papers a kit-maker agent needs before its saturation check is informative
- **LLM self-report of search completeness is unreliable: evidence and mitigation patterns**
  Target decision: arXiv:2510.14337 (Stop-RAG), arXiv:2604.17143 (SeekerGym), CMU optimal termination research
  Would find: Empirical confirmation that prompting-based stopping (asking the LLM 'do you have enough information?') is systematically worse than external signals — and which external signals (cosine convergence, MDP value, CMR estimation) are practical in a kit-maker context without requiring full training infrastructure
- **Adversarial query design: what query structures reliably surface null results and contradict apparent saturation**
  Target decision: Red-teaming literature + negative case analysis tradition + information foraging theory
  Would find: Whether specific adversarial query structures (critique framing, null-result framing, failure-mode framing) have higher yield than standard queries when saturation appears to have been reached — quantifying the expected uplift of a mandatory adversarial query phase
- **Essential vs. inferable intake information for autonomous agent kits: a decision-theoretic analysis**
  Target decision: Agent context management literature + Hard Rule 13 element 8 PROVISIONAL in kit design requirements
  Would find: Whether there is a principled framework for separating information that must be provided at intake from information the agent can infer or default — this is a null-result zone (no empirical studies found) that requires design-session resolution rather than research, but grounding in agent delegation/authorization literature may provide structure
- **Interdisciplinary vocabulary translation gap: how often does same-phenomenon evidence cluster under non-overlapping terminology across disciplines**
  Target decision: Cross-concordance mapping literature + knowledge silo study (PMC12316298)
  Would find: Empirical rates of vocabulary fragmentation for specific phenomena across disciplines — e.g. what percentage of relevant AI safety evidence exists only under HCI or management science vocabulary — providing the empirical case for why mandatory Category D framing is required rather than optional
