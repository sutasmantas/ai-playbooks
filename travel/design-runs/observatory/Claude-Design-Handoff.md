# Observatory Design Handoff

Date: 2026-06-02

## One-Page Brief

Make Observatory the new default destination for "Where To, Crew?" while preserving Poland as a selectable previous design.

The new governing concept is:

**Orbit To The Telescope**

The current Poland design is built around a drawn road-route line. Do not throw that away. The new default should show that the same route line has moved from road-trip mode into the fall night: it darkens, becomes a constellation/orbit path, and lands at the Observatory.

The Observatory design should be strongly astronomy-led: stars, planets, constellations, night sky, telescope/reticle details, moon/date status, clear-sky/weather call, and orbital route motion. It should still be a usable friends-only trip-planning site, not just a landing page.

Default behavior:

- Observatory opens first.
- Poland remains available through a visible destination/theme switcher.
- Paris remains locked/future.

Use the existing shared skeleton:

- Home
- Destination switcher
- Sign up
- Plan draft
- Plan
- Emergency/checklist support

Primary content source:

`travel/Observatory-Trip-Research.md`

Primary implementation path to inspect:

`travel/Trip-Site-Handoff/06-current-site/`

## Preserve

- Poland route-line/road-trip visual system as a selectable previous destination.
- Current static HTML/CSS/JS direction where practical.
- Current GSAP/Lenis/reduced-motion discipline.
- Local-asset policy.
- Planning skeleton and crew planning tone.

## Default / Switcher Behavior

Add a clear destination/theme switcher on the main page.

Theme states:

- Observatory: default/current
- Poland: selectable previous theme
- Paris: locked/future

Do not bury Poland in an archive. It must remain visibly reachable.

## Shared Skeleton

Each destination should still map to:

1. Sign up
2. Plan draft
3. Plan

The Observatory visual layer can change heavily, but planning behavior stays consistent.

## Destination Concept

**Orbit To The Telescope**

Everything should derive from the same idea:

- route line -> constellation line
- destination switcher -> orbiting bodies / sky targets
- page transition -> path draws through darkness
- route section -> Kaunas-to-Kulionys sky route
- Plan draft -> decisions orbit around the fixed telescope anchor
- status badges -> sky/visibility/booking signals
- cursor/hover -> telescope target or reticle

## Handover Transition

Required transition story:

```text
Poland road route continues.
The warm road-trip sky darkens into fall night.
The route line becomes stars/constellation/orbit.
The line lands at Observatory.
```

Recommended technique:

- SVG path morph or DrawSVG/MotionPath sequence using GSAP.
- Keep it short.
- Provide reduced-motion fallback.

## Theme Manifest

See `02-theme-preservation.md`.

Minimum manifest:

| Theme key | Label | Status | Default |
|---|---|---|---|
| observatory | Observatory | default | yes |
| poland | Poland | selectable | no |
| paris | Paris | locked/future | no |

## Candidate Inventory

See `04-candidate-inventory.md`.

Recommended core candidates:

- CAND-001 Destination/theme switcher registry
- CAND-002 Road-line to constellation handover
- CAND-003 Full-screen cosmos/starfield hero
- CAND-004 Kaunas -> Observatory constellation route line
- CAND-008 Clear-sky/weather call status badge
- CAND-012 Afternoon-to-night timeline scrubber
- CAND-014 Plan-draft option cards with sky-status tags
- CAND-019 NASA-style data cards for telescope facts
- CAND-020 Reduced-motion static sky fallback

## Complete Candidate Provenance

See `05-candidate-provenance.md`.

Every candidate has a source URL or local implementation basis. Inspect before using.

## Recommended Design Direction Subset

Build the first version around these sections:

1. **Home / Hero**
   - Observatory default.
   - Dark cosmos first viewport.
   - Destination switcher visible.
   - The Poland route line visibly transforms into the Observatory constellation/orbit line.

2. **Destination Switcher**
   - Observatory selected.
   - Poland available as previous route/design.
   - Paris locked.
   - Switcher can use orbiting markers or constellation-node cards.

