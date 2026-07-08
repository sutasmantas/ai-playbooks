# Semantic Scholar Query Construction Methodology
**Angle:** gh-01-a2 — API and web interface search mechanics for CS/AI research
**Date:** 2026-07-04
**Sources:** Official API docs, AI2 blog technical writeup, FAQ, release notes, coverage studies

---

## 1. Web Interface Search

### What is and is NOT supported

The Semantic Scholar web interface (semanticscholar.org) is a basic keyword search engine with no field prefix operators and no boolean query syntax.

**Explicitly confirmed NOT supported:**
- Field operators: `title:`, `author:`, `abstract:`, `venue:`, `year:` — these do NOT work as inline query prefixes in the web UI
- Boolean operators: AND, OR, NOT — the web UI treats the query as a bag of words
- Wildcards (no wildcard support in web)

**What IS supported:**
- Quoted phrases: `"instruction following"` — treated as exact phrase match
- Case-insensitive queries
- UI-level filters via dropdown menus: field of study, publication date range, venue (clicking venue name links on result pages)
- Sort modes: Relevance (default) | Citation count | Most Influential Papers | Recency

**Important quirk:** Semantic Scholar does NOT expand abbreviations or acronyms. A search for "KDD" will miss papers that only use "knowledge discovery and data mining" in title/abstract, and vice versa. Always search the expanded form for exhaustive results.

### How web relevance ranking works

The web interface uses a two-stage ML ranking pipeline (documented publicly at github.com/allenai/s2search):

1. **Retrieval stage:** Elasticsearch scans ~190M papers and returns top 1,000 candidates.
2. **Reranking stage:** LightGBM model with LambdaRank optimization reranks the 1,000 candidates.

**22 ranking features include:**
- Fraction of query matched in title, abstract, and venue (n-grams up to length 7)
- Log probability scores across text fields
- Citation count
- Paper age (model learned recency preference implicitly)
- Author name matching (distinguishes last name vs first name matches)
- Percentage of query left unmatched (penalizes incomplete coverage)

**Posthoc rule corrections applied after ML ranking:**
- Author-only queries: papers by that author boosted to top
- Exact year matches: get priority boost
- Quoted phrases: boosted over unquoted keyword scatter

The s2search model is open source. A/B testing showed the current model increased clicks by 8% and improved reciprocal rank of clicked results by 9%, with most gains at positions 2–3.

---

## 2. Semantic Scholar API (api.semanticscholar.org)

### Base URL and core endpoints

| Service | Base URL |
|---|---|
| Academic Graph (primary) | `https://api.semanticscholar.org/graph/v1` |
| Recommendations | `https://api.semanticscholar.org/recommendations/v1` |
| Datasets (bulk download) | `https://api.semanticscholar.org/datasets/v1` |

**Key paper search endpoints:**

| Endpoint | Method | Max results | Pagination |
|---|---|---|---|
| `/paper/search` | GET | 1,000 | offset + limit |
| `/paper/search/bulk` | POST | 10,000,000 | token-based |
| `/paper/search/match` | GET | 1 (best match) | none |

Relevance search `/paper/search` is the default; bulk search is better for exhaustive collection + sorting.

### Query syntax (API only — not available in web UI)

The API query string supports a richer syntax than the web interface:

| Operator | Syntax | Meaning |
|---|---|---|
| Phrase | `"exact phrase"` | Require exact word sequence |
| AND | `+term` | Term must appear |
| NOT | `-term` | Term must not appear |
| OR | `term1 \| term2` | Either term |
| Wildcard prefix | `fish*` | Matches "fishtank", "fishes", "fishy" |
| Fuzzy | `bugs~3` | Matches within edit distance 3 |
| Proximity | `"blue lake"~3` | Phrase with up to 3 intervening terms |

**Worked examples from official docs:**
```
((cloud computing) | virtualization) +security -privacy
"red blood cell" + artificial intelligence
fish*
bugs~3
```

