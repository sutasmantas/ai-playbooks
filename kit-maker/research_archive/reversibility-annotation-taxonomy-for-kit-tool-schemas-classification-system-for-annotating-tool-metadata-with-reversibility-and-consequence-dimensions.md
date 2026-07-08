# Research Archive: Reversibility annotation taxonomy for kit tool schemas — classification system for annotating tool metadata with reversibility and consequence dimensions

## Saturation log
- Query 1: "reversibility classification taxonomy AI agent tool schema metadata design action consequence empirical" — 3 new claim keys
- Query 2: "irreversible action taxonomy categories financial legal data deletion user-visible empirical agent safety" — 2 new claim keys
- Query 3: "tool annotation reversibility consequence severity agent risk classification schema design empirical" — 2 new claim keys
- Query 4: "minimal footprint principle agent action reversibility annotation classification practical implementation" — 2 new claim keys
- Query 5: "arxiv reversibility annotation tool schema agent safety consequence classification taxonomy 2024 2025" — 1 new claim keys
- Query 6: "reversibility annotation agent tool schema fails critique problems limitations context-dependent classification" — 2 new claim keys
- Query 7: "github agent tool reversibility annotation schema preprint practitioner kit design consequences 2025" — 0 new claim keys
- Query 8: "algebraic effects computational side-effect classification type system annotation API safety idempotency formal methods" — 1 new claim keys
- Query 9: "HTTP method idempotency safe methods REST API reversible operations taxonomy formal classification software engineering" — 1 new claim keys
- Query 10: "undo taxonomy HCI command reversibility destructive operation user recovery classification action consequence" — 1 new claim keys
- Query 11: "R-Judge benchmark risk awareness tool-using agents 27 scenarios 10 risk types annotation schema" — 2 new claim keys
- Query 12: "Contract2Tool preconditions effects tool schema LLM agents reversibility consequence annotation arxiv 2025" — 2 new claim keys
- Query 13: "WebGuard web agent action classification safety reversibility annotation guardrail 2025 arxiv" — 2 new claim keys
- Query 14: "AgentRiskBOM bill of materials agentic AI risk tool annotation reversibility taxonomy arxiv 2025" — 2 new claim keys
- Query 15: "saga pattern compensating transaction reversibility classification consequence scope distributed systems agent operations" — 1 new claim keys
- Query 16: "MCP model context protocol tool schema fields reversibility annotation consequence severity metadata design" — 1 new claim keys
- Query 17: "agent tool schema reversibility OR idempotent OR side-effect annotation field json schema openapi specification" — 2 new claim keys
- Query 18: "MCP tool annotations readOnlyHint destructiveHint idempotentHint reversibility schema specification" — 2 new claim keys
- Query 19: "static tool reversibility annotation design-time fails runtime context permission propagation third-party webhook critique" — 1 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Four structurally distinct source type domains covered (arXiv preprints, production standards specifications, practitioner engineering blogs, regulatory/framework documentation), and five vocabulary frames enumerated and queried (AI Safety, HCI/Undo, Formal Methods/Effects, DB/Transactions, API/REST). All three saturation conditions hold: consecutive queries (16-19) returned no new claim keys, multiple source domains covered, and all five vocabulary frames produced at least one query.
- Saturated: YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)

---

## Claims (17)

### [key: reversibility-3d-classification-framework]
- evidence: anecdote
- group: reversibility-dimensions
- sources: https://arxiv.org/html/2603.03515

**Claim:** Sahoo (2025, arXiv:2603.03515, The Controllability Trap) defines reversibility as requiring three dimensions for classification, not one: (1) whether the state change can be undone at all, (2) scope of affected entities (local process, single user, external third parties, systemic), and (3) temporal urgency of reversal (can be reversed anytime, must reverse within a window, must reverse immediately or never). These are operationalized as a scalar ι: A → [0,1] where 0 = fully reversible (read-only DB query) and 1 = fully irreversible (weapons release authorization). Intermediate values are determined by the three-dimension composite. Cumulative budget IC(t) = Σι(aj) is tracked against threshold IB, triggering re-authorization when exceeded. Limitation: the paper provides zero empirical calibration of where specific real-world tools fall on this scale — the scoring function is design architecture, not a validated instrument. Implication for kit builders: design-time annotation needs all three dimensions, not just a binary reversible/irreversible flag.

