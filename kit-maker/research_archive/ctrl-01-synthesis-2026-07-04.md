# CTRL-01 Synthesis — Control Mechanism Generation Rules
**Date:** 2026-07-04
**Source angles:** ctrl-01-a4 (adversarial — COMPLETE); ctrl-01-a1 (skills), ctrl-01-a2 (hooks), ctrl-01-a3 (agents/permissions) — ALL MISSING
**Research gap:** This synthesis is based on one completed angle (adversarial) plus ENTRYPOINT.md's Phase 6 requirements. The practitioner, documentation, and GitHub angles were not completed. Conclusions are adversarially grounded but lack positive-evidence confirmation. Treat as PROVISIONAL until the three missing angles run.

---

## Research Gap Statement

Three of four planned angles were never written. The adversarial angle (A4) provides comprehensive failure-mode coverage for all four mechanisms. The missing angles would have provided:
- A1 (skills): Claude Code documentation, real-world skill examples from GitHub, trigger pattern libraries
- A2 (hooks): Confirmed hook syntax, platform-specific patterns, production use cases
- A3 (agents/permissions): Real settings.json examples, permission schema documentation, custom agent type definitions

This synthesis can state what to avoid (from A4) with high confidence. When to generate and the structural minimum for each mechanism are constructed from adversarial inference + ENTRYPOINT lean-core constraint, not from positive documentation research. The implementation spec sections are the highest-risk outputs in this document.

**Saturation state: NOT SATURATED for positive recommendations. SATURATED for failure modes.**

---

## 1. Per-Mechanism Decision Rules

### 1.1 Skills

**Generate when:**
- The kit has a domain with an established procedural pattern that repeats across sessions (e.g., a research kit with a consistent claim-extraction procedure, a code-review kit with a fixed finding-classification sequence)
- The procedure requires more than ~5 ordered steps with specific sub-conditions — too long for a CLAUDE.md rule, too structured for free-form instruction
- The trigger condition is unambiguous and non-overlapping: there is exactly one natural entry point for this procedure, and the agent would plausibly miss it without an explicit trigger
- The domain is stable: the procedure references tool names, command syntax, or workflow patterns unlikely to change within 1-2 years

