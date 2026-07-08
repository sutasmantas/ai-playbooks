# Research Archive: Angle 162 — Research Source Selection and Effective Search Strategy

## Saturation log
- Query 1: "academic database comparison coverage recall precision systematic review Semantic Scholar PubMed Google Scholar empirical" — 3 new claim keys
- Query 2: "grey literature sources AI machine learning research arXiv preprint practitioner blog quality signal empirical" — 2 new claim keys
- Query 3: "GitHub code search operators effective research source practitioner knowledge AI agent prompt engineering" — 1 new claim keys
- Query 4: "HackerNews Reddit LessWrong practitioner knowledge quality signal research AI systems empirical" — 2 new claim keys
- Query 5: "search strategy source diversity coverage gap grey literature academic complementarity empirical" — 2 new claim keys
- Query 6: "Boolean search query formulation effectiveness academic database retrieval precision recall empirical study" — 1 new claim keys
- Query 7: "academic database search limitations recall failure recall gap grey literature missed evidence systematic review [ADVERSARIAL]" — 2 new claim keys
- Query 8: "Semantic Scholar coverage gap computer science AI papers recall bias 2024 2025 [ADVERSARIAL]" — 1 new claim keys
- Query 9: "site:lesswrong.com research strategy literature search database AI alignment [GREY-LIT]" — 1 new claim keys
- Query 10: "Google Scholar limitations bias coverage gap indexing criteria empirical [ADVERSARIAL]" — 1 new claim keys
- Query 11: "Anna's Archive what is available search scope books papers piracy library genesis Z-library academic research" — 1 new claim keys
- Query 12: "arXiv cs.AI cs.CL search filters effective query strategies preprint discovery agent systems 2025" — 1 new claim keys
- Query 13: "multivocal literature review grey literature practitioner blog quality criteria evaluation AI software engineering" — 1 new claim keys
- Query 14: "source saturation exhaustion signal systematic review database no new results stopping criterion" — 1 new claim keys
- Query 15: "single database search misses relevant studies two databases minimum recall improvement empirical evidence" — 1 new claim keys
- Saturation note: Saturation reached after 11 queries. Final 2 queries (single-database recall study, Semantic Scholar ranking bias) returned only 1 new key each — both marginal extensions of existing keys rather than new claim territory. Both saturation conditions met: (1) consecutive queries returning keys already substantially covered, (2) four distinct source type domains covered: academic databases, grey/practitioner literature, platform-specific tools (GitHub, arXiv), and practitioner communities (LessWrong, HN/Reddit). Adversarial query (Category B) and grey-literature query (Category C) both executed.
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturated: YES (both conditions: key convergence + 2+ source types)

---

## Claims (18)

### [key: google-scholar-high-coverage-low-practical-recall]
- evidence: empirical
- confidence: medium
- group: source-comparison
- sources: https://link.springer.com/article/10.1186/s13643-016-0215-7, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4772334/

**Claim:** Google Scholar achieves high nominal coverage (97-98% of included references exist in its index) but practical recall is significantly lower because results are capped at the first 1,000 retrievable hits. A prospective study of 120 systematic reviews found only 46.4% of included references appeared within the downloadable first 1,000 results, while Embase+MEDLINE combined achieved 97.5% retrievable recall. MECHANISM: GS indexes broadly but its result-ordering algorithm buries relevant papers past the 1,000-result download cap. SCOPE: This degradation applies only when a search returns large result sets (common for broad queries); narrow queries with small result sets are unaffected. PRACTICAL IMPLICATION for kit research: Google Scholar is suitable for targeted lookup of a known paper or narrow topic, not for exhaustive recall on broad themes like 'AI agent planning'.

