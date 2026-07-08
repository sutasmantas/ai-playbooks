# Research Archive: Documenting search strategies for reproducibility — what is sufficient vs overhead

## Saturation log
- Query 1: "PRISMA-S search reporting extension Rethlefsen 2021 systematic review documentation standards" — 3 new keys
- Query 2: "search reproducibility systematic reviews librarian documentation methods replication" — 3 new keys
- Query 3: "search strategy failures reproducibility gaps literature review empirical audit" — 2 new keys
- Query 4: "search documentation practical guide applied research librarians how-to" — 2 new keys
- Query 5: "search strategy reproducibility measurement audit automated AI computational" — 2 new keys
- Saturated: YES

---

## Claims (12)

### [key: prisma-s-16-items-compliance-floor]
- evidence: empirical
- confidence: high
- group: reporting-standards
- sources: https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-020-01542-z, https://pubmed.ncbi.nlm.nih.gov/34285662/

**Claim:** PRISMA-S (Rethlefsen et al., 2021, Systematic Reviews) established a 16-item checklist developed via 3-stage Delphi survey + consensus conference targeting interdisciplinary systematic review authors, editors, and peer reviewers. The mechanism: search documentation failures are not random omissions but structural — authors apply single generic descriptions across multiple databases when each database requires its own strategy, date, and record count. Scope: applicable to any systematic review with multi-database searches; does not address grey literature or living reviews. Kit implication: a kit's search-documentation module must enforce per-source documentation as a hard constraint, not a suggestion — a single shared 'search strategy' field for all sources is the primary failure pattern this standard was built to prevent.

**Verify note:** Source confirmed (PMID 34285662). 16 items confirmed. 3-stage Delphi + consensus conference confirmed. One factual error: journal is Journal of the Medical Library Association, not Systematic Reviews as claimed. Development method omits the public review stage (minor). Per-database documentation requirement characterisation is accurate to the standard's purpose but the paper is a normative document, not an observational study of failure patterns — 'structural failure' framing is inference from rationale, not empirical finding. Journal name error is a clear factual mistake but does not affect the substance.

---

### [key: 4point9pct-full-compliance-2024-study]
- evidence: empirical
- confidence: high
- group: reproducibility-measurement
- sources: https://pubmed.ncbi.nlm.nih.gov/38052277/, https://www.sciencedirect.com/science/article/pii/S0895435623003190

**Claim:** A 2024 cross-sectional study (Journal of Clinical Epidemiology) of 100 systematic reviews (453 database searches) indexed in MEDLINE in November 2021 found that only 4.9% of searches (22/453) reported all 6 key PRISMA-S items, and only 10.4% (47/453) could be reproduced within 10% of the original result count. Only 1 review achieved full reproducibility across all its searches. Six searches had result discrepancies exceeding 1,000%. Mechanism: the gap between 'appearing to report' and 'actually enabling replication' — surface-level compliance (naming a database) without operational completeness (exact executed string, exact date, exact record count) creates an illusion of documentation. Scope: MEDLINE-indexed reviews, 2021 data; may underrepresent non-clinical fields. Kit implication: a kit must capture the exact executed query string (copy-paste, not paraphrase), execution timestamp, and result count as three non-optional atomic fields — any one of these missing breaks reproducibility.

**Verify note:** Source confirmed (PMID 38052277, Journal of Clinical Epidemiology). All numbers confirmed exactly: 100 reviews, 453 searches, 4.9% (22/453) full compliance, 10.4% (47/453) reproducible within 10%, 1 fully reproducible review, 6 searches with >1000% discrepancy. Scope limitation noted correctly. No issues.

---

### [key: 22pct-reproducible-pediatrics-surgery-cardiology]
- evidence: empirical
- confidence: high
- group: reproducibility-measurement
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC5036875/, https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0163309

**Claim:** A 2016 cross-sectional audit (PLOS ONE, PMC5036875) of 272 systematic reviews from 25 high-impact journals in Pediatrics, Surgery, and Cardiology (2012 publications) found only 22% of articles provided at least one reproducible search strategy and only 13% provided reproducible strategies for all databases. 91% reported example search terms, but only 33% provided a full Boolean strategy, and only 25% of multi-database reviews specified which terms applied to which database. The mechanism is an 'illusion of good reporting': authors summarize search terms narratively (high surface compliance) while omitting the operational detail (database assignment, Boolean logic, date execution) needed for replication. Scope condition: Pediatrics journals performed significantly better (42% reproducible) than Surgery (11%) and Cardiology (20%) — field-specific norms matter. Kit implication: a documentation UI should visually separate 'what you searched for' (topic narrative) from 'how you searched' (per-database executable record) to prevent conflation.

