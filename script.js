/* Hair by Abi — small set of interactions */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- header on scroll ---------- */
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- mobile menu ---------- */
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    document.querySelectorAll('.primary-nav a').forEach(a =>
      a.addEventListener('click', () => header.classList.remove('menu-open'))
    );
  }

  /* ---------- before/after slider ---------- */
  const slider = document.getElementById('baSlider');
  if (slider) {
    const beforeWrap = slider.querySelector('.ba-before-wrap');
    const handle = slider.querySelector('.ba-handle');
    let dragging = false;

    const setPos = (clientX) => {
      const rect = slider.getBoundingClientRect();
      let pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      beforeWrap.style.width = pct + '%';
      handle.style.left = pct + '%';
    };

    const start = (e) => {
      dragging = true;
      slider.style.cursor = 'ew-resize';
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
    };
    const move = (e) => {
      if (!dragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
    };
    const end = () => { dragging = false; };

    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start, { passive: true });
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('mouseup', end);
    window.addEventListener('touchend', end);

    // keyboard support on the handle
    handle.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      const current = parseFloat(beforeWrap.style.width) || 50;
      const next = Math.max(0, Math.min(100, current + (e.key === 'ArrowRight' ? 5 : -5)));
      beforeWrap.style.width = next + '%';
      handle.style.left = next + '%';
    });

    // hover preview: on desktop, follow cursor without click
    let isHovering = false;
    slider.addEventListener('mouseenter', () => { isHovering = true; });
    slider.addEventListener('mouseleave', () => { isHovering = false; });
    slider.addEventListener('mousemove', (e) => {
      if (!dragging && isHovering && window.matchMedia('(hover: hover)').matches) {
        setPos(e.clientX);
      }
    });
  }

  /* ---------- sticky mobile CTA: only after the hero (and its own Book button) scrolls away ---------- */
  const hero = document.getElementById('top');
  if (hero && 'IntersectionObserver' in window) {
    const ctaObserver = new IntersectionObserver(entries => {
      entries.forEach(e => document.body.classList.toggle('show-mobile-cta', !e.isIntersecting));
    }, { threshold: 0.05 });
    ctaObserver.observe(hero);
  } else {
    document.body.classList.add('show-mobile-cta');
  }

  /* ---------- year stamp ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- gentle reveal on scroll ---------- */
  const reveal = (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-revealed');
      }
    });
  };
  const io = new IntersectionObserver(reveal, { threshold: 0.12 });
  document.querySelectorAll('.section-head, .service-card, .testimonial, .g, .bridal-text, .about-text').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
});