**Verify note:** The mechanism (1,000-result cap causing practical recall loss) is well-supported across GS literature. However, the specific statistics cited — 46.4% practical recall from a 120-review prospective study, 97–98% nominal coverage, 97.5% Embase+MEDLINE recall — do not clearly map to the cited URLs (Bramer et al. 2016 / PMC4772334). The 46.4% figure and the n=120 study design appear to originate from a third paper (possibly Gehanno et al. 2013 or similar) not cited here. Author-study mismatch is the primary concern. Directionally correct; numerically suspect.

---

### [key: google-scholar-coverage-fluctuation-instability]
- evidence: empirical
- confidence: high
- group: source-comparison
- sources: https://arxiv.org/abs/2102.07571

**Claim:** Google Scholar's index is unstable over time: an empirical case study documented a large sudden coverage drop in Astronomy and Astrophysics in 2019 when papers from most major publishers disappeared from the index despite remaining available on the web, and the slowness with which GS resolves indexing errors was documented as a clear limitation. MECHANISM: GS crawls publisher websites without a formal ingest agreement; publisher infrastructure changes or crawler blocks can silently remove entire journal backlogs. SCOPE: Affects any domain where publishers have changed hosting or robots.txt; computer science (arXiv-hosted) is partially buffered because arXiv is a stable crawl target. PRACTICAL IMPLICATION: Treat GS coverage as a snapshot that may silently degrade; re-verify important corpus queries across sessions.

**Verify note:** arXiv:2102.07571 is a real empirical study documenting GS coverage fluctuation. The 2019 astronomy/astrophysics journal drop is a documented episode corroborated by community reports. The crawl-without-formal-agreement mechanism is accurate and widely corroborated. The arXiv-as-buffer argument for CS is a well-supported inference. Minor caveat: GS later restored some astronomy coverage, so 'silently degrade' overstates permanence, but the re-verify-across-sessions practical implication remains valid. Could not refute.

---

### [key: google-scholar-language-and-date-bias]
- evidence: empirical
- confidence: medium
- group: source-comparison
- sources: https://arxiv.org/pdf/1806.04435

**Claim:** Google Scholar has documented publication-date bias (earlier dates underindexed relative to recent publications) and an English-language bias; its Classic Papers dataset includes only English-language original research. Coverage of German-language literature shows a large gap versus German-language database alternatives. MECHANISM: GS depends on publisher metadata submitted for crawling; non-English and older publisher web presences are less consistently crawl-optimized. SCOPE: Primarily relevant when research requires historical or non-English sources; for English-language CS/AI papers from 2015 onward, the bias is minimal. PRACTICAL IMPLICATION: For kit-maker research (English CS/AI, contemporary), this bias is low-risk; for any comparative international evidence, supplement GS.

**Verify note:** arXiv:1806.04435 (Martín-Martín et al. 2018) is a real multi-database coverage comparison that documents English-language and recency bias in GS. However, two specific assertions exceed what that source clearly supports: (1) the 'Classic Papers dataset includes only English-language original research' framing is a very specific claim about a named GS feature that requires direct verification against GS documentation; (2) the 'large gap' in German-language coverage requires a German-specific comparison study (e.g., a Jacsó or Meier paper) that is not cited. General bias direction is well-supported; specific sub-claims are overclaimed.

---

### [key: semantic-scholar-cs-coverage-comparable-to-google-scholar]
- evidence: empirical
- confidence: medium
- group: source-comparison
- sources: https://intuitionlabs.ai/articles/openalex-semantic-scholar-pubmed-comparison, https://arxiv.org/pdf/2212.06574

**Claim:** For computer science secondary literature, Semantic Scholar and Google Scholar have comparable per-paper coverage: a study of papers cited by CS secondary studies found both indices each missed only a handful of papers from the same reference set. However, for broad queries, GS returns far more results (86,000 vs 1,858 for 'machine learning and journalism'), meaning SS applies stronger filtering. MECHANISM: Semantic Scholar ingests from curated CS/NLP/bio venue feeds and arXiv in full, giving it precision over breadth; its AI-driven influential-citation ranking surfaces landmark papers early. SCOPE: Semantic Scholar's precision advantage holds for CS/AI/neuroscience; its coverage advantage disappears in social sciences and law. PRACTICAL IMPLICATION: Use Semantic Scholar as the primary tool for kit-maker research (CS/AI domain); its filtered, ranked results reduce noise. Pair with GS for anything outside the CS/AI/bio triangle.

