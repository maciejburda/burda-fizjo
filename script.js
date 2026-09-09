/* Drobne interakcje: menu mobilne, cień nagłówka, animacja wejścia sekcji. */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  var header = document.querySelector('.site-header');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.card, .steps li, .contact-card, .hero-copy, .hero-media');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (Math.min(i % 4, 3) * 60) + 'ms';
      observer.observe(el);
    });
  }
})();

/* Zgoda na cookies. Google Analytics startuje dopiero po jej udzieleniu,
   więc przed kliknięciem nic nie jest zapisywane ani wysyłane do Google. */
(function () {
  'use strict';

  var KEY = 'zgoda-analityka';
  var GA_ID = 'G-CJ0MBQ9KHC';

  function uruchomAnalitykę() {
    if (window.gtag) { return; }
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function odczytaj() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function zapisz(wartosc) {
    try { localStorage.setItem(KEY, wartosc); } catch (e) { /* tryb prywatny */ }
  }

  var wybor = odczytaj();
  if (wybor === 'tak') { uruchomAnalitykę(); return; }
  if (wybor === 'nie') { return; }

  var bar = document.createElement('div');
  bar.className = 'cookie-bar';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Zgoda na pliki cookies');
  bar.innerHTML =
    '<p>Ta strona korzysta z plików cookies do analizy ruchu.</p>' +
    '<div class="cookie-bar-actions">' +
      '<button type="button" class="btn btn-primary" data-zgoda="tak">Zgadzam się</button>' +
      '<button type="button" class="cookie-bar-decline" data-zgoda="nie">Nie teraz</button>' +
    '</div>';

  bar.addEventListener('click', function (event) {
    var przycisk = event.target.closest('[data-zgoda]');
    if (!przycisk) { return; }
    var wartosc = przycisk.getAttribute('data-zgoda');
    zapisz(wartosc);
    if (wartosc === 'tak') { uruchomAnalitykę(); }
    bar.remove();
  });

  document.body.appendChild(bar);
})();
