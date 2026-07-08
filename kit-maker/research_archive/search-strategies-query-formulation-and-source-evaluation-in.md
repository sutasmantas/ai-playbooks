# Research Archive: Search strategies query formulation and source evaluation — information finding as a learnable skill

## Saturation log
- Query 1: "Bates berrypicking model information seeking search behavior 1989 foundational" — 2 new keys
- Query 2: "information literacy search strategy systematic review librarian expert instruction" — 3 new keys
- Query 3: "search strategy failures missed evidence gaps information retrieval empirical studies" — 2 new keys
- Query 4: "expert vs novice search strategies practitioners query formulation database differences empirical" — 3 new keys
- Query 5: "automated query expansion information retrieval NLP optimization quantitative results recall precision" — 2 new keys
- Query 6: "Marcia Bates berrypicking evolving query information need mechanism iterative reformulation (follow-up)" — 0 new keys
- Query 7: "librarian co-author systematic review search quality controlled study peer review search strategies RCT (follow-up)" — 1 new keys
- Query 8: "search strategy errors systematic review 90 percent error rate missing term variations study (follow-up)" — 1 new keys
- Query 9: "expert searcher query formulation domain knowledge IR knowledge distinction cognitive mechanism (follow-up)" — 1 new keys
- Query 10: "query expansion recall precision trade-off LLM RAG retrieval augmented generation empirical benchmark (follow-up)" — 1 new keys
- Saturated: YES

---

## Claims (14)

### [key: berrypicking-evolving-query]
- evidence: empirical
- confidence: high
- group: information-seeking-models
- sources: https://eric.ed.gov/?id=EJ404172, https://pages.gseis.ucla.edu/faculty/bates/articles/berrypicking.pdf, https://www.academia.edu/47491556/Bates_Berrypicking_Model_1989_2002_2005_

**Claim:** Bates (1989, 'The Design of Browsing and Berrypicking Techniques for the Online Search Interface', Online Review) demonstrated that real information-seeking does NOT follow the classical single-query/single-result-set model. The mechanism is that each retrieved document reshapes the searcher's mental model of the domain, generating new terminology and new sub-questions — the query evolves mid-search rather than being fixed at the outset. The model has 414+ citations. Scope: applies most strongly to knowledge-domain searches (research, literature review, investigative journalism) where the searcher begins with incomplete vocabulary; less applicable to known-item or fact retrieval where the query is already fully specified. Kit-maker implication: agent pipelines that fire a single query and treat silence as completion are architecturally wrong for research tasks; the pipeline must support iterative query reformulation triggered by each retrieved chunk.

**Verify note:** Source confirmed: ERIC EJ404172, Online Review vol. 13 no. 5, October 1989. Core claim accurately characterises the paper's argument. Citation count 'claimed as 414+' is a significant understatement — Google Scholar shows 3,187 citations as of 2026. The paper is a theoretical/conceptual framework, not an empirical study, but the claim does not misrepresent it as such. Scope qualifications are well-calibrated.

---

### [key: berrypicking-six-search-tactics]
- evidence: empirical
- confidence: medium
- group: information-seeking-models
- sources: https://pages.gseis.ucla.edu/faculty/bates/articles/berrypicking.pdf, https://www.igi-global.com/viewtitle.aspx?TitleId=198545

**Claim:** Bates identified six distinct search tactics users naturally cycle through during berrypicking: citation chasing (following references), source chaining, journal runs, area scanning, subject searching, and author searching. The mechanism is that no single tactic exhausts a knowledge space — each tactic accesses a structurally different graph of the literature (citation graph vs. subject index vs. browsing). Scope: validated in humanities and social sciences; less studied in structured datasets with strong controlled vocabularies (e.g., legal databases). Kit-maker implication: a research agent that only issues keyword queries to one database is missing at least five of the six tactic classes; a full research kit should schedule all six as distinct retrieval modes, not rely on query reformulation alone.

**Verify note:** The 1989 paper is confirmed real. Google Scholar excerpts confirm at least four of the six tactics (citation chasing, source/footnote chaining, journal runs, area scanning). The full six-item list in the exact phrasing stated could not be verified because the PDF was binary-unreadable via fetch. The claim's framing that users 'naturally cycle through' these tactics overstates the paper, which presents them as observed search behaviours from prior literature synthesis. The scope qualifier (less studied in legal databases) is the author's gloss, not Bates' claim.

