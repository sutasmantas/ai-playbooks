# Research-to-Process Pipeline: Gaps and Improvements

**Created:** 2026-07-03
**Method:** Goal-model-first derivation. Read all pipeline files (research-quality.md, research-synthesis.md, post-cluster-review.md, grounding-map.md, propagation-map.md, ENTRYPOINT.md) before generating. Each item names the current gap it fills and is specific enough to evaluate or implement.

**Goal model:** Perfect results with minimal user correction. Agent drives toward goal; user validates and makes judgment calls only.

**Current pipeline (what exists):**
Phase 3 Research → Phase 4 Synthesis (Steps 1–3.7) → Post-cluster-review (PCR, Steps 1–7) → Apply to kit files → Track in grounding-map.md / propagation-map.md → Validate in Phase 7 trial.

---

## Category A — Closing the loop (measuring whether applied changes work)

These are the highest-impact gaps. We apply research findings but have no mechanism to learn whether the applied changes actually improved kit behavior.

### A1: No outcome measurement for applied rules

**Current gap:** When a research finding becomes a rule in CLAUDE.md or ENTRYPOINT.md, the connection ends there. There is no tracking of "rule X was added on date D based on finding F — do kit outputs improve on the dimension F addressed after D?" The goal-achieving-plan.md calibration log tracks general outcome scores, but it is not connected to specific rule additions. We cannot tell which applied changes worked.

**Improvement:** At PCR Step 4 (apply improvements): for each change applied, write one sentence to a `state/rule-outcome-register.md` file: "Rule [ID] added [date], based on [claim key], expected to improve [specific observable]: [what you'd expect to see more/less of in kit outputs]. Check after [N=5] trial runs." This is not a mechanism — it's a pre-specified measurement. Goodhart's Law applies to rules as much as metrics: if a rule has no stated measurement criterion, it becomes cargo cult over time.

**Why not currently:** PCR procedure was built to apply changes correctly, not to track their effectiveness post-application.

---

### A2: No flip-trigger discipline for applied rules

**Current gap:** Rules accumulate in CLAUDE.md and ENTRYPOINT.md with no exit conditions. When a rule is added based on SYNTHESIZED evidence (which can be wrong or context-dependent), there is no stated condition under which it would be removed or revised. The grounding-map records status but not the reopen trigger for the specific implementation.

**Improvement:** At PCR Step 4 (apply improvements): every rule change gets a paired flip-trigger statement written to `state/rule-outcome-register.md` (same file as A1): "Rule [ID] should be revised/removed if: [specific observable state — not 'if evidence improves' but 'if Phase 7 trial shows fewer than X instances of Y' or 'if the ExpeL extraction in session N produces a lesson contradicting it']." The flip trigger is specific and checkable, not "if new evidence appears."

**Why this matters:** Rules without flip triggers never leave; behavioral contracts drift toward maximum density (rule count only increases), which the density constraint research showed degrades compliance exponentially.

---

## Category B — Better handling of uncertain findings

### B1: CONTESTED findings stall — no provisional-implement-and-test path

**Current gap:** When synthesis produces a CONTESTED group (two claims with unresolved contradiction), the pipeline asks the user a question. If the user defers, a decision is made and documented as CONTESTED with no follow-up. provisional-decision.md exists as a procedure but is not wired into the synthesis pipeline — it is never triggered automatically from a CONTESTED finding.

**Improvement:** At synthesis Step 5 (user questions for CONTESTED/GAP): for each CONTESTED group where the user defers — before moving on — write a provisional-decision entry to `design_log.md` using provisional-decision.md's format: (a) implement provisional A, (b) write the specific flip trigger (what evidence would switch to B), (c) note which Phase 7 trial scenario would resolve the contest. CONTESTED status should not be a permanent resting state — it should convert to either PROVISIONAL (flip trigger written) or CLOSED (accepted as unresolvable).

---

### B2: GAP findings have no time-bounded close path

**Current gap:** GAP groups in the confidence map — where research was attempted but nothing relevant found — get added to RESEARCH_ANGLES.md as future angles. Some of these are genuinely researchable; others are gaps in the literature itself (no study exists). These sit in the queue indefinitely.

**Improvement:** At synthesis Step 5: for each GAP group, make a routing decision before moving on:
- **Researchable gap:** specific angle written to RESEARCH_ANGLES.md with concrete queries (not just a topic title)
- **Literature gap** (no study exists, confirmed after targeted search): close with CONSENSUS-level provisional decision, write "accepted as literature gap — best-available decision: [X]" to grounding-map. Set the reopen trigger (same as A2): "reopen if a controlled study on [specific topic] is published."

The current procedure creates two outcomes (search and find / search and find nothing). It needs a third: search and confirm the gap is in the literature itself, not in our search coverage.

---

### B3: No anomaly detection on the research archive

**Current gap:** When a new claim is archived (during Phase 3 research), it is not checked against existing HIGH-confidence claims in the same domain until synthesis. Contradictions are discovered at synthesis time (Step 2). If a claim directly contradicts an existing HIGH-confidence claim, that is actionable information now — not later.