**Do not generate when:**
- The behavior is expressible as 1-3 CLAUDE.md rules (prefer the simpler mechanism; every skill is a maintenance unit)
- The trigger condition overlaps with another skill or with baseline agent behavior (invocation becomes unpredictable)
- The skill body would exceed ~300 tokens (compliance degrades before it improves; content length is the primary compliance killer for skills)
- The procedure references specific tool syntax likely to change (creates stale-harm risk: outdated prose rules produce gaps, outdated procedural steps produce wrong outputs)
- The kit domain has no established procedure to encode (a skill written during kit construction that encodes the author's best guess is not a skill — it is a draft procedure without validation)
- The kit already has a comprehensive CLAUDE.md (adding skills multiplies conflict surface; CLAUDE.md rules and skill procedures for the same situation produce non-deterministic resolution)

**Structural minimum if generated:**

```markdown
# [Skill Name]

[One sentence: when to invoke this skill — the trigger condition stated as observable context, not subjective judgment]

## When to use
[2-3 specific triggering signals, each binary-checkable]

## Procedure
1. [Step 1 — specific action, not "consider doing X"]
2. [Step 2]
3. [Step 3 — maximum 5-7 steps; if more, split into two skills]

## Done when
[Single binary exit condition: observable state that means this procedure is complete]

## Do not apply when
[1-2 explicit exclusion conditions]
```

No PRO TIPS sections. No rationale prose. No extended edge cases. Under 200 tokens preferred; hard cap at 300 tokens. Every instruction must be specific enough that two different agents following it would produce the same decision at each step.

---

### 1.2 Hooks

**Generate when:**
- The desired behavior is structurally impossible to express as a CLAUDE.md instruction (e.g., running a linter on every file write cannot be delegated to agent self-monitoring; it requires an external trigger)
- The hook trigger fires infrequently and predictably (e.g., Stop event, not PostToolUse on Write)
- The hook command is cross-platform verified: the kit author has tested on both the primary target platform AND named the other platforms where it will NOT work
- The hook is fast (sub-500ms); the hook does not require network access; the hook does not parse tool output (format-fragile)
- The hook enforces a constraint that CANNOT be enforced via agent instruction alone AND whose unenforced state produces demonstrable harm (not theoretical risk)

**Do not generate when:**
- The desired behavior can be expressed as a CLAUDE.md instruction (agent-side enforcement is softer but not brittle; prefer it for everything that the agent can realistically self-enforce)
- The trigger event fires frequently (PreToolUse/PostToolUse on Bash, Write, or any high-frequency tool) — frequent hooks impose constant overhead and fire on legitimate operations
- The hook needs to be cross-platform and cross-platform correctness is unverified
- The hook requires external dependencies or network access (introduces blocking, failure modes, security surface)
- The hook's purpose is enforcement that should be agent self-enforcement (hooks add brittle mechanical enforcement to what is better expressed as behavioral instruction; when the hook breaks, the constraint disappears silently)
- The hook parses Claude Code tool output to extract values (output format is not a versioned contract; any update to Claude Code can break the hook with no notification)

**Structural minimum if generated:**

```json
{
  "hooks": {
    "[EventName]": [
      {
        "matcher": "[tool-name-or-empty-string]",
        "hooks": [
          {
            "type": "command",
            "command": "[shell command — single-line, no external deps, fast]"
          }
        ]
      }
    ]
  }
}
```

Placement: `.claude/settings.json` (project-level) for kit-specific hooks.

Event names: `PreToolUse`, `PostToolUse`, `Notification`, `Stop`, `SubagentStop`

For `PreToolUse`/`PostToolUse`: `matcher` is the tool name (e.g., `"Bash"`, `"Write"`, `"Edit"`). For `Stop`: matcher is ignored.

A hook that blocks on non-zero exit (blocking mode) must be documented as blocking in the kit. A non-blocking hook that silently fails is worse than no hook — it creates false enforcement confidence.

Platform note: hooks run in the shell Claude Code is configured to use. The primary shell in this environment is PowerShell. Bash-syntax hooks will fail silently on Windows. Any kit generating hooks must declare the target platform or generate platform-conditional hooks.

---

### 1.3 Custom Agent Types

**Generate when:**
- The kit has 3+ clearly distinct operational modes where the behavioral profile (tool access, scope, autonomy level) differs substantially between modes — not just different task names, but different capability boundaries
- The differentiation is enforced by something other than a semantic label: the types correspond to different permission sets, different CLAUDE.md sections, or different procedure files
- The kit domain requires genuine capability isolation (e.g., a read-only auditor vs. a write-enabled builder in a code review kit)

**Do not generate when:**
- The differentiation is semantic only: a name change with no distinct capability profile
- The type's defining behaviors could be expressed as a skill (prefer skills for procedure, types only for genuine capability isolation)
- The kit has fewer than 3 clearly distinct operational modes
- The type's scope overlaps more than 50% with another type or with the default agent
- The types were invented during kit design rather than identified from Phase 2 domain brief quality dimensions

**Structural minimum if generated:**

Custom agent types in Claude Code are expressed as distinct CLAUDE.md files or as separate instruction profiles, not as a runtime type registry. A kit generating "custom agent types" concretely means: a separate instruction file per operational mode, referenced explicitly from ENTRYPOINT. Not a conceptual taxonomy — a concrete file per mode.

**Default stance: generate 0. The structural overhead of type separation is justified only when genuine capability isolation exists. A kit with 5 type definitions and no capability differentiation is worse than a kit with one CLAUDE.md.**

---

### 1.4 Permissions (settings.json allow/deny)

**Generate when (allow-list only, by default):**
- The kit's own workflows require specific tool permissions that are not in the default allow-list (generate the allow-list entries the kit needs to function; do not guess what the kit might need)
- The kit runs as a subagent and the parent context needs to grant a specific, bounded capability
- The allowed tools are specifically identified in Phase 2 domain brief and Phase 6 plan

**Generate deny/restriction entries when:**
- The kit has a clear threat model for what the restriction prevents (not "this seems risky")
- The restriction would not be triggered by the kit's own operations (circular restrictions that block the kit's own workflows are documented failure mode)
- The kit targets a single platform and cross-platform correctness of the restriction has been verified on that platform
- The desired constraint CANNOT be expressed as a CLAUDE.md instruction ("never delete files outside output/" is enforceable as prose; add a restriction only when prose enforcement is demonstrably insufficient)