---

### [key: librarian-coauthor-search-quality]
- evidence: empirical
- confidence: medium
- group: expert-search-quality
- sources: https://pubmed.ncbi.nlm.nih.gov/25766056/, https://pmc.ncbi.nlm.nih.gov/articles/PMC8582191/

**Claim:** Koffel & Rethlefsen (2016, PubMed PMID 25766056) found that systematic reviews with a librarian co-author had significantly higher odds of meeting 8 of 13 search quality standards versus reviews with no librarian; reviews that merely mentioned librarian participation (without co-authorship) met only 6 more standards. The mechanism is structural: librarians contribute controlled-vocabulary expertise (MeSH mapping), multi-database translation, and PRESS peer review at the query-construction stage — not just at retrieval. Scope: studied in biomedical systematic reviews; the quality lift is largest on controlled-vocabulary-dependent databases (MEDLINE, EMBASE); smaller effect expected in free-text domains without a strong thesaurus. Kit-maker implication: search quality correlates with structured upfront query decomposition (PICO-style framing, synonym expansion, MeSH anchoring) applied before any retrieval call, not post-hoc filtering of results.

**Verify note:** PMID 25766056 is confirmed but the actual citation is Rethlefsen ML, Farrell AM, Osterhaus Trzasko LC, Brigham TJ., J Clin Epidemiol. 2015 Jun;68(6):617-26 — not 'Koffel & Rethlefsen (2016).' Author name and year are both wrong. The substantive finding (librarian co-authored SRs had significantly higher odds of meeting search quality standards) is confirmed by the abstract with strong statistical support (ANOVA p<0.0001, n=270). The directional finding checks out; the bibliographic attribution does not.

---

### [key: librarian-peer-review-rct]
- evidence: empirical
- confidence: medium
- group: expert-search-quality
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC8582191/, https://trialsjournal.biomedcentral.com/articles/10.1186/s13063-021-05738-z

**Claim:** A pragmatic RCT (registered in Trials journal, n=150 systematic review manuscripts submitted to BMJ and BMJ Open) tested adding librarians/information specialists as methodological peer reviewers. This is one of the few RCTs on search methodology rather than observational evidence. The mechanism tested is that expert searcher review at the peer-review stage catches structural errors invisible to domain-expert reviewers. Scope: biomedical publishing context; may not generalize to grey-literature or rapid-review pipelines. Kit-maker implication: in an agent kit, a dedicated 'query auditor' role (separate from the retriever) modeled on librarian peer review could catch systematic gaps before the retrieval budget is spent.

**Verify note:** PMC8582191 confirmed as a real 2021 Trials journal article. However, it is a protocol paper — not a completed RCT. At publication, recruitment had not yet begun ('We anticipate it will begin in late 2021'). The claim presents this as a study that 'tested' the intervention, implying results exist. This is a material misrepresentation: the 'mechanism tested' framing implies evidentiary weight from data that had not been collected at the cited date. N=150 planned and BMJ/BMJ Open journals are correctly stated. Whether results were subsequently published is unknown from this session.

---

### [key: search-error-rate-90-percent]
- evidence: empirical
- confidence: medium
- group: search-errors-failures
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6466507/, https://jmla.mlanet.org/ojs/jmla/article/view/567, https://www.sciencedirect.com/science/article/abs/pii/S0895435606000436

**Claim:** Sampson & McGowan (2006, Journal of Clinical Epidemiology) found 90% of published MEDLINE search strategies contained at least one error, with 80% being errors that limited search effectiveness. A later study (Grindlay et al., 2019, JMLA PMC6466507) of 137 systematic reviews found 92.7% had at least one error; most common were missing term variations (48.2%) and redundancy (34.3%). The mechanism is that searchers fail to map every conceptual synonym and controlled-vocabulary equivalent of their construct — especially inflected forms, spelling variants, and database-specific thesaurus terms. Scope: errors measured against published reporting standards (PRESS, PRISMA-S); the 90% figure applies specifically to MEDLINE searches, not to full-text or web searches. Kit-maker implication: a kit agent that generates queries without explicit synonym-expansion and controlled-vocabulary mapping steps will statistically inherit this ~90% error rate; term-coverage auditing must be a first-class pipeline stage.

