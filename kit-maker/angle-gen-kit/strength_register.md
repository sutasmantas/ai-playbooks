# strength_register.md — What This Kit Does Reliably Well

**Purpose:** Evidence-grounded accounting of what this kit delivers reliably and under what conditions. Counterpart to weakness_register.md — both are required for honest capability claims.

**Read alongside:** weakness_register.md. Strengths are only meaningful when the scope conditions are stated.

**Entry format:** Each strength names its scope condition (what it holds for), its evidence basis (specific synthesis finding, not just the group), and its failure condition (when this strength does NOT hold).

---

## Strength 1 — Structural null-hypothesis angle generation (HIGH confidence)

**What the kit does reliably:** Guarantees a null-hypothesis angle is present in every output — regardless of whether the LLM would have generated it without explicit structural elicitation.

**Why this is a genuine strength:** The null-hypothesis blindspot is documented as a systematic LLM default failure (synthesis G2, A10 F4). Without explicit structural elicitation, LLM-generated angle lists omit null-hypothesis angles at a rate consistent with training-data bias (confirmation and publication bias both favor positive results). The kit's type-allocation gate (Step 1 of angle-generation.md) makes the null-hypothesis angle a structural requirement — it cannot be skipped, merged, or satisfied by hedging language in a confirmatory angle. Gate 1 of angle-quality.md verifies its presence with a binary check.

**Scope condition:** Holds for any topic where the null-hypothesis framing is semantically interpretable. For purely definitional or taxonomic questions ("what are the types of X"), the null-hypothesis framing is not meaningful — flag this case explicitly rather than forcing a non-applicable angle.

**Failure condition:** This strength does NOT hold if the type-allocation step (angle-generation.md Step 1) is skipped or if the angle-quality.md Gate 1 null-hypothesis check is not run.

**Evidence:** llm-generation-failure-modes HIGH — synthesis G2 (A10 F4 null-hypothesis blindspot finding; 5 independent empirical claims).

---

## Strength 2 — Vocabulary-tradition coverage audit (HIGH confidence)

**What the kit does reliably:** Forces explicit enumeration of vocabulary traditions before any angle is generated, surfacing coverage gaps earlier than implicit search would.

**Why this is a genuine strength:** Vocabulary mismatch research establishes >80% mismatch probability for cross-tradition information search (Furnas 1987; Tetzlaff/Sampson). The mechanism is structural: vocabulary shapes what is retrievable. Step 0 of angle-generation.md maps traditions before generation begins — this is the operative intervention that expands the accessible literature space beyond the user's entry vocabulary. Even with an imperfect enumeration (Weakness 1 is real), requiring the agent to populate the coverage map surfaces gaps earlier than a purely implicit search would. The map also produces observable evidence that vocabulary-tradition checking ran.

**Scope condition:** Holds when the topic has ≥2 identifiable vocabulary traditions. For topics with a single monolithic vocabulary (rare — generally only applies to newly-coined concepts with no established terminology), the coverage map is trivially single-entry and the strength is neutral.

**Failure condition:** Does NOT hold if Step 0 is skipped (no coverage map produced) or if the coverage map lists only one tradition without the explicit gap flag.

**Evidence:** vocabulary-mismatch HIGH — synthesis G1 (Furnas 1987 n=5-domain study; Tetzlaff/Sampson 137 SRs; G1 derivation — Step 0 is the operative intervention).

---

## Strength 3 — Adversarial angle structural labeling (HIGH confidence)

**What the kit does reliably:** Labels adversarial angles with the explicit dispatch requirement that ensures structural context separation at execution time.

**Why this is a genuine strength:** The same-agent adversarial pass failure is prevented at the labeling level. Without the ADVERSARIAL-FLAGGED label and dispatch note, the downstream research agent has no signal that adversarial context separation is required — and will execute all angles in the same session, violating the structural independence requirement from synthesis G3. The label converts an invisible execution requirement into an observable artifact that a fresh agent can check.

**What this strength does NOT guarantee:** Downstream execution discipline. The label communicates the requirement; whether the requirement is honored depends on the agent executing the research. This boundary is documented in weakness_register.md Weakness 6.

**Scope condition:** The label mechanism only helps when the downstream research agent reads and honors the ADVERSARIAL-FLAGGED notation. If the downstream agent ignores the label, this strength collapses to the adversarial angle being present in name only.

**Failure condition:** Does NOT hold if the adversarial angle is generated in the same context as confirmatory angles without the label (angle-generation.md Step 1 adversarial angle format not followed), or if angle-quality.md Gate 1 adversarial-angle-present check is not run.

