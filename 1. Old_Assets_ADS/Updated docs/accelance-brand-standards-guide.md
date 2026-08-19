# Accelance Brand Standards Guide
### The single reference for website, PPT, Word, one-pagers, LinkedIn, and internal app UI
**Updated to align with Accelance Design System v1.1 (docx received 2026-07-18). Key v1.1 changes: primary blue now `#0052CC` (⚠️ unverified against live site — decks measured `#0052CC`), typography now Inter with Arial fallback, added dark-blue/off-white/border-gray tokens, formalized 8px spacing scale.**

**How to read this document:** Section 0 defines the tokens (colors, fonts, spacing, icons) shared by everything else. Sections 1-6 apply those tokens to each deliverable type. Two items are marked **[Pending approval]** throughout — the final typeface and the vector logo file — both currently running on a safe default. Two sections carry a **[Recommended standard — not yet validated against a real product/site]** flag: Website and Internal App UI, since neither was built from an actual screenshot of the real accelance.io site or real product software.

---

## 0. Foundation Tokens

### Colors
| Name | Hex | Use |
|---|---|---|
| Accelance Blue | `#0052CC` | Primary brand color — logos, headlines, primary buttons/actions. **[Changed in v1.1 — verify against live site; decks measured `#0052CC`]** |
| Accelance Blue Dark | `#003A8F` | Hover states, active elements *(new in v1.1)* |
| Success Green | `#1A7A4A` | Positive states, "future/tomorrow" content, agent-health category |
| Alert Orange | `#D5680B` | Business-value category, warnings |
| Compliance Teal | `#0891B5` | Compliance/secondary category |
| Body Gray | `#6B6B6B` | Body/supporting text, secondary labels |
| Light Blue Tint | `#C8D8EC` | Footer bands, callout box backgrounds, selected-state fills |
| Off-White | `#F8FAFC` | Alternate backgrounds *(new in v1.1)* |
| Border Gray | `#E2E8F0` | Dividers, input borders *(new in v1.1)* |
| White | `#FFFFFF` | Base background everywhere |

**Rule:** color is always semantic, never decorative. Once a color is assigned to a category (e.g., orange = business value), reuse it consistently — don't reassign it elsewhere in the same document/product.

**Accessibility:** Accelance Blue, Success Green, and Body Gray pass WCAG AA for normal-size text on white. Compliance Teal and Alert Orange pass AA for large text only — never use them for small body text on a white background.

### Typography **[Pending approval]**
| Role | Default | Notes |
|---|---|---|
| Heading font | Inter Bold (700) | v1.1 primary; Arial Bold is the corporate fallback |
| Body font | Inter Regular (400) | v1.1 primary; Arial is the corporate fallback |
| Alternative pairing (if approved) | Cambria Bold (headings, serif) / Calibri (body) | More distinctive, requires sign-off before use |
| Alternative pairing (if approved) | Century Schoolbook Bold (headings, serif) / Calibri (body) | Most distinctive, requires sign-off before use |

**Minimum sizes:** 16px body text on web; 11pt body text in documents/decks. Never go smaller.

### Spacing & Grid
- Standard margin: 0.5in minimum on presentation slides; 1in on Word documents; responsive equivalent on web (see Section 1)
- Spacing scale (v1.1, 8px base unit): space-1 8px · space-2 16px · space-3 24px · space-4 32px · space-5 48px · space-6 64px
- Grid: 12-column grid for new slide/web layouts

### Shape & Elevation
- Corner radius: **8px** on all cards, buttons, and content containers — this is the one universal shape rule across every deliverable
- Shadows: used sparingly — subtle, low-opacity, small blur — only to visually lift a card off a busy background (e.g., a dashboard mockup). Flat/no-shadow is the default everywhere else.
- Recurring motifs: **hub-and-spoke/radial diagrams** for "components orbiting a central idea" content (usable anywhere); **wave/curve banner dividers** — reserved for one-pagers only, never in slide decks or the website

### Icons
- **Tabler Icons** (outline style, MIT license — free for commercial use)
- Monochrome only, housed in a colored circle or flat colored tile
- Never mix icon styles or weights within one document

### Logo **[Pending approval — vector file]**
- Wordmark: "accelance" — always lowercase, never "Accelance"
- Tagline: "accelerating digital performance..."
- Current asset: interim raster crop (transparent PNG), extracted from an existing deck — a true vector file (.ai/.eps/.svg) is still needed for production-grade use
- Placement: top-right on documents/decks; top-left on web navigation (standard web convention)
- Minimum size: 100px wide (digital), 1in wide (print)
- Clear space: equal to the height of the lowercase "a" in the wordmark, on all sides
- Approved backgrounds: white (standard) or Accelance Blue (reversed/white logo, used on section dividers)
- Never: stretch, rotate, recolor outside the brand palette, or reduce opacity

