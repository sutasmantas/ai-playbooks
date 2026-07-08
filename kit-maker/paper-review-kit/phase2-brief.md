# Phase 2 Domain Brief — Paper Methodology Review Kit

**Created:** 2026-07-03
**Purpose:** Defines the domain, realistic scale, quality dimensions, and domain-specific failure modes for the paper review kit. Input to all subsequent kit files.

---

## Domain definition

**What the kit does:** An agent reviews the research methodology of a scientific paper and produces an expert-quality methodology critique — identifying specific flaws, diagnosing each to the level of specificity needed to act on it, and prioritizing by severity.

**What it is NOT:**
- Not a summary of the paper's findings
- Not a relevance or significance assessment ("is this an important question?")
- Not a writing/style review
- Not a data re-analysis
- Not a replication

**User goal:** Get the methodology flaws a peer reviewer would flag, diagnosed with enough specificity to understand what was wrong and what should have been done instead.

---

## Realistic-scale input

**Primary target (v1):** A single journal article (empirical paper — one study, one set of methods)
- Length: 5–25 pages (main body), optionally 1–20 pages supplementary
- Study types in scope: experimental (RCT, quasi-experimental), observational (cohort, case-control, cross-sectional), survey, qualitative, mixed-methods
- Statistical methods in scope: descriptive statistics, t-tests, ANOVA, regression, SEM, meta-analysis (basic), Bayesian methods (when declared)

**Stretch cases (v1 must not collapse on these):**
- Multi-study paper (2–3 experiments in one paper)
- Papers with domain-specific reporting standards that must be checked (CONSORT for RCTs, PRISMA for systematic reviews, STROBE for observational)

**Scale signal for procedures:** If paper exceeds 15 pages main body, the scale-handling section activates.

---

## Domain-specific quality dimensions

Derived from trial-audit-dimensions.md and goal model. What makes a methodology review good in this domain:

| Dimension | What "good" looks like | What "bad" looks like |
|-----------|----------------------|----------------------|
| Coverage (Q1) | Identifies all major methodology flaws a peer reviewer would flag | Misses entire categories (e.g., doesn't check external validity; doesn't notice confounders) |
| Diagnosis depth (Q2) | States exactly what is wrong and why: "the sample excluded X, which means Y cannot be generalized to Z" | Names the category but not the flaw: "there are sampling limitations" |
| Precision (Q3) | Flags only genuine flaws; doesn't flag standard methodology as problematic | False positives destroy credibility; agent flags statistical approaches that are standard for this design |
| Prioritization (Q4) | Distinguishes fatal flaws (confounded main comparison) from minor issues (unclear blinding description) | Treats all findings as equal severity |
| Actionability (Q5) | Every flaw states what should have been done instead: "Should have used [approach] to control for [variable]" | Identifies problem without recommendation |
| Confidence calibration (Q6) | Distinguishes "this is definitely a flaw" from "this may be a flaw — depends on [condition]" | Presents all findings with equal certainty |

---

## Domain-specific failure modes

These are the patterns where paper methodology review most often goes wrong. The behavioral contract must name these so the agent checks against them before closing any output.

### FM-1: Summary drift
**What happens:** Agent begins describing what the paper found rather than assessing how it was done. The methodology review becomes a paper summary.
**How to detect:** Check if findings describe the paper's conclusions ("the study found that X improves Y") rather than the methodology's adequacy ("the study cannot establish that X improves Y because the control condition did not isolate X").
**Self-check:** "Is my finding about the paper's methodology, or about its conclusions?"

### FM-2: Depth collapse
**What happens:** Agent identifies problem categories but never diagnoses to actionable specificity. Output: "The sample size may be insufficient" rather than "With N=47 and expected effect size d=0.3 (from similar studies), the study is powered at ~40% — a 60% chance of missing a real effect."
**How to detect:** Check if each finding can be acted on directly by the authors, or if it requires the reviewer to do additional diagnostic work.
**Self-check:** "If I gave this finding to the paper's authors, do they know exactly what to change?"

