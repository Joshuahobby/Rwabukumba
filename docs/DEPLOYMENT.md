# Deployment Guide

Step-by-step instructions for deploying this site to Vercel, configuring Resend for the contact form, and connecting the `rwabukumbalaw.rw` domain.

---

## 1. Set up Resend (contact form email)

The contact form (`/api/contact`) sends enquiries by email through [Resend](https://resend.com).

### 1.1 Create an account and API key

1. Sign up at [resend.com](https://resend.com) (the free tier — 100 emails/day — is more than enough for a contact form).
2. Go to **API Keys → Create API Key**. Name it something like `rwabukumba-production`.
3. Copy the key (`re_...`). It is shown only once.

### 1.2 Verify the sending domain (for production)

Without a verified domain, Resend only delivers from `onboarding@resend.dev` **to your own Resend account email** — fine for testing, not for production.

1. In Resend, go to **Domains → Add Domain** and enter `rwabukumbalaw.rw`.
2. Resend shows DNS records to add (SPF, DKIM — typically a few `TXT` and `MX` records). Add them at your DNS provider / registrar.
3. Wait for verification (usually minutes, can take up to 48h depending on DNS).
4. Once verified, set `CONTACT_FROM_EMAIL` to e.g. `contact@rwabukumbalaw.rw`.

---

## 2. Deploy to Vercel

### 2.1 First-time setup

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with the GitHub account that owns `Joshuahobby/Rwabukumba`.
2. Click **Import** next to the `Rwabukumba` repository.
3. Vercel auto-detects Next.js — leave the build settings as-is.
4. Expand **Environment Variables** and add:

   | Name | Value | Environments |
   |---|---|---|
   | `RESEND_API_KEY` | your `re_...` key | Production, Preview |
   | `CONTACT_EMAIL` | `moussa@rwabukumbalaw.rw` | Production, Preview |
   | `CONTACT_FROM_EMAIL` | `contact@rwabukumbalaw.rw` (after domain verification) | Production, Preview |

5. Click **Deploy**. The first build takes ~1 minute and you get a live `*.vercel.app` URL.

### 2.2 Ongoing deployments

- **Every push to `main` auto-deploys to production.** No manual steps.
- Pushes to other branches create **preview deployments** with unique URLs.
- To roll back: Vercel Dashboard → Project → Deployments → choose an older deployment → **Promote to Production**.

### 2.3 Changing environment variables later

Dashboard → Project → **Settings → Environment Variables**. After changing a variable, **redeploy** (Deployments → ⋯ → Redeploy) for it to take effect — env vars are baked in at build/boot time.

---

## 3. Connect the custom domain

1. In the Vercel project: **Settings → Domains → Add**.
2. Add both `rwabukumbalaw.rw` and `www.rwabukumbalaw.rw` (Vercel will offer to redirect one to the other — keeping the apex as primary is recommended).
3. Vercel displays the DNS records to configure at your registrar:
   - **Apex (`rwabukumbalaw.rw`)**: `A` record → `76.76.21.21`
   - **`www`**: `CNAME` record → `cname.vercel-dns.com`
4. Add those records at the registrar managing `rwabukumbalaw.rw` (for `.rw` domains, typically via [RICTA](https://ricta.org.rw)-accredited registrars).
5. Back in Vercel, the domain panel shows verification status. Propagation usually takes minutes to a few hours.
6. HTTPS certificates are issued and renewed automatically by Vercel — nothing to do.

---

## 4. Post-deployment checklist

- [ ] Visit the live site and click through every page (Home, About, Practice Areas + one detail page, Notary, Clients & Cases, Contact).
- [ ] Submit the contact form on `/contact` and confirm the email arrives at `CONTACT_EMAIL`.
- [ ] Reply to that email and confirm the reply goes to the address entered in the form (reply-to header).
- [ ] Check the map embed loads on `/contact`.
- [ ] Verify `https://rwabukumbalaw.rw/sitemap.xml` and `/robots.txt` respond.
- [ ] Submit the sitemap in [Google Search Console](https://search.google.com/search-console).

---

## 5. Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Form shows "Email service is not configured." | `RESEND_API_KEY` missing in Vercel | Add it in Settings → Environment Variables, then redeploy |
| Form succeeds but no email arrives | Sender domain not verified; using `onboarding@resend.dev` which only delivers to your Resend account email | Verify `rwabukumbalaw.rw` in Resend and set `CONTACT_FROM_EMAIL` |
| Form shows "Failed to send message." | Resend rejected the send (bad key, unverified sender) | Check **Vercel → Project → Logs** for the `Resend error:` line, and the Resend dashboard → Emails for delivery status |
| Domain shows "Invalid Configuration" in Vercel | DNS records not yet propagated or mistyped | Re-check the `A`/`CNAME` values at the registrar; wait for propagation |
| Build fails on Vercel but works locally | Lockfile/Node version drift | Check the build log; Vercel uses the `package-lock.json` committed to the repo |

Useful commands with the [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`):

```bash
vercel link        # link this folder to the Vercel project
vercel env pull    # download env vars into .env.local
vercel logs        # tail production function logs (see contact form errors live)
vercel --prod      # deploy to production from the CLI
```
