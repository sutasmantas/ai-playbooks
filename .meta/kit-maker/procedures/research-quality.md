# Procedure: Per-Angle Research Quality

**Use when:** defining research angles and dispatching research agents.

**Why this exists:** An angle list ensures broad coverage but says nothing about depth per angle. A research agent given a vague topic title will run one generic search and return whatever shows up first. The book research pipeline (validated, in use) shows the structural fix: each angle has multiple specific queries, claims are classified by evidence strength, only empirical claims go through adversarial verification, and saturation is checked per-angle through query convergence.

---

## Angle format

Each angle in the angle list is NOT just a title. It has:

```
Title: [descriptive name of what this angle covers]
Queries: [4-5 specific search queries — each targeting a different entry point]
```

**Why multiple queries per angle?** One generic query hits the highest-visibility source. Five specific queries hit: the foundational paper, the meta-analysis, the practitioner critique, the contradicting study, the computational replication. Together they produce triangulation. Separately they each miss the others.

**Step 0 — Pre-search vocabulary-frame enumeration (required before writing queries):**

Before writing any queries, name the research traditions that study this phenomenon. The same phenomenon receives different names across fields; a single-vocabulary search leaves ~10% of relevant literature permanently unreachable (`cris-golden-gap-418pct`, HIGH confidence).

Format:
```
Phenomenon: [what the angle is really about]
Research traditions that study this:
- [Field A]: vocabulary [term1, term2, term3]
- [Field B]: vocabulary [term1, term2, term3]
- [Field C]: vocabulary [term1, term2]
Planned query coverage: [which traditions will be covered by which query]
```

**Term-count guidance (`pico-vs-spider-sensitivity-precision-tradeoff`, HIGH confidence, PCR-170):** Limit vocabulary to **3–5 terms per tradition**. Exhaustive synonym lists collapse search precision — PICO-style broad enumeration can produce 23,758 hits with 0.10–1.04% specificity, making the result unworkable. Choose discriminating terms (terms that appear in titles/abstracts when the phenomenon IS present and rarely otherwise) rather than exhaustive synonyms. If you cannot select fewer than 8 terms without feeling you're missing something: that is a signal of tradition overlap or polysemy, not genuine intra-tradition breadth — split the tradition or add a disambiguation qualifier instead.

**Disambiguation qualifier (`pico-vs-spider-sensitivity-precision-tradeoff`, HIGH confidence, PCR-170):** For any term that has a common meaning outside your research domain, add a disambiguation note inline: `[term] (NOTE: disambiguate from [non-research use] — pair with [qualifier] in queries)`. Example: "qualitative (NOTE: disambiguate from data-quality/metrics use in engineering contexts — pair with 'research methods', 'interview', 'thematic', or 'grounded theory' to filter out measurement-quality results)." This is the SPIDER polysemy failure mode: the term "qualitative" yields mixed results across qualitative research and data-quality assessment without a qualifier, reducing effective precision by a factor of 100.

If you can only name one research tradition: that is itself a signal — the angle may be narrower than assumed, or you may have frame lock already. Before proceeding: perform a deliberate cross-disciplinary search for the phenomenon in at least two adjacent fields (e.g., psychology, sociology, engineering, medicine, organizational behavior) to check whether a different vocabulary exists for the same underlying phenomenon. If after that check you find no second tradition: document explicitly ("Verified: only one tradition after checking [fields X, Y]") and proceed. Single-tradition angles have higher frame-lock risk — a verified null result from a cross-tradition check is valid evidence; skipping the check and accepting single-tradition without verification is the frame-lock failure mode.

**What makes a good set of queries for one angle:**
- Query 1: the core claim or foundational paper (specific authors, year, title fragment)
- Query 2: meta-analyses or systematic reviews on this topic
- Query 3: **adversarial (required)** — two components, both required:
  - **(a) External critique search:** search for failures, critiques, null results, and contradicting evidence. Phrase as "X fails because...", "critique of X", "X null result replication." The gold standard is a source that has already done rigorous argumentative work against the claim — find it if it exists.
  - **(b) Adversarial subagent (regardless of search results):** After completing component (a), dispatch an adversarial subagent to construct the counter-case. The subagent must NOT see the confirmatory results from Q1, Q2, or Q3a — it receives only the claim being investigated.

    Dispatch with:
    ```
    System prompt: "You are a skeptic. Make the STRONGEST possible case that the 
    following claim is false or misleading. Do not hedge. Do not balance.
    Identify: the weakest assumption, the most threatening alternative explanation, 
    the conditions under which this claim breaks, the measurement artifacts or 
    confounds that could explain the finding without the claimed mechanism.
    If external critics were found [paste Q3a results if any], amplify their 
    strongest point. If not, derive the opposition from first principles.
    If you cannot construct a credible counter-argument: state specifically what 
    makes this hard to refute — 'no one disagrees' is not an acceptable answer."

    Input: the claim in one sentence. Q3a external critics (if found). Nothing else.
    ```

    Add subagent output to the saturation log as the Q3b entry. Do not filter or soften it before logging — the unfiltered counter-case is the input to synthesis.

    **Why a subagent:** The main research agent has read confirmatory results from Q1 and Q2 before reaching Q3b. Same-agent self-argumentation under explicit instruction does not escape the anchoring effect of those prior reads — the agent produces counter-hypothesis-shaped output that remains consistent with the priors it already holds (B12, B2 — see subagent-task-mapping-2026-07-03.md CONVERT-4). A fresh adversarial subagent with no confirmatory context is not anchored to the finding it is challenging.

  - If neither component returns anything meaningful: document in null results — still a valid output. Do not skip this query.
