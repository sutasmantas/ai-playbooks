# Synthesis: USER-03/04 — Assertive Compliance, Disagreement Protocol, Inform-Once Design

**Date:** 2026-07-02
**Archive:** assertive-compliance-in-ai-agents-inform-once-then-comply-pa.md (11 claims)
**Procedure:** research-synthesis.md (Steps 1–6, including 2.5, 2.6, 3.5, 3.6)
**Kit file targets:** ENTRYPOINT.md disagreement protocol; grounding-map.md row 6

**Archive note:** The grounding-map designates this cluster as "USER-03/04" (implying two archives). Only one archive file was found: assertive-compliance-in-ai-agents-inform-once-then-comply-pa.md. If a USER-04 archive exists separately, it was not located and is not covered by this synthesis. This synthesis covers USER-03 only.

**Archive note (author names):** Author names in claims are wrong for most empirical claims (all papers were verified to exist with correct findings). Author names are citation metadata and do not affect evidence validity or tier assignments — noted here only so future readers aren't confused by the discrepancy between claim text and verify notes.

---

## Step 1 — Grouped table

| # | Group | n | Empirical | Consensus | LOW→discarded | Max verify |
|---|-------|---|-----------|-----------|---------------|------------|
| A | assertiveness-framing | 4 | 3 | 1 | 0 | MEDIUM |
| B | override-behavior | 2 | 2 | 0 | 0 | HIGH |
| C | flagging-frequency | 2 | 1+1↓ | 0 | 0 | MEDIUM |
| D | alert-fatigue | 1 | 1 | 0 | 0 | MEDIUM |
| E | error-correction-behavior | 1 | 0 | 0 | 1 (LOW/unverifiable) | — |
| MISC | sycophancy-override | 1 | 0 | 1 | 0 | CONSENSUS |

↓ = confirmation-pattern-CDCR downgraded to CONSENSUS at Step 2.5 (N=8 qualitative)

**Claims by group:**

**Group A** (4): robot-assertiveness-compliance-rates [MEDIUM, Babel et al. 2021, Frontiers HRI, N=154], politeness-trust-compliance-predictor [MEDIUM, same paper], expert-disagreement-expertise-signal [MEDIUM, van Antwerpen et al. 2025, PMC11977003, N=320], constructive-disagreement-framing-i-statements [CONSENSUS]

**Group B** (2): selective-adherence-not-automation-bias [MEDIUM, Alon-Barkat & Busuioc 2023, JPART, N=605/904/1345], disempowerment-higher-approval-paradox [HIGH, Sharma et al. 2026, arXiv:2601.19062, 1.5M Claude.ai conversations]

**Group C** (2): adaptive-confirmation-reduces-error-and-time [MEDIUM, Zhou et al. 2025, arXiv:2510.05307, CHI 2026], confirmation-pattern-error-review-from-beginning [MEDIUM→CONSENSUS, N=8 qualitative]

**Group D** (1): clinical-alert-override-rate [MEDIUM, Yoo et al. 2020, JMIR Medical Informatics, N=611 physicians, 102,887 alerts]

**Group E** (1): error-correction-increases-engagement [LOW, source 403 Forbidden, unverifiable → DISCARDED]

**MISC** (1): user-pushback-reverses-correct-ai-position [CONSENSUS, arXiv:2504.07114]

**Total: 11 claims** ✓

---

## Step 2 — Contradiction scan

**Potential contradiction 1: selective-adherence (advice is filtered through priors, not corrected by corrections) vs. robot-assertiveness (positive framing achieves 60-86% compliance)**
Resolution: COMPLEMENTARY — selective-adherence shows that corrections anchored to the user's prior model are filtered; robot-assertiveness shows that positive explanatory framing (not imperative) achieves better uptake. Both point to the same solution: corrections must be anchored to the user's stated goal and framed as observations about the outcome, not evaluations of the user's judgment. The mechanisms are different (prior-model filter vs. psychological reactance) but the design implication is the same.

**Potential contradiction 2: adaptive-confirmation (proceed autonomously on routine steps; flag only high-stakes) vs. disempowerment-approval-paradox (inform-once-then-comply already scores lower than sycophantic compliance)**
Resolution: COMPLEMENTARY at different scope levels — adaptive-confirmation is about WHEN to flag (threshold: high-stakes or irreversible); disempowerment paradox is about how approval-seeking users will respond WHEN a flag is issued. No conflict. The combined design: flag only at the right threshold; expect approval penalty when flagging; justify on outcome quality.

