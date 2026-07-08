# Observatory Candidate Provenance

Date checked: 2026-06-02

Every Phase 5 candidate has a source URL or implementation reason below. Claude Design should inspect the source links before using a candidate and include a source-use map in its final output.

Local demo/code snippets are in:

`travel/design-runs/observatory/06-code-snippets/`

The source pool was audited in `03-reference-research.md`. Priority pools are Codrops/GSAP for main mechanics, then CodePen/UIverse/Animista/CSSFX/FreeFrontend for smaller copyable UI and animation pieces, with Awwwards/Godly used for inspiration rather than direct code.

Optional second-pass alternatives are in:

`travel/design-runs/observatory/07-animation-alternatives/`

Use them if the first local snippet for a major mechanic is not strong enough.

## Candidate To Local Code Map

| Candidate | Local snippet/demo |
|---|---|
| CAND-001 | `06-code-snippets/orbit-theme-switcher.html` |
| CAND-002 | `06-code-snippets/road-to-constellation-transition.html` |
| CAND-003 | `06-code-snippets/cosmos-starfield-hero.html` |
| CAND-004 | `06-code-snippets/kaunas-observatory-constellation-route.html` |
| CAND-005 | `06-code-snippets/orbit-theme-switcher.html`, `06-code-snippets/orbit-button-hover.html` |
| CAND-006 | `06-code-snippets/telescope-reticle-cursor.html` |
| CAND-007 | `06-code-snippets/moon-phase-date-widget.html` |
| CAND-008 | `06-code-snippets/sky-status-badges.html` |
| CAND-009 | `06-code-snippets/night-sky-grain-texture.html` |
| CAND-010 | `06-code-snippets/star-trail-scroll-effect.html` |
| CAND-011 | `06-code-snippets/planetary-loader.html` |
| CAND-012 | `06-code-snippets/afternoon-to-night-time-orbit.html` |
| CAND-013 | `06-code-snippets/parallax-star-cards.html` |
| CAND-014 | `06-code-snippets/sky-status-badges.html` |
| CAND-015 | `06-code-snippets/afternoon-to-night-time-orbit.html` |
| CAND-016 | `06-code-snippets/constellation-form-focus.html` |
| CAND-017 | `06-code-snippets/orbit-button-hover.html` |
| CAND-018 | `06-code-snippets/mini-sky-panel.html` |
| CAND-019 | `06-code-snippets/telescope-data-cards.html` |
| CAND-020 | `06-code-snippets/reduced-motion-fallback.html` |

