# Subagent Benefits — Comprehensive List

**Created:** 2026-07-03
**Purpose:** Input to design decision: where should the kit-maker use subagents instead of single-agent approaches?
**Method:** Goal-model-first derivation (what single-agent failures prevent the goal model from being met?) + reference to existing kit-maker research.

**Goal model:** Perfect results with minimal user correction. Agent drives toward goal; user validates and makes judgment calls only.

---

## Method: from failure to benefit

For each class of single-agent failure, the corresponding subagent benefit is the structural fix. Benefits without a named single-agent failure are not structural — they're just "nice to have." Every benefit here names the failure it prevents.

---

## Category 1 — Bias and anchoring

### B1: No reasoning-chain contamination
**Single-agent failure:** When a worker agent evaluates its own output, the verifier sees the same reasoning chain that produced the output. Systematic errors in that reasoning chain are invisible to the verifier — it evaluates from within the same cognitive frame.
**Subagent benefit:** Verifier agent with no access to worker's reasoning evaluates from a genuinely independent position. Errors in the worker's reasoning are detectable because the verifier didn't produce them.
**Evidence:** Constitutional AI (Bai et al.) — external critique finds errors invisible to self-critique; autonomy-coverage-audit A5 — bare intrinsic self-correction fails, separate adversarial agent is an open question for a different reason.

### B2: No anchoring to prior conclusions
**Single-agent failure:** Once an agent commits to a conclusion in context, all subsequent reasoning is anchored to it. The agent seeks evidence that confirms, not evidence that contradicts.
**Subagent benefit:** Fresh agent with no knowledge of prior conclusions evaluates independently; not anchored to what was previously decided.
**Evidence:** Anchoring bias is well-established in LLM self-evaluation; Constitutional AI debate framing exploits this by having separate critics.

### B3: Sycophancy eliminated for evaluation tasks
**Single-agent failure:** A single agent evaluating work it produced is sycophantic toward itself — trained to approve of its outputs (RLHF optimization pressure). User feedback also creates sycophancy pressure when evaluation and production share a context.
**Subagent benefit:** Verifier agent with adversarial framing ("find reasons this did NOT advance the goal") has no reason to be sycophantic toward the worker — it didn't produce the work and its incentive is to find problems.
**Evidence:** goal-achieving-ideas.md #23 adversarial verifier; arXiv:2504.07114 (sycophancy from RLHF); 1.5M conversation study (approval paradox).

### B4: Role conflict eliminated
**Single-agent failure:** A single agent cannot simultaneously optimize for "produce good work" and "objectively evaluate work." These objectives are in tension — production creates bias toward approving the output.
**Subagent benefit:** Structural separation — one agent produces, a different agent evaluates. Neither agent has the other's objective. Role conflict is architecturally impossible.
**Evidence:** ENTRYPOINT Hard Rule 5 — "Producer never certifies own output"; Auditor A+B design.

### B5: No sunk cost reasoning
**Single-agent failure:** An agent that spent significant reasoning producing an output has a computational "investment" in it — subsequent self-evaluation tends to defend rather than critique.
**Subagent benefit:** Verifier agent made no investment in the output. Critique is not defense.

---

## Category 2 — Context and freshness

### B6: Fresh behavioral contract compliance
**Single-agent failure:** Behavioral contract compliance decays in long contexts — from ~73% at turn 5 to ~33% at turn 16 for prohibition rules (omission-commission-asymmetry, HIGH). By the time a single agent reaches evaluation steps deep in a task, its contract has substantially decayed.
**Subagent benefit:** Verifier subagent starts at turn 0 of its context — behavioral contract fires at full compliance. The agent that reads the auditor role from CLAUDE.md position 0 follows it at 100%.
**Evidence:** arXiv:2604.20911 (omission-commission-asymmetry, HIGH, 4,416 trials); arXiv:2606.22528 (governance-decay-compaction, HIGH, 1,323 episodes).

### B7: No path-of-least-resistance bias
**Single-agent failure:** An agent deep in context has accumulated momentum in a direction. Changing direction requires overcoming the inertia of prior reasoning. The "path of least resistance" is to continue the current trajectory.
**Subagent benefit:** Subagent has no trajectory to overcome. Evaluates from a clean slate; no path-of-least-resistance pull.

### B8: Context compaction resistance
**Single-agent failure:** In long sessions, context compaction drops behavioral instructions from summaries (governance-decay-compaction, HIGH). Rules that were active at session start are absent from the compacted context.
**Subagent benefit:** Subagent launched after compaction reads the full instruction set from position 0 — compaction of the parent context does not affect the subagent's compliance.

---

