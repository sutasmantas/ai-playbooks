# Code Review Feedback Procedure

## Before you start

This procedure produces review comments on a PR diff. It does NOT replace dynamic analysis (race conditions, memory leaks, environment-specific failures). Those require execution; do not comment on them.

**Require from the reviewer before running:**
- Team test policy: required on every PR / required on critical path only / not required
- Severity policy: is there a written team severity guide? If yes, use it for policy-or-risk anchors.

---

## Step 1 — Scope check

Run these checks before writing any comments.

**PR size:** Count LOC in the diff.
- > 400 LOC → add to header: `[LARGE CHANGESET: >400 LOC — cognitive-load risk; consider splitting or reviewing in separate sessions]`

**Directory spread:** Count distinct top-level directories in the diff.
- > 3 directories → add to header: `[CROSS-CUTTING CHANGE: spans >3 directories — security cross-cutting risk elevated; explicit security pass required in Step 2]`

**Tests:** Does the diff include test changes?
- Critical-path change + no tests + team has test policy → this IS a blocker (policy violation); note it now
- If team has no test policy → omit this check

**Scope boundary:** Identify any issues in files NOT in the diff.
- Out-of-scope issues in adjacent code → do NOT comment there; raise as a separate ticket

---

## Step 2 — Six-dimension coverage pass

Before writing comments, complete a named pass for each dimension. For each dimension, write "nothing found" explicitly if applicable. This prevents the default failure mode of readability-heavy, security-light reviews.

Note: This is a single-reviewer structured checklist. It is an approximation of Perspective-Based Reading (PBR), which assigns distinct reviewer roles and detects more issues (51.5% vs. 36.5%) but requires multiple reviewers. Apply the six dimensions deliberately; do not treat any dimension as obviously empty without examining it.

**Dimensions (address all 6 in order):**

### 1. Correctness
- Logic errors, off-by-one, wrong conditionals
- Error handling: are all failure paths handled?
- Edge cases: null inputs, empty collections, boundary values
- Does the code do what the PR description says it does?

### 2. Security
Required explicitly if the PR touches: authentication, authorization, external data, file operations, cryptography, session handling, logging (PII risk).

Highest-miss-rate patterns (escape at 88-100% in freeform review — always check explicitly):
- Input validation: are all external inputs sanitized before use?
- Access control: is authorization checked at every entry point, not just the top?
- Resource lifetime: are connections, file handles, sessions closed in all exit paths?
- Data authenticity: is externally-provided data verified before being trusted?

If CROSS-CUTTING CHANGE was flagged in Step 1 (PR spans >3 directories): this security pass is mandatory regardless of PR content; treat the entire diff as a security audit target.

### 3. Performance
- Algorithmic complexity: N+1 queries, nested loops on large collections
- Blocking calls in async context
- Memory allocation: large allocations in hot paths
- Flag only issues with a concrete trigger condition and estimated impact

### 4. Testing
- Is the change tested?
- Are the tests testing behavior (not implementation details)?
- Are error paths tested, not just the happy path?
- Apply team test policy from Step 0

### 5. Readability / Maintainability
Flag only:
- Naming that actively misleads (name contradicts behavior)
- Dead code
- Missing documentation on non-obvious behavior (not all functions need docs)
- Inconsistency with surrounding code style

Do NOT raise: naming preferences, style choices without a written rule, consistency with your personal style over the codebase's existing style.

### 6. Operational Readiness
- Logging: are failures logged at appropriate level?
- Observability: are key operations visible in monitoring?
- Deployment safety: database migrations, feature flags, backwards compatibility

---

## Step 3 — Write comments in Conventional Comments format

**Format:** `<label> [decorations]: <subject>`

**Labels:** issue, suggestion, nitpick, question, todo, thought, note, praise
**Decorations:** (blocking), (non-blocking), (if-minor)

**Every comment must have:**
- **What**: specific code reference (line number, function name, or code pattern — not "this section")
- **Why**: named risk or reasoning — this is required; omitting it prevents the author from prioritizing

**How** (specific fix guidance):
- Required for every `issue (blocking)`
- Optional for `suggestion` and `nitpick` — leave solution space to author if unclear

**Pre-write filter (apply before finalizing each comment):**

| Check | Fail → action |
|---|---|
| Is this a formatting, whitespace, import order, or purely mechanical style violation (not about semantic correctness)? | Omit. Configure linter to catch it. |
| Is this in the diff? | Omit. Out-of-scope. |
| Does this address code or the author? | Rewrite with code-targeted language |
| Does it contain "just," "easy," "only," "obvious," "simply"? | Remove the word |
| Is it an opinion stated as fact? | Add "I think" or add reasoning |
| Is it a judgmental question? | Replace with observed behavior description |
| Is this the same pattern as a previous comment? | Consolidate — 1 comment, note applies throughout |

**Conventional Comments label selection guide:**

| Situation | Label | Decoration |
|---|---|---|
| Correctness bug or security vulnerability | issue | (blocking) |
| Policy violation (tests, API contract) | issue | (blocking) |
| Genuine improvement, author has discretion | suggestion | (non-blocking) |
| Uncertain whether finding is blocking (cannot name policy or risk yet) | suggestion | (non-blocking) + note uncertainty |
| Cosmetic, no functional impact | nitpick | inherently non-blocking |
| Clarifying question about code intent or design choice | question | (non-blocking) |
| Useful context, no action needed | note | — |
| Positive reinforcement | praise | — |

