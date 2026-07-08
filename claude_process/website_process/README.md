# Combined website-build process

A drop-in bootstrap kit for any new website project. After the agent runs the interview and generates project-specific files, **the kit is fully delete-safe** — every generated file is self-contained and does not reference paths inside the kit.

## What's in here

```
website_process/
├── README.md                  this file
├── ENTRYPOINT.md              agent procedure — read FIRST
├── lessons/                   6 illustrative-pattern lessons (the WHY)
├── principles/                7 rules + operational directives (the WHAT)
├── procedures/                10 workflow procedures invoked on trigger
├── website-concerns/          10 broader concerns (a11y, perf, responsive, SEO, security, deploy, browser-compat, ai-authoring-security, consent-and-privacy, internationalization)
├── interview/                 3 question scripts (~15 questions total)
├── templates/                 11 files
│   ├── CLAUDE.md.template
│   ├── EXCEPTIONS.md.template
│   ├── PROCESS_CHECKLIST.md.template
│   ├── PROJECT_PLAN.md.template
│   ├── decision_log.template.md          (generated only if user opts in)
│   ├── pitfall_register.template.md       (ships empty)
│   ├── validator_starter_playwright.ts.template   (Node/TS projects)
│   ├── validator_starter_static.sh.template       (static sites, no Node)
│   ├── verifier_prompt.template.md
│   ├── next_action.md.template
│   └── plan.md.template
└── canary/
    └── known-bad-example.md   intentionally-broken calibration artifact for the verifier
```

## How to use it

1. Paste this `website_process/` folder into the root of a new website repo.
2. Tell the agent: "Read `website_process/ENTRYPOINT.md` and follow it."
3. Answer ~15 interview questions (project context including dev/build/test commands + CI provider + package manager, truth surfaces, scope/concerns + decision-log opt-in + criticality + lifespan).
4. The agent picks the right validator starter for your stack (Playwright/TS or bash/curl), generates the project files inline, and dispatches an independent verifier subagent on its own output.
5. **Review `PROJECT_PLAN.md` before any work begins** — the agent generates it as the master checklist seeded from your answers + the detected codebase, shows you its summary, and sets its `Next action` to your review. It is the most important file in the project: correct wrong scope/statuses NOW; the agent must not start an item until you confirm it.
6. **Delete or gitignore `website_process/` after bootstrap.** The generated files reference nothing inside the kit; deletion is safe.

## Generated files

- `CLAUDE.md` — always. Stack, truth surface, hard rules, full inlined text of every selected concern.
- `PROJECT_PLAN.md` — always. **The master checklist** — workstreams, statuses, milestones, evidence-to-close. The WHAT of the project; the file users and agents open first every session. Seeded at bootstrap from the end-goal interview answer + detected codebase state (never generated empty).
- `process_checklist.md` — always. Iteration loop and "done" definition with concern-check items — the HOW that runs around each PROJECT_PLAN item. (Renamed from `project_checklist.md` 2026-06-10 to stop the name colliding with the plan.)
- `scripts/validate_state.{ts|sh}` — always. One of the two starter scripts, customized to the user's stack and behavior assertions.
- `scripts/verify_prompt.md` — always. The tier-2 verifier prompt for ongoing work.
- `pitfall_register.md` — generated when criticality is Internal / External / Safety (skipped for Throwaway/Hackathon). Starts empty; project-specific failures get added as they emerge.
- `EXCEPTIONS.md` — same right-sizing as pitfall_register. Read by the verifier on every run when present; open exceptions surface as informational, expired exceptions become blockers again. Every entry must have a `Revisit by:` date or condition — no permanent waivers.
- `canary/known-bad-example.md` — same right-sizing as pitfall_register. Intentionally-broken artifact used to calibrate the verifier monthly. If the verifier ever returns GREEN on this file, it's broken; diagnose before trusting other audits.
- `decision_log.md` — opt-in. Generated only if the user says yes at interview 03.4.

## What's not generated (and why)

- `INVENTORY.md` / `scripts/INVENTORY.md` — dropped. Tool-amnesia only bites once a project has >3 custom helper scripts; most websites don't reach that. Add manually if needed.
- `learning_notes.md` — dropped. The template predicted its own irrelevance ("most weeks won't produce one"). Generalizations belong in the pitfall register when they bite twice.
- Test-isolation template — dropped from the always-on spine. If interview 03.2 reveals persistent state, an inline rule is added to CLAUDE.md instead.

## Lifecycle: delete-safe, not seed-then-mandatory-delete

