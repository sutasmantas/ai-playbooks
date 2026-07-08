# Procedure: Post-Cluster Review

**Use when:** Any research cluster completes — all angles archived, saturation confirmed in every file.

**Why this exists:** Research findings not applied to existing kit files are wasted. The process has a known failure mode: applying the obvious direct change (update the procedure that was just researched) while missing indirect implications. The self-referential case is the sharpest example: Cluster C defined research quality criteria, then violated them in the same run, because the review-and-apply step didn't fire. This procedure makes the cross-match systematic.

**Success criterion:** The cross-match in Step 2 was run to completion AND all findings — including nulls — are documented. Two valid outcomes:

- **Improvements found:** Each change is traceable to a specific claim key AND addresses either (a) a direct conflict between the claim and existing kit content, or (b) a mechanism gap where existing rules state WHAT without the WHY this claim now supplies. Change ≠ improvement — adding information from a claim to a file that had no gap is not a success signal. An unevidenced "enrichment" edit can weaken a kit by diluting focused rules with loosely-related caveats.
- **Null result (equally valid):** All HIGH/MEDIUM claims were cross-matched, no conflicts or mechanism gaps found. Must be explicitly logged: "Cross-match complete — no applicable improvements found for this cluster." A documented null result is a success. An undocumented null is indistinguishable from a skipped review.

"The review produced something to change" is NOT the criterion — that criterion is self-sealing because a well-prompted LLM will always find a plausible connection. The criterion is: was the cross-match complete, and were findings (including the absence of findings) documented?

---

## Step 1: Extract actionable claims

From the cluster's archive files, collect claims where:
- `evidence: empirical` AND `confidence: high` or `medium`
- OR `evidence: consensus` AND the claim contradicts or updates an existing kit decision

Leave out `confidence: low` empirical and bare `anecdote` claims — these do not have the epistemic weight to justify changing existing decisions.

## Step 2: Generate audit list by cross-matching against kit files

### Sub-step 2.0 — Read principles before claims (required first)

Open the cluster's synthesis.md and read the Step 3.7 "Principles and extensions" section **before** opening the claims table. For each principle extracted (Sub-step A of Step 3.7), ask:

> Does any existing kit procedure or rule **violate this principle** — even if it doesn't directly contradict the specific finding?

Flag these as **Principle extension** items. They are often higher-value than finding-level cross-matches because the principle applies to procedures the study never tested. A finding says what happened in one setup; the principle says why it happened and what else follows.

Only after Sub-step 2.0 is complete: open the claims table and run Sub-steps 2.1 and 2.2.

---

### Sub-step 2.1 — Dimension question (before file question)

For each claim from Step 1, before asking which files it applies to, ask which **quality dimensions** it affects. The same finding is often relevant to multiple dimensions simultaneously; a file-first question misses the non-obvious targets.

Dimensions to check:
- **Session-level compliance** — behavioral contract decay, rule placement, restatement triggers
- **Task-execution discipline** — class-before-instance, done-criteria, alternatives-generation
- **Research quality** — query design, saturation detection, source coverage, adversarial framing
- **Synthesis quality** — confidence tiering, contradiction handling, principles extraction
- **Verification quality** — auditor design, audit criteria, canary calibration
- **Generated-kit behavioral contract** — what propagates via Hard Rule 13 or Phase 6 checklist
- **Phase 7 test coverage** — should this finding be tested specifically in the trial?

For each dimension flagged: trace from the dimension to the specific files where it shows up. This is the cross-match target list. A finding that affects "session-level compliance" applies to CLAUDE.md, ENTRYPOINT.md, TASK_TEMPLATE.md, and Phase 7 test design — not just the most obvious one.

---

### Sub-step 2.2 — Per-claim cross-match questions

For each claim, against each file/dimension target from Sub-step 2.1:

1. **Conflict:** Does any existing kit procedure or rule say something this claim contradicts? → high priority, apply now
2. **Mechanism gap:** Does any existing kit rule state WHAT to do without the mechanism WHY (which this claim now supplies)? → medium priority, add the rationale
3. **Grounding opportunity:** Is any grounding-map decision ❌ UNRESEARCHED or ⚠️ CONSENSUS ONLY that this cluster now has evidence for? → update grounding-map entry
4. **Gap-fill signal:** Does this cluster update a criterion (saturation, source coverage, adversarial framing) that prior archives were written under the old version of? → check prior archives for compliance
5. **Principle extension** (from Sub-step 2.0): Does the principle behind this finding imply something for this procedure that the finding itself didn't directly test? → medium priority

Each audit item: claim key + existing kit element + conflict type (contradicts / mechanism-gap / grounds / gap-fill / principle-extension).

