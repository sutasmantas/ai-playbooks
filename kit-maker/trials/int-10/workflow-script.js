export const meta = {
  name: 'int-10-full-trial',
  description: 'INT-10 full trial: 22 inputs × 3 conditions, blind multi-evaluator scoring, longitudinal batch, Stages 4-6 verdict and retrospective',
  phases: [
    {title: 'Execution', detail: '22 inputs × 3 conditions (A=baseline, B=full kit, C=degraded) + scoring in pipeline'},
    {title: 'Longitudinal', detail: '10-input sequential Cond B batch on self-correction domain'},
    {title: 'Verdict', detail: 'Stage 4 verdict + Stage 5 integration + Stage 6 retrospective + kit-trial-process.md edits'},
  ],
}

// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const TRIAL = 'c:\\Users\\masuta\\Desktop\\Coding\\test\\kit-maker\\trials\\int-10'
const KIT   = 'c:\\Users\\masuta\\Desktop\\Coding\\test\\kit-maker\\angle-gen-kit'
const HARD  = new Set([3, 4, 7, 10, 14, 19, 20])

const KIT_FILES = [
  KIT + '\\CLAUDE.md',
  KIT + '\\intake.md',
  KIT + '\\angle-generation.md',
  KIT + '\\angle-quality.md',
  KIT + '\\weakness_register.md',
  KIT + '\\platform-calibration.md',
].join('\n')

// ── INPUT DEFINITIONS ─────────────────────────────────────────────────────────
const INPUTS = [
  {id: 1,  type: 'Standard', prompt: 'I want to research self-correction in LLMs — how models identify and fix their own errors.'},
  {id: 2,  type: 'Standard', prompt: 'I want to research chain-of-thought reasoning in LLMs — when it works, when it fails, and why.'},
  {id: 3,  type: 'Hard',     prompt: 'I want to research how context length affects LLM performance.'},
  {id: 4,  type: 'Hard',     prompt: 'I want to research adversarial attacks on LLM reasoning — how reasoning can be manipulated.'},
  {id: 5,  type: 'Standard', prompt: 'I want to research RLHF and preference learning for aligning language models.'},
  {id: 6,  type: 'Standard', prompt: 'I want to research how to achieve comprehensive retrieval in systematic literature searches.'},
  {id: 7,  type: 'Hard',     prompt: 'I want to research how knowledge graphs can be combined with LLMs.'},
  {id: 8,  type: 'Standard', prompt: 'I want to research uncertainty quantification for language model outputs — how to measure and express uncertainty in what LLMs generate.'},
  {id: 9,  type: 'Standard', prompt: 'I want to research how multiple LLM agents coordinate to solve tasks.'},
  {id: 10, type: 'Hard',     prompt: 'I want to research memory in LLMs — how models store and access information.'},
  {id: 11, type: 'Standard', prompt: 'I want to research causal reasoning in language models.'},
  {id: 12, type: 'Standard', prompt: 'I want to research how to evaluate whether LLMs follow instructions reliably — what benchmarks and methods exist.'},
  {id: 13, type: 'Standard', prompt: 'I want to research prompt engineering techniques that work reliably in production systems.'},
  {id: 14, type: 'Hard',     prompt: 'I want to research how to build RAG systems that work well in practice.'},
  {id: 15, type: 'Edge',     prompt: 'I want to research how to conduct systematic literature reviews in AI and ML research — what methods, databases, and approaches give comprehensive coverage.'},
  {id: 16, type: 'Edge',     prompt: 'I want to research formal verification methods for ensuring LLM safety properties hold.'},
  {id: 17, type: 'Edge',     prompt: 'I want to research LLM agents that operate at the operating system level — controlling files, processes, and applications.'},
  {id: 18, type: 'Edge',     prompt: 'I want to research in-context learning in language models — how and why it works.'},
  {id: 19, type: 'Hard',     prompt: "I want to research explainability of chain-of-thought reasoning — please focus specifically on mechanistic interpretability approaches and don't spend time on other perspectives."},
  {id: 20, type: 'Hard',     prompt: 'I want to research how reliably LLM agents use tools — when tool calls succeed and when they fail.'},
  {id: 21, type: 'Standard', prompt: 'I want to research how LLM-based agents plan and execute multi-step tasks.'},
  {id: 22, type: 'Standard', prompt: 'I want to research when to fine-tune a language model vs. use prompting for a given task.'},
]

