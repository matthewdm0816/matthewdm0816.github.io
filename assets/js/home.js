/*
 * home.js — interactions for the academic homepage (_pages/about.md).
 *
 * Provides three progressive-enhancement features, all dependency-free:
 *   1. Reveal-on-scroll: adds `.is-visible` to `[data-reveal]` elements via
 *      IntersectionObserver (CSS owns the actual transition). Falls back to
 *      "everything visible" for reduced-motion users and legacy browsers so
 *      content is never hidden.
 *   2. Smooth in-page anchor scrolling with accessible focus management.
 *   3. Subtle hero parallax on `.hero-blob[data-depth]` (fine pointers only).
 *
 * Every selector is null-checked: if any hook is missing, that feature
 * silently does nothing. No console noise, no external dependencies.
 */
(function () {
  'use strict';

  var reduceMotionQuery = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false, addEventListener: null, addListener: null };

  function prefersReducedMotion() {
    return !!reduceMotionQuery.matches;
  }

  /* ------------------------------------------------------------------
   * 1. Reveal on scroll
   * ---------------------------------------------------------------- */
  function initReveal() {
    var nodes = document.querySelectorAll('[data-reveal]');
    if (!nodes.length) return;

    function showAll() {
      for (var i = 0; i < nodes.length; i++) {
        nodes[i].classList.add('is-visible');
      }
    }

    // Reduced motion or no IntersectionObserver: never hide content.
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      showAll();
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    nodes.forEach(function (node) {
      observer.observe(node);
    });
  }

  /* ------------------------------------------------------------------
   * 2. Smooth scrolling for in-page anchors + accessible focus
   * ---------------------------------------------------------------- */
  function initSmoothScroll() {
    // Delegate from the document so late-added anchors work too.
    document.addEventListener('click', function (event) {
      var anchor = event.target.closest
        ? event.target.closest('a[href^="#"]')
        : null;
      if (!anchor) return;

      var hash = anchor.getAttribute('href');
      // Ignore bare "#" and non-local hashes.
      if (!hash || hash.length <= 1) return;

      // Only handle links that stay on this page (no differing path/query).
      if (anchor.pathname && anchor.pathname !== window.location.pathname) {
        return;
      }

      var target = null;
      try {
        target = document.querySelector(hash);
      } catch (err) {
        return; // Invalid selector (e.g. "#foo:bar") — let the browser cope.
      }
      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start'
      });

      // Move focus to the target for keyboard/screen-reader users without
      // triggering a second (instant) scroll jump.
      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
      }
      target.focus({ preventScroll: true });

      // Keep the URL hash in sync for shareability/history.
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', hash);
      }
    });
  }

  /* ------------------------------------------------------------------
   * 3. Hero parallax on decorative blobs (fine pointer + motion OK only)
   * ---------------------------------------------------------------- */
  function initHeroParallax() {
    var finePointer = window.matchMedia
      ? window.matchMedia('(pointer: fine)')
      : { matches: false };
    if (!finePointer.matches) return;

    var hero = document.querySelector('.home-hero');
    if (!hero) return;

    var blobs = hero.querySelectorAll('.hero-blob[data-depth]');
    if (!blobs.length) return;

    var MAX_SHIFT = 20; // px, hard cap on displacement
    var latestX = 0;
    var latestY = 0;
    var rafId = null;

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function applyTransforms() {
      rafId = null;
      for (var i = 0; i < blobs.length; i++) {
        var depth = parseFloat(blobs[i].getAttribute('data-depth'));
        if (!isFinite(depth)) depth = 0;
        var dx = clamp(latestX * depth, -MAX_SHIFT, MAX_SHIFT);
        var dy = clamp(latestY * depth, -MAX_SHIFT, MAX_SHIFT);
        blobs[i].style.transform =
          'translate3d(' + dx.toFixed(2) + 'px,' + dy.toFixed(2) + 'px,0)';
      }
    }

    function schedule() {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(applyTransforms);
      }
    }

    hero.addEventListener('pointermove', function (event) {
      if (prefersReducedMotion()) return;
      var rect = hero.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      // Offset from hero centre, in px; depth coefficients keep it subtle.
      latestX = event.clientX - (rect.left + rect.width / 2);
      latestY = event.clientY - (rect.top + rect.height / 2);
      schedule();
    });

    hero.addEventListener('pointerleave', function () {
      latestX = 0;
      latestY = 0;
      schedule();
    });
  }

  /* ------------------------------------------------------------------ */
  function init() {
    initReveal();
    initSmoothScroll();
    initHeroParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
