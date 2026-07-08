# platform-calibration.md — Per-Source Calibration Rules

**Purpose:** Platform-specific override rules that prevent invisible search failures caused by platform design constraints. An agent that follows "search arXiv" without these rules will default to cs.AI and miss approximately 65% of LLM-related literature.

**When to use:** During Step 3 (source-type assignment) and Step 4 (query generation) of angle-generation.md. Read this file before assigning source types to any angle.

**Temporal scope:** The empirical percentages below (arXiv category distribution, GitHub fake-star rate) are from 2023–2024 data and have temporal scope conditions. The directional findings (Google Scholar non-reproducibility, HN score decoupling) are from documented platform behavior and are more stable. Revalidate specific percentages at kit launch and annually thereafter.

---

## arXiv

**What agents get wrong by default:** Searching cs.AI for LLM-related topics. This is the most intuitive category and retrieves ~35% of LLM literature.

**Override rules by domain:**

| Topic domain | Correct category combination | Do NOT use alone |
|-------------|------------------------------|------------------|
| LLM / NLP tasks | cs.CL + cs.LG | cs.AI alone |
| Instruction following, RLHF, alignment | cs.CL + cs.LG | cs.AI alone |
| AI systems, general AI capability | cs.AI + cs.LG | cs.AI alone |
| Agent / robotics | cs.RO + cs.AI | cs.AI alone |
| Safe AI / interpretability | cs.LG + cs.CY | cs.AI alone |

**Empirical basis:** 2023 snapshot of 20 influential LLM papers — category distribution analysis showed cs.AI alone recovers approximately 35% of relevant papers; cs.CL + cs.LG together recover approximately 80%. Specific percentages have temporal scope; directional finding (cs.AI alone systematically undercovers LLM literature) is robust.

**Result cap:** arXiv search returns are effectively capped for large result sets. For queries returning >200 results: paginate explicitly or route to Semantic Scholar API for bulk retrieval. A search returning "too many results" is not the same as finding all relevant papers.

**Date filter guidance:** arXiv search without a date filter mixes 2015 transformer-era papers with 2025 results in non-chronological order. For topics where recency matters: filter to relevant publication years before expanding the query. Recency bias in LLM training data means recent papers are underrepresented in LLM-generated queries — compensate by explicitly querying 2024 and 2025 ranges.

---

## Semantic Scholar

**Role:** Cross-reference, citation network exploration, paper clustering, finding influential papers in a result set.

**Role restriction:** Do NOT use as the sole academic source. Semantic Scholar ingests the same arXiv preprints as arXiv direct search — they are not structurally distinct for AI topics. Using Semantic Scholar + arXiv as your "two structurally distinct sources" does not satisfy Gate 1 of angle-quality.md.

**Correct pairing:** Semantic Scholar (citation network, influence mapping) + GitHub/practitioner source (different ingest policy, different author population). This pairing is structurally distinct.

**Useful for:** Finding the most-cited papers in a result set, exploring citation clusters, discovering papers that cite a known foundational paper (forward citation search), identifying connected research communities.

**Avoid for:** Systematic recall claims. Semantic Scholar's coverage is strong for AI/ML but its completeness for adjacent fields (cognitive science, HCI, social science) is inconsistent.

---

## Google Scholar

**Role restriction:** Discovery and citation-lookup ONLY. Do NOT use for systematic retrieval or recall claims.

**Hard limits (documented platform behavior, not estimates):**
- 1000-result cap — searches returning >1000 results are truncated; you cannot retrieve beyond result 1000 regardless of how you page
- Non-reproducible sort — the same query produces different result orderings at different times; you cannot reproduce a Google Scholar search for audit purposes
- No robust Boolean support for nested queries — complex Boolean expressions (nested AND/OR with field restrictions) are unreliably executed; results should not be trusted for precision queries

**Exclusion rule:** Never use Google Scholar as the sole academic source. Never use Google Scholar to make systematic recall claims ("I searched and found all papers on X").

**When to use:**
- Finding the original paper for a cited claim (author + title search)
- Finding an author's publication page
- Quick discovery of unexpected adjacent fields
- Locating a specific paper when arXiv/Semantic Scholar searches fail

**Why the hard limits matter:** A search that returns 1000 results and stops is indistinguishable from a search that exhausted the literature — both look the same to an agent. The truncation is invisible unless the agent explicitly checks whether it hit the cap.

---

## GitHub

