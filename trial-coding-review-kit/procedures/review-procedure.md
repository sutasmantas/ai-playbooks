# Review Procedure — Quick Reference

Companion to CLAUDE.md. This is the checklist version for fast retrieval during a review.

---

## Pre-review setup (run once)

- [ ] Count diff LOC. If >400: announce chunk plan before starting.
- [ ] Count directories touched. If >3: flag scope-diffusion risk.
- [ ] Collect SAST output if available — inject as context hints.
- [ ] Collect feature intent / acceptance criteria.
- [ ] **Set PR title/description aside — do not read until Pass 5.**

---

## Pass 1: Security (always first)

### Memory safety (CWE-119/399)
- [ ] Buffer bounds checked before every read/write operation?
- [ ] Resource lifecycle complete: every allocation has a corresponding release on ALL exit paths?
- [ ] For C/C++/Rust unsafe: pointer arithmetic audited?

### Injection (CWE-79/89/78/117)
- [ ] Trace every external input: what is its source? Where is it first used without sanitization?
- [ ] SQL queries: parameterized only — no string concatenation of user input
- [ ] HTML output: encoded at the output point, not the input point
- [ ] Command execution: no user input in command strings
- [ ] Log statements: no sensitive data logged (passwords, tokens, PII, session IDs)

### Auth/AuthZ (CWE-284/287)
- [ ] Auth check present at every entry point of changed functions?
- [ ] Composition: do individually-correct auth mechanisms combine safely across the full request path?
- [ ] Path traversal: user-controlled paths canonicalized before filesystem access?

### Cryptography (CWE-321/327/330)
- [ ] No disallowed algorithms: DES, 3DES, RC4, MD5, SHA-1, ECB mode
- [ ] No custom crypto implementations — use standard library primitives only
- [ ] Key lifecycle: generation (CSPRNG), storage (not hardcoded, not logged), rotation, destruction
- [ ] Randomness: CSPRNG only (crypto.getRandomValues, secrets.token_bytes, etc.) — not Math.random(), time-seeded, or similar

### Protection mechanism bypass (CWE-693)
- [ ] Any HTTPS/TLS enforcement removed or bypassed?
- [ ] Any authentication middleware removed?
- [ ] Any security headers removed or relaxed?
- [ ] Any rate limiting or quota enforcement disabled?
- [ ] Any feature flags gating security controls changed?

### Race conditions / TOCTOU
- [ ] State changes between check and use? (check filesystem/database state, then use it — state may change between the two operations)
- [ ] Shared resources accessed without synchronization?

### Secrets and data exposure (CWE-321/532)
- [ ] No hardcoded credentials, API keys, secrets, or tokens — check constants AND config files
- [ ] No sensitive data in log calls (even at debug level — logs get aggregated)

### Business logic security
- [ ] Feature intent provided? If yes: can user bypass required workflow steps?
- [ ] State machine traversable out of intended sequence?
- [ ] Pricing/discount/quota logic exploitable by ordering sequences?

**Anti-satisficing checkpoint:** Before moving to Pass 2 — have you completed ALL security checks above, or just the ones that looked relevant? Complete all.

---

## Pass 2: Omission defects

- [ ] **Error handling:** Every return path has an explicit handling decision: success, empty, null, timeout, network failure, invalid input, unexpected input
- [ ] **Input validation:** External inputs validated and rejected (not coerced) at first use
- [ ] **Test coverage:** Happy path test present; at least one error path tested; edge cases (empty, null, boundary) covered; existing tests updated for changed behavior
- [ ] **Resource cleanup:** Open connections, file handles, transactions, locks — closed on ALL exit paths including exceptions
- [ ] **Rate limiting:** High-frequency operations have quota or rate enforcement

---

## Pass 3: Cross-cutting impact

- [ ] **Blast radius:** What callers/consumers of changed APIs would break? Name them if codebase is known.
- [ ] **Contracts:** Any data contract, API interface, or DB schema changed? Where are downstream consumers?
- [ ] **Feature flags:** Flag-conditional paths affected? Flag state in current deployment?
- [ ] **Architectural constraints:** Design intent provided? If yes: does this change violate any known constraint?

---

## Pass 4: General correctness + quality

For each logic finding before surfacing it:
- [ ] **Logic Error:** Can I produce a specific falsifying counterexample (not just "this looks wrong")?
- [ ] **Added Requirements:** Is this constraint actually in the spec, not something I'm adding?
- [ ] **Boundary Error:** Is the code actually wrong at this boundary, or correct?
- [ ] **Spec Misread:** Am I reading the spec correctly?

Root cause quality gate:
- [ ] Every finding states WHY (mechanism), not just WHAT
- [ ] Every blocking finding has a Fix field populated

---

## Pass 5: PR metadata (after all passes complete)

- [ ] Read PR title, description, commit message now (not before)
- [ ] Does description match what the diff actually does?
- [ ] Does the author flag any known issues or intentional trade-offs?
- [ ] Commit type (bug-fix / feature / refactor) consistent with content?

---

## Finding format template

```
**[P0|P1|P2|P3] [category] — [title]**

Severity: [tier + rationale]
Category: security | correctness | reliability | maintainability | test-coverage | performance
Blocking: YES | NO

Root cause: [WHY — mechanism + condition]
Finding: [WHAT — specific + falsifiable]
Fix: [Exact change or pattern reference — required for all blocking]
Counter-check: [What would show this finding is wrong — required for P0/P1]
```

---

## Confidence levels for findings

Findings should match the reviewer's actual confidence:

| Confidence | Format | Criteria |
|-----------|--------|---------|
| Confirmed | State as finding | Counterexample exists or vulnerability pattern is unambiguous |
| Probable | "This appears to..." | Pattern match but full execution path not traced |
| Possible | "Worth checking: ..." | Insufficient context to confirm — surface for human judgment |
| Noise | Do not surface | Cannot construct any scenario where this is a real problem |

---

## Evidence basis for this procedure

| Design decision | Evidence key | Tier |
|----------------|-------------|------|
| Security as dedicated first pass | security-comment-frequency | HIGH (practitioner-consensus track) |
| Diff-before-metadata framing | confirmation-bias-framing-effect | HIGH |
| 400-LOC gate | review-size-defect-curve | HIGH |
| Four false rejection check | four-false-rejection-patterns | HIGH |
| SAST injection pre-pass | sast-injection-recovery (+47% miss recovery) | HIGH |
| Finding format: root-cause required | fault-type-diagnosis-gap (44-75% LLM root cause accuracy) | HIGH |
| Fix proposal required for blocking | fix-proposal-unblocks-developer | CONSENSUS |
| Anti-satisficing in security pass | cognitive-bias-loss-aversion-satisfaction | MEDIUM |
| Structured checklist for omission defects | checklist-reduces-omission-defects | CONSENSUS |
| Pattern consolidation for repeated findings | conventional-comment-label-taxonomy | CONSENSUS |