const LONG_PROMPTS = [
  'I want to research self-correction failure modes in LLM instruction following — when self-correction fails, not when it succeeds.',
  'I want to research self-correction vs. external feedback in LLM code generation — which works better and when.',
  'I want to research self-correction mechanisms in multi-step chain-of-thought reasoning.',
  'I want to research reflection prompting as a self-correction mechanism.',
  'I want to research self-correction without ground truth feedback available — how models can self-correct without external validation.',
  'I want to research self-correction in retrieval-augmented generation pipelines.',
  'I want to research multi-agent debate as a self-correction mechanism.',
  'I want to research self-correction for factual accuracy in long-form generation.',
  'I want to research metacognitive calibration in LLMs: knowing when to self-correct.',
  'I want to research human-in-the-loop correction vs. autonomous self-correction in deployed systems.',
]

// ── SCHEMAS ──────────────────────────────────────────────────────────────────
const EXEC_SCHEMA = {
  type: 'object',
  properties: {
    inputId:         {type: 'number'},
    condition:       {type: 'string'},
    outputFilePath:  {type: 'string'},
    angleCount:      {type: 'number'},
    traditionsCount: {type: 'number'},
  },
  required: ['inputId', 'condition', 'outputFilePath', 'angleCount', 'traditionsCount'],
}

const SCORE_SCHEMA = {
  type: 'object',
  properties: {
    inputId:    {type: 'number'},
    q1:         {type: 'number'},
    q7:         {type: 'number'},
    q5:         {type: 'number'},
    q3:         {type: 'number'},
    p1:         {type: 'number'},
    m1:         {type: 'number'},
    q1Evidence: {type: 'string'},
    q7Evidence: {type: 'string'},
    q5Evidence: {type: 'string'},
    q3Evidence: {type: 'string'},
  },
  required: ['inputId','q1','q7','q5','q3','p1','m1','q1Evidence','q7Evidence','q5Evidence','q3Evidence'],
}

const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    verdictColor:        {type: 'string'},
    q1Answer:            {type: 'string'},
    shipSignal:          {type: 'string'},
    kitMakerSignal:      {type: 'string'},
    keyUnexpectedFinding:{type: 'string'},
  },
  required: ['verdictColor','q1Answer','shipSignal','kitMakerSignal','keyUnexpectedFinding'],
}

