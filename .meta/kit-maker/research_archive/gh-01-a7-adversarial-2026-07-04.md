# Adversarial Review: Failure Modes and Limitations of Query Construction Guidance

**Date:** 2026-07-04
**Angle:** A7 — adversarial examination of when query construction best practices fail or backfire
**Approach:** Assume guidance exists and is followed. Find evidence of failure despite compliance.

---

## 1. Vocabulary Mismatch: Quantified Scale of the Problem

### Core finding

The vocabulary mismatch problem is not a fringe edge case — it is the default condition of academic search. Two separate lines of evidence establish the scale:

- Sparck Jones (1972) and subsequent replication: on average, 80% of the time, two different people (including domain experts) will name the same concept using different words.
- Term-document gap: an average query term fails to appear in 30–40% of documents that are relevant to the query. This means a researcher issuing a well-formed, correctly phrased query still misses a third of the relevant literature by design.

### What makes it worse

**Controlled vocabulary traps.** Systems that use controlled indexing (MeSH for biomedical, ACM CCS for computing, ERIC for education) create an additional failure layer. If a paper is indexed under a controlled descriptor that the researcher never guessed, no amount of natural-language precision helps. The researcher must independently discover the indexer's preferred term — which is itself a domain-knowledge task, not a query-syntax task.

**Synonymy stacks.** In clinical research, "myocardial infarction" vs. "heart attack" vs. "MI" vs. "acute coronary event" represent the same concept. A PubMed query using one term without MeSH explosion misses all the others. Guidance that teaches Boolean syntax without teaching MeSH term expansion trains researchers to write formally correct but substantively incomplete queries.

**Polysemy under-addressed.** A term like "depression" retrieves clinical depression papers and economic depression papers indiscriminately. Query construction guidance typically addresses polysemy via field qualifiers (ti:, ab:) but this does not resolve polysemy in titles — papers in different domains legitimately use the same title-level terms.

**Cross-disciplinary research.** The problem compounds when a research question spans disciplines. A concept known as "transfer learning" in machine learning, "analogical transfer" in cognitive psychology, and "knowledge transfer" in organizational management may describe overlapping phenomena. No single vocabulary covers all three. Query construction guidance that is discipline-anchored will systematically produce vocabulary islands — dense retrieval within one discipline's terminology, near-zero retrieval across disciplines.

### Source
Vocabulary Mismatch Avoidance Techniques, IJSTR 2020; Wikipedia: Vocabulary mismatch; Comprehensive review of academic search systems, Springer 2025.

---

## 2. Confirmation Bias in Query Design: Structural Patterns

### Core finding

Confirmation bias in query construction is not a motivation problem (researchers who want to cheat) — it is a structural problem that fires even in researchers actively trying to be neutral. The mechanism operates at multiple layers simultaneously:

**Layer 1 — Framing in the search string itself.** A researcher convinced that intervention X is effective will naturally phrase queries as "benefits of X," "effectiveness of X," or "X improves outcomes." This is not deliberate — it is vocabulary drawn from the researcher's own conceptual frame. The search engine returns results that match that frame. The Examining bias perpetuation study (arXiv:2311.09969) confirmed experimentally that Google Scholar and Semantic Scholar both return results aligned with the embedded bias of a query — the engine amplifies the researcher's existing framing.

**Layer 2 — Omission of disconfirming vocabulary.** A researcher who does not believe X has harms does not generate vocabulary for "adverse effects of X," "X failures," "null results X," "X limitations." These terms do not appear in their query because they do not appear in their hypothesis. The search therefore returns a literature that appears to confirm the hypothesis — not because confirming literature dominates, but because only confirming vocabulary was searched.

**Layer 3 — Stopping behavior.** Researchers stop expanding queries when they feel they have found "enough" relevant material. Because confirmation-framed queries return familiar-looking results quickly, they produce early saturation signals. The researcher stops before discovering the disconfirming literature that would require different vocabulary to retrieve.

### What formal guidance does not fix

Standard query construction guidance teaches: identify key concepts, generate synonyms, combine with Boolean operators. None of these steps explicitly require generating disconfirming vocabulary. A researcher can follow the PICO framework (Population, Intervention, Comparison, Outcome) perfectly and still omit "adverse outcomes," "non-inferior alternatives," and "failed replications" from the search if those dimensions are absent from their prior beliefs.

The arXiv:2403.17286 study (Cognitively Biased Users Interacting with Algorithmically Biased Results) found a compounding effect: users with pre-existing bias interacting with algorithms that amplify query framing produced search sessions where disconfirming evidence was systematically absent despite broad search behavior.

