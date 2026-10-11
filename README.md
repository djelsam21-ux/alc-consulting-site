# ALC Consulting — Next.js

Next.js 15 (App Router) + Tailwind CSS v4 port of the ALC Consulting landing page.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `app/` — layout (fonts via `next/font`, metadata), page, global styles & theme tokens
- `components/SiteShell.tsx` — Lenis smooth scroll, anchor handling, grain overlay
- `components/ThreadLine.tsx` — the scroll-drawn gold “A → C” thread
- `components/Motion.tsx` — `Reveal`, `MaskLines`, `CountUp` (client animation primitives)
- `components/sections/*` — Hero, Results, Expertise, Method, About, Contact, Footer
- `lib/content.ts` — shared colours, nav and mandate phases
- `public/images/` — photography (served through `next/image`)

The contact form (`components/sections/BriefForm.tsx`) only shows a confirmation state —
wire it to a Route Handler or Server Action to actually send briefs.