**Verify note:** Source confirmed (PMC5036875, PLOS ONE). All numbers confirmed exactly: 272 reviews, 25 journals, 22% one reproducible strategy, 13% all databases, 91% named terms, 33% full Boolean, 25% per-database terms. Disciplinary breakdown confirmed: Pediatrics 42%, Surgery 11%, Cardiology 20%. 'Illusion of good reporting' is an accurate characterisation not the paper's exact phrase but directionally correct. No issues.

---

### [key: librarian-coauthorship-vs-acknowledgement-gap]
- evidence: empirical
- confidence: medium
- group: contributor-attribution
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC10124603/

**Claim:** A study (PMC10124603) of 209 PROSPERO-registered systematic reviews (2017–2018) found that 28% had a librarian co-author, 41% named one in acknowledgements, and 78% mentioned one in the body — but 31% failed to name the librarian at all and 9% made no mention despite protocol indication. Reproducibility rates varied marginally: librarian co-authors correlated with 84% reproducible searches vs. 74–79% for other documentation levels — a ~10 percentage point difference. Mechanism: co-authorship shifts linguistic framing (active vs. passive voice) and creates accountability, but the marginal gain is small because the root problem is absence of structural documentation norms, not absence of skilled personnel. Scope: applies when librarians are already involved; cannot fix cases where no librarian is engaged. Kit implication: attribution fields for search contributors (co-author vs. acknowledged vs. consulted) are useful provenance metadata but are not a substitute for mandatory per-source documentation fields.

**Verify note:** Source confirmed (PMC10124603). All numbers confirmed: 28% co-author, 41% acknowledgements, 78% body, 31% no name, 9% no mention, 84% vs 74-79% reproducibility range. Active/passive voice finding confirmed. Two issues: (1) causal mechanism ('creates accountability') is untested inference — the study is correlational; (2) sample selects only reviews that already mentioned librarian involvement in PROSPERO, suppressing the true effect size. These limit the causal framing but not the descriptive statistics.

---

### [key: exact-paste-vs-paraphrase-as-minimum-sufficient-unit]
- evidence: consensus
- group: minimum-sufficient-documentation
- sources: https://libraryguides.mcgill.ca/knowledge-syntheses/documenting, https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-020-01542-z

**Claim:** PRISMA-S Item 8 specifies that search strategies must be 'copied and pasted exactly as run' — not paraphrased, summarized, or reconstructed from memory. McGill Library's knowledge synthesis guide operationalizes this as the foundational reproducibility unit. The mechanism: any transformation between execution and documentation (even minor edits for 'readability') breaks reproducibility because Boolean operator order, parenthesization, truncation symbols, and MeSH term expansions are all execution-sensitive. Scope: applies to Boolean database searches (PubMed, Embase, CINAHL, etc.); less applicable to citation network or AI-assisted searches where the 'query' is not a single string. Kit implication: the kit's search log field for any database query must be a verbatim-paste input, not a free-text description field, and should be labeled to communicate this distinction to users.

---

### [key: replication-type-determines-documentation-depth]
- evidence: empirical
- confidence: low
- group: minimum-sufficient-documentation
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6998816/, https://onlinelibrary.wiley.com/doi/full/10.1002/cl2.1087

**Claim:** Karunananthan et al. (2020, Campbell Systematic Reviews, PMC6998816) distinguish two replication types: 'replication by repetition' (same PICO, same methodology — requires exact documentation) vs. 'replication by extension/narrowing' (modified scope — requires rationale documentation for deviations). The mechanism: documentation requirements are asymmetric — repetition replication requires operational completeness (exact string, date, filters) while extension replication requires decision-rationale completeness (why PICO was modified, what was added/removed). Overhead arises from conflating the two: if a kit treats all documentation as if it must support both replication types simultaneously, it generates unnecessary burden for the majority of use cases. Scope condition: the Cochrane and Campbell Collaborations explicitly discourage replication when it adds nothing new (excess meta-analyses on statins for AF cited as example). Kit implication: a kit's documentation template should branch on intended reuse type — 'update this search later' vs. 'others must replicate exactly' — and surface only the fields relevant to the declared reuse intent.

**Verify note:** Source exists (PMC6998816) but is a Cochrane Methodology Review PROTOCOL, not a completed study. The replication taxonomy (repetition vs extension/narrowing) is confirmed. The statins/AF example is confirmed. But the claim's core finding — that documentation requirements are asymmetric between repetition and extension replication types — is NOT in the paper. The protocol specifies what data it will extract; it does not prescribe documentation standards by replication type. This is a logical inference presented as an empirical finding. The kit implication (branch documentation template by reuse intent) may be reasonable but has no support from this source.

---