- Query 4: practitioner/applied version of the finding (how it shows up in real use)
- Query 5: computational or quantitative study measuring the phenomenon
- **Grey literature leg (required):** At least one query per angle must target grey literature — arXiv, GitHub, preprint servers, technical reports, or practitioner blogs. Label it as "(grey-lit)" in the saturation log. If the angle is in a domain with no meaningful grey literature, document this as the rationale for skipping.
- **Alternative vocabulary tradition (required):** At least one query must use vocabulary from a different research tradition than Query 1 used. This is Category D — not a synonym, a different discipline's framing of the same phenomenon. If LLM-generated synonyms are used: explicitly check whether any come from a different discipline vs. the dominant frame (`llm-query-expansion-failure-modes-sigir2025`, HIGH — LLMs resolve ambiguity by picking one frame and expanding within it). If all synonyms are from the same tradition: replace at least one with a deliberately cross-disciplinary term.

- **Follow-up queries (berrypicking):** If query 1 or 2 returns ≥3 new claim keys, allow up to 3 additional follow-up queries using terminology, authors, or concepts surfaced in those results. Label as "(follow-up)" in the saturation log. Rationale: pre-specifying all queries before retrieval prevents discovery of unknown-at-outset vocabulary — each retrieved result reshapes the mental model of the domain (`berrypicking-evolving-query`, HIGH, Bates 1989, 3,187 citations). 78.1% of search errors affect recall (invisible), not precision (filterable) — follow-up queries are the primary recovery mechanism for unknown vocabulary gaps (`recall-bias-most-common-error`, HIGH). Scope: most valuable when domain vocabulary is partially unknown at outset; less valuable for named-entity lookups.

**Evidence basis for adversarial query requirement:** Confirmatory search reinforces wrong AI outputs (scalable oversight study, medium confidence) — verifiers who search to "check" a claim retrieve confirming evidence and feel successful. Requiring an adversarial query as Query 3 counteracts this before the verify pass runs.

**Evidence basis for grey literature leg:** 63–100% of unpublished studies were never submitted to journals (Dwan et al., high confidence). Published-only searches over-represent positive findings by ~3x in biomedical domains. A grey literature leg is the primary structural mitigation.

Example — angle "Suspense and probability of success":
```
Queries:
- "Comisky Bryant suspense probability peril manipulation experiment"
- "meta-analysis suspense outcome uncertainty probability narrative"
- "suspense replication failures anomalous suspense Gerrig paradox"
- "writer craft techniques suspense near-impossible odds protagonist survival"
- "computational model suspense probability Dramatis O'Neill Riedl AAAI"
```

---

## Source strategy

**Minimum viable search per angle:** Semantic Scholar + arXiv direct search. These are two structurally distinct source types — different ingest policies, different coverage footprints. Their non-overlapping portion is structural, not accidental.

**Why two is the minimum (HIGH confidence, `multi-database-minimum-two-for-95-percent-recall`):** Single-database searches achieve only 52–79% recall. Adding a second structurally distinct source raises recall to 95%+; 16% of relevant references exist in only one database. "Two distinct sources" means structurally distinct ingest policies — two queries in Google Scholar are not two sources.

**Recommended pair for CS/AI research:**
- **Semantic Scholar** — filtered CS/AI index; precision tool; influential-citation ranking surfaces landmark papers early; use field-level queries; supplement with arXiv because influence-ranking buries recent low-citation preprints
- **arXiv (cat:cs.LG / cat:cs.CL / cat:cs.AI / cat:cs.MA)** — highest-velocity for agent research; no influence re-ranking, so surfaces recent work Semantic Scholar misses; use `abs:` field qualifier for precision. Field qualifier guidance (VALIDATED by GH-01-A1, 2026-07-04): `abs:` searches the abstract (precision ↑, recall ↓ — preferred for most angles); `ti:` searches title only (highest precision, lowest recall — use only for highly specific named concepts or known paper titles); `all:` includes full text (recall ↑, noise ↑ — use only for rare/distinctive vocabulary not typically in abstracts). Default to `abs:` unless the query is about a named entity that appears in titles specifically. **Category note:** prefer `OR` across cs.LG, cs.CL, cs.AI — do not rely on cs.AI alone (see per-source guide below).

**Source calibration:**

| Source | Use for | Do NOT use for |
|--------|---------|----------------|
| Semantic Scholar | CS/AI primary search; citation-network exploration | Exhaustive recall — influence-ranking buries recent/low-citation work |
| arXiv (cs.LG / cs.CL / cs.MA / cs.AI) | Recent preprints; low-citation but high-relevance work | Anything outside CS/bio/NLP. **Category warning:** `cs.AI` is classical AI (planning formalisms, theorem proving) — misleadingly named; it MISSES the majority of LLM/agent papers. Primary categories for LLM and agent research: `cs.LG` + `cs.CL`. Use `cat:cs.AI OR cat:cs.LG OR cat:cs.CL` for breadth; do not use `cat:cs.AI` alone (GH-01-A1, 2026-07-04). |
| Google Scholar | Scoping; looking up a known paper's URL | ANY systematic angle — 1,000-result cap, opaque indexing, not reproducible (HIGH confidence, `google-scholar-not-adequate-alone-for-systematic-search`); index instability — coverage can silently degrade when publishers change hosting or block GS crawler, causing entire journal backlogs to disappear without warning (HIGH confidence, `google-scholar-coverage-fluctuation-instability`); treat any GS corpus query as a time-specific snapshot, re-verify important queries across sessions |
| HN / Reddit | Discovery only — finding authors, repos, linked blog posts | Quality assessment — upvote counts ≠ quality; early-vote anchoring creates rich-get-richer dynamics (HIGH confidence, `hn-reddit-popularity-quality-decoupling`). Evaluate the LINKED sources, not the post scores |
| LessWrong / Alignment Forum | Theoretical framing of agent behavior, goal-directedness | Treating individual posts as above anecdote-level evidence without corroborating cross-citation |
| Anna's Archive | Paywalled textbooks (cognitive architectures, planning); pre-2022 papers | Recent AI research — Sci-Hub acquisition stopped ~2022; arXiv is better for open-access papers |
| GitHub code search | Grounding patterns in real implementations; finding real prompt templates and agent loops | Documentation retrieval; 100-result cap requires narrow (repo- or language-scoped) queries |