// ── SCORING CRITERIA (pre-registered, locked 2026-07-05) ─────────────────────
const SCORING_CRITERIA = `PRE-REGISTERED SCORING CRITERIA — INT-10, locked 2026-07-05

You are a BLIND evaluator. You do not know which condition produced this output. Score only what you observe.

Q1 — VOCABULARY TRADITION COVERAGE (0–3):
Score 3: ≥4 distinct non-synonymous vocabulary tradition labels present; ≥2 NOT derivable from user input prompt words; ≥1 from an adjacent discipline (different primary subject matter from the main topic).
Score 2: ≥3 distinct tradition labels; ≥1 NOT derivable from user input.
Score 1: 2 distinct tradition labels; ≥1 from outside user entry vocabulary.
Score 0: 1 tradition; OR all traditions derivable from user's input words alone.

Q7 — STRUCTURAL COMPLETENESS (0–3):
Score 3: ALL THREE present: (a) null-hypothesis angle naming a SPECIFIC failure MECHANISM (not just "failures exist"); (b) exact text "ADVERSARIAL-FLAGGED" verbatim in the output; (c) cross-disciplinary angle explicitly from a different primary field with non-overlapping vocabulary.
Score 2: Two of three present.
Score 1: One of three present.
Score 0: None present.

Q5 — ACTIONABILITY (0–3):
Score 3: Every angle has ≥2 runnable query strings; all use tradition-specific vocabulary (not generic phrase concatenation); all have ≥1 specificity operator (Boolean AND of two distinct concepts, named technique/author/venue, or numerical threshold).
Score 2: Every angle ≥2 queries; ≥80% use tradition-specific vocab; ≥80% have specificity operators.
Score 1: Most angles ≥2 queries; <80% have specificity operators; noticeable generic queries.
Score 0: Many angles have only 1 query; OR most queries are generic concatenations without specificity.

Q3 — PRECISION / NON-REDUNDANCY (0–3):
Score 3: Zero angle pairs where query overlap would retrieve >60% of same papers.
Score 2: ≤2 overlap pairs; no fully synonymous pairs.
Score 1: 3+ overlap pairs OR 1 fully synonymous pair.
Score 0: Multiple synonymous pairs OR list dominated by one tradition.

P1 — PROCEDURE ADHERENCE (0–3 or -1):
Score 3: Output contains ALL: (a) coverage map with tradition list + gap check + cross-disciplinary slot with stated selection basis; (b) intake brief with vocabulary traditions + question-type classification + severity assessment; (c) ≥1 gate documented as run (GATE PASSED or GATE FAILED notation).
Score 2: Coverage map + intake brief present; one element incomplete.
Score 1: Only one of coverage map / intake brief present; or both highly incomplete.
Score 0: Angles only; no procedural structure visible.
Set p1=-1 if no coverage map, intake brief, or gate notation visible anywhere in the output.

M1 — SELF-ASSESSMENT DEGRADED MODE (0–3 or -1):
Score 3: Output contains ALL: (a) exact text "VOCABULARY SELF-REPORT FLAG" verbatim; (b) severity labeled "MODERATE RISK" or "HIGH RISK"; (c) ≥1 tradition named as possibly absent due to source limitation; (d) coverage described as reduced (not FULL).
Score 2: Self-report flag + severity but missing one required element.
Score 1: Some acknowledgment of source limitation but without formal VOCABULARY SELF-REPORT FLAG text.
Score 0: No acknowledgment of limitation.
Set m1=-1 if no VOCABULARY SELF-REPORT FLAG and no coverage limitation language visible.

For evidence fields: quote 1–2 specific phrases from the output that determined your score.`

// ── PROMPT BUILDERS ──────────────────────────────────────────────────────────
function execFileA(id) { return TRIAL + '\\stage-2-execution\\input-' + id + '\\cond-a-output.md' }
function execFileB(id) { return TRIAL + '\\stage-2-execution\\input-' + id + '\\cond-b-output.md' }
function execFileC(id) { return TRIAL + '\\stage-2-execution\\input-' + id + '\\cond-c-output.md' }
function scoreFile(id, cond, n) { return TRIAL + '\\stage-3-scoring\\input-' + id + '\\' + cond + '-eval' + n + '.md' }

const TASK_HDR = `You are an expert AI research assistant with broad knowledge of research methodology across academic and practitioner domains.

Your task: Generate a comprehensive set of research angles for the topic below.

For each angle you identify:
- Give the angle a descriptive title
- Name the vocabulary tradition or field it comes from (e.g., which research community uses this framing)
- Write 2–3 specific, runnable search query strings that would retrieve relevant literature for this angle
- Note what type of source would best cover this angle (academic journal/preprint, practitioner blog, GitHub, etc.)

Aim for broad coverage — your goal is to ensure a researcher using your angle list could conduct a thorough literature review without missing important perspectives. Include at minimum: angles from the primary research traditions, at least one angle focused on failure cases or null results, and at least one angle from a discipline adjacent to the primary one.`

