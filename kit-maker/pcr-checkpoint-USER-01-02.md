# PCR Checkpoint — USER-01-02
**Cluster:** USER-01/02 — Goal-level blocking + security failure modes + execution gating
**Date:** 2026-07-05
**Procedure version:** post-cluster-review.md (restructured 2026-07-03)
**Synthesis file:** kit-maker/synthesis/USER-01-02-synthesis.md (Steps 1–6 complete 2026-07-02; Step 3.7 added 2026-07-05)

---

## Audit Items Processed

### Audit item 1 — Security caveat mechanism gap
**Claim keys:** `aspi-clarification-security-risk` (HIGH narrow, arXiv:2605.17324, Group F)
**Conflict type:** Mechanism gap — element 8 security caveat named clarification as the problem (symptom) without the underlying mechanism (engagement-deepening amplifies receptivity), and restricted "before tool execution" without covering context-window-delivered content.
**Pattern I check:** Principle derivation. Finding: clarification amplifies injection 10–20x. Principle: any engagement-deepening mechanism amplifies adversarial influence via the same channel. Derived for our setup: (a) all engagement-deepening patterns carry the same risk; (b) "tool execution" is too narrow when external content arrives through context window. Not the recipe (restrict clarification) — the principle extended.
**Mechanism chosen:** Type A text edit. Options considered: (A) inline enrichment of security caveat — chosen; (B) separate security section — rejected (density cost); (C) external file — rejected (indirection without benefit).
**Evidence routing:** HIGH (narrow, within scope), implemented as conditional with scope condition stated; extension to non-clarification patterns labeled CONSENSUS ONLY.
**Score:** Confidence (3) × Impact (2) = 6 → Applied.
**Outcome register:** PCR-U0102-A1

---

### Audit item 2 — Compound mechanism: clarify-before-external-read
**Claim keys:** `aspi-clarification-security-risk` (HIGH narrow) × `clarification-timing-type-dependent` (HIGH, arXiv:2605.07937, Group A)
**Conflict type:** Compound mechanism — neither finding alone implies the specific ordering constraint "before any external content is read or processed." Group F says "before tool execution." Group A says goal-class unknowns must be resolved before the 10% execution window. Together: goal-class clarification before external-content access is required for both goal-drift prevention AND injection-amplification prevention. The "before tool execution" wording in element 8's security caveat doesn't cover context-window-delivered content.
**Pattern I check:** Principle derivation. The compound principle: engagement-deepening before adversarial-content access is the risk (not tool execution specifically). Derived: the ordering constraint should be stated as "before external content access," which is more general and closed to the context-window loophole.
**Mechanism chosen:** Incorporated into Audit item 1 edit (same security caveat section). Wording changed from "before any tool execution begins" to "before any external content is read or processed."
**Evidence routing:** HIGH×HIGH compound (compound confidence MEDIUM) → implemented as conditional (scope condition retained from Group F scope).
**Score:** Compound HIGH×HIGH (3) × Impact (2) = 6 → Applied (merged with Audit item 1).
**Outcome register:** PCR-U0102-A1 (covers both Audit items 1 and 2)

---

