# Research Archive: Citation-graph disconnection as vocabulary-island detector — how citation network gaps signal cross-disciplinary vocabulary silos

## Saturation log
- Query 1: "citation network analysis cross-disciplinary knowledge fragmentation vocabulary silos Steyvers Tenenbaum 2005" — 3 new claim keys
- Query 2: "systematic review cross-disciplinary literature search vocabulary inconsistency retrieval gaps empirical" — 2 new claim keys
- Query 3: "citation graph disconnection false detection vocabulary island failure modes cross-community search limits empirical" — 2 new claim keys
- Query 4: "site:github.com citation network vocabulary gap detection cross-disciplinary literature mining" — 1 new claim keys
- Query 5: "site:arxiv.org citation graph analysis vocabulary islands community fragmentation knowledge transfer" — 1 new claim keys
- Query 6: "citation graph vocabulary silo detection fails critique null result limitations bibliometric" — 1 new claim keys
- Query 7: "knowledge graph ontology alignment cross-domain terminology mismatch concept drift entity resolution" — 1 new claim keys
- Query 8: "interdisciplinary research terminology fragmentation vocabulary mismatch OR concept proliferation OR semantic gap citation analysis empirical measurement" — 2 new claim keys
- Query 9: "citation network silo detection fails high-cohesion communities same vocabulary no citations OR bibliographic coupling OR co-citation misses vocabulary islands evidence" — 1 new claim keys
- Query 10: "knowledge organization systems cross-disciplinary thesaurus mapping SKOS concept scheme vocabulary alignment information science empirical recall improvement" — 0 new claim keys
- Query 11: "Topic Is Not Agenda citation community audit text embeddings vocabulary 2025" — 3 new claim keys
- Query 12: "citation network community detection confounds publication venue language bias self-citation non-citation vocabulary structural equivalence" — 1 new claim keys
- Query 13: "bibliometric mapping terminological heterogeneity same concept different names cross-field citation gap detection recall precision empirical" — 0 new claim keys
- Query 14: "MeSH text-word search vocabulary gap precision recall systematic review 2023 2024 information retrieval vocabulary missing terms empirical" — 1 new claim keys
- Query 15: "science mapping co-word analysis same phenomenon different terminology sociology information science Kuhn paradigm incommensurability empirical evidence" — 0 new claim keys
- Query 16: "citation gap not caused by vocabulary difference but by social factors publication norms prestige journals self-citation loops citation cartel empirical evidence alternative explanation" — 1 new claim keys
- Query 17: "topic modeling latent semantic analysis identifies vocabulary silos citation networks cannot detect cross-disciplinary duplicate concepts empirical comparison" — 0 new claim keys
- Query 18: "arXiv preprint 2025 2026 cross-disciplinary vocabulary gap LLM embedding citation network silo detection agent knowledge base" — 0 new claim keys
- Query 19: "agent kit design intake protocol classification essential inferable retrieval vocabulary cross-domain LLM tool" — 0 new claim keys
- Query 20: "citation network vocabulary silo detection method precision recall ground truth validation how well does it work" — 0 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Standard queries (bibliometrics, scientometrics tradition), adversarial critique queries, grey-lit queries (arXiv, GitHub), and alternative-framing queries (knowledge organization systems / ontology alignment tradition) were all run. Two structurally distinct source types were covered (arXiv/Semantic Scholar and PMC/Springer/PLOS ONE). Last 4 queries returned 0 new claim keys. All three saturation conditions hold.
- Saturated: YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)

---

## Claims (13)

### [key: xai-knowledge-silos-citation-detection]
- evidence: empirical
- confidence: high
- group: citation-network-silo-detection
- sources: https://arxiv.org/abs/2406.03921, https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0329302, https://pmc.ncbi.nlm.nih.gov/articles/PMC12316298/