**Grey literature quality filter (Garousi et al. MLR criteria):** Any grey-lit claim must pass the authority + methodology + impact trifecta: (a) author has named expertise, (b) there is a described process rather than pure opinion, (c) community recognition exists (citations, karma, cross-links). Vendor marketing blogs fail (a+b) regardless of traffic — exclude them.

---

## Per-source query construction guide

*GH-01 research (2026-07-04), 7-angle synthesis. All sections ready for direct use.*

**Calibration note (adversarial finding — do not skip):** Query construction guidance reduces syntax errors; it does not close vocabulary mismatch, confirmation bias, or temporal bias. 92.7% of systematic review search strategies contain errors; this rate did not improve across 13 years (2006→2019) despite significant investment in training (Tetzlaff/Sampson). The expert advantage in academic search is not procedural — experts recognize when results are wrong. These guides scaffold the parts that are mechanical. They cannot substitute for domain knowledge.

**Structural baseline failure mode:** Vocabulary mismatch — 80% of the time, two researchers name the same concept with different words (Sparck Jones 1972, replicated). An average well-formed query misses 30–40% of relevant documents due to vocabulary divergence alone. This is not a correctable mistake; it is a property of language. Mitigation: run multiple synonym-targeted queries per vocabulary island and union results.

**Operator budget rule (applies to all sources):** 1–2 operators = safe; 3 = sweet spot; 4+ = reserve for confirmed over-broad results; 7–8+ = consistently thin or empty results. Each AND constraint reduces the candidate set multiplicatively; results cannot reveal what was excluded.

**Acronym rule (applies to arXiv and Semantic Scholar):** Neither auto-expands acronyms. Always OR the abbreviation with the spelled-out form: `(LLM OR "large language model")`, `(CoT OR "chain of thought")`, `(RAG OR "retrieval augmented generation")`.

---

### arXiv — query construction

#### Field qualifiers

| Prefix | Searches | Best use |
|--------|----------|----------|
| `ti:` | Title only | High precision; authors choose titles deliberately. Use when term is likely in the title. |
| `abs:` | Abstract only | Covers methodology vocabulary. **Default for most angles.** |
| `all:` | Title + abstract + author + comments | Broadest net. Use only when a term is so obscure that any appearance is a positive signal. |
| `cat:` | Subject category | Scoping filter, not primary axis. Apply AFTER a working keyword query. |
| `au:` | Author name | Researcher tracking only. Always quote: `au:"smith, j"`. |
| `submittedDate:` | Submission date | Range: `[YYYYMMDDTTTT TO YYYYMMDDTTTT]` in 24-hour GMT. |

**Prefer `abs:` for most angles. OR `ti:` with `abs:` to catch both without requiring either:**
```
(ti:"instruction following" OR abs:"instruction following")
```

**Boolean operators:**
- `AND` — both required; higher precedence than OR
- `OR` — either condition; lower precedence than AND
- `ANDNOT` — NOT alone produces undefined behavior; only `ANDNOT` is documented
- Grouping: `(...)` — URL-encode as `%28`/`%29` in API calls; use directly in web UI

**Category codes for LLM/agent research:**
- `cs.LG` + `cs.CL` = primary venues for LLM/agent work
- `cs.AI` = classical AI (planning formalisms) — misleadingly named, MISSES most LLM papers
- Use: `cat:cs.AI OR cat:cs.LG OR cat:cs.CL` for broad coverage

**Worked example — LLM agent planning:**
```
# Naive (returns thousands of loosely related results):
all:LLM agent planning

# Improved:
(ti:"LLM agent" OR ti:"language model agent" OR ti:"LLM-based agent") AND
(abs:planning OR abs:"task planning" OR abs:"action planning") AND
(cat:cs.AI OR cat:cs.LG OR cat:cs.CL)
```

**Worked example — behavioral compliance (fragmented vocabulary):**
```
# Naive returns near-zero — "behavioral compliance" is not a term of art in ML:
all:"behavioral compliance" LLM

# Improved (uses actual literature vocabulary):
(ti:"instruction following" OR ti:"instruction adherence" OR ti:"rule following") AND
(abs:LLM OR abs:"language model") AND cat:cs.CL
```

**Failure modes and recovery:**

| Code | Failure | Recovery |
|------|---------|----------|
| FM-1 | Vocabulary mismatch | Find one relevant paper, extract its vocabulary, rebuild |
| FM-2 | Acronym inconsistency | Always OR abbreviation with spelled-out form |
| FM-3 | `cat:cs.AI` alone misses LLM work | OR across cs.AI, cs.LG, cs.CL |
| FM-4 | Over-quoted phrases | Quote only 2–3 word anchors |
| FM-5 | AND-heavy query | Run with 2–3 core terms first; add AND only if >500 results |
| FM-6 | Category drift | Sample 10–20 results before trusting a category filter |

---

### Semantic Scholar — query construction

**Web interface:** No field prefix operators, no boolean support. Bag-of-words only.

**API query string operators** (work ONLY in API, ignored by web UI):

| Operator | Syntax | Example |
|----------|--------|---------|
| Phrase | `"exact phrase"` | `"instruction following"` |
| AND (must include) | `+term` | `+"LLM agent"` |
| NOT (must exclude) | `-term` | `-survey` |
| OR | `term1 \| term2` | `"tool use" \| "tool calling"` |
| Wildcard | `term*` | `retriev*` |
| Fuzzy | `term~N` | `agent~2` |

