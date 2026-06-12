# Content Guide

How to edit the site's content. Every change pushed to `main` deploys automatically — no server work needed.

---

## Contact details (phone, email, office)

The contact details appear in three places. When anything changes, update all three:

| Location | File |
|---|---|
| Header | `components/Header.tsx` |
| Footer | `components/Footer.tsx` |
| Contact page sidebar | `app/contact/page.tsx` (the `contactDetails` array) |

Also update the email defaults if the firm's address changes:

- `app/api/contact/route.ts` — fallback value of `CONTACT_EMAIL`
- `.env.example` — documented default
- Vercel environment variable `CONTACT_EMAIL` (Settings → Environment Variables)

---

## Practice areas

All nine practice areas live in a single data file: **`lib/practiceAreas.ts`**.

Each entry looks like:

```ts
{
  slug: "commercial-litigation",        // URL: /practice-areas/commercial-litigation
  title: "Commercial & Corporate Litigation",
  shortTitle: "Commercial Litigation",  // used in cards/nav
  excerpt: "One-sentence summary shown on the hub page.",
  iconKey: "briefcase",                 // must match an icon in components/Icons.tsx
  overview: "Longer paragraph shown at the top of the detail page.",
  services: [
    "Bullet point one",
    "Bullet point two",
  ],
  clientTypes: "Who this service is for.",
}
```

- **To edit** an area: change the text in its entry.
- **To add** an area: append a new entry with a unique `slug`. The hub page grid and the detail page are generated automatically — no new page files needed.
- **To remove** an area: delete its entry. (Check `components/Footer.tsx` in case it links to that slug.)

After changing slugs, run `npm run build` locally to confirm static generation still passes.

---

## Photos

- The professional headshot is `public/moussa.jpg`, referenced as `/moussa.jpg` on the Home and About pages.
- To replace it, overwrite the file with a new image of the same name (portrait orientation, light background works best with the design).
- Additional images go in `public/` and are referenced by their root path, e.g. `public/office.jpg` → `/office.jpg`.

---

## The map on the Contact page

The map is an iframe in `app/contact/page.tsx` pointing at:

```
https://www.google.com/maps?q=Africa+International+Law+Firm,+Kigali,+Rwanda&output=embed
```

If the office moves, change the `q=` query to the new address or place name (spaces become `+`). No API key is required for this embed format.

---

## Contact form fields and copy

- **Form fields, labels, placeholder text, success/error messages:** `components/ContactForm.tsx`
- **Server-side validation (required fields, length limits):** `app/api/contact/route.ts` — keep the two in sync if you add or remove a field. A new field must be: added to the form state, rendered as an input, read and validated in the route, and included in the email HTML.
- **Email subject and body layout:** the `html` template in `app/api/contact/route.ts`.

---

## Page copy and SEO metadata

Each page exports a `metadata` object at the top of its `page.tsx`:

```ts
export const metadata: Metadata = {
  title: "Contact",          // becomes "Contact | <site title>" via the root template
  description: "Shown in search results — keep under ~160 characters.",
};
```

- Site-wide title template and default description: `app/layout.tsx`
- Page body copy: edit the JSX in the relevant `app/<page>/page.tsx`
- Reusable page headers (the dark banner with breadcrumb): props passed to `<PageHeader />` on each page

The sitemap (`app/sitemap.ts`) and robots file (`app/robots.ts`) update automatically — only touch them if you add a brand-new top-level page.

---

## Design tokens

Colors and fonts are defined in `tailwind.config.ts`. The brand palette is navy (`#1B2A4A`) + gold (`#C09A3A`) — see the Design System section in the [README](../README.md). Use existing Tailwind classes (`text-navy`, `bg-gold`, `font-serif`, etc.) rather than hard-coding hex values in components.

---

## Checklist before pushing content changes

1. `npm run dev` — view the change at http://localhost:3000
2. `npm run build` — confirm the production build passes
3. Commit and push to `main` — Vercel deploys automatically
4. Spot-check the live page after ~1 minute
