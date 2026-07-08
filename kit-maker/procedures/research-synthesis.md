# Procedure: Research Synthesis (Phase 4)

**Use when:** Phase 3 research is complete and verified. Turns the pile of claims into a usable confidence map that drives Phase 5 PLAN.

**Why this exists:** Well-researched claims are worthless if they can't be synthesized. The pipeline produces verified claims with evidence types and confidence levels — but synthesis requires: grouping with a minimum threshold, handling contradictions explicitly, producing a confidence map with three tiers, and identifying what to ask the user. Without this procedure, synthesis is vibes — the agent reads claims and produces a "summary" that inherits all its biases.

---

## Calibration contract (read before every synthesis — mandatory)

**Research findings are data points, not facts. They are not prescriptions.**

Every finding in the archive came from:
- A specific setup that may differ substantially from ours (different model, task type, domain, scale, constraints)
- Researchers with their own priors, limitations, and publication incentives
- A methodology that was imperfect by definition (all research is)
- A context that was not designed to answer our specific question

**What this means in practice:**
- A HIGH-confidence finding is strong evidence that X was true in tested setup Y. It is not proof that X is true in our setup.
- A finding that "X works" does not mean "implement X." It means "X worked in [setup] — reason about whether and how the principle behind X applies here."
- A finding that "X fails" does not mean "X is impossible." It means "X failed in [setup] — reason about whether our setup avoids the conditions that caused failure."
- No tier (HIGH, CONSENSUS, CONTESTED, GAP) gives a finding authority over independent reasoning from the goal model.

**The correct relationship between research and design:**
Research is input to reasoning, not the output. The synthesis procedure produces a confidence map of what the research found. Step 3.7 (below) turns that into a principled derivation of what the research implies — which is the actual input to Phase 5 PLAN. A synthesis that stops at Step 3.6 produces a literature report, not a design foundation. (M-30, 2026-07-03)

---

---

## Step 1 — Group claims

Collect all claims from the research archive. Group by the `group:` field.

**Minimum threshold (heuristic — not empirically validated):** Any group with fewer than 4 claims merges into `misc` by default. The goal is to avoid categories that produce only one-sentence conclusions. Apply judgment: a cluster of 2-3 HIGH-confidence claims that directly inform a specific kit decision is more useful standalone than merged into misc with unrelated claims. The number 4 is a satisficing rule, not a validated threshold.

After merging: sort groups by claim count, highest first. High-count groups are where the most signal is concentrated.

**Output:** A grouped table — group name, claim count, evidence breakdown (how many empirical/consensus/anecdote), verify pass coverage.

**Provisional notice (M-56, 2026-07-05):** All tier labels produced in Steps 1–3 are PROVISIONAL until Step 3.6 (counter-prior) completes. Do not apply these tiers to ENTRYPOINT.md, grounding-map.md, or any kit file before Step 3.6 finishes. If creating intermediate outputs: label HIGH assignments as "HIGH (CP pending)" and CONSENSUS as "CONSENSUS (CP pending)." A tier label without "(CP pending)" signals that counter-prior has run and confirmed it.

---

## Step 2 — Contradiction scan per group

For each group: identify claims that directly contradict each other.

A contradiction is one of two types:
- **Direct factual conflict:** Claim A says X produces outcome Y; Claim B says X does NOT produce outcome Y (or produces Z instead).
- **Implication-level conflict:** Claim A and Claim B don't state opposing facts directly, but if both were applied to a kit rule, they would lead to contradictory practical recommendations. Example: Claim A says "specificity improves compliance"; Claim B says "over-specification reduces generalization." Both can be true in different contexts but produce conflicting guidance for a single rule.

For each contradicting pair, record:
- Both claim keys
- Both confidence levels (from verify pass)
- Whether one study is larger/more recent/more replicated than the other
- Whether the contradiction has a scope explanation ("A applies when P; B applies when Q — not actually contradictory")

**Scope explanation test:** If you can write "these don't actually contradict because..." in one sentence that resolves the conflict: it's not a contradiction, it's a scope condition. If you cannot — or if you're uncertain whether the sentence you wrote fully resolves it — the answer is CONTESTED. Default to CONTESTED under uncertainty. False resolution of a genuine contradiction is worse than surfacing it.

**Why this default:** Two synthesizers could assess the same pair differently. The scope explanation is a judgment call. CONTESTED routes the decision to the user, which is the conservative safe outcome. Silent resolution routes it nowhere — the contradiction is buried in a rule the user never questioned.

