# Kit-Maker Design Session Log

Running capture of discovered problems, general classes, and structural fixes as they emerge during this design session. Better than memory for a long session — stays in context, tracks general classes not just specific instances.

---

## How to use this file

- Every discovered problem/mistake goes here as a GENERAL CLASS, not a specific instance.
- The specific trigger is noted for provenance, but the fix must address the class.
- Before closing any finding: scan for other manifestations of the same class that weren't mentioned.
- This file feeds directly into kit-maker design decisions.

---

## Discovered Problem Classes

---

### PROBLEM CLASS 1: Scope-completion blindness

**General class:** AI completes the defined scope of a task and stops. Doesn't step back to ask: was that scope right? Did I get everything? Are there adjacent problems I missed? What does this suggest beyond the task? What alternatives didn't I consider?

**Manifestations:**
1. No self-review after task output — delivers and stops
2. Fixes the specific example given, not the general pattern class
3. Only scans for the specific mentioned problem, misses same-class problems elsewhere
4. Accepts the task definition as given without questioning whether it's the right task
5. Doesn't ask "what does this suggest?" after completing research/extraction
6. Generates alternatives only when explicitly asked, not proactively after completing any approach
7. If shown one broken thing, fixes that thing; doesn't scan for other instances of the same breakage pattern

**Where this fired in this session:**
- After claude_process extraction: delivered output and stopped, no review of what else the material suggested
- Fixing "no self-review after extraction" specifically (memory entry) instead of this general class
- Every memory entry that captures one specific rule instead of naming the class

**Structural fix needed in the kit-maker:**
- Mandatory reflection checkpoint at the end of every phase: "what patterns emerged (not just specific findings)? What alternatives were not considered? Are there adjacent problems I haven't looked at? What does this suggest for the next phase?"
- Before fixing any specific problem: name the general class first, scan for other instances, THEN fix
- Alternative generation is not optional after any first-pass output: before treating any output as done, require at least one explicitly different approach to be considered
- This should NOT be a rule ("try to review your work") — it needs to be a structural phase gate that fires mechanically

**Research angle it generates:** Angle 77 (structural triggers for post-task reflection) — already added. Also generates:
- How do other disciplines (medicine's "cognitive forcing strategies", chess post-mortem analysis, after-action reviews) structure mandatory stepping-back? Can those mechanisms be adapted for LLM agents?
- Does making alternative generation mandatory (even when only one approach seems right) actually improve output, or does it just add overhead?

---

### PROBLEM CLASS 2: Memory as capture mechanism during long sessions

**General class:** Using cross-conversation memory for in-session pattern tracking. Memory is designed for cross-session persistence, not for accumulating discoveries within a long design session. Memory saves feel like action but are unreliable: may not load, can't be scanned easily, can't accumulate a running picture.

**Manifestations:**
- Each discovered mistake gets its own memory file — fine for one or two, breaks down at ten
- The memory index (MEMORY.md) doesn't surface patterns — just individual findings
- Can't easily review "what have we found so far" from memory alone
- Memory saves feel like tracking but don't create a usable artifact for the kit itself

**Where this fired in this session:**
- Multiple memory files for individual mistakes, no aggregated picture
- User had to point this out explicitly

**Structural fix needed:**
- DESIGN_LOG.md (this file) as the in-session capture mechanism
- Memory for ONLY durable cross-session preferences and project state
- At session end: review DESIGN_LOG.md, promote durable items to memory or directly into kit files
- The kit-maker itself should output a similar log during kit generation — discoveries go into the log, not into ad-hoc memory

---

### PROBLEM CLASS 3: Bandaid fixes (specific-instance correction instead of class correction)

**General class:** When a problem is identified with a specific example, the fix targets only that example. The underlying class is not named, not fixed, and other instances are not scanned for. This means the problem keeps recurring in different forms.

**Note:** This is a sub-manifestation of Problem Class 1 (scope-completion blindness), but worth naming separately because it has a distinct fix mechanism.

**Manifestations:**
- User says "you didn't review your work after the extraction" → memory entry says "do a self-review after data extraction" (specific) instead of naming scope-completion blindness (class)
- User says "you didn't suggest anything new" → fix is "suggest more" for this conversation, not a structural change
- User says "you only fixed one problem" → agent fixes that one problem without scanning for same-class problems

**Structural fix needed:**
- When any problem is identified: FIRST ask "what general class does this belong to?" SECOND scan for other manifestations of that class. THIRD fix the class, not the instance.
- This is a discipline that needs to be in the kit-maker's self-discipline rules
- Kit-maker should model this behavior explicitly when it identifies problems during kit construction

---

## Open structural questions (for design phase)

1. How does the mandatory reflection checkpoint work mechanically without becoming ritual compliance? ("I reflected — moving on" without actually reflecting)
2. What's the right granularity for "general class" naming? Too specific = bandaid; too general = no actionable fix
3. Should the DESIGN_LOG be part of the kit-maker's output (i.e., the kit-maker itself maintains a log like this during kit generation)?

---

## Angles generated by this log (not yet in RESEARCH_ANGLES.md)

- 78. [FROM DESIGN_LOG] Mandatory stepping-back mechanisms from other disciplines — medicine's cognitive forcing strategies, chess post-mortem, after-action reviews; how do they structure forced reflection? What's transferable to LLM agents?
- 79. [FROM DESIGN_LOG] Mandatory alternatives generation — evidence for/against forcing at least one alternative after any first-pass output; does it improve quality or just add overhead?
- 80. [FROM DESIGN_LOG] General-class identification before specific-instance fixing — research on problem-solving that addresses root class vs symptom; any evidence on which produces better long-term outcomes?