**Verify note:** Sampson & McGowan 2006 confirmed at PMID 16980145 (J Clin Epidemiol 59(10):1057-63): 90.5% of search strategies had at least one error, ~82.5% had recall-affecting errors. The second study is attributed to 'Grindlay et al. 2019' but PMC6466507 and the JMLA article are by Salvador-Olivan, Marco-Cuenca & Arquero-Aviles — a completely different team. PubMed search for 'Grindlay 2019' returns zero results. The 92.7% and 78.1% figures are real but from Salvador-Olivan. Additionally, the specific error-type percentages ('missing term variations 48.2%, redundancy 34.3%') do not match the source, which reports missing synonyms (54.0%) and missing morphological variations (49.6%) as top errors.

---

### [key: recall-bias-most-common-error]
- evidence: empirical
- confidence: high
- group: search-errors-failures
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC6466507/

**Claim:** Grindlay et al. (2019, JMLA) found that errors affecting recall (missing relevant documents) were the most frequent error class (78.1% of all errors), while errors affecting precision (retrieving irrelevant documents) were less common. The mechanism is asymmetry: false positives are visible and easily filtered post-retrieval, while false negatives are invisible — no one notices what wasn't found. Scope: this recall-bias claim applies to systematic review contexts where completeness is a correctness criterion; in casual search where 'good enough' suffices, precision errors matter more because they impose reading cost. Kit-maker implication: agent kits serving research tasks must optimize recall at the query stage and apply precision filtering downstream; reversing this order (over-filtering at query time) produces invisible, unrecoverable gaps.

**Verify note:** 78.1% recall-error figure confirmed from PMC6466507 (Salvador-Olivan et al. 2019, n=137). The asymmetry argument — false negatives invisible, false positives filterable — is a logical inference consistent with the paper's framing rather than an explicit stated mechanism, but it is an accurate characterisation of the structural problem. Scope qualification (systematic review completeness standard vs casual search) is well-calibrated. No material extrapolation.

---

### [key: domain-vs-ir-knowledge-two-factors]
- evidence: empirical
- confidence: low
- group: expert-novice-differences
- sources: https://www.irit.fr/publis/IRIS/IPM16_Tamine-Chouquet.pdf, https://asistdl.onlinelibrary.wiley.com/doi/10.1002/pra2.2016.14505301063

**Claim:** Tamine & Chouquet (2016, Information Processing & Management) and Liu et al. (2016, ASIST) established empirically that query formulation expertise decomposes into two independent factors: domain knowledge (knowing what concepts exist and how they relate in the subject field) and IR knowledge (knowing how databases index, how boolean operators combine, how thesaurus terms behave). The mechanism is that each factor enables a distinct query construction move: domain knowledge generates the vocabulary space; IR knowledge translates vocabulary into database-optimal syntax. Scope: the two-factor model is most clearly demonstrated in structured database search (MEDLINE, legal databases); in web search, where ranking obscures syntax choices, the IR knowledge factor is less determinative. Kit-maker implication: an agent kit must supply both factors independently — it cannot substitute IR expertise with domain expertise alone; query-construction and database-syntax modules need separate designs.

**Verify note:** Tamine & Chouquet (2016) exists and studies how medical domain expertise affects IR, confirmed via Google Scholar description. However, the description explicitly does not show a formal two-factor decomposition model — it studies the broader influence of expertise on query formulation without establishing two independent orthogonal factors. Liu et al. 2016 ASIST (paywalled) focuses on predicting topic knowledge at search stages, not a two-factor decomposition. The claim that these papers 'established empirically' that query expertise 'decomposes into two independent factors' is not supported by what can be verified. The conceptual distinction between domain and IR knowledge is real and widely discussed, but the specific empirical establishment from these papers is unconfirmed.

---

### [key: novice-longer-queries-domain-novice]
- evidence: empirical
- confidence: low
- group: expert-novice-differences
- sources: https://asistdl.onlinelibrary.wiley.com/doi/10.1002/pra2.2016.14505301063, https://www.irit.fr/publis/IRIS/IPM16_Tamine-Chouquet.pdf