### Brand Voice (applies to every deliverable's copy)
- Tone: confident, executive-level, consultative, governance-aware
- Headlines: contrarian-hook pattern — name a misconception, then reframe it (e.g., "Your ERP isn't outdated. It's just missing a brain.")
- Value props: pair a capability claim with a risk-reducer ("without rebuilding what already works")
- CTAs: confident and verb-first ("Start the no-cost pilot") — never soft or permission-seeking ("let us know if interested")
- Core narrative: augment existing systems, never position accelance as rip-and-replace
- Client confidentiality: never use real client names/logos unless explicitly approved — use anonymized role + sector attribution instead

---

## 1. Website **[Recommended standard — not yet validated against the real site]**

| Element | Standard |
|---|---|
| Navigation | Sticky horizontal bar, logo left, links center/right, one filled CTA button (Accelance Blue) far right. Hover = Accelance Blue underline fade-in. Mobile collapses to hamburger + full-screen overlay menu. |
| Hero | Homepage: full-bleed image or gradient, bold headline (Accelance Blue or white-on-image), one-line value prop, single CTA. Service pages: shorter hero with breadcrumb above. |
| Service cards | 3-4 across desktop, 2 across tablet, 1 across mobile. Icon (Tabler) in colored circle + name + 1-2 line description + text-link CTA ("Learn more →"). Hover = subtle elevation, no scale/transform. |
| Buttons | Primary: solid Accelance Blue, white text. Secondary: white fill, blue border/text. Ghost: text-only, underline on hover. All 8px radius. |
| Forms | Label above input (not placeholder-as-label). Inline on-blur validation, error text below field (not color-only). Accelance Blue focus ring. Success state replaces the form with a confirmation + next-step CTA. |
| Footer | Logo + tagline, link columns (quick links / services / contact), social icons, secondary bar with copyright (lowercase "accelance," current year) + legal links. |
| Breakpoints | Mobile <768px · Tablet 768-1024px · Desktop >1024px |
| Spacing | Section padding: 96px desktop → 64px tablet → 40px mobile |
| Pricing | No pricing table — CTA-only: "Schedule a call with our team" |
| Testimonials/case studies | Anonymized (role + sector), never named without explicit approval |
| Client logos | Placeholder block until real logos are approved for use |

### ⚠️ Proposed Alternative Dark Theme — UNVERIFIED, do not use until site is checked
An unsourced (self-admittedly guessed) dark theme was proposed specifically for the website: `#07111F` navy base, `#0B1728` secondary background, `#111F35` cards, `#243654` borders, `#F5F8FF` headline text, `#AAB7D0` muted text, `#4E7DFF` accent blue, `#7AA2FF` hover blue, `#4CD4B0` trust accent. Proposed fonts: Inter/Manrope/Sora (headings), Inter/Source Sans 3 (body). Proposed imagery: abstract digital grids, dashboards, agent-orchestration diagrams. **This entirely contradicts the light-theme table above and every confirmed artifact in this project.** Do not use any part of this until someone has actually opened accelance.io and confirmed it matches — this table exists to preserve the input, not to endorse it.

---

## 2. Brand-Aligned PowerPoint

| Element | Standard |
|---|---|
| Master layout | Logo top-right on every slide, footer "Prepared by accelance \| Confidential \| [Year]" bottom-left, page number bottom-right, confidentiality disclaimer bar — all inherited from the slide master, never manually re-added per slide |
| Title | Bold, Accelance Blue, [Heading Font], top-left |
| Confirmed slide types | Cover (plain-white or full-bleed photo) · Agenda · Section Divider · Executive Summary (stat-strip) · Current State · Before/After Comparison · Architecture Diagram · Component Grid · Roadmap/Timeline · Risk Matrix · Tech Stack · Case Study (anonymized) · Testimonial (anonymized) · Pricing (CTA-only) · Resource Plan Table · Thank-you/Closing |
| Cards | Rounded 8px, tinted background, no hard borders as default |
| Tables | Accelance Blue header row, white bold text, alternating row shading |
| Color coding | Semantic only — never cycle colors arbitrarily across a grid |
| Body text | [Body Font], minimum 11pt |

---

## 3. Word Documents

