# PCR Checkpoint — Cluster: angle-119
## Goal-Directed Advisor Behavior (ProactiveBench, negotiation study, ICML 2026 goal-directedness)

**Date:** 2026-07-05
**Procedure version:** post-cluster-review.md (restructured 2026-07-03)
**Synthesis file:** kit-maker/synthesis/angle-119-synthesis.md

---

## Step 1 — Actionable claims extracted

| Claim key | Evidence tier | Included? | Reason |
|-----------|--------------|-----------|--------|
| proactive-agent-f1-baseline | HIGH (SCOPE: spontaneous initiative, general models) | YES | HIGH empirical |
| reactive-paradigm-structural-cause | HIGH (SCOPE: spontaneous initiative) | YES | HIGH empirical |
| advisor-delegate-outcome-paradox | HIGH (SCOPE: negotiation domain) | YES | HIGH empirical |
| goal-directedness-behavioral-vs-mechanistic-split | HIGH (SCOPE: 2D grid navigation) | YES | HIGH empirical |
| inherited-drift-trajectory-contamination | HIGH | YES | HIGH empirical |
| non-deterministic-drift-temperature-zero | HIGH | YES | HIGH empirical |
| subgoal-framework-success-jump | MED empirical (source concerns) | YES | MED empirical |
| goal-externalization-26pct | MED (vendor benchmark via secondary synthesis) | YES | MED empirical |
| procedural-memory-as-system-prompt | CONSENSUS | YES | Contradicts/updates existing kit decision |
| plan-execute-separation | CONSENSUS | YES | Contradicts/updates existing kit decision |
| instruction-file-length-ceiling-empirical | CONSENSUS | YES | Updates existing |
| decision-rules-persist | CONSENSUS (anecdote) | YES | Updates existing |
| behavioral-contract-not-wishlist-framing | CONSENSUS | YES | Updates existing |
| never-finish-empty-handed | CONSENSUS (anecdote) | YES | Updates existing |
| c-level-advisor-role-routing | CONSENSUS (anecdote) | YES | Updates existing |
| agent-architect-outcome-focused | CONSENSUS | YES | Updates existing |
| goal-framing-vs-task-framing | MED (fabricated example, mechanism verified) | YES | Updates existing |
| prompt-level-insufficient | CONSENSUS | YES | Updates existing |
| value-conflict-framing-for-constraint-persistence | EXCLUDED (LOW downgraded to CONSENSUS) | N/A | LOW empirical |
| behavioral-drift-runtime-monitoring-jsd | EXCLUDED (LOW downgraded to CONSENSUS) | N/A | LOW empirical |

---

## Step 2 — Pre-read of synthesis principles (Sub-step 2.0)

Principles extracted from synthesis Step 3.7 that could extend beyond the specific findings:

1. **proactive-advisor-behavior principle:** Rules requiring self-recognition of the moment to act are structurally weaker than event-fired triggers. Behavioral contracts should classify rules by trigger type and convert recognition-required rules to structural form. Instruction-level "be proactive" rules and structural triggers may interact adversarially (false coverage effect).

2. **advisor-executor-framing principle:** Fewer interpretation handoffs between intent and action → better outcomes. Commission form eliminates advisory bottleneck. Check-in gates should be asymmetric (default: act; gate fires on observable condition only).

3. **goal-directedness-measurement principle:** Surface-level indicator satisfaction (appearance of compliance) can occur without the underlying mechanism. Evaluating by surface indicators generates systematic false positives. Verification must check structural signals upstream of the property, not self-reports of it.

4. **goal-drift-mechanisms principle:** An objective encoded only at initialization progressively loses weight in systems accumulating state over extended sequences. Periodic reinjection is necessary. Value-aligned framing of re-anchoring reduces counterpressure.

5. **goal-persistence-architecture principle:** Persistence requires externalization into a reliably-reloaded artifact sized to fit context. Behavioral contract size is a persistence mechanism. Agent-handoff boundaries require explicit artifact re-injection.

6. **instruction-file-design principle:** Governance artifacts degrade when they conflate elements with different decay rates or different enforceability structures. Every directive must name an observable violation condition — directives without this are aspirations, not commitments.

