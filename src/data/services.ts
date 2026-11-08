import type { Lang } from '../i18n/routes';

export type ServiceIcon = 'compass' | 'invoice' | 'bolt' | 'globe' | 'users' | 'graduation';

export interface Service {
  id: string;
  icon: ServiceIcon;
  title: Record<Lang, string>;
  short: Record<Lang, string>;
  forWho: Record<Lang, string>;
  includes: Record<Lang, string[]>;
  outcome: Record<Lang, string>;
  /** 3 entregables cortos: "Te llevas…" */
  deliverables: Record<Lang, string[]>;
}

export const services: Service[] = [
  {
    id: 'diagnostico',
    icon: 'compass',
    title: {
      es: 'Diagnóstico digital y hoja de ruta',
      en: 'Digital assessment & roadmap',
      fr: 'Diagnostic digital et feuille de route',
    },
    short: {
      es: 'Analizamos cómo trabaja tu empresa hoy y te entregamos un plan priorizado: qué digitalizar primero, cuánto cuesta y qué retorno esperar.',
      en: 'We analyse how your business works today and hand you a prioritised plan: what to digitise first, what it costs and what return to expect.',
      fr: 'Nous analysons le fonctionnement actuel de votre entreprise et vous livrons un plan priorisé : quoi digitaliser en premier, à quel coût et avec quel retour.',
    },
    forWho: {
      es: 'Empresas que saben que deben modernizarse pero no saben por dónde empezar ni en qué invertir.',
      en: 'Businesses that know they need to modernise but don’t know where to start or what to invest in.',
      fr: 'Entreprises qui savent qu’elles doivent se moderniser sans savoir par où commencer ni où investir.',
    },
    includes: {
      es: [
        'Entrevistas con el equipo y mapa de procesos actuales',
        'Auditoría de herramientas, datos y presencia online',
        'Plan a 12 meses con prioridades, presupuesto y ROI estimado',
        'Sesión de presentación y preguntas con dirección',
      ],
      en: [
        'Team interviews and map of current processes',
        'Audit of tools, data and online presence',
        '12-month plan with priorities, budget and estimated ROI',
        'Presentation and Q&A session with management',
      ],
      fr: [
        'Entretiens avec l’équipe et cartographie des processus actuels',
        'Audit des outils, des données et de la présence en ligne',
        'Plan à 12 mois avec priorités, budget et ROI estimé',
        'Session de restitution et questions avec la direction',
      ],
    },
    outcome: {
      es: 'Decisiones claras y un plan que puedes ejecutar con nosotros o con quien quieras.',
      en: 'Clear decisions and a plan you can execute with us or anyone else.',
      fr: 'Des décisions claires et un plan exécutable avec nous ou avec qui vous voulez.',
    },
    deliverables: {
      es: ['Mapa de procesos', 'Plan a 12 meses', 'ROI por iniciativa'],
      en: ['Process map', '12-month plan', 'ROI per initiative'],
      fr: ['Cartographie des processus', 'Plan à 12 mois', 'ROI par initiative'],
    },
  },
  {
    id: 'facturacion',
    icon: 'invoice',
    title: {
      es: 'Facturación electrónica y cumplimiento VeriFactu',
      en: 'E-invoicing & VeriFactu compliance',
      fr: 'Facturation électronique et conformité VeriFactu',
    },
    short: {
      es: 'Adaptamos tu facturación a la normativa española (VeriFactu, factura electrónica B2B) eligiendo e implantando el software adecuado para tu negocio.',
      en: 'We bring your invoicing in line with Spanish regulation (VeriFactu, B2B e-invoicing), selecting and implementing the right software for your business.',
      fr: 'Nous mettons votre facturation en conformité avec la réglementation espagnole (VeriFactu, facture électronique B2B) en choisissant et déployant le bon logiciel.',
    },
    forWho: {
      es: 'Autónomos y PYMES que facturan con Excel, Word o un programa antiguo y necesitan cumplir sin complicarse.',
      en: 'Freelancers and SMEs invoicing with Excel, Word or legacy software who need to comply without the headache.',
      fr: 'Indépendants et PME qui facturent sous Excel, Word ou un vieux logiciel et doivent se conformer sans se compliquer la vie.',
    },
    includes: {
      es: [
        'Análisis de tu flujo de facturación y obligaciones aplicables',
        'Selección de software certificado y comparativa de costes',
        'Migración de clientes, productos e históricos',
        'Formación del equipo y soporte en los primeros ciclos de facturación',
      ],
      en: [
        'Analysis of your invoicing flow and applicable obligations',
        'Selection of certified software and cost comparison',
        'Migration of customers, products and history',
        'Team training and support through the first invoicing cycles',
      ],
      fr: [
        'Analyse de votre flux de facturation et des obligations applicables',
        'Sélection d’un logiciel certifié et comparatif des coûts',
        'Migration des clients, produits et historiques',
        'Formation de l’équipe et accompagnement sur les premiers cycles de facturation',
      ],
    },
    outcome: {
      es: 'Facturas conformes, menos tiempo administrativo y tranquilidad ante Hacienda.',
      en: 'Compliant invoices, less admin time and peace of mind with the tax authority.',
      fr: 'Des factures conformes, moins de temps administratif et la sérénité face au fisc.',
    },
    deliverables: {
      es: ['Software certificado operativo', 'Datos migrados', 'Equipo formado'],
      en: ['Certified software live', 'Data migrated', 'Team trained'],
      fr: ['Logiciel certifié opérationnel', 'Données migrées', 'Équipe formée'],
    },
  },
  {
    id: 'automatizacion',
    icon: 'bolt',
    title: {
      es: 'Automatización de procesos e IA aplicada',
      en: 'Process automation & applied AI',
      fr: 'Automatisation des processus et IA appliquée',
    },
    short: {
      es: 'Eliminamos tareas repetitivas: presupuestos, seguimiento de clientes, informes, conciliaciones. Conectamos tus herramientas y añadimos IA donde aporta valor real.',
      en: 'We remove repetitive tasks: quotes, customer follow-up, reports, reconciliations. We connect your tools and add AI where it brings real value.',
      fr: 'Nous supprimons les tâches répétitives : devis, relances clients, rapports, rapprochements. Nous connectons vos outils et ajoutons de l’IA là où elle apporte une vraie valeur.',
    },
    forWho: {
      es: 'Equipos que pierden horas copiando datos entre programas o respondiendo siempre a las mismas preguntas.',
      en: 'Teams losing hours copying data between systems or answering the same questions over and over.',
      fr: 'Équipes qui perdent des heures à recopier des données ou à répondre toujours aux mêmes questions.',
    },
    includes: {
      es: [
        'Identificación de los 3-5 procesos con mayor retorno',
        'Integraciones entre CRM, facturación, email y hojas de cálculo',
        'Asistentes de IA para atención al cliente o documentación interna',
        'Panel de control con los indicadores clave del negocio',
      ],
      en: [
        'Identification of the 3–5 processes with the highest return',
        'Integrations between CRM, invoicing, email and spreadsheets',
        'AI assistants for customer service or internal documentation',
        'Dashboard with your key business indicators',
      ],
      fr: [
        'Identification des 3 à 5 processus au meilleur retour',
        'Intégrations entre CRM, facturation, e-mail et tableurs',
        'Assistants IA pour le service client ou la documentation interne',
        'Tableau de bord avec les indicateurs clés de l’activité',
      ],
    },
    outcome: {
      es: 'Horas recuperadas cada semana y menos errores humanos.',
      en: 'Hours recovered every week and fewer human errors.',
      fr: 'Des heures récupérées chaque semaine et moins d’erreurs humaines.',
    },
    deliverables: {
      es: ['Flujos automatizados', 'Integraciones entre herramientas', 'Panel de indicadores'],
      en: ['Automated workflows', 'Tool integrations', 'KPI dashboard'],
      fr: ['Flux automatisés', 'Intégrations entre outils', 'Tableau de bord'],
    },
  },
  {
    id: 'web',
    icon: 'globe',
    title: {
      es: 'Web profesional y presencia digital',
      en: 'Professional website & digital presence',
      fr: 'Site web professionnel et présence digitale',
    },
    short: {
      es: 'Diseñamos webs rápidas y claras que generan contactos, con ficha de Google optimizada y bases de SEO local para que te encuentren en tu zona.',
      en: 'We design fast, clear websites that generate leads, with an optimised Google profile and local SEO foundations so customers in your area find you.',
      fr: 'Nous concevons des sites rapides et clairs qui génèrent des contacts, avec une fiche Google optimisée et des bases de SEO local pour être trouvé dans votre zone.',
    },
    forWho: {
      es: 'Negocios sin web, con una web anticuada o que no reciben ningún contacto desde internet.',
      en: 'Businesses with no website, an outdated one, or one that never brings in a single enquiry.',
      fr: 'Entreprises sans site, avec un site dépassé ou qui ne reçoivent aucun contact via internet.',
    },
    includes: {
      es: [
        'Web multilingüe, rápida y adaptada a móvil',
        'Formularios, reserva de citas y chat conectados a tu gestión',
        'Perfil de empresa en Google y reseñas',
        'Analítica sencilla para saber qué funciona',
      ],
      en: [
        'Multilingual, fast, mobile-ready website',
        'Forms, appointment booking and chat connected to your systems',
        'Google Business Profile and reviews',
        'Simple analytics so you know what works',
      ],
      fr: [
        'Site multilingue, rapide et adapté au mobile',
        'Formulaires, prise de rendez-vous et chat connectés à votre gestion',
        'Fiche d’établissement Google et avis',
        'Analytique simple pour savoir ce qui fonctionne',
      ],
    },
    outcome: {
      es: 'Una web que trabaja para ti: visible, creíble y que convierte visitas en clientes.',
      en: 'A website that works for you: visible, credible and turning visits into customers.',
      fr: 'Un site qui travaille pour vous : visible, crédible et qui transforme les visites en clients.',
    },
    deliverables: {
      es: ['Web multilingüe', 'Ficha de Google optimizada', 'Analítica configurada'],
      en: ['Multilingual website', 'Optimised Google profile', 'Analytics in place'],
      fr: ['Site multilingue', 'Fiche Google optimisée', 'Analytique en place'],
    },
  },
  {
    id: 'crm',
    icon: 'users',
    title: {
      es: 'CRM y organización comercial',
      en: 'CRM & sales organisation',
      fr: 'CRM et organisation commerciale',
    },
    short: {
      es: 'Centralizamos tus clientes, presupuestos y seguimientos en un CRM sencillo para que ninguna oportunidad se pierda en un cuaderno o en WhatsApp.',
      en: 'We centralise your customers, quotes and follow-ups in a simple CRM so no opportunity gets lost in a notebook or WhatsApp thread.',
      fr: 'Nous centralisons vos clients, devis et relances dans un CRM simple pour qu’aucune opportunité ne se perde dans un carnet ou sur WhatsApp.',
    },
    forWho: {
      es: 'Empresas con varios comerciales o técnicos que gestionan clientes de memoria.',
      en: 'Businesses with several sales reps or technicians managing customers from memory.',
      fr: 'Entreprises avec plusieurs commerciaux ou techniciens qui gèrent les clients de mémoire.',
    },
    includes: {
      es: [
        'Elección e implantación de un CRM a tu medida (sin sobredimensionar)',
        'Importación de contactos y definición del embudo de ventas',
        'Recordatorios y plantillas de seguimiento automáticas',
        'Formación y acompañamiento del equipo comercial',
      ],
      en: [
        'Selection and set-up of a right-sized CRM',
        'Contact import and sales funnel definition',
        'Automatic reminders and follow-up templates',
        'Training and coaching for the sales team',
      ],
      fr: [
        'Choix et mise en place d’un CRM à votre taille (sans surdimensionner)',
        'Import des contacts et définition de l’entonnoir de vente',
        'Rappels et modèles de relance automatiques',
        'Formation et accompagnement de l’équipe commerciale',
      ],
    },
    outcome: {
      es: 'Visibilidad total de tu cartera y más presupuestos cerrados.',
      en: 'Full visibility of your pipeline and more quotes closed.',
      fr: 'Une visibilité totale sur votre portefeuille et plus de devis signés.',
    },
    deliverables: {
      es: ['CRM implantado', 'Embudo de ventas definido', 'Seguimientos automáticos'],
      en: ['CRM live', 'Sales funnel defined', 'Automatic follow-ups'],
      fr: ['CRM en place', 'Entonnoir de vente défini', 'Relances automatiques'],
    },
  },
  {
    id: 'formacion',
    icon: 'graduation',
    title: {
      es: 'Formación y acompañamiento continuo',
      en: 'Training & ongoing support',
      fr: 'Formation et accompagnement continu',
    },
    short: {
      es: 'La tecnología solo funciona si el equipo la usa. Formamos a tu gente, documentamos los procesos y seguimos a tu lado después del arranque.',
      en: 'Technology only works if the team uses it. We train your people, document processes and stay by your side after go-live.',
      fr: 'La technologie ne fonctionne que si l’équipe l’utilise. Nous formons vos collaborateurs, documentons les processus et restons à vos côtés après le lancement.',
    },
    forWho: {
      es: 'Empresas que ya han comprado herramientas pero nadie las usa de verdad.',
      en: 'Businesses that have already bought tools nobody really uses.',
      fr: 'Entreprises qui ont déjà acheté des outils que personne n’utilise vraiment.',
    },
    includes: {
      es: [
        'Sesiones prácticas por perfil (dirección, administración, comercial)',
        'Guías y vídeos cortos de uso interno',
        'Soporte mensual y revisión trimestral de indicadores',
        'Dirección digital externalizada (CTO/CDO a tiempo parcial)',
      ],
      en: [
        'Hands-on sessions per role (management, admin, sales)',
        'Short internal guides and videos',
        'Monthly support and quarterly KPI review',
        'Outsourced digital leadership (fractional CTO/CDO)',
      ],
      fr: [
        'Sessions pratiques par profil (direction, administration, commercial)',
        'Guides et courtes vidéos à usage interne',
        'Support mensuel et revue trimestrielle des indicateurs',
        'Direction digitale externalisée (CTO/CDO à temps partagé)',
      ],
    },
    outcome: {
      es: 'Un equipo autónomo y una inversión que de verdad se amortiza.',
      en: 'An autonomous team and an investment that actually pays off.',
      fr: 'Une équipe autonome et un investissement réellement rentabilisé.',
    },
    deliverables: {
      es: ['Equipo autónomo', 'Guías internas', 'Revisión trimestral'],
      en: ['Autonomous team', 'Internal guides', 'Quarterly review'],
      fr: ['Équipe autonome', 'Guides internes', 'Revue trimestrielle'],
    },
  },
];