The earlier version of this kit told users to delete it after bootstrap and meanwhile generated files that referenced kit-internal paths. That was a contradiction. This version inlines everything — the kit can be deleted, kept and gitignored, or kept for reference. Whichever you prefer.

## What was deliberately dropped from the source piles

- `process/` (the ML/LLM iteration playbook) — all discarded. Wrong domain.
- `process_kit/` — most discarded. Three lightweight templates were rewritten lighter for website use: `decision_log` (now opt-in), `pitfall_register` (now empty-by-default), and the lessons/principles structure itself.
- Two `website_process/` lessons (`tool-amnesia`, `test-pollution`) — dropped from the always-on spine. The pollution discipline reappears conditionally based on interview answers about persistent state.

## What was added on top

- `website-concerns/` — 7 concerns the source `dnd_play` project never hit (a11y, performance, responsive, SEO, security, deployment, browser compatibility). Browser-compat now teaches BOTH progressive enhancement (for MPAs / SSR-first frameworks) AND the SPA resilience model (for app-shaped SPAs) — they're not in tension, they apply by site type.
- Two concrete starter validator scripts replacing the old pseudocode-in-markdown template.
- Interview now collects actual dev/build/test commands + CI provider instead of guessing.
- ENTRYPOINT step 8 dispatches an independent verifier subagent on the generated files — the producer doesn't self-certify.

## Verifier layer

The kit's `scripts/verify_prompt.md` ships two parallel auditors:

- **Completeness Auditor** — "what's MISSING? what would a senior engineer be unhappy was NOT done?"
- **Correctness Auditor** — "what's WRONG? if you had to ship this, what would you fix first?"

They're dispatched in parallel (independent subagents, no shared context). Both reports are surfaced verbatim to the user — the orchestrator does NOT summarize. A numbered checklist (14 items) keeps the verifier auditable and makes drift detectable over time.

Defenses baked in against documented LLM-as-judge failure modes:

- **Sycophancy under rebuttal:** verifier input is artifact + spec only — no producer plan, chat history, or rationale.
- **Hallucinated bugs:** findings must quote the offending code verbatim with file:line, not paraphrase.
- **Orchestrator filtering:** raw auditor reports are logged to `diagnostics/last_verify_*.md` and surfaced unchanged in step 9.
- **Hydration mismatch:** the Playwright starter listens for hydration warnings on the browser console and fails the run if any appear. Runs against a production build, not dev (dev mode suppresses these).

## Security model

The kit treats security as a **two-layer threat model**, addressed by two separate concern files:

