# CTRL-01 A4 — Adversarial Research

**Angle:** Failure modes, when NOT to generate, maintenance burden
**Method:** Adversarial reasoning from first principles — no documentation lookup
**Date:** 2026-07-04

---

## Skills — failure modes and when NOT to generate

**Invocation failure (silent non-use)**
Skills require the agent to self-identify that a skill applies and then explicitly invoke it. If trigger conditions are ambiguous, overlap with normal behavior, or aren't salient in the current context, the agent proceeds without invoking. The skill exists but produces no behavioral change. This is the dominant failure mode: the mechanism is present, costs maintenance, and does nothing.

**Trigger over-fire**
Broad trigger conditions cause skills to load on tasks where they're irrelevant. Each invocation consumes tokens and injects procedural content into working context, potentially crowding out task-relevant information.

**Content length defeating compliance**
A skill loaded into context is not guaranteed to be followed in full. Long skills — especially those with "PRO TIPS" sections, extended rationale, or enumerated edge cases — are read at attention weight proportional to relevance. The more prose, the lower the per-sentence compliance probability. A 2,000-token skill may produce the same behavioral effect as a 200-token skill with worse reliability on the tail rules.

**Conflict with CLAUDE.md**
If CLAUDE.md contains a rule and a skill contains a contradicting procedure for the same situation, the agent resolves the conflict non-deterministically. The conflict is invisible at authoring time; the outcome is unpredictable at runtime. Kits that generate both a comprehensive CLAUDE.md and multiple skills multiply this risk with each skill added.

**Compounding conflict between co-loaded skills**
Two skills invoked in the same task may give contradictory procedural guidance for an overlapping sub-task (e.g., both a "research" skill and a "writing" skill have instructions about citation format that differ). Neither is wrong in isolation; together they produce inconsistency.

**Staleness causing active harm**
An outdated CLAUDE.md instruction that refers to a renamed tool is a gap — the agent ignores the specific reference and continues. An outdated skill procedure that gives wrong step-by-step instructions actively misleads. Stale skills cause wrong outputs, not just missing outputs. The harm-per-unit-staleness of a skill is higher than for prose rules.

**Maintenance surface per skill**
Every skill file is a separate maintenance unit. A kit generating 8 skills creates 8 files, each requiring updates on tool renames, command syntax changes, and behavioral assumption changes. If the kit author is not the maintainer, this burden transfers silently to the kit user.

**When NOT to generate a skill:**
- The behavior is already expressible as a CLAUDE.md rule (prefer the simpler mechanism)
- The procedure references tool-specific syntax that is likely to change
- The trigger condition overlaps with another skill or with baseline agent behavior
- The skill body exceeds ~300 tokens (compliance degrades before it improves)
- The kit domain has no established procedural pattern to encode

---

## Hooks — failure modes and when NOT to generate

**Cross-platform shell breakage**
Hooks execute shell commands. A hook written for bash (using `grep`, path separators with `/`, `export VAR=x`) breaks silently or with cryptic errors on Windows (PowerShell primary, POSIX shell secondary). A kit author who develops on Linux ships a hook that is inert or harmful on Windows. This is not a theoretical edge case — the env context block shows the primary shell is PowerShell.

**Unexpected fire on legitimate operations**
A PostToolUse hook on `Write` fires every time any file is written. If the hook validates format or runs linting, it fires on generated files, test fixtures, log files, and output files — all of which may legitimately fail the lint check. The developer must then distinguish hook-triggered failures from actual errors, adding cognitive load.

**Silent failure masking bugs**
If a hook script exits non-zero but is not in blocking mode, the failure is invisible. The agent proceeds as though the hook ran correctly. If the hook was supposed to enforce a constraint (e.g., "check that tests pass before committing"), the constraint is unenforced silently.

**Blocking hook deadlock**
A blocking hook that hangs (e.g., waits for a network resource, or runs an infinite loop) blocks the entire agent session. There is no timeout by default. The developer sees a hung session with no diagnostic output.

**Circular trigger**
A hook on file writes triggers a script that writes a log file, which triggers the hook again. If the hook doesn't exclude its own output path, this loops until the process is killed.

**Context injection interference**
Hooks that append content to agent context (e.g., add a reminder after each tool use) inject text at a point where the agent is mid-task. The injected content appears as an interruption in the reasoning chain, potentially derailing the current step.

