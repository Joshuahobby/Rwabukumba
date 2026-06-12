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
| Email (TODO) | Resend via Next.js API route |

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
  contact/page.tsx        # Contact page
  sitemap.ts              # Auto-generated sitemap
  robots.ts               # robots.txt

components/
  Header.tsx              # Sticky nav — client component (mobile toggle)
  Footer.tsx              # 4-col footer with links + contact
  PageHeader.tsx          # Reusable dark page header section
  ContactCTA.tsx          # Reusable CTA strip (used on every page)
  ContactForm.tsx         # Contact form — client component (currently uses mock submit)
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

---

## What Still Needs Doing ⬜

### 1. Contact form backend (Priority: High)
The form currently simulates a submit with a timeout. Wire up a real email sender:

```bash
npm install resend
```

Create `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, company, email, phone, message } = await req.json();
  await resend.emails.send({
    from: 'website@rwabukumbalaw.rw',
    to: 'moussa@rwabukumbalaw.rw',
    subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
    html: `<p><b>Name:</b> ${name}</p><p><b>Company:</b> ${company}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Message:</b><br>${message}</p>`,
  });
  return NextResponse.json({ ok: true });
}
```

Update `components/ContactForm.tsx` to POST to `/api/contact` instead of the mock timeout.

Add to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### 2. Google Maps embed (Priority: Medium)
In `app/contact/page.tsx`, replace the placeholder div with a real iframe:
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```
Get the embed URL from Google Maps → Share → Embed a map.

### 3. Add photo to public/ (Priority: High)
Save the professional headshot to:
```
public/moussa.jpg
```
Photo is a portrait on a light gray background — used on Home page (About section) and About page.

### 4. Confirm real email address (Priority: High)
Current placeholder: `moussa@rwabukumbalaw.rw`
Update in: `components/Header.tsx`, `components/Footer.tsx`, `app/contact/page.tsx`

### 5. Deploy to Vercel (Priority: High)
```bash
git add .
git commit -m "Initial build"
git push origin main
```
Then: vercel.com/new → import Joshuahobby/Rwabukumba → Deploy.
Add `RESEND_API_KEY` in Vercel Environment Variables.

### 6. French version (Priority: Low — Phase 2)
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
