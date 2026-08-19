# Accelance Design System

_Standalone reference — generated 2026-08-14_

# Accelance Design System

Accelance (legal name **Accelance Partners LLC**, accelance.io, Exton PA) is a global digital
transformation consultancy. Its positioning line: *"accelerating exceptional business outcomes
through hyper transformation, digitization and intelligent automation."* The current site
leads with **Agentic AI** — ERP, CRM and operations turned into "agentified systems that scale,
adapt and act" — alongside process automation (IBPM, process mining, RPA, low-code/no-code),
CRM/ERP capability work, custom software, and cloud & managed services. Signature commercial
motion: a structured discovery workshop, then a **no-cost pilot**, then scale.

## Surfaces represented here

| Surface | Status |
|---|---|
| Marketing website (accelance.io) | Recreated as a UI kit — `ui_kits/website/`; extended by the nine-screen website mockup |
| Product: Supplier Collaboration Portal | Product UI now supplied as laptop/tablet renders; still **no app kit** — marketing treatment only |
| Slide template | None supplied — no sample slides authored |

## Sources used

- **Accelance design-system skill** (`accelance-design-system`) — a prior Figma audit covering
  the DLS + Components pages, design notes, and three live pages. This is the authority for the
  colour variables, type styles, radius scale and component inventory. Values marked
  `[DECISION]` there (spacing scale, heading mapping, warning/error colours, surface-alt,
  Input, Modal, icon direction) are carried through here and re-flagged in place.
- **Live site**, read directly: `https://www.accelance.io/` and
  `https://www.accelance.io/digital-services/analytics-and-ai/`. All UI-kit copy is lifted from
  these two pages.
- **Website mockup**, nine navigable screens plus three case-study detail screens, built on this
  system and reviewed over several rounds. Where it settled a question the guide had left open —
  header behaviour, card hover borders, collapsible sections, roadmap and diagram patterns,
  metadata tag colours — that decision is recorded here in place.
- **Not available:** the Figma file itself, the site's codebase / `accelance-styles.css`, the
  custom Figma icon set, and every image and font binary. See `assets/README.md`.

---

## CONTENT FUNDAMENTALS

**Voice.** Consultative and declarative. Short sentences, active verbs, outcome first. The brand
states capability rather than selling it: *"Where AI becomes operational."* / *"Engineered
Intelligence. Not Connected Bots."* / *"Proof, not promises."*

**Person.** *We* for Accelance, *you/your* for the reader. Third-person "Accelance" appears in
body copy for authority — *"At Accelance, we design agentified systems…"* — but never in
headings, where it is either absent or the subject: *"Accelance brings Agentic AI into any
industry."* Never "I". Never "our team of experts" without saying what they do.

**Headlines.** Sentence case, not Title Case. Often two beats separated by a full stop or a line
break: *"Build smarter. Not harder."* · *"Agentic AI — Where AI becomes operational."* ·
*"Future Ready, with Accelance."* Periods inside headlines are used deliberately as rhythm.

**Kickers/eyebrows.** ALL CAPS, wide tracking, often phrased as a question:
`WHAT WE DO?` `HOW WE WORK?` `WHY US?` `WHO NEEDS AGENTIC AI?` `ARCHITECTURE`
`GET STARTED TODAY` `TRENDING`. Keep the question marks — they are the house style.

**Body copy.** 1–3 sentences per block, light weight, left-aligned. Concrete nouns from the
client's world (purchase orders, export documentation, EHRs, assembly lines, invoice
processing), not abstractions. Numbers are used as proof, not decoration:
*"reduced planning time from 10 business days to just 7 hours."*

**CTAs.** Imperative, specific, first-person-plural implied:
*Start your transformation* · *Start Your AI Transformation* · *Explore AI Use Cases* ·
*Book a no-cost pilot* · *Write to us* · *View* · *Read More*. The generic inline link across
the whole site is literally **"View"** followed by an outward arrow.

