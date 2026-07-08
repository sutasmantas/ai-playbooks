# claude_process — H16 Structured Extraction

Produced using the H16 methodology: enumerate ALL innovations, anti-patterns, surprising elements, carry-forward decisions, improvements, and open questions. Do NOT pattern-match to known things — this is the complete systematic pass.

---

## INNOVATIONS (things that don't exist in standard AI usage)

### Verification architecture

1. **Two-auditor model with tool restriction** — Completeness (what's missing) vs Correctness (what's wrong) as independent subagents with Read/Grep/Glob ONLY. Not just "have AI check it" — distinct frames catch distinct failure classes. Tool restriction prevents auditors from fixing instead of finding (a measured behavioral drift).

2. **Validator-as-Bash-layer, auditor-as-reader** — All expensive computation (typecheck, secret scan, dep check, behavior invocation) is pre-run by a full-tools validator that writes structured JSON outputs to diagnostics/. Auditors read those files. Makes auditors cheap and reproducible, expensive work done once.

3. **Trivial-diff carve-out with objective metrics** — "Both auditors for non-trivial; single auditor for trivial." But "trivial" is explicitly defined: ≤20 LoC AND ≤2 files AND no concern touched AND no stake-tagged path AND no new dependency — all machine-checkable from diff_summary.json. Not vibes.

4. **Canary: known-bad example for calibration** — A deliberately broken file the auditor MUST return RED on. Tests the tester. If it returns GREEN: the verifier is broken. Monthly cadence or whenever the verifier has been returning GREEN suspiciously long.

5. **Verbatim quoting with enforcement rule** — Auditor must verify each finding's verbatim quote actually exists at the stated file:line before reporting. Unenforced: 40-45% false positive rate. Enforced: 92% citation accuracy. Most systems tell auditors to "quote" without the enforcement step.

6. **Stake-tagging** — Annotating files/paths with blast-radius category (auth, authz, payments, deletion, pii, migration, irreversible). When a stake-tagged path is touched: both auditors mandatory, paired test required, decision_log entry required. Not "be careful" — route the work through a different mechanical path.

7. **LLM-as-judge calibration ceiling** — After 3 RED→fix→re-dispatch cycles, no further gain. Past this, oscillation without convergence. Hard cap at 3 RED rounds, then escalate to user. Research-backed, not arbitrary.

### Planning and execution

8. **Plan as execution contract** — Specifies each step clearly enough that execution requires no new decisions. Done-criteria must be testable, not vibes. Contains: "What this plan is NOT" (explicit scope-out), "Strongest unsupported assumption" (weakest link named), vertical slices riskiest-first, damage-prevention AND value-preservation gates, discovered work (append-only), plan quality audit checklist.