### [key: search-audit-infrastructure-overhead-ceiling]
- evidence: empirical
- confidence: medium
- group: overhead-calibration
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11006591/

**Claim:** A large-scale search engine audit study (PMC11006591) documenting the WebBot system found that audit reproducibility required: exact agent counts, geographic regions, browser versions, iteration numbers, and query term quantities (15 data collection parameters, Table 5). The maintenance burden included continuous HTML layout monitoring (websites evolve rapidly), browser evolution tracking, and cookie consent handling variations. Infrastructure required 360 virtual agents with 2 CPUs and 4GB RAM each, plus a 16-CPU, 48GB RAM, 5TB central server. The mechanism: computational search auditing hits a documentation-overhead ceiling where the documentation of the audit methodology becomes more complex than the original search. Scope: applies to large-scale automated/algorithmic search auditing; human-driven single-session literature searches have a much lower documentation ceiling. Kit implication: for kit-generated searches (not audit of search engines), the sufficient documentation set is far smaller — exact query, source, date, result count, filter settings — and the overhead ceiling should be explicitly capped to prevent scope creep into audit-grade documentation.

**Verify note:** Source exists (PMC11006591). Server specs confirmed (16 CPU, 48 GB RAM, 5 TB). Per-agent specs confirmed. Three errors: (1) Table 5 has 10 parameters, not 15 as claimed; (2) '360 virtual agents' is from one specific collection — counts range from 20 to 720 across collections; (3) the 'documentation overhead ceiling' conclusion is editorial inference not present in the paper. Additionally, the paper audits commercial search engines (Google, Bing), not literature databases — applying its infrastructure findings to SR search documentation is an analogy, not a direct finding.

---

### [key: iterative-documentation-improves-subsequent-performance]
- evidence: empirical
- confidence: low
- group: documentation-dual-purpose
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC11006591/

**Claim:** The WebBot search audit study (PMC11006591) found that detailed methodological documentation of each collection round correlated with improved collection performance in subsequent rounds — 'strategic interventions' based on documented failure modes improved coverage rates across later iterations. The mechanism: documentation serves a feedback-loop function beyond replication — it makes failure modes visible so they can be systematically fixed, which is a different and orthogonal purpose to the replication-enabling function. Scope: demonstrated in automated/computational search contexts; plausibly generalizes to any iterative search process but no controlled study in manual literature review contexts. Kit implication: a kit's search log should be designed for both external replication (static record) and internal iteration (live feedback) — these are two distinct documentation jobs that may warrant different UI surfaces or export formats.

**Verify note:** Source exists (PMC11006591) but does not contain the claimed finding. No statement in the paper says 'detailed methodological documentation correlated with improved collection performance.' The paper's version improvements (1.0 to 3.2) are attributed to software engineering changes (cookie consent, CAPTCHA handling, HTML monitoring) — not to documentation quality. The mechanism (documentation as feedback loop) is fabricated from the paper's context. The kit implication may be architecturally sensible but has no empirical grounding in the cited source.

---

### [key: peer-review-of-search-strategy-prisma-s-item]
- evidence: consensus
- group: quality-assurance-documentation
- sources: https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-020-01542-z, https://libraryguides.mcgill.ca/knowledge-syntheses/documenting

**Claim:** PRISMA-S includes peer review of the search strategy (by a second trained searcher, typically using the PRESS checklist) as one of its 16 required documentation items. The mechanism: a single searcher's documentation captures what they intended to do, not necessarily what they actually executed — peer review catches Boolean logic errors, missed subject headings, and truncation mistakes that the original searcher cannot self-detect due to familiarity bias. Scope: most relevant for formal systematic reviews; may be overhead for rapid reviews or scoping exercises with lower stakes. The PRISMA-S authors acknowledge this is aspirational for under-resourced teams. Kit implication: a kit must represent peer review of a search strategy as an optional but flagged workflow state — not collapsing 'search designed by one person without review' and 'search peer-reviewed' into the same documentation tier, because downstream users interpreting the record need to know which they are reading.

---

### [key: deduplication-documentation-gap]
- evidence: consensus
- group: minimum-sufficient-documentation
- sources: https://libraryguides.mcgill.ca/knowledge-syntheses/documenting, https://systematicreviewsjournal.biomedcentral.com/articles/10.1186/s13643-020-01542-z

**Claim:** PRISMA-S Item 16 requires documentation of deduplication processes and software used. This item is structurally overlooked in most guides because deduplication feels like a post-search technical step rather than part of the search methodology. The mechanism: the same set of source databases searched in a different order or deduplicated with a different tool will yield different final record counts, making reported record counts unreproducible even when the individual database searches are fully documented. Scope: becomes critical when searches span 3+ databases with high overlap (PubMed + MEDLINE + Embase are notorious for duplication). Less relevant for single-database or grey literature searches. Kit implication: the kit must treat deduplication method as a first-class documented field tied to each multi-source search session, not an afterthought — and the PRISMA flow diagram record counts (records identified, deduplicated, screened) should be auto-populated from structured fields rather than manually entered to prevent transcription errors.

