# Lesson 05 — Verifier as Gate

**The pattern**
The same person (or agent) who built the feature also verifies it. They invoke the same code path they just implemented, with the same sample input they had in mind, and confirm what they already believe. Anything outside their mental model — edge cases they didn't consider, usage patterns they forgot existed — is invisible to them precisely because it was invisible during implementation. For instance, the engineer who built a new CLI flag might verify it by passing the flag with the canonical example from the design doc, and never notice that combining the new flag with `--quiet` produces a deadlock. Or a library function reviewed only against its docstring example, never against the multiple usage patterns the existing test suite already documented.

**Root cause**
Confirmation bias is structural, not a personal failing. The producer's frame defined what counts as "the feature" — and that same frame defines what counts as "verified." A reviewer with no context has to reconstruct the intent from the surface, which forces them to actually look at the surface.

**Rule adopted**
Verification is performed by someone (or some agent) who did not produce the work and was not briefed beyond the user-facing requirement. The producer hands off the spec and the build; the verifier opens it fresh.

**How to recognize this in your project**
- Author and reviewer are the same person (or the same agent context), or reviewer always approves within minutes
- Reviews focus on code style rather than exercising the feature
- Bugs found post-merge are "things the author didn't think to check"
- No separate role or rotation for QA-style verification
- The handoff is a chat message, not an artifact a stranger could verify against

**Linked principle:** [[verifier-as-gate]], [[validation-three-tiers]]
