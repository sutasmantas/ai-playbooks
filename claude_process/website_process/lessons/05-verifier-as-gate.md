# Lesson 05 — Verifier as Gate

**The pattern**
The same person who built the feature also verifies it. They open the same flow they just implemented, click the same path they were thinking about, and confirm what they already believe. Anything outside their mental model — edge cases they didn't consider, surfaces they forgot existed — is invisible to them precisely because it was invisible during implementation. For instance, the engineer who built a CMS draft/publish toggle might verify it by toggling a draft they just created, and never notice that publishing a draft authored by another user fails silently. Or a mobile-breakpoint change reviewed only on the developer's laptop in Chrome, never on the actual phone sizes the responsive rules were supposed to target.

**Root cause**
Confirmation bias is structural, not a personal failing. The producer's frame defined what counts as "the feature" — and that same frame defines what counts as "verified." A reviewer with no context has to reconstruct the intent from the surface, which forces them to actually look at the surface.

**Rule adopted**
Verification is performed by someone who did not produce the work and was not briefed beyond the user-facing requirement. The producer hands off the spec and the build; the verifier opens it fresh.

**How to recognize this in your project**
- Author and reviewer are the same person, or reviewer always approves within minutes
- Reviews focus on code style rather than running the feature
- Bugs found post-merge are "things the author didn't think to check"
- No separate role or rotation for QA-style verification
- The handoff is a Slack message, not an artifact a stranger could verify against

**Linked principle:** [[verifier-as-gate]], [[validation-three-tiers]]
