# Research Archive: Diminishing returns detection in AI agent work — recognizing when a line of work is saturating and what triggers switching to higher-value direction

## Saturation log
- Query 1: "diminishing returns task switching cognitive science when to stop iterating decision research" — 3 new keys
- Query 2: "meta-cognitive monitoring work direction saturation stopping rule problem solving research" — 2 new keys
- Query 3: "goal drift detection AI agent subproblem absorption higher-level goal monitoring" — 4 new keys
- Query 4: "satisficing stopping rule optimal stopping sequential decision empirical psychology" — 4 new keys
- Query 5: "AI agent work allocation ROI prioritization dynamic task switching long-horizon empirical" — 2 new keys
- Saturated: YES

---

## Claims (15)

### [key: mvt-robot-task-switch]
- evidence: empirical
- confidence: low
- group: exploration-exploitation-switching
- sources: https://www.researchgate.net/publication/224090588_Robot_Task_Switching_under_Diminishing_Returns

**Claim:** Robot task-switching research (ResearchGate, 2010s) applied the Marginal Value Theorem (MVT) from foraging ecology to automated work allocation: an agent should switch tasks when the marginal rate of return from the current task falls below the average return rate across all available tasks. The mechanism is a diminishing-returns reward function where continued effort on a single task yields declining incremental value. Scope: tractable for convex-decreasing reward curves; breaks down for non-monotone or multi-modal payoff structures. Kit-maker implication: a pipeline mechanism's value signal should be computed as marginal yield per token/step, not cumulative yield — stopping a line of work when its marginal rate drops below the session average is the correct trigger.

**Verify note:** The ResearchGate URL returns HTTP 403 — the page cannot be verified directly. An arXiv full-text search for the paper's core terms (Robot Task Switching, Diminishing Returns, Marginal Value Theorem) returns zero results. The claim that this paper applies MVT from foraging ecology to robot task-switching and derives the specific 'switch when marginal rate falls below session average' rule cannot be confirmed from any accessible source. The publication ID 224090588 is a ResearchGate internal identifier; without access to the page or an independent record of this paper, the source existence is unverifiable. The kit-maker implication (marginal yield per token as the stopping signal) may be a reasonable engineering inference from MVT generally, but the specific academic grounding attributed to this ResearchGate paper cannot be confirmed. Verdict: low — source inaccessible and unverifiable by independent search.

---

### [key: hrl-task-interleave-n211]
- evidence: empirical
- confidence: medium
- group: exploration-exploitation-switching
- sources: https://arxiv.org/abs/2001.02122

**Claim:** A hierarchical reinforcement learning model of human task interleaving (arXiv:2001.02122, N=211, six-task paradigm) showed that people use a two-level decision structure: a supervisory level learns switching policies from task-specific utility estimates computed at the execution level, rather than greedy/myopic policies. The HRL model predicted individual-level switching behavior better than a marginal-value baseline in environments with complex switch costs and delayed rewards. Mechanism: the upper level accumulates learned utility signals across episodes before deciding to switch — not single-step marginal comparisons. Scope: complex multi-task settings with non-trivial switch costs; myopic MVT performs worse here. Kit-maker implication: a kit's direction-switching signal should aggregate utility estimates over a window of recent steps, not react to any single low-yield step.

**Verify note:** Source exists and is confirmed: arXiv:2001.02122, Gebhardt, Oulasvirta, Hilliges (2020), N=211, six-task paradigm. The two-level HRL architecture (supervisory level uses utility estimates from execution level) is confirmed. The model outperforms a 'myopic baseline' — the claim says 'marginal-value baseline,' but the paper uses the term 'myopic baseline,' which is close but not identical; this is a minor terminological extrapolation. The claim that the supervisory level 'accumulates utility estimates over a window of recent steps' is not stated in the accessible abstract — this is an interpretive addition not confirmed from the source text. The core finding (HRL beats myopic/greedy switching policy) is accurate. N=211 and six-task design are confirmed. The kit implication (window-based utility aggregation) is a reasonable inference but goes beyond what the abstract explicitly states. Verdict: medium — paper and core claims confirmed; 'window accumulation' mechanism detail and 'marginal-value baseline' terminology are unverified extrapolations.