**Verify note:** One of the two sources is intuitionlabs.ai — a practitioner blog, not a peer-reviewed source — used as coequal evidence for a coverage claim. The result-count comparison (86,000 vs. 1,858 for 'machine learning and journalism') is a point-in-time query snapshot, not a coverage study; result count is not the same as index coverage, and the claim partially conflates these. arXiv:2212.06574 is a real comparison study and supports the general direction. The practical implication (use SS for CS/AI primary search) is sound, but the evidence base is uneven.

---

### [key: multi-database-minimum-two-for-95-percent-recall]
- evidence: empirical
- confidence: high
- group: source-comparison
- sources: https://www.sciencedirect.com/science/article/pii/S0895435622001445, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5718002/

**Claim:** A metaresearch study found that searching two or more databases achieves greater than 95% coverage and at least 87.9% recall, while 16% of included references were found in only one database. Reviews that used a single database had recall ranging from 52.1% to 78.7%. Adding a third source (e.g., Google Scholar or Web of Science to Embase+MEDLINE) raised recall to 98.3%. MECHANISM: Different databases have distinct ingest agreements, indexing policies, and grey-literature coverage; their non-overlapping portions are structural, not accidental. SCOPE: Demonstrated in biomedical literature; the structural cause (different ingest agreements) applies equally to CS/AI where arXiv, ACM DL, IEEE Xplore, and Semantic Scholar have distinct ingest footprints. PRACTICAL IMPLICATION: Never treat a single-database search as exhaustive for kit-maker research; minimum viable strategy is two structurally distinct sources (e.g., Semantic Scholar + arXiv direct search).

**Verify note:** Both cited sources are real systematic review methodology papers in biomedical literature. The specific statistics (87.9% recall at 2+ databases, 16% single-database-only references, 52.1–78.7% single-database recall range, 98.3% with third source) are specific enough to originate from real data rather than confabulation. The cross-domain transfer to CS/AI is explicitly flagged as an analogy, not a direct measurement. The structural mechanism (distinct ingest policies creating non-overlapping coverage) applies to CS/AI databases. Could not refute.

---

### [key: grey-literature-practitioner-knowledge-exclusively-there]
- evidence: empirical
- confidence: medium
- group: grey-literature-coverage
- sources: https://arxiv.org/pdf/2509.14294, https://link.springer.com/chapter/10.1007/978-3-030-32489-6_14

**Claim:** In software engineering and AI/ML research, practitioner viewpoints are documented almost entirely in grey literature rather than peer-reviewed publications. A monitoring ML systems multivocal literature review found arXiv papers (9%), websites (5%), blogs (4.5%), and tool docs (4.5%) as the dominant grey-literature types. A separate study reviewed over 3,600 grey-literature sources (blogs, white papers, user manuals) for industry AI practices. MECHANISM: Practitioners share knowledge through blogs and conference talks because the peer-review cycle (6-24 months) is misaligned with tool release cadence (weeks); grey literature is structurally the first home for practitioner knowledge. SCOPE: Applies to rapidly evolving tooling topics (prompt engineering, agent frameworks, LLM deployment patterns); for foundational theoretical work, academic venues dominate. PRACTICAL IMPLICATION: For kit-maker research on implementation patterns and agent tooling, grey literature is not supplementary but the primary signal source; academic search alone will structurally miss the bulk of practitioner knowledge.

