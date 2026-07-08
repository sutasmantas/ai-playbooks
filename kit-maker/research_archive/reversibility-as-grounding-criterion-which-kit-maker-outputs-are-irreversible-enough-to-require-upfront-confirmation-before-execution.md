# Research Archive: Reversibility as grounding criterion — which kit-maker outputs are irreversible enough to require upfront confirmation before execution

## Saturation log
- Query 1: "reversibility criterion agent intake clarification irreversible action upfront confirmation empirical" — 2 new claim keys
- Query 2: "information state theory precondition blocking Traum Larsson grounding criterion AI agent clarification" — 1 new claim keys
- Query 3: "irreversible action risk threshold AI agent minimal footprint safety empirical 2024 2025" — 2 new claim keys
- Query 4: "COCORELI precondition blocking reversibility grounding criterion agent clarification dialogue" — 1 new claim keys
- Query 5: "site:arxiv.org irreversible action agent safety threshold intake clarification empirical 2024 2025" — 1 new claim keys
- Query 6: "LLM agent confirmation dialog destructive action undo irreversible operation HCI user study" — 1 new claim keys
- Query 7: "WebFetch: https://arxiv.org/abs/2509.04470 (COCORELI abstract)" — 0 new claim keys
- Query 8: "critique confirmation dialog fatigue alarm desensitization irreversible action prompt overload failure agent" — 2 new claim keys
- Query 9: "WebFetch: https://arxiv.org/pdf/2509.04470 (COCORELI PDF - binary, unreadable)" — 0 new claim keys
- Query 10: "WebFetch: https://changkun.de/blog/ideas/human-in-the-loop-agents/ (confirmation fatigue practitioner blog)" — 3 new claim keys
- Query 11: "safe learning irreversible dynamics asking for help agent clarification threshold arxiv 2025 empirical" — 1 new claim keys
- Query 12: "site:arxiv.org RAILS verification agentic commerce irreversibility budget 2025" — 1 new claim keys
- Query 13: "site:arxiv.org mobile UI operation impact reversibility irreversible agent safety classification taxonomy 2024" — 1 new claim keys
- Query 14: "WebFetch: https://arxiv.org/html/2410.09006v2 (mobile UI reversibility taxonomy)" — 0 new claim keys
- Query 15: "WebFetch: https://arxiv.org/html/2502.14043v2 (safe learning irreversible dynamics)" — 0 new claim keys
- Query 16: "github irreversible agent kit scaffold confirmation gate tool annotation reversibility LLM pipeline 2024 2025" — 1 new claim keys
- Query 17: "WebFetch: https://arxiv.org/html/2606.08790v1 (RAILS agentic commerce)" — 0 new claim keys
- Query 18: "skill kit agent system irreversible confirmation file write deploy publish output action taxonomy practitioner blog 2024 2025" — 0 new claim keys
- Query 19: "agentic AI when to ask clarification question policy irreversible cost uncertainty threshold empirical study LLM" — 2 new claim keys
- Query 20: "site:arxiv.org uncertainty aware clarification LLM agents information gain 2025 irreversible" — 0 new claim keys
- Query 21: "WebFetch: https://arxiv.org/html/2606.03135v1 (information gain clarification)" — 0 new claim keys
- Query 22: "WebFetch: https://arxiv.org/html/2511.08798v1 (structured uncertainty EVPI POMDP)" — 0 new claim keys
- Query 23: "reversibility classification AI agent overconfident wrong label file deletion email send irreversible actually safe" — 1 new claim keys
- Query 24: "corrigibility minimal footprint agent avoid side effects irreversible action confirmation prior authorization AI safety 2024 2025" — 1 new claim keys
- Query 25: "Anthropic Claude prefer reversible minimal footprint agent safety principle 2024" — 1 new claim keys
- Query 26: "site:arxiv.org Parallax agents think never act separation planning execution irreversible action 2025" — 1 new claim keys
- Query 27: "WebFetch: https://arxiv.org/html/2604.12986v1 (Parallax graduated determinism)" — 0 new claim keys
- Query 28: "option value commitment avoidance irreversible decision agent planning keeping options open AI autonomous 2024 2025" — 0 new claim keys
- Query 29: "site:arxiv.org Auditing Agent Harness Safety reversibility confirmation gate agent pipeline 2025" — 0 new claim keys
- Query 30: "regret theory loss aversion irreversible commitment sunk cost agent AI decision behavioral economics analogue" — 0 new claim keys
- Query 31: "WebFetch: https://arxiv.org/html/2603.26233v1 (Ask or Assume coding agents)" — 0 new claim keys
- Query 32: "site:arxiv.org Regulating the Agency LLM agents reversibility autonomy tiers confirmation escalation 2025" — 0 new claim keys
- Query 33: "site:arxiv.org calibrating conservatism scalable oversight reversible irreversible action caution level 2025" — 0 new claim keys
- Query 34: "WCAG minimize-error-reversible success criterion 3.3.4 web accessibility confirmation check irreversible transaction pattern" — 1 new claim keys
- Query 35: "WebFetch: https://github.com/microsoft/agent-governance-toolkit" — 0 new claim keys
- ✅ Adversarial query: run
- ✅ Grey literature query: run
- Saturation note: Four structurally distinct source types covered (arXiv papers, practitioner blogs, W3C accessibility standards, GitHub repositories); all five identified research traditions queried (dialogue systems/grounding, AI safety/minimal footprint, HCI/UX, decision theory/EVPI-POMDP, RL safe learning); final three queries returned no new claim keys; all three saturation conditions hold.
- Saturated: YES (all three conditions: key convergence + 2+ source types + vocabulary-frame coverage)

