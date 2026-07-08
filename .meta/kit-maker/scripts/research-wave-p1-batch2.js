export const meta = {
  name: 'kit-maker-wave2-p1-batch2',
  description: 'Wave 2 P1 Batch 2: clusters E (advisor + diminishing returns), F (direction alternatives), G (direction drift), H (problem-solving gaps), USER (disagreement, inattentiveness, multi-task) — 14 angles',
  phases: [
    { title: 'Research', detail: 'Parallel agents per angle — search queries, extract claims with evidence classification' },
    { title: 'Verify', detail: 'Adversarial verify pass on empirical claims (batched 10)' },
    { title: 'Archive', detail: 'Compile structured markdown output per angle' },
  ],
}

const ANGLES = [
  // ── CLUSTER E: Goal-Directed Advisor Behavior + Diminishing Returns ────────
  {
    title: 'Diminishing returns detection in AI agent work — recognizing when a line of work is saturating and what triggers switching to higher-value direction',
    queries: [
      'diminishing returns task switching cognitive science when to stop iterating decision research',
      'meta-cognitive monitoring work direction saturation stopping rule problem solving research',
      'goal drift detection AI agent subproblem absorption higher-level goal monitoring',
      'satisficing stopping rule optimal stopping sequential decision empirical psychology',
      'AI agent work allocation ROI prioritization dynamic task switching long-horizon empirical',
    ],
  },
  {
    title: 'Goal-directed advisor behavior in generated kits — what file what wording what makes it decay-resistant',
    queries: [
      'site:github.com CLAUDE.md advisor proactive goal-directed behavioral contract agent kit examples',
      'LLM agent proactive problem identification goal frame vs task frame instruction design empirical',
      'meta-level behavioral instructions AI agent session persistence cross-session behavioral decay',
      'advisor vs executor mode LLM agent instruction design goal-directed continuation practitioner',
      'minimal instruction set goal-directed AI agent behavior empirical compliance measurement',
    ],
  },

  // ── USER CLUSTER: Behavioral Contract Gaps ────────────────────────────────
  {
    title: 'Assertive compliance in AI agents — inform-once-then-comply pattern; how to surface errors once without preaching; optimal pushback frequency and framing that registers with inattentive users; when to flag harder vs accept override immediately',
    queries: [
      'human-AI disagreement assertiveness pushback compliance empirical interaction quality study',
      'expert advisor pushback frequency framing compliance user override inform-once pattern empirical',
      'AI agent error correction user direction wrong flag-then-comply pattern empirical evaluation',
      'assertive AI agent one-time correction vs repeated nagging user satisfaction compliance empirical',
      'constructive disagreement framing expert advisor professional pushback phrasing empirical communication',
    ],
  },
  {
    title: 'User inattentiveness and critical information salience — users skip warnings and override without registering flags; how to make critical information register with low-attention users without degrading normal output; progressive disclosure, TLDR patterns, flag placement effects',
    queries: [
      'user attention management critical information surfacing salience design empirical study',
      'warning design effectiveness low-attention users information salience empirical HCI',
      'progressive disclosure TLDR summary placement critical information user attention empirical',
      'AI agent output scanning behavior user attention eye-tracking reading empirical study',
      'flag formatting placement critical information LLM agent output user attention empirical comparison',
    ],
  },
  {
    title: 'Multi-task instruction completion in LLM agents — when user gives multiple tasks at once, what is the dropout rate, which tasks are dropped (position/complexity effects), and what is the underlying mechanism',
    queries: [
      'LLM multi-task instruction completeness task omission dropout rate empirical study',
      'prospective memory multiple concurrent tasks LLM agent retention forgetting empirical',
      'multi-step request task omission AI agent position effect first last mentioned empirical',
      'todo tracking LLM agent multi-task completeness structured execution improvement empirical',
      'task count instruction following LLM compliance rate scaling empirical benchmark',
    ],
  },
  {
    title: 'Compensatory structures for multi-task retention — explicit pre-execution enumeration, checklist tracking, self-check patterns; which mechanisms empirically reduce task dropout; whether listing tasks before starting is sufficient or additional structures needed',
    queries: [
      'explicit task enumeration before execution LLM completeness improvement empirical comparison',
      'checklist self-check multi-task LLM agent completion verification dropout reduction empirical',
      'pre-task listing vs natural language task instruction completeness LLM empirical study',
      'structured task decomposition enumeration completeness AI agent dropout prevention empirical',
      'meta-cognitive task tracking instruction following LLM agent completeness empirical benchmark',
    ],
  },

  // ── CLUSTER F: Direction-Level Strategic Alternatives ─────────────────────
  {
    title: 'Direction-level pivot signals and alternative direction generation — when to recognize a fundamentally different approach is needed',
    queries: [
      'pivot vs persist decision heuristics project direction change signals empirical research',
      'strategic alternatives generation methods reframing problem-solving direction change empirical',
      'diminishing returns vs plateau distinction creative work research productivity empirical',
      'direction change decision making goal persistence exploration vs exploitation empirical',
      'alternative approach generation problem reframing cognitive techniques empirical comparison',
    ],
  },

  // ── CLUSTER G: Direction Drift ────────────────────────────────────────────
  {
    title: 'Direction-drift detection in multi-session agent work — granularity and mechanism for questioning work direction across sessions not just within sessions',
    queries: [
      'exploration exploitation switching multi-session project momentum direction change cognitive empirical',
      'project direction revalidation cadence strategy review frequency outcome quality empirical',
      'meta-cognitive direction monitoring multi-step problem solving when to question approach empirical',
      'AI agent long-horizon direction drift higher-level goal monitoring session boundary empirical',
      'momentum bias cognitive perseveration task switching cost direction change stopping rule empirical',
    ],
  },

  // ── CLUSTER H: Problem-Solving Gaps in Kit Procedures ────────────────────
  {
    title: 'Explicit criteria definition before alternatives evaluation — prevents post-hoc rationalization where agent selects original option and retroactively constructs supporting criteria',
    queries: [
      'criteria definition before evaluation decision quality improvement empirical study',
      'pre-commitment criteria evaluation anchoring bias prevention decision making empirical',
      'explicit criteria specification alternatives evaluation LLM quality outcome empirical',
      'decision criteria definition post-hoc rationalization prevention empirical psychology',
      'evaluation criteria upfront specification AI agent quality selection improvement empirical',
    ],
  },
  {
    title: 'Second-order consequences — if we add this rule what downstream behaviors does it produce — structural prompts that trigger consequence-chain analysis in LLM agents',
    queries: [
      'second order thinking consequences agent reasoning quality empirical study',
      'downstream consequence analysis LLM agent instruction rule addition unintended effects empirical',
      'consequence chain prompting second order effects AI reasoning quality empirical',
      'rule interaction unintended consequences AI agent behavior empirical measurement',
      'systems thinking second order effects prompt engineering quality empirical study',
    ],
  },
  {
    title: 'Backward chaining — starting from what does success look like and reasoning backwards through necessary conditions vs forward reasoning from current state',
    queries: [
      'backward chaining goal-directed reasoning forward chaining comparison quality empirical',
      'working backwards from goal problem solving strategy effectiveness empirical psychology',
      'means-ends analysis backward induction problem solving quality comparison empirical',
      'backward reasoning LLM agent planning quality forward vs backward empirical',
      'goal-state backward inference necessary conditions problem solving empirical study',
    ],
  },
  {
    title: 'Double-loop learning Argyris — questioning whether a procedure should exist not just whether execution was correct — structural triggers that produce assumption-level questioning',
    queries: [
      'double loop learning Argyris governing assumptions single loop comparison empirical',
      'assumption questioning vs execution fixing learning organizational empirical study',
      'meta-level learning AI agent process improvement governing structure empirical',
      'second order change process improvement assumption questioning empirical evidence',
      'double loop feedback organizational learning AI agent workflow empirical',
    ],
  },
  {
    title: 'Issue tree and MECE decomposition — mutually exclusive collectively exhaustive coverage that guarantees no gaps and no double-counting vs intuitive checklists',
    queries: [
      'MECE decomposition mutually exclusive collectively exhaustive coverage completeness empirical',
      'issue tree problem decomposition completeness quality improvement empirical study',
      'structured decomposition coverage gaps checklists MECE vs intuitive quality empirical',
      'McKinsey issue tree MECE framework completeness audit quality empirical evidence',
      'LLM agent MECE decomposition structured coverage quality empirical benchmark',
    ],
  },
  {
    title: 'Articulation before commitment — explaining a procedure step to a hypothetical reader forces implicit assumptions to become explicit and reduces errors vs silent evaluation',
    queries: [
      'rubber duck debugging articulation assumption surfacing empirical software engineering',
      'explaining reasoning before committing implicit assumption surfacing empirical study',
      'verbalization problem solving error reduction implicit assumption explicit empirical',
      'self-explanation effect learning problem solving quality improvement empirical',
      'articulation forcing function hidden assumption surfacing LLM agent quality empirical',
    ],
  },
]

