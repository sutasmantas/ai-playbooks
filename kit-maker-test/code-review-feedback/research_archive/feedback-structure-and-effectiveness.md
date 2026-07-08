# Research Archive: Code Review Feedback Structure and Effectiveness

Evidence track: PRACTITIONER-CONSENSUS (verify pass skipped)

## Saturation log
7 mandated search angles plus 5 follow-up searches. Saturation at queries 11-12 (0 new claims).
PDF papers (Rigby 2013, Bacchelli/Bird 2013, Czerwonka 2015, Bosu 2015) unreachable as raw text — findings drawn from secondary summaries.

---

## Claims (24)

### [key: three-part-wwh]
- evidence: consensus
- group: feedback-structure
- sources: https://www.augmentcode.com/guides/code-review-examples-before-and-after-walkthroughs, https://graphite.com/guides/how-to-write-good-code-review-comments, https://www.propelcode.ai/blog/5-ways-to-improve-code-review-feedback-actionable-tips

**Claim:** Every review comment should answer three questions: (1) what needs attention, (2) why it matters, (3) how to fix it. The what+why dyad is the non-negotiable minimum. "How" may be omitted for non-blocking suggestions where solution space is left to the author (Google explicitly endorses this), but must be included for blocking issues. Omitting "why" prevents the author from prioritizing or generalizing the fix. Implication: kit procedure must enforce what+why as required fields; how is required for blockers.

### [key: specificity-drives-resolution]
- evidence: empirical (Atlassian dataset, n=5,000 comments)
- group: actionability
- sources: https://www.atlassian.com/blog/atlassian-engineering/atlassian-rovo-dev-research-what-types-of-code-review-comments-do-developers-most-frequently-resolve

**Claim:** Atlassian analysis of 5,000 comments found vague feedback ("This is confusing") produces no actionable result, while specific suggestions with code snippets and clear explanations drive resolution. Before/after: "This will never scale" → 0% actionable; "The N+1 query pattern here could cause issues at 10,000+ items — consider select_related()" → includes trigger condition, impact magnitude, fix. Specificity is the single highest-leverage variable for actionability. Implication: any comment without a specific reference (line, function, pattern) should be flagged before submission.

### [key: resolution-rates-by-category]
- evidence: empirical (Atlassian Rovo Dev, 4,000 LLM-generated comments)
- group: coverage
- sources: https://arxiv.org/html/2510.05450v1

**Claim:** Resolution rates: Code Readability 43.3%, Code Bugs 41.9%, Maintainability 36.2%, Code Design 28.6%. 60-70% of all comments go unresolved. Discrete, localized feedback resolves at ~1.5x the rate of systemic or architectural critique. Implication: design-level comments require more scaffolding (specific reproduction steps, concrete example of the problem manifesting) to reach the same resolution rate as bug or readability comments.

### [key: google-label-severity]
- evidence: consensus (Google engineering practices, published)
- group: feedback-structure
- sources: https://google.github.io/eng-practices/review/reviewer/comments.html

**Claim:** Google's three-tier label system: "Nit:" = minor polish, may be ignored; "Optional (or Consider):" = suggestion without requirement; "FYI:" = informational, no code change expected. This externalizes what would otherwise be an asymmetric judgment call. Google also separates reviewer role from solution-provider role: pointing out a problem without dictating a fix is acceptable for non-blockers. Implication: severity must be a first-class field in every comment, not embedded in prose.

### [key: conventional-comments-taxonomy]
- evidence: consensus (practitioner standard, widely adopted including by GitLab)
- group: feedback-structure
- sources: https://conventionalcomments.org/

**Claim:** Conventional Comments: `<label> [decorations]: <subject>`. Labels: praise, nitpick, suggestion, issue, todo, question, thought, chore, note. Decorations: (non-blocking), (blocking), (if-minor). Machine-parseable. Primary benefit: eliminates the most common source of review friction — ambiguity about whether a comment must be resolved before merge. No controlled study on adoption effect, but widely used (GitLab mandates it). Implication: kit output should use or be compatible with Conventional Comments format.