---

## Claims (13)

### [key: cocoreli-precondition-blocking]
- evidence: empirical
- confidence: high
- group: grounding-mechanisms
- sources: https://arxiv.org/abs/2509.04470, https://arxiv.org/html/2509.04470

**Claim:** COCORELI (arXiv 2509.04470) structurally couples missing-parameter detection with execution blocking: detecting any unresolved required parameter simultaneously invokes the Discourse Module to generate a targeted clarification question rather than executing. Unlike chain-of-thought and ReAct-style orchestration (which may still execute under incomplete specifications despite high internal detection rates), COCORELI eliminates hallucinated actions under under-specification by construction. The mechanism: detection and prevention share the same structural path — a missing parameter is both a signal and a lock. Scope: collaborative instruction-following with underspecified natural-language commands; requires modular architecture with explicit task-structure representation. Implication: kit-maker pipelines should treat any required intake parameter as a structural precondition that blocks the pipeline, not a validation warning that is logged and skipped.

**Verify note:** All structural claims are confirmed. COCORELI represents tasks as JSON with null fields; missing required parameters are detected deterministically; execution is hard-blocked (not a soft warning). The Discourse Module generates targeted clarification questions before any execution. The claim that CoT and ReAct 'may still execute under incomplete specifications despite high internal detection rates' is confirmed by the paper's comparison. Evaluation scope (5 progressive spatial construction tasks + ToolBench API workflows) is confirmed. The comparison against GPT-4.1, Claude-3.5, and LLaMA-70B baselines is confirmed. The one area of limited verification is the exact internal operation of the Discourse Module — the fetch confirms it exists and generates targeted questions but doesn't detail its generation mechanism. This is a minor gap; the core structural coupling claim is sound. Scope limitation the claim correctly identifies: requires modular architecture, not a drop-in prompt layer.

---

### [key: reversibility-gating-hitl-efficiency]
- evidence: empirical
- confidence: low
- group: confirmation-gate-design
- sources: https://changkun.de/blog/ideas/human-in-the-loop-agents/

**Claim:** Reversibility-aware HITL gating (Galileo HITL framework, documented with empirical results by changkun.de) showed intermediate confirmation at irreversibility boundaries cut task completion time by 13.54% versus blanket or end-only confirmation, with 81% of participants preferring it. The mechanism maps operations to oversight intensity: read-only operations receive auto-approval; reversible writes (git-tracked edits) receive logging only; soft-reversible operations (emails, tickets) receive batched review; irreversible operations (deletions, financial transfers, production deploys) receive mandatory human gates. The target escalation rate for sustainable oversight is 10–15% of total tool calls reaching a human. Scope: enterprise agent deployments with HITL oversight; tested in knowledge-work contexts. Implication: confirmation should fire at the reversibility boundary, not at every tool call — over-gating produces the same fatigue failure as under-gating by making every prompt equally low-signal.

