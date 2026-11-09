import type { Lang } from '../i18n/routes';

export type ServiceIcon = 'compass' | 'invoice' | 'bolt' | 'globe' | 'users' | 'graduation' | 'rocket';

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
    id: 'creacion',
    icon: 'rocket',
    title: {
      es: 'Creación de empresa y estrategia',
      en: 'Business creation & strategy',
      fr: 'Création d’entreprise et stratégie',
    },
    short: {
      es: 'Te acompañamos de la idea al lanzamiento con estudio de mercado, modelo de negocio y plan financiero. También redefinimos la estrategia de las empresas que quieren dar un nuevo impulso.',
      en: 'We guide you from idea to launch with a market study, a business model and a financial plan. We also help established companies rethink their strategy for the next stage of growth.',
      fr: 'Nous vous accompagnons de l’idée au lancement avec une étude de marché, un modèle économique et un plan financier. Nous redéfinissons aussi la stratégie des entreprises qui veulent passer un cap.',
    },
    forWho: {
      es: 'Emprendedores que quieren crear su empresa en España y PYMES que necesitan replantear su estrategia, abrir una nueva línea de negocio o preparar una búsqueda de financiación.',
      en: 'Entrepreneurs setting up a business in Spain, and SMEs that need to rethink their strategy, open a new business line or prepare to raise funding.',
      fr: 'Porteurs de projet qui veulent créer leur entreprise en Espagne, et PME qui doivent repenser leur stratégie, lancer une nouvelle activité ou préparer une levée de fonds.',
    },
    includes: {
      es: [
        'Estudio de mercado, análisis de la competencia y del cliente ideal',
        'Modelo de negocio, propuesta de valor, precios y posicionamiento',
        'Plan de negocio y previsión financiera a 3 años',
        'Elección de forma jurídica y búsqueda de financiación (ayudas públicas, ENISA, ICO, banca), en coordinación con tu gestoría',
        'Plan estratégico, objetivos e indicadores, y plan de lanzamiento comercial',
      ],
      en: [
        'Market research, competitor analysis and ideal customer profile',
        'Business model, value proposition, pricing and positioning',
        'Business plan and 3-year financial forecast',
        'Choosing the right legal structure and finding funding (public grants, ENISA, ICO, banks), working alongside your accountant',
        'Strategic plan with goals and KPIs, plus a go-to-market plan',
      ],
      fr: [
        'Étude de marché, analyse de la concurrence et portrait du client idéal',
        'Modèle économique, proposition de valeur, prix et positionnement',
        'Business plan et prévisionnel financier à 3 ans',
        'Choix de la forme juridique et recherche de financements (aides publiques, ENISA, ICO, banques), en lien avec votre gestoría',
        'Plan stratégique avec objectifs et indicateurs, et plan de lancement commercial',
      ],
    },
    outcome: {
      es: 'Un proyecto sólido, financiable y listo para arrancar, con las decisiones correctas desde el primer día.',
      en: 'A solid, investor-ready project, set up with the right decisions from day one.',
      fr: 'Un projet solide, finançable et prêt à démarrer, avec les bonnes décisions dès le premier jour.',
    },
    deliverables: {
      es: ['Estudio de mercado', 'Plan de negocio', 'Plan estratégico'],
      en: ['Market study', 'Business plan', 'Strategic plan'],
      fr: ['Étude de marché', 'Business plan', 'Plan stratégique'],
    },
  },
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
      fr: 'Nous analysons le fonctionnement actuel de votre entreprise et vous remettons un plan par priorités : ce qu’il faut digitaliser en premier, ce que cela coûte et ce que cela rapporte.',
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
        'Team interviews and a map of how things work today',
        'Audit of tools, data and online presence',
        '12-month plan with priorities, budget and estimated ROI',
        'Presentation of findings and Q&A with management',
      ],
      fr: [
        'Entretiens avec l’équipe et cartographie des processus actuels',
        'Audit des outils, des données et de la présence en ligne',
        'Plan à 12 mois avec priorités, budget et ROI estimé',
        'Présentation des résultats et échange avec la direction',
      ],
    },
    outcome: {
      es: 'Decisiones claras y un plan que puedes ejecutar con nosotros o con quien quieras.',
      en: 'Clear decisions and a plan you can carry out with us or with anyone else.',
      fr: 'Des décisions claires et un plan que vous pouvez mettre en œuvre avec nous ou avec le prestataire de votre choix.',
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
      fr: 'Nous mettons votre facturation en conformité avec la réglementation espagnole (VeriFactu, facture électronique entre entreprises) en choisissant et en installant le logiciel adapté.',
    },
    forWho: {
      es: 'Autónomos y PYMES que facturan con Excel, Word o un programa antiguo y necesitan cumplir sin complicarse.',
      en: 'Freelancers and SMEs still invoicing in Excel, Word or old software who need to get compliant without the hassle.',
      fr: 'Indépendants et PME qui facturent encore sous Excel, Word ou un vieux logiciel et doivent se mettre en règle sans prise de tête.',
    },
    includes: {
      es: [
        'Análisis de tu flujo de facturación y obligaciones aplicables',
        'Selección de software certificado y comparativa de costes',
        'Migración de clientes, productos e históricos',
        'Formación del equipo y soporte en los primeros ciclos de facturación',
      ],
      en: [
        'Review of your current invoicing and the rules that apply to you',
        'Choosing certified software, with a cost comparison',
        'Moving over your customers, products and history',
        'Team training and support through your first invoicing runs',
      ],
      fr: [
        'Analyse de votre facturation actuelle et des obligations qui vous concernent',
        'Sélection d’un logiciel certifié et comparatif des coûts',
        'Reprise des clients, des produits et de l’historique',
        'Formation de l’équipe et accompagnement sur les premiers cycles de facturation',
      ],
    },
    outcome: {
      es: 'Facturas conformes, menos tiempo administrativo y tranquilidad ante Hacienda.',
      en: 'Compliant invoices, less time on admin and peace of mind with the tax office.',
      fr: 'Des factures conformes, moins de temps passé sur l’administratif et l’esprit tranquille face au fisc.',
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
      en: 'We take repetitive work off your plate: quotes, customer follow-ups, reports, reconciliations. We connect your tools and use AI where it genuinely helps.',
      fr: 'Nous supprimons les tâches répétitives : devis, relances clients, rapports, rapprochements. Nous connectons vos outils et ajoutons de l’IA là où elle apporte une vraie valeur.',
    },
    forWho: {
      es: 'Equipos que pierden horas copiando datos entre programas o respondiendo siempre a las mismas preguntas.',
      en: 'Teams losing hours copying data between systems or answering the same questions over and over.',
      fr: 'Équipes qui perdent des heures à ressaisir des données ou à répondre sans cesse aux mêmes questions.',
    },
    includes: {
      es: [
        'Identificación de los 3-5 procesos con mayor retorno',
        'Integraciones entre CRM, facturación, email y hojas de cálculo',
        'Asistentes de IA para atención al cliente o documentación interna',
        'Panel de control con los indicadores clave del negocio',
      ],
      en: [
        'Pinpointing the 3 to 5 processes most worth automating',
        'Integrations between CRM, invoicing, email and spreadsheets',
        'AI assistants for customer service or internal documentation',
        'Dashboard with your key business indicators',
      ],
      fr: [
        'Repérage des 3 à 5 processus les plus rentables à automatiser',
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
      en: 'We build fast, clear websites that bring in enquiries, with an optimised Google Business Profile and local SEO basics so customers nearby can find you.',
      fr: 'Nous créons des sites rapides et clairs qui vous apportent des demandes, avec une fiche Google optimisée et les bases du référencement local pour que les clients de votre secteur vous trouvent.',
    },
    forWho: {
      es: 'Negocios sin web, con una web anticuada o que no reciben ningún contacto desde internet.',
      en: 'Businesses with no website, an outdated one, or one that never brings in a single enquiry.',
      fr: 'Entreprises sans site, avec un site vieillissant, ou dont le site ne génère aucune demande.',
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
        'Google Business Profile and review management',
        'Simple analytics so you can see what works',
      ],
      fr: [
        'Site multilingue, rapide et adapté au mobile',
        'Formulaires, prise de rendez-vous et chat reliés à vos outils',
        'Fiche Google Business et gestion des avis',
        'Des statistiques simples pour savoir ce qui marche',
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
      fr: ['Site multilingue', 'Fiche Google optimisée', 'Statistiques de visite en place'],
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
      fr: 'Nous regroupons vos clients, devis et relances dans un CRM simple, pour qu’aucune opportunité ne se perde dans un carnet ou une conversation WhatsApp.',
    },
    forWho: {
      es: 'Empresas con varios comerciales o técnicos que gestionan clientes de memoria.',
      en: 'Businesses with several salespeople or technicians who keep track of customers from memory.',
      fr: 'Entreprises avec plusieurs commerciaux ou techniciens qui suivent leurs clients de mémoire.',
    },
    includes: {
      es: [
        'Elección e implantación de un CRM a tu medida (sin sobredimensionar)',
        'Importación de contactos y definición del embudo de ventas',
        'Recordatorios y plantillas de seguimiento automáticas',
        'Formación y acompañamiento del equipo comercial',
      ],
      en: [
        'Choosing and setting up a CRM that fits your size',
        'Importing your contacts and mapping out your sales stages',
        'Automatic reminders and follow-up templates',
        'Training and coaching for the sales team',
      ],
      fr: [
        'Choix et mise en place d’un CRM adapté à votre taille',
        'Import des contacts et définition de vos étapes de vente',
        'Rappels et modèles de relance automatiques',
        'Formation et accompagnement de l’équipe commerciale',
      ],
    },
    outcome: {
      es: 'Visibilidad total de tu cartera y más presupuestos cerrados.',
      en: 'A clear view of your sales pipeline and more quotes won.',
      fr: 'Une vision complète de vos ventes en cours et plus de devis signés.',
    },
    deliverables: {
      es: ['CRM implantado', 'Embudo de ventas definido', 'Seguimientos automáticos'],
      en: ['CRM up and running', 'Sales pipeline set up', 'Automatic follow-ups'],
      fr: ['CRM en place', 'Étapes de vente définies', 'Relances automatiques'],
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
      en: 'Technology only pays off if your team actually uses it. We train your people, document your processes and stay with you after launch.',
      fr: 'Un outil ne sert à rien si l’équipe ne l’utilise pas. Nous formons vos collaborateurs, documentons les processus et restons à vos côtés après le lancement.',
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
        'Hands-on sessions for each role (management, admin, sales)',
        'Short internal guides and videos',
        'Monthly support and a quarterly KPI review',
        'Part-time digital leadership (fractional CTO/CDO)',
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
      en: 'A self-sufficient team and an investment that finally pays off.',
      fr: 'Une équipe autonome et un investissement enfin rentable.',
    },
    deliverables: {
      es: ['Equipo autónomo', 'Guías internas', 'Revisión trimestral'],
      en: ['Self-sufficient team', 'Internal guides', 'Quarterly review'],
      fr: ['Équipe autonome', 'Guides internes', 'Revue trimestrielle'],
    },
  },
];
