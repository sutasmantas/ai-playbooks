# INT-11 Learning Digest

Source data: stage-3-scoring/aggregated-scores.md

---

## (a) Cross-Tradition Coverage Claim: Domain-Conditionality

FM4 returned GENERAL. This is the central INT-11 finding: the angle-gen-kit's cross-tradition coverage claim is not domain-conditioned. The kit applies its tradition-spanning logic uniformly regardless of input domain, rather than adjusting which traditions are relevant or how heavily they are weighted based on the topic.

The Q7 scores confirm this structurally. Condition A scores 0–2 on Q7 across all 22 inputs, with no input reaching 3. Condition B scores 3 on Q7 for 21/22 inputs. The gap is consistent across standard, hard, and edge inputs — meaning it is not a difficulty-level artifact. The cross-tradition behavior difference between A and B is domain-agnostic: it fires or fails on any input type equally.

What this means for the kit's coverage claim: the claim that the kit produces cross-tradition angles is partially true (Condition B achieves it), but the claim that it does so in a domain-sensitive way — calibrating tradition selection to what the domain actually admits — is unsupported. FM4 = GENERAL means the kit does not distinguish a topic where cross-tradition synthesis is structurally appropriate (e.g., ethics, strategy) from one where it is a stretch (e.g., narrow technical domains). The coverage is real but domain-blind.

The calibration point reinforces this: H1 Cond-A Q1 = 3 (VALID: false). The calibration anchor held numerically but failed validation, meaning the Q1 score alone is not a reliable discriminator. Q1 is flat (3 across all conditions, all inputs), so it carries no signal. The discriminating dimension in INT-11 is Q7, not Q1.

---

## (b) Gap 2 and Gap 5 Fixes: BIN1/BIN2 Evidence

BIN1 and BIN2 both passed 22/22. This is a complete pass rate and directly confirms that the Gap 2 and Gap 5 fixes resolved the structural compliance failures those gaps named.

Gap 2 (inferred: a binary structural dimension that was failing in prior trials) was evidently a hard rule the kit was violating on some inputs. The 22/22 BIN1 result means the fix either constrained the output format to always satisfy the condition, or added an explicit check the kit now passes without exception. Either way, the fix is robust across all input types, including hard and edge.

Gap 5 (inferred: a second binary structural dimension) likewise passes at 22/22 on BIN2. The co-occurrence of both at ceiling is notable: they were probably correlated failures — fixing the output structure that caused Gap 2 likely addressed Gap 5 simultaneously, or the fixes were implemented together.

The important caveat: ceiling compliance rates can mask test coverage gaps rather than reflect genuine robustness. If BIN1 and BIN2 were defined narrowly enough that the fixed conditions always trigger the pass, the test may not be probing the boundary. INT-12 should test inputs that stress the boundary of BIN1 and BIN2 specifically — inputs designed to fail them — to verify the fix is not a narrow patch.

Avg P1 = 2.86 supports the fixes: P1 is near-ceiling with no catastrophic outliers, meaning the structural layer is consistently healthy across inputs.

---

## (c) Phase 3/4 Synthesis Process Updates

Three updates are indicated:

**1. Separate Q7 from Q1 in angle quality synthesis.**
Q1 is flat (all 3s, no signal). Phase 3/4 should not use Q1 as a quality gate or ranking signal. Q7 is the operative dimension for cross-tradition coverage quality and should be weighted accordingly in synthesis. If Phase 3/4 currently averages Q1 and Q7 into a single coverage score, that averaging suppresses the Q7 signal.

**2. Add domain-conditionality as an explicit synthesis axis.**
FM4 = GENERAL is a classification the synthesis process should surface and act on, not just record. When FM4 = GENERAL, Phase 3/4 synthesis should flag that the cross-tradition coverage claim requires a domain-conditionality caveat in any kit documentation or user-facing description. The synthesis process should not let a GENERAL result pass through to documentation as if it were a domain-sensitive result.

**3. Q5 fragility on B is a non-zero risk to track.**
Condition B dropped to Q5=0 on S5 and Q5=1 on S8 (C). These are the only Q5 deviations from the otherwise clean Q5=3 pattern. Phase 3/4 should log these as fragility indicators — inputs where the kit's strongest condition still fails on a structural dimension. If S5 and S8 share a feature (topic type, length, framing), that feature is a known stress point.

---

## (d) What INT-12 Should Test That INT-11 Did Not

**1. Domain-conditioned FM4 stress test.**
INT-11 established FM4 = GENERAL. INT-12 should test whether the kit can be prompted or structured to produce a DOMAIN-CONDITIONED result, and under what conditions that flip occurs. Design inputs specifically from domains where cross-tradition synthesis is structurally weak (narrow technical, procedural, empirically-settled topics) and domains where it is strong (ethics, strategy, meaning-making topics). Test whether FM4 discriminates between them.

**2. BIN1/BIN2 boundary probing.**
22/22 pass rates tell us the fix works on the current test set, not where it breaks. INT-12 should include inputs adversarially designed to fail BIN1 and BIN2 — edge cases that should stress the structural constraints. A ceiling result without boundary testing is incomplete validation.

**3. Q7 failure mode characterization.**
INT-11 shows A scores low on Q7 consistently, but does not characterize why. INT-12 should include a condition that isolates the Q7 mechanism — testing whether A's Q7 failures are due to tradition selection, tradition integration, or argument construction. The scoring currently collapses these into a single Q7 number.

**4. S5 and S8 replication.**
The Q5 drops on S5-B and S8-C are unexplained. INT-12 should re-run S5 and S8 with additional conditions to determine if these are input-specific fragilities or scoring noise.

**5. Longitudinal stability beyond A8.**
A8 scored 3 with no flags — good — but A8 is a single longitudinal sample. INT-12 should extend longitudinal coverage to at least A8–A12 to test whether the kit's outputs drift on repeated exposure to similar inputs over a session.