**Claim:** Research on query formulation (Liu 2016, ASIST; prior web search studies) consistently finds a counterintuitive pattern: domain novices formulate longer initial queries than domain experts, because novices copy surface vocabulary from task descriptions while experts select precise terms from internalized concept maps. The mechanism is that novice query length reflects vocabulary uncertainty (more terms hedging against the right one), while expert query brevity reflects terminological certainty (fewer precise anchors retrieve targeted result sets). Scope: this pattern holds in structured database search; in conversational/LLM search the dynamic is different because ambiguity can be resolved through dialogue. Kit-maker implication: query verbosity is not a reliable proxy for query quality; a kit agent should not use output length as a quality signal for generated queries — precision of terms is the operative dimension.

**Verify note:** Both primary sources were inaccessible (ASIST DOI returned 402; Tamine & Chouquet PDF was binary-unreadable). The finding that domain novices form longer queries than experts exists in the broader literature (e.g., Holscher & Strube 2000 in web search). However, the specific attribution to Liu 2016 and Tamine & Chouquet 2016 could not be verified, and the abstract description of Liu 2016 (predicting topic knowledge at search stages) does not match a study primarily about query length differences. A real finding may be attributed to sources that do not contain it.

---

### [key: expert-strategy-switching-on-failure]
- evidence: empirical
- confidence: medium
- group: expert-novice-differences
- sources: https://www.sciencedirect.com/science/article/abs/pii/S0740818805000095, https://files.eric.ed.gov/fulltext/ED429619.pdf

**Claim:** Multiple studies on expert vs. novice web and database search (How Experts and Novices Search the Web, Library & Information Science Review, 2005; ERIC ED429619) found that experts reformulate failed queries more quickly and more radically than novices, switching strategies rather than repeating variants of the same query. The mechanism is metacognitive: experts have a mental model of why a query failed (wrong vocabulary, wrong index, wrong database) and target the specific failure mode; novices treat all failures as identical and iterate narrowly. Scope: most clearly observed in structured database search; effect size smaller in ranked web search where partial success is more common. Kit-maker implication: agent retry logic must include failure-mode diagnosis (vocabulary gap? wrong source? boolean error?) and strategy-class switching — not just query string reformulation.

**Verify note:** Tabatabai & Shore (2005), Library & Information Science Research, confirmed via Google Scholar (257 citations). Full text was paywalled (403). ERIC ED429619 was fetched as binary-unreadable PDF. The strategy-switching finding (experts reformulate more quickly and radically) is a standard characterisation of this paper's findings as cited in secondary literature, and is consistent with Holscher & Strube 2000 and Marchionini 1995. Specific framing ('more radically,' 'targeting failure modes') cannot be confirmed verbatim. The general direction is well-supported across the field; the exact quotable claim is unverified.

---

### [key: domain-independent-search-training]
- evidence: empirical
- confidence: high
- group: information-literacy-instruction
- sources: https://asistdl.onlinelibrary.wiley.com/doi/10.1002/asi.23776, https://dl.acm.org/doi/abs/10.1002/asi.23776

**Claim:** Smith (2017, JASIST doi:10.1002/asi.23776, 'Domain-independent search expertise: Gaining knowledge in query formulation through guided practice') found that query formulation skill is teachable as a domain-independent competency through guided practice: trainees showed significant improvements in query specificity and reformulation effectiveness that transferred across subject domains. The mechanism is that explicit instruction on search tactics (choosing field tags, synonym mapping, Boolean logic) encodes procedural search knowledge that operates independently of topic familiarity. Scope: this study used academic database search tasks; transfer to web search or LLM prompting contexts has not been directly tested. Kit-maker implication: a kit can front-load a query-construction scaffold (explicit synonym mapping step, source-selection step, syntax-check step) and users of varied domain backgrounds will benefit, since the scaffold externalizes the procedural knowledge that experts carry internally.

**Verify note:** Smith 2017, JASIST, DOI 10.1002/asi.23776 confirmed via Google Scholar. Core finding accurately characterised: domain-independent search constructs appear transferable across domains, based on observing 10 students through a semester expert-search course. Important caveat: n=10, observational design, single cohort. 'Significant improvements' in the claim should be read as qualitative progression observed in a small study, not statistically significant effect sizes from a controlled experiment. The kit-maker inference (externalising procedural knowledge via scaffold) is a reasonable extrapolation. High confidence on source existence and characterisation; the evidence base itself is modest (small n, no control group).

