# Observatory Reference Research

Date checked: 2026-06-02

## Governing Direction

Use one concept:

**Orbit To The Telescope**

The old road line becomes a night-sky route. The line functions as route, constellation, orbit, progress, transition, and final telescope targeting system.

## Primary Inspiration

| Source | URL | Why it fits | Borrow | Do not copy | Fallback if link disappears |
|---|---|---|---|---|---|
| NASA Eyes | https://science.nasa.gov/eyes/ | Public-friendly interactive space exploration with real 3D/data feeling. | Planet/mission card mood, dark immersive space panels, orbit/trajectory thinking. | Do not build a full NASA simulator; too heavy for the travel site. | Use screenshots/notes from this file and keep design to static + GSAP/limited canvas. |
| VirtualSky | https://virtualsky.lco.global/ | Browser planetarium from Las Cumbres Observatory; directly relevant to "what is visible in the sky." | Sky-map/constellation panel idea and local sky lookup mood. | Do not make the whole site a technical planetarium. | Use a static star chart visual if live embed/API is too much. |
| Stellarium | https://stellarium.org/?hl=en | Recognizable astronomy UI: sky dome, constellations, Milky Way, horizon logic. | Sky-map texture, horizon/dome feel, constellation line restraint. | Do not copy desktop-app UI density. | Use simplified constellation overlays and local Milky Way image. |
| L'Observatoire Interactif | https://www.observatoire-interactif.com/en | Observatory/planetarium education platform with browser 3D solar-system and sky position emphasis. | Educational-but-beautiful astronomy panels and planetary movement language. | Avoid classroom/software UI heaviness. | Use as content structure reference only. |

## Supporting Visual References

| Source | URL | Why it fits | Borrow | Do not copy | Fallback |
|---|---|---|---|---|---|
| Awwwards: The Space that makes us Human | https://www.awwwards.com/sites/the-space-that-makes-us-human | Award-style space storytelling. | Immersive space mood, large cinematic sections, human scale against cosmos. | Avoid huge performance budget. | Use as mood reference only. |
| Awwwards: Artificial Satellite | https://www.awwwards.com/sites/artificial-satellite | Night-sky/satellite concept, orange accent against dark space. | Satellite/orbit UI energy, small luminous accent color. | Avoid using the same branding or camera product story. | Use orbit markers and restrained accent. |
| Awwwards inspiration: Navigation between constellations | https://www.awwwards.com/inspiration/navigation-between-constellations-space-trash-signs | Direct constellation navigation idea. | Destination switcher as constellations. | Do not copy exact 3D scene/video. | Use simple SVG star-node navigation. |
| NASA Roman Interactive | https://science.nasa.gov/mission/roman-space-telescope/interactive/ | Telescope diagram/data interaction. | Telescope/reticle panel, instrument-label style. | Do not make it look like a NASA mission page. | Static telescope info cards. |
| NASA Games and Interactives | https://www.nasa.gov/interactives/ | Shows public science interactive patterns. | Compact educational panels and interaction prompts. | Avoid kid-focused tone. | Use as source for interaction style only. |

## Code / Technique References