**Structured filter parameters** (URL params, not query string):
- `year=2022-` — publication year range
- `fieldsOfStudy=Computer Science` — discipline filter
- `minCitationCount=5` — quality proxy; removes uncited noise
- `openAccessPdf` — open-access only

**API vs web — decision rule:**

Use **web interface** when: quick spot-check, exploratory browsing, TLDR summaries needed, single concept with <50 papers expected.

Use **API** when ANY of these: retrieving >20–30 papers, compound filters needed, boolean query required, building a reproducible corpus, sorting by citation across full result set, following citation chains as data.

**API endpoints:**
- `/graph/v1/paper/search` — relevance search, max 1,000 results
- `/graph/v1/paper/search/bulk` — up to 10M results; use for any bulk task
- `/graph/v1/paper/{id}/citations` — forward citations as structured data
- `/graph/v1/paper/{id}/references` — reference list

**Auth:** Free key (1-min self-registration); institutional/business email required (free email domains rejected as of Aug 2024). Rate: 1 RPS with key, ~100 req/5 min without.

**Worked example — fragmented vocabulary (union approach):**
```
# Run 3 queries, union results by paperId:
Query A: "instruction following" + "large language model"
Query B: "behavioral compliance" + ("AI agent" | "language model")
Query C: "rule following" + LLM + alignment
# All with: year=2021-, fieldsOfStudy=Computer Science, minCitationCount=5
```

**Failure modes:**

| Code | Failure | Recovery |
|------|---------|----------|
| F1 | No field prefix operators in web UI | Use API for field-specific narrowing |
| F2 | Web UI ignores boolean | Use API; no workaround in web UI |
| F3 | Conference paper gaps (21k+ official papers missing per study) | Cross-check ACL Anthology (NLP), OpenReview (NeurIPS/ICLR) |
| F4 | Venue normalization inconsistency | Test multiple venue name variants |
| F5 | No acronym expansion | Run both forms as separate queries; union by paperId |
| F6 | 1,000-result cap on relevance search | Use `/paper/search/bulk` |

---

### GitHub — query construction

**Scoping operators:**

| Operator | Searches | Note |
|----------|----------|------|
| `in:name` | Repo name | Most precise |
| `in:description` | Description | Catches what name misses |
| `in:readme` | README content | Must be explicit; NOT in default search |
| `in:topics` | Topic tags | Exact match only |

Default (no `in:`): searches name + description + topics. README requires `in:readme`.

**Filtering operators:**

| Operator | Example | Notes |
|----------|---------|-------|
| `stars:>=500` | `stars:>=500` | Range: `stars:100..5000` |
| `pushed:>2025-01-01` | Last commit date | ISO 8601; default threshold for active AI research |
| `topic:llm-agent` | Exact match | Always search plural variant too: `topic:llm-agents` |
| `archived:false` | — | Always include — archived repos appear by default |
| `language:python` | Display name | Python not python |
| `NOT awesome` | `NOT awesome in:name` | Filter curated lists |

**Quality signal thresholds:**

| Stars | Interpretation |
|-------|----------------|
| 0–50 | Experiment/personal. Ignore unless paper-backed or known researcher. |
| 50–500 | Community forming. Worth examining for narrow topics. |
| 500–2,000 | Active community. Claims likely reality-tested. |
| 2,000+ | Production-adjacent. Issues reflect real-world use. |

Practical minimum for claim extraction: ~500 stars + `pushed:>2025-01-01`.

Recency: `pushed:>2025-01-01` = actively maintained. `pushed:>2024-01-01` = possibly dormant.

**Claim extraction order:** (1) linked arXiv/paper, (2) README benchmark table, (3) `/results` or `/eval` directories, (4) CHANGELOG/release notes, (5) issues filed by users (search: "doesn't work", "fails on", "limitations").

**Red flags:** README is only installation instructions; "paper coming soon" without preprint; benchmarks only on toy datasets; "state of the art" with no cited baseline.

**Star inflation detection:** Fork-to-star ratio below 50/1k on >10k-star repos; >30% of stargazers with zero followers and no repos = purchased engagement.

**Worked example — agentic scaffolding frameworks:**
```
# Step 1 — high-precision topic search:
topic:agentic-framework language:python stars:>=1000 pushed:>2025-01-01 archived:false

# Step 2 — catch what topics miss (README scan):
"tool use" "planning" "memory" in:readme language:python stars:>=500 pushed:>2025-01-01

# Step 3 — find comparison repos:
"agentic" "benchmark" "comparison" in:readme stars:>=200 pushed:>2024-01-01
```

**Failure modes:**

| Code | Failure | Recovery |
|------|---------|----------|
| GH-1 | Star inflation (6M suspected fake stars — CMU/NCSU/Socket 2024) | Check fork:star ratio; check star-history.com |
| GH-2 | Default sort is "best match" not stars | Append `sort:stars` to URL |
| GH-3 | Archived repos included by default | Always add `archived:false` |
| GH-4 | Topic singular/plural mismatch | Search both `topic:llm-agent` and `topic:llm-agents` |
| GH-5 | Awesome-list contamination at top | Add `NOT awesome in:name`; use awesome lists as indexes only |

---

### Web search — query construction

#### Core operators

| Operator | Syntax | Notes |
|----------|--------|-------|
| `site:` | `site:arxiv.org` | Restrict to domain. No space after colon. |
| `filetype:` | `filetype:pdf` | Misses HTML-only papers. |
| `"phrase"` | `"chain of thought"` | Exact match. |
| `-exclusion` | `-tutorial -course` | Exclude word. |
| `OR` | `agent OR agentic` | Must be UPPERCASE. |
| `intitle:` | `intitle:"multi-agent"` | Quote multi-word: `intitle:"multi-agent"`. |
| `after:` / `before:` | `after:2023-06-01` | Full YYYY-MM-DD format; year-only is unreliable. |
| `site:a OR site:b` | Two domains | Double `site:` in one query is broken; use `OR` form. |