**Second pass — cross-group implication scan (required):** After completing the intra-group scan above, review all group conclusions together. Do any conclusions from different groups imply contradictory design recommendations? This is the scan for **implication-level cross-group conflicts** — for example, Group A concluding "specificity improves compliance" while Group B concludes "over-specification reduces generalization" would each pass the intra-group scan, but conflict when both are applied to a single kit rule. Log any cross-group implication conflict as a CONTESTED entry in the contradiction pair list, format: `[Group A conclusion] ↔ [Group B conclusion] → CONTESTED (cross-group, implication-level)`. This pass is the one most likely to surface design-consequential conflicts — intra-group scans catch claim-level contradictions; cross-group scans catch conclusion-level contradictions. Do not skip it.

---

## Step 2.5 — Evidence tier adjustment

Before building the confidence map, apply this rule to all empirical claims:

**Low-confidence empirical = consensus tier for synthesis purposes.** A claim classified as `evidence: empirical` with verify confidence `low` (source unverifiable, author wrong, methodology unclear, n too small) does not carry empirical weight. Treat it as consensus during Step 3.

This prevents a group from reaching HIGH confidence on the strength of claims that the verify pass flagged as untrustworthy. A group of 8 empirical claims with 6 rated low is not HIGH confidence — it's CONSENSUS at best.

Do not alter the archive file. Apply the downgrade mentally during synthesis only. If you write notes, mark these claims as `[low-conf empirical → consensus tier]` in your working notes.

---

## Step 2.6 — Evidence-type scope check

Before building the confidence map, check the evidence type distribution of empirical claims in the archive:

- What fraction come from controlled experiments, RCTs, or pre-registered studies?
- What fraction come from observational studies, correlational analyses, or mechanistic reasoning?

If the archive is primarily observational or mechanistic (>60% of empirical claims are not from controlled experiments): note this in your synthesis output. GRADE-like confidence tiering was designed for controlled-trial evidence and systematically miscalibrates for observational and mechanistic domains — the same surface presentation of "multiple independent empirical claims" means less when all are observational. HIGH-tier groups from observational-majority archives should include an explicit caveat: "Evidence is primarily observational — HIGH tier is less well-calibrated than for controlled-experiment archives."

If the archive is primarily controlled-experiment evidence: proceed normally.

**This is a one-sentence annotation, not a gate.** It does not block synthesis — it adjusts the confidence map's framing.

---

## Step 3 — Confidence map

Classify each group into one of four tiers:

**HIGH confidence:** Multiple independent empirical claims agreeing, verify confidence is high or medium, no unresolved contradictions. Strong evidence that this finding held in tested setups. Input to Step 3.7 derivation — not a direct instruction to implement. "High confidence" means the principle behind this finding is worth extracting and extending with confidence; it does not mean "use directly without reasoning." (M-31)

*Threshold note (design judgment — not empirically validated, not resolvable by literature): "Multiple" is a judgment call. In practice: 2 independent empirical claims at high-verify confidence, or 3 independent empirical claims at medium-verify confidence, is a reasonable starting point. Both cases require the claims to be empirical — consensus or anecdotal claims do not count toward this threshold regardless of verify confidence.* Literature search will not calibrate this number — the appropriate validation is self-testing (run two independent synthesis passes on identical claim sets, compare tier assignments). Deferred unless ROI justifies it. Current threshold is provisional.*

*Precision pre-specification (`grade-precision-worst`, HIGH confidence, PCR-167): The precision/imprecision dimension is the most unreliable axis in evidence grading — inter-rater agreement on whether a claim is "sufficiently precise" sits at κ=0.18–0.21 (near chance in systematic studies). When tier assignment is ambiguous and precision is the deciding factor (e.g., claims agree but fewer than 2 are high-verify-confidence), pre-specify the threshold BEFORE examining the borderline group: "I will call this HIGH if ≥2 claims are independently at high-verify-confidence; otherwise CONSENSUS." Post-hoc threshold setting biases toward confirming the tier you expect. This fires only at the boundary — clear HIGH cases don't need it.*

