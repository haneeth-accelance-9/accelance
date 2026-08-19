# Accelance Dark Theme Guidelines — v1.0
*Companion to `Accelance_Design_Foundations.md` and `accelance-tokens.css`. Distilled from the working dark-theme build (`accelance-saas-aftermarket-dark.html`) so the same pattern can be reused on any future brand asset.*

---

## 0. Status — read this first

`accelance-tokens.css` and `Accelance_Design_Foundations.md` are **light-theme only**. There is no official dark palette, no confirmed dark logo lockup, and no dark-mode ruling from Figma. Nothing in this document is a new brand color — every value below is one already defined in `accelance-tokens.css`, just re-pointed. Treat this file as an **engineering pattern**, not a design-system amendment. If Accelance ever publishes an official dark palette or a reversed logo lockup, that supersedes everything here.

**The one hard rule:** never introduce a hex value that isn't already in `accelance-tokens.css`. Dark theme = remapping existing tokens onto dark surfaces, not inventing new ones.

---

## 1. The core technique: remap semantic tokens, don't hand-edit components

`accelance-tokens.css` already separates raw color ramps (`--accelance-azure-400`, `--accelance-deepblue-700`, etc.) from **semantic** tokens (`--accelance-text-primary`, `--accelance-surface`, `--accelance-border`). Light and dark themes should differ only in what the semantic tokens point to — component CSS should never reference a raw ramp value directly if a semantic token exists for that purpose.

| Semantic token | Light theme value | Dark theme value | Ramp used |
|---|---|---|---|
| `--accelance-surface` (page background) | `--accelance-white` | `--accelance-deepblue-700` | Deep Blue (darkest) |
| `--accelance-surface-alt` (elevated cards/panels) | `--accelance-azure-50` | `--accelance-deepblue-600` | Deep Blue (one step up) |
| `--accelance-border` | `--accelance-charcoal-100` | `rgba(255,255,255,0.16)` | white @ 16% — see §4 |
| `--accelance-text-primary` | `--accelance-charcoal-600` | `--accelance-white` | White |
| `--accelance-text-secondary` | `--accelance-charcoal-400` | `--accelance-azure-100` | Azure (lightest) |

This is the entire theme switch. Everything else in this document is applying those five remapped tokens consistently, plus a handful of components that need an explicit override because they use a hardcoded value instead of a token (flagged in §3).

---

## 2. Implementation pattern (CSS)

Define the dark override as a **second `:root` block plus component overrides, placed at the very end of the stylesheet** — after every other rule, not near the top. This is a hard-won lesson from the first build: an early build inserted the dark block immediately after the main token `:root`, and later component rules (defined further down the same stylesheet) then out-cascaded it at equal specificity, silently reverting things like the blog card back to a white background. Ordering, not specificity, was the bug.

```css
/* Base stylesheet: :root tokens, then every component rule (light theme, as-authored) */

/* ... all component CSS here ... */

/* =========================================================
   DARK THEME OVERRIDE — must be the LAST block in the file
   ========================================================= */
:root {
  --accelance-surface: var(--accelance-deepblue-700);
  --accelance-surface-alt: var(--accelance-deepblue-600);
  --accelance-border: rgba(255,255,255,0.16);
  --accelance-text-primary: var(--accelance-white);
  --accelance-text-secondary: var(--accelance-azure-100);
}
body { background: var(--accelance-surface); }
/* + one line per component that hardcodes a color instead of a token — see §3 */
```

If you're building a new asset from scratch rather than retrofitting one, just author component CSS against the five semantic tokens from the start and you won't need most of §3 — the override block will be almost empty.

---

## 3. Component-level overrides actually used in the reference build

These are the lines that were necessary in `accelance-saas-aftermarket-dark.html` because the underlying component CSS referenced a raw value (usually `--accelance-white` or a specific ramp step) rather than a semantic token. Reuse directly if the new asset shares these components; otherwise use them as a template for the same category of component.

**Surfaces (cards, panels, dropdowns)** — one step up from the page background, i.e. `--accelance-surface-alt` (`deepblue-600`):
```css
.cart-dropdown, .filter-row, .family-tile, .blog-card, .modal-card, .site-footer { background: var(--accelance-deepblue-600); }
```

**Header stays at the page-background depth**, not the elevated surface — it reads as part of the page, not a floating panel:
```css
.site-header { background: var(--accelance-deepblue-700); border-bottom-color: var(--accelance-border); }
```