**Evidence:** confirmation-bias HIGH — synthesis G3 (CHI 2024 structural-independence-breaks-confirmation-loop; structural-intervention-effectiveness CONSENSUS G11).

---

## Strength 4 — Mode collapse detection via Boolean-connective test (HIGH confidence)

**What the kit does reliably:** Catches the most common form of LLM angle mode collapse (same angle in different vocabulary) before the angle list is dispatched.

**Why this is a genuine strength:** LLM angle generation defaults to synonym clusters — the Boolean-connective test and vocabulary-tradition distinctness check (angle-quality.md Gate 2) are applied before delivery. Mode collapse is the documented default for unconstrained LLM angle generation (O2-Searcher and Deep Research Survey findings; synthesis G7). The pre-dispatch check catches these cases at the output gate rather than discovering them after research has been executed on redundant angles.

**Scope condition:** Holds for topics with ≥20 papers in the literature. For small literatures (<20 papers), the Boolean-connective test produces false-positive synonymy flags (Weakness 4). The small-literature exception in angle-quality.md Gate 2 applies.

**Failure condition:** Does NOT hold if angle-quality.md Gate 2 is skipped or if the small-literature exception is not applied when the corpus is small.

**Evidence:** angle-quality HIGH — synthesis G7 (result-set Jaccard gold standard; O2-Searcher + Deep Research Survey mode collapse findings); llm-generation-failure-modes HIGH — synthesis G2 (collective-diversity-collapse, ideation-execution-gap findings).

---

## Strength 5 — Sparse-input operability (Principle 9, CONSENSUS)

**What the kit does reliably:** Produces a usable intake brief and angle list from a 1–2 sentence human prompt with no prior structured input from the user.

**Why this is a genuine strength:** The intake.md procedure bootstraps vocabulary, question type, and scope from minimal signal — no assumed domain expertise, no pre-formatted input, no forced structured framing. Most research tools assume structured input; the most common user input pattern is sparse ("I want to research X"). The kit's intake gate (Step 1–4 of intake.md) produces all required brief fields from a single sentence, asking at most 2 questions.

**Scope condition:** Holds for topics where the LLM has sufficient training-data representation to generate an initial vocabulary list. For highly specialized sub-fields or newly coined concepts not yet in training data, the vocabulary bootstrap (Source A) will be shallow — this produces the scenario documented in Weakness 1. The survey-paper probe (Source B) partially compensates.

**Failure condition:** Does NOT hold if the intake gate (Step 6 of intake.md) is bypassed or if angle generation begins without a populated intake brief. CLAUDE.md Rule 1 (intake structural gate) prevents this.

**Evidence:** kit-design-principles.md Principle 9 (sparse-input operability as design requirement); intake.md Step 5 fallback protocol handles the zero-anchor edge case.

---

## Strength 6 — Non-LLM quality criteria throughout (HIGH confidence)

**What the kit does reliably:** Applies only structural, agent-checkable quality criteria at every gate. No gate requires the agent to assess whether an angle "seems good" or "looks promising."

**Why this is a genuine strength:** LLM self-evaluation is documented as unreliable for research quality assessment: LLM novelty judgments anticorrelate with actual scientific impact (ρ=−0.29, HindSight time-split evaluation); LLM judges rate their own outputs 0.46 points more leniently than human judges; mode collapse produces synonym clusters that LOOK diverse to the generating LLM (synthesis G2). Every gate in this kit uses structural criteria: vocabulary-tradition column present, null-hypothesis angle present, Boolean-connective test pass, no LLM self-evaluation used for ranking. A fresh agent can run all gates without access to the generating agent's judgment or reasoning.

**Scope condition:** Holds for all topic types. Structural criteria are domain-independent.

**Failure condition:** Does NOT hold if an agent substitutes subjective assessment ("this angle looks more important") for the structural checks in angle-quality.md Gates 1–4.

**Evidence:** llm-generation-failure-modes HIGH — synthesis G2 (llm-judged-novelty-anticorrelated finding; HindSight evaluation; LLM judge leniency finding); angle-quality HIGH — synthesis G7 (Jaccard gold standard as objective criterion).

---

**Trace:** llm-generation-failure-modes HIGH (G2 — Strength 1 null-hypothesis gate; Strength 4 mode collapse detection; Strength 6 non-LLM criteria); vocabulary-mismatch HIGH (G1 — Strength 2 coverage map mechanism; Furnas 1987 and Tetzlaff/Sampson evidence); confirmation-bias HIGH (G3 — Strength 3 adversarial labeling; CHI 2024 structural independence); angle-quality HIGH (G7 — Strength 4 Boolean-connective test; Strength 6 structural-only criteria); kit-design-principles.md Principle 9 (Strength 5 sparse-input operability).