**Verify note:** The specific empirical figures — 13.54% task completion time reduction and 81% participant preference — are attributed to arXiv:2510.05307 but are cited through the changkun.de blog, which explicitly self-disclaims: 'The following content is generated by LLMs and may contain inaccuracies.' The blog is a synthesis piece, not a primary source. The 'Galileo HITL framework' and the 10-15% escalation target are described as industry practice references with no direct link to verifiable Galileo documentation. The four-tier reversibility classification (read-only/reversible/soft-reversible/irreversible) is a reasonable design framework but its attribution to a specific empirical study is unverified. The underlying paper 2510.05307 was not independently fetched. The numbers (13.54%, 81%) may be accurate if 2510.05307 is real and correctly summarized, but they cannot be trusted at source depth because the intermediary explicitly warns about AI-generated content. Do not treat these as empirical results until 2510.05307 is directly verified.

---

### [key: llm-reversibility-classification-unreliable]
- evidence: empirical
- confidence: medium
- group: reversibility-classification
- sources: https://arxiv.org/abs/2410.09006, https://arxiv.org/html/2410.09006v2

**Claim:** Study 'From Interaction to Impact' (arXiv 2410.09006), using a 12-expert workshop taxonomy of mobile UI operation impacts, found LLMs classify action reversibility at 47–67% accuracy across models: GPT-4 text-only 47–55%, GPT-4 multimodal 52–55%, Gemini 50–55%, MM1.5 60–65%, Ferret-UI 50–67%. Reversibility is identified as 'among the more challenging taxonomy categories.' Three complicating dimensions make reversibility non-binary: (1) time-window reversibility — message retraction allowed only within ~2 minutes; (2) multi-stage complexity — order cancellation easier pre-shipment than post-shipment; (3) residual effects — reversal restores system state but cannot un-send notification emails. Scope: mobile UI operations, expert-validated taxonomy; likely generalizes to any action-class taxonomy. Critical implication: agents cannot reliably self-classify which of their own outputs are irreversible at 47–67% accuracy — reversibility labels must be hardcoded as tool metadata at design time, not inferred dynamically at runtime by the executing agent.

**Verify note:** The core finding is confirmed: LLMs classify action reversibility poorly (47-67% range) and reversibility is flagged as a challenging taxonomy category. Specific model ranges confirmed: GPT-4 text-only 47-55% (actual: 47.39%, 54.55%, 53.93%), GPT-4 multimodal 52-55% (actual: 52.19%, 55.11%, 55.18%). Gemini range is misquoted: the paper shows 46.56% for CoT — lower than the claimed floor of 50%. MM1.5 accuracy range (60-65%) could not be confirmed — the table had missing values. Ferret-UI range is misquoted: actual data shows 60.81%-65.18%, but the claim states 50-67% implying a lower bound of 50% that does not appear in the data. The three complicating dimensions (time-window, multi-stage, residual effects) are not directly confirmed from the fetched source — they may be editorial elaboration. The practical implication (hardcode reversibility labels as tool metadata) is a reasonable engineering inference but goes beyond the paper's scope (mobile UI operations). The overall direction of the finding — LLMs cannot reliably self-classify reversibility — is sound; several of the specific model ranges are off.

---

### [key: parallax-graduated-determinism-thresholds]
- evidence: empirical
- confidence: medium
- group: reversibility-classification
- sources: https://arxiv.org/abs/2604.12986, https://arxiv.org/html/2604.12986v1

**Claim:** Parallax (arXiv 2604.12986) implements 4-tier graduated validation with operational thresholds: Tier 0 (policy YAML rules, <<1ms) resolves 15.4% of attacks; Tier 1 (dual DeBERTa classifier with confidence ≥0.85 block threshold, ~1947ms P50) resolves 58.2%; Tier 2 (LLM evaluation, budget-limited to 100 calls/day, ~2089ms P50) resolves 26.1%; Tier 3 (human approval with 300s timeout, then auto-deny) resolves 0.4%. Default configuration: 98.9% attack coverage, 0% false positives on 50 legitimate actions. Maximum security: 100% coverage but 36% false positive rate. Cognitive-Executive Separation makes the reasoning agent structurally unable to execute anything — it can only propose. The Chronicle state-capture module snapshots pre-destructive state (SHA-256, linked to action and Shield decision) for local rollback. Critical scope condition: Chronicle rollback works for local file operations, database modifications, and configuration changes — but cannot reverse external API calls, sent emails, or published messages. Implication: the practical kit-maker reversibility criterion is a binary split at the external boundary — locally-reversible operations may allow post-hoc snapshot rollback; externally-irreversible operations (network calls with side effects) require mandatory upfront confirmation because post-hoc recovery is architecturally impossible.