3. **Route / Time Story**
   - One-day fall trip from Kaunas.
   - Afternoon drive -> optional stop -> dinner/warm-up -> late telescope -> return.
   - Use a constellation/orbit line instead of the Poland road line.

4. **Plan Draft**
   - Observatory anchor is mandatory.
   - Weather confirmation by 13:00-14:00 is a status item.
   - Options should display price/time/booking/weather impact.
   - Time meter must protect the night telescope slot.

5. **Plan**
   - Final itinerary should feel like a night-observation mission plan:
     - route
     - weather call
     - booking status
     - warm clothes
     - driver safety
     - Plan-B if clouds cancel telescope viewing

## References

Primary:

- NASA Eyes: https://science.nasa.gov/eyes/
- VirtualSky: https://virtualsky.lco.global/
- Stellarium: https://stellarium.org/?hl=en
- L'Observatoire Interactif: https://www.observatoire-interactif.com/en

Technique:

- Codrops scroll SVG map animation: https://tympanus.net/codrops/2026/05/21/creating-scroll-driven-svg-map-animations-with-gsap/
- GSAP MorphSVG: https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/
- GSAP MotionPath: https://gsap.com/docs/v3/Plugins/MotionPathPlugin/
- GSAP SplitText: https://gsap.com/docs/v3/Plugins/SplitText/
- Lenis: https://www.lenis.dev/
- CSS-Tricks grainy gradients: https://css-tricks.com/grainy-gradients/

Best source pools to inspect first:

- Codrops / Tympanus Creative Hub: https://tympanus.net/codrops/hub/all/
- GSAP docs and demos: https://gsap.com/docs/v3/ and https://gsapdemos.com/
- CodePen: https://codepen.io/
- UIverse: https://uiverse.io/
- Animista: https://animista.net/play
- CSSFX: https://cssfx.vercel.app/
- FreeFrontend CSS animations: https://freefrontend.com/css-animations/
- Awwwards GSAP inspiration: https://www.awwwards.com/websites/gsap/
- Godly: https://godly.website/

Use this priority:

1. Codrops/GSAP for the signature mechanics.
2. CodePen/UIverse/Animista/CSSFX/FreeFrontend for small reusable UI/motion pieces.
3. Awwwards/Godly/Land-book/SiteInspire for caliber and mood.
4. Three.js only when a static/CSS/canvas fallback exists.

## Snippets / Demos

Local Observatory snippet pack:

`travel/design-runs/observatory/06-code-snippets/`

Optional alternatives pack:

`travel/design-runs/observatory/07-animation-alternatives/`

Use the alternatives pack only when the core snippet for a major mechanic is not strong enough. It gives Claude Design a few better-source variants for transitions, route/orbit motion, particle backgrounds, CTA/status buttons, and loaders.

Premium copy/adapt space effects research:

`travel/design-runs/observatory/08-premium-space-effects-research.md`

Read this before deciding the final hero. It includes stronger shared space/cosmos sources: black-hole shaders, Three.js galaxy generators, Codrops particle systems, and astronomy-specific shaders. These are better candidates than generic CSS planets/star dots.

Included demos:

- `road-to-constellation-transition.html` - Poland road route becomes Observatory constellation/orbit.
- `cosmos-starfield-hero.html` - lightweight starfield/cosmos hero with reduced-motion fallback.
- `orbit-theme-switcher.html` - destination/theme switcher with Observatory default, Poland selectable, Paris locked.
- `sky-status-badges.html` - Observatory plan/status badges for weather call, moon, booking, and return safety.
- `afternoon-to-night-time-orbit.html` - one-day itinerary orbit from departure to night telescope to return.
- `kaunas-observatory-constellation-route.html` - scroll-linked Kaunas to Observatory constellation route.
- `telescope-reticle-cursor.html` - pointer-fine telescope reticle cursor and target hover.
- `moon-phase-date-widget.html` - approximate moon/date planning widget.
- `night-sky-grain-texture.html` - readable night-sky gradient and grain texture.
- `star-trail-scroll-effect.html` - subtle scroll-driven star trails.
- `planetary-loader.html` - small orbit loader.
- `parallax-star-cards.html` - option/destination cards with pointer parallax.
- `constellation-form-focus.html` - sign-up form focus constellation line.
- `orbit-button-hover.html` - orbit/ripple button hover.
- `mini-sky-panel.html` - static sky/constellation panel fallback.
- `telescope-data-cards.html` - NASA-style telescope/status data cards.
- `reduced-motion-fallback.html` - explicit reduced-motion fallback pattern.

