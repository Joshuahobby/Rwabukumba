# RWABUKUMBA Moussa — Law Firm Website

> GetRwanda LTD project · Built with Next.js 14 + Tailwind CSS · Deployed on Vercel

---

## Project Overview

Professional website for **Me RWABUKUMBA Moussa**, commercial litigator and notary at Africa International Law Firm, Kigali, Rwanda.

- **GitHub repo:** https://github.com/Joshuahobby/Rwabukumba.git
- **Target domain:** rwabukumbalaw.rw (to be connected on Vercel)
- **Primary language:** English (French version planned for Phase 2)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Fonts | Playfair Display (headings) + Inter (body) via `next/font/google` |
| Language | TypeScript |
| Deployment | Vercel (auto-deploy from main branch) |
| Email | Resend via `app/api/contact/route.ts` ✅ |

---

## Project Structure

```
app/
  layout.tsx              # Root layout — fonts, metadata, Header + Footer
  page.tsx                # Home page
  globals.css             # Tailwind directives + base styles
  about/page.tsx          # About Me
  practice-areas/
    page.tsx              # Practice Areas hub (grid of 9 areas)
    [slug]/page.tsx       # Individual practice area (dynamic, static params)
  notary/page.tsx         # Notary Services
  clients-cases/page.tsx  # Clients & Cases
  contact/page.tsx        # Contact page (form + Google Maps embed)
  api/contact/route.ts    # Contact form backend — validates + sends via Resend
  sitemap.ts              # Auto-generated sitemap
  robots.ts               # robots.txt

components/
  Header.tsx              # Sticky nav — client component (mobile toggle)
  Footer.tsx              # 4-col footer with links + contact
  PageHeader.tsx          # Reusable dark page header section
  ContactCTA.tsx          # Reusable CTA strip (used on every page)
  ContactForm.tsx         # Contact form — client component, POSTs to /api/contact
  Icons.tsx               # All SVG icons inline (no external icon lib)

lib/
  practiceAreas.ts        # Data for all 9 practice areas (slug, title, content, services)

public/
  moussa.jpg              # Professional headshot (must be added manually)
```

---

## Design System

```
Colors:
  navy:       #1B2A4A  (primary brand)
  navy-dark:  #0F1D35
  navy-light: #243660
  gold:       #C09A3A  (accent)
  gold-light: #D4B050
  offwhite:   #F7F8FA  (page background)
  slate-body: #4A5568  (body text)
  slate-muted:#718096

Fonts:
  --font-playfair  →  font-serif class  (headings)
  --font-inter     →  font-sans class   (body)
```

---

## Contact Details (real values — confirmed)

```
Phone:  +250 788 673 699
Email:  moussa@rwabukumbalaw.rw   ← placeholder, confirm real email
Office: Kigali, Rwanda
Firm:   Africa International Law Firm
```

---

## What Is Complete ✅

- [x] All 6 main pages (Home, About, Practice Areas hub, Notary, Clients & Cases, Contact)
- [x] 9 individual practice area pages (static generation via `generateStaticParams`)
- [x] Responsive Header with mobile hamburger menu
- [x] Footer with nav links + contact info
- [x] ContactCTA reusable section (appears on every page)
- [x] ContactForm UI (client component with loading/success states)
- [x] All SVG icons (no external deps)
- [x] Tailwind design system (navy/gold/offwhite)
- [x] Playfair Display + Inter fonts
- [x] Per-page metadata (title, description, OG)
- [x] `sitemap.ts` + `robots.ts`
- [x] Phone number updated: +250 788 673 699
- [x] Professional photo wired up (`/moussa.jpg`) — file must be copied to `public/`
- [x] Contact form backend — `app/api/contact/route.ts` sends via Resend (validation, HTML escaping, reply-to set to enquirer). Env vars: `RESEND_API_KEY` (required), `CONTACT_EMAIL`, `CONTACT_FROM_EMAIL` — see `.env.example`
- [x] ContactForm POSTs to `/api/contact` with error state + message
- [x] Google Maps embed on `/contact` (keyless `?q=...&output=embed` URL, no API key)
- [x] Pushed to GitHub `main`; Next.js upgraded to 14.2.35 (security patch)
- [x] README.md + docs/DEPLOYMENT.md + docs/CONTENT_GUIDE.md

---

## What Still Needs Doing ⬜

### 1. Deploy to Vercel + connect domain (Priority: High)
vercel.com/new → import Joshuahobby/Rwabukumba → add env vars (`RESEND_API_KEY`, `CONTACT_EMAIL`, `CONTACT_FROM_EMAIL`) → Deploy.
Then Settings → Domains → add `rwabukumbalaw.rw`. Full guide: `docs/DEPLOYMENT.md`.

### 2. Verify sending domain in Resend (Priority: High)
Until `rwabukumbalaw.rw` is verified in Resend, the form sends from `onboarding@resend.dev`, which only delivers to the Resend account owner's email. See `docs/DEPLOYMENT.md` §1.2.

### 3. Confirm real email address (Priority: High)
Current placeholder: `moussa@rwabukumbalaw.rw`
Update in: `components/Header.tsx`, `components/Footer.tsx`, `app/contact/page.tsx`, `app/api/contact/route.ts` (CONTACT_EMAIL default), `.env.example`

### 4. French version (Priority: Low — Phase 2)
Install `next-intl`, create `messages/en.json` and `messages/fr.json`, wrap routes in `[locale]`.

---

## Local Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build check
npm run lint      # ESLint
```

---

## Key Conventions

- All components in `components/` — no barrel exports, import directly
- Data lives in `lib/practiceAreas.ts` — add/edit practice areas there
- Icons are all inline SVG in `components/Icons.tsx` — no Lucide or Heroicons dep
- Pages are server components by default; only Header and ContactForm are `"use client"`
- Tailwind classes only — no CSS modules
- `@/*` path alias maps to project root (see `tsconfig.json`)

---

## Brand Note

This website uses the **RWABUKUMBA Moussa law firm brand** (navy/gold/professional), not the GetRwanda brand. Do not apply GetRwanda's dark/maroon/cyan palette to this project.
