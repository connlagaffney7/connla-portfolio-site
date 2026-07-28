---
name: Connla Gaffney
description: One-page Next.js site for an email copywriter serving cognitive supplement brands, in a warm editorial light-mode glass aesthetic.
colors:
  cream: "#f7f4ee"
  cream-deep: "#efeae1"
  paper: "#ffffff"
  charcoal: "#16171b"
  charcoal-soft: "#4a4c55"
  cobalt: "#1b3fc7"
  cobalt-deep: "#142f9b"
  cobalt-soft: "#e7ecff"
  facsimile: "#0b45d0"
typography:
  display-hero:
    fontFamily: "Bricolage Grotesque, Archivo, sans-serif"
    fontSize: "clamp(1.72rem, 3.5vw, 3.3rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  display-section:
    fontFamily: "Bricolage Grotesque, Archivo, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  card-title:
    fontFamily: "Bricolage Grotesque, Archivo, sans-serif"
    fontSize: "clamp(1.15rem, 1.7vw, 1.4rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 600
    letterSpacing: "0.16em"
spacing:
  section-block: "6rem / 9rem (py-24 md:py-36)"
  container-inline: "1.5rem / 2.5rem (px-6 md:px-10)"
  container-max: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    padding: "1rem 2rem"
    borderRadius: "9999px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
---

# Design System: Connla Gaffney

## Overview

**Creative North Star: "Warm editorial glass"**

A boutique-studio landing page in permanent light mode: cream paper ground, near-black editorial display type at poster scale, and frosted glass panels that float above a barely-there gradient mesh. One cobalt does every piece of chromatic work. The page earns its premium register through depth and motion rather than imagery — there are no photographs anywhere, because the copy itself is the product being sold.

Structure is a single scrolling column of full-width sections inside a 1200px container: a split hero (copy left, layered glass cards right), an asymmetric bento of five email samples that open into a modal, an honest-empty results section, and one closing CTA panel.