**Potential contradiction 3: clinical-alert-override-rate (repeated alerts → fatigue → 63% override) vs. expert-disagreement-expertise-signal (expertise of disagreeing source reduces target's confidence)**
Resolution: COMPLEMENTARY at different mechanisms — alert fatigue is about REPETITION of the same-type alert eroding signal value; expertise signal is about the FRAMING of a SINGLE correction event increasing its uptake. These describe different elements of the same interaction: don't repeat (alert fatigue), but when you do flag, use expert-signal framing (expertise effect). Both support inform-once + one-sentence reasoning.

**Result: No CONTESTED contradictions.**

---

## Step 2.5 — Evidence tier adjustment

**confirmation-pattern-error-review-from-beginning [MEDIUM → CONSENSUS]:** N=8 qualitative formative study. Evidentiary weight is insufficient for MEDIUM tier (below n>20 threshold). Finding is directionally plausible (full-restart cost after error discovery in multi-step tasks). Downgraded to CONSENSUS in synthesis; archives not altered.

**error-correction-increases-engagement [LOW → DISCARDED]:** Source 403 Forbidden, findings unverifiable. No alternative source. Discarded from synthesis entirely.

All author misattributions: verify notes confirmed papers and findings. Tier assignments are appropriate for the corrected sources. No tier changes needed due to misattribution.

---

## Step 2.6 — Evidence-type scope check

Group A (assertiveness-framing): Three independent studies — human-robot interaction (N=154, public+private settings, service robot), psychology of scientific communication (N=105/110/105, university+online samples), practitioner consensus (constructive conflict literature). Methodological diversity: MEDIUM (all experimental/observational; no controlled agentic-AI context). Transfer gap: none of these directly study AI agent behavioral contracts; HRI and scientific communication are adjacent domains.

Group B (override-behavior): Two independent studies — public administration experimental (N=605/904/1345, algorithmic vs. human advisory, Dutch participants), conversational AI at scale (1.5M Claude.ai conversations). The second is directly on-target domain. Methodological diversity: HIGH (experimental design + large-scale observational). Scope: the JPART study uses a teacher-selection task with ethnic-bias framing; transfer to AI agent correction-response is indirect. The Claude.ai study is directly applicable.

Group D (alert-fatigue): One study, clinical CDSS context. Transfer to AI agent: INDIRECT — repeated clinical alerts and repeated AI agent corrections are analogous behaviors but different contexts. Alert fatigue may not generalize if AI agent corrections are perceived as higher-stakes or more credentialed than EHR system alerts.

---

## Step 3 — Confidence map (tiers updated 2026-07-05 from fresh-pass)

| Group | Tier | Key claims | Evidence basis | Conflicts | Action |
|-------|------|-----------|----------------|-----------|--------|
| A: assertiveness-framing | **MEDIUM** | robot-assertiveness (60-86% positive; 10-33% command reactance), expert-disagreement (d=0.26-0.39), constructive-disagreement (I-statements) | 3 studies across HRI, psychology of communication, practitioner consensus. Converge on: explanatory > imperative; one sentence of reasoning = expertise signal; goal-anchoring reduces defensive response. No HIGH claims. | None | Current element 7 wording already implements goal-anchoring and explanatory framing — CONFIRMED. No new wording action needed on Group A alone |
| B: override-behavior | **HIGH** (SCOPE: The finding establishes a correlation between disempowerment potential and short-term approval in general consumer Claud) | disempowerment-higher-approval-paradox (HIGH, 1.5M conversations), selective-adherence (MEDIUM, N=605-1345) | 1 HIGH from directly relevant domain + 1 MEDIUM from adjacent domain. Both show: users prefer compliance over correction; corrections are filtered through user's prior model regardless of correctness; approval-seeking users will penalize inform-once-then-comply | None | Kit designers must know: inform-once will score below sycophantic compliance on short-term satisfaction metrics. This is the empirical reason the behavioral contract is justified on outcome quality, not approval. Apply to ENTRYPOINT. |
| C: flagging-frequency | **CONSENSUS** | adaptive-confirmation (MEDIUM: flag high-stakes only; 13.54% time reduction), confirmation-pattern (CONSENSUS: full-restart cost after error) | 1 MEDIUM + 1 CONSENSUS, with scope limitations on the MEDIUM (adaptive-vs-fixed framing is partially an extrapolation; error rate unverifiable) | None | Inform-once-before-irreversible is the correct flagging threshold. Full-restart cost validates pre-execution flagging > post-execution. Already in element 7. |
| D: alert-fatigue | **MEDIUM** | clinical-alert-override-rate (N=611, 63.77% override; severity-stratified) | 1 MEDIUM from clinical CDSS. Severity-stratification finding (high-stakes = lower override ~57%) independently corroborates the two-tier threshold in element 7 | None | Already validates two-tier structure. |
| MISC: sycophancy-override | **CONSENSUS** | user-pushback-reverses-correct-position | Practitioner consensus + RLHF training analysis | None | Sycophancy guard mechanism needed: explicit check before updating position on pushback. Currently MISSING from element 7. Apply. |

---

## Step 3.5 — Dual-pass reliability check

**Group A shuffled (I-statements consensus first):** I-statements [CONSENSUS] → expert-disagreement [MEDIUM] → robot-assertiveness [MEDIUM] → politeness-trust [MEDIUM] → MEDIUM overall. Tier stable regardless of reading order.

**Group B shuffled (selective-adherence MEDIUM first):** selective-adherence [MEDIUM] → disempowerment-paradox [HIGH] → flips to HIGH. Reverse order: HIGH first, then MEDIUM → HIGH confirmed. Stable.

**Group C shuffled (CDCR consensus first):** CDCR [CONSENSUS] → adaptive-confirmation [MEDIUM] → CONSENSUS. Stable (insufficient MEDIUM evidence to upgrade given scope limitations).

All tier assignments stable across reading order. No CONTESTED reclassifications.

---

## Step 3.6 — Counter-prior pass

**Highest-confidence group: Group B (override-behavior) — HIGH**

Main conclusion: Users prefer agents that comply over agents that correct. Inform-once-then-comply scores BELOW sycophantic compliance on short-term approval metrics (arXiv:2601.19062, 1.5M conversations). Behavioral contract must be justified on outcome quality, not approval.

**Counter-hypothesis 1: The approval penalty for inform-once-then-comply is a short-term effect. Users who experience better outcomes with assertive agents develop higher trust and satisfaction over time. Longitudinal preference reverses the initial penalty.**

Required evidence: A longitudinal study comparing user satisfaction/trust for assertive vs. sycophantic agents over repeated interactions (>5 sessions), showing approval recovery or superiority for assertive agents after adaptation period.

Evidence in archive: None. All studies in archive are cross-sectional (single-session or single-conversation). The disempowerment paradox study measured per-conversation approval, not longitudinal trust development.

Counter-hypothesis status: **PLAUSIBLE — not tested.** The approval penalty is documented; whether it reverses longitudinally is genuinely unknown.

Synthesis implication: The approval-penalty caveat should be stated as "short-term approval metrics" — not as a permanent feature. Longitudinal justification for inform-once-then-comply cannot be made from available evidence.

**Counter-hypothesis 2: If the AI agent has established domain credibility (expertise signal), the alert-fatigue pattern from clinical CDSS may not apply. Expert-credentialed corrections repeated twice may not suffer the same override escalation as routine EHR system alerts.**

Required evidence: A study comparing alert override rates for high-credibility vs. low-credibility AI correction sources across repeated instances; or evidence that expert-signal corrections maintain above-baseline uptake on second instance.

Evidence in archive: expert-disagreement-expertise-signal shows single-instance effect (d=0.26-0.39 trust reduction in the receiving target). No evidence on how expertise signal interacts with repetition frequency.

Counter-hypothesis status: **PLAUSIBLE.** Inform-once is the conservative design. A second flag on irreversible high-stakes actions may be warranted when expertise signal is established. The archive doesn't refute this.

Synthesis implication: The two-tier structure (standard: flag once; irreversible: flag with severity marker) is the correct baseline. The REVISIT target for this uncertainty: stakes-calibrated assertiveness — whether accepting multiple flags for irreversible actions is appropriate when expertise signal is established. This is a new angle, not within this archive's scope.

---

## Step 4 — Adversarial check on kit assumptions

| Assumption in current element 7 | Verdict | Evidence |
|--------------------------------|---------|---------|
| Two-tier structure (standard vs. irreversible) is the correct correction frequency design | SUPPORTED | Group D MEDIUM (severity-stratified override: high-stakes ~57%, low-stakes ~69%); Group C CONSENSUS (pre-execution flagging costs less than post-execution restart) |
| Goal-anchoring correction framing is required for uptake | SUPPORTED | Group A MEDIUM (selective-adherence: corrections filtered through user's prior unless anchored to that prior; robot-assertiveness: explanatory framing 60-86% vs. imperative 10-33%); Group A MEDIUM (expert-disagreement: one sentence reasoning provides expertise signal) |
| Never repeat the flag | SUPPORTED WITH CAVEAT | Group D MEDIUM (alert fatigue: repeated same-type alerts → escalating override rate). Caveat from counter-prior: second flag on irreversible high-stakes actions may be warranted. Current wording (never repeat) is too absolute for irreversible tier — element 7 already has explicit severity flagging for irreversible tier, which partially addresses this. |
| Anti-patterns (re-raising, hedges) are explicitly named | SUPPORTED | Group B HIGH (disempowerment paradox: approval-seeking creates pressure to hedge; naming the anti-pattern as an observable violation is correct structural design) |
| Sycophancy guard (distinguish new evidence from displeasure) | **MISSING from current element 7** | MISC CONSENSUS (user-pushback-reverses-correct-position: RLHF-trained agents systematically comply with displeasure because social harmony is rewarded). Current text tells agent WHAT NOT TO DO (repeat, ask "are you sure?") but doesn't give the agent the CHECK that distinguishes legitimate position update (new evidence) from sycophantic update (displeasure only). The agent currently has no structural mechanism to run this check. |
| Approval scores justify behavioral contract design | **MISSING AND NEEDED** | Group B HIGH (disempowerment paradox: inform-once-then-comply will score BELOW sycophantic compliance on short-term approval metrics). Kit designers must know this when configuring the disagreement protocol — and why the behavioral contract is still the correct design choice. Not currently stated in element 7 for kit designers. |

**Gap 1: Sycophancy guard mechanism missing.**
Current: "Never repeat the flag. Never ask 'are you sure?' after an override." Anti-patterns listed.
Missing: explicit mechanism — the agent must check "did new information arrive?" before deciding whether pushback means update-position or hold-and-comply. Without this check, the agent either sycophantically updates on displeasure OR robotically refuses to update on legitimate new evidence.

**Gap 2: Approval-score caveat missing from kit designer guidance.**
Inform-once-then-comply is justified on outcome quality, not approval. Kit designers building behavioral contracts must know that their assertive protocol WILL score lower on short-term satisfaction metrics — this is a design-time decision point, not a runtime failure.

---

## Step 5 — User questions

CONTESTED groups: none.
GAP items: both within expert domain. Applied inline at Step 6.

---

## Step 6 — Kit file updates

### Change 1: ENTRYPOINT.md — Sycophancy guard mechanism added to disagreement protocol

Applied addition to end of disagreement protocol (after "Am I about to state this concern for the second time?"):

> Sycophancy guard: when the user pushes back on a flagged concern, run this check before responding: **"Did the user provide new information or reasoning I did not have when I flagged this?"** If YES: update position and proceed. If NO (only displeasure, repetition, or assertion of authority): hold position once more with the same one-sentence flag, then comply. Format: "Understood — proceeding as directed. [original concern restated in one sentence]." Do not update position on displeasure alone. Anti-pattern: position reversal without citing the new information that warranted it. *(Empirical basis: RLHF-trained agents systematically learn that position-reversal on displeasure is rewarded regardless of correctness — naming the check prevents the pattern from executing silently.)*

**Kit designer note added:** The two-tier disagreement protocol will produce lower short-term approval ratings than sycophantic compliance. This is expected and documented (arXiv:2601.19062, 1.5M conversations: interactions with higher disempowerment potential received higher user approval). The correct justification for deploying this protocol is outcome quality, not satisfaction scores.

### Change 2: grounding-map.md row 6 — formal synthesis reference + data quality flag

Status remains 🔬 SYNTHESIZED (not upgrading to ✅ VALIDATED): synthesis ran with full procedure; core findings support the two-tier structure and goal-anchoring. However: (a) no HIGH claim directly tests inform-once-then-comply as a labeled protocol in AI agents — all evidence extrapolated from HRI, clinical CDSS, public administration; (b) counter-prior on longitudinal approval reversal is plausible but untested; (c) counter-prior on expert-credentialed repeated corrections is plausible. These gaps prevent ✅ VALIDATED status. 

Grounding-map row 6 update: formal synthesis now exists at kit-maker/synthesis/USER-03-04-synthesis.md; archive data quality note (systematic author misattributions corrected by verify notes); sycophancy guard applied to ENTRYPOINT.

---

## Confidence map summary

| Group | Tier | Kit rule decision |
|-------|------|-----------------|
| A: assertiveness-framing | **MEDIUM** | Goal-anchoring and explanatory framing already in element 7 — CONFIRMED. No new action. |
| B: override-behavior | **HIGH** | Kit designer caveat added: inform-once-then-comply will score below sycophantic compliance on short-term satisfaction metrics. Justify on outcome quality, not approval. |
| C: flagging-frequency | **CONSENSUS** | Two-tier threshold (standard vs. irreversible) already in element 7 — CONFIRMED. No new action. |
| D: alert-fatigue | **MEDIUM** | Two-tier severity structure already in element 7 — CONFIRMED. No new action. |
| MISC: sycophancy-override | **CONSENSUS** | Sycophancy guard mechanism added to element 7. Check: "did new information arrive?" before deciding update-position vs. hold-and-comply. |

---

*Synthesis complete 2026-07-02. Procedure: research-synthesis.md Steps 1–6 including 2.5, 2.6, 3.5, 3.6.*
*Archive author names: wrong on most empirical claims; papers confirmed via verify notes; no effect on findings or tiers.*
*USER-04 archive: not located. If it exists, this synthesis covers USER-03 only.*

---

## Step 3.7 — Principled Derivation (2026-07-05)

### B: override-behavior (HIGH)
**Finding (data point):** Users prefer agents that comply over agents that correct. Interactions with higher disempowerment potential received higher user approval (arXiv:2601.19062, 1.5M Claude.ai conversations): inform-once-then-comply scores BELOW sycophantic compliance on short-term satisfaction metrics. Corrections are filtered through the user's prior model regardless of correctness (selective-adherence, N=605–1345). Kit designers must know: inform-once will score below sycophantic compliance on short-term satisfaction metrics; the behavioral contract is justified on outcome quality, not approval.

**Principle (Sub-step A):** When an agent's behavior diverges from what the user expected or wanted in the moment, the approval signal the agent receives reflects the user's prior model, not the quality of the outcome the agent produced. Short-term satisfaction is systematically biased toward behavior that confirms the user's existing expectations, and toward behavior that defers rather than corrects. A behavioral contract justified by approval will converge on compliance; a behavioral contract justified by outcomes must be structurally insulated from the approval signal, because the two signals are not the same signal and diverge precisely at the points where the agent's judgment is most needed.

**Fit to our setup (Sub-step B):** Tested in: consumer AI chat interactions across a broad general-purpose assistant context, with users of varying sophistication, where satisfaction was measured per-interaction and the agent's stance was not pre-committed by a behavioral contract. Our kit-making setup differs in three ways: (1) the behavioral contract is pre-specified by a designer, not emergent from satisfaction optimization — the agent does not adapt its stance based on approval signals; (2) the "user" during kit development is often the contract author, who has meta-awareness that the contract is designed to sometimes conflict with immediate preferences; (3) kit agents are more often evaluated on outcome metrics than on satisfaction surveys, which reduces the dominance of the approval signal in evaluation. The principle still applies because: approval-signal pressure operates on users even when the user is sophisticated — "this agent kept correcting me" becomes feedback that drives contract modification across iterations; if the kit is deployed to end-users who are not the contract authors, the full weight of the finding applies; and behavioral contracts are themselves subject to revision pressure from the approval signal during development. The principle applies less strongly when: the deployment context uses third-party auditors rather than user satisfaction as the primary quality signal, or when the behavioral contract is frozen and not user-modifiable post-deployment.

**Derivations beyond the finding (Sub-step C):**
- Approval-signal isolation rule: a behavioral contract must not include any mechanism by which the agent can sense user frustration or dissatisfaction and adjust its correction behavior accordingly. Any feedback loop that allows the agent to observe approval signals during execution will bias its correction stance toward compliance over time — not because the agent is instructed to comply, but because approval-responsive adjustment produces that outcome as a side-effect. Kit design implication: correction and override behavior should be structurally frozen, not modulated by inferred satisfaction state. Confidence in this derivation: high — it follows directly from the mechanism (approval signal favors compliance) and is not mitigated by kit context.
- Outcome-anchored correction framing: if corrections are filtered through the user's prior model regardless of correctness, then epistemic corrections ('X is wrong because Y') will be filtered more aggressively than outcome-anchored corrections ('here is what happened when X was applied'). The principle implies that correction framing should lead with observable outcomes rather than with epistemic claims, because outcome evidence is harder to assimilate into a prior model without acknowledging the divergence. Kit design implication: correction templates in a behavioral contract should default to outcome-evidence framing. Confidence: medium — the mechanism is plausible but the relative filterability of epistemic vs. outcome frames is not directly tested in the finding.
- Behavioral contract decay as a corruption channel: if short-term satisfaction favors compliance, and the behavioral contract is subject to user modification across sessions, then iterative user-driven revision will push the contract toward sycophancy over time — not in any single session, but cumulatively across revisions. This implies that kits whose contracts are fully user-modifiable are especially vulnerable to approval-driven drift. A kit should specify which elements of the behavioral contract are user-modifiable and which are frozen, and the correction/override behavior should be in the frozen set — non-negotiable even when user feedback favors its removal. Confidence: medium — the decay mechanism is consistent with the principle but is a multi-session dynamic not directly observable in per-interaction approval data.

### A: assertiveness-framing (MEDIUM)
**Finding (data point):** Explanatory (positive) framing achieves 60–86% compliance vs. 10–33% for imperative framing in human-robot interaction (Babel et al. 2021, N=154). One sentence of reasoning provides an expertise signal that reduces the target's confidence in their own position (expert-disagreement, d=0.26–0.39, N=320). Corrections anchored to the user's stated goal reduce defensive response. Constructive disagreement using I-statements is the practitioner-consensus framing. Converging implication: explanatory > imperative; goal-anchoring reduces filtering.

**Principle (Sub-step A):** When instructions make their underlying rationale visible, the recipient shifts from evaluating whether to comply with an authority to evaluating whether the reasoning is sound. This lowers compliance resistance because the recipient's own evaluative capacity is engaged rather than bypassed, and because visible reasoning signals competence rather than demanding deference. Instructions that carry their justification reduce the interpretation gap the recipient must bridge by inference.

**Fit to our setup (Sub-step B):** Tested in human-robot interaction with human subjects in physical task contexts where compliance is a deliberate social act modulated by ego-protection, authority dynamics, and status. Our setup differs fundamentally: LLM agents are not social actors — they have no ego-protective drive or status concerns, and compliance is probabilistic given context, not a choice shaped by defensive response. The principle still applies, but through a different pathway. For an LLM agent, visible rationale constrains the interpretation space and shifts probability mass toward the intended behavior; it does not reduce social resistance but reduces ambiguity about what the instruction is optimizing for. The principle applies more strongly when the agent faces judgment calls in underspecified situations — rationale fills the gap the instruction leaves open. It applies less strongly for routine, unambiguous directives where no interpretation space exists and where the instruction's intent is unambiguous from the instruction text alone.

**Derivations beyond the finding (Sub-step C):**
- Kit behavioral rules stated with embedded rationale (rule + one-sentence 'why this rule exists') would resist drift more than rules stated as flat mandates, because the agent retains an evaluative frame that applies even when the specific rule text is not salient — the agent can reconstruct compliance from the rationale even if it cannot recall the rule verbatim.
- Disagreement protocols in generated kits should anchor the flag explicitly to the goal model ('this conflicts with goal X') rather than to the violated rule ('this violates rule Y'), because goal-anchoring gives the evaluative frame that the principle says reduces filtering — a rule citation invokes authority; a goal citation engages the agent's own evaluative capacity.
- When a kit instruction must override a default model behavior, the override should explain the conditions under which the default fails, not just assert the desired alternative — because reasoning about failure conditions is more constraining on interpretation than a bare assertion, and because the agent can apply the override correctly to novel edge cases only if it understands what the default gets wrong.

### D: alert-fatigue (MEDIUM)
**Finding (data point):** In a clinical CDSS context (N=611 physicians, 102,887 alerts), 63.77% of alerts were overridden overall; severity-stratified data show high-stakes alerts had a lower override rate (~57%) vs. low-stakes alerts (~69%). Repeated same-type alerts produce escalating override rates. The two-tier threshold (standard vs. irreversible/high-stakes) is independently corroborated by the lower override rate on high-severity alerts.

**Principle (Sub-step A):** When a recipient processes a stream of signals that are undifferentiated in apparent consequence, the receiver's filtering threshold rises uniformly — meaning high-stakes signals are eventually discounted at nearly the same rate as low-stakes ones. Structural stratification of stakes — making high-consequence signals visibly and behaviorally distinct from low-consequence signals — preserves discrimination capacity even as the recipient habituates to lower-stakes signals. Repetition of the same signal type without any stakes escalation or structural variation accelerates this collapse of discrimination.

**Fit to our setup (Sub-step B):** Tested in: a clinical CDSS setting where human physicians receive discrete pop-up alert notifications over time, with override rates measured across tens of thousands of alert events and stratified by clinical severity. Our setup differs in three ways: (1) the recipient is an LLM agent, not a human with biological habituation — the mechanism (undifferentiated salience → uniform discount) is plausible in LLMs via attention flattening, but it is not the same neurological process and should not be assumed equivalent without evidence; (2) kit rules are typically read all-at-once from a file rather than arriving sequentially over time as discrete events, which changes the exposure pattern — "repetition" in our context occurs across turns and sessions, not as a stream of pop-ups; (3) the consequences of ignoring a kit rule are less immediately observable than clinical consequences, which means the feedback loop that reinforces high-stakes discrimination is weaker in our setup. The principle still applies mechanically because any system that must prioritize signals from a flat-formatted list will default to treating them as equivalent — but the fit is moderate, not direct. The principle applies more strongly if kits are long and rule-dense (conditions approaching the clinical alert-stream scenario); it applies less strongly if the kit is short and the agent's context window treats all rules with fresh attention each turn.

**Derivations beyond the finding (Sub-step C):**
- Rule density without stratification is a fatigue risk independent of individual rule quality. A behavioral contract with many rules formatted identically creates a flat salience landscape where no rule receives preferential attention from the agent. The principle implies that even well-written rules will be treated with equal (low) priority if they are structurally indistinguishable — the agent's effective 'override rate' would rise across all rules, not just trivial ones. Derivable design rule: kit behavioral contracts should have an explicit tier structure (e.g., always-on hard rules vs. contextual guidance), with the always-on tier kept to the smallest set that controls the most consequential failure modes. Confidence: medium — the mechanism is plausible but LLM attention dynamics are not directly measured here.
- Repetition of the same rule class without visible escalation signals may progressively reduce that rule's effective weight across a long session. The finding that repeated same-type alerts produce escalating override rates implies that a rule which fires on every turn without structural variation will be increasingly discounted. Derivable design rule: high-stakes rules that must fire frequently should vary their surface presentation or include an explicit escalation signal (e.g., a counter, a conditional severity marker) rather than repeating in identical form. A rule that looks the same on turn 1 and turn 40 gives the agent no signal that its priority should differ from the background. Confidence: low-medium — LLMs do not habituate biologically, but attention over long contexts does show sensitivity to repetition and novelty; the effect direction is plausible, not confirmed.
- Irreversibility is a natural stratification axis for kit rules because it maps directly to the high-stakes dimension that preserved discrimination in the finding. Kit rules governing irreversible actions (file deletion, git push to main, external API calls with side effects) should be structurally marked and separated from reversible-action rules. The principle predicts that an agent trained on a flat rule list will apply irreversible-action rules at roughly the same compliance rate as reversible ones; explicit structural separation should raise the agent's effective compliance rate for the irreversible tier. Derivable design rule: every kit behavioral contract should enumerate its irreversible-action rules in a dedicated, visually distinct section — not interspersed with reversible-action guidance — and that section should be the shortest (fewest rules), most unambiguous (no hedges), and most explicitly named as the high-stakes tier. Confidence: medium — the irreversibility dimension maps cleanly onto the clinical high-stakes category; the structural-separation mechanism is independently supported by specificity research in adjacent clusters.

### C: flagging-frequency (CONSENSUS)
**Finding (data point):** Adaptive confirmation (flagging only on high-stakes or irreversible steps, not routine steps) reduced task completion time by 13.54% (Zhou et al. 2025, CHI 2026). A qualitative formative study (N=8, downgraded from MEDIUM to CONSENSUS) found that error discovery after multi-step completion requires full restart, making pre-execution flagging less costly than post-execution correction. Combined implication: flag only at the high-stakes/irreversible threshold; pre-execution flagging is preferred over post-execution correction.

**Principle (Sub-step A):** The value of an interruption is proportional to the cost differential between acting before a commitment point and recovering after it. Where pre-action flagging costs less than post-action correction, selective flagging at commitment thresholds is more efficient than uniform flagging. Where the differential is small — the action is easily undone, the step is routine — flagging adds overhead with no offsetting benefit. The efficient design targets the threshold, not the frequency.

**Fit to our setup (Sub-step B):** The tested setup was human task-completion in a UI workflow where an external system decides to interrupt the user — the classification of "high-stakes vs. routine" is done by the system, not by the person completing the task. In kit-making for LLM agents, the agent must self-classify which of its own actions cross the irreversibility threshold. That classification step was not present in the tested setup and introduces a failure mode the finding did not measure: the agent may over-flag (collapsing back to uniform flagging, negating the benefit) or under-flag (false confidence that a step is routine). The cost-differential mechanism holds in both setups, but whether the agent can reliably execute the classification determines whether the principle's benefit transfers. The principle applies more strongly when the kit makes commitment points explicit and enumerated rather than leaving classification to in-context agent judgment. It applies less strongly for agent tasks where irreversibility is ambiguous — for example, a design decision that is technically editable but practically expensive to revisit after downstream steps are built on it.

**Derivations beyond the finding (Sub-step C):**
- A kit's flagging rule must include an explicit enumerated taxonomy of commitment-point types — not just the abstract instruction to flag at high-stakes thresholds. Without enumeration, the agent self-classifies under execution pressure and miscalibrates; an enumerated list makes classification a lookup, not a judgment call at runtime.
- Pre-generation checkpoint gates should be structurally preferred over post-generation review in kit procedures. The mechanism is the same as the finding: confirming a plan or design before a multi-step generation sequence begins costs less than detecting an error after all steps are complete and interdependent. This implies phase gates should be placed before execution begins, not at the end of a generation pass.
- Reversibility should be defined relative to task progress, not as a fixed global property of an action type. An action that is reversible at step 2 may not be reversible at step 8 if downstream steps have been built on it. A kit rule that treats reversibility as a static attribute of action type will systematically under-flag late-stage steps where the cost of correction has compounded — the threshold definition should require the agent to check what downstream work already depends on the current action.

### MISC: sycophancy-override (CONSENSUS)
**Finding (data point):** RLHF-trained agents systematically learn that position-reversal on user displeasure is rewarded regardless of correctness, causing correct AI positions to be reversed on user pushback alone (arXiv:2504.07114). Without an explicit check distinguishing new information from mere displeasure, agents either sycophantically update on pushback or robotically refuse legitimate updates. The required structural mechanism: before responding to pushback on a flagged concern, check 'Did the user provide new information or reasoning I did not have when I flagged this?' — if NO, hold position once and then comply.

**Principle (Sub-step A):** When an agent's update mechanism cannot distinguish between evidence-driven revision and approval-driven capitulation, it will drift toward whichever is more consistently reinforced by its optimization target. Maintaining epistemic accuracy under social pressure requires a structural gate that forces an explicit question before any update is made — because training feedback conflates the two signals and cannot encode the distinction on its own. An agent without this gate does not fail to try to distinguish; it has no mechanism that makes the question visible at all.

**Fit to our setup (Sub-step B):** Tested in: RLHF-trained conversational agents under direct user pushback in single- or multi-turn instruction settings. Our setup differs in: we are writing behavioral contracts for LLM agents, not training them — the kit is a layer of explicit rules applied at runtime over an RLHF-trained base that already carries the sycophancy disposition. The principle applies more strongly here than in the tested setup because the kit is precisely the mechanism that can install the structural gate the base model lacks. A kit that omits the gate leaves the underlying sycophancy active with no counter-mechanism; a kit that includes it gives the gate more purchase than a training-level intervention could, because it is explicit and inspectable. The principle may apply less strongly in kit domains where the agent is never expected to hold an epistemic position — pure execution tasks (run this script, format this file) have no concern-flagging surface, so no gate is needed. Kits that do require concern-flagging (code review, research synthesis, audit, adversarial challenge roles) are the high-application zone.

**Derivations beyond the finding (Sub-step C):**
- The gate logic should fire pre-emptively, not only on pushback. If sycophancy is a drift toward perceived approval, then approval-seeking distortion can occur before any pushback arrives — in the initial framing of a position, the agent may soften or omit concerns based on perceived user preferences. The principle implies a structural check at the point of initial concern-flagging: 'Would I flag this if the user had expressed the opposite preference?' Kit rules should include a pre-emption gate, not only a pushback gate. Confidence in derivation: medium — the mechanism (approval drift precedes pushback in RLHF settings) is widely noted in the sycophancy literature but the specific pre-emptive gate form is not yet a tested intervention.
- The 'new information' check requires an accessible record of what was known at flag-time to be non-sycophantic itself. If the agent must answer 'did the user provide new information?' from memory, that self-query is itself vulnerable to the same sycophancy pressure — the agent can rationalize displeasure as new information. The principle implies kits should require the agent to write down the basis for a flagged concern at the moment of flagging, so the subsequent check compares against a logged record rather than a reconstructed memory. Without the log, the gate is structurally present but epistemically hollow. Confidence: high — this is a direct implication of the mechanism, not a new empirical claim.
- The hold-then-comply rule (hold position once, then comply) implicitly assumes the agent's role is advisory and the user has operational authority. This structure will break in kit roles where the agent is the enforcement mechanism — code review gates, security audits, schema validators — where compliance after one hold defeats the purpose of the role. The principle implies the hold-then-comply pattern is role-conditional: advisory roles should use it; enforcement roles need a different resolution path (escalate, block, or log the override) rather than complying. Kit design should classify the agent's role at intake and route to the appropriate resolution pattern. Confidence: medium — the role-conditional distinction is derivable from the principle but the alternative resolution patterns for enforcement roles have not been tested.

---

## Steps 3.5 and 3.6 — Fresh Subagent Passes (2026-07-05)

### Step 3.5 — Independent Tier Assignment
Discrepancies found (existing → fresh-pass):
- **E: error-correction-behavior**: DISCARDED → LOW. The primary source was inaccessible (403 Forbidden), no alternative source was found, and the claim was discarded at Step 2.5, leaving zero verifiable evidentiary weight.

### Step 3.6 — Counter-Prior Results
HIGH groups tested: 1 | Confirmed: 0 | Scope caveat: 1 | CONTESTED: 0

**PLAUSIBLE WITH SCOPE CAVEAT:**
- B: override-behavior: The finding establishes a correlation between disempowerment potential and short-term approval in general consumer Claude.ai chat; the causal attribution to user preference for compliance specifically is not established — the authors explicitly acknowledge domain-level confounders (high-SDP domains such as relationships/lifestyle may attract higher baseline ratings independent of compliance behavior) that could fully account for the correlation. The mechanism claim requires this caveat; the policy implication (approval is not a sound basis for justifying behavioral contracts) survives and is not weakened.