**Important:** These operators apply only in the `query` parameter of the API. The web interface ignores them entirely.

**What queries match against:** Keywords in query are matched against words in the paper's **title and abstract only**. There are no per-field inline query operators (no `title:foo abstract:bar` syntax). Field-specific filtering is done via separate URL parameters, not inline in the query string.

### Filter parameters (separate from query string)

These are URL parameters that restrict the result set independently of the text query:

| Parameter | Values / Syntax | Notes |
|---|---|---|
| `year` | `"2022-"` or `"2018-2023"` | Filter by publication year range |
| `publicationDateOrYear` | `"2023-01-01:"` | Finer date granularity |
| `fieldsOfStudy` | `"Computer Science"` | 23 disciplines; key values: Computer Science, Mathematics, Engineering, Physics, Economics, Psychology |
| `venue` | `"NeurIPS,ICML,ICLR"` | Comma-separated venue names (normalization inconsistent — see §6) |
| `minCitationCount` | integer | e.g., `5` to exclude uncited noise |
| `openAccessPdf` | (presence of param) | Filter to open access papers only |
| `publicationTypes` | `"JournalArticle"`, `"Conference"`, etc. | Restrict by article type |

### Fields parameter

Controls what fields are returned. Comma-separated, no spaces. Over-requesting slows responses.

Recommended bundles:
- Search results: `title,year,venue,authors,url,openAccessPdf`
- Analysis: `abstract,citationCount,influentialCitationCount,publicationDate,fieldsOfStudy`
- Graph traversal: `references,citations,fieldsOfStudy`

Available fields include: `title`, `abstract`, `year`, `venue`, `authors`, `citationCount`, `referenceCount`, `influentialCitationCount`, `publicationDate`, `fieldsOfStudy`, `externalIds`, `openAccessPdf`, `url`, `references`, `citations`.

### Pagination

**Relevance search** (`/paper/search`):
- Parameters: `offset` (starting position), `limit` (page size, max typically 100)
- Hard cap: 1,000 total results (offset + limit <= 1,000). Reduced from 10,000 in October 2023.

**Bulk search** (`/paper/search/bulk`):
- Parameters: `token` (returned in response, pass in next request)
- Up to 10,000,000 results, 1,000 per page
- Supports sorting by publication date or citation count (relevance search does not)

### API key: what requires it vs. open access

**Without API key (unauthenticated):**
- All `/graph/v1/` endpoints are accessible
- Rate limit: 5,000 requests per 5 minutes, **shared pool across all unauthenticated users** — in practice, much lower effective rate during peak hours
- Practical rate: approximately 100 requests per 5 minutes observed in practice

**With API key:**
- Rate limit: 1 RPS across all endpoints (introductory rate)
- Some accounts granted slightly higher rate after review
- API key sent as header: `x-api-key: YOUR_KEY`
- Key applied via registration at semanticscholar.org; no longer approved from free email domains (August 2024 policy)
- Keys pruned after ~60 days of inactivity (November 2024 policy)

**Endpoints that require API key:** None strictly require it, but unauthenticated access is severely rate-limited in a shared pool. For any systematic work, having a key is essential for reliability.

**Springer abstracts:** Not available via API due to licensing agreement. Papers indexed, but abstract field will be empty for Springer publications.

---

## 3. Web Interface vs. API: When Each Gives Meaningfully Better Results

### When web interface is sufficient

- Quick spot-check: "does a paper on X exist at all?"
- Exploratory browsing to understand a topic space before committing to systematic search
- When you want TLDR summaries, Semantic Reader, or inline citation cards (these are web-only features)
- When you're doing author-level discovery (clicking through paper lists on an author page)
- Single-concept lookups where result set is small (<50 papers expected)

### When the API gives meaningfully better results

