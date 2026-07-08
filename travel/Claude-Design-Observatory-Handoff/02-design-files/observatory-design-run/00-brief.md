# Observatory Design Run Brief

Date: 2026-06-02

## Job

Refresh the travel site default destination from Poland to a Lithuania Observatory one-day fall trip, while keeping Poland available as a selectable previous destination design.

This run prepares design research and a Claude Design handoff. It does not build the final design.

## Destination

- Destination slug / theme key: `observatory`
- Destination name: Observatory
- Full trip title: Lithuania Observatory one-day fall trip from Kaunas
- Mandatory anchor: late/night telescope observation at the Lithuanian Museum of Ethnocosmology
- Content source: `travel/Observatory-Trip-Research.md`
- Current default before change: Poland
- Target default after change: Observatory
- Previous destination to preserve: Poland
- Future destination placeholder: Paris
- Destination status:
  - Observatory: default
  - Poland: selectable previous theme
  - Paris: locked/future

## Design Scope

- Mostly new visual system.
- Keep the shared planning skeleton:
  - Home
  - Destination switcher
  - Sign up
  - Plan draft
  - Plan
  - Emergency/checklist support
- The site should feel like it moves from the current Poland road-trip design into a cosmos/observatory design.
- Claude Design owns the final visual build.

## Mood

Observatory night, clear-sky call, fall darkness, telescope dome, stars, constellations, planets, moon phase, orbit paths, quiet one-day adventure.

The design should lean hard into astronomy: cosmos, starfields, planets, sky maps, telescope/reticle details, orbital lines, and a late-night observation mood. Avoid a generic travel-card redesign.

## Preserve

- Existing Poland route-line idea as a selectable previous destination.
- Existing static no-build stack where possible.
- Existing sign-up -> plan-draft -> plan skeleton.
- Existing reduced-motion discipline.
- Existing local asset principle.
- Existing crew planning tone.

## Change

- Observatory becomes the default first impression.
- Home must include a visible destination/theme switcher.
- Observatory should not feel like a locked card anymore.
- Poland should not disappear; it should be reachable through the switcher.
- Replace warm road-trip dominance with night/cosmos dominance.
- The first viewport should make the transition from Poland route to cosmos clear.

## Handover Transition Requirement

Use the current Poland signature motif as the start:

`drawn road route line -> darkens into night -> becomes constellation/orbit line -> lands on the Observatory`

This can be a loader, first-screen transition, destination switcher animation, or scroll intro. It should explain the design change through motion, not through a paragraph.

## Current Site Paths

- Current canonical site: `travel/Trip-Site-Handoff/06-current-site/`
- Deploy/export copy: `travel/Trip-Site-Handoff/_deploy-wtc/`
- Slim alternate current site: `travel/where-to-crew/`
- Prior design handoff: `travel/Trip-Site-Handoff/`

## Target Implementation Path

Unknown until Claude Design starts. Recommended target if editing the current canonical handoff:

`travel/Trip-Site-Handoff/06-current-site/`

If Claude Design creates a new build, it should still preserve or copy Poland into a selectable theme instead of deleting it.

## Build / Preview

No build system is required for the canonical current site.

Recommended preview command from `travel/Trip-Site-Handoff/06-current-site/`:

```powershell
python -m http.server 8000
```

## Required Viewports

- Desktop: 1440 x 900
- Mobile: 390 x 844
- Also check a narrow mobile width around 360 px because buttons and trip cards can crowd.

## Constraints

- Do not delete the old Poland design.
- Do not turn this into a marketing landing page only; it must remain a usable trip-planning site.
- Use local assets, not hotlinked images.
- Heavy animation must have reduced-motion fallbacks.
- Keep static/free deployment feasible.
- Do not hardcode Observatory facts that belong in the trip content state unless the content source asks for it.
