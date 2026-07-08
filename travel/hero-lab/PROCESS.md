# Hero Lab — Process & Retro (how we built the cosmos hero)

**Purpose:** a playbook + problem log so the next cosmos/hero effort is faster. Read this before
starting a new round. Pairs with `PLAN.md` (the strategy) and `handoff-warp-hero/HANDOFF.md` (the winner).

**Outcome:** after 3 iteration rounds the user chose a **refined "Star Nest" warp** (slow, meditative
drift, locked at `0.07×` speed). Final deliverable: `handoff-warp-hero/`.

---

## 1. The loop that worked

```
research → build candidates (parallel) → I render+screenshot+QA → gallery → USER judges → steer → repeat
```

- **The user is the judge, not the agent.** We only curated, fixed, and culled broken/ugly ones.
  Don't try to crown a winner from code — render it and let the human pick.
- **A live gallery (`gallery.html`) + a local server** (`python -m http.server 8123`) is the judging
  surface: an `<iframe>` switcher, full-screen, real headline overlaid, arrow keys to flip.
- **Batches of ~4–10 per round**, then check in. Small enough to steer, big enough to compare.
- **Parallel build via Workflow** (one agent per candidate, each a self-contained `index.html`) is
  efficient — BUT agents can't reliably see their own output (see Problems), so **I always re-rendered
  and QA'd every candidate myself** with Playwright.

## 2. The single most important insight

**The "wow" is the craft layer, NOT the raw effect.** Award sites mostly *adapt* proven
shaders/demos (Shadertoy, Three.js, Codrops) and win on **craft**: bloom/post-processing, color
grade, choreography/easing, composition/restraint, performance, and a *handcrafted concept that fits
the site*. (Sources: Codrops "WebGL for Designers"; Utsubo Three.js agencies / award criteria;
Motion.dev tier list — see PLAN.md §2.)

We proved this directly: the same galaxy looked amateur **raw** and premium **crafted** (bloom +
grade + reveal). `candidates/r1-galaxy/` has a `C` key to toggle raw↔crafted — keep it as the demo.

## 3. What the user actually wanted (distilled — apply these as hard rules)

1. **Photoreal / "real-life-like."** Stylized point-clouds read "childish." Realism comes from
   **faithfully reusing a proven source**, not reinventing.
2. **Visuals AND motion together.** "Just a picture" or "just an animation" both fail. Always combine.
3. **A handcrafted concept that fits the trip** (the plane-through-bespoke-locations example) — not a
   stock loop dropped in. Tie motion to "Orbit To The Telescope" / the night run to the observatory.
4. **Interactivity is NOT required** — scenic is fine. "Go big in one committed direction" is the bar.
5. **Calm, slow motion** beats frantic. The winning warp ended at `0.07×`.
6. Max impact; a cheap fallback is **not** a gate (still document it as a TODO).

## 4. Round-by-round (what landed, what didn't)

- **Proof (galaxy):** validated craft thesis. Verdict: direction good, but point-cloud not wow;
  bar raised to photoreal + motion + concept.
- **R1 (4 effects: black hole / nebula / Hubble dive / warp):** black hole + warp were the keepers;
  warp overexposed → I fixed it. Hubble = most literally "real"; nebula = pretty but generic.
- **R2 (refine warp + black hole; +2 observatory-eyepiece framings):** warp calmer ✓; black hole more
  realistic ✓ (but a perf landmine, see below); obs-blackhole framing promising; obs-warp too dark.
- **R3 (4 warp variants, slower):** **MISSTEP** — the user only wanted the *existing* warp slowed, not
  4 new techniques. The from-scratch ones (starfield/wormhole/particles) looked "childish"; only the
  faithful Star Nest (B) was right. Lesson #1 below.
- **Lock-in:** added a live speed slider to Star Nest so the user dialed the exact pace (`0.07×`),
  then baked it and packaged the handoff.

## 5. Problems & gotchas (the important part)

### Process / judgment
- **Don't over-engineer the ask.** "Slow the warp down" meant *tune one parameter*, not build 4 new
  effects. When the user names a specific tweak, do the minimal thing first. (Cost me a whole round.)
- **"From scratch" = childish.** Reinvented effects looked amateur; faithfully-adapted proven sources
  (Star Nest, the geodesic black hole) looked real. Reuse the encoded correctness; only art-direct.
- **Give the user the control, don't guess.** For subjective continuous values (speed), ship a
  **slider + type-in box** and let them dial it in one pass instead of guessing across rounds.