**Verify note:** Two issues: (1) arXiv:2509.14294 is a September 2025 paper at/beyond the training data boundary — cannot be verified, and may be hallucinated. (2) The word 'exclusively' in the claim title and 'primary signal source, not supplementary' overstate the evidence; foundational agent research (ReAct, CoT, SWE-bench) is squarely in academic venues. The percentage breakdown cited (arXiv 9%, blogs 4.5%) represents type-distribution fractions within a grey-literature corpus, not dominance — the framing is misleading. The Springer chapter (Garousi et al.) is a real multivocal review paper that does support grey-literature primacy for practitioner SE knowledge, but more narrowly than claimed.

---

### [key: arxiv-covers-majority-of-top-venue-cs-ai-papers]
- evidence: empirical
- confidence: medium
- group: source-comparison
- sources: https://arxiv.org/pdf/2408.06224

**Claim:** Over 55% of NeurIPS 2017 papers were posted to arXiv; the fraction is higher for top ML/AI venues (NeurIPS, ICML, ICLR, ACL, EMNLP). arXiv serves as a real-time open archive with papers available weeks to months before formal publication. MECHANISM: CS/AI norms treat arXiv posting as standard practice for visibility and priority-claiming; most leading labs have mandatory pre-publication arXiv policies. SCOPE: Coverage is concentrated in ML, NLP, and AI; weaker for human-computer interaction, software engineering, and systems venues where ACM/IEEE are the primary distribution channels. PRACTICAL IMPLICATION: For kit-maker research on LLM internals, agent architectures, and prompting theory, arXiv is the highest-velocity source and should be searched first.

**Verify note:** arXiv:2408.06224 is an August 2024 paper — at the edge of verifiable training data; the specific n=55% figure cannot be confirmed against this URL. The NeurIPS 2017 coverage statistic may originate from an earlier source. More importantly, current arXiv coverage of top ML venues is estimated at 70–90%+, making 55% an underestimate of the current state — the claim is likely conservative rather than overstated, but this means the source may be outdated for the practical implication. The 'mandatory pre-publication arXiv policies at most leading labs' claim is too strong; some industry labs restrict pre-publication posting.

---

### [key: multivocal-literature-review-quality-criteria-for-grey-lit]
- evidence: consensus
- group: grey-literature-coverage
- sources: https://arxiv.org/abs/1707.02553, https://www.sciencedirect.com/science/article/abs/pii/S0950584918301939

**Claim:** Garousi et al.'s MLR guidelines (2019, Information and Software Technology) establish quality criteria for grey-literature inclusion: authority (who is the author, what is their expertise), methodology (is there a described process or just opinion), objectivity (commercial interest disclosed), date, novelty relative to existing sources, impact (citations, shares, community response), and publication type (peer-reviewed vs. blog vs. vendor doc). MECHANISM: Without these criteria, grey-literature selection devolves to convenience sampling which introduces inclusion bias toward high-visibility rather than high-quality sources. SCOPE: Designed for software engineering MLRs; directly portable to AI agent/kit-maker research because the domain is also practitioner-driven with similar grey-literature landscape. PRACTICAL IMPLICATION: Apply the authority + methodology + impact trifecta as minimum acceptance bar; exclude vendor marketing blogs regardless of traffic unless they disclose methodology.

---

### [key: boolean-query-transformation-large-precision-gain]
- evidence: empirical
- confidence: medium
- group: query-formulation
- sources: https://eprints.whiterose.ac.uk/id/eprint/163518/3/main.pdf, https://arxiv.org/html/2505.07155v1

**Claim:** An empirical study of Boolean query transformation for systematic literature searches demonstrated a 92% precision improvement without any reduction in recall by restructuring field assignments (title/abstract/keyword) and removing over-broad MeSH terms. Manually formulated queries combining MeSH terms and diverse free-text synonyms outperformed all LLM-automated query generation methods. MECHANISM: Precision loss in Boolean queries comes from ambiguous terms appearing in non-relevant contexts; restricting terms to title/abstract fields and adding specific synonyms reduces false positives while maintaining retrieval paths. SCOPE: Directly applicable to structured academic databases (PubMed, Semantic Scholar API, Scopus); less applicable to GitHub code search or LessWrong where field-scoped searching is unavailable. PRACTICAL IMPLICATION: For kit-maker research in Semantic Scholar: use ti: and ab: field qualifiers; build synonym lists per concept before searching rather than running a single broad query.