- **`security.md`** — defends the deployed artifact. CSP/headers, escape-on-output, auth cookies, dependency hygiene, plus the AI-amplified production threats (JWT algorithm pinning, SSRF-safe fetch, ReDoS-safe regex, no tokens in `localStorage`, LLM-output-is-user-input, server-side validation always). Veracode 2025: 45% of AI-generated code has a CWE-mapped flaw; these rules block the most common.
- **`ai-authoring-security.md`** — defends the authoring loop. `.mcp.json` and IDE config secret leakage (GitGuardian 2026: 24,008 secrets across public MCP configs), slopsquatting (19.7% of LLM package suggestions don't exist; 58% repeat), prompt injection via repo content (CopyPasta virus, CVE-2025-53773), self-propagating npm worms (Shai-Hulud), agent IDE CVEs (CVE-2025-54794/54795/53109/53110/54135/59944). The classical web-security concern file defends none of this.

The Playwright validator now also runs a **bundle secret-pattern scan** against the loaded HTML and every linked script resource, failing on matches for AWS, Stripe, OpenAI, GitHub, Slack, Google, and private-key patterns. The validator now actually checks the kit's flagship "no secrets in client bundle" claim.

**Validator artifacts the auditors read** (saved to `diagnostics/` by the Playwright validator on every run; the bash/curl validator produces only the first two):

- `desktop.png` + `mobile.png` — viewport screenshots (both validators)
- `dom.html` — final rendered DOM (Playwright validator only; bash validator writes `last.html` with raw fetched HTML)
- `console.log` — full browser console (Playwright only; bash has no JS console)
- `axe.json` — full axe-core a11y output (rule, impact, target, help link per violation) (Playwright only)
- `trace.zip` — Playwright trace with network/DOM/console/timing (Playwright only)
- `diff_summary.json` — file count, LoC count, files-touched list from `git diff` (validator runs the git command; auditors read the JSON to determine trivial-diff status — see "tier-1 does the work" architecture below)
- `typecheck.log` — TypeScript compile output if `tsconfig.json` exists (catches hallucinated imports — auditor reads this for check #13 instead of grepping `node_modules` itself)
- `dep_check.json` — lockfile-vs-package.json drift (catches slopsquatting — auditor reads this for check #12 instead of hitting the registry)

OWASP LLM Top 10 (2025) mapping: when the verifier flags AI-specific findings, tag them with LLM01 (prompt injection), LLM02 (sensitive info disclosure), LLM05 (improper output handling), or LLM06 (excessive agency) for a shared vocabulary with other AppSec tooling.

## What the kit borrowed from leading 2026 agent kits

A GitHub research pass surveyed the top 2026 Claude Code kits (superpowers, claude-md-management, frontend-design, levnikolaevich's bootstrap, awesome-cursorrules, awesome-copilot, AGENTS.md ecosystem, accessibility-agents, sanity-io/agent-toolkit, A11Y.md) and identified five cross-cutting patterns the kit was missing. All five are now applied:

- **Phase IDs + named handoff artifacts** (from levnikolaevich's `ln-700 → ln-500` and AGENTS.md priority patterns). The ENTRYPOINT now labels each step with one of seven phase tags (READ / GATHER / CONFIRM / CONFIGURE / GENERATE / VERIFY / HANDOFF) and documents each phase's input and output artifact. Re-running a phase no longer means re-running from the top.
- **Mandatory-invocation triggers on principles** (from superpowers' "Use when..." pattern, validated across awesome-cursorrules, awesome-copilot, Continue.dev). Each of the 7 principle files now opens with a one-line `Use when:` trigger — the agent knows exactly when each principle fires.
- **Tool allowlists per subagent role** (from VoltAgent's reviewer convention and AGENTS.md best practices). The two auditors are now dispatched with **Read, Grep, Glob ONLY**. No Edit, Write, or Bash. Auditor with edit access drifts into fixing instead of finding.
- **EXCEPTIONS.md registry** (from A11Y.md). A registry of consciously-accepted verifier findings, read on every audit run. Constraint imposed: every entry MUST have a `Revisit by:` date or condition — "indefinitely accepted" is not allowed (that's permanent debt, not an exception). Expired exceptions auto-promote back to blockers.
- **Numbered priority for concern conflicts** (from AGENTS.md). When two rules disagree on the same change, CLAUDE.md now ships an explicit priority ladder: Security > Behavior correctness > A11y > Performance > Cross-browser > Code quality. Equal-priority disagreements surface to the user for a decision rather than being silently resolved.

Things the research confirmed the kit is uniquely doing (which other 2026 kits don't):
- **Lesson-based epistemics for validation discipline** — "nobody else does pedagogical lessons" (Agent 1)
- **Two-auditor adversarial verifier** — closest analog (Playwright Healer) operates on tests, not site-wide concerns
- **Hydration / SSR drift detection in the validator** — no competing kit ships this
- **AI-authoring security as a separate concern** from production security — no competing kit treats this as a distinct concern
- **Bootstrap interview pattern** — Cursor / Copilot / Aider / Continue / AGENTS.md all assume you hand-write rules
- **Delete-safe lifecycle** — most kits assume they stay in the repo forever

Things the research surfaced to avoid:
- Horizontal sprawl (top kits ship 135 agents / 313 skills — discoverability collapses past ~30 surfaces)
- Role-named subagents that are just prompt prefixes pretending to be infrastructure
- Aesthetics-only framing without measurable concerns
- Copilot/GH-Actions-coupled hooks (don't translate to Claude Code)
- Aider `read:`-cached convention loading (no Claude Code equivalent)

## Integrating stack-specific rules (the kit is stack-agnostic by design)

This kit is a process-discipline backbone: validation/verification, concern-driven scope, two-auditor review, AI-authoring security. It is **deliberately stack-agnostic** — concerns generalize across React/Vue/Astro/Hugo/Svelte and don't know about your specific framework version's gotchas.

That's a design choice, not a virtue. Real projects hit stack-specific issues on day 1 — server-action edge cases in Next.js 15, Tailwind v4 config migrations, Svelte 5 rune patterns, TypeScript strict-mode subtleties — that this kit doesn't address.

Those rules already exist, written by people who hit those specific bugs. The horizontal-sprawl ecosystems (awesome-cursorrules with 39.6k stars, awesome-copilot with 33.4k stars, multi-author skill kits) are the right complement to this kit, not a competitor. Each individual rule file in those repos represents one developer's real experience with one stack.

**How to layer them with this kit:**

1. **Keep this kit's structure as the discipline layer.** It defines HOW you verify, refactor, scope changes, and audit. None of that is stack-specific.
2. **Pull stack-specific rule files from awesome-cursorrules / awesome-copilot** into `.claude/rules/` (or your tool's equivalent — Claude Code uses `.claude/rules/*.md`, Cursor uses `.cursor/rules/*.mdc`, Copilot uses `.github/instructions/*.instructions.md`, Codex uses `AGENTS.md`, Gemini uses `GEMINI.md`). Pick rules that match your actual stack — not all of them, just the 2-4 relevant ones.
3. **Resolve conflicts using the priority order in CLAUDE.md** (Security > Behavior > A11y > Performance > Cross-browser > Code quality). If a stack rule disagrees with a concern in this kit, the kit wins on those dimensions; the stack rule wins on stack idioms.
4. **Don't try to vendor everything.** The horizontal-sprawl ecosystems update with framework releases; vendoring snapshots them at the moment you copied. Reference them by URL, refresh periodically.

**Concrete starting points** (verified high-quality rule sets, not exhaustive):

- **[PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules)** — the dominant `.cursor/rules/*.mdc` aggregator. Has stack-specific rules for Next.js, Astro, Svelte, Remix, FastAPI, Django, and most popular 2026 stacks. Pick one matching your frontend framework and one matching your backend if applicable.
- **[github/awesome-copilot](https://github.com/github/awesome-copilot)** — official-ish Copilot customizations. Strong on agentic workflows, instructions, and Microsoft-stack defaults. Useful even outside Copilot — many `.instructions.md` files are tool-agnostic.
- **[Aider-AI/conventions](https://github.com/Aider-AI/conventions)** — community CONVENTIONS.md per stack (golang, nextjs-ts, flutter, etc.). Smaller but higher signal-to-noise than the mega-kits.
- **Anthropic's `frontend-design` plugin** — for the aesthetic-quality dimension this kit deliberately doesn't cover. Install via `/plugin` if you want distinctive UI generation alongside this kit's process discipline.

**What the kit borrowed from these ecosystems** (selective, not wholesale): see the next section.

## Right-sizing carve-outs (the kit isn't one-size-fits-all)

Research on engineering process overhead — DORA's "formal external approval correlates with 2.6× higher odds of being a low performer," METR's RCT showing AI tools made experienced devs 19% slower while feeling 20% faster, Cockburn's empirical right-sizing — points at one consistent failure mode: applying maximal ceremony universally is net-negative on short-lived, low-criticality work.

The kit now scales itself based on interview 03.5 (criticality) and 03.6 (lifespan):

**Generation rule**: `pitfall_register.md` / `EXCEPTIONS.md` / `canary/known-bad-example.md` are skipped when criticality is `Throwaway` OR lifespan is `Hackathon/days`. **Override**: always generated when criticality is `Safety/regulated`, regardless of lifespan.

| Criticality | Lifespan | Auditors | Decision log | Pitfall register / EXCEPTIONS / canary |
|---|---|---|---|---|
| Throwaway | any | Single Correctness on non-trivial only | Off | OFF |
| Internal | Hackathon | Single Correctness on non-trivial only | Opt-in | OFF (lifespan skip) |
| Internal | Short-lived / Long-lived | Both on concern-touching, single on trivial | Opt-in | Generated, empty starter |
| External | Hackathon | Single Correctness on non-trivial only | Opt-in | OFF (lifespan skip) |
| External | Short-lived / Long-lived | Both auditors default | Opt-in | Generated, empty starter |
| Safety/regulated | any (including Hackathon) | Both + mandatory human escalation on RED | On | **Generated, with starter pre-populated** (override fires regardless of lifespan) |

The Safety override exists because regulatory exposure doesn't shrink with timeline — a safety-regulated project shipped from a 3-day hackathon still needs the audit trail.

Trivial-diff threshold (single-auditor or no-auditor): ≤20 LoC AND ≤2 files AND no concern touched AND no new dependency AND no concern-protected path. Pure markdown diffs skip auditors entirely.

The trivial-diff threshold is also referenced from `principles/anti-sycophancy-checklist.md` directive #5: pre-implementation premortem only fires for non-trivial changes; trivial work skips the premortem and goes straight to "validate before claiming done." This keeps the kit's discipline scaled to the work — a typo fix doesn't pay the overhead a feature add earns.

Iteration cap: 3 RED rounds maximum, then escalate to user. Backed by LLM-judge calibration ceiling (~80% human agreement) and debate-round plateau literature (3-4 rounds). Unbounded loops oscillate without converging.

**How each recent procedure responds to task size:**

| Procedure | Trivial work | Stake-tagged work | Multi-session work |
|---|---|---|---|
| `halt-conditions` | Fires only on stuck-patterns (loops, repeats); self-limiting on productive small work | Same — pattern-based, size-blind | Same |
| `escalation-clauses` (ASK / QUIT / PUSHBACK) | Mostly silent on small work unless an irreversible op, unfamiliar API, or user-evidence conflict surfaces | Fires aggressively (paired-test requirement, irreversible-tag triggers) | Same |
| `stake-tagging` | Suspends trivial-diff carve-out — intentional, stakes override size | Always fires (this is its job) | Same |
| `task-decomposition` | Doesn't fire (explicit carve-out: >1 day OR >3 PRs OR cross-cutting) | N/A unless task is huge | Fires |
| `session-handoff` | Doesn't fire (single session) | N/A | Fires |
| `session-end-promotion` | Fires at session end regardless of task size, but cheap | Same | Same |
| `rule-retirement` | Quarterly, not size-dependent | Same | Same |

The honest tension: `stake-tagging` is the one procedure that deliberately ignores the trivial-diff carve-out. A 5-line change to auth code triggers two auditors + paired test + decision_log entry, even though the trivial-diff rule would normally exempt it. This is correct by design — auth changes are exactly where small diffs cause big incidents. If the trade-off feels heavy on a specific project, the project can narrow its stake-tag scope (only the most critical auth surfaces tagged), not relax the rule.

## Verifier hardening from empirical benchmarks

A research pass surfaced measured numbers on verifier patterns. Two findings drove changes:

- **Verbatim-quote citation accuracy: 92% with zero hallucinations** when the auditor is mechanically constrained to cite verbatim ([Citation-Grounded Code Comprehension, arXiv:2512.12117](https://arxiv.org/abs/2512.12117)). Unenforced verbatim claims run ~40-45% false-positive in production. The verifier prompt now ENFORCES this: findings whose quote doesn't literally appear in the source are rejected before reporting.

- **Fresh-context subagent vs continuation-context: +4.7 to +11 F1** ([Cross-Context Review, arXiv:2603.12123](https://arxiv.org/pdf/2603.12123)). Validates the kit's existing choice; no change needed but it's now backed by numbers.

- **Process theater defense:** at least one process_checklist item per PR must produce concrete evidence (command output, screenshot, test log) rather than a checkmark. Filled checklists without evidence give false confidence, especially when filled by LLMs.

## Items ported from horizontal-sprawl kits (after targeted gap extraction)

The initial GitHub research dismissed the mega-kits (rohitg00's 135 agents, VoltAgent's 100+ subagents, etc.) as "unmaintainable theater." That was a categorical shortcut, not an analysis. A targeted second pass surveyed those kits looking for specific items — not whole kits — that fill gaps in this kit. Four items survived a strict filter (must solve a problem not addressed; must embody a concrete technique, not a job title; must be portable in <100 lines). All four are now in the kit:

- **`procedures/debugging-methodology.md`** — a 5-step systematic-debugging procedure (classify impact → gather context → check for regression → reproduce deterministically → root cause not symptom) plus a list of common failure-mode patterns to check first. Adapted from `error-detective` in rohitg00/awesome-claude-code-toolkit. The kit's existing `verifier-as-gate` catches what slipped past; this procedure catches the same failures earlier, during investigation.

- **`procedures/refactoring-safety.md`** — concrete numeric smell thresholds (method > 30 lines, nesting > 3 deep, params > 4, duplicated 6+ line blocks) plus a 5-step procedure with atomic-compilable-commits constraint and characterization-test-first rule. Adapted from `refactoring-specialist` in rohitg00/awesome-claude-code-toolkit. Complements `expected-before-change` — the characterization test IS the expected-before-change for a refactor.

- **`procedures/api-grounding.md`** — verifying symbols and patterns when writing unfamiliar code. Four complementary sources of truth (installed package source, official docs, package's own GitHub org, broad GitHub search) used as parallel tools, not a strict ladder. The model's training is statistical — for newer libraries, niche packages, integration patterns between two libraries, and 2026 idioms post-cutoff, real-world GitHub examples reveal what the model doesn't actually know. Style still comes from the project's own code (the one place survivorship bias matters); signatures and idioms can be verified from any source.

- **`procedures/session-end-promotion.md`** — the kit's manual mistake-to-rule promotion loop. At session end, the agent diffs new pitfalls against existing ones, counts occurrences, proposes promotions (only at count ≥ 2 to avoid spurious generalization), and the user accepts/rejects each. Provides the feedback loop the user noticed was missing — agents would otherwise repeat similar mistakes because in-context corrections don't propagate forward. Backed by Self-Correction Bench (NeurIPS 2025) measuring a 64.5% self-correction blind-spot rate and 89.3% reduction with the "Wait —" prompt pattern (also added to anti-sycophancy directive #10 and verifier hard rule #8).

- **`procedures/rule-retirement.md`** — quarterly prune. Each rule earns its place by preventing real incidents; rules that haven't earned it in 90 days get demoted to pitfall watch-items, not deleted. Paired with session-end-promotion to keep CLAUDE.md under empirical size caps (300-350 word sweet spot; sharply diminishing returns past 500 words; *negative* correlation past 200 lines).

- **`procedures/task-decomposition.md`** — the umbrella that connects multi-day initiatives to per-change discipline. Fires when a task is too big for one PR (estimated > 1 day, > 3 PRs, cross-cutting, or spans sessions). Produces a plan artifact at `plans/YYYY-MM-DD-<slug>/plan.md` (lightweight template at `templates/plan.md.template`) with vertical slices in riskiest-first order. Per-slice work delegates to existing kit discipline (or to Superpowers' `writing-plans` if available) — this procedure adds only the three umbrella pieces those per-PR systems don't cover: milestone audit across slices (paired damage-prevention + value-preservation gates), discovered-work handling (append-only, decided at slice boundaries — not inlined into current slice), and session-start re-grounding ritual. Replan trigger has a hard bar (only when done-criteria themselves are wrong, or two consecutive slices hit unforeseen blockers); routine replan-every-session is the documented anti-pattern.

- **`procedures/halt-conditions.md`** — mechanical stop-loss rules with concrete thresholds: 3 identical tool calls in last 5 → STOP (Rule 1); same error 3 times in a row → STOP (Rule 2); 5 modifying actions with no closeable artifact → STOP (Rule 3); slice budget overrun at 100% → STOP (Rule 4); 3 RED iterations on the verifier → escalate (Rule 5); coordination-cost > inline work → don't sub-dispatch next time (Rule 6); 5 modifying actions on the same mental model → enumerate three fundamentally different approaches (Rule 7, the "same-mental-model halt" that defends against effort-blind persistence). All rules are checkable from transcript or git inspection; "the agent will notice it's stuck" is explicitly NOT a halt rule. Wall-clock rules cannot be agent-enforced (agents don't sense time); all enforceable rules in this procedure are action-count-based. Defends against the documented failure modes that produced the Replit Rogue Agent incident (July 2025) and the documented 24-hour $400 Claude Code death-march. Rule 7's research footprint: +8.8pp SWE-bench Verified from canonical-restart pattern (arXiv 2602.19008); −45% revisions from Devil's Advocate (arXiv 2405.16334); the optional "surface a shortcut to the user" sub-step is *user-decided, never agent-self-authorized* per School of Reward Hacks (arXiv 2508.17511).

- **`procedures/session-handoff.md`** — session-end + session-start ritual for multi-session work. End: write `next_action.md` (mid-slice intent capture), update plan status, append discovered work, stop. Start: re-read plan, read `next_action.md`, run a staleness check on referenced files, run a green-baseline check on the validator, reset context (don't summarize — iterative summarization decays 20-30% per cycle per Factory.ai's measurement). Anthropic's `cwc-long-running-agents` harness uses this exact pattern. The kit's new `templates/next_action.md.template` is the artifact this procedure produces.

- **`procedures/escalation-clauses.md`** — explicit triggers for ASK, QUIT, or PUSHBACK, the strongest measured intervention against unsafe agent behavior. ASK/QUIT triggers: irreversible operations (DROP TABLE, force push, real email send, etc.), more than one hidden assumption to proceed past an underspecified point, missing tests on stake-tagged paths, halt-conditions+no viable next step, claim-done without running the validator, unfamiliar API with no typecheck. PUSHBACK trigger: a user assertion conflicts with in-session evidence the agent can verify in under ~30 seconds — the agent must surface the conflict (with specific cited evidence, not "Are you sure?"), propose one concrete path forward, and defer ONLY if the user's re-affirmation engages with the evidence rather than just repeating the ask. Hard stop: never re-raise the same objection more than twice in a session. "Check Yourself Before You Wreck Yourself" (arXiv 2510.16492) measured +0.40 safety / -0.03 helpfulness for explicit quit-permission; SycEval 2025 (arXiv 2502.08177) measured a 58.19% capitulation rate without explicit pushback-permission; FlipFlop (arXiv 2311.08596) showed bare "Are you sure?" flips answers 46% of the time. Structural substitute for the social "ask a colleague" and "hmm, actually..." cues agents lack. Anti-patterns explicitly named: over-asking, push-back-without-evidence, push-back-then-cave-immediately.

- **`procedures/stake-tagging.md`** — routes high-stakes work through stricter gates instead of relying on uniform attention. The 7 canonical tags (auth, authz, payments, deletion, pii, migration, irreversible) suspend the trivial-diff carve-out, force two-auditor verification regardless of diff size, require paired tests, and trigger `escalation-clauses.md` automatically for irreversible operations. Research footprint: security-relevant reasoning is localized to small neuron subsets that uniform attention misses (arXiv 2603.11212); SCGAgent measured ~25% security improvement at ~98% baseline functionality preservation (arXiv 2506.07313). Three implementation options (file-path convention / frontmatter / external tag map) — project picks. Anti-pattern explicitly named: tag inflation.

- **`principles/anti-sycophancy-checklist.md`** — 11 operational directives that fire at WRITE time, plus the meta-principle "Affect is signal, not virtue," (verify library existence, match verification to risk, enumerate failure modes before validating, resist manufactured urgency, no "looks correct" without evidence, etc.). Adapted from `anti-sycophancy-code-discipline` in PatrickJS/awesome-cursorrules. Complements the two-auditor verifier (which fires at AUDIT time) — together they form a two-layer defense against LLM honesty failures.

- **`principles/scope-discipline.md`** — explicit rule against "while I'm in here" creep, with concrete forbidden patterns (unrequested abstractions, formatting-only changes inside behavioral commits, dependency upgrades bundled with feature work). Adapted from `anti-overengineering` in PatrickJS/awesome-cursorrules.

Verifier checklist grew from 12 to 14 items: added **#13 library/API existence verified** and **#14 scope matches request**.

One item was bookmarked but not ported:

- **`legacy-modernizer` (VoltAgent)** — 10-phase framework-migration procedure with strangler-fig / branch-by-abstraction / parallel-run patterns. ~280 lines, valuable only when running an actual framework migration. Bookmarked for use-when-needed; not worth porting speculatively.

## Future enhancements from the GitHub research (documented, not baked in)

- **CLAUDE.md auditor / improvement loop** (port of `claude-md-improver` from Anthropic's official `claude-md-management` plugin): scans a generated CLAUDE.md, scores 0-100 against weighted rubric, grades A-F, emits an improvement diff. Useful when CLAUDE.md drifts from reality over weeks of project work. Substantive add — needs a scoring rubric and a diff-output mode.
- **Codebase-interview pattern** (from Figma's design-system-rules skill and Payload's CMS Migration Skill): agent interviews the user (current kit) AND the codebase (new). Complements the existing interview by detecting stack, finding existing patterns, and inferring concern applicability from code rather than asking. Reduces interview questions and improves accuracy.
- **Glob-scoped concerns** (from Cursor `.mdc` `globs:`, Copilot `applyTo:`, Continue.dev `globs:`/`regex:`). Concerns currently load globally; per-file glob attachment (e.g., `auth-related concern → app/auth/**`) reduces prompt bloat and improves targeting. Requires moving to a `.claude/rules/` style structure, which is a meaningful architectural change.
- **Gatekeeper subagent for pre-destructive actions** (from AGENTS.md and subagent-patterns-2026): a pre-action check distinct from the post-action audit, gating destructive operations (drop table, force push, delete files). Adds a 3rd subagent role on top of the two auditors.
- **Anti-hallucination preventive rule** (from awesome-cursorrules' top-billed "27 architecture rules preventing AI hallucinations"): a new principle that complements the existing post-hoc verifier with preventive guardrails — block invented APIs, phantom imports, false-confidence claims at write time.
- **Manifest-based install + post-install integrity check** (from Community-Access/accessibility-agents): a more rigorous version of the delete-safe lifecycle. The kit's verifier in step 8 covers part of this; full manifest tracking is substantive.
- **Tiered bootstrap fallback** (from Sanity's auto-detect → manual → offline). The current interview is single-path; auto-detect mode could detect stack from `package.json` / config files before asking.
- **Aesthetic-quality concern** (from Anthropic's frontend-design plugin). The kit's 10 concerns are all functional; no concern says "doesn't look generic AI-default." Niche overlap with frontend-design — the plugin already owns this space, so adding it to the kit might be redundant.

## Future verifier enhancements (documented, not baked in)

These are substantive enough that they deserve active project-owner decisions, not default-on toggles.

- **WebKit + Firefox Playwright projects on PR runs.** Multi-engine config. Catches iOS Safari rendering bugs; Chromium-only ships them. ~3x runtime in CI; gate on PR/main only, not local dev.

## What the kit deliberately does NOT generate (and why)

Research validated that the kit is at the right scope. Specific candidates that look tempting but are rejected:

- **`.gitleaks.toml` / `.pre-commit-config.yaml`** — security infra, not bootstrap concern. The kit ships the snippets as text in `website-concerns/ai-authoring-security.md`; the project adds the actual files when entering CI.
- **`playwright.config.ts` / `vitest.config.ts` / framework-specific configs** — the framework's own `create-*` CLI generates these and stays current. Kit duplication = guaranteed staleness.
- **Stack-specialized concern text** (e.g., Lighthouse commands per framework) — concerns are *invariants* (the question to ask), not *recipes* (how to run it on Astro). Recipes rot fast; the invariants don't.
- **Pre-populated `pitfall_register.md` with stack-known pitfalls** — defeats the promotion-at-count-≥2 discipline that gives the register its value. Stack pitfalls (Next.js 15 hydration, Astro island bugs, etc.) are well-Googleable when they bite; pre-loading them turns the register into folklore.
- **Pinned MCP install list per stack** — the 2026 MCP catalogue grew from ~1k to 10k+ servers in 18 months. Any pinned list rots within a quarter. The README's pointer to the catalogue is the right interface.
- **ADR templates** — `decision_log.md` (opt-in) already covers this. ADR adoption is a project-level choice, not a bootstrap default.
- **`devcontainer.json` / `mise.toml`** — stack-and-team-specific. MilkStraw measured devcontainer rebuild tax at 5 minutes vs mise+native at 30 seconds; neither belongs in a generic kit.

The single bootstrap-time generation the kit DOES do (in this scope category): `.env.example` + a "First-run setup" section in `process_checklist.md`. Captures the *contract* (env vars + named entry-point command) without committing to a tool that will rot.

The general principle: **every kit-generated file is a maintenance burden the kit pays forever against framework churn**. The lean shape is what the 2026 research converges on; "PRO TIPS" sections are the documented failure mode.

## Future dimensions worth considering (not in the kit yet)

Research surfaced these as common gaps in 2026 website work, ranked by impact. Add later if needed.

**Essential for any website:** cost guardrails / spend caps, GDPR/CCPA/GPC consent, i18n scaffolding from day one, product analytics with a written event taxonomy, RUM + p75/p95 SLOs, feature flags + named kill switches, ADRs in `/docs/adr/`, 5-minute clone-to-running onboarding.

**Essential for some sites:** design tokens (W3C DTCG) + `DESIGN.md` companion, headless CMS with preview/draft/publish, `llms.txt` for AI-crawler discoverability.

**Advanced:** backup + restore drill (not just "backups exist"), canary bad-artifact seeded into the verifier on a schedule to detect always-GREEN failures (requires CI infrastructure the kit doesn't ship).

**Agent-workflow upgrades:** Figma Code Connect as a precondition for UI tasks, opinionated default MCP bundle (GitHub + Context7 + Playwright + Figma), context-reset checkpoints between phases.

**Future security enhancements (documented, not baked in):**

- **Semgrep + LLM triage** in CI (Semgrep Assistant handles ~60% of triage at ~96% reviewer agreement). Highest-leverage SAST addition; needs a CI runner and a Semgrep config the kit doesn't ship.
- **Anthropic `security-guidance` plugin** as a PreToolUse hook. Local, low false-positive, no vendor lock-in. Pattern-matches 8 categories (`eval`, `dangerouslySetInnerHTML`, `child_process.exec`, etc.) before Write/Edit lands.
- **Mozilla HTTP Observatory API** in the post-deploy validator (replaces securityheaders.com which EOLs April 2026). External call so it only works against publicly reachable URLs.
- **CSP report-only scaffold** — deploy a strict CSP in `Content-Security-Policy-Report-Only` mode, collect violation reports for N days, then promote to enforcing. Kit could ship the scaffold; full automation needs runtime telemetry.
- **Renovate auto-merge for patch bumps + reachability scanner** (Snyk OSS or `osv-scanner`). Replaces brittle `npm audit --audit-level=high` gating with reachability-aware updates.
- **Dedicated Security Auditor as a third verifier subagent** — runs only on PRs touching `security.md`-flagged paths. Adds latency; meaningful only when security work is frequent enough to justify the role.
<!-- gitleaks pre-commit hook is now baked into website-concerns/ai-authoring-security.md as a concrete snippet, not a future enhancement. -->
