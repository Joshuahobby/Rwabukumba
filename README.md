# RWABUKUMBA Moussa — Law Firm Website

Professional website for **Me RWABUKUMBA Moussa**, commercial litigator and notary at Africa International Law Firm, Kigali, Rwanda.

- **Live site:** [rwabukumbalaw.rw](https://rwabukumbalaw.rw) *(domain connection in progress)*
- **Repository:** https://github.com/Joshuahobby/Rwabukumba
- **Hosting:** Vercel (auto-deploys from `main`)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) |
| Fonts | Playfair Display (headings) + Inter (body) via `next/font/google` |
| Email | [Resend](https://resend.com/) via Next.js API route |
| Deployment | Vercel |

No external icon or UI libraries — all SVG icons are inline in `components/Icons.tsx`.

---

## Getting Started

### Prerequisites

- Node.js 18.17+ (Node 20 LTS recommended)
- npm

### Local development

```bash
# 1. Clone and install
git clone https://github.com/Joshuahobby/Rwabukumba.git
cd Rwabukumba
npm install

# 2. Configure environment variables
cp .env.example .env.local
# then edit .env.local with your Resend API key

# 3. Run the dev server
npm run dev        # http://localhost:3000
```

### Other scripts

```bash
npm run build      # production build (run before pushing big changes)
npm run start      # serve the production build locally
npm run lint       # ESLint
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | API key from [resend.com/api-keys](https://resend.com/api-keys). Without it the contact form returns a 500. |
| `CONTACT_EMAIL` | No | Where contact form enquiries are delivered. Defaults to `moussa@rwabukumbalaw.rw`. |
| `CONTACT_FROM_EMAIL` | No | Sender address. Must belong to a domain verified in Resend. Defaults to `onboarding@resend.dev` (testing only — delivers solely to your Resend account email). |

Set these in `.env.local` for local development and in **Vercel → Project → Settings → Environment Variables** for production. Never commit `.env.local`.

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
    [slug]/page.tsx       # Individual practice area (static, generateStaticParams)
  notary/page.tsx         # Notary Services
  clients-cases/page.tsx  # Clients & Cases
  contact/page.tsx        # Contact page (form + map embed)
  api/contact/route.ts    # Contact form backend — sends email via Resend
  sitemap.ts              # Auto-generated sitemap
  robots.ts               # robots.txt

components/
  Header.tsx              # Sticky nav — client component (mobile toggle)
  Footer.tsx              # 4-col footer with links + contact
  PageHeader.tsx          # Reusable dark page header section
  ContactCTA.tsx          # Reusable CTA strip (used on every page)
  ContactForm.tsx         # Contact form — client component, POSTs to /api/contact
  Icons.tsx               # All SVG icons inline

lib/
  practiceAreas.ts        # Data for all 9 practice areas (slug, title, content, services)

public/
  moussa.jpg              # Professional headshot
```

---

## How the Contact Form Works

1. `components/ContactForm.tsx` (client component) collects name, company, email, phone, and message, then POSTs JSON to `/api/contact`.
2. `app/api/contact/route.ts` validates the payload (required fields, email format, length limits), escapes HTML, and sends the enquiry through Resend to `CONTACT_EMAIL` with the visitor's address as the reply-to header — so replies go straight back to the enquirer.
3. The form shows success or a specific error message based on the API response.

---

## Documentation

| Document | Purpose |
|---|---|
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Step-by-step Vercel deployment, Resend setup, and custom domain connection |
| [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) | How to edit site content — practice areas, contact details, photos, the map |
| [CLAUDE.md](CLAUDE.md) | Project context for AI coding assistants — conventions, design system, status |

---

## Design System (summary)

```
Colors:
  navy        #1B2A4A   primary brand
  navy-dark   #0F1D35
  navy-light  #243660
  gold        #C09A3A   accent
  gold-light  #D4B050
  offwhite    #F7F8FA   page background
  slate-body  #4A5568   body text
  slate-muted #718096

Fonts:
  font-serif  → Playfair Display  (headings)
  font-sans   → Inter             (body)
```

Defined in `tailwind.config.ts`. Use Tailwind utility classes only — no CSS modules.

---

## Deployment

Every push to `main` triggers an automatic production deployment on Vercel. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the full guide, including first-time setup, environment variables, Resend domain verification, and connecting `rwabukumbalaw.rw`.

---

## License & Ownership

© Me RWABUKUMBA Moussa / Africa International Law Firm. Built by GetRwanda LTD. All rights reserved. This repository is not licensed for reuse.