**Security surface**
Hooks run arbitrary shell commands with the permissions of the agent process. A hook that incorrectly handles untrusted input (e.g., a file path from tool output) is a command injection vector. Kit-generated hooks that are copy-pasted without audit carry this risk.

**Maintenance brittleness on output format**
A hook that parses tool output to extract a value breaks when Claude Code changes the output format — which is not a versioned contract. The hook author has no notification mechanism.

**When NOT to generate a hook:**
- The desired behavior can be expressed as a CLAUDE.md instruction (agent-side enforcement is softer but less brittle)
- The hook needs to be cross-platform and the kit author hasn't explicitly handled both environments
- The trigger event fires frequently (every file write, every bash execution) and the hook is not extremely fast
- The hook requires external dependencies or network access
- The hook's purpose is enforcement that the agent should self-enforce (hooks add brittle mechanical enforcement to what is better expressed as behavioral instruction)

---

## Custom agents — failure modes and when NOT to generate

**Used when a simpler mechanism would work**
If the kit generates a "ResearchAgent" type, users route research tasks to it even when a single CLAUDE.md rule or a skill invocation would have been sufficient. The agent type creates perceived structure that doesn't map to actual behavioral differentiation.

**Type definition stales into false precision**
A custom agent type hardcodes assumptions about available tools, capability scope, or recommended workflows. Users believe the type enforces these constraints. In practice, the type is advisory — the agent retains full capability. When the type definition becomes outdated, it actively misleads about what the agent will do.

**Proliferation and selection overhead**
A kit generating 5 agent types (ResearchAgent, ReviewAgent, PlanningAgent, BuildAgent, AuditAgent) imposes selection cost at every task handoff. Users must reason about which type applies, and they consistently choose incorrectly in ambiguous cases. The selection overhead often exceeds the behavioral benefit.

**Unclear differentiation between types**
Two types with similar names and partially overlapping descriptions produce inconsistent routing. Agents and users choose between them using irrelevant surface features (which name sounds closer to the current task). The behavioral differentiation was never meaningful enough to justify the separation.

**Conflict layering**
Agent type instructions add a third rule layer on top of global CLAUDE.md and project CLAUDE.md. Rule resolution precedence is non-obvious. Type-specific rules that contradict project rules create a conflict that neither the user nor the agent can easily trace.

**When NOT to generate a custom agent type:**
- The differentiation is purely semantic (a name change with no distinct capability profile)
- The type's scope overlaps >50% with another type or with the default agent
- The type's defining behaviors could be expressed as a skill (prefer skills for procedure, types for genuine capability isolation)
- The kit has fewer than 3 clearly distinct operational modes

---

## Permissions — failure modes and when NOT to generate

**Restricting a tool the kit itself needs**
A kit that restricts Bash execution to prevent accidental destructive commands may block hooks, sub-processes, or build steps that the kit's own workflows require. The kit author creates a configuration that breaks the kit's own functionality.

**No escape hatch for legitimate exceptions**
Permissions set in settings.json require manual edits to override. A read-only restriction on a directory that normally holds generated output becomes a blocker during debugging. The user must locate the right settings file, understand the format, make the edit, and potentially re-trigger the tool — all under time pressure.

**Friction training users to bypass**
If a kit's permission restrictions generate frequent prompts for operations that the user considers obviously safe (e.g., reading a config file), users learn to approve without reading. The prompts exist but are cognitively skipped. The security value is zero; the friction cost is real.

**Platform-path mismatch**
Permission rules that reference paths or glob patterns (e.g., `**/*.sh`) may not resolve consistently across platforms. A rule designed to restrict execution of shell scripts on Unix may be inert on Windows where scripts have different extensions.

**Settings file precedence invisibility**
Project settings, user settings, and global settings have a precedence hierarchy. A permission restriction set in project settings may be silently overridden by a permissive user setting. The kit author intended a restriction; the user never sees the prompt because their user settings already allow it. The kit's intended constraint is unenforced with no diagnostic.

**Accumulated exception drift**
Over time, a restrictive settings.json accumulates exception entries as users hit legitimate blocks. The file becomes a graveyard of one-off allows that collectively undermine the original restriction policy. The signal-to-noise ratio of the settings file degrades.