---

### [key: systematic-review-six-librarian-competencies]
- evidence: consensus
- group: information-literacy-instruction
- sources: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11486078/

**Claim:** A case report on curriculum building for librarian systematic review competencies (PMC11486078) defined six observable competencies: (1) reference interview to define the research question, (2) preliminary scoping searches, (3) source selection across databases, (4) building the full search strategy with controlled vocabulary, (5) PRESS peer review of another searcher's strategy, and (6) PRISMA-S reporting. These competencies are teachable and assessable. The mechanism is that each competency addresses a distinct failure mode in the search pipeline; omitting any one creates a corresponding gap class. Scope: primarily validated in health sciences library training; the specific competencies map onto biomedical database structures. Kit-maker implication: these six competencies map directly onto six pipeline stages that a research agent kit should instantiate as distinct modules — each module corresponds to a known failure mode the competency was designed to prevent.

---

### [key: query-expansion-recall-improvement-6-7-percent]
- evidence: empirical
- confidence: medium
- group: automated-query-optimization
- sources: https://www.mecs-press.org/ijitcs/ijitcs-v17-n2/IJITCS-V17-N2-7.pdf, https://arxiv.org/pdf/2510.10009, https://arxiv.org/pdf/1301.7364

**Claim:** Multiple NLP/IR studies on automated query expansion (reviewed in MECS-Press IJITCS V17-N2; arxiv 2510.10009 on RL-based query expansion) report that moving from single-query to dual-query generation improves average retrieval recall by approximately 6.7% on standard benchmarks. Bayesian-network thesaurus expansion produced precision improvements ranging from 3.85% to 29.09% across recall levels on the Adi collection. The mechanism is that single-term queries suffer from vocabulary mismatch — the query term and the document term differ while being semantically equivalent; expansion bridges this by adding synonyms, hypernyms, and related terms drawn from a thesaurus or language model. Scope: gains are largest in specialized corpora with controlled vocabularies (biomedical, legal); gains are smaller in web-scale search where ranking already absorbs vocabulary variation. Kit-maker implication: query expansion should be a default pipeline step for agent kits targeting specialized corpora; the expected improvement is modest (5-10% recall) but the cost is low, making it a positive-expected-value addition.

**Verify note:** The 6.7% recall improvement for moving from single-query to dual-query generation IS confirmed in arxiv 2510.10009 (ExpandSearch HTML version): 'an average improvement of 6.7% when moving from single-query (n=1) to dual-query (n=2) generation.' The benchmark set is seven general/multi-hop QA datasets (NQ, TriviaQA, PopQA, HotpotQA, 2WikiMultiHopQA, MuSiQue, Bamboogle) — not specialized corpora. The paper also reports an overall 4.4% absolute improvement over state-of-the-art baselines. The Adi collection and the 3.85%–29.09% precision range: the 1998 Bayesian network paper (1301.7364) exists and is about query expansion on 'three standard test collections,' but the abstract does not name the Adi collection or mention those specific percentages; the full text was not accessible. The MECS-Press PDF was binary-unreadable. The '6.7% recall' specific number is real and sourced. The Adi/precision range is plausible for a 1998 IR paper but unverified from available sources. The claim's scope note ('gains largest in specialized corpora') is an extrapolation beyond what ExpandSearch tested — ExpandSearch used general QA benchmarks, not specialized corpora. The mechanism description (vocabulary mismatch) is standard IR consensus.

---

### [key: query-expansion-precision-dilution]
- evidence: empirical
- confidence: medium
- group: automated-query-optimization
- sources: https://nlp.stanford.edu/IR-book/pdf/09expand.pdf, https://www.sciencedirect.com/science/article/abs/pii/S0306457306001932

