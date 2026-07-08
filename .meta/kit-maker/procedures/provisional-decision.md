# Procedure: Provisional Decision

**Use when:** making any design or architectural decision before the research that would confirm or contradict it. Specifically: when you know the decision is research-dependent but need to proceed.

**Why this exists:** "We can change it later" is a hope, not a mechanism. Without a named flip trigger, anchoring makes changing the decision later harder than it should be — the initial implementation accumulates path dependencies, and each subsequent decision that builds on it makes reverting costlier. The flip trigger creates an explicit authorization to change, so defending the decision past the trigger is against the rules rather than the natural default.

---

## The procedure (3 steps)

**Step 1 — Make the decision and implement it.**

Proceed with the best current judgment. Do not delay indefinitely waiting for research. The provisional decision is a real decision — it is implemented and used. "Provisional" means it has a named condition for changing, not that it is tentative.

**Step 2 — Write the flip trigger immediately.**

In the design log, under the decision entry, write:

*"FLIP TRIGGER: if [specific research finding or observed outcome], then change to [specific alternative]. Defending this decision past this evidence is against the rules."*

The flip trigger must be:
- **Specific** — "if research shows interleaved is better" is not specific. "If research shows pre-build saturation causes anchoring to irrelevant findings" is specific.
- **Falsifiable** — must be something that could actually be observed, not a perpetually deferrable condition
- **Named as authorization** — the trigger is explicit permission to change, not just a note

**Step 3 — Write the switch specification.**

What exactly changes if the flip trigger fires? Which files change? Which sections? What does the new approach look like?

If you cannot specify the switch, the decision is not modular enough — the implementation has too many interdependencies. Make it more modular before proceeding.

---

## What this procedure does NOT do

- It does not prevent the decision from being made. Provisional decisions are real decisions.
- It does not require waiting for research before implementing. That is the opposite of this procedure.
- It does not make the decision reversible automatically — the switch specification makes it reversible by design.

---

## When to skip

**Skip when ALL of the following are true:**
- The decision is fully confirmed by research already in the archive — no assumption is being made; the evidence is in hand
- The flip trigger would point to research that already exists and already supports this decision

**Do NOT skip even when tempted:**
- "I'm pretty sure this is right" — certainty is not research. If you have a belief but not a source, the decision is provisional.
- "The research will confirm it later anyway" — maybe. Write the flip trigger now; if the research confirms it, the trigger never fires, and there is no cost. If it contradicts you, the trigger is the mechanism for changing.
- "It's a small decision" — small provisional decisions accumulate. Each one that goes unlabeled becomes a hidden assumption in the foundation of subsequent decisions.

---

## Anti-pattern: flip trigger theater

Writing a flip trigger that will never fire:
- "If research shows this is completely wrong, switch" — the bar is too high; any finding short of "completely wrong" gets rationalized away
- "If the user says to change it" — this is not a research trigger, it is user permission (already implied)
- Flip triggers that depend on evidence the research won't produce

A good flip trigger identifies a specific finding that is plausible and would genuinely warrant switching. If the trigger never fires: either the decision was right (good) or the trigger was too high (bad). After Wave 2 research: review all flip triggers and check honestly whether any evidence produced should have fired them.

---

**Trace:** Autoregressive anchoring (arXiv 2511.05766) — first hypothesis becomes prior for all subsequent tokens; naive "ignore previous" doesn't break it. Canonical Path Deviation (arXiv 2602.19008) — once one off-canonical step is taken, each next step is +22.7pp more likely to also be off-canonical. The flip trigger is structural: it creates a named off-ramp so path dependency doesn't accumulate silently. Same principle as the plan's "Strongest unsupported assumption" field — name what you're betting on before you forget you made a bet.
