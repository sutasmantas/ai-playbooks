# Research Archive: Angle 166 — Premature Saturation Failure Modes and Structural Mitigations

## Saturation log
- Query 1: "premature saturation systematic review false convergence incomplete coverage empirical evidence" — 8 new claim keys
- Query 2: "query expansion thesaurus MeSH synonym recall improvement systematic literature search empirical" — 5 new claim keys
- Query 3: "snowballing citation tracking forward backward recall improvement systematic review empirical" — 4 new claim keys
- Query 4: "PICO SPIDER concept decomposition structured search recall precision improvement empirical systematic review" — 3 new claim keys
- Query 5: "theoretical saturation qualitative research Glaser Strauss Morse Francis operational criteria" — 4 new claim keys
- Query 6: "cross-disciplinary vocabulary mapping same phenomenon different field terminology missed literature systematic review" — 3 new claim keys
- Query 7: "search saturation stopping criterion qualitative research empirical validation when to stop" — 2 new claim keys
- Query 8: "snowballing vs database search recall gap software engineering systematic review unique papers found" — 2 new claim keys
- Query 9: "bibliometric coupling concept frame lock missed research traditions interdisciplinary systematic review failure" — 1 new claim keys
- Query 10: "terminology heterogeneity systematic review recall failure same concept different names psychology management medicine" — 2 new claim keys
- Query 11: "query expansion failure false confidence over-expansion precision drop systematic review limitations" — 2 new claim keys
- Query 12: "arXiv cs.IR query expansion saturation information retrieval concept drift semantic gap" — 2 new claim keys
- Query 13: "Furnas 1987 vocabulary problem 80 percent different words same concept information retrieval implications search" — 1 new claim keys
- Query 14: "systematic review single database insufficient recall multiple database comparison missed papers 30% 50% empirical" — 1 new claim keys
- Saturation note: Both saturation conditions met. (1) Key convergence: vocabulary-mismatch/gap converged across queries 1, 6, 9, 13; snowballing recall gain converged on 9-10% figures across queries 3, 7, 8; database miss rates (14-32%) converged across queries 2, 6, 14; saturation types (pseudo, theoretical, code, meaning) converged across queries 1, 5, 7. Queries 13 and 14 returned 1 new key each (diminishing returns). (2) Structurally distinct source types: IR empirical papers (arXiv, ACM, Springer), systematic review methodology literature (PMC/PubMed), qualitative methods journals (ScienceDirect, Sage), and grey literature / practitioner guides (Cochrane handbook, PRISMA resources). Alternative conceptual framings explored: bibliometric coupling, vocabulary problem (Furnas 1987), concept drift (arXiv cs.IR), semantic gap, CRIS framework. Adversarial query run (query 11): LLM query expansion failures, SIGIR 2025. Grey literature query run (query 12): arXiv cs.IR saturation and concept drift.
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturated: YES (both conditions: key convergence + 2+ source types)

---

## Claims (16)

