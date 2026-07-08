# Weakness Register — Code Review Feedback Generator

## Gap 1: Team policy parameterization

**Status:** OPEN — cannot be resolved by the kit; must be provided by the user

The procedure requires two policy inputs before running: (1) whether tests are required on every PR or only critical path, and (2) whether the team has a written severity guide. These are not derivable from the PR diff. If the reviewer skips Step 0 and runs without providing them:
- Test missing on critical path may be treated as suggestion instead of blocker (or vice versa)
- Policy anchor for blockers defaults to OWASP/industry standards, which may conflict with or miss team-specific rules

**Mitigation:** Step 0 makes these explicit requirements before the procedure proceeds. The kit cannot enforce this; the reviewer must honor it.

---

## Gap 2: Single-reviewer six-dimension pass vs. Perspective-Based Reading

**Status:** OPEN — structural limitation of single-reviewer model

Evidence (Porter et al.): Perspective-Based Reading (PBR) with multiple reviewers taking distinct roles detects 51.5% of defects vs. 36.5% for checklist-based review. This kit is a single-reviewer structured checklist — it is explicitly a less-effective approximation of PBR.

What this means: the procedure will miss a fraction of defects that PBR would catch. The six-dimension pass compensates for coverage bias (security under-coverage in freeform review) but cannot fully substitute for independent reviewer perspectives.

**Mitigation:** Document the limitation in Step 2. For security-critical PRs, recommend adding a dedicated security reviewer. Not automatable.

---

## Gap 3: Checklist generalizability from requirements inspection to PR code review

**Status:** OPEN — evidence extrapolation

The empirical evidence for checklist-based review (CBR) and Perspective-Based Reading (PBR) comes from controlled experiments on requirements inspection documents, not PR code review. The six-dimension pass is an extrapolation of these findings to a different artifact type.

Confidence: MEDIUM. The underlying mechanisms (explicit coverage prompting, systematic omission prevention) are plausible for PR review. No PR-specific controlled study confirms the quantitative effect sizes.

**Mitigation:** No workaround. Accept the extrapolation. Note it explicitly.

---

## Gap 4: Cross-cutting access control errors requiring broader codebase context

**Status:** OPEN — inherent limitation of static diff review

**Surfaced in test run 01.**

The procedure correctly catches locally visible security gaps (missing auth middleware). It cannot catch permission logic errors that require understanding the full permission model — e.g., auth middleware is present but the role check uses the wrong role, or an existing role enum has been deprecated. These require context beyond the diff.

The Chromium OS study finding (access control escapes at 87.88%) likely includes both locally-visible and context-requiring cases. This kit can only address locally-visible ones.

**Mitigation:** Step 2's security dimension notes the high miss rate. When access control is complex or when PR spans many directories, recommend manual deeper review with a security-knowledgeable reviewer.

---

## Gap 5: Severity disagreement resolution

**Status:** OPEN — no procedure defined

The procedure defines how to classify severity but not what happens when the author disputes a blocking comment. In practice: author marks "won't fix," reviewer's only options are (a) approve anyway, (b) escalate. No data on how these disagreements resolve (or how often they should resolve in the reviewer's vs. author's favor).

**Mitigation:** Google's recommendation (synchronous discussion for persistent disagreements) is in the procedure's edge cases. For genuine policy disputes, escalation to a team lead is the only defined resolution path.

---

## Gap 6: Async propagation — fix guidance cannot verify caller updates

**Status:** OPEN — inherent limitation of single-pass static review

**Surfaced in test run 02.**

When a procedure fix changes a function's signature (e.g., making `refreshToken` async), the review correctly surfaces the dependency note ("the calling route must be updated accordingly"). However, a single-pass static reviewer cannot verify that the caller in another file was actually updated.

In complex PRs where a fix has call-graph dependencies across files, the review produces correct fix guidance but cannot confirm completeness. The author may update the function but miss the caller.

**Mitigation:** When a fix is documented as having call-graph dependencies (function signature change, new required parameter), add an explicit checklist item: "Verify that all callers of `[function]` in the diff or known to be affected are listed in this review." The reviewer names the callers they know about; they cannot enumerate unknown callers.

---

## Gap 7: Architecture decision guidance — cannot recommend among valid options without team context

**Status:** OPEN — variant of Gap 1 (team policy parameterization), more specific

**Surfaced in test run 02.**

When a blocking issue has multiple architecturally valid remediation paths (e.g., three different ways to handle JWT logout: token blocklist, short-lived tokens, or removing the false control), the procedure correctly surfaces all options. However, it cannot recommend one without knowing the team's infrastructure (Redis available? Preference for statelessness? Compliance requirements?).

A senior engineer would say "use option (a) because you have Redis already." The procedure says "choose one of (a), (b), (c)." This gap is most acute for architectural security decisions with infrastructure dependencies.

**Mitigation:** Add to "Before you start" section: if the PR touches auth architecture or introduces multi-option security decisions, note the team's infrastructure constraints before running (e.g., "we have Redis," "we prefer stateless"). Without this context, the procedure offers options but cannot narrow them.

---

## Provisional decisions

| Claim | Status | Evidence |
|---|---|---|
| Six-dimension pass prevents security omission | PROVISIONAL → SUPPORTED | Procedure caught all planted security issues in test run 01 |
| "Policy or risk" anchor prevents severity inflation | SUPPORTED | 3 blockers correctly differentiated from 4 suggestions; no false inflation |
| Conventional Comments eliminates ambiguity about blocking status | PROVISIONAL | No controlled study; adopted by GitLab |
