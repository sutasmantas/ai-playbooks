# Query Construction Methodology — Synthesis
**Source angles:** gh-01-a1 (arXiv), gh-01-a2 (Semantic Scholar), gh-01-a3 (GitHub), gh-01-a4 (web search), gh-01-a5 (recovery), gh-01-a6 (tools), gh-01-a7 (adversarial)
**Date:** 2026-07-04
**Status:** Ready for insertion into research-quality.md

---

## Convergent findings across angles

These claims appeared independently in 3 or more angles. Treat as high-confidence.

**C1 — Vocabulary mismatch is the default failure mode, not an edge case.**
Appeared in: A1 (FM-1, FM-2), A2 (F5), A4 (§6 exact-phrase brittleness), A5 (§1.3), A7 (§1).
Quantified: 80% of the time two researchers name the same concept with different words (Sparck Jones 1972, replicated). An average well-formed query misses 30–40% of relevant documents due to vocabulary divergence alone. This is the structural baseline — not a correctable mistake.

**C2 — Acronym/abbreviation inconsistency requires explicit OR expansion.**
Appeared in: A1 (FM-2), A2 (F5), A4 (§6).
Rule: Always OR the abbreviation with the spelled-out form for primary concepts. Example: `(LLM OR "large language model")`. Applies to: LLM, CoT, RAG, RLHF, SFT, DPO, MoE. Semantic Scholar and arXiv both do NOT auto-expand acronyms.

**C3 — Operator over-specification causes invisible under-retrieval.**
Appeared in: A1 (FM-4, FM-5), A4 (§4 operator budget), A7 (§3).
Rule: Each AND constraint reduces the candidate set multiplicatively. Each exact-phrase quote locks to one vocabulary convention. Researchers cannot observe what was excluded. The practical operator budget: 1–2 operators = safe; 3 = sweet spot; 4+ = reserve for confirmed over-broad results; 7–8+ = consistently produces empty or near-empty sets.

**C4 — Category/field qualifiers should supplement keyword queries, not replace them.**
Appeared in: A1 (§3 category codes), A2 (fieldsOfStudy parameter notes), A4 (decision matrix), A5 (cross-source translation).
Rule: Field filters (arXiv `cat:`, Semantic Scholar `fieldsOfStudy:`) narrow to a community, not a topic. Apply after a working keyword query to exclude irrelevant communities. Never use as the primary search axis for discovery queries. `cat:cs.AI` in arXiv is a documented trap — it retrieves classical AI, not LLM research, which lives in `cs.LG` and `cs.CL`.

**C5 — Use API over web interface for any systematic work.**
Appeared in: A2 (§3), A6 (§1, §2).
Rule: Both Semantic Scholar and arXiv APIs give boolean query syntax, date filtering, bulk retrieval (up to 10M and 30,000 respectively), and machine-readable output. The web interface does not support compound queries, bulk retrieval, or reproducible query strings. Setup cost is low (arXiv: no auth; Semantic Scholar: free key, 1-minute registration). Threshold: any retrieval task >20–30 papers justifies the API over manual web pagination.

**C6 — Run multiple synonym-targeted queries and union results for fragmented vocabularies.**
Appeared in: A1 (§4.2 behavioral compliance example), A2 (Pattern 3), A5 (§2.2 seed paper method), A7 (§1).
Rule: Topics that span sub-communities (e.g., "behavioral compliance" lives across alignment, safety, instruction-following, system-prompt literatures) cannot be captured by a single query. Run 2–4 targeted queries per vocabulary island, then union by paper ID. The union step is not optional — a single query creates a vocabulary island.

---

## Per-source query construction guide

### arXiv

#### Field qualifiers — syntax and when to use

| Prefix | Searches | Best use |
|--------|----------|----------|
| `ti:` | Title only | High precision; authors choose titles deliberately. Use when the term is likely in the title. |
| `abs:` | Abstract only | Covers methodology vocabulary. Use when concept may not appear in the title. |
| `all:` | Title + abstract + author + comments + report number | Broadest net. Use only when a term is so obscure that any appearance is a positive signal. Default in web UI; must be specified explicitly in API. |
| `cat:` | Subject category | Scoping filter, not primary axis. Use to exclude irrelevant communities after a working keyword query. |
| `au:` | Author name | Researcher tracking only. Always quote: `au:"smith, j"`. Do not use for topic discovery. |
| `submittedDate:` | Submission date | Range syntax: `[YYYYMMDDTTTT TO YYYYMMDDTTTT]` in 24-hour GMT. |
| `co:` | Comments field | Author-added notes. Rarely useful for topic search. |

**Prefer `ti:` for precision, `abs:` for recall, OR them together to catch both without requiring either:**
```
(ti:"instruction following" OR abs:"instruction following")
```

