/* Stephan Ward bio site — global UI behaviors */
(function () {
  // Mobile nav toggle
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    });
    nav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      })
    );
  }

  // Scroll-reveal animations (progressive enhancement)
  document.body.classList.add('js-anim');
  const revealTargets = document.querySelectorAll(
    '.feature-grid > *, .course-grid > *, .cert-grid > *, .steps > *'
  );
  if ('IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach((el) => el.classList.add('anim'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach((el) => io.observe(el));
  }

  // Back-to-top button
  const toTop = document.createElement('button');
  toTop.id = 'toTop';
  toTop.type = 'button';
  toTop.textContent = '▲';
  toTop.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(toTop);
  window.addEventListener(
    'scroll',
    () => {
      toTop.classList.toggle('show', window.scrollY > 420);
    },
    { passive: true }
  );
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Repository language filter (/repositories)
  const langFilters = document.getElementById('langFilters');
  if (langFilters) {
    const cards = document.querySelectorAll('#repoGrid .repo-card');
    langFilters.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-chip');
      if (!btn) return;
      langFilters.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.dataset.lang;
      let shown = 0;
      cards.forEach((card) => {
        const show = lang === 'all' || card.dataset.lang === lang;
        card.classList.toggle('hidden', !show);
        if (show) shown += 1;
      });
      const counter = document.getElementById('repoShown');
      if (counter) counter.textContent = shown;
    });
  }
})();