*Indirectness annotation (required for all HIGH groups, `indirectness-neglect` MEDIUM confidence, PCR-167): For each HIGH-tier group, add one sentence to your confidence map entry: "Evidence applies to: [specific scope]. NOT directly applicable to: [out-of-scope use case]." Example: "Applies to: single-turn instruction following in English. Not directly applicable to: multi-turn agentic sequences or non-English prompts." One sentence — not a full GRADE assessment. Its purpose is to prevent scope overgeneralization, which is systematically neglected even in high-stakes guidelines.*

*Composition check (required before assigning any tier, `composition-failure-rate` MEDIUM confidence, PCR-167): Confirm all claims in a group measure the SAME underlying construct before assigning a tier. A group containing claims about related-but-distinct phenomena produces false-precision tiering. Test: "If I applied claim A and claim B as kit rules simultaneously, would they give contradictory instructions?" If yes — that is a composition failure hidden as a contradiction; split the group before tiering. Composition failures account for 87.3% of wrong multi-step synthesis answers (87.3% figure from multi-hop QA domain — directionally relevant analogy, not a direct measurement of this synthesis procedure).*

**CONSENSUS:** Claims are consensus-type (practitioner agreement) with no empirical contradiction. Defensible, but the justification is "this is widely believed" not "this is proven." Rules built here should note the source of confidence.

**CONTESTED:** Group contains an unresolved contradiction between empirical claims. The finding cannot be used as a settled rule. The confidence map entry must surface both claims and say why they conflict. User must weigh in.

**GAP:** No claims found in this area despite deliberate searching. Not "I forgot to look" — the null result log from Phase 3 confirms what was searched and what returned nothing. A gap is a design decision: proceed without research, do more research, or acknowledge the kit rule has no evidence base.

**Step 3 tiers remain CP pending until Step 3.6 completes.** Tiers assigned in this step are the first-pass confidence map. They are not final. Steps 3.5 and 3.6 (counter-prior) may downgrade HIGH groups. Mark all HIGH-tier groups in the table with "(CP pending)" until Step 3.6 confirms or downgrades each one.

Write the confidence map as a table. The **Evidence basis** column is required for HIGH and CONTESTED groups; optional for CONSENSUS and GAP. It documents which claims justify the tier and the evidence scope — this is the evidence-to-recommendation translation layer that makes the confidence-to-rule step auditable (`strong-from-low-evidence-rate`, HIGH confidence, PCR-167: 63.6% of strong clinical recommendations come from low/very low evidence with the justification undocumented):

| Group | Tier | Key claims | Evidence basis | Conflicts | Action |
|-------|------|-----------|----------------|-----------|--------|
| suspense-mechanics | HIGH | claim-1, claim-2 | 2 independent empirical (both high-verify); applies to narrative fiction, NOT instructional text | none | derive from (Step 3.7) |
| cliffhanger-effects | CONTESTED | claim-A vs claim-B | claim-A: 1 controlled study (medium-verify); claim-B: 1 observational (high-verify) | medium vs medium, scope unclear | derive from both sides (Step 3.7 CONTESTED variant); ask user on conflict |
| plot-structure | CONSENSUS | claim-C, claim-D | — | none | derive from (Step 3.7) |
| dialogue-empirics | GAP | — | — | — | derive from adjacent principles (Step 3.7 GAP variant) |

---

## Step 3.5 — Independent synthesis subagent pass

After completing Steps 1–3: dispatch a fresh subagent to independently assign confidence tiers to the same claim groups. The subagent must have no access to the tier assignments from Step 3 — it receives only the raw grouped claim table.

**Why a subagent and not the same agent twice:** A same-agent second pass catches reading-order bias (which claims were seen first), but not systematic biases stable across reading orders — a miscalibration both passes share produces agreement-on-wrong. A fresh subagent with no prior session context eliminates anchoring to the first pass's conclusions, behavioral contract decay, and path-of-least-resistance momentum. Agreement between two independent reasoners is stronger signal than a self-consistent agent re-reading shuffled input. (B1, B2, B6 — see subagent-task-mapping-2026-07-03.md CONVERT-2)

**Execution:**

Step 1 — Prepare the synthesis brief. Extract ONLY:
- The grouped claim table: group name, claim keys, evidence type per claim, verify confidence per claim
- The tier criteria (HIGH/CONSENSUS/CONTESTED/GAP definitions from Step 3 of this procedure)
- No tier assignments from Step 3. No confidence map text. No synthesis prose.

