# Research Archive: Coverage and What Gets Missed in Code Review

Evidence track: PRACTITIONER-CONSENSUS (verify pass skipped)
9 queries (7 mandated + 2 saturation follow-ups). 18 primary + 6 secondary sources. Saturated round 4.

---

## Summary

The empirical data on code review coverage is unusually strong for this domain — multiple independent studies with quantified miss rates. Key finding: semantic bugs escape most often (51%), but security cross-cutting concerns (access control, input validation) escape at 88-100% rates regardless of reviewer skill. The pattern is consistent: locally-visible issues get caught; cross-cutting issues requiring broader context escape.

---

## Claims (47)

### [key: semantic-bugs-escape-most]
- evidence: empirical (Anzar et al. MSR 2022, 77 OSS projects, 3,261 PRs, 187 confirmed missed bugs)
- group: coverage
- sources: https://arxiv.org/abs/2205.09428

**Claim:** Distribution of bugs that escaped code review: Semantic (logic errors, incorrect behavior) 51.34%, Build 15.5%, Analysis Checks 9.09%, Compatibility 7.49%, Concurrency 4.28%, Configuration 4.28%, GUI 2.14%, API 2.14%, Security 2.14%, Memory 1.60%. Semantic bugs account for more than half of all escaped defects. Security's low share does not indicate reviewers are good at catching security bugs — it reflects the relative rarity of security bugs in OSS codebases. Study does not calculate per-category miss rate (fraction caught vs. escaped).

### [key: reviewers-raise-readability-7x-bugs]
- evidence: empirical (Atlassian 2025, n=4,000 comments)
- group: coverage
- sources: https://arxiv.org/html/2510.05450v1

**Claim:** Human reviewers in Atlassian internal projects: readability comments 46.0% of total; maintainability 19.1%; bug-finding 6.5%. Bug comments have the second-highest resolution rate (41.9%) when made but are dramatically underrepresented in volume. Reviewers raise readability issues at 7x the rate they raise bugs. Implication: reviews are primarily code-improvement, not defect-detection — kit should not be calibrated only for bugs.

### [key: security-locally-visible-vs-cross-cutting]
- evidence: empirical (Rahman & Roy ICSE 2021, Chromium OS, 890 code reviews)
- group: coverage
- sources: https://arxiv.org/abs/2102.06909

**Claim:** Security categories by detection rate in Chromium OS:
High detection (>79% caught): Dangerous functions (CWE-676) 100%; Resource shutdown/release (CWE-404) 94.67%; Race conditions 87-89%; Incorrect calculations 79.27%.
High miss rate (>85% escaped): Resource lifetime issues (CWE-672) 95.38%; Data authenticity verification (CWE-345) 100% missed; Input validation (CWE-20) 88.89%; Access control (CWE-284) 87.88%.
Pattern: locally-visible code patterns get caught; cross-cutting concerns requiring larger context escape at very high rates regardless of reviewer skill.

### [key: nine-chromium-detection-predictors]
- evidence: empirical (Chromium OS study, logistic regression AUC 0.91)
- group: coverage
- sources: https://arxiv.org/abs/2102.06909

**Claim:** Nine attributes predicting security defect detection:
Reducing detection (negative): (1) number of directories affected (strongest predictor), (2) reviewer's total prior review count (fatigue/overconfidence), (3) total prior commits to file, (4) number of prior review comments on file.
Improving detection (positive): (5) longer review duration, (6) mutual review history between author and reviewer, (7) higher cyclomatic complexity, (8) bug-fix designation (4.55x more likely to be caught), (9) higher prior review ratio for specific file. Directory count is the strongest predictor of escape — multi-directory changes are systematically high-risk.

### [key: openstack-qt-security-fix-rate]
- evidence: empirical (Zeng et al. 2023, 432,585 total comments, 614 security-related)
- group: coverage
- sources: https://arxiv.org/abs/2307.02326

**Claim:** OpenStack/Qt: Reviewer provides specific solution → 81.3% fixed; reviewer flags without guidance → 59.5% fixed; developer disagrees with reviewer → 92.3% of flagged defects ignored. Reasons for non-resolution: "Not worth fixing now" 45.4%; developer-reviewer disagreement 34.0%; no solution available 11.3%. Implication: detection is insufficient — specific resolution guidance is required to achieve high fix rate; 45.4% of unresolved issues are consciously deprioritized, not missed.

### [key: checklist-outperforms-freeform]
- evidence: empirical (multiple studies, conflicted but trending toward structured)
- group: coverage
- sources: https://dl.acm.org/doi/abs/10.1007/s10664-022-10123-8

**Claim:** Porter et al. controlled experiment: Ad hoc detection 32.5%, Checklist-Based Reading (CBR) 36.5%, Perspective-Based Reading (PBR) 51.5% — PBR significantly outperformed. Separate CBR result: 4 faults in 69 minutes (ad hoc) vs. 11 faults in 42.5 minutes (CBR). Spadini, Palomba et al. (ESE 2022): Guided checklist > plain checklist > ad hoc for simpler tasks. Note: most studies on requirements inspection documents, not PR code review — generalizability is an extrapolation. One replication found no significant difference.

### [key: perspective-based-review-best]
- evidence: empirical (Porter et al. controlled experiment)
- group: coverage
- sources: https://dl.acm.org/doi/abs/10.1007/s10664-022-10123-8