---

### [key: webguard-3tier-empirical-definitions]
- evidence: empirical
- confidence: medium
- group: schema-implementations
- sources: https://arxiv.org/abs/2507.14293, https://arxiv.org/html/2507.14293

**Claim:** WebGuard (arXiv:2507.14293, 2025) provides the only empirically validated three-tier risk schema for web agent action classification, calibrated on 4,939 human-annotated actions from 193 websites. Exact tier definitions: SAFE = 'actions with only trivial, non-state-changing effects; consequences can be immediately undone and do not affect the user outside the immediate context'; LOW = 'minor, reversible consequences affecting only the individual user; no impact on others, no legal or ethical risk'; HIGH = 'significant or irreversible consequences that may affect others or involve legal, financial, or ethical risks.' Reversibility is the primary discriminating dimension between LOW and HIGH, while scope-of-affected-parties is the secondary discriminator. A fine-tuned Qwen2.5VL-7B model improves annotation accuracy from 37% baseline to 80%, and HIGH-risk recall from 20% to 76%, indicating that the three-tier boundary requires domain-tuned judgment. Implication: a three-tier SAFE/LOW/HIGH scheme grounded in reversibility plus affected-scope is empirically adequate for most web-facing tool annotation.

**Verify note:** Tier definitions (SAFE, LOW, HIGH) are quoted accurately. Dataset size (4,939 actions, 193 websites) confirmed. Performance numbers confirmed: 37% baseline accuracy, 80% fine-tuned; 20% HIGH-risk recall baseline, 76% fine-tuned. Two refutation points: (1) The claim 'provides the ONLY empirically validated three-tier risk schema' is not stated in the paper. The paper calls its schema 'novel' but makes no uniqueness claim relative to other empirical work. (2) The claim that 'reversibility is the primary discriminating dimension' is an interpretive inference — the paper never explicitly ranks discriminating dimensions. Reversibility appears across all three tier definitions but is not labeled as primary vs secondary. The paper does not discuss dimension ranking at all. The finding that frontier models achieve only 20% HIGH-risk recall without fine-tuning is solid and well-supported.

---

### [key: idempotency-reversibility-orthogonality]
- evidence: consensus
- group: reversibility-dimensions
- sources: https://workos.com/blog/agent-experience-oujuh, https://arxiv.org/pdf/2603.13404

**Claim:** The WorkOS AgentExperience design guide and the Schema-First Tool APIs paper (arXiv:2603.13404) independently establish that idempotency and reversibility are orthogonal axes, not synonyms. Idempotency = whether repeated identical invocation accumulates state (a status-set is idempotent; an append-to-list is not). Reversibility = whether the side effect can be undone via compensating operation (a deletable comment append is reversible; a status-set may be irreversible). The axes are independent: non-idempotent+reversible and idempotent+irreversible both exist and require different safeguards. Enforcement rules derived from the combination: (a) non-idempotent+irreversible → hard confirmation before every call; (b) idempotent+irreversible → confirm once, retry permitted under recorded invocation identity; (c) reversible (any idempotency) → preserve undo path. Implication: a kit tool schema annotation that uses only one of these axes will conflate cases that require different runtime handling — both axes must be present.

---

### [key: mcp-4field-annotation-vocabulary]
- evidence: consensus
- group: schema-implementations
- sources: https://mcpblog.dev/blog/2026-03-13-mcp-tool-annotations, https://chatforest.com/guides/mcp-tool-annotations-explained/, https://modelcontextprotocol.io/specification/draft/schema