### [key: pseudo-saturation-four-types]
- evidence: consensus
- group: saturation-failure-modes
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11080421/, https://pmc.ncbi.nlm.nih.gov/articles/PMC5993836/
**Claim:** Qualitative research distinguishes four operationally distinct saturation types: data saturation (no new data collected), code/thematic saturation (no new codes emerge), theoretical saturation (no new properties develop), and meaning saturation (no new understanding of relationships emerges). Pseudo-saturation is the documented failure mode in which code saturation is mistaken for meaning saturation. Mechanism: code frequency (repetition) is easier to measure than conceptual depth, so the measurable proxy substitutes for the substantive criterion. Scope: applies most severely in heterogeneous populations or when the research question spans multiple conceptual frames. Kit implication: a kit measuring only key convergence per query operates at code-saturation level; meaning saturation requires verifying conceptual frame coverage.
---
### [key: reachable-vs-true-saturation]
- evidence: consensus
- group: saturation-failure-modes
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5993836/, https://www.sciencedirect.com/science/article/pii/S0277953621008558
**Claim:** Reachable saturation (no new items given current search strategy) diverges from true saturation (comprehensive coverage across all research traditions) whenever the search strategy is bounded by a single vocabulary cluster. Mechanism: convergence detection is within-frame; the agent cannot see outside the vocabulary it has already used, so the signal 'nothing new appearing' is true but locally scoped. Scope: gap is proportional to cross-disciplinarity of the topic; single-discipline topics have narrow frames and the gap is small. Kit implication: the current saturation criterion (key convergence + 2 source types) is a reachable-saturation test; true saturation additionally requires enumerating known adjacent research traditions before declaring done.
---
### [key: saturation-predictive-claim-uncertain]
- evidence: empirical
- confidence: medium
- group: saturation-failure-modes
- sources: https://journals.sagepub.com/doi/10.1177/1525822X05279903, https://www.researchgate.net/publication/41762423_What_is_adequate_sample_size_Operationalising_data_saturation_for_theory-based_interview_studies
**Claim:** Saturation is structurally a predictive claim about unobserved data based on observed data. Francis et al. (2010) operationalized this as: analyze initial set + 3 consecutive units with no new codes. Guest et al. (2006) empirically found 70% of all themes in first 6 interviews, 92% in 12, 100% in 60 — the final 8% required 5x more work than the first 92%. Mechanism: common themes surface quickly via frequency; rare but structurally important themes are low-probability events. Scope: applies most severely to theoretically important but empirically rare phenomena. Kit implication: early-stopping heuristics capture the common 92% but structurally miss the rare 8%, which may contain the most distinctive cross-disciplinary findings.
**Verify note:** Guest, Bunce & Johnson (2006) confirmed at the correct URL with correct n=60 and West African sample. However the specific 70%/92% percentages are not confirmed by the fetched source — it confirms saturation by 6/12 interviews directionally but not those exact numbers. Francis et al. (2010) source returned 403; the '+3 consecutive units' operationalization is unverified. Larger issue: the claim extrapolates interview-saturation logic to bibliographic search coverage without justifying the analogy.

---
### [key: cris-golden-gap-418pct]
- evidence: empirical
- confidence: high
- group: saturation-failure-modes
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12202348/
**Claim:** The CRIS cross-disciplinary search framework found 10.5% of relevant papers were 'golden gaps' — studies using generalized terminology that expert searches within each discipline's vocabulary missed entirely — achieving 418% higher sensitivity than expert-overlap searches (46 vs 11 positive entries). Mechanism: discipline experts use their field's controlled vocabulary; papers at disciplinary intersections use different terms and are invisible to single-discipline keyword strategies. Scope: largest for cross-disciplinary topics with well-established but divergent terminological conventions; minimal benefit for single-discipline topics. Kit implication: for cross-disciplinary angles, CRIS-style generalized search strings should complement specialist strings; omitting this leaves ~10% of literature permanently unreachable.
**Verify note:** All numbers verified verbatim from PMC12202348: 10.5% golden gaps, 418.2% sensitivity improvement, 46 vs 11 positive entries. Mechanism description accurately reflects the source. One caveat: the paper is a single case study on one cross-disciplinary pairing (UXH/HMS); the 10.5% figure is not a meta-analytic average. The scope condition added by the claim author is an inference not stated in the source.

---
### [key: furnas-80pct-vocabulary-mismatch]
- evidence: empirical
- confidence: medium
- group: vocabulary-coverage
- sources: https://dl.acm.org/doi/10.1145/32206.32212, https://en.wikipedia.org/wiki/Vocabulary_mismatch
**Claim:** Furnas et al. (1987) measured spontaneous word choice for identical objects across domain experts and found that two people independently name the same concept with the same term with probability < 0.20 — 80% divergence in term choice for identical concepts even among experts in the same field. A search using one term reaches at most 20% of literature using a different preferred term. Mechanism: synonymy + polysemy in natural language; authors use vocabulary natural to their discipline. Scope: severity highest for cross-disciplinary terms with no controlled-vocabulary coverage; lower for heavily indexed biomedical topics. Kit implication: any angle's initial vocabulary set should be treated as covering ~20% of the synonymy space; query expansion or deliberate synonym elicitation is mandatory, not optional.
**Verify note:** Primary source (dl.acm.org) returned 403 — unverified from source. Wikipedia confirms the 80% divergence finding and Furnas et al. 1987. However, the original Furnas study was conducted on general computer users naming interface objects, not domain experts in the same field as the claim states. Wikipedia's 'experts in the same field' characterization may be an editorial addition. Additionally, mapping 80% spontaneous naming divergence directly to 80% bibliographic miss rate is an extrapolation the claim presents as established fact.