**Key Characteristics:**
- One accent (cobalt #1b3fc7) carrying CTAs, labels, and headline emphasis; nothing else is chromatic
- Glassmorphism on light: translucent white over blur, with a charcoal 10% hairline border and layered soft shadows
- Massive heavy-grotesk display type (Bricolage Grotesque 800) against a quiet Archivo body
- Depth from shadow and blur, never from a dark surface; the page never inverts
- Physics-based motion: spring entrances, scroll-staggered reveals, pointer-parallax on the hero stack

## Colors

A warm editorial light palette. Cream is the ground everywhere; cobalt is the only hue.

### Primary
- **Cobalt** (#1b3fc7): The single accent. Primary button fill, section-label text, hero headline emphasis on `$10k/month`, card eyebrows on niche samples, focus rings, text selection. 7.4:1 on cream.
- **Cobalt Deep** (#142f9b): Primary button hover fill only.
- **Cobalt Soft** (#e7ecff): Tint for the glass-cobalt surface and the modal close-button hover.

### Neutral
- **Cream** (#f7f4ee): The page ground, and the base of the gradient mesh.
- **Cream Deep** (#efeae1): The glass-cream card surface and the mesh's bottom-left pool.
- **Paper** (#ffffff): The translucent base of every glass surface, and the mesh's highlights.
- **Charcoal** (#16171b): All display and primary body text. 16.3:1 on cream.
- **Charcoal Soft** (#4a4c55): Secondary copy, teasers, footer identity. 7.8:1 on cream.
- **Facsimile** (#0b45d0): Generic email-client blue, used *only* on inert spans inside sample email bodies.

### Named Rules
**The One Cobalt Rule.** Cobalt is the page's only hue. No second accent, no multi-stop colour gradient, no neon glow. The cobalt "glow" on hover is a tinted shadow, not a light effect.

**The Permanent Light Rule.** The page is light mode only and never inverts a section. Depth comes from shadow, blur, and translucency, never from a dark ground.

**The Facsimile Link Rule.** #0b45d0 underlined appears only on `<span class="facsimile-link">` inside sample email bodies, with `cursor: default`. These are portfolio evidence, not navigation, and must never be wrapped in an anchor or made clickable. Real links are cobalt and always live.

## Typography

**Display:** Bricolage Grotesque (variable, via `next/font`), weight 800
**Body:** Archivo (variable, via `next/font`), weight 400–600
**Never:** Inter

**Character:** Heavy editorial grotesk at poster scale for every heading, with tracking tightening as size grows (-0.035em on display). Body copy stays quiet and narrow-measured so the display type carries all the hierarchy.

### Hierarchy
- **Hero display** (800, clamp 1.72–3.3rem, 1.06): the locked positioning sentence, word-staggered on load, with `$10k/month` in cobalt.
- **Section display** (800, clamp 2–3.7rem, 1.04): "Emails I've written.", "Client results.", "One spot left this month." Each ends in a full stop; the closing CTA puts its final phrase in cobalt.
- **Card title** (800, clamp 1.15–1.4rem, 1.1): sample subject lines. The lead bento cell steps up to clamp 1.5–2.35rem.
- **Body** (400, 1.05rem, 1.625): all running copy, measure-capped at 46–62ch.
- **Label** (600, 0.65rem, +0.16em, uppercase): eyebrows, tags, and the "Read full email" affordance. Cobalt when it marks the cognitive-supplement niche, Charcoal Soft otherwise.

**The Measured Column Rule.** Every text block carries a ch-based max-width (46ch hero personal line, 52ch hero CTA, 54ch section intros, 62ch email bodies). Nothing runs the full 1200px container.

## Elevation & Depth

Four glass surfaces, all sharing a 1px `charcoal/10` border and the layered `--shadow-glass`:

- **`glass`** — white at 58%, blur 20px. The default card.
- **`glass-strong`** — white at 78%. Used where text density is highest: the hero back card, the modal panel, the closing CTA panel.
- **`glass-cobalt`** — a cobalt-tinted diagonal wash with a `cobalt/18` border. Reserved for the lead cognitive-supplement sample and the hero's front card.
- **`glass-cream`** — cream-deep at 72%. One bento cell, for surface variation.
- **`glass-provisional`** — white at 45% with a *dashed* `cobalt/34` border. Only the honest-empty testimonial slots.

**The Gradient Mesh Rule.** The background is a fixed, `pointer-events-none` layer of four wide radial gradients in cream, white, and cobalt-soft at low alpha. It reads as depth, never as decoration, and never competes with content. It lives on `body::before` at `z-index: -1` so it never enters the paint path of scrolling content.

**The Tinted Shadow Rule.** Shadows are never pure black. Resting shadows tint from charcoal at 4–12% alpha; lifted and cobalt shadows tint from cobalt, which is what produces the "glow" on hover.

**The Reduced Transparency Rule.** Under `prefers-reduced-transparency: reduce`, every glass surface drops its `backdrop-filter` and falls back to white at 96%.

## Shapes

Soft, consistent radii — the opposite of the previous build's hard rectangles:
- Cards and panels: `rounded-2xl` (16px), stepping to `rounded-3xl` (24px) at `md` and `rounded-[2rem]` on the closing CTA panel
- Pills and buttons: fully rounded (`rounded-full`)
- Modal panel: `rounded-3xl`

**The Soft Corner Rule.** Every surface is rounded. Buttons and small floating pills are full-radius; cards are 16–32px. No square corners anywhere.

## Motion

All motion is Framer Motion, physics-first, and every animated property is `transform`, `opacity`, or `filter` — so nothing can shift layout. Measured CLS is 0 at every breakpoint.

- **Hero arrival:** the headline animates word by word (`staggerChildren: 0.028`, `delayChildren: 0.12`), each word rising `0.55em` out of a 6px blur on a `duration: 0.75, bounce: 0.1` spring. Supporting blocks follow on the same stagger.
- **Hero stack:** three glass cards spring in (`stiffness: 120, damping: 18`) at 0.45/0.6/0.78s, then drift on infinite `easeInOut` y-loops of 7.5s, 6s, and 5.2s.
- **Pointer parallax:** the hero reads pointer position into two `useMotionValue`s; each card maps them through `useTransform` into an opposed range and smooths with `useSpring` (`stiffness: 90, damping: 20`). Never `useState` — that would re-render the tree on every pointer frame.
- **Scroll reveals:** `whileInView` with `once: true`, 30px rise, `duration: 0.85, bounce: 0.12` spring, 75ms per-item stagger within a group.
- **Card hover:** `y: -6, scale: 1.012` on a `stiffness: 320, damping: 24` spring, plus a cobalt-tinted shadow lift. Tap compresses to 0.99.
- **Button hover:** `scale: 1.03, y: -2` on a `stiffness: 380` spring; tap 0.97.
- **Modal:** enters on a weighted spring (`stiffness: 260, damping: 26`) from `scale: 0.96, y: 24`; exits fast and duration-based (180ms `easeOut`). Asymmetric on purpose.

**The Values-Not-Variants Rule.** Reduced motion is expressed by changing animated *values* (and zeroing durations), never by swapping variants or `initial` to `undefined`/`false`. Framer does not clear inline styles it has already written, so toggling variants off mid-render strands elements at `opacity: 0`. This bug shipped once and was caught in review; the rule exists to prevent it returning.

**The Reduced-Motion Floor Rule.** Under `prefers-reduced-motion: reduce` everything resolves instantly to its final visible state: headline words render plain, reveals start at opacity 1, hover and tap springs are dropped, and the hero cards stop drifting. Reduced motion never means hidden content.

## Components

### Primary Button
The page's only button, closing the page.
- Cobalt fill, white text, `rounded-full`, `px-8 py-4.5`, display font at 800
- Carries the literal mailto address as its label, with a trailing arrow
- Hover: `cobalt-deep` fill, spring lift, cobalt shadow bloom. Tap: 0.97
- The hero's email CTA is an inline underlined cobalt link, not a button, so the page keeps exactly one button

### Sample Bento Card (signature)
Five items, five cells, no empty cells. At `md`: a 6-column grid where the lead cognitive-supplement sample takes `col-span-4` and the second takes `col-span-2`, with the three pre-workout samples in a `col-span-2` row beneath. Collapses to one column below `md`.
- Each card is a `<button>` opening the modal: label, subject in display type, one-line teaser, and a "Read full email" affordance whose arrow slides 4px on group hover
- Surfaces rotate `glass-cobalt`, `glass-strong`, `glass`, `glass-cream`, `glass` so the grid is never five identical white cards

### Sample Modal
- `glass-strong` panel, max-width 720px, sticky header carrying the tag and subject plus a round close button
- Full email body at a 62ch measure, paragraphs at `space-y-4`
- Escape closes; backdrop click closes; Tab cycles within the panel; body scroll locks with scrollbar-width compensation; the close button takes focus on open

### Floating Hero Stack (signature)
Three layered glass elements over the mesh, holding only real content: two real subject lines from the portfolio, one real email opening, and Connla's real availability line.
- The back card carries deliberate `pb-14 sm:pb-16` so the front card overlaps empty padding rather than clipping a subject line mid-word
- The second subject row is `hidden sm:block` so the mobile stack does not collide

### Honest-Empty Result Slot
`glass-provisional` (dashed cobalt border), min-height 13rem, cobalt "Testimonial coming soon" label plus a Charcoal Soft explanation. Ships as content until real testimonials exist.

## Do's and Don'ts

### Do:
- **Do** keep the page in light mode with cream as the only ground.
- **Do** express reduced motion through animated values, per The Values-Not-Variants Rule.
- **Do** put the pointer-driven values through `useMotionValue`/`useSpring`, never React state.
- **Do** give every glass surface the `charcoal/10` hairline border and a tinted shadow.
- **Do** cap every text block with a ch-based max-width.
- **Do** keep the bento cell count equal to the item count.

### Don't:
- **Don't** use Inter, purple, neon glows, or multi-stop colour gradients (durable PRODUCT.md constraint).
- **Don't** add a second button anywhere; the single-CTA constraint is a product rule.
- **Don't** make facsimile links clickable, or use #0b45d0 for a real link.
- **Don't** fabricate metrics, client names, or testimonials — the floating cards and results slots carry only true content.
- **Don't** animate anything but `transform`, `opacity`, and `filter`; CLS must stay at 0.
- **Don't** run `npm audit fix --force`: the flagged `postcss`/`sharp` advisories are Next 15 transitives, and the "fix" downgrades Next to 9.3.3.
