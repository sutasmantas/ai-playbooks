# Research Archive: Severity and Priority Classification in Code Review

Evidence track: PRACTITIONER-CONSENSUS (verify pass skipped)
19 primary sources fetched across 7 search angles + 3 follow-up rounds. Saturation reached.

---

## Summary

The industry has converged on a 4-5 tier model, not a formal standard. The critical insight: **severity inflation is a measured, documented failure mode with quantified consequences** (6h → 2-3 day cycle time inflation, 70-90% false positive rate for AI tools). The hard criterion that prevents inflation: "every must-fix comment must tie to a named policy or risk."

---

## Claims (47)

### [key: industry-4tier-severity-model]
- evidence: consensus (Google, Microsoft, GitLab, Netlify, Cloudflare, Gearset)
- group: severity-taxonomy
- sources: https://google.github.io/eng-practices/review/reviewer/comments.html, https://www.netlify.com/blog/2020/03/05/feedback-ladders-how-we-encode-code-reviews-at-netlify/, https://conventionalcomments.org/

**Claim:** Industry converged on 4-5 tier model:
- Blocker/Critical: blocks merge; criterion = correctness, security, data integrity, policy violation, net regression to ship
- Warning/Error: conditional (team-configured); criterion = measurable regression risk or concrete reliability hazard
- Suggestion/Optional: does not block; code is shippable, improvement worth making, author has discretion
- Nit/Nitpick: cosmetic only; zero functional or maintainability impact
- Informational/FYI: no action required; context, future consideration, clarifying question

### [key: google-binary-blocking]
- evidence: consensus (published engineering practices)
- group: severity-taxonomy
- sources: https://google.github.io/eng-practices/review/reviewer/standard.html

**Claim:** Google uses a binary practical distinction. Blocking = anything that "definitely worsens overall code health." Non-blocking = prefixed "Nit:", "Optional:", or "FYI:". The "nit:" prefix originated at Google and spread industry-wide. Google's framing avoids multi-tier systems in favor of a single question: does this change make the overall code health better or worse?

### [key: microsoft-judgment-based]
- evidence: consensus (Microsoft Code-with-Engineering Playbook, public)
- group: severity-taxonomy
- sources: https://microsoft.github.io/code-with-engineering-playbook/code-reviews/process-guidance/reviewer-guidance/

**Claim:** Microsoft has no formal severity tier system — relies on reviewer judgment. One hard rule: tests must be in the same PR ("I'll add tests next" is not acceptable). Style concerns get informal "Nit:" prefix. Explicit rule: do not block a PR on out-of-scope issues — raise as separate bug/debt tickets instead. Implication: even in a judgment-based system, one hard rule (tests) is applied universally.

### [key: netlify-feedback-ladders]
- evidence: consensus (Netlify published practice)
- group: severity-taxonomy
- sources: https://www.netlify.com/blog/2020/03/05/feedback-ladders-how-we-encode-code-reviews-at-netlify/

**Claim:** Netlify's five-tier "Feedback Ladders": Mountain (blocks + immediate team action), Boulder (blocks merge), Pebble (non-blocking, required future action), Sand (non-blocking, future consideration), Dust (take-it-or-leave-it). Key insight: "non-blocking" contains meaningfully different urgency levels that a flat "nit" label obscures. Pebble vs. Sand distinction forces tracking of non-blocking items that should eventually be resolved.

### [key: cloudflare-ai-production-tiers]
- evidence: consensus (Cloudflare production AI code review, published)
- group: severity-taxonomy
- sources: https://blog.cloudflare.com/ai-code-review/

**Claim:** Cloudflare's production AI code review uses three tiers: Critical ("will cause an outage or is exploitable"), Warning ("measurable regression or concrete risk"), Suggestion ("an improvement worth considering"). Auto-approve for suggestion-only findings. Break-glass override tracked in telemetry. Heavy investment in explicit "what-not-to-flag" prompt engineering to prevent critical inflation. Implication: critical/blocker criteria must be defined as observable outcomes, not subjective judgments.

### [key: hard-blocker-criteria]
- evidence: consensus (multi-source convergence: Google, Microsoft, GitLab, Propel, AWS)
- group: severity-taxonomy
- sources: https://google.github.io/eng-practices/review/reviewer/standard.html, https://www.propelcode.ai/blog/code-review-nitpicks-vs-must-fix-issues

**Claim:** Hard blockers (widely agreed):
- Security vulnerability demonstrably exploitable
- Functional defect with reproducible failing test
- Compliance/regulatory policy violation
- Breaking a shipped public API contract without agreed migration
- Missing tests on critical path (where tests are team policy)
- Worsening overall code health with no offsetting benefit (Google framing)

Never a blocker:
- Formatting, whitespace, import order (should be automated)
- Naming preferences with no correctness impact
- Style disagreements where code is internally consistent and no written rule exists
- Out-of-scope issues in adjacent code not in the diff

### [key: must-fix-policy-or-risk-anchor]
- evidence: consensus (Propel Code, widely cited)
- group: severity-taxonomy
- sources: https://www.propelcode.ai/blog/code-review-nitpicks-vs-must-fix-issues

**Claim:** "Every must-fix comment should tie to a policy or risk." If you cannot name the policy or risk, you cannot claim the severity level. This is the single operationalizable test that prevents both inflation and deflation. It requires the reviewer to articulate WHY this is a blocker, making the reasoning visible and disputable. Implication: the kit procedure should require a policy/risk justification for every blocking comment.