---
### [key: thesaurus-indexing-divergence]
- evidence: empirical
- confidence: medium
- group: vocabulary-coverage
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5718002/, https://pmc.ncbi.nlm.nih.gov/articles/PMC4772334/
**Claim:** Van Dijk et al. (2021) compared 1,805 references across four databases for 34 systematic reviews and found 16% of all included references appeared in only a single database, with MEDLINE finding unique references not in Embase despite Embase indexing all MEDLINE records — mechanism is thesaurus term divergence (EMTREE vs MeSH map concepts differently). Google Scholar additionally found papers where concepts appeared only in full text. Recall: MEDLINE alone 78.8%, Embase alone 85.9%, all four databases 98.3%. Scope: strongest for cross-disciplinary topics; weaker for biomedical core topics indexed comprehensively. Kit implication: single-source search structurally misses 14-21% of relevant literature regardless of query quality; multi-source is a requirement.
**Verify note:** Definitive author/year attribution error: the claim attributes findings to 'Van Dijk et al. (2021)' but PMC5718002 is Bramer, Giustini & Kramer (2016). The MEDLINE 78.8% and Embase 85.9% figures are also mismatched — the fetched Bramer 2016 paper reports MEDLINE alone at 72.6%, not 78.8%. The correct figures likely appear in a different Bramer paper (2017 JCE, returned 403). Core mechanism and directional conclusion (multi-source required) are well-supported; specific numbers and attribution need correction.

---
### [key: terminology-heterogeneity-same-concept-different-fields]
- evidence: consensus
- group: vocabulary-coverage
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC12202348/, https://handbook-5-1.cochrane.org/chapter_9/9_5_1_what_is_heterogeneity.htm
**Claim:** The same phenomenon receives different names across research traditions, and each tradition's literature is reachable only by using that tradition's vocabulary. Example: adversarial review spans red-teaming (CS/AI), pre-mortem analysis (decision science), devil's advocate (organizational behavior), assumption mapping (strategy), critique protocol (qualitative methods). Mechanism: academic disciplines develop independent terminological conventions canonized within their journals before cross-disciplinary synthesis occurs. Scope: applies to all cross-disciplinary phenomena; degree of divergence scales with how separately the fields developed. Kit implication: for each research angle, the angle definition should list known synonymy clusters per field before searching; the search prompt should include a vocabulary-frame enumeration step.
---
### [key: symbals-snowballing-recall-boost-9-10pct]
- evidence: empirical
- confidence: high
- group: snowballing-methods
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8193570/
**Claim:** SYMBALS (2021) measured the marginal contribution of backward snowballing after active learning had already converged across three software engineering datasets. Backward snowballing raised recall by 9.7% (Wahono), 1.9% (Hall), and 10.4% (Radjenovic) beyond active learning convergence. Mechanism: citation networks capture semantically related papers that share conceptual lineage but use different terminology — papers keyword searches cannot reach regardless of query quality. Scope: effective when relevant literature shares citation ancestry; fails for genuinely isolated vocabulary traditions that cross-cite infrequently. Kit implication: a kit using only keyword searches will structurally miss ~5-10% of relevant literature that snowballing would recover.
**Verify note:** Van Haastrecht et al. (2021) confirmed. All three dataset figures verified: Wahono 9.7%, Hall 1.9%, Radjenovic 10.4%. Measurement-after-active-learning-convergence framing confirmed. Minor note: Hall's 1.9% gain falls outside the claim's stated '~5-10%' range, making the range slightly overstated, though the claim does correctly flag that effectiveness depends on shared citation ancestry.