| Use case | Why API wins |
|---|---|
| Combining text + year + citationCount + fieldsOfStudy | Web UI can only do one filter at a time; API chains all four |
| Boolean compound queries | Web treats words as independent; API supports +/\|/- syntax |
| Bulk result collection (>100 papers) | Web pagination is manual; API can paginate 10M results |
| Reproducible search (same query = same results) | API query strings are deterministic; web UI state is not |
| Filtering by minCitationCount | No equivalent in web UI |
| Sorting by citation count across full result set | Web sort applies to the already-retrieved first page only |
| Programmatic downstream analysis | API returns structured JSON directly |

**Key insight from the AI2 technical blog:** The underlying retrieval and ranking machinery is the same for both web and API. The API does not have a better index or better ranking model. The API wins purely on the ability to compose multiple constraints in a single request and to retrieve large result sets programmatically.

---

## 4. Practical Query Patterns for Kit-Maker Topics

### Pattern 1: Narrow AI agent topic

Use case: Find papers specifically on LLM agents using external tools for planning tasks.

**API query:**
```
GET /graph/v1/paper/search?query="LLM agent" + "tool use" + planning
  &fields=title,year,venue,citationCount,influentialCitationCount,abstract
  &year=2022-
  &fieldsOfStudy=Computer Science
  &minCitationCount=3
  &limit=50
```

Alternatively with bulk endpoint for sorting:
```
POST /graph/v1/paper/search/bulk
  query: "tool-augmented language model" | "LLM agent" + planning
  sort: citationCount:desc
  year: 2022-
  fieldsOfStudy: Computer Science
```

**Rationale:** minCitationCount=3 removes noise (preprints with 0 citations that match by accident). Year=2022- because the agent tool-use literature crystallized around the ReAct paper (2022). Phrase quotes on "tool use" prevent spurious matches on "computer vision tools" etc.

### Pattern 2: Broad ML topic scoped to recent seminal work

Use case: Find the foundational transformer attention papers, but not the flood of downstream applications.

**API query:**
```
GET /graph/v1/paper/search?query="attention mechanism" + transformer
  &fields=title,year,venue,citationCount,influentialCitationCount
  &year=2017-2022
  &fieldsOfStudy=Computer Science
  &minCitationCount=500
  &limit=20
```

**Rationale:** Year cap at 2022 combined with minCitationCount=500 selects only papers that had time to accumulate citations — filters out noise without missing seminal work. Lower minCitationCount would return thousands of low-signal papers.

### Pattern 3: Narrow methodology topic with vocabulary fragmentation

Use case: Find papers on AI behavioral compliance and instruction-following (topic that uses multiple vocabulary islands).

**Approach — run 3 separate API queries and union results:**

Query A: `"instruction following" + "large language model"`
Query B: `"behavioral compliance" + "AI agent" | "language model"`
Query C: `"rule following" + "LLM" + alignment`

All with: `year=2021-, fieldsOfStudy=Computer Science, minCitationCount=5`

**Rationale:** This topic sits at the intersection of RLHF alignment, agent behavior, and system prompt design — each sub-community uses different vocabulary. A single query will create a vocabulary island; three queries with union deduplication by paperId gives better coverage. This pattern applies to most kit-maker research topics, which tend to span multiple community vocabularies.

### Narrow vs. broad query decision rule

| Topic type | Strategy |
|---|---|
| Narrow + single community vocabulary | Single precise query + phrase operators + minCitationCount |
| Narrow + multiple vocabulary islands | Multiple targeted queries, union by paperId |
| Broad topic (explore landscape) | Single broad query, sort by influentialCitationCount desc, sample top 20 |
| Venue-specific (e.g., only NeurIPS) | venue parameter with bulk search; but expect normalization errors (see §6) |

---

## 5. Result Quality Signals

### Signals of a high-quality result set