**Text hierarchy** — headings/values in `--accelance-white`, supporting copy in `--accelance-azure-100`, muted/disabled copy in `--accelance-azure-200` or `-300`:
```css
.fam-name, .footer-col h4, .blog-card h3, #modalNotes { color: var(--accelance-white); }
.fam-count, .footer-col a, .blog-card p, .modal-body .section-heading, .cart-item-info .meta { color: var(--accelance-azure-100); }
.search-bar input::placeholder, .filter-field select:disabled { color: var(--accelance-azure-200); }
```

**Interactive accents keep the brand hues, just lightened one or two steps** so they hold contrast on a dark surface — `azure-400` → `azure-200/300`, `green-300` stays but pairs with `green-100/200` for hover states:
```css
.btn-ghost { color: var(--accelance-azure-200); border-color: var(--accelance-azure-300); }
.footer-col a:hover, .blog-card .blog-read, .family-row:hover .fr-name { color: var(--accelance-green-200); }
```

**Tags/badges** — same hue, translated to a low-opacity fill instead of the light theme's tint-50/100 background, so they read as "on dark glass" rather than a solid light chip:
```css
.tag { background: rgba(15,116,189,0.28); color: var(--accelance-azure-100); border-color: rgba(143,190,254,0.4); }
.tag-family { background: rgba(19,186,47,0.2); color: var(--accelance-green-100); border-color: rgba(19,186,47,0.45); }
```

**Borders** — never a flat neutral hex in dark mode; use white at low opacity so it self-adjusts against whatever surface it sits on:
```css
--accelance-border: rgba(255,255,255,0.16);
```

**Shadows** — the token file's `--accelance-shadow-box` (`rgba(0,0,0,0.25)`) barely reads on a dark surface. Where a shadow is load-bearing for hierarchy (hover states, dropdowns), deepen it rather than inventing a new token:
```css
.cart-dropdown { box-shadow: 0 12px 32px rgba(0,0,0,0.45); }
.family-tile:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
```

---

## 4. What to deliberately leave flat

Not every section should get a different shade just because it's technically "a section." The first dark build gave the hero and the stats strip their own slightly-lighter background bands (`deepblue-600` / `deepblue-500`), and on review this read as banding/seams rather than intentional hierarchy — it was reverted back to the flat page `--accelance-surface` for both. **Default to one flat background color for primary page flow; only step up to `--accelance-surface-alt` for things that are genuinely a distinct surface** — a card, a dropdown, a modal, something with a visible edge/shadow of its own. If it's not a raised element, don't give it its own background.

---

## 5. Known gaps — do not paper over these

Carried straight from `Accelance_Design_Foundations.md` §8, still unresolved and still relevant in dark mode:

1. **No danger/red ramp exists anywhere in the source tokens**, light or dark. Do not invent one for error states in a dark asset — flag it back to Accelance the same way the light theme doc does.
2. **No official reversed/white logo lockup exists.** The reference build uses a CSS filter (`brightness(0) invert(1)`) on the existing `accelance_logo.png` as a stand-in — this produces a flat white silhouette, which is a reasonable placeholder but not a designed asset (no verified clear-space, weight, or spacing adjustments for reversed use). Replace with an official lockup the moment one exists; don't treat the inverted filter as permanent.
3. **Gradient brand device** (`azure-400 → green-300`, 135°) still confirmed only as a light-background treatment. On dark, the reference build applies it as a text-clip on the hero headline (`azure-300 → green-300`, lightened one step so it doesn't muddy against the dark surface) — treat that one-step lightening as a pattern for gradients-on-dark generally, not just headlines.

---

## 6. Quick checklist for a new dark asset

1. Pull `accelance-tokens.css` verbatim — don't hand-copy hex values.
2. Author every component against the five semantic tokens in §1, not raw ramp steps.
3. Put the dark `:root` override **last** in the stylesheet, after all component CSS.
4. Elevated surfaces → `--accelance-surface-alt`. Everything else → `--accelance-surface`. Don't band sections that aren't genuinely raised.
5. Borders → white at low opacity, not a neutral hex.
6. Any brand accent color gets lightened one ramp step for text/icon use on dark; fills/tags become low-opacity versions of the same hue rather than solid tints.
7. Check the three known gaps in §5 before shipping — don't quietly invent a red or a reversed logo to fill them.
