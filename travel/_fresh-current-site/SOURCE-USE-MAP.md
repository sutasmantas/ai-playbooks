# Observatory redesign — source-use map

**Concept:** *Orbit To The Telescope.* The Poland drawn-route line keeps going past
summer, darkens into a constellation, and lands at the Lithuanian Museum of
Ethnocosmology — where the night telescope is the mandatory anchor. Observatory is
the new default; Poland is preserved as a reachable "previous destination"; Paris
stays locked.

## Sources INSPECTED
- `Observatory-Trip-Research.md` — the content source of truth.
- Current-site stack (`06-current-site/`) — motion system, store/crew layer, the
  Poland plan-draft engine, page structure.
- Local snippet pack (`06-code-snippets/`) and animation alternatives.
- NASA Eyes / Stellarium / VirtualSky — dark, data-led astronomy UI (mood only).
- Codrops scroll-driven SVG map animation + GSAP DrawSVG/MotionPath docs (technique).
- Wikimedia Commons (real photos of the museum / observatory / observation tower).

## Sources USED → which UI section
| Source | Used for |
|---|---|
| Observatory-Trip-Research.md §2–§7 | Home copy, data cards, the constellation route stops, board |
| Research §8 (decision layer) | Observatory **plan-draft** groups + reveal rules |
| Research §9 (cost) | Live per-person total in the plan-draft summary |
| Research §10 (time/feasibility) | The **time meter that protects the night slot** |
| Research §11 (bookings) | "Your bookings" panel + weather-call status |
| Research §12 | The final **plan** page + downloadable checklist + emergency one-pager |
| Current `motion.js` / `motion.css` | Reused conductor (Lenis, reveals, transitions, journey spine) — extended, not duplicated. One small guard added so dark pages get the reticle cursor instead of the boot cursor. |
| Current `store.js` / `crew.js` | Shared crew store — Observatory namespaced to its own `trip:'observatory'` bucket |
| Current Poland plan-draft engine | Pattern for `plan-draft-observatory.js` (single plan-state object, presets, leaning) |
| Codrops scroll-SVG map + GSAP DrawSVG/MotionPath | The pinned **Kaunas → Observatory constellation route** (`sky.js`) |
| Snippet pack: orbit switcher, sky-status badges, moon widget, reticle cursor, data cards, parallax cards | Folded into `observatory.css` + `sky.js` (not shipped as separate systems) |
| NASA Eyes / Stellarium / VirtualSky | Mood reference only for the dark data-card styling |
| Wikimedia Commons (Special:FilePath) | Hero / board / end-CTA imagery — **hotlinked placeholders**, to be swapped for local shots |

## Sources IGNORED (and why)
- Three.js GPGPU / WebGL particle fields — too heavy for mobile. Used a light canvas
  starfield with a static `cosmos.png` reduced-motion fallback instead.
- Full GSAP MorphSVG road→stars morph — kept the handover as a recoloured preloader
  + a scroll-drawn road→constellation motif + the pinned constellation route, which
  reads clearly without the paid plugin.
- Most of the snippet pack's redundant loaders/buttons — only the effects that
  reinforce the concept were kept.

## Imagery note
Per the user's call, place photos are **hotlinked from Wikimedia Commons** for now
(real museum / observatory / observation tower) and should be swapped for downloaded
local assets before any public deploy. The cosmos backdrop (`assets/img/cosmos.png`)
is generated locally. The brief's "local assets only" rule applies at publish time.

## Structure
- `index.html` — Observatory default home (switcher + handover + constellation route).
- `observatory/sign-up · plan-draft · plan` — the night-mission planning flow.
- `poland/index.html` + `poland/*` — the preserved Poland road-trip experience.
- `emergency.html` — shared one-pager with an Observatory/Poland toggle.
- `assets/observatory.css`, `assets/sky.js`, `assets/plan-draft-observatory.js`,
  `assets/checklist-observatory.js` — the cosmos layer (shared assets reused).