### [key: tone-subjectivity-usefulness]
- evidence: empirical (ESE 2025, three datasets: RevHelper n=1,481, ChromiumConversations n=3,794, OpenDev n=2,654)
- group: actionability
- sources: https://arxiv.org/html/2501.06738, https://link.springer.com/article/10.1007/s10664-025-10617-1

**Claim:** Four dimensions distinguish useful from not-useful comments: (1) shorter length, fewer questions, objective framing; (2) politeness, formality, absence of toxicity; (3) technical jargon density (debt, security, refactoring); (4) code references (backtick-formatted snippets). Models achieved 63-87% F1, 6-10% above majority-class baseline. Warning: models trained on commercial projects do not transfer to open-source — "useful" is partly community-defined. "Useful" operationalized as "triggered a code change."

### [key: bosu-microsoft-usefulness-rate]
- evidence: empirical (Microsoft internal, three-stage mixed-methods, MSR 2015)
- group: actionability
- sources: https://www.semanticscholar.org/paper/Characteristics-of-Useful-Code-Reviews:-An-Study-at-Bosu-Greiler/4c535cd6557b148cc048686ec64e20291b61c698

**Claim:** Bosu, Greiler, and Bird (MSR 2015): 34.5% of comments were not useful by developer judgment. Useful comment proportion increases steeply in first year then plateaus. More files touched → lower useful-comment rate. Reviewer familiarity with changed code (prior authorship or review) was the strongest predictor of usefulness. Non-technical benefits (knowledge transfer) were underweighted in tooling and expectations. Implication: familiarity is a routing signal; large changesets are high-risk for diluted feedback.

### [key: reviewer-experience-ramp]
- evidence: empirical (Microsoft, Bosu 2015; 2024 automated comment generation paper)
- group: actionability
- sources: https://www.microsoft.com/en-us/research/publication/characteristics-of-useful-code-reviews-an-empirical-study-at-microsoft/

**Claim:** New organizational members give significantly less useful feedback for ~3 months regardless of prior seniority; usefulness plateaus around one year. Effect is codebase familiarity, not general programming skill. Implication: new reviewers on large changesets carry higher not-useful risk; scaffold their comments more heavily.

### [key: reviews-find-maintainability-not-bugs]
- evidence: empirical (Bacchelli/Bird ICSE 2013 + Czerwonka/Greiler MSR 2015)
- group: coverage
- sources: https://codeclimate.com/blog/unexpected-outcomes-of-code-reviews, https://www.microsoft.com/en-us/research/publication/code-reviews-do-not-find-bugs-how-the-current-code-review-best-practice-slows-us-down/

**Claim:** Bacchelli and Bird (ICSE 2013): defect detection was the stated primary motivation, actual primary output was code improvement (readability, style, dead code, consistency). Czerwonka et al. (MSR 2015): ~15% of comments indicate possible defect; ~50% concern long-term maintainability; ~1% address security despite being a stated priority. Atlassian 2025: readability 46%, bugs 6.5% of human comments. Implication: a review kit calibrated for defect detection will underweight the actual dominant output; categories should reflect the true distribution.

### [key: optimal-loc-per-review]
- evidence: empirical (SmartBear/Cisco study; Graphite citing arXiv 2203.05045)
- group: coverage
- sources: https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/, https://graphite.com/blog/code-review-best-practices

**Claim:** SmartBear/Cisco: reviewing under 400 LOC yields 70-90% defect discovery; significant drop when inspection rate exceeds 500 LOC per hour. Reviewers 3x more likely to thoroughly review a 500-line PR vs 2,000-line PR. Warning: the frequently cited "detection drops from 87% to 28%" statistic is AI-fabricated (confirmed by Brodzinski 2026 source tracing). Confirmed finding: defect density per line is highest under 200 LOC; above 300-500 the rate starts to fall. Implication: flag changesets >400 LOC as high cognitive-load risk.

### [key: review-duration-ceiling]
- evidence: empirical (SmartBear/Cisco) + practitioner consensus
- group: process
- sources: https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/