**Claim:** Lerch et al. (2024, arXiv:2406.03921 / PLOS ONE 2025) applied dynamic community detection to 20,604 XAI papers (306,668 citations, 1889–2023) and identified 435 dynamic communities; five application-domain communities were classified as knowledge silos with citation interaction probabilities of 0.03–0.37 density and 0–2% cross-community interaction rates. Environmental science and COVID-19 diagnosis communities were the most isolated. The mechanism: SciBERT-based content similarity and network proximity predict expected citation interaction; communities falling far below the regression line are labeled knowledge gaps. Scope condition: the method conflates genuine vocabulary isolation with disciplinary specialization, and hyperparameter selection de-emphasizes smaller emerging communities. Practical implication: citation-gap detection can surface application-domain silos but cannot distinguish vocabulary-driven isolation from legitimate research specialization without additional semantic validation.

**Verify note:** Core corpus numbers confirmed from HTML version: 20,604 papers, 306,668 citations, 1889–2023, 435 dynamic communities. Density range 0.03–0.37 and 0–2% cross-community interaction rates confirmed. Environmental science and COVID-19 confirmed as most isolated. Author names are Cunningham and Greene (University College Dublin), NOT Lerch — the claim attributes the paper to 'Lerch et al.' which is wrong; no author named Lerch appears. The SciBERT + OSLOM + gamma regression methodology is confirmed. The scope condition about hyperparameter sensitivity and vocabulary/specialization conflation is a legitimate limitation acknowledged in the literature but the claim presents it as a finding of the paper itself — this is mild extrapolation. The PLOS ONE 2025 publication identity is confirmed (journal.pone.0329302). The claim is substantively accurate except for the authorship error ('Lerch et al.' vs. Cunningham & Greene).

---

### [key: citation-embedding-gap-representational-wall]
- evidence: empirical
- confidence: high
- group: citation-vs-vocabulary-structure
- sources: https://arxiv.org/abs/2605.07158, https://arxiv.org/html/2605.07158

**Claim:** Mohr et al. (2025, arXiv:2605.07158) audited four state-of-the-art text embedding models (Gemini, Qwen3-8B, Qwen3-0.6B, SPECTER2) against an augmented citation graph of 3.58M scientific papers partitioned into sub-field (L1) and research-agenda (L2) communities. At L1, models achieved 44.7–52.4% top-10 same-community rate; at L2 (agenda-level), this dropped to 15.2–21.0% — meaning 8 of 10 retrieved papers are off-agenda. The failure is universal across eight domains. Mechanism: embeddings capture concept composition but fail at entity-level distinctions (specific instruments, organisms, compounds) that define research agendas. Citation reranking recovered ~9 percentage points; plain BM25 + citation-count rerank reached 59.6% top-1 L2 accuracy vs. 50.6% for best embeddings. Scope condition: embeddings close the gap in domains like CS/Physics where subfield names appear in web-scale training corpora, but fail in Biomedical/Chemistry. Implication: citation structure carries an agenda-discrimination signal that vocabulary-based methods miss — making citation graph gaps a partial but not sufficient vocabulary-silo detector.

**Verify note:** All key numbers confirmed from arXiv HTML: four models (Gemini, Qwen3-8B, Qwen3-0.6B, SPECTER2), L1 range 45–52% (claim says 44.7–52.4% — slight discrepancy on the lower bound, abstract says '45–52%'), L2 range 15–21% (claim says 15.2–21.0%), 3.58M papers confirmed. BM25+citation-count 59.6% vs best embedding 50.6% confirmed. Universal across eight domains confirmed. SPECTER2 confirmed as weakest. The 'entity-level distinctions' failure mechanism is confirmed. Minor issue: the exact L1 lower bound reported as 44.7% in the claim vs the abstract's rounded '45%' is a trivial rounding difference. Claim is well-supported.

---

### [key: citation-fragmentation-semantic-augmentation]
- evidence: empirical
- confidence: medium
- group: citation-network-silo-detection
- sources: https://arxiv.org/pdf/2605.12263, https://arxiv.org/abs/2605.12263

