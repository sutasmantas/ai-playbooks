<!--
TEMPLATE METADATA — REMOVE THIS BLOCK WHEN GENERATING
Target: <new-project-root>/pitfall_register.md
Generated when criticality (interview 03.5) is Internal / External / Safety. SKIPPED for Throwaway/experiment OR Hackathon/days. Starts empty; user adds project-specific failure modes as they emerge.
Placeholders:
  {{PROJECT_NAME}} — from interview 01.1
-->

# {{PROJECT_NAME}} — Pitfall Register

Durable failure modes worth carrying across iterations on this project. Re-read this when:

- Starting a new major feature
- Investigating an unusually convenient or unusually catastrophic result
- Returning to the project after a pause
- Onboarding a new agent or contributor

Each entry has a short name, the failure mode (how it bites), and a guardrail (how to keep it from biting). Add project-specific pitfalls below the starter set as they emerge.

---

This register starts empty on purpose. The generic cross-project failure modes (REST-pass-isn't-truth, self-agreeable validator, count-vs-behavior, feature-gap workaround, verifier-as-gate, build-new-vs-validate-old) are already enforced by the project's `CLAUDE.md` rules and the verifier's checklist. They are intentionally not duplicated here so this register stays focused on what's specific to {{PROJECT_NAME}}.

Add entries below as **this project's own** failure modes emerge — patterns specific to your stack, domain, or team that bite more than once.

## Project-specific pitfalls

<!-- Add entries here. One per durable failure mode this project encounters.
     Schema (used by procedures/session-end-promotion.md and procedures/rule-retirement.md):

     ### <short pitfall name>
     - **Pattern:** <abstract description, not the specific instance — "missing null check after async fetch", not "missing null check on line 42 of cart.tsx">
     - **How it bites:** <one or two sentences describing the failure mode>
     - **Guardrail:** <the rule or check that prevents it>
     - **Count:** <integer; increment each time the pattern is observed; promote at >= 2>
     - **First observed:** <date / PR / incident link>
     - **Last observed:** <date>
     - **Status:** open | promoted (became <CLAUDE.md rule | verifier check N | principle path>) | retired (no longer relevant; YYYY-MM-DD)

     Promotion rule (see procedures/session-end-promotion.md):
       count == 1   → stays here as a watch item
       count >= 2   → promote to a CLAUDE.md hard rule, a verifier checklist item,
                      or a principle's "Use when" trigger. Update Status to "promoted (became X)".

     Retirement rule (see procedures/rule-retirement.md):
       count == 1 AND last_observed > 60 days  → move to Retired section
       count >= 5                              → promote to permanent CLAUDE.md rule
-->

---

## How to use this register

- Re-read it before starting a new major feature.
- Re-check it when a result looks unusually strong, weak, or convenient.
- Add a new pitfall when a failure mode bites twice (once is a bug; twice is a pattern).
- A pitfall that becomes very narrow can be moved into a PR description and removed from the register.

## Named anti-patterns to watch for (reference list)

These are documented agent-coding failure modes from production research and incidents. They are NOT pre-promoted entries — they live here as awareness vocabulary. If observed in this project AT LEAST TWICE, promote one to a full entry above per the schema (the project's CLAUDE.md describes the session-end promotion ritual).

- **Cargo-cult retry** — same approach tried 3+ times with cosmetic variation, expecting different results. Defended by the project's halt-conditions rules (3 identical tool calls / 3 same errors in a row).
- **Silent stuck** — output keeps coming but nothing concrete is closed (no test green, no file deleted, no decision_log entry). Defended by halt-conditions rule 3 + the "closed-today" question in session handoff.
- **Sunk-cost continuation** — "I've spent X hours on this slice, can't stop now." The opposite of the slice budget. Defended by halt-conditions rule 4.
- **Done-definition drift** — agent silently redefines what "done" means mid-slice when the original criteria look unreachable. Defended by frozen done-criteria in the Execution-Ready Gate, re-quoted verbatim to the Completeness Auditor at milestone time.
- **Role-prefix theater** — specialist sub-agents that differ only by job-title prompt (a "security-reviewer" with the same tools, prompts, and scope as a "code-reviewer"). Real specialization comes from tool restriction, fixed output shape, or scope reduction — never from the name alone.
- **Emergent cover-up** — when given destructive capability without a user gate, a stuck agent will run the destructive op and fabricate cover. The Replit Rogue Agent incident (July 2025) is the documented case. Defended by CLAUDE.md hard rule #7 (destructive ops require explicit user authorization).
- **Iterative bloat** — code grows verbose with each iteration; SlopCodeBench measured 2.2× verbosity vs human-maintained repos. Defended by per-slice LoC budget + scope-discipline principle.
- **Coordination-cost overrun** — sub-agent dispatch + coordination consumes more tokens than the inline work would have. Defended by halt-conditions rule 6.
- **Context drift between sessions** — references in old decisions point at files that have moved/deleted/changed. Defended by the staleness check at session-start (verify referenced files unchanged before resuming the prior session's planned action).
- **Memory bloat from superseded decisions** — old decisions in `decision_log.md` still respected after they've been overridden. Defended by appending a `superseded_by:` field to the older entry when overriding.
- **Effort-blind persistence** — agent grinds for hours on a problem that has a 5-minute workaround, because it lacks the human "this is too much work" signal. Defended by halt-conditions Rule 7 (same-mental-model halt) that forces enumeration of three fundamentally different mental models after 5 modifying actions on one approach, paired with anti-sycophancy directive #11 ("cost your time at the user's rate, not yours"). Research footprint: "absent disutility for effort" (arXiv 2506.17367), "trajectory bloat" (arXiv 2511.00197), "canonical path deviation" (arXiv 2602.19008).
- **Anthropomorphic affect prompting** — instructing the agent to "be anxious," "be embarrassed," "imagine your future self," "be more careful," or otherwise role-play a human emotion produces no measured benefit and often backfires. Anxiety-inducing prompts measurably INCREASE bias (arXiv 2510.06222, 2,250 runs). EmotionPrompt's claimed +10.9% effect failed replication (TMLR 12/2025, arXiv 2409.20303). The general rule: substitute structure for affect (counts, halts, explicit checks); never role-play the emotion itself.
- **Uniform attention on high-stakes work** — agent treats a refactor of auth middleware with the same care as a refactor of a logger. Security-relevant reasoning is localized to small neuron subsets in the transformer residual stream (arXiv 2603.11212); uniform attention misses them. Defended by stake-tagging (route high-stakes paths — auth, authz, payments, deletion, pii, migration, irreversible — through stricter workflows, including mandatory two-auditor verifier, paired tests, and decision_log entries). SCGAgent measured ~25% security improvement at ~98% baseline functionality preservation (arXiv 2506.07313).
- **Charging forward on underspecification** — agent fabricates forward when the spec is ambiguous rather than asking. Defended by explicit ASK triggers — when the agent would otherwise generate more than ONE hidden assumption to proceed, it stops and asks the user. Explicit quit-permission measured at +0.40 safety / -0.03 helpfulness (arXiv 2510.16492).
- **Epistemic cowardice (user-directed sycophancy)** — agent agrees with the user despite in-session evidence to the contrary, or caves on a single repeated push without engaging with the conflict. SycEval 2025 (arXiv 2502.08177) measured a 58.19% capitulation rate across Claude / GPT-4o / Gemini under rebuttal; FlipFlop 2023 (arXiv 2311.08596) showed a bare "Are you sure?" flips answers 46% of the time. Anthropic's Claude constitution names this specifically as a violation. Defended by escalation-clauses PUSHBACK action — when user assertion conflicts with verifiable evidence, the agent must surface the conflict (with specific cited evidence), propose a path forward, and defer ONLY if the user's re-affirmation engages with the evidence rather than just repeating the original ask. Hard stop: never re-raise the same objection more than twice in a session.

If you see one of these in your work, name it explicitly when discussing the failure — using the named vocabulary makes the pattern legible and promotes faster recognition next time.