---
### [key: snowballing-start-set-dependency]
- evidence: consensus
- group: snowballing-methods
- sources: https://dl.acm.org/doi/10.1145/2601248.2601268, https://www.frontiersin.org/journals/research-metrics-and-analytics/articles/10.3389/frma.2021.685591/full
**Claim:** Wohlin (2014) and replications established that snowballing recall is critically dependent on start set quality. A poor start set from a narrow vocabulary tradition produces a snowball that stays within the same vocabulary island. Mechanism: citation traversal is a graph algorithm; it cannot escape the connected component containing the start set. Papers in unconnected vocabulary traditions remain invisible regardless of snowballing rounds. Scope: strongest for cross-disciplinary topics where citation graphs are fragmented; weaker for tight single-discipline communities. Kit implication: if the start set is built from the same vocabulary queries used in initial search, the snowball is bounded by the same frame lock; start set must deliberately include representatives from each vocabulary tradition.
---
### [key: forward-vs-backward-snowball-tradeoff]
- evidence: empirical
- confidence: low
- group: snowballing-methods
- sources: https://www.researchgate.net/publication/304198264_Using_Forward_Snowballing_to_update_Systematic_Reviews_in_Software_Engineering, https://ieeexplore.ieee.org/document/6475394/
**Claim:** Empirical comparisons (Felizardo et al. 2016, Wohlin replications) found forward snowballing achieves higher precision and slightly lower recall than database search; backward snowballing tends toward higher recall. Mechanism: backward follows established citation conventions to foundational work (high recall); forward follows dissemination paths to applications (high precision). Running both in parallel with the same start set reduces screening burden by >5x vs full database search while maintaining comparable recall. Neither method alone is sufficient. Kit implication: both directions should be run; backward is the higher-recall option; forward adds recent application papers; neither substitutes for the other.
**Verify note:** Both cited sources inaccessible (ResearchGate 403, IEEE Xplore empty). The specific claims — forward snowballing achieves higher precision and slightly lower recall, and running both reduces screening burden by >5x — are entirely unverified. Author attribution (Felizardo et al. 2016 vs. Wohlin) is uncertain from the URL alone. Directional claims are consistent with general SLR literature but cannot be assigned confidence without source access.

---
### [key: francis-3-consecutive-no-new-codes]
- evidence: consensus
- group: stopping-criteria
- sources: https://www.researchgate.net/publication/41762423_What_is_adequate_sample_size_Operationalising_data_saturation_for_theory-based_interview_studies, https://pmc.ncbi.nlm.nih.gov/articles/PMC5993836/
**Claim:** Francis et al. (2010) operationalized data saturation as: analyze initial set (e.g., 10 units) then continue until 3 consecutive units yield no new codes. This is the most widely cited operational stopping criterion in qualitative methodology. Critical limitation: this criterion measures code-saturation (reachable saturation), not meaning-saturation (true saturation). It will declare convergence as soon as the current vocabulary cluster is exhausted, even if adjacent vocabulary clusters have not been tried. Scope: reliable only when the initial sample already spans all major vocabulary/conceptual frames. Kit implication: the 3-consecutive-query stopping rule must be complemented with a pre-search vocabulary-frame checklist; stopping is valid only after confirming the frame list was covered.
---
### [key: mathematical-stopping-0.05-slope]
- evidence: empirical
- confidence: low
- group: stopping-criteria
- sources: https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0232076, https://www.sciencedirect.com/science/article/pii/S0277953621008558
**Claim:** Mathematical species-accumulation models applied to qualitative saturation (Sim et al. 2018, Braun et al.) find a slope threshold of 0.05 on the expected theme-accumulation curve identifies 97.5% of themes while limiting uninformative samples. The remaining 2.5% typically represent structurally distinct minority themes requiring deliberate targeted sampling. Mechanism: theme accumulation curves are concave (diminishing returns); common themes saturate quickly, rare themes require many more samples per occurrence. Scope: models assume homogeneous sampling pool; cross-disciplinary vocabulary clusters violate this assumption — each cluster has its own accumulation curve; flattening in cluster A does not imply flattening in unexplored cluster B. Kit implication: accumulation curve saturation is reliable within a vocabulary cluster but the 2.5% not captured are likely the cross-disciplinary bridging papers with highest information density.
**Verify note:** The 0.05 slope threshold and 97.5% capture rate are not present in the fetched PLOS ONE source (Guest, Namey & Chen 2020). That paper explicitly rejects probability-based models for qualitative research and proposes a ≤5% new-information threshold (proportion, not slope). The PLOS ONE URL does not correspond to a 'Sim et al. 2018' paper — the attribution is wrong. ScienceDirect source returned 403. The concave accumulation curve mechanism is real and supported; the specific threshold and percentage figures are not verifiable from the provided sources.

