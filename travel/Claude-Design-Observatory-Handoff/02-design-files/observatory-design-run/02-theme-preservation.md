# Theme Preservation

Date: 2026-06-02

## Required Behavior

The site must have a visible destination/theme switcher on the main page.

Default:

- Observatory opens first.

Selectable:

- Poland remains reachable.

Future:

- Paris remains visible as locked/future unless it receives its own design run.

## Recommended Theme Model

Theme keys:

```text
observatory | poland | paris
```

Switcher labels:

```text
Observatory
Poland
Paris
```

Behavior:

- `observatory`: opens the new cosmos/observatory default experience.
- `poland`: opens the preserved Poland route-line / road-trip experience.
- `paris`: appears locked/future.

## Theme Manifest

| Theme key | Label | Status | Default | Content source | Visual source | Route behavior | Switcher behavior | Fallback |
|---|---|---|---|---|---|---|---|---|
| observatory | Observatory | default | yes | `travel/Observatory-Trip-Research.md` | new Claude Design cosmos theme | Home default; Observatory pages active | primary selected button/card | fall back to static night hero + normal route pages if animation fails |
| poland | Poland | selectable | no | `travel/Trip-Site-Handoff/01-specs/Trip-Site-Content.md` | current Poland drawn-route design | keep current Poland pages and/or preserved theme route | selectable previous destination | fall back to current static Poland pages |
| paris | Paris | locked/future | no | placeholder only | existing placeholder image/card | locked card/button only | disabled/future state | no route until researched |

## Old-Theme Survival Path

Poland must survive in one of these forms:

1. Preferred: a true destination theme in the switcher using the current Poland design assets.
2. Acceptable: a preserved route such as `/poland/` or a Poland card that opens the current Poland visual flow.
3. Not acceptable: only a tiny text link or an archived folder that the live site cannot reach.

Poland assets that must stay bundled:

- current Poland pages
- shared motion/CSS/JS used by those pages
- Poland destination images
- route-line SVG / map motion code
- plan-draft and plan state scripts

## Handover Transition

The transition from Poland to Observatory should be visible in the first Observatory/default experience.

Required story:

```text
The familiar Poland road route line keeps moving after the road trip.
The background darkens into the fall night.
The road line stops behaving like a road and becomes a constellation/orbit path.
The line lands at the Observatory, where the telescope/night program becomes the mandatory anchor.
```

Possible executions:

- Preloader: route line draws, then its points become stars.
- Home hero: a line travels from "Poland" switcher button to "Observatory" and becomes an orbit.
- Destination switcher: Poland card collapses into a waypoint; Observatory card expands into a sky map.
- Scroll intro: first scroll changes warm dawn/road palette into dark sky, with the route line becoming a constellation.

Recommended execution:

Use a GSAP/SVG path morph or DrawSVG/MotionPath sequence. Keep it short and skippable with reduced motion.

## Non-Negotiables

- Do not archive or delete Poland runtime files while Poland is supposed to be selectable.
- Do not make themes just palette swaps. Observatory should alter hero, motion motif, background, cards, route map, and microinteractions.
- Do not make Paris active without a separate content/design run.
