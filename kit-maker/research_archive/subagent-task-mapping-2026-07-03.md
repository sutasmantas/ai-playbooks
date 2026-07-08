# Subagent Task Mapping — Where to Convert Single-Agent to Subagent

**Created:** 2026-07-03
**Input:** subagent-benefits-2026-07-03.md (26 benefits, 8 categories)
**Purpose:** Identify every kit-maker task/decision point where single-agent is currently used but subagent would be better. Each recommendation cites the benefit(s) it activates and the current failure mode.
**Method:** Read all current procedures; classify each step as single-agent or subagent; check against benefit list.

---

## Already correct — subagent in use, design confirmed good

These points already use subagents. Reviewing confirms the design is correct and shows which benefits they capture.

| Step | Current design | Benefits captured |
|------|---------------|-------------------|
| **Auditor A + Auditor B** (scripts/verify_prompt.md) | Two parallel subagents, Read/Grep/Glob only | B4 (role conflict eliminated), B6 (fresh behavioral contract), B8 (compaction resistance), B12 (purpose-built adversarial framing), B13 (tool restriction enforced), B18 (true verification independence), B19 (error non-propagation) |
| **External goal check (#5)** (goal-achieving-plan.md Layer 1 Step 5) | Subagent: goal model + 3-session summary → "what's missing?" | B2 (no anchoring), B5 (no sunk cost), B6 (fresh contract), B18 (verification independence) |
| **Test subagent (#2)** (Layer 2 Step 3) | Subagent fires after any rule/procedure change: does the rule fire correctly? | B18 (independent verification), B19 (error non-propagation) |
| **Adversarial review (#3)** (Layer 5 trigger table) | Subagent: goal model + artifact → "what fails?" | B12 (adversarial framing), B4 (role conflict), B3 (sycophancy) — NOTE: planned but not yet built |

**Audit conclusion on auditor design:** The critical design element in verify_prompt.md line 2 is "Input hygiene — the artifact and done-criteria ONLY. Do NOT include producer's reasoning, chat history, plan rationale." This is the enforcement mechanism for B1 (no reasoning-chain contamination). If this rule is ever relaxed, B1 is lost. The rule should never be changed.

---

## Should be converted — single-agent currently, subagent needed

Ordered by impact on the goal model (highest first).

---

### CONVERT-1: Step 3.6 counter-prior pass → adversarial subagent

**File:** procedures/research-synthesis.md, Step 3.6
**Current design:** Same agent that ran Steps 1–3.5 generates a counter-hypothesis to its own highest-confidence conclusion, then evaluates whether the evidence supports it.
**Failure mode:** The procedure file itself acknowledges it: "Generating a counter-hypothesis under explicit instruction does not guarantee the generated hypothesis is genuinely counter-prior — models can produce counter-hypothesis-shaped outputs that are still prior-consistent." This is B22 (prior-biased synthesis) and B12 (adversarial self-review is incoherent).
**Why this is the highest-impact conversion:**
- Step 3.6 is explicitly designed to fix the <15% HDR counter-prior failure (`hypothesis-inverted-ground-truth-15pct`, HIGH). But it can't fix it when the same agent both produces the hypothesis and evaluates it. The fix that was supposed to address the bias now shares the bias.
- The confidence map from Step 3 is the foundation for ALL kit design decisions. If Steps 3.5 and 3.6 fail to catch biased conclusions, every mechanism derived from that synthesis inherits the bias.

**Proposed design:**
```
Step 3.6 (revised) — Counter-prior subagent:

1. Worker (main agent) writes a "counter-prior brief" containing ONLY:
   - The main conclusion of the highest-confidence group (one sentence)
   - The raw claim keys from that group (IDs only — no synthesis text, no confidence map)
   - The research archive path

2. Dispatch adversarial subagent with:
   System prompt: "You are a skeptic. Your job is to find evidence that [main conclusion] is FALSE.
   Do NOT reason from whether the conclusion sounds correct. 
   Start by constructing the strongest possible case AGAINST it from first principles.
   Then search the archive for claims that support the counter-case.
   Report: counter-argument, evidence found (if any), and whether the conclusion survives your challenge."
   Input: counter-prior brief ONLY — no synthesis text from Steps 1–3.5.

3. Subagent returns: counter-argument + supporting evidence + verdict.

4. Worker reads verdict and applies tier revision per existing Step 3.6 output format.
```

**Benefits activated:** B12, B22, B3, B2, B6
**Implementation location:** procedures/research-synthesis.md Step 3.6 — replace current procedure

---

### CONVERT-2: Step 3.5 dual-pass reliability check → subagent second pass

**File:** procedures/research-synthesis.md, Step 3.5
**Current design:** Same agent runs Steps 1–3 twice on shuffled claim order; compares tier assignments.
**Failure mode:** Explicitly stated in the procedure: "What this does NOT catch: Systematic biases that are stable across reading orders — a miscalibration that both passes share will produce agreement-on-wrong."
**Why high impact:** Reading-order bias is only ONE of the biases in synthesis. Prior-distribution bias, anchoring to prior sessions, and model-level vocabulary bias all produce agreement-on-wrong across reading orders. A second pass by the same agent is not independent verification — it is the same agent re-executing with cosmetically different input.

**Proposed design:**
```
Step 3.5 (revised) — Independent synthesis subagent:

1. Worker writes a "synthesis brief" containing ONLY:
   - The raw grouped claim table (group names + claim keys + evidence types)
   - No tier assignments, no confidence map text from pass 1

2. Dispatch synthesis subagent with:
   System prompt: "You are an independent evidence synthesizer. 
   Apply the synthesis tier criteria [paste criteria] to these research groups.
   Assign: HIGH, CONSENSUS, CONTESTED, or GAP to each group.
   Return your tier assignments and brief justification for each."
   Input: synthesis brief ONLY — no output from Steps 1–3 of the main agent.

3. Compare: main agent tier assignments vs. subagent tier assignments.
   Agreement → proceed (both passes reached same conclusion from different angles)
   Disagreement on any group → CONTESTED in final confidence map (per current rule)

4. The "CONTESTED-by-disagreement" classification now reflects genuine inter-agent 
   disagreement, not reading-order sensitivity (which is narrower and less important).
```

**Benefits activated:** B1, B2, B6, B11 (independent rediscovery as signal), B19
**Implementation location:** procedures/research-synthesis.md Step 3.5 — replace "shuffle + re-run" with "fresh agent pass"

**Note:** The current Step 3.5 shortcut ("dual-pass optional if all groups have ≥3 independent HIGH-verify claims") should be retained. If the threshold is clearly met, subagent dispatch adds cost without benefit.

---

### CONVERT-3: Best-of-N candidate scoring (#21) → judge/worker separation

**File:** goal-achieving-plan.md Layer 2 Step 2 (Best-of-N at decision points)
**Current design:** Same agent generates N=3 candidate approaches, then scores each (0–6 scale across 3 dimensions), then selects the argmax.
**Failure mode:** B4 (role conflict), B3 (sycophancy toward own candidates), B26 (uninformative self-rating). The agent that generated candidate A cannot objectively score it against candidates B and C — it already committed to A's internal logic while generating it.
**Why high impact:** Best-of-N fires at "high-stakes decisions" specifically: kit component generation strategy, hypothesis implementation order, scope under ambiguity. These are exactly the decisions where producer/evaluator bias has the most downstream effect on kit quality.

**Proposed design:**
```
Step 2 (revised) — Best-of-N with judge separation:

Phase 1 (worker — main agent):
- Generate N=3 candidates. Write each as a self-contained option statement.
- Log all three to decision_log.md before any scoring begins.
- Do NOT score. Stop after generating.

Phase 2 (judge — separate subagent):
System prompt: "You are a decision judge. Your job is to score three candidate approaches 
against the goal model. You did NOT generate any of these candidates."
Input: 
  - The decision question
  - The goal model (from design_log.md)
  - The three candidate statements
  - The scoring rubric (0–2 per dimension × 3 dimensions = 0–6)
  - The CLAUDE.md hard constraints
Output: scored table with argmax marked.

Phase 3 (worker — resumes):
- Read judge output; select argmax (or synthesize from winner if judge identifies partial wins).
- Proceed with selected candidate.
```

**Benefits activated:** B4, B3, B26, B25 (if two candidates tie, the disagreement between their approaches is signal to surface), B6
**Implementation location:** goal-achieving-plan.md Layer 2 Step 2 — add judge phase

---

### CONVERT-4: Research Query 3b self-argumentation → adversarial subagent

**File:** procedures/research-quality.md, Query 3 adversarial requirement, component (b)
**Current design:** Same agent that ran confirmatory queries (Q1, Q2) constructs "the strongest case against the claim from first principles."
**Failure mode:** B12 (adversarial framing is incoherent for same agent that just confirmed the claim through Q1/Q2), B2 (agent is anchored to the claim after reading confirmatory results), B3 (RLHF pressure toward approval of work in context).
**Why medium-high impact:** This is the primary adversarial check in research — before synthesis, before verify. If it fails, the bias enters unchecked. However, the external critique search (component a) partially compensates: finding actual external critics is structurally independent. The self-argumentation component (b) is the weakest link.

**Proposed design:**
```
Query 3b (revised) — Adversarial subagent:

After the main research agent completes Q1–Q2 and Q3a:

1. Worker extracts: the claim being investigated (one sentence) + any external critics found in Q3a.

2. Dispatch adversarial subagent with:
   System prompt: "Your ONLY job is to make the strongest possible case AGAINST this claim.
   Do not balance the argument. Do not hedge. Find the weakest assumption, the strongest 
   alternative explanation, the most threatening edge case. If external critics exist, 
   amplify their strongest point. If not, derive the opposition from first principles."
   Input: the claim (one sentence) + Q3a external critics (if any) — NO confirmatory results.

3. Subagent output: the counter-argument. Feed into saturation log as Q3b entry.

4. Main agent resumes with Q4, Q5, grey-lit leg.
```

**Benefits activated:** B12, B2, B3, B22
**Implementation location:** procedures/research-quality.md Query 3 — add adversarial subagent step for component (b)
**Cost note:** One subagent per angle per Query 3b. If running 5 angles, this is 5 additional subagent calls. Medium cost, high value for angles where external critics are sparse.

---

### CONVERT-5: ExpeL rule extraction (#20) → blind synthesis subagent

**File:** goal-achieving-plan.md Layer 4 (cross-session, every 20 sessions)
**Current design:** Main agent reads 20 lessons it wrote, clusters by state-class, extracts patterns, proposes CLAUDE.md rule changes.
**Failure mode:** B1 (agent recalls context it wrote the lessons in, can't see them as data), B5 (sunk cost in decisions those lessons document), B23 (confirmation of own prior synthesis — if lessons reflect a biased pattern, same agent can't detect it).
**Why medium impact:** This fires rarely (every 20 sessions) and already has a human review gate. But the extraction quality determines which rules get proposed — a biased extraction proposes rules that reinforce current failure modes rather than fixing them.

**Proposed design:**
```
ExpeL extraction (revised):

1. Worker collates: lessons.md last 20 entries, formatted as a structured list.
   - Strips all session/date context (reduce anchoring to recency)
   - Removes "LESSON:" prefix uniformity (all entries look equivalent)

2. Dispatch blind synthesis subagent with:
   System prompt: "You are analyzing a log of task outcomes. 
   Find recurring patterns: what triggered good outcomes, what triggered bad outcomes. 
   Cluster by trigger condition. For clusters of 3+ entries with the same trigger: 
   propose a behavioral rule. For negative-outcome clusters: propose a prohibition.
   You have NO context about who wrote these entries or what system they describe."
   Input: the collated lesson log (no system context).

3. Subagent returns: candidate rules with supporting lesson citations.

4. Human review gate (unchanged) — worker presents subagent output to user.
```

**Benefits activated:** B1, B5, B23, B2
**Implementation location:** goal-achieving-plan.md Layer 4 ExpeL section

---

## Should stay single-agent — reasoning documented

These points were examined but single-agent is correct.

| Step | Why single-agent is correct |
|------|----------------------------|
| **Steps 1–3.3 (grouping, contradiction scan, confidence map body)** | Requires full context of ALL claims simultaneously; a subagent seeing partial claims would produce false CONTESTED classifications from missing evidence, not genuine disagreement. Cross-group composition check (Step 3, composition failure rate note) also requires all groups visible at once. |
| **Step 3.7 principles extraction** | Each group's "derive beyond the finding" (Sub-step C) benefits from knowing adjacent groups' principles. Siloing groups to separate agents loses cross-principle derivation. Keep single-agent with multi-group context. |
| **Step 4 adversarial check on user assumptions** | This requires knowing the Phase 2 domain brief AND the confidence map simultaneously. Subagent would need both as context; no benefit over main agent with same context. |
| **TASK_TEMPLATE Sections 0–4 (planning)** | Planning requires full session context (history of decisions, why approach was chosen, what was tried). Subagent for planning would lose exactly the context that makes the plan non-generic. |
| **Research Q1, Q2, Q4, Q5** | Confirmatory search: same agent is appropriate — the goal IS to confirm from a consistent frame. Adversarial angle (Q3) already flagged for subagent. |
| **Structural pre-check in verify_prompt.md** | Deterministic checks (grep for soft language, check file ends with Trace: line). No judgment required; main agent or subagent equivalent. Single-agent is cheaper. |
| **Layer 3 Steps 2–7 (bandit update, calibration log, lesson write, hindsight, Goodhart check, divergence detection)** | All state-dependent writes to tracking files. These need the full task context. Subagents would have no knowledge of what task just ran. |

---

## Implementation priority order

| Priority | Task | Location | Effort | Impact |
|----------|------|----------|--------|--------|
| P1 | CONVERT-1: Step 3.6 → adversarial subagent | research-synthesis.md | Low — procedure text change | Highest — fixes explicitly-noted synthesis bias |
| P1 | CONVERT-2: Step 3.5 → fresh subagent second pass | research-synthesis.md | Low — procedure text change | High — catches stable biases the current design misses |
| P2 | CONVERT-3: Best-of-N → judge separation | goal-achieving-plan.md | Medium — adds Phase 2 subagent dispatch | High for decision quality; fires on every high-stakes decision |
| P2 | CONVERT-4: Query 3b → adversarial subagent | research-quality.md | Low — adds subagent step to query spec | Medium-high; cost per angle |
| P3 | CONVERT-5: ExpeL extraction → blind synthesis | goal-achieving-plan.md | Low — procedure text change | Medium; fires rarely |

**P1 rationale:** CONVERT-1 and CONVERT-2 affect the synthesis procedure that all kit design decisions rest on. The explicit acknowledgment in the procedure ("does not guarantee genuinely counter-prior"; "systematic biases not caught") means the known failure mode is unaddressed. Fix these first before any new research batch runs.

---

*Source: subagent-benefits-2026-07-03.md — benefits B1, B2, B3, B4, B5, B6, B11, B12, B19, B22, B23, B25, B26 applied across these 5 conversions. Benefits not applied: B7 (path-of-least-resistance — applies to long-session drift, not specific procedure steps), B8 (compaction resistance — already handled by auditor fresh-context design), B9/B10/B21 (vocabulary/parallel coverage — would apply to a search-parallelism upgrade, not current priority), B13 (tool restriction — already enforced for auditors), B14 (persona differentiation — enhancement beyond current scope), B15–B17 (scale — current research scale doesn't require it), B20 (multi-round adversarial — applies to audit design, already multi-round), B24 (judge panel for candidates — partially covered by CONVERT-3).*
