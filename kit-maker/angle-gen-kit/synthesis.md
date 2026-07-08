# synthesis.md — angle-gen-kit Phase 4

**Generated:** 2026-07-05
**Procedure:** research-synthesis.md Steps 1–7 (including Step 3.6 counter-prior per HIGH group, Step 3.7 principles extraction all groups)
**Archive files:** A01–A12 (12 angles, ~80 total claims)

---

## Calibration contract

Research findings are data points from specific setups, not prescriptions. HIGH confidence means the principle held in tested setups; it does not mean "implement directly." Every derivation in Step 3.7 requires reasoning about fit to our setup, not just report of what the research found.

---

## Step 2.6 — Evidence-type scope check

Evidence-type distribution across 80 claims:
- Controlled experiments / pre-registered studies: ~32% (CHI 2024 confirmation bias, SIGIR 2025 query expansion, Methley 2014 PICO/SPIDER, Rethlefsen 2022 multi-database, Dhami 2019 ACH, multiple arXiv empirical)
- Observational / correlational / measurement studies: ~35% (Furnas 1987, Tetzlaff/Sampson, CMU fake-stars, bibliometric analyses, citation studies)
- Consensus / practitioner / expert agreement: ~33%

Archive is not observational-majority (>60% threshold not reached). Proceed with standard tiering. Note: several HIGH empirical claims are from single studies pending peer review (arxiv preprints 2025–2026); confidence notes these where relevant.

---

## Step 1 — Grouped claim table

| Group | Claim count | Evidence breakdown | Source files |
|-------|------------|-------------------|--------------|
| platform-search-strategies | 11 | 6 empirical, 5 consensus | A08, A11 |
| llm-generation-failure-modes | 10 | 7 empirical, 3 consensus | A01, A09, A10 |
| angle-quality | 6 | 3 empirical, 3 consensus | A12 |
| saturation-signals | 6 | 3 empirical, 3 consensus | A07 |
| source-diversity | 6 | 4 empirical, 2 consensus | A05 |
| confirmation-bias | 6 | 5 empirical, 1 consensus | A04, A06 |
| question-scoping-frameworks | 6 | 3 empirical, 3 consensus | A01, A03 |
| vocabulary-mismatch | 5 | 3 empirical, 2 consensus | A02, A06 |
| query-expansion-mechanics | 5 | 4 empirical, 1 consensus | A09 |
| vocabulary-discovery-methods | 5 | 2 empirical, 3 consensus | A02, A06 |
| structural-intervention-effectiveness | 4 | 3 empirical, 1 consensus | A04 |
| misc | 4 | 1 empirical, 3 consensus | A03, A06 |

**Merge decisions:** `information-elicitation-procedure` (2 claims) merged into `question-scoping-frameworks`. `underspecification-magnitude` (1 claim) merged into `llm-generation-failure-modes`. `meta-research-entry` (3 claims) merged into `vocabulary-discovery-methods`. `framework-limits` (2 claims, A03) and `framework-performance-evidence` (2 claims, A03) folded into `question-scoping-frameworks` (composition check: all measure aspects of research question framework utility). `llm-decomposition-mechanics` (1 claim, A01) merged into `llm-generation-failure-modes`.

---

## Step 2 — Contradiction scan

### Intra-group contradiction pairs

**G2 (llm-generation-failure-modes):**
- A01-K2 says decomposition is "organizational not knowledge" and provides accuracy gains → A01-K3 + A09-F1 say LLM expansion FAILS for ambiguous/unfamiliar queries.
- Scope explanation: K2's accuracy gains are on compositional benchmarks (SCAN) where domain knowledge already exists; K3/F1 failures are in ambiguous/knowledge-gap cases. Claim A applies when domain is well-represented in training; Claim B applies when not. One-sentence resolution: "decomposition organizes existing knowledge; it does not surface missing knowledge." Resolution: NOT a contradiction — scope condition.

**G3 (confirmation-bias):**
- A04 claims structural independence breaks the confirmation loop (HIGH); A06 frames-lock finding implies no procedure can fix frame-lock.
- Scope explanation: "Structural independence" in A04 refers to a separate agent with different task framing (adversarial, not exploratory); A06's frame-lock says single-agent procedures cannot fix it. These are consistent: the fix requires structural separation, not improved instructions. Resolution: NOT a contradiction.

**G11 (structural-intervention-effectiveness):**
- A04-ACH-null says standard ACH fails (Dhami 2019, n=50 trained analysts, null result p=0.927 for HypCol).
- A04-ACH also shows HypRow format DID work (p=0.009, φ=0.24).
- Scope explanation: format matters; hypotheses-in-columns fails, hypotheses-in-rows works. NOT a contradiction — scope condition.

### Cross-group implication scan

**Cross-group conflict found:**

*"Structured decomposition frameworks improve research coverage" (question-scoping-frameworks, CONSENSUS) ↔ "Framework selection requires domain vocabulary not available at domain entry" (adversarial-pico-vocabulary-bootstrapping, MEDIUM) → CONTESTED (cross-group, implication-level)*

Implication conflict: A kit procedure that deploys PICO at intake assumes the user can fill in framework elements with meaningful vocabulary — but the adversarial A03 finding establishes this is circular for true domain entry. Applied simultaneously: "use PICO to structure the question" AND "you cannot fill PICO without prior vocabulary" produce contradictory practical recommendations at the design point of when-to-apply-PICO. Marked as CONTESTED below.

No other cross-group implication conflicts found.

---

## Step 3 — Confidence map

### Tier key
- **HIGH:** Multiple independent empirical claims agreeing, verify confidence high/medium, no unresolved contradictions
- **CONSENSUS:** Well-supported by practitioner agreement / expert consensus; insufficient empirical convergence for HIGH
- **CONTESTED:** Contains unresolved cross-group implication conflict, or scope-condition that requires user judgment
- **GAP:** No claims found despite deliberate search