function condAPrompt(inp) {
  const f = execFileA(inp.id)
  return TASK_HDR + `

Topic: ${inp.prompt}

Write your complete angle list to file: ${f}
Use your Write tool to create that file.

Return: inputId=${inp.id}, condition="A", outputFilePath="${f}", angleCount=<count of angles produced>, traditionsCount=<count of distinct vocabulary tradition labels used>.`
}

function condBPrompt(inp) {
  const f = execFileB(inp.id)
  return TASK_HDR + `

Topic: ${inp.prompt}

STEP 1 — MANDATORY: Before writing ANYTHING, read ALL of these kit files using your Read tool:
${KIT_FILES}

STEP 2: Follow ALL kit procedures exactly — begin with CLAUDE.md behavioral contract rules, then proceed through the full intake.md (all 5 steps) and angle-generation.md (all 4 steps). Do not skip any step.

STEP 3: Write your complete output — intake brief, coverage map, type allocations, full angle list, gate summary — to: ${f}
Use your Write tool.

Return: inputId=${inp.id}, condition="B", outputFilePath="${f}", angleCount=<count>, traditionsCount=<count of distinct traditions in your angle list>.`
}

function condCPrompt(inp) {
  const f = execFileC(inp.id)
  return TASK_HDR + `

Topic: ${inp.prompt}

DEPLOYMENT CONSTRAINT: You do not have access to web search, survey-paper search, or any external information retrieval in this context. Proceed using only your training knowledge. Do not attempt web search queries or retrieve external documents. The kit's intake.md Step 5 handles this constraint — follow it exactly, including producing the VOCABULARY SELF-REPORT FLAG.

STEP 1 — MANDATORY: Before writing ANYTHING, read ALL of these kit files using your Read tool:
${KIT_FILES}

STEP 2: Follow ALL kit procedures exactly, including the Source B unavailability handling in intake.md Step 5.

STEP 3: Write your complete output — intake brief (with VOCABULARY SELF-REPORT FLAG), coverage map, type allocations, full angle list, gate summary — to: ${f}
Use your Write tool.

Return: inputId=${inp.id}, condition="C", outputFilePath="${f}", angleCount=<count>, traditionsCount=<count>.`
}

function scorerPrompt(inp, condition, evNum) {
  const outFile = condition === 'A' ? execFileA(inp.id) : condition === 'B' ? execFileB(inp.id) : execFileC(inp.id)
  const sf = scoreFile(inp.id, condition, evNum)
  return `BLIND EVALUATION TASK — INT-10 trial, evaluator ${evNum}

INPUT TOPIC (context only — do not let this bias your scoring): ${inp.prompt}

STEP 1: Read the output artifact at: ${outFile}

STEP 2: Apply the pre-registered scoring criteria below to the output you read.

STEP 3: Write your full scoring rationale (dimension-by-dimension breakdown with quoted evidence) to: ${sf}
Use your Write tool.

STEP 4: Return structured scores.

${SCORING_CRITERIA}

Return: inputId=${inp.id}, integer scores for q1/q7/q5/q3/p1/m1 (0-3 or -1), and evidence strings.`
}

// ── PHASE 1: EXECUTION + SCORING IN PIPELINE ──────────────────────────────────
phase('Execution')
log('Starting: 22 inputs × 3 conditions + scoring in pipeline')