Step 2 — Dispatch synthesis subagent with:
```
System prompt: "You are an independent evidence synthesizer. Apply the attached tier 
criteria to each claim group below. Assign HIGH, CONSENSUS, CONTESTED, or GAP to 
each group. For each assignment, write one sentence justifying it. You are seeing 
these claims for the first time — you have no prior synthesis of this material."

Input: the synthesis brief from Step 1.
```

Step 3 — Compare: main agent tier assignments (Step 3) vs. subagent tier assignments.

- **Agreement on tier:** proceed — two independent reasoners reached the same conclusion.
- **Disagreement on any group:** immediately reclassify that group as CONTESTED in the final confidence map. Do not pick a side. The disagreement is the finding — a genuinely contested classification surfaced by independent review. Document which pass assigned which tier.

**What this catches:** Both reading-order bias AND systematic biases stable across reading orders — because a different agent with a fresh context does not share the behavioral momentum or prior-session anchoring of the main agent. Agreement-on-wrong is still possible if both agents share a base-model bias (shared training distribution bias — see subagent-benefits-2026-07-03.md "What subagents do NOT fix"), but the set of biases not caught is now smaller.

**Shortcut available:** If all groups have ≥3 independent HIGH-verify-confidence empirical claims, subagent pass is optional — the threshold is clear enough that independent review cannot change the outcome. Document the skip explicitly: "Subagent pass skipped: all groups exceed 3-claim HIGH-verify threshold." Do not skip when any group is at the HIGH/CONSENSUS boundary.

---

## Step 3.6 — Counter-prior adversarial subagent (required, one pass per HIGH group)

After completing Step 3.5: for every HIGH-tier group in the confidence map, dispatch an adversarial subagent to challenge that group's conclusion. The subagent must not see the synthesis text — it receives only the conclusion and the raw claim IDs. Do not limit this step to the single highest-confidence group — every HIGH group has a conclusion worth adversarially challenging, and partial coverage produces a synthesis that is calibrated against anchoring bias only for its most-confident finding while leaving the others unchallenged.

**Why a subagent and not the same agent:** The same agent that built the confidence map anchors to its own conclusions; generating a counter-hypothesis under explicit instruction does not escape the anchor. A subagent given only the conclusion (not the synthesis that produced it) approaches it without the confirmatory reasoning chain — what it finds against the conclusion is genuinely adversarial, not adversarial-shaped-but-still-confirmatory. (B12, B22, B3 — see subagent-task-mapping-2026-07-03.md CONVERT-1; structural anchoring argument has multi-source CONSENSUS support — the prior quantitative basis `hypothesis-inverted-ground-truth-15pct` HypoBench is CONTESTED 2026-07-05: model set excluded flagship frontier models, HDR applies only at counterintuitive+high-compositional-complexity conjunction; rule retained on structural argument not quantitative benchmark)

**Execution:**

Step 1 — Prepare the counter-prior brief. For the current HIGH group, extract ONLY:
- The main conclusion of this group (one sentence)
- The raw claim keys from this group (IDs only — no synthesis text, no confidence map, no tier assignment reasoning)
- The path to the research archive (so the subagent can read claims directly)

Repeat Steps 1–3 for each HIGH group in the confidence map before proceeding to Step 3.7.

Step 2 — Dispatch adversarial subagent with:
```
System prompt: "You are a skeptic. Your ONLY job is to find evidence that the following 
conclusion is FALSE. Do not balance the argument. Do not defend the conclusion.

Start by constructing the strongest possible case AGAINST it from first principles: 
identify the weakest assumption it rests on, the most threatening alternative explanation, 
the edge case that would break it.

Then read the research archive claims listed below and look for any evidence that 
supports the counter-case, even partially.

Report: (a) your counter-argument, (b) any supporting evidence found (claim keys), 
(c) your verdict — does the conclusion survive your challenge, or does it require 
tier revision?"

Input: the counter-prior brief from Step 1 only. No synthesis context.
```

Step 3 — Main agent reads the adversarial verdict and applies:

**Output format (completed by main agent after reading subagent verdict):**
```
Counter-prior pass — highest-confidence group: [group name]
Main conclusion: [one sentence]
Subagent counter-argument: [paste verbatim from subagent]
Supporting evidence found: [yes — claim key(s) / no]
Tier revision: [unchanged / reconsidered → CONTESTED]
```

If the subagent found supporting evidence for the counter-case: revisit the group's tier assignment and document what changed. If the counter-argument was easily dismissed: document that explicitly — it is evidence the finding is robust to adversarial challenge.