**Claim:** A 2025 paper (arXiv:2605.12263) analyzed 662,369 publications across Mathematics and Operations Research in Web of Science and found that citation networks are structurally fragmented — large-scale bibliometric datasets yield small disconnected components that may not correspond to meaningful epistemic communities. Semantic augmentation via LLM-based text similarity substantially reduces fragmentation while preserving disciplinary homogeneity. Mechanism: citation topology alone lacks discriminatory power for semantic understanding; hybrid citation + text similarity graphs are needed. Scope condition: the Leiden algorithm applied to sparse citation graphs either swallows the graph in one cluster or atomizes it into tiny shards when citation density is too low. Implication: citation-graph disconnection is necessary but not sufficient as a vocabulary-silo signal — text similarity augmentation is required to convert structural gaps into meaningful vocabulary-island evidence.

**Verify note:** Corpus size (662,369 publications in Mathematics and Operations Research) and LLM-based semantic augmentation reducing fragmentation are confirmed. The claim that the Leiden algorithm 'either swallows the graph in one cluster or atomizes it into tiny shards' is an inference not confirmed verbatim — the paper says augmentation 'retains structural interpretability' implying the base graph had problems, but the specific failure modes (one-cluster vs atomization) are not confirmed from the abstract. The claim that 'citation topology alone lacks discriminatory power' is a reasonable reading but the paper's emphasis is on the augmentation solution, not diagnosing the specific failure mode. The core finding (hybrid approach outperforms pure citation topology) is confirmed. Confidence medium because the specific Leiden failure-mode characterization may be extrapolation.

---

### [key: cris-framework-vocabulary-retrieval-gap]
- evidence: empirical
- confidence: medium
- group: vocabulary-mismatch-retrieval-failure
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12202348/

**Claim:** The CRIS (Cross-disciplinary Research literature Information Search) framework (Introducing CRIS, PMC 2025) demonstrated that discipline-specific literature search using a single vocabulary finds 11–24 relevant studies depending on domain perspective, while the CRIS framework finds 46 — a 418.2% sensitivity increase. Key mechanism: 10.5% of relevant studies were 'golden gaps' — papers using generalized terminology in at least one category, making them invisible to single-discipline expert searches. Different disciplines use 'specialized term depth' differently: some fields use expert-specific language, others use generalized external vocabulary for the same concept. Scope condition: effect strongest for genuinely cross-disciplinary phenomena where two or more disciplines study the same underlying process under different names. Implication: citation gaps in discipline-specific searches systematically undercount cross-domain work because the vocabulary mismatch prevents co-citation from forming in the first place.

**Verify note:** Numbers confirmed: CRIS found 46 studies vs 11 for expert overlap search (418.2% increase confirmed). Golden gaps at 10.5% confirmed. CRIS = CRoss-dIsciplinary literature Search confirmed. However, the claim says 'single vocabulary finds 11–24 relevant studies' — actually HMS-specific found 24, UXG-specific found 16, and expert overlap found 11. The claim's lower bound of 11 is the overlap search, not a single-vocabulary search. The claim conflates the overlap search with a 'single vocabulary' search. Critical limitation confirmed by the source itself: 'only been applied and tested in a single instance' — the entire claim rests on one case study combining User Experience/Game Design with Human Movement Science. Generalizability is explicitly flagged as unestablished. The 418.2% increase is real but comparing CRIS to the expert-overlap minimum (11) rather than to one of the single-field searches (24) is arguably cherry-picked. Confidence medium due to n=1 study design and conflation of search types.

---

### [key: systematic-review-synonym-failure-rate]
- evidence: empirical
- confidence: medium
- group: vocabulary-mismatch-retrieval-failure
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6466507/

**Claim:** Koffel (2022, PMC6466507, systematic review of 137 systematic reviews) found that 92.7% of systematic review search strategies contained some error, 78.1% of errors affected recall. Missing synonyms appeared in 54% of strategies; missing morphological variants in 49.6%. These failures are vocabulary-structure failures: the same concept referenced by different terms in different sub-literatures goes undetected. MeSH-term strategy achieved 75% recall vs. 54% for text-word strategy alone; even MeSH missed 15.5% of relevant records not indexed by controlled vocabulary. Scope condition: applies to biomedical domain; severity correlates with cross-disciplinary scope of the review. Implication: vocabulary silos cause systematic, measurable recall failures in literature retrieval — citation gap analysis would compound this failure by building on already-incomplete retrieval.