**Category codes for CS/AI — critical note:**
- `cs.LG` (Machine Learning) + `cs.CL` (Computation and Language) = primary venues for LLM/agent research
- `cs.AI` = classical AI (planning formalisms, theorem proving). Misleading name. Adding `cat:cs.AI` alone MISSES the majority of LLM papers.
- For LLM agent work, OR across: `cat:cs.AI OR cat:cs.LG OR cat:cs.CL`

#### Boolean operator patterns

| Operator | Syntax | Notes |
|----------|--------|-------|
| AND | `AND` | Both conditions required. Higher precedence than OR. |
| OR | `OR` | Either condition. Lower precedence than AND. Use parentheses to enforce order. |
| NOT | `ANDNOT` | `NOT` alone produces undefined behavior. Only `ANDNOT` is documented. |
| Phrase | `"exact phrase"` | Exact token sequence. URL-encode as `%22exact+phrase%22` in raw API calls. |
| Grouping | `(...)` | URL-encode parens as `%28` / `%29` in API calls; use directly in web UI. |

**Pattern template for compound queries:**
```
(ti:"TERM-A" OR ti:"SYNONYM-A") AND (abs:"TERM-B" OR abs:"SYNONYM-B") AND (cat:cs.LG OR cat:cs.CL)
```

#### Worked examples

**Example 1 — LLM Agent Planning**

Naive:
```
all:LLM agent planning
```
Problems: "LLM", "agent", "planning" each appear in thousands of unrelated papers. "LLM" may be spelled out as "large language model." Returns thousands of loosely related results.

Improved:
```
(ti:"LLM agent" OR ti:"language model agent" OR ti:"LLM-based agent") AND (abs:planning OR abs:"task planning" OR abs:"action planning") AND (cat:cs.AI OR cat:cs.LG OR cat:cs.CL)
```
Why better: Anchors agent framing in title (deliberate author signal), allows planning vocabulary to vary, handles abbreviation/spelled-out form, scopes to relevant communities.

**Example 2 — Behavioral Compliance**

Naive:
```
all:"behavioral compliance" LLM
```
Problem: "behavioral compliance" is not a term of art in ML. Papers use "instruction following", "rule adherence", "alignment", "safety constraints". Returns near-zero results.

Improved:
```
(ti:"instruction following" OR ti:"instruction adherence" OR ti:"rule following" OR ti:"constraint following") AND (abs:LLM OR abs:"language model") AND cat:cs.CL
```
Why better: Uses the literature's actual vocabulary. Category scoping removes robotics and formal verification noise.

#### Failure modes and recovery

| Code | Failure | Recovery |
|------|---------|----------|
| FM-1 | Vocabulary mismatch — your terms are not the field's terms | Find one relevant paper, extract its vocabulary, rebuild query from that |
| FM-2 | Acronym inconsistency — "LLM" misses "large language model" | Always OR abbreviation with spelled-out form |
| FM-3 | `cat:cs.AI` misses most LLM work | OR across `cs.AI`, `cs.LG`, `cs.CL` |
| FM-4 | Over-quoted phrases — e.g., `"multi-step reasoning agent planning pipeline"` | Quote 2–3 word anchors only |
| FM-5 | AND-heavy query — each AND is multiplicative narrowing | First run with 2–3 core terms; add AND only if results >500 |
| FM-6 | Author name ambiguity — `au:smith` matches Smithson, Blacksmith | Always quote: `au:"smith, j"` |
| FM-7 | Category drift — `cat:cs.AI` is not "all AI papers" | Sample 10–20 results before trusting a category filter |
| FM-8 | Missing cross-lists — primary category filter misses cross-posted papers | OR across all relevant category codes |

---

### Semantic Scholar

#### Field operators and boolean support

The web interface has NO field prefix operators and NO boolean query syntax. It is a bag-of-words search engine.

The API query string supports:
| Operator | Syntax | Example |
|----------|--------|---------|
| Phrase | `"exact phrase"` | `"instruction following"` |
| AND (must appear) | `+term` | `+"LLM agent"` |
| NOT (must not appear) | `-term` | `-survey` |
| OR | `term1 \| term2` | `"tool use" \| "tool calling"` |
| Wildcard | `term*` | `retriev*` |
| Fuzzy | `term~N` | `agent~2` |
| Proximity | `"phrase"~N` | `"language model"~3` |

These operators work ONLY in the API query parameter. The web UI ignores them entirely.

**Structured filter parameters (URL parameters, not query string):**
- `year=2022-` — publication year range
- `fieldsOfStudy=Computer Science` — discipline filter
- `minCitationCount=5` — quality proxy, removes uncited noise
- `venue=NeurIPS,ICML,ICLR` — venue filter (normalization inconsistent — test multiple name variants)
- `openAccessPdf` — filter to open-access papers

#### API vs. web decision rule

Use the **web interface** when:
- Quick spot-check: does a paper on X exist?
- Exploratory browsing before committing to systematic search
- You want TLDR summaries, PDF viewer, citation cards (web-only features)
- Single-concept lookup with <50 papers expected

