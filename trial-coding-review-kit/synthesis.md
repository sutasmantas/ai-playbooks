# Synthesis: Coding Review Kit — Phase 5.5 Trial

**Track:** Practitioner-Consensus (verify pass skipped; evidence tier is CONSENSUS for all claims; HIGH-labeled empirical claims have not been independently verified)
**Archives:** ai-code-review-systematic-omissions.md (22 claims), expert-code-review-quality.md (28 claims), security-omissions-code-review.md (18 claims)
**Total claims:** 68 across 7 merged groups

---

## Step 2.6 — Evidence type scope check

Evidence distribution: predominantly observational (case-control studies, large PR dataset analysis, open-source project studies). Controlled experiments are the minority (eye-tracking lab studies, controlled developer studies). HIGH tier labels are applied on claim convergence, not controlled-experiment replication — they are **less well-calibrated** than for RCT-based archives. Applied conservatively.

---

## Step 1 — Grouped claim table

| Group | Claim count | Evidence breakdown | Source |
|-------|-------------|-------------------|--------|
| omission-categories | 24 | 12 empirical (7 HIGH, 3 MED) + 9 consensus | All 3 archives; merged with security-coverage from A |
| reviewer-behavior | 23 | 15 empirical (13 HIGH, 2 MED) + 5 consensus + 3 LLM-specific | All 3 archives |
| automated-vs-human | 4 | 3 empirical HIGH + 1 consensus | Archives A + C |
| review-scope-effects | 4 | 2 empirical HIGH + 2 MED | Archive B |
| severity-classification | 5 | 1 empirical HIGH + 1 MED + 3 consensus | Archive B |
| cross-cutting-omissions | 4 | 4 consensus | Archive A |
| comment-quality-dimensions | 3 | 1 HIGH + 1 MED + 1 consensus | Archive B |

---

## Step 2 — Contradiction scan

**Pair 1:** `clustered-error-patterns` (LLMs consistently miss the same categories) vs. `non-determinism-problem` (LLMs produce different findings per run). Resolved by scope: LLMs have consistent blind-spot *categories* (race conditions, compositional auth, TOCTOU — same structural misses across runs) while the specific findings within *detected* issues vary per run. Not a contradiction.

**Pair 2:** `individual-differences-dominant` (reviewer skill gap exceeds process effects) vs. `checklist-reduces-omission-defects` (checklists most effective intervention). Resolved by scope: individual differences dominate for commission defects (finding what's wrong); checklists dominate for omission defects (finding what's absent). Both apply simultaneously to different defect classes. Not a contradiction.

**Pair 3:** `confirmation-bias-framing-effect` (bug-fix framing 4× increases detection) vs. `false-negative-asymmetry` (reviewers default to "safe" 4×–114× false-negative rate). Consistent: both point to the same mechanism (PR context anchors reviewer posture). Not a contradiction.

No unresolvable contradictions found.

---

## Step 3 — Confidence map