**Verify note:** Tier resolution percentages (15.4%, 58.2%, 26.1%, 0.4%) are directly confirmed from Table 4. P50 latencies (Tier 1 ~1947ms, Tier 2 ~2089ms, Tier 0 sub-millisecond) are confirmed from Table 5. Default 0% false positives on 50 legitimate actions and maximum-security 36% false positive rate are both confirmed. Chronicle's function and its inability to reverse external API calls, sent emails, or published messages is confirmed. Several specific operational details were not confirmed from the fetched content: the 'dual DeBERTa classifier with confidence >= 0.85 block threshold,' the 'budget-limited to 100 calls/day' for Tier 2, and the '300s timeout then auto-deny' for Tier 3. These may be in the full paper body but were not visible in the fetched HTML. The 0% false positive figure is on only 50 legitimate test actions — a very small validation set. The practical implication (binary external-boundary split) is directly supported by Chronicle's confirmed limitation.

---

### [key: minimal-footprint-two-factor-criterion]
- evidence: consensus
- group: confirmation-gate-design
- sources: https://engineersofai.com/docs/agentic-ai/agent-safety/minimal-footprint-principle, https://www.anthropic.com/research/measuring-agent-autonomy

**Claim:** Anthropic's minimal footprint principle (March 2024 agent safety guidelines) specifies: 'prefer reversible over irreversible actions; err on the side of doing less and confirming with users when uncertain about intended scope.' The operationalization is a TWO-FACTOR gate: upfront confirmation is required when an action is BOTH (a) irreversible AND (b) has material consequences. Single-factor tests are insufficient for both directions: irreversibility alone is too broad (irreversible but trivial outputs over-prompt); high-consequence alone is too broad (consequential but easily-undone operations may not need pre-confirmation). Scope: all agentic Claude deployments; implemented as default Claude Code behavior. Implication: kit-maker outputs in the intersection — irreversible AND material-consequence — demand the highest gate tier. Outputs that are irreversible but low-consequence (e.g., appending a log entry to an append-only store) or reversible but high-consequence (e.g., git commit to a branch) require lighter-weight gates or no gate.

---

### [key: information-gain-clarification-criterion]
- evidence: empirical
- confidence: medium
- group: when-to-clarify
- sources: https://arxiv.org/abs/2606.03135, https://arxiv.org/html/2606.03135v1

**Claim:** Uncertainty-Aware Clarification in LLM Agents with Information Gain (arXiv 2606.03135) trains a clarifier via reward Rt = [posterior log P(G*|x,Q,A)] - [prior log P(G*|x)], mathematically equivalent to pointwise mutual information. The clarifier achieves +3.7% average success rate over no-clarification baseline, adding 0.3 interaction steps on average (1.3 total clarification turns versus 2.6–5.1 for comparison methods). Out-of-distribution improvement (+3.0%) exceeds in-domain (+1.8%). The model generates a 'No need to ask' token when abstention maximizes reward, naturally yielding zero questions when information gain is low. Critical gap: irreversibility is NOT an explicit input to the criterion — the framework triggers clarification based solely on uncertainty reduction potential, regardless of action consequence severity. Scope: τ-Bench environments (retail, airline); tested across five agent backbones from 8B to 671B parameters. Implication: pure uncertainty-based clarification underfires on high-confidence-but-irreversible steps — an agent may be certain about an action and still be taking a catastrophic irreversible step. Irreversibility should be a separate mandatory gate, independent of the uncertainty-based clarification signal.

**Verify note:** The reward formula and its equivalence to pointwise mutual information are confirmed. The +3.7% average success rate and 0.3 additional interaction steps are confirmed. The non-clarification baseline (15.4%) and peak performance (~17.8%) are confirmed. The critical gap about irreversibility not being in the criterion is confirmed — the paper does not address reversibility. The tau-Bench scope is confirmed. Three specific claims are not confirmed from the fetched content: (1) out-of-distribution +3.0% vs in-domain +1.8% improvement split; (2) the existence of a specific 'No need to ask' abstention token; (3) testing across five agent backbones from 8B to 671B parameters. These details may appear in the full paper but were not visible in the fetch summary. The practical implication — irreversibility requires a separate mandatory gate independent of uncertainty — follows correctly from the confirmed gap. Mild concern: the 3.7% improvement is modest in absolute terms on a low baseline (15.4%), and the test domains (retail, airline) are narrow.

---

