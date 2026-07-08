# Agent Control Mechanism Decision Rules

**Purpose:** Per-mechanism decision rules and implementation specs for skills, hooks, custom agent types, and permissions. Use when building Phase 6 files that are kit-infrastructure (not domain procedure, not behavioral contract).

**When to consult:** Phase 6 per-file loop, before drafting any skill, hook entry, agent type, or settings.json entry. See ENTRYPOINT.md Phase 6 mechanism pre-draft gate.

**Trace:** CTRL-01 synthesis (ctrl-01-synthesis-2026-07-04.md) — adversarial angle A4 (ctrl-01-a4-adversarial-2026-07-04.md). Skill/hooks frontmatter format verified against real SKILL.md (brainstorming plugin) and hooks-patterns.md documentation.

---

## Mechanism hierarchy

**CLAUDE.md > Skill > Hook > Custom agent type > Permissions restriction**

Any behavior expressible at a higher level should not be expressed at a lower level. This is the primary decision rule. The entire decision tree below reduces to: "can I express this at a higher level? If yes: do it there."

---

## Skills

### When to generate

All of the following must be true:
1. The procedure has >5 ordered steps with sub-conditions (too long for a CLAUDE.md rule)
2. The trigger condition is unambiguous and non-overlapping: exactly one natural entry point, agent would plausibly miss it without explicit trigger
3. The domain is stable: tool names and syntax referenced in the procedure are unlikely to change within 1-2 years
4. The kit domain has an established procedure to encode (not a best-guess draft invented during kit construction)

### When NOT to generate

Any one of the following is sufficient to block:
- The behavior is expressible as 1-3 CLAUDE.md rules — prefer the simpler mechanism
- Trigger condition overlaps with another skill or baseline agent behavior (invocation becomes unpredictable)
- Skill body would exceed ~300 tokens — compliance degrades at this length for skills
- Procedure references specific tool syntax likely to change (stale procedural steps produce wrong outputs, not just gaps)
- The kit already has a comprehensive CLAUDE.md covering this domain — adding skills multiplies conflict surface

### Complete template (frontmatter-first)

```markdown
---
name: [skill-name-in-kebab-case]
description: [one sentence: trigger condition as observable context — what the agent sees that means this skill applies]
---

# [Skill Name]

**Trigger:** [observable context — same as description, expanded slightly if needed]

## When to apply
- [binary signal 1]
- [binary signal 2]
- NOT for [explicit exclusion]

## Procedure

1. [Step 1 — specific action with criterion]
2. [Step 2]
3. [Step 3]
[max 5-7 steps; if more, split into two skills]

## Done when
[Single binary exit condition: observable state the agent can check without judgment]

## Do not apply when
- [exclusion condition 1]
- [exclusion condition 2]
```

**Required frontmatter fields:** `name:` (kebab-case slug used for `/skill-name` invocation) AND `description:` (one sentence, shown in skill picker). Both are required. A skill missing `name:` cannot be invoked by name.

**Optional frontmatter fields:**
- `allowed-tools: Read, Grep, Glob` — restrict tool access (useful for read-only audit skills)
- `disable-model-invocation: true` — user-only invocation (for skills with side effects)
- `user-invocable: false` — Claude-only invocation (for background knowledge skills)

**Placement:** `.claude/skills/<name>/SKILL.md` — the SKILL.md filename is fixed; the directory name matches `name:`.

**Worked example — research synthesis kit:**

```markdown
---
name: claim-extraction
description: Extract and classify claims from a research source. Use when reading a paper, article, or documentation file to feed the research archive.
---

# Claim Extraction

**Trigger:** You have a source document open and are reading it as part of a research angle.

## When to apply
- Reading a paper, article, or documentation page as part of a research angle
- Filling a research archive file with claims from a single source
- NOT for synthesis across multiple sources (use the synthesis procedure instead)

## Procedure

1. For each finding, classify as: `empirical` (study/measurement cited with sample size or comparison) | `consensus` (multiple practitioners agree without controlled evidence) | `anecdote` (single example or opinion)
2. State the claim in one sentence: specific mechanism/number + scope condition + practical implication
3. Record source URL and specific section/paragraph
4. If this claim directly contradicts an existing archive claim: mark both `[CONFLICT]` and record what differs
5. If last 5 claims extracted are all `anecdote` with no new claim keys: saturation reached — stop

## Done when
All distinct findings in the source have a claim entry. Duplicate phrasings of the same finding collapsed to one.

## Do not apply when
- Synthesizing across multiple sources (use research-synthesis.md instead)
- The source is a secondary summary of other sources
```