## Category 3 — Coverage and scope

### B9: Different vocabulary framing
**Single-agent failure:** A single agent that produced output using one vocabulary cluster searches for problems using the same vocabulary. It will find the problems it can name with that vocabulary and miss problems nameable only with a different one.
**Subagent benefit:** Different agents can be prompted with different vocabulary frames (e.g., "security auditor" vs. "performance reviewer" vs. "domain expert"). Each finds what its frame illuminates.
**Evidence:** research-quality.md Step 0 vocabulary-frame enumeration — this principle (missing vocabulary → missing coverage) applies to agents as much as to searches.

### B10: Dimension parallelism without fatigue
**Single-agent failure:** A single agent covering N dimensions sequentially shows fatigue effects — coverage quality degrades for later dimensions as context fills and attention is spread.
**Subagent benefit:** N agents each covering one dimension run in parallel with full context and attention on their single dimension. No fatigue effects; no dimension is "last."

### B11: Independent rediscovery as signal
**Single-agent failure:** When a single agent finds an issue and then "confirms" it, the confirmation is not independent — it's the same reasoning process run again, which will find what it already found.
**Subagent benefit:** When two independent agents both flag the same issue without seeing each other's output, that convergence is genuine signal. Disagreement between them is also genuine signal.

---

## Category 4 — Specialization

### B12: Purpose-built adversarial framing
**Single-agent failure:** A single agent cannot maintain an adversarial stance toward its own output — it's structurally motivated to defend what it produced. "Adversarial self-review" is psychologically incoherent.
**Subagent benefit:** Adversarial agent with system prompt "find reasons this did NOT advance the goal" has no motivation to defend the work. The adversarial framing is coherent because the agent has no prior stake.
**Evidence:** goal-achieving-ideas.md #23; Constitutional AI paper; debate-based evaluation frameworks.

### B13: Role-specific tool restriction
**Single-agent failure:** A verifier agent that CAN edit files will sometimes "fix" rather than "flag" — the tool availability creates a temptation to solve problems rather than report them.
**Subagent benefit:** Verifier subagents can be restricted to Read/Grep/Glob only — structurally enforced read-only evaluation. Can't fix what it can't edit.
**Evidence:** ENTRYPOINT Hard Rule 5 — "Two auditors with Read/Grep/Glob ONLY."

### B14: Persona differentiation
**Single-agent failure:** A single agent can roleplay multiple personas but reverts to its prior-distribution base behavior between turns. The "skeptic" persona is anchored to the same base model as the "optimist" persona.
**Subagent benefit:** Different agents can be seeded with genuinely different system prompts. A "skeptic" subagent with no other context IS a skeptic for its entire context; not a base model roleplaying one.

---

## Category 5 — Scale

### B15: True parallelism
**Single-agent failure:** Sequential tasks accumulate latency — task A completes before task B starts.
**Subagent benefit:** Independent tasks run simultaneously. Wall-clock time = slowest task, not sum of all tasks.

### B16: Large-input chunking
**Single-agent failure:** Inputs larger than the context window cannot be processed fully by a single agent; the agent either truncates or loses coherence.
**Subagent benefit:** Input can be partitioned across agents, each processing a full-context-window slice. Synthesis agent integrates across slices.

### B17: Fan-out for coverage depth
**Single-agent failure:** A single agent covers N things with 1/N attention per thing. Coverage depth is proportional to context budget.
**Subagent benefit:** N agents each cover 1 thing with full attention. Coverage depth is not limited by the number of things to cover.

---

## Category 6 — Verification quality

### B18: True verification independence
**Single-agent failure:** A single agent verifying its own work is like a student marking their own exam — the process that produced the error is the same process checking for it.
**Subagent benefit:** Independent verifier with no access to the worker's reasoning cannot re-trace the same error path. Catches what a different reasoning process catches.

### B19: Error non-propagation
**Single-agent failure:** If a single agent makes a reasoning error at step N, all subsequent steps (including self-evaluation) are influenced by that error. The error propagates forward through the same context.
**Subagent benefit:** Verifier agent starts fresh; the worker's error doesn't exist in its context. Evaluation is not influenced by the worker's error path.

### B20: Multi-round adversarial refinement
**Single-agent failure:** If the same agent runs multiple review rounds, each round is anchored to the prior round's conclusions. "Round 2 review" is effectively "continue round 1."
**Subagent benefit:** Each round can be a fresh adversarial agent with no memory of prior rounds. Round 2 is genuinely adversarial even if round 1 found nothing.

---

## Category 7 — Research and synthesis

