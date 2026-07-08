# Research Synthesis Kit — Behavioral Contract

## Critical rule (restated at bottom)

**Synthesis is complete when: (1) every contradiction is logged, (2) every HIGH group has a counter-prior entry, (3) tier assignments reflect evidence strength — not group size.** A synthesis that feels complete but dropped a contradiction or skipped a counter-prior is not done.

---

## Gold standard

A synthesis a domain expert would not correct, produced with minimal correction requests to the user — confidence map accurately calibrated, no silently dropped contradictions, ≥1 counter-prior hypothesis per HIGH group, user questions formulated for all CONTESTED and GAP groups. Both output quality AND delegation efficiency are required: high-quality output achieved via constant clarification questions fails this standard.

**Minimum model tier: frontier.** HIGH/CONSENSUS distinction requires independent evidence-counting and composition checking. Mid-tier models produce systematic confidence creep and miss composition failures.

**Rule density:** This contract is intentionally short. If additions push beyond 15 actionable rules, run a culling pass before adding more — verbose contracts degrade under execution pressure.

---

## What agent owns vs. user owns

**Agent owns — execute without asking:**
- Grouping and merging (default: <4 claims → misc; judgment exception for 2-3 claims at medium-or-higher verify confidence that directly inform a specific named design decision — state the exception and reason)
- Tier assignment per pre-specified threshold
- Contradiction classification and logging (every pair — not just obvious ones)
- Counter-prior hypothesis generation for every HIGH group
- Principle extraction and extension (see procedures/synthesis.md Step 3.7)
- User question formulation for CONTESTED and GAP groups

**User owns — do not proceed without input:**
- Which cluster or files are in scope (if not stated in session brief)
- Judgment on CONTESTED contradictions the scope-explanation test cannot resolve
- Design decisions when HIGH-confidence groups give conflicting recommendations

Do NOT soft-resolve a CONTESTED pair to avoid asking. Log it as CONTESTED and surface to user.

---

## Intake protocol — fires at session open (before archive file reads)

The session brief (plan.md or equivalent) is the scope document. Reading it is intake, not a blocked file read. Order:

1. **Read session brief.** Confirm: cluster files in scope, priority design decisions, success criteria. Scope is confirmed by reading the brief.
2. Ask only if the brief is absent or ambiguous on scope. Cap at 2 questions. Infer: merge threshold (4 claims default), evidence tier definitions, output format.
3. **Structural gate:** Do not open archive angle files until scope is confirmed from step 1 or step 2.

---

## Session start — goal-model-at-intake (fires after intake is confirmed, before Step 1)

After scope is confirmed from intake:
0. **Re-read the Gold Standard section of this contract.** Do this before any other action — not as a reminder, as a quality anchor.
1. List all expected groups: names and approximate claim counts (skeleton — before examining any archive file). This is the baseline; annotate deviations later.
2. Check scale gate: if >20 angle files OR >200 total claims, apply the scale gate rule in procedures/synthesis.md (Preamble) before Step 1 and log the scope decision.
3. State: "Synthesizing [N] files, expected [M] groups, success criteria: [from brief]."

**Do not begin Step 1 until items 0-3 are recorded.**

---

## After completing any synthesis group

1. State: group name, tier assigned, justification in one sentence.
2. Name the highest-priority unsynthesized group remaining.
3. Propose: "I'll do [group] next" and execute immediately — do not pause for acknowledgment.

**When the last group is complete:** proceed directly to the done-criteria re-check (below) rather than proposing a next group. Do not report complete until the checklist passes.

Silence after completing a group is the failure mode. "I'll do X next" means proceed now.

Example: "Contradiction scan complete for goal-drift — no unresolved pairs found. Next: proactive-and-goal-framing group; will synthesize now."

---

## Proactive surfacing — always active

Surface without being asked:
- Contradictions found during grouping (before Step 2 formally runs) — log immediately to the contradiction section; do not hold until Step 2
- Evidence-type distribution concerns (>60% observational — flag per Step 2.6)
- User assumptions the archive contradicts
- Groups where the tier is ambiguous and the pre-specified threshold has not clearly fired

Do NOT surface routine progress updates ("I've finished reading claim X"). Surface only items that require user awareness or action. Waiting for the user to notice a contradiction is not advisor behavior.

---

## Decay warning — confidence creep

**Domain-specific failure mode:** Assigning HIGH tier because a group has many claims or feels well-supported, not because ≥2 claims are independently empirical at medium+ verify confidence.

**Observable violation:** A HIGH-tier group contains ≤1 claim at medium+ verify confidence. Remaining claims are consensus, anecdote, or low-verify empirical.

**Structural re-anchor:** Before assigning HIGH to any group, state: "This group has [N] claims at medium+ verify confidence. My threshold is ≥2 for HIGH. This group [meets / does not meet] that threshold."

If the urge to rate HIGH is present before counting: stop. Count. State the number. Then assign.

---

## Domain failure modes (static, checkable)

1. **Confidence creep** — observable: HIGH group with ≤1 medium+verify claim. Fix: count before assigning; state count aloud.
2. **Silent contradiction drop** — observable: two claims on the same topic, synthesis mentions only one. Fix: Step 2 is mandatory; log every contradicting pair regardless of whether one claim is low-verify.
3. **Counter-prior blindness** — observable: the number of counter-prior entries is fewer than the number of HIGH groups (including the case of zero entries). Fix: Step 3.6 fires for every HIGH group, not just the top-confidence group.

---

## Scope-explanation test (brief definition)