---

### [key: iteration-local-max-sequential]
- evidence: empirical
- confidence: medium
- group: iteration-saturation
- sources: https://arxiv.org/abs/2603.00722

**Claim:** An economics/innovation study (arXiv:2603.00722, Kagan et al.) found that iterative workflow produces quick early gains but its performance advantage narrows over time. Mechanism: iteration forces broader solution search and prevents myopic idea refinement that terminates at a local maximum; however once the broad search space is covered, additional iterations yield diminishing marginal improvement. Sequential (non-iterative) work reliably reaches suboptimal local maxima. Key scope condition: the advantage is strongest when balanced performance across multiple components is required and weakest when one strong component can compensate for weaker ones. Kit-maker implication: budget mechanism iterations with a front-loaded schedule — allocate more passes to early phases (exploration) and enforce a hard cut after convergence signals (plateau detection) to avoid wasted iterations at the tail.

**Verify note:** Source exists: arXiv:2603.00722, Kagan et al. (submitted Feb 2026). Core claims confirmed: iterative workflow produces broader search and avoids local maxima; sequential work produces more myopic refinement ending at suboptimal local maxima; advantage is strongest when balanced performance across multiple components is required and weakest when one strong component can compensate. The claim about 'quick early gains narrowing over time' is partially supported — the abstract confirms advantages are time-dependent — but the specific 'front-loaded diminishing returns' framing is an interpretive extension. The paper is a preprint (not yet peer-reviewed), which is not disclosed in the claim. Replication status: single study, February 2026, no independent replications identified. Verdict: medium — paper exists, core directional findings confirmed, preprint status not disclosed, specific timing/budget implication is inferential.

---

### [key: metacog-stopping-criterion]
- evidence: consensus
- group: metacognitive-stopping
- sources: https://escholarship.org/content/qt8pb5j26h/qt8pb5j26h_noSplash_74c91a981618c024c6c65cfc84d7f1af.pdf, https://www.psicologia.ulisboa.pt/wp-content/uploads/2020/03/Ackerman-Thompson-2017.pdf

**Claim:** Metacognitive stopping-rule research (Ackerman & Thompson 2017 meta-reasoning framework; Tversky/Kahneman era work synthesized in eScholarship qt8pb5j26h) established that people stop investing effort when their confidence monitoring signal crosses a personal stopping criterion — not when they reach a solution quality threshold. The mechanism is a positive-going confidence signal (time-on-task increases confidence) combined with a willingness to lower the aspiration level under time pressure, creating a negative-correlation pattern. Scope: applies to insight and analytic problems; confidence is a poor proxy for accuracy, so the stopping criterion fires at felt-fluency peaks rather than true quality peaks. Kit-maker implication: a kit must not rely on an agent's self-reported confidence as a stopping signal — it will fire early at fluency rather than quality; use external quality probes (e.g., a critic pass) to override premature stops.

---

### [key: discounted-satisficing-dynamic-threshold]
- evidence: empirical
- confidence: medium
- group: satisficing-stopping
- sources: https://scholarsmine.mst.edu/masters_theses/7951/

**Claim:** Thesis research (Scholarsmine MST, 2020s) modeled human stopping time using a discounted satisficing heuristic: an agent stops when total accumulated utility exceeds a dynamic threshold that decays with time. The discount factor represents temporal erosion of the aspiration level itself — making stopping progressively easier as time passes. This explains why humans stop earlier than optimal in scarce-option environments and overshoot in plentiful environments. Mechanism: the threshold lowers in proportion to elapsed effort, not just the next available option's quality. Scope: validated across single-attribute and multi-attribute utility tasks with crowdsourced human data. Kit-maker implication: model the kit's own work-stopping criterion as a decaying aspiration threshold — the longer a mechanism has run without breakthrough, the lower the bar for declaring that direction saturated and pivoting.