Every candidate in `04-candidate-inventory.md` is mapped to at least one local snippet in `06-code-snippets/README.md` and `05-candidate-provenance.md`.

Alternative demos:

- `svg-mask-cosmos-transition.html` - Codrops-inspired section/page transition from road/warm layer to cosmos layer.
- `responsive-curved-orbit-route.html` - Codrops-inspired responsive curved route/orbit path.
- `css-particle-sky-background.html` - FreeFrontend/CodePen-style CSS particle sky alternative.
- `sparkle-orbit-cta.html` - FreeFrontend/UIverse-style CTA sparkle/orbit alternative.
- `futuristic-weather-state-button.html` - FreeFrontend-style booking/weather state button.
- `sci-fi-loader-alternative.html` - FreeFrontend/UIverse-style sharper loader alternative.

Use these online/code sources as research starting points:

- Pure CSS starfield: https://codepen.io/ArneSava/pen/BaWxOaR
- SVG constellation animation template: https://codepen.io/sdellis/pen/pEqLVd
- CSS orbiting planet: https://codepen.io/esprimo/pen/jyRLKr
- Codrops interactive particles: https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/
- Three.js starfield warp: https://threejsdemos.com/demos/procedural/starfield

Do not use every snippet. Choose the effects that reinforce **Orbit To The Telescope**. If using the current site stack, merge useful pieces into the existing `assets/motion.js`, page scripts, and CSS instead of creating a second animation system.

## Pages To Build / Adapt

If working in the current site:

- `index.html`
- `observatory/sign-up.html`
- `observatory/plan-draft.html`
- `observatory/plan.html`
- `emergency.html` if destination-specific emergency sections are added

Keep or preserve:

- `poland/sign-up.html`
- `poland/plan-draft.html`
- `poland/plan.html`

## Content Sources

- Observatory content: `travel/Observatory-Trip-Research.md`
- Poland reference/content: `travel/Trip-Site-Handoff/01-specs/Trip-Site-Content.md`
- Current design process: `travel/process/Travel-Design-Process.md`

## Implementation Constraints

- Static/free deployment should remain possible.
- Use local assets.
- Do not hotlink images.
- Do not require API keys unless the user approves.
- Heavy 3D/WebGL is optional; if used, keep it to one hero/feature and provide fallback.
- Respect `prefers-reduced-motion`.
- Keep mobile usable.
- Do not let visual effects make plan-draft decisions hard to scan.

## Asset Map

Existing useful local asset:

- `assets/img/milkyway.jpg`

Needed Observatory assets:

- Lithuanian Museum of Ethnocosmology exterior/dome/tower
- telescope/night observation image
- Mindunai Observation Tower or Labanoras/Moletai route image
- fall-night sky / star field if `milkyway.jpg` is not enough

Download all new assets locally into the implementation's asset folder. Do not hotlink.

## Source-Use Expectations

In the final Claude Design output or summary, include a source-use map:

- sources inspected
- sources used
- sources intentionally ignored
- which UI section each used source influenced

Example:

```text
Used Codrops scroll SVG map animation for Observatory route section.
Used NASA Eyes only as mood reference for dark data-card styling.
Ignored Three.js GPGPU particle effect because it was too heavy for mobile.
```

## Non-Goals

- Do not design Paris.
- Do not remove Poland.
- Do not build a full 3D planetarium.
- Do not make the Observatory page a generic purple space landing page.
- Do not replace the trip-planning skeleton with only cinematic storytelling.
- Do not fake exact weather certainty; the museum same-day confirmation remains the decisive status.

## Verification

Use `verification-checklist.md`.
