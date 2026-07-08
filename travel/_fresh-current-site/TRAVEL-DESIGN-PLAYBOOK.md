# Travel Site — Design & Build Playbook

A repeatable process for building a "Where To, Crew?" trip site (Poland, Observatory,
and future destinations) so the next one goes right the first time. Written from the
Observatory build.

---

## 0. The shape of every trip
Each destination is the SAME skeleton, re-themed:
`Home (switcher) → sign-up → plan-draft → plan → emergency`
- **Home** = hero + destination switcher + signature scroll mechanic + board + status + how-it-works.
- **sign-up** = name/going + availability calendar + map pins + vibes + a couple of trip-specific singles → saves to the shared store.
- **plan-draft** = the decision ENGINE: grouped options with `data-price`/`data-hours`,
  reveal rules, a live per-person total, a **time meter that protects the trip's anchor**,
  a bookings panel, decision progress, crew leaning, presets, download.
- **plan** = the chosen draft rendered as a day-by-day mission plan + bookings + plan-B + emergency + budget.
- **emergency** = printable one-pager, destination-specific numbers.

## 1. Process order (do NOT skip)
1. **Read the whole handoff first.** START-HERE → Claude-Design-Handoff → the trip research
   (content source of truth) → the *current site* stack → theme-preservation → candidate
   inventory → reference notes → code snippets. Internalise the architecture before writing.
2. **Copy the real current site into the project** (assets + poland + root pages). Build ON it.
   Never start from a blank file — the motion/store/engine systems are the value.
3. **Ask the user** (one focused round): scope, build-on-current-site?, signature mechanic,
   plan depth, store bucket, imagery source, palette, cursor. Confirm before building.
4. **Generate local cosmos/era assets** (canvas → PNG) for backgrounds + reduced-motion fallback.
5. **Preserve the previous destination**: move the old home to `<dest>/index.html`, fix its
   relative paths (`assets/`→`../assets/`, links), keep it reachable from the new switcher + nav.
6. Build new home → sign-up → plan-draft (+ engine) → plan → emergency.
7. **Verify after every page**: `done` (console clean) then `fork_verifier_agent`.
8. Polish pass against the candidate inventory; then real-world close-outs (local photos, dates).

## 2. Architecture & conventions (reuse, don't duplicate)
- **Shared, untouched-where-possible:** `assets/motion.js` (Lenis conductor, reveals, cursor,
  page transition, preloader, journey spine), `assets/store.js` + `assets/crew.js` (shared
  KV store keyed by `window.WTC_CFG.trip`), the data-driven plan-draft engine pattern.
- **Per-destination theme layer:** ONE CSS file that re-tunes the shared `:root` tokens +
  adds theme components (e.g. `assets/observatory.css`), and ONE JS file for theme-only
  mechanics (e.g. `assets/sky.js`). Load AFTER motion.js. Body gets `class="theme-<dest>"`.
- **Store isolation:** each destination sets its own `window.WTC_CFG = { apiUrl, trip:'<dest>' }`
  inline BEFORE store.js. Do NOT share `wtc-poland-plan` keys — use `wtc-<dest>-plan`, and a
  destination-specific checklist file (`checklist-<dest>.js`), never the Poland `checklist.js`.
- **Plan-draft engine is data-driven:** options are `.opt[data-group][data-type]` containing
  `.choice[data-val][data-price][data-hours][data-book][data-suggest]`. The engine reads the DOM;
  to change content you edit HTML, not JS. Reveal rules + the time-meter math are the only
  destination-specific JS.
- **The time meter must protect the trip's ANCHOR** (Poland: the registered park day / hike fit;
  Observatory: arriving before the night-telescope slot + a safe drive home). This is the soul of
  the planner — never ship a draft without it.
- **Canonical HTML** (close every tag, quote attrs) so the editor can direct-edit.

## 3. Motion / loaders / transitions (the part that bit us — get it right)
- **One preloader** (`.preload`, green route draws) on fresh loads; **one page-transition**
  overlay (`.transition`) on internal `[data-transition]` links. They must NOT both show.