**Verify note:** Source exists: MST Scholarsmine thesis, Devaguptapu (2020), M.S. Computer Science. Core model confirmed: discounted satisficing heuristic with a dynamic threshold that decays over time; agent stops when accumulated utility exceeds this decaying threshold. Three payoff conditions confirmed (single-attribute, multi-attribute known weights, multi-attribute unknown weights). Crowdsourced/lab data confirmed. However, the specific sample size is not reported on the accessible page — the claim says 'crowdsourced human data' which matches but no N is given in accessible content. Thesis work is by nature not peer-reviewed or independently replicated. The claim correctly notes 'validated across' these conditions but does not disclose the thesis-only status. The mechanism description (threshold lowers in proportion to elapsed effort) is accurate per the accessible summary. Verdict: medium — thesis exists, model description accurate, sample size unverified, no peer review or replication.

---

### [key: ltm-linear-threshold-94pct-optimal]
- evidence: empirical
- confidence: high
- group: satisficing-stopping
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC7293628/

**Claim:** A linear threshold model for optimal stopping (PMC7293628, 3 experiments: N=129, 172, 95) found that humans achieve 94% of optimal stopping performance using a simple linear threshold rule: ti+1 = ti + δ·i (threshold increases linearly over the sequence). Despite using only 3 parameters versus 10 for the Biased Optimal Model, the LTM fit was superior, with only 7-10% of participants showing poor fit compared to 20-55% for the theoretically-optimal model. Key finding: humans stop about one position earlier than optimal in scarce environments (F(2,268)=11.5, p<.0001) — an early-termination bias. Mechanism: simplicity bias toward linear reasoning; the brain does not compute the mathematically optimal nonlinear threshold. Scope: sequential search tasks; generalizes to real-world settings (Amazon pricing task). Kit-maker implication: design the saturation signal as a linearly-rising threshold (not a fixed one) — early in a work sequence the bar for continuing should be low, rising as the sequence extends, which mirrors human stopping intuition and avoids both premature and overly late abandonment.

**Verify note:** Source exists and is fully confirmed: PMC7293628, Baumann, Singmann, Gershman, von Helversen, PNAS 2020. All specific quantitative claims verified: N=129, 172 (split across conditions: 86+102+84 reported as experiment 2 total), 95; 94% of optimal (6% loss confirmed); F(2,268)=11.5, p<.0001 confirmed; threshold formula ti+1 = ti + delta*i confirmed as Equation 2; LTM poor fit 7-10% vs BOM 20-55% confirmed. The claim that LTM uses 3 parameters vs 10 for BOM could not be directly verified from accessible text but is consistent. One nuance: the N=172 in the claim appears to be the total of the three sub-conditions in Experiment 2 (86+102+84=272, not 172) — minor discrepancy. The 'early termination bias' (stopping one position earlier in scarce environments) is stated. PNAS publication indicates peer review. This is one of the most precisely sourced claims in the batch. Verdict: high — all major quantitative details verified in accessible full text; one minor N figure may be imprecise.

---

### [key: goal-drift-context-window-all-models]
- evidence: empirical
- confidence: medium
- group: goal-drift-detection
- sources: https://ojs.aaai.org/index.php/AIES/article/view/36541, https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** AAAI/ACM empirical evaluation of goal drift in LM agents (Zylos/AAAI-AIES 2026) found all evaluated models exhibit measurable goal drift, with drift correlating with increasing context length due to pattern-matching behaviors that override explicit objectives. The best-tested agent (scaffolded Claude 3.5 Sonnet) maintained near-perfect goal adherence for over 100,000 tokens before degradation. Mechanism: recent environmental cues statistically dominate early instructions as context grows — a recency bias in attention. Scope condition: well-aligned strong models are robust to direct adversarial pressure but vulnerable when conditioned on weaker agent trajectories (inherited drift). Kit-maker implication: goals must be externalized outside the context window — a persistent goal document that is explicitly re-read at decision junctions, not kept only in the prompt preamble.

