# Procedure: Mandatory Reflection Checkpoint

**Use when:** at the end of every phase in the kit-making process. Also fires after any substantive task output (research wave, skill draft, synthesis section). This is a hard gate — not a suggestion.

**Why this exists:** The documented failure mode is scope-completion blindness — AI completes the defined scope of a task and stops. No stepping back. No "was that all I could get?" No "what does this suggest?" No alternatives considered. This is not a motivation or attitude problem — it is a structural absence. This procedure provides the structure.

Rule: "try to review your work" in a prompt does NOT reliably produce review. This procedure provides explicit questions that cannot be answered by "yes" without doing work.

---

## Effectiveness conditions (read before firing)

**This procedure's purpose is structural, not correctional.** Its value is forcing explicit answers that cannot be satisfied with "yes" — structural protection against scope-completion blindness. This is distinct from asking the model to correct its own reasoning.

**Intrinsic reflection limits:** Three independent peer-reviewed sources converge: LLMs cannot self-correct reasoning without external feedback signal — intrinsic correction produces no improvement or active degradation on reasoning, arithmetic, QA, code, and planning tasks (Huang et al., ICLR 2024; MIT Press TACL systematic review; Reflexion boundary conditions, NeurIPS 2023). These findings apply most directly to deficit questions 3-4 ("what did I miss?", "what would a critic say is missing?") — they ask the model to assess its own gaps, which is exactly the task class where intrinsic self-assessment fails. Opportunity questions 5-8 are structural surveys less directly affected. **Treatment:** treat deficit question answers as hypotheses to investigate, not confirmed gap detections. An answer of "I missed nothing" has no diagnostic value; an answer naming a specific gap is a hypothesis worth checking.

**Self-assessment bias:** Models rate their own output systematically higher than warranted — narcissistic evaluation, independent of actual quality (`self-bias-calibration`, HIGH, replicated 2024-2025). Deficit answers should be treated as lower-bounds on actual gaps, not ceilings.

**Post-hoc rationalization risk:** Later questions in a long checkpoint may fall into the "faithfulness decay zone" — causal influence on subsequent behavior diminishes after ~70-85% of chain length (`faithfulness-decay-mechanistic`, HIGH, arXiv:2602.11201). Questions 1-4 are most causally active; questions 7-9 may be more performative in extended checkpoints.

**Conditions that improve quality:**

1. **External signal injection (highest impact):** Before firing, inject available external signals — test results, prior-phase evaluation scores, audit findings, concrete quality metrics. Reflexion (NeurIPS 2023) achieves its gains by pairing reflection with external trial feedback. Without external signals, answers are intrinsic estimates: useful for scope/adjacency surveys, unreliable for quality correction.

2. **Persistence:** Answers here have zero carry-over unless explicitly routed into the next phase's context. If any deficit answer is actionable: (a) add to design log Discovered Work, AND (b) include the specific finding when starting the next phase. Answers generated and not persisted produce zero behavioral change.

**Basis:** `iclr2024-cannot-self-correct` (HIGH, ICLR 2024, Google DeepMind/UIUC); `external-feedback-requirement` (HIGH, convergent — NeurIPS 2023 + ICLR 2024 + MIT Press TACL); `persistent-memory-requirement` (HIGH, NeurIPS 2023 + arXiv:2512.12818); `self-bias-calibration` (HIGH, arXiv:2402.11436, replicated NeurIPS 2024); `faithfulness-decay-mechanistic` (HIGH, arXiv:2602.11201). PCR-168-174-175 applied 2026-06-30.

---

## The checkpoint (answer all nine before proceeding)

Write answers to each question in the design log before marking the phase complete. One-word answers fail the checkpoint.

**Specificity requirement:** Answers must reference something specific to this phase's output — a specific finding, file, decision, search result, or named artifact. Generic answers fail. "I considered alternatives" fails. "I didn't consider whether [specific thing] would have worked better than [specific choice made]" passes. An answer that could be copy-pasted to any phase is not an answer.