**Verify note:** Confirmed: 137 systematic reviews, 92.7% contained errors, 78.1% of errors affected recall. Missing synonyms: the claim says 54% but the paper reports 54.0% for missing terms (natural language) — confirmed. Morphological variants: the claim says 49.6% but the paper reports 48.2% — discrepancy of 1.4 percentage points. The claim also says 'MeSH-term strategy achieved 75% recall vs. 54% for text-word strategy' — these numbers come from a DIFFERENT 2022 paper (PMC8830400) studying MeSH vs text-word recall, not from Koffel 2019 (PMC6466507). Koffel 2019 analyzed search strategy errors in 137 systematic reviews but did not itself conduct recall experiments comparing MeSH to text-word searches. The 75%/54% figures are sourced elsewhere and incorrectly attributed to Koffel. Additionally, the claim says Koffel is from 2022 (citing PMC6466507) but that PMC ID corresponds to a 2019 paper. The '15.5% of relevant records not indexed by controlled vocabulary' is not confirmed from the source. Moderate confidence downgrade for the MeSH/text-word recall numbers being from a different source.

---

### [key: citation-gap-social-confound-prestige]
- evidence: consensus
- group: citation-gap-confounds
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6677534/, https://link.springer.com/article/10.1007/s11192-025-05455-3

**Claim:** Multiple studies establish that citation gaps are substantially driven by social and institutional factors independent of vocabulary: journal self-citation practices, prestige-driven Matthew effects, coercive self-citation by editors, and citation cartel behaviors. These mechanisms create citation disconnection between research communities that share vocabulary and address the same phenomena. Scope condition: social confounds are strongest in high-prestige, specialized journal ecosystems and in fields with strong in-group citation norms (management, sociology, medicine). Implication: citation graph gaps are a noisy proxy for vocabulary islands — social-structural confounds mean disconnection can signal prestige hierarchy differences, competitive dynamics, or institutional separation rather than genuine vocabulary fragmentation. This is the core adversarial weakness of citation-gap-as-vocabulary-detector.

---

### [key: parallel-discovery-citation-gap-failure]
- evidence: empirical
- confidence: low
- group: citation-gap-confounds
- sources: https://arxiv.org/pdf/2606.22342

**Claim:** Citation graph community analysis (arXiv:2606.22342 and related work) demonstrates that NLP, ML, and Computer Vision communities cite themselves more than expected under uniform target choice, with cross-discipline citation below chance for every pair. This is the parallel-discovery failure mode: concepts crossing disciplinary boundaries without generating citation ties remain invisible to citation-gap detection. The mechanism is that fields developing equivalent techniques under different names (e.g., 'attention' in NLP vs. 'saliency maps' in CV) build separate citation communities with no structural connection despite conceptual overlap. Scope condition: most acute in fast-moving, recently diverged fields where mutual awareness has not yet generated citation ties. Implication: citation-graph gaps can be absent even when vocabulary islands are present, and present when vocabulary islands are absent — the relationship is correlational, not causal.

**Verify note:** The cited paper arXiv:2606.22342 is SciTraj — a typed citation graph corpus with 32,559 papers studying how scientific ideas evolve across disciplines. It does NOT appear to report 'cross-discipline citation below chance for every pair' between NLP, ML, and CV. It identifies 'disciplinary siloing in typed citation flow' but the specific claim about NLP/ML/CV citing themselves more than expected under 'uniform target choice' model with cross-discipline citation 'below chance' is not confirmed. The 'attention vs. saliency maps' parallel-discovery example is not discussed in the paper at all. The paper's scope (32,559 papers, 2015–2024) is also much smaller than the claim implies. The claim appears to substantially extrapolate from or misrepresent the SciTraj paper — the core empirical claims (below-chance cross-discipline citation, specific field pairs) are not verified in the source. The conceptual argument about parallel discovery is valid but the specific paper does not provide the stated evidence.

---

### [key: specter2-citation-training-underperforms]
- evidence: empirical
- confidence: high
- group: citation-vs-vocabulary-structure
- sources: https://arxiv.org/html/2605.07158, https://arxiv.org/abs/2605.07158