const CLAIM_SCHEMA = {
  type: 'object',
  properties: {
    claims: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key:        { type: 'string', description: 'short-hyphenated-slug, unique across this angle' },
          claim:      { type: 'string', description: 'Full actionable finding: study + numbers + mechanism + scope + implication for kit design' },
          group:      { type: 'string', description: 'topic cluster slug' },
          evidence:   { type: 'string', enum: ['empirical', 'consensus', 'anecdote'] },
          sourceUrls: { type: 'array', items: { type: 'string' } },
        },
        required: ['key', 'claim', 'group', 'evidence'],
      },
    },
    saturated:       { type: 'boolean' },
    queriesRun:      { type: 'array', items: { type: 'string' } },
    newKeysPerQuery: { type: 'array', items: { type: 'number' } },
    nullResults:     { type: 'array', items: { type: 'string' } },
    newAngles:       { type: 'array', items: { type: 'string' } },
  },
  required: ['claims', 'saturated', 'queriesRun'],
}

const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    verdicts: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key:        { type: 'string' },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
          note:       { type: 'string' },
        },
        required: ['key', 'confidence', 'note'],
      },
    },
  },
  required: ['verdicts'],
}

const domain = 'kit-maker agent kit design and deployment'
const archivePath = 'kit-maker/research_archive'
const researchAnglesPath = 'kit-maker/RESEARCH_ANGLES.md'