---

### Sub-step 2.3 — Cross-finding pass (runs once, after all per-claim cross-matches complete)

After the per-claim loop finishes: check for **compound mechanisms** — mechanisms that emerge from combining two findings, which neither finding implies alone.

Check HIGH×HIGH combinations only:
- Any two HIGH-confidence claims from this cluster
- Any HIGH claim from this cluster + any HIGH claim from a prior cluster's synthesis.md

For each pair: "Does combining these two findings suggest a mechanism that neither implies individually?"

Write any compound mechanisms to the audit list with both claim keys cited. Keep this pass bounded — HIGH only, pairs only, stop when no new compounds found. Not every pair produces a compound mechanism; a null result is valid and should be documented.

**Example:** Claim A (behavioral contract compliance decays 73%→33% by turn 16) + Claim B (fresh subagents start at full behavioral contract compliance) → Compound mechanism: use subagents for evaluation tasks so the evaluator always starts at full compliance. Neither claim alone implies this.

Each audit item from this pass: claim-key-A + claim-key-B + compound mechanism description.

## Step 3: Prioritize by (confidence × impact × stability)

Score each audit item:

| Factor | Value |
|--------|-------|
| Confidence | HIGH = 3, MEDIUM = 2 |
| Impact | Affects every research wave or many kit decisions = 3; affects one procedure = 1 |
| Stability | Queued Wave N angle will directly revisit this topic? → defer (apply provisional note only) |

**Apply in the current session:** items scoring ≥ 4 on confidence × impact.
**Defer:** items scoring < 4 → add to `design_log.md` Discovered Work.

Stability check prevents over-investing in areas that will be re-researched soon. A provisional note ("to be updated when angle N runs") is better than a full change that will be obsoleted.

## Step 3.5: Generate mechanism options (runs before Step 4)

For each audit item proceeding from Step 3, before writing any change:

1. State the underlying **principle** — from Step 3.7 in synthesis.md, or derived from the finding. The principle is more general than the finding. If you cannot state a principle more abstract than the finding itself: the principle hasn't been extracted yet. Do it now.

2. Generate **2–3 possible mechanism implementations** of that principle. At least one must differ structurally from the most obvious approach (not a wording variation — a different structural form). Examples of structural alternatives: text rule vs. gate that blocks progress vs. tool restriction vs. subagent dispatch vs. external file loaded on demand.

3. **Score each option** against the goal model: does this mechanism implement the principle correctly for our specific setup? What are its failure modes? What does it assume about the kit's context?

4. **Choose one explicitly.** Write: "Chosen: [mechanism]. Reason: [one sentence]. Alternatives considered: [brief]." Log this to `design_log.md` alongside the claim key.

5. Carry the chosen mechanism into Step 4.

**Why this step exists:** The first obvious implementation is not always the best one. The PCR has historically picked the most immediate structural translation of a finding (e.g., "restate rule at top+bottom" when salience-decay was found) without considering alternatives (load from external file, subagent dispatch, structural gate). Those alternatives were only discovered later, in separate tasks. This step makes alternative-generation mandatory at the point where it matters.

**Shortcut:** If only one structurally distinct implementation exists for this principle in our setup — state that explicitly rather than generating weak alternatives. A documented single-option is valid. Generating strawman alternatives to meet the count defeats the purpose.

---

## Step 4: Apply improvements

**Gate A (required before writing any change) — Pattern I check:**

Ask: "Am I implementing the **recipe** from the study, or a **derivation from the underlying principle**?"

- **Recipe:** copying the specific technique the study used for the study's specific setup. Example: "implement Constitutional AI's self-critique cycles" rather than "implement external evaluation by an agent that did not produce the work."
- **Principle derivation:** implementing what the principle implies for our setup, which may look different from the study's technique.

If recipe: stop. State the principle. Ask "what implementation of this principle fits our setup?" Then proceed with a principle derivation.

**The recipe/principle distinction matters because** the recipe was calibrated for the study's setup, which may differ substantially from ours. The principle generalizes across setups. Implementing the recipe in a different setup often produces a superficially similar change that fails for the same reason the study's setup succeeded — the mechanism isn't there, only the surface pattern.

---

**Gate B (required before writing any change) — Structural type routing:**

Classify the change chosen in Step 3.5:

- **Type A — Text edit:** wording change, rationale addition, or clarification to an existing rule. Apply directly.
- **Type B — New rule in existing section:** addition to an existing procedure or file section. Apply directly, then run a density check — does the rule count in this file exceed the culling threshold? If yes, apply culling before closing.
- **Type C — New structural element:** new step, new gate, new trigger, new procedure file. Do not apply inline. Draft the new element first, review it against alternatives from Step 3.5, check for placement dependencies, then integrate.

