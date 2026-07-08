# Phase 6 Brief — Research Synthesis Kit

**For:** Phase 6 worktree subagent building the research synthesis kit.
**Kit location:** research-synthesis-kit/ (you are working here)
**Kit-maker location:** kit-maker/ (read ENTRYPOINT.md, CLAUDE.md, procedures/, propagation-map.md from here)

---

## 1. Gold standard for this run

A fresh agent given only the kit's CLAUDE.md and procedures/synthesis.md can produce a synthesis of a 5-file research archive cluster that contains: a confidence map with HIGH/MEDIUM/CONSENSUS/LOW tiers, explicit documentation of any contradictions (not silently dropped), and ≥1 counter-prior hypothesis. The synthesis is more complete and calibrated than what the agent would produce without the kit.

---

## 2. Done-criteria (from plan.md, verbatim)

- **CLAUDE.md done:** Contains all Hard Rule 13 required elements; fresh agent reading it alone can identify: gold standard, what agent owns vs user owns, after-every-task rule, proactive surfacing, decay warning with observable violation condition.
- **procedures/synthesis.md done:** Fresh agent reading only this file can produce a synthesis that passes the 3 success criteria: (a) no silently dropped contradictions, (b) CONSENSUS/empirical distinction maintained, (c) ≥1 counter-prior hypothesis generated; includes pre-specified precision threshold requirement and scale-handling rule for >20 angles.
- **templates/synthesis-output.md.template done:** Fresh agent reading this file alone can produce a synthesis.md that satisfies the domain brief format: confidence map table, contradiction log, counter-prior section, user questions section.

---

## 3. Real-input test case

**Cluster:** "Advisor behavior in generated kits" — 5 angle files from kit-maker/research_archive/:
- `goal-directed-advisor-behavior-in-generated-kits-what-file-w.md`
- `assertive-compliance-in-ai-agents-inform-once-then-comply-pa.md`
- `direction-level-pivot-signals-and-alternative-direction-gene.md`
- `direction-drift-detection-in-multi-session-agent-work-granul.md`
- `diminishing-returns-detection-in-ai-agent-work-recognizing-w.md`

After building all kit files: run the synthesis kit's procedures against these 5 files. Document results in diagnostics/test_run_01.md: which procedures fired, whether success criteria (a/b/c) were met, any step that failed to fire.

---

## 4. High-risk files

1. **procedures/synthesis.md** — Risk: procedure under-specification. The confidence tier threshold (≥2 independent empirical claims = HIGH) is provisional and may not be explicit enough for a fresh agent to apply consistently. If this file is wrong, all synthesis output from the kit is wrong.
2. **CLAUDE.md** — Risk: missing Hard Rule 13 elements. The behavioral contract for a synthesis kit is non-standard — the "after-every-task rule" for synthesis needs a domain-specific formulation (what is the "next obstacle" after a synthesis group is complete?). Missing this produces a passive kit that waits rather than drives.

---

## Notes for Phase 6 execution

- Read kit-maker/propagation-map.md before drafting CLAUDE.md. For every ALWAYS row: include the equivalent in the synthesis kit's behavioral contract.
- The synthesis kit does NOT need its own ENTRYPOINT.md (not a multi-phase kit), its own verify_prompt.md (no internal auditor dispatch), or its own pitfall_register.md (populates from real use, not pre-loaded).
- Use kit-maker/procedures/research-synthesis.md as the REFERENCE for procedures/synthesis.md — do not copy verbatim; adapt to kit format and add Hard Rule 13 behavioral framing.
- After building, run Phase 6 real-input validation (Step: "Gate after all files built") before dispatching Phase 7 auditors.
- Return to main context: (a) one-paragraph Phase 6 verdict (pass/fail per each done-criterion), (b) up to 5 key learnings worth propagating, (c) list of all kit files built.
