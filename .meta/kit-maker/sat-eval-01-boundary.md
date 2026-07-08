# SAT-EVAL-01 — Phase 4: Boundary Protocol

**Phase:** 4 (Boundary protocol + adversarial verify)
**Status:** DRAFT — 2026-07-04
**Adversarial verify:** See section below.

---

## Two-state protocol

### State 1: SATURATED

**Trigger:** SAT-EVAL-01 returns SATURATED verdict with evidence for all 3 conditions.

**Required worker actions (in order):**

1. **Write saturation verdict to archive:**
   Add to archive's saturation_verdict section:
   ```
   saturation_verdict:
     date: YYYY-MM-DD
     verdict: SATURATED
     conditions_confirmed: [1, 2, 3]
     evaluator_dispatch_id: [checkpoint number or identifier]
   ```

2. **Write RESIDUAL LIMITATION to archive:**
   Copy the RESIDUAL LIMITATION text verbatim from the evaluator verdict into the archive's saturation_verdict section. This field is NOT optional.
   ```
   residual_limitation: "[verbatim text from evaluator verdict]"
   ```

3. **Write post-angle note to cluster notes:**
   In the cluster's running notes file (or equivalent), add one line:
   `[Angle name] CLOSED [date] — RESIDUAL LIMITATION: [one-sentence summary of vocabulary traditions not probed]`
   This makes the limitation visible to subsequent angle selection.

4. **Mark angle CLOSED:**
   In the research session tracking, mark this angle's status as CLOSED with date.

5. **Proceed:**
   Worker continues to next angle or initiates PCR — whichever is next in the TASK_TEMPLATE sequence.

**What worker must NOT do:**
- Do not omit the saturation_verdict write (A1 and PCR depend on this field)
- Do not paraphrase RESIDUAL LIMITATION — copy verbatim
- Do not close the angle before writing saturation_verdict

---

### State 2: NOT_SATURATED

**Trigger:** SAT-EVAL-01 returns NOT_SATURATED verdict with at least one unmet condition named.

**Required worker actions (in order):**

1. **Read the unmet conditions and suggested queries** from the NOT_SATURATED output.

