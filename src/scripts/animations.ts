/**
 * Animaciones al hacer scroll (sin dependencias).
 * - Los elementos aparecen con un fundido + desplazamiento suave al entrar en pantalla.
 * - Las tarjetas de una misma rejilla aparecen escalonadas.
 * - Las cifras clave cuentan hasta su valor.
 * - La cabecera gana una sombra al bajar.
 * Se desactiva automáticamente si el usuario prefiere reducir el movimiento.
 */
const root = document.documentElement;
const enabled = root.classList.contains('js-anim');

/* Elementos que se revelan (todas las páginas) */
const SELECTORS = [
  '.section-head',
  '.why > div:first-child',
  '.why__item',
  '.svc',
  '.pain',
  '.card',
  '.comp-card',
  '.table-wrap',
  '.steps',
  '.diag',
  '.faq-wrap > div:first-child',
  '.faq__item',
  '.final',
  '.about__visual',
  '.about > div:last-child',
  '.stats__list li',
  '.svc-item',
  '.quiz__q',
  '.tool__result',
  '.prose > *',
  '.footer__grid > *',
  '.facts__list li',
  '.story > *',
  '.disc__item',
  '.sectors > *',
  '.sectors__list li',
  '.values li',
].join(',');

/* Elementos en rejilla: retraso escalonado según su posición entre hermanos */
const STAGGER_PARENTS =
  '.why__list, .svc-grid, .grid, .comp-cards, .process, .faq, .stats__list, .quiz, .footer__grid, .facts__list, .approach, .sectors__list, .values, .disc';

/* Variantes de entrada según el tipo de bloque (por defecto: subir) */
const VARIANTS: Record<string, string> = {
  '.about__visual': 'zoom',
  '.about > div:last-child': 'right',
  '.why > div:first-child': 'left',
  '.why__item': 'right',
  '.svc': 'blur',
  '.pain': 'blur',
  '.comp-card': 'zoom',
  '.table-wrap': 'zoom',
  '.diag': 'zoom',
  '.final': 'zoom',
  '.faq__item': 'left',
  '.steps': 'blur',
  '.facts__list li': 'zoom',
  '.story > *': 'left',
  '.disc__item': 'blur',
  '.values li': 'blur',
  '.sectors__list li': 'zoom',
};

/** Envuelve cada palabra de un título en <span class="word"><span class="word__in">…</span></span>,
 *  conservando las etiquetas internas (p. ej. <span class="accent">). */
function splitWords(heading: HTMLElement) {
  if (heading.dataset.split) return;
  heading.dataset.split = '1';
  let i = 0;
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent || '').split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const outer = document.createElement('span');
          outer.className = 'word';
          const inner = document.createElement('span');
          inner.className = 'word__in';
          inner.style.setProperty('--w', String(i++));
          inner.textContent = part;
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        child.parentNode?.replaceChild(frag, child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walk(child);
      }
    });
  };
  walk(heading);
  if (!heading.hasAttribute('aria-label')) {
    heading.setAttribute('aria-label', heading.textContent?.replace(/\s+/g, ' ').trim() || '');
  }
}

function setup() {
  if (!enabled) return;

  /* Títulos animados palabra por palabra */
  const pageTitles = Array.from(document.querySelectorAll<HTMLElement>('.hero h1, .page-head h1'));
  pageTitles.forEach((h) => {
    splitWords(h);
    requestAnimationFrame(() => requestAnimationFrame(() => h.classList.add('words-in')));
  });
  document
    .querySelectorAll<HTMLElement>('.section-head h2, .why h2, .about h2, .diag h2, .faq-wrap h2, .final h2, .sectors h2')
    .forEach(splitWords);

  const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS)).filter(
    (el) => !el.closest('.hero') && !el.closest('.page-head') && !el.dataset.reveal,
  );

  els.forEach((el) => {
    const variant = Object.keys(VARIANTS).find((sel) => el.matches(sel));
    el.dataset.reveal = variant ? VARIANTS[variant] : '';
    const parent = el.parentElement;
    if (parent && parent.matches(STAGGER_PARENTS)) {
      const i = Array.from(parent.children).indexOf(el);
      el.style.setProperty('--reveal-delay', `${Math.min(i, 6) * 80}ms`);
    }
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const t = entry.target as HTMLElement;
          t.classList.add('is-visible');
          io.unobserve(t);
          // tras la entrada, quitar el retraso para que el hover responda al instante
          window.setTimeout(() => t.style.removeProperty('--reveal-delay'), 1400);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));

  /* Contadores de cifras */
  const counters = Array.from(document.querySelectorAll<HTMLElement>('.stats__list strong'));
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        cio.unobserve(entry.target);
        const el = entry.target as HTMLElement;
        const textNode = Array.from(el.childNodes).find((n) => n.nodeType === 3 && /\d/.test(n.textContent || ''));
        if (!textNode) return;
        const original = textNode.textContent || '';
        const m = original.match(/^(\s*)(\d+)(.*)$/s);
        if (!m) return;
        const target = parseInt(m[2], 10);
        const start = performance.now();
        const dur = 1200;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          textNode.textContent = `${m[1]}${Math.round(target * eased)}${m[3]}`;
          if (p < 1) requestAnimationFrame(tick);
          else textNode.textContent = original;
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((c) => cio.observe(c));
}

