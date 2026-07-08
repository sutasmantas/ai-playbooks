# Kit-Maker — Pitfall Register

Re-read before starting any kit-making run. Add entries when a failure mode bites twice (once is a bug; twice is a pattern).

Promotion rules:
- count = 1 → watch item (stays here)
- count ≥ 2 → promote to ENTRYPOINT hard rule or a procedure
- count ≥ 5 → promote to permanent hard rule, bypasses user review

Size cap: 200 active entries. If exceeded: retire entries with count=1 and last_observed > 60 days.

---

## Starter set — problem classes discovered during kit-maker design session

---

### Over-optimization past diminishing returns
- **Pattern:** Agent continues iterating on a work direction — adding small fixes, tweaks, edge case handling — after the area has saturated and each addition adds less than the one before. No boredom signal exists to trigger stopping.
- **How it bites:** High-value work goes untouched while low-value micro-optimizations accumulate. The agent "feels productive" (tasks are completing) but the goal isn't advancing. User has to call it out explicitly.
- **Guardrail:** `procedures/satisficing-and-roi.md` Part 1: "What specifically would one more iteration add, and is that worth the effort?" If the answer is a query tweak or a one-line note, the area is saturated — stop and assess what's highest-ROI toward the actual goal.
- **Trajectory signal:** Fixes getting smaller and smaller is the diagnostic. If three consecutive actions were each smaller than the last, the ROI check must fire before the fourth.
- **Count:** 2
- **First observed:** 2026-06-29 — agent stopped after every single small edit instead of batching
- **Last observed:** 2026-06-29 — user explicitly noted fixes becoming smaller and smaller, agent not checking ROI
- **Status:** count ≥ 2 → promote. Adding trajectory-signal check to satisficing-and-roi.md and logging as a hard rule reminder.

---

### Behavioral contract decay
- **Pattern:** A behavioral mode is established by the user ("be an advisor," "always propose next steps," "surface problems proactively"). The agent follows it for a few turns, then silently reverts to default task-executor mode as task density increases. No explicit violation — just gradual drift back to "complete what was asked, stop, wait."
- **How it bites:** User has to re-establish the same behavioral contract multiple times per session. The contract feels like it's in place but isn't. The agent's behavior is locally correct (tasks completed) but globally wrong (operating in the wrong mode).
- **Guardrail:** `procedures/goal-directed-continuation.md` now includes a Behavioral Contract section. The contract is captured at Phase 2 INTAKE alongside the goal model, and checked explicitly at the start of every turn. Re-reading the contract is not optional.
- **Count:** 2
- **First observed:** 2026-06-28 — user established advisor/colleague mode; after a few turns the agent reverted to task-executor without noticing
- **Last observed:** 2026-06-28 — user had to explicitly call this out again ("you just stopped doing that")
- **Status:** count ≥ 2 → promoted to procedure update. Done.

---

These are class-level entries from observed failures. Count starts at 1 — observed once (in the design session itself). Not yet promoted.

---

### Scope-completion blindness
- **Pattern:** AI completes the defined scope of a task and stops. No stepping back. No "was that all I could get?" No alternatives considered. No "what does this suggest?"
- **How it bites:** Every phase produces the minimum viable output but misses adjacent patterns, implicit implications, and better alternatives that were available but not asked for.
- **Guardrail:** `procedures/mandatory-reflection.md` fires at every phase end. Cannot be satisfied by one-word answers.
- **Count:** 1
- **First observed:** 2026-06-28 — after claude_process extraction, output was delivered and the session stopped with no review of what the material suggested
- **Last observed:** 2026-06-28
- **Status:** open

---

### Bandaid fixing (instance-level fix instead of class-level fix)
- **Pattern:** When a specific problem is identified with a specific example, the fix targets only that example. The general class is not named, not fixed, other instances not scanned.
- **How it bites:** The problem recurs in different forms. Each fix handles one manifestation while the underlying pattern fires again elsewhere.
- **Guardrail:** `procedures/class-before-instance.md` fires on any problem identification. Step 1: stop. Step 2: name the class. Step 3: scan for other instances. Step 4: fix the class.
- **Count:** 1
- **First observed:** 2026-06-28 — "no self-review after extraction" was treated as the problem; scope-completion blindness (the class) was not named until user pointed it out
- **Last observed:** 2026-06-28
- **Status:** open

