# Design Log — Technical Specification Writing Kit

## Session 2026-06-29 — Phase 2

### Domain Brief

```
Domain: Technical specification writing — turning a product requirement, idea, or verbal brief into a structured technical spec that engineers can implement from without back-and-forth clarification.

Kit produces: A structured technical spec document covering: scope, requirements (functional + non-functional), architectural decisions with rationale, interface definitions, data models, error handling, edge cases, operational requirements (logging, monitoring, deployment), and an explicit risk register.

User: Software engineer or tech lead who knows what they want to build but spends too much time in clarification cycles. Understands systems, but spec writing is not their trained discipline. Claude is the writer; the user is the domain expert and final reviewer.

Quality dimensions:
1. Implementability — a junior engineer can begin implementation from the spec without asking clarifying questions. Every decision that could block implementation is made, not deferred.
2. Completeness — no "TBD" without a resolution path; every requirement has an acceptance criterion; edge cases explicitly handled or explicitly out of scope.
3. Decision traceability — every architectural choice names the alternatives considered and the reason for the selection. Not just "we chose X" but "we chose X over Y because of Z constraint."
4. Risk identification — non-obvious failure modes named before implementation begins; integration risks, scalability gaps, security concerns, operational constraints.
5. Scope precision — the boundary between in-scope and out-of-scope is binary-checkable. "Is this feature needed for launch?" should have a clear answer from the spec.

Systematic omission bias: Error handling and failure modes (LLM defaults to happy path); operational requirements (logging, alerting, monitoring — often absent); integration edge cases (what happens when the external system is down?); security and auth requirements (deferred to "security team"); performance/scalability constraints (assumed, never stated).

Parameterization inputs:
- Audience: will the spec be read by junior engineers? senior engineers? non-technical stakeholders?
- Formality: startup-style scratchpad vs. enterprise RFC with formal review process
- Existing system constraints: must the spec fit into an existing architecture? If yes, what are the hard constraints?
- Review process: who signs off? What does approval require?

Realistic input scale: A 6-month feature specified from a 3-sentence product brief. Multiple services involved. The spec output is 15–25 pages: scope + 5 functional requirement sections + data model + API design + error taxonomy + operational requirements + risk register. This is the scale the kit must produce coherently — not a 1-page microservice spec.

Success condition: A junior engineer can implement the feature described in the spec without asking the spec author for clarification. Architecture decisions in the spec match what a senior engineer would choose in a real review.

Out of scope: Agile story writing / JIRA tickets; API documentation format (OpenAPI); architecture decision records (ADRs) as a standalone artifact; project planning / estimation.

Broader goal: Reduce the clarification cycle that currently turns "I need a spec" into 3 rounds of back-and-forth before an engineer can start work. The kit should let the user delegate spec production to Claude and receive a result that's immediately usable.
```

User confirmation: not yet required (domain selected by agent as third test domain per session authorization)

### Goal Model

**Gold standard:** Spec produced by the kit is indistinguishable from one written by a senior engineer who knows both the product requirements and the target codebase constraints. The user's role is to provide the brief and validate the output — not to write the spec.

**What the agent owns:** Spec structure, completeness enforcement, decision-making for ambiguous requirements (with reasoning), risk identification, scope boundary enforcement.

**What the user owns:** Final scope decisions on genuinely contested requirements, approval of architectural choices with significant tradeoffs, validation that the spec matches the intent.

**Behavioral contract needs:** The spec-writing agent must proactively surface decisions it made and the reasoning (not just produce output silently), name open questions it cannot resolve from the brief, and flag when scope is ambiguous and needs user decision — but should NOT ask for clarification on things it can reasonably decide.

---

### Phase 3 Research Plan — Pending

Research character assessment needed before launching wave. Expected domain type: mixed (some academic research on requirements specification quality; mostly practitioner consensus on what makes specs good).

Research angles proposed:
1. Requirements quality measurement — what makes a software requirement "good"? (IEEE 830, SMART criteria, empirical studies)
2. Common spec failure modes — what causes specs to fail in practice? (implementation blocks, scope creep, rework rates)
3. Technical writing structure — how is a technical spec structured? (industry templates, RFC formats, design doc conventions)
4. Decision documentation — how should architectural decisions be recorded? (ADR research, tradeoff documentation)
5. Scale failure modes — what breaks when specs cover large, multi-service features?
6. Omission bias in specs — what do spec writers consistently miss?
7. AI-generated spec quality — research or practitioner reports on LLM-produced specs
8. GitHub: spec templates, RFC examples, design doc examples
9. Review and sign-off patterns — what review processes produce better specs?

---

### Discovered Work

(empty — this is the start of the build)