Use the **API** when any of these are true:
- Retrieving >20–30 papers (web pagination is slower than one bulk call)
- Need to combine multiple filters (year + citationCount + fieldsOfStudy)
- Any boolean compound query (web ignores boolean operators)
- Building a reproducible research corpus
- Sorting by citation count across the full result set
- Following citation chains as data

**API endpoints:**
- `/graph/v1/paper/search` — relevance search, max 1,000 results (cap reduced Oct 2023)
- `/graph/v1/paper/search/bulk` — up to 10M results, token-based pagination; use this for any bulk task
- `/graph/v1/paper/{id}/citations` — forward citations as structured data
- `/graph/v1/paper/{id}/references` — reference list as structured data

**Rate limits:** Without key: shared unauthenticated pool (~100 req/5 min effective in practice). With key (free, 1-min registration): 1 RPS. Use institutional/business email — free email domains (gmail, etc.) no longer approved as of August 2024.

#### Worked examples

**Example 1 — LLM agents using external tools (narrow, single vocabulary)**
```
GET /graph/v1/paper/search
  ?query="LLM agent" + "tool use" + planning
  &fields=title,year,venue,citationCount,influentialCitationCount,abstract
  &year=2022-
  &fieldsOfStudy=Computer Science
  &minCitationCount=3
  &limit=50
```
Why: minCitationCount=3 removes noise preprints. year=2022- because tool-use agent literature crystallized around ReAct (2022). Phrase quotes prevent spurious matches.

**Example 2 — Behavioral compliance (fragmented vocabulary — run 3 queries, union)**
```
Query A: "instruction following" + "large language model"
Query B: "behavioral compliance" + ("AI agent" | "language model")
Query C: "rule following" + LLM + alignment
```
All with: `year=2021-, fieldsOfStudy=Computer Science, minCitationCount=5`
Union results by `paperId` field to deduplicate.

#### Failure modes

| Code | Failure | Recovery |
|------|---------|----------|
| F1 | No field prefix operators — `title:attention` is treated as a literal word | Use structured filter parameters for field-specific narrowing; keep query string to text matching |
| F2 | Web UI ignores boolean — `A AND NOT B` treats AND/NOT as search terms | Use API for any compound query; no web UI workaround exists |
| F3 | Conference paper gaps — 21,000+ official conference papers missing per study | Cross-check with ACL Anthology (NLP), OpenReview (NeurIPS/ICLR) for exhaustive conference coverage |
| F4 | Venue normalization inconsistency — "NeurIPS" vs. "Neural Information Processing Systems" | Test multiple venue name variants; normalize client-side |
| F5 | No acronym expansion | Run both acronym and spelled-out form as separate queries; union by paperId |
| F6 | 1,000-result cap on relevance search | Use `/paper/search/bulk` for any result set >1,000 |
| F7 | Springer abstracts empty (licensing) | Fetch from DOI or arXiv ID when abstract field is null |
| F8 | Word-based ranking fails for narrow technical concepts | Use phrase operators aggressively; combine with minCitationCount and fieldsOfStudy |

---

### GitHub

#### Search operators for repository discovery

**Scoping operators (where to search):**
| Operator | Searches | Note |
|----------|----------|------|
| `in:name` | Repository name only | Most precise signal |
| `in:description` | Repo description | Catches what name misses |
| `in:readme` | README content | Requires explicit declaration; NOT included in default search |
| `in:topics` | Topic tags | Exact match only |
| `in:name,description` | Name OR description (comma = OR within in:) | Default behavior when `in:` omitted |

Default when `in:` is omitted: searches name, description, and topics. README requires `in:readme`.

**Filtering operators:**
| Operator | Syntax | Example |
|----------|--------|---------|
| `language:` | `language:python` | Use display name (Python, not python) |
| `stars:` | `stars:>=500`, `stars:100..5000` | Range via `..` notation |
| `pushed:` | `pushed:>2025-01-01` | Last commit push date, ISO 8601 |
| `created:` | `created:>2023-01-01` | Repository creation date |
| `topic:` | `topic:llm-agent` | Exact match only; search plural variant separately |
| `archived:` | `archived:false` | Always include — archived repos are in results by default |
| `mirror:` | `mirror:false` | Excludes mirrors of external repos |
| `NOT` | `NOT term` | `NOT awesome in:name` to filter curated lists |
| `org:` | `org:microsoft` | Restrict to one organization |
| `license:` | `license:apache-2.0` | SPDX key |

**Compound template:**
```
topic:llm-agent language:python stars:>=500 pushed:>2025-01-01 archived:false
```

**Topic variant pairs — always search both:**
- `topic:llm-agent` AND `topic:llm-agents`
- `topic:autonomous-agent` AND `topic:autonomous-agents`
- `topic:ai-agent` AND `topic:ai-agents`

#### Quality signal thresholds