| Group | Tier | Key claims | Evidence basis | Conflicts | Action |
|-------|------|-----------|----------------|-----------|--------|
| omission-categories | **HIGH** | four-false-rejection-patterns, sast-injection-recovery, memory-resource-underdetection, cwe-protection-mechanism-undetected, injection-xss-context-dependent-miss, race-condition-miss | 10+ HIGH empirical across 4 sub-constructs (LLM false rejection patterns, security class gaps, context effects, structural omissions). Observational-majority caveat. Applies to: developer generalist code review (LLM-assisted or human). NOT to: security specialist pentest review. | None | Structured extraction passes required per sub-construct |
| reviewer-behavior | **HIGH** | confirmation-bias-framing-effect, false-negative-asymmetry, expert-global-focal-scan, file-position-attention-decrement, experience-plateau-usefulness | 15+ HIGH empirical. Eye-tracking studies (controlled); behavior studies (observational). Applies to: developer reviewers, LLM-assisted review. NOT to: trained security specialists with pentest background. | None | Framing controls + structural checklists + anti-bias prompts required |
| automated-vs-human | **HIGH** | llm-vs-human-quality-gap, automated-as-supplement-not-replacement, static-analysis-false-negatives | 3 independent HIGH empirical (2026 data). Applies to: current-generation LLMs as primary reviewers. NOT to: hybrid SAST+LLM+human pipelines (changes architecture, not tier). | None | Kit architecture: SAST pre-pass → LLM structured passes → human. LLM cannot substitute for human. |
| review-scope-effects | **HIGH** | file-count-inversely-proportional-usefulness, review-size-defect-curve | 2 HIGH empirical (Microsoft 1.5M comments, SmartBear 2500 reviews). Applies to: industrial code review. NOT to: solo security audits or academic paper review. | None | 400-LOC gate required; chunking procedure for large PRs |
| severity-classification | **CONSENSUS** | finer-grained-classification-value, conventional-comment-label-taxonomy | 1 HIGH empirical (ESEM 2023) + practitioner consensus. Widely agreed, not proven. | None | Three-axis classification (category + impact + severity) + blocking label; enforce per-finding |
| cross-cutting-omissions | **CONSENSUS** | diff-scope-blindness, cross-service-schema-drift | All consensus, no empirical. Strong practitioner convergence on root cause (diff-bounded scope). | None | Blast-radius + cross-boundary extraction passes required |
| comment-quality-dimensions | **CONSENSUS** | comment-usefulness-multi-attribute, fix-proposal-unblocks-developer | 1 HIGH empirical (1.5M comments) + 1 MED + 1 consensus. | None | Finding format must require root-cause + fix-proposal for all blocking findings |

---

## Step 3.5 — Dual-pass reliability check

Shortcut applied for: omission-categories, reviewer-behavior, automated-vs-human (≥3 independent HIGH claims each; tier is overdetermined). Full second pass run on: review-scope-effects (2 HIGH), severity-classification (1 HIGH), cross-cutting-omissions (all consensus), comment-quality-dimensions (1 HIGH).

Second-pass result: all CONSENSUS groups remain CONSENSUS. review-scope-effects: HIGH confirmed (2 HIGH claims both present in both orderings). **No tier disagreements.**

---

## Step 3.6 — Counter-prior pass

Highest-confidence group: **reviewer-behavior** (23 claims, 15 HIGH empirical, multiple independent study types including controlled lab + large observational).

Main conclusion: Developers and LLMs systematically fail to detect harmful issues because cognitive biases (confirmation bias, attention decrement, satisfaction bias), strategic limitations (novice linear scanning, expert chunking gap), and structural constraints (diff-bounded scope) all produce predictable miss categories that can be partially compensated by externalizing expert strategies and anti-bias prompts in a kit.

Counter-hypothesis: Cognitive biases and strategic limitations are NOT the primary driver of missed issues — the knowledge required to detect most defects (especially security issues) genuinely exceeds what any reviewer has at review time; reviewer-behavior interventions (prompts, checklists) have near-zero effect on the hardest defect classes because the bottleneck is knowledge, not attention or bias.

Required evidence: Studies showing expert-knowledge reviewers (domain security specialists) miss similar rates as generalists even with structured checklists; or meta-analyses showing checklist effect sizes ≈ 0 for high-complexity security issues.