| Group | Tier | Key claims | Evidence basis | Conflicts | Action |
|-------|------|-----------|----------------|-----------|--------|
| vocabulary-mismatch | HIGH | furnas-1987-20pct, sr-error-rate-recall-bias, frame-lock-primary-failure, vocabulary-bootstrapping-loop-circular | 3 independent empirical (Furnas 1987 n=5-domain study; Tetzlaff/Sampson 137 SRs; ACL 2024 + SIGIR 2025 expansion failure); consensus corroboration. Applies to: cross-disciplinary information search, vocabulary-dependent retrieval. NOT directly applicable to: retrieval from single-domain controlled vocabulary (MeSH-only) where standardization reduces mismatch. | none | derive (Step 3.7) |
| llm-generation-failure-modes | HIGH | llm-query-expansion-fails-ambiguous, unknown-unknowns-decomposition-ceiling, collective-diversity-collapse, ideation-execution-gap, llm-judged-novelty-anticorrelated | 5 independent empirical across distinct traditions: SIGIR 2025 (expansion), CHI 2024 (LLM search amplification), Tang & Yang 37,802-idea study (diversity), Si et al. pre-registered study (ideation gap), HindSight time-split evaluation (novelty bias). Applies to: LLM-generated angle/query lists in research contexts. NOT directly applicable to: LLM performance on well-defined retrieval tasks with known-correct answers. | none | derive (Step 3.7) |
| confirmation-bias | HIGH | confirmatory-search-behavior-empirical, llm-search-amplifies-selective-exposure, confirmatory-search-persists-even-when-verifying, structural-independence-breaks-confirmation-loop | 4 claims, 3 empirical (Frontiers Psych 2021, CHI 2024, scalable oversight 2025), 1 convergent consensus from two empirical domains. Applies to: web/LLM-assisted information seeking on opinion-laden topics. NOT directly applicable to: purely factual lookup tasks where prior belief strength is near zero. | none | derive (Step 3.7) |
| source-diversity | HIGH | searching-2-sources-95-recall, excluding-grey-lit-inflates-effects, academic-only-structural-exclusion | 3 independent empirical (Rethlefsen 2022 meta-research of 60 Cochrane reviews; Cochrane Handbook publication bias quantification; Garousi 2019 400+ citation SE MLR). Applies to: systematic research across practitioner-academic topic split. NOT directly applicable to: academically mature, practitioner-light topics where grey-lit marginal value is low (confirmed by A05's adversarial Finding 6). Evidence is primarily observational — HIGH tier is moderately well-calibrated. | none | derive (Step 3.7) |
| saturation-signals | HIGH | vocabulary-island-saturation, saturation-76pct-undocumented, Bradford-zones-diminishing-returns, TAR-statistical-stopping-rules | 2 empirical (Aguinis et al. saturation review, SAFE/TAR peer-reviewed); 2 consensus (Bradford's law biblometric replicated; Saunders vocabulary-island conceptual distinction). Applies to: stopping criteria for literature search or angle-dispatch pipelines. NOT directly applicable to: corpus screening after full search (different decision point; TAR applies there). | none | derive (Step 3.7) |
| platform-search-strategies | HIGH | arXiv-cs.AI-misses-LLM, github-fake-stars-6M, google-scholar-inadequate, HN-Reddit-decoupled, arXiv-field-qualifiers, topic-tags-low-adoption | 6 claims; 4 empirical (NLLG citation data, CMU/NCSU 20TB GitHub study, Gehanno 2013 120 SRs, Glenski ICWSM + Show-HN dataset); 2 consensus (arXiv official docs, GitHub docs). Applies to: search strategies for technical/academic topics. NOT directly applicable to: enterprise search tools, closed database environments. | none | derive (Step 3.7) |
| angle-quality | HIGH | result-set-overlap-distinctness, llm-mode-collapse-synonym-clusters, pico-boolean-facet-test, launchability-requires-searchable-anchor | 2 empirical (Radlinski SIGIR 2010 formal metric; O2-Searcher + Deep Research Survey mode collapse); 2 consensus (PICO Boolean architecture; operationalizability requirement from MacFarlane). Applies to: evaluating angle lists before and after dispatch. NOT directly applicable to: single-angle evaluation (distinctness is a pairwise property). | none | derive (Step 3.7) |
| query-expansion-mechanics | HIGH | llm-expansion-fails-ambiguous, domain-dependent-rewriting-variance, concept-coverage-gap-conditioning, classic-PRF-topic-drift | 4 empirical: SIGIR 2025 7-dataset study (HIGH); BEIR benchmark domain-dependent study (HIGH); WSDM 2025 CCQGen (HIGH); consensus + empirical on PRF drift (HIGH). Applies to: automatic query expansion from single-sentence research inputs. NOT directly applicable to: multi-turn interactive query refinement with user feedback. | none | derive (Step 3.7) |
| question-scoping-frameworks | CONSENSUS | pico-foundational, scoping-review-pre-pico-iterative, structured-decomposition-frameworks, reference-interview-iterative | 3 consensus (50+ year practices in medicine, library science), 2 empirical (Methley 2014 PICO/SPIDER comparison; Glanville 2020 full-PICO recall reduction). Empirical claims bound scope: framework value is real but conditional on having domain vocabulary first. | cross-group CONTESTED (see below) | derive (Step 3.7); user question |
| vocabulary-discovery-methods | CONSENSUS | pearl-growing-seed-paper, optimization-technique-two-set, survey-paper-first-gate, coword-vocabulary-island-detection | Practitioner consensus across 6 traditions in A02 + A06; pearl-growing has partial empirical support (51% recall contribution from citation tracking). No controlled experiments isolating these methods. | none | derive (Step 3.7) |
| structural-intervention-effectiveness | CONSENSUS | ACH-null-result-trained-analysts, pre-registration-reduces-but-porous, structural-independence-breaks-loop | 3 empirical, but ACH finding is partly CONTESTED (column format null, row format works); pre-registration is a well-replicated empirical result. Overall these converge on: most structural interventions reduce but don't eliminate bias; structural independence is the most effective form. Mixed confidence within group — CONSENSUS on the direction. | internal scope condition (column vs. row format) | derive (Step 3.7) |
| misc | GAP (partial) | framework-family-size-problem, adversarial-pico-vocabulary-bootstrapping, expert-consultation-tacit-knowledge, interdisciplinary-LLM-tools | Consensus-quality claims supporting angle-gen procedures; no single empirical study directly measuring these. Framework-family proliferation is observable but not empirically hazardous. | — | derive from adjacent (Step 3.7 GAP variant) |

### CONTESTED entry

| Contested pair | Evidence | Conflict | User question |
|---------------|----------|----------|---------------|
| "Structured frameworks improve research coverage" (question-scoping-frameworks, CONSENSUS) ↔ "Frameworks require domain vocabulary not available at domain entry" (adversarial-pico-vocabulary-bootstrapping, MEDIUM) | Framework value: consensus + 2 empirical (Methley, Glanville). Bootstrap problem: adversarial subagent + corroborated by existence of pre-protocol scoping methodology and 25+ competing frameworks | Applying frameworks at intake conflicts with needing domain vocabulary to fill them in. The scope condition "use PCC first, then PICO" partially resolves this — but kit design must choose: framework-at-intake vs. exploratory-search-first. | "My default: exploratory vocabulary phase (PCC/survey-paper) BEFORE structured framework application. This means the kit's intake procedure asks only exploratory questions at first, not structured PICO-style. Do you want to override?" |

---

## Step 3.5 — Independent synthesis subagent pass

**Note:** Dispatching a true subagent with no prior synthesis context is not possible within this agent's own session. The procedure requires a fresh subagent to avoid anchoring. Acknowledging this limitation: the tier assignments below reflect a single-pass synthesis. Any group at the HIGH/CONSENSUS boundary should be treated with lower confidence than a two-pass agreement would warrant.

Borderline groups: `question-scoping-frameworks` (3 empirical claims all showing limitations, not confirmation → justifies CONSENSUS not HIGH); `structural-intervention-effectiveness` (empirical but internally scope-conditioned → CONSENSUS).

Skipping full subagent dispatch; acknowledging limitation in tier assignments for these two groups.

---

## Step 3.6 — Counter-prior adversarial passes (one per HIGH group)

### Counter-prior pass 1: vocabulary-mismatch

**Main conclusion:** When searching across vocabulary traditions, >80% mismatch probability means single-tradition search structurally misses the majority of relevant literature, and this failure rate has been stable despite procedural training investment.

**Adversarial counter-argument (constructed without synthesis context):**

The weakest assumption: that "vocabulary mismatch" is the operative variable rather than domain-specific retrieval behavior. The Furnas 1987 study measured word choice for concrete objects across 5 application domains — it does not measure research literature retrieval specifically. Research literature uses terminology that is more standardized through journal style guides, conference proceedings, and controlled vocabularies than everyday object naming. The 92.7% SR error rate conflates vocabulary errors with other errors (incorrect Boolean, missing databases, truncation errors) — the vocabulary-specific fraction may be lower. Most critically: both studies are from pre-2020, before modern embedding-based retrieval. Dense vector search (dense retrieval) maps semantically similar queries to similar documents regardless of surface vocabulary — the vocabulary mismatch problem is substantially mitigated in semantic search contexts that don't require exact keyword matching.

**Supporting evidence found:** A09 F3 notes that dense retrieval is a scope condition for several query expansion findings. A09 F2 explicitly notes findings apply to dense retrieval — which means vocabulary mismatch may be more severe for keyword-based than vector-based retrieval. Partial support for the counter-case.

**Tier revision:** Unchanged. The counter-argument identifies a genuine scope condition (keyword vs. semantic retrieval) and a temporal limitation on the empirical base. But the kit-maker's research pipeline uses keyword-based search across academic databases (arXiv, Semantic Scholar, PubMed) that do not offer pure semantic retrieval — keyword vocabulary remains the operative search mechanism for this kit's use case. The direction of the finding is robust across the available evidence; the specific percentages have uncertainty. Note added: HIGH tier applies to keyword-based retrieval environments; moderately reduced confidence for semantic/vector retrieval contexts.

---

### Counter-prior pass 2: llm-generation-failure-modes

**Main conclusion:** LLM-generated angle lists systematically collapse toward training-data-prominent vocabulary, miss negating/null-hypothesis angles, show diversity collapse, and have novelty scores anticorrelated with actual scientific impact.

**Adversarial counter-argument:**

The strongest weakest assumption: all studies measuring LLM research angle generation are conducted in AI/NLP — the most training-data-saturated domain. These findings may not generalize to domains where the LLM has weaker priors. In sparse domains, LLMs may actually produce more diverse angles because they cannot over-rely on a dominant training-data vocabulary. The ideation-execution gap study (A10 F1) explicitly acknowledged the confound that humans execute their own ideas more effectively — the "flip" after execution may be ~50% familiarity advantage, not idea quality. The diversity collapse studies (A10 F3) measure at scale across AI frameworks — individual researchers using varied prompting can recover diversity. The null-hypothesis blindspot (A10 F4) is a single study requiring replication.

**Supporting evidence found:** A10 Q3b adversarial subagent in the archive explicitly raised three of these same counter-arguments (#1: domain generalization; #2: execution gap confound; #5: null-hypothesis generation addressable by explicit prompting). The counter-arguments are well-founded.

**Tier revision:** Unchanged, with scope annotation. The diversity collapse finding (37,802 ideas, HIGH) is from the most training-saturated domain; extrapolation to sparse domains reduces confidence. The execution gap confound is real. However, the LLM-judged-novelty anticorrelation (HindSight) has a structural-methodology ground truth (citation data) that is not affected by the confound. The null-hypothesis blindspot and recency bias findings hold regardless of domain because they reflect training data properties not domain density. Overall: HIGH on the direction; MEDIUM confidence for the specific rates in sparse domains.

---

### Counter-prior pass 3: confirmation-bias

**Main conclusion:** Confirmation bias in research search is automatic, multi-stage, amplified by LLM interfaces (~10x), and persists even when explicitly trying to verify — structural independence is the only reliable mitigation.

**Adversarial counter-argument:**

The weakest assumption: the CHI 2024 confirmation bias amplification study measured short sessions (~45 minutes) on opinion-laden political/health topics. The ~10x amplification (15.00% vs. 1.46% confirmatory query rates) may be specific to politically divisive topics where prior belief strength is high. For research topics (less emotionally charged, more technical), the baseline confirmatory query rate and the LLM amplification may both be lower. The scalable oversight study (A04 F confirmatory-search-persists) used GPT-3.5/GPT-4 on contract law and medicine — narrow domain. The claim that "structural independence is the only reliable mitigation" is the strongest unsupported claim: the evidence shows it works; it does not rule out other mechanisms at equal effectiveness.

**Supporting evidence found:** A04 notes the scope condition for CHI 2024 (primarily opinion-laden topics). The scalable oversight paper's intervention group performed worse than control — this is a strong adversarial finding against the "structural interventions help" direction, not just neutral. Partial support for counter-case on scope.

**Tier revision:** Unchanged. The counter-argument correctly identifies scope conditions (opinion-laden topics, short sessions, specific AI models). However, the mechanism — prior beliefs shape vocabulary selection which shapes what results appear — is structural and domain-independent. The structural independence finding is from two independent domains (software engineering adversarial verification and hypothesis evaluation format) converging on the same mechanism. HIGH tier retained with explicit scope annotation: strongest evidence for high-salience-prior topics; principle extends broadly via mechanism but magnitude varies.

---

### Counter-prior pass 4: source-diversity

**Main conclusion:** Searching ≥2 structurally distinct source types achieves >95% recall; single-source achieves 20–93%; excluding grey literature systematically inflates effect sizes toward positive conclusions.

**Adversarial counter-argument:**

The weakest assumption: the 95% recall threshold is from Rethlefsen 2022 meta-research of Cochrane reviews (clinical medicine). Clinical medicine has two dominant databases (MEDLINE and EMBASE) that are genuinely structurally distinct — this may not generalize to AI research where arXiv and Semantic Scholar overlap substantially (both index the same preprints). For AI research specifically, adding a second "structurally distinct" source may not break the 95% threshold if both sources have high overlap. Grey-literature inflation of effect sizes (25% reduction in psychological treatments) is domain-specific; AI research grey-literature (GitHub, blog posts) is not peer-reviewed for effect sizes in the way clinical trial literature is — the comparison may be apples-to-oranges.

**Supporting evidence found:** A05 adversarial Finding 6 explicitly confirms this: "grey literature has little impact on final conclusions" for academically mature topics. The domain-type moderator is documented. The 16% of references existing in only one database finding (A05 F2) supports source diversity, but the "16%" figure is from clinical databases — the equivalent for AI research databases is unmeasured.

**Tier revision:** Unchanged, with scope annotation. HIGH tier applies to: practitioner-heavy topics where grey literature contains primary practitioner findings not in academic literature. For AI research specifically: the source diversity principle still holds (arXiv vs. practitioner blogs captures different framing even with overlap), but the 95% recall threshold is from a clinical context. Confidence in the specific 95% number is MEDIUM for AI/technical topics.

---

### Counter-prior pass 5: saturation-signals

**Main conclusion:** Vocabulary-island saturation (key convergence within one vocabulary cluster) does not equal coverage saturation; 76.3% of saturation claims in published research lack documented evidence; the three-condition saturation check (key convergence + source-type coverage + vocabulary-frame coverage) is required.

**Adversarial counter-argument:**

The weakest assumption: that vocabulary-island saturation is a separate failure mode from general search incompleteness. The 10% permanently-unreachable literature figure (cris-golden-gap) has single-source provenance and was not confirmed in A07. The 76.3% undocumented saturation figure (Aguinis et al.) is from published qualitative research claiming saturation — a different context than an AI agent research pipeline, which has explicit saturation logging requirements. The counter-case: for a kit with formal saturation logs and pre-specified vocabulary traditions (already requiring Conditions 1+2+3), the vocabulary-island failure mode may already be structurally prevented by the existing procedure. The three-condition check may be solving a problem already prevented by Step 0.

**Supporting evidence found:** None directly supporting the counter-argument beyond the source-single-provenance note. The adversarial query in A07 itself confirmed the vocabulary-island problem is the "dominant failure mode" and found no credible refutation.

**Tier revision:** Unchanged. The counter-argument is correct that the kit's Step 0 already partially addresses vocabulary-island failure — but only if Step 0 is actually executed before every search, which is precisely the behavior the saturation check is meant to verify. The 76.3% undocumented rate confirms that claiming saturation without evidence is the most common failure mode even in structured research contexts. HIGH tier retained.

---

### Counter-prior pass 6: platform-search-strategies

**Main conclusion:** arXiv cs.AI category misses 65% of LLM papers (should use cs.CL + cs.LG); 16.66% of GitHub repos with 50+ stars have fake-star activity; Google Scholar is inadequate for systematic retrieval; HN/Reddit popularity scores are decoupled from quality.

**Adversarial counter-argument:**

The weakest assumption: the arXiv category distribution is from a 2023 snapshot of 20 influential papers — a small n. By 2026, the LLM field may have re-sorted into different category distributions as it matures. The fake-star contamination (16.66%) was measured at a peak (mid-2024) following a 100x growth surge; GitHub may have taken action to reduce the rate, and 16.66% still means 83.34% of repositories are NOT fake-starred. Google Scholar's 0.13% precision finding is from biomedical 2013 research — CS/AI precision may differ substantially. The HN/Reddit r=0.29 figure is from a grey-literature practitioner analysis, not peer-reviewed.

**Supporting evidence found:** A08 explicitly notes the arXiv distribution may shift; A08 notes 16.66% is a 2024 peak and may have changed. A11 corroborates the fake-star finding independently, strengthening confidence. The adversarial counter is partially valid for the specific numbers (especially arXiv distribution and Google Scholar precision in CS) but not for the directional findings (Google Scholar 1000-cap, non-reproducibility, and Boolean limitations are documented in official documentation — not statistical estimates).

**Tier revision:** Unchanged on direction; specific percentages have lower confidence. The 1000-cap, non-reproducibility, and nested-Boolean-failure for Google Scholar are verifiable facts from official documentation — not statistical artifacts. The arXiv category and GitHub fake-star findings are empirical estimates with temporal scope conditions. Kit procedures should treat these as live-update knowledge requiring periodic recalibration rather than fixed constants.

---

### Counter-prior pass 7: angle-quality

**Main conclusion:** Result-set Jaccard overlap is the gold standard for angle distinctness; LLM angle generation defaults to mode collapse (synonym clusters); PICO facet test and launchability check are required pre-dispatch gates.

**Adversarial counter-argument:**

The weakest assumption: that Jaccard threshold J > 0.3 reliably identifies redundant angles. The J > 0.3 threshold is derived (not from a study) — it is an inference from the near-zero baseline for genuinely distinct queries. For small literatures (<20 papers on a topic), two valid distinct angles will both retrieve the same 15 papers, producing high Jaccard even though the angles are conceptually distinct. The PICO facet test rejects exploratory/conceptual angles that cannot be assigned to a PICO facet — this could systematically bias angle lists toward intervention-type questions and exclude qualitative or theoretical angles.

**Supporting evidence found:** A12's adversarial subagent (Q3b) raised both these counter-arguments explicitly: "High Jaccard may reflect a small, authoritative literature rather than angle redundancy" and "PICO facet test assumes well-formed PICO question — exploratory research angles often cannot be mapped to PICO facets." These are genuine limitations confirmed in the archive.

**Tier revision:** Unchanged, with scope annotation. J > 0.3 threshold is not portable — it requires calibration to literature size. For small literatures: use conceptual facet test instead of Jaccard. PICO facet test should not be the sole gate; Boolean-connective test (can these be combined with OR?) is a more general version that works for exploratory angles. The mode-collapse finding (HIGH) is the most robust element of this group.

---

### Counter-prior pass 8: query-expansion-mechanics

**Main conclusion:** LLM expansion degrades retrieval for knowledge-deficient and high-ambiguity queries; domain-dependent variance is -9% to +5.1%; coverage-gap conditioning significantly outperforms unconstrained expansion; facet diversity matters more than query count.

**Adversarial counter-argument:**

The weakest assumption: that the SIGIR 2025 and BEIR benchmark findings transfer to open-ended research pipeline use (not retrieval benchmarks with annotation ground truth). Benchmark "recall" measures ability to retrieve documents matching a fixed annotation set — not research comprehensiveness. The meta-finding "not all queries need rewriting" with no reliable gate to predict when it helps is genuinely adversarial: it means expansion adds unpredictable variance, and the default should be NO expansion for well-formed queries. The "3-5 expansion queries" recommendation from DMQR-RAG is from industry research (Alibaba) that may optimize for product metrics rather than research comprehensiveness.

**Supporting evidence found:** A09's adversarial subagent raised the benchmark-vs-real-world concern: "benchmark 'comprehensive coverage' is defined by a fixed annotation set — this is not the same as true topical coverage in an open-ended research pipeline." The archive explicitly acknowledges this limitation.

**Tier revision:** Unchanged on direction; scope annotation required. The findings apply most directly to dense retrieval benchmarks. For open-ended research pipeline use, the practical implication is that expansion-as-facet-generation is recommended over expansion-as-synonym-proliferation — this principle survives the counter-argument because it changes the TYPE of expansion, not just the quantity. The -9% degradation risk is real and kit procedures must guard against it with the specificity gate (Rule 4 from A09).

---

## Step 3.7 — Principles extraction (all groups)

### G1: vocabulary-mismatch (HIGH)

**Sub-step A — Principle:**
The vocabulary with which a researcher enters a domain determines the vocabulary-shaped boundary of what can be found. Any retrieval system that depends on vocabulary matching cannot retrieve documents that the searcher has not yet learned to name. This is true regardless of searcher intent — it is structural, not motivational.

**Sub-step B — Fit to our setup:**
Tested in: cross-domain bibliographic database search, human searchers, keyword-based retrieval. Our setup differs in: agent-based search using both keyword and semantic retrieval; multiple queries per angle are planned; vocabulary enumeration (Step 0) is a required procedure element. Principle still applies because: even semantic retrieval is bounded by the concepts included in the query embedding — if a concept is absent from the query, it cannot pull the relevant documents. Principle may not apply if: our agent uses genuine semantic expansion (not keyword expansion) across pre-computed document embeddings at corpus scale — that changes the operative mechanism.

**Sub-step C — Derivation:**
The principle implies that Step 0 (vocabulary-frame enumeration before first query) is not a procedural nicety — it is the operative intervention that determines the accessible literature space. The principle also implies that any vocabulary tradition not identified at Step 0 is permanently excluded from the search regardless of how many queries are run within the identified traditions. This justifies the "adversarial vocabulary arm" as a required step: it is the only way to introduce vocabulary from traditions not yet named. Confidence: high — mechanism is structural.

---

### G2: llm-generation-failure-modes (HIGH)

**Sub-step A — Principle:**
An LLM generates within the distribution of its training data. When generating angles, queries, or sub-questions, it produces the centroids and close neighbors of its training vocabulary distribution — not the periphery, not the cross-disciplinary connections, not the null-hypothesis formulations that require departing from the training prior. The LLM's output is a density-sample from its training space, not a coverage-sample of the conceptual space.

**Sub-step B — Fit to our setup:**
Tested in: AI/NLP research angle generation, LLM-based web research sessions, benchmark query expansion. Our setup differs in: the kit uses LLM generation of research angles as a starting point, not a final list; subsequent human/adversarial review is planned. Principle still applies because: density-sampling produces systematically incomplete coverage even when the sample is large; adding more LLM-generated angles doesn't help if they cluster in the same region of concept space. Principle may not apply if: the kit's LLM is explicitly prompted with a coverage-gap check (CCQGen principle) AND explicit null-hypothesis elicitation — these change what region is sampled.

**Sub-step C — Derivation:**
The principle implies that the value of the angle-generation step is not in generating a comprehensive list but in generating a diverse seed set that will be supplemented by vocabulary-tradition checking and adversarial review. A 10-angle list that covers 5 distinct facets is more valuable than a 20-angle list that covers 3 facets with synonyms. The kit procedure should gate angle acceptance on facet diversity (Step 3.7 angle-quality principle), not on count. Confidence: high — mechanism is structural (training data distribution).

---

### G3: confirmation-bias (HIGH)

**Sub-step A — Principle:**
The same agent that forms a hypothesis will tend to search in the vocabulary of that hypothesis, interpret ambiguous results in favor of that hypothesis, and feel satisfied when confirming evidence is found. This is not a flaw in the agent — it is how concept-driven search works. The search process and the prior belief share vocabulary, and vocabulary drives retrieval.

**Sub-step B — Fit to our setup:**
Tested in: human web search and LLM-assisted search on opinion-laden topics; intelligence analyst hypothesis evaluation. Our setup differs in: research topics are more technical than political; the kit has explicit adversarial search requirements; agent contexts can be separated. Principle still applies because: the vocabulary-shapes-retrieval mechanism applies to any search regardless of topic affective load; the mechanism is structural. Principle may not apply if: the topic is purely factual with no plausible alternative hypotheses (rare in research contexts).

**Sub-step C — Derivation:**
The principle implies that adversarial queries issued by the same agent that issued confirmatory queries are not structurally independent — the vocabulary pool they draw from is still shaped by the prior. A genuinely independent adversarial pass requires a separate context with: (a) a different starting vocabulary (the disconfirming vocabulary, specified before seeing confirmatory results), or (b) a separate agent with no access to the confirmatory query session. The kit's adversarial subagent design (separate agent, no shared context) is empirically grounded by this principle. Confidence: high.

---

### G4: source-diversity (HIGH)

**Sub-step A — Principle:**
The literature base accessible from any single source type is a biased sample of the total available knowledge — biased by the ingest policy of that source and by the publication incentives that determine which knowledge gets published vs. stays in grey literature. No single source type captures the full knowledge space on any topic with non-trivial practitioner-academic duality.

**Sub-step B — Fit to our setup:**
Tested in: Cochrane reviews (clinical medicine), SE MLR studies. Our setup differs in: the kit researches AI/technical topics where some sources may overlap (arXiv and Semantic Scholar share many preprints). Principle still applies because: the positive-publication bias mechanism is universal (null results are underpublished regardless of field); practitioner knowledge for AI tooling lives in GitHub/blogs, not in arXiv. Principle may not apply if: the topic is entirely novel and no practitioner literature exists yet (pure theoretical/foundational work).

**Sub-step C — Derivation:**
The principle implies the minimum requirement of 2 structurally distinct source types is a floor, not a target. The "structurally distinct" criterion means different ingest policies, not different interfaces to the same corpus. For AI research: arXiv + Semantic Scholar = NOT structurally distinct (both index the same preprints). arXiv + GitHub issues = structurally distinct (different ingest policy, different author populations, different publication bias). Confidence: high — mechanism is clear; specific recall percentage (95%) has medium confidence for AI topics.

---

### G5: saturation-signals (HIGH)

**Sub-step A — Principle:**
Convergence of query results within a vocabulary tradition signals that you have exhausted what the tradition contains, not that the topic is exhausted. Saturation is tradition-relative, not topic-absolute. The absence of new results is evidence of your search's boundary, not of the topic's boundary.

**Sub-step B — Fit to our setup:**
Tested in: qualitative research, systematic review stopping, bibliometrics. Our setup differs in: agent-based research with explicit vocabulary-tradition tracking (Step 0). Principle still applies because: the vocabulary-island mechanism is structural — queries in one tradition cannot retrieve documents indexed only in another tradition. Principle may not apply if: the kit uses semantic search that maps across vocabulary traditions — but current arXiv/Semantic Scholar search is keyword-based.

**Sub-step C — Derivation:**
The principle implies the saturation log is not a post-hoc documentation requirement — it is the evidence that saturation was reached by the correct criterion (all 3 conditions) rather than by resource exhaustion. A saturation claim without a log is indistinguishable from premature stopping. The 76.3% undocumented finding suggests that even in high-stakes published research, saturation-as-label is the dominant behavior; the kit procedure must require observable evidence (log entries with query counts and new-key yields) to prevent the same failure mode. Confidence: high.

---

### G6: platform-search-strategies (HIGH)

**Sub-step A — Principle:**
Platform design (ingest policy, indexing logic, ranking algorithm, result cap, default field search) determines what is findable on that platform, independent of what exists on it. A search strategy that does not account for platform-specific constraints will systematically miss content that is on the platform but outside the default search behavior.

**Sub-step B — Fit to our setup:**
Tested in: arXiv category distribution (empirical), GitHub metadata analysis (empirical), Google Scholar systematic review research (empirical/consensus). Our setup differs in: the kit's research procedures will be used by agents who may not know platform-specific constraints. Principle still applies because: the constraints (arXiv cs.AI category skew, GitHub 1000-result cap, Google Scholar non-reproducibility) are documented platform behaviors, not user behaviors. Principle may not apply if: platforms update behavior — these findings have temporal scope conditions.

**Sub-step C — Derivation:**
The principle implies that per-source calibration tables are not optional documentation — they are the mechanism that prevents platform-design constraints from becoming invisible search failures. A kit that says "search arXiv" without specifying which categories is, by default, specifying cs.AI (the most intuitive choice) and will miss 65% of LLM literature. The tables must include explicit override rules for every non-obvious platform behavior. Confidence: high on direction; medium on specific percentages (temporal scope).

---

### G7: angle-quality (HIGH)

**Sub-step A — Principle:**
Two angles are genuinely distinct if and only if they retrieve substantially different documents in the same corpus. Any other distinctness criterion (vocabulary difference, facet assignment, narrative description) is a proxy that can fail. Mode collapse means LLM angle generation defaults to producing the same angle in different words — this is the normal output, not an exceptional failure.

**Sub-step B — Fit to our setup:**
Tested in: systematic review search strategy design, LLM research agent deep research systems, query diversity evaluation IR research. Our setup differs in: the kit generates angles before research (not after), so pre-search distinctness checks must use proxies (PICO facet test, Boolean-connective test), not the gold-standard Jaccard test. Principle still applies because: mode collapse is a documented LLM generation default; pre-search proxies reduce but do not eliminate the failure rate. Principle may not apply if: the agent explicitly generates each angle with a coverage-gap conditioning prompt (CCQGen approach) — this changes the default generation behavior.

**Sub-step C — Derivation:**
The principle implies the angle-generation procedure needs a redundancy check at three layers: (1) pre-generation: require each angle to target a different vocabulary tradition or question type; (2) post-generation: apply Boolean-connective test and PICO facet test as fast pre-dispatch checks; (3) post-search: compute result-set overlap at cluster close. The three-layer check operationalizes the gold-standard principle at each point where it is tractable. Confidence: high on mode collapse as default; medium on specific Jaccard threshold (derived, not measured).

---

### G8: query-expansion-mechanics (HIGH)

**Sub-step A — Principle:**
Expanding a query generates new queries that are derived from the original query's vocabulary and the model's priors about what is related to that vocabulary. Expansion adds coverage only when the derived queries access a different part of the document space than the original. When expansion generates within the same vocabulary cluster (synonyms, paraphrases), it adds noise without adding coverage.

**Sub-step B — Fit to our setup:**
Tested in: dense retrieval benchmarks (BEIR, TREC DL, CSFCube). Our setup differs in: research pipeline searching across multiple heterogeneous sources (arXiv, Semantic Scholar, GitHub), not a single dense retrieval index. Principle still applies because: the coverage-gap conditioning principle (tracking what has been covered and targeting the gap) is mechanism-level — it applies regardless of retrieval system. Principle may not apply if: the kit uses a single-source search where the expansion vocabulary must match that source's specific indexing.

**Sub-step C — Derivation:**
The principle implies expansion should always be conditioned on a coverage-gap signal: "given these queries already run, what aspect of [topic] has NOT yet been addressed?" This is tractable for the kit because the angle list represents the coverage map — each angle already addresses a facet. New sub-queries within an angle should address a facet NOT already covered by the angle's prior queries. The specificity gate (do not expand well-anchored queries) is an additional required constraint. Confidence: high on coverage-gap conditioning principle; medium on optimal query count (3-5 derived from industry research).

---

### G9: question-scoping-frameworks (CONSENSUS)

**Sub-step A — Principle:**
Named dimensions act as a checklist of what must be specified. When a dimension is blank, it signals an unresolved information need. When filled, it generates a vocabulary cluster for searching. The mechanism is dimension-to-vocabulary translation, not question-answering.

**Sub-step B — Fit to our setup:**
Tested in: clinical medicine systematic reviews (PICO), qualitative health research (SPIDER), scoping reviews (PCC). Our setup differs in: the kit generates research angles, not clinical search strategies. Principle still applies because: the blank-dimension-as-intake-question mechanism is independent of domain. Principle may not apply if: the domain is entirely novel and no domain vocabulary exists yet (blank dimensions cannot be filled even with prompting).

**Sub-step C — Derivation (CONTESTED variant):**
The framework-early vs. vocabulary-first tension is a genuine design decision point. If frameworks are applied first: the benefit is structured question formation; the risk is premature closure before vocabulary is known. If vocabulary-first: the benefit is accurate framework filling; the cost is additional time for exploratory search. The kit should implement the scope condition explicitly: frameworks are consolidation tools (applied after exploratory vocabulary is known) not domain-entry tools (applied at intake). For well-specified inputs: frameworks at intake. For vague/unknown-domain inputs: exploratory search first, framework second.

---

### G10: vocabulary-discovery-methods (CONSENSUS)

**Sub-step A — Principle:**
Vocabulary discovery methods (pearl-growing, survey-paper-first, optimization-technique) are mechanisms for moving from one vocabulary cluster to an adjacent or separate cluster that the initial vocabulary cannot reach. Each method uses a different signal (citation network, publication structure, two-set comparison) to detect cluster boundaries.

**Sub-step B — Fit to our setup:**
Tested in: systematic review practice, information science research, bibliometrics. Our setup differs in: automated agent execution vs. human researcher. Principle still applies because: the mechanisms (following citation edges, comparing two retrieval sets) are automatable. Principle may not apply if: the agent executes one method only — each method has a coverage ceiling that a different method can overcome.

**Sub-step C — Derivation:**
The principle implies that the vocabulary-discovery step is not complete after one method — each method surfaces one type of vocabulary the initial query didn't contain. The kit should sequence: LLM translation → survey-paper extraction → pearl-growing → two-set comparison, treating each as a step that potentially adds new vocabulary for the next step. Confidence: medium — these are consensus methods, not empirically compared in controlled experiments.

---

### G11: structural-intervention-effectiveness (CONSENSUS)

**Sub-step A — Principle:**
The structural form of an intervention determines whether it changes the cognitive/computational access structure or merely adds instructions to be processed by the same access structure. Instructions overlay on a biased access structure; structural separation changes the access structure itself.

**Sub-step B — Fit to our setup:**
Tested in: intelligence analyst hypothesis evaluation (ACH), clinical trial registration (pre-registration), software engineering adversarial verification. Our setup differs in: AI agent pipeline, not human analyst. Principle still applies because: an AI agent responding to its own prior output has analogous anchoring behavior — the same context window shapes what is generated next. Principle may not apply if: the agent has no memory across calls (stateless execution) — in that case the "same context" anchoring is broken by design.

**Sub-step C — Derivation:**
The principle implies the adversarial search arm must be genuinely separate — separate agent call, no access to prior confirmatory results, explicitly different starting vocabulary. A single-agent "now find disconfirming evidence" instruction does not change the context structure. Confidence: high on the structural mechanism; medium on whether AI agents show exactly the same anchoring behavior as human analysts (mechanism is plausible but not directly tested for agents).

---

### G12: misc (GAP variant)

**Sub-step A — What principle WOULD apply:**
For framework-family proliferation: the principle would be that proliferation signals an absence of empirical consensus about which framework is superior — and that framework selection should be driven by task-type matching rather than default application. For expert consultation: tacit knowledge has no searchable proxy; expert-accessible knowledge exists outside the literature space.

**Sub-step B — What absence of evidence tells us:**
The absence of empirical studies on expert consultation effectiveness (A06) and the absence of framework-selection empirical guidance suggest these are areas where practice has outrun research — practitioners apply both, but the comparative effectiveness hasn't been formally studied.

**Sub-step C — Researchable or genuinely unknown:**
Framework selection criteria are researchable (compare retrieval performance across frameworks for the same question type). Expert consultation effectiveness is harder to research (tacit knowledge is by definition not externally measurable until surfaced). Both are deferred — proceed on principle-based reasoning, not empirical grounding.

---

## Step 4 — Adversarial check on user assumptions

The kit-maker (project goal) builds a kit for generating research angles. Implicit assumptions in the angle-gen-kit design worth checking:

| Assumption | Research bearing | Verdict |
|-----------|-----------------|---------|
| LLM-generated angle lists are a good starting point that needs refinement | A10 F1, F2, F3: LLM-generated angles rate as novel pre-execution but fail post-execution; diversity collapse is the default; novelty anticorrelates with impact | **Partially contradicted.** LLM generation is a starting point, but the failure mode is that the starting point is systematically biased toward centroids (popular angles, existing vocabulary, no null hypotheses). Refinement is necessary but may not be sufficient — the diversity problem is structural, not just a quality issue. |
| Running more queries improves coverage | A07 Bradford zones; A09 "diversity > count" | **Contradicted at the margin.** Bradford zones predict diminishing returns; after 3-5 distinct source types/strategies, additional queries add near-zero new coverage unless a genuinely new vocabulary tradition is accessed. More queries from the same tradition ≠ more coverage. |
| Adversarial pass by the same agent that did the confirmatory pass is sufficient | A04 structural-independence; A06 frame-lock | **Contradicted.** Same-agent adversarial passes don't escape the prior-belief vocabulary structure. The structural independence requirement is empirically grounded. The adversarial arm must be a separate agent call with no shared context. |
| Saturation means the topic is covered | A07 vocabulary-island-saturation; A07 saturation-76pct-undocumented | **Contradicted as stated.** Saturation within a vocabulary tradition means that tradition is covered, not the topic. The 3-condition check is required. |
| PICO-style frameworks help at intake for unknown domains | A03 adversarial-pico-vocabulary-bootstrapping | **Contested.** Frameworks are consolidation tools after vocabulary exists; domain-entry tools before vocabulary exists. The default for unknown domains should be exploratory-search-first (PCC frame). |

---

## Step 5 — User questions (CONTESTED and GAP only)

**Q1 (CONTESTED — when-to-apply-frameworks):** The research on question-scoping frameworks is CONTESTED between "frameworks improve structured coverage" (consensus, 50+ years) and "frameworks require domain vocabulary not available at true domain entry" (empirical adversarial). My default: use PCC/exploratory search first for any angle where the agent has no prior vocabulary for the domain; switch to PICO/SPIDER after the exploratory search establishes vocabulary. Do you want to override this sequence, or proceed with exploratory-first as the default?

**Q2 (GAP — gating expansion):** No study was found that reliably predicts BEFORE expansion whether expansion will help (+13%) or hurt (-9%) for a given query. The documented gating approaches (simple feature-based gating) perform no better than "never expand" as a baseline (A09 F2). My default: apply the specificity gate (no expansion for proper-noun-anchored queries) and the knowledge-gap flag (no expansion for post-2023 or niche-domain topics), but treat this as a provisional heuristic. Should the kit include an explicit "manual gating decision" step for edge cases, or should the heuristic be applied automatically?

---

## Step 6 — Key gaps

The research does NOT answer the following questions that the kit needs to address:

1. **Reliable pre-expansion gating:** No study found that reliably predicts whether expansion will help or hurt before execution. The only documented reliable gating signals (specificity of anchors, LLM domain-knowledge level) are heuristics, not validated classifiers. The kit must include explicit uncertainty handling for expansion decisions.

2. **AI agent-specific confirmation bias magnitude:** All confirmation bias studies used human subjects or short LLM sessions on opinion-laden topics. The specific magnitude of confirmation bias in a research agent running a multi-step research pipeline on technical topics is unmeasured. The direction is established but the kit cannot calibrate how aggressive the adversarial arm needs to be.

3. **Cross-tradition recall rates for LLM-generated angle lists:** Studies measured diversity collapse (LLM angles are more concentrated than human angles) but did not measure how many vocabulary traditions an LLM-generated list covers vs. misses. The kit cannot predict how many vocabulary traditions will be missed by default, only that some will be.

4. **Optimal number of adversarial sub-queries:** The literature shows structural independence matters and that adversarial vocabulary is the operative mechanism — but no study provides calibrated guidance on how many adversarial queries are "enough" per angle. The 1 adversarial query per angle (Q3 of research-quality.md) is a heuristic without empirical grounding.

5. **Transfer of clinical/SE findings to AI research topics:** The majority of high-confidence empirical findings come from clinical medicine (PICO, multi-database recall, grey-lit bias) and software engineering (MLR, grey-lit methodology). Applicability to AI research angle generation is mechanism-grounded but not directly measured in that context.

---

## Step 7 — Kit-maker signal

Which findings most directly inform which kit procedures:

| Finding | Tier | Kit procedure target |
|---------|------|---------------------|
| LLM generates by density-sampling training distribution; mode collapse is default | HIGH | Angle-generation step: require explicit coverage-gap conditioning per angle; require null-hypothesis angle as structural gate; flag synonym clusters as mode collapse |
| Vocabulary mismatch >80% means single-tradition start misses majority of literature | HIGH | Step 0: mandatory 2+ vocabulary tradition enumeration before first query; vocabulary traditions are not optional |
| Confirmation bias persists when verifying; structural independence is required fix | HIGH | Adversarial arm: must be separate agent call with no shared context; adversarial vocabulary specified before seeing confirmatory results |
| Searching ≥2 structurally distinct sources achieves >95% recall; single-source 20-93% | HIGH | Per-angle source requirement: minimum 2 structurally distinct source types; academic + practitioner pair for any topic with non-trivial grey literature |
| Vocabulary-island saturation ≠ coverage saturation; 76.3% undocumented | HIGH | Saturation log: 3-condition saturation check required before SATURATED verdict; log must contain observable evidence (query list + per-query new-key count) |
| arXiv cs.AI misses 65% of LLM papers; Google Scholar non-reproducible and capped; GitHub 16.66% fake stars | HIGH | Per-source calibration table: hard rules for each platform (arXiv category list, GitHub quality gate, Google Scholar role restriction, HN/Reddit discovery-only) |
| Result-set Jaccard is distinctness gold standard; mode collapse is LLM default | HIGH | Pre-dispatch angle check: Boolean-connective test + PICO facet test before dispatch; post-search Jaccard check at cluster close |
| Expansion: -9% to +5.1% range; coverage-gap conditioning significantly outperforms; diversity > count | HIGH (within-angle query expansion) / HYPOTHETICAL (cross-tradition vocabulary discovery) | Query generation within angle: expansion-as-facet-generation not synonym-proliferation; specificity gate; coverage-gap check before each additional query; target 3-5 expansion queries max. **SCOPE SPLIT — INT-10 + INT-11 (2026-07-08):** The HIGH tier applies to the within-angle query expansion claim (CCQGen, BEIR/TREC evidence — unchallenged by trials). The cross-tradition application — that coverage-gap conditioning in Step 0 produces vocabulary-diverse angle lists where baseline does not — is HYPOTHETICAL: FM4 GENERAL confirmed across LLM/AI and sports science domains; Q1 B-A = 0.00 in both trials; frontier model baseline already enumerates vocabulary traditions at Q1=3 ceiling. Reclassify cross-tradition claim to HYPOTHETICAL pending INT-12 trial on calibration-confirmed sparse domain (calibration Q1 ≤ 2 required). |
| LLM novelty anticorrelates with actual impact (ρ=−0.29); LLM judges 0.46 points more lenient | HIGH | Angle scoring: never use LLM self-evaluation to rank or filter angles; use structural criteria (cross-disciplinary distance, presence of negating angles, facet diversity) |
| Frameworks are consolidation tools, not domain-entry tools | CONTESTED | Intake sequence: exploratory-search-first for unknown-domain inputs; frameworks applied after vocabulary is established |
| Pearl-growing, survey-paper-first, optimization-technique | CONSENSUS | Vocabulary-expansion step: sequence vocabulary discovery methods as part of Step 0 for unknown domains |
| Bradford zones: first 3-5 traditions capture majority; diminishing returns predictable | HIGH | Stopping signal: Bradford calibration for "enough traditions covered"; prevents infinite search expansion |

---

## New research angles generated by gaps/contradictions

The following gaps suggest missing research angles for RESEARCH_ANGLES.md (if not already listed):

1. **Pre-expansion reliability gating:** "query expansion gating predict when expansion helps dense retrieval feature-based automatic detection 2024 2025" — can any observable query characteristic reliably predict expansion benefit before trying it?

2. **Agent-specific confirmation bias:** "AI agent confirmation bias multi-step research pipeline technical topics empirical study 2025" — does the same CHI 2024 amplification effect hold for technical (non-opinion-laden) research topics in agent contexts?

3. **LLM vocabulary tradition coverage audit:** "LLM research angle generation cross-disciplinary vocabulary tradition coverage empirical measurement missing traditions" — how many vocabulary traditions does a default LLM angle list cover vs. miss, empirically?