const scoredResults = await pipeline(
  INPUTS,
  inp => parallel([
    () => agent(condAPrompt(inp), {label: 'exec:A:' + inp.id, phase: 'Execution', schema: EXEC_SCHEMA}),
    () => agent(condBPrompt(inp), {label: 'exec:B:' + inp.id, phase: 'Execution', schema: EXEC_SCHEMA}),
    () => agent(condCPrompt(inp), {label: 'exec:C:' + inp.id, phase: 'Execution', schema: EXEC_SCHEMA}),
  ]),
  async function(execTrio, inp) {
    const isHard = HARD.has(inp.id)
    const condBEvalCount = isHard ? 3 : 1
    const [condAScore, condCScore, condBScoresArr] = await parallel([
      () => agent(scorerPrompt(inp, 'A', 1), {label: 'score:A:' + inp.id, phase: 'Execution', schema: SCORE_SCHEMA}),
      () => agent(scorerPrompt(inp, 'C', 1), {label: 'score:C:' + inp.id, phase: 'Execution', schema: SCORE_SCHEMA}),
      () => parallel(
        Array.from({length: condBEvalCount}, function(_, i) {
          return function() {
            return agent(scorerPrompt(inp, 'B', i + 1), {label: 'score:B:' + inp.id + ':E' + (i+1), phase: 'Execution', schema: SCORE_SCHEMA})
          }
        })
      ),
    ])
    var bScores = (condBScoresArr || []).filter(Boolean)
    // Inter-rater reliability check for Hard inputs
    if (isHard && bScores.length >= 3) {
      var dims = ['q1', 'q7', 'q5', 'q3']
      var diverged = false
      for (var di = 0; di < dims.length; di++) {
        var vals = bScores.map(function(s) { return s[dims[di]] })
        if (Math.max.apply(null, vals) - Math.min.apply(null, vals) >= 2) { diverged = true; break }
      }
      if (diverged) {
        log('Input ' + inp.id + ': inter-rater divergence ≥2 on Tier 1 — dispatching 4th evaluator')
        var e4 = await agent(scorerPrompt(inp, 'B', 4), {label: 'score:B:' + inp.id + ':E4', phase: 'Execution', schema: SCORE_SCHEMA})
        if (e4) bScores.push(e4)
      }
    }
    return {inp: inp, condAScore: condAScore, condCScore: condCScore, condBScores: bScores}
  }
)

log('Phase 1 complete: ' + scoredResults.filter(Boolean).length + '/22 inputs processed')

// ── PHASE 2: LONGITUDINAL BATCH ───────────────────────────────────────────────
phase('Longitudinal')
log('Starting: 10-input sequential Cond B batch on self-correction domain')

const longOutFile   = TRIAL + '\\stage-3-longitudinal\\l1-l10-output.md'
const longDecayFile = TRIAL + '\\stage-3-longitudinal\\decay-scores.md'

const longResult = await agent(
  `SEQUENTIAL LONGITUDINAL BATCH — Condition B, 10 inputs, single session.

You are running 10 consecutive research angle generation tasks in a single session. Process them in order L1 through L10. Do NOT reset context between tasks — the accumulating context is intentional and tests quality decay across extended use.

STEP 1: Read ALL kit files NOW using your Read tool:
${KIT_FILES}

STEP 2: For each input L1–L10 in sequence, follow the complete kit procedure (intake.md + angle-generation.md + angle-quality.md) producing a full intake brief, coverage map, and angle list.

STEP 3: Write ALL 10 outputs clearly labeled L1 through L10 to a single file: ${longOutFile}
Use your Write tool.

The 10 topics (process in this exact order):

L1: ${LONG_PROMPTS[0]}
L2: ${LONG_PROMPTS[1]}
L3: ${LONG_PROMPTS[2]}
L4: ${LONG_PROMPTS[3]}
L5: ${LONG_PROMPTS[4]}
L6: ${LONG_PROMPTS[5]}
L7: ${LONG_PROMPTS[6]}
L8: ${LONG_PROMPTS[7]}
L9: ${LONG_PROMPTS[8]}
L10: ${LONG_PROMPTS[9]}

After completing all 10 and writing the file, return a 200-word summary noting any observable quality changes across L1→L10 (tradition variety, repetition, structural completeness).`,
  {label: 'longitudinal-exec', phase: 'Longitudinal'}
)

