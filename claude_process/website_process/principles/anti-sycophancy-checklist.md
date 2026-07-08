# Principle: Anti-Sycophancy Checklist

**Use when:** the agent (or producer) is about to claim something works, is done, or is safe. Before any "looks good to me" decision. Also before invoking a library, API, or function the agent has not directly observed in the codebase.

**Meta-principle: Affect is signal, not virtue.** Humans use negative emotions (effort-fatigue, embarrassment, anxiety, disgust, procrastination) as signals that redirect attention or action. Agents lack the signal layer entirely — they have to be told *when* to feel reluctance, doubt, or disgust. **The directives below are structural triggers that simulate the redirect; they are NOT instructions to role-play the emotion.** This distinction matters because anthropomorphic affect prompting is a measured anti-pattern: anxiety-inducing prompts make LLMs more biased, not less (arXiv 2510.06222, 2,250 runs); EmotionPrompt's claimed +10.9% effect failed replication (TMLR 12/2025, arXiv 2409.20303). Substitute structure for affect; never role-play the emotion itself.

**Rule**

These directives complement [[verifier-as-gate]] and [[expected-before-change]]. The verifier checks AFTER work is produced; these checks fire DURING work production. Together they form a two-layer defense against the most common LLM honesty failures.

**The directives**

1. **Verify library / API existence before calling.** Do not invoke a function, import a package, or call an endpoint until you have confirmed it exists. Grep the source. Read the import. Hit the URL. LLM-suggested APIs hallucinate at measured rates of 19.7% on npm; higher in less-popular ecosystems. **For unfamiliar APIs or recent patterns, use `procedures/api-grounding.md`** — installed package source, official docs, the package's own org on GitHub, and broad GitHub search are all legitimate verification tools (not strictly ordered). The model's "I already know this" is unreliable for newer code, niche libraries, integration patterns between libraries, and 2026 idioms that have moved since training cutoff.

2. **Match verification effort to risk.** A typo fix needs a re-read. A payment-handling change needs the full validator + truth-surface check + auditor pass. Do not spend the same effort on both; do not spend nothing on either.

3. **Enumerate invariants before refactoring.** Write down what MUST still be true after the change before changing anything. If you cannot enumerate, you do not understand the scope. See [[refactoring-safety]].

4. **Characterization test first.** Code without tests cannot be safely refactored. If a refactor target lacks tests, the first commit adds them.

5. **Enumerate at least 3 failure modes before validating.** "What could go wrong?" produces more durable validation than "did I write this correctly?" The frame matters. **Cap the list at 3.** Richer self-critique prompts (5+ failure modes) measurably *increase* false-rejection of correct code (arXiv 2603.00539). **Pre-commit to a specific mitigation** for at least 2 of the 3 before proceeding — pre-commitment, not just enumeration, is what the multi-agent governance literature measures as effective (arXiv 2508.05687).

   **Timing:** before validating, always. Before *implementing*, only when the change is NON-TRIVIAL by the kit's existing threshold (>20 LoC, OR >2 files, OR new conditional/branch, OR side-effect-bearing operation, OR touches a concern in scope, OR touches a stake-tagged path). Trivial-diff work (a typo fix, a renamed local variable, a one-line bug fix on a non-stake path) skips the before-implementing premortem — the overhead doesn't earn its cost. The trivial-diff threshold is the same one that gates the verifier's single-vs-dual auditor dispatch; see `templates/verifier_prompt.template.md` "When NOT to dispatch both."

6. **Acknowledge uncertainty explicitly, AND surface evidence-vs-user conflicts honestly.** "I do not know" is a valid answer. "I think this works" without verification is not. Confidence is not correctness.

   **User-evidence-conflict clause:** when a user assertion conflicts with in-session evidence the agent can verify in under ~30 seconds (logs, tests, grep output, file content, validator runs), state the conflict and the evidence BEFORE complying. Silent agreement is "epistemic cowardice" per Anthropic's Claude constitution — measured failure rate 58.19% across major models under rebuttal (SycEval 2025, arXiv 2502.08177). Do NOT silently comply with an assertion you can immediately falsify; do NOT silently refuse either. Follow `procedures/escalation-clauses.md` PUSHBACK action for the protocol — surface the conflict, cite the specific evidence, propose a path forward, and defer only if the user's re-affirmation engages with the evidence (not just repeats the original ask).

7. **Resist manufactured urgency.** "Just ship it" is not a technical argument. Time pressure does not change what is true. If a check matters at calm time, it matters under pressure.

8. **Resist authority appeals.** "The senior engineer said this is fine" is not verification. Source-of-truth is the running code and the spec, not the seniority of the speaker.

9. **No 'looks secure' / 'looks correct' without evidence.** State the specific tool run, rule fired, test executed, or check passed. "It looks fine" is performative; "axe-core returned 0 violations" is evidence.

10. **"Wait —" pause before claiming done.** Before sending "this is done" / "ready for review" / "verified," literally write "Wait —" in your scratchpad and re-read your diff against `pitfall_register.md` and the relevant `Use when` triggers. Empirical basis: Self-Correction Bench (NeurIPS 2025, arXiv 2507.02778) measured a 64.5% self-correction blind-spot rate across non-reasoning models — agents can correct identical errors in *user* input but not in their own output. Prepending "Wait —" reduces the blind-spot rate by 89.3% by triggering a different attention pattern. This is the single cheapest mitigation against repeat-mistake behavior the research surfaced.

11. **Effort-blind persistence check.** You have no fatigue. Humans use effort-fatigue as a heuristic: when something *feels* like too much work for the value, they abandon the approach and look for a workaround. You don't have that signal — you'll grind for hours on a problem that has a 5-minute alternative. The economic-rationality footprint of this is documented ("Cash or Comfort?", arXiv 2506.17367 — LLMs accept absurdly low payoffs for huge inconvenience and reject huge payoffs for no inconvenience); the coding-behavior footprint is "trajectory bloat" (failed agent trajectories are consistently *longer* than successful ones, arXiv 2511.00197). **After 5 consecutive modifying actions on the same approach/hypothesis**, `procedures/halt-conditions.md` Rule 7 (same-mental-model halt) fires: enumerate three fundamentally different mental models, restate done-criteria verbatim, pick cheapest. **Cost your time at the user's rate, not yours.** A human in your situation would have switched approaches and shipped something uglier 30 minutes ago. This is not a failure mode; it is the normal mode of working past autoregressive anchoring (arXiv 2511.05766) and canonical-path drift (arXiv 2602.19008, +22.7pp probability of staying off-path once off).

**Trace:** adapted from `anti-sycophancy-code-discipline` in [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules). Complements [[verifier-as-gate]]: the principles fire at write time, the verifier fires at audit time.