**Stars:**
| Range | Interpretation |
|-------|----------------|
| 0–50 | Experiment/personal project. Ignore unless linked from paper or known researcher. |
| 50–500 | Community awareness forming. Worth examining if topic is narrow or paper-backed. |
| 500–2,000 | Active community. Claims likely reality-tested. |
| 2,000–10,000 | Production-adjacent. Issues from real-world users. Claims are extractable. |
| 10,000+ | Flagship. Extensive documentation, contributor diversity. |

Practical minimum for claim extraction: ~500 stars + recent push. Below 500: claims are provisional.

**Recency (`pushed:`):**
| Threshold | Interpretation |
|-----------|----------------|
| Within 12 months | Actively maintained. Claims are current. |
| 12–24 months | Dormant. APIs may still be valid; check issues for deprecation. |
| 2–4 years | Maintenance mode or abandoned. Verify all claims against current landscape. |
| 4+ years | Historical artifact. Use only for provenance. |

Default threshold for active AI research: `pushed:>2025-01-01`.

**Star inflation detection:**
- Fork-to-star ratio below 50 forks per 1,000 stars on a >10k-star repo = red flag
- Watcher-to-star ratio below 1:100 = likely inflated
- >30% of stargazers with zero followers and no repos = purchased engagement
- Single spike in star history followed by flat growth = one viral moment, not sustained use

#### Claim extraction approach

**Priority order:**
1. Linked arXiv/paper — if README links to a paper, the paper is the authoritative claim source. Extract from paper; validate against code.
2. README benchmark table — rows = datasets/tasks; columns = methods/metrics. The highest-value claim surface. Check whether the benchmark is a known standard (SWE-bench, HumanEval, AgentBench, GAIA, WebArena) or a custom eval. Custom evals require more skepticism.
3. `/results`, `/eval`, `/experiments` directories — raw numbers and scripts. More trustworthy than README prose.
4. CHANGELOG/release notes — claims that survived multiple versions have higher confidence.
5. Issues and PRs — user-reported limitations are often more accurate than author-reported capabilities. Search for: "doesn't work", "fails on", "worse than", "limitations".
6. Dependents page ("Used by") — high dependent count is evidence claims were real enough to build on.

**Red flags:**
- README is mostly installation instructions with no results or comparisons
- "Paper coming soon" without a preprint link
- Benchmarks only on toy datasets (GSM8K without harder evals)
- "State of the art" claim with no citation to beaten baseline
- Claims in README with no corresponding code or script

#### Worked examples

**Example 1 — Agentic scaffolding frameworks**
```
# Step 1 — high-precision topic search
topic:agentic-framework language:python stars:>=1000 pushed:>2025-01-01 archived:false

# Step 2 — catch what topics miss
"tool use" "planning" "memory" in:readme language:python stars:>=500 pushed:>2025-01-01

# Step 3 — find survey/comparison repos (high value for claim extraction)
"agentic" "benchmark" "comparison" in:readme stars:>=200 pushed:>2024-01-01
```

**Example 2 — LLM behavioral enforcement**
```
# Step 1 — most precise topic
topic:llm-guardrails stars:>=100 pushed:>2024-06-01 archived:false

# Step 2 — catch implementations without the tag
"output validation" "guardrails" in:readme language:python stars:>=200 pushed:>2024-01-01

# Step 3 — browse the org once flagship is found
org:guardrails-ai stars:>=100
```

#### Failure modes

| Code | Failure | Recovery |
|------|---------|----------|
| GH-1 | Star inflation (6M suspected fake stars across 18,617 repos — CMU/NCSU/Socket 2024 study) | Check fork:star ratio; check star growth trajectory via star-history.com |
| GH-2 | Default sort is "best match", not stars | Append `sort:stars` to URL or use Sort dropdown |
| GH-3 | Archived repos included by default | Always add `archived:false` |
| GH-4 | `topic:llm-agent` misses `topic:llm-agents` | Search both spellings for every topic variant pair |
| GH-5 | "Awesome list" contamination — top results are curated indexes, not implementations | Add `NOT awesome in:name`; treat awesome-lists as indexes for further discovery, not claim sources |
| GH-6 | README indexing lag — new repos not in `in:readme` search for hours to days | Use topic or name search for newly published repos |
| GH-7 | Launch-day star burst — 500–3,000 stars in 24–48h from a single viral post | Check star history; growth trajectory matters more than raw count |

---

### Web search

#### Core operators with syntax

| Operator | Syntax | Behavior |
|----------|--------|----------|
| `site:` | `site:arxiv.org` | Restrict to domain. Colon must touch operator with no space. |
| `filetype:` | `filetype:pdf` | Filter by extension. Misses HTML-only papers (ACM changed format). |
| `"phrase"` | `"chain of thought"` | Exact phrase match, verbatim. |
| `-exclusion` | `-tutorial -course` | Exclude pages containing that word. |
| `OR` | `agent OR agentic` | Must be uppercase; lowercase `or` is a search term. |
| `intitle:` | `intitle:"survey"` | Page title must contain word. Multi-word: use quotes: `intitle:"multi-agent"`. |
| `allintitle:` | `allintitle:LLM agent benchmark` | Title must contain ALL listed words. |
| `inurl:` | `inurl:arxiv.org/abs` | URL must contain string. |
| `after:` | `after:2023-06-01` | Published after date. Use full YYYY-MM-DD; year-only is unreliable. |
| `before:` | `before:2024-01-01` | Published before date. |

