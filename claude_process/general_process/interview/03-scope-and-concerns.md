# Interview Script: Scope and Concerns

**Purpose**
Decide which of the ten programming-concerns apply, identify persistent state and drift surfaces, decide whether to generate the decision-log journal, and capture criticality + lifespan for right-sizing.

**Procedure**
Ask each question in order, one at a time. Wait for the answer. Do not batch.

**Questions**

1. **Which of these concerns apply to this project?** (For each, answer yes / no / later, with a short reason for any no or later.)

   The ten concerns: error-handling-and-logging, secrets-and-config, dependency-and-supply-chain, observability, ai-authoring-security, performance-and-profiling, security, distribution-and-release, concurrency-and-state, data-and-schema.

   - **Why we ask:** The concerns aren't all universal. Observability doesn't apply to a one-off CLI; concurrency-and-state doesn't apply to a single-threaded script; data-and-schema doesn't apply to a stateless pure-compute library. Each concern needs an explicit verdict — "yes, applies", "no, deliberately skipped because X", or "later, after MVP."

   **Defaults by project kind (from interview 01.2):**
   - **CLI / Script:** YES for error-handling-and-logging, secrets-and-config (if any), dependency-and-supply-chain, ai-authoring-security, security (if input handling). Default NO for observability, concurrency-and-state, data-and-schema unless the project has those surfaces.
   - **Library:** YES for error-handling-and-logging, ai-authoring-security, distribution-and-release (the library's API IS the distribution). YES for security, concurrency-and-state if the library exposes those surfaces.
   - **Service:** YES for nearly all — error-handling, secrets, deps, observability, ai-authoring, security, distribution-and-release, concurrency-and-state, data-and-schema. Performance is situational.
   - **Data pipeline:** YES for error-handling, secrets, deps, observability, ai-authoring, data-and-schema, concurrency-and-state. Distribution depends on whether the pipeline is packaged.

   **Notes on specific concerns:**
   - **AI-authoring security:** defaults to YES for any project being built with an AI coding agent (Claude Code, Cursor, Aider, Copilot agents, etc.). Skip ONLY if the kit is being used purely as documentation without an agent driving development. Almost no 2026 project qualifies.
   - **Performance-and-profiling:** defaults to NO unless the project has a stated SLO, an observed slowness complaint, or a known hot path. Speculative optimization is an anti-pattern; the concern fires when there's a number to hit.
   - **Distribution-and-release:** skip for one-off scripts that run from a clone and never get versioned. Apply for everything else.

   - **What to do with the answer:** For each YES, inline the FULL text of the concern's file (from `programming-concerns/`) into the generated `CLAUDE.md` (`{{CONCERNS_BLOCK}}`). For each NO, write the reason into the `What was skipped at bootstrap and why` section of CLAUDE.md. For each LATER, add a one-line TODO with a concrete trigger ("revisit when first external user signs up" or "revisit when adding multi-process worker support").

2. **Is there persistent state? (Database, files on disk, external API the project writes to, message queue, etc. If yes, name it; if no, say "no.") And if yes — what state would be catastrophic if a test corrupted it?**
   - **Why we ask:** If the project has persistent state, the test-pollution discipline reappears as a project-specific rule. Naming the catastrophic state up front prevents the "tests write to prod" failure from being a surprise.
   - **What to do with the answer:** If state exists, add a "State paths come from env vars; tests inject ephemeral paths" rule to CLAUDE.md with the catastrophic state named concretely. If no state, document the skip.

3. **What silently drifts between deploys or sessions?** Examples by kind:
   - **CLI / Script:** the user's local config drifts from documented defaults; dependency versions drift between machines.
   - **Library:** the documented behavior drifts from the implementation across releases (changelog not updated); examples in docs reference removed APIs.
   - **Service:** env vars diverge across environments; feature flags drift; database migrations applied unevenly; cached responses go stale; downstream API contracts change without us noticing.
   - **Data pipeline:** input schema drifts (upstream changes one field name); downstream consumer expectations drift; the cron schedule and the data window drift apart.
   - **Why we ask:** Drift is where the iteration loop fails when nothing obviously broke. Worth naming explicitly so the project checklist's "iteration start" step opens the right surfaces.
   - **What to do with the answer:** Add a "drift check" item to `process_checklist.md` referencing each named surface. Fill `{{DRIFT_SURFACES}}` in CLAUDE.md.

4. **Do you want a decision log? (One file, `decision_log.md`, where non-trivial decisions are recorded — yes / no.)**
   - **Why we ask:** The parent CLAUDE.md says "no learning journals unless asked." Honoring that means decision logs are opt-in. Decision logs help on restart-after-pause and on "why did we pick X" questions; they cost minutes per week. If the user doesn't want one, skip it.
   - **What to do with the answer:** If yes, generate `decision_log.md` from the template. If no, do not generate the file; note the skip in CLAUDE.md.

5. **Project criticality. (Throwaway/experiment, Internal tool, External product, Safety/regulated.)**
   - **Why we ask:** The kit's heavy machinery (two auditors, decision log, pitfall register, 14-item checklist) is right-sized for external products and regulated systems but is pure overhead on throwaway experiments. Cockburn's empirical right-sizing recommends matching ceremony to criticality, not applying maximal ceremony universally.
   - **What to do with the answer:**
     - **Throwaway/experiment:** generate the smallest viable kit. Single auditor (Correctness only), no decision_log, no pitfall_register, no EXCEPTIONS. Concerns reduced to the safety-relevant subset (security, ai-authoring-security). Validator script still ships.
     - **Internal tool:** standard kit MINUS decision_log (unless user opted yes in 03.4) and pitfall_register (ships empty); both auditors run on diffs touching concerns, single auditor on trivial diffs.
     - **External product:** full kit, both auditors default, all artifacts generated.
     - **Safety/regulated:** full kit plus a documented requirement to escalate any RED verdict to a human reviewer (not the producer-agent) before re-dispatch.
   - Document the chosen level in CLAUDE.md's preamble so future iterations honor the scaling.

6. **Expected lifespan. (Hackathon/days, Short-lived/weeks, Long-lived/months+.)**
   - **Why we ask:** Process discipline costs are paid up front; benefits accrue over time. A hackathon project ships before the kit's lifecycle features pay back. Long-lived projects benefit from them disproportionately.
   - **What to do with the answer:** Hackathon/days defaults the same as Throwaway in 03.5 (single auditor, no journals). Short-lived/weeks keeps both auditors but defaults decision_log off unless explicitly asked. Long-lived/months+ runs the full standard kit.

**After this script**
Interview is complete. Synthesize all answers into a one-paragraph summary and confirm with the user before generating any file. See ENTRYPOINT step 5.