const longDecayResult = await agent(
  `LONGITUDINAL DECAY SCORING TASK — INT-10

STEP 1: Read the longitudinal batch output at: ${longOutFile}

STEP 2: For each of L1–L10, extract:
(a) count of distinct vocabulary tradition labels
(b) presence of null-hypothesis angle (yes/no)
(c) presence of "ADVERSARIAL-FLAGGED" verbatim label (yes/no)
(d) tradition labels used (list)

STEP 3: Evaluate against these pre-registered decay thresholds (locked before execution):
1. Vocabulary-tradition count per input: Expected stable 3–5. THRESHOLD CROSSED if <3 in any two consecutive inputs.
2. Repetition rate: % of tradition labels appearing in ≥3 prior inputs. THRESHOLD CROSSED if >60%.
3. Null-hypothesis presence: Required in EVERY input. THRESHOLD CROSSED = absent in ANY single input.
4. ADVERSARIAL-FLAGGED presence: Required in EVERY input. THRESHOLD CROSSED = absent in ANY single input.
5. Cross-disciplinary freshness: ≥1 new cross-disc tradition per 3 inputs. THRESHOLD CROSSED = same cross-disc tradition in 3+ consecutive inputs.

STEP 4: Write detailed per-input breakdown and threshold evaluation to: ${longDecayFile}
Use your Write tool.

Return a text verdict: NO_DECAY / MINOR_DECAY / MODERATE_DECAY / MAJOR_DECAY, and for each threshold: PASSED or FAILED with evidence.`,
  {label: 'longitudinal-decay-score', phase: 'Longitudinal'}
)

log('Phase 2 (Longitudinal) complete')

// ── BUILD SCORE SUMMARY ───────────────────────────────────────────────────────
var scoresSummary = scoredResults.filter(Boolean).map(function(r) {
  if (!r || !r.inp) return null
  function med(arr, dim) {
    var vals = arr.map(function(s) { return s[dim] }).filter(function(v) { return v >= 0 })
    if (!vals.length) return -1
    vals.sort(function(a, b) { return a - b })
    return vals[Math.floor(vals.length / 2)]
  }
  var aS = r.condAScore || {}
  var cS = r.condCScore || {}
  var bScores = r.condBScores || []
  return {
    id: r.inp.id, type: r.inp.type, isHard: HARD.has(r.inp.id),
    evaluatorCount: bScores.length,
    B: {q1: med(bScores,'q1'), q7: med(bScores,'q7'), q5: med(bScores,'q5'), q3: med(bScores,'q3'), p1: med(bScores,'p1')},
    A: {q1: aS.q1, q7: aS.q7, q5: aS.q5, q3: aS.q3},
    C: {q1: cS.q1, q7: cS.q7, q5: cS.q5, q3: cS.q3, m1: cS.m1},
    BmA: {q1: med(bScores,'q1')-(aS.q1||0), q7: med(bScores,'q7')-(aS.q7||0), q5: med(bScores,'q5')-(aS.q5||0), q3: med(bScores,'q3')-(aS.q3||0)},
    BmC: {q1: med(bScores,'q1')-(cS.q1||0), q7: med(bScores,'q7')-(cS.q7||0), q5: med(bScores,'q5')-(cS.q5||0), q3: med(bScores,'q3')-(cS.q3||0)},
  }
}).filter(Boolean)

// ── PHASE 3: VERDICT + STAGES 4–6 ────────────────────────────────────────────
phase('Verdict')

const verdictFile       = TRIAL + '\\stage-4-verdict.md'
const integrationFile   = TRIAL + '\\stage-5-integration.md'
const retroFile         = TRIAL + '\\stage-6-retrospective.md'
const trialSummaryFile  = TRIAL + '\\TRIAL-SUMMARY.md'
const kitTrialProcess   = 'c:\\Users\\masuta\\Desktop\\Coding\\test\\kit-maker\\procedures\\kit-trial-process.md'
const projectState      = 'c:\\Users\\masuta\\Desktop\\Coding\\test\\kit-maker\\project-state.md'