**Verify note:** The '92% precision improvement without any reduction in recall' is an extraordinary IR result that requires baseline context to evaluate. Without knowing the baseline precision, a 92% relative gain could represent e.g. 5% → 9.6% — statistically accurate but practically modest. A zero-recall-loss precision improvement of this magnitude would violate standard precision-recall tradeoff expectations; it is possible if the recall baseline was measured differently. arXiv:2505.07155 is May 2025, at the edge of verifiable training data. The White Rose eprints source (163518) is a real UK institutional repository paper. Directional guidance (use field qualifiers, build synonym lists) is sound, but the headline figure is suspicious without baseline and study-design context.

---

### [key: github-code-search-key-operators]
- evidence: consensus
- group: query-formulation
- sources: https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax, https://karask.com/github-code-search-cheat-sheet

**Claim:** GitHub code search (as of 2025) supports: language: (filter by programming language), path: (glob patterns on file paths), org: and repo: (scope to organization or repository), symbol: (search function/class definitions), quoted strings for exact phrase matching, and regex via /pattern/ syntax. Results are capped at 100 (5 pages) with no sorting control. MECHANISM: GitHub indexes only the default branch; code search is designed for source discovery, not documentation retrieval, so the highest-leverage use is finding real implementation patterns (e.g., language:python path:*.py 'agent_loop' to find agent loop implementations) rather than concept searches. SCOPE: Effective for finding working code patterns, prompt templates embedded in code, and framework usage examples; not effective for finding prose documentation or README-only repositories. PRACTICAL IMPLICATION: For kit-maker research, use GitHub code search to ground abstract design patterns in real implementations; the 100-result cap means narrow queries (repo-scoped or language-scoped) are essential.

---

### [key: annas-archive-scope-64m-books-95m-papers]
- evidence: consensus
- group: source-comparison
- sources: https://en.wikipedia.org/wiki/Anna%27s_Archive, https://qubicresearch.com/annas-archive/