phase('Research')

const angleResults = await pipeline(
  ANGLES,
  (angle, _, i) => agent(
    `You are a research agent for the kit-maker project. Domain: ${domain}.

Your angle: "${angle.title}"

Run ALL of the following search queries in order. Record how many NEW claim keys each query produces. Stop early if consecutive queries return 0 new keys.

Queries:
${angle.queries.map((q, n) => `${n + 1}. ${q}`).join('\n')}

For each finding extract a CLAIM — not a source. Each claim must have:
- key: short-hyphenated-slug unique to this angle
- claim: specific finding with study/source, numbers/effect sizes, MECHANISM, SCOPE CONDITIONS, practical implication for kit-maker design
- group: topic cluster slug
- evidence: "empirical" (controlled study) / "consensus" (practitioner agreement) / "anecdote" (single source)
- sourceUrls: direct links

Record nullResults and newAngles.

CRITICAL: Return claims not sources. State mechanism and scope on every claim.
CRITICAL: Clusters E/F/G (advisor behavior, pivot signals, direction drift) — expect mostly consensus/anecdote from project management and cognitive psychology. Some empirical from exploration/exploitation research.
CRITICAL: Cluster H (problem-solving gaps: criteria, second-order, backward chaining, double-loop, MECE, rubber duck) — these have empirical grounding in cognitive psychology, organizational learning, and software engineering. Expect empirical claims.`,
    { label: `research:${angle.title.slice(0, 45)}`, phase: 'Research', schema: CLAIM_SCHEMA }
  )
)

const allClaims = []
const seenKeys = new Set()
const allNewAngles = []

for (const result of angleResults.filter(Boolean)) {
  for (const claim of result.claims) {
    if (!seenKeys.has(claim.key)) {
      seenKeys.add(claim.key)
      allClaims.push(claim)
    }
  }
  if (result.newAngles) allNewAngles.push(...result.newAngles)
}

log(`Research complete: ${allClaims.length} unique claims across ${ANGLES.length} angles`)

phase('Verify')

const empiricalClaims = allClaims.filter(c => c.evidence === 'empirical')
log(`Verify pass: ${empiricalClaims.length} empirical claims`)

const BATCH_SIZE = 10
const batches = []
for (let i = 0; i < empiricalClaims.length; i += BATCH_SIZE) {
  batches.push(empiricalClaims.slice(i, i + BATCH_SIZE))
}

const verifyResults = await parallel(
  batches.map((batch, i) => () => agent(
    `You are an adversarial verifier. Verify each claim independently — you did NOT find these.

For each: (1) Does the source exist and say this? (2) n-size and study design? (3) What extrapolation is present? (4) Replication status? (5) Verdict: high/medium/low with specific reasoning.

Claims (batch ${i + 1}/${batches.length}):
${batch.map(c => `KEY: ${c.key}\nCLAIM: ${c.claim}\nSOURCES: ${(c.sourceUrls || []).join(', ')}`).join('\n\n---\n\n')}`,
    { label: `verify:batch-${String(i + 1).padStart(2, '0')}`, phase: 'Verify', schema: VERDICT_SCHEMA }
  ))
)

