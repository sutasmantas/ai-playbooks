# Claude Design Observatory Handoff

Prepared: 2026-06-02

This folder is the complete handoff bundle for the Observatory redesign.

Claude Design should use this folder instead of any stale version it already has.

## Read First

Start here:

`02-design-files/observatory-design-run/Claude-Design-Handoff.md`

That file contains the actual design brief, source pools, snippet packs, alternatives, non-goals, and verification expectations.

## What This Bundle Contains

### 1. Travel Info

Folder:

`01-travel-info/`

Contains:

- `Observatory-Trip-Research.md` - the full Lithuania Observatory trip research/content handoff.
- `Travel-Plan-Playbook.md` - the repeatable travel research process.

Use `Observatory-Trip-Research.md` as the content source of truth for Observatory.

### 2. Design Files

Folder:

`02-design-files/`

Contains:

- `observatory-design-run/` - complete Observatory design run.
- `Travel-Design-Process.md` - repeatable design process.

Important files inside `observatory-design-run/`:

- `Claude-Design-Handoff.md`
- `04-candidate-inventory.md`
- `05-candidate-provenance.md`
- `06-code-snippets/`
- `07-animation-alternatives/`
- `08-premium-space-effects-research.md`
- `verification-checklist.md`

### 3. Actual Current Site

Folder:

`03-actual-current-site/06-current-site/`

This is the fresh current site copy. Use this instead of any stale local/site copy.

Current site stack:

- static HTML/CSS/JS
- GSAP/Lenis via CDN
- existing Poland pages
- existing Home and emergency page
- local assets in `assets/`

Recommended preview command from inside `03-actual-current-site/06-current-site/`:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

### 4. Prior Poland Reference

Folder:

`04-prior-poland-reference/`

Contains the previous Poland specs, reference sites, and working demos. Use this to understand how the Poland design was researched and how the previous route-line design/code demos were handled.

## Required Design Direction

Make Observatory the default destination.

Preserve Poland as a selectable previous destination/theme.

Keep Paris visible as locked/future.

Governing concept:

**Orbit To The Telescope**

The old Poland road line should visually transition into the Observatory cosmos/constellation/orbit line.

## Hard Rules

- Do not delete Poland.
- Do not use a stale site copy.
- Do not make a generic space landing page.
- Do not replace the trip-planning skeleton with only cinematic visuals.
- Use local assets, not hotlinked images.
- Keep reduced-motion fallbacks.
- Include a source-use map in the final output:
  - sources inspected
  - sources used
  - sources ignored
  - which UI section each source influenced

## Best Immediate Workflow

1. Read `02-design-files/observatory-design-run/Claude-Design-Handoff.md`.
2. Read `02-design-files/observatory-design-run/08-premium-space-effects-research.md` before deciding the final hero animation.
3. Inspect `03-actual-current-site/06-current-site/`.
4. Open local snippets in `02-design-files/observatory-design-run/06-code-snippets/`.
5. Open optional alternatives in `02-design-files/observatory-design-run/07-animation-alternatives/`.
6. Build the Observatory default while preserving Poland.
