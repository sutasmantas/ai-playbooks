# Wave 2 — Launch Instructions

**Status:** READY TO LAUNCH — blocked only on user authorization.

When the user says go: follow this document top to bottom. Do not improvise the steps.

---

## Step 1 — Confirm session is free

Wave 2 consumes significant tokens. Before launching: confirm no other workflow is running and the session token budget is clear. See memory: `feedback_check_before_heavy_tasks.md`.

---

## Step 2 — Build the angles array

All P1 angles with full queries are in `kit-maker-research/wave2-p1-queries.md`. Convert each angle to the args format:

```js
{ title: "...", queries: ["...", "...", "...", "...", "..."] }
```

P1 angles to include (33 total across 8 clusters):
- Cluster A: angles 59, 60, 61, 62, 63
- Cluster B: angles 12, 13, 14
- Cluster C: angles 108, 109, 110, 111, 112, 113, 114
- Cluster D: angles 22, 23, 24
- Cluster E: angles 119, 120
- Cluster F: angle 125
- Cluster G: angle 135
- Cluster H: angles 143, 144, 145, 146, 147, 148

**Angle 23 special handling:** Run only 2–3 queries, stop early regardless of saturation. Flag in the angle title: append "(SKIM)" so the research agent knows.

---

## Step 3 — Launch the Workflow

```js
Workflow({
  scriptPath: "kit-maker/scripts/research-wave.js",
  args: {
    angles: [ /* array from step 2 */ ],
    archivePath: "kit-maker/research_archive",
    domain: "kit-maker agent kit design and deployment"
  }
})
```

Run all P1 angles in one wave — they execute in parallel. Do not split by cluster; parallelism is the point.

---

## Step 4 — Handle workflow output

The workflow returns:
```js
{
  summary: { anglesRun, totalClaims, breakdown, verifyResults, newAngles },
  archiveFiles: [ { slug, content, claimCount }, ... ],
  allClaims: [ ... ],
  instructions: "Write each archiveFiles[].content to kit-maker/research_archive/[slug].md ..."
}
```

**Write archive files:** For each item in `archiveFiles`, write `content` to `kit-maker/research_archive/[slug].md` using the Write tool. Do not skip any file, even those with 0 claims (null results are valid output).

**Add new angles:** `summary.newAngles` contains angles the research surfaced. Add each to `RESEARCH_ANGLES.md` under "Wave N+ — Generated from Research Findings."

---

## Step 4a — Post-batch angle triage

Do NOT just dump new angles into RESEARCH_ANGLES.md and move on. After adding them, triage:

For each new angle surfaced:
1. **Priority tier** — P1 (foundational, getting wrong invalidates many decisions), P2 (important but narrower), P3 (refinement after P1/P2 done). Assign explicitly.
2. **Cluster assignment** — which existing synthesis cluster does it belong to? If none: does it need its own synthesis target?
3. **Duplicate check** — does this overlap substantially with an existing angle? If yes: note the overlap rather than adding a standalone entry.
4. **Urgency flag** — does this angle change a decision already made provisionally? If yes: flag it as URGENT and either (a) run it immediately as a targeted follow-up or (b) add a caveat to the provisional decision in the weakness register.

Write triage output as a short table: angle | tier | cluster | duplicate? | urgent?

---

## Step 4b — Evidence sufficiency check

After writing archive files, for each angle answer:
- **Enough to decide?** Does the evidence here, without synthesis, support any immediate update to a kit file (ENTRYPOINT, CLAUDE.md, a procedure, Hard Rule 13)?
- **If yes:** Before applying — **verify-note scope check (M-52, 2026-07-05):** scan the claim's verify note for any of these keywords: "extrapolation," "not in the paper," "beyond tested range," "assumes," "inferred." If any appear: do NOT apply the finding, even as PROVISIONAL. Instead log it as NEEDS-SYNTHESIS-CONFIRMATION with the verify note quoted verbatim. The evidence tier (HIGH/MEDIUM) captures confidence within the claim's scope; it does not capture whether the claim exceeds what the source paper actually tested.
- **If scope check passes:** Apply the update now as a provisional decision. Add a row to `weakness_register.md` provisional decisions table. Note it was applied pre-synthesis and may be revised.
- **If no:** Note what's missing — more research needed, or evidence exists but synthesis across angles is required first.