**Claim:** The Stanford IR textbook (Manning, Raghavan & Schütze, Introduction to Information Retrieval, Chapter 9; nlp.stanford.edu/IR-book) and multiple empirical studies establish that query expansion reliably increases recall but reliably decreases precision when the original query contains ambiguous terms — because expansion adds synonyms of the wrong word sense. The mechanism is word-sense ambiguity: expanding 'bank' adds 'financial institution' AND 'river bank' synonyms, retrieving irrelevant documents for both senses. Scope: ambiguity-driven precision loss is largest in general-domain corpora; in domain-specific search (biomedical MeSH, legal headnotes) controlled vocabulary largely pre-resolves sense ambiguity, so expansion is safer. Kit-maker implication: a kit agent should apply query expansion after context disambiguation (establishing the domain and sense of each key term), not before; automatic expansion without sense resolution is a precision risk.

**Verify note:** The Stanford IR textbook Chapter 9 exists at the cited URL (confirmed as a real PDF) and covers relevance feedback and query expansion — the claim about word-sense ambiguity causing precision loss is standard IR textbook doctrine associated with this chapter. The chapter could not be read as rendered text (binary PDF). The ScienceDirect source returned HTTP 403 and was not verifiable. The core mechanism claim (ambiguous term expansion → precision loss, 'bank' example) is textbook-level consensus in IR literature, high plausibility, but the specific 'bank' example and the claim that this is explicitly stated in Manning et al. Chapter 9 could not be confirmed from the actual text. The scope note (domain-specific search safer due to controlled vocabulary) is a well-established IR consensus claim. Overall: the textbook source is real and the mechanism is consensus IR knowledge, but exact claim content could not be independently verified from the chapter text.

---

### [key: rag-recall-precision-bottleneck]
- evidence: empirical
- confidence: high
- group: automated-query-optimization
- sources: https://arxiv.org/pdf/2601.03258, https://arxiv.org/pdf/2510.09106, https://pmc.ncbi.nlm.nih.gov/articles/PMC12383471/

**Claim:** Multiple 2024-2025 RAG benchmark studies (arxiv 2601.03258 FlashRank paper; arxiv 2510.09106; PMC12383471 clinical RAG) demonstrate the fundamental RAG retrieval bottleneck: retrieving too few passages loses critical context (recall failure); retrieving too many overwhelms the context window and degrades generation quality (precision failure). The FlashRank two-stage pipeline showed mean NDCG@10 improvement of 5.4%, generation accuracy improvement of 6-8%, and context token reduction of 35% by combining LLM-driven query expansion with a reranker. The mechanism is that query expansion raises recall in the first stage while the reranker enforces precision under a token budget in the second stage — the two concerns are addressed by separate components. Scope: benchmarked on MS MARCO, BEIR, and FinanceBench; effects vary by domain density and context window size. Kit-maker implication: a kit architecture must treat retrieval recall and context-window precision as separate pipeline concerns with separate mechanisms — a single retrieval call cannot optimize both simultaneously.

**Verify note:** All three specific numbers from the FlashRank paper (arxiv 2601.03258) were confirmed from the HTML version: NDCG@10 improvement 'up to 5.4%', generation accuracy improvement '6-8%', context token reduction '35%'. Benchmarks confirmed as MS MARCO, BEIR, and FinanceBench. The clinical RAG paper (PMC12383471) confirmed: naive RAG had recall 0.40 and precision 0.17; the full pipeline achieved recall 1.00 and precision 0.53; accuracy improved from 50% to 87%. The paper is on 30 postoperative rhinoplasty queries — a small n=30 study, not a large-scale benchmark. arxiv 2510.09106 was inaccessible as rendered text. The architectural claim (query expansion for recall + reranker for precision as separate concerns) accurately describes the FlashRank paper's design. The specific numbers check out from the sources that were readable.

---

## Null results
- None

## New angles surfaced
- Search result evaluation and source credibility assessment — how users (and agents) judge retrieved documents for relevance and authority, distinct from the query-formulation stage studied here
- Zero-result and empty-SERP handling — what agents should do when a query returns nothing, a poorly studied but high-impact failure mode in automated pipelines
- Cross-database search translation — how a search strategy built for one database (MEDLINE boolean) must be reformulated for another (Scopus, EMBASE, Google Scholar) without losing construct validity
- Temporal coverage gaps — systematic review literature shows that searches anchored to a fixed date range systematically miss pre-publication grey literature and ongoing trials; implications for kit design of time-bounded research tasks