**Quality gate for research use:**
A repository is a potentially useful research signal if it meets at least one of:
- ≥50 stars AND ≥10 forks AND has a substantive README
- Active commit history (commits within the last 6 months)
- Multiple distinct contributors (not single-person project)

A repository below all three thresholds is low-confidence signal. Do not treat it as practitioner evidence of an approach working.

**Fake-star contamination note:** Approximately 16.66% of repositories with 50+ stars showed fake-star activity patterns in 2024 peak measurement (CMU/NCSU 20TB GitHub study). Quality signals beyond star count: commit history diversity, contributor count, issue thread substance, PR review quality. A repository with 10,000 stars and no substantive issue discussions should be treated with skepticism.

**Search ordering for research purposes:**
- "Most starred" — useful for finding the most-adopted implementations
- "Most forked" — useful for finding actively-extended codebases
- "Best match" (GitHub default) — unreliable for research purposes; do not use as the primary ordering for angle research

**What GitHub is for in angle research:**
- Practitioner implementation patterns (what solutions do people actually build?)
- Issue thread vocabulary (how do practitioners describe the problem? — often different from academic vocabulary)
- README vocabulary (the most common practitioner framing of a concept)
- Failure modes in comment threads (what doesn't work, and how practitioners discovered it)

**What GitHub is NOT for:** Academic citation, definitive recall coverage, establishing that no solution exists (absence of GitHub repos does not indicate absence of solutions).

---

## HN (Hacker News) and Reddit

**Role:** Vocabulary discovery and failure-mode identification ONLY.

**Score decoupling:** HN upvote scores and Reddit upvote scores are decoupled from information quality. HN: r=0.29 correlation between score and quality in a practitioner grey-literature study. Reddit: equivalent low correlation. Do NOT use upvote count as a quality signal for a finding.

**Useful signal types:**
- What terminology practitioners use that differs from academic vocabulary (vocabulary gap detection)
- What practitioners find confusing or broken (failure-mode vocabulary)
- What practitioners recommend to each other (consensus signals, not evidence)
- What Show HN posts exist for a technology (existence signal for implemented approaches)

**Not useful for:** Recall claims, systematic coverage, establishing what the field considers important (popularity ≠ importance for research purposes).

---

## PubMed / medical databases

**When relevant:** Topics with clinical, behavioral, or public-health dimensions (e.g., AI in healthcare, human-computer trust, cognitive performance).

**Role restriction:** Not the primary source for ML/AI technical topics. Useful as a cross-disciplinary angle source when the topic has documented medical/psychological research.

**MeSH vocabulary note:** PubMed uses Medical Subject Headings (MeSH) — a controlled vocabulary that differs from the terms used in AI research. Searching PubMed with AI vocabulary produces low recall. Translate AI terms to MeSH equivalents before querying, or use the vocabulary-discovery step to find PubMed-specific terminology.

---

## Stack Overflow / Stack Exchange

**Role:** Practitioner-heavy topics only. Specifically: finding what questions practitioners actually ask (indicates real-world failure modes and implementation confusions).

**Quality signal:** Questions with high view counts and accepted answers indicate widely-experienced problems. Questions with no answers after significant time indicate genuine unsolved practitioner issues.

**Not useful for:** Academic research coverage, establishing what the field considers correct (practitioner consensus ≠ research consensus).

---

## Temporal maintenance requirement

The following calibration items have known temporal scope and must be revalidated:
- arXiv category distribution for LLM papers (revalidate if used in 2027 or later; field categorization may shift as the field matures)
- GitHub fake-star contamination rate (peaked 2024 at 16.66%; may have changed following platform action)
- Google Scholar result cap (1000-result cap is documented platform behavior; revalidate if Google changes its search interface)

Directional findings (more stable; likely to hold across platform updates):
- cs.AI alone undercovers LLM literature — will remain true as long as LLM research spans multiple arXiv categories
- Google Scholar non-reproducibility — structural to how Google generates and ranks results
- HN/Reddit score-quality decoupling — structural to how popularity voting works independent of information quality

---

**Trace:** platform-search-strategies HIGH (G6 — arXiv cs.AI category override from NLLG citation data empirical; GitHub fake-star from CMU/NCSU 20TB study; Google Scholar systematic inadequacy from Gehanno 2013 + official platform documentation; HN/Reddit score decoupling from Glenski ICWSM + practitioner grey-lit analysis); source-diversity HIGH (G4 — "structurally distinct means different ingest policy" derivation; arXiv + Semantic Scholar = not structurally distinct finding).