| ID | Name | Priority | Source URL | Source type | Source/site | Date checked | Tech | Research result | Implementation depth | Why it fits | What to avoid | Fallback |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CAND-001 | Destination/theme switcher registry | core | local current site inventory | local implementation | Current `06-current-site` | 2026-06-02 | HTML/CSS/JS/localStorage/config | technique found | implementation notes | Needed so Observatory can be default while Poland remains selectable. | Do not make this only a color toggle; each destination can have a full visual system. | Keep current Poland route pages and add Observatory as default card/route. |
| CAND-002 | Road-line to constellation handover | core | https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/ | docs | GSAP MorphSVG | 2026-06-02 | GSAP/SVG | code/technique found | implementation notes | Converts old Poland route motif into the new cosmos motif. | Avoid a long intro that blocks quick planning. | Use DrawSVG fade from route path to constellation path. |
| CAND-003 | Full-screen cosmos/starfield hero | core | https://science.nasa.gov/eyes/ | inspiration | NASA Eyes | 2026-06-02 | 3D/data visualization mood | inspiration only | source link + notes | Establishes immediate astronomy/cosmos default mood. | Avoid trying to recreate full NASA 3D simulation. | Use local `milkyway.jpg` plus CSS stars. |
| CAND-004 | Kaunas -> Observatory constellation route line | core | https://tympanus.net/codrops/2026/05/21/creating-scroll-driven-svg-map-animations-with-gsap/ | tutorial/demo | Codrops | 2026-06-02 | GSAP DrawSVG/MotionPath/ScrollTrigger | code found | implementation notes | Same route-line mechanism can become a constellation route. | Do not overbuild geography; this is a stylized route. | Existing local route-line demo. |
| CAND-005 | Orbiting destination/nav markers | strong | https://codepen.io/esprimo/pen/jyRLKr | snippet/demo | CodePen | 2026-06-02 | CSS keyframes | code found | source link only | Destination switcher can read as small orbiting bodies around the active trip. | Avoid childish toy solar system look. | Static orbit rings around active destination. |
| CAND-006 | Telescope reticle cursor / target hover | strong | local current site custom cursor | local implementation | Current `assets/motion.js` | 2026-06-02 | GSAP/CSS cursor | technique found | implementation notes | Cursor can become telescope targeting without adding new library. | Avoid custom cursor on touch/mobile. | Normal cursor + target hover outline. |
| CAND-007 | Moon phase/date widget | strong | https://moon-api.com/ | docs/API | Moon API | 2026-06-02 | REST/API | source found | source link + notes | Moon phase matters for fall Observatory date choice. | Avoid requiring API keys unless approved. | Use static/precomputed moon labels after date is chosen. |
| CAND-008 | Clear-sky/weather call status badge | core | https://open-meteo.com/en/docs | docs/API | Open-Meteo | 2026-06-02 | REST/API/browser fetch | source found | source link + notes | Observatory plan depends on cloud cover and same-day weather confirmation. | Do not imply API forecast overrides museum confirmation call. | Static "weather call by 14:00" status row. |
| CAND-009 | Night-sky gradient and grain texture | strong | https://css-tricks.com/grainy-gradients/ | tutorial | CSS-Tricks | 2026-06-02 | CSS/SVG filter | code/technique found | implementation notes | Gives dark sky texture without relying only on photos. | Avoid muddy low-contrast UI. | Current site's grain SVG overlay. |
| CAND-010 | Star-trail scroll effect | maybe | https://threejsdemos.com/demos/procedural/starfield | demo | Three.js Demos | 2026-06-02 | Three.js/canvas | demo found | source link only | Subtle motion can make Observatory feel alive. | Avoid warp-speed nausea or heavy motion behind forms. | Static layered CSS stars. |
| CAND-011 | Planetary loading animation | maybe | https://codepen.io/esprimo/pen/jyRLKr | snippet/demo | CodePen | 2026-06-02 | CSS keyframes | code found | source link only | A small loader can teach orbit language before the hero. | Avoid another unrelated loader if handover already works. | Use road-line-to-constellation loader only. |
| CAND-012 | Afternoon-to-night timeline scrubber | core | https://www.lenis.dev/ | docs/library | Lenis | 2026-06-02 | Lenis/ScrollTrigger/CSS variables | technique found | implementation notes | The trip is one day and depends on moving from afternoon drive to late observation. | Avoid hiding actual itinerary behind decorative scroll. | Use simple timeline with time labels and no pinned effect. |
| CAND-013 | Card hover with parallax stars | strong | https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/ | tutorial/demo | Codrops | 2026-06-02 | Three.js/particles | technique found | source link + notes | Cards can feel like small sky windows without changing skeleton. | Avoid WebGL per card; use only CSS parallax if many cards. | CSS background-position stars on hover. |
| CAND-014 | Plan-draft option cards with sky-status tags | core | local content source | local spec | `Observatory-Trip-Research.md` | 2026-06-02 | HTML/JS state model | technique found | implementation notes | Plan draft must show weather, booking, time squeeze, and observatory-anchor risk. | Avoid decorative-only option cards. | Existing `.opt` / `.choice` style with added tags. |
| CAND-015 | Departure-to-return time orbit | strong | https://gsap.com/docs/v3/Plugins/MotionPathPlugin/ | docs | GSAP MotionPath | 2026-06-02 | GSAP/SVG | technique found | implementation notes | Time can be visualized as an orbit around the night anchor. | Avoid making time less readable than a normal timeline. | Use normal horizontal timeline with status badges. |
| CAND-016 | Form field focus constellation lines | maybe | https://animista.net/how-to | tool/snippet | Animista | 2026-06-02 | CSS keyframes | source found | source link only | Small focus motion can keep sign-up page on-theme. | Avoid random animation that reduces usability. | Existing focus outline and label style. |
| CAND-017 | Button hover orbit/ripple | maybe | https://ianlunn.github.io/Hover/ | snippet library | Hover.css | 2026-06-02 | CSS transitions | source found | source link only | Buttons can use orbit/ripple microinteractions tied to the concept. | Do not import a whole library for one effect. | Handwritten `::before` orbit/ripple hover. |
| CAND-018 | Mini browser planetarium / sky panel | maybe | https://virtualsky.lco.global/ | tool/library | VirtualSky | 2026-06-02 | browser planetarium | source found | source link + notes | A small "what might be visible" panel is highly on-theme. | Avoid making it mandatory or slowing the site. | Static constellation/sky map illustration. |
| CAND-019 | NASA-style data cards for telescope facts | strong | https://science.nasa.gov/mission/roman-space-telescope/interactive/ | inspiration/interactive | NASA Roman Interactive | 2026-06-02 | interactive info panel | inspiration only | source link + notes | Observatory facts need clear, technical-feeling cards without becoming dry. | Do not mimic NASA branding. | Simple dark cards with measurement/status labels. |
| CAND-020 | Reduced-motion static sky fallback | core | local current reduced-motion system | local implementation | Current `assets/motion.js` and CSS media queries | 2026-06-02 | CSS/JS media queries | technique found | implementation notes | Heavy astronomy motion must remain usable on phones and reduced-motion. | Do not leave animations with no fallback. | Static night gradient + local Milky Way image + fade reveals. |

## Additional Useful Sources

- GSAP SplitText docs: https://gsap.com/docs/v3/Plugins/SplitText/
- Codrops Morphing Page Transition: https://tympanus.net/codrops/2017/08/08/morphing-page-transition/
- Codrops Dreamy Particle Effect with Three.js/GPGPU: https://tympanus.net/codrops/2024/12/19/crafting-a-dreamy-particle-effect-with-three-js-and-gpgpu/
- CodePen Pure CSS animated starfield: https://codepen.io/ArneSava/pen/BaWxOaR
- CodePen SVG Constellation Animation Template: https://codepen.io/sdellis/pen/pEqLVd
- Meteoblue Astronomy Seeing: https://content.meteoblue.com/en/private-customers/website-help/outdoor-and-sports/astronomy-seeing
- PhaseOfTheMoonToday API docs: https://www.phaseofthemoontoday.com/api-documentation
- WebPlanetarium: https://www.webplanetarium.org/
- Stellarium: https://stellarium.org/?hl=en