- **Citation distribution is coherent:** Papers cluster around a reasonable citationCount range for the age and topic. A 2022 paper on transformers with 0 citations is noise; with 200+ is a real contribution.
- **influentialCitationCount > 0 on top results:** Semantic Scholar's influential citation classifier (ML-based, uses PageRank + per-section citation context) is a stronger signal than raw citationCount. If the top 10 results have influentialCitationCount=0, the query may be too narrow or fringe.
- **Venue spread matches community:** CS/AI results should show NeurIPS, ICML, ICLR, ACL, EMNLP, arXiv — a result set showing only obscure venues is a red flag.
- **Abstract snippets directly address query:** Spot-check 5 abstracts. If they address the topic from the correct angle (not just sharing surface vocabulary), the query is well-targeted.
- **Few or no 0-year papers:** Papers with year=None or year=0 in results indicate indexing quality issues and should be filtered out.
- **Query term coverage in titles:** In a high-quality result set, most titles should contain at least one query term or its synonym. If titles look only tangentially related, the query has vocabulary mismatch.

### Signals of a superficially large but low-quality result set

- High total count (e.g., 50,000+) with rapid drop in relevance after the first 10-20 results
- CitationCount=0 on more than ~30% of results (when minCitationCount filter not applied)
- Venue field shows "nan", null, or empty strings across many results
- Same paper appears multiple times with different paperIds (deduplication failure)
- Results dominated by survey papers that merely mention the topic

### Practical calibration check

After the first query, retrieve `totalResults` count and spot-check offset=0 vs offset=50 vs offset=200. If relevance degrades severely by offset=50, the result set is shallow. A robust query maintains relevance through at least the first 100 results.

---

## 6. Known Failure Modes

### F1: No field prefix operators (web or API)

`title:attention` does NOT work in Semantic Scholar's query string, unlike Google Scholar. There is no inline per-field syntax. Attempting `title:"attention mechanism"` returns results as if the query were just `"attention mechanism"` — the `title:` prefix is treated as a literal word or ignored.

**Mitigation:** Use separate filter parameters (`venue=`, `year=`) for structured filtering; keep the query string to text matching only.

### F2: Web interface boolean blindspot

The web interface ignores boolean operators entirely. A query like `transformers AND NOT "vision transformers"` is treated as a bag of words: `transformers AND NOT vision transformers`. The NOT and AND keywords become search terms.

**Mitigation:** Use the API for any compound query. There is no workaround in the web UI.

### F3: Conference paper indexing lag and gaps

A 2024 study of major AI/ML conferences found thousands of verified main-conference papers missing from Semantic Scholar API responses:
- Over 21,000 official conference papers missing across AAAI, NeurIPS, ICLR, ICML in tested years
- Discrepancies present in **every venue and year** tested
- Gap grows substantially with conference size and recency
- 2024–2025 papers are especially incomplete due to indexing lag

**Root causes identified:**
- Web accessibility and robot exclusion policies (39%–46% of missing papers)
- Semantic Scholar's internal criteria that exclude secondary content (6%–11%)
- Indexing lag for very recent proceedings

**Mitigation:** For conference-specific exhaustive search, cross-check with the conference's own proceedings page (ACL Anthology for NLP, OpenReview for NeurIPS/ICLR). For 2024+ papers, expect gaps.

### F4: Venue normalization inconsistency

The venue filter and venue field in results suffer from inconsistent naming. The same conference appears as "NeurIPS", "Neural Information Processing Systems", "Advances in Neural Information Processing Systems", "neurips", etc.

**Mitigation:** When filtering by venue, test several name variants. When collecting results, normalize venue strings client-side before grouping.

### F5: Acronym blindspot

Semantic Scholar does NOT expand acronyms. Searching "RLHF" will miss papers that never use that abbreviation in title/abstract and only say "reinforcement learning from human feedback."

**Mitigation:** Run both the acronym and the expanded form as separate queries, then union by paperId. Apply especially to: RLHF, CoT (chain of thought), RAG (retrieval-augmented generation), MoE, SFT, DPO, etc.