**Operator budget:** 1–2 = safe; 3 = sweet spot; 4+ only when simpler query returns confirmed noise.

**Academic vs grey-lit patterns:**
```
# Academic (papers):
"<technique>" (<synonym1> OR <synonym2>) filetype:pdf after:<year>-01-01

# Grey literature (practitioner blogs):
"<technique>" (site:medium.com OR site:towardsdatascience.com OR site:eugeneyan.com) after:<year>-01-01

# Company technical reports:
"<technique>" filetype:pdf (site:.io OR site:.ai OR site:.dev) -site:arxiv.org after:<year>-01-01
```

**Google Scholar vs web search:**

| Intent | Use |
|--------|-----|
| Does a paper on X exist? | Google Scholar (widest academic recall) |
| Newest CS/AI preprints | arXiv directly |
| Grey literature, practitioner posts | Google web search |
| Technical reports from companies | Google web + `filetype:pdf` |
| GitHub repositories | GitHub native search first |

**Failure modes:**

| Code | Failure | Recovery |
|------|---------|----------|
| WS-1 | Recency bias buries older foundational work | Run both recency-bounded AND undated relevance queries |
| WS-2 | Exact-phrase brittleness | OR with 2–3 common phrasings |
| WS-3 | Single `site:` misses other key sources | Use `site:a OR site:b` explicitly |
| WS-4 | Lowercase `or` is a search term | Boolean OR must be uppercase |
| WS-5 | `intitle:multi-agent` without quotes | Quote multi-word terms: `intitle:"multi-agent"` |
| WS-6 | `before:` with year-only format unreliable | Use full YYYY-MM-DD |
| WS-7 | Filter bubble | Use incognito for discovery queries |

---

## Failed-query recovery and cross-source translation

### Diagnosis

Run the diagnostic probe BEFORE reformulating.

| Failure mode | Signal | Distinguishing test |
|--------------|--------|---------------------|
| Too narrow | <5 results, or all from 1–2 papers citing each other | Remove one qualifier at a time — if removing one term jumps results from <5 to >20: that term was the bottleneck |
| Too broad | >50 results, <20% relevance density, 5+ domains in top 10 titles | Count distinct domains in top 10 titles |
| Vocabulary mismatch | Plausible-but-adjacent results; your terms appear in quotes (being critiqued, not used) | Extract vocabulary from the 1–3 closest results — if their terms differ from your query: vocabulary mismatch |
| Source gap | Low yield across multiple reformulations; web search immediately surfaces 5+ relevant blogs/repos | Run same terms in web search |

### Recovery per failure mode

**Too narrow:** Remove the most application-specific term first. If still low yield: remove method variant, search the parent category. If still low yield: switch to vocabulary mismatch protocol.

**Vocabulary mismatch — seed paper method:**
1. Run your intuitive query; take the 1–3 closest results
2. Highlight the noun phrases they use for your concept
3. If phrases cluster (2 of 3 use the same term): rebuild from that term
4. If phrases scatter: find a survey paper (surveys explicitly enumerate terminology)

**Source gap — switching sequence:**
```
arXiv → Semantic Scholar → Papers With Code → web search → GitHub → Google Scholar
```
Apply after 3 reformulations with no improvement.

**Hard cut-off:** After 3 reformulations with no improvement: one more probe on source-switching, then either (a) declare source gap and switch, or (b) log as "not yet in literature" and move on. Continuing past this has lower expected value than any adjacent angle.

### Cross-source translation

**arXiv → Semantic Scholar:**
- Lost: category precision, title-specific search
- Add: disambiguation terms, citation count filter (arXiv has none)
- Example: `ti:("retrieval augmented generation") cat:cs.CL` → `"retrieval augmented generation" "language model"` + `fieldsOfStudy=Computer Science` + `minCitationCount=3`

**arXiv → GitHub:** Fundamental shift — arXiv finds claims; GitHub finds implementations. Extract the named technique, search GitHub for it in names/descriptions, add language filter, strip application domain.

**arXiv → Web search:** Drop academic qualifiers; add context terms ("tutorial", "guide", framework name); for negatives add "limitations", "problems", "doesn't work".

---

## Tool decision matrix and API access

| Research intent | Recommended tool |
|-----------------|-----------------|
| Does a paper on X exist? | Google Scholar (widest recall) |
| 100+ papers on a narrow topic (systematic) | Semantic Scholar API `/paper/search/bulk` |
| Boolean compound query | Semantic Scholar API or arXiv API |
| Newest CS/AI preprints | arXiv directly |
| Follow citation chains as data | Semantic Scholar API `/paper/{id}/citations` |
| Active GitHub repositories | GitHub native search |
| Practitioner blogs and grey lit (concept-shaped) | Exa.ai neural mode |
| Practitioner blogs (keyword-exact) | Google web search |
| Company technical reports | Google web + `filetype:pdf site:.ai` |
| Reproducible documented search strategy | Semantic Scholar API or arXiv API |

**arXiv API:**
- Endpoint: `http://export.arxiv.org/api/query`
- Key params: `search_query` (field-prefixed boolean), `start` (offset), `max_results` (max 2,000; total cap 30,000), `sortBy` (relevance | submittedDate | lastUpdatedDate)
- Auth: none. 3-second delay between requests requested.
- Output: Atom 1.0 XML (title, authors, abstract, ID, categories, dates, DOI)
- Use when: field-level boolean precision required, date-range filtering, systematic retrieval up to 30,000 results