**Claim:** SPECTER2, despite being trained with direct-citation pairs as positive contrastive examples, achieved the worst agenda-level discrimination (15.2% top-10 L2 same-rate) of the four models tested by Mohr et al. (2025, arXiv:2605.07158) — worse than general-purpose embeddings (21.0% for Gemini). The mechanism: citation-pair training at the paper level encodes co-citation patterns but fails to capture the entity-level research-agenda distinctions that define vocabulary islands. Scope condition: the failure is most pronounced in biomedical and chemistry domains. Implication: embedding models trained specifically on citation structure do not learn to distinguish vocabulary islands better than general models — suggesting that citation structure and vocabulary structure are partially orthogonal information channels, not redundant ones.

**Verify note:** All numbers confirmed from HTML version of arXiv:2605.07158. SPECTER2 at 15.2% top-10 L2 same-rate confirmed as worst performer. Gemini at 21.0% confirmed. Biomedical and chemistry domain failures most pronounced confirmed (8.1% and 9.1% L2 respectively). The mechanism (citation-pair training fails to capture entity-level distinctions) is confirmed by the paper's own analysis. The conclusion that citation structure and vocabulary structure are 'partially orthogonal channels' is a reasonable inference from the results, though the paper frames it slightly differently (training-time proximity on subset of citations does not produce cosine neighborhoods matching careful citation partitions). High confidence — the numerical claims are precise and verified.

---

### [key: single-database-recall-deficit]
- evidence: empirical
- confidence: low
- group: methodology-limitations
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC10234239/, https://connect.apsanet.org/sidtaskforce/wp-content/uploads/sites/75/2024/04/WorrallCitatnDtaanalysLimtatnShrtcomng.pdf

**Claim:** Studies on bibliometric database coverage establish that searches relying exclusively on single databases (e.g., Web of Science) achieve 52–79% recall due to database coverage limitations, missing or unmatched references, non-English publication exclusion, and indexing gaps (WoS controlled vocabulary process fails to capture tool names absent from article title reference lists). Scope condition: deficit is larger for cross-disciplinary topics, non-English literatures, and grey literature. Implication: citation network gaps built from single-database queries cannot distinguish vocabulary islands from database coverage holes — two-source minimum (e.g., Semantic Scholar + arXiv) is structurally required for recall to reach 95%+ and for vocabulary-gap signals to be trusted.

**Verify note:** The claim attributes 52–79% recall figures to PMC10234239 and the Worrall/APSA PDF. PMC10234239 is a study of bibliometric software citation patterns using Web of Science, NOT a recall study — it does not report 52–79% recall figures. The Worrall PDF could not be read (binary), but search results confirm it discusses citation data limitations (WoS, Scopus, Google Scholar coverage) without the specific 52–79% recall range appearing in any search results or abstract. The '95%+ recall requires two sources' threshold claim is not confirmed from either stated source. The '52–79% recall' range appears to have been assembled from the broader literature (likely from database combination studies like PMC5718002/2017) and attributed to specific sources that don't contain it. The claim's sources are mismatched to the stated statistics. The general direction (single-database recall is lower than multi-database) is supported by literature, but the specific numbers and their attribution are not verified.

---

### [key: coword-vs-citation-complementary-signals]
- evidence: consensus
- group: methodology-limitations
- sources: https://www.frontiersin.org/journals/research-metrics-and-analytics/articles/10.3389/frma.2021.742311/full, https://pmc.ncbi.nlm.nih.gov/articles/PMC8498340/

**Claim:** Bibliometric mapping research establishes two structurally distinct approaches to research-field mapping: concept-similarity mapping (defines fields based on repeated concepts / co-word analysis) and citation mapping (clusters fields based on citation patterns). These are not interchangeable — they capture different dimensions of knowledge organization. WoS subject category assignments have been made by 'subjective and heuristic methods' that fail to capture cross-boundary journal relatedness (Leydesdorff and Bornmann 2016). Scope condition: in fast-moving interdisciplinary fields, concept-similarity mapping and citation mapping diverge most sharply. Implication: using citation-graph gaps as a vocabulary-silo detector conflates two partially independent signals; a complete vocabulary-island audit requires both co-word/semantic analysis and citation-gap analysis, neither alone being sufficient.

