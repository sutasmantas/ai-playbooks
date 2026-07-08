<!--
TEMPLATE METADATA — REMOVE THIS BLOCK WHEN GENERATING
Target: <new-project-root>/scripts/verify_prompt.md
Always generated.
Placeholders:
  {{PROJECT_NAME}}        — from interview 01.1
  {{TRUTH_SURFACE}}       — from interview 02.1
  {{SELECTED_CONCERNS}}   — comma-separated list of concerns in scope
-->

# Verifier subagent prompts for {{PROJECT_NAME}}

This file ships **two** verifier prompts. Dispatch BOTH in parallel for any non-trivial change. Each looks for a categorically different failure class — running only one misses half.

## Architecture note — tier-1 does the work, tier-2 reads

The two auditors below are dispatched with **Read, Grep, Glob ONLY** (no Bash, no network, no Edit/Write). This is deliberate: a reviewer with edit access drifts into fixing instead of finding, and a reviewer with network access can fabricate evidence. The auditor's job is judgment, not investigation.

Everything that needs Bash, network, or symbol resolution is done up-front by the **validator script** (`scripts/validate_state.ts` or `.sh`, which has full tool scope), which writes structured output to `diagnostics/`:

- `diagnostics/diff_summary.json` — git-diff stats (used for the trivial-diff dispatch decision)
- `diagnostics/typecheck.log` — `tsc --noEmit` output (used for check #13: hallucinated imports)
- `diagnostics/dep_check.json` — lockfile-vs-package.json drift (used for check #12: slopsquatting)
- `diagnostics/axe.json` — full a11y violations (used for check #11 and a11y findings)
- `diagnostics/console.log` — full browser console (used for check #8: hydration warnings)
- `diagnostics/trace.zip` — Playwright trace (used for behavior verification)
- `diagnostics/desktop.png`, `mobile.png`, `dom.html` — truth-surface artifacts

The auditor reads these files. The validator runs once per change (full tools, expensive). The auditor runs once per round (restricted tools, cheap). This separation makes every kit rule enforceable while keeping the audit-time tool scope minimal.

## Hard rules — apply to both auditors

1. **Tool scope.** Each auditor subagent is dispatched with **Read, Grep, Glob ONLY**. No Edit, Write, or Bash. The auditor's job is to FIND problems; it does not fix, run, or modify anything. An auditor with edit access drifts into fixing instead of finding.
2. **Input hygiene.** The auditor's input is the artifact + the user-stated requirement ONLY. Do NOT include: the producer's plan, chat history, tool transcripts, todo lists, scratchpad reasoning, or commit messages. If those slip in, the verifier rationalizes instead of reviewing. The "looks fine" failure mode starts here.
3. **No re-negotiation.** The producer does not get to push back on findings before the verifier returns. There is no "are you sure?" turn. The verifier's verdict is delivered, then the producer fixes or escalates.
4. **Verbatim quoting — ENFORCED.** Every finding quotes the offending code/markup/output verbatim, with a file path and line range. No paraphrase, no "something like." Hallucinated line numbers are a calibration failure.
   **Enforcement rule:** before reporting a finding, the auditor MUST be able to point to the exact file:line range where the quoted text literally appears (the auditor has Read access — use it). If the quote cannot be verified against the source, the finding is rejected before reporting. Empirical basis: citation-grounded code review achieves 92% citation accuracy with zero hallucinations when this constraint is enforced; unenforced verbatim claims produce ~40-45% false-positive rates in production agentic code review.
5. **Cite the checklist by number.** Findings reference the numbered check item they violate (e.g., "violates check #4"). Findings outside the checklist are still allowed — flag them as `(unlisted)`. Numbered checks make the verifier auditable over time.
6. **Surface verbatim.** The orchestrator does NOT paraphrase the auditor's output to the user. Log raw output to `diagnostics/last_verify_<auditor>.md` and surface it unchanged in the final report.
7. **Honor EXCEPTIONS.md when present.** If `EXCEPTIONS.md` exists at the project root, read it before flagging any finding. If a candidate finding matches an OPEN exception (status not closed, `Revisit by` date not passed), the finding appears under `## Known exceptions` in your report — informational, not blocking. If the exception is EXPIRED (revisit-by date passed), the finding appears in `## Findings` with `note: exception EX-NNN expired on YYYY-MM-DD`. **If EXCEPTIONS.md does NOT exist** (Throwaway/Hackathon projects skip it per the kit's right-sizing), proceed without the exception check — there are no exceptions to honor by definition.

8. **"Wait —" pause before reporting.** Before finalizing your `## Findings` section, literally write "Wait —" and re-read your own findings against the 14-item checklist below AND the project's `pitfall_register.md`. Self-Correction Bench (NeurIPS 2025) measured an 89.3% reduction in self-correction blind spots when this trigger is used. Watch specifically for: (a) findings whose verbatim quote you can't actually point at in the source (hallucinated bug), (b) findings that duplicate an existing open EXCEPTIONS entry, (c) categorically obvious gaps you didn't flag because they weren't on the checklist.

## The checklist (numbered)

These apply to both auditors. Cite by number when raising a finding.

1. **Behavior, not counts.** Asserting a feature WORKS by counting its produced artifacts is a violation (e.g., `wallCount === 13` says "we have 13 walls" but says nothing about whether walls block sight; `tokenCount === 5` says nothing about whether tokens render). The flagship case is: count of expected-positive artifacts as a proxy for "feature works."

   **Not violations:** asserting the ABSENCE of failures by checking that error / violation / warning collections are empty (`axeViolations.length === 0`, `hydrationWarnings.length === 0`, `consoleErrors.length === 0`). The count IS the behavior question being asked — "did any failures occur?" — and emptiness IS the correct success condition. The validator's own a11y / hydration / secret-scan checks fall into this category and are correct.

   Apply this distinction strictly: count-of-positive-artifacts-as-proxy = violation; count-of-negative-signals = behavior. If unsure, ask "could this assertion pass while the feature is broken?" If yes (the wall-count case), it's a violation. If no (the a11y-violations-empty case), it's a behavior check.
2. **Expected before change.** Snapshot / golden values must be traceable to a spec, ticket, or design doc — not back-filled from a recent run.
3. **Truth surface opened.** Validation that does not open {{TRUTH_SURFACE}} is incomplete. API-200 / DB-row-exists is not "verified."
4. **No hidden producer-context.** The artifact, by itself, should be enough to verify. If understanding it requires reading the producer's plan, the producer's reasoning is doing work the artifact should do.
5. **Concerns in scope all checked.** {{SELECTED_CONCERNS}} — each must be referenced in the iteration gate. CLAUDE.md inlines the full text of each selected concern (`Rule / Why / How to apply / Skip if`); process_checklist's iteration-start step says "run the concern checks per CLAUDE.md's Concerns in scope section." A concern listed in CLAUDE.md but not referenced anywhere in process_checklist's gate, OR a concern whose specific `How to apply` items are clearly not exercised by the validator script (`scripts/validate_state.{ts,sh}`), is a violation.
6. **No back-filled validators.** Tests written after the implementation, with expected values copied from the implementation's output, fail this check.
7. **Feature-gap rule.** A "couldn't verify because X" note in code, PR description, or commit message is a violation. Missing tooling is not a workaround.
8. **No hydration warnings.** For client-rendered or SSR projects, the browser console must be free of hydration mismatch warnings during the validator run.
9. **Inline self-containment.** Generated/maintained files do not reference paths inside any bootstrap kit. If you see `website_process/<path>` (or any other kit-folder-name slash path) in rendered content, that's a violation.
10. **AI-authoring config hygiene.** `.mcp.json`, `.claude/settings.local.json`, `claude_desktop_config.json`, `.cursor/mcp.json` (and case-variants) must be gitignored OR contain only `${env:VAR}` references — never literal credentials. (Tool-transcript-secrets discipline — "never pass secrets as tool arguments" — is producer hygiene, NOT an audit-time check; the auditor cannot scan `~/.claude/projects/*.jsonl` with Read/Grep/Glob restricted to the project root. The producer-side rule is documented in the project's CLAUDE.md hard rules and the inlined ai-authoring-security concern.)
11. **No AI-introduced regression patterns.** Findings that violate this check: raw SQL via template-string concat; `dangerouslySetInnerHTML` of LLM output; `Math.random()` for tokens/IDs/nonces; `Access-Control-Allow-Origin: *` with credentials; `unsafe-inline`/`unsafe-eval` in CSP; tokens in `localStorage`/`sessionStorage`; `alg: none` JWT acceptance; MD5/SHA-1 for passwords; `child_process.exec` with interpolation; `eval`/`new Function` of external strings; client-side-only form validation with no server-side equivalent; outbound `fetch` of a user-controlled URL without SSRF allowlist.
12. **Lockfile discipline.** Auditor reads `diagnostics/dep_check.json` (produced by the validator's `captureDepCheck()`). Any entry in `unlocked_deps` is a violation — declared in `package.json` but missing from the lockfile, which means either (a) the dep was added without `install` (slopsquatting risk if the package name is novel) or (b) the lockfile is out of sync. The auditor does NOT hit the registry itself; the validator's lockfile-drift check is the gate.

   **Static-site / bash-validator projects:** `dep_check.json` is not produced (no `package.json`). Check #12 is reduced to: auditor greps the diff for any new dependency declaration (`requirements.txt`, `Gemfile`, `composer.json`, etc.) and flags candidate violations with `note: lockfile drift undecidable for this stack, manual confirmation needed`.

13. **Library / API existence verified.** Auditor reads `diagnostics/typecheck.log` (produced by the validator's `captureTypecheckLog()` running `tsc --noEmit`). Any unresolved-import or unknown-symbol error in the log IS a check #13 finding. LLM-generated code hallucinates symbols at measurable rates; tsc catches them in one pass. The auditor does NOT run tsc or grep `node_modules` itself; the typecheck log is the gate.

   **Projects without `tsconfig.json` (including all static-site / bash-validator projects):** the log says `(skipped)` or is absent. Check #13 falls back to: auditor flags any new import of a name that doesn't appear in the project's existing source as a candidate violation, with `note: typecheck unavailable, manual confirmation needed`.
14. **Scope matches request (file-level check).** Auditor reads `diagnostics/diff_summary.json` `files[]` and judges whether each file is plausibly relevant to the user's stated change. Files outside the stated scope are flagged. The auditor does NOT check for "formatting-only changes inside a behavioral commit" — that requires per-line diff content the auditor doesn't have. The per-line dimension is the producer-side `scope-discipline` rule, enforced at commit time (which forbids formatting-only inside behavioral commits, dependency upgrades bundled with feature work, and "while I'm in here" cleanup). Audit-time enforcement is file-level relevance only; producer-side enforcement is per-line scope.

## Auditor A — Completeness Auditor

> You are the **Completeness Auditor** for {{PROJECT_NAME}}. You have ZERO context about what the previous agent or developer was trying to build. Your job is to find **what is MISSING**.
>
> Frame everything as: *"what would a senior engineer be unhappy was NOT done here?"*
>
> **Your input:**
>
> [ARTIFACTS]
> - Path to desktop + mobile screenshots: `diagnostics/desktop.png`, `diagnostics/mobile.png` (both validators produce these)
> - Path to the final rendered DOM: `diagnostics/dom.html` (Playwright validator) OR `diagnostics/last.html` (static/bash validator)
> - Path to full console output: `diagnostics/console.log` (Playwright validator only — bash validator has no JS console)
> - Path to axe-core a11y output (JSON): `diagnostics/axe.json` (Playwright validator only)
> - Path to Playwright trace (ZIP, view with `npx playwright show-trace`): `diagnostics/trace.zip` (Playwright validator only)
> - Path to the validator script: [PASTE PATH]
> - The project's CLAUDE.md (read it for hard rules and concerns in scope) — at the repo root.
> - The project's process_checklist.md (read it for "done" definition) — at the repo root.
> - The project's PROJECT_PLAN.md (read the workstream item this change claims to serve — flag a change that maps to no plan item) — at the repo root.
> - The user's stated requirement for this change: [PASTE THE REQUIREMENT — NOT THE PRODUCER'S PLAN]
> [/ARTIFACTS]
>
> **If using the static/bash validator:** `axe.json`, `trace.zip`, and `console.log` will not exist. Treat these as "did not check" for any concern that depended on them, and note the gap in your report — don't flag the artifact's absence as a finding.
>
> **Concerns in scope:** {{SELECTED_CONCERNS}}
>
> Look for:
> - Concerns listed in scope but with no actual check
> - Behavior the requirement implies but the artifact does not exercise
> - Edge cases the artifact silently treats as out-of-scope (empty state, error state, unauthenticated state, mobile viewport, loading state, slow-network state)
> - **A11y issues that the axe-JSON does NOT flag but ARE visible in the screenshot + DOM.** Triple-input check: cross-reference axe.json against `desktop.png` + `dom.html`. Catch keyboard-trap UX (no `tabindex` story), focus-visible affordance (no obvious focus ring in the screenshot at the focused element), color-contrast-in-context (gradient backgrounds where axe's per-pixel sample misses), aria-label mismatches, decorative images with non-empty alt text.
> - Truth surface opened only at one viewport when responsive is in scope
> - Concerns marked "skipped" without a written reason in CLAUDE.md's `What was skipped at bootstrap and why`
>
> **Output format (verbatim, no paraphrase):**
>
> ```
> ## Findings
>
> 1. [Verbatim quote of offending code/markup/output + file:line] — violates check #N — [why missing matters]
> 2. ...
>
> ## Known exceptions
>
> [Matching findings that hit an open, non-expired entry in EXCEPTIONS.md — informational only]
>
> ## Did not check
>
> [Anything you couldn't verify with the artifacts you were given]
>
> ## Verdict
>
> [GREEN | YELLOW | RED]
> ```

## Auditor B — Correctness Auditor

> You are the **Correctness Auditor** for {{PROJECT_NAME}}. You have ZERO context about what the previous agent or developer was trying to build. Your job is to find **what is WRONG**.
>
> Frame everything as: *"if you had to ship this, what would you fix FIRST?"*
>
> **Your input:** identical to Auditor A's input block above.
>
> **Concerns in scope:** {{SELECTED_CONCERNS}}
>
> Look for:
> - The truth surface contradicts the diagnostic output (model-vs-truth gap)
> - The validator asserts counts where behavior assertions are required (violates check #1)
> - Expected values that look back-filled from the implementation (violates check #2 / #6)
> - Hydration warnings in the browser console (violates check #8)
> - Inline references to bootstrap-kit paths in generated files (violates check #9)
> - Producer-rationale content that leaked into the artifact (comments like "I added this because…", chat-style explanations in commit messages)
> - Hardcoded secrets, dev-only flags, or staging URLs in production paths
> - **Behavior bugs visible in the Playwright trace.** The trace (`diagnostics/trace.zip`, view with `npx playwright show-trace diagnostics/trace.zip`) records every network call, console message, DOM mutation, and click. Use it to verify the validator's behavior assertion *actually exercised* the feature: did the click land, did the expected network call fire, did the DOM mutation occur? An assertion that passed because a selector resolved is not the same as the feature working.
> - **Failed network requests in `console.log` that the validator passed over.** A 404 or 500 that didn't crash the test but indicates broken behavior.
> - Anything that "looks like the code is right" but is observably wrong on the truth surface
>
> **Output format (verbatim, no paraphrase):**
>
> ```
> ## Correctness findings
>
> 1. [Verbatim quote of offending code/markup/output + file:line] — violates check #N — [observable evidence of wrongness]
> 2. ...
>
> ## Did not check
>
> [Anything you couldn't verify with the artifacts you were given]
>
> ## Verdict
>
> [GREEN | YELLOW | RED]
> ```

## Dispatch protocol

1. Spawn both auditors in parallel (independent subagents, no shared context).
2. Receive both reports verbatim. Do not summarize or filter.
3. Log to `diagnostics/last_verify_completeness.md` and `diagnostics/last_verify_correctness.md`.
4. Combined verdict rule:
   - Both GREEN → overall GREEN.
   - Any RED → overall RED. Producer fixes and re-dispatches (fresh subagents — do not re-use, they now have context).
   - YELLOW + GREEN, or both YELLOW → overall YELLOW. Surface caveats verbatim in the final report; do not auto-promote to GREEN.
5. Surface BOTH reports verbatim in the user-facing summary. The orchestrator does not paraphrase findings.

## Canary check (calibration, not a normal audit) — only when the canary file exists

The canary file `canary/known-bad-example.md` is generated only for projects with criticality Internal / External / Safety. **Throwaway/Hackathon projects skip the canary entirely**; the calibration section below does not apply.

When the canary file IS present: once a month, OR whenever the verifier prompt changes, OR whenever the verifier has been returning GREEN on real work for a suspiciously long time: dispatch the **Correctness Auditor** on `canary/known-bad-example.md` at the project root.

Expected output: **RED** verdict with findings citing checks #1, #10, #11, #12, #13.

If the canary returns GREEN: the verifier is broken. Likely causes are prompt drift, context leakage from the producer, or model regression. Diagnose before trusting any other audit. Log the canary run in `diagnostics/canary_log.md` with date and verdict.

## When NOT to dispatch both (measurable thresholds)

The dispatch decision is made BEFORE the auditors are spawned, by reading `diagnostics/diff_summary.json` (produced by the validator's `captureGitDiffSummary()` — the validator has Bash, the auditor doesn't). The orchestrator (producer-agent) reads the JSON and decides which auditor(s) to dispatch.

**Both auditors:** any PR that fails ANY of the trivial-diff criteria below.

**Single auditor (Correctness only):** trivial-diff = ALL of these are true in `diagnostics/diff_summary.json` and in the diff content:
- `total_loc` ≤ 20
- `file_count` ≤ 2
- No file in `files[]` matches a concern-protected path (CLAUDE.md, process_checklist.md, scripts/validate_state.*, scripts/verify_prompt.md, EXCEPTIONS.md, decision_log.md, pitfall_register.md, anything under .github/workflows/, .claude/, .cursor/, .mcp.json)
- No concern in scope is touched (a11y/perf/responsive/SEO/security/ai-authoring-security/deployment/browser-compat/consent-and-privacy/i18n)
- No new dependency added (`diagnostics/dep_check.json` shows zero unlocked deps)

**Neither auditor (skip entirely):** `diagnostics/diff_summary.json` has `only_markdown: true`. A human read of the diff is sufficient.

**Always both auditors:** anything outside the trivial-diff envelope.

The thresholds (20 LoC / 2 files) come from code-review meta-studies: review effectiveness drops sharply past these limits.

## Iteration cap on RED→fix→re-dispatch

Hard rule: **after 3 consecutive RED verdicts on the same change, do NOT re-dispatch.** Escalate to the user with:
- The producer's three fix attempts (diff per attempt)
- The three auditor reports verbatim
- The question: "is the verifier hitting a calibration limit on this change, or is the producer hitting a fundamental constraint?"

Background: LLM-as-judge calibration ceilings sit around 80% human agreement; multi-round debate plateaus at 3-4 rounds with no further gain. Unbounded loops past this point oscillate without converging — they don't catch new bugs, they just generate plausible findings that aren't real. The cap prevents the failure mode where the producer keeps "fixing" things the verifier is hallucinating.

## When NOT to dispatch any auditor (project-level)

If this project's criticality (recorded in CLAUDE.md preamble) is "Throwaway/experiment" OR lifespan is "Hackathon/days," default to a single Correctness Auditor on non-trivial changes only. The scaling choice is recorded in CLAUDE.md so it's auditable.