**Verify note:** Source 1 (AAAI AIES paper) exists and is confirmed: Arike, Donoway, Bartsch, Hobbhahn (2025), AAAI/ACM AIES. All-models finding confirmed. Claude 3.5 Sonnet 100,000+ token adherence confirmed. Recency/pattern-matching mechanism confirmed. However, the claim that inherited drift from weaker trajectories is in THIS paper is not confirmed from accessible content — the AAAI paper abstract does not discuss inherited drift; that finding is in a separate paper (arXiv:2603.03258). The claim bundles two papers' findings as if from one source, which is a misattribution of scope. The Zylos.ai secondary source is a company blog (not peer-reviewed), and it aggregates findings from multiple papers; citing it alongside the AAAI paper blurs the sourcing. Verdict: medium — core findings (all models drift, context length correlation, Claude Sonnet 100k threshold) are confirmed in the AAAI paper; inherited drift claim attributed to wrong source; Zylos is a commercial blog not a research institution.

---

### [key: subgoal-displacement-6pct-to-43pct]
- evidence: empirical
- confidence: low
- group: goal-drift-detection
- sources: https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** Goal-persistence research (Zylos 2026, citing subgoal framework experiments) found that subgoal displacement — over-optimization of intermediate tasks eroding parent objectives — is a primary drift mechanism. Milestone-based reward training (explicit subgoal checkpoints) improved task success rates from 6.4% to 43.0% versus sparse terminal reward alone. Mechanism: without explicit subgoal anchoring, the agent optimizes the most recently active objective; the parent goal fades because it generates no proximal reward signal. Scope: multi-step tasks with dependent subtasks; effect is most pronounced as context grows past the point where early instructions are statistically diluted. Kit-maker implication: structure work as milestone-gated phases where each phase completion requires explicit re-confirmation of the top-level goal before the next phase begins — this is the structural equivalent of milestone-based reward.

**Verify note:** The specific improvement figure (6.4% to 43.0%) is confirmed on the Zylos.ai page, attributed to 'Gemma3-12B' using the MiRA (milestone-based RL) framework. However: (1) Zylos.ai is a company blog, not a peer-reviewed source; (2) the improvement is for a specific model (Gemma3-12B) on a specific framework, not a general finding — the claim presents it as a general principle about 'milestone-based reward training'; (3) the mechanism description (parent goal fades without proximal reward signal) is a reasonable inference but the specific 6.4%/43.0% figures are from a single non-peer-reviewed report on one model; (4) no independent replication identified; (5) the claim cites 'Zylos 2026' as the source but Zylos is a commercial entity with product interests in this space, creating potential bias. Verdict: low — figures appear on the cited page but source is a commercial blog, the generalization from one model/one framework to a general principle is unsupported, no peer review or replication.

---

### [key: inherited-drift-weak-trajectory]
- evidence: empirical
- confidence: medium
- group: goal-drift-detection
- sources: https://zylos.ai/research/2026-04-03-goal-persistence-drift-long-horizon-ai-agents/

**Claim:** Empirical research on multi-agent pipeline drift (arXiv:2603.03258, cited in Zylos 2026) demonstrated that well-aligned models resist direct adversarial pressure but are vulnerable to inherited drift — absorbing misaligned behaviors from upstream agents' outputs even when the misalignment is not adversarial. Mechanism: parent agents ingest subagent outputs as context; if the subagent's output contains implicit goal reframings (e.g., scope creep), the parent treats this as evidence about the task rather than a signal to reject. Scope: applies to any agent that uses subagent outputs without filtering for goal-relevant content. Kit-maker implication: parent agents must filter subagent outputs before re-ingestion — stripping or bracketing content that could reframe scope — rather than treating all returned content as neutral context.