| Element | Standard |
|---|---|
| Page setup | 1in margins, Letter (A4 for international), page number bottom-right |
| Cover page | Logo top-right, document-type label (small-caps gray), bold Accelance Blue title, subtitle in Body Gray, "Prepared by accelance \| Confidential \| [Year]" block |
| Heading hierarchy | H1: 20pt bold, Accelance Blue · H2: 16pt bold, Accelance Blue · H3: 13pt bold, Body Gray · H4: 11pt bold, black · Body: 11pt regular |
| Paragraphs | Left-aligned (not justified), 1.15 line spacing, 8pt space-after |
| Callout box | Light-blue tint (`#C8D8EC`), no border, 8px radius — for risks/assumptions/key notes |
| Quotes | Left border accent in Accelance Blue, italic text, gray attribution |
| Tables | Accelance Blue header row, white bold text, alternating row shading |
| Revision history | Standard table (Version / Date / Author / Description) directly after the cover page |
| Footer | "Prepared by accelance \| Confidential \| [Year]" on every page after the cover |
| Watermark | Optional "DRAFT" or "CONFIDENTIAL," diagonal, light gray, low opacity — only when status requires it |
| Templates covered | Proposal · BRD · FRD · Solution Design · Technical Specification · Whitepaper · Meeting Minutes · Status Report |

---

## 4. One-Pagers

| Element | Standard |
|---|---|
| Header | Logo + tagline, plus one supporting visual (screenshot, photo, or relevant graphic) |
| Section dividers | Bold all-caps white-on-blue banners with a **curved/wave bottom edge** — this motif is reserved for one-pagers only |
| Benefit grid | 4-across, Tabler icon + short label, alternating tinted cell backgrounds |
| Process walkthrough | Numbered checkmark list OR vertical connected-icon timeline |
| Service table | Simple 2-column (Service / Description), alternating row shading |
| Differentiator box | Bordered "Why Choose accelance" callout, visually separated from the main flow |
| Partner logos | Horizontal strip — confirmed partners only: Microsoft, SAP, UiPath, OutSystems, Salesforce |
| Footer | Full-width contact bar — website / email / phone icons |

---

## 5. LinkedIn Posts (10 standard templates)

**Shared visual style:** bold blue/green headline treatment, diamond bullet accent, "accelance.io" wordmark bottom-left, logo bottom-right, white background.

| # | Template | Structure |
|---|---|---|
| 1 | Contrarian hook / myth-bust | "[Belief] isn't [X]. It's just missing [Y]." |
| 2 | Maturity shift framework | THEN / NOW / NEXT three-stage progression + one key-insight callout |
| 3 | Problem → outcome with proof points | Hook line + Problem/Approach/Outcome + 3 stat callouts |
| 4 | Layered concept diagram | 3-layer stack graphic (e.g., Data → System → Agentic Layer) |
| 5 | Anonymized proof point | One quantified result, generic client reference, no name |
| 6 | Thought-leadership question | Provocative question headline, 2-3 lines, open-ended close |
| 7 | Framework/methodology spotlight | Visualize one proprietary accelance framework |
| 8 | Service/capability spotlight | Single service + 3-4 benefit icons + one CTA line |
| 9 | Event/webinar announcement | Date/time-forward, headline, 2-line description, CTA |
| 10 | Direct offer / pilot CTA | Offer + risk-reducer line + one verb-first CTA |

Every template pairs with a short (2-4 paragraph) editable caption starter ending in the established CTA voice.

---

## 6. Internal Application UI **[Recommended standard — not yet validated against real product screens]**

| Element | Standard |
|---|---|
| Top bar | Logo mark only (not full wordmark) + app name + user menu, Accelance Blue accent line at bottom edge |
| Sidebar | Icon + label list; active item = left Accelance Blue bar + light-blue tint background |
| Buttons/forms/tables | Identical to the website system (Section 1) — one system, not a separate one for internal tools |
| Cards | White, 8px radius, 0.5px border; shadow only when lifting off busy content |
| Dialogs | Centered, one primary + one secondary action |
| Notifications | Role-colored left border (green/amber/red), icon, white background |
| Progress | Numbered-circle badges for multi-step flows; linear bar for simple determinate progress |
| Empty/error/success states | "Invitation not apology" tone for empty states; state what happened + what to do next for errors; brief, non-celebratory confirmation for success |
| AI-specific components | Every AI-proposed action renders as a distinct confirmation card requiring explicit approval — never silent auto-execution. Agent status uses the three-tier color system: green = autonomous, amber = human-review-required, red = mandatory approval. This ties directly to accelance's governance positioning and is not optional styling. |

---

## Quick-Reference Summary Card

- **Colors:** `#0052CC` blue · `#1A7A4A` green · `#D5680B` orange · `#0891B5` teal · `#6B6B6B` gray · `#C8D8EC` tint
- **Fonts:** Arial Bold (heading) / Arial (body) — pending final approval
- **Corner radius:** 8px, universal
- **Icons:** Tabler, outline, monochrome
- **Logo:** lowercase "accelance," vector file pending
- **Voice:** confident, contrarian-hook, verb-first CTAs, augment-don't-replace narrative
- **Confidentiality:** anonymize all client references by default