**What this catches that same-agent Step 3.6 missed:** Confirmatory anchoring. The prior procedure explicitly acknowledged "generating a counter-hypothesis under explicit instruction does not guarantee the generated hypothesis is genuinely counter-prior." The adversarial subagent with no synthesis context does not have the prior's gravity to escape.

**What this still does NOT catch:** Base-model-level biases shared between main agent and subagent (same training distribution). If both agents share a systematic blind spot, neither will generate the counter-hypothesis from outside it.

**Completion check (observable violation):** After Step 3.6 runs for all HIGH groups: count the counter-prior pass outputs. The count must equal the number of HIGH-tier groups in the confidence map. If the number of counter-prior entries is fewer than the number of HIGH groups — even by one — Step 3.6 is incomplete for those groups. Run it for the remaining HIGH groups before proceeding to Step 3.7. A synthesis with 5 HIGH groups and 4 counter-prior entries is not a complete synthesis. A synthesis with 0 HIGH groups requires no counter-prior passes.

**Basis:** Structural argument (multi-source CONSENSUS) — subagent lacks the confirmatory reasoning chain, making adversarial challenge genuine rather than shaped-but-confirmatory. Prior quantitative basis `hypothesis-inverted-ground-truth-15pct` (HypoBench arXiv:2504.11524v1) is CONTESTED 2026-07-05 (see synthesis-meta-research-methodology.md Step 3.6 supplement). Applied: Phase 5 Cluster B synthesis 2026-07-01. Subagent redesign: 2026-07-03 per subagent-task-mapping-2026-07-03.md CONVERT-1. Per-group requirement and count-parity observable: 9b Phase 7 canary (2026-07-05) confirmed that targeting only the highest-confidence group leaves other HIGH groups unchallenged; count-parity check confirmed necessary when canary showed a 5-entry / 6-HIGH-group synthesis would not have fired the zero-entry observable.

---

## Step 3.7 — Principles extraction and extension (required for ALL groups, every tier)

**This is the step that separates a literature report from a design foundation.** (M-30, M-31, 2026-07-03)

The confidence map (Step 3) documents what the research found. This step asks what the research implies — for our specific setup, and beyond what was explicitly tested. Every group has principles worth extracting regardless of confidence tier. CONTESTED groups have a principle on each side of the contradiction. GAP groups have a principle about what is unknown and why that matters.

**Limiting this step to HIGH/CONSENSUS groups reinstates the authority gradient the calibration contract rejects.** All findings are data points. Confidence tier affects how strongly to weight the derivation, not whether to derive.

For ALL groups, complete these sub-steps (variant by tier noted where different):

**Sub-step A — Extract the principle:**
State the underlying principle that the finding embodies, distinct from the finding itself.
- Finding: "Specificity in behavioral instructions improves compliance by X%"
- Principle: "The more precisely an instruction names the observable condition under which it applies and the observable action it requires, the less interpretation the executing agent must perform, and the less room there is for drift."
- The principle is more general than the finding. It applies to contexts the finding didn't test.

**Sub-step B — Assess fit to our setup:**
State concretely how our setup differs from the tested setup, and what that means for the principle's applicability.
Format: "Tested in: [setup]. Our setup differs in: [specific differences]. Principle still applies because: [mechanism that holds across both]. Principle may not apply if: [specific condition that would break it in our setup]."
Be honest. If the setup differences are large, say so — a HIGH-confidence finding from a very different setup is not HIGH confidence for us.

**Sub-step C — Derive beyond the finding:**
Given the principle (Sub-step A) and our setup (Sub-step B): what can we derive that the research didn't explicitly test?
Format: "The principle implies that [X] would also work / would also fail, even though the research didn't test it, because [mechanism]. Confidence in this derivation: [low / medium / high, with reason]."
This is where new mechanisms come from. The research tests specific instantiations; the principle generalizes. New mechanisms are derivations from the principle, not copies of the finding.

**CONTESTED variant:** Run Sub-steps A–C for EACH SIDE of the contradiction separately. "Principle behind Claim A: [...]. Principle behind Claim B: [...]. What would have to be true about our setup for A to dominate / B to dominate? [...]. What can we derive if A is right / B is right?" CONTESTED findings often contain more design signal than HIGH findings precisely because the contradiction names a real tension the design must navigate.

