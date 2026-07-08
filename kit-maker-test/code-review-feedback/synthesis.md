# Phase 4 — Synthesis: Code Review Feedback Generator

## What changed from the domain brief

The domain brief identified 5 quality dimensions: actionability, severity accuracy, coverage, specificity, tone. All 5 survive. What changed:

1. **Severity accuracy is NOT subjective.** Domain brief said severity was "contested." Research says it is operationalizable: "every must-fix comment must tie to a named policy or risk." If you cannot name the policy or risk, you cannot claim blocker status. This is binary-checkable. The kit procedure can enforce this.

2. **Coverage is not freeform.** Security issues escape at 88-100% in freeform review (input validation 88.89%, access control 87.88%, data authenticity 100% — Chromium OS, 890 reviews). Six dimensions must be explicitly prompted: correctness, security, performance, testing, readability/maintainability, operational readiness. Freeform over-covers readability and under-covers security by 7x.

3. **Format is load-bearing, not aesthetic.** The primary failure mode in code review is ambiguity about whether a comment requires resolution before merge. Conventional Comments format (`<label> [decorations]: <subject>`) eliminates this. This is not a style choice — it is a procedure requirement.

4. **"How" is conditional, not always required.** Domain brief said "how to fix it" was required. Research: for non-blocking suggestions, Google explicitly endorses omitting a specific solution. "How" is required only for blocking issues. Omitting "why" is the actual danger — it prevents the author from prioritizing or generalizing the fix.

---

## Confidence map

| Claim cluster | Evidence tier | Confidence | Notes |
|---|---|---|---|
| What+why required for all comments; how required for blockers only | consensus (multi-source) | HIGH | Google, Atlassian, Greiler all consistent |
| Specificity drives resolution (vague → no action) | empirical (Atlassian n=5,000) | HIGH | Single company, replicable claim |
| Severity must tie to policy or risk | consensus (Propel, widely cited) | HIGH | Operationalizable rule; consistent across sources |
| Hard blocker criteria (security, correctness, policy, API breakage) | multi-source consensus | HIGH | Consistent across Google, Microsoft, GitLab, AWS |
| Formatting/linting-catchable items not for human review | consensus | HIGH | Universal |
| Out-of-scope items must not block | consensus (Microsoft, AWS) | HIGH | |
| 6 coverage dimensions required; security escapes without explicit prompt | empirical (Chromium OS) | HIGH | Study well-designed; AUC 0.91 |
| Conventional Comments eliminates ambiguity about blocking status | consensus; GitLab mandates | MEDIUM-HIGH | No controlled study on adoption effect |
| Code-not-person language required | consensus | HIGH | Universal; word-level checkable |
| Words to eliminate: "just," "easy," "only," "obvious," "simply" | consensus | HIGH | |
| Opinion stated as fact = highest-impact anti-pattern | consensus | HIGH | Checkable: assertion without supporting reasoning |
| Comment avalanche → consolidate pattern + general rule | consensus | HIGH | |
| Specificity + code snippet → higher usefulness | empirical (ESE 2025, 3 datasets) | MEDIUM | Transfer between commercial/OSS uncertain |
| 60-70% of comments go unresolved | empirical (Atlassian) | MEDIUM | LLM-generated comments dataset; may not transfer to human |
| Security cross-cutting concerns escape at >85% | empirical (Chromium OS) | HIGH | Specific to security; may differ by codebase |
| Reviewer provides specific solution → 81% fix rate; flags only → 60% | empirical (OpenStack/Qt) | MEDIUM-HIGH | Security-focused sample |
| Author annotations → near-zero defect density | empirical (SmartBear/Cisco) | MEDIUM | Causal claim uncertain; may be author catches own bugs |
| PR >400 LOC → diminishing returns | empirical (SmartBear/Cisco) | MEDIUM | "87% drops to 28%" statistic is AI-fabricated; direction confirmed |
| Severity inflation → cycle time 6h → 2-3 days | consensus + CodeAnt measurement | MEDIUM | Single source, plausible chain |
| Tone dimension (short, objective, formal, no toxic language) | empirical (ESE 2025) | MEDIUM | 63-87% F1; community-defined "useful" varies |