7. **anti-decay-wording-patterns principle:** Decay-resistance is a function of whether the executing agent can verify compliance from currently visible context. Outcome-framed rules with named violation states are self-monitorable; action-framed rules without checkable violation states are not.

8. **goal-frame-design principle:** Explicit self-classification narrows candidate continuation space. Role declaration is a generative prior, not cosmetic. Per-instruction role-consistent framing compounds this effect; contradictory signals partially cancel it.

---

## Step 2 — Audit list (Sub-steps 2.1–2.2)

### Principle extension items (Sub-step 2.0 pass)

| # | Principle | Existing kit element violating/missing the principle | Conflict type |
|---|-----------|-----------------------------------------------------|---------------|
| P1 | goal-directedness principle: verification of compliance requires structural signals, not self-report | CLAUDE.md A1 auditor prompt: receives narrative summary (agent self-report) and asks for "evidence it didn't fire" — potentially accepting narrative as evidence | mechanism-gap |
| P2 | goal-persistence principle: goal-model re-read must be structural gate, not advisory | TASK_TEMPLATE.md Section 5.1: mid-work coherence check has no goal-model re-check for long-horizon tasks; CLAUDE.md Check 1 covers session-start only; no mid-task re-anchor | mechanism-gap |
| P3 | proactive-advisor principle: recognition-required rules require structural reinforcement | ENTRYPOINT.md Hard Rule 13 element 4 (proactive surfacing) has no structural self-check at response end; element 5's self-check asks "did I name next obstacle?" but not "did I surface visible problems?" | mechanism-gap |
| P4 | instruction-file-design principle: kit-maker's own files should pass the observable-violation-condition test | ENTRYPOINT.md Hard Rule 13 element 5 self-check limited to "did I name the next obstacle?" — element 4 proactive surfacing has no parallel observable check | mechanism-gap |

### Per-claim cross-match items (Sub-steps 2.1–2.2)

| # | Claim key | Dimension | Target file | Conflict type |
|---|-----------|-----------|-------------|---------------|
| C1 | goal-directedness-behavioral-vs-mechanistic-split (HIGH, SCOPE) | Verification quality | CLAUDE.md A1 auditor prompt | mechanism-gap: auditor relies on agent narrative; principle says check observable artifacts |
| C2 | inherited-drift-trajectory-contamination + non-deterministic-drift-temperature-zero (HIGH) | Task-execution discipline | TASK_TEMPLATE Section 5.1 | mechanism-gap: no mid-task re-anchor for long-horizon tasks |
| C3 | proactive-agent-f1-baseline (HIGH, SCOPE) | Generated-kit behavioral contract | ENTRYPOINT Hard Rule 13 element 4 | mechanism-gap: proactive surfacing rule is recognition-required; no structural self-check |
| C4 | instruction-file-length-ceiling-empirical + decision-rules-persist + behavioral-contract-not-wishlist (CONSENSUS) | Research quality / synthesis | No conflict found — Update 2 (synthesis) already applied content rule to ENTRYPOINT | null |
| C5 | goal-framing-vs-task-framing (CONSENSUS) | Generated-kit behavioral contract | ENTRYPOINT Hard Rule 13 | null — role declaration guidance already present |
| C6 | goal-externalization-26pct + procedural-memory-as-system-prompt (CONSENSUS) | Task-execution | TASK_TEMPLATE Section 0 | partial null — Section 1.1 Step 1 already requires goal-model read; Section 5.1 mid-task is the gap |
| C7 | Phase 7 tests (cross-match with proactive-agent + goal-directedness principles) | Phase 7 test coverage | ENTRYPOINT Phase 7 per-constraint validation | mechanism-gap: tests do not distinguish surface compliance from mechanism compliance |

**Null items — explicitly logged:**
- C4: instruction-file-design content rule → already applied in synthesis Update 2 to ENTRYPOINT. No gap.
- C5: goal-framing/role declaration → already present in ENTRYPOINT Hard Rule 13 structure. No gap.
- C6 (partial): goal-model re-read at task entry → TASK_TEMPLATE Section 1.1 Step 1 already requires it. Session-start covered by CLAUDE.md Check 1. Mid-task gap is C2 (different item).

### Sub-step 2.3 — Cross-finding compounds (HIGH×HIGH pairs only)