const stage4 = await agent(
  `STAGE 4 VERDICT — INT-10

Read the longitudinal decay file to get the decay verdict: ${longDecayFile}

SCORE SUMMARY (all 22 inputs, all conditions):
${JSON.stringify(scoresSummary, null, 2)}

CALIBRATION NOTES (pre-registered revision, Stage 2 Step 0):
- Cond A achieved Q1=3 without kit on Input 10. Pre-registered expected Q1=1.
- If Q1 B-A ≈ 0 across Hard inputs: FM4 triggered (coverage-gap conditioning does not produce cross-tradition coverage for frontier models on familiar LLM domains).
- Primary expected differential: Q7 (ADVERSARIAL-FLAGGED absent from Cond A), Q5 (query specificity), Q3 (precision).

VERDICT FORMULA (pre-registered, locked 2026-07-05):
GREEN: ALL: (a) B-A positive on ≥3 Tier 1 dims; (b) all Tier 1 B median ≥2 on Hard inputs; (c) longitudinal NO_DECAY or MINOR_DECAY; (d) avg B-C ≤1.5 on Tier 1 Hard inputs.
YELLOW: ALL: (a) B-A positive on ≥2 Tier 1; (b) all Tier 1 B median ≥1 Hard; (c) longitudinal ≤MODERATE_DECAY.
RED: ANY: (a) any Tier 1 B median=0 on Hard; (b) B-A negative on any Tier 1; (c) B-A=0 on ALL Tier 1.
INVALID subtypes if structural validity issues.

THREE LOCKED LEARNING QUESTIONS (answer explicitly):
Q1: Does the kit enable broader vocabulary-tradition coverage than a strong baseline?
Q2: Does the trial produce a ship signal? (B-A≥+1 on ≥3 Tier 1, all Tier 1 B median≥2 Hard, no decay, B-C gap≤1.5)
Q3: Is a kit-maker process problem revealed? (if B does not exceed A on vocabulary-coverage specifically, or null-hypothesis absent in ≥50% Standard inputs)

FAILURE MODE ANALYSIS: For each FM1–FM10 from stage-0-preregistration.md, state TRIGGERED/NOT_TRIGGERED/INSUFFICIENT_EVIDENCE with 1-sentence evidence.

VERDICT STRUCTURE to write to ${verdictFile}:
1. Aggregate score table (Hard inputs, Tier 1: median B, median A, B-A)
2. Verdict: color + rationale paragraph
3. Q1/Q2/Q3 answers (one paragraph each)
4. FM analysis table
5. Key unexpected finding

Write full Stage 4 verdict to: ${verdictFile}
Return: verdictColor, q1Answer (SUPPORTED/UNSUPPORTED/PARTIAL), shipSignal (YES/NO), kitMakerSignal (YES/NO/PARTIAL), keyUnexpectedFinding (1 sentence).`,
  {label: 'stage4-verdict', phase: 'Verdict', schema: VERDICT_SCHEMA}
)

log('Stage 4 verdict: ' + (stage4 ? stage4.verdictColor : 'UNKNOWN'))

const stage5 = await agent(
  `STAGE 5 INTEGRATION — INT-10

STEP 1: Read Stage 4 verdict at: ${verdictFile}
STEP 2: Read kit behavioral contract at: ${KIT + '\\CLAUDE.md'}

Produce Stage 5 post-trial integration report with:
1. Finding-to-mechanism mapping: For each Tier 1 dimension with nonzero B-A differential, which specific kit file/step/rule is the operative cause?
2. Failure mode resolutions: For each FM marked TRIGGERED — is the existing mechanism sufficient, needing revision, or missing?
3. Weakness register: Which entries in weakness_register.md are empirically confirmed, refuted, or updated?
4. Gap confirmations: Which of the 6 gaps in Stage 0 Appendix A were confirmed empirically in INT-10?
5. INT-11 scope: What must INT-11 test that INT-10 could not? (List at minimum: the 5 out-of-scope items from Stage 0 Section 4.)

Write full Stage 5 integration to: ${integrationFile}
Return a 200-word summary of the most important integration finding.`,
  {label: 'stage5-integration', phase: 'Verdict'}
)