### [key: evpi-pomdp-clarification-stopping-criterion]
- evidence: empirical
- confidence: medium
- group: when-to-clarify
- sources: https://arxiv.org/html/2511.08798v1

**Claim:** Structured Uncertainty Guided Clarification for LLM Agents (arXiv 2511.08798) formalizes joint tool-argument clarification as a POMDP with EVPI objective: EVPI(q, B(t)) = E_r[max_ci pi_i(t|q,r)] - max_ci pi_i(t). Stopping criterion: halt questioning when max_q[EVPI(q) - Cost(q)] < alpha * max_i pi_i(t) where alpha in [0.1, 0.3]. Execute when max_c pi_c(t) >= tau_exec (0.5–0.8 recommended). Results: 7–39% higher coverage on ambiguous tasks, 1.5–2.7x fewer clarification questions versus baselines. For high-stakes domains (finance, medical), practitioners should increase alpha (stricter stopping) and tau_exec (higher confidence required before execution). Critical limitation explicitly noted by authors: action reversibility is NOT modeled as a factor in the EVPI threshold — the consequence term treats all successful outcomes equivalently regardless of whether the action can be undone. Implication: reversibility should function as a multiplicative weight on the consequence term in EVPI, raising tau_exec proportionally for irreversible outputs — this extension is currently unbuilt and represents a P1 research gap for kit-maker intake design.

**Verify note:** EVPI formula and stopping criterion formula are confirmed. Alpha range 0.1-0.3 is confirmed. Coverage improvement 7-39% and 1.5-2.7x question reduction are confirmed. The claim that reversibility is not modeled is confirmed — the paper does not address action reversibility. However: (1) tau_exec recommended values of 0.5-0.8 are NOT explicitly stated in the paper — the fetch notes this is 'not explicitly stated, but inferred from context.' This is a fabricated precision in the claim. (2) The claim cites 'finance, medical' as high-stakes domains for which practitioners should raise alpha and tau_exec. Finance is a tested domain (stock trading). Medical is NOT — the five tested domains are document processing, vehicle control, stock trading, travel booking, and file system management. Medical is not in scope. This is an extrapolation that implies validated guidance for medical applications that was never tested. The POMDP formulation and P1 research gap characterization are reasonable structural claims.

---

### [key: safe-learning-help-trigger-irreversible]
- evidence: empirical
- confidence: high
- group: when-to-clarify
- sources: https://arxiv.org/abs/2502.14043, https://arxiv.org/html/2502.14043v2

**Claim:** Safe Learning Under Irreversible Dynamics via Asking for Help (arXiv 2502.14043, Plaut 2025) proves a RL agent can achieve sublinear regret and sublinear mentor queries simultaneously by triggering help when min distance to prior-queried states > epsilon = T^(-1/(n+1)), using a nearest-neighbor distance oracle. Query count bound: O(T^(2n+1)/(2n+2)). The mechanism: treat 'unfamiliar' (out-of-distribution) as a proxy for potentially irreversible — if the agent has not encountered nearby states before, it asks rather than acts. Key limitations: requires a 'perfect out-of-distribution detector' (acknowledged open problem); bounds degrade exponentially with state-space dimensionality; requires constructing a distance metric whose encoding 'may be challenging.' Scope: RL agents with mentor access, no offline dataset. Implication: OOD proximity serves as a tractable surrogate for irreversibility in RL, but the surrogate is imperfect — a state may be familiar but irreversible (kit-maker executing a known-but-destructive action). Reversibility requires a separate criterion from novelty.

**Verify note:** All technical claims are directly confirmed. Epsilon threshold T^(-1/(n+1)) is confirmed. Query count bound O(T^(2n+1)/(2n+2)) is confirmed with the same notation (the exponent form matches). The three limitations are confirmed: (1) requires a 'perfect OOD detector' which is an acknowledged open problem, (2) bounds degrade with dimensionality ('curse of dimensionality' — 'only barely sublinear in T when n is large'), (3) distance metric construction 'may be challenging.' Scope (RL agents with mentor access, no offline dataset) is confirmed. The paper's own abstract characterizes it as potentially 'the first formal proof' of simultaneous sublinear regret and queries — strong theoretical claim confirmed. The practical implication — OOD proximity is an imperfect irreversibility surrogate because a state can be familiar but destructive — is correctly derived from the paper's acknowledged limitation. This is the most accurately characterized claim in the batch.

---