**Compound 1 (applied as PCR119-A4):**
- Claim A: `proactive-agent-f1-baseline` (HIGH, scope) — reliable proactive behavior requires structural triggers, not recognition-required rules
- Claim B: `omission-commission-asymmetry` (HIGH, prior cluster, arXiv:2604.20911) — NEVER/recognition-required rules decay 73%→33% by turn 16
- Compound mechanism: element 4 (proactive surfacing) is both recognition-required AND effectively a NEVER rule ("never miss surfacing a problem") — double degradation risk. Fix: convert to commission-form structural trigger via self-check question at response end. Neither claim alone implies this specific self-check solution.

**Compound 2 (applied as PCR119-A3):**
- Claim A: `proactive-agent-f1-baseline` (HIGH, scope) — structural triggers are the necessary mechanism for reliable proactive behavior
- Claim B: `goal-directedness-behavioral-vs-mechanistic-split` (HIGH, scope) — behavioral observation is insufficient to verify goal-pursuit; surface compliance ≠ mechanism
- Compound mechanism: Phase 7 tests that check only whether the agent's output "looks proactively compliant" cannot distinguish kits that enforce mechanisms from kits that shape surface form. Tests must be adversarially constructed to distinguish the two. Neither claim alone says this about Phase 7 testing.

**Compound 3 — checked, null:**
- Claims: `advisor-delegate-outcome-paradox` (HIGH) + `proactive-agent-f1-baseline` (HIGH)
- Hypothetical: structural triggers should be written in commission form (combining act-first principle with structural trigger principle)
- Check result: ENTRYPOINT Hard Rule 13 critical rules (after-every-task rule, goal-model-at-intake) are already in commission form. NEVER-rule structural reinforcement section already covers commission-form conversion. No gap found. NULL.

**Compound 4 — checked, null:**
- Claims: `inherited-drift-trajectory-contamination` (HIGH) + `goal-directedness-behavioral-vs-mechanistic-split` (HIGH)
- Hypothetical: Phase 7 drift tests should verify structural re-anchoring mechanism fired, not just that output stayed on-topic
- Check result: This is covered by Compound 2 (PCR119-A3 addresses the same gap from slightly different angle). Collapsed into existing item. NULL (not a distinct compound).

---

## Step 3 — Scoring and priority

| Audit item | Confidence | Impact | Score | Action |
|------------|-----------|--------|-------|--------|
| C1/P1 A1 auditor observable artifacts | HIGH (SCOPE → CONDITIONAL) | 3 (fires every task close) | 9 → CONDITIONAL | Apply |
| C2/P2 TASK_TEMPLATE mid-task goal check | HIGH negative / MEDIUM positive | 2 (long-horizon tasks only) | 4 | Apply provisional |
| C3/P3/P4 Element 5 self-check + proactive | Compound HIGH×HIGH (scope caveats) → CONDITIONAL | 3 (every generated kit) | Apply conditional | Apply |
| C7/Compound 2 Phase 7 structural mechanism test | MEDIUM (compound, scope caveats) | 2 (Phase 7 only) | 4 | Apply provisional |
| Grounding-map row 4 update | N/A (metadata) | — | — | Apply |
| Grounding-map row 11 update | N/A (metadata) | — | — | Apply |

---

## Step 3.5 — Mechanism options (selected before writing each change)

**Change 1 (A1 auditor):**
- Option A (chosen): Text edit to subagent prompt — add observable artifact standard and explicit prohibition on self-report as evidence.
- Option B: Structural — dispatch A1 with file access (Read/Grep tools) instead of narrative only.
- Option C: Structural — require agent to include specific observable artifacts in the summary template.
- Chosen: Option A. Reason: minimal targeted change that addresses the mechanism gap without restructuring the dispatch architecture. Options B and C require more invasive changes with wider impact, not warranted by CONDITIONAL scope.
- Pattern I check: implementing principle derivation (check structural signals upstream of compliance), not the study's recipe (mechanistic probing of model internals). PASSES Gate A.

