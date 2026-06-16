# Five Kids One Mom — fivekidsonemom.com

Brutally honest parenting blog + reselling hub. Built with Next.js 14, TypeScript, Tailwind CSS. Deploy to Vercel.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deploy:** Vercel
- **Fonts:** Playfair Display + Inter + Space Mono (Google Fonts)

---

## Deploy to Vercel (Step by Step)

### Step 1 — Get the code on GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one
2. Click **New repository** → name it `fivekidsonemom`
3. Upload this entire folder OR use Git:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/fivekidsonemom.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **New Project**
3. Import your `fivekidsonemom` repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done. Your site is live at `fivekidsonemom.vercel.app`

### Step 3 — Add your domain

1. Buy `fivekidsonemom.com` from Namecheap, GoDaddy etc.
2. In Vercel dashboard → your project → **Settings → Domains**
3. Add your domain and follow the DNS instructions

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customisation Checklist

### Content to update
- [ ] `src/app/components/BlogPreview.tsx` — replace sample posts with your real posts
- [ ] `src/app/components/ResellingSection.tsx` — update flip items with your real flips
- [ ] `src/app/layout.tsx` — update `metadataBase` URL to your domain
- [ ] `src/app/layout.tsx` — replace `YOUR_GOOGLE_VERIFICATION_CODE` after Google Search Console setup

### Newsletter integration
The newsletter form in `src/app/components/Newsletter.tsx` is ready to wire up.
Replace the `TODO` comment with your email provider:

**Recommended (free tiers):**
- [MailerLite](https://mailerlite.com) — easiest, great free plan
- [ConvertKit](https://convertkit.com) — best for creators
- [Mailchimp](https://mailchimp.com) — most well-known

Add a `/api/subscribe` route in `src/app/api/subscribe/route.ts` using their API.

### Analytics (free)
- [Google Search Console](https://search.google.com/search-console) — track SEO performance
- [Vercel Analytics](https://vercel.com/analytics) — built in, just enable in dashboard
- [Plausible](https://plausible.io) — privacy-friendly alternative (paid)

### Monetisation setup
1. **Affiliate links** — Sign up to:
   - Amazon Associates (UK): [affiliate-program.amazon.co.uk](https://affiliate-program.amazon.co.uk)
   - Awin: [awin.com](https://awin.com) — access to ASOS, Vinted partners etc.
   - Skimlinks: automatically converts links to affiliate links
   
2. **Display ads** — Once you have traffic (500+ monthly visitors):
   - Google AdSense: [adsense.google.com](https://adsense.google.com)
   - Later upgrade to Mediavine (50k sessions/month) for much better rates

3. **Brand partnerships** — Once you have an audience, brands will pay for sponsored posts

---

## File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Nav.tsx          ← Mobile hamburger navigation
│   │   ├── Hero.tsx         ← Full-screen landing hero
│   │   ├── AboutStrip.tsx   ← Your story + values
│   │   ├── BlogPreview.tsx  ← Latest posts preview
│   │   ├── ResellingSection.tsx ← Flip diary with price reveals
│   │   ├── Newsletter.tsx   ← Email signup
│   │   └── Footer.tsx       ← Full footer with links
│   ├── blog/
│   │   └── page.tsx         ← Blog index page
│   ├── reselling/
│   │   └── page.tsx         ← Reselling guide page
│   ├── globals.css          ← Tailwind + custom styles
│   ├── layout.tsx           ← Root layout + all SEO meta tags
│   ├── page.tsx             ← Homepage
│   └── sitemap.ts           ← Auto-generated sitemap
├── public/
│   ├── robots.txt
│   └── manifest.json        ← PWA manifest
```

---

## SEO Built In

- ✅ Full Open Graph meta tags
- ✅ Twitter Card meta tags  
- ✅ Structured data (JSON-LD)
- ✅ Auto sitemap at `/sitemap.xml`
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Semantic HTML throughout
- ✅ Mobile-first responsive
- ✅ Accessible (ARIA labels, keyboard nav, skip links)

---

Built for Aypril — five kids, zero filter.