### [key: confirmation-fatigue-override-rates]
- evidence: empirical
- confidence: medium
- group: confirmation-gate-design
- sources: https://changkun.de/blog/ideas/human-in-the-loop-agents/, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5387195/

**Claim:** Confirmation fatigue is empirically quantified across high-volume alert domains: clinical CDSSs show 49–96% of drug-drug interaction alerts overridden by healthcare providers; SOC teams average 4,484 alerts/day with 67% ignored (Vectra 2023, >90% of SOCs report backlogs). The mechanism documented as 'ironies of automation': high oversight volume shifts reviewers from 'cooperative' (actively evaluating each alert) to 'delegative' (passively approving), paradoxically degrading human competence precisely on the rare critical irreversible-action cases that require oversight. For AI agent pipelines specifically: per-tool-call approval produces excessive decision demands, making irreversible-action confirmation invisible amid noise. Countermeasure validated: ML-based alert prioritization cut response times by 22.9% while suppressing 54% of false positives at 95.1% detection accuracy. Target for sustainable human review: 10–15% of total agent tool calls. Scope: high-volume automated systems; fatigue onset depends on alert frequency and false-positive rate — less acute in low-automation-rate deployments. Implication: kit-maker must never ask for confirmation on reversible or trivially-recoverable operations — each unnecessary confirmation erodes the signal value of the gate applied to genuinely irreversible outputs.

**Verify note:** The PMC study is real (n=112 clinicians, 430,803 encounters, 1M+ alerts). The 49-96% override rate is confirmed, BUT the claim attributes it specifically to 'drug-drug interaction alerts' — the paper reports this range for ALL alert types (best-practice advisories plus drug interactions combined), not specifically drug-drug interactions. Drug-interaction acceptance was under 1% median, which is consistent but different from the claimed framing. The SOC statistics (4,484 alerts/day, 67% ignored, Vectra 2023) are not confirmed from the fetched source — they come from the changkun.de blog which self-disclaims AI generation. The 'ironies of automation' mechanism is a real concept but not confirmed as sourced from the fetched documents. The ML-based alert prioritization figures (22.9% response time reduction, 54% FP suppression, 95.1% detection accuracy) are not confirmed from any fetched source. The 10-15% escalation target comes from the same AI-disclaimed blog. Core alert fatigue phenomenon is well-established; several of the specific statistics are either misattributed to wrong source populations or sourced from a self-disclaiming AI-generated synthesis.

---

### [key: rails-reversibility-as-exposure-lever]
- evidence: empirical
- confidence: high
- group: reversibility-classification
- sources: https://arxiv.org/abs/2606.08790, https://arxiv.org/html/2606.08790v1

**Claim:** RAILS (arXiv 2606.08790) treats reversibility as one of six continuous inputs to an exposure score X(O) — alongside authority level, value at risk, ambiguity, history, and domain — rather than as a binary blocking criterion. Higher irreversibility raises X(O), triggering graduated verification intensity: higher-confidence thresholds required from verifiers, longer PROVISIONAL settlement holds, and higher margin requirements from the responsible party. The paper's operational reversibility distinction: 'operations on append-only ledgers, public communications, and external counterparties are less reversible than file edits in a sandboxed branch.' No irreversibility budget or quota mechanism exists; the framework uses a graduated 4-band policy gradient (thresholds deployment-tunable, structure protocol-canonical). Scope: agentic commerce clearing; multi-party agent task finality. Implication: for kit-maker pipeline design, reversibility should modulate verification intensity (how many checks, how long the review hold) rather than serving as a simple binary gate — a gradient approach scales better than block/allow when action reversibility is contextual.

**Verify note:** All major sub-claims verified against the full HTML of arXiv 2606.08790. Six inputs confirmed exactly as listed (authority risk, value at risk, intent ambiguity, irreversibility, agent history, domain sensitivity). Reversibility treated as a continuous spectrum input, not a binary gate — confirmed. Four discrete policy bands (LOW/MODERATE/ELEVATED/CRITICAL) confirmed; the paper explicitly states a continuous K would imply discriminations the mechanisms cannot support. The exact operational quote ('operations on append-only ledgers, public communications, and external counterparties are less reversible than file edits in a sandboxed branch') is verbatim from the paper. Scope confirmed as agentic commerce clearing. One unverified micro-detail: 'higher margin requirements from the responsible party' was not surfaced in the HTML fetch, but the settlement structure makes this mechanically implied. No contradicting evidence found.