**Claim:** Perspective-Based Reading (PBR) — multiple reviewers taking distinct reviewing roles (e.g., security reviewer, future maintainer, user scenario verifier) — consistently outperforms single-perspective checklist approaches for absolute detection rates. 51.5% detection vs. 36.5% CBR vs. 32.5% ad hoc. Implication: the most effective review structure assigns distinct reviewing lenses, not identical full reviews.

### [key: cisco-optimal-loc]
- evidence: empirical (SmartBear/Cisco, 10 months, 2,500 reviews, 3.2M LOC)
- group: coverage
- sources: https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/

**Claim:** Optimal review size: 200-400 LOC per session. Maximum effective duration: 60-90 minutes. Optimal inspection rate: under 300 LOC/hour for best detection; under 500 still acceptable. At >450 LOC/hour: below-average defect density in 87% of cases. 61% of sampled reviews found zero defects. Reviews with author annotations: defect density consistently near-zero. Warning: the "87% drops to 28%" per PR size bucket statistic is AI-fabricated (traced by Brodzinski 2026). Confirmed: defect density highest under 200 LOC; above 300-500 the rate falls.

### [key: author-annotations-near-zero-defects]
- evidence: empirical (SmartBear/Cisco)
- group: coverage
- sources: https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/

**Claim:** Reviews with author annotations (PR descriptions explaining what changed and why) consistently produce near-zero defect density as an outcome. Mechanism may be that authors catch their own bugs while annotating, not that reviewers improve. This is not widely practiced despite the evidence. Implication: author preparation (annotations, PR description) is an underused intervention that may improve outcomes more than reviewing process improvements.

### [key: rubber-stamping-causes]
- evidence: consensus (qualitative, inferred from quantitative patterns)
- group: coverage
- sources: https://codeclimate.com/blog/unexpected-outcomes-of-code-reviews

**Claim:** Rubber stamping causes: (1) velocity metrics and deadlines reward speed over depth; (2) seniority hierarchy — junior reviewers defer to senior authors; (3) cognitive overload from large PRs; (4) tool design (narrow diff views encourage line-by-line checks); (5) no recognition or measurement of review thoroughness; (6) team size diffusion; (7) no follow-up verification. Not directly measurable — inferred from bug escape rates and gap between stated goal (defect finding) and actual outcome. Implication: rubber stamping is a culture/incentive problem, not a process problem.

### [key: dimensions-requiring-explicit-attention]
- evidence: consensus (synthesized from practitioner sources and arXiv 2405.18216)
- group: coverage
- sources: https://arxiv.org/html/2405.18216v2

**Claim:** Six review dimensions that require explicit attention (freeform review systematically under-covers 2-6):
1. Correctness — logic, edge cases, error handling
2. Security — input validation, auth/authz, resource lifetime, injection vectors
3. Performance — algorithmic complexity, blocking calls, memory allocation
4. Testing — adequately tested and testable
5. Readability/Maintainability (reviewers over-cover this without prompting)
6. Operational readiness — logging, observability, deployment safety
Structured coverage across all 6 prevents the pattern where reviews become readability-heavy and security-light.

### [key: what-review-cannot-catch]
- evidence: consensus
- group: coverage
- sources: https://arxiv.org/html/2405.18216v2

**Claim:** Categories that require dynamic analysis, not static review:
- Race conditions and concurrency timing bugs (require execution observation)
- Environment-specific failures (production vs. development differences)
- Memory leaks over extended runtime (not visible in short test runs)
- Logic-based authentication bypasses (require end-to-end flow simulation)
Code review is a static analysis activity. Expecting it to catch dynamic defects is a category error. Implication: kit scope should explicitly exclude these categories.

### [key: fix-rate-separate-from-detection-rate]
- evidence: empirical (OpenStack/Qt data)
- group: coverage
- sources: https://arxiv.org/abs/2307.02326

**Claim:** 34.1% of caught security defects go unfixed anyway. "Not worth fixing now" is the dominant resolution failure (45.4%). Detection is necessary but not sufficient — reviewer guidance quality predicts resolution (81% vs 60%). This is a culture/prioritization failure, not a detection failure. Fixing the review process does not fix this.

### [key: reviewer-experience-paradox]
- evidence: empirical (Chromium OS study)
- group: coverage
- sources: https://arxiv.org/abs/2102.06909

**Claim:** High-volume experienced reviewers (high total prior review count) are negative predictors of security defect detection. Possible mechanism: speed (experienced reviewers review faster) and overconfidence in pattern-matching. Junior reviewers with high file-specific familiarity may catch security issues that experienced reviewers miss by pattern. Implication: reviewer volume experience is not a reliable proxy for thoroughness.

## Null results
- Checklist vs. freeform specifically for PR code review: most empirical CBR/PBR studies covered requirements inspection documents; generalizability to PR code review is extrapolation
- Rubber stamping prevalence rate: no study directly measures the fraction of approvals that are superficial
- Long-term organizational outcomes from structured review: no RCT or longitudinal study exists

## New angles surfaced
- Human vs LLM reviewer coverage are complementary, not substitutable
- Author preparation as an underused lever (annotations)
- "Not worth fixing now" as the dominant resolution failure — culture/prioritization angle
