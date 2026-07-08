# Research Summary

What the research found, how confident we are in it, and where the gaps are.

---

## Wave 1 — Meta-research on kit design (6 angles, completed)

Wave 1 answered: what are the failure modes of building kits without a rigorous process? What does the research say about making LLM behavioral contracts work?

### What we found (high confidence)

**Behavioral contracts decay.** LLMs reliably revert to default behavior after context pressure or a few turns of different topic. Kits that don't include explicit decay warnings produce agents that start well and degrade. Every generated behavioral contract must include a decay warning with a named recovery action.
*Classification: consensus (practitioner) — multiple independent sources converge; no controlled study.*

**Research-before-build produces consistently better outcomes than intuition-guided building.** In domains where practitioners built from intuition vs. explicit research, the research-first kits showed fewer critical omissions and better coverage of edge cases. The mechanism: domain experts take their most important heuristics for granted and don't write them down unless prompted by seeing what the research actually says.
*Classification: consensus — no controlled study in the LLM context specifically; strong practitioner convergence.*

**Adversarial review finds more than friendly review.** A reviewer whose job is explicitly to find what's wrong (Correctness) surfaces different findings than a reviewer whose job is completeness. Both perspectives are needed; merging them into one role produces anchored review that favors the existing structure.
*Classification: empirical — confirmed in multiple code review studies; applies by extension to kit review.*

**Toy-input testing misses the failure modes that matter most.** Procedures that work on small, clean inputs often fail on large or messy realistic inputs. The failure modes are different in kind: scale problems (iteration without scoping rules), cross-cutting problems (fixes that propagate beyond what a single-pass review can track), and structure problems (ambiguous phrases that work when input is short but fail when input has many instances).
*Classification: empirical — replicated in code review kit test-run-01 vs test-run-02 directly.*

**Evidence classification changes how claims get used.** When a practitioner claim and a measured result look identical in a document, builders treat them the same. The empirical/consensus/anecdote split forces explicit acknowledgment of what kind of evidence underpins each procedure rule.
*Classification: anecdote — observed during kit building; no external source.*

### What we found (contested or thin)

**How many alternatives to generate.** Multiple sources say 2–3 but no rigorous study on optimum. The steelmanning requirement (added this session) is our structural fix for the alternative-quality problem — but the right count is not empirically established.
*Classification: anecdote.*

**Optimal audit depth vs. iteration count.** Hard cap at 3 audit-fix rounds was chosen by satisficing rather than research. There may be a better heuristic. Flagged for Wave 2 P2.
*Classification: anecdote.*

---

## Code review domain research (4 angles, completed)

### What we found (high confidence)

**Severity classification needs a policy-or-risk anchor, not a vague impact scale.** The most common failure mode in code review is inflated severity (everything is a blocker) or deflated severity (everything is a suggestion). The empirical finding: anchoring severity in "policy violation" (a rule exists, this breaks it) or "risk" (specific failure mode, specific consequence) produces calibrated classifications. Judgment-word anchors ("significant", "important") do not.
*Classification: consensus — strong practitioner convergence on the policy/risk frame.*

**Six coverage dimensions are required for a complete review.** Functional correctness, security, performance, maintainability, testing, integration. Missing any one dimension produces systematically incomplete reviews — reviewers don't notice the gap because they're reviewing what's there, not asking what's absent. Completeness requires an explicit checklist pass, not reader intuition.
*Classification: consensus — widely replicated in code review literature; some empirical backing.*

**Conventional Comments format (label + optional decoration + subject) reduces tone ambiguity.** Free-form comments produce confusion about whether a comment is a blocker or a suggestion. The Conventional Comments taxonomy (suggestion, issue, question, nitpick, praise, thought) with an optional blocking decoration makes the reviewer's intent parseable.
*Classification: consensus — practitioner-developed; no RCT.*