**Do not generate:**
- Comprehensive restriction sets without a documented threat model
- Any restriction that needs exceptions for the kit's own operations
- Path-based restrictions that use Unix path separators on a Windows-primary kit
- Restrictions targeting tools the user considers obviously safe (trains bypass behavior)

**Structural minimum if generated (allow-list only):**

```json
{
  "permissions": {
    "allow": [
      "Bash(git *)",
      "Bash(npm *)"
    ]
  }
}
```

Pattern: `"ToolName(glob-pattern)"` for scoped allow; `"ToolName"` for full allow.

Placement: `.claude/settings.json` (project-level). User-level settings silently override project settings — document this when generating project-level restrictions.

---

## 2. Implementation Specs — Two Highest-Value Mechanisms

### 2.1 Skills — Complete Template

**Highest kit value because:** Skills are the only mechanism that encodes domain-specific procedural knowledge that survives across sessions. CLAUDE.md encodes behavioral rules; skills encode step-by-step procedures. For kits with established domain procedures (research workflows, review processes, structured generation tasks), skills are the primary value-add mechanism.

**Risk note (from A4):** Skills are also the least stable mechanism (version stability ranking: least stable). Procedural content that references specific tool names, invocation syntax, or output formats is the first thing to go stale. The template enforces brevity and behavioral anchoring precisely because longer skills have lower per-rule compliance AND higher staleness surface.

**Complete template — domain-specific example: research synthesis kit**

```markdown
---
description: Extract and classify claims from a research source. Use when reading a paper, article, or documentation file to feed the research archive.
---

# Claim Extraction

**Trigger:** You have a source document open and need to extract findings for the research archive.

## When to apply
- Reading a paper, article, or documentation page as part of a research angle
- Filling a research archive file with claims from a single source
- NOT for synthesis across multiple sources (use the synthesis procedure instead)

## Procedure

1. **Identify the claim type:** For each finding in the source, classify as one of:
   - `empirical` — a study, measurement, or controlled experiment is cited with a sample size or comparison condition
   - `consensus` — multiple practitioners or sources independently state the same thing without controlled evidence
   - `anecdote` — a single example, case, or practitioner opinion

2. **Extract the claim:** State the finding in one sentence. Include: the specific mechanism or number (not "improved performance" — "improved pass@1 by 12 percentage points"), the scope condition (what it applies to), and the practical implication (what this means for the kit).

3. **Record the source:** URL and the specific section or paragraph where the claim appears.

4. **Flag conflicts:** If this claim directly contradicts a claim already in the archive, mark both with `[CONFLICT]` and record what differs.

5. **Stop at saturation:** If the last 5 claims extracted are all `anecdote` classification and no new claim keys are appearing, saturation is reached for this source. Do not force extraction.

## Output format per claim
```
claim: [one-sentence finding with mechanism/number + scope + implication]
type: [empirical | consensus | anecdote]
source: [URL] — [section/paragraph]
conflict: [none | CONFLICT with [claim key]]
```

## Done when
All distinct findings in the source have a claim entry. Duplicate phrasings of the same finding are collapsed to one entry.
```