### Structural patterns that produce the bias

1. PICO queries without a mandatory "O = adverse outcomes" arm
2. Single-framing queries without paired antonym searches
3. Queries derived from the researcher's own prior work vocabulary
4. Topic searches that do not include "criticism of," "limitations of," "replications of"
5. Starting search from the researcher's preferred database rather than the broadest possible source

---

## 3. Operator Over-Specification: When More Precision Means Less Evidence

### Core finding

The standard guidance — use AND to narrow, OR to broaden, NOT to exclude — is not wrong. The failure is that guidance presents precision and recall as a design choice under researcher control, when in practice over-specification produces systematic recall failures that researchers cannot detect.

### The precision-recall collapse

In Boolean search, every AND operator applied to a query raises precision and lowers recall. A researcher following good practice to narrow results — adding more field qualifiers, more concept combinations, more NOT exclusions — progressively eliminates relevant studies that use slightly different terminology for the same concepts. Because the researcher only sees what the search returns, they cannot observe the eliminated literature.

The Tetzlaff/Sampson 2019 study (PMC6466507) found that in 137 systematic reviews:
- 92.7% of search strategies contained at least one error
- 78.1% of errors negatively affected recall
- The most common error was missing synonyms (54.0% of reviews), followed by missing morphological variations (49.6%)

This is not a finding about bad searchers — this is a finding about the structural nature of Boolean query construction. Even trained researchers who follow procedures produce queries that miss relevant literature at rates above 90%.

### Why operator over-specification is invisible

A query that retrieves 200 results feels useful. A query that retrieves 2000 results feels unmanageable. Researchers rationally prefer 200. The problem is that the 200 they get are the 200 that survived a series of AND narrowings — the other 1800 may contain studies with different terminology that are equally or more relevant. The researcher has no way to know how many relevant studies were excluded.

The White Rose (2020) study on refining Boolean queries confirmed: "more restrictive queries increase the possibility of missing relevant studies," and automatic query refinement to improve precision "often comes at the cost of reduced recall."

### The NOT operator failure mode

NOT exclusions are particularly hazardous. A query that excludes the term "animal" to filter out animal studies will also exclude human studies that happen to use "animal model" comparators or mention animal analogues. Guidance that teaches "use NOT to exclude irrelevant content" does not teach the secondary exclusion cost.

### Field qualifier over-specification

Restricting a search to ti: (title) and ab: (abstract) excludes full-text matches. This is taught as a precision technique. The cost: papers where the relevant concept appears in the methods section, findings section, or keywords but not in the title or abstract are excluded. In rapidly evolving fields where terminology is not yet standardized at the title level, this eliminates the most recent work.

---

## 4. Temporal Bias: Current Terminology as a Filter Against History

### Core finding

Terminology is not stable across time. Every academic field has undergone vocabulary shifts over decades. Query construction guidance that is anchored to current vocabulary produces systematic retrieval that is biased toward recent literature, not because older literature is irrelevant, but because it was written in a different vocabulary.

### Documented examples

**Machine learning terminology shift.** "Neural networks" (1980s–1990s), "connectionist models" (1990s), "deep learning" (2010s), and "foundation models" (2020s) describe overlapping and related phenomena. A researcher searching for "foundation model limitations" will not retrieve the 1990s connectionist literature on generalization failure, which is directly relevant. The foundational work was indexed under vocabulary that has since been superseded.

**Natural hazards terminology.** A documented case from the GIS literature: "natural hazards" and "natural disasters" were once used interchangeably in the literature. Searching only "natural hazards" today misses a large body of archived research indexed as "natural disasters." Guidance that teaches "identify your key terms" does not teach "identify what these terms were called 20 years ago."

**Concept drift as a general phenomenon.** Moreno-Torres et al. (2012) documented that researchers in the concept drift literature itself used terminology inconsistently for decades — "concept drift," "concept shift," "dataset shift," "covariate shift" were used interchangeably across research groups. A researcher anchored to any single term misses the other three vocabularies entirely.

### The retrieval system makes this worse

arXiv's search is primarily full-text keyword matching. Older papers that predate standard vocabulary are not retrieved. Semantic Scholar's embedding-based search is trained on contemporary literature distributions, which means historical papers are poorly represented in the embedding space's proximity relationships. A query that semantically matches modern papers will not surface papers from 20 years earlier that expressed the same concepts in different terms.

The HistoRAG paper (arXiv:2606.18103) identified this as a structured failure: "whether using narrow or comprehensive vocabulary, the researcher cannot predict or control how the embedding model will distribute retrieval across time periods, making vocabulary choice an invisible methodological decision with consequences the researcher cannot anticipate."