**Semantic Scholar API:**
- Endpoint: `https://api.semanticscholar.org/graph/v1`
- Key endpoints: `/paper/search` (max 1,000), `/paper/search/bulk` (up to 10M, token-pagination), `/paper/{id}/citations`, `/paper/{id}/references`
- Auth: free key (1-min registration at semanticscholar.org); institutional/business email required (free email domains rejected as of Aug 2024); 1 RPS with key
- Use when: compound filters needed, >20–30 papers, citation graph traversal, reproducible corpus

**Exa.ai:**
- Verdict: use for grey literature and concept-shaped queries; skip for systematic academic retrieval
- Use: neural ranking for vocabulary-variable content; `includeDomains`/`excludeDomains` for scoped retrieval; `category: research_paper` for scholarly bias
- Skip: when exact keyword is known; for systematic reviews requiring documented strategy; when free tiers are sufficient (Google) for the task
- Pricing: $7/1,000 requests; 20,000/month free tier

---

## Adversarial calibration — what query construction cannot fix

These are irreducible limitations. Knowing the syntax does not fix them. They calibrate expectations for all research tasks.

**A1 — Vocabulary mismatch is structural, not correctable by procedure.**
80% of the time, two researchers (including domain experts) name the same concept with different words (Sparck Jones 1972, replicated). An average well-formed query misses 30–40% of relevant documents by design. Synonym lists help partially; they do not close the gap. The vocabulary needed to search a field is produced by reading the field — the procedure cannot shortcut this circularity.

**A2 — Confirmation bias in query design fires automatically, even without intent.**
The framing of a query embeds the researcher's prior beliefs. "Benefits of X" retrieves confirming literature; "limitations of X" retrieves disconfirming literature. Standard query construction procedures do not require generating disconfirming vocabulary. A researcher who follows procedure perfectly can produce a search structurally incapable of finding disconfirming evidence. Mitigation: force explicit adversarial search arms ("X failures", "X limitations", "X criticism") as separate mandatory queries.

**A3 — Operator over-specification is invisible.**
Each AND constraint reduces recall. The researcher sees only what was retrieved; they cannot observe what was excluded. The Tetzlaff/Sampson studies found 92.7% of systematic review search strategies contained errors; 78.1% negatively affected recall. This rate did not improve across 13 years (2006→2019) despite significant investment in training and guidelines.

**A4 — Temporal bias: current vocabulary cannot retrieve historical terminology.**
Field vocabulary shifts over decades ("neural networks" → "connectionist models" → "deep learning" → "foundation models"). Semantic Scholar's embedding model is trained on contemporary literature — historical papers are poorly represented. Citation chaining fixes this only when the citation graph is connected across the vocabulary shift.

**A5 — The formalization trap: compliance does not produce outcomes.**
Researchers who follow a query construction procedure correctly can still produce a search that misses the majority of relevant literature, is systematically biased, and is not reproducible. The procedure reduces syntax errors; it does not close the vocabulary gap, confirmation bias, or temporal bias. Expert advantage in academic search is not procedural — experts recognize when results are wrong. Recognition requires domain knowledge the procedure cannot supply.

**A6 — Source-specific algorithm biases are external and cannot be corrected by query construction.**
- Google Scholar: citation-count dominance produces popularity-as-relevance; language bias (non-English work systematically de-ranked)
- Semantic Scholar: returns results aligned with embedded query bias (arXiv:2311.09969); biased queries produce biased result sets
- arXiv: no quality differentiation; recent unvetted preprints appear alongside established work
- GitHub: documentation-biased; stars reflect social adoption, not research quality

**A7 — The knowledge needed to search well is the knowledge the search is supposed to produce.**
An adequate search requires knowing field vocabulary, disciplinary boundaries, historical terminology, adjacent disciplines, and key researchers — all products of the literature review itself. Guidance scaffolds the search of what you already know; it cannot substitute for domain expertise.

---

## Divergences and contested findings (GH-01)

**D1 — Semantic Scholar quality-neutrality.**
Semantic Scholar's ML ranking mixes peer-reviewed and low-quality work at the same relevance tier (arXiv:2311.09969). Resolution: use `minCitationCount` and `influentialCitationCount` filters as quality proxies; do not treat default relevance ranking as quality ranking.

**D2 — arXiv category trust.**
Categories should supplement keyword queries, not replace them (both A1 and A7 agree), but A7 warns of false completeness: categories are self-reported, inconsistent, and drift over time. Resolution: use `cat:` as an exclusion tool (cut clearly irrelevant communities), not an inclusion tool. Sample 10–20 results before trusting any category scope.

**D3 — Filter bubble magnitude.**
Empirical evidence for algorithmic personalization effects is weaker than commonly assumed; self-imposed selective attention is often a larger effect. Incognito mode remains valid mitigation but does not eliminate confirmation bias, which has a larger human behavioral component.

**D4 — Exa.ai coverage claims unvalidated.**
Exa.ai guidance is based on vendor documentation, not independent testing against alternative tools. Treat as informed-but-unvalidated; verify against a control query during first use.

---

## Claim format

Each finding from research is a **claim**, not a "source found." Claims have:

```
key: short-hyphenated-slug (unique across all research)
claim: The full actionable finding with: the specific study/source, the specific numbers or effect, 
       the mechanism (why), the scope conditions (when), and the practical implication.
falsification: (empirical claims only) This mechanism would be false if: Z. State one observable
               condition that, if true, would falsify the mechanism described above. If no
               falsification condition can be stated, the mechanism is a narrative, not a
               mechanistic claim — flag with "NARRATIVE — no falsification condition available."
               Skip for consensus and anecdote claims (leave blank or omit).
group: which topic cluster this belongs to
evidence: empirical | consensus | anecdote
sourceUrls: direct links to the source
```

