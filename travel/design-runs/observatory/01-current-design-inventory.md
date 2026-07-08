# Current Design Inventory

Date checked: 2026-06-02

## Current Site

Primary current site:

`travel/Trip-Site-Handoff/06-current-site/`

Other lightweight copy:

`travel/where-to-crew/`

Deploy/export copy:

`travel/Trip-Site-Handoff/_deploy-wtc/`

## Current Routes / Pages

Primary current site routes:

- `index.html`
- `emergency.html`
- `poland/sign-up.html`
- `poland/plan-draft.html`
- `poland/plan.html`

Home currently treats Poland as active and Observatory/Paris as locked/coming soon. Observatory must become default and active.

## Stack

- Static HTML/CSS/JS.
- No required build step.
- GSAP 3.13 via CDN.
- ScrollTrigger, SplitText, DrawSVGPlugin, MotionPathPlugin via CDN in the current site.
- Lenis smooth scroll via CDN.
- Local JS/CSS assets:
  - `assets/motion.js`
  - `assets/motion.css`
  - `assets/site.css`
  - `assets/site.js`
  - `assets/store.js`
  - `assets/config.js`
  - `assets/crew.js`
  - `assets/image-slot.js`
  - `assets/plan-draft.js`
  - `assets/checklist.js`

## Existing Theme / State Behavior

There is no complete multi-theme registry yet.

Observed config:

```js
window.WTC_CFG = {
  apiUrl: 'https://wtc-store.mantekarys.workers.dev',
  trip: 'poland'
};
```

Implication:

- Current state is namespaced to Poland.
- Observatory should get its own trip namespace, likely `observatory`.
- Theme switching needs to be added deliberately. Do not rely only on color variables.

## Existing Design Motif

The prior governing concept was "The Drawn Route Line."

Current visual primitives include:

- fixed route progress bar
- preloader route draw
- page transition panel
- journey spine
- road/route map motif
- postcards/destination cards
- warm road-trip palette
- ambient blobs/grain
- GSAP reveal system
- custom cursor/magnetic controls
- dawn-to-night drive environment

This is useful for the Observatory handover: the road line can morph into a constellation/orbit line.

## Current Assets

Local image folder:

`travel/Trip-Site-Handoff/06-current-site/assets/img/`

Relevant existing assets:

- `milkyway.jpg`
- `kaunas.jpg`
- `paris.jpg`
- Poland/Tatras/Energylandia route images

Observatory-specific assets are still missing:

- actual Lithuanian Museum of Ethnocosmology exterior/dome
- telescope/tower/observation deck
- Mindunai tower / Molėtai / Labanoras
- fall-night local sky imagery

Claude Design should use local images. If it adds new images, download them into the asset folder and avoid hotlinks.

## Existing Reference Packs

Prior Poland design research:

- `travel/Trip-Site-Handoff/01-specs/Trip-Site-Concept-and-Craft.md`
- `travel/Trip-Site-Handoff/01-specs/Trip-Site-Design-Brief.md`
- `travel/Trip-Site-Handoff/01-specs/Trip-Site-Resources.md`
- `travel/Trip-Site-Handoff/04-reference-sites/REFERENCE-NOTES.md`
- `travel/Trip-Site-Handoff/03-working-demos/`

Local reference demo folders:

- `route-line-reference/`
- `page-transition-reference/`
- `interactions-reference/`
- `ambient-reference/`

## Archived Attempts

Archived old attempts:

`travel/_archive/old-site-attempts/`

Do not pull archived attempts back into runtime unless a specific asset or pattern is needed. If an active Poland theme depends on an archived asset, copy it back into the runtime theme bundle instead of referencing archive paths.

## Risks For Claude Design

- It may flatten the idea into a dark generic space UI. The handoff must keep the specific concept: Kaunas road route transforms into Observatory sky route.
- It may delete or overwrite Poland. Theme preservation must be explicit.
- It may overuse heavy WebGL. The site should stay phone-friendly.
- Current Home has route-specific Poland content. Observatory default means Home content and destination card order/state need to change.
- Current config is `trip: 'poland'`; Observatory state must not contaminate Poland plan state.
