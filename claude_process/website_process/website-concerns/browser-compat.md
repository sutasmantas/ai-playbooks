# Concern: Browser Compatibility

**Rule**
The target browser matrix is named in writing at project start. The site is validated on each, on each major OS, at the version the audience actually uses. Progressive enhancement for anything optional.

**Why**
"Works in Chrome on the developer's MacBook" is one data point, not coverage. Safari iOS, Firefox, and older Chromium (Edge stable, in-app browsers in Instagram/Facebook/LinkedIn) are real environments where features silently misbehave or refuse to load.

**How to apply**
- **Target matrix:** Write it down. Example: "latest Chrome, Firefox, Safari on macOS/Windows/iOS/Android; Edge stable; Chromium WebView in social-app browsers." Use the audience's actual usage data if you have it.
- **Caniuse before using:** A new CSS or JS feature gets cross-referenced against caniuse.com before it lands. Polyfill or fall back gracefully if coverage is < 95% of the target audience.
- **Test on real devices for at least one critical flow.** BrowserStack / Lambdatest / Sauce, or the team's actual phones. Emulators miss touch-specific bugs.
- **Safari is its own browser.** Treat it as a separate target — `:has()`, `dvh` units, date inputs, IndexedDB quirks all bite.
- **In-app browsers:** Social apps' webviews strip cookies, block window features, and have non-standard navigation. Test the signup/share flow inside the Instagram or Facebook browser if traffic comes from there.
- **Resilience model depends on site type — apply both, not one.**
  - **For MPAs and SSR-first frameworks (Hugo, Astro static, Next.js with form actions, Remix, SvelteKit):** progressive enhancement is the right model. Server-render the initial route; forms post to a real endpoint that works without JS; links navigate normally; above-the-fold content lives in the initial HTML, not behind a `<Suspense fallback>`. Audit by disabling JS in DevTools and confirming you can still read content and submit the primary form.
  - **For app-shaped SPAs (dashboards, editors, dataviz, real-time apps) and resumable frameworks (Qwik, Astro islands, streaming SSR):** the JS runtime is the product — PE doesn't apply cleanly. Use the SPA resilience checklist instead: route-level error boundaries so one crashed component doesn't blank the page; explicit skeleton/shimmer states on every async load; service-worker shell + stale-while-revalidate API caching so the app boots offline with last-known data; client-side error tracking (Sentry/Rollbar) with source maps; resource hints (`preload`, `prefetch`, `modulepreload`) for the route bundle and likely-next routes.
  - **Both can co-exist in one project.** A marketing page and a `/dashboard` route can apply different rules.

**Skip if**
Internal admin tool with a controlled browser. Document the target browser explicitly.

**Trace:** general — not from a war story in this kit.