**Change 2 (TASK_TEMPLATE mid-task):**
- Option A: Text edit to Section 5.1, add item 4 provisional note.
- Option B: Structural — add a plan.md trigger that fires periodically during long tasks.
- Option C: No change — Section 5.4 plan mutation tracking already handles scope drift.
- Chosen: Option A (integrate into existing Section 5.1 structural check sequence). Reason: least disruption; fires during execution when Section 5.1 fires; provisional label signals this is unvalidated. Option B requires new tracking infrastructure; Option C doesn't address the specific goal-model re-check. Pattern I check: derivation from goal-persistence principle (reinjection at boundaries) applied to within-task mid-point as a boundary. PASSES Gate A.

**Change 3 (Phase 7 structural mechanism test):**
- Option A (chosen): Text addition to per-constraint validation item.
- Option B: Add to canary requirement (canary must include at least one surface-compliance-only test case).
- Option C: New separate Phase 7 gate item.
- Chosen: Option A. Reason: provisional/MEDIUM confidence — adding as extension to existing item rather than new gate. Option B (canary) would be structurally enforced but the mechanism test concept needs validation before making it a hard gate. Pattern I check: derivation from compound principle (structural trigger presence ≠ surface compliance), not from study methodology. PASSES Gate A.

**Change 4 (Element 5 proactive self-check):**
- Option A (chosen): Extend existing self-check (b) with second question.
- Option B: Add separate self-check requirement directly to element 4.
- Option C: Add proactive-surfacing as a named element (4b) separate from element 4.
- Chosen: Option A. Reason: rule density constraint — adding to existing self-check costs 0 new rules. Options B/C add rule count. Pattern I check: derivation from compound principle (recognition-required rules + NEVER-form decay = commission-form structural check), not recipe. PASSES Gate A.

---

## Step 4 — Changes applied

| # | Change | File | Section | Claim keys | Mechanism | Pattern I | Type |
|---|--------|------|---------|------------|-----------|-----------|------|
| PCR119-A1 | A1 auditor prompt — add observable artifact standard; explicit: do not treat narrative as evidence of compliance (CONDITIONAL) | CLAUDE.md | External auditor at task close (A1) | goal-directedness-behavioral-vs-mechanistic-split (HIGH, SCOPE) | Text edit to subagent prompt item 4 | Principle derivation (structural signals, not surface report) | A |
| PCR119-A2 | TASK_TEMPLATE Section 5.1 item 4 — provisional mid-task goal-model re-check for long-horizon tasks (15+ steps) | TASK_TEMPLATE.md | Section 5.1 Mid-work coherence check | inherited-drift-trajectory-contamination + non-deterministic-drift-temperature-zero (HIGH) | Text addition as provisional item 4 | Principle derivation (reinjection at processing boundaries) | A/B |
| PCR119-A3 | ENTRYPOINT Phase 7 per-constraint validation — provisional structural mechanism test note | ENTRYPOINT.md | Phase 7 gate, Per-constraint validation item | proactive-agent-f1-baseline + goal-directedness-behavioral-vs-mechanistic-split (compound HIGH×HIGH, MEDIUM confidence) | Text addition inside existing gate item | Principle derivation (surface/mechanism distinction) | A |
| PCR119-A4 | ENTRYPOINT Hard Rule 13 element (b) self-check — add "did I surface all visible problems?" (CONDITIONAL) | ENTRYPOINT.md | Hard Rule 13 behavioral contract decay warning | proactive-agent-f1-baseline (HIGH, SCOPE, angle-119) + omission-commission-asymmetry (HIGH, prior cluster) — compound | Text edit extending self-check from 1 to 2 questions | Principle derivation (commission-form structural trigger for recognition-required rule) | A |

**Evidence-strength routing applied:**
- PCR119-A1: HIGH with SCOPE caveat → CONDITIONAL implementation. Condition stated in the rule text.
- PCR119-A2: MEDIUM (positive prescription not validated) → PROVISIONAL with flip trigger.
- PCR119-A3: MEDIUM compound (two HIGH with scope caveats) → PROVISIONAL with flip trigger.
- PCR119-A4: HIGH×HIGH compound, CONDITIONAL (scope caveat on proactive-agent claim; commission self-check is outside scope caveat) → CONDITIONAL, marked in rule text.