**Reassurance vocabulary.** *no-cost*, *risk-free*, *zero-risk*, *governed*, *transparent*,
*human-in-the-loop*, *enterprise-grade*. Risk-reduction is the emotional core of the copy.

**Casing & punctuation.** Em dashes for asides. Ampersands in labels (*Cloud & Managed
Services*, *Discovery & Assessment*). Numerals as `01 02 03`, zero-padded. No exclamation marks.

**Emoji: never.** Not in UI, not in copy, not in decks. Iconography carries all of that load.

---

## VISUAL FOUNDATIONS

**Colour.** Two blues do all the work: **azure-blue-400 #0f74bd** for action (buttons, links,
active nav, icon strokes) and **deep-blue-600 #062667** for gravity (dark sections, hero
gradient end, stat numerals). **vivid-green-300 #13ba2f** is the accent only — arrowheads,
bullet dots, hero accent words, positive stats — never a surface. Charcoal grey is the
whole text and border ramp: 600 headings, 500 body, 400/300 muted, 200/100 strokes. Backgrounds
alternate white ↔ `--surface-alt` #f7faff; dark sections are solid deep-blue-600. Error red
(#cd0039) is a state colour and also the filled **favourite** heart. Amber (#f4ad1d) is a state
colour, with one sanctioned marketing use: the *Complexity* tag in the use-case repository.
Those two tags are the system's only colour-coded metadata pair — **Value** #0f7a3d on #e7f7ed
with a #b7e4c8 border, **Complexity** #a15c00 on #fff4e2 with a #f7d6a3 border, both 8px radius,
12px Medium, uppercase.

**Type.** Lexend everywhere, and only three weights: Light 300 for headings and body, Medium 500
for emphasis and labels, Bold 700 for hero display. The Light-weight big heading is the brand's
most recognisable typographic move. DM Mono is reserved for 10–14px spec/annotation labels.
Inter appears only on standalone numerals — the `.stat-numeral` style (48/700/-1.5px) for figures
like *01* and *80–90%*, and the same face at 22–26px/500 inside the circled numerals of step
rails, roadmap nodes and segmented diagrams. Everything is **left-aligned**; body copy is never
centred, the sole exception being the numbered step columns of a horizontal roadmap.

**Spacing & layout.** 4/8-based scale, 4 → 96px. Major sections carry **64–136px** of vertical
padding (48/56/64/96 are the real observed values) — the whitespace is the layout. 12-column
desktop grid on a 1440px canvas, ~1224px content area, 108–192px side margins. Sections are
full-bleed bands; content is centred within them, text within content is not.

**Backgrounds.** Flat colour bands, not textures. No patterns, no grain, no noise. The only
gradients are the two brand washes: `--gradient-hero` (azure → deep blue, 135°) behind service
heroes and `--gradient-cta` (deep blue → azure → bright azure, 120°) on the CTA strip — the
"blue wave". A quiet white → #f7faff wash sits behind the home hero. Never a purple gradient.

**Imagery.** Soft-3D blue-petal renders and abstract product visuals — cool, high-key,
blue-dominant, generous white space, no drop-shadowed cutouts. Industry photography is cool and
realistic (factory floors, clinical settings), not warm or filmic. Everything is framed at
**24px radius** with `--shadow-image-frame` (0 12px 40px rgba(6,38,103,.14)). Client logos sit
flat, unframed, greyscale-neutral — partner logos are the one exception and run in **full colour**,
unframed, on white, sized to optical weight rather than a shared height.

Product UI is shown **in device**: a laptop or tablet render, cropped to the screen, never a bare
screenshot. When supplied artwork arrives on its own dark background, do not cut it out — seat it
in a deep-blue-600 panel at 24px radius so the background reads as intentional.

**Decorative wireframe art.** Thin-line geometric meshes — a wireframe sphere, a swept wave, a
radiating fan — sit in the bottom-right corner of a card, bleeding past its edge, at 1px stroke:
`rgba(255,255,255,.42)` on dark surfaces, #c2d2e4 on light. They are texture, never information;
never more than one per card, never behind body copy.

**Cards.** White surface, **16px radius**, 1px `charcoal-grey-100` border, and a single soft
elevation `0 4px 16px rgba(44,45,48,.08)` — one shadow for the whole system. On hover: shadow
deepens to `0 10px 28px rgba(44,45,48,.12)`, the card lifts **2px**, and **the border takes the
brand colour** — azure-blue-400 on light surfaces, `rgba(255,255,255,.72)` on dark. On dark
sections cards become `rgba(255,255,255,.06)` with an 18%-white border and **no shadow**.

One sanctioned light-blue variant: #eef6ff surface with a #cfe2f7 border at 24px radius, for a
set of cards that must read as one group and reveal detail on hover. In that pattern the card
front holds only a title (and its wireframe art); on hover both fade to 0 and a check-list fades
in over the same box — never a flip, never a size change.

**Gradients.** Four, and only four. `--gradient-heading` (linear 360°, #062667 → #0f74bd at 42%)
is clipped to headline text via `.t-gradient` — the first line of a hero rises out of deep blue into
azure. `--gradient-hero` washes hero backgrounds, `--gradient-cta` is the radial deep-blue → azure →
deep-blue slab behind callouts, `--gradient-tint` is the near-invisible white → #f7faff section fade.
Never invent a fifth, never gradient a body paragraph.

**Radii.** 12px buttons (not the stale 4–5px in the DLS sheet), 8px inputs, 16px cards, 24px
image frames and modals, pill for dots and tags. Nothing is fully square except section bands.

**Borders & dividers.** 1px only. `charcoal-grey-100` for quiet rules inside light surfaces,
`charcoal-grey-200` for card strokes, `rgba(255,255,255,.18)` on dark. Numbered step cards use
a 2px left rule instead of a box.

**Shadows.** Four tokens, no more: card, card-hover, image-frame, modal. No inner shadows
anywhere. No coloured glows.

**Motion.** Short and flat. 150ms for colour, 220ms for most transitions, 400ms for accordion
height, all on `cubic-bezier(.4,0,.2,1)`. Fades and small upward reveals (≈12px) only —
**no bounce, no spring, no overshoot, no parallax**. Reduced-motion collapses every duration
to zero.

**Hover states.** Solid buttons darken one ramp step (400 → 500). Outline and text buttons pick
up a `--surface-tint` fill or a darker azure. Cards lift and deepen their shadow. Nav items
turn azure. Links underline. Opacity is never used to signal hover.

**Press states.** `scale(.98)` plus the next ramp step down (azure-blue-600). No ripple.

**Focus.** A 3px `rgba(15,116,189,.28)` ring, never removed.

**Transparency & blur.** Used in exactly two places: the 6%-white card fill on dark sections,
and the modal scrim — `rgba(1,14,49,.56)` with a 4px backdrop blur. No frosted nav, no glass
panels.

**Fixed elements.** The header is a **fixed floating pill** — inset `24px` from each side, `16px`
from the top, capped at `1392px` wide and centred, `border-radius: 16px`, padded `12px 48px`
(≈64px tall). Its fill is **`--surface-tint` (azure-blue-50)** — a light blue that separates it
from the white/`--surface-alt` page beneath rather than merging into it — over a `1px` azure
hairline border (`rgba(15,116,189,.10)`) and a soft `0 2px 10px rgba(6,38,103,.06)` shadow. Logo
left, nav right, as before.

An **opaque strip in the page background colour** is fixed across the full viewport width behind
the pill (`height: 96px`, one layer below the header) so nothing scrolls through or above it,
including in the margins beside the pill. Body content is offset by the same `96px`. The header is
pinned on **every** screen and never hides, shrinks or blurs on scroll. Nothing else is fixed. No protection gradients are needed because text never sits on photography
— imagery lives beside copy, never behind it.

**Disabled.** 40% opacity, pointer-events off. No greyed re-colouring.

---

## SECTION PATTERNS

The page is a stack of full-bleed bands. These are the band types the website mockup established;
compose pages from them rather than inventing a new arrangement.

**Kicker → headline → body → content.** Every band opens the same way: ALL-CAPS kicker, a
two-colour headline (deep blue for the first beat, azure or green for the second), one or two
lines of body, then the content. Left-aligned, max ~900px on the text block.

**Dark feature band.** A 135° azure → deep-blue wash carrying white type and 6%-white cards.
Reserve it for the two or three moments per page that must land \u2014 a "why us", an architecture
claim, an implementation roadmap. Never two in a row.

**Collapsible section.** `<details>`/`<summary>` where the summary *is* the band header and an
`expand_more` caret sits at its right edge, rotating 180° on open (220ms). Default open. Use it
when several long sections would otherwise bury the page \u2014 not for a two-line answer.

**Horizontal roadmap.** A dashed rail across the band with circled icon nodes on it, labels
alternating above and below, each label a zero-padded numeral, a title in azure and one line of
muted body, hung off a dashed drop line. Node fills alternate deep blue and azure. This replaces
a grid of step cards whenever the steps are a sequence.

**Segmented ring diagram.** A conic ring split into equal segments with 4° white gaps, a white
hub carrying the section's noun, and Inter numerals seated at each segment's mid-angle on the
ring's mid-radius. Segments run the blue ramp dark → light. The matching list sits to the right,
each row a colour dot, a muted glyph and one line.

**Problem → agent rows.** Two cards per row separated by a green `arrow_forward`: the problem on
white, the answer on `--surface-alt` with an azure border, each with a tinted glyph tile, an
azure title and one muted line. Close the set with a single full-width strip \u2014 azure disc, title,
one line \u2014 naming the layer that governs them.

**Stat row.** Four Inter numerals with a muted caption each, on `--surface-alt`, no cards, no
dividers.

**Floating KPI cards.** On a case-study hero, two or three small white cards at 14px radius,
overlapping in a loose diagonal: uppercase azure label, a green figure, a thin progress rail.

**Repository grid.** Three-column cards, each with domain kicker, favourite toggle top-right,
title, the Value/Complexity tag pair, description, then maturity and industry pills. Bulk
controls (Favorites, Compare, Export, Shortcuts) sit as pill buttons on the results row, opposite
the match count. Detail opens in a Modal, not a new page.

**Placeholder screen.** For a page whose content is not ready: hero, then a dark feature band
holding a wireframe-mesh medallion, a kicker, a bold "Revealing Soon", one line of explanation \u2014
then the standard CTA and footer. Never an empty page, never a fake stub.

---

## ICONOGRAPHY

**System: Material Symbols Rounded** (Google), weight 400, optical size 24, FILL 0 — loaded from
the Google Fonts CDN in `tokens/fonts.css` and wrapped by the `Icon` component. This is what
the live site actually ships: the page source contains ligature names inline
(`arrow_outward`, `trending_up`), which is the tell for the Material Symbols font.

**Rendering.** Ligature text in an icon font, not SVG files, not PNGs. Always
`<Icon name="…" />` — never a hand-drawn `<svg>`, never a Unicode dingbat, never an emoji.

**Sizes.** 18px inside buttons, 20px in nav and inline links, 22px for a favourite toggle, 24px
default, 26–28px in tinted feature tiles, 40–44px as a card's lead glyph, 48–56px tiles for
capability traits.

**Colour.** `currentColor` by default, so an icon inherits its button or link. The green
override (`--accent-green`) applies to arrows on secondary/tertiary buttons — the brand's
"green arrow accent" — and to the check marks in a capability list. A card's lead glyph runs
deep-blue-600, never a pale grey. On dark sections icons run azure-blue-200 or white.

**The workhorse glyphs.** `arrow_outward` (every "View"/"Explore" link — the single most-used
icon on the site), `trending_up` (TRENDING kicker), `arrow_forward` / `arrow_back`
(carousels), `expand_more` (nav caret, accordion), `menu` / `close`, `check`, `send`,
`mail` / `call` / `location_on` (footer + contact), and service glyphs `smart_toy`, `hub`,
`account_tree`, `precision_manufacturing`, `dashboard_customize`, `groups`, `inventory_2`,
`code`, `cloud_done`, `psychology`, `shield`, `bolt`, `insights`. Repository controls add
`favorite` / `favorite_border` (filled runs #cd0039), `compare_arrows`, `download` and
`keyboard_command_key`; roadmap and timeline nodes use `search`, `rocket_launch`, `lightbulb`,
`smart_toy`, `shield`, `sync`.

**Illustrations are not icons.** The 3D blue-petal renders, gradient wave ornaments and curved
line flourishes are a *style reference to extend, not clone*. New illustrations should share the
palette and the soft-3D language; they do not need to match pixel for pixel.

**⚠ Flagged substitution.** The Figma audit recorded a bespoke 20-icon stroke set as the
intended standard, with Material Symbols as legacy to be migrated away from. That Figma set was
not accessible, so this system implements the live-site set instead. If the custom set should
win, send the SVGs and `Icon` will be re-pointed at them.

---

## Intentional additions

- **`Logo`** — the real wordmark as a component (`variant="mark" | "tagline"`, azure or white),
  so nothing ever re-sets the brand name in type.
- **`Illustration`** — the single image slot for renders and photography. Unfilled slots render
  a labelled striped placeholder, so a missing asset reads as missing instead of broken.
- **`Icon`** — a thin wrapper over the Material Symbols font. Not a Figma component, but every
  other component needs a single, consistent way to render a glyph.
- **`Primitives.jsx`** inside the website kit (`Section`, `SectionHead`, `ImageFrame`) —
  page-layout helpers local to the kit, deliberately *not* exported as design-system components.

Everything else maps 1:1 to a family in the Figma audit. Not built, because the source defines
no such family: Toast, Tooltip, Avatar, Switch, Radio, Checkbox, Select, Badge, Tag.

**Gaps the website mockup had to fill by hand.** `FeatureCard` takes no icon, so a kicker glyph
has to be added by the consumer. There is no metadata **Tag**, so the Value/Complexity pair is
inline-styled (colours fixed above). There is no favourite/toggle control, no segmented-ring or
timeline primitive, and `Accordion` covers a Q&A list rather than a whole collapsible band \u2014 all
four are composed from `Icon` plus layout. If these recur, promote them to components before the
next surface is built.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent Skills wrapper, for use in Claude Code.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`,
`elevation.css`, `motion.css`, `base.css`.

**`guidelines/`** — 23 specimen cards: colour ramps (azure, deep blue, charcoal, green, amber),
semantic roles, gradients, dark-section palette; type (display, headings, body, numeral, mono,
families); spacing scale, section rhythm, grid, radius, elevation, motion; brand logo,
iconography, imagery.

**`components/`**
| Group | Components |
|---|---|
| `core/` | `Logo`, `Button`, `Icon` |
| `navigation/` | `Navigation`, `NavButton`, `NavServiceButton`, `Dropdown`, `Tab` |
| `content/` | `FeatureCard`, `CaseStudyCard`, `StepCard`, `ImpactStat`, `CalloutStrip`, `Accordion`, `Illustration` |
| `forms/` | `Input` |
| `feedback/` | `Modal` |
| `layout/` | `Footer` |

Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; each directory has one `@dsCard` HTML.

**`ui_kits/website/`** — the accelance.io recreation. See its own README.

**`assets/`** — the real logo vectors (mark + tagline lockup, azure and reversed). `README.md` there records what is still remote (icons, imagery, font binaries).

---

## Production stack note

The real accelance.io is **plain HTML + Bootstrap 5.3.8 + jQuery 3.7.1**, not React. The
components here are React recreations for design work. When handing off to production, ship the
token CSS and map the type styles onto Bootstrap's utilities rather than porting these JSX
files.


---

# Token reference (CSS source)

## tokens/base.css

```css
/* Minimal element defaults so specimen cards, kits and consumer pages start on-brand. */
body{font-family:var(--font-brand);font-weight:var(--weight-light);font-size:var(--size-body);line-height:var(--lh-body);color:var(--text-body);background:var(--surface-page);-webkit-font-smoothing:antialiased;text-wrap:pretty}
a{color:var(--text-link);text-decoration:none;transition:color var(--duration-fast) var(--ease-standard)}
a:hover{color:var(--text-link-hover);text-decoration:underline}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:none;box-shadow:var(--focus-ring);border-radius:var(--radius-sm)}
::selection{background:var(--azure-blue-100);color:var(--charcoal-grey-700)}
```

## tokens/colors.css

```css
:root{
/* ── Azure Blue — primary brand ramp ───────────────────────────── */
--azure-blue-50:#e6f0ff;--azure-blue-100:#d5e4fe;--azure-blue-200:#8fbefe;--azure-blue-300:#179af8;--azure-blue-400:#0f74bd;--azure-blue-500:#075085;--azure-blue-600:#032f52;--azure-blue-700:#011224;
/* ── Deep Blue — dark accent ramp ──────────────────────────────── */
--deep-blue-50:#ecf0fe;--deep-blue-100:#d9defe;--deep-blue-200:#a5b4fc;--deep-blue-300:#6c8bfa;--deep-blue-400:#1c62ef;--deep-blue-500:#1043a8;--deep-blue-600:#062667;--deep-blue-700:#010e31;
/* ── Charcoal Grey — text + neutral ramp ───────────────────────── */
--charcoal-grey-50:#fdfeff;--charcoal-grey-100:#e2e3e4;--charcoal-grey-200:#b9bbbe;--charcoal-grey-300:#92959a;--charcoal-grey-400:#6e7075;--charcoal-grey-500:#4c4d51;--charcoal-grey-600:#2c2d30;--charcoal-grey-700:#101112;
/* ── Vivid Green — accent / success ────────────────────────────── */
--vivid-green-100:#c1ffc5;--vivid-green-200:#1be63d;--vivid-green-300:#13ba2f;--vivid-green-400:#0c8f22;--vivid-green-500:#066716;--vivid-green-600:#02410a;--vivid-green-700:#011f03;
/* ── Golden Amber — warning ────────────────────────────────────── */
--golden-amber-100:#fedcb9;--golden-amber-200:#f4ad1d;--golden-amber-300:#c98a0f;--golden-amber-400:#9b6907;--golden-amber-500:#6b4903;--golden-amber-600:#3d2a01;--golden-amber-700:#1a0f00;
/* ── Absolutes ─────────────────────────────────────────────────── */
--neutral-black:#000000;--neutral-white:#ffffff;--grey-40:#c7c7c7;
--error-red:#cd0039;

/* ── Semantic aliases — use THESE in components ────────────────── */
--brand-primary:var(--azure-blue-400);
--brand-primary-hover:var(--azure-blue-500);
--brand-primary-press:var(--azure-blue-600);
--brand-primary-subtle:var(--azure-blue-50);
--brand-dark:var(--deep-blue-600);
--brand-dark-deep:var(--deep-blue-700);
--accent-green:var(--vivid-green-300);
--accent-green-strong:var(--vivid-green-400);

--text-heading:var(--charcoal-grey-600);
--text-body:var(--charcoal-grey-500);
--text-muted:var(--charcoal-grey-400);
--text-subtle:var(--charcoal-grey-300);
--text-kicker:var(--azure-blue-400);
--text-on-dark:var(--neutral-white);
--text-on-dark-muted:rgba(255,255,255,.72);
--text-link:var(--azure-blue-400);
--text-link-hover:var(--azure-blue-500);

--surface-page:var(--neutral-white);
--surface-card:var(--neutral-white);
--surface-alt:#f7faff;
--surface-tint:var(--azure-blue-50);
--surface-dark:var(--deep-blue-600);
--surface-dark-deep:var(--deep-blue-700);

--border-default:var(--charcoal-grey-200);
--border-subtle:var(--charcoal-grey-100);
--border-strong:var(--charcoal-grey-300);
--border-brand:var(--azure-blue-400);
--border-on-dark:rgba(255,255,255,.18);

--state-success:var(--vivid-green-400);
--state-warning:var(--golden-amber-200);
--state-error:var(--error-red);
--state-info:var(--azure-blue-400);

/* Signature gradients */
--gradient-hero:linear-gradient(135deg,#0f74bd 0%,#062667 100%); /* @kind color */
--gradient-cta:radial-gradient(175.03% 122.41% at 0% -1.32%,#062667 7.83%,#0f74bd 65.63%,#062667 81.59%); /* @kind color */
/* Headline text gradient — clip to text, azure at the baseline rising out of deep blue */
--gradient-heading:linear-gradient(360deg,#062667 -3.19%,#0f74bd 42.23%); /* @kind color */
--gradient-tint:linear-gradient(180deg,#ffffff 0%,#f7faff 100%); /* @kind color */
}
```

## tokens/elevation.css

```css
:root{
--shadow-card:0 4px 16px rgba(44,45,48,.08);
--shadow-card-hover:0 10px 28px rgba(44,45,48,.12);
--shadow-image-frame:0 12px 40px rgba(6,38,103,.14);
--shadow-modal:0 24px 64px rgba(6,38,103,.24);
--shadow-nav:0 1px 0 rgba(44,45,48,.06);
--focus-ring:0 0 0 3px rgba(15,116,189,.28);
}
```

## tokens/fonts.css

```css
/* Webfonts. Lexend is the brand face (confirmed on the live site).
   DM Mono = micro spec/annotation labels. Inter = the big-numeral stat style only.
   Material Symbols Rounded = the icon font the live site actually ships.
   NOTE: served from Google Fonts CDN — no binaries were available to copy locally. */
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&family=Inter:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=block");

.material-symbols-rounded{font-family:"Material Symbols Rounded";font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased;font-variation-settings:"FILL" 0,"wght" 400,"GRAD" 0,"opsz" 24}
```

## tokens/motion.css

```css
:root{
--ease-standard:cubic-bezier(.4,0,.2,1); /* @kind other */
--ease-out:cubic-bezier(0,0,.2,1); /* @kind other */
--ease-in:cubic-bezier(.4,0,1,1); /* @kind other */
--duration-fast:150ms; /* @kind other */
--duration-base:220ms; /* @kind other */
--duration-slow:400ms; /* @kind other */
--transition-base:all var(--duration-base) var(--ease-standard); /* @kind other */
}
@media (prefers-reduced-motion:reduce){:root{
--duration-fast:0ms; /* @kind other */
--duration-base:0ms; /* @kind other */
--duration-slow:0ms; /* @kind other */
}}
```

## tokens/radius.css

```css
:root{
--radius-none:0;--radius-xs:2px;--radius-sm:4px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-2xl:24px;--radius-3xl:32px;--radius-pill:9999px;
/* Component bindings */
--radius-button:12px;
--radius-input:8px;
--radius-card:16px;
--radius-image-frame:24px;
--radius-badge:9999px;
--radius-modal:24px;
}
```

## tokens/spacing.css

```css
:root{
--space-1:4px;--space-2:8px;--space-3:12px;--space-4:16px;--space-5:24px;--space-6:32px;--space-7:48px;--space-8:64px;--space-9:96px;
/* Section rhythm — real observed values on live pages */
--section-py-sm:48px;--section-py-md:64px;--section-py-lg:96px;--section-py-xl:136px;
/* Grid */
--grid-columns-desktop:12; /* @kind other */--grid-columns-tablet:8; /* @kind other */--grid-columns-mobile:4; /* @kind other */
--grid-gutter:24px;
--canvas-width:1440px;
--container-max:1224px;
--container-narrow:1056px;
--page-margin-desktop:108px;
--page-margin-wide:192px;
--page-margin-mobile:20px;
}
```

## tokens/typography.css

```css
:root{
--font-brand:"Lexend",system-ui,-apple-system,"Segoe UI",sans-serif;
--font-mono:"DM Mono",ui-monospace,"SFMono-Regular",Menlo,monospace;
--font-numeral:"Inter",system-ui,sans-serif;
--font-icon:"Material Symbols Rounded";

--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;

/* Figma type-style scale → semantic HTML */
--size-display:76px;   --lh-display:94px;   --weight-display:700;
--size-display-2:60px; --lh-display-2:72px; --weight-display-2:700;
--size-display-3:56px; --lh-display-3:70px; --weight-display-3:500;
--size-display-5:48px; --lh-display-5:60px; --weight-display-5:300;
--size-display-6:32px; --lh-display-6:40px; --weight-display-6:300;
--size-headline:24px;  --lh-headline:36px;  --weight-headline:300;
--size-title:20px;     --lh-title:32px;     --weight-title:300;
--size-body-lg:16px;   --lh-body-lg:24px;   --weight-body-lg:500;
--size-body:16px;      --lh-body:24px;      --weight-body:300;
--size-small:14px;     --lh-small:22px;
--size-micro:12px;     --lh-micro:18px;

/* display-4 — the standalone numeral / stat style. Never a heading. */
--size-numeral:48px;--lh-numeral:56px;--weight-numeral:700;--tracking-numeral:-1.5px;

/* Kicker / eyebrow label */
--size-kicker:14px;--lh-kicker:20px;--weight-kicker:500;--tracking-kicker:.12em;
}
h1,h2,h3,h4,h5,h6{font-family:var(--font-brand);color:var(--text-heading);margin:0;text-wrap:pretty}
.h-display{font-size:var(--size-display);line-height:var(--lh-display);font-weight:var(--weight-display)}
.h-display-2{font-size:var(--size-display-2);line-height:var(--lh-display-2);font-weight:var(--weight-display-2)}
.h-display-3{font-size:var(--size-display-3);line-height:var(--lh-display-3);font-weight:var(--weight-display-3)}
.h-display-5{font-size:var(--size-display-5);line-height:var(--lh-display-5);font-weight:var(--weight-display-5)}
.h-display-6{font-size:var(--size-display-6);line-height:var(--lh-display-6);font-weight:var(--weight-display-6)}
.h-headline{font-size:var(--size-headline);line-height:var(--lh-headline);font-weight:var(--weight-headline)}
.h-title{font-size:var(--size-title);line-height:var(--lh-title);font-weight:var(--weight-title)}
.t-body-lg{font-size:var(--size-body-lg);line-height:var(--lh-body-lg);font-weight:var(--weight-body-lg);color:var(--text-body)}
.t-body{font-size:var(--size-body);line-height:var(--lh-body);font-weight:var(--weight-body);color:var(--text-body)}
.t-mono{font-family:var(--font-mono);font-size:var(--size-micro);line-height:var(--lh-micro);letter-spacing:.02em}
.stat-numeral{font-family:var(--font-numeral);font-size:var(--size-numeral);line-height:var(--lh-numeral);font-weight:var(--weight-numeral);letter-spacing:var(--tracking-numeral);color:var(--brand-dark)}
.kicker{font-family:var(--font-brand);font-size:var(--size-kicker);line-height:var(--lh-kicker);font-weight:var(--weight-kicker);letter-spacing:var(--tracking-kicker);text-transform:uppercase;color:var(--text-kicker)}
.t-gradient{background:var(--gradient-heading);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}
```