Do NOT wait for synthesis to apply obvious high-confidence findings. A single high-confidence empirical claim that directly contradicts a current kit rule should update the rule immediately with a provisional marker.

---

## Step 4c — Post-batch research process review

After every batch, assess the research process itself before launching the next one. Answer these questions:

1. **Confidence distribution** — what was the empirical/consensus/anecdote split? What was the verify high/medium/low split? A high low-confidence rate (>20%) suggests query design is reaching for claims the evidence doesn't support.
2. **Saturation signal** — how many queries did angles run before reporting saturation? Angles that ran all 5 queries and still didn't saturate need redesigned queries or additional angles. Angles that saturated at query 2-3 suggest the angle was too narrow.
3. **New angle explosion rate** — how many new angles did the batch surface per original angle? A 4:1 or higher ratio suggests original angles were too broad (each is spawning sub-questions instead of answering the original). Consider whether the next batch should narrow its angles before launching.
4. **Null result rate** — what fraction of angles returned null results on one or more queries? High null rates may indicate query formulation problems or genuine gaps in the literature.
5. **Verify override rate** — how often did the verify pass downgrade a claim from empirical to consensus or anecdote? High rates indicate the research agent is over-classifying.
6. **What to change for next batch** — based on the above: any adjustments to query design, angle scope, or verify prompt before launching?

Write process review output to `kit-maker-research/post-batch-review-[batch-name].md`.

---

## Step 4d — Synthesis gate (required before any new batch)

**Do not launch a new research batch until at least one synthesis cluster from the prior batch is complete and its decisions applied to kit files.**

This is not a soft guideline. Archives accumulate; decisions don't. Every batch that runs before synthesis widens the gap between "research done" and "kit improved." The goal is a better kit, not a larger archive.

Check: how many clusters currently have 📋 ARCHIVE EXISTS with no synthesis? If the count is greater than one batch worth of clusters (roughly 4+), that is the bottleneck — synthesis is behind research, and adding more research makes it worse.

The synthesis gate fires based on archive count, not time. Time is not agent-checkable.

---

## Step 5 — Synthesis (run per cluster, in this order)

Order matters: clusters that govern quality criteria (C) should synthesize before clusters that depend on quality criteria being right (A, E).

| Order | Cluster | Angles | Synthesis target | Why this order |
|-------|---------|--------|-----------------|----------------|
| 1st | C — Research quality | 108–114 | `wave-p1-research-quality-synthesis-target.md` | May update research-quality.md before other syntheses run |
| 2nd | B — Meta-research | 12–14 | `wave-p1-meta-research-synthesis-target.md` | May update research-wave.js process before P3 wave runs |
| 3rd | A — Rule writing | 59–63 | `wave-p1-rule-writing-synthesis-target.md` | Informs all kit rule writing going forward |
| 4th | D — Kit validation | 22–24 | `wave-p1-kit-validation-synthesis-target.md` | Informs Phase 7 VERIFY updates |
| 5th | E — Advisor behavior | 119, 120 | `wave-p1-advisor-behavior-synthesis-target.md` | Informs behavioral contract file in Phase 6 |
| 6th | F — Direction alternatives | 125 | `wave-p1-direction-alternatives-synthesis-target.md` | Informs mandatory-reflection question 9 + trajectory signal threshold |
| 7th | G — Direction drift | 135 | (generate before synthesizing) | Validates direction-drift check in satisficing-and-roi.md and CLAUDE.md — update thresholds if research finds better calibration |
| 8th | H — Problem-solving gaps | 143–148 | `wave-p1-problem-solving-gaps-synthesis-target.md` | Determines which of six mechanisms (criteria-before-eval, second-order, backward chaining, double-loop, MECE, rubber duck) should become explicit kit procedure steps |