**Note (M-48 correction):** The CTRL-01 synthesis template (research_archive/ctrl-01-synthesis-2026-07-04.md, section 2.1) omitted the `name:` frontmatter field. This file is the authoritative spec. The synthesis section 1.1 "structural minimum" also omitted frontmatter entirely — frontmatter is required.

---

## Hooks

### When to generate

All of the following must be true:
1. The desired behavior is structurally impossible via CLAUDE.md instruction (e.g., running a linter on every file write cannot be agent self-monitored)
2. The hook trigger fires infrequently and predictably (Stop event preferred; PostToolUse on Write/Bash/Edit is high-frequency and generally wrong)
3. The command syntax is confirmed correct for the target platform (confirm at generation time; the spec provides `echo`/`>>` for Windows/PowerShell; do not defer to "will test later")
4. The hook is fast (sub-500ms), requires no network access, does not parse Claude Code tool output

### When NOT to generate

Any one of the following is sufficient to block:
- The behavior can be expressed as a CLAUDE.md instruction
- The trigger event fires frequently (PostToolUse on Write, Bash, Edit)
- Cross-platform correctness is unverified for the target environment
- The hook parses Claude Code output format (not a versioned contract)
- The hook's purpose is enforcement that agent self-enforcement should handle

**Default stance: generate 0 hooks.** Add only when self-enforcement demonstrably cannot work. The Stop hook is the single most justified default.

### Complete settings.json snippet (project-level)

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

**Placement:** `.claude/settings.json` (project-level). User-level settings silently override project settings.

**Event names:** `PreToolUse`, `PostToolUse`, `Notification`, `Stop`, `SubagentStop`

**Matcher semantics:**
- `PreToolUse` / `PostToolUse`: matcher = tool name (`"Bash"`, `"Write"`, `"Edit"`)
- `Stop`: matcher is ignored (use `""`)
- `Notification`: matcher = notification type (`"permission_prompt"`, `"idle_prompt"`)

**Platform note (Windows-primary environment):** `echo` + `>>` works in both PowerShell and bash. For PowerShell-specific (with timestamp):
```json
"command": "pwsh -Command \"Add-Content -Path '.claude/hook-log.txt' -Value '[HOOK] $(Get-Date -Format o) Session stopped'\""
```

**Common failure mode to avoid:** PostToolUse on Write fires on every file write including generated files, fixtures, and logs. These often legitimately fail any lint or check. Use Stop or PreToolUse on infrequent tools (e.g., `"git commit"`) instead.

---

## Custom Agent Types

### When to generate

All of the following must be true:
1. Kit has 3+ clearly distinct operational modes where capability profile differs substantially (not just different task names)
2. Differentiation is enforced by something real: different permission sets, different procedure files, different tool access
3. Types were identified from Phase 2 domain brief quality dimensions (not invented during kit design)

### When NOT to generate

Any one of the following is sufficient to block:
- Differentiation is semantic only (name change with no capability difference)
- Fewer than 3 clearly distinct operational modes
- Type's defining behaviors could be expressed as a skill
- Types invented during kit design rather than identified from Phase 2

**Default stance: generate 0.** Semantic type labels with no capability differentiation are actively harmful — they create an illusion of organization with no enforcement.

### File format (project-level)

```markdown
---
name: [agent-type-name]
description: [one sentence — when to use this agent type; appears in agent type menu]
model: [opus | sonnet | haiku]  (optional — omit to inherit session default)
---

[System prompt as plain text. This is the full behavioral instruction for this agent type.
No special markdown structure required.
Write it as you would write a system prompt.]
```

**Placement:** `.claude/agents/<agent-type-name>.md` — the directory is `.claude/agents/`, filename = agent type name + `.md`.