**Falsification condition rationale (PROVISIONAL — based on `causal-theory-error-base-rate`, HIGH SCOPE: trained humans + LLMs, + `surface-learning-mimicry-failure-mode`, CONSENSUS + `mechanism-vs-correlation-depth-signal`, MEDIUM; mechanism-and-depth group, PCR-research-quality, 2026-07-05):** 66% of trained students endorsed mechanistically flawed causal claims; LLMs trained on human text likely encode the same default causal errors. The mechanism field raises the floor (prevents bare fact statements) but cannot verify whether mechanism text generates falsifiable predictions. Requiring a falsification condition makes the mechanism field agent-checkable by the auditor ("Is there a falsification condition?") without requiring the auditor to evaluate whether the condition is correct. Pattern I check: this is a principle derivation for our setup (our claim format, our LLM agents), not a copy of the PRISMA falsification requirement from systematic review. Flip trigger: remove if N=5 research waves show falsification conditions in the claim format produce no detectable improvement in mechanism depth quality — specifically, if the `falsification:` field is consistently populated with "NARRATIVE — no falsification condition available" at the same rate as the prior mechanism field was (indicating the field adds format overhead without discriminating deep from shallow mechanisms).

**Evidence classification (at claim level, not source level):**

| Type | Meaning | Verification required? |
|------|---------|------------------------|
| `empirical` | Derives from a study, experiment, dataset, or measured outcome. Specific n-size, effect size, or statistical result cited. | YES — must go through verify pass |
| `consensus` | Widely agreed across practitioners/domain experts with no single empirical source; craft consensus, expert agreement, documented best practice | No verify pass, but note it as consensus-not-empirical in confidence map |
| `anecdote` | Single example, case study, or individual practitioner account | No verify pass; use as illustration only, not evidence |

A high-quality source can support a low-confidence claim if the extrapolation from source to claim is too large. Classify the claim, not the source.

**Evidence-downgrade rule (applied at synthesis, not here):** During Phase 4 synthesis (Step 2.5), any empirical claim with confidence `low` is downgraded to `consensus` tier for the confidence map. This is intentional — a low-confidence empirical claim has weaker epistemic status than genuine practitioner consensus. Consequence for archive authors: set confidence accurately here. Do not over-claim `medium` to avoid downgrade. The synthesis procedure applies Step 2.5; it relies on accurate confidence classification in the archive files to do so correctly.

---

## Per-angle saturation

Saturation for a single angle is reached when **all three** conditions hold:

**Condition 1 (key convergence):** Consecutive queries return claims with no new keys — all new claims are already in the angle's claim set.

**Condition 2 (source type coverage):** At least 2 distinct source type domains were searched (e.g., academic database + practitioner resource OR GitHub OR grey literature). Saturation on one source type alone is **partial saturation** — log it explicitly as "saturated within [source type]; practitioner/grey sources not covered." Partial saturation is a valid output; "saturated" without qualification is not.

**Condition 3 (vocabulary-frame coverage):** The vocabulary-frame enumeration from Step 0 has been covered — at least one query per identified research tradition was run. This is the structural mitigation for concept frame lock.

**Reachable vs. true saturation (`reachable-vs-true-saturation`, consensus):** Conditions 1+2 produce *reachable saturation* — no new keys within the searched vocabulary cluster. True saturation additionally requires Condition 3. Declaring saturation without Condition 3 is correctly labeled "saturated within [vocabulary cluster]" only. Log it explicitly as partial saturation — the cost of omitting this is approximately 10% of relevant literature permanently unreachable (`cris-golden-gap-418pct`, HIGH).

Operationally:
0. Pre-search: complete Step 0 vocabulary-frame enumeration; plan query coverage per tradition
1. Run query 1 → log claim keys produced
2. Run query 2 → log new claim keys vs prior set
3. Run query 3 (adversarial) → if new keys < threshold: approaching saturation; log null results
4. Run query 4 → if overlap is near-complete: approaching saturation
5. Run query 5 (grey-lit) → if all keys already seen AND 2+ source types AND all Step-0 traditions covered: saturation confirmed

If query 3 returns many new keys: generate additional queries before stopping. Saturation is the signal, not the query count.

**Snowballing gap-fill (recommended for cross-disciplinary angles, `symbals-snowballing-recall-boost-9-10pct`, HIGH):** After keyword saturation, run backward snowballing on 2-3 HIGH-confidence empirical claims. This adds ~9-10% additional recall beyond keyword convergence. Critical caveat (`snowballing-start-set-dependency`, consensus): snowballing cannot escape the citation-graph connected component of its start set. If the start set uses one vocabulary tradition, snowballing stays within that island. Start set must include at least one representative from each vocabulary tradition identified in Step 0 — not just dominant-frame results.

**Evidence basis for dual-condition saturation:** The triangulation principle (European Journal of Epidemiology, high confidence) establishes that convergence only signals robustness when converging sources have unrelated bias vectors. Two academic sources agreeing proves shared academic framing, not ground truth. Cross-source-type coverage is required for meaningful saturation.

---

## Verify pass (empirical claims only)

After research is collected, run a separate verify pass on every claim classified as `empirical`. Dispatched as independent agents — NOT the same agent that found the claim.

Each verify agent receives the claim and its sources and must answer the following **three dimensions**. Cover all three — missing a dimension is an incomplete verify pass:

**Framing:** **Try to refute each claim.** Your job is to find what is wrong, overstated, or unsupported — not to confirm what is right. If you tried to refute it and could not, assign high confidence. If you found a way it could be wrong, assign medium or low.

**Dimension 1 — Source accuracy (what the source actually says):**
1. **Does the source say what the claim says — or does it say something subtly different?** Find it. Read the abstract and key sections. Look for: misquoted numbers, wrong study design, wrong year, wrong author, scope condition the claim ignores. **Author attribution is a known failure pattern:** verify the specific author name is correct — prior research waves showed systematic misattribution (citing "Smith et al." for a finding that belongs to "Jones et al." or citing the wrong year for the same paper). Confirm author + year + finding match the cited URL.
2. **What is the n-size and study design, and does the study design justify the claim's scope?** (One small 1982 experiment vs a 2024 meta-analysis of 174 effect sizes are different levels of evidence. More specifically: does the study design *support* the claim's causal or scope language? "X causes Y" requires a different study design than "X correlates with Y." Flag scope mismatches, not just n-size.)

