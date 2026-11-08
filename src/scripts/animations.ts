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
  '.process__row',
  '.process__cta',
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
].join(',');

/* Elementos en rejilla: retraso escalonado según su posición entre hermanos */
const STAGGER_PARENTS = '.why__list, .svc-grid, .grid, .comp-cards, .process, .faq, .stats__list, .quiz, .footer__grid';

function setup() {
  if (!enabled) return;

  const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS)).filter(
    (el) => !el.closest('.hero') && !el.closest('.page-head') && !el.dataset.reveal,
  );

  els.forEach((el) => {
    el.dataset.reveal = '';
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

setup();