---

## Step 4 — Severity audit

After writing all comments, audit blocking issues only.

**For each `issue (blocking)` comment:**

1. Complete: "This blocks merge because: [specific policy or risk — e.g., 'violates input validation policy', 'SQL injection via unsanitized query parameter']"
2. Can you articulate a concrete failing scenario or point to a written policy? 
   - Yes → keep as blocking
   - No → reclassify as `suggestion`
3. Is the issue in the diff? 
   - No → move to a separate ticket; remove from this review

**Inflation check:** If total blocking comments > 5, audit for severity inflation. Signal erosion begins when reviewers learn to dismiss blocking comments. Ask: "Are all 5+ of these truly preventing merge or degrading code health?"

**Deflation check:** If the PR touches security-sensitive areas and you have zero blocking comments: re-run the security dimension pass. Under-labeling genuine security issues is more costly than over-labeling.

---

## Step 5 — Completeness checks

A. **Dimension coverage:** Every dimension in Step 2 has either a comment or an explicit "nothing found" entry. If any dimension was skipped, complete it.

B. **Security completeness:** If PR touches authentication, authorization, or external data — confirm explicit checks for input validation AND access control. If either was not examined, do it now.

C. **Large PR note:** If >400 LOC and <3 non-readability blocking issues: add a scope note. Either coverage was thorough and the PR is clean, or large PR size reduced effectiveness. Be explicit. (Note: this scope note is separate from the LARGE CHANGESET header annotation added in Step 1 — both appear in the submitted review.)

D. **Resolution completeness:** For each blocking comment — does the author have everything needed to resolve it? Label ✓, What ✓, Why ✓, How ✓. If any missing, add before submitting.

---

## Step 6 — Human review checklist

Before submitting the review:

□ Every comment has a "what" (specific code reference — not "this section")
□ Every blocking comment names a specific policy or risk
□ Every blocking comment has a "how" (specific resolution)
□ Every dimension in Step 2 has a comment or explicit "nothing found"
□ No comments on out-of-scope (non-diff) code
□ Comment avalanches consolidated to one + "applies throughout" note
□ No person-targeting language ("you wrote," "you didn't")
□ Words removed: "just," "easy," "only," "obvious," "simply"
□ No opinions stated as facts without reasoning
□ Security pass completed if PR touches auth or external data
□ Author can identify from labels which comments require resolution before merge vs. which are discretionary
□ Review state matches intent: "Request Changes" for blockers; "Comment" if no blockers

---

## Edge cases

**No PR description:** Add as first note before comments: `note: PR description is missing — this review proceeded without context about the intent of this change; some classification decisions may differ if intent were known.`

**Massive PR (>1,000 LOC):** The review cannot be reliably complete. Flag it: `note: PR size exceeds effective review threshold (>1,000 LOC). Proceeding with best-effort coverage; critical path and security dimensions prioritized.` Focus Step 2 on security and correctness; note that readability/maintainability pass is incomplete.

**No tests policy:** If the team has no written test policy, omit all test-related blocking comments. Raise any missing-test concerns as `suggestion (non-blocking)`.

**Same issue in many places:** Write ONE comment, then: "Applies throughout — search for [pattern] to find all instances." Do not file a separate comment per instance.

**Genuine uncertainty about severity (not about code intent):** If you found a potential issue but cannot name a policy or risk that makes it a blocker, do NOT label it `question`. Use `suggestion (non-blocking)` and add: "I'm uncertain whether this is blocking — depends on [factor]. Recommend team review." Reserve `question` for genuine uncertainty about what the code does or what the author intended — not for uncertainty about your own severity judgment.

---

## Trace

Every major procedure rule cites its source in `research_archive/`.

| Rule | Source |
|------|--------|
| Six-dimension pass (Step 2) | `research_archive/coverage-and-completeness.md` — CBR/PBR studies show bug escape rate drops when all dimensions are checked explicitly; single-dimension reviewers systematically miss other classes |
| Policy-or-risk anchor for severity (Step 4) | `research_archive/severity-classification-systems.md` — anchoring in written policy or named risk scenario produces calibrated severity; judgment-word anchors (significant, important) produce inflation |
| Conventional Comments format (Step 3) | `research_archive/feedback-structure-and-effectiveness.md` — structured comment format with label reduces ambiguity about author's action expectation; label tells author whether comment blocks merge |
| Comment avalanche consolidation (Step 3 pre-write filter) | `research_archive/tone-and-human-factors.md` — avalanche reviews are dismissed; consolidation to patterns improves author reception and resolution rate |
| Code-not-person framing (Step 3 pre-write filter) | `research_archive/tone-and-human-factors.md` — person-targeting language degrades author reception; code-targeted language improves it |
| Security completeness pass on cross-cutting changes (Step 5B) | `research_archive/coverage-and-completeness.md` — cross-cutting access control errors are systematically under-detected in standard review; dedicated security pass required |
| Resolution completeness (Step 5D) | `research_archive/feedback-structure-and-effectiveness.md` — comments lacking "how" have lower resolution rates; actionability drives follow-through |
| Severity inflation check at >5 blocking (Step 4) | `research_archive/severity-classification-systems.md` — signal erosion documented when blocking frequency is high; authors learn to dismiss high-severity labels |
