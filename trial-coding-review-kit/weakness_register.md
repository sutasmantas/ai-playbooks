# Weakness Register: Coding Review Kit

Shipped at Phase 8 HANDOFF. Honest gap disclosure for anyone using or improving this kit.

**Anti-pattern to avoid:** "No known weaknesses." A kit with no acknowledged weaknesses is not trustworthy — it means the builder didn't look, not that there's nothing to find.

Research track: Practitioner-Consensus (verify pass skipped). HIGH-labeled empirical claims are applied on claim convergence, not controlled-experiment replication — less well-calibrated than for RCT-based archives.

---

## How to read this register

- **Confirmed gaps** — trial found these; not fixed before shipping; reason documented
- **Provisional decisions** — made before research confirmed them; flip triggers documented
- **Coverage limits** — use cases this kit does not handle
- **Known fragile spots** — rules that work for common cases but fail at edges
- **Open research questions** — things researched but not resolved

---

## Pre-identified gaps (known before Phase 7)

| Gap | Where it shows up | Status | What would close it |
|-----|------------------|--------|---------------------|
| Goal-directed advisor behavior in generated kits | CLAUDE.md after-every-task rule | Open — no empirical guidance on minimal file set to produce reliable advisor mode | Real-use observations across multiple users |
| Behavioral testing against live tasks is not automated | Phase 7 trial | Confirmed gap — trial is manual, agent cannot self-validate | No agent-executable alternative found |
| Rule-writing guidance is consensus-not-empirical | Every kit rule | Open — field has no controlled studies on instruction formats yet | May remain consensus indefinitely |
| Kit rule compliance under novel inputs untested | All 5 passes | Open — one trial run on one test file (upload-service.js) | More trial runs at different task types |
| SAST-free baseline miss rate | Pre-pass note | Provisional — 47% figure from single study (`sast-injection-recovery`, HIGH, 1M+ findings) | Replication in the code review domain specifically |

---

## Confirmed gaps

Findings from Phase 7 trial (2026-07-02, ground-truth comparison) that remain real limitations:

| Gap | Location | Why not fixed | Workaround |
|-----|----------|--------------|------------|
| Framing control effect smaller than predicted | CLAUDE.md framing rule; Pass 1 security pass | Research effect (97%→3.6%) applies to implicit/cross-file issues; local-signal XSS (utility function defined in same file and visibly unused) was found by Condition B despite misleading framing — scope condition added to kit but effect size for implicit issues untested with N>1 | Apply rule always; do not expect effect for issues with visible in-file cues |
| False positive rate did not decrease under kit | Pass 4 four-false-rejection check; minimum-evidence gate | A=10 false positives, C=9 — kit produced nearly as many as freeform; many "false positives" were real quality concerns not in ground truth (path traversal in admin functions, deprecated APIs); the gate fires on finding quality but can't detect whether a real vulnerability class is present | Human reviewer judgment required for P2/P3 triage; kit cannot reduce false positives on well-structured real concerns |
| Omission pass delta over freeform is single-case | Pass 2 null/undefined propagation check | Condition C found Issue 4 (silent error swallow) completely; Condition A found it partially; N=1 trial cannot confirm this is consistent | Run the omission pass; observed delta for Issue 4 is positive evidence but not replicated |

---

## Provisional decisions still unconfirmed