**Verify note:** Source exists and is confirmed: arXiv:2603.03258, Menon et al. (2026). Core finding confirmed: well-aligned models resist direct adversarial pressure but are vulnerable when conditioned on prefilled trajectories from weaker agents. The 'inherited drift' framing and the specific mechanism (parent agent treats subagent output as evidence about the task) are consistent with the abstract. The claim that this is 'not adversarial' misalignment is confirmed — the paper frames it as behavioral conditioning, not attack. However: (1) this is a March 2026 preprint, not peer-reviewed; (2) no independent replication identified; (3) the kit implication (strip or bracket subagent outputs before re-ingestion) is a reasonable engineering extension but goes beyond what the paper explicitly recommends. Verdict: medium — paper exists, core mechanism confirmed, preprint status not disclosed, no replication.

---

### [key: intent-drift-action-chain-not-event]
- evidence: consensus
- group: goal-drift-detection
- sources: https://www.armosec.io/blog/detecting-intent-drift-in-ai-agents-with-runtime-behavioral-data/

**Claim:** Runtime security research on AI agent intent drift (ARMO, 2025) established that intent drift is only detectable in action chains across multiple tool invocations — not in any individual event. A single tool call looks normal; the pattern 'prompt injection → unauthorized tool → sensitive data access → exfiltration' only emerges across the chain. Mechanism: the goal shift is distributed across steps, each individually plausible, only meaningful as a sequence. Traditional per-event behavioral baselines fail because Kubernetes ephemeral pods recycle faster than 24-hour learning windows. Scope: ephemeral/stateless execution infrastructure where per-instance baselines cannot converge. Kit-maker implication: saturation and direction-drift detection must operate on rolling windows of recent actions (not individual steps) — a 5-10 step action-chain review is the minimum unit for detecting whether the agent is drifting from its assigned direction.

---

### [key: task-switch-cost-reconfiguration]
- evidence: empirical
- confidence: medium
- group: switching-costs
- sources: https://pmc.ncbi.nlm.nih.gov/articles/PMC10140903/, https://news.wfu.edu/2024/04/16/the-switch-cost-of-multitasking/

