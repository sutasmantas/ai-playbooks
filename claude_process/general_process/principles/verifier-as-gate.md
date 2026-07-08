# Principle: Verifier as Gate

**Use when:** about to claim a non-trivial artifact is done, fixed, or passing. Before merging, before reporting completion to the user, before any "looks fine" decision.

**Rule**
"Done" is decided by an independent verifier (subagent or human) with zero context of what was just built and an open-ended "find problems" prompt. The producer is never the gate.

**Why**
Self-review suffers from confirmation bias. The agent that produced X looks at X with the frame "did I do X correctly?" and excludes problems outside that frame. An independent reviewer with a different frame catches what's invisible to the producer. See lesson 05: the engineer who built a new CLI flag verified it with the canonical example from the design doc — never noticed that combining the new flag with `--quiet` produced a deadlock, which a fresh-context reviewer caught immediately.

**How to apply**
- After producing any non-trivial artifact, hand it to a fresh subagent (or person) with: the artifact, minimal framing, and the instruction "find problems."
- Withhold the producer's reasoning — the reviewer should reach their own conclusions.
- Optionally split roles: Auditor A "find what's missing", Auditor B "find what's wrong" — they catch different failures.
- If the verifier rubber-stamps everything, the prompt is too narrow or the context is leaking.
- The verifier's report — not the producer's claim — decides "done."

**Trace:** [[05-verifier-as-gate]], [[01-intermediate-pass-isnt-truth]]
