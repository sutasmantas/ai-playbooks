# Premium Copy/Adapt Space Effects Research

Date checked: 2026-06-03

This file corrects the earlier weak pass. There are many shared/copy-adapt space effects. The important distinction is:

- **Copyable code exists** for black holes, galaxies, starfields, particles, shaders, and orbits.
- **Award-level results still require curation**: asset quality, composition, lighting, color grade, text-safe layout, and performance controls.

## Best Copy/Adapt Candidates

| Effect | Source | URL | Why it matters | Fit for Observatory hero |
|---|---|---|---|---|
| Real-time black hole with shaders | CodePen by VoXelo | https://codepen.io/VoXelo/pen/wBKvJxd | Three.js black hole scene with event horizon, stars, bloom/postprocessing and shader logic. Stronger than generic orbit circles. | Strong alternative hero if the concept becomes "clear-sky gravity/lens" rather than observatory dome. Needs restraint and left-side readability mask. |
| Three.js black hole raytracer | GitHub `vlwkaos/threejs-blackhole` | https://github.com/vlwkaos/threejs-blackhole | More serious black-hole raytracing with accretion disk, lensing, bloom controls, quality controls, and drag interaction. | Strong technical reference. Too heavy to paste directly into travel hero without simplification. |
| WebGL Schwarzschild black hole shader | GitHub topic / `oseiskar/black-hole`, `ebruneton/black_hole_shader` | https://github.com/topics/blackhole | Serious black-hole shader lineage, including WebGL simulation/raytracing projects. | Research source for lensing/accretion disk technique. Use only if black hole becomes the signature visual. |
| Galaxy generator | CodePen / Three.js Journey-inspired | https://codepen.io/ovm-design/pen/EaxorJZ | Bruno Simon-style galaxy generator: particle arms, colors, GUI controls, ambient stars, shooting stars. | Stronger "cosmos hero" base than generic star dots. Needs lower count/mobile cap and better composition. |
| Three.js galaxy module | GitHub `ggwzrd/threejs-galaxy` | https://github.com/ggwzrd/threejs-galaxy | Reusable Three.js galaxy generator module, MIT. | Good if Claude Design wants a galaxy hero or below-fold cosmos section. |
| Codrops interactive image particles | Codrops | https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/ | High-signal creative-dev tutorial using instanced particles and shader interaction. | Good for turning a telescope/dome silhouette or logo into particles. Not ideal as the whole hero unless it forms a recognizable object. |
| Codrops dreamy GPGPU particles | Codrops | https://tympanus.net/codrops/2024/12/19/crafting-a-dreamy-particle-effect-with-three-js-and-gpgpu/ | More modern, high-fidelity particle motion using Three.js, shaders, and GPGPU. | Strong premium texture/nebula layer. Heavy; use as optional desktop-only flourish. |
| Three.js official interactive particles | Three.js examples | https://threejs.org/examples/webgl_interactive_points.html | Official baseline for interactive points. | Good reference for stable Three.js mechanics, not visually premium alone. |
| Astronomy shaders for Three.js | GitHub `THRASTRO/thrastro-shaders` | https://github.com/THRASTRO/thrastro-shaders | Astronomy-oriented shaders: planets, atmospheres, rings, star clouds, trajectories. | Good research source if building realistic planets/atmosphere or orbital visuals. |
| Starfield warp | Three.js Demos | https://threejsdemos.com/demos/procedural/starfield | Copyable/inspectable moving starfield. | Useful fallback or transition layer, but not enough alone. |

## Strongest Directions From These Sources

### Option 1 - Black Hole Aperture

Use a black-hole/accretion-disk shader as the **view through the telescope aperture**, not as a random full-screen background.

Why this could work:

- Black holes are instantly cosmic and higher-fidelity than CSS planets.
- Lensing/accretion disk reads as real phenomenon, not generic shapes.
- It can be placed on the right side and masked into an eyepiece/dome slit, preserving left headline readability.

Risk:

- If full-screen, it can hijack the Observatory/travel concept and become "space wallpaper".
- Shader performance must be capped hard on mobile.

Best sources:

- https://codepen.io/VoXelo/pen/wBKvJxd
- https://github.com/vlwkaos/threejs-blackhole
- https://github.com/topics/blackhole

### Option 2 - Galaxy Lens

Use a galaxy generator as a slow, deep sky object framed by the telescope/dome.

Why this could work:

- Clear cosmos read.
- Better than plain stars.
- Easier to art-direct than black-hole physics.

Risk:

- Many galaxy generators still look like colored points unless paired with bloom, depth, and high-quality background plate.

Best sources:

- https://codepen.io/ovm-design/pen/EaxorJZ
- https://github.com/ggwzrd/threejs-galaxy

### Option 3 - Particle Telescope Reveal

Use Codrops-style particles to form/disperse a recognizable observatory dome/telescope silhouette.

Why this could work:

- Interactive and premium.
- More related to Observatory than a generic black hole.
- The object recognition solves the "what is this?" problem.

Risk:

- Needs a good silhouette/image source. If the silhouette is weak, it becomes "dots again."
- GPGPU version is heavier.

Best sources:

- https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/
- https://tympanus.net/codrops/2024/12/19/crafting-a-dreamy-particle-effect-with-three-js-and-gpgpu/

## Recommended Revision To Hero Direction

The strongest practical hero is still not "paste a full black hole site into the hero."

Better:

**Observatory Aperture + Premium Space Effect**

- 3D/static observatory/telescope foreground.
- The telescope aperture/dome slit contains one premium effect:
  - black hole lens, or
  - galaxy generator, or
  - particle telescope reveal.
- Left headline remains in a protected dark text zone.
- Mobile/reduced-motion uses a still frame or video poster.

This uses copy/adapt code, but composes it into the Observatory concept rather than letting the code demo define the site.

## Implementation Rule

Before implementing, choose one hero premium effect:

- Black hole aperture if the goal is maximum wow.
- Galaxy lens if the goal is safer cosmos beauty.
- Particle telescope reveal if the goal is strongest Observatory-specific identity.

Do not combine all three in the hero.