| Decision | Where | Flip trigger | Evidence basis |
|----------|-------|-------------|----------------|
| 97%→3.6% detection collapse under misleading framing | CLAUDE.md framing rule; scope condition note | If ≥2 additional trials show collapse effect for local-signal XSS: remove "limited impact for local-signal" caveat | `confirmation-bias-framing-effect` HIGH (original study) + Phase 7 trial (N=1 counter-evidence) |
| SAST injection recovers ~47% of LLM misses | Pre-pass note | If independent study contradicts this in code review context: update the figure or narrow the scope | `sast-injection-recovery` HIGH — single study, large scale but domain may not transfer perfectly |
| 400-LOC threshold for attention drop | Scale handling section | If trial evidence shows attention intact beyond 400 LOC for structured-pass review: widen the gate | `review-size-defect-curve` HIGH (Microsoft 1.5M) — threshold is right magnitude but exact value is uncertain |
| Race conditions missed "regardless of effort" | Pass 1 race conditions check | If ≥1 trial shows Condition A finds cross-service races without kit structure: narrow the kit's claimed delta | `race-condition-miss` HIGH — category claim; Phase 7 trial showed same-file TOCTOU found by all conditions |

---

## Coverage limits

What this kit explicitly does NOT handle:

- **Cross-repository context:** findings that require understanding behavior across multiple repos are beyond single-file/PR scope
- **Infrastructure-as-code and configuration files:** security rules for Terraform, Kubernetes YAML, Docker, GitHub Actions are not in the research base; omission is intentional
- **Database migrations:** schema changes with rollback implications require domain-specific expertise not encoded in this kit
- **Binary files, compiled artifacts, or lockfiles:** structural review only
- **Visual output review:** HTML/CSS/SVG rendering, alignment, spacing, color — agent cannot validate these systematically; human visual review required (no mechanism in this kit)
- **Security specialist pentest scope:** findings from trained security specialists with pentest background are not the target baseline; this kit targets developer generalist review
- **Multi-language diffs:** research base is English-language review; cross-language comment quality is untested

---

## Known fragile spots

| Location | What works | What fails | Signal you've hit the edge |
|----------|------------|-----------|--------------------------|
| CLAUDE.md framing rule (diff-first) | Prevents framing collapse for implicit/cross-file issues where no single-file cue is visible | Limited effect when the vulnerability has a visible local cue (utility function defined and visibly unused in same file) | Finding the issue despite reading PR description first is NOT a failure of the rule — it means the issue had strong local signal |
| Pass 1 race condition check | Adds detection delta for cross-function and cross-service temporal gaps (non-obvious from any single location) | Same-file TOCTOU with visible proximity between check and use is found by freeform review without the kit | If the TOCTOU is between two functions visible within ~20 lines of each other, kit adds no measurable delta |
| Pass 2 null/undefined propagation | Traces caller chains from functions that silently return undefined — catches issues freeform review stops short of | Only reliably tested on one issue type (silent catch returning undefined, caller accessing property directly); generalizability uncertain | Single trial (N=1); confidence is directional, not calibrated |
| Pass 4 minimum-evidence gate + four-false-rejection check | Filters findings that cannot be traced to a specific failure path | Does not reduce findings that ARE traceable to real failure paths but happen to be out of scope for the PR under review | High false-positive counts are expected when the codebase has real quality concerns not covered by the PR's stated scope |

---

## Open research questions

From the synthesis and trial; see research_archive/ for full angle list:

| Question | Priority |
|----------|---------|
| Does the framing effect collapse at a different rate for frontier-class models vs. earlier tiers? Trial used Sonnet 4.6; original research may have used earlier models | HIGH |
| What is the actual omission pass delta across multiple trial runs with different test files and issue types? N=1 is directional evidence only | HIGH |
| Where is the minimum-evidence gate threshold that maximizes precision without reducing recall on real P0/P1 issues? Current threshold is heuristic | MEDIUM |
| Does the 400-LOC gate hold for structured-pass review (where passes are isolated), or only for holistic freeform review? | MEDIUM |

---

## Improvement process

To improve this kit after real use:

1. Log failure in pitfall_register.md
2. If count reaches 2: open a targeted research question
3. Run targeted research on that specific question (3–5 angles)
4. Patch the relevant file; re-run auditors on the patched file only
5. Update this register — remove entry if resolved, update if partial

**Do not** re-run the full kit-making process to patch a single rule. Targeted gap-check is the right scope.
