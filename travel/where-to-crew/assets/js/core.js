/* ============================================================
   Where To, Crew? — COHESION CORE
   ONE Lenis conductor · ONE reveal() · ONE cursor · ONE magnetic
   · ONE page-transition · ONE ambient layer.
   Loaded on every page. Reduced-motion + touch guarded throughout.
   Requires (CDN, per page): gsap, ScrollTrigger, SplitText.
   Lenis optional (degrades to native scroll).
   ============================================================ */
(function () {
  'use strict';

  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined';

  const EASE = { primary: 'expo.inOut', out: 'expo.out', pop: 'back.out(1.7)', short: 'power3.out' };
  const DUR = { micro: 0.3, std: 0.85, hero: 1.0 };
  const STAGGER = { chars: 0.012, lines: 0.06, cards: 0.1 };

  const WTC = window.WTC = {
    reduce, fine, EASE, DUR, STAGGER,
    lenis: null,
    reveal: () => {},
    revealScope: () => {},
    refresh: () => { if (hasGSAP && window.ScrollTrigger) ScrollTrigger.refresh(); }
  };

  if (hasGSAP) {
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    if (window.SplitText) gsap.registerPlugin(SplitText);
    if (window.DrawSVGPlugin) gsap.registerPlugin(DrawSVGPlugin);
    if (window.MotionPathPlugin) gsap.registerPlugin(MotionPathPlugin);
    gsap.defaults({ ease: EASE.out, duration: DUR.std });
  }

  /* ── ONE smooth-scroll conductor ─────────────────────────── */
  function initLenis() {
    if (reduce || !window.Lenis || !hasGSAP) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    WTC.lenis = lenis;
    if (window.ScrollTrigger) lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    // anchor links route through Lenis
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -90 }); }
    });
  }

  /* ── ONE reveal(): masked per-line / fade / clip / stagger ── */
  function revealEl(el) {
    if (el.dataset.revealed) return;
    el.dataset.revealed = '1';
    const type = el.getAttribute('data-reveal') || 'fade';
    const start = 'top 88%';

    if (reduce || !hasGSAP) { gsap.set ? gsap.set(el, { autoAlpha: 1 }) : (el.style.opacity = 1); return; }

    if (type === 'lines' && window.SplitText) {
      try {
        const split = new SplitText(el, { type: 'lines', mask: 'lines', linesClass: 'rv-ln' });
        gsap.set(el, { autoAlpha: 1 });
        gsap.from(split.lines, {
          yPercent: 115, duration: 0.9, ease: EASE.out, stagger: STAGGER.lines,
          scrollTrigger: { trigger: el, start, once: true }
        });
        return;
      } catch (e) { /* fall through */ }
    }
    if (type === 'clip') {
      gsap.fromTo(el, { clipPath: 'inset(0 0 100% 0)', scale: 1.04 },
        { clipPath: 'inset(0 0 0% 0)', scale: 1, autoAlpha: 1, duration: DUR.std, ease: EASE.out,
          scrollTrigger: { trigger: el, start, once: true } });
      return;
    }
    if (type === 'stagger') {
      const kids = el.children;
      gsap.set(el, { autoAlpha: 1 });
      gsap.from(kids, { y: 28, autoAlpha: 0, duration: DUR.std, ease: EASE.out,
        stagger: STAGGER.cards, scrollTrigger: { trigger: el, start, once: true } });
      return;
    }
    // default fade-up
    gsap.from(el, { y: 26, autoAlpha: 0, duration: DUR.std, ease: EASE.out,
      scrollTrigger: { trigger: el, start, once: true } });
    gsap.set(el, { autoAlpha: 1, delay: 0.001 });
  }

  function revealScope(root) {
    (root || document).querySelectorAll('[data-reveal]').forEach(revealEl);
  }
  WTC.reveal = revealEl;
  WTC.revealScope = revealScope;

  function initReveals() {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => revealScope(document)).catch(() => revealScope(document));
    } else revealScope(document);
  }

  /* ── ONE stateful custom cursor ──────────────────────────── */
  function initCursor() {
    if (!fine || reduce || !hasGSAP) return;
    const dot = document.createElement('div'); dot.className = 'cur';
    const ring = document.createElement('div'); ring.className = 'cur-ring';
    const lbl = document.createElement('span'); lbl.className = 'ring-lbl';
    ring.appendChild(lbl);
    document.body.append(dot, ring);
    document.documentElement.style.setProperty('cursor', 'none');
    const style = document.createElement('style');
    style.textContent = '@media(hover:hover){a,button,[data-cursor],.opt,.chip,.cal-day{cursor:none;}}';
    document.head.appendChild(style);

    const rx = gsap.quickTo(ring, 'x', { duration: .4, ease: 'power3' });
    const ry = gsap.quickTo(ring, 'y', { duration: .4, ease: 'power3' });
    const dx = gsap.quickTo(dot, 'x', { duration: .08, ease: 'power3' });
    const dy = gsap.quickTo(dot, 'y', { duration: .08, ease: 'power3' });
    window.addEventListener('pointermove', (e) => { rx(e.clientX); ry(e.clientY); dx(e.clientX); dy(e.clientY); });

    function bind(el) {
      const type = el.getAttribute('data-cursor');
      el.addEventListener('pointerenter', () => {
        ring.classList.add(type === 'view' ? 'is-view' : 'is-link');
        lbl.textContent = type === 'link' ? '→' : (el.getAttribute('data-label') || '');
      });
      el.addEventListener('pointerleave', () => { ring.classList.remove('is-view', 'is-link'); lbl.textContent = ''; });
    }
    document.querySelectorAll('[data-cursor]').forEach(bind);
    // generic links/buttons get the link state
    document.querySelectorAll('a:not([data-cursor]),button:not([data-cursor])').forEach((el) => {
      el.addEventListener('pointerenter', () => ring.classList.add('is-link'));
      el.addEventListener('pointerleave', () => ring.classList.remove('is-link'));
    });
    WTC._cursorBind = bind;
  }

  /* ── ONE magnetic system ─────────────────────────────────── */
  function initMagnetic() {
    if (!fine || reduce || !hasGSAP) return;
    document.querySelectorAll('[data-magnetic]').forEach((el) => {
      const xT = gsap.quickTo(el, 'x', { duration: .5, ease: 'elastic.out(1,.4)' });
      const yT = gsap.quickTo(el, 'y', { duration: .5, ease: 'elastic.out(1,.4)' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        xT((e.clientX - (r.left + r.width / 2)) * 0.3);
        yT((e.clientY - (r.top + r.height / 2)) * 0.3);
      });
      el.addEventListener('pointerleave', () => { xT(0); yT(0); });
    });
  }

  /* ── ONE page transition (terracotta panel sweeps UP) ────── */
  function initTransition() {
    let ov = document.getElementById('wtc-trans');
    if (!ov) {
      ov = document.createElement('div'); ov.id = 'wtc-trans'; ov.className = 'wtc-trans';
      ov.innerHTML = '<span class="mark mono">Where&nbsp;To,&nbsp;Crew?</span>';
      document.body.appendChild(ov);
    }
    if (reduce || !hasGSAP) { ov.style.display = 'none'; return; }

    if (sessionStorage.getItem('wtc-trans')) {
      sessionStorage.removeItem('wtc-trans');
      gsap.set(ov, { yPercent: 0, autoAlpha: 1 });
      gsap.to(ov, { yPercent: -100, duration: .7, ease: 'expo.inOut', delay: .05,
        onComplete: () => gsap.set(ov, { autoAlpha: 0 }) });
    } else {
      gsap.set(ov, { yPercent: 100, autoAlpha: 1 });
    }

    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href]');
      if (!a) return;
      const href = a.getAttribute('href');
      const sameTab = !(e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank');
      const internal = href && !href.startsWith('#') && !href.startsWith('http') &&
        !href.startsWith('mailto') && !a.hasAttribute('data-no-trans');
      if (!internal || !sameTab) return;
      e.preventDefault();
      sessionStorage.setItem('wtc-trans', '1');
      gsap.to(ov, { yPercent: 0, duration: .6, ease: 'expo.inOut', onComplete: () => { location.href = href; } });
    });
  }

  /* ── ONE ambient layer (blobs drift, grain, marquee) ─────── */
  function initAmbient() {
    // marquee fill + velocity reaction
    document.querySelectorAll('[data-mqtrack]').forEach((track) => {
      const words = (track.getAttribute('data-words') ||
        'Where to, crew?·Poland 2026·The route·Plan the trip·Bring the crew').split('·');
      const unit = words.map((w) => `<span>${w}</span><span class="dot">✦</span>`).join('');
      track.innerHTML = unit + unit + unit + unit;
    });
    if (reduce || !hasGSAP) { document.querySelectorAll('.grain').forEach(g => g.style.display = 'none'); return; }

    gsap.to('.blob.b1', { xPercent: 8, yPercent: 12, scale: 1.12, duration: 18, ease: 'sine.inOut', repeat: -1, yoyo: true });
    gsap.to('.blob.b2', { xPercent: -10, yPercent: -8, scale: 1.18, duration: 22, ease: 'sine.inOut', repeat: -1, yoyo: true });
    gsap.to('.blob.b3', { xPercent: -12, yPercent: 10, scale: 1.1, duration: 26, ease: 'sine.inOut', repeat: -1, yoyo: true });

    document.querySelectorAll('[data-mq]').forEach((mq) => {
      const track = mq.querySelector('[data-mqtrack]');
      if (!track) return;
      const dir = parseFloat(mq.getAttribute('data-dir')) || 1;
      const loop = gsap.to(track, { xPercent: -25, duration: 24, ease: 'none', repeat: -1 });
      loop.timeScale(dir);
      let target = dir;
      if (WTC.lenis) {
        WTC.lenis.on('scroll', () => {
          const v = WTC.lenis.velocity || 0;
          target = dir * (1 + Math.min(Math.abs(v) / 6, 6));
          gsap.to(track, { skewX: gsap.utils.clamp(-8, 8, -v * 0.25), duration: .4, ease: 'power2.out', overwrite: 'auto' });
        });
      }
      gsap.ticker.add(() => {
        loop.timeScale(loop.timeScale() + (target - loop.timeScale()) * 0.08);
        target += (dir - target) * 0.04;
      });
    });
  }

  /* ── Smart nav (hide on scroll-down, show on scroll-up) + progress ── */
  function initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    let last = window.scrollY, hidden = false;
    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle('nav--solid', y > 40);
      if (y > last + 6 && y > 200 && !hidden) { nav.classList.add('nav--hidden'); hidden = true; }
      else if (y < last - 6 && hidden) { nav.classList.remove('nav--hidden'); hidden = false; }
      last = y;
      const bar = document.querySelector('.nav-progress');
      if (bar) {
        const h = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
      }
    };
    (WTC.lenis ? WTC.lenis.on('scroll', onScroll) : window.addEventListener('scroll', onScroll, { passive: true }));
    onScroll();

    // mobile menu toggle
    const burger = nav.querySelector('.nav-burger');
    const menu = nav.querySelector('.nav-links');
    if (burger && menu) {
      burger.addEventListener('click', () => {
        const open = nav.classList.toggle('nav--open');
        burger.setAttribute('aria-expanded', open);
      });
      menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('nav--open')));
    }
  }

  /* ── boot ─────────────────────────────────────────────────── */
  function boot() {
    initLenis();
    initTransition();
    initCursor();
    initMagnetic();
    initAmbient();
    initNav();
    initReveals();
    window.addEventListener('load', () => WTC.refresh());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