**Critical:** colon must touch the operator (`site:` not `site: `). Double `site:` in one query is broken — Google ignores the second. Use `site:a OR site:b` for multi-domain.

**Operator budget rule:**
- 1–2 operators: safe baseline
- 3: sweet spot for most research tasks
- 4+: only when a simpler query returns confirmed noise
- 7–8+: consistently produces thin/empty results

#### Academic vs. grey-lit query patterns

**Academic (papers, preprints):**
```
"<technique>" (<synonym1> OR <synonym2>) filetype:pdf after:<year>-01-01
```
For arXiv specifically:
```
site:arxiv.org "<technique>" "<domain>" after:<year>-01-01
```

**Grey literature (practitioner blogs, technical reports, white papers):**
```
"<technique>" (site:medium.com OR site:towardsdatascience.com OR site:eugeneyan.com) after:<year>-01-01
```
For company technical reports and white papers:
```
"<technique>" filetype:pdf (site:.io OR site:.ai OR site:.dev) -site:arxiv.org after:<year>-01-01
```

#### Google Scholar vs. web search decision

| Intent | Use | Why |
|--------|-----|-----|
| Does a paper on X exist? | Google Scholar | Widest academic recall (93–96% vs. 35–77% for Scopus/WoS) |
| Most-cited paper on X | Google Scholar | "Cited by" surfacing; citation count in ranking |
| Newest CS/AI preprints | arXiv directly | Preprints before journal publication; category precision |
| Grey literature, practitioner posts | Google web search | Scholar excludes non-academic; web indexes Medium, Substack, etc. |
| Technical reports from companies | Google web search + `filetype:pdf` | Scholar may miss these |
| GitHub repositories | GitHub native search first; `site:github.com` as fallback | GitHub search operates on repo metadata; Google is better at README keyword content |
| Systematic review (documented, reproducible) | Multiple databases | Any single source has coverage gaps; document which databases were searched |

**Finding citing papers in Google Scholar:**
1. Search, click "Cited by N" under a result
2. Resulting page lists all indexed citing papers
3. Filter by year in sidebar; set up citation alerts via envelope icon

#### Worked examples

**Example 1 — Survey papers on tool-using LLMs (academic):**
```
"tool use" OR "tool calling" "large language model" survey filetype:pdf after:2023-01-01
```
Equivalent for Google Scholar (use Advanced Search date filter):
```
"tool use" "LLM" survey
```
Equivalent for arXiv:
```
ti:"tool use" AND cat:cs.AI AND submittedDate:[20230101 TO *]
```

**Example 2 — Practitioner writeups on multi-agent systems (grey literature):**
```
"multi-agent" LLM system (site:medium.com OR site:substack.com OR "blog") -"arxiv" after:2024-01-01
```
Extension to GitHub repos:
```
site:github.com "multi-agent" "LLM" README (orchestration OR workflow) after:2024-01-01
```

#### Failure modes

| Code | Failure | Recovery |
|------|---------|----------|
| WS-1 | Recency bias — search engines promote freshness; foundational older work buried | Run both a recency-bounded query (active literature) AND an undated relevance query (seminal work); compare |
| WS-2 | Exact-phrase brittleness — one phrasing misses entire vocabulary islands | `OR` with 2–3 common phrasings; inspect titles of top results to learn dominant vocabulary |
| WS-3 | Single `site:` misses other key sources | Use `site:a OR site:b` explicitly; run separate queries for different domains |
| WS-4 | Lowercase `or` treated as a search term | Boolean `OR` must be uppercase |
| WS-5 | `intitle:multi-agent` without quotes matches "multi" and "agent" non-adjacently | Quote multi-word intitle terms: `intitle:"multi-agent"` |
| WS-6 | `before:` with year-only format unreliable | Always use full YYYY-MM-DD format |
| WS-7 | Filter bubble (personalization) | Use incognito/private window for discovery queries; reserve authenticated session for access-gating only |
| WS-8 | `filetype:pdf` misses HTML-only papers | A paper existing does not require it to be PDF; accept this as coverage limitation |

---

## Failed-query recovery (cross-source)

### Diagnosis: how to identify why a query failed

Run the diagnostic probe BEFORE reformulating. Each failure mode requires a different fix.