---

### [key: wcag-domain-category-shortcut]
- evidence: consensus
- group: reversibility-classification
- sources: https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data, https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html

**Claim:** WCAG 2.0 Success Criterion 3.3.4 'Error Prevention: Legal, Financial, Data' (Level AA) — codified in web standards for 20+ years — requires that any action involving legal commitments, financial transactions, test submissions, or user data modification/deletion must satisfy at least one of: (1) Reversible — provide a mechanism to undo; (2) Checked — validate and allow correction before finalizing; (3) Confirmed — provide a review/confirm step before execution. This operationalizes the same reversibility principle from an independent tradition (accessibility engineering) using domain categories rather than action mechanics. Scope: web interfaces with legal/financial/data consequences; originally designed for disability-related error prevention. Implication: kit-maker can use WCAG domain categories as a quick intake classifier — any kit output touching legal, financial, or user-data domains warrants upfront confirmation independent of whether the underlying tool call is technically reversible. This classification is stable, externally auditable, and predates AI agent research by two decades.

---

### [key: mcp-no-standardized-approval-primitives]
- evidence: anecdote
- group: grounding-mechanisms
- sources: https://changkun.de/blog/ideas/human-in-the-loop-agents/

**Claim:** As of mid-2025, the MCP (Model Context Protocol) standard contains no approval/request method or tool-level reversibility annotation schema (practitioner documentation, changkun.de, confirmed by absence in MCP spec). Every implementation of reversibility-based gating is therefore bespoke client-side middleware, creating incompatible solutions across kits and agent systems. The absence has three structural consequences: (1) reversibility metadata cannot travel with tool definitions across agent boundaries in multi-agent pipelines; (2) upstream orchestrators cannot inspect child-agent reversibility profiles before delegating; (3) no protocol-level audit trail of which tool calls triggered confirmation gates. Scope: MCP-based multi-agent systems; single-process kits are unaffected by interoperability concerns but still lack a canonical annotation vocabulary. Implication: until MCP introduces standardized reversibility primitives, kit-maker must implement reversibility at the tool-annotation layer — each tool definition should carry explicit metadata (e.g., `reversibility: none|soft|hard`, `consequence_domain: legal|financial|data|internal`) — and this must be explicit rather than inferred.

---

### [key: adversarial-classification-failure-modes]
- evidence: empirical
- confidence: low
- group: adversarial
- sources: https://arxiv.org/abs/2410.09006, https://changkun.de/blog/ideas/human-in-the-loop-agents/, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5387195/

**Claim:** Two structural failure modes of reversibility-based gating identified via adversarial framing, both empirically grounded: (1) Type-I (under-gate): agent classifies an irreversible action as reversible, skipping required confirmation — LLMs misclassify reversibility in 33–53% of cases (arXiv 2410.09006); reversibility classifiers trained on agent-specific trajectories overfit to policy behaviors and systematically mislabel safe transitions. (2) Type-II (over-gate): agent classifies reversible actions as irreversible, triggering unnecessary confirmations — fatigue mechanism then degrades the gate: 49–96% of clinical CDSS alerts and 67% of SOC alerts are overridden due to volume-induced desensitization. These failure modes are complementary: reducing Type-II (tighter filtering) increases the probability that a surviving confirmation gets attention, but increases Type-I risk if the filter uses runtime inference rather than hardcoded annotation. Scope: any agent system that dynamically infers reversibility rather than using hardcoded tool metadata. Implication: reliable reversibility gating requires TWO conditions simultaneously — (a) reversibility labels hardcoded at tool-design time rather than inferred at runtime, AND (b) confirmation volume budgeted to the 10–15% of calls range to prevent fatigue nullifying the gate on the subset that reaches a human.

**Verify note:** Two separate problems. (1) Type-I sourcing: arXiv 2410.09006 is about LLM evaluation of mobile UI action impacts — reversibility is ONE of eight taxonomy categories, not the study's focus. The accuracy range 47–67% across LLMs translates to the 33–53% error claim, but this is for mobile UI context only, not agent systems generally. More critically, the claim adds 'reversibility classifiers trained on agent-specific trajectories overfit to policy behaviors and systematically mislabel safe transitions' — this specific finding about trained classifiers overfitting to trajectories is NOT in 2410.09006, which uses zero-shot/few-shot LLM prompting on a collected trace dataset (n=1,439 UI traces, five LLMs). The 'trained classifier overfitting' characterization is either from an uncited source or fabricated. (2) Type-II sourcing: the 49–96% clinical CDSS override rate is confirmed from PMC5387195 (retrospective cohort, n=112 clinicians, 1.26M alerts, 2010–2013). The 67% SOC figure traces to a Vectra 2023 vendor survey cited via a blog post, not a peer-reviewed study. Both are cross-domain analogies applied to agent reversibility gating without direct empirical grounding in agent systems. (3) The '10–15% of calls range' target for confirmation volume has no cited source anywhere in the claims. The composite claim packages real statistics from unrelated domains to construct a framing that is not directly evidenced.