**Claim:** 60-minute ceiling for a single review session. Performance drops after 60 minutes. Inspection rate should stay under 500 LOC/hour. Cognitive cost compounded by context switching (UCI research: 20+ minutes to recover after interruption). Implication: large PRs should be split or reviewed in separate sessions.

### [key: two-reviewer-threshold]
- evidence: empirical (multiple studies, Rigby/Bird 2013 and arXiv roadmap 2024)
- group: process
- sources: https://graphite.com/blog/code-review-best-practices, https://arxiv.org/html/2405.18216

**Claim:** Two reviewers is the point of sharply diminishing returns for defect detection. The two-reviewer threshold applies to defect detection; for knowledge transfer, additional reviewers may still add value. Specialized security changes may require more than two.

### [key: mcintosh-coverage-defect-link]
- evidence: empirical (McIntosh et al. EMSE 2016, Qt/OpenStack)
- group: process
- sources: https://rebels.cs.uwaterloo.ca/papers/emse2016_mcintosh.pdf

**Claim:** Review coverage (proportion of changes reviewed) and participation share significant link with post-release defect rate. Low coverage and low participation: up to 2 and 5 additional post-release defects per component respectively. Correlation study; causal claims require controls. Implication: unreviewed changes are a coverage risk, not a vanity metric.

### [key: social-bias-review-quality]
- evidence: empirical (survey, Frontiers 2023)
- group: process
- sources: https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2023.1178040/full

**Claim:** 75% of respondents agreed social interactions create emotional bonds that prevent finding mistakes in peers' code. 20% acknowledged personal feelings toward author affected objectivity. Reviewers with conflicts over-scrutinize; close friends under-scrutinize. Mitigation: structured, criteria-based review formats reduce the surface area for social bias.

### [key: clarity-thoroughness-developer-expectation]
- evidence: empirical (developer survey, arXiv 2409.10959)
- group: actionability
- sources: https://arxiv.org/pdf/2409.10959

**Claim:** 38% of developers identify clear and thorough feedback as the key attribute of a well-done review — the most cited single attribute. Distinct from "finding bugs" (managerial expectation). Clarity and thoroughness are process qualities the author experiences from the comment itself. Implication: treat comment clarity as important as substance category.

### [key: scope-discipline-comments]
- evidence: empirical (Greiler, 2 million Microsoft comment analysis)
- group: feedback-structure
- sources: https://www.michaelagreiler.com/great-code-review-feedback/

**Claim:** Out-of-scope comments are counterproductive: alternative implementations without clear benefit, pointing out existing technical debt, discussions of future planned work, comprehension questions. Inflate comment count without actionable change. Praise/compliments not rated as valuable by authors in review tool context. Implication: filter for "comprehension questions" and "out-of-scope" as distinct from actionable feedback.

### [key: interrogative-vs-declarative]
- evidence: empirical (usefulness prediction models, multiple datasets)
- group: actionability
- sources: https://arxiv.org/html/2501.06738, https://arxiv.org/html/2307.00692

**Claim:** Comments with higher question mark density correlate negatively with usefulness in commercial settings. "Why this?" comments raise issues without identifying defects or suggesting improvements. Exception: Conventional Comments "question:" label, explicitly flagged non-actionable for genuine uncertainty. Implication: distinguish genuine clarification questions from rhetorical/uncertainty-driven questions; latter should be reconsidered before submission.

### [key: code-snippets-increase-usefulness]
- evidence: empirical (2025 ESE study, multi-dataset)
- group: feedback-structure
- sources: https://arxiv.org/html/2501.06738

**Claim:** Comments containing backtick-formatted code snippets vs. bare prose code references showed higher usefulness. Including actual code as a suggested rewrite or contrasting correct example increases specificity. For simple rename or wording suggestions, code snippets may add noise rather than signal. Implication: use code snippets for non-trivial rewrites; omit for one-word changes.

### [key: actionability-base-rate]
- evidence: empirical (dataset annotation)
- group: actionability
- sources: https://www.augmentcode.com/guides/code-review-examples-before-and-after-walkthroughs