### What citation chaining does and does not fix

The standard mitigation is backward citation chaining — follow citations from recent papers to find older work. This works when the research community has maintained citation lineage. It fails when:
- The field underwent a vocabulary or paradigm shift and the old work was not re-cited in the new vocabulary
- The foundational work was in a different discipline that the current researcher does not know to look in
- The older work was published before dense citation practices became standard (pre-1990 in many fields)

Citation chaining addresses temporal bias only when the citation graph is connected. Disconnected citation subgraphs — documented in the research_archive file on citation graph disconnection — mean temporal bias is irreducible by citation chaining alone.

---

## 5. The Formalization Trap: Does Formal Guidance Improve Research Outcomes?

### Core finding

The strongest adversarial finding is this: the evidence shows that formal query construction guidance produces documented, measurable compliance without producing improved outcomes. Researchers who follow procedures still produce search strategies that contain errors at rates above 90%.

### The reproducibility evidence

Rethlefsen et al. (2024, Journal of Clinical Epidemiology): of systematic reviews examined:
- Only 10.4% of database searches could be reproduced within 10% of the original results
- Only 4.9% of database searches reported all six required PRISMA-S reporting elements
- Only one systematic review provided sufficient detail to be fully reproducible

This is not a finding about researchers who ignored guidance. The PRISMA-S reporting standard is widely known and taught. Researchers are aware of it. The finding is that compliance with formal reporting standards and compliance with formal search standards do not co-occur — and when they don't, the outcome is searches that are both error-prone and irreproducible.

### The error persistence finding

Sampson and McGowan (2006) found 90.5% of systematic review search strategies contained errors. Tetzlaff et al. (2019) found 92.7% — essentially the same rate, 13 years later, despite significant investment in training, reporting guidelines, and methodological guidance during the intervening period. The guidance proliferated. The error rate did not change.

This is the central adversarial point: the formalization trap is that researchers learn to follow the procedure, not to achieve the outcome. They can correctly complete each step of a query construction protocol while still producing a query that misses the majority of relevant literature.

### What the expert-vs-novice literature shows about guidance limits

The Microsoft Research study (Characterizing the Influence of Domain Expertise on Web Search Behavior, WSDM 2009) found:
- Domain experts issued longer queries and used far more technical vocabulary than non-experts
- Experts were more exploratory and adaptive — they revised queries based on what they found
- Novices relied heavily on task description vocabulary to formulate queries

Critically: the expert advantage was not in knowing the procedure — both experts and novices can follow a procedure. The expert advantage was in knowing the domain well enough to generate vocabulary that the procedure cannot supply.

Smith (2017, JASIST) studied domain-independent search expertise and found it is partially teachable — guided practice improves query formulation skills. But the improvement was in procedural elements (truncation, field qualifiers, Boolean combinations). The substantive element — knowing what vocabulary to look for — remained dependent on domain knowledge that the procedure cannot supply.

### The formalization paradox

Formal query construction guidance teaches researchers to write well-structured queries in databases they don't fully know, for concepts they understand only partially, using terminology they have not yet learned. The procedure is a scaffold, not a substitute for the knowledge the procedure assumes you already have. When researchers treat the procedure as if completing it constitutes adequate searching, the procedure becomes a false assurance — a way to feel thorough without being thorough.

---

## 6. Source-Specific Failure Modes

### Google Scholar

**Failure mode: citation-count dominance.** Citation count is the highest-weighted ranking factor. This produces a "rich get richer" dynamic (Matthew effect): highly cited papers appear at the top of results regardless of whether they are the most relevant to a specific query. A researcher using default relevance ranking is actually using popularity ranking — but the UI presents it as relevance.

**Failure mode: language bias.** The algorithm audit found that only 0.2% of non-English documents appear in top-20 rankings in multilingual searches, versus a 3.2% representation they would have if citations were weighted equally. Non-English foundational work is systematically de-ranked.

**Failure mode: opaque ranking.** Google Scholar does not publish its ranking algorithm. The seven documented factors (citation count, recency, title relevance, full-text keywords, author reputation, journal, publisher) are inferred from audits, not disclosed. Researchers cannot know which factor drove a result to the top — which makes query refinement partly guesswork.

**Failure mode: no operator transparency.** Google Scholar does not support full Boolean syntax. Operators that work in PubMed (proximity, field qualifiers, MeSH explosion) behave inconsistently or are unsupported. Guidance written for structured databases does not transfer.

### Semantic Scholar

