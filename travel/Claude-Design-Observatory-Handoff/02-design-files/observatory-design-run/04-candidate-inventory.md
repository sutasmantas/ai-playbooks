# Observatory Design-Code Candidate Inventory

Date: 2026-06-02

Governing concept: **Orbit To The Telescope**.

The inventory is intentionally wider than the final build. Claude Design should choose what supports the concept and ignore what does not.

Local code demos for the highest-priority mechanics are in:

`travel/design-runs/observatory/06-code-snippets/`

| ID | Candidate | Role | Priority | Concept fit | Research status | Source summary | Decision |
|---|---|---|---|---|---|---|---|
| CAND-001 | Destination/theme switcher registry | navigation/theme | core | supports shared skeleton | source found | Current site has Poland active/Observatory locked; needs explicit theme model. | recommend |
| CAND-002 | Road-line to constellation handover | handover transition | core | supports concept directly | code found | GSAP MorphSVG/DrawSVG + Codrops page transition/map references. | recommend |
| CAND-003 | Full-screen cosmos/starfield hero | hero/background | core | supports concept directly | code found | NASA Eyes mood + CSS/Three.js starfield refs. | recommend |
| CAND-004 | Kaunas -> Observatory constellation route line | route/map/progress | core | supports concept directly | code found | Codrops scroll SVG map + existing route-line system. | recommend |
| CAND-005 | Orbiting destination/nav markers | navigation/switcher | strong | supports concept directly | code found | CSS orbit snippets and NASA orbit UI mood. | recommend |
| CAND-006 | Telescope reticle cursor / target hover | cursor/microinteraction | strong | supports concept directly | technique found | Current site already has custom cursor; adapt to reticle/target. | optional |
| CAND-007 | Moon phase/date widget | plan-draft/date UI | strong | supports concept directly | source found | Moon API / phase docs. | recommend |
| CAND-008 | Clear-sky/weather call status badge | plan-draft/status | core | supports concept directly | source found | Open-Meteo + Meteoblue astronomy seeing concepts. | recommend |
| CAND-009 | Night-sky gradient and grain texture | global visual system | strong | supports concept directly | code found | CSS-Tricks grainy gradients + current grain. | recommend |
| CAND-010 | Star-trail scroll effect | transition/ambient | maybe | supports concept directly | source found | Starfield/particle references. | optional |
| CAND-011 | Planetary loading animation | loader | maybe | supports concept directly | code found | CSS orbit snippets. | optional |
| CAND-012 | Afternoon-to-night timeline scrubber | itinerary/timeline | core | supports shared skeleton | technique found | Existing dawn-to-night environment + Lenis/ScrollTrigger. | recommend |
| CAND-013 | Card hover with parallax stars | destination/option cards | strong | supports concept directly | technique found | Current card hover + Three.js/CSS starfield ideas. | optional |
| CAND-014 | Plan-draft option cards with sky-status tags | plan-draft UI | core | supports shared skeleton | source found | Observatory content requires weather/booking/time status. | recommend |
| CAND-015 | Departure-to-return time orbit | timeline/status | strong | supports concept directly | technique found | Map/route MotionPath can become clock/orbit. | recommend |
| CAND-016 | Form field focus constellation lines | form | maybe | supports shared skeleton | source found | Animista/small CSS animation + current form controls. | optional |
| CAND-017 | Button hover orbit/ripple | buttons/microinteraction | maybe | supports concept directly | source found | Hover.css and CSS orbit concepts. | optional |
| CAND-018 | Mini browser planetarium / sky panel | informational widget | maybe | supports concept directly | source found | VirtualSky/WebPlanetarium/Stellarium. | optional |
| CAND-019 | NASA-style data cards for telescope facts | content cards | strong | supports shared skeleton | source found | NASA Eyes/Roman interactive info panels. | recommend |
| CAND-020 | Reduced-motion static sky fallback | accessibility/performance | core | supports shared skeleton | technique found | Existing reduced-motion system + CSS/static image fallback. | recommend |

## Recommended Direction Subset

Use these first:

- CAND-001 Destination/theme switcher registry
- CAND-002 Road-line to constellation handover
- CAND-003 Full-screen cosmos/starfield hero
- CAND-004 Kaunas -> Observatory constellation route line
- CAND-008 Clear-sky/weather call status badge
- CAND-012 Afternoon-to-night timeline scrubber
- CAND-014 Plan-draft option cards with sky-status tags
- CAND-019 NASA-style data cards for telescope facts
- CAND-020 Reduced-motion static sky fallback

Optional polish after the core works:

- CAND-005 Orbiting destination/nav markers
- CAND-006 Telescope reticle cursor
- CAND-007 Moon phase/date widget
- CAND-013 Card hover with parallax stars
- CAND-015 Departure-to-return time orbit

Keep only one or two of CAND-010/CAND-011/CAND-016/CAND-017/CAND-018 unless they clearly reinforce the concept.