| Failure mode | Signal | Distinguishing test |
|--------------|--------|---------------------|
| Too narrow | <5 results, or all from 1–2 papers citing each other | Remove one qualifier at a time. If removing one term jumps results from <5 to >20: that term was the bottleneck. |
| Too broad | >50 results but <20% relevance density; 5+ application domains in top 10 titles | Count distinct domains in top 10 titles. >5 domains = no discriminating terms. |
| Vocabulary mismatch | Plausible but adjacent results; your terms appear in quotes (being critiqued, not used); closest results use different terminology | Extract vocabulary from the 1–3 closest results. If their terminology differs from your query: vocabulary mismatch, not coverage gap. |
| Source gap | Consistent low yield across multiple reformulations; web search immediately surfaces 5+ relevant blogs/repos/docs | Run same core terms in web search. If web finds relevant content in non-paper formats: the topic lives outside academic literature. |

### Recovery tactic per failure mode

**Too narrow:**
1. Remove the most application-specific term first (domain noun: "biomedical", "legal", "code")
2. If still low yield: remove the method variant; search the parent category
3. If still low yield: switch to vocabulary mismatch protocol below

**Vocabulary mismatch (seed paper method):**
1. Run your intuitive query; take the 1–3 closest results
2. Open each abstract; highlight the noun phrases they use for your concept
3. If phrases cluster (2 of 3 use "faithfulness evaluation"): you found the field term. Rebuild from it.
4. If phrases scatter: find a survey paper in the area (surveys explicitly enumerate terminology)
5. Check Wikipedia "see also" section: often links popularized terms to academic terms

**Source gap — switching sequence:**
```
arXiv → Semantic Scholar → Papers With Code → web search → GitHub search → Google Scholar
```
Apply after 3 reformulations with no improvement.

**Hard cut-off rule:** After 3 reformulations with no improvement and no vocabulary signal from returned papers: one more probe on source-switching, then either (a) declare source gap and switch, or (b) log as "not yet in literature" and move on. Continuing past this has lower expected value than any adjacent angle.

**Proximity trap:** If results are always "almost right" after 5+ reformulations: the topic is too new for literature OR lives at an intersection with no dedicated literature. Switch to decomposition strategy — search each component separately and synthesize.

### Cross-source translation logic