**IMPORTANT correction from CTRL-01 synthesis:** The synthesis (section 1.3) described custom agent types as "separate CLAUDE.md files or separate instruction profiles." The actual format is a `.md` file in `.claude/agents/` with frontmatter + system prompt body. A kit generating "custom agent types" means concrete files in `.claude/agents/` — not modified CLAUDE.md files.

**Tool access** is NOT specified in the agent file's frontmatter at the project level — all project-level custom agents inherit the session's default tool access. Tool restrictions are configured at the plugin level (not applicable for project-generated kits).

---

## Permissions (settings.json allow/deny)

### When to generate allow-list entries

- The kit's own workflows require specific tool permissions not in the default allow-list
- The allowed tools are specifically identified in Phase 2 domain brief and Phase 5 plan
- Generate only the tools the kit's plan references — not hypothetical needs

### When to generate deny/restriction entries

All of the following must be true:
1. Documented threat model for what the restriction prevents (not "this seems risky")
2. Restriction would not be triggered by the kit's own operations
3. The constraint CANNOT be expressed as a CLAUDE.md instruction

**Default stance: generate allow-list only; zero deny-list entries unless threat model is documented.**

### Format

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

Pattern: `"ToolName(glob-pattern)"` for scoped allow; `"ToolName"` for full allow. Placement: `.claude/settings.json`.

**Note:** User-level settings silently override project-level settings. Document this when generating project-level restrictions.

---

## Quick reference by kit type

| Kit type | Highest-value mechanism | Second-value | Avoid |
|----------|------------------------|--------------|-------|
| Research/synthesis | 1-2 skills (claim extraction, saturation check) | Stop hook for session-state write | Custom agent types (modes are better as CLAUDE.md sections) |
| Code review | 1 skill (finding classification procedure) | PreToolUse on git commit (if needed) | PostToolUse on Write/Edit (too frequent) |
| Multi-phase build | CLAUDE.md + TASK_TEMPLATE (phase gating via document fields) | 1 skill per stable domain procedure | Custom types unless genuine capability isolation exists |

**General principle:** The more established the domain procedure, the higher the skill value. The more uncertain the domain (first research run, novel use case), the lower the skill value and higher the CLAUDE.md + minimal-mechanisms value.

---

## Version stability (most to least stable)

1. CLAUDE.md prose behavioral rules — most stable; degrades gracefully on outdated references
2. Permission allow-list entries — stable; tool names change infrequently
3. Permission deny-list entries — moderately stable format; behavioral coverage is fragile
4. Hook configuration format — moderately stable container; command content is brittle
5. Custom agent type definitions — fragile; advisory labels erode silently
6. Skill procedural content — **least stable**; references tool names, syntax, output formats; stale skill content produces wrong outputs, not just gaps

**Maintenance trigger:** When Claude Code updates, re-read all skill files and verify tool names and syntax are current before using the kit. Log this in the kit's `weakness_register.md`.

---

## Convergent findings (high confidence — from adversarial angle)

**CF-1:** Any behavior expressible at a higher level in the mechanism hierarchy must not be expressed at a lower level.

**CF-2:** An absent mechanism produces a gap. A wrong mechanism produces active harm. The asymmetry consistently supports default-minimal posture.

**CF-3:** Mechanism count is a cost to minimize, not a completeness metric.

**CF-4:** Every generated mechanism requires explicit justification. Format: "this behavior is impossible to express as [simpler mechanism] because [specific reason]." If the justification cannot be stated, the mechanism should not be generated.

---

## Provisional divergences (pending A1-A3 re-run)

**DIV-1:** The 300-token skill body cap is an inference from rule-density research applied to skills, not a measured threshold for skills specifically. Treat as a soft warning threshold, not a hard cut-off.

**DIV-2:** Adversarial angle recommends 0 hooks by default. Production tooling patterns (A2, not yet run) may show legitimate common use cases for Stop hooks and infrequent PreToolUse hooks. Current guidance is conservative pending A2.

*Source: ctrl-01-synthesis-2026-07-04.md divergences DIV-1 through DIV-3 (DIV-3 resolved — incorporated in section 1.3 when/not criteria).*
