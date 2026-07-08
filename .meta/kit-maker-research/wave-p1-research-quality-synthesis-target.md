# Synthesis Target: Angles 108–114 — Research Quality Per Angle

**Purpose:** Pre-planned synthesis structure for the seven per-angle research quality angles. Where angles 12-14 address research methodology at the process level, these address quality at the single-angle level: what does one well-researched angle look like from the inside?

**When to use:** Phase 4 SYNTHESIS after angles 108-114 have been researched. Read before touching archive files.

**Downstream wiring:** Findings update `procedures/research-quality.md` per-angle quality criteria. If HIGH or CONSENSUS findings contradict the current procedure, update it before P2/P3 waves run. Coordinate with `wave-p1-meta-research-synthesis-target.md` — don't duplicate process-level findings there.

**Overlap note:** Angle 114 (meta-research methodology — broader) overlaps with angles 12-14. After synthesizing both clusters, check for contradictions and merge findings rather than maintaining two separate guidance sections.

**Self-referential note (from design_log.md):** These angles were researched using the current research-quality.md procedure. The procedure governs the research that tells us what the procedure should say. This is acceptable bootstrapping, but means: if the synthesis finds the current procedure is weak, the weakness applies to these angle files too. Flag this honestly in the output.

---

## The question this synthesis must answer

For a single angle, how do you know when you've researched it well enough, and how do you know if you researched it poorly? Specifically:

1. **What are the per-angle quality criteria** — a checklist a research agent or auditor can check?
2. **What structural mechanisms prevent shallow research** — bias toward confirming findings, ignoring null results, missing source types?
3. **What does "deep understanding" look like** vs surface-level fact collection — and can the difference be enforced structurally?

---

## Synthesis structure

### Table 1 — Per-angle quality checklist

Each row is one quality criterion. Fill from research across all seven angles.

| Criterion | What it checks | Currently in research-quality.md? | How to verify (agent-checkable?) | Source angles |
|-----------|---------------|-----------------------------------|----------------------------------|---------------|
| Search documented | Exact queries logged, can be reproduced | Yes — queriesRun field | Check saturation log | 108, 109 |
| Multiple source types covered | Academic + practitioner + GitHub — not all from one type | Partial — mentioned but not enforced | Count source types in saturation log | 111 |
| Contradicting evidence searched | Adversarial query run (explicitly searched for failures/critiques) | Partial — null results section | Check null results for adversarial query | 110 |
| Null results documented | "Nothing found on X despite query Y" — present in output | Yes — nullResults field | Check null results section exists and is non-trivial | 113 |
| Mechanism stated, not just fact | Claims explain WHY, not just THAT | Yes — claim format requires mechanism | Auditor checks: does each claim have a mechanism? | 112 |
| Scope conditions stated | Claims say when they apply and when they don't | Yes — claim format | Auditor checks: does each claim have scope? | 112, 108 |
| Saturation confirmed across source types | Not just query overlap within one type | Partial | Saturation log shows source diversity | 111 |
| ? | ? | ? | ? | ? |

Add rows from research. Flag any criterion that is NOT currently in research-quality.md — candidate for update.

---

### Table 2 — Bias detection mechanisms

From angle 110 specifically, but cross-referenced with 108-114:

| Bias type | How it manifests in single-angle research | Detection mechanism | Prevention mechanism | Currently implemented? |
|-----------|------------------------------------------|--------------------|--------------------|----------------------|
| Confirmation bias | Agent finds supporting evidence and stops | Adversarial query required | Mandatory adversarial query in prompt | Partial |
| Source type bias | All results from same source type (e.g. all academic) | Source type diversity check | Saturation fails if only one type | Partial |
| Recency bias | Only recent results returned | Explicit query for foundational/historical | Query format includes "foundational paper" query | Yes |
| High-visibility bias | Only top-ranked/most-cited results | Diverse query entry points | 5-query format hits different entry points | Yes |
| Null result suppression | Failures and absences not documented | Mandatory null results section | nullResults field required | Yes |
| Mechanism skipping | Claim states correlation, skips mechanism | Claim format enforcement | Claim format requires mechanism field | Yes |
| ? | ? | ? | ? | ? |

Fill "Detection mechanism" and "Prevention mechanism" from angle 110 research. If a bias has no current implementation, add to update candidates.

---

### Table 3 — Depth signals

From angle 112 specifically — what does deep understanding of an angle look like vs surface-level fact collection?

| Depth level | What it looks like in an archive file | How to distinguish from the surface level |
|-------------|--------------------------------------|-------------------------------------------|
| Surface | "LLMs anchor on the first hypothesis they generate." | States the fact. No mechanism. |
| Medium | "LLMs anchor because autoregressive generation weights initial tokens more heavily, making correction costly." | States mechanism. No scope condition. |
| Deep | "Anchoring occurs specifically in multi-step reasoning where the first step constrains solution space (e.g., coding, math, planning). In single-turn tasks it's weaker. Mitigation: explicit prompt restart rather than continuation." | Mechanism + scope conditions + practical implication. |

**Can depth be enforced structurally?** Angle 112 should answer this. If research finds a structural enforcement mechanism (e.g., requiring mechanism in the claim format is sufficient): validate that research-quality.md's current claim format is doing this correctly. If research finds the current format is insufficient: propose specific additions.

---

### Table 4 — research-quality.md update candidates

Consolidate all findings into specific proposed changes:

| Current text in research-quality.md | Proposed change | Evidence basis | Priority (HIGH = blocking before P2 wave) |
|-------------------------------------|-----------------|----------------|------------------------------------------|
| ? | ? | ? | ? |

If the update candidate table is empty after synthesis: research confirmed current procedure is adequate. Record this as a CONSENSUS finding ("current per-angle quality criteria are consistent with systematic review methodology"). Empty is a valid result — don't manufacture updates.

---

### Contradiction pairs to watch

1. **Saturation signal (angle 111 vs current procedure):** Current saturation = consecutive queries return no new claim keys. Angle 111 (source triangulation) may argue saturation also requires coverage across source types — you can't be saturated on academic sources alone if practitioner sources weren't searched. If this is confirmed: saturation definition in research-quality.md changes. This is a HIGH priority update candidate.

2. **Null results vs null result reporting (angle 113):** Deliberately searching for null results (running queries designed to find nothing) is different from documenting queries that happened to return nothing. The current nullResults field captures the latter. Angle 113 may argue the former is also needed — adversarial queries designed to find absence-of-evidence. If confirmed: the research-wave.js prompt should require one adversarial "nothing found" query per angle.

3. **Depth enforcement vs overhead (angle 112 vs practical constraint):** Mechanism + scope + practical implication in every claim is the current standard. Angle 112 may find this is insufficient for deep understanding, OR it may find it's overkill for anecdote/consensus claims where mechanism isn't knowable. Expected resolution: mechanism is required for empirical claims; consensus claims may state mechanism if known but aren't penalized for lacking one.

---

## Expected synthesis output file

`research_archive/synthesis-research-quality-per-angle.md` containing:
- Table 1 filled (per-angle quality checklist, with "currently implemented?" column)
- Table 2 filled (bias detection mechanisms)
- Table 3 filled (depth signal examples at each level)
- Table 4 filled (update candidates, blocking updates at top)
- Self-referential note: which quality criteria from Table 1 were violated by the angle 108-114 research itself (honest assessment)

**Immediately after synthesis:** apply any Table 4 blocking updates to `procedures/research-quality.md`. Coordinate with `wave-p1-meta-research-synthesis-target.md` Table 3 — apply both update sets together, not piecemeal.