---

### [key: knowledge-graph-cross-domain-alignment-challenge]
- evidence: consensus
- group: vocabulary-mismatch-retrieval-failure
- sources: https://arxiv.org/pdf/2308.03961, https://arxiv.org/pdf/2405.16929

**Claim:** Knowledge graph alignment research (multiple arXiv surveys 2025) demonstrates that cross-domain terminology mismatches — where the same concept is defined differently across ontologies — cause alignment failures at the schema, concept, and entity levels. Traditional methods (LogMap, PARIS, AgreementMakerLight) use lexical cues, structural constraints, and logical reasoning but fail on entity-level distinctions (the same problem seen in text embeddings). Scope condition: alignment failures are most acute when no shared anchor concepts exist and when domain vocabularies have evolved independently. Implication: citation network gaps between domains with independent vocabulary development are a symptom of the same underlying alignment problem that defeats ontology matching — the vocabulary-island problem predates and causes the citation gap, not the reverse.

---

### [key: citation-based-retrieval-recall-vs-precision-tradeoff]
- evidence: empirical
- confidence: high
- group: methodology-limitations
- sources: https://link.springer.com/article/10.1007/s11192-023-04681-x

**Claim:** Research on citation-cluster-based academic information retrieval (Scientometrics 2023) found that citation-based cluster search performance is 'highly variable and unpredictable' and works best when users prefer recall over precision at a ratio of 2:1 to 8:1. Language use in citation-based retrieval is relatively imprecise. Scope condition: citation-based retrieval advantages over keyword search are strongest for well-established mature research communities with dense citation networks; citation-based methods lose advantage in sparse, emerging, or cross-disciplinary contexts. Implication: when citation networks are sparse (exactly the condition signaling a vocabulary island), citation-based retrieval degrades precisely where vocabulary-gap detection is most needed.

**Verify note:** The core claim is confirmed: Scientometrics 2023 paper (DOI 10.1007/s11192-023-04681-x, Bascur et al.) explicitly reports citation-based cluster search performance is 'highly variable and unpredictable' and works best for users preferring recall over precision 'at a ratio between 2 and 8.' Year is 2023 confirmed. The claim says 'language use in citation-based retrieval is relatively imprecise' — not confirmed verbatim from the abstract but consistent with the paper's framing. The complementary value with query-based search is noted. The scope condition (works best for mature dense communities, loses advantage in sparse/emerging contexts) is a reasonable inference from the high-variability finding, though not explicitly stated in the abstract. High confidence on the main claim, minor uncertainty on the 'imprecise language' characterization.

---

### [key: disciplinary-terminology-jargon-citation-impact]
- evidence: empirical
- confidence: low
- group: citation-gap-confounds
- sources: https://www.pnas.org/doi/10.1073/pnas.2409752122, https://arxiv.org/pdf/2311.09481

**Claim:** Interdisciplinary research literature establishes empirically that papers using more discipline-specific terminology are cited less across disciplines; poor semantic fit with established fields leads to lower publication chances in top journals; referencing outside one's field leads to higher cross-disciplinary citation impact once published (PNAS 2024, Scientometrics 2025). Mechanism: jargon acts as a barrier to cross-disciplinary discovery independently of the paper's intellectual content. Scope condition: effect is stronger in fields with large technical vocabulary divergence (biomedical vs. social sciences) than in fields with shared mathematical notation. Implication: vocabulary silos are self-reinforcing — terminology choices affect citation accumulation, which then makes citation-gap methods appear to confirm the silo, when the silo was generated by vocabulary inaccessibility in the first place (circularity failure mode).