- On a transition ARRIVAL the green preloader would otherwise flash during the destination's
  script-load → **double loader**. Fix: an inline `<head>` script sets `html.via-trans` from
  `sessionStorage('wtc-trans')`; CSS hides `.preload` and shows the `.transition` cover
  immediately, so only ONE themed loader shows.
- **Loaders/overlays must be REAL DOM, never `::before/::after`** — pseudo-elements don't
  render in html-to-image screenshots, so they can't be tested. Build the orbit loader as
  `<div class="t-orbit"><span class="t-ring"></span><span class="t-planet"></span></div>`.
- **Service workers cause auto-reloads** (`clients.claim()` seizes the loaded page). For a
  preview/design build, DELETE `sw.js` and unregister any stale worker on every page. Re-add a
  SW only for a real offline deploy, and never with a controllerchange→reload pattern.
- Keep transition timing snappy: cover ~0.4s before navigating, short reveal hold ~0.2s.
- Gate entrance animations on the visible end-state + `prefers-reduced-motion: no-preference`;
  always provide a static fallback (e.g. a generated `cosmos.png`).

### 3b. The signature "wow" centerpiece (award-winning feel)
Award-winning sites usually have ONE big, always-moving hero centerpiece — that's what
gives the wow. Build it as a large canvas behind the hero (here: the **orrery** — a glowing
star with ringed/mooned planets on tilted elliptical orbits, pointer-parallax). Rules:
- Real canvas (so it screenshot-tests), `pointer-events:none`, sits below the hero text z-index.
- Keep hero copy readable (dim the photo, place text off to one side of the centerpiece).
- Tie it to the concept (orbit → telescope), reduced-motion = one static frame.
- Then layer the smaller motion (constellation field, cursor, route) UNDER it as support — the
  centerpiece leads, everything else is rhythm.

## 4. How to TEST loaders & motion reliably
Screenshots use html-to-image (DOM re-render): **canvas captures, but CSS pseudo-elements,
some filters, and live transforms do NOT.** So:
- Build loaders/cursors/effects from **real DOM or canvas** → they screenshot.
- To capture a transient overlay: `eval_js` to force its visible state
  (`gsap.set('.transition',{yPercent:0,autoAlpha:1})`), then `save_screenshot`.
- To confirm a pseudo-element or animation that won't capture: read it with
  `getComputedStyle(el,'::after').animationName` / colors instead of screenshotting.
- Pinned ScrollTrigger sections won't scrub via `window.scrollTo` under Lenis — drive them with
  `ScrollTrigger.getAll().find(s=>s.pin).scroll(value)` in the verifier.
- Always end with `done` (console check) + `fork_verifier_agent` with a DIRECTED task listing
  exact selectors/assertions per page (no console errors, overlay removed, canvases
  `pointer-events:none` so clicks pass, key elements present).

## 5. Imagery
- Prefer LOCAL assets. If approved to hotlink temporarily, use **Wikimedia Commons
  `Special:FilePath/<File>.jpg?width=NNNN`** (stable redirect) for real places, and swap for
  downloaded local files before any public deploy. Generate cosmic/era backdrops on canvas.
- Use the striped `.ph` placeholder with a mono label where a real photo is still missing.

## 6. Gotchas checklist (things that went wrong once)
- [ ] Motion.js calls `ScrollTrigger.update` — any page loading motion.js needs ScrollTrigger,
      OR guard it (`if(window.ScrollTrigger)`). Don't add GSAP to a page without its plugins.
- [ ] Custom cursor: position with `left/top` + `translate(-50%,-50%)` and NO extra margin, or
      it offsets and "clicks register higher up." Cursor canvases must be `pointer-events:none`.
- [ ] Preloader must have a fail-safe timeout that force-removes it (background-tab rAF stalls).
- [ ] Don't load the Poland `checklist.js`/`config.js` on another destination's pages.
- [ ] Move-and-fix-paths when relocating the old home; verify no bare `assets/` refs remain.
- [ ] Reduced-motion + mobile breakpoints for every new component; no horizontal overflow.

## 7. Deliverable hygiene
- Register user-facing pages as assets (`asset:` on write_file).
- Include a **source-use map** (sources inspected / used / ignored + which UI each influenced)
  in the footer and as `SOURCE-USE-MAP.md`.
- Keep this playbook updated when a new mistake is found, so the next trip is cleaner.