| Source | URL | Why it fits | Borrow | Do not copy | Fallback |
|---|---|---|---|---|---|
| Codrops: Scroll-Driven SVG Map Animations with GSAP | https://tympanus.net/codrops/2026/05/21/creating-scroll-driven-svg-map-animations-with-gsap/ | Direct continuation of Poland route-line stack. | DrawSVG route + MotionPath marker + scroll-pinned camera. | Do not use map API or complex geography. | Use existing local route-line demo. |
| GSAP MorphSVG docs | https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/ | Best fit for road-line to constellation/orbit morph. | SVG path morph transition. | Avoid overlong intro. | Use DrawSVG fade between two paths. |
| GSAP SplitText docs | https://gsap.com/docs/v3/Plugins/SplitText/ | Current site already uses SplitText. | Masked text reveals and star-label reveals. | Avoid splitting dense body copy on mobile. | Use fade reveal for reduced motion/mobile. |
| Lenis smooth scroll | https://www.lenis.dev/ | Current site already uses Lenis. | One scroll conductor for pinned/timeline sections. | Avoid scroll hijack feeling on mobile. | Use native scroll and ScrollTrigger only. |
| Codrops: Morphing Page Transition | https://tympanus.net/codrops/2017/08/08/morphing-page-transition/ | Useful for destination/theme transition. | SVG shape/path transition idea. | It uses older anime.js; adapt concept to current GSAP stack. | Use existing current site's transition panel. |
| Codrops: Interactive Particles with Three.js | https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/ | Particle/starfield interaction model. | Limited hero/background particle field. | Avoid making every page WebGL. | CSS starfield or static image. |
| Codrops: Dreamy Particle Effect with Three.js and GPGPU | https://tympanus.net/codrops/2024/12/19/crafting-a-dreamy-particle-effect-with-three-js-and-gpgpu/ | Advanced particle inspiration. | Nebula-like mood if Claude Design wants one premium flourish. | Too heavy for default mobile experience. | Use simple CSS/canvas starfield. |
| Three.js Starfield Warp demo | https://threejsdemos.com/demos/procedural/starfield | Simple recognizable starfield/warp effect. | Optional hero background movement. | Avoid nausea/constant warp on planning pages. | Slow static parallax stars. |
| CodePen Pure CSS animated starfield | https://codepen.io/ArneSava/pen/BaWxOaR | Copyable CSS starfield direction. | Lightweight no-WebGL star layers. | Avoid Sass-only dependency; compile/adapt to CSS. | Radial-gradient stars. |
| CodePen SVG Constellation Animation Template | https://codepen.io/sdellis/pen/pEqLVd | Direct constellation-drawing idea. | SVG star nodes/lines drawing in. | Avoid exact copied constellation. | Hand-draw Kaunas -> Observatory constellation. |
| CodePen Orbiting planet CSS | https://codepen.io/esprimo/pen/jyRLKr | Tiny CSS orbital motion. | Switcher/nav orbit indicators and buttons. | Avoid childish solar-system toy look. | Static orbit rings. |
| CSS-Tricks: Grainy Gradients | https://css-tricks.com/grainy-gradients/ | Night-sky texture without image dependency. | SVG noise overlay on sky gradients. | Avoid making the background muddy. | Current site's grain SVG. |
| Open-Meteo Forecast API docs | https://open-meteo.com/en/docs | Practical cloud-cover source if a sky-status widget is built. | Cloud cover/hourly forecast badge. | Avoid pretending forecast confirms telescope slot. Museum same-day call remains authoritative. | Static "weather call by 14:00" checklist. |
| Meteoblue Astronomy Seeing | https://content.meteoblue.com/en/private-customers/website-help/outdoor-and-sports/astronomy-seeing | Astronomy-specific forecast categories: cloud layers, seeing, jet stream. | Labels for clear-sky status UI. | Do not depend on inaccessible paid data. | Use labels only; link out to Meteoblue. |
| Moon API | https://moon-api.com/ | Lunar phase/illumination concept. | Moon phase/date widget. | Avoid requiring API keys for static site unless approved. | Precomputed date/moon notes or simple JS calculation. |
| PhaseOfTheMoonToday API docs | https://www.phaseofthemoontoday.com/api-documentation | Free-looking current/date moon phase endpoints. | Alternate moon phase data source. | Re-check reliability before production. | Static moon phase copy by selected date. |
| Animista | https://animista.net/how-to | Small CSS animation generator. | Form focus, small badge reveal animations. | Avoid random effects unrelated to orbit/telescope concept. | Use existing transitions. |
| Hover.css | https://ianlunn.github.io/Hover/ | Small CSS hover patterns. | Button underline/ripple inspiration. | Avoid importing full library for two effects. | Hand-write a tiny orbit/ripple hover. |