**Why this structure works:**
- Trigger condition is unambiguous (reading a source for the archive — one natural entry point)
- Steps are specific and binary-checkable (classify as one of three types — no judgment words)
- The output format enforces structure without requiring another skill to parse it
- The done condition is observable (all distinct findings have an entry)
- Under 300 tokens
- No PRO TIPS, no rationale prose, no extended edge cases

---

### 2.2 Hooks — Complete settings.json Snippet

**Highest kit value because:** Hooks are the only mechanism that enforce behavior independent of the agent's in-context attention. A CLAUDE.md rule competes for attention; a Stop hook fires unconditionally. For kits where the single most important property is "something must always happen at task completion" — the Stop hook is the correct mechanism.

**Most common kit use case:** Ensuring a session summary or state update is written at every task stop. This is the canonical use case where agent self-enforcement fails (the agent declares done before writing the summary) and a hook provides structural enforcement.

**Complete settings.json snippet:**

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "echo '[HOOK] Session stopped. Verify project-state.md is current before next session.' >> .claude/hook-log.txt"
          }
        ]
      }
    ]
  }
}
```

**Platform note for this environment (Windows/PowerShell primary):**

The above uses `echo` and `>>` which work in both PowerShell and bash. For PowerShell-specific hooks:

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "pwsh -Command \"Add-Content -Path '.claude/hook-log.txt' -Value '[HOOK] $(Get-Date -Format o) Session stopped'\""
          }
        ]
      }
    ]
  }
}
```

