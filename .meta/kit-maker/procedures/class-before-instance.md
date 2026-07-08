# Procedure: Class Before Instance

**Use when:** any problem, mistake, or gap is identified — during any phase, in any output, by the producer, user, or auditor.

**Why this exists:** When a specific problem is identified with a specific example, the instinct is to fix the example. This leaves the general class intact, and the problem recurs in different forms. The documented failure: after "you didn't self-review after the extraction" was identified, the fix was a memory entry about "self-reviewing after data extraction" — a bandaid on one instance, while scope-completion blindness (the general class) continued to fire.

Fixing the class is harder than fixing the instance. This procedure provides the structure that forces the harder fix.

---

## The procedure (4 steps, in order)

**Step 1 — Stop before fixing the instance.**

Do not touch the specific thing that was identified. Write nothing to fix it yet. The fix comes last, not first.

**Step 2 — Name the general class.**

Complete this sentence: *"This is an instance of ___ because ___."*

The class must be more abstract than the instance. "No self-review after data extraction" is not a class — it is the instance. "Scope-completion blindness — AI completes defined task scope and stops without stepping back" is a class. If you cannot complete the sentence with something more abstract than what was observed, you have not found the class yet.

**Step 3 — Scan for other instances of the same class.**

Before fixing anything: look for other places where the same class applies.

Ask: where else in the current output, in recent phases, or in the kit design so far does this same class apply?

For discovered instances: log them in the design log. Do not fix them now (scope discipline) — but name them so they are not forgotten.

**Step 4 — Fix the class-level rule, then apply to instances.**

The fix must address the general class, not just the specific instance. A rule that says "do X after data extraction" is still an instance-level fix. A rule that says "do X after completing any substantive phase output" is a class-level fix.

Apply the class-level fix first. Then check each discovered instance: does the class-level fix cover it? If not, why not — and is the class definition too narrow?

---

## Output

After this procedure completes, add to design log:
- The general class (name + description)
- The specific instance that triggered the discovery
- Other instances found in the scan
- The class-level fix applied

---

## What this procedure does NOT do

- It does not require finding a maximally abstract class. "Scope-completion blindness" is a good class. "All AI problems" is not a class — it is too abstract to produce a fix.
- It does not prevent fixing specific instances. After the class-level fix is written, specific instances are fixed by applying the class-level rule to them.
- It does not replace the reflection checkpoint — this fires ON DISCOVERY of a problem; the reflection checkpoint fires at PHASE END regardless of whether problems were found.

---

## When to skip

**Skip when ALL of the following are true:**
- The problem is a clear factual error (wrong date, broken link, wrong filename) with no behavioral pattern involved
- The error is isolated — it could not have occurred in any other context, by construction

**Do NOT skip even when tempted:**
- "This seems like a one-off" — instance-level problems always seem like one-offs until the third recurrence. If it involves AI behavior (what you generated, how you approached something), run the procedure.
- "The user gave only one example" — one example is a sample, not a proof that the class doesn't exist. The user likely noticed the most obvious instance.
- "I've never seen this before" — novel problems still belong to classes. New instances are the hardest to class-identify and the most important to do so.
- Second occurrence of anything: by definition count≥2 → this is a class. Run the procedure.

---

## Anti-pattern: premature class naming

Naming the class as "AI is bad at X" or "this is a general LLM failure" without producing an actionable fix is NOT class identification — it is class-naming theater. The class must be specific enough that a structural fix can be designed for it.

Bad: "AI doesn't review its work (general LLM problem)"
Good: "Scope-completion blindness — AI completes defined task scope and stops; structural fix: mandatory reflection gate that fires at end of every phase and cannot be satisfied by one-word answers"

The test: can you write a procedure that mechanically prevents the class from firing? If yes, the class is specific enough.

---

**Trace:** Observed failure in this session — "no self-review after extraction" (instance) was treated as the problem. The class (scope-completion blindness) was not named until the user pointed it out explicitly. The scan step (Step 3) would have caught other manifestations: no alternatives generated, no "what does this suggest?", fixing only examples given. The fix step (Step 4) would have produced a procedure (mandatory-reflection.md) instead of a memory rule — which is a structural fix vs a bandaid.