Type C changes are the most likely to create inconsistencies with the rest of the procedure if applied carelessly. The extra staging step is mandatory for Type C, optional for Type A and B.

---

**Evidence-strength routing (applies to all types):**

Match implementation strength to evidence strength:

- **HIGH confidence:** implement as **structural enforcement** where possible — a gate, a hard requirement, a tool restriction that fires regardless of agent preference. If structural enforcement isn't applicable: implement as MUST rule AND add a Phase 7 behavioral test specifically checking this rule fires under realistic conditions.
- **CONSENSUS:** implement as guideline. Label it "(CONSENSUS ONLY)" in grounding-map.md. Add an upgrade path note: "This becomes SYNTHESIZED when: [specific angle that would provide empirical evidence]."
- **SYNTHESIZED / MEDIUM:** implement as provisional. Write a flip trigger: "This rule should be revised or removed if: [specific observable state — not 'if new evidence appears' but a concrete condition]."

**For all evidence tiers — write to `state/rule-outcome-register.md` immediately after applying the change (A1+A2):**

1. **Outcome statement (A1):** "Rule [short-ID] added [date], based on [claim-key], expected to improve [specific observable dimension]: [what you would see more or less of in kit outputs]. Check after [N=5] trial runs."
2. **Flip trigger (A2):** "Rule [short-ID] should be revised or removed if: [specific observable state]." Calibrate to tier: HIGH → fires if Phase 7 behavioral test fails repeatedly and the mechanism is confirmed absent; CONSENSUS → fires when the named upgrade-path angle produces empirical evidence; SYNTHESIZED/MEDIUM → fires on the condition named in the provisional statement.

The rule-outcome-register gives every rule an exit condition. Without it, rules only accumulate — behavioral contracts drift toward maximum density, which degrades compliance.

**Why this routing matters:** Rules written from HIGH-confidence findings should be enforced structurally; rules from CONSENSUS should be held more loosely. When all rules look the same (MUST phrasing, no label), the evidence basis is invisible and the culling pass can't distinguish what to protect from what to drop.

---

**After routing — write the change:**
- Edit the specific file and section
- The change wording must cite the claim key: "Based on `[claim-key]` (HIGH/MEDIUM)"
- For Type C changes: cite the staging review in design_log.md
- Update `grounding-map.md` for any decision that changed status

## Step 5: Re-review from the new vantage (subagent dispatch — CONVERT-6)

After improvements are applied, dispatch a **fresh subagent** for this step. The subagent must not have access to the reasoning that drove the changes.

**Subagent inputs (exactly these, nothing more):**
- List of changes just applied: which files, which sections, what was added or changed
- Current state of the kit-maker file manifest (file list + one-line descriptions)
- Prompt: "Given these recent changes to the kit-maker, what does the current state now reveal that was not visible before? Look for: inconsistencies the new rules expose in adjacent procedures, gaps left by what was added, compound effects the individual changes produce together. Return one P0 or P1 item if found, or explicitly state nothing was revealed."

**Subagent must NOT receive:**
- The claim keys or research findings that drove the changes
- The reasoning chain from Steps 2–4 of this PCR
- The original audit list or the mechanism-options considered in Step 3.5

**If the subagent returns one P0/P1 item:** apply it. This is the one additional pass.
**If the subagent finds nothing:** log explicitly "Step 5 null — no new exposures" and close.

**Why subagent (CONVERT-6):** The agent that applied changes is anchored to the reasoning that produced them — it will tend to validate its own work. A fresh subagent with no access to that reasoning reads the kit state from a genuinely independent vantage. Same justification as CONVERT-1/2 for Steps 3.5/3.6 of research-synthesis.md.

## Step 6: Update grounding-map

For every kit decision that changed status, update `grounding-map.md`. Include cluster name, date, and the claim key that drove the change.

## Step 7: Add new angles to queue

Add all P1+ new angles surfaced by the cluster to `RESEARCH_ANGLES.md`. Include pre-generated queries where the archive already surfaced them.

---

## What this procedure does NOT do

- Does not generate a list of potential improvements from intuition — only from claim-cross-match
- Does not require every claim to produce an improvement — null result (no contradictions found) is valid
- Does not run for `anecdote` or `low`-confidence `empirical` claims

---

**Trace:** Cluster C gap-fill post-mortem (Cluster C defined research quality criteria but violated them in the same run — no review-and-apply step fired). Angle 162 `multi-database-minimum-two-for-95-percent-recall` (HIGH) validated the source strategy that was missing from research-quality.md, applied in the same session via this procedure.