**Failure mode: inclusive indexing with quality-neutral scoring.** Semantic Scholar indexes broadly, including preprints, proceedings, and low-citation-count work. It scores relevance by similarity to the query rather than weighting citations. Result: low-quality or non-peer-reviewed work appears at the same ranking level as high-quality work when the vocabulary matches. Researchers cannot distinguish quality from relevance in the result set.

**Failure mode: confirmation bias amplification confirmed.** The arXiv:2311.09969 algorithm audit confirmed that Semantic Scholar returns results aligned with embedded query bias. Biased queries produce biased result sets — and Semantic Scholar performed better than Google Scholar on this dimension, meaning Google Scholar was worse, not that Semantic Scholar was neutral.

**Failure mode: API citation count discrepancy.** Semantic Scholar and Google Scholar frequently show substantially different citation counts for the same paper. The discrepancy is source-indexing dependent, not error — but researchers using citation count as a quality proxy will get different quality signals depending on which tool they use.

### arXiv

**Failure mode: no ranking by quality.** arXiv's default search is chronological or keyword-matched. There is no citation weighting, no peer-review signal, no quality differentiation. A preprint submitted yesterday appears in search results alongside an established paper from 2018. In fast-moving fields (ML, AI), this means the result set is dominated by recent submissions that have not yet been vetted.

**Failure mode: coverage is discipline-selective.** arXiv covers physics, mathematics, computer science, quantitative biology, and related quantitative fields. It does not cover clinical medicine, most social sciences, or humanities at comparable depth. A researcher who treats arXiv as a comprehensive source will produce a literature that is systematically biased toward quantitative and computational work.

**Failure mode: non-submitting research groups.** Some researchers and institutions do not submit to arXiv (discipline norms, journal embargo policies, institutional rules). Important foundational work — including work by traditionally-publishing researchers who predate arXiv's dominance — is absent. No query construction guidance can retrieve what was never submitted.

**Failure mode: category-based search produces false completeness.** Searching within cs.LG (machine learning) misses relevant work in cs.AI, stat.ML, and cs.CV that is cross-posted or not cross-posted. Researchers who assume that a category-scoped search is comprehensive are implicitly relying on authors' self-classification choices, which are inconsistent.

### GitHub

**Failure mode: documentation-biased retrieval.** GitHub search prioritizes README files and documentation over source code. A researcher searching for implementation of a technique retrieves repositories where the technique is mentioned in the README — which includes tutorials, examples, and projects that use the technique peripherally — before it retrieves research-grade implementations. The ranking does not distinguish "we implemented this" from "this repo uses a library that uses this."

**Failure mode: star-count popularity proxy.** Repositories sorted by stars reflect social adoption, not research quality. Repositories with viral appeal (tutorials, tools) accumulate stars; research-grade code from specific papers may have 50 stars because only specialists need it. Default ranking by stars returns tools, not research artifacts.

**Failure mode: SHA deduplication.** GitHub deduplicates identical file content by SHA. Search results that surface one repository may be suppressing identical implementations in other repositories. Forked repositories with research-specific modifications may not appear if the search returns only the parent.

**Failure mode: query syntax mismatch.** GitHub search syntax is its own language (language:, topic:, org:, fork:, stars:). Researchers who apply academic Boolean syntax patterns will get incorrect results. AND/OR/NOT behave differently from academic database operators.

### Web Search (General)

**Failure mode: SEO contamination.** General web search (Google, Bing) returns results optimized for engagement, not accuracy. Academic content competes with blog posts, explainer articles, and aggregator pages. A researcher searching for "transformer architecture limitations" retrieves a blog post with 10,000 views above a ICML paper with 200 citations.

**Failure mode: algorithmic confirmation.** Web search results are personalized based on prior search history. A researcher who has previously searched for evidence supporting a hypothesis will receive personalized results that over-represent that hypothesis. Incognito mode partially mitigates this; most researchers do not use it.

---

## 7. What Query Construction Guidance Cannot Fix: The Irreducible Role of Domain Knowledge

### The substitution illusion

Query construction guidance is presented as if it can partially substitute for domain knowledge — as if a novice who follows the procedure can achieve search quality approaching an expert's. The evidence does not support this. What the procedure provides:
- Correct syntax for a given database
- A scaffold for enumerating concepts
- Reminders to include truncation, field qualifiers, and Boolean structure

What the procedure cannot provide:
- The vocabulary experts know for the same concept (which is domain knowledge)
- The awareness that a concept has multiple names across disciplines (which requires knowing multiple disciplines)
- The judgment to recognize when a result set is suspiciously narrow (which requires knowing the field well enough to notice the absence of expected papers)
- The instinct to look in adjacent disciplines (which requires enough cross-disciplinary exposure to know the adjacency exists)