**Improvement:** At claim archival time: after every research angle completes, run a targeted check — read the new claims' `group:` fields; grep the existing research archive for the same group names; flag any new claim that appears to directly contradict an existing HIGH-confidence claim. This is a narrow check (group-match only), not a full synthesis. It catches the clearest contradictions early and surfaces them to the user before they compound through 3 more angles.

**Cost:** One grep + targeted read per angle completion. Low overhead; highest value when the architecture is evolving rapidly and contradictions between sessions matter.

---

## Category C — Tracking and inventory

### C1: Step 3.7 derived mechanisms not inventoried

**Current gap:** Step 3.7 (principles extraction) in research-synthesis.md Sub-step C explicitly produces derivations: "the principle implies X would also work, even though the research didn't test it." These derived-but-untested mechanisms are written into synthesis.md files but have no separate inventory. They are not visible in goal-achieving-ideas.md or the QUEUED TASKS list. They exist and then go unseen.

**Improvement:** At PCR Step 2 (generate audit list): add a step to extract all Sub-step C derivations from the cluster's synthesis.md and route them to goal-achieving-ideas.md as candidates. Mark each as "DERIVED — [confidence level of derivation], [source principle from finding group]." Not yet implemented, not yet validated — but named and visible. The current pipeline creates derivations that disappear into synthesis files; this makes them discoverable.

---

### C2: Drift between research confidence and implementation fidelity

**Current gap:** A HIGH-confidence finding grounds a rule in CLAUDE.md. Over sessions, the rule gets edited — wording shifts, exceptions are added, context collapses into a shorter formulation. The finding still says HIGH in the grounding-map, but the implemented rule may no longer match what the finding actually demonstrated. There is no mechanism to catch this drift.

**Improvement:** At grounding-map update time (PCR Step 6): for each VALIDATED or SYNTHESIZED row being updated, run a one-time fidelity check — read the current implementation of the rule and the original claim key. Ask: "does the current rule still match what the claim showed, or has it drifted?" This fires at PCR time (when grounding-map is being updated anyway) not as a separate audit. If drift is found: either restore fidelity or update the grounding-map status to reflect the actual evidence basis of the current rule.

---

### C3: Grounding-map decisions not ranked by impact

**Current gap:** VALIDATED tells you a decision has research backing. ❌ UNRESEARCHED tells you it has none. But UNRESEARCHED decisions are not ranked by how much they matter to the goal model. A low-impact UNRESEARCHED decision (e.g., "4-claim grouping minimum threshold") draws the same attention as a high-impact one (e.g., "one agent per angle"). Research bandwidth is spent on whatever comes up next, not on what matters most.

**Improvement:** Add an impact column to grounding-map.md: HIGH (decision affects every research wave or every generated kit), MEDIUM (affects one procedure or domain class), LOW (edge case or rarely-triggered). UNRESEARCHED HIGH rows become the explicit research priority list. Research angle selection at the start of each wave should start with UNRESEARCHED HIGH rows, not with whatever is interesting.

**Currently UNRESEARCHED HIGH candidates:** "one agent per angle," "parallel wave structure vs. sequential," "3 RED auditor round cap" — all directly affect research wave design and kit quality.

---

### C4: Verify pass has no calibration tracking

**Current gap:** The adversarial verify pass assigns confidence levels to claims (high/medium/low based on source verification, methodology check, n-count). This is the quality filter for everything that goes into the synthesis. But there is no tracking of whether verify-pass decisions were accurate — whether claims rated "high verify confidence" actually came from real papers with the stated findings.

**Improvement:** When a claim is used in a grounding-map decision that later receives external validation (e.g., the research finding is cited in a later meta-analysis, or is directly tested in a Phase 7 trial), record whether the verify-pass confidence was calibrated. This is not a separate audit — it fires opportunistically when validation arrives. Over time, if verify-pass "high confidence" claims are consistently wrong, the verify criteria need tightening; if "low confidence" claims consistently turn out to be right, the criteria are too conservative.

---

## Category D — Research direction

### D1: No routing from mistakes.md to research angles

**Current gap:** When a mistake is logged in mistakes.md, the 5.3 investigation Q2 asks "what else might be wrong?" and Q3 asks for something a broad review would surface differently. These sometimes produce research-relevant observations but have no formal routing to RESEARCH_ANGLES.md. The connection between "this pattern keeps failing" and "this pattern suggests a research question" is informal and often lost.

**Improvement:** At mistakes.md Step 5.3: add a fifth question after Q4 — Q5: "Does this failure class suggest a research gap? Name the specific question a research angle would answer." If yes: write the angle title and a draft query to RESEARCH_ANGLES.md immediately (not "maybe later"). If no: document "no research gap identified — this is a procedure gap, fix is implemented."

This makes the mistakes.md→research-angles connection explicit and mandatory rather than ad hoc.

---

### D2: Research waves lack pre-stated outcome done-criteria

**Current gap:** A research wave is declared complete when saturation is achieved (query-key convergence + source-type coverage + vocabulary-frame coverage). But saturation measures input coverage, not output sufficiency. A wave can saturate without producing enough evidence to make a specific design decision. "We ran 5 angles and found nothing" is a valid completion, but "we now know enough to decide X" is never explicitly verified.

