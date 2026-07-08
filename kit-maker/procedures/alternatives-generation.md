# Procedure: Alternatives Generation

**Use when:**
- After any first-pass output — a draft skill, a plan section, a research synthesis, a proposed procedure. Before treating any output as the approach.
- Before any inline decision during Phase 6 that shapes kit structure: how to organize a section, what to include/exclude in a rule, how to define a classification system, where to draw a scope boundary. **Do not make these decisions invisibly during drafting.** Surface the decision explicitly, then run this procedure.
- Any time you realize you've already made a structural decision without running this procedure: stop, name the decision you made, run the procedure retroactively, and update if a better approach surfaces.

**The invisible-decision failure mode:** The most common way this procedure fails to fire is not that the user skips it — it's that the decision happens silently during drafting, so there is no "output" moment that triggers the procedure. The fix: before any Phase 6 draft, list the structural decisions the draft will need to make, then run alternatives-generation on each before drafting begins.

**Why this exists:** AI anchors on the first plausible approach and refines from there. The first approach is not necessarily the best approach — it is the most statistically likely approach given the training distribution. Alternatives generation is the structural countermeasure. Without it, the output of every phase is the most expected answer, not necessarily the right one.

This procedure does not require finding a better alternative. It requires the discipline of looking for one. The looking itself catches blind spots even when the first approach wins.

---

## The procedure (4 steps)

**Step 1 — Name the approach taken.**

One sentence: what is the approach, and what assumption does it rest on?

Example: "The approach is a linear phase sequence (intake → research → plan → build → verify) resting on the assumption that research must be complete before building begins."

This naming matters. You cannot generate alternatives to an unnamed thing.

**Step 2 — Generate at least 2 alternatives with different underlying assumptions.**

The alternatives must rest on DIFFERENT assumptions, not different implementations of the same assumption.

"A 7-phase sequence instead of an 8-phase sequence" is NOT an alternative — it is a parameter change on the same approach.

"Build first, research to validate (inverted pipeline)" is an alternative — it rests on a different assumption (build speed reveals what research is actually needed, rather than research enabling correct building).

For each alternative, complete: *"This alternative assumes ___ instead of ___ and would produce ___ differently."*

Cap at 2-3 alternatives. More produces confusion, not insight.

**Step 2b — Steelman each alternative before evaluating it.**

This step runs BEFORE step 3. For each alternative: "What is the strongest case FOR this alternative? Why would a smart person who knows this domain choose it over the current approach?"

This step exists because of a documented failure mode: generating alternatives that are obviously worse in order to confirm the first approach (strawmanning). The fix is steelmanning — building the best version of each alternative. You cannot evaluate an alternative honestly until you have built its best case.

If you cannot construct a genuine case for why someone would choose this alternative: it is a strawman. Discard it and generate a better one. The test: would a domain expert who disagreed with your first approach have chosen this alternative?

**Step 3 — Evaluate each alternative against the done-criteria.**

Not against preference. Against the testable done-criteria from the current phase.

For each alternative: does it meet the done-criteria better, worse, or equivalently? If worse on one dimension, better on another — name both.

**Required:** For each alternative you reject, name one dimension on which it would have been better than the chosen approach. If you cannot name one — even a dimension the current situation de-prioritizes (e.g., "faster to build," "simpler to explain," "better for small inputs") — the alternative was a strawman. Generate a new one that has genuine advantages.

**Step 4 — Make an explicit choice with a reason.**

Choose the current approach OR one of the alternatives. State the reason in one sentence referencing the done-criteria evaluation, not personal preference. Log the choice and the reason in the design log.

If the alternative is better: switch. Update the design log entry for this phase.
If the current approach is better: document why, so the alternatives don't get re-litigated next session.

---

## When this procedure fires at the PHASE level vs the FILE level

**Phase level (mandatory):** fires once per phase, on the overall approach to that phase. Example: after Phase 3 (Research), the alternatives question is: "Was the research structure (multi-angle parallel waves) the right approach? What would a saturation-focused approach have looked like? A depth-first approach?"

**File level (mandatory for every Phase 6 draft):** fires once per kit file before verifier dispatch. The alternatives question is: "Is this the right structure for this skill/procedure? What would a fundamentally different structure look like?"

---

## When to skip

**Skip when ALL of the following are true:**
- The decision is administrative with no structural implications: file naming, formatting choices, section headers
- The current output was itself selected as the winner from a prior alternatives round — do not re-evaluate a choice you just made deliberately

**Do NOT skip even when tempted:**
- "I can't think of any alternatives" — this is a signal to think harder, not to skip. Use: "What would someone who disagrees with this approach have done instead?" If still stuck: name one alternative that rests on a fundamentally different assumption, even if it seems worse.
- "The first approach is obviously right" — "obviously right" suppresses alternatives generation and is itself the failure mode this procedure defends against.
- "Alternatives would all be worse" — maybe. But generating them forces you to name WHY, which strengthens the case for the current approach and produces documentation.
- Any first-pass output from Phase 6 (per-file drafts): this fires every time, no exceptions.

---

## Anti-pattern: strawman alternatives

Generating alternatives that are obviously worse in order to confirm the first approach is alternatives theater. The test: would a domain expert who disagreed with the first approach have chosen one of the alternatives? If the alternatives are things no reasonable person would choose, generate different alternatives.

Anti-pattern example:
- Approach: "Multi-angle parallel research waves"
- Bad alternative 1: "Ask the user what to research" (strawman — loses all research discipline)
- Bad alternative 2: "Only search GitHub" (strawman — obviously insufficient)

Better alternatives:
- "Sequential depth-first research: one angle deeply before moving to the next — assumption: breadth wastes effort on weak angles when one strong angle would suffice"
- "Research-by-hypothesis: define specific hypotheses upfront, only research to confirm or refute each — assumption: the right hypotheses can be formed without prior research"

---

## What this procedure does NOT do

- It does not require abandoning the first approach. It requires honest evaluation of alternatives.
- It does not fire on trivial decisions (choosing a file name, picking a section header). Trigger: the decision has meaningful structural implications for the kit output.
- It does not replace the reflection checkpoint — alternatives generation is about the current approach; reflection is about what the phase produced.

---

**Trace:** Same-mental-model halt (claude_process halt-conditions Rule 7) adapted for generative phases. The original fires after 5 modifying actions on one hypothesis. This adaptation fires proactively after any first-pass output rather than reactively after getting stuck — because getting stuck is not the only way to miss a better approach. The cap at 2-3 alternatives is from the anti-sycophancy checklist research: 3 failure modes is the productive maximum before quality degrades.
