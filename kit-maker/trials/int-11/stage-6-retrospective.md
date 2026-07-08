# INT-11 Trial Process Retrospective

---

## (a) What INT-11 Improved vs INT-10

**FM4 domain-scope test design.**
INT-10 did not have an FM4 test. Adding FM4 in INT-11 is the most structurally significant improvement: it converts a tacit assumption (the kit's cross-tradition coverage claim) into an explicit, scoreable hypothesis with a binary verdict (GENERAL vs DOMAIN-CONDITIONED). This forces the trial to produce a falsifiable result on coverage scope rather than a narrative description. The FM4 = GENERAL verdict in INT-11 is exactly the kind of finding that FM4 was designed to surface — and would have been invisible without it.

**Gap 2/5 fixes and BIN1/BIN2 as explicit binary dimensions.**
Prior trials tracked structural compliance as part of continuous scores, which made it easy for partial compliance to hide inside an average. Adding BIN1 and BIN2 as explicit binary pass/fail dimensions in INT-11 removes that hiding place. A failure on a binary dimension cannot be averaged away. The 22/22 pass rates confirm the Gap 2/5 fixes were real and complete; those fixes would have been harder to validate against a continuous scale.

**Input set breadth (22 inputs across standard/hard/edge).**
INT-10 appears to have used a narrower input set. INT-11's coverage of 12 standard + 5 hard + 5 edge inputs provides enough surface area that the Q7 failure on Condition A is visible as a pattern rather than a one-off. Specifically, A's Q7 = 0 on S8 and H4, and Q7 = 1 on S1, H2, E1, E3 are collectively damning in a way they would not be on a 5-input trial.

**Q7 as a discriminating dimension.**
INT-11 identified Q7 (not Q1) as the operative scoring dimension for cross-tradition coverage quality. INT-10's scoring framework presumably did not isolate Q7 with this clarity, or the A/B gap would have been named earlier. Naming Q7 as the discriminator is a process improvement that should carry forward.

---

## (b) Gaps That Remain in the Trial Process

**BIN1/BIN2 boundary cases are untested.**
22/22 pass rates with no adversarial boundary inputs mean we have validated that the fix works on the current set, not that it is robust. The trial process has no protocol for generating boundary-stress inputs specifically designed to fail binary dimensions. This is a systematic gap: every binary dimension at ceiling needs a companion adversarial set.

**FM4 is not yet connected to action.**
FM4 produces a verdict (GENERAL/DOMAIN-CONDITIONED) but the trial process has no defined downstream consequence for each verdict. If FM4 = GENERAL, what changes in the kit? What is the remediation path? The trial process stops at classification and does not specify what a failed FM4 verdict requires from the kit-maker. This gap means FM4 findings may accumulate without driving changes.

**Q7 failure mode is not decomposed.**
The trial scores Q7 as a single number but does not distinguish between failure modes within Q7 (tradition selection vs integration vs argument construction). Two kits could both score Q7=1 for entirely different reasons. Without decomposition, the Q7 result tells us a problem exists but not where to fix it.

**No replication protocol for anomalous drops.**
S5-B Q5=0 and S8-C Q5=1 are unexplained and unreplicated. The trial process has no rule for what happens when a single input produces an anomalous result on an otherwise clean dimension. The current process would leave these as unexplained data points in the aggregate, potentially obscuring a real fragility.

**Longitudinal sample size is too small.**
A8 is a single longitudinal data point. The A8 score = 3 with no flags is encouraging but not informative. A trial process that treats one longitudinal sample as sufficient longitudinal coverage is under-testing stability.

**No condition interoperability test.**
INT-11 scores A, B, and C independently. There is no test of what happens when conditions are combined or partially applied — e.g., does a kit with only some of B's cross-tradition mechanisms produce intermediate Q7 scores, or does Q7 exhibit a threshold effect? The binary distinction between A and B on Q7 suggests a threshold may exist, but the trial process cannot detect it.

---

## (c) What the Next Trial Process Update Should Address

Priority order based on impact:

**1. Adversarial boundary protocol for binary dimensions.**
Before any trial that includes binary pass/fail dimensions, generate at least 3 inputs specifically designed to fail each binary dimension. Run these alongside the main input set. A binary dimension that passes 22/22 on the main set but fails on the adversarial set is partially fixed; a binary dimension that passes both is robustly fixed. This protocol should be documented as a standing requirement for any INT where BIN dimensions appear.

**2. FM4 remediation paths.**
For each possible FM4 verdict, define what the kit-maker is required to do. DOMAIN-CONDITIONED requires no action. GENERAL requires either (a) a documentation caveat on the cross-tradition coverage claim, or (b) a kit revision to add domain-conditioning logic, or (c) a deliberate decision to accept GENERAL scope with rationale logged. The trial process should require one of these three responses before the trial is closed.

**3. Q7 decomposition scoring.**
Add sub-scores or qualitative flags to Q7 that distinguish the failure mode: tradition selection (wrong traditions named), tradition integration (traditions named but not synthesized), or argument construction (synthesis attempted but weak). Even a simple 3-way classification per input would make Q7 results actionable.

**4. Anomaly replication rule.**
When any dimension that scores 3 on 20+ inputs scores 0–1 on any individual input, that input is flagged for mandatory replication in the next trial. The replication result either confirms a fragility (and triggers a Gap entry) or retires the anomaly as scoring noise. This rule prevents unexplained drops from disappearing into the aggregate.

**5. Longitudinal expansion.**
Set a minimum longitudinal sample of 5 data points per trial (e.g., A8–A12). A single A8 sample cannot support stability claims. The expansion does not need to be heavy — the same input run at five session positions is sufficient — but the floor needs to rise.