### B21: Multi-vocabulary search coverage
**Single-agent failure:** A single agent searching for research on a topic uses one vocabulary cluster. When it reaches saturation (exhausts that cluster), it stops — but may have missed entirely different vocabulary traditions covering the same concept.
**Subagent benefit:** Multiple agents each searching with different vocabulary frames. Each finds what the others' vocabulary cannot find.
**Evidence:** research-quality.md Step 0 — vocabulary-frame enumeration designed exactly for this.

### B22: Adversarial synthesis verification
**Single-agent failure:** Synthesis is prior-biased — frontier models achieve <15% HDR on counter-prior hypotheses at any complexity level (hypothesis-inverted-ground-truth, HIGH). A single agent synthesizes toward its priors.
**Subagent benefit:** Adversarial synthesis agent given explicit counter-prior prompting ("find evidence AGAINST the main conclusion") supplements the confirmatory synthesis. Neither agent sees the other's output; divergence is signal.
**Evidence:** research-synthesis.md Step 3.6; synthesis-meta-research-methodology.md.

### B23: Blind replication of synthesis
**Single-agent failure:** If a synthesis has an error, the same agent re-reading it will tend to confirm it — the prior synthesis is now part of context.
**Subagent benefit:** Fresh agent given the same research inputs but not the prior synthesis will independently derive conclusions. Agreement = high confidence; disagreement = investigate.

---

## Category 8 — Decision quality

### B24: Judge panel (best-of-N)
**Single-agent failure:** First-attempt output from one agent is the output. No selection pressure for quality.
**Subagent benefit:** N agents each produce output; separate judge agent rates all N; best selected (or synthesized from winner). Selection pressure from within the agent pool, not from user correction.
**Evidence:** goal-achieving-ideas.md #22 (Best-of-N with Verifiable Scorer); ExpeL research.

### B25: Disagreement as signal
**Single-agent failure:** A single agent deliberating over options can reach any conclusion and report it without any external check. Internal deliberation is not observable.
**Subagent benefit:** When two independent agents reach opposite conclusions, the disagreement IS observable information — the question is genuinely contested. Neither agent can suppress the disagreement.

### B26: Judge/worker separation for calibration
**Single-agent failure:** If a single agent produces AND rates its output, high self-ratings are uninformative — it's structurally incentivized to approve.
**Subagent benefit:** Judge agent with no knowledge of who produced the work rates it; calibration is informative because the judge has no incentive to approve the specific output.

---

## Summary table

| Benefit | Single-agent failure prevented | Category |
|---------|------------------------------|----------|
| B1 | Reasoning-chain contamination | Bias |
| B2 | Anchoring to prior conclusions | Bias |
| B3 | Sycophancy in evaluation | Bias |
| B4 | Role conflict (produce+evaluate) | Bias |
| B5 | Sunk cost reasoning | Bias |
| B6 | Behavioral contract decay | Context |
| B7 | Path-of-least-resistance momentum | Context |
| B8 | Context compaction compliance drop | Context |
| B9 | Vocabulary-frame tunnel vision | Coverage |
| B10 | Dimension fatigue (sequential) | Coverage |
| B11 | False confirmation (non-independent) | Coverage |
| B12 | Incoherent adversarial self-review | Specialization |
| B13 | Verifier-edits-instead-of-flags | Specialization |
| B14 | Persona anchor to base distribution | Specialization |
| B15 | Sequential latency accumulation | Scale |
| B16 | Context-window size ceiling | Scale |
| B17 | Attention dilution across dimensions | Scale |
| B18 | Same-process error detection failure | Verification |
| B19 | Error propagation forward in context | Verification |
| B20 | Anchored multi-round review | Verification |
| B21 | Single-vocabulary search ceiling | Research |
| B22 | Prior-biased synthesis | Research |
| B23 | Confirmation of prior synthesis | Research |
| B24 | No selection pressure on output | Decision |
| B25 | Unobservable internal deliberation | Decision |
| B26 | Uninformative self-rating | Decision |

---

## What subagents do NOT fix

These single-agent failure modes persist even with subagents:

- **Shared training distribution bias:** If all agents come from the same base model, they share the same biases in world knowledge, probability distributions over vocabulary, and systematic blind spots. Subagents reduce anchoring bias but don't eliminate model-level biases.
- **Prompt injection at the interface:** If the input itself is adversarially constructed, multiple agents can all be equally fooled.
- **Factual errors in training data:** Independent agents will all reproduce the same factual errors from the training corpus.
- **Domain knowledge gaps:** If the base model lacks domain knowledge, multiple instances of it still lack that domain knowledge.

---

*Next step: map each benefit class to specific kit-maker tasks or decision points where single-agent is currently used but subagent would be better.*