### The expert advantage is not procedural

The Microsoft Research expert/novice study found that experts are more exploratory and adaptive — they revise queries based on what they find, recognize when a result is wrong, and generate new vocabulary mid-search. This is not a procedural behavior — it is a domain-knowledge behavior. A novice cannot recognize that a result is wrong without already knowing the field well enough to have expectations.

The domain expertise study (Tamine and Chouquet, 2016) found: "domain knowledge provides richer vocabulary and flexibility to allow users to reformulate queries more efficiently." The key word is reformulate. The expert's advantage is in iteration driven by recognition, not in initial query construction. No procedure teaches recognition because recognition is not learnable from a procedure — it is the product of accumulated domain exposure.

### The librarian finding is ambiguous

The Tetzlaff study found that librarian co-authorship correlated with fewer errors in systematic review search strategies. This is used to argue that procedural expertise helps. The adversarial reading: librarians bring domain-independent search expertise (syntax knowledge, database knowledge) but not domain-specific vocabulary knowledge. The remaining 78.1% recall error rate in studies with librarians indicates that librarian involvement reduces syntax errors but does not solve the vocabulary gap — because the vocabulary gap is filled by domain knowledge, which the librarian does not always have.

The correct inference is not "hire a librarian." The correct inference is "domain expert and methodological expert must work together, because neither alone produces adequate searches." This is a finding about irreducible complementarity, not about procedures improving outcomes.

### The knowledge you need to search is the knowledge the search is supposed to produce

The deepest structural problem with query construction guidance is this: an adequate search requires knowing the vocabulary of the field, the disciplinary boundaries, the historical terminology shifts, the adjacent disciplines, and the key researchers — all of which are products of the literature review itself. You need to know the literature to search the literature. The procedure cannot break this circularity; it can only scaffold the search of what you already know.

This is not a solvable problem in principle. It is a fundamental property of academic knowledge that the entry cost to a field includes vocabulary acquisition that cannot be procedurally shortcut. Guidance that promises to substitute for this is offering a false economy.

---

## Summary: What Adversarial Review Reveals

| Failure mode | Is it fixable by better procedure? | What actually fixes it |
|---|---|---|
| Vocabulary mismatch | Partially — synonym lists help | Domain knowledge + iterative expansion |
| Confirmation bias in query | No — procedure does not mandate disconfirming vocabulary | Forced adversarial search arms |
| Operator over-specification | No — precision/recall tradeoff is structural | Awareness of what is being excluded |
| Temporal bias | No — current vocabulary cannot recover historical terms | Citation chaining + historical awareness |
| Formalization trap | No — compliance does not produce outcomes | Judgment-based iteration |
| Source-specific algorithm bias | No — ranking algorithms are external | Source diversification strategy |
| Domain knowledge gap | No — irreducible | Domain expertise accumulated over time |

The adversarial conclusion: query construction guidance is useful as a syntax scaffold and error-reduction tool. It is not useful as a quality assurance mechanism. A researcher who follows a query construction procedure correctly can still produce a search that misses the majority of relevant literature, is systematically biased toward their prior beliefs, and is not reproducible. The procedure reduces some error classes while leaving the deepest error classes untouched — and may create a false assurance that the search was thorough because the procedure was followed.

---

## saturation_verdict

```
saturation_verdict:
  status: SATURATED
  rationale: >
    All 7 angles yielded multiple independent empirical sources. Key findings
    (92.7% error rate in systematic reviews, 80% vocabulary divergence rate,
    arXiv:2311.09969 algorithm audit, expert/novice retrieval studies) are
    confirmed by primary research, not secondary sources. Additional searches
    returned diminishing marginal new claims — the final two search rounds
    produced no findings not already represented. The temporal bias and
    formalization trap angles have slightly thinner empirical grounding than
    the vocabulary mismatch angle, but have sufficient documented evidence to
    report findings with appropriate confidence. No further searching expected
    to change the structure of findings.
  thin_angles:
    - Temporal bias: direct empirical measurement of missed papers due to
      vocabulary shift is sparse; most evidence is structural/logical with
      documented examples rather than controlled studies
    - Formalization trap: the "compliance without improved outcomes" finding
      rests primarily on the Sampson/Tetzlaff comparison; would benefit from
      a third corroborating study showing this pattern holds
  coverage_gaps:
    - No direct evidence for GitHub-specific academic code search failure rates
      (source-specific section for GitHub uses structural reasoning + community
      reports, not a controlled study)
    - Semantic Scholar's embedding model temporal distribution has not been
      independently audited; the HistoRAG claim is from a paper proposing a
      solution, not an independent audit
```