2. **Run the suggested queries (or equivalent):**
   - The evaluator provides 1-2 suggested queries targeting the named gaps.
   - Worker runs these queries (or substantively equivalent queries if the evaluator's exact phrasing is impractical).
   - Worker must NOT run queries that only restate the unmet condition in different words — the queries must address the named gap specifically.

3. **Update archive with new query results.**

4. **Write next checkpoint** (standard checkpoint-write rule: write archive state to disk).

5. **Re-dispatch SAT-EVAL-01** against the updated archive.

6. **Do NOT close the angle** until SATURATED is returned.

**What worker must NOT do:**
- Do not override NOT_SATURATED based on judgment ("I've searched enough")
- Do not re-dispatch the evaluator without running additional queries first (re-dispatching the same archive produces the same verdict)
- Do not close the angle while NOT_SATURATED is the current verdict

---

## Condition waiver path (REQUIRED — gaps found in adversarial verify)

**Trigger:** Worker has targeted a specific unmet condition with ≥3 dedicated queries, all returning zero relevant evidence for that condition specifically.

**Waiver criteria per condition:**
- **Condition 2 waiver (source-type breadth):** ≥3 queries specifically targeting the missing source type (e.g., practitioner guides, tool documentation) all returned zero practitioner/tool results. The source type is genuinely absent from the literature for this topic.
- **Condition 3 waiver (cross-tradition):** Not applicable — there is always an adjacent tradition to probe. If 3 cross-tradition queries all return known keys only, Condition 3 is actually MET.
- **Condition 1 waiver (zero-yield streak):** After ≥3 streak resets (each time reaching ≥2 consecutive zero-yield queries before a new key resets the count), apply the cap: the angle may close on the NEXT 3 consecutive zero-yield queries, regardless of prior streak resets. This provides a hard termination guarantee.

**Worker action when waiver criteria met:**
1. Do not re-dispatch the evaluator with the same evidence.
2. Close the angle with: `saturation_verdict: SATURATED-WITH-CONDITION-WAIVER`
3. In RESIDUAL_LIMITATION: name the waived condition, the 3+ queries attempted, and the evidence that the condition is structurally unmet for this topic.
4. Flag in post-angle note: `[Angle name] CLOSED-WITH-WAIVER [date] — WAIVED: [condition] — [reason]`

**Rationale:** Without a waiver path, Condition 2 unmet (no practitioner sources exist for topic) creates an infinite loop. The waiver path acknowledges that saturation conditions are design ideals — some conditions may be structurally impossible to meet for specific narrow topics. The waiver is always documented with evidence, allowing A1 and PCR to assess whether the waiver was justified.

---

## Edge cases

### Edge 1: Evaluator returns ambiguous or malformed output

**Scenario:** Evaluator output doesn't match SATURATED or NOT_SATURATED format — incomplete, missing conditions, or fails to produce a verdict.

**Worker action:** Treat as NOT_SATURATED — default conservative. Run 2 more queries, re-dispatch.

**Rationale:** Any ambiguity in the verdict means the conditions haven't been confirmed. The cost of an unnecessary query is lower than the cost of a false-SATURATED.

### Edge 2: Worker disagrees with NOT_SATURATED verdict

**Scenario:** Worker believes the angle is genuinely saturated but evaluator returned NOT_SATURATED.

**Worker action:** Run the suggested queries anyway. If they return zero new keys, the next dispatch will return SATURATED. The worker's subjective confidence is not a substitution for the evaluator's structural check.

**Rationale:** This is the entire point of externalization — removing the recognition check. A worker who overrides NOT_SATURATED has recreated the failure mode the mechanism was built to prevent.

### Edge 3: Archive updated during evaluator dispatch (stale data)

**Scenario:** Worker writes archive at checkpoint, dispatches evaluator. While evaluator runs, additional context makes the archive outdated.

**Worker action:** The evaluator evaluates the checkpoint-at-dispatch, not the current state. The checkpoint-at-dispatch is the evidence of record. If the archive was substantially updated during dispatch, treat the evaluation as stale and re-dispatch against the current state.

**In practice:** This edge case is rare — evaluator dispatch is fast (single subagent, no file I/O). The window for meaningful archive update is narrow.

### Edge 4: Diminishing-returns saturation (many queries, 1 new key each)

**Scenario:** Worker has run 12+ queries. The last 4 queries each returned 1 new key. Intuitively the angle feels saturated, but Condition 1 requires zero yield in the last 3 queries.

**Worker action:** Continue running queries. Condition 1 is not met until 3 consecutive queries each return zero new keys. The worker's intuition of "diminishing returns" is not a substitute.

**"Substantively distinct" defined:** Two queries are substantively distinct if they differ in at least one of: (a) vocabulary cluster (different discipline or terminology tradition), (b) question type (scope vs. mechanism vs. application vs. failure mode), (c) source type targeted (academic vs. practitioner vs. tool vs. grey literature). Same underlying question phrased differently = one query.

**Edge 4 precedence:** Edge 4 does NOT override the evaluator. After 3 consecutive zero-yield queries (all substantively distinct by the definition above), re-dispatch the evaluator with the updated archive. The evaluator will then evaluate Condition 1 against this evidence and return SATURATED if Condition 1 (and the other conditions) are met. Edge 4 tells the worker "you now have sufficient evidence to re-dispatch" — the evaluator remains the arbiter of the verdict.

**Termination guarantee via streak-reset cap:** After ≥3 streak resets (each time reaching ≥2 consecutive zero-yield before a new key resets the count), activate the condition waiver path: the angle may close on the NEXT 3 consecutive zero-yield queries, regardless of subsequent individual resets. This provides a hard termination guarantee. Log streak-reset count in the research session notes.

**Why strict:** "1 new key per query" means the angle is still yielding. The calibration (Phase 3) showed that archives declared on "diminishing returns" were genuinely not saturated by the strict standard.

### Edge 5: No suggested queries in NOT_SATURATED output (evaluator prompt defect)

**Scenario:** Evaluator returns NOT_SATURATED but SUGGESTED QUERIES field is empty or generic.

**Worker action:** Run 2 queries independently targeting the named unmet condition:
- Condition 1 unmet → run 2 substantively distinct queries using different vocabulary clusters (per Edge 4 definition)
- Condition 2 unmet → specifically target the missing source type (e.g., practitioner guide, GitHub repo, or empirical report)
- Condition 3 unmet → run 1 query using vocabulary from the most adjacent field not yet searched

Log this as an evaluator prompt defect — Phase 8 maintenance check.

### Edge 6: Cluster notes file doesn't exist (first angle in a cluster)

**Scenario:** Worker closes first angle in a new cluster. The protocol says write post-angle note to cluster notes, but the file doesn't exist.

**Worker action:** Create the file. Required filename: `cluster-[N]-notes.md` (e.g., `cluster-1-notes.md`). Create with a single-line header: `# Cluster [N] — Running Notes`. Write the post-angle note as the first entry. This file is NOT the same as the research archive — it's the cluster-level tracking file.

### Edge 7: Claims added between checkpoints without a search query

**Scenario:** Worker adds claims to the archive that came from prior knowledge or adjacent sources, not from a query in the query log. The evaluator then evaluates the archive.

**Worker action:** Every claim added to the archive must have a source citation. If the source was not found via a query in the query log, add a note: `[source: researcher prior knowledge — not query-sourced]`. The evaluator evaluates source types from the claim-source assignments, not the query vocabulary. A claim sourced from a practitioner document found prior to this session counts for Condition 2 — its source type is assessed from the citation, not the query.

**Archive integrity rule:** No claim without a citation. Unsourced claims must be removed or properly attributed before the evaluator is dispatched.

---

## Adversarial verify

A fresh subagent reads this boundary protocol and identifies any state leaving the worker without clear next action.

**Verify question:** "Given this two-state protocol and edge cases, is there any archive state or evaluator output that would leave the worker without an unambiguous, actionable next step? What would a worker do when they encounter each state? If any state produces ambiguity or a dead end, name it."

**Verify result:** [filled after subagent runs — see below]

---

## Adversarial verify result (2026-07-04)

**Verify verdict: 3 HIGH gaps found → PATCHED before Phase 5**

| Scenario | Gap found | Severity | Resolution |
|----------|-----------|----------|------------|
| 1 — Missing cluster file | Schema undefined for first angle; worker has no file to write to | MEDIUM | Edge 6 added: create file with defined name convention |
| 2 — Condition structurally impossible | No practitioner sources for topic → infinite NOT_SATURATED loop | HIGH | Condition waiver path added: ≥3 targeted queries return nothing → waiver with RESIDUAL_LIMITATION |
| 3 — Rich-topic trickle yields | Cross-tradition queries return new keys → zero-streak never fires | HIGH | Streak-reset cap added to Edge 4: after ≥3 resets, hard termination on next 3 zero-yield |
| 4 — Unqueried claims | Evaluator input model undefined; claim provenance gap | MEDIUM | Edge 7 added: all claims require citation; unqueried claims noted as prior-knowledge sourced |
| 5 — Edge 4 vs. evaluator precedence | Worker has two conflicting signals (Edge 4 says close, evaluator says NOT_SAT) | HIGH | Edge 4 precedence section added: Edge 4 triggers re-dispatch, not direct close; evaluator remains arbiter |

**Three systemic patches applied:**
1. Condition waiver path (Scenarios 2+3)
2. Streak-reset cap with termination guarantee (Scenarios 3+5)
3. Edge 4 precedence clarification: Edge 4 triggers re-dispatch, evaluator arbits the final verdict

**Residual gap (documented, not patched):** "Substantively distinct" query definition still contains a judgment call at the margin. The three-part definition (vocabulary cluster / question type / source type) covers common cases but a stubborn worker could reframe one query to satisfy each criterion. Phase 8 maintenance design should monitor this via audit logs.

**Phase 4 gate: OPEN — proceed to Phase 5.**