/* Sombra de la cabecera al hacer scroll (siempre activa) */
const header = document.querySelector('.header');
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* Lista que resalta un elemento tras otro (fortalezas) */
function setupCycle() {
  document.querySelectorAll<HTMLElement>('[data-cycle]').forEach((list) => {
    const items = Array.from(list.querySelectorAll<HTMLElement>('[data-cycle-item]'));
    if (items.length < 2) return;
    const DURATION = 2800;
    list.style.setProperty('--cycle', `${DURATION}ms`);
    let i = 0;
    let timer: number | undefined;
    const show = (n: number) => {
      items.forEach((el, k) => el.classList.toggle('is-active', k === n));
      // reinicia la animación de la barra
      const bar = items[n].querySelector<HTMLElement>('.strength__bar');
      if (bar) {
        bar.style.animation = 'none';
        void bar.offsetWidth;
        bar.style.animation = '';
      }
      i = n;
    };
    const play = () => {
      stop();
      if (!enabled) return;
      timer = window.setInterval(() => show((i + 1) % items.length), DURATION);
      list.classList.remove('is-paused');
    };
    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };
    items.forEach((el, k) =>
      el.addEventListener('mouseenter', () => {
        stop();
        list.classList.add('is-paused');
        show(k);
      }),
    );
    list.addEventListener('mouseleave', play);
    new IntersectionObserver(
      ([e]) => (e.isIntersecting ? play() : stop()),
      { threshold: 0.3 },
    ).observe(list);
  });
}

/* Antes / Con Valteon / Después */
function setupBeforeAfter() {
  document.querySelectorAll<HTMLElement>('[data-ba]').forEach((box) => {
    const tabs = Array.from(box.querySelectorAll<HTMLButtonElement>('[data-stage-btn]'));
    const CYCLE = 3600;
    box.style.setProperty('--ba-cycle', `${CYCLE}ms`);
    let stage = 0;
    let timer: number | undefined;
    let auto = enabled;
    const set = (n: number) => {
      stage = n;
      box.dataset.stage = String(n);
      tabs.forEach((t, k) => {
        t.classList.toggle('is-active', k === n);
        t.setAttribute('aria-selected', k === n ? 'true' : 'false');
        const p = t.querySelector<HTMLElement>('.ba__progress');
        if (p) {
          p.style.animation = 'none';
          void p.offsetWidth;
          p.style.animation = '';
        }
      });
    };
    const play = () => {
      if (!auto || timer) return;
      box.classList.add('is-playing');
      timer = window.setInterval(() => set((stage + 1) % tabs.length), CYCLE);
    };
    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
      box.classList.remove('is-playing');
    };
    tabs.forEach((t, k) =>
      t.addEventListener('click', () => {
        auto = false;
        stop();
        set(k);
      }),
    );
    box.addEventListener('mouseenter', stop);
    box.addEventListener('mouseleave', play);
    new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          set(stage);
          play();
        } else stop();
      },
      { threshold: 0.35 },
    ).observe(box);
  });
}

/* Método: frise de 4 étapes */
function setupSteps() {
  document.querySelectorAll<HTMLElement>('[data-steps]').forEach((box) => {
    const btns = Array.from(box.querySelectorAll<HTMLButtonElement>('[data-step-btn]'));
    const CYCLE = 4200;
    let step = 0;
    let timer: number | undefined;
    let auto = enabled;
    const set = (n: number) => {
      step = n;
      box.dataset.step = String(n);
      btns.forEach((b, k) => {
        b.classList.toggle('is-active', k === n);
        b.setAttribute('aria-selected', k === n ? 'true' : 'false');
      });
    };
    const play = () => {
      if (!auto || timer) return;
      timer = window.setInterval(() => set((step + 1) % btns.length), CYCLE);
    };
    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = undefined;
    };
    btns.forEach((b, k) => {
      b.addEventListener('click', () => {
        auto = false;
        stop();
        set(k);
      });
      b.addEventListener('mouseenter', () => {
        stop();
        set(k);
      });
    });
    box.addEventListener('mouseleave', play);
    new IntersectionObserver(([e]) => (e.isIntersecting ? play() : stop()), { threshold: 0.35 }).observe(box);
  });
}

/* Tarjetas "flip" en táctil: un toque abre, el segundo sigue el enlace */
function setupTapCards() {
  const touch = window.matchMedia('(hover: none), (pointer: coarse)');
  document.querySelectorAll<HTMLElement>('.flip').forEach((card) => {
    card.addEventListener('click', (ev) => {
      if (!touch.matches) return;
      const target = ev.target as HTMLElement;
      const innerLink = target.closest('a');
      const isCardLink = card.tagName === 'A';
      if (!card.classList.contains('is-open')) {
        // primer toque: abrir (y cerrar las demás de la misma rejilla)
        if (isCardLink || (innerLink && innerLink !== card)) ev.preventDefault();
        card.parentElement?.querySelectorAll<HTMLElement>('.flip.is-open').forEach((o) => o.classList.remove('is-open'));
        card.classList.add('is-open');
        card.setAttribute('aria-expanded', 'true');
        return;
      }
      // tarjeta abierta: un enlace interno o la tarjeta-enlace navega; si no, se cierra
      if (isCardLink || (innerLink && innerLink !== card)) return;
      card.classList.remove('is-open');
      card.setAttribute('aria-expanded', 'false');
    });
  });
}

setup();
setupTapCards();
setupCycle();
setupBeforeAfter();
setupSteps();

/* Barra de progreso de lectura + parallax suave (rAF, sin bloquear el scroll) */
function setupScrollFx() {
  if (!enabled) return;
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  const parallax = Array.from(
    document.querySelectorAll<HTMLElement>('.hero__visual, .about__photo, .final'),
  ).map((el) => ({ el, speed: el.classList.contains('hero__visual') ? 0.08 : el.classList.contains('about__photo') ? -0.06 : 0.04 }));

  let ticking = false;
  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${p})`;
    const vh = window.innerHeight;
    parallax.forEach(({ el, speed }) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) return;
      const offset = (r.top + r.height / 2 - vh / 2) * speed;
      el.style.translate = `0 ${offset.toFixed(1)}px`;
    });
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

setupScrollFx();
