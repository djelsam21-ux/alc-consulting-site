/**
 * Configuración central del sitio. Edita SOLO este archivo para cambiar
 * los datos de contacto, el enlace de reservas, redes sociales, etc.
 */
export const siteConfig = {
  name: 'ALC Consulting',
  tagline: {
    es: 'Transformación digital para PYMES',
    en: 'Digital transformation for SMEs',
    fr: 'Transformation digitale pour PME',
  },
  // Datos de contacto (sustituir por los reales)
  email: 'djellalconsulting@outlook.com',
  phone: '+34 610 419 171',
  phoneHref: 'tel:+34610419171',
  whatsapp: 'https://wa.me/34610419171',
  city: 'Alicante, España',
  address: 'Avenida Maisonave, 28 BIS, 4º · 03003 Alicante',
  hours: { es: 'Lunes a viernes · 9:00 a 18:30', en: 'Monday to Friday · 9:00 to 18:30', fr: 'Du lundi au vendredi · 9h00 à 18h30' },
  // Enlace Cal.com para la reserva de llamadas, formato "usuario/evento".
  // Crea una cuenta gratuita en https://cal.com y copia aquí el enlace de tu evento.
  calLink: 'sami-djellal-qbdlzm/30min',
  // Redes sociales (deja vacío para ocultar)
  linkedin: 'https://www.linkedin.com/company/alc-consulting',
  // Datos legales (aviso legal / privacidad): rellenar con los datos reales
  legal: {
    companyName: 'Sami Djellal (ALC Consulting)',
    taxId: 'Y8931597K',
    address: 'Avenida Maisonave, 28 BIS, 4º, 03003 Alicante, España',
    registry: '',
  },
} as const;
