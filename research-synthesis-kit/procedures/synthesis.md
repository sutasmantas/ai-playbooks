# Procedure: Research Synthesis

**Use when:** A research archive cluster is complete (≥1 file per angle, verify pass done). Produces a structured synthesis.md with confidence map, contradiction log, counter-prior analysis, and design-driving principles.

**Why this exists:** Without this procedure, synthesis is vibes — agents group convergent findings, under-represent contradictions, and assign confidence based on felt certainty rather than evidence counting. This procedure forces pre-specified thresholds, explicit contradiction logging, and adversarial hypothesis generation before conclusions are locked in.

---

## Preamble — run before Step 1 (mandatory)

Before examining any archive file:

1. **Read the session brief or plan.md.** Record: cluster files in scope, priority design decisions the synthesis must drive, success criteria.
2. **Record scope facts:** number of angle files, total claim count if known, any known groups.
3. **Check scale gate:** If >20 angle files OR >200 total claims, apply scale gate (see below) before Step 1. If claim count is unknown at this point (haven't read files yet), skip the >200 check and apply it during Step 1 once count is known after grouping.
4. **State precision threshold:** Before reading any archive file, state aloud: "I will assign HIGH if ≥2 claims are independently empirical at medium+ verify confidence after Step 2.5 adjustments. Independent means: from different research teams or studies, not methodologically derived from each other." Record this threshold now — threshold stated after examining evidence is post-hoc.
5. **Generate group skeleton:** List expected group names and approximate claim counts before reading. Annotate during synthesis when a group's actual tier differs from the skeleton prediction.

**Do not begin Step 1 until items 1-5 are recorded.** A skeleton generated after reading is post-hoc and cannot catch grouping bias.

---

## Scale gate

**Fires when:** >20 angle files OR >200 total claims in the cluster.

**Action:** Before Step 1, generate a group-level overview: one row per group with claim count and evidence breakdown. Log the scope decision at the top of the synthesis output: "Scope gate fired: synthesizing top [5] groups at depth; remaining [N] groups at summary level."

**Depth synthesis rule:** Top 5 groups by claim count receive full Steps 1-3.7 treatment. Remaining groups receive: group name, claim count, tier assignment only, brief note on evidence basis. No principles extraction for summary-level groups.

**State tracking:** Log "Step [X] complete for groups [list]; [N] groups remaining" after each step when scale gate is active.

---

## Calibration contract (read before every synthesis — mandatory)

Research findings are data points, not facts. They are not prescriptions.

Every finding came from a specific setup that may differ substantially from yours. HIGH confidence means strong evidence in tested setups — not proof the finding applies to your context. Derive principles (Step 3.7), then reason about fit. A synthesis that stops at the confidence map is a literature report, not a design foundation.

---

## Step 1 — Group claims

Collect all claims from the archive. Group by the `group:` field.

**Merge rule:** Any group with fewer than 4 claims merges into `misc` by default. Apply judgment exception: a cluster of 2-3 medium+ verify claims that directly inform a specific named design decision may remain standalone. State the exception and reason.

**Cross-file merge:** When the same group name (or clearly overlapping topic) appears in multiple files, merge into one group. Count total claims across all files for that group.

**After merging:** Sort groups by claim count, highest first. Record group list before proceeding.

**Output:** Grouped table — group name, claim count, evidence breakdown (empirical/consensus/anecdote count), verify-pass coverage.

---

## Step 2 — Contradiction scan (intra-group AND cross-group)

For each group: identify claims that directly contradict each other.

**Also scan ACROSS groups:** After completing intra-group scan for all groups, check for cross-group contradictions — claims in different groups that address the same underlying question and give opposing answers. Cross-group implication-level conflicts (two different groups' HIGH conclusions recommend incompatible kit rules) are especially easy to miss.

**Two contradiction types:**
- **Direct factual conflict:** Claim A says X produces Y; Claim B says X does NOT produce Y.
- **Implication-level conflict:** Claims A and B are each internally consistent, but if both were applied as kit rules simultaneously they would produce conflicting recommendations. Example: Group A concludes "agents should generate more alternatives before committing." Group B concludes "excessive alternative generation produces decision paralysis — commit earlier." Applied simultaneously, these recommend opposite behaviors; this is an implication-level conflict requiring a CONTESTED entry.

**Log for every contradicting pair:** both claim keys, both verify confidence levels, whether one source is larger/more recent/more replicated, whether a scope explanation exists.

**Scope explanation test:** Write "these don't actually contradict because [one sentence]." If the sentence fully resolves the conflict: not a contradiction; it's a scope condition. If you are uncertain the sentence fully resolves it: log as CONTESTED. Default to CONTESTED under uncertainty. Silent resolution of a genuine contradiction is worse than surfacing it.

**Repeated-pattern consolidation:** When the same contradiction pattern appears across multiple groups (e.g., claim type A consistently conflicts with claim type B), log one pattern entry with count of instances. Do not log separately per group.

**Mid-step contradiction propagation:** Any contradiction found during Steps 1, 2.5, or 2.6 — log immediately to the contradiction section. Do not defer to the formal Step 2 scan. The contradiction log is live throughout the procedure.

**Checkpoint write:** After completing Step 2, write the grouped claims table (Step 1 output) and the contradiction log (Step 2 output) to the synthesis output file before proceeding to Step 3. Do not hold these in memory through the confidence map.

---

## Step 2.5 — Evidence tier adjustment

Before building the confidence map:

**Rule:** Any claim with `evidence: empirical` AND verify confidence `low` is treated as consensus tier for synthesis purposes. Do not alter the archive file. Mark these as `[low-verify empirical → consensus tier]` in working notes.

**Why this matters:** A group of 8 empirical claims with 6 rated low is not HIGH confidence — it is CONSENSUS at best. Counting low-verify empirical claims toward the HIGH threshold is confidence creep.

---

## Step 2.6 — Evidence-type scope check

Before building the confidence map:

**Check:** What fraction of empirical claims at medium+ verify confidence come from controlled experiments vs. observational studies or benchmarks?

**If >60% are observational or benchmark (not controlled experiment or RCT):** Add a one-sentence caveat to all HIGH-tier groups in the confidence map: "Evidence is primarily observational/benchmark — HIGH tier represents moderate evidence, not replicated controlled-experiment evidence." This is a one-sentence annotation, not a gate. It does not block synthesis.

---

## Step 3 — Confidence map

**Pre-specified precision threshold (reference — stated in Preamble):**

The threshold was stated in the Preamble (step 4) before examining any file. Reference: "HIGH requires ≥2 independent empirical claims at medium+ verify confidence." Apply this to all groups. For any group where you feel the urge to assign HIGH before counting: stop, count, state the count, then assign.

**Tier definitions:**

**HIGH confidence:** ≥2 independent empirical claims at medium+ verify confidence (after Step 2.5), no unresolved contradictions, composition check passes (see below). Independent means: different research teams or studies, not methodologically derived from each other. Evidence that this finding held in tested setups — not a prescription to implement.

**Composition check (required before assigning any tier):** Confirm all claims measure the SAME underlying construct. Test: "If claim A and claim B were applied as kit rules simultaneously, would they give contradictory instructions?" If yes: split the group before tiering.

**Indirectness annotation (required for all HIGH groups):** Add one sentence to each HIGH entry: "Evidence applies to: [specific scope]. NOT directly applicable to: [out-of-scope use case]."

**CONSENSUS:** Claims are practitioner agreement or consensus-type with no empirical contradiction. Defensible, but justified as "widely believed" not "empirically proven." Note source breadth: "practitioner consensus across multiple independent sources" vs. "single-source consensus." No claim-count floor, but a single claim from a single source with no other backing is weak CONSENSUS — note the single-source limitation.

**CONTESTED:** Group contains an unresolved contradiction between claims that the scope-explanation test cannot resolve, OR the implication-level conflict requires a design decision the user must make. Surface both claims and state why they conflict. User must weigh in.

**GAP:** No claims found in this area despite deliberate searching. A gap is a design decision: proceed without evidence, do more research, or acknowledge the rule has no evidence base.

**Output — confidence map table:**

| Group | Tier | Medium+verify claims | Evidence basis + scope | Conflicts | Action |
|-------|------|---------------------|----------------------|-----------|--------|
| [group] | HIGH | [count + keys] | [what it applies to; NOT directly applicable to:] | none | derive from (Step 3.7) |
| [group] | CONTESTED | [key A vs key B] | [evidence basis for each side] | [nature of conflict] | surface to user; derive from both sides (Step 3.7 CONTESTED variant) |
| [group] | CONSENSUS | [count + keys] | — | none | derive from (Step 3.7) |
| [group] | GAP | — | — | — | derive from adjacent principles (Step 3.7 GAP variant) |

---

## Step 3.5 — Independent synthesis subagent pass (mandatory unless narrow skip condition applies)

After completing Steps 1-3: dispatch a fresh subagent to independently assign confidence tiers to the same claim groups. The subagent receives only the raw grouped claim table and tier criteria — no tier assignments from Step 3.

**When to skip (narrow condition):** If ALL groups have ≥3 independent medium+ verify empirical claims (no boundary cases), document the skip: "Subagent pass skipped: all groups exceed 3-claim threshold, no boundary cases." Do NOT skip when any group is at the HIGH/CONSENSUS boundary — a boundary group always requires the independent pass.

**On disagreement:** If subagent assigns a different tier to any group, reclassify that group as CONTESTED in the final confidence map. The disagreement between two independent reasoners is the finding.

---

## Step 3.6 — Counter-prior pass (mandatory for all HIGH groups)

For every HIGH-tier group (after Step 3.5 final tier assignments):

1. **State the main conclusion** in one sentence: what does this group find?
2. **Write a counter-hypothesis:** "What would have to be true for this conclusion to be wrong?" State it as a specific, falsifiable alternative.
3. **Check the archive:** Is any claim in the archive (in this group or any other group) consistent with the counter-hypothesis?
4. **Log the result:** Either "Counter-hypothesis unsupported in current archive — conclusion survives" OR "Counter-hypothesis partially supported by [claim key] — revisit tier."

**If counter-hypothesis is supported:** Revisit the group's tier. Downgrade to CONTESTED if the supporting evidence is at medium+ verify confidence.

**Zero-HIGH fallback:** If the synthesis produces zero HIGH groups (all CONSENSUS, CONTESTED, or GAP), document explicitly: "Zero HIGH groups — counter-prior pass not required. Strongest group: [name] at [CONSENSUS/CONTESTED]." Counter-prior is not required for CONSENSUS groups because the purpose is to challenge HIGH-confidence conclusions.

**Observable violation:** The number of counter-prior entries is fewer than the number of HIGH groups in the confidence map — partial coverage (one HIGH group missing a counter-prior) is the same failure mode as zero entries. This is counter-prior blindness — one of the three named domain failure modes.

**Scale gate note:** Counter-prior fires for HIGH-tier summary-level groups as well. A summary-level group assigned HIGH still requires a counter-prior entry, even if principles extraction was skipped per the scale gate rule.

**Output format per HIGH group:**
```
Counter-prior — [group name]
Main conclusion: [one sentence]
Counter-hypothesis: [what would have to be true for this to be wrong]
Archive evidence supporting counter: [claim key(s) / none found]
Verdict: [conclusion survives / reconsidered → CONTESTED]
```

---

## Step 3.7 — Principles extraction and extension (required for ALL depth-level groups, every tier)

**(Scale gate exception: summary-level groups skip principles extraction — the scale gate's explicit exemption overrides the "ALL groups" rule above for those groups.)**

The confidence map documents what the research found. This step asks what the research implies — for your specific setup and beyond what was explicitly tested.

**For ALL groups, complete sub-steps A-C:**

**Sub-step A — Extract the principle:**
State the underlying principle the finding embodies, distinct from the finding itself. The principle must be more general than the finding (applies to more contexts) and more abstract (doesn't reference the specific measurement). If Sub-step A produces a principle that is just the finding reworded, it wasn't extracted — it was echoed. Retry.

**Sub-step B — Assess fit:**
"Tested in: [setup]. Our setup differs in: [specific differences]. Principle still applies because: [mechanism that holds across both]. Principle may not apply if: [condition that would break it]."

**Sub-step C — Derive beyond the finding:**
"The principle implies that [X] would also work / fail, even though the research didn't test it, because [mechanism]. Confidence in this derivation: [low/medium/high, with reason]."

**CONTESTED variant:** Run Sub-steps A-C for EACH SIDE of the contradiction. "What would have to be true about the context for side A to dominate? Side B?" CONTESTED findings often contain more design signal than HIGH findings because the contradiction names a real tension to navigate.

**GAP variant:** Sub-step A: what principle WOULD apply here if evidence existed (reason from adjacent findings or first principles)? Sub-step B: what does the absence of evidence tell us about the field? Sub-step C: is the gap researchable?

---

## Step 4 — Adversarial check on user assumptions

From the session brief or plan.md: what did the user assume about this domain?

For each user assumption: find claims bearing on it. Does the research support it, contradict it, or say nothing?

If research contradicts a user assumption: surface this explicitly. Do not soften it. "Your assumption that X — the research on this is [finding]." This is not optional.

If research says nothing: log as a GAP for that assumption.

---

## Step 5 — User questions (CONTESTED and GAP groups only)

Formulate one question per contested/gap item. One at a time.

**What NOT to ask about:**
- HIGH groups — these are settled; asking implies the evidence doesn't matter
- CONSENSUS groups with unambiguous consensus — don't make the user weigh in on accepted practice

**Question format:** "The research on [topic] is contested — [Claim A] vs [Claim B], [confidence levels]. My default would be [X]. Do you want to override, or proceed with that?"

---

## Step 6 — Write synthesis.md

Write to the synthesis output file (use template at `templates/synthesis-output.md.template`):
- Scope record from Preamble
- Grouped table (Step 1)
- Contradiction log (Step 2)
- Confidence map table (Step 3)
- Counter-prior entries (Step 3.6, one per HIGH group)
- Principles and extensions section (Step 3.7, one paragraph per group)
- Adversarial check on user assumptions (Step 4)
- User questions (Step 5)
- New angles: any gap or contradiction suggesting a missing research angle

**Note on checkpoint writes:** The grouped table and contradiction log should have been written to file after Step 2 (per the Step 2 checkpoint rule). This step writes the remaining synthesis output sections in order. Do not hold all remaining sections in memory and write them all at the end.

---

## When to skip

**Only acceptable short-form:** If the cluster has fewer than 15 total claims, a full confidence map table is overhead. Write one paragraph per group. Still required even in short-form: the contradiction scan (Step 2 — both intra-group and cross-group), the counter-prior pass for any HIGH groups, and user questions for any CONTESTED items.

Document the skip explicitly: "Short-form synthesis applied: [claim count] total claims."

## Do NOT skip even when tempted

**Never skip this procedure entirely.** Running research and then building directly from raw claims without synthesis produces the same result as not having the research — the builder inherits the biases of which claims they happened to read first.

**Never skip Step 3.6 (counter-prior)** because a HIGH conclusion feels settled. The settled feeling is the signal that counter-prior blindness may be active.

**Never skip the contradiction scan (Step 2)** because the claims "seem to agree." Implication-level conflicts are invisible unless looked for explicitly.

**Never skip the Preamble** because you "remember" what the session is about. The skeleton generation and scope recording are quality mechanisms, not reminders.

---

**Trace:** Adapted from kit-maker/procedures/research-synthesis.md (Steps 1-3.7, Step 4, Step 5, Step 6, calibration contract, Steps 2.5-2.6, Steps 3.5-3.6). Preamble, scale gate, and counter-prior pass (inline, all HIGH groups) added per phase6-brief.md requirements. Pre-specified precision threshold expanded from research-synthesis.md PCR-167 note. Counter-prior pass simplified from research-synthesis.md Step 3.6 (subagent dispatch → inline, all HIGH groups rather than subagent for top group only) per phase6-brief.md "lean core" and "no internal auditor dispatch" principle. Scale gate parameters from plan.md scale-handling section. Evidence-type scope check from research-synthesis.md Step 2.6 (`grade-public-health-rejection` finding). Composition check from research-synthesis.md Step 3 (`composition-failure-rate` finding, 87.3% wrong synthesis from composition failures). Round 1 audit fixes (2026-07-04): added cross-group contradiction scan to Step 2; defined "independently" in Preamble and HIGH tier; added zero-HIGH fallback and scale gate note to Step 3.6; fixed precision threshold from self-contradicting Step 3 rule to Preamble statement + reference; added Step 3.7 scale gate exception; renamed Step 3.5 heading to "mandatory unless narrow skip condition"; replaced "HIGH-verify" with "medium+ verify"; added >200 claims fallback for unknown count; fixed observable violation from ≥2 to ≥1; moved checkpoint write from Step 6 to after Step 2; added contradiction scan to short-form requirements. Phase 7 cross-file audit fixes (2026-07-04): added "empirical" to Preamble threshold statement and Step 3 reference (both previously omitted "empirical" while formal definition and CLAUDE.md included it — a fresh agent could count medium+verify consensus claims toward HIGH threshold); strengthened Step 3.6 observable violation from "zero counter-prior entries" to "fewer entries than HIGH groups" to catch partial-coverage failures.