const stage6 = await agent(
  `STAGE 6 MANDATORY PROCESS RETROSPECTIVE — INT-10

This stage is mandatory and blocks trial archive. It must apply specific improvements to kit-trial-process.md.

STEP 1: Read Stage 4 verdict at: ${verdictFile}
STEP 2: Read Stage 5 integration at: ${integrationFile}
STEP 3: Read current kit-trial-process.md at: ${kitTrialProcess}

STEP 4: Identify ≥5 specific improvement items. Each item must specify:
- Exact section/subsection in kit-trial-process.md
- Current wording (quote it)
- Replacement wording
- INT-10 evidence supporting the change

STEP 5: Apply ALL improvements directly to kit-trial-process.md using your Edit tool. Apply them — do not just list them.

STEP 6: Write full retrospective to: ${retroFile} with:
(a) Each improvement with before/after wording and section reference
(b) What each improvement prevents in future trials
(c) Any new section or gate needed

STEP 7: Update project-state.md at: ${projectState}
Add to "What happened this turn": "INT-10 COMPLETE. Verdict: ${stage4 ? stage4.verdictColor : 'SEE FILE'}. Ship signal: ${stage4 ? stage4.shipSignal : 'SEE FILE'}. Stage 6: applied improvements to kit-trial-process.md."

Return: count of improvements applied, sections modified (list), one-sentence summary of most important process change.`,
  {label: 'stage6-retrospective', phase: 'Verdict'}
)

log('Stage 6 complete: ' + (stage6 || 'see retrospective file'))

// Final archive summary
const archiveAgent = await agent(
  `TRIAL ARCHIVE — INT-10

Write a final TRIAL-SUMMARY.md to: ${trialSummaryFile}

Structure:
# INT-10 Trial Summary

**Trial ID:** INT-10
**Supersedes:** INT-09 (structurally invalid: INVALID-baseline + INVALID-scale + INVALID-domain)
**Date completed:** 2026-07-05
**Scale:** 22 inputs × 3 conditions + 10-input longitudinal batch

**Verdict:** (read from ${verdictFile})
**Ship signal:** ${stage4 ? stage4.shipSignal : '(see verdict)'}
**Q1 Primary hypothesis:** ${stage4 ? stage4.q1Answer : '(see verdict)'}
**Kit-maker signal:** ${stage4 ? stage4.kitMakerSignal : '(see verdict)'}

**Key unexpected finding:** ${stage4 ? stage4.keyUnexpectedFinding : '(read from verdict)'}

**Stage 6 improvements applied:** (read from ${retroFile} and list them)

**Files produced:** (list all .md files written in ${TRIAL})

**Next trial scope (INT-11):** (read from ${integrationFile})

Then write a 300-word synthesis of INT-10 learnings suitable for reporting to the user.
Return the 300-word synthesis text.`,
  {label: 'trial-archive', phase: 'Verdict'}
)

return {
  verdictColor:   stage4 ? stage4.verdictColor        : 'UNKNOWN',
  shipSignal:     stage4 ? stage4.shipSignal           : 'UNKNOWN',
  kitMakerSignal: stage4 ? stage4.kitMakerSignal       : 'UNKNOWN',
  keyFinding:     stage4 ? stage4.keyUnexpectedFinding : 'see verdict file',
  synthesis:      archiveAgent || 'see TRIAL-SUMMARY.md',
  trialDir:       TRIAL,
}