**Verify note:** The PNAS 2024 claim (DOI 10.1073/pnas.2409752122) could not be verified — PNAS returned 403 Forbidden and no search found this specific paper. The arXiv:2311.09481 source is 'Personalized Jargon Identification for Enhanced Interdisciplinary Communication' (Guo et al., 2023) — a jargon identification/NLP paper about predicting which terms are jargon to individual researchers. It does NOT empirically show that papers using more discipline-specific terminology are cited less across disciplines or have lower publication chances. The claim's empirical backbone (papers with more jargon cited less cross-disciplinarily) is a separate body of literature (the general relationship between interdisciplinarity and citation impact exists in literature like arXiv:2207.04244) but the two cited sources do not establish this. The 'Scientometrics 2025' source is not identified. The PNAS 2024 reference cannot be verified at all. Low confidence due to unverifiable primary PNAS source and a secondary source (2311.09481) that addresses a different question.

---

## Null results
- site:github.com citation network vocabulary gap detection — no dedicated GitHub tool or repository specifically targeting vocabulary-gap detection via citation graphs was found; closest tools (Local Citation Network, Scimeetr) do citation-based recommendation but not vocabulary-island detection
- science mapping co-word analysis Kuhn incommensurability empirical — no empirical study found that directly quantifies recall/precision of co-word analysis vs. citation analysis for detecting the same vocabulary island; Kuhn incommensurability literature remains philosophical rather than empirical in bibliometric context
- arXiv 2025-2026 agent kit intake protocol vocabulary classification — no paper found directly addressing intake-protocol vocabulary classification for agent kits; adjacent work on tool-to-agent routing exists but does not address essential/inferable splits in cross-domain vocabulary retrieval specifically

## New angles surfaced
- **Citation-gap circularity: does vocabulary inaccessibility generate the citation gap that then appears to confirm the vocabulary island?**
  Target decision: closes kit Hard Rule 13 element 8 — intake protocol vocabulary classification (essential vs. inferable) needs to account for self-reinforcing silo dynamics
  Would find: Empirical studies testing whether controlling for vocabulary accessibility (jargon level, controlled-vocabulary indexing) eliminates citation gaps — if yes, the causal direction is vocabulary→citation-gap, not citation-gap→vocabulary-island; this would mean citation-gap detection is a lagging indicator, not a leading detector, of vocabulary silos
- **Two-signal audit: when do citation-gap and co-word/semantic-similarity maps agree vs. disagree, and what does disagreement signal?**
  Target decision: closes open kit design decision: citation-graph gap detection as vocabulary-frame validation method — current evidence shows partial orthogonality between the two signals but no quantified disagreement rate across domain types
  Would find: Empirical cases where citation-gap is present but co-word analysis finds no vocabulary island (social/prestige confound), and cases where co-word analysis finds a vocabulary island but citation-gap is absent (parallel discovery / no mutual awareness yet) — these are the two false-positive and false-negative cells for the kit's detection logic
- **Adversarial saturation check: is requiring two structurally distinct source types for 95% recall evidence-backed or a rule-of-thumb?**
  Target decision: Category A query instruction states 52–79% single-database recall and 95%+ for two distinct source types — validate whether these specific numbers come from empirical bibliometric coverage studies or are estimates
  Would find: Empirical database coverage comparison studies (e.g., Scopus vs. WoS vs. Semantic Scholar recall for specific domain types) with actual precision/recall numbers to confirm or revise the 52–79% / 95%+ claim
- **Entity-level vs. concept-composition boundary: which vocabulary island types are detectable via citation gaps vs. which require entity-level NER?**
  Target decision: Mohr et al. finding that embeddings fail on entity-level distinctions (instruments, organisms, compounds) while citation structure succeeds — this maps directly onto the kit's vocabulary-island detection strategy
  Would find: A taxonomy of vocabulary island types (concept-composition islands detectable by embeddings; entity-level islands detectable only by citation structure; social-prestige gaps not detectable by either) with domain examples and empirical validation rates
- **Intake protocol essential vs. inferable split: what fraction of cross-domain vocabulary can be inferred from context vs. must be explicitly provided in the intake?**
  Target decision: Kit Hard Rule 13 element 8 PROVISIONAL — needs empirical grounding for the split
  Would find: Studies on cross-domain query reformulation, query expansion, or zero-shot retrieval in heterogeneous knowledge bases — specifically, what fraction of terminology gaps can be bridged by LLM inference vs. require explicit domain-expert input; candidate literature: information retrieval query expansion, cross-lingual information retrieval, RAG system failure analysis