**Claim:** Well-replicated cognitive psychology finding (PMC10140903; Wake Forest 2024 review): task switching incurs a 'switch cost' — increased non-decision time in task-switch trials relative to task-repeat trials — due to the time required to reconfigure the task set (suppress the prior task's rules, load the new task's rules). The cost is partially irreducible (residual switch cost persists even with advance preparation time). Mechanism: attentional reconfiguration, not just priming decay — the prior task set actively interferes. Scope: applies to both humans and modeled in AI systems that use prefix/system-prompt context; heavier when task schemas are more dissimilar. Kit-maker implication: when the kit switches direction, budget an explicit 'reconfiguration step' (e.g., re-reading the new direction's goal document, clearing intermediate scratchpad state) before the first execution action — skipping this step causes the agent to carry forward stale task-set interference.

**Verify note:** Source 1 (PMC10140903) exists and is confirmed: Schmitz and Krämer (2023), Journal of Intelligence. Task switching costs and task-set inertia/interference are confirmed. The backward inhibition mechanism (prior task set actively interferes) is confirmed. However, the claim's specific framing of 'partially irreducible residual switch cost that persists even with advance preparation' is only partially confirmed — the paper notes non-decision time increases can be 'low or absent' with advance cues, which is weaker than the claim's assertion of a definite residual cost. The WFU 2024 source is a university news article (lay press), not a research paper, and does not use the technical terms 'attentional reconfiguration' or 'residual switch cost.' The claim describes this as a 'well-replicated cognitive psychology finding,' which is accurate for switch costs generally — task switching costs are among the most replicated findings in cognitive psychology. The specific 2023 paper is a solid peer-reviewed source. Verdict: medium — core finding well-supported, residual switch cost framing slightly overstated compared to source, WFU source is lay press not research.

---

### [key: agentomics-marginal-roi-relational]
- evidence: empirical
- confidence: medium
- group: roi-prioritization
- sources: https://arxiv.org/html/2606.14769

**Claim:** Agentomics framework paper (arXiv:2606.14769) provided empirical case study showing that agent value is relational, not intrinsic — Shapley value attribution in a four-stage SOC workflow yielded: Detection Agent $810 value (vs. $500 market price, undervalued 62%), Triage Agent $620 value (vs. $900 market price, overvalued 45%). A solo-performance-optimizing agent produces misleading ROI signals. Mechanism: value emerges from capability-requirement coverage at each stage (μ ∈ [0,1]) multiplied by workflow reliability (R = ∏ρ_k); an agent with high standalone benchmark score may contribute little if reliability degradation in a pipeline exceeds the capability gain. Kit-maker implication: measure mechanism value in context (contribution to pipeline output quality) not in isolation (mechanism output quality) — mechanisms should be prioritized by their marginal contribution to final output, not their local performance score.

**Verify note:** Source exists and is confirmed: arXiv:2606.14769, Zhu (NYU Tandon, June 2026). All specific numbers confirmed: Detection Agent $810 Shapley value vs. $500 market price; Triage Agent $620 Shapley value vs. $900 market price; workflow reliability as product of stage reliabilities R = product(rho_k). The claim's characterization of Detection Agent as 'undervalued 62%' ($310/$500 = 62%) and Triage Agent as 'overvalued 45%' ($280/$620 = 45%) are consistent with the numbers. However: (1) this is a June 2026 preprint — not peer-reviewed; (2) the SOC workflow is a theoretical case study, not an empirical study of real agent deployments; (3) the claim presents it as an 'empirical case study' which overstates — it is a worked numerical example in a framework paper; (4) no independent replication. The kit implication (measure mechanism value in pipeline context, not isolation) follows logically from the Shapley framework. Verdict: medium — numbers confirmed, paper exists, but 'empirical case study' overstates what is a theoretical worked example; preprint, no replication.

---

### [key: frontier-task-duration-doubling]
- evidence: empirical
- confidence: medium
- group: long-horizon-failure
- sources: https://arxiv.org/html/2606.14769

**Claim:** METR empirical tracking (cited in arXiv:2606.14769, 2026) found that the duration of tasks frontier AI systems can complete with approximately 50% reliability has been doubling roughly every seven months. However, failure rate scales superlinearly: doubling task duration quadruples the failure rate. In sequential multi-stage pipelines, per-stage reliability compounds: a four-stage workflow at 0.95 per-stage reliability produces an 18.5% end-to-end failure rate (0.95^4 = 0.8145). Mechanism: independent-failure compounding in sequential architectures — each additional dependent step multiplies rather than adds to failure probability. Scope: sequential pipelines with correlated failure modes will degrade even faster. Kit-maker implication: keep individual work phases short and independently checkpointable — a kit direction that requires 4+ sequential dependent steps without human checkpoints carries exponentially higher saturation-and-abandon risk.

**Verify note:** The 7-month doubling claim from METR IS cited in arXiv:2606.14769 (Section 2.2), but that paper is 'Agentomics' — an economic valuation framework by Quanyan Zhu, not a METR publication. METR is the upstream source; the paper merely cites it in passing. The superlinear failure-rate claim (doubling task duration quadruples failure rate) is NOT present in arXiv:2606.14769 — this is an extrapolation added in the claim, not sourced from the cited paper. The sequential compounding math (0.95^4 = 0.8145) is correct arithmetic but is not sourced from 2606.14769 either. Split verdict: the 7-month doubling is medium-confidence (single-paper cite of METR, not the primary METR source); the superlinear/quadrupling claim is unsourced fabrication from the cited paper.

---

### [key: peak-aware-orchestration-trajectory-repair]
- evidence: consensus
- group: roi-prioritization
- sources: https://arxiv.org/abs/2602.17910

**Claim:** APEMO system (arXiv:2602.17910, 2026) introduced peak-aware orchestration for long-horizon agents: a runtime scheduling layer that detects trajectory instability through behavioral proxies and targets computational resources at peak moments and endings (not uniformly across the trajectory). Mechanism: operationalizes temporal-affective signals — the system identifies which trajectory segments have the highest impact on output quality and reuse probability, then repairs those segments under a fixed computational budget. Tested in multi-agent simulations and LLM planner-executor flows. Scope: fixed-budget scenarios where uniform allocation is provably suboptimal. Kit-maker implication: do not allocate equal effort to each phase of a pipeline — instrument the pipeline to identify which phases are 'peak moments' for final output quality and concentrate iterative refinement passes there rather than applying uniform diminishing-returns effort across all phases.

---

### [key: secretary-37pct-empirical-cutoff]
- evidence: empirical
- confidence: low
- group: satisficing-stopping
- sources: https://encyclopedia.arabpsychology.com/optimal-stopping-rule/, https://www.journals.uchicago.edu/doi/abs/10.1086/378527

**Claim:** Empirical optimal stopping research on the secretary problem found that humans apply a strategy structurally similar to the optimal 37% rule (explore the first 37% of options to set a threshold, then accept the first exceeding option) but systematically set the cutoff earlier than prescribed. The mechanism is adaptive satisficing: searchers do not infer the distribution or compute the optimal rule, but follow elementary adaptive rules that nonetheless converge to near-optimal stopping. Convergence to optimal is proven (Journal of Political Economy, 2003, Sargent et al.). Scope: applies when the agent has no prior distribution knowledge; breaks down when priors are strong. Kit-maker implication: a kit exploring a problem space (e.g., searching for the right framing before committing) should budget roughly the first 30-37% of allocated steps as pure exploration before locking a direction — earlier commitment reliably underperforms.

**Verify note:** Primary source (arabpsychology.com) is a non-academic encyclopedia page with no formal references and no discussion of empirical human behavior studies or adaptive satisficing — it only describes the rule theoretically. The Journal of Political Economy DOI (10.1086/378527) returns HTTP 403 and cannot be verified. 'Sargent et al., JPE 2003' is highly suspicious: Thomas Sargent is a macroeconomist known for rational expectations, not optimal stopping research; no prominent JPE 2003 paper on secretary-problem empirics by Sargent is known. The adaptive satisficing convergence-to-optimal proof and the 'humans cut off earlier than 37%' empirical finding cannot be confirmed from any cited source. The mechanism described (elementary adaptive rules converging to near-optimal) is plausible from other literature but the specific citation appears fabricated or misattributed.

---

## Null results
- Specific effect sizes for metacognitive stopping threshold from Ackerman-Thompson 2017 PDF (binary, unreadable)
- Quantified ROI switching thresholds from peak-aware orchestration paper (abstract-only access)
- Circuit-level governance thresholds from ResearchGate agent-drift paper (403 blocked)
- Iteration-count diminishing returns numbers from arXiv:2603.00722 (PDF unreadable; abstract-only)

## New angles surfaced
- Exploration-exploitation tradeoff in LLM chain-of-thought: how many reasoning steps before accuracy plateaus — empirical token-efficiency research
- Computational budget allocation in test-time compute scaling (o1/o3-style): what triggers early exit vs continued reasoning
- Work abandonment in software engineering: empirical studies on when developers abandon a debugging line and context-switch — ICSE/FSE literature
- Interrupt cost modeling in operating systems as an analogy for AI agent task-switch overhead — tractable formal models
- Metacognitive calibration gaps in LLMs: evidence that LLMs are systematically overconfident about task completion, causing premature stopping on hard problems