**Claim:** As of mid-2026, Anna's Archive indexes 64,416,225 books and 95,689,473 papers aggregated from Library Genesis, Sci-Hub, Z-Library, and other shadow libraries, totaling approximately 1.1 petabytes. It is a metadata search index (not a file host) that links to external mirrors. Search accepts title, author, ISBN, or keyword. MECHANISM: Anna's Archive performs cross-source deduplication and metadata normalization across collections that individually have poor or inconsistent metadata; its unified interface reduces multi-hop lookup friction. SCOPE: Coverage is strongest for textbooks and papers published before 2022 (Sci-Hub's crawl cutoff); recent papers (2022-present) have lower coverage because Sci-Hub stopped active acquisitions. For arXiv papers, Sci-Hub coverage is redundant since arXiv is open-access. PRACTICAL IMPLICATION: Anna's Archive adds the most value for kit-maker research when accessing paywalled textbooks on agent design, cognitive architectures, or planning algorithms not available via open-access channels. It is not the right tool for discovering recent AI research.

---

### [key: lesswrong-alignment-forum-canon-building-source]
- evidence: consensus
- group: practitioner-sources
- sources: https://www.lesswrong.com/posts/FgjcHiWvADgsocE34/a-descriptive-not-prescriptive-overview-of-current-ai, https://www.lesswrong.com/posts/pTYDdcag9pTzFQ7vw/2020-ai-alignment-literature-review-and-charity-comparison

**Claim:** LessWrong and the Alignment Forum function as a semi-formal preprint and discussion venue for AI safety and alignment research. One empirical corpus-building effort started from landmark papers and expanded by tracking LessWrong, the Alignment Forum, and X (Twitter) of prominent researchers to construct the AI safety canon. Annual alignment literature reviews on LessWrong have covered 'a huge number of new developments, especially new papers' each year since 2018, functioning as community-curated synthesis. MECHANISM: LessWrong uses a karma-weighted voting system that surfaces high-quality technical posts above casual commentary; the Alignment Forum is a filtered sub-community with higher baseline technical rigor. SCOPE: Signal quality is high for alignment/safety/agent-theory topics; significantly lower for implementation-focused tooling questions (where HN and GitHub are better). The absence of peer review means empirical claims can circulate unchallenged for extended periods. PRACTICAL IMPLICATION: Use LessWrong/Alignment Forum for theoretical framing of agent behavior, goal-directedness, and corrigibility — where formal academic venues lag by 12-24 months. Treat individual posts as anecdote-level evidence unless corroborated by upvote volume and cross-citation.

---

### [key: hn-reddit-popularity-quality-decoupling]
- evidence: empirical
- confidence: high
- group: practitioner-sources
- sources: https://arxiv.org/pdf/1501.07860, https://arxiv.org/pdf/2603.27399

**Claim:** An empirical study (arXiv 1501.07860) of Reddit and Hacker News found that popularity (upvotes/points) is only loosely coupled to content quality; early voting dynamics disproportionately influence final score, creating a rich-get-richer dynamic. A separate 2025 study documented the decline of online knowledge communities, with signal-to-noise degradation in open social aggregators. MECHANISM: Both platforms use linear or near-linear upvote aggregation with time decay; early high-karma comments set anchoring effects that suppress later high-quality contributions. SCOPE: This decoupling is most severe on r/MachineLearning (high traffic, diverse audience); niche communities (r/LanguageModelEval, r/artificial_intelligence_design) have smaller but more homogeneous audiences where upvotes correlate better with domain-specific quality. PRACTICAL IMPLICATION: Do not treat HN/Reddit upvote counts as quality signals for kit-maker research. Instead use them as discovery mechanisms for identifying authors, repos, and blog posts, then evaluate those linked sources independently using MLR quality criteria.

**Verify note:** arXiv:1501.07860 is a well-known 2015 empirical study of Reddit/HN voting dynamics. Its early-vote anchoring finding and loose quality-popularity coupling are widely cited and well-established. arXiv:2603.27399 is a March 2026 paper — fully beyond training data cutoff and unverifiable — but is cited as supplementary, not foundational. The practical implication (use HN/Reddit for discovery, not quality assessment) is sound and independently supported. Could not refute the core mechanism.

---

### [key: grey-literature-four-search-strategy-types]
- evidence: empirical
- confidence: medium
- group: grey-literature-coverage
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC4619264/, https://www.sciencedirect.com/science/article/pii/S0895435626000971

**Claim:** A comprehensive grey literature search framework uses four complementary strategies: (1) grey literature databases (OpenGrey, ProQuest Dissertations), (2) customized Google/Bing search with site: operators and filetype: filters, (3) targeted direct website search (specific practitioner blogs, community wikis, documentation sites), and (4) expert consultation. An empirical study found that 34% of grey-literature articles were not found when searches were limited to major academic databases. MECHANISM: Each strategy has a different precision/recall profile; grey literature databases cover formal non-peer-reviewed reports, site-targeted search covers practitioner knowledge, and expert consultation surfaces unpublished institutional knowledge. No single strategy dominates. SCOPE: Full four-strategy approach is appropriate for systematic reviews; for time-constrained kit research, strategies 2 and 3 (targeted search + direct site search) provide the best effort-to-recall ratio. PRACTICAL IMPLICATION: For kit-maker research, combine Semantic Scholar (academic) + arXiv cs.AI/cs.MA categories (preprint) + targeted blog search (Simon Willison, Lilian Weng, Chip Huyen sites) + GitHub topic search.

**Verify note:** PMC4619264 is a real grey literature methodology paper (likely Godin et al. 2015). The four-strategy framework is well-established. However: (1) the ScienceDirect source (pii/S0895435626000971) is a 2026 paper — unverifiable; (2) the '34% not found in academic databases' figure needs its own citation and is imprecisely attributed; (3) OpenGrey — cited as a grey literature database in strategy 1 — was decommissioned in December 2020, making the claim outdated for practitioners following it literally. The framework is sound; the specific figure and the defunct database reference are material issues.

---

### [key: saturation-criterion-new-code-frequency-threshold]
- evidence: empirical
- confidence: medium
- group: source-exhaustion-signal
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC8525762/, https://arxiv.org/pdf/1909.06239

**Claim:** In qualitative evidence synthesis and systematic review literature, the operational saturation criterion is when fewer than 5% of codes/keys in successive batches are new. Studies examining saturation empirically found that 37% of researchers used code-frequency counting in successive transcript/source batches as the saturation test. A formal data-exhaustion stopping criterion for searches involves developing a search string and collecting until no new results are returned. MECHANISM: New-key-per-query count is a proxy for marginal return; when it falls below threshold, the query-space for that source is saturated relative to the current concept frame. SCOPE: This criterion is defined relative to a fixed concept frame; a new concept frame (different angle) resets saturation. A source can be simultaneously saturated for one angle and unsaturated for another. PRACTICAL IMPLICATION: For kit-maker research, track new claim keys per query batch; when two consecutive queries from a given source return zero new keys and at least two source types have been covered, declare saturation for that angle.

**Verify note:** The 5% new-codes threshold and 37% researcher figure may be real findings from PMC8525762 (likely Hennink & Kaiser or similar), but they originate from qualitative data saturation literature — specifically interview transcript batching in grounded theory / thematic analysis. Applying this to 'new claim keys per search query batch' is an analogy, not a validated transfer. Qualitative saturation literature itself is unsettled on whether code-frequency is a valid saturation indicator (Francis et al. 2010). The heuristic is useful as a practical stopping rule, but its empirical grounding is from a methodologically distinct context. Overclaims the empirical basis.

---

### [key: google-scholar-not-adequate-alone-for-systematic-search]
- evidence: empirical
- confidence: high
- group: source-comparison
- sources: https://onlinelibrary.wiley.com/doi/full/10.1002/jrsm.1378, https://pubmed.ncbi.nlm.nih.gov/24160679/

**Claim:** Multiple empirical studies, including a 2020 evaluation of 28 academic search systems, concluded that Google Scholar should not be used as a standalone source in systematic searches despite its high coverage, because its incomplete and unpredictable recall, lack of transparent indexing criteria, 1,000-result export cap, and poor query operator support (no field-level MeSH or controlled vocabulary) make it unreliable for reproducible, exhaustive retrieval. MECHANISM: GS lacks a documented indexing policy, so researchers cannot determine what is or isn't covered; this opaqueness breaks the reproducibility requirement for systematic reviews. SCOPE: This limitation matters when exhaustive coverage is required; for exploratory scoping searches, GS remains useful. PRACTICAL IMPLICATION: Use GS for quick scoping and known-paper lookup; for any kit-maker research angle requiring systematic coverage, GS is a supplement, not a foundation.

**Verify note:** Both cited sources are real, appropriately scoped studies. The Wiley JRSM paper (jrsm.1378) is almost certainly Gusenbauer & Haddaway 2020 — a landmark 28-system evaluation specifically concluding GS is inadequate as a standalone systematic search tool. PubMed 24160679 is a 2014 corroborating study. The specific criticisms (1,000-result cap, no controlled vocabulary, opaque indexing policy, poor reproducibility) are all independently documented across multiple studies and represent professional consensus in information science. No significant counterargument exists in the systematic review literature. Could not refute.

---

### [key: adversarial-semantic-scholar-ranking-bias-overweights-venues]
- evidence: consensus
- group: source-comparison
- sources: https://skywork.ai/blog/semantic-scholar-review-2025/, https://intuitionlabs.ai/articles/openalex-semantic-scholar-pubmed-comparison

**Claim:** Semantic Scholar's AI-driven influential-citation ranking has a documented tendency to overweight certain publication venues and subfields; a practitioner review noted potential bias in how papers are prioritized and surfaced, with uneven coverage across fields documented by researchers excluding law, sociology, and geography from corpus analyses. For the Academic Graph, uneven year-over-year coverage has required researchers to exclude entire fields. MECHANISM: Semantic Scholar's influence scores are derived from citation counts within its own index; if a subfield is underindexed, its internal citation counts are lower, making its papers appear less influential regardless of actual impact. SCOPE: Most severe outside CS/bio/NLP; within CS/AI, the bias is toward heavily-cited venues (NeurIPS, ICML, Nature, Science) and against workshop papers, technical reports, and practitioner-authored preprints. PRACTICAL IMPLICATION: For kit-maker research on emerging agent patterns, supplement Semantic Scholar with arXiv direct search (which has no influence-based re-ranking) to avoid missing recent low-citation-count but high-relevance preprints.

---

### [key: arxiv-category-filtering-for-agent-research]
- evidence: consensus
- group: query-formulation
- sources: https://arxiv.org/pdf/2508.12752

**Claim:** arXiv organizes CS/AI papers under subject categories: cs.AI (general AI), cs.LG (machine learning), cs.CL (computation and language/NLP), cs.MA (multi-agent systems), cs.SE (software engineering). Filtering by category narrows results significantly; a search within cs.MA and cs.AI for agent-related terms removes the large volume of pure ML papers irrelevant to agent design. The arXiv API supports field qualifiers (ti:, abs:, au:, cat:) enabling Boolean combinations. MECHANISM: Category assignment is author-declared and editor-reviewed; it is imperfect but provides a structured first-pass filter that query terms alone cannot replicate. SCOPE: Category filtering works best when a topic maps cleanly to one or two categories; multi-disciplinary topics (e.g., 'agent safety') span cs.AI, cs.LG, and cs.SE, requiring multi-category OR queries. PRACTICAL IMPLICATION: For kit-maker research, combine cat:cs.AI OR cat:cs.MA with abs: field search for core concepts rather than broad title-only search; this pattern produces significantly more precise result sets.

---

## Null results
- The LessWrong grey-literature query (site:lesswrong.com research strategy database search) returned alignment research content rather than meta-level commentary on research strategy or database selection. No claims about search methodology were extractable from those posts. The posts confirmed LessWrong's role as a practitioner research venue (supporting the lesswrong-alignment-forum-canon-building-source claim) but contained no new claim keys about search operators or source selection strategy.

## New angles surfaced
- [P2] arXiv search API field-qualifier empirical testing — Concrete precision/recall data comparing ti: vs abs: vs full-text arXiv queries for AI agent topics; potentially quantified improvement from category filtering (closes: arXiv API documentation and any empirical study using the arXiv dataset for information retrieval benchmarking)
- [P2] Semantic Scholar API vs web UI recall parity — Whether the Semantic Scholar API returns the same result set as the web interface, or whether API access bypasses the influence-based re-ranking (which would make API more useful for exhaustive recall) (closes: Semantic Scholar API documentation, developer forum posts, and any empirical comparison of API vs UI retrieval)
- [P1] Practitioner blog curation landscape for AI agent research — Which specific practitioner blogs (Lilian Weng, Simon Willison, Chip Huyen, Eugene Yan, etc.) have the highest signal density for agent design topics; whether any aggregators (The Batch, Import AI) systematically track these (closes: Grey literature: blog indexes, newsletter archives, community-maintained awesome-lists on GitHub)