The questions are split into two groups: **deficit questions** (what's wrong or missing) and **opportunity questions** (what could be great). Both matter. A checkpoint that only finds problems produces a kit that avoids failure but never achieves excellence.

### Deficit questions (what's wrong or missing)

**1. What patterns emerged from this phase that I have NOT named explicitly?**

Not findings — patterns. A finding is "rule stacking degrades at 8-10 rules." A pattern is "there is a consistent theme across multiple findings that instructions past a certain complexity threshold produce negative returns, and this theme appears in form X, form Y, and form Z." Name the pattern class, not just the instances.

If this produces nothing: describe why this phase did not surface patterns. That description is the answer, not silence.

**2. What alternatives to the approach taken were NOT considered?**

For research: what search strategies were not tried? For drafting: what structurally different approaches were not generated? For planning: what fundamentally different architectures were not evaluated?

This is not "list things I thought of and rejected." It is "what did I not think of that a different starting point might have produced?" If stuck: what would a domain expert with a different background have tried? What would someone who disagreed with the approach have done instead?

**3. Are there adjacent problems I may have missed?**

The task was scoped. What lives just outside the scope boundary that might matter? What would a critic say was conveniently out of scope but actually relevant?

**4. Was there anything I should have found but didn't? What would a critic say is missing?**

Think adversarially. A critic of this phase's output would say "you missed ___." Fill in the blank honestly.

### Opportunity questions (what could be great)

**5. What's the best possible version of what this phase just produced?**

Not "what's wrong with it" — "what would excellent look like?" If the current output is a 6/10, what would make it a 9/10? Is that worth going back for, or is good-enough the right call here?

**6. What does this phase's output unlock that wasn't possible before?**

Not just "what does it imply for later phases" (that's a deficit question) — "what opportunity did this create?" Does a finding open a direction we hadn't considered? Does a completed procedure make something easier that was previously hard?

**7. Is there a cross-domain pattern or analogy that applies here that hasn't been used yet?**

What from a completely different field — medicine, architecture, game design, education, manufacturing — maps onto what this phase produced or what the next phase needs? Analogical leaps catch things linear reasoning misses.

**8. Is this good enough to proceed, and is proceeding the highest-ROI next step?**

Two questions in one: (a) is the quality sufficient, or is more work here worth it? (b) of everything that could be done next, is proceeding to the next phase the best use of effort? Sometimes the highest-ROI move is to go sideways, skip ahead, or revisit something from earlier.

If the answer to (b) is "no, there's something higher value" — name it and do that instead.

**9. Are we in the right direction entirely — or is there a fundamentally different approach to the goal we haven't considered?**

This is NOT question 2 repeated. Question 2 asks about alternatives to the specific approach taken. This asks: **is the overall direction toward the goal correct?**

The test: if someone with the same goal but no knowledge of the current work came in fresh, would they pursue this direction at all? What would they do instead? What does this direction assume that might be wrong?

This question fires with extra weight when:
- The satisficing trajectory signal has fired (three decreasing-value actions)
- Three or more consecutive phases have produced only incremental improvements
- A phase produced surprisingly thin findings (maybe the direction isn't finding what matters)

If this produces a genuinely different direction: do NOT immediately pivot. Surface it to the user with: (a) the current direction and what it's producing, (b) the alternative direction and what it would require, (c) your recommendation and reasoning. Let the user authorize a direction change.

---

## What to do with the answers

- **If any answer surfaces something actionable:** add it to the design log's Discovered Work section (append-only). Do not interrupt the current phase — address it at the next phase boundary or after the checkpoint.
- **If all answers produce nothing:** proceed. Document that the checkpoint produced no new findings — this is the checkpoint's "done" state, not silence.
- **If question 2 (alternatives) surfaces a better approach:** invoke `procedures/alternatives-generation.md` now, before proceeding to the next phase.

**Trajectory signal — all-deficit-questions null:** If deficit questions 1–4 all produce null findings consistently across three or more consecutive checkpoints of the same type: this is a signal the checkpoint is not engaging, not evidence of consistent excellence. Surface to user before proceeding.

---

## What this procedure does NOT do

- It does not require changing direction on every phase. The point is honest evaluation, not mandatory revision.
- It does not replace per-file review (Phase 6 has its own per-file loop).
- It does not replace the two-auditor verifier — this is a self-check, not independent verification.

---

## When to skip

**Skip when ALL of the following are true:**
- The task was a single-field correction (typo, broken link, wrong number) with no structural implications
- No artifact was produced — no research synthesis, no drafted file, no plan section, no procedure

**Do NOT skip even when tempted:**
- "I probably got it right" — that is exactly when the checkpoint fires. Confidence is not evidence of completeness.
- "I just ran this" — this fires at EVERY phase boundary and after EVERY substantive output, not once per session
- "The phase went smoothly" — a smooth phase is not evidence that nothing was missed; scope-completion blindness produces smooth phases
- "The auditors will catch it" — auditors are independent verification, not a substitute for self-check

---

## Agent-enforceable vs external-enforced

This procedure is **agent-enforceable**: the agent can count phases completed and check whether a checkpoint entry exists in the design log for each phase. If a phase has no checkpoint entry: the checkpoint was skipped — that IS a finding for the next checkpoint.

An external enforcer (user spot-check) can verify by reading design_log.md and confirming one checkpoint entry per completed phase.

**Trace:** Documented from observed session failure: after claude_process extraction, output was delivered and the session stopped with no review of what the material suggested. The failure mode (scope-completion blindness) is the general class. The 9-question format (grown from original 5) forces answers that cannot be satisfied by "yes" — each question requires descriptive content to answer honestly. Questions 1 and 5 are adversarial; questions 2 and 4 are generative; question 3 is adjacency-scanning; questions 6–9 cover opportunity and direction. The combination covers the failure modes that "review your work" alone does not. Specificity anchor added (2026-06-30): generic answers that don't reference this phase's specific output do not satisfy the checkpoint.
