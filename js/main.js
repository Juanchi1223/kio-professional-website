(function () {
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('menu');
  var scrim = document.getElementById('menu-scrim');
  if (!btn || !menu) return;

  var iconOpen = btn.querySelector('.ico-open');
  var iconClose = btn.querySelector('.ico-close');
  var desktop = window.matchMedia('(min-width: 1024px)');
  var root = document.documentElement;

  function isOpen() {
    return btn.getAttribute('aria-expanded') === 'true';
  }

  function setOpen(open, returnFocus) {
    menu.classList.toggle('is-open', open);
    root.classList.toggle('menu-abierto', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    iconOpen.hidden = open;
    iconClose.hidden = !open;
    if (scrim) scrim.hidden = !open;
    if (open) {
      var first = menu.querySelector('a');
      if (first) first.focus();
    } else if (returnFocus) {
      btn.focus();
    }
  }

  btn.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  if (scrim) scrim.addEventListener('click', function () { setOpen(false, true); });

  // Al tocar un link se cierra (y se libera el scroll antes de que el navegador salte al ancla)
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') {
      setOpen(false, true);
      return;
    }
    if (e.key !== 'Tab') return;
    // El foco circula entre el botón y los links del panel
    var items = [btn].concat(Array.prototype.slice.call(menu.querySelectorAll('a')));
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  desktop.addEventListener('change', function (e) {
    if (e.matches) setOpen(false);
  });
})();

/* Carrusel de servicios: una tarjeta por vez en mobile, grilla desde md */
(function () {
  var root = document.querySelector('[data-carrusel]');
  if (!root) return;

  var pista = root.querySelector('[data-pista]');
  var slides = Array.prototype.slice.call(pista.children);
  var prev = root.querySelector('[data-prev]');
  var next = root.querySelector('[data-next]');
  var contador = document.querySelector('[data-contador]');
  var anuncio = document.querySelector('[data-anuncio]');
  var mobile = window.matchMedia('(max-width: 767.98px)');
  var reducido = window.matchMedia('(prefers-reduced-motion: reduce)');
  var total = slides.length;
  var actual = 0;
  var interactuo = false;
  var timerAnuncio;
  var timerResize;

  function titulo(i) {
    var h = slides[i].querySelector('h3');
    return h ? h.textContent.trim() : '';
  }

  function render() {
    contador.textContent = actual + 1 + ' / ' + total;
    prev.setAttribute('aria-disabled', String(actual === 0));
    next.setAttribute('aria-disabled', String(actual === total - 1));
  }

  function anunciar() {
    if (!interactuo) return;
    clearTimeout(timerAnuncio);
    timerAnuncio = setTimeout(function () {
      anuncio.textContent = 'Servicio ' + (actual + 1) + ' de ' + total + ': ' + titulo(actual);
    }, 250);
  }

  function ir(i, instantaneo) {
    i = Math.max(0, Math.min(total - 1, i));
    var behavior = instantaneo || reducido.matches ? 'auto' : 'smooth';
    pista.scrollTo({ left: slides[i].offsetLeft - pista.offsetLeft, behavior: behavior });
    if (i !== actual) {
      actual = i;
      render();
      anunciar();
    }
  }

  // La tarjeta más visible es la actual, también cuando se desliza con el dedo
  var observer = new IntersectionObserver(function (entries) {
    if (!mobile.matches) return;
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var i = slides.indexOf(e.target);
        if (i !== actual) {
          actual = i;
          render();
          anunciar();
        }
      }
    });
  }, { root: pista, threshold: 0.6 });
  slides.forEach(function (s) { observer.observe(s); });

  function marcarInteraccion() { interactuo = true; }
  pista.addEventListener('pointerdown', marcarInteraccion);
  pista.addEventListener('touchstart', marcarInteraccion, { passive: true });

  prev.addEventListener('click', function () { marcarInteraccion(); ir(actual - 1); });
  next.addEventListener('click', function () { marcarInteraccion(); ir(actual + 1); });

  pista.addEventListener('keydown', function (e) {
    if (!mobile.matches) return;
    var destino = null;
    if (e.key === 'ArrowLeft') destino = actual - 1;
    else if (e.key === 'ArrowRight') destino = actual + 1;
    else if (e.key === 'Home') destino = 0;
    else if (e.key === 'End') destino = total - 1;
    if (destino === null) return;
    e.preventDefault();
    marcarInteraccion();
    ir(destino);
  });

  // Desde md es una grilla: se quitan los roles de carrusel y la parada de Tab de la pista
  function ajustarModo() {
    if (mobile.matches) {
      root.setAttribute('aria-roledescription', 'carrusel');
      root.setAttribute('role', 'region');
      pista.setAttribute('tabindex', '0');
      slides.forEach(function (s) {
        s.setAttribute('role', 'group');
        s.setAttribute('aria-roledescription', 'diapositiva');
      });
      ir(actual, true);
    } else {
      root.removeAttribute('aria-roledescription');
      root.removeAttribute('role');
      pista.removeAttribute('tabindex');
      slides.forEach(function (s) {
        s.removeAttribute('role');
        s.removeAttribute('aria-roledescription');
      });
    }
  }

  mobile.addEventListener('change', ajustarModo);

  // Al redimensionar, se vuelve a alinear la tarjeta actual para que no quede cortada
  window.addEventListener('resize', function () {
    clearTimeout(timerResize);
    timerResize = setTimeout(function () {
      if (mobile.matches) ir(actual, true);
    }, 100);
  });

  render();
  ajustarModo();
})();

/* Año del © del footer */
(function () {
  var el = document.querySelector('[data-anio]');
  if (el) el.textContent = new Date().getFullYear();
})();
