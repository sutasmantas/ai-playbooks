# Finding-to-Process Translation: Improvements

**Created:** 2026-07-03
**Scope:** Specifically the mechanism by which a research finding becomes a process change — the path from claim archive through PCR cross-match to edited procedure file.

**Current path:**
```
Research archive (claim keys, evidence types, confidence levels)
  → Synthesis (grouping, confidence map, Step 3.7 principles extraction)
  → PCR cross-match (conflict? mechanism gap? grounding opportunity?)
  → Apply targeted edit, cite claim key
  → grounding-map.md update
```

Each improvement below identifies exactly where in this path the current design is weak.

---

## Problem 1: PCR cross-matches findings, not principles

**Where it happens:** PCR Step 2 — the question asked is "does this claim contradict an existing rule?"

**What's wrong:** Step 3.7 in synthesis extracts a principle more general than the finding — the mechanism behind the result, not the result itself. But PCR Step 2 reads the finding, not the principle. Cross-matching at the finding level only catches direct contradictions ("this claim says X; that rule says not-X"). Matching at the principle level would also catch: rules that violate the principle without contradicting the specific finding, and opportunities to apply the principle to procedures the study never tested.

**Example:** Finding: "behavioral contract compliance decays 73%→33% by turn 16." Principle: "rule compliance is a function of contextual position and recency — rules compete for attention against accumulated content." The finding-level cross-match catches "do we restate rules at top and bottom?" The principle-level cross-match also catches "do we load procedures from external files on-demand rather than front-loading them all?" and "do Phase 7 tests specifically check for late-session compliance?" — neither of which the finding directly addresses.

**Fix:** PCR Step 2 should start by reading the Step 3.7 principles section from the cluster's synthesis.md, not the findings table. For each principle: "what in the current procedures violates this principle, is silent about it, or could better implement it?" Run the finding-level cross-match second, as a consistency check.

---

## Problem 2: No mechanism-options step — one implementation is picked implicitly

**Where it happens:** PCR Step 4 — "apply improvements"

**What's wrong:** A finding proceeds from Step 3, and Step 4 applies one change. There is no step where multiple implementations of the same principle are considered and chosen between. The most obvious implementation is the one that gets written. alternatives-generation.md exists as a procedure but is not wired into PCR at all — there is no trigger for it here.

**Example:** Principle: "salience is position-dependent." Possible implementations: (a) restate rule at top AND bottom — written; (b) external file loaded fresh at each phase — not considered; (c) subagent dispatch that starts at turn 0 — not considered; (d) tool-enforced structural gate — not considered. We chose (a) because it was the most immediate, not because it was evaluated against the others.

**Fix:** Insert a PCR Step 3.5 between prioritization and application: "For each item proceeding to Step 4, generate 2–3 possible mechanism implementations. State what each assumes about our setup. Pick one explicitly. Write the choice and the reason to design_log.md." This is alternatives-generation applied to PCR. The chosen implementation then goes to Step 4.

---

## Problem 3: Implementation strength doesn't match evidence strength

**Where it happens:** PCR Step 4 — the edit itself

**What's wrong:** A HIGH-confidence finding (multiple independent empirical replications, high verify confidence) and a CONSENSUS finding (practitioner agreement, no controlled study) both currently become rules written in the same imperative format in CLAUDE.md. But they warrant different implementation force:
- HIGH → structural enforcement: a gate, a hard requirement, a tool restriction that fires regardless of the agent's preference
- CONSENSUS → guideline with label: MUST/ALWAYS phrasing but no structural gate; explicit "CONSENSUS ONLY" label in grounding-map
- SYNTHESIZED (directional but not HIGH) → provisional note with flip trigger

Currently all three are written as MUST rules with no label distinguishing their evidence basis. A rule grounded in a 4,416-trial replication study looks identical to one grounded in "practitioners tend to do this."

**Fix:** PCR Step 4 gets an evidence-strength routing rule:
- HIGH confidence findings → implement as structural enforcement where possible (a gate, a step that blocks progress, a tool call requirement). If structural enforcement isn't applicable, implement as MUST rule AND add a Phase 7 behavioral test specifically checking this rule fires.
- CONSENSUS → implement as guideline, label it "(CONSENSUS ONLY — upgrade path: [specific angle that would produce empirical evidence])" in grounding-map
- SYNTHESIZED or MEDIUM → implement as provisional, write flip trigger at application time

---

## Problem 4: Pattern I — recipe-copying instead of principle-implementing

**Where it happens:** PCR Step 4 — writing the actual change

**What's wrong:** Pattern I (research used as prescription, M-30) is supposed to be fixed by Step 3.7 extracting principles before application. But in practice the change written at PCR Step 4 is usually the technique described in the paper, not a derivation from the principle for our specific setup. We copy what the study did.

**Example:** Finding: Constitutional AI uses self-critique cycles. We implemented: "agent reviews its own output." The correct derivation from the principle ("external evaluation with different framing is more accurate than self-evaluation") is: "separate evaluation agent with no producer context" — which is what we just did with the subagent conversions. But this took months and a separate task to arrive at; it wasn't derived at PCR time from the principle.