### Audit item 3 — Mid-execution three-class routing
**Claim keys:** `underspecification-three-classes` (CONSENSUS, arXiv:2602.10525, Group B) + `unknown-unknowns-upfront-limit` (CONSENSUS, arXiv:2602.15259, Group G)
**Conflict type:** Mechanism gap — element 8 states WHAT ("pair with execution-time monitoring for requirements that emerge during task") without the mechanism WHY or HOW: the same three-class consequence taxonomy (outcome-critical / divergent / benign) that governs intake unknowns should govern mid-task discoveries.
**Pattern I check:** Principle derivation. The intake three-class taxonomy applies to mid-task unknowns by the same principle (consequence-class determines resolution strategy; this doesn't depend on when the unknown surfaces).
**Mechanism chosen:** Type A text edit (inline addition after "emerge during task"). Options: (A) three-option routing inline — chosen; (B) new separate element — rejected (element count cost); (C) cross-reference only — rejected (too sparse for generated kit agents).
**Evidence routing:** CONSENSUS → guideline labeled CONSENSUS ONLY with claim keys.
**Score:** Confidence (2) × Impact (2) = 4 → Applied.
**Outcome register:** PCR-U0102-A2

---

### Audit item 4 — Observable trigger conditions alongside violation conditions
**Claim keys:** `implicit-intelligence-unstated-constraints` (CONSENSUS ONLY, arXiv:2602.20424, Group E)
**Conflict type:** Mechanism gap — Hard Rule 13 element 5 requires observable VIOLATION conditions but not observable TRIGGER conditions. These are distinct: trigger condition = when the rule activates; violation condition = when the rule was not followed. Rules with implicit trigger conditions ("when appropriate, escalate") are applied inconsistently. Element 5 only names the compliance test (violation) and omits the activation test (trigger).
**Pattern I check:** Principle derivation. Finding: implicit constraints degrade constraint satisfaction accuracy. Principle: both activation conditions and compliance conditions must be observable. Derived: element 5's requirement should cover both trigger and violation conditions, not only violation.
**Mechanism chosen:** Type A text edit to element 5 decay warning, plus corresponding CLAUDE.md summary update. Options: (A) inline addition to element 5 — chosen; (B) TASK_TEMPLATE gate — rejected (wrong scope — affects kit-maker rule design, not generated kit requirement); (C) separate new element — rejected (element count cost).
**Evidence routing:** CONSENSUS → labeled CONSENSUS ONLY with claim key.
**Score:** Confidence (2) × Impact (2) = 4 → Applied.
**Outcome register:** PCR-U0102-A3

---

## Items Deferred

### Deferred item 1 — Phase gate positioning vs. unknown class
**Claim key:** `clarification-timing-type-dependent` (HIGH, Group A, Principle derivation 2)
**Reason:** Score = Confidence (3) × Impact (1) = 3, below threshold of 4. The derivation says phase gates in multi-phase kits should be audited against which unknown class they catch; mispositioned gates catch nothing. This applies to ENTRYPOINT phase gate descriptions but the impact is narrow (affects one procedure, not all generated kits). Deferred to design_log.md discovered work. Will upgrade if phase gate design becomes an active work item.

### Deferred item 2 — Counter-flow rule stratification principle
**Claim key:** Group D execution-gating-structural (CONSENSUS), Principle derivation 1
**Reason:** Score = Confidence (2) × Impact (1) = 2. The principle says counter-flow rules (requiring stopping/reversing) need structural enforcement more urgently than compliance-aligned rules. The kit already implements this in practice (external auditors, structural gates) but doesn't state the classification principle for future rule design. Deferred — low impact (meta-principle for rule design, not a direct kit rule gap).

### Deferred item 3 — Complex intake protocols as candidates for external-file loading
**Claim key:** `clarification-timing-type-dependent` (HIGH) × `constraint-count-compliance-exponential-decay` (HIGH, prior cluster). Compound mechanism: complex multi-condition intake rules are highest-cost items in behavioral contracts under the density constraint; should be candidates for external-file loading in long-horizon kits.
**Reason:** Score = Compound confidence (MEDIUM) × Impact (1) = 2. Element 8 is in ENTRYPOINT.md (kit design specification), not in generated kit behavioral contracts directly. The density constraint applies to the number of rules in the generated kit's behavioral contract, not to the length of a single rule in the kit-maker's design spec. The compound is interesting but doesn't point to a specific mechanism gap in the current kit files. Deferred.

---

## Cross-Finding Compounds Found (Sub-step 2.3)

**Compound confirmed and applied:**
- `clarification-timing-type-dependent` (HIGH, Group A) × `aspi-clarification-security-risk` (HIGH, Group F) → "clarify-before-external-read" compound mechanism: goal-class clarification must happen before any external content is read or processed, not merely before tool execution, because both goal-drift prevention (Group A) and injection-amplification prevention (Group F) require this ordering. Applied as part of Audit item 1/2 edit to element 8 security caveat.

**Cross-cluster compounds evaluated and null:**
- `clarification-timing-type-dependent` × `constraint-count-compliance-exponential-decay` → complex intake as candidate for external-file loading. Null for current kit files (deferred above).
- `aspi-clarification-security-risk` × `governance-decay-compaction` → long-horizon + external content = double-enforced security need. Null: already covered by element 14 general beyond-prompt enforcement requirement for all critical rules in long-horizon kits.

---

## CONTESTED Groups

None. The USER-01-02 synthesis explicitly states "No CONTESTED contradictions. All apparent conflicts resolve with scope conditions." No contested items to flag.

---

## Changes Applied

| Change | Claim key(s) | File | Section | Mechanism |
|--------|-------------|------|---------|-----------|
| Security caveat mechanism broadened + "before external content access" wording | `aspi-clarification-security-risk` (HIGH) + `clarification-timing-type-dependent` (HIGH, compound) | ENTRYPOINT.md | Hard Rule 13 element 8 security caveat | Type A text edit; scope condition added; CONSENSUS ONLY label on extension |
| CLAUDE.md element 8 summary synced | same compound | CLAUDE.md | Hard Rule 13 element 8 summary | Type A text edit |
| Mid-execution three-class routing added | `underspecification-three-classes` + `unknown-unknowns-upfront-limit` (both CONSENSUS) | ENTRYPOINT.md | Hard Rule 13 element 8 execution-time monitoring note | Type A text edit with CONSENSUS ONLY label |
| Observable trigger conditions required alongside violation conditions | `implicit-intelligence-unstated-constraints` (CONSENSUS) | ENTRYPOINT.md | Hard Rule 13 element 5 decay warning | Type A text edit with CONSENSUS ONLY label |
| CLAUDE.md element 5 summary synced | same | CLAUDE.md | Hard Rule 13 element 5 summary | Type A text edit |

**Rule outcome register:** PCR-U0102-A1, PCR-U0102-A2, PCR-U0102-A3 written to kit-maker/state/rule-outcome-register.md.

**Grounding-map.md:** Row 7 (intake protocol, 🔬 SYNTHESIZED) updated with PCR-USER-01-02 date, claim keys, and summary of principle derivations applied.

---

## Step 5 — New Vantage Check (inline — subagent dispatch not performed)

Note: This PCR is running as a subagent. A second-level subagent dispatch per Step 5 was not performed. Inline vantage check instead:

The three changes together create a new pattern in element 8: it now distinguishes intake-time vs. execution-time as two distinct phases of unknown resolution, with routing protocols for each. The security caveat now covers the intake-time phase (any engagement-deepening before external content access). The mid-execution routing covers the execution-time phase (three-class routing after execution begins).

What this exposes: Hard Rule 13 element 12 (phase-gate reflection, domain-conditional) doesn't mention that the mid-execution routing protocol should fire at phase gates — the phase gate is a natural "next natural pause point" where divergent discoveries should be surfaced (per the new mid-execution routing). This is a consistency gap: the mid-execution routing says "surface divergent discoveries at the next natural pause point" but element 12 doesn't reference the three-class mid-execution routing. This is a P2 item, not P0/P1 — the gap is minor (element 12 says domain-specific questions about what the prior phase produced; divergent discovery surfacing is consistent with this but not explicitly named). Logged as discovered work — does not require action in this PCR.

---

## Null Result Declaration

NOT applicable — cross-match found improvements to apply. All applied changes are traceable to specific claim keys and address mechanism gaps (existing rules stated WHAT without WHY that these claims supply).

---

*PCR complete 2026-07-05. Procedure: post-cluster-review.md Steps 1–7.*
