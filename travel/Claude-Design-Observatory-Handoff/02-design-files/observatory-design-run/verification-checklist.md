# Observatory Design Verification Checklist

This checklist is for the eventual built design. This design run only prepares the handoff.

## Required Run Files

- [x] `travel/design-runs/observatory/00-brief.md`
- [x] `travel/design-runs/observatory/01-current-design-inventory.md`
- [x] `travel/design-runs/observatory/02-theme-preservation.md`
- [x] `travel/design-runs/observatory/03-reference-research.md`
- [x] `travel/design-runs/observatory/04-candidate-inventory.md`
- [x] `travel/design-runs/observatory/05-candidate-provenance.md`
- [x] `travel/design-runs/observatory/06-code-snippets/`
- [x] `travel/design-runs/observatory/07-animation-alternatives/`
- [x] `travel/design-runs/observatory/Claude-Design-Handoff.md`
- [x] `travel/design-runs/observatory/verification-checklist.md`

## Handoff Completeness

- [x] Old Poland theme survival path documented.
- [x] Observatory default documented.
- [x] Paris locked/future documented.
- [x] Handover transition documented.
- [x] Every Phase 5 candidate has a Phase 6 provenance row.
- [x] Local code snippets/demos exist for every Phase 5 candidate.
- [x] Every candidate is mapped to at least one local snippet/demo.
- [x] Second-pass animation alternatives exist for major mechanics.
- [x] Source-use map requirement included for Claude Design.
- [x] Non-goals included.

## Built Design Checks

- [ ] Default destination opens as Observatory.
- [ ] Poland remains reachable through visible switcher.
- [ ] Paris remains locked/future.
- [ ] Previous Poland route URLs still work.
- [ ] Selected theme persistence works if implemented.
- [ ] Theme switcher works on desktop and mobile.
- [ ] Observatory content does not contaminate Poland state.
- [ ] `window.WTC_CFG.trip` or equivalent state namespace is Observatory on Observatory pages.
- [ ] Sign-up flow works for Observatory.
- [ ] Plan draft reads Observatory decision model.
- [ ] Plan page reflects Observatory selected draft.
- [ ] Emergency/checklist support includes Observatory-specific phone/booking/weather items if implemented.
- [ ] Heavy animation has reduced-motion fallback.
- [ ] No hotlinked images remain unless explicitly approved.
- [ ] New assets are bundled locally.
- [ ] Console has no major runtime errors.
- [ ] No text overlaps or clipped buttons on mobile.
- [ ] Desktop screenshot captured.
- [ ] Mobile screenshot captured.
- [ ] Claude Design source-use map is present in final output/summary.

## Specific Observatory UX Checks

- [ ] First viewport clearly signals astronomy/cosmos.
- [ ] Poland-to-Observatory transition is visible or explained through motion.
- [ ] The mandatory observatory/night telescope anchor is obvious.
- [ ] Weather confirmation by 13:00-14:00 appears as a status/check item.
- [ ] Plan draft shows price/time/booking/weather impact for options.
- [ ] Time meter protects arrival buffer before night observation.
- [ ] Plan-B for clouds/rain exists.
- [ ] Return-driver safety is visible.

## Verification Commands

If editing the current static site:

```powershell
cd travel/Trip-Site-Handoff/06-current-site
python -m http.server 8000
```

Then test in browser:

- `http://localhost:8000/`
- `http://localhost:8000/poland/sign-up.html`
- `http://localhost:8000/observatory/sign-up.html` if created

If a build system is introduced, run its build/lint commands before handoff.