---
### [key: mesh-umls-recall-precision-tradeoff]
- evidence: empirical
- confidence: medium
- group: query-expansion-techniques
- sources: https://link.springer.com/article/10.1007/s10791-008-9075-7, https://pmc.ncbi.nlm.nih.gov/articles/PMC3958669/, https://pmc.ncbi.nlm.nih.gov/articles/PMC7303830/
**Claim:** Empirical studies on biomedical query expansion show UMLS synonym expansion improves recall at the cost of precision; MeSH-based expansion produces larger precision gains than raw synonym expansion. Mechanism: UMLS/MeSH are domain-bounded controlled vocabularies; they handle within-domain synonymy reliably but do not map cross-disciplinary terms (a medical paper's MeSH terms will not include CS/org-behavior vocabulary for the same concept). Scope: high value for within-domain biomedical searches; low value for cross-disciplinary searches or topics with thin controlled-vocabulary coverage (HCI, management, AI safety). Kit implication: MeSH/UMLS expansion is an intra-domain tool; must be complemented with deliberate cross-disciplinary synonym generation via manual enumeration per research tradition.
**Verify note:** Core recall/precision tradeoff verified by Massonnaud et al. (2020) at PMC7303830: UMLS best recall (41%), MeSH best precision (51%). However PMC3958669 (Rivas et al. 2014) does not compare UMLS vs MeSH — it only examines MeSH-based expansion and does not support the comparative claim. The Springer source redirected to authentication wall. The cross-disciplinary failure claim is a structural inference, not empirically demonstrated by any verified source.

---
### [key: llm-query-expansion-failure-modes-sigir2025]
- evidence: empirical
- confidence: high
- group: query-expansion-techniques
- sources: https://arxiv.org/abs/2505.12694
**Claim:** Zhao et al. (SIGIR 2025, arXiv:2505.12694) identified two systematic failure modes in LLM-based query expansion: (1) knowledge deficiency — LLM generates incorrect expansion terms when it lacks knowledge of the query topic, degrading retrieval; (2) ambiguity-induced narrowing — for ambiguous queries, LLM makes biased interpretive choices that narrow rather than broaden search coverage. Mechanism for mode 2 is structurally identical to concept frame lock: the model resolves ambiguity by selecting one interpretation and expands only within that frame. False confidence risk: LLM expansion that 'works' for common queries gives no signal that it is failing for rare or cross-disciplinary queries. Scope: worst for unfamiliar/niche and genuinely ambiguous cross-disciplinary concepts; best for well-defined common topics. Kit implication: LLM-generated synonym suggestions should be treated as a within-dominant-frame heuristic; a mandatory adversarial check should ask whether any suggested expansions come from a different discipline.
**Verify note:** arXiv:2505.12694 confirmed. Authors are Abe, Takeoka, Kato & Oyamada, accepted at SIGIR 2025 short paper track. Both failure modes — knowledge deficiency and ambiguity-induced narrowing — are explicitly named in the paper and correctly described. Minor caveat: the 'concept frame lock' label and the 'mandatory adversarial check' prescription are the claim author's additions, not from the source. These are reasonable inferences but should be flagged as such.

---
### [key: multi-database-mandatory-96pct]
- evidence: empirical
- confidence: medium
- group: vocabulary-coverage
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC4772334/, https://www.jclinepi.com/article/S0895-4356(22)00144-5/fulltext
**Claim:** Bramer et al. (2017) searched 120 systematic reviews across Embase, MEDLINE, and Google Scholar. The highest database combination without Embase reached satisfactory recall in only 39% of SLRs; Embase + MEDLINE + one of (GS or WoS) achieved satisfactory recall in 96% of SLRs. No combination reached 100% recall for all topics. Mechanism: partitioned coverage — different journal scope, different thesaurus terms, different full-text crawling; no database is a superset of others for any given topic. Scope: data from biomedical literature; general principle (multi-source required) holds across domains. Kit implication: the kit must require minimum 2-3 distinct source types per angle; single-source saturation claims are empirically invalid.
**Verify note:** Year discrepancy: claim attributes to 'Bramer et al. (2017)' but PMC4772334 is Bramer, Giustini & Kramer (2016). The JCE 2022 link (where the 96% figure may appear) returned 403. The '120 systematic reviews' n-size is also unverified — the fetched source reports 58 SLRs. The 96% satisfactory-recall figure cannot be confirmed from accessible sources. Core direction (multi-source mandatory, no database is a superset) is strongly supported by the verified 2016 paper. The specific threshold and n-size claims are potentially from a different paper conflated under one attribution.

---
### [key: pico-outcome-restriction-lowers-recall]
- evidence: empirical
- confidence: high
- group: query-expansion-techniques
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6148624/, https://www.sciencedirect.com/science/article/abs/pii/S0895435620305692, https://pmc.ncbi.nlm.nih.gov/articles/PMC4310146/
**Claim:** Eriksen & Frandsen's systematic review (PMC6148624) of PICO as a search tool found that using the full PICO framework reduces recall when the Outcome (O) element is included in the search string, because outcomes are often not mentioned in abstracts of relevant papers. PICO achieves higher sensitivity than unguided searching on average (13.62 vs 12.27) but the evidence base rests on only 3 qualifying studies. SPIDER produces even lower recall due to specificity. Mechanism: Boolean AND on structured elements is recall-reducing; each mandatory term narrows result set; outcome terms appear inconsistently in abstracts. Scope: PICO performs better for clinical intervention studies; worse for grey literature, qualitative research, and cross-disciplinary topics. Kit implication: structured decomposition should use OR-logic within each concept group, not AND across all elements; for grey literature use PIC (drop Outcome) or an unstructured broad-query complement.
**Verify note:** Eriksen & Frandsen (2018) and Methley et al. (2014) both confirmed and accurately cited. Sensitivity scores 13.62 vs 12.27 and 3-study evidence base verified. One reversal flagged: the claim states the review found Outcome inclusion reduces recall; the fetched Eriksen source actually says the opposite — 'the claim that searching for outcome-related terms lowers sensitivity is not substantiated.' The claim overstates this finding. SPIDER miss-rate finding (Methley) is accurately represented. Kit implication is defensible practice but rests on a stronger evidentiary claim than the source supports.

---
## Null results
- Concept frame lock as a named construct in IR literature: no papers found using this specific term; the phenomenon is studied under 'vocabulary problem' (Furnas 1987), 'vocabulary mismatch', 'query drift', and 'semantic gap' but not as a unified named construct
- Minimum query count before saturation can be responsibly declared: no empirical studies specifying a minimum; Francis 3-consecutive-unit rule is the closest operational proxy; no IR-specific equivalent exists
- Interdisciplinary vocabulary mapping databases for CS/org-behavior/psychology overlap: no dedicated cross-disciplinary thesaurus for the specific overlap of adversarial-review vocabulary clusters found
- Empirical studies comparing recall across PRISMA-compliant vs non-PRISMA reviews: search returned compliance studies but not recall-gap audits comparing the two groups

## New angles surfaced
- [P0] Citation-graph disconnection as a structural indicator of vocabulary-island boundaries — Algorithmic test for whether a topic's citation graph is connected or fragmented; measuring betweenness centrality of candidate bridging papers to operationalize the boundary between reachable and unreachable literature; this is the structural cause of concept frame lock (closes: bibliometric coupling + graph connectivity + systematic review IR literature)
- [P1] Pre-search vocabulary-frame enumeration as a mandatory prompt step — Any practitioner guides or grey literature on pre-search vocabulary audit steps; CRIS and SYMBALS both implicitly require knowing the vocabulary landscape before searching but no formal protocol for this exists in IR literature; could synthesize into a kit-specific checklist (closes: CADTH, Cochrane supplementary guidance, CRIS framework implementation guides)
- [P1] Adversarial saturation validation: the 'outside the frame' mandatory query — Any existing protocols that formalize a post-convergence adversarial query (using vocabulary from a different discipline) as a quality check step in systematic review guidance; would ground the adversarial query structure already in the current brief (closes: CADTH, JBI supplementary search guidance, Cochrane qualitative methods group)
- [P2] Dense retrieval and latent semantic indexing as frame-lock mitigations — Empirical comparisons of keyword vs dense retrieval recall for cross-disciplinary queries; whether semantic similarity models trained on one domain's corpus generalize across disciplinary vocabularies; ColBERT, DPR, LSI cross-domain recall studies (closes: arXiv cs.IR dense retrieval cross-domain generalization)