**Dimension 2 — Methodology and replication:**
3. **Find at least one study or argument that contradicts or limits the claim.** Does it replicate? Name one contradicting study if it exists.
4. **What does the source actually show vs what the claim says?** Flag any extrapolation from "the study found X" to "this means practitioners should do Y." The study may be real; the application may be untested.

**Dimension 2b — Falsification condition validity (required if the claim has a `falsification:` field; PROVISIONAL — PCR-research-quality, 2026-07-05):**
**Does the stated falsification condition name an observable, non-trivial condition that would actually distinguish the mechanism being present from absent?** Check: (a) Is the condition observable — could a future study measure or test it? (b) Is it non-trivial — does it say something specific enough that a confirming study would count as evidence? (c) Does it match the mechanism — would the condition being true actually mean the mechanism fails, not just that the finding doesn't hold in some other scope? Flag falsification conditions that are circular ("this would fail if the effect is not present" — tautological), trivially broad ("this would fail in a different context"), or non-observable ("this would fail if the underlying process is different"). A falsification condition with these problems should be flagged: lower confidence and note "WEAK FALSIFICATION CONDITION" in the verify note.

**Dimension 3 — Kit implication validity (required if the claim has a "Kit implication:" section):**
5. **Does the kit implication follow from the finding without overgeneralizing?** Specifically: (a) Is the scope of the implication consistent with the study's scope? (b) Does the implication generalize beyond the study's population, domain, or conditions without flagging this? (c) Would applying this implication in a case the study didn't test still be justified? Flag any kit implication that extrapolates substantially past what the evidence directly supports — lower confidence accordingly. A correct research finding with an overgeneralized kit implication is a MEDIUM-confidence claim, not HIGH.

6. **Verdict:** `high` / `medium` / `low` confidence with a specific note: what checks out, what is extrapolation, what n-size concern exists, what the contradicting evidence says, and whether the kit implication is well-scoped or overgeneralized.

**Evidence basis for adversarial framing:** Verifiers who search to "check" a claim (confirmatory framing) retrieve confirming evidence and become more confident in wrong answers (scalable oversight study, medium confidence). Adversarial framing — "try to refute" — is the structural fix. The verify prompt wording is not cosmetic; it changes what the agent searches for.

**Confidence levels:**
- `high`: study exists as cited, specific numbers confirmed, replicated or part of a meta-analysis, extrapolation to application is minimal
- `medium`: study exists and findings are roughly right, BUT: single study with no replication, OR n-size is small, OR craft application is an extrapolation the study didn't test
- `low`: numbers are wrong, study doesn't exist, study design doesn't support the claim, or extrapolation is too large to be useful

**Only empirical claims get this pass.** `consensus` and `anecdote` are taken as labeled — they carry their own epistemic weight. Don't spend verification effort confirming that "craft consensus" is consensus.

---

## Output structure — archive format

Each angle gets **one markdown file** in `research_archive/`. Filename: `[angle-slug].md`.

Each claim is a structured block within that file:

```markdown
### [key: claim-key-slug]
- evidence: empirical | consensus | anecdote
- confidence: (blank until verify pass sets it to: high | medium | low)
- group: topic-slug
- sources: https://url1, https://url2

**Claim:** Full actionable text — includes the specific study/source, the specific numbers or 
effect where applicable, the mechanism (WHY), the scope conditions (WHEN this applies and 
WHEN it doesn't), and the practical implication.

**Verify note:** (blank until verify pass — verifier adds confidence rationale here)
```

**Why structured markdown (not JSON):**
- Auditors (Read/Grep/Glob only) can read it directly
- `grep "evidence: empirical"` extracts all claims needing verify pass
- `grep "group: suspense"` extracts all claims for a synthesis group
- Human-readable without tooling
- No extraction script required

**Null results** go at the bottom of each angle file:

```markdown
## Null results
- Searched "[query string]" — nothing found
- Searched "[query string]" — nothing credible found (explain why results were rejected)
```

**Saturation log** goes at the top of each angle file:

```markdown
## Saturation log
- Query 1: "[exact query]" — N new claim keys
- Query 2: "[exact query]" — N new claim keys  
- Query 3: "[exact query]" — 0 new keys (overlap with prior queries — saturation signal)
- Saturation confirmed after query 4 (all results already seen)
```

This structured output feeds Phase 4 SYNTHESIS directly. The confidence map is built from `evidence:` and `confidence:` fields, not from "I found sources on this topic."

---

## When to skip

**The angle format (title + queries) skips when:**
- The angle is factual lookup with no empirical literature (e.g., "what is Claude's context window?" — one query, no claim extraction needed)

**The verify pass skips when:**
- The claim is classified `consensus` or `anecdote` — by definition these don't have empirical sources to verify

**Per-angle saturation check never skips.** A research agent that returns findings without saturation confirmation has not completed the angle.

---

**Trace:** Book research pipeline (c:\Users\masuta\Desktop\Coding\book\research\_raw\) — validated, in-use pipeline with angles.json (title + queries format), ideas.json (key/claim/group/evidence/sourceUrls), verdicts.json (adversarial per-claim verification with confidence levels and specific notes on what checks out vs extrapolation), verify_todo batches (empirical-only verification pass). Systematic review methodology (PRISMA) — multiple queries per angle is the search strategy documentation principle. Evidence classification at claim level: the rated study/source is not the same as the extrapolated claim; a well-conducted study can support an oversold claim.
