# PRODUCT.md

## What this is
A one-page personal site for Connla Gaffney, a freelance email copywriter and list manager. It exists to win exactly one client type: cognitive supplement (nootropics) brands stuck under $10k/month in email revenue.

## Positioning (locked, verbatim)
"I help cognitive supplement brands stuck under $10k/month in email revenue build a system that gets them past it."

## Audience
Founders and marketing leads of DTC nootropic / cognitive supplement brands. They live in Shopify and Klaviyo dashboards, judge copy fast, and are allergic to generic freelancer templates. Secondary: broader supplement / pre-workout brands (Connla's practice work covers this).

## The one action
Email connlagaffney7@gmail.com. Single CTA across the whole page; no forms, no competing buttons.

## Content truth
- Bio opens verbatim: "Hey I'm Connla, I help cognitive supplement brands stuck under $10k/month in email revenue build a system that gets them past it."
- Personal line verbatim: "Based in Northern Ireland, powered by too much coffee and a genuine obsession with figuring out why some emails print money and others get ignored."
- CTA copy verbatim: "I'm taking on one more cognitive supplement brand this month who wants to unlock consistent 5-figure email revenue. Email me at connlagaffney7@gmail.com — let's chat."
- 5 real sample emails (subject + full body, exact copy supplied by Connla). Emails 1–2 are cognitive supplement (the niche; lead position). Emails 3–5 are supplement / pre-workout practice work, labeled naturally as supplement-industry work.
- CTA link text inside sample bodies must look like normal hyperlinks (blue, underlined) but be genuinely non-clickable.
- No real testimonials yet: section ships with clearly marked placeholders, never fabricated quotes.
- Social: Instagram https://www.instagram.com/connlagaffney77/ and Facebook https://www.facebook.com/connla.gaffney.3/ only.

## Stack
Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + Framer Motion, all JSX (no TypeScript). Run with `npm run dev`; ship with `npm run build && npm start`. The page is fully static (prerendered).

## Constraints
- Fully custom code, no site builders.
- No Inter, no purple gradients, no boilerplate SaaS-template look. Reads as a premium boutique studio page.
- Sample email copy is preserved exactly as written; it is portfolio evidence, not site copy to be edited.
- Single CTA only: no second button, no forms anywhere on the page.
- Nothing may be fabricated: no invented metrics, client names, results, or testimonials. Connla has no client results yet, so the hero's floating cards carry only real subject lines and his real availability line, and the results section ships as marked-empty slots.

## History
- A first build shipped as a single static `index.html` in a pharmaceutical-dosage-pack aesthetic (cobalt bands, Archivo, hard rectangles). Connla scrapped it on 2026-07-26 as too minimal and asked for a premium, motion-rich rebuild on Next.js. That file is kept at `.archive/index.html` and is not part of the site.

## Assumptions (inferred, not confirmed)
- English (UK spelling acceptable given Northern Ireland base), no i18n.
- No analytics, no backend, no CMS.
- Not yet deployed; no custom domain configured.