**What NOT to use hooks for (common kit mistake):**

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "npm run lint"
          }
        ]
      }
    ]
  }
}
```

This fires on every file write. It fires on generated files, test fixtures, log files, and output files — all of which may legitimately fail lint. The developer must then distinguish hook-triggered failures from actual errors. This is the PostToolUse-on-high-frequency-tool failure mode.

**Correct alternative:** Use a PreToolUse hook on a specific, infrequent tool (e.g., `git commit`) rather than on all file writes.

---

## 3. Phase 6 Checklist Addition — Exact Text

Add these questions to the Phase 6 per-file loop **after Step 1 (Draft)** and **before Step 2 (Gap check)**, specifically when the file being drafted is a kit-infrastructure file (not domain procedure, not behavioral contract):

---

**Mechanism selection gate (fires before drafting any skills, hooks, custom agent types, or settings.json entries):**

- [ ] **Skills:** Is the procedure to be encoded in this skill (a) too long for a CLAUDE.md rule (>5 ordered steps with sub-conditions), (b) triggered by an unambiguous, non-overlapping condition, AND (c) stable enough that the referenced tool names and syntax are unlikely to change? If ANY of these is NO: do not generate the skill — express as a CLAUDE.md rule instead or omit. If generating: confirm the body is under 300 tokens before marking this item complete.

- [ ] **Hooks:** Is the behavior to be enforced (a) structurally impossible to achieve via CLAUDE.md instruction alone, (b) triggered by an infrequent event (not PostToolUse on Write/Bash/Edit), AND (c) tested for correctness on the target platform (state the platform explicitly)? If ANY is NO: do not generate the hook — express as a CLAUDE.md instruction instead or omit. If generating on a Windows-primary kit: confirm the command uses PowerShell syntax, not bash syntax.

- [ ] **Custom agent types:** Does the kit have 3+ operationally distinct modes where the capability profile (not just the task name) differs? If NO: do not generate custom types. Each type must correspond to a concrete file, not a conceptual label.

- [ ] **Permissions (allow-list):** Are the tools being allowed explicitly required by the kit's own workflows as identified in Phase 2 and Phase 5 plan? If a tool is in the allow-list that no Phase 5 plan step references: remove it. The allow-list should match the plan's tool-access-grant fields, not anticipate hypothetical needs.

- [ ] **Permissions (deny-list/restrictions):** Is there a documented threat model for what each restriction prevents? If not: do not generate restrictions. The default stance is: generate only allow-list entries for the kit's own required operations; zero deny-list entries unless a specific threat model is documented.

**Mechanism count check (fires after all mechanism files are drafted, before Phase 7):**

- [ ] Count the total number of mechanism files generated (skills + hook entries + agent type files + settings.json entries). For any count above: 2 skills, 1 hook entry, 0 custom agent types — state the justification explicitly. A kit generating more than these without documented justification per file has violated the lean-core constraint (ENTRYPOINT Hard Rule 13 compliance: rule density degradation is monotonic from 2+ instructions; every mechanism file added to the context at runtime is a rule-density cost).

---

## 4. Convergent Findings

These findings are stated with high confidence from the adversarial angle alone. The missing angles would confirm or refine — they would not reverse these conclusions, because the adversarial reasoning is grounded in structural properties of the mechanisms, not in empirical measurements.

**CF-1: The preferred mechanism hierarchy is: CLAUDE.md > Skill > Hook > Custom type > Restriction.**
Any behavior expressible at a higher level in this hierarchy should not be expressed at a lower level. This appears in: A4 (explicit in every mechanism's "when NOT to generate" section), ENTRYPOINT.md (Hard Rule 13 lean-core constraint), ENTRYPOINT.md (rule density guidance). The hierarchy is the consistent through-line.

**CF-2: Minimalism reduces maintenance burden more than it reduces behavioral coverage.**
An absent mechanism produces a gap (the agent operates on defaults). A wrong or stale mechanism actively misleads (wrong procedural steps produce wrong outputs; incorrect hooks block legitimate operations). The asymmetry between "absent mechanism = gap" and "wrong mechanism = active harm" consistently supports default-minimal posture. A4 states this explicitly. ENTRYPOINT.md's lean-core constraint enforces it structurally.

**CF-3: Mechanism count is a cost to minimize, not a completeness metric.**
This matches the ENTRYPOINT.md rule density finding (monotonic degradation from 2+ instructions) applied to mechanism files. A kit with 8 mechanisms has 8 maintenance surfaces, 8 potential conflict points, and 8 staleness risks. The goal is the smallest mechanism set that produces the required behavioral change — not comprehensive coverage.

**CF-4: Every generated mechanism requires explicit justification; no mechanism is generated by default.**
The justification format implied by A4 and enforced by ENTRYPOINT: "this behavior is impossible to express as [simpler mechanism] because [specific reason]." If the justification cannot be stated, the mechanism should not be generated. This applies to each skill file, each hook entry, each type definition, and each permission entry individually.

---

## 5. Divergences

Given only one completed angle, these are "provisional divergences" — places where the adversarial angle's recommendations may conflict with what the missing positive-evidence angles would show.

**DIV-1: Adversarial angle recommends 0 hooks by default; production tooling angle (missing A2) may show legitimate common use cases.**
A4 states "generate 0 hooks by default; add only when the behavior is impossible to express as CLAUDE.md instructions." The missing practitioner angle might show that hooks for session-end logging or git-commit validation are common, well-functioning, and not as fragile as the adversarial analysis suggests for the specific use cases. Resolution pending A2. Current default: 0 hooks, with the Stop-hook exception documented in section 2.2.

**DIV-2: Adversarial angle's 300-token cap for skills is an inference, not a measured threshold.**
A4 states "compliance degrades before it improves" for skills over ~300 tokens, citing the general rule-density finding. This is an inference from the rule-density research applied to skills, not a measured threshold for skills specifically. The missing A1 angle (skills documentation, examples from production) might show that well-structured skills at 400-600 tokens still produce reliable behavior if the structure is right (numbered steps, binary conditions). Resolution pending A1. Current guidance: treat 300 tokens as a soft warning threshold, not a hard cut-off.

**DIV-3: Adversarial angle is more pessimistic about custom agent types than the broader agent framework literature suggests.**
A4 recommends 0 custom types by default. The kit-planning angles (A1-A3 in the kit-planning cluster) show that typed agent roles (MetaGPT's Architect, Engineer; CrewAI's agent definitions) are a documented source of behavioral improvement when they correspond to genuine capability differentiation. The adversarial angle's concern is about *semantic* typing with no capability differentiation — this is a valid concern but doesn't invalidate genuine typing. The distinction (semantic vs. capability) is the key, not blanket avoidance. Resolution: the "when to generate" criteria in section 1.3 incorporate this distinction.

---

## 6. Highest-Value Mechanisms by Kit Type

**Research/synthesis kits (primary use case in this project):**
- Highest value: 1-2 skills (claim extraction procedure, saturation check procedure)
- Second value: Stop hook for session-state write (state preservation between sessions)
- Low value: custom agent types (research mode and synthesis mode are better expressed as separate CLAUDE.md sections or procedure files, not runtime types)

**Code review kits:**
- Highest value: 1 skill (finding classification and reporting procedure)
- Second value: PreToolUse hook on git commands if the kit needs pre-commit enforcement
- Low value: most other hooks (fire too frequently or are expressible as CLAUDE.md rules)

**Multi-phase build kits:**
- Highest value: CLAUDE.md + TASK_TEMPLATE (the kit-maker's own solution — phase gating via structured document fields, not mechanisms)
- Medium value: 1 skill per domain-specific procedure (if domain has stable procedural patterns)
- Low value: custom agent types unless the kit genuinely differentiates a read-only auditor from a write-enabled builder

**General principle:** The more established the domain procedure, the higher the value of encoding it in a skill. The more uncertain the domain (first research run, novel use case, rapidly changing tooling), the lower the skill value and the higher the CLAUDE.md + minimal mechanisms value.

---

## 7. Version Stability Reference

From A4 (most to least stable):
1. CLAUDE.md prose behavioral rules — most stable (degrades gracefully on outdated references)
2. Permission allow-list entries — stable (tool names change infrequently)
3. Permission deny-list/restriction entries — moderately stable (format stable; behavioral coverage fragile)
4. Hook configuration format — moderately stable container, brittle content
5. Custom agent type definitions — fragile (advisory labels erode silently)
6. Skill procedural content — least stable (references tool names, syntax, output formats; active harm potential when stale)

**Implication for maintenance policy:** Any kit with skill files needs an explicit maintenance trigger — "when Claude Code updates, re-read all skill files and verify tool names and syntax are current before using the kit." This maintenance burden should be documented in the kit's weakness_register.md entry.

---

## Saturation Verdict

**NOT SATURATED.** The adversarial angle (A4) reaches stable conclusions on failure modes and when-NOT-to-generate conditions. The three missing angles (practitioner examples, documentation syntax, GitHub production patterns) are required before the positive recommendations (when to generate, structural minimums, implementation specs) can be stated with high confidence.

The synthesis document is usable as a conservative guide: follow the "do not generate" rules with high confidence; follow the "when to generate" rules as provisional guidance pending the missing angles.

**Highest-confidence outputs:**
- The mechanism hierarchy (CF-1 through CF-4)
- The failure modes per mechanism
- The Phase 6 checklist addition text
- The default-minimal posture recommendation

**Lowest-confidence outputs:**
- The 300-token skill body cap (inference, not measured)
- The specific settings.json hook syntax (not verified against current Claude Code documentation)
- The custom agent type structural minimum (no positive examples examined)

When the missing angles run, update sections 2.1 (skills template) and 2.2 (hooks snippet) first — these are the most implementation-dependent and most likely to need correction.

---

*Written to: kit-maker/research_archive/ctrl-01-synthesis-2026-07-04.md*
*Blocking cluster for PROVISIONAL markers: ctrl-01-a1 (skills docs), ctrl-01-a2 (hooks docs), ctrl-01-a3 (agents/permissions docs)*