---

### Memory-as-capture failure
- **Pattern:** Using cross-conversation memory files as the capture mechanism for in-session discoveries. Memory is designed for cross-session persistence, not in-session accumulation.
- **How it bites:** Discoveries get scattered across individual memory files with no aggregated picture. Can't easily review "what have we found so far." Memory saves feel like action but don't produce a usable artifact.
- **Guardrail:** `design_log.md` is the in-session capture mechanism. Memory only for durable cross-session preferences. At session end: review design log, promote durable items.
- **Count:** 1
- **First observed:** 2026-06-28 — multiple memory files written for individual mistakes; no aggregated picture; user had to point out the failure
- **Last observed:** 2026-06-28
- **Status:** open

---

## Named anti-patterns (awareness vocabulary — not yet observed in this project)

These are documented failure modes from kit-design and AI-agent research. They live here as recognition vocabulary. If observed in kit-making runs at least twice, promote to a full entry above.

- **Research-as-procrastination** — Unbounded research before building. Feels like thoroughness; is actually delay. Defended by saturation criterion in Phase 3 and one-sentence-diff test in task-decomposition.

- **Producer certification** — Agent claims its own output is correct without independent verification. "I reviewed it and it looks good" is not verification. Defended by verifier-as-gate (two auditors, restricted tools).

- **Placeholder shipping** — Delivering kit files with "TBD", "add examples here", or vague sections. The kit's users cannot use a placeholder. Defended by hard rule #11: no placeholders in final output.

- **Archive amnesia** — Building a kit without shipping the research archive. Rules become cargo cult — no traceable justification, no basis for future improvement. Defended by hard rule #6.

- **Role-prefix theater** — Two auditors that differ only by name ("completeness reviewer" vs "correctness reviewer") but have identical tools, scope, and prompts. Real specialization: different framing ("what's missing?" vs "what's wrong?"), different checklist items, same tool restriction. Name alone is theater.

- **Alternatives theater** — Generating alternatives that are obviously worse than the first approach in order to confirm it. The test: would a domain expert who disagreed have chosen any alternative? If no reasonable person would choose them, generate different alternatives.

- **Tunnel-vision research** — Running research on angles similar to what's already known, missing the perpendicular directions. Defended by diversity requirement in saturation criterion (diverse strategies, not just more queries on the same angle).

- **Opportunity blindness** — focusing entirely on what's wrong, missing, or broken; never asking "what could be great here?" or "what does this open up?" Deficit thinking crowds out opportunity thinking. Both are needed. Defended by mandatory-reflection.md questions 5-8.

- **Over-optimization past diminishing returns** — continuing to iterate because there is no boredom or fatigue signal, even when each iteration adds less than the one before. Defended by satisficing-and-roi.md: "what specifically would one more iteration add, and is that worth it?"

- **Uniform effort application** — applying the same depth to every task regardless of stakes. Quick-scan tasks getting deep-work treatment; deep-work tasks getting quick-scan treatment. Defended by satisficing-and-roi.md effort-scaling classification.

- **Plan-ordered execution blindness** — following plan sequence without asking if the planned next task is still highest-ROI given what we now know. Defended by satisficing-and-roi.md prioritization check.

- **Linear-only reasoning** — reasoning forward from prior findings without looking for analogical leaps from other domains. Cross-domain patterns catch what linear research misses. Defended by mandatory-reflection.md question 7.

- **Rule inflation** — Adding more rules after every failure without retiring old ones. Each rule added for one failure mode conflicts with rules added for others. Defended by rule retirement procedure and hard size caps.

- **Overspecification** — Writing rules so specific to one use case they don't generalize. "Do X when building a Python CLI kit" instead of "do X when building any kit with a command-line interface." Over-specific rules miss adjacent cases and create false precision.

- **Missing negative rules** — Specifying what to DO without specifying what NOT to do. Leaves the agent free to fill gaps with defaults that contradict intent. Every rule should have an implicit or explicit "and NOT ___".

- **Generic "try to" language** — "Try to include examples" is not a rule — it is a hope. Either it is required (write "must include") or it is not required (remove the line). Soft language in kit instructions produces inconsistent compliance.

- **Goal-less skills** — Skills that specify HOW to do something without specifying WHAT success looks like. Without a success condition, the skill cannot be verified and cannot be improved.