---

### [key: automation-replicability-estimation-nascent]
- evidence: empirical
- confidence: low
- group: automated-audit
- sources: https://arxiv.org/abs/2311.00653, https://arxiv.org/abs/2603.00058

**Claim:** Researchers have begun automated replicability estimation using supervised learning over text/metadata features from ground-truth replication project outcomes (arxiv 2311.00653). The approach separates execution from evaluation via multi-agent pipelines (e.g., PaperRepro, arxiv 2603.00058). The mechanism: automated replicability scoring extracts structured signals (statistical reporting completeness, method description density, data availability statements) that correlate with human replication success — offloading human audit burden to an AI pre-screener. Scope condition: currently validated primarily on social science papers with structured quantitative methods; performance on qualitative or mixed-methods literature reviews is untested. Kit implication: a kit could incorporate automated documentation completeness scoring (flag missing PRISMA-S items) without requiring a full AI replication agent — the simpler form (checklist compliance detection) is achievable with rule-based checks today and provides most of the practical value.

**Verify note:** Source 2311.00653 is real but mischaracterized. It is a qualitative HCI study (17 PhD interviews, no algorithmic method). The supervised-learning-over-ground-truth-replication-outcomes method is mentioned in that paper's related-work section as prior work by others — it is not what 2311.00653 itself does. PaperRepro (2603.00058) exists and its multi-agent execution/evaluation architecture is accurately described, but it tests computational reproducibility (running code+data), not text/metadata-based replicability scoring. The mechanism description in the claim applies to a different body of work (e.g., arXiv:2104.04580). The kit implication about rule-based checklist compliance is the claimant's own design inference, not derived from either paper.

---

### [key: research-waste-from-over-replication-sets-documentation-upper-bound]
- evidence: empirical
- confidence: medium
- group: overhead-calibration
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6998816/

**Claim:** Karunananthan et al. (2020) cite a documented case of 11 meta-analyses on statins for atrial fibrillation prevention where the subsequent 9 added nothing new — characterizing this as research waste. Cochrane and Campbell Collaboration policies explicitly limit duplicate reviews on identical questions. The mechanism: excessive documentation standards, when applied uniformly, can incentivize over-replication (because a fully documented review invites challenge and re-do) and can create documentation burden that diverts resources from primary synthesis work. Scope: most relevant for clinical evidence synthesis organizations with formal replication policies; less applicable to exploratory or novel-domain literature searches. Kit implication: documentation standards in a kit should be tiered by review type (full systematic review vs. scoping review vs. rapid review vs. exploratory search) — applying full PRISMA-S overhead to every search in the kit is a documented failure mode, not a safety feature.

**Verify note:** Source PMC6998816 is real and accessible. The statin/AF example (11 meta-analyses, subsequent 9 added nothing) is verified verbatim in the text, citing Ioannidis. However, the document is a Cochrane methodology review protocol — planned research, not completed findings — which limits evidentiary weight. The Cochrane/Campbell 'explicit policy limit on duplicate reviews' claim is not directly sourced from this document; the paper discusses the problem conceptually. The tiered-documentation kit implication is the claimant's own design inference not argued in the source.

---

## Null results
- Query 4 (practical guide applied research librarians how-to) returned mostly LibGuide landing pages with procedural advice but no empirical findings — useful for corroborating the PRISMA-S Item 8 exact-paste standard via McGill Library, but no new distinct claims beyond what queries 1-3 had already established.

## New angles surfaced
- Living review documentation standards — PRISMA-S and related frameworks were designed for static reviews; living reviews that update continuously require a different documentation model (versioned search logs, update triggers, sunset criteria) that no current standard adequately addresses.
- AI-assisted search documentation burden — when the search itself is conducted or augmented by an AI agent, the 'exact executed string' model breaks down because the query may be iteratively reformulated by the agent; this creates a new documentation gap not covered by PRISMA-S.
- Tiered documentation standards by review type — there is no widely adopted tiered framework distinguishing documentation requirements for full systematic review vs. scoping review vs. rapid review vs. kit-generated exploratory search; this is a design gap with direct kit implications.
- PRESS checklist for search peer review — the Peer Review of Electronic Search Strategies (PRESS) checklist is a companion standard to PRISMA-S that governs the quality-review step; kit designs should account for the peer-review workflow state as a distinct documentation tier.