## Best CSS / Animation Source Pool Audit

This is the source-pool pass that should happen before treating individual snippets as final. The point is to avoid grabbing random effects and instead search the biggest/highest-signal places first.

| Rank | Source pool | URL | Use for this project | Notes / selection rule |
|---|---|---|---|---|
| 1 | Codrops / Tympanus Creative Hub | https://tympanus.net/codrops/hub/all/ | Best primary source for creative web demos, GSAP, SVG, scroll, WebGL, page transitions. | Use first for hero/transition/route mechanics. Codrops has current GSAP/Lenis/SVG demos that match the existing Poland stack. |
| 2 | GSAP docs and GSAP demos | https://gsap.com/docs/v3/ and https://gsapdemos.com/ | Best source for reliable implementation patterns: ScrollTrigger, DrawSVG, MorphSVG, MotionPath, SplitText, Flip. | Use for anything central or scroll/SVG based. Prefer GSAP docs over random snippets for production mechanics. |
| 3 | CodePen | https://codepen.io/ | Largest open creative-code pool for starfields, orbit buttons, constellation SVG, loaders, hover effects. | Use with targeted searches. Adapt locally instead of linking only. Watch for Sass/Pug/React dependencies. |
| 4 | UIverse | https://uiverse.io/ | Large copy-paste UI element pool for buttons, cards, inputs, loaders, small interactions. | Good for microinteractions and forms. Do not let generic component style override the concept. |
| 5 | Animista | https://animista.net/play | Copyable/tweakable CSS keyframes for small motion: focus, reveal, attention, entrance/exit. | Good for small form/button/status animations. Avoid random motion not tied to astronomy. |
| 6 | CSSFX | https://cssfx.vercel.app/ | Simple click-to-copy CSS effects for buttons, inputs, loaders, text. | Good for restrained microinteractions. Prefer when GSAP would be overkill. |
| 7 | FreeFrontend | https://freefrontend.com/css-animations/ | Aggregated CSS/JS examples, often backed by CodePen. | Good for discovering candidate effects like loaders, glowing borders, orbit galleries. Re-check original demo before adapting. |
| 8 | Awwwards collections | https://www.awwwards.com/websites/gsap/ | Inspiration from high-end animated sites and GSAP usage. | Use for feel/caliber, not direct code. |
| 9 | Godly / Land-book / SiteInspire | https://godly.website / https://land-book.com / https://www.siteinspire.com | Visual references and interaction inspiration. | Use for direction and screenshots; usually not code. |
| 10 | Three.js examples / demos | https://threejs.org/examples/ and https://threejsdemos.com/ | Space/particle/starfield experiments. | Use sparingly. Heavy 3D should be optional with static fallback. |

Observatory result:

- The strongest source family for the main mechanics is **Codrops + GSAP**, because the current Poland site already uses GSAP/Lenis/DrawSVG/MotionPath.
- **CodePen / UIverse / Animista / CSSFX / FreeFrontend** should mainly feed smaller pieces: orbit buttons, loaders, form focus, status badges, starfield layers.
- **Awwwards/Godly** should guide quality and mood, not be treated as copyable code.
- The local `06-code-snippets/` pack now adapts the useful techniques into inspectable local demos.

## Rejected / Cautioned References

| Source / Pattern | Reason |
|---|---|
| Full NASA Eyes-style 3D simulator | Too large for a one-day travel planning site; useful only as mood reference. |
| Heavy GPGPU particle background on every page | Likely bad on phones and unnecessary for plan-draft usability. Use at most one hero flourish with fallback. |
| Generic dark purple space landing page | Too generic; this should be a trip-planning app with a telescope anchor. |
| Pure decorative planets everywhere | The astronomy motif must also drive navigation, transition, route, and planning states. |
