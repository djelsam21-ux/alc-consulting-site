export const langs = ['es', 'en', 'fr'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'es';

export const langNames: Record<Lang, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
};

export const locales: Record<Lang, string> = {
  es: 'es-ES',
  en: 'en-GB',
  fr: 'fr-FR',
};

/** Rutas traducidas: cada página tiene un slug propio por idioma (mejor SEO). */
export const routes = {
  home: { es: '/es/', en: '/en/', fr: '/fr/' },
  services: { es: '/es/servicios/', en: '/en/services/', fr: '/fr/services/' },
  diagnostic: {
    es: '/es/diagnostico-digital/',
    en: '/en/digital-assessment/',
    fr: '/fr/diagnostic-digital/',
  },
  contact: { es: '/es/contacto/', en: '/en/contact/', fr: '/fr/contact/' },
  thanks: { es: '/es/gracias/', en: '/en/thank-you/', fr: '/fr/merci/' },
  legal: { es: '/es/aviso-legal/', en: '/en/legal-notice/', fr: '/fr/mentions-legales/' },
  privacy: { es: '/es/privacidad/', en: '/en/privacy/', fr: '/fr/confidentialite/' },
} as const satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof routes;

export function path(page: PageKey, lang: Lang): string {
  return routes[page][lang];
}

/** Textos comunes a toda la web (navegación, pie, botones). */
export const ui = {
  es: {
    'nav.services': 'Servicios',
    'nav.diagnostic': 'Diagnóstico digital',
    'nav.contact': 'Contacto',
    'nav.cta': 'Reservar una llamada',
    'nav.menu': 'Menú',
    'nav.lang': 'Idioma',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.legal': 'Aviso legal',
    'footer.privacy': 'Política de privacidad',
    'footer.contact': 'Contacto',
    'footer.nav': 'Navegación',
    'footer.about':
      'Agencia de transformación digital para pequeñas y medianas empresas en España. Procesos, facturación, automatización y presencia online, sin humo.',
    'skip': 'Saltar al contenido',
  },
  en: {
    'nav.services': 'Services',
    'nav.diagnostic': 'Digital assessment',
    'nav.contact': 'Contact',
    'nav.cta': 'Book a call',
    'nav.menu': 'Menu',
    'nav.lang': 'Language',
    'footer.rights': 'All rights reserved.',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy policy',
    'footer.contact': 'Contact',
    'footer.nav': 'Navigation',
    'footer.about':
      'Digital transformation agency for small and medium-sized businesses in Spain. Processes, invoicing, automation and online presence — no hype.',
    'skip': 'Skip to content',
  },
  fr: {
    'nav.services': 'Services',
    'nav.diagnostic': 'Diagnostic digital',
    'nav.contact': 'Contact',
    'nav.cta': 'Réserver un appel',
    'nav.menu': 'Menu',
    'nav.lang': 'Langue',
    'footer.rights': 'Tous droits réservés.',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.contact': 'Contact',
    'footer.nav': 'Navigation',
    'footer.about':
      'Agence de transformation digitale pour les PME en Espagne. Processus, facturation, automatisation et présence en ligne — sans bla-bla.',
    'skip': 'Aller au contenu',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function t(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}