**Comment avalanche on large PRs requires consolidation.** Above ~20 comments, a reviewer should consolidate related findings rather than listing all instances independently. The consolidation rule: if 3+ comments share the same root cause, name the root cause once and cite all instances. Unconsolidated avalanche reviews get dismissed by authors.
*Classification: consensus — practitioner convergence.*

**Cross-cutting changes (>3 directories) require a separate security pass** because directory-spanning changes often hide implicit data flow assumptions that single-file review doesn't catch. Security findings on cross-cutting changes are systematically underreported by reviewers who see one directory at a time.
*Classification: anecdote — from kit-building observation; flagged for empirical verification.*

### What we found (gaps)

**Async propagation tracking.** When a fix to function A requires making it async, and async propagates to all callers, a single-pass review cannot verify that the caller updates are complete. This is Gap 6 in the weakness register. No procedure fully solves it; it requires the reviewer to explicitly flag propagation and recommend a grep pass.

**Architecture decision guidance.** When a review identifies an architecture problem (not just a code problem), providing direction requires team infrastructure context (existing patterns, tech debt tolerance, deployment constraints) that a code reviewer doesn't have. The kit can surface the finding but not prescribe the fix. This is Gap 7 in the weakness register.

---

## Technical spec domain research (pending)

Phase 2 domain brief complete. Research plan: 7 scoped angles on spec quality dimensions and LLM-specific failure modes. Human spec-writing process research excluded (low transfer — the how-to-write-a-spec process for humans doesn't translate to how to prompt an LLM to produce spec content).

**Research angles queued:**
1. What does "high quality" mean for a technical specification — expert dimensions
2. LLM-specific spec failure modes (omission bias, false precision, scope creep)
3. Decomposition methods for feature specifications
4. Traceability — how decisions in specs trace to implementation
5. Ambiguity detection in requirements
6. Spec validation — how to check spec quality before implementation starts
7. Scale failure modes — what breaks when a spec describes a large feature vs. a small one

Launch pending user authorization.

---

## Wave 2 — 155 angles (prepped, BLOCKED)

155 angles across 13 research clusters covering: behavioral contract design, research methodology, kit validation, goal-directed agency, LLM instruction following, alternatives generation, problem-solving mechanisms, agent self-review, and more.

All angles have 5 queries each. Synthesis targets written for P1 clusters. Launch blocked until user authorization.

### P1 cluster summary (highest priority — findings would change existing procedures)

| Cluster | Angles | Why P1 |
|---------|--------|--------|
| Behavioral rules that Claude follows | 59–63 | Direct impact on kit behavioral contract design |
| Meta-research methodology | 12–14 | Affects how all research is conducted |
| Research quality criteria | 108–114 | Affects how archive files are evaluated |
| Kit validation and behavioral testing | 22–24 | Affects Phase 7 gates |
| Goal-directed behavior | 119–120, 125, 135 | Core to the always-on behavioral contract |
| Criteria-before-evaluation | 143 | Alternatives-generation step 1 |
| Second-order thinking | 144 | Phase 5 planning risk assessment |
| Backward chaining from goal | 145 | Kit-maker self-application |
| Double-loop learning | 146 | Procedure retirement criteria |
| MECE decomposition | 147 | Coverage completeness validation |
| Rubber duck debugging | 148 | Agent self-review forcing function |

---

## What the research does NOT cover (known gaps)

These are real gaps, not things we decided not to research:

1. **LLM behavioral contract drift rate.** We know decay happens; we don't know the rate under different context conditions. Hard to measure without controlled experiment.

2. **Optimal wave size.** How many parallel research agents before quality drops? We use "one agent per angle" — no empirical basis for this being optimal vs. batching.

3. **Cross-kit contamination.** If a kit builder has already built Kit A, does prior context contaminate Kit B's Phase 2 domain brief? Suspected yes; not measured.

4. **Alternatives generation quality vs. count.** Is one high-quality steelmanned alternative better than three weak ones? Strong intuition yes; no evidence.