---

## Procedure decisions

### Step 1 — Scope check (before writing any comments)
Trigger conditions:
- PR > 400 LOC → flag cognitive-load risk in header
- PR spans > 3 directories → flag cross-cutting security risk; add security lens explicitly
- No tests on a critical-path change → flag as policy violation (if team has test policy)
- Changes in adjacent files not in the diff → out-of-scope; do not comment there

### Step 2 — Six-dimension coverage pass
For each of the 6 dimensions, ask explicitly before proceeding to comment writing:
1. Correctness — logic, edge cases, error handling
2. Security — input validation, auth/authz, resource lifetime, injection vectors
3. Performance — algorithmic complexity, blocking calls, memory allocation
4. Testing — adequately tested and testable
5. Readability/Maintainability — naming, structure, dead code (reviewers over-produce here without prompting)
6. Operational readiness — logging, observability, deployment safety

Dynamic analysis exclusions (must not comment on):
- Race condition timing bugs (require execution)
- Memory leaks over extended runtime
- Environment-specific failures

### Step 3 — Write comments in Conventional Comments format
Format: `<label> [decorations]: <subject>`

Labels: issue, suggestion, nitpick, question, todo, thought, chore, note, praise
Decorations: (blocking), (non-blocking), (if-minor)

Every comment must contain:
- **What**: specific code reference (line/function/pattern — not "this section")
- **Why**: named risk or reasoning (without this, author cannot prioritize)
- **How**: required for blocking issues; optional for suggestions

Every blocking comment must tie to a named policy or risk. If you cannot name it, reclassify as suggestion.

Elimination rules (apply before posting):
- No "you" language → "this code," "this function"
- No "just," "easy," "only," "obvious," "simply"
- No opinion stated as fact → own opinions, provide reasoning
- No sarcasm (no repair path; zero actionable signal)
- No judgmental questions ("Did you even test this?") → describe observed behavior
- Comment avalanche: if same pattern appears multiple times, comment once, note it applies throughout

### Step 4 — Severity audit
For every comment labeled `issue (blocking)`:
1. Name the policy or risk: ____________
2. Can you articulate a specific failing scenario or policy reference? If no → reclassify to `suggestion`
3. Is this in the diff? If the issue is in adjacent code not in the PR → move to separate ticket

For comment counts:
- If total blocker comments > 5: audit for severity inflation. Signal erosion begins.
- If no blockers on a security-touching PR: audit for deflation. Was security coverage pass done?

### Step 5 — Completeness checks
A. Every dimension in Step 2 has at least one finding or an explicit "nothing found" note.
B. Security: if PR touches authentication, authorization, or external data, there must be explicit input validation and access control passes.
C. PR size: if >400 LOC and <3 non-readability blockers found, add a scope note.

### Step 6 — Human review checklist
□ Each blocking comment names a policy or risk
□ Each blocking comment has a specific "how"
□ No comments on out-of-scope (non-diff) code
□ Comment avalanches consolidated
□ Person-targeting language removed
□ Security pass completed if PR touches auth or external data
□ Author knows which items block merge vs. which are discretionary

---

## Remaining uncertainty

- **Checklist generalizability**: CBR/PBR experiments were on requirements documents, not PR code review. The six-dimension checklist is a reasonable extrapolation but not empirically validated for PR review specifically.
- **Opinion-as-fact check**: the rule is clear but detecting it requires re-reading the comment from an author's perspective. Not automatable; requires deliberate pass.
- **Team policy variation**: hard blocker criteria (especially "missing tests") depend on team policy. The kit must prompt the reviewer to identify their team's test policy before use. This is a parameterization gap.
- **Severity disagreement resolution**: no data on what proportion of escalations resolve in the author's vs. reviewer's favor. When to synchronize is a judgment call.