### [key: github-review-state-mechanics]
- evidence: consensus (GitHub documentation + practitioner guides)
- group: process
- sources: https://dev.to/msnmongare/github-pr-reviews-comment-vs-approve-vs-request-changes-when-to-use-each-1ph2

**Claim:** GitHub's three review states: Approve (satisfies required-review rules, PR can merge), Comment (no merge gate effect whatsoever), Request Changes (blocks merge ONLY when branch protection rules require it — informational otherwise). Critical: "Request Changes" is not inherently blocking. Requires administrator configuration of branch protection. Implication: communicating severity through review state alone is unreliable; explicit labels are necessary.

### [key: conventional-comments-standard]
- evidence: consensus (practitioner standard, GitLab mandates)
- group: severity-taxonomy
- sources: https://conventionalcomments.org/

**Claim:** Conventional Comments is the closest thing to an open standard for review severity. Labels: issue, suggestion, nitpick (inherently non-blocking), todo, chore, question, thought, note, praise, typo, polish, quibble. Decorators: (blocking), (non-blocking), (if-minor). The blocking/non-blocking decorators eliminate the primary source of review friction: whether a comment must be resolved before merge.

### [key: severity-inflation-failure-chain]
- evidence: consensus + empirical (CodeAnt AI measurement)
- group: failure-modes
- sources: https://www.codeant.ai/blogs/prevent-ai-code-review-overload

**Claim:** Severity inflation failure chain: (1) Signal erosion — reviewers learn to dismiss all blocking comments including legitimate ones; (2) Rubber-stamping — chronic inflation leads to approving PRs without reading; (3) Critical issues buried — security vulnerability among 60 nitpicks gets same visual treatment; (4) Cycle time inflation — documented 6 hours → 2-3 days. Teams using AI review tools receive 200-400 comments/week; 70-90% dismissed as false positives. Senior engineers spend ~40% of review time managing noise.

### [key: ai-reviewer-snr-collapse]
- evidence: empirical (CR-Bench 2025, arXiv 2603.11078)
- group: failure-modes
- sources: https://arxiv.org/html/2603.11078v1

**Claim:** CR-Bench (2025): 93.1% of defects classified as Medium or High severity. SNR (signal-to-noise ratio) used as proxy for developer adoption. Agents that increased recall via reflexion saw SNR collapse — GPT-5-mini SNR dropped to 0.91 under reflexion pressure. 92.31% of AI code review agents performed below 60% signal quality. Implication: maximizing recall comes at severe SNR cost; severity discipline requires explicit "what-not-to-flag" constraints.

### [key: severity-deflation-causes]
- evidence: consensus
- group: failure-modes
- sources: https://www.propelcode.ai/blog/code-review-nitpicks-vs-must-fix-issues, https://graphite.com/guides/blocking-comments-vs-nitpicks

**Claim:** Severity deflation (critical issues labeled as suggestions) causes: (1) politeness bias — softening genuine blockers to avoid conflict; (2) uncertainty masking — defaulting to suggestion rather than doing verification work; (3) approval velocity pressure — shipping pressure causes implicit downgrading. The "nit-that-is-actually-a-blocker" failure: reviewer identifies genuine security issue but, uncertain, prefixes "Nit:". Author treats as optional. Implication: procedure must require reviewers to verify their own uncertainty before downgrading severity.

### [key: nit-automation-boundary]
- evidence: consensus (multiple sources)
- group: severity-taxonomy
- sources: https://google.github.io/eng-practices/review/reviewer/comments.html, https://microsoft.github.io/code-with-engineering-playbook/code-reviews/process-guidance/reviewer-guidance/

**Claim:** Formatting, whitespace, import order, and linting-catchable style issues should be automated, not reviewed. Raising these in human review wastes reviewer time and inflates noise. Industry consensus: if a linter can catch it, a human reviewer should not flag it. Implication: kit procedure should include a pre-check: "would a linter catch this?" — if yes, omit from human review comments.

### [key: out-of-scope-no-block]
- evidence: consensus (Microsoft, AWS, multiple sources)
- group: severity-taxonomy
- sources: https://microsoft.github.io/code-with-engineering-playbook/code-reviews/process-guidance/reviewer-guidance/, https://docs.aws.amazon.com/wellarchitected/latest/devops-guidance/anti-patterns-for-code-review.html

**Claim:** Do not block a PR on issues in code not part of the diff. Out-of-scope issues in adjacent code should be raised as separate bug/debt tickets, not as blocking comments on the current PR. The PR is for the change under review; pre-existing issues are separate concerns. Implication: scope discipline (only comment on the diff) is a severity discipline (prevents illegitimate blockers).

### [key: security-pr-review-data]
- evidence: empirical (arXiv 2604.03196)
- group: process
- sources: https://arxiv.org/html/2604.03196

**Claim:** Security-relevant PRs merge at 61.50% vs. 77.33% for non-security PRs. Median review latency: 3.92h vs. 0.11h. Severity signal does affect behavior when it is credible. AI-only code review agents: 45.20% merge rate vs. 68.37% human-only (χ² = 83.03, p < 0.001). 60.2% of closed AI-only PRs had signal quality below 30%. Implication: severity credibility is measurable and matters for real-world merge behavior.

## New angles surfaced
- Reviewer credibility as a measurement target
- Severity disagreement escalation outcome distribution — unknown
- Conventional Comments "praise" function and resolution rate — unstudied