const verdictsMap = {}
for (const result of verifyResults.filter(Boolean)) {
  for (const v of result.verdicts) verdictsMap[v.key] = v
}
for (const claim of allClaims) {
  if (verdictsMap[claim.key]) {
    claim.confidence = verdictsMap[claim.key].confidence
    claim.verifyNote = verdictsMap[claim.key].note
  }
}

log(`Verify complete: ${Object.keys(verdictsMap).length} verdicts`)

phase('Archive')

// Generate archive content (sync transform — no agent calls)
const validFiles = ANGLES.map((angle, i) => {
  const result = angleResults[i]
  if (!result) return null
  const slug = angle.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60)
  const angleClaims = allClaims.filter(c => result.claims.some(rc => rc.key === c.key))
  const satLog = (result.queriesRun || []).map((q, j) =>
    `- Query ${j + 1}: "${q}" — ${result.newKeysPerQuery?.[j] ?? '?'} new keys`
  ).join('\n')
  const claimsText = angleClaims.map(c => {
    const conf = c.confidence ? `\n- confidence: ${c.confidence}` : ''
    const vn = c.verifyNote ? `\n\n**Verify note:** ${c.verifyNote}` : ''
    return `### [key: ${c.key}]\n- evidence: ${c.evidence}${conf}\n- group: ${c.group}\n- sources: ${(c.sourceUrls || []).join(', ')}\n\n**Claim:** ${c.claim}${vn}`
  }).join('\n\n---\n\n')
  const nullText = (result.nullResults || []).length > 0
    ? `## Null results\n${result.nullResults.map(n => `- ${n}`).join('\n')}`
    : '## Null results\n- None'
  const newAnglesText = (result.newAngles || []).length > 0
    ? `## New angles surfaced\n${result.newAngles.map(a => `- ${a}`).join('\n')}`
    : ''
  return {
    slug,
    content: `# Research Archive: ${angle.title}\n\n## Saturation log\n${satLog || '- (no log)'}\n- Saturated: ${result.saturated ? 'YES' : 'NO'}\n\n---\n\n## Claims (${angleClaims.length})\n\n${claimsText || '(no claims)'}\n\n---\n\n${nullText}\n\n${newAnglesText}\n`,
    claimCount: angleClaims.length,
  }
}).filter(Boolean)

// Write archive files to disk
await parallel(validFiles.map(f => () =>
  agent(
    `Write the following content to the file at this exact path: ${archivePath}/${f.slug}.md\n\nUse the Write tool. Create the file (overwrite if it exists).\n\nContent:\n${f.content}\n\nReturn "written: ${f.slug}" when done.`,
    { label: `write:${f.slug}`, phase: 'Archive' }
  )))

// Persist new angles to RESEARCH_ANGLES.md
if (allNewAngles.length > 0) {
  const anglesText = allNewAngles.map(a => `- ${typeof a === 'string' ? a : JSON.stringify(a)}`).join('\n')
  await agent(
    `Append these new research angles to the end of the file at: ${researchAnglesPath}\n\nIf the file exists: use the Edit tool to append at the very end.\nIf not: use Write to create it.\n\nContent to append:\n\n## New angles surfaced (Batch 2 wave)\n${anglesText}\n\nReturn "appended" or "created" when done.`,
    { label: 'persist-new-angles', phase: 'Archive' }
  )
}

const total = validFiles.reduce((n, f) => n + f.claimCount, 0)

log(`Archive written: ${validFiles.length} files, ${total} claims`)

return {
  summary: {
    batch: 'P1 Batch 2 — clusters E, F, G, H + USER (disagreement, inattentiveness, multi-task)',
    anglesRun: ANGLES.length,
    totalClaims: total,
    breakdown: {
      empirical: allClaims.filter(c => c.evidence === 'empirical').length,
      consensus: allClaims.filter(c => c.evidence === 'consensus').length,
      anecdote: allClaims.filter(c => c.evidence === 'anecdote').length,
    },
    newAngles: allNewAngles,
    nullResultCount: angleResults.filter(Boolean).reduce((n, r) => n + (r.nullResults?.length || 0), 0),
    verifyDistribution: {
      high: allClaims.filter(c => c.confidence === 'high').length,
      medium: allClaims.filter(c => c.confidence === 'medium').length,
      low: allClaims.filter(c => c.confidence === 'low').length,
    },
  },
  archiveFiles: validFiles,
  allClaims,
  instructions: `Archive files written to ${archivePath}/. New angles appended to ${researchAnglesPath}. All P1 angles + USER behavioral contract angles complete. Proceed to Phase 4 synthesis per wave2-launch-instructions.md. USER angles synthesize with Cluster E and Cluster A.`,
}