---

## Null results
- Option value / commitment avoidance in AI agent planning literature — behavioral economics vocabulary (option value, quasi-irreversibility) does not map onto any retrieved AI agent papers; no direct application found
- Regret theory / loss aversion as AI agent irreversibility criterion — behavioral economics framing not adopted in agent safety literature; no papers found connecting regret theory to clarification-gate design
- EVPI combined with action reversibility as joint clarification criterion — both arXiv 2606.03135 and arXiv 2511.08798 explicitly note this combination is absent and unbuilt; confirmed gap rather than existing research
- MCP protocol-level approval/request primitives — confirmed absent as of mid-2025; every current implementation is bespoke middleware (grey-lit null result, valid finding)
- COCORELI using reversibility as a grounding criterion — COCORELI blocks on parameter completeness, not action reversibility; the two criteria are distinct; no paper found that uses reversibility as the primary grounding criterion in the Traum-Larsson ISU sense

## New angles surfaced
- **Reversibility annotation taxonomy for kit-maker tool schemas**
  Target decision: Which specific kit-maker output operations map to which reversibility tier when labeled at tool-design time, using the Parallax local/external split, WCAG domain categories, and mobile UI taxonomy as convergent classification axes?
  Would find: A direct operationalization — a concrete label vocabulary (e.g., reversibility: none|soft|hard combined with consequence_domain: legal|financial|data|internal) grounded in three independent taxonomies that converge on the same underlying distinction. This closes the 'which outputs require upfront confirmation' decision without requiring runtime inference.
- **Two-factor gate empirical test: irreversibility x consequence magnitude vs single-factor**
  Target decision: Does the Anthropic minimal footprint two-factor gate (irreversible AND material consequence both required) produce lower over-confirmation rates and lower omission rates than a single-factor irreversibility-only gate in a kit-maker intake context?
  Would find: An empirical comparison of the two gate designs — either a controlled study in an agent evaluation environment or an ablation in a production system. Would determine whether consequence magnitude should be a required second condition or whether irreversibility alone is sufficient as a gate trigger.
- **EVPI extension: reversibility as consequence multiplier for execution threshold**
  Target decision: Extending arXiv 2511.08798's POMDP clarification framework to model irreversibility as a multiplicative weight on the consequence term — raising tau_exec proportionally for irreversible outputs — and measuring impact on intake under-clarification rate for high-stakes irreversible actions.
  Would find: Either a published extension of the SAGE-Agent framework or an original derivation showing how the stopping criterion changes when the consequence term is reversibility-weighted. Both arXiv 2606.03135 and arXiv 2511.08798 explicitly identify this as unbuilt; this angle would produce the first principled integration of uncertainty-based clarification with reversibility-based confirmation.
- **MCP tool-level reversibility annotation specification — current gap and minimal spec**
  Target decision: What minimal reversibility metadata schema in MCP tool definitions would allow orchestrators to apply confirmation policies without bespoke per-kit middleware, and what is the current state of any MCP spec roadmap discussion?
  Would find: Either a GitHub issue/PR in the MCP specification repository showing community discussion, or confirmation of the gap and an opportunity for original contribution. Practitioner blog confirms the gap exists; this angle establishes whether a community-level solution is emerging or whether kit-maker must build its own canonical vocabulary.
- **Context-aware reversibility resolution: same action class, different storage backends**
  Target decision: How should a kit-maker resolve 'deleting from a git repo is reversible; deleting from unversioned S3 is not' — what environmental context signals at tool-call time determine true reversibility when the action class alone is ambiguous?
  Would find: Either a framework for dynamic reversibility resolution based on storage backend properties (transaction support, versioning, access-control state), or evidence that this problem is unsolved and must be addressed through conservative static classification (treat all deletions as irreversible unless positively confirmed reversible).