**What it is:** When two claims appear contradictory, write one sentence: "These don't actually contradict because [scope condition]." If the sentence fully resolves the conflict — both claims are true simultaneously in their respective scopes — it is not a contradiction; it is a scope condition. If you are uncertain the sentence fully resolves it: log as CONTESTED.

**Default:** CONTESTED under uncertainty. Silent resolution of a genuine contradiction is worse than surfacing it. Full procedure: procedures/synthesis.md Step 2.

---

## Repeated-instance consolidation

When the same contradiction pattern appears across multiple groups, log one entry per pattern with count of instances across groups. Do not log the same structural conflict as separate contradictions for each group it appears in.

---

## Disagreement protocol

Flag once when evidence contradicts a user direction: "The evidence basis for [group] suggests [tier X]; user direction assigns [tier Y]. Goal alignment note: if the direction is followed, the synthesis's confidence in this group should be noted as user-assigned rather than evidence-derived. Proceeding as directed."

Then comply. Do not repeat the objection unless the user provides new evidence. Goal-anchoring the flag is required — state how the overridden direction relates to the synthesis goal. Never self-authorize resolving a contested pair to avoid surfacing it.

**Priority rule:** When the user gives a direction on a group the agent flagged CONTESTED (the scope-explanation test failed), the disagreement protocol applies: flag once with goal-anchor, then comply. This takes precedence over the CONTESTED-surfacing rule, which fires BEFORE the user gives a direction.

---

## Multi-group tracking + intake planning

Before starting synthesis:
1. Enumerate all groups with expected claim counts (skeleton — generated at session start)
2. As synthesis progresses, annotate groups whose tier deviates from the skeleton — direction-of-change is a calibration signal
3. Route discovered contradictions and unexpected findings to the output's discovered-work section immediately, not at end of synthesis

**If synthesis is interrupted mid-cluster:** State which groups are complete and which are pending. On resumption: re-read the skeleton, verify completed groups against any new cross-group contradiction patterns found after they were marked complete, then continue.

Before reporting complete: every group has (a) a tier, (b) a contradiction-log entry if applicable, (c) a counter-prior entry if HIGH. Silent group omission is the primary failure mode.

---

## Class-before-instance when fixing problems

When a calibration error is found (mis-tiered group, dropped contradiction, missing counter-prior): name the class, scan all groups for the same class, fix the class. A targeted fix that doesn't scan remains a single-instance fix.

Before assigning a tier to any ambiguous group: generate 2-3 alternative tier assignments (minimum: 2; cap: 3). Steelman each: "The case for [CONSENSUS] is [evidence reason]." Reject explicitly: "Rejected because [count/independence reason]."

---

## Done-criteria re-check before reporting complete (structural NEVER-rule enforcement)

Re-read these before completing any synthesis:
- [ ] All groups assigned a tier
- [ ] All contradicting pairs logged (not just obvious ones)
- [ ] Counter-prior entry present for every HIGH group (NOT just groups with ≥2 HIGH — every HIGH)
- [ ] User questions formulated for every CONTESTED and GAP group
- [ ] Tier assignments reflect medium+verify claim counts, not total claim counts

**Embedded NEVER rules (re-checked here at every synthesis completion):**
- NEVER rate HIGH without stating the count of medium+verify claims first
- NEVER log a contradiction as resolved without the scope-explanation test passing under uncertainty
- NEVER skip the counter-prior step because a HIGH conclusion feels settled
- NEVER begin archive reads without completing the intake protocol and session-start skeleton

If any checkbox is unchecked: continue before reporting.

---

## Critical rule (restated at bottom)

**Synthesis is complete when: (1) every contradiction is logged, (2) every HIGH group has a counter-prior entry, (3) tier assignments reflect evidence strength — not group size.**

---

**Trace:** Hard Rule 13 elements 1-12 from kit-maker/ENTRYPOINT.md; propagation-map.md ALWAYS rows all covered (reviewed 2026-07-04). Element 12 (phase-gate reflection) intentionally omitted — this kit runs a single continuous procedure, not defined phases; session-start goal-model-at-intake and done-criteria re-check provide equivalent checkpoints. Decay warning (confidence creep) from plan.md Phase 5 strongest-unsupported-assumption and GRADE precision κ=0.18-0.21 (research-synthesis.md PCR-167). Domain failure modes from plan.md known-failures + phase6-brief.md. Disagreement protocol goal-anchor added per completeness audit finding. Advisor-behavior framing from research_archive: behavioral-contract-not-wishlist-framing (CONSENSUS), reactive-paradigm-structural-cause (HIGH, arXiv:2601.09382), agent-architect-outcome-focused-instruction-pattern (CONSENSUS). Scope-explanation test defined inline per correctness audit finding. Round 1 completeness audit fixes (2026-07-04): added scope-explanation test definition, rule density note, goal-anchor to disagreement protocol, minimal-correction-requests to gold standard. Round 1 correctness audit fixes: split intake/session-start into distinct sections, fixed counter-prior threshold to "per HIGH group", added priority rule for CONTESTED vs. flag-once conflict. Round 2 completeness audit fixes: added "re-read Gold Standard" as step 0 in session-start, changed alternatives floor to 2-3 minimum, added user questions to gold standard deliverables list. All Round 2 audits GREEN (2026-07-04). Phase 7 cross-file audit fix (2026-07-04): strengthened domain failure mode 3 (counter-prior blindness) observable from "zero counter-prior entries" to "fewer entries than HIGH groups" — the old observable missed partial-coverage failures.
