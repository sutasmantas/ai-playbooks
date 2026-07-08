# Procedure: Stake Tagging (route high-stakes work through stricter gates)

**Use when:** any work touching files, functions, or paths that handle authentication, authorization, payments, deletion, personal data, schema migrations, or other high-blast-radius operations.

## Why uniform attention isn't enough

LLM agents apply roughly uniform attention across the token stream. But security-relevant reasoning is **localized to small neuron subsets** that get missed under uniform attention — measured directly in arXiv 2603.11212 (security-localized circuits in transformer residual streams). The behavioral result: an agent will treat a refactor of the auth middleware with the same care as a refactor of a logger. This is wrong, and the wrongness is mechanical, not motivational. Telling the agent "be careful" doesn't change attention allocation; routing the work through a different workflow does.

The fix is **stake-tagging**: tag files/paths/functions with their stake category, then route any change touching a stake-tagged item through a stricter workflow. SCGAgent (arXiv 2506.07313) measured this approach: ~25% security improvement while preserving ~98% baseline functionality. It works because it does NOT rely on the model "remembering to be careful" — it changes the path the work flows through.

This is structurally the same insight as the kit's read-only-auditor pattern: instead of trying to make the agent "feel careful," route the work through a path where carefulness is mechanically enforced.

## Canonical tag categories

Start with these 7 tags. Resist project-specific additions that don't represent genuinely higher stakes (tag inflation is the named anti-pattern at the end of this procedure).

- `auth` — authentication, session management, identity, OAuth, JWT handling
- `authz` — authorization, permission checks, RLS policies, role assertions
- `payments` — Stripe (or equivalent), payment intents, refunds, billing, subscriptions
- `deletion` — DELETE endpoints, cascade rules, soft-delete logic, GDPR right-to-be-forgotten
- `pii` — personal data handling, encryption at rest, redaction in logs, export endpoints
- `migration` — schema changes, data migrations, version bumps with breaking changes
- `irreversible` — operations that cannot be reverted by a normal rollback (DROP TABLE, mass email send, real-money transaction)

## How to apply tags (project picks one option)

The kit doesn't mandate the tagging mechanism; the project picks one and documents the choice in CLAUDE.md.

**Option 1 — File-path convention.** Tag-named directories are implicitly tagged. `src/auth/`, `src/payments/`, `migrations/` all carry their directory name as a tag. Simple, requires no metadata, requires path discipline.

**Option 2 — Frontmatter / header comment.** Files declare tags in a top comment:
```
// @stake: auth, pii
```
or in a JSDoc / docstring at file top. Explicit, survives directory moves, requires the agent and verifier to grep for these markers.

**Option 3 — External tag map.** `stake-tags.yaml` at project root mapping path globs to tags:
```yaml
- glob: src/auth/**
  tags: [auth, irreversible]
- glob: src/api/payments/**
  tags: [payments, irreversible]
```
Most maintainable for larger projects; one place to audit, no per-file overhead.

## What changes when a stake tag fires on a change

For any diff touching a stake-tagged path:

1. **Two-auditor verifier is mandatory.** The trivial-diff carve-out (single-auditor mode for ≤20 LoC / ≤2 files / no concern touched) is **suspended** regardless of diff size. Both Completeness and Correctness Auditors run.

2. **Paired test required.** A test for the changed behavior must exist in the diff OR be added in the same PR. The verifier flags any stake-tagged change without a paired test as a `[blocker]`. "I'll add the test in a follow-up" is the documented failure mode this rule defends against.

3. **decision_log.md entry required** (or scratch notes if not generated) explaining:
   - Why the change was needed
   - Which risk class it falls under (which tags fired)
   - What was considered and rejected
   - Who/what authorized any irreversible portion

4. **`escalation-clauses.md` triggers automatically for `irreversible`-tagged operations.** No `irreversible` tag fires without a user-authorization step at the moment of execution. The plan saying "will run migration" is not authorization (Replit lesson).

5. **Concern audits are mandatory** for relevant concerns:
   - `auth`, `authz` → full `security.md` audit
   - `pii`, `deletion` → full `consent-and-privacy.md` audit (if generated) plus `security.md`
   - `payments` → `security.md` + a sanity check that the payment provider's idempotency keys are used correctly
   - `migration` → `deployment.md` audit on rollback path

## When to skip stake-tagging

- Pure documentation changes (`*.md` only, no code) — already trivial-diff exempt
- Refactors that don't touch stake-tagged code paths (greenfield code in non-tagged directories)
- Internal-only tools with no real auth/payments/deletion surfaces (single-user dev tools, scratch scripts) — though "internal-only" often becomes "external" later; the project should reconsider at that transition

## Anti-pattern: tag inflation

Tagging everything = tagging nothing. The 7 canonical tags are deliberately narrow. Resist tagging:
- Internal utilities ("but this util is used everywhere!" — that's not the same as high blast radius)
- Test files (they have their own discipline)
- Build/config files (covered by concern-protected-paths in trivial-diff rules)
- Anything you tag "just in case"

If every change touches a tag, the verifier always runs both auditors regardless of diff size, the project loses the trivial-diff carve-out, and the kit's right-sizing discipline collapses into uniform heavy review. That's the failure mode this anti-pattern names.

**Trace:** SCGAgent (arXiv 2506.07313) on stake-routed workflows preserving functionality while improving security ~25%. Localization-of-security-reasoning in transformer circuits (arXiv 2603.11212). Pairs with `escalation-clauses.md` (irreversible-tagged operations always trigger user-ASK at execution time), `principles/anti-sycophancy-checklist.md` (the meta-principle: structure substitutes for affect; "be careful" is not a tag), and the kit's existing trivial-diff carve-out (stake tags suspend it).