- **Render before claiming anything.** Stills lie about motion, and agents' self-reports can't be
  trusted for visuals. Always Playwright-render + screenshot + eyeball.

### Workflow agents
- **Agents share ONE Playwright browser** → their screenshots captured *other agents'* tabs. So agent
  self-QA of visuals is unreliable. **Have agents build only; do all visual QA in the main thread,
  serially.** (Tell them not to use the browser at all.)
- Agents writing to **separate folders** avoids file conflicts — no worktree isolation needed.

### Playwright / rendering gotchas
- **`requestAnimationFrame` is throttled (~1 fps) in the automation tab.** So:
  - A JS FPS probe reading rAF cadence is **meaningless** — don't trust "1 fps" from it.
  - Intro/reveal timelines play in slow motion → screenshots taken too early look empty/headline-less.
  - **Fix:** fast-forward GSAP before screenshotting: `gsap.globalTimeline.time(30)` jumps all tweens
    to their end (settled) state. Do this, then screenshot.
- **Real perf signal = screenshot timeout.** A heavy frame makes `browser_take_screenshot` time out
  (>5s). That's the reliable "this is too heavy" tell, not the rAF FPS number.
- Check the **real GPU**: `WEBGL_debug_renderer_info` → it was ANGLE/Intel integrated, so budget for
  integrated graphics, not a discrete GPU.

### Shader / perf landmines
- **Supersampling tanks perf.** An agent added 2×2 supersample (4 full raymarches/pixel) to "polish"
  the black hole → **1 fps / screenshot timeout**. Removing SS + trimming steps (180→130) + fbm
  octaves (6→4) fixed it with no visible quality loss. **Keep raymarch cost modest; cap DPR ~1.5.**
- **Over-bright grades white out.** The R1 warp blew to white because the grade lifted the whole field
  (`/1.4` luminance ramp) + bloom 0.9 + high exposure. Fix pattern: **crush blacks** (divide luminance
  by ~3, `pow(l,1.5)`), **lower the "lo" colors near 0**, **threshold the bloom** (~0.18 so only
  highlights glow), **drop exposure** to ~1.0. Reusable recipe for "it looks washed out."
- **Empty/dark at rest** (the slow starfield/star-nest variants) reads as bare. If going very slow,
  add star density / ease the vignette so the frame isn't empty.

## 6. Reusable recipe for next time (checklist)

1. Define the concept tie to the trip first (the "moment the visitor should feel").
2. Source a **proven** base (Shadertoy / Three.js examples / Codrops) — note the **license**.
3. Build self-contained `candidates/<name>/index.html` on the live stack (Three 0.160 ESM importmap +
   GSAP 3.13 CDN), reusing the headline markup + brand tokens (see any existing candidate as the shell).
4. Apply the craft layer: **bloom + warm→cool grade + entrance choreography + readability scrim +
   vignette + grain**. (The grade/blowout recipe in §5.)
5. Cap perf: DPR ≤ ~1.5, modest step counts, **no supersample**.
6. Render + QA in the main thread: resize 1440×900 → navigate → `gsap.globalTimeline.time(30)` →
   screenshot → eyeball. Watch for screenshot timeouts (= too heavy).
7. Add to `gallery.html`, let the user judge, steer the next round.
8. For subjective values, ship a live control (slider) so the user locks it themselves.
9. On lock-in: bake the value, strip dev chrome, write a HANDOFF.md (source, license, knobs, TODOs).

## 7. File map

- `PLAN.md` — strategy / decisions / research.
- `PROCESS.md` — this file.
- `gallery.html` — live switcher for all candidates.
- `candidates/` — every attempt (r1-* effects, r2-* refinements + observatory framings, r3-* warp variants).
- `handoff-warp-hero/` — the chosen winner, packaged (`index.html` + `HANDOFF.md` + `preview.png`).
- `screenshots/` — rendered frames used for judging each round.
- Run a local server to view: `python -m http.server 8123` (from `travel/hero-lab/`).

## 8. Open TODOs carried into integration

- `prefers-reduced-motion` static fallback (not built yet; the brief requires it).
- Vendor CDN libs (Three/GSAP/fonts) locally before any public deploy.
- Verify mobile/touch behavior + perf on real devices.
- Star Nest is **CC BY-NC-SA** — fine for friends-only, NOT commercial without permission/replacement.
- Wire real CTAs/nav (currently `#` placeholders).
