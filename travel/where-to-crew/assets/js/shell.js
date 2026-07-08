/* ============================================================
   Where To, Crew? — SHARED SHELL
   Injects the ambient layer, top nav (with locked destinations),
   and footer into every page so cohesion stays DRY.
   Reads <body data-page="..." data-base="...">.
   Runs synchronously (placed at top of <body>) so core.js
   (DOMContentLoaded) finds the nav.
   ============================================================ */
(function () {
  'use strict';
  const body = document.body;
  const page = body.getAttribute('data-page') || '';
  const base = body.getAttribute('data-base') || '';
  const P = (p) => base + p;

  const isPoland = page.startsWith('poland');

  /* ── ambient backdrop (drifting blobs + grain) ── */
  const bg = document.createElement('div');
  bg.className = 'bg';
  bg.innerHTML = '<div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div>';
  body.insertBefore(bg, body.firstChild);

  const grain = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  grain.setAttribute('class', 'grain'); grain.setAttribute('aria-hidden', 'true');
  grain.innerHTML =
    '<filter id="grainf"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch">' +
    '<animate attributeName="baseFrequency" dur="8s" values="0.9;0.72;0.9" repeatCount="indefinite"/>' +
    '</feTurbulence><feColorMatrix type="saturate" values="0"/></filter>' +
    '<rect width="100%" height="100%" filter="url(#grainf)"/>';
  body.insertBefore(grain, bg.nextSibling);

  /* ── skip link ── */
  const skip = document.createElement('a');
  skip.className = 'skip'; skip.href = '#main'; skip.textContent = 'Skip to content';
  body.insertBefore(skip, body.firstChild);

  /* ── the route-mark logo (the motif, in miniature) ── */
  const MARK =
    '<svg viewBox="0 0 40 40" aria-hidden="true">' +
    '<path d="M6,30 C12,26 12,16 20,16 C28,16 28,10 34,8" fill="none" stroke="var(--terra)" stroke-width="3" stroke-linecap="round"/>' +
    '<circle cx="6" cy="30" r="3.4" fill="var(--paper)"/>' +
    '<circle cx="34" cy="8" r="3.4" fill="var(--terra)"/>' +
    '</svg>';

  /* ── top nav ── */
  const dests = [
    { key: 'poland', label: 'Poland', href: P('poland/sign-up.html'), locked: false },
    { key: 'observatory', label: 'Observatory', href: P('coming-soon.html?dest=observatory'), locked: true },
    { key: 'paris', label: 'Paris', href: P('coming-soon.html?dest=paris'), locked: true }
  ];
  const navLinks = dests.map((d) => {
    if (d.locked) return `<a class="locked" aria-disabled="true" title="Coming soon">${d.label}<span class="lock-ico">🔒</span></a>`;
    const cur = isPoland ? ' aria-current="page"' : '';
    return `<a href="${d.href}"${cur} data-cursor="link">${d.label}</a>`;
  }).join('');

  const nav = document.createElement('header');
  nav.className = 'nav';
  nav.innerHTML =
    `<div class="wrap">
       <a class="nav-brand" href="${P('index.html')}" data-cursor="link">${MARK}<span>Where&nbsp;To,&nbsp;Crew?</span></a>
       <button class="nav-burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
       <nav class="nav-links" aria-label="Destinations">
         <a href="${P('index.html')}"${page === 'home' ? ' aria-current="page"' : ''} data-cursor="link">Home</a>
         ${navLinks}
         <a class="nav-cta btn btn--sm btn--solid" href="${P('poland/sign-up.html')}" data-magnetic><span class="fill"></span><span class="lbl">Join Poland →</span></a>
       </nav>
       <div class="nav-progress"></div>
     </div>`;
  body.insertBefore(nav, skip.nextSibling);

  /* ── Poland sub-nav (Sign up / Plan draft / Plan) ── */
  if (isPoland) {
    const subPages = [
      { key: 'poland-signup', label: 'Sign up', href: P('poland/sign-up.html') },
      { key: 'poland-draft', label: 'Plan draft', href: P('poland/plan-draft.html') },
      { key: 'poland-plan', label: 'Plan', href: P('poland/plan.html') }
    ];
    const sub = document.createElement('div');
    sub.className = 'subnav';
    sub.innerHTML =
      `<div class="wrap"><div class="subnav-inner">
         <span class="subnav-dest mono">Poland · Jun 2026</span>
         <div class="subnav-tabs">${subPages.map((s) =>
        `<a href="${s.href}"${page === s.key ? ' aria-current="page"' : ''}>${s.label}</a>`).join('')}</div>
       </div></div>`;
    // inserted by the page right after nav via #subnav-slot, else after nav
    const slot = document.getElementById('subnav-slot');
    if (slot) slot.replaceWith(sub); else body.insertBefore(sub, nav.nextSibling);
  }

  /* ── footer ── */
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML =
    `<div class="wrap">
       <div class="f-brand-col">
         <div class="f-brand">Where To, Crew?</div>
         <p class="f-note">A friends-only trip planner. No accounts, no logins — just the crew, the route, and a plan you build together.</p>
       </div>
       <div>
         <h4>Destinations</h4>
         <a href="${P('poland/sign-up.html')}">Poland — Jun 2026</a>
         <a class="locked" aria-disabled="true" style="opacity:.5;pointer-events:none">Observatory 🔒</a>
         <a class="locked" aria-disabled="true" style="opacity:.5;pointer-events:none">Paris 🔒</a>
       </div>
       <div>
         <h4>Poland</h4>
         <a href="${P('poland/sign-up.html')}">Sign up</a>
         <a href="${P('poland/plan-draft.html')}">Plan draft</a>
         <a href="${P('poland/plan.html')}">The plan</a>
         <a href="${P('car-activities.html')}">Car games</a>
         <a href="${P('emergency.html')}">Emergency one-pager</a>
       </div>
     </div>
     <div class="wrap"><div class="f-bottom">
       <span>© 2026 · Built for the crew</span>
       <span>Kaunas → Kraków → Energylandia → Tatry</span>
     </div></div>`;
  body.appendChild(footer);

  /* toast helper */
  window.WTCtoast = function (msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; requestAnimationFrame(() => t.classList.add('show'));
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 2400);
  };
})();