### F6: Max 1,000 results cap on relevance search

Since October 2023, the relevance search endpoint caps at 1,000 total results (offset + limit). Previously 10,000. This means for broad queries (e.g., "machine learning"), you cannot page through more than 1,000 results with this endpoint.

**Mitigation:** For broad topic sweeps requiring more than 1,000 results, use the bulk search endpoint (`/paper/search/bulk`), which supports up to 10M results with token-based pagination.

### F7: Springer abstracts blocked

Springer publications appear in results with metadata but the `abstract` field is empty due to a licensing restriction. This affects a non-trivial portion of CS conference proceedings that Springer publishes (LNCS series, ECML, ECAI, etc.).

**Mitigation:** When abstract is empty, fetch directly from the paper's DOI or arXiv ID if available.

### F8: Word-based ranking fails for narrow concept queries

The AI2 team explicitly documented that their ML ranking model can fail on "hard queries" where the relevant concept requires semantic understanding beyond n-gram matching. A query for a specific research method (e.g., "committee machine Monte Carlo") may return unrelated papers that happen to share individual words.

**Mitigation:** Use phrase operators (quoted strings) aggressively for narrow technical terms. Apply minCitationCount to reduce noise. Combine with fieldsOfStudy filter to narrow the candidate pool before ranking.

### F9: Author disambiguation errors

Semantic Scholar's author entity resolution merges papers from different researchers with the same name and splits papers from the same author across different entities when name varies (initials vs full name).

**Mitigation:** When doing author-based research (searching for a specific researcher's output), use the author search endpoint and verify by checking their institutional affiliation + paper list manually. Do not rely on author name matching in the paper search `query` parameter for precision.

### F10: Rate limit exhaustion in shared unauthenticated pool

Without an API key, the rate limit is shared across all anonymous users. During peak usage, this effectively means much lower than the theoretical 5,000 requests/5 minutes. HTTP 429 responses are frequent.

**Mitigation:** Always register for an API key before running any systematic search. Implement exponential backoff with jitter (documented recommended: `min(2000 * 2^attempt, 20000) + random(0, 250)` ms). Note: as of August 2024, API keys are no longer approved from free email domains (gmail, hotmail, etc.) — use institutional or business email.

---

## Summary Table: Web Interface vs. API Decision Matrix

| Need | Web UI | API |
|---|---|---|
| Quick exploratory search | Yes | Overkill |
| Boolean compound queries | No | Yes |
| minCitationCount filter | No | Yes |
| Bulk retrieval (>100 papers) | No | Yes |
| Reproducible query | No | Yes |
| TLDR summaries / PDF viewer | Yes (only) | No |
| Multiple combined filters | No | Yes |
| Sort by citation count across full set | Partial | Yes |
| JSON output for downstream processing | No | Yes |
| Finding a specific known paper | Yes (title search) | Yes |

---

```
saturation_verdict:
  status: SATURATED
  rounds: 4
  new_results_last_round: 0
  coverage_assessment: >
    All six requested dimensions covered with primary sources (official API docs,
    AI2 technical blog, FAQ, release notes changelog, coverage study).
    Key gaps: could not access the paywalled JASIST coverage study (doi.org/10.1002/asi.24839)
    directly — used findings from its public abstract and citations.
    Bulk search endpoint parameter exhaustiveness is based on official tutorial page;
    there may be undocumented parameters in the full OpenAPI spec.
  confidence: high
  gaps_remaining:
    - Full OpenAPI spec parameter list not fetched (api.semanticscholar.org/api-docs/ returned
      minimal content; full Swagger spec may have additional filter parameters)
    - Exact fieldsOfStudy enum values not verified exhaustively (23 disciplines confirmed,
      full list not extracted)
    - Bulk search sort parameter syntax not confirmed with a live example
```
