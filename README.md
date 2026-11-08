# ALC Consulting — site web

Site vitrine trilingue (ES / EN / FR) construit avec [Astro 5](https://astro.build), prêt à déployer sur Netlify.

**Fonctionnalités**

- 7 pages × 3 langues avec slugs traduits (`/es/servicios/`, `/en/services/`, `/fr/services/`…), balises `hreflang`, canonical, sitemap et données structurées (Schema.org).
- Détection de la langue du navigateur à la racine (`/`) via les redirections Netlify.
- **Formulaire de contact / devis** géré par Netlify Forms (anti-spam honeypot, page de remerciement par langue, pré-remplissage du service depuis la page Services).
- **Prise de rendez-vous** via Cal.com intégré en ligne sur la page Contact.
- **Diagnostic digital + calculateur ROI** interactif (sans dépendance), dont le résultat se joint automatiquement au formulaire de contact.
- Zéro framework JS côté client : HTML statique + quelques scripts vanilla. Score Lighthouse élevé par construction.

---

## 1. Installation en local

Prérequis : Node.js 20 ou supérieur.

```bash
npm install
npm run dev        # http://localhost:4321/es/
npm run build      # génère le site statique dans dist/
npm run preview    # prévisualise dist/
```

> Ce projet a été généré sans pouvoir exécuter `npm install` ni `npm run build` dans l'environnement de création. La première compilation chez toi (ou sur Netlify) fera foi : si une erreur apparaît, copie-la et on la corrige en quelques minutes.

---

## 2. Déploiement sur Netlify

### Option A — via Git (recommandé)

1. Pousse ce dossier sur un dépôt GitHub / GitLab / Bitbucket.
2. Sur [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → choisis le dépôt.
3. Netlify lit automatiquement `netlify.toml` (commande `npm run build`, dossier `dist`, Node 22). Clique **Deploy**.
4. Chaque `git push` redéploiera le site.

### Option B — via la CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Après le premier déploiement — à faire une seule fois

1. **Activer la détection des formulaires** : Site configuration → **Forms** → *Enable form detection*, puis relancer un déploiement. Sans cela, les envois du formulaire ne sont pas enregistrés.
2. **Notifications e-mail** : Forms → Form notifications → *Add notification → Email* → saisir ton adresse. Tu recevras chaque demande par e-mail.
3. **Nom de domaine** : Domain management → ajouter ton domaine, puis mettre à jour `SITE_URL` dans `astro.config.mjs` et l'URL du sitemap dans `public/robots.txt`.

---

## 3. Personnalisation — où modifier quoi

| Quoi | Fichier |
| --- | --- |
| Email, téléphone, WhatsApp, lien Cal.com, LinkedIn, données légales | `src/config.ts` |
| Domaine du site (canonical, sitemap) | `astro.config.mjs` → `SITE_URL` + `public/robots.txt` |
| Les 6 services (titres, descriptions, contenu détaillé, 3 langues) | `src/data/services.ts` |
| Textes de la page d'accueil (hero, douleurs, méthode, FAQ…) | `src/components/pages/Home.astro` (objet `copy`) |
| Textes des autres pages | `src/components/pages/*.astro` (objet `copy` en haut de chaque fichier) |
| Questions du diagnostic, valeurs par défaut du calculateur | `src/components/pages/Diagnostic.astro` |
| Navigation, pied de page | `src/i18n/routes.ts` (objet `ui`) |
| Slugs des URL par langue | `src/i18n/routes.ts` (objet `routes`) + nom des fichiers dans `src/pages/<lang>/` |
| Couleurs, typographies, boutons, cartes | `src/styles/global.css` (variables `:root`) |
| Logo | `src/components/Logo.astro` + `public/favicon.svg` |

### Cal.com

1. Crée un compte gratuit sur [cal.com](https://cal.com), crée un type d'événement « Appel découverte 30 min ».
2. Copie le lien sous la forme `ton-utilisateur/30min` dans `calLink` de `src/config.ts`.
3. Pour utiliser Calendly à la place : remplace le bloc `<div id="cal-inline">` et les deux scripts Cal dans `src/components/pages/Contact.astro` par le widget Calendly.

### Ajouter une page

1. Créer le composant dans `src/components/pages/MaPage.astro` avec un objet `copy` { es, en, fr }.
2. Ajouter la clé et les 3 slugs dans `routes` (`src/i18n/routes.ts`).
3. Créer les 3 fichiers `src/pages/es/<slug>.astro`, `en/…`, `fr/…` (4 lignes chacun, voir les existants).

---

## 4. Structure

```
├── astro.config.mjs        # config Astro + i18n + sitemap
├── netlify.toml            # build, redirections par langue, en-têtes
├── public/                 # favicon, robots.txt
└── src/
    ├── config.ts           # ← données de contact & Cal.com
    ├── data/services.ts    # ← contenu des services (3 langues)
    ├── i18n/routes.ts      # routes traduites + textes communs
    ├── layouts/Base.astro  # <head>, SEO, header, footer
    ├── styles/global.css   # design system
    ├── components/         # Header, Footer, Logo, Icon, LangSwitcher
    │   └── pages/          # une page = un composant trilingue
    └── pages/              # routes (es/, en/, fr/, index, 404)
```

---

## 5. À vérifier avant la mise en ligne

- [ ] Remplacer les coordonnées fictives dans `src/config.ts` (email, téléphone, WhatsApp).
- [ ] Remplir les données légales (raison sociale, NIF, adresse) — elles alimentent l'aviso legal et la politique de confidentialité.
- [ ] Configurer Cal.com et vérifier que le calendrier s'affiche sur `/es/contacto/`.
- [ ] Activer Netlify Forms et tester un envoi réel.
- [ ] Relire les textes relatifs à VeriFactu : les échéances légales évoluent, le site n'en cite volontairement aucune date — à ajuster si tu veux en afficher une.
- [ ] Mettre à jour `SITE_URL` avec le domaine définitif.