**Improvement:** At research wave launch (when angles are defined): write one sentence for each angle — "This angle is sufficient to inform the design decision [X] when: [specific evidence threshold]." Example: "When ≥2 independent empirical claims agree on whether subagent-based verification improves audit recall over single-agent verification." This pre-stated sufficiency criterion is checked at PCR Step 1 — "did this cluster answer its question?" The answer can be "no — searching didn't resolve it" (a valid null), but the question was asked.

---

### D3: No cross-cluster synthesis step

**Current gap:** Cluster B synthesized one domain; Cluster C synthesized another; Angles 22–24 synthesized a third. These are applied independently. But principles from different clusters can interact — a finding about behavioral-contract decay (Cluster A) may strengthen or contradict a finding about synthesis bias (Cluster B). There is no step where clusters are looked at together.

**Improvement:** After every 3rd completed research cluster: run a cross-cluster synthesis pass. Inputs: all synthesis.md files completed since the last cross-cluster pass. Task: "Do any principles from different clusters reinforce each other? Do any contradict? Are there combinations the individual clusters didn't see?" This fires rarely enough to not create overhead, and it is the only mechanism that can catch emergent patterns across research domains.

---

## Category E — Structural fixes

### E1: PCR Step 5 second-pass is same agent (CONVERT-6)

**Current gap:** post-cluster-review.md Step 5 says "from the perspective of what just changed, what does the current state reveal that wasn't visible before?" — this is run by the same agent that just applied the changes. This is the same B1/B2 failure mode (reasoning-chain contamination, anchoring to prior conclusions) we fixed in research-synthesis.md Steps 3.5 and 3.6.

**Improvement:** PCR Step 5 → fresh subagent. The subagent receives: (a) the list of changes just applied and to which files, (b) the full kit-maker file manifest, (c) one prompt: "Given these recent changes, what does the current kit state now reveal that was not visible before the changes?" Subagent has no access to the reasoning that drove the changes.

This is the sixth subagent conversion, same class as CONVERT-1 through CONVERT-5.

---

### E2: Research angles don't have a stated validation type

**Current gap:** Some research findings require behavioral testing to validate ("does the rule actually fire in this situation?"), others require outcome tracking ("does this rule actually improve outputs?"), others require domain expert judgment, others are self-validating (the mechanism is clearly stated in a peer-reviewed study). These are all treated identically — they all go into synthesis, get a confidence tier, and get applied. But they require very different follow-up.

**Improvement:** At research angle archival (claim filing): tag each claim with `validation-type:` — one of: `behavioral-test` (verify the rule fires/not fires in a scenario), `outcome-track` (measure impact on kit output quality), `domain-expert` (requires external expert review to validate), `self-validating` (mechanism stated in peer-reviewed study with replication). At PCR time, these tags inform which follow-up is needed. `behavioral-test` claims become Phase 7 trial inputs. `outcome-track` claims become entries in `state/rule-outcome-register.md` (Gap A1). `domain-expert` claims get flagged as requiring external validation before VALIDATED status. Currently all claims get the same follow-up path regardless of what kind of evidence would actually validate them.

---

## Priority order

| Priority | Item | Effort | Impact |
|----------|------|--------|--------|
| P1 | E1 — PCR Step 5 subagent conversion (CONVERT-6) | Low — procedure text change | Same class as CONVERT-1/2, same benefit |
| P1 | A1+A2 — rule-outcome register + flip triggers (implement together) | Low — new state file + PCR step addition | Directly closes the "we apply findings but never measure them" gap |
| P1 | D1 — mistakes.md → research angles Q5 | Low — add one question to TASK_TEMPLATE.md 5.3 | Closes the informal connection that currently loses research questions |
| P2 | B1 — CONTESTED → provisional-implement path | Medium — wire provisional-decision.md into synthesis Step 5 | Eliminates CONTESTED as a permanent stalling state |
| P2 | C1 — Step 3.7 derivations inventoried in goal-achieving-ideas.md | Low — PCR Step 2 addition | Makes derived mechanisms visible and actionable |
| P2 | C3 — impact column on grounding-map | Low — edit grounding-map structure + populate | Directs research bandwidth toward high-impact UNRESEARCHED decisions |
| P2 | D2 — research wave pre-stated done-criteria | Low — add to wave-launch protocol | Distinguishes "saturation" from "answered the question" |
| P3 | B2 — GAP findings close path | Low — add routing decision to synthesis Step 5 | Stops gaps from accumulating indefinitely |
| P3 | B3 — anomaly detection on archive | Medium — add post-angle check | Catches contradictions early |
| P3 | C2 — implementation fidelity check | Low — add to PCR Step 6 | Catches rule drift from research backing |
| P3 | C4 — verify pass calibration | Low — opportunistic, no new mechanism | Self-calibrating over time |
| P3 | D3 — cross-cluster synthesis | Medium — fires every 3 clusters | Catches emergent cross-domain patterns |
| P4 | E2 — validation-type tags on claims | Medium — requires CLAIM_SCHEMA change | Routes findings to correct follow-up |