**arXiv → Semantic Scholar:**
- What's lost: category precision (`cat:cs.CL` has no equivalent), date granularity, title-specific search
- What to add: disambiguation terms (Semantic Scholar's broader index pulls cross-domain noise); citation count filter (arXiv has none)
- Translation example:
  - arXiv: `ti:("retrieval augmented generation") cat:cs.CL submittedDate:[20230101 TO 20241231]`
  - Semantic Scholar: `"retrieval augmented generation" "language model"` + `fieldsOfStudy=Computer Science` + `year=2023-2024`

**arXiv → GitHub:**
- Fundamental shift: arXiv finds claims and methods; GitHub finds implementations and tools. These are different artifact types — a successful arXiv query does not translate, it transforms.
- Translation logic: extract the named technique; search GitHub for it in repo names/descriptions; add `implementation` or language name; strip application domain (domain-specific repos are found via topics/READMEs, not query)

**arXiv → Web search:**
- Drop all academic qualifiers (`cs.CL` becomes a literal string)
- Add context terms for non-academic writing: "tutorial", "guide", "how to", or framework name
- For negative results/failures: add "limitations", "problems", "doesn't work"
- Quality proxy: prioritize Distill, Lilian Weng's blog, Sebastian Ruder's blog, official docs, company research pages

**What gets lost in translation:**

| From | To | Primary loss | Primary gain |
|------|----|-------------|--------------|
| arXiv | Semantic Scholar | Category precision, date granularity | Citation counts, cross-field coverage |
| arXiv | GitHub | All field qualifiers, theoretical framing | Implementation artifacts, runnable code |
| arXiv | Web search | Controlled vocabulary, precision | Practical usage, tutorials, informal docs |
| Semantic Scholar | arXiv | Quality filters (no citation count) | Recency, category specificity |
| GitHub | arXiv | — | Theoretical basis for the implementation |

---

## Tool decision matrix

| Research intent | Recommended tool | Rationale |
|-----------------|-----------------|-----------|
| Does a paper on X exist at all? | Google Scholar web | Widest academic recall; fastest spot-check |
| Find the most-cited paper on X | Google Scholar + "Cited by" | Citation-count ranking surfaces high-citation works |
| Find newest preprints on X (CS/AI) | arXiv directly | Preprints appear before journal publication; category precision |
| Systematic retrieval of 100+ papers | Semantic Scholar API (`/paper/search/bulk`) | Structured JSON, up to 10M results, boolean operators, field filters |
| Boolean compound query (AND/OR/NOT) | Semantic Scholar API or arXiv API | Both web UIs lack boolean support |
| Follow citation chains as data | Semantic Scholar API (`/paper/{id}/citations`) | Only tool returning structured citation list; web returns HTML |
| Find active GitHub repositories | GitHub native search | `topic:`, `stars:`, `pushed:`, `archived:` are native GitHub qualifiers; no other tool matches them |
| Find practitioner blog posts and grey lit | Exa.ai (neural mode) or Google web search | Scholar excludes non-academic; Exa handles vocabulary variation; Google for known-exact queries |
| Find papers citing a specific paper | Semantic Scholar API or Google Scholar "Cited by" | Both support; Semantic Scholar gives structured data; Scholar gives HTML |
| Reproducible, documented search strategy | Semantic Scholar API or arXiv API | API query strings are deterministic; web UI state is not reproducible |
| Company technical reports / white papers | Google web search + `filetype:pdf site:.ai` | Scholar may miss these; web search indexes them |
| Semantically-matched grey literature | Exa.ai neural mode | Google requires exact keyword match; Exa handles concept-shaped queries |

---

## API access guide

### Semantic Scholar API

**Endpoint:** `https://api.semanticscholar.org/graph/v1`

**Key endpoints:**
- `/paper/search` — relevance search, max 1,000 results
- `/paper/search/bulk` — up to 10M results, token-based pagination; recommended for any bulk task
- `/paper/search/match` — best-match single result
- `/paper/{id}/citations` — forward citations as structured data
- `/paper/{id}/references` — reference list as structured data
- `/paper/batch` (POST) — multiple paper IDs in one call
- `https://api.semanticscholar.org/datasets/v1` — full corpus snapshots (API key required)

**Auth requirements:**
- No key required: all `/graph/v1/` endpoints accessible; rate limit is shared unauthenticated pool (~100 req/5 min effective)
- API key (free, self-serve at semanticscholar.org): 1 RPS; header `x-api-key: YOUR_KEY`
- Institutional/business email required as of August 2024; free email domains not approved
- Keys pruned after ~60 days inactivity
- Exponential backoff for 429s: `min(2000 * 2^attempt, 20000) + random(0, 250)` ms

**When to use:** Any retrieval task beyond a spot-check. Particularly: compound filters, bulk collection, citation graph traversal, SPECTER2 embeddings for semantic clustering.

### arXiv API

**Endpoint:** `http://export.arxiv.org/api/query`

**Key parameters:**
- `search_query` — field-prefixed boolean query (see arXiv section above)
- `id_list` — comma-delimited arXiv IDs for direct lookup; preferred over `search_query=id:xxx` for precise retrieval
- `start` — pagination offset
- `max_results` — per request; max 2,000; total per query: 30,000
- `sortBy` — `relevance` | `lastUpdatedDate` | `submittedDate`

**Output:** Atom 1.0 XML. Contains title, authors, abstract, arXiv ID, categories, dates, DOI, journal ref.

**Auth requirements:** None. No daily hard cap. 3-second delay between requests requested.

**When to use:** CS/AI preprint-focused queries requiring field-level boolean precision (`ti:`, `abs:`, `cat:`), date-range filtering, or programmatic retrieval up to 30,000 results. Prefer Semantic Scholar when coverage of published (non-preprint) work matters.

### Exa.ai

**Verdict: Use for grey literature and concept-shaped queries. Skip for systematic academic retrieval.**

**Why use:**
- Neural embedding ranking: retrieves semantically matched content when exact keyword is unknown
- `includeDomains` + `excludeDomains` for domain-scoped retrieval
- `category: research_paper` biases toward scholarly content while covering grey lit
- 100M+ research papers + general web in index
- Handles vocabulary variation that forces keyword search to enumerate synonyms manually

**Why skip:**
- Not a Google replacement; Google index is larger for broad coverage
- When you know the exact title, author, or quoted string: keyword search wins or ties
- $7/1,000 requests vs. free for Google; 20,000/month free tier sufficient for research workloads
- Not suitable as the primary tool for systematic reviews requiring documented strategy

**Key parameters:** `includeDomains`, `excludeDomains`, `startPublishedDate`, `endPublishedDate`, `category` (research_paper / news / company / personal_site), `numResults`

**Search modes:** Instant (~200ms), Fast (~450ms), Auto (~1s, default, combines neural + keyword), Deep-lite (~2–10s), Deep (~5–60s)

---

## Adversarial findings — what query construction cannot fix

These are irreducible limitations. Knowing the syntax does not fix them. They should calibrate expectations.

**A1 — Vocabulary mismatch is structural, not correctable by procedure.**
80% of the time, two researchers (including domain experts) name the same concept with different words. An average well-formed query misses 30–40% of relevant documents by design. Synonym lists help partially; they do not close the gap. The vocabulary needed to search a field is produced by reading the field — the procedure cannot shortcut this circularity.

**A2 — Confirmation bias in query design fires automatically, even without intent.**
The framing of a query embeds the researcher's prior beliefs. "Benefits of X" retrieves confirming literature; "limitations of X" retrieves disconfirming literature. Standard query construction procedures (PICO, concept-synonym-Boolean) do not require generating disconfirming vocabulary. A researcher who follows procedure perfectly can produce a search that is structurally incapable of finding disconfirming evidence. Mitigation: force explicit adversarial search arms (search "X failures", "X limitations", "X criticism" as separate mandatory queries).

**A3 — Operator over-specification is invisible.**
Each AND constraint reduces recall. The researcher sees only what was retrieved. They cannot observe what was excluded by narrowing. The Tetzlaff/Sampson studies found that 92.7% of systematic review search strategies contained errors; 78.1% of errors negatively affected recall — and these were not bad researchers ignoring guidance. This error rate did not improve across 13 years (2006→2019) despite significant investment in training and guidelines.

**A4 — Temporal bias: current vocabulary cannot retrieve historical terminology.**
Field vocabulary shifts over decades. "Neural networks" (1980s–1990s), "connectionist models" (1990s), "deep learning" (2010s), "foundation models" (2020s) describe overlapping phenomena. Semantic Scholar's embedding model is trained on contemporary literature — historical papers are poorly represented. arXiv's keyword search cannot match documents that predate the standard vocabulary. Citation chaining fixes this only when the citation graph is connected across the vocabulary shift.

**A5 — The formalization trap: compliance does not produce outcomes.**
Researchers who follow a query construction procedure correctly can still produce a search that misses the majority of relevant literature, is systematically biased, and is not reproducible. The procedure reduces syntax errors; it does not close the vocabulary gap, the confirmation bias, or the temporal bias. The expert advantage in academic search is not procedural — experts are more exploratory and adaptive because they recognize when results are wrong. Recognition requires domain knowledge the procedure cannot supply.

**A6 — Source-specific algorithm biases are external and cannot be corrected by query construction.**
- Google Scholar: citation-count dominance produces popularity-as-relevance; language bias (non-English work systematically de-ranked); opaque ranking algorithm
- Semantic Scholar: confirmed by algorithm audit (arXiv:2311.09969) to return results aligned with embedded query bias; biased queries produce biased result sets
- arXiv: no quality differentiation; recent unvetted preprints appear alongside established work; discipline-selective (covers quantitative fields; does not cover most social sciences)
- GitHub: documentation-biased (README mentions retrieve repos that use a technique peripherally alongside those that implement it); stars reflect social adoption, not research quality

**A7 — The knowledge needed to search well is the knowledge the search is supposed to produce.**
An adequate search requires knowing field vocabulary, disciplinary boundaries, historical terminology, adjacent disciplines, and key researchers — all of which are products of the literature review itself. This is a fundamental property of academic knowledge, not a solvable problem. Guidance can scaffold the search of what you already know; it cannot substitute for domain expertise.

---

## Divergences and contested findings

These are areas where angles disagreed or gave inconsistent signals. Flag for researcher awareness.

**D1 — Semantic Scholar quality-neutrality claim.**
A2 treated Semantic Scholar's ML ranking as a quality-neutral relevance engine with `influentialCitationCount` as a quality proxy. A7 found (citing arXiv:2311.09969) that Semantic Scholar amplifies embedded query bias and produces quality-neutral ranking that mixes peer-reviewed and low-quality work at the same relevance tier. These are not contradictory — A2 describes how the system works; A7 describes how that machinery fails researchers. Resolution: use `minCitationCount` and `influentialCitationCount` filters as quality proxies when using Semantic Scholar API; do not treat default relevance ranking as quality ranking.

**D2 — arXiv category usefulness.**
A1 gave detailed guidance on using `cat:` qualifiers as scoping filters. A7 flagged that category-based search "produces false completeness" because categories are self-reported, inconsistent, and drift over time. These agree that categories should supplement rather than replace keyword queries (both say this explicitly); they disagree on how much trust to extend to category filters as secondary scopes. Resolution: use category filters as exclusion tools (cut clearly irrelevant communities) not inclusion tools (confirm you have found everything in a community). Sample 10–20 results before trusting any category scope.

**D3 — Filter bubble magnitude.**
A4 reported that empirical studies suggest self-imposed selective attention (users ignoring disconfirming results) is often a larger effect than algorithmic personalization, and that the evidence for algorithmic filter bubbles is weaker than commonly assumed. A7 reported that personalization does contribute to confirmation bias. Resolution: both are true — A4 is commenting on the relative magnitude of the effects; A7 is confirming both effects exist. Mitigation (incognito mode for discovery) remains valid but should not be treated as eliminating confirmation bias, which has a larger human behavioral component.

**D4 — Exa.ai coverage claims.**
A6 rated Exa's coverage for grey literature and conceptual queries as HIGH for pricing/operators, MEDIUM for grey-lit coverage claims (based on vendor documentation, not independent testing). This is a confidence limitation rather than a factual dispute. No angle independently tested Exa against academic search. Treat Exa guidance as informed-but-unvalidated; verify against a control query during first use.

---

*Synthesis written to: kit-maker/research_archive/gh-01-synthesis-2026-07-04.md*
*Ready for insertion into research-quality.md — no placeholders, no TBD sections*