Supporting evidence found: **YES (partially)** — `reviewer-experience-not-predictive-security` (HIGH: general reviewing experience doesn't predict security defect detection in Chromium), `individual-differences-dominant` (HIGH: cognitive ability gap dominates process effects), `limited-security-awareness` (HIGH: knowledge gap is primary mechanism for security omissions).

Tier revision: **Unchanged** for general reviewer-behavior. However, this reveals a scope condition that must be explicit in the kit: **for security-specific review, the kit's structured extraction passes cannot fully compensate for security knowledge gaps — the passes reduce the knowledge requirement by externalizing it (class-level prompts, CWE checklists), but a reviewer with zero security background will still miss issues that require real judgment.** The kit's security pass is correct therapy for the knowledge-gap problem, not a cure.

---

## Step 4 — Adversarial check on user assumptions

User assumption from domain brief: "LLM can do most of this review with systematic coverage enforcement."
Research verdict: **Contradicted** (HIGH). `llm-vs-human-quality-gap` (HIGH): LLM finds 10% of issues humans find. `automated-as-supplement-not-replacement` (HIGH): automated tools cannot replace human review. The kit must NOT position LLM as the primary reviewer — it is a structured pre-filter that clears mechanical issues and surfaces high-confidence findings for human judgment.

User assumption: "Success condition: zero P0s missed on 200-400 LOC PR."
Research verdict: **Achievable only with framing controls** (HIGH). `confirmation-bias-framing-effect` (HIGH): without framing control, GPT-4o-mini drops from 97.2% to 3.6% detection under "fix typo" commit message framing. At 400 LOC, `review-size-defect-curve` (HIGH) puts us at exactly the attention-saturation boundary. Zero P0 miss requires: (1) diff-first review before PR description, (2) structured security pass, (3) 400-LOC gate.

User assumption: "Root cause not symptom" as quality dimension.
Research verdict: **Confirmed AND quantified** (HIGH). `fault-type-diagnosis-gap` (HIGH): LLMs identify symptoms at 94–100% but root causes at only 44–75%. The kit must explicitly require falsifiable root-cause statements, not just finding identification.

---

## Step 5 — User questions

No CONTESTED groups. One decision that benefits from user input:

**GAP decision:** The research shows framing control (read diff before PR description) dramatically improves detection, but doesn't prescribe how strictly to enforce it for LLM passes. Two options:
- **Strict**: Kit instructs: "Do NOT read the PR title, description, or commit message before completing all extraction passes." Strong framing isolation.
- **Soft**: Kit says: "Treat PR metadata as context-to-verify, not context-to-anchor." More practical for human reviewers.

My default: strict for LLM passes, soft for human passes. Proceeding with this unless redirected.

---

## Structural decisions for Phase 6 kit generation

Each decision surfaced before drafting begins (per CLAUDE.md Phase 6 rule):

| Decision | Options considered | Choice | Basis |
|----------|-------------------|--------|-------|
| Kit architecture | (A) Single LLM "review everything" pass; (B) Multi-pass structured extractions; (C) SAST → LLM → human pipeline | **C** — SAST+LLM+human. (A) contradicted by HIGH evidence. (B) better than A but misses SAST injection recovery. | automated-as-supplement + sast-injection-recovery (both HIGH) |
| Pass ordering | Security first vs. general first | **Security first** — security-comment-frequency shows it's naturally deprioritized; placing it first prevents reviewers from spending attention on nits before security | security-comment-frequency + risk-based-priority-concentration |
| Framing control | Strict (diff before metadata) vs. soft | **Strict for LLM, recommended for human** | confirmation-bias-framing-effect (HIGH: 97%→4% collapse) |
| Finding format | Free prose vs. structured fields | **Structured fields** (severity + category + blocking + root-cause + fix-proposal + counter-check) | fault-type-diagnosis-gap + 42-percent-no-explanation + fix-proposal-unblocks-developer |
| Scale handling | None vs. 400-LOC gate | **400-LOC gate** with chunking guidance | review-size-defect-curve (HIGH) + scope-diffusion-multi-directory (HIGH) |
| False rejection check | None vs. four-pattern check on LLM findings | **Four-pattern check required for all P0/P1 LLM findings** | four-false-rejection-patterns (HIGH: 87.2% of false rejections are one of 4 patterns) |
| Security pass structure | Integrated into general review vs. separate dedicated pass | **Separate dedicated pass** | scope-diffusion-multi-directory + security-comment-frequency + cwe-protection-mechanism-undetected |

---

*Generated: Phase 5.5 trial run, 2026-07-01. Track: Practitioner-Consensus — verify pass skipped. All HIGH labels are pre-verify; treat as CONSENSUS for conservative applications.*