**Claim:** One annotated study found 83% of comments are actionable (could in principle produce a change), 17% are comprehension questions. However "actionable in principle" ≠ resolved: actual resolution rate per Atlassian is 30-45%. The base rate confirms that comprehension questions are a distinct minority but the resolution gap is where effort is lost. Single study, primary source details limited.

### [key: code-not-person-principle]
- evidence: consensus (Google, Greiler, Graphite; one ACM citation)
- group: feedback-structure
- sources: https://google.github.io/eng-practices/review/reviewer/comments.html, https://www.michaelagreiler.com/respectful-constructive-code-review-feedback/

**Claim:** Universal consensus: review comments must be directed at the code, not the person. "This code does not close the socket connection" vs. "You did not close the socket connection." Eliminate condescending hedge words ("just," "easy," "only," "obvious"), avoid sarcasm (written tone misread rate is high), prefer I-messages ("It's hard for me to understand this code"). One ACM-cited finding: a single abrasive remark can deter engineers from performing up to potential. Implication: code-targeting vs. person-targeting is checkable at word level.

### [key: nine-label-taxonomy]
- evidence: empirical (arXiv 2604.23667, 448-comment annotated dataset)
- group: feedback-structure
- sources: https://arxiv.org/html/2604.23667v1

**Claim:** Nine-label taxonomy distribution: Actionable ~39%, Question ~11%, Clarification ~14%, Praise ~16%, Redundant ~9%, Vague ~3%, Unrelated ~2%, Toxic ~2%, Incorrect ~4%. Actionable dominant and most reliably detected. Praise was the largest "smell" (~16%), consistent with Greiler's finding that authors don't value praise in tool contexts. Vague + Toxic + Unrelated < 8% of in-the-wild comments. Implication: the dominant failure mode is Praise and Redundant diluting Actionable signals, not Toxic or Vague.

### [key: file-ordering-comment-distribution]
- evidence: empirical (controlled experiment, ESE 2024, arXiv 2404.10703)
- group: process
- sources: https://arxiv.org/html/2404.10703v2

**Claim:** Hot-spot order (predicted high-risk files first) vs. alphabetical produced 23% more comments per patch (2.9 vs 2.3) and concentrated 80% of comments on first three files vs. 58%. Precision for identifying files needing revisions improved 13%, recall 8%. Review time unchanged (median 11.4 min). Implication: file presentation order affects reviewer focus without cost to review time.

### [key: defects-maintainability-skew]
- evidence: empirical (multiple sources)
- group: coverage
- sources: https://graphite.com/blog/code-review-best-practices, https://www.michaelagreiler.com/great-code-review-feedback/

**Claim:** ~75% of issues found in code reviews relate to evolvability/maintainability rather than direct functionality defects. Less than 15% of review discussions concern bugs directly. Security issues ~1% of comments despite being high-priority. Implication: review system scoring by "bugs found" systematically undervalues the dominant output; good review ≠ bug-finding review.

### [key: secondary-benefits-code-review]
- evidence: empirical (Bacchelli/Bird ICSE 2013)
- group: process
- sources: https://codeclimate.com/blog/unexpected-outcomes-of-code-reviews, https://www.microsoft.com/en-us/research/publication/expectations-outcomes-and-challenges-of-modern-code-review/

**Claim:** Actual primary output of code reviews is code improvement — readability, commenting, consistency, dead code. Secondary outputs: knowledge transfer, team awareness, collaborative problem-solving, reduced code ownership protectiveness, shared understanding. Researchers recommended explicitly designing reviews to support secondary benefits rather than optimizing solely for defect detection. Implication: "alternative solution explored" and "knowledge shared" are valid review outcomes, not noise.

## Null results
- No source provided a precise numeric threshold for "too many / too few comments" per review
- PDF papers (Rigby 2013 full numerics) unreachable as raw text

## New angles surfaced
- Author preparation as an underused lever (annotations)
- Reviewer credibility as a measurement target (resolved-to-dismissed blocking comment ratio)
- Human vs LLM reviewer coverage as complementary rather than substitutable