**Synthesis-applied updates verified not duplicated:**
- Update 1 (violation conditions in element 5): confirmed present in ENTRYPOINT.md before PCR edits. PCR119-A4 extends element 5 self-check, does not duplicate Update 1.
- Update 2 (content rule in rule density): confirmed present in ENTRYPOINT.md. No PCR edit overlaps.

---

## Step 5 — Re-review from new vantage (CONVERT-6)

Step 5 subagent dispatch: NOT EXECUTED — this PCR is running in a subagent context (spawned by workflow orchestration script). The PCR procedure requires a fresh subagent for Step 5 with no access to the reasoning that drove changes. Dispatching from within this subagent context would not provide the required independence. Known gap: Step 5 review pending. Parent workflow should execute Step 5 as a follow-up if changes are substantive.

---

## Step 6 — Grounding-map updates applied

| Row | Old status | New status | Claim key driving change |
|-----|-----------|-----------|--------------------------|
| Row 4: Decay warning as self-correcting mechanism | ❌ UNRESEARCHED | 🔬 SYNTHESIZED | goal-directedness-behavioral-vs-mechanistic-split (HIGH, scope) + anti-decay-wording-patterns (CONSENSUS) |
| Row 11: Domain-specific next-step patterns | ⚠️ CONSENSUS ONLY (0 trials) | ⚠️ CONSENSUS ONLY (1 trial) | goal-frame-design (CONSENSUS) + anti-decay-wording-patterns (CONSENSUS) |

---

## Step 7 — New angles to queue (from synthesis)

Synthesis Step "New angles" identified three P2 candidates. These should be added to RESEARCH_ANGLES.md:
1. Instruction salience positioning — primacy/recency effects in long-context LLM prompts; quantify whether rules should appear at top or bottom of CLAUDE.md.
2. Self-consistency prompting as decay-resistance mechanism — predicting own next action before acting may anchor goal-frame.
3. Preventive vs corrective instruction separation — whether separating by placement or framing improves compliance of each type.

These are P2 candidates per synthesis guidance. They are noted here; adding to RESEARCH_ANGLES.md is outside the scope of this PCR run (pending Wave 2 authorization — Wave 2 BLOCKED per design_log.md constraint).

---

## CONTESTED groups

None. The synthesis found no CONTESTED groups (implication-level tension was resolved via scope distinction in Step 2 — not CONTESTED).

---

## Null results from cross-match

The following items were checked and found null (no change warranted):

- **instruction-file-content-rule** (Update 2 from synthesis): already applied to ENTRYPOINT.md. No gap.
- **goal-framing/role-declaration**: already present in ENTRYPOINT.md Hard Rule 13 structure. No gap.
- **TASK_TEMPLATE goal-model pre-check (Section 0)**: Section 1.1 Step 1 already requires goal-model read as a structural gate. No gap in Section 0 needed.
- **commission-form structural triggers**: existing critical rules in ENTRYPOINT.md Hard Rule 13 are already in commission form. The NEVER-rule structural reinforcement section already covers commission-form conversion. No gap.
- **Compound 3** (advisor-executor + proactive-agent = commission-form structural triggers): null — already the practice.
- **Compound 4** (drift + goal-directedness = Phase 7 drift mechanism testing): collapsed into Compound 2 (same gap). Not a distinct item.
- **Three-file separation** (from instruction-file-design derivation, CONSENSUS): essence captured in synthesis Update 2 (content rule). The specific file-count derivation has medium confidence and is borderline. Not applied — would be enrichment without clear gap.
- **Named-violation index** (from anti-decay-wording-patterns derivation, CONSENSUS): essence captured in synthesis Update 1 (every rule must name observable violation condition). The index adds structural placement — a meaningful but incremental improvement with CONSENSUS evidence. Deferred.

---

## Summary

**Cross-match complete — 4 applicable improvements found for cluster angle-119.**

Changes applied: PCR119-A1 through PCR119-A4.
Files modified: CLAUDE.md, TASK_TEMPLATE.md, ENTRYPOINT.md (×2), grounding-map.md, state/rule-outcome-register.md.
Grounding-map rows updated: 4 (❌→🔬), 11 (trial count 0→1).
Rule-outcome-register entries added: 4 (PCR119-A1 through PCR119-A4).
CONTESTED groups: 0.
Step 5 re-review: not executed (subagent context limitation — documented above).
