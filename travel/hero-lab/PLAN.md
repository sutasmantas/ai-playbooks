# Cosmos Hero — Award-Level "Wow" Lab (Iterative, Craft-First)

Date: 2026-06-03
Status: PLAN (awaiting user review before any build)
Project: "Where To, Crew?" travel site — Observatory/cosmos hero

---

## 1. Goal

Recreate the kind of **"wow" hero animation that award-winning websites have** — going **big
and committed in one direction** (scenic *or* interactive; both are valid) with a clear
emotional moment. Present candidates in a **selection gallery** the user flips through live,
full-screen, with the real headline overlaid, and **picks from**.

The agent **researches, builds, crafts, and curates**. The **user is the judge.** This is an
**iterative** effort — the first batch is expected to miss; we improve across rounds.

Isolated prototype run; the chosen winner is improved + integrated into the live (currently
stale) site in a **separate later effort**.

---

## 2. What the research established (and why the last run failed)

Sources: [Codrops — WebGL for Designers](https://tympanus.net/codrops/2026/03/04/webgl-for-designers-creating-interactive-shader-driven-graphics-directly-in-the-browser/),
[Utsubo — top Three.js agencies](https://www.utsubo.com/blog/top-threejs-agencies),
[Utsubo — award judging criteria](https://www.utsubo.com/blog/award-winning-website-design-guide),
[Medium — Awwward-winning animation techniques](https://medium.com/design-bootcamp/awwward-winning-animation-techniques-for-websites-cb7c6b5a86ff),
[Motion.dev — web animation performance tier list](https://motion.dev/magazine/web-animation-performance-tier-list),
[Awwwards — Three.js sites](https://www.awwwards.com/websites/three-js/).

**Do they build from scratch?** Mostly **no.** They stand on the same stack we have —
Three.js / R3F / OGL + GSAP + Lenis — and **adapt Shadertoy shaders + Codrops tutorials**.
Codrops: creators *"don't build from scratch — they adapt and recombine,"* learning *"through
recreation,"* favoring *"exploration over specification."* Designer tools (Unicorn Studio) make
shader heroes a layer-based, Photoshop-like workflow. The agencies' edge is **"craft over
template,"** not secret tech.

**Is it really that hard?** Two different difficulties we were conflating:
- Writing raw GLSL from nothing — genuinely hard.
- *Adapting* an existing effect — very achievable.
The hard part that actually separates premium from amateur is the **craft layer wrapped around
the effect**, not the effect itself.

**The craft layer (the real wow):**
- **Post-processing** — bloom (brightpass → blur → tonemap), depth-of-field, vignette, film
  grain, chromatic aberration. This is what gives a bright core a *proper* bloom vs. a flat look.
- **Choreography & timing** — easing, staggered reveals, scroll sequencing (Lenis). *"The
  difference between good and award-winning often comes down to choreography."*
- **Composition & restraint** — Apple-style: dedicate the viewport to ONE message; don't overwhelm.
- **Narrative intent first** — *"Story first: what moment should the visitor feel?"*
- **Performance** — 60fps, fast load; judges notice unfinished polish.

**Why the last run failed (sharpened):** the prior heroes were **raw effects with no
post-processing, no bloom, no choreography, no narrative framing, no restraint** — so they read
as "starry noise" and "boring." The effect was never the missing piece; **the craft layer was.**
Corollary: *a mediocre effect with great craft beats a great effect shown raw.*

---

## 3. Decisions (from the user)

| Decision | Choice |
|---|---|
| Target | Isolated prototype on the live stack, portable into the live site later. |
| Concept (cosmos vs observatory aperture) | **Research/the gallery decides.** Don't pre-limit. |
| Priority | **Max impact.** Go big in a direction. Desktop-first jaw-drop is fine. |
| Interactivity | **NOT a requirement.** Scenic and interactive are both valid — commitment is the bar. |
| Fallback (reduced-motion / mobile / poster) | Not a gate. Kept opportunistically only. |
| Judge | **The user**, via the gallery, every round. |
| Sourcing | **Widest** — adapt anything: Three.js/R3F/OGL, Shadertoy ports, Codrops, Unicorn Studio, any fast path to a premium base. |
| Craft level | **Fully crafted** each candidate (full post/grade/choreography pass). Time & cost are not a constraint. |
| Batch size | **~10 candidates per round**, then user reviews and steers the next round. |
| Prior heroes | Low value as-is. Used only as cheap reference baselines; no heavy revival. |

---

## 4. The bar a candidate must clear

It must **go big and committed** in a clear direction with an emotional moment, AND carry the
**full craft layer** (post-processing + grade + choreography + composition). It does **not** need
to be interactive. The agent culls only the broken / ugly / half-baked, with a recorded reason;
the user judges everything else.

---

## 5. Two workstreams per candidate

1. **Base effect** — sourced/adapted from the widest pool. Answers "what is the *subject*?"
2. **Craft pass** — the premium layer applied on top:
   - post-processing (bloom/DOF/vignette/grain/chromatic aberration as fits),
   - warm→cosmos color grade onto `--terra` / `--forest` / `--paper`,
   - entrance choreography (loading reveal, headline stagger, scroll entry via GSAP+Lenis),
   - composition with a protected, readable headline zone, and restraint.

The craft pass is largely **reusable across candidates** — a shared toolkit (bloom, grade,
reveal timeline, grain) that each candidate plugs into.

---

## 6. Direction pool (deliberately wide — not a fixed shortlist)

A broad menu to draw the ~10/round from; we are **not** limiting to a handful:
black hole + accretion lens · high-fidelity spiral galaxy (with bloom + core + dust lanes) ·
volumetric / GPGPU nebula · wormhole / light tunnel · supernova / shockwave · hyperspace /
star-warp · cosmic dust & god-rays · planet + atmosphere/corona · aurora field · particle morph
(forms a recognizable object — telescope/dome/constellation — then disperses) · fluid / flow
fields · observatory **aperture composite** (any effect masked into an eyepiece/dome slit) ·
plus **wildcards** the scouts surface. Each round can mix families and lean into what the user
reacted well to.

Source pools: Shadertoy, Codrops/Tympanus, Three.js examples, R3F/OGL/`drei`, GSAP demos,
Awwwards/Godly (caliber/mood), Unicorn Studio, and the handoff's `08-premium-space-effects-research.md`.

---

## 7. The iterative run (multi-agent Workflow — user opted in)

**Per round (~10 candidates):**
- **A · Scout (parallel):** agents sweep the widest source pool; each returns base source(s) +
  URL + license + est. weight + the technique that gives a strong subject and how it will be crafted.
- **B · Build + craft (pipeline):** each candidate → a clean, isolated, runnable hero on our
  stack, with the **full craft pass** applied (shared post/grade/reveal toolkit). Reuse proven
  source logic/constants; log deliberate deviations.
- **C · Agent pre-filter (Playwright):** render each, capture hero frame + motion sequence +
  entrance; cull only broken/ugly/half-baked, each cut documented. Agent does **not** pick winners.
- **D · Assemble the gallery round:** survivors wired into the switcher; contact-sheet for scanning.

**Between rounds:** user reviews the gallery, says what's working / what to push / what to drop;
the next round adapts (more of the liked directions, crafted further; new wildcards; retire misses).
Repeat until the user has a winner.

---

## 8. Deliverables

- `travel/hero-lab/`
  - `gallery.html` — switcher: pick a candidate, see it live full-screen, toggle headline on/off,
    read a one-line note (source · weight · port-difficulty). Updated each round.
  - `candidates/<round>-<name>/` — one folder per candidate (`index.html` / `css` / `js`).
  - `shared/` — tokens, fonts, headline overlay, and the **reusable craft toolkit** (bloom, grade,
    reveal timeline, grain).
  - `contact-sheet.html` — quick visual scan of the round.
  - `FINDINGS.md` — running log: source-use map (inspected/used/ignored/where), what was culled
    and why, per-survivor craft notes, and the "to make production-ready" note for the eventual winner.

---

## 9. Non-goals (this run)

Pick the winner for the user · integrate into the live site · design Paris · remove Poland ·
build a full 3D planetarium · treat reduced-motion/mobile/fallback as a gate.

---

## 10. Risks & guardrails

- **"Space wallpaper" / dots-again / boring** → the craft layer + "go big with a moment" bar
  exist to kill this; it's exactly how the last run failed.
- **Polishing losers** → the per-round review lets the user redirect effort before the next batch.
- **Reimplementing instead of reusing** → reproduce proven source logic/constants; log deviations.
- **Licensing** → recorded per source in `FINDINGS.md`.
- **Performance as polish** → 60fps/fast-load is part of premium feel, tracked even though fallback isn't gated.
- **Scope creep into integration** → integration is explicitly a later, separate effort.