**Fix:** At PCR Step 4, before writing any change: one required question — "am I implementing the recipe from the study, or a derivation of the underlying principle?" If recipe: state the principle first, then ask "what implementation of this principle makes sense for our specific setup?" These may look the same sometimes, but when they differ, the principle-based derivation is more general and more durable.

---

## Problem 5: Cross-match is file-centric — misses cross-cutting implications

**Where it happens:** PCR Step 2 — the cross-match question

**What's wrong:** PCR Step 2 asks "which existing kit files does this claim apply to?" This is a file-centric question. But most significant findings are dimension-centric — they apply to a quality dimension of the system, which shows up in multiple files, multiple procedures, and the test design. The file-centric cross-match applies a finding to its most obvious home file and stops.

**Example:** The behavioral contract decay finding (omission-commission-asymmetry) was applied to ENTRYPOINT.md. It also applies to: CLAUDE.md always-on rules (which have the same decay problem), TASK_TEMPLATE.md session checks (which are the structural enforcement for the decay problem), Phase 7 test design (which should explicitly test late-session compliance), and propagation-map.md (generated kits need the same enforcement). We got ENTRYPOINT.md. The others were only reached later, by accident.

**Fix:** PCR Step 2 cross-match asks a dimension question before the file question: "which quality dimensions does this finding affect?" Dimension list: session-level compliance, task-execution discipline, research quality, synthesis quality, verification quality, generated kit behavioral contract, Phase 7 test coverage. Cross-match runs against each applicable dimension, then traces from dimensions to files. This catches the non-obvious file targets that the single-file cross-match misses.

---

## Problem 6: No mechanism for findings that require structural additions, not text edits

**Where it happens:** PCR Step 4 — "targeted edits only, not full rewrites"

**What's wrong:** Some findings imply a new structural element, not a text edit to an existing one — a new procedure step, a new phase gate, a new trigger. The "targeted edits" instruction biases toward text changes. But some of the most valuable applications of research are structural additions: adding Step 3.7, adding the subagent dispatch steps, adding the adversarial Q3 requirement. These aren't edits — they're insertions of new steps.

**Current handling:** PCR Step 4 technically allows new content, but the "targeted edits only" phrasing creates friction. New structural elements require more thinking about placement, ordering, and dependencies. The procedure has no guidance for when a structural addition is the right response vs. a text edit.

**Fix:** PCR Step 4 adds a routing branch: "Is the right response (a) a text edit to an existing rule, (b) a rationale addition to an existing rule, or (c) a new structural element (new step, new gate, new trigger)?" For type (c): write the new element to a dedicated staging file first, check it against alternatives-generation.md, then integrate. The extra step prevents new structural elements from being written in haste and creating inconsistencies.

---

## Problem 7: Findings applied one at a time — cross-finding mechanisms missed

**Where it happens:** PCR Step 2-4 — the entire apply loop

**What's wrong:** The PCR loop processes claims one at a time. Some mechanisms only emerge from combining two findings from different domains that neither suggests alone. These combinations are invisible to a per-claim cross-match.

**Example that already happened:** Finding A (behavioral contract compliance decays in long sessions) + Finding B (fresh subagents start at full behavioral contract compliance) → Mechanism (use subagents for evaluation tasks so the evaluator always starts at full compliance). Neither finding alone implies this mechanism. The combination is what implies it. We arrived at this via a separate task, not via the PCR.

**Fix:** PCR Step 2 adds a cross-finding pass as the last step after the per-claim cross-match completes: "Taking all HIGH-confidence claims from this cluster together with HIGH-confidence claims from prior clusters: do any two findings in combination suggest a mechanism that neither suggests alone?" This pass is bounded (HIGH only, cross-cluster only, not exhaustive) and runs once per PCR, not per claim. It catches compound mechanisms before they require a separate insight task.

---

## Summary: where the translation breaks

| Step in current path | Problem | Fix |
|----------------------|---------|-----|
| PCR Step 2 (cross-match) | Matches findings, not principles | Read Step 3.7 principles first; cross-match at principle level |
| PCR Step 3.5 (missing) | No mechanism-options step | Insert: generate 2-3 implementations; pick with reason |
| PCR Step 4 (apply) | Implementation strength doesn't match evidence strength | Evidence-strength routing: HIGH→structural gate, CONSENSUS→labelled guideline, SYNTHESIZED→provisional |
| PCR Step 4 (apply) | Recipe-copying instead of principle-implementing | Required question: "recipe or principle derivation?" |
| PCR Step 2 (cross-match) | File-centric, misses cross-cutting dimensions | Dimension question before file question |
| PCR Step 4 (apply) | "Targeted edits" biases against structural additions | Add type-c routing for new structural elements |
| PCR Step 2-4 (apply loop) | Findings applied one at a time, cross-finding mechanisms missed | Cross-finding pass at end of PCR Step 2 |

The net effect of all seven problems: the PCR takes a HIGH-confidence principle and produces the most obvious, finding-literal text edit to the most obvious file. The output is technically grounded but under-powered — it doesn't capture what the principle implies beyond the finding, doesn't consider alternative implementations, doesn't propagate to all the files the principle touches, and misses mechanisms that the principle combination implies.