9. **Execution-Ready Gate** — Binary YES/NO line in the plan before any work on Slice 1. Not "are we ready?" in conversation. Forces resolution of blockers before work starts. Elements: all decisions written (not in producer's head), alternatives frozen, "Strongest unsupported assumption" addressed, each slice's done-criteria frozen verbatim, each slice declares budget with named enforcer.

10. **"Strongest unsupported assumption" as mandatory field** — Explicit naming of the weakest link in every plan. Architecturally significant: plans without this field can proceed while hiding their fatal assumption.

11. **Discovered work is append-only** — Discoveries during a slice go to the Discovered Work section, addressed at slice boundary. Never interrupt current slice. Slice boundary decides: promote to next slice, separate task, or drop.

12. **"What this plan is NOT" field** — Explicit scope exclusions in every plan. Prevents scope creep by naming what's out.

13. **Replan triggers are a hard bar** — Replanning ONLY when: done-criteria turn out wrong, two consecutive slices hit unforeseen blockers, or discovered-work blocks subsequent slices. NOT when "the plan feels off."

14. **Four-field schema per workstream item** — Output / Decision / Evidence to close / Status. "Decision" reads "pending — recorded at the gate" until verification closes the workstream. Never write "shipped" on unverified work.

15. **Research hard cap** — Before any pre-implementation research: try to describe the eventual diff in one sentence. If you can: skip research. If you can't: max 5 reads + 3 web fetches, then forced decision. Prevents research-as-procrastination.

16. **Session-start staleness check** — For each file mentioned in next_action.md and last 3 decision_log entries: verify file still exists AND check modification time. If modified after next_action was written: do NOT start the planned action — re-plan first.

17. **Session handoff as structured files, not summaries** — next_action.md format: resume verb, first command (exact), expected observable result, fallback, options rejected this session. Reading chat history at session start is explicitly anti-pattern.

### Behavioral discipline

18. **"Wait —" pause before claiming done** — Literally prepend "Wait —" before finalizing. Self-Correction Bench (NeurIPS 2025): 89.3% reduction in blind-spot rate. Agents can correct identical errors in user input but not their own output — this trigger changes the attention pattern.

19. **Enumerate exactly 3 failure modes, capped** — Before validating: enumerate 3 failure modes. More (5+) measurably INCREASES false rejections of correct code. Pre-commit to mitigation for at least 2 of the 3 — enumeration without pre-commitment is ineffective.

20. **Same-mental-model halt** — After 5 consecutive modifying actions on one hypothesis: enumerate 3 fundamentally DIFFERENT mental models (not different implementations of the same model), restate done-criteria verbatim, pick cheapest. Different mental model = different class of solution.

21. **Agent-checkable vs external-enforced distinction** — Agents CAN count their own tool calls from visible context. Agents CANNOT sense wall-clock time. All halt rules specify which kind of enforcer they require. Wall-clock rules need external enforcer (CI, user, harness). Count-based rules are agent-self-checkable.

22. **Halt conditions: named failure modes with mechanical triggers** — Same-action-thrice, same-error-message, closeable-artifact plateau (5 modifying actions without producing something closeable), slice budget overrun, RED iteration cap, coordination-cost cap, same-mental-model halt. Each is checkable from transcript.

23. **Effort-blind persistence check** — Agents don't have effort fatigue. Humans use "this feels like too much work" as a signal to find alternatives. Without the signal, agents grind. This is mechanically enforced by same-mental-model halt at 5 actions plus explicit "cost your time at the user's rate" directive.

24. **Anti-sycophancy: User-evidence-conflict clause** — When user assertion conflicts with in-session verifiable evidence (under 30s of tool use): surface conflict AND evidence BEFORE complying. Template included. Pushback has a hard stop (raise same objection max twice per session).

25. **FlipFlop prevention** — "Are you sure?" flips answers 46% of the time. Never use this phrase. Defer ONLY if user re-affirmation engages with the evidence, not just repeats the original ask. Re-ask once more if they repeat without engaging. After second surface: comply.

26. **Escalation clauses: ASK / QUIT / PUSHBACK** — Three distinct actions with specific triggers: ASK (underspecified, >1 hidden assumption), QUIT (irreversible without authorization, claim-done without validator, halt+no-next-step), PUSHBACK (user assertion conflicts with verifiable evidence). Each has a specific format.

### Kit structure

27. **Pitfall register with count-based promotion** — Count=1 is noise, count≥2 is pattern, count≥5 is permanent rule. Distinct from session-end promotion ritual. Both directions exist: session-end promotion adds; rule retirement removes.

28. **Rule retirement with "would model mistake" test** — For each rule: "if removed, would the agent make a meaningful mistake in the next month?" Yes with evidence: KEEP. Yes theoretically: WATCH. No evidence: DEMOTE. Demote = move down salience hierarchy, not delete.

29. **Hard size caps on all rule surfaces** — Principles: ≤7 files. CLAUDE.md body: ≤350 words of rule content. Pitfall register: ≤200 active entries. Not guidelines — if cap is breached, retirement is required. Cap at ≥5 pitfall promotions directly to CLAUDE.md without user vote.

30. **Right-sizing by project criticality and lifespan** — Four criticality tiers: Throwaway/experiment, Internal tool, External product, Safety/regulated. Three lifespan tiers. Different kit configurations for each. Interview-driven, not assumed.

31. **Trace lines in every rule** — Each rule has a Trace: section citing the evidence: paper title, arXiv ID, GitHub repo, production incident. Makes each rule traceable. (Limitation: inline citation only, no retrievable research corpus — see improvements.)

32. **Named anti-pattern vocabulary in starter pitfall register** — 14+ named patterns with research citations: cargo-cult retry, silent stuck, sunk-cost continuation, done-definition drift, role-prefix theater, emergent cover-up, iterative bloat, coordination-cost overrun, context drift, memory bloat, effort-blind persistence, anthropomorphic affect prompting, uniform attention on high-stakes work, epistemic cowardice. These are vocabulary, not promoted rules.

33. **Concern-protected paths** — Certain files always trigger both auditors regardless of diff size: CLAUDE.md, process_checklist.md, scripts/, EXCEPTIONS.md, decision_log.md, pitfall_register.md, .github/workflows/, .claude/.

34. **EXCEPTIONS.md with expiry dates** — Waivers to rules have "Revisit by" date. Passed date auto-promotes to blocker. Exception invoked >3 times in 30 days signals the underlying rule needs revision, not another exception.

35. **ai-authoring-security defaults ON** — Any project built with an AI agent defaults this concern ON. Almost no 2026 project qualifies for OFF. Names the meta-risk of the kit being generated by AI.

36. **Debugging: subagent delegation threshold** — When gather-context grows beyond ~5 file reads OR starts pulling unrelated code paths: delegate to a fresh-context subagent with a specific question. Keep the main thread context tight.

37. **Interview questions designed to elicit model-vs-truth gaps** — Interview-02 explicitly asks: "what could be coherent in tests but wrong at the truth surface?" Elicits failure modes at bootstrap time, not just project facts.

38. **Experiment loop with frozen termination contract** — Freeze BEFORE the loop: scoring script + frozen inputs, win threshold, iteration budget (count-based), dry rule (K consecutive non-improvements → park). A loop without a written termination contract is an infinite cycle.

---

## ANTI-PATTERNS DOCUMENTED

1. **Self-review as verification gate** — Confirmation bias is frame-specific. Producer reviews with "did I do X correctly?" — excludes everything outside that frame.
2. **Role-prefix theater** — Subagents that differ only by job-title prompt. Real specialization: tool restriction, fixed output shape, scope reduction. Name alone is theater.
3. **Validator back-filled from output** — Expected values captured from a recent run, not from the spec. Passes on bugs as readily as correct implementations.
4. **Freeform session summaries** — Iterative summarization loses 20-30% fidelity per pass. Structured handoff files are the fix.
5. **Research as procrastination** — Unbounded reading before implementation. One-sentence-diff test is the stopping criterion.
6. **"Are you sure?" phrasing** — Measured sycophancy trigger, 46% flip rate. Never use.
7. **Anthropomorphic affect prompting** — "Be anxious," "imagine your future self," "be more careful." Anxiety prompts INCREASE bias, not accuracy.
8. **"Looks secure" / "looks correct"** — Must state the specific tool run or test executed.
9. **Boil-the-ocean slice** — A slice >1 PR is its own task, not a slice.
10. **Plan rewrites every session** — Replanning at session start is the documented "quietly redefining done mid-run" failure mode.
11. **Tag inflation** — Stake-tagging everything = tagging nothing. 7 canonical tags kept deliberately narrow.
12. **Hidden plan-of-the-plan** — If you're maintaining a meta-plan, the plan is too big. Decompose.
13. **Charging forward on underspecification** — Without explicit quit/ask permission, agents fabricate forward on ambiguity. The Replit Rogue Agent incident (July 2025) is the canonical case.
14. **Effort-blind persistence** — Grinding hours on one mental model when a 5-minute alternative exists.
15. **Ask-before-every-commit theater** — Over-asking is its own failure mode. Escalation triggers are deliberately narrow.
16. **Context-pollution from open-ended research** — Deepening the main context window for exploration instead of delegating to a subagent.

---

## SURPRISING ELEMENTS

1. **3 failure modes, not more** — Enumerating 5+ failure modes before validating INCREASES false rejections. The cap at 3 is counterintuitive but empirical.
2. **"Are you sure?" is broken** — 46% flip rate on a phrase most people use casually without knowing.
3. **Verbatim quoting without enforcement = 40-45% false positives** — The enforcement rule (verify the quote exists at stated line) is what makes quoting meaningful. The instruction to "quote" without enforcement doesn't work.
4. **"Wait —" reduces blind-spot rate by 89.3%** — A simple text trigger produces dramatic improvement.
5. **Trajectory bloat** — Failed trajectories are consistently LONGER than successful ones. More actions signals being stuck, not progress.
6. **Multi-agent coordination: 3-10× typical tokens, 15× extreme** — More agents can cost more than doing the work inline. Most people assume more = better.
7. **LLM-as-judge calibration ceiling ~80% human agreement** — Beyond 3-4 rounds, no more gain. Oscillation without convergence. The hard cap at 3 RED rounds is based on this.
8. **Discovered work append-only** — Most agents and humans interrupt current work with discoveries. Requiring them to wait for the slice boundary requires significant discipline but prevents scope rot.
9. **Defer only if user engages with evidence** — Not "defer if user repeats themselves." Defer only if they respond to the specific evidence. If they just repeat the request, ask once more with the evidence restated.
10. **Promote at count≥5 bypasses user gate** — Rules that bite 5 or more times promote directly to CLAUDE.md. Not 2, not 3 — 5 is the threshold for "this is permanently dangerous."
11. **Canary tests the verifier, not the artifact** — Most systems test what was built. Testing the verification system itself is unusual and important.
12. **Research stopping rule is binary, not a feeling** — One sentence = skip research. Can't write one sentence = max 5 reads + 3 fetches. Not "research until ready."
13. **Four-field schema: Decision is pending until gate** — Never write "shipped" on unverified work. This discipline prevents the producer from closing their own work.
14. **Interview-02 asks about failure modes** — "What could be coherent in tests but wrong at the truth surface?" — eliciting model-vs-truth gaps at bootstrap, not just project facts.
15. **Hard cap on principles: ≤7 files, each addition requires a removal** — The limit is built into the kit itself and enforced by rule retirement.

---

## WHAT TO CARRY FORWARD TO KIT-MAKER

1. Two-auditor model (Completeness + Correctness, tool-restricted) — apply to kit content review
2. Canary for verifier calibration — produce a known-bad kit snippet per kit generated
3. Pitfall register: count-based promotion (≥2 pattern, ≥5 permanent), user-gated, session-end promotion ritual
4. Plan as execution contract: testable done-criteria, "Strongest unsupported assumption," discovered work append-only, Execution-Ready Gate, plan quality audit
5. "Wait —" pause before any "done" claim
6. Enumerate 3 failure modes (capped at 3), pre-commit mitigation for ≥2
7. Same-mental-model halt: 5 actions → enumerate 3 different mental models, restate done-criteria verbatim
8. Agent-checkable vs external-enforced distinction — ALL rules in kit-maker must specify which kind of enforcer
9. ASK/QUIT/PUSHBACK with specific triggers (FlipFlop prevention included)
10. Hard size caps for all kit-maker rule surfaces
11. Rule retirement with "would model mistake without this" test
12. Trace lines in every rule (but carry forward as full archive, not just inline citation)
13. Named anti-pattern vocabulary in starter pitfall register (adapt to kit-design anti-patterns)
14. Right-sizing by project criticality and lifespan
15. Research bounds: one-sentence-diff test + hard cap
16. Verbatim quoting with verification requirement (can't just ask for quotes)
17. Session-start staleness check
18. Four-field schema for each kit-making phase
19. Named termination contract for any iterative refinement loop
20. Stake-tagging for high-blast-radius kit content (adapter needed for what "high-stakes" means in kit design)
21. Scope discipline: no unnecessary changes, explicit forbidden list
22. Concern-protected paths: certain kit files always get full review regardless of change size

---

## WHAT TO IMPROVE IN KIT-MAKER

1. **No research archive** — claude_process has Trace: lines but no retrievable research corpus. Rules become cargo cult over time. Kit-maker must output full research archive alongside kit files. (H14 — confirmed gap)
2. **Interview questions are coding-specific** — Need kit-design equivalents: what does "truth surface" look like for a kit? What are the drift surfaces for kit rules?
3. **Canary is code-specific** — Need a known-bad kit rule (ambiguous negative rule, contradicting rules, missing done-criteria) that kit auditors test against
4. **Programming concerns are domain-specific** — Need a "kit concerns" set: instruction ambiguity, decision hierarchy determinism, missing negative rules, scope creep triggers, tone drift
5. **No explicit alternatives phase in ENTRYPOINT** — Same-mental-model halt catches local optima during work, but there's no explicit "after draft, generate alternatives" step for kit content. Kit-maker should add this as a named phase.
6. **Pitfall register starts empty** — Good design, but kit-maker should ship with a starter set of kit-design pitfalls (rule inflation, overspecification, missing negatives, generic "try to" language, goal-less skills)
7. **Rule retirement assumed calendar-driven** — For kit-maker, retirement trigger might be better as "user reports confusion from this rule" or "kit produced unexpected result" rather than quarterly cadence alone
8. **Coordination cost cap is retrospective** — Kit-maker could add a prospective estimate step: before dispatching sub-agents, estimate inline cost vs coordination cost, pick inline if close

---

## WHAT IS STILL UNCLEAR

1. What does "behavior not counts" look like for kit validation? What IS the observable behavior of a kit rule?
2. What would stake-tagging look like for kit content? What are the "high-blast-radius" spots in a kit design?
3. How does the plan quality audit checklist translate to kit-making phases? Some items assume software artifacts.
4. How should a kit's truth surface be defined? It produces kit files, but the real truth surface is "does the kit generate correct behavior in the target domain" — which is multi-step and hard to automate.
5. Does the research hard cap (5 reads + 3 fetches) make sense for kit-design research, or does kit design inherently require more? The one-sentence-diff test doesn't translate directly (kit design doesn't produce a "diff").
6. What does "discovered work append-only" look like during the kit-design phases? What counts as a "slice boundary" for kit construction?

---

## NEW ANGLES FOR RESEARCH (generated by this extraction)

These gaps and surprises should go back into RESEARCH_ANGLES.md:

- 64. [FROM EXTRACTION] Calibration ceiling for LLM-as-judge in non-code contexts — the 3 RED round limit is based on ~80% human agreement ceiling for code review; does this same ceiling apply to kit review? Any research on LLM review calibration for text/process artifacts?
- 65. [FROM EXTRACTION] "Behavior not counts" for text artifacts — how do you assert that a rule/instruction "works" in a behavioral sense, not a count sense? What would a behavioral assertion look like for a kit rule?
- 66. [FROM EXTRACTION] Termination contracts for iterative refinement loops — research on when to stop improving (vs just stopping at a fixed count). Does this apply differently to kit refinement vs code refinement?
- 67. [FROM EXTRACTION] Known-bad example (canary) design for non-code artifacts — what makes a deliberately bad kit example useful as a calibration target? What violations should it contain?
- 68. [FROM EXTRACTION] Session handoff and context decay measurement — Factory.ai's 20-30% fidelity loss per iterative summarization pass; any research on structured handoff files vs summarization for multi-session kit work?
