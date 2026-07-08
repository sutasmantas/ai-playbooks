# Goal Checker Maintenance Design

**Status:** INT-07-H output  
**Written:** 2026-07-04  
**Question:** How does the goal checker avoid drifting into fixed-pattern approval over time?

---

## Failure mode: rubber stamp

The goal checker drifts when it produces outputs that look like adversarial checks but aren't. Signatures:

1. **Enumeration without specificity** — "Attacks attempted: Missing factor — none found; Symptom vs. root — not applicable." These are category names without concrete searches. Genuine adversarial output names what was looked for specifically, not just that the category was invoked.

2. **Mode lock** — All outputs cluster at one severity level: always hard block (too aggressive), always soft challenge (binary evasion), or always no-flaw (rubber stamp). Genuine calibration produces a distribution.

3. **Angle atrophy** — All recent outputs used the same 1–2 attack angles. The rotation mechanism (last-angle field) is structural but the goal checker could comply by rotation while still producing shallow analysis on the rarely-used angles.

4. **Anchoring to worker framing** — Goal checker's objections paraphrase the worker's own reasoning rather than introducing independent concerns. This happens when the goal checker slips into reading project-state as justification rather than evidence.

---

## Drift prevention — built-in mechanisms

(Already implemented in the prompt and architecture; documented here for maintenance reference.)

1. **Angle rotation** — "Last goal checker attack angle used" field in project-state enforces rotation structurally. Cannot use same angle twice in a row. This prevents angle atrophy for the immediately prior angle; it doesn't prevent slow drift toward a favorite subset.

2. **Enumeration requirement** — "NO CRITICAL FLAW FOUND" output is invalid without enumeration of attacks attempted and why each failed to hold. This makes the rubber stamp visible: a generic enumeration is detectable.

3. **Worker justification exclusion** — Goal checker reads project-state only. Project-state format prohibits worker reasoning or justification. This reduces anchoring risk; worker cannot make the goal checker's job easier by embedding its own defense in the document.

---

## Periodic audit procedure

**Trigger:** Every 5 sessions of goal checker use, OR whenever a calibration trigger fires (see below).

**What to read:** The last 10 goal checker outputs (from the session transcripts or a goal-checker output log if one is kept).

**What to look for:**

| Audit question | Healthy signal | Drift signal |
|----------------|---------------|-------------|
| Distribution of output types? | Mix of hard block, soft challenge, no-flaw | ≥80% any single type |
| Attack angle distribution? | All 5 angles used across last 10 | 1–2 angles dominate |
| Enumeration specificity? | Each "attacks attempted" entry names a concrete thing looked for and a specific reason it didn't hold | Category names without searches, or "not applicable" without explanation |
| Finding independence? | Findings name things the worker did not mention in project-state | Findings paraphrase project-state content |
| Severity calibration? | Hard blocks cite concrete failure-of-goal, not concerns or gaps | Hard blocks are vague; soft challenges feel like hard block territory |

**How to audit:** Run the last 5 calibration cases from `goal-checker-calibration.md` against the current prompt. All 5 should still produce HARD BLOCK. If any produces soft challenge or no-flaw: drift is confirmed.

**Expected output of audit:** One of:
- "No drift detected — calibration cases pass, distribution healthy" → no action
- "Angle atrophy detected — [angles not used] — no action needed if rotation is enforced" 
- "Enumeration quality degraded — recalibrate" → follow recalibration process below
- "Calibration case failed — [which case] — recalibrate immediately"

---

## Recalibration triggers (from blocking-protocol.md and architecture doc)

Three trigger conditions:

**Trigger 1 — Goal checker too aggressive:**  
3 consecutive hard blocks where the override outcome is later marked "validated" (direction reached done-criteria without the predicted problem materializing). The goal checker is blocking correct work.

**Trigger 2 — Goal checker too weak:**  
3 consecutive overrides without any override outcome marked "goal-checker-was-right." The worker is systematically proceeding past the goal checker's challenges and the challenges are proving irrelevant.

**Trigger 3 — Calibration case failure:**  
Any calibration case from `goal-checker-calibration.md` no longer produces its expected output type. This is the highest-priority trigger — a calibration failure means the prompt's baseline is broken.

---

## Recalibration process

**Step 1 — Identify the drift direction** (from the trigger that fired):
- Trigger 1 (too aggressive): look for over-specification in the prompt — is the attack battery too broad? Is the failure-pattern-match anchor citing too many historical patterns as "similar to current"?
- Trigger 2 (too weak): look for escape clauses — does the prompt have language that makes it easy to output "soft challenge" instead of "hard block"? Are calibration anchors too specific (only catches exact replicas of documented failures)?
- Trigger 3 (calibration failure): compare current prompt against the version at last calibration run. What changed?

**Step 2 — Run full calibration against all primary cases:**  
All 5 cases from `goal-checker-calibration.md` primary section. If any fail: the prompt change broke a calibration. Identify which change caused the failure and revert it.

**Step 3 — Add new calibration cases from recent mistakes.md entries:**  
For every 5 new M-entries since last calibration: add at least one new primary calibration case from the most recent entries. This keeps the calibration anchors current. New cases must:
- Be from documented failures (not constructed scenarios)
- Produce HARD BLOCK when run against the prompt
- Not overlap with existing cases (test a new failure class)

**Step 4 — Document the recalibration:**  
Add a new section to `goal-checker-calibration.md` with:
- Trigger that fired
- What changed in the prompt (or confirmed unchanged)
- New calibration cases added
- Calibration results after change

---

## Temporal decay management

The goal checker prompt contains calibration anchors from M-01–M-39. As new mistakes are added, the prompt becomes outdated — it's calibrated to past failure patterns but may miss new ones.

**Cadence:** After every 5 new M-entries:
1. Read the new entries' Class fields
2. Check: is this class a new variant not covered by any existing calibration anchor?
3. If yes: add a calibration case and note it in the prompt's "Calibration anchors" section
4. If no: the existing anchors cover this class — no change needed

**Priority:** New M-entries in classes not previously documented (new patterns) are highest priority. Recurrences of documented classes (same class, different instance) update the "Recurrence check" field — they do not necessarily require new calibration cases.

---

## Summary of maintenance cadence

| Event | Action |
|-------|--------|
| Every 5 sessions of goal checker use | Periodic audit (distribution, specificity, calibration cases) |
| Trigger 1 fires (3 validated overrides) | Recalibration process — too aggressive |
| Trigger 2 fires (3 irrelevant challenges) | Recalibration process — too weak |
| Trigger 3 fires (calibration case fails) | Immediate recalibration — highest priority |
| Every 5 new M-entries | Check for new failure class; add calibration case if needed |
| Major prompt change | Re-run all primary calibration cases before using new version |