**When NOT to generate permission restrictions:**
- The restriction would need exceptions for the kit's own operations (circular)
- The kit doesn't have a clear threat model for what the restriction is preventing
- The kit targets multiple platforms and cross-platform correctness of the restriction is unverified
- The desired constraint can be expressed as a CLAUDE.md instruction ("never delete files outside `output/`")

---

## Default stance recommendation (with reasoning)

**Recommendation: Generate minimal mechanisms by default, add by exception.**

Reasoning:

1. **Asymmetric harm of wrong mechanisms vs. absent mechanisms.** An absent mechanism is a gap — the agent operates on defaults. A wrong or outdated mechanism actively misleads. A skill that gives incorrect procedural guidance produces wrong outputs. A hook that fires incorrectly breaks legitimate operations. The downside of excess is higher than the downside of minimalism.

2. **Each mechanism is a maintenance liability with no automatic expiry.** A generated file doesn't degrade gracefully — it sits in the kit indefinitely, accumulating staleness without any signal to the user. A kit with 10 mechanisms has 10 maintenance surfaces. A kit with 3 has 3. The cost of minimalism is deferral; the cost of comprehensiveness is permanent ongoing work.

3. **Mechanisms interact multiplicatively.** A skill, a hook, a CLAUDE.md rule, and a permission setting may each be internally coherent but produce unexpected outcomes in combination. Each added mechanism multiplies the interaction surface. Conflict resolution between mechanisms is non-deterministic at the margin.

4. **Users don't prune.** "Generate comprehensive surface, prune by exception" assumes users will remove the mechanisms that don't fit. In practice, users treat generated files as authoritative and leave them intact. "Prune by exception" becomes "ship everything permanently."

5. **The kit's discipline should apply to itself.** If the kit is designed to promote lean, purposeful scaffolding, generating a comprehensive surface is self-defeating. The kit should embody the principle it teaches.

**Concrete default thresholds:**
- CLAUDE.md: always generate (one file, highest behavioral leverage per token)
- Skills: generate 0-2 per kit; require explicit justification for each beyond 1
- Hooks: generate 0 by default; add only when the behavior is impossible to express as CLAUDE.md instructions
- Custom agent types: generate 0 by default; add only when genuine capability isolation exists
- Permissions: generate only allow-list entries for the kit's own required operations; no restrictive entries by default

---

## Version stability ranking (most to least stable)

**1. CLAUDE.md prose behavioral rules — most stable**
Interpreted by the model, not parsed by a runtime. An instruction that references a renamed tool degrades gracefully: the agent ignores the specific reference and falls back to the general intent. Outdated CLAUDE.md instructions produce gaps, not errors. The format is plain text with no schema dependency.

**2. Permission allow-list entries — stable**
Tool names in permission lists change infrequently. The settings.json format is configuration-level stable (not tied to behavioral model versions). Additions accumulate without breaking existing entries.

**3. Permission deny-list / restriction entries — moderately stable**
Same format as allow-list but more fragile in effect: a tool rename may cause a restriction to silently stop applying. The format is stable; the behavioral coverage is not.

**4. Hook configuration format — moderately stable, command content brittle**
The hook mechanism itself (the settings.json structure, trigger events) is infrastructure-level and unlikely to change frequently. The shell commands inside hooks are highly brittle: they reference specific tool output formats, path conventions, and command syntaxes that change without notice. Split verdict: the container is stable, the content is fragile.

**5. Custom agent type definitions — fragile**
Depends on how Claude Code implements type differentiation. If types are advisory labels, changes to agent behavior make type descriptions stale without breaking anything syntactically — but the behavioral contract the type implies erodes silently. If type handling is runtime-enforced, any schema change breaks existing types.

**6. Skill procedural content — least stable**
Skills reference specific tool names, invocation syntax, UI patterns, command output formats, and behavioral assumptions — all of which can change in any Claude Code update. Skills have no versioning mechanism. A skill written against the current version of Claude Code may give incorrect step-by-step instructions after an update, with no indication to the user that the procedure is wrong. Active harm potential is highest here.

---

## Saturation verdict: SATURATED — adversarial reasoning from first principles reaches stable conclusions; all major failure classes (invocation, staleness, conflict, maintenance, platform, permission drift) are identified and cross-referenced; additional iteration would produce refinements, not new classes.
