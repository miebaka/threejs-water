# Water — Three.js interactive study

A standalone extraction of the interactive water hero developed for [Miebaka Joshua’s portfolio](https://github.com/miebaka/portfolio).

The original source, physics/caustic shader, pointer and touch interaction, pause control, WebGL2 fallback and reduced-motion behavior are preserved. This is the independent source repository for the water experiment extracted from Miebaka Joshua's portfolio.

## Run locally

Requires Node.js 24.

```sh
npm install
npm run build
npm run dev
```

Open **http://localhost:4000/**. `npm run build` bundles the shader to `assets/runtime/hero-wave.js`; that generated file is intentionally not checked in.

## Controls

- Move your pointer or touch the surface to create ripples.
- Use **Pause background motion** to freeze the shader.
- Use the **Theme** button to switch between the authored light and dark water treatments.
- Device `prefers-reduced-motion: reduce` disables animation and hides the pause control. WebGL2-unavailable devices use the gradient fallback.

The fluid solver uses WebGL2 and half-float render targets. Browsers without those features see a static water fallback instead. The experiment is intended to be served over HTTP, not opened from `file://`.

## Source map

- `js/hero-water-three.js` — the original Three.js water simulation and renderer
- `js/core/hero-wave.js` — original lifecycle, pointer/touch and pause logic
- `js/core/motion-language.js` — original reduced-motion logic
- `js/core/responsive.js` — original responsive viewport helper
- `js/folder-stock-three.js` — retained because the original renderer re-exports it
- `scripts/build-hero-wave.mjs` — original esbuild build script
- `index.html`, `styles/demo.css` and `scripts/serve-static.mjs` — lightweight new standalone shell

Source is preserved independently of subsequent homepage work, with its native renderer, touch interaction and fallback.

## Project history

Extracted from [miebaka/portfolio](https://github.com/miebaka/portfolio) on 23 November 2026. The original source snapshot remains on [archive/threejs-water-standalone](https://github.com/miebaka/portfolio/tree/archive/threejs-water-standalone). This repository is the independent home of the interactive water study.

## Dependencies

The renderer uses `three@0.187.0` and the build script bundles it with esbuild. The generated output at `assets/runtime/hero-wave.js` is not committed.