For each cluster synthesis:
1. Read the synthesis target file listed above
2. Read the corresponding archive files in `kit-maker/research_archive/`
3. Run `procedures/research-synthesis.md` full procedure
4. Write output to `kit-maker/research_archive/synthesis-[cluster-name].md`

---

## Step 6 — Post-synthesis updates (blocking before P2/P3 wave)

After ALL cluster syntheses complete:

**From Cluster C (research quality) synthesis:**
- Check Table 4 in synthesis output for HIGH-priority updates to `procedures/research-quality.md`
- Apply any blocking updates BEFORE launching P2/P3 waves

**From Cluster B (meta-research) synthesis:**
- Check Table 3 for blocking updates to `procedures/research-quality.md` or `scripts/research-wave.js`
- Coordinate with Cluster C updates — apply both together

**From Cluster A (rule writing) synthesis:**
- Validate `scripts/verify_prompt.md` 10-point checklist against Table 2 (anti-pattern register)
- Update checklist if HIGH-confidence contradictions found

**From Cluster D (kit validation) synthesis:**
- Update ENTRYPOINT Phase 7 gate if Table 3 contains agent-executable validation methods not currently there
- If Table 3 is empty: add entry to `templates/weakness_register.md.template` coverage limits

**From Cluster E (advisor behavior) synthesis:**
- If Table 4 surfaces a new decay-resistance mechanism: update `kit-maker/CLAUDE.md`
- Validate ENTRYPOINT Hard Rule 13 required elements against Table 1

**From Cluster F (direction alternatives) synthesis:**
- Update `procedures/mandatory-reflection.md` question 9 triggers if research supports a better threshold than "3 consecutive decreasing actions"
- Update `procedures/satisficing-and-roi.md` trajectory signal section with evidence-based threshold or note it remains a heuristic
- If synthesis identifies a reliable alternative-generation mechanism: add it to mandatory-reflection.md question 9 as a concrete method step

---

## Step 7 — Check saturation

After synthesis: is Wave 2 P1 saturated?

Whole-wave saturation = BOTH:
- (a) diverse angle strategies all return overlapping claim keys
- (b) new claims per agent dropped below threshold by end of wave

If saturated across P1: launch P2 wave (angles 7–11, 18–21, 31–38, 48–55). Generate queries for P2 angles first, show to user, confirm before launching.

If NOT saturated: generate additional angles from what was found. Run targeted follow-up before P2.

---

---

## After P1: launch P2 wave

P2 queries are ready in `wave2-p2-queries.md` (angles 7–11, 18–21, 31–38, 48–55, 126–130, 136–142, 149–155). Same process as P1:
1. Build angles array from wave2-p2-queries.md
2. Launch research-wave.js with same domain and archivePath
3. Synthesis targets status:
   - Angles 126–130 (adversarial test gaps): `wave-p2-adversarial-test-gaps-synthesis-target.md` **EXISTS**
   - Angles 136–142 (agent quality mechanisms): `wave-p2-agent-quality-synthesis-target.md` **EXISTS**
   - Angles 149–155 (problem-solving structural): `wave-p2-problem-solving-structural-synthesis-target.md` **EXISTS**
   - Angles 7–11, 18–21, 31–38, 48–55: synthesis targets do NOT yet exist — generate them before synthesizing

Synthesis order for P2 (suggested):
1. Angles 126–130 first — these feed pipeline mechanics (resume, dedup, ordering) that affect how remaining synthesis runs
2. Angles 7–11 (GitHub examples) — ground truth on real-world kits
3. Angles 31–38 (AI instruction design) — informs rule writing directly
4. Angles 18–21 (kit limits) — calibrates scope
5. Angles 48–55 (claude_process patterns) — validates existing kit design choices

Structural alternative angles (121–124, 131–134) are P3 — check after P1+P2 synthesis determines whether current direction is producing value before researching alternatives to the whole approach.

---

## What NOT to do

- Do not synthesize without reading the synthesis target first
- Do not apply Cluster B/C updates piecemeal — apply both together
- Do not launch P2 wave before post-synthesis updates are applied
- Do not skip writing archive files for angles with 0 claims — null results are valid output
