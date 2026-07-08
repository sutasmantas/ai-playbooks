# Observatory Code Snippet Pack

Prepared: 2026-06-02

These are small static demos for Claude Design. They are not the final site.

Use them as implementation starting points for the Observatory visual system:

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

## Candidate To Local Code Map

| Candidate | Local snippet/demo |
|---|---|
| CAND-001 Destination/theme switcher registry | `orbit-theme-switcher.html` |
| CAND-002 Road-line to constellation handover | `road-to-constellation-transition.html` |
| CAND-003 Full-screen cosmos/starfield hero | `cosmos-starfield-hero.html` |
| CAND-004 Kaunas -> Observatory constellation route line | `kaunas-observatory-constellation-route.html` |
| CAND-005 Orbiting destination/nav markers | `orbit-theme-switcher.html`, `orbit-button-hover.html` |
| CAND-006 Telescope reticle cursor / target hover | `telescope-reticle-cursor.html` |
| CAND-007 Moon phase/date widget | `moon-phase-date-widget.html` |
| CAND-008 Clear-sky/weather call status badge | `sky-status-badges.html` |
| CAND-009 Night-sky gradient and grain texture | `night-sky-grain-texture.html` |
| CAND-010 Star-trail scroll effect | `star-trail-scroll-effect.html` |
| CAND-011 Planetary loading animation | `planetary-loader.html` |
| CAND-012 Afternoon-to-night timeline scrubber | `afternoon-to-night-time-orbit.html` |
| CAND-013 Card hover with parallax stars | `parallax-star-cards.html` |
| CAND-014 Plan-draft option cards with sky-status tags | `sky-status-badges.html` |
| CAND-015 Departure-to-return time orbit | `afternoon-to-night-time-orbit.html` |
| CAND-016 Form field focus constellation lines | `constellation-form-focus.html` |
| CAND-017 Button hover orbit/ripple | `orbit-button-hover.html` |
| CAND-018 Mini browser planetarium / sky panel | `mini-sky-panel.html` |
| CAND-019 NASA-style data cards for telescope facts | `telescope-data-cards.html` |
| CAND-020 Reduced-motion static sky fallback | `reduced-motion-fallback.html` |

Design rule:

Use only what reinforces **Orbit To The Telescope**. Do not combine every effect just because it exists.

Technical rule:

These snippets are vanilla HTML/CSS/JS with CDN GSAP only where useful. If the final site uses the existing `06-current-site` stack, fold the logic into its existing `assets/motion.js`, page scripts, and CSS rather than shipping duplicate systems.