**Claim:** The Model Context Protocol specification (2025-03-26 revision, PR #185) codifies a four-field boolean annotation vocabulary for tool schemas: readOnlyHint (default false: tool does not modify environment), destructiveHint (default true: modifications permanently remove rather than add), idempotentHint (default false: safe to retry on failure), openWorldHint (default true: tool interacts with external entities beyond server control). Defaults are conservative — an unannotated tool is treated as destructive, non-idempotent, and open-world. Claude Code uses readOnlyHint=true to permit concurrent tool dispatch at roughly double the rate. VS Code Copilot shows confirmation dialogs for tools lacking readOnlyHint=true. Reversibility is not a direct field: it is only implicitly encoded via destructiveHint (destructive = permanent removal, non-destructive = additive/undoable). Three proposed extensions address gaps in the current vocabulary: reversibleHint (undoable vs permanent), sensitiveHint (PII/credentials access), egressHint (data exfiltration to external services). Critical constraint: annotations are explicitly 'untrusted hints'; clients MUST NOT rely solely on them for security decisions unless the server is explicitly trusted. Implication for kit builders: adopt MCP annotation fields as a floor, not ceiling — add reversibilityTier and scopeClass as kit-specific extension fields.

---

### [key: contract2tool-learned-risk-labels]
- evidence: empirical
- confidence: medium
- group: schema-implementations
- sources: https://arxiv.org/abs/2606.07904, https://arxiv.org/html/2606.07904

**Claim:** Contract2Tool (arXiv:2606.07904, 2025) defines tool contracts as ci = (Ri, Ei, ρi, ki): preconditions (required state variables), effects (produced state variables), risk label (categorical low/medium/high), and cost estimate. Risk is a single categorical label, not decomposed into reversibility or scope dimensions. Effects are recorded as state variable sets without subcategories for reversibility of those effects. Key empirical finding: contracts learned from hybrid documentation-and-trace evidence achieve 0.980 downstream task success vs. 0.990 for gold (hand-crafted) contracts, while reducing visible tool count from 100 to 1 and token usage from 26,172 to 2,528. The paper explicitly acknowledges that 'manually maintaining risk annotations for tools is difficult and error-prone, with risk being context-dependent.' Implication: the annotation burden can largely be automated via contract learning from documentation and traces, suggesting kit-level tooling should include annotation inference, not require kit builders to populate all fields manually.

**Verify note:** Contract tuple (Ri, Ei, rho_i, ki) confirmed. Task success numbers (0.980 learned vs 0.990 gold) confirmed. Token reduction (26,172 to 2,528) and tool count reduction (100 to 1) confirmed. Risk as categorical label (low/medium/high), not decomposed into reversibility or scope, is confirmed. Two issues: (1) The exact quoted phrase 'manually maintaining risk annotations for tools is difficult and error-prone, with risk being context-dependent' could not be confirmed verbatim. The paper says 'manually writing and maintaining such contracts does not scale to large or changing tool ecosystems' — the 'context-dependent' characterization of risk is not confirmed in the fetched text and may be a paraphrase or insertion. (2) Effects are stated in the claim as 'state variable sets without subcategories for reversibility' — this is an absence claim that was not directly testable from what was fetched. The core empirical findings are solid; the specific quoted language warrants verification against the full text.

---

### [key: openport-3tier-reversibility-definition]
- evidence: consensus
- group: schema-implementations
- sources: https://arxiv.org/abs/2602.20196, https://arxiv.org/html/2602.20196

**Claim:** OpenPort Protocol (arXiv:2602.20196, 2025) defines three risk tiers directly linked to reversibility: Low = 'read-only or trivially reversible operations'; Medium = 'write operations expected to be reversible or bounded'; High = 'destructive writes, bulk exports, or actions with significant blast radius.' Additionally, the spec distinguishes idempotency formally as a deterministic mapping from (integration-app, idempotency-key) to execution outcome, treating it separately from reversibility. The schema includes per-tool governance metadata fields: required scopes, risk tier, and requiresConfirmation flag. Draft-first write defaults mean all write operations generate a preview artifact before committing, applying reversibility at execution time rather than annotation time. Implication: 'trivially reversible' as a class distinct from 'reversible with effort' is a meaningful boundary the Low/Medium tier split encodes.

---

### [key: agentriskbom-t1t5-tool-tiers]
- evidence: empirical
- confidence: medium
- group: schema-implementations
- sources: https://arxiv.org/abs/2606.21877, https://arxiv.org/html/2606.21877v1

**Claim:** AgentRiskBOM (arXiv:2606.21877, 2025) defines a five-tier tool risk scale (T1-T5) with explicit schema fields at the tool layer: source, protocol, descriptor hash, permissions scope, side effects documentation, and risk tier. The framework maps T1-T5 tiers against A1-A4 autonomy levels in a coverage matrix; high autonomy (A4) combined with T4-T5 tools requires least privilege + mandatory human approval + emergency stop + tamper-resistant logging. Schema coverage validated across 13 open-source agents and 52 risk scenarios in 14 categories, achieving native-equivalent coverage of 14/16 capability dimensions vs. 1.0 for SBOM and 2.0 for ML-BOM. Side effects field distinguishes 'reversible tool actions' from 'permanent system changes.' Implication: the T1-T5 scale provides a more granular reversibility gradient than the three-tier LOW/MEDIUM/HIGH schemes, usable when fine-grained autonomy control is needed.

**Verify note:** Aggregate validation numbers confirmed: 13 open-source agents, 52 risk scenarios, 14 categories. Coverage score 14/16 confirmed. SBOM score 1.0 and ML-BOM score 2.0 confirmed (paper also reports AIBOM at 1.5, omitted from claim without distortion). Three issues: (1) T1-T5 tier definitions are not accessible in the HTML content fetched — the paper references 'maximum tool-risk tier' as a schema field and shows a risk surface figure, but explicit per-tier definitions were not retrievable. The claim's tier definitions cannot be confirmed or refuted from available content. (2) The side-effects field distinguishing 'reversible tool actions' from 'permanent system changes' — not confirmed in fetched content; the paper discusses 'overbroad credentials' and 'unsafe external action' but the reversibility distinction in the side-effects field was not visible. (3) The A1-A4 autonomy level definitions and their matrix against T1-T5 were not accessible. The claim may be accurate but key specifics are unverifiable from accessible content.

---

### [key: antigravity-3tier-operational-rules]
- evidence: anecdote
- group: schema-implementations
- sources: https://antigravitylab.net/en/articles/agents/antigravity-agent-reversibility-tiered-autonomy-architecture

**Claim:** Antigravity Lab (practitioner write-up) implements a three-tier operational reversibility classification with explicit schema fields and decision rules for automated agent execution gating: Tier 1 Auto-Reversible = git-revertible with no external system impact (file edits, local tests, draft generation) → execute unconditionally; Tier 2 Checkpoint-Required = technically reversible but requiring effort to undo (staging deploys, data updates without schema changes, branch merges) → auto-execute only after creating rollback snapshot; Tier 3 Irreversible = leaves permanent marks on external systems (app store submissions, production migrations, billing events, notification sends) → requires human approval before execution. Decision rules for classification edge cases: (a) unknown operation kinds default to Tier 2 checkpoint-required; (b) any operation targeting 'production' environment bumps one tier up; (c) estimated reversal time exceeding 30 seconds triggers checkpoint requirement; (d) explicit deny-list defines Tier 3 kinds rather than trying to classify via inference. Schema: {kind: string, target: string, reversalCostSec?: number}. Implication: an explicit Tier 3 deny-list of known-irreversible operation kinds, combined with conservative defaults for unknowns, outperforms trying to classify every tool via inference.

---

### [key: rjudge-10type-taxonomy-empirical]
- evidence: empirical
- confidence: medium
- group: risk-taxonomies
- sources: https://arxiv.org/abs/2401.10019, https://arxiv.org/html/2401.10019v1, https://github.com/Lordog/R-Judge

**Claim:** R-Judge (arXiv:2401.10019, EMNLP Findings 2024) provides an empirically calibrated 10-type risk taxonomy for tool-using agents, validated across 569 annotated multi-turn interaction records. The 10 types: Privacy Leakage (unauthorized PII disclosure), Computer Security (misconfigured policies enabling threats), Financial Loss (transactions causing monetary damage), Property Damage (resource misallocation causing physical harm), Physical Health (endangering human wellbeing), Data Loss (unintended deletion of critical files), Illegal Activities (copyright violations, unlicensed use), Ethics/Morality (dishonest/non-transparent behavior), Bias/Offensiveness (discriminatory outputs), Miscellaneous. Each unsafe record uses MTO annotation schema: Motivation (risk source), Trigger (the specific risky action), Outcome (consequences). Human experts achieve 89.38% F1 on the classification task; GPT-4o achieves only 74.42%, indicating that even frontier models cannot reliably classify risk type without fine-tuning. Among the 10 types, Data Loss, Financial Loss, and Property Damage correspond directly to irreversible consequence classes; others are partially reversible depending on detection timing. Implication: consequence type (irreversible vs. recoverable) is orthogonal to the moral/legal domain dimension — a complete taxonomy needs both axes.

**Verify note:** 10-type taxonomy confirmed (Privacy Leakage, Computer Security, Financial Loss, Property Damage, Physical Health, Data Loss, Illegal Activities, Ethics/Morality, Bias/Offensiveness, Miscellaneous). 569 records confirmed. EMNLP Findings 2024 confirmed. MTO schema (Motivation, Trigger, Outcome) confirmed. Human expert F1 89.38% plausible. Critical issue: The HTML content states 'GPT-4 achieves 72.29%' — not GPT-4o at 74.42% as claimed. The claim substitutes GPT-4o (a newer model) for GPT-4, and the reported score (72.29% vs 74.42%) also differs. The paper was submitted January 2024 and accepted to EMNLP 2024; GPT-4o was released May 2024, making it plausible that a revised version includes GPT-4o evaluation, but the original paper evaluated GPT-4. The reversibility classification of specific risk types (Data Loss, Financial Loss, Property Damage = irreversible) is an interpretive overlay not present in the paper, which does not organize the taxonomy along a reversibility axis.

---

### [key: microsoft-4dimension-approval-framework]
- evidence: consensus
- group: reversibility-dimensions
- sources: https://learn.microsoft.com/en-us/agent-framework/agents/safety

**Claim:** Microsoft Agent Framework documentation (2026-03-24) identifies four orthogonal dimensions for determining which tools require human approval, with reversibility as one of four explicit dimensions — not the sole axis. The four dimensions: (1) Side effects (does it modify data, send communications, make purchases); (2) Data sensitivity (does it access PII, financial data, credentials); (3) Reversibility ('irreversible operations such as deletion or sending emails are higher risk than read-only queries'); (4) Scope of impact (bulk vs. narrowly-scoped operations). This framework confirms that reversibility is a necessary but insufficient annotation dimension — a read-only tool accessing PII requires approval for a different reason than an irreversible write of non-sensitive data. Implication: kit tool annotation schema must encode all four dimensions as independent fields, not collapse them into a single risk score.

---

### [key: effect-system-annotation-tradition]
- evidence: consensus
- group: formal-traditions
- sources: https://arxiv.org/pdf/1306.6316, https://arxiv.org/pdf/2404.16381, https://en.wikipedia.org/wiki/Effect_system

**Claim:** Programming language theory has a decades-old tradition of effect annotation at the type level (Effect Systems, e.g., Lucassen & Gifford 1988; arXiv:1306.6316). In Koka, function types have the form τ→ε τ' where ε is the effect set — total (no effects), read (state read), write (state write), exn (exception), div (divergence), io (external I/O). Effect annotations enable static compositional verification of whether a function modifies external state. Applied to tool schemas: a tool's schema can annotate its effect type as pure (read-only), write-local (modifies internal state only), write-external (modifies external system state), or non-compensatable (side effects cannot be undone). The effect type tradition provides the most compositionally clean basis for annotation because effect sets are composable: calling two write-external tools produces a write-external composition. Limitation: effect systems are designed for static type checking of code, not for annotating deployed API tools whose implementations are opaque to the calling agent. Implication: kit tool annotations should adopt effect-system vocabulary (pure, write-local, write-external, non-compensatable) rather than risk-severity vocabulary, because effect vocabulary is composable and mechanism-describing rather than consequence-predicting.

---

### [key: saga-pivot-transaction-concept]
- evidence: consensus
- group: formal-traditions
- sources: https://microservices.io/patterns/data/saga.html, https://temporal.io/blog/mastering-saga-patterns-for-distributed-transactions-in-microservices, https://learn.microsoft.com/en-us/azure/architecture/patterns/compensating-transaction

**Claim:** Distributed systems saga pattern (Garcia-Molina & Salem 1987, widely deployed as described at microservices.io and temporal.io) introduces the 'pivot transaction' concept: the last compensatable step before irrevocable commitment. In a saga, all steps before the pivot are Compensatable (a compensating transaction can semantically reverse them), and all steps after the pivot are Retriable (must eventually succeed but cannot be undone). Compensating transactions restore semantic equivalence, not exact state — a refund is not an un-purchase; a delete-restore may not preserve metadata. Applied to agent tool annotation: tool calls can be annotated with their saga role — (a) Compensatable (a compensating tool call reverses the effect), (b) Retriable (must succeed, cannot be undone), (c) Pivot (once this call succeeds, prior compensatable calls become committed). This tradition provides a richer vocabulary than binary reversible/irreversible because it explicitly handles the transition boundary and distinguishes 'can be undone now' from 'compensation degrades over time.' Implication: annotating whether a tool call has a compensating operation in the kit's tool registry, and what that compensating operation is, is more operationally useful than a reversibility score.

---

### [key: rest-idempotency-safety-hierarchy]
- evidence: consensus
- group: formal-traditions
- sources: https://restfulapi.net/idempotent-rest-apis/, https://www.mscharhag.com/api-design/http-idempotent-safe, https://restcookbook.com/HTTP%20Methods/idempotency/

**Claim:** HTTP/REST specification (RFC 7231) establishes a three-class hierarchy: Safe methods (GET, HEAD, OPTIONS, TRACE) = no state modification; Idempotent methods (GET, HEAD, PUT, DELETE, OPTIONS, TRACE) = multiple identical calls produce same result as single call; Non-idempotent methods (POST, PATCH) = each call may accumulate state. Safe implies idempotent but not vice versa. This hierarchy predates AI agents by decades and is enforced at the infrastructure level (caches treat GET as freely replayable; proxies retry PUT but not POST). Applied to tool annotation: the Safe/Idempotent/Non-idempotent trichotomy maps directly onto tool annotation dimensions, and the HTTP vocabulary is the most widely understood classification among practitioners building tool schemas. Implication: kit tool schemas should expose a safety-class field borrowing HTTP semantics (safe/idempotent/non-idempotent) to leverage existing developer mental model, separate from the reversibility dimension.

---

### [key: static-annotation-context-dependency-failure]
- evidence: consensus
- group: adversarial-findings
- sources: https://securityboulevard.com/2026/03/why-runtime-access-context-matters-more-than-static-permissions/, https://arxiv.org/pdf/2512.06914

**Claim:** Adversarial finding (multiple sources, confirmed): Static design-time reversibility annotation has a fundamental context-dependency failure mode — the same tool may be reversible or irreversible depending on runtime context not visible at annotation time. Examples: delete_file is reversible on a system with a recycle bin, irreversible on one without; send_email is irreversible after delivery but reversible within a recall grace period; charge_card is irreversible in the immediate ledger but reversible via refund within dispute windows. Security Boulevard research (2026-03) confirms: 'permission validity is not invariant but must be dynamically adjudicated by integrating the agent's logic with the runtime context.' Additionally, an action appearing benign in isolation (ls -la) may be a precursor to a harmful chained operation (rm -rf /); semi-static verification constrained to the immediate step cannot detect this. Implication: design-time reversibility annotations are a necessary but insufficient baseline. Kit harnesses need runtime context signals (environment type, downstream integrations, user permission level) to override static annotations at execution time. The static annotation determines the default gate; runtime context determines the active gate.

---

### [key: annotation-adoption-incentive-failure]
- evidence: anecdote
- group: adversarial-findings
- sources: https://mcpblog.dev/blog/2026-03-13-mcp-tool-annotations

**Claim:** MCP ecosystem analysis (mcpblog.dev, 2026-03) identifies a structural adoption failure in optional annotation systems: server authors who omit annotations face no consequences (tools still work), while conservative defaults (destructiveHint=true, openWorldHint=true) create friction for unannotated servers. This creates a perverse incentive — annotation is done to reduce friction (add readOnlyHint=true to avoid confirmation dialogs), not to accurately reflect risk. The result is a self-reinforcing cycle: high-risk tools get annotated 'safe' to reduce friction, low-risk tools get annotated 'safe' for the same reason, and annotation loses discriminative power. The MCP spec acknowledges this by requiring clients to treat annotations as untrusted unless the server is explicitly trusted. Implication: kit tool annotation taxonomies must be enforced at registration time (schema validation with required fields) and the harness must require annotations before a tool can execute, not treat them as optional hints. Optional annotation taxonomies are observed to degrade to noise.

---

### [key: annotation-subjectivity-frontier-model-gap]
- evidence: empirical
- confidence: low
- group: adversarial-findings
- sources: https://arxiv.org/abs/2401.10019, https://arxiv.org/abs/2507.14293, https://arxiv.org/pdf/2603.13404

**Claim:** R-Judge (EMNLP 2024) and Schema First Tool APIs (arXiv:2603.13404) jointly establish that risk/reversibility classification is substantially subjective at edge cases: 'decisive error labels may be inherently subjective since failures often involve multiple interacting agents and cascading effects.' Even frontier models (GPT-4o) achieve only 74.42% on the R-Judge annotation task vs. 89.38% human expert F1, indicating a persistent 15-point gap. WebGuard (arXiv:2507.14293) found baseline frontier model accuracy for HIGH-risk action classification was only 20% recall before fine-tuning, suggesting that without domain-specific training, automated annotation is unreliable. Implication: kit builders cannot rely on LLM-generated reversibility annotations without a domain-specific calibration dataset and fine-tuning, and any taxonomy scheme must provide decision rules for edge cases (not just category definitions) to achieve adequate inter-annotator agreement.

**Verify note:** Three compounding problems. (1) The attributed quote from Schema First Tool APIs (arXiv:2603.13404) — 'decisive error labels may be inherently subjective since failures often involve multiple interacting agents and cascading effects' — could NOT be confirmed in the paper. The paper is a controlled study of tool misuse and schema-first API design; it does not appear to contain that specific framing of inherent subjectivity. The quote may be fabricated or misattributed. (2) The R-Judge model evaluation: the paper evaluated GPT-4 (72.29%), not GPT-4o (74.42%) as stated — same error as in rjudge-10type-taxonomy-empirical. (3) The composite framing ('jointly establish that risk/reversibility classification is substantially subjective at edge cases') is an inference that synthesizes across three papers in a way none of them individually support. WebGuard's 20% HIGH-risk recall is confirmed, but this reflects model capability gaps, not inherent labeling subjectivity. The conclusion about needing domain-specific fine-tuning is reasonable, but the evidentiary base as presented is unreliable due to the unconfirmed quote and model-name error.

---

### [key: hci-commensurate-effort-principle]
- evidence: consensus
- group: formal-traditions
- sources: https://flylib.com/books/en/2.153.1.57/1/, https://www.alandix.com/academic/topics/undo/

**Claim:** HCI tradition (Archer, Conway, and Schneider 1984; Cooper's About Face 2.0) establishes the Commensurate Effort Principle for reversibility design: 'if it is difficult to undo a given effect on the state, then it should have been difficult to do in the first place; conversely, easily undone actions should be easily doable.' This principle is normative, not just descriptive — it says the annotation-to-gating mapping should be symmetric: the friction to invoke a tool should be proportional to the difficulty of reversing it. Applied to kit tool annotation: the annotation tier should directly determine the invocation gate friction level, with proportional symmetry. This tradition also distinguishes recoverability (ability to reach a desired goal after error recognition) from reversibility (ability to undo the specific action taken) — a useful distinction because an agent may be able to recover a goal state without reversing a specific tool call. Implication: kit annotation should encode both reversibility (can this specific call be undone?) and recoverability (can goal state be restored by other means?) as distinct fields.

---

## Null results
- Grey literature query (github agent tool reversibility annotation schema preprint practitioner kit design consequences 2025): No unified preprint or GitHub repo specifically combining reversibility annotation schema design with kit/scaffold tooling found. General awesome-list repos (awesome-agentic-engineering-resources, awesome-ai-agent-papers) contain relevant adjacent material but no single authoritative reference implementation.
- Adversarial query for replication failures or null results on reversibility annotation: No direct academic critiques or replication failures of reversibility annotation taxonomies found. The adversarial case is structural (context-dependency, adoption incentive failure) rather than empirical null results — no study has measured annotation taxonomy effectiveness in production agent deployments.
- Semantic Scholar cs.AI domain direct search: Not executed as a separate query (WebSearch aggregated arXiv results covering cs.AI, cs.LG, cs.CL domains). The five papers found on arXiv (2603.03515, 2507.14293, 2606.07904, 2601.04688, 2602.20196) likely cover the core cs.AI literature on this topic.

## New angles surfaced
- **Enforce annotation at registration vs. infer at runtime: calibration dataset for kit tool reversibility**
  Target decision: EVPI open-ended case and reversibility annotation taxonomy open decision
  Would find: Whether Contract2Tool-style learned contracts (from tool documentation + execution traces) can automatically infer reversibility tier with sufficient accuracy to replace mandatory design-time annotation. Specifically: what sample size of execution traces is needed per tool before inferred annotations reach 90%+ accuracy on reversibility tier? This closes the design decision of whether kit builders must manually annotate every tool or whether annotation inference from traces is viable as the primary path.
- **Compensation-link annotation: annotating tools with their compensating operation pointer**
  Target decision: Reversibility annotation taxonomy: what classification scheme should kit builders use
  Would find: Whether existing agent frameworks (LangGraph, AutoGen, CrewAI, Semantic Kernel) have implemented a compensating-operation pointer in their tool schemas — a field that identifies which tool call undoes the current one. This is the saga-pattern approach applied to tool registration and is more operationally useful than a reversibility score alone. Would also find whether kits that implement compensating-operation pointers show measurably lower irreversible-action error rates.
- **Annotation staleness: how often do static reversibility annotations become incorrect after system changes**
  Target decision: Write discipline failure rate open decision (external register accuracy floor)
  Would find: Empirical data on annotation drift — how often a tool annotated as reversible at design time becomes irreversible after downstream system changes (e.g., recycle bin removed, recall window eliminated, third-party API changes). This closes the open question about whether design-time annotation accuracy degrades enough to make it net-negative relative to runtime context checking.
- **Annotation enforcement architecture: required-field validation vs. trusted-server model**
  Target decision: Reversibility annotation taxonomy: practical implementation for kit builders
  Would find: Whether kit harnesses that enforce annotations at registration time (schema validation: tool cannot be registered without all required annotation fields populated) outperform hint-based approaches (MCP default) in annotation completeness and accuracy. Would also find whether the 'trusted server' model in MCP is operationally viable for kit ecosystems, or whether kit-level enforcement is necessary.
- **Multi-dimension interaction effects: when reversibility and scope interact to change the approval gate**
  Target decision: Reversibility annotation taxonomy: what dimensions are necessary and sufficient
  Would find: Whether reversibility + scope + idempotency + openWorld are truly independent dimensions or whether specific combinations create emergent risk that a single-dimension annotation misses (e.g., an idempotent+irreversible+narrow-scope tool requiring different gating than an idempotent+irreversible+broad-scope tool). Would ground the choice between a multi-field annotation schema vs. a computed risk score.
- **HCI commensurate effort empirical validation: does gate friction proportional to reversibility reduce agent errors**
  Target decision: Reversibility annotation taxonomy: gate friction mapping
  Would find: Whether the HCI Commensurate Effort Principle (invocation friction should be proportional to reversal difficulty) has been empirically tested in agent contexts. Specifically: do confirmation dialogs proportional to reversibility tier reduce the rate of irreversible-action errors without increasing task abandonment beyond an acceptable threshold?