### FM-3: Completion illusion
**What happens:** Agent finishes reviewing the Methods section and reports done, having not reviewed: (a) whether the statistical analysis matches the stated design, (b) whether the results section makes interpretation claims that exceed what the design permits, (c) the Discussion section's external validity claims.
**How to detect:** Methods section reviewed ≠ methodology review done. Methodology review requires checking design → analysis → interpretation → generalization consistency.
**Self-check:** "Did I check whether the results section's conclusions exceed what the study design can support?"

### FM-4: False positive flood on statistics
**What happens:** Agent flags every statistical choice as a potential issue — t-tests, ANOVA, regression — without knowing whether the approach is standard for this design. The output has 15 "concerns" of which 12 are standard practice.
**How to detect:** For any statistical flag, check: "Is this approach standard for this study design? Am I flagging deviation from expected practice or flagging common practice?"
**Self-check:** "Would a peer reviewer in this field flag this specific choice?"

### FM-5: Escalation under uncertainty
**What happens:** When the agent is uncertain whether a methodology choice is a flaw, it asks the user rather than making a documented judgment call.
**How to detect:** Any question to the user during execution (not during intake) about whether something is a flaw.
**Self-check:** "Am I asking the user to make a judgment call that falls within the domain of methodology assessment?"
**What to do instead:** Make the call, state the confidence level, state what evidence would change the assessment.

---

## Required domain knowledge embedded in kit

The kit must encode (in procedures, not just behavioral contract):

1. **Study design taxonomy:** RCT, quasi-experimental, observational (cohort/case-control/cross-sectional), survey, qualitative, mixed-methods — each has different internal validity threats and different external validity conditions
2. **Reporting standards map:** RCT → CONSORT checklist; systematic review → PRISMA; observational → STROBE; qualitative → COREQ/SRQR. The kit's coverage check must include "does this paper's study type have a reporting standard, and does it meet the key items?"
3. **Common confounders by design:** Randomized designs → allocation concealment, blinding failures; observational designs → selection bias, unmeasured confounders; surveys → response bias, question wording
4. **Internal-to-external validity chain:** A finding about the paper's internal validity (the study was confounded) must cascade to an external validity claim ("therefore the conclusion about real-world applicability is not supported")
5. **Severity taxonomy:** Fatal (main comparison confounded, making the primary conclusion invalid), Major (key assumption violated, limiting interpretation), Minor (reporting omission, doesn't change interpretation)

---

## Phase-gate structure for the review

The paper review has defined phases (domain-conditional checklist item 1 applies):

| Phase | What it covers | Gate question |
|-------|---------------|---------------|
| Phase A — Read | Paper ingested; study type identified; scope of review stated | Did I identify the study design and the applicable reporting standard? |
| Phase B — Design assessment | Internal validity: confounders, randomization, blinding, sample selection | Did I check each internal validity threat for this study design, not just the ones I noticed first? |
| Phase C — Analysis assessment | Statistical methods match study design; analysis pre-specified or exploratory; multiple comparisons handled | Did I check whether the statistical choices are appropriate for the declared design — not whether they look unusual to me? |
| Phase D — Interpretation assessment | Conclusions match what the design can support; generalization claims have scope conditions | Did I check whether the Discussion section claims more than the design permits? |
| Phase E — Report assembly | All findings consolidated; duplicates merged (one entry per pattern, not per instance); severity assessed; recommendations added | Is every finding actionable, or are some still at the category level? |

Phase-gate reflection fires between each phase. Questions must be domain-specific (see CLAUDE.md).

---

## Minimum model tier

Frontier model required. Paper methodology review involves multi-step reasoning chains (study design → methodology validity → statistical appropriateness → interpretation validity), domain knowledge application, and self-correction when findings contradict each other. 7B models produce plan-and-execute failure at this task complexity.

---

*This brief is the input to all kit files. Changes here require updating CLAUDE.md, review-paper.md, and any affected procedures.*
