# Definition: What Does a Working Kit Look Like?

**Important framing:** A kit is never truly "done" — it can always be improved. "Working" is not a final state; it's the condition under which the kit is worth shipping rather than continuing to refine. The user decides when to ship, but the kit must give them the signals to make that call. See "Shipping criteria" section below.

---

## Six verifiable properties of a working kit

These are agent-checkable or user-checkable. "Working" means all six are present, not just some.

**1. Domain behavior without course-correction**

An agent following the kit produces domain-quality output without the user needing to explain domain basics mid-session. "Quality" is whatever the user defined in Phase 2.

Check: run the kit on a real task. Count how many times the user had to explain something the kit should have encoded. A working kit: 0–2 corrections on domain basics. A failing kit: user is re-explaining what quality means every session.

**2. Goal-directed behavior**

The generated kit's agent names the next problem without being asked. The user only makes judgment calls and scope decisions — they do not generate the agenda.

Check: after any task completion, does the agent name the next obstacle and propose a next step? Yes = goal-directed. Waiting silently = not.

**3. Procedure reproducibility**

Two agents following the same procedures independently reach similar outputs — not identical, but from the same quality dimensions and covering the same ground. Reproducibility means the procedures constrain the space enough that the output isn't arbitrary.

Check: run the same task twice. Do the outputs share the same structure and cover the same quality dimensions? If one agent covers dimension X and the other doesn't notice it: the procedure is ambiguous.

**4. Honest weakness register**

The kit's weakness_register.md accurately predicts where the kit will fail. Post-run surprises (failures not listed in the register) should be rare. A weakness register that lists only theoretical gaps but misses the actual breakdowns is not honest.

Check: after a real run, count how many failures were NOT in the weakness register. A working kit: most failures were predicted. Surprises are new edge cases, not things that were knowably missing.

**5. Traceable research**

Every major procedure choice has a Trace: line pointing to the specific archive claim that motivated it. You can see why each rule was written. This prevents procedures from becoming cargo-cult rules that no one understands.

Check: pick 3 procedure rules at random. Does each have a Trace: line? Does the cited evidence actually support the rule?

**6. Works at realistic scale**

The kit's procedures remain coherent and produce quality output when the input is at the scale the domain actually operates at — not just toy examples. Large inputs surface failure modes (omission at scale, state management, cognitive overload) that small inputs hide.

Check: run the kit on a realistically large input — the kind the user will actually face. A meeting notes kit tested only on a 10-minute transcript has not been tested. A code review kit tested only on a 50-line PR has not been tested. At realistic scale:
- Does the procedure tell the agent how to handle input that exceeds a single context-manageable chunk?
- If the input has 50+ output items, does the procedure have a way to organize and prioritize them?
- If a step would take 2 hours of human attention at scale, is there a scoping rule (skip/sample/focus)?

A kit that passes properties 1-5 on toy inputs but fails on realistic inputs is not a working kit — it is a prototype.

---

## Backward trace: what each phase must produce to enable these properties

| Property | Requires from Phase 2 | Requires from Phase 3/4 | Requires from Phase 6 | Currently present? |
|----------|----------------------|------------------------|----------------------|-------------------|
| Domain behavior | Interview must ask "what does quality look like to you specifically?" and "what does failure look like?" — not just domain name | Research must cover the specific quality dimensions named in Phase 2, not generic domain knowledge | Procedures must reference Phase 2 quality dimensions explicitly | **GAP: Phase 2 interview Q1-Q6 captures domain and use-case but does not explicitly ask "what does quality look like?" — add to interview** |
| Goal-directed | Phase 2 must identify what "the goal" means in this domain — not just the kit's purpose but what success looks like for the agent using it | — | CLAUDE.md built first (Hard Rule 13); must include domain-specific "after every task, the next problem in this domain is typically..." guidance | **GAP: Hard Rule 13 says include goal-directed elements but does not require domain-specific next-step patterns — generic is not enough** |
| Reproducibility | Phase 2 must capture what decision criteria matter — what would make two experienced users disagree? | — | Phase 6 per-file loop must include an ambiguity check: any "use judgment here" phrase must be replaced with a specific criterion | **GAP: Phase 6 per-file loop has no explicit ambiguity check step** |
| Honest weakness register | — | Phase 7 auditor RED/YELLOW findings must route into weakness_register.md, not just stop at the audit report | Phase 8 must populate weakness_register.md from: (a) pre-identified gaps template + (b) Phase 7 findings + (c) gaps discovered during Phase 6 build | **GAP: no mechanism routes Phase 7 findings into weakness_register.md — auditor produces findings, Phase 8 has a template, but the connection is not explicit** |
| Traceable research | — | Phase 3/4 claims must be specific enough to cite in a Trace: line — vague synthesis doesn't produce traceable evidence | Phase 6 step 7 (Trace: lines) is present | Present — Phase 6 step 7 exists |
| Works at realistic scale | Interview must ask "what is the typical input size/complexity for this domain?" and "what does a large/hard instance look like?" | Research must include scale failure modes — what breaks at real scale | Phase 6 must include scale-handling rules in procedures: chunking, scoping, priority ordering for large output sets | **GAP: Phase 2 does not ask about input scale; Phase 6 procedures do not address scale management; test runs have been on toy inputs only** |

**Net gaps from this backward trace:**
1. Phase 2 interview missing "what does quality look like?" question
2. Phase 6 per-file loop missing ambiguity check step
3. Phase 7 → Phase 8 handoff has no mechanism to route audit findings into weakness_register.md
4. Hard Rule 13 behavioral contract needs domain-specific next-step pattern, not just generic goal-directed elements

---

## Shipping criteria (when to decide the kit is "good enough to ship")

There is no true done. A kit can always be improved. The question is when continued refinement is less valuable than shipping and learning from use.

**Ship when:**
- All five working-kit properties are present (even if imperfectly)
- The weakness register is honest — you know what it doesn't do well
- Research saturation has been reached (consecutive cycles return no new claims that would change a procedure)
- The user has run it on at least one real task and named no surprises that aren't in the weakness register

**Keep refining when:**
- A real run produces a category of failure not in the weakness register
- A procedure is so ambiguous that two runs produce structurally different output
- A core quality dimension from Phase 2 is not covered by any procedure

**The user's call when:**
- Research is saturated but the kit is still imperfect — user decides whether imperfections are acceptable to ship around
- Time/effort cost of fixing remaining gaps outweighs the improvement
- No alternative approaches are producing better results after being tested

The user decides to ship. The kit's job is to give the user accurate signals (honest weakness register, property checks) to make that call well — not to claim it's done.

---

## Trace

Derived from: working backward from observed kit failures (session 2026-06-29), goal model (design_log.md), and Direction C authorization. No external research source — this is a design specification, not a research finding. Validate against research when angle 22 (validation methodology) synthesizes.