**GAP variant:** Sub-step A: what principle WOULD apply here if the research existed? (Reason from adjacent findings or first principles.) Sub-step B: what does the absence of evidence tell us about the state of the field? Sub-step C: what would we need to know to fill this gap — is it researchable, or is it genuinely unknown? GAP is not a dead end; it is an invitation to derive from adjacent principles.

**Output:** For each group, one short paragraph per sub-step. These go into synthesis.md as a "Principles and extensions" section alongside the confidence map table. The confidence tier is noted next to each derivation to indicate evidence weight.

**Failure mode to avoid:** "The principle is: [restatement of the finding]." If Sub-step A produces a principle that is just the finding reworded, it wasn't extracted — it was echoed. The principle should be more general than the finding (applies to more contexts) and more abstract (doesn't reference the specific measurement or outcome).

---

## Step 4 — Adversarial check on user assumptions

From the Phase 2 domain brief: what did the user assume about this domain?

For each user assumption: find the claim(s) that bear on it. Does the research support it, contradict it, or say nothing?

If research contradicts a user assumption: surface this explicitly. Do not bury it. Do not soften it. "Your assumption that X works because Y — the research on this is [finding]." This is not optional.

If research says nothing about a user assumption: that is a GAP for that specific assumption.

---

## Step 5 — User questions (CONTESTED and GAP only)

From the confidence map: CONTESTED groups need a user decision. GAP groups may need a user decision.

Formulate one question per contested/gap item. One at a time, per ENTRYPOINT hard rule 10.

**What NOT to ask about:**
- HIGH confidence findings — these are settled; asking the user about them is wasted time and implies the research doesn't matter
- CONSENSUS findings where the consensus is unambiguous — don't make the user weigh in on things that are widely agreed

**Question format:** "The research on [topic] is contested — [Claim A] vs [Claim B], both medium confidence. My default would be [X]. Do you want to override, or proceed with that?"

---

## Step 6 — Write synthesis.md

Output: `synthesis.md` with:
- Grouped table (Step 1)
- Contradiction pairs found (Step 2)
- Confidence map table (Step 3)
- Adversarial check on user assumptions (Step 4)
- User questions (Step 5)
- New angles generated: any gap or contradiction that suggests a missing research angle gets added to RESEARCH_ANGLES.md

---

## When to skip

**Never skip this procedure.** If Phase 3 ran, Phase 4 must synthesize. Running research and then building directly from the raw claims without synthesis produces the same result as not having the confidence map at all — the builder inherits the biases of which claims they happened to read first.

**The only acceptable short-form:** if Phase 3 produced fewer than 15 total claims across all angles, a full synthesis table is overhead. In this case: write a one-paragraph summary per group, still run the adversarial check, still produce user questions for contested items.

---

**Trace:** Book research pipeline (book/research/_raw/) — groups/ directory structures claims by theme for synthesis; small groups (<4) merge to misc. Systematic review synthesis: tier structure approximates GRADE (Guyatt et al. 2004) conceptually — HIGH ≈ moderate-high evidence, CONSENSUS ≈ weak/expert, CONTESTED ≈ very low or conditional, GAP ≈ missing evidence. This procedure does NOT formally assess imprecision, indirectness, or publication bias — those are full GRADE requirements not implemented here. The specific thresholds ("multiple" = 2–3, 4-claim grouping minimum) are design judgments not derivable from GRADE or any literature; calibrating them requires self-testing (design an experiment, not a literature search). Adversarial check on user assumptions: from ENTRYPOINT Phase 4.3 — required step documented in ENTRYPOINT but lacking a procedure. Contradiction-resolution design: accumulate contradictions at claim level; resolve at synthesis level with scope-explanation test; surface unresolvable contradictions as CONTESTED for user input. PCR-167 additions (`evidence-synthesis-procedure-validation-167.md`): Step 2.6 evidence-type scope check from `grade-public-health-rejection` (GRADE systematically miscalibrates for observational/mechanistic domains); precision pre-specification note from `grade-precision-worst` (κ=0.18–0.21 inter-rater — near chance); indirectness annotation from `indirectness-neglect` (systematically neglected even in WHO guidelines); composition check from `composition-failure-rate` (87.3% of wrong synthesis answers are composition failures, not retrieval gaps); evidence-to-recommendation transparency column from `strong-from-low-evidence-rate` (63.6% of strong clinical recommendations come from low evidence with no documented justification). `grade-irt-baseline-lift` and `umbrella-ai-retrieval-gap` not applied — LOW confidence, source verification failed.
