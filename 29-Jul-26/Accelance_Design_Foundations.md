# Accelance Design Foundations — v1.0
*Phase 1 deliverable. Source of truth: Figma reference stack, cross-verified by pixel-sampling the live website and the logo master file. Every value below is either (a) OCR/pixel-verified from source files, or (b) explicitly marked as a proposal awaiting your confirmation.*

---

## 1. Color Tokens

### 1.1 The core resolution
Your logo file and your live website colors are **exact, verified matches** to named swatches already in the Figma stack:

- Logo blue (`#0F74BD`) = **Azure Blue 400** — confirmed by direct pixel sampling of `accelance_logo.png` (1976 matching pixels) and OCR of the Figma swatch label.
- Website headline green (`#13BA2F`) = **Vivid Green 300** — same verification method.

**Ruling:** Figma is the accurate source of truth. The PPTX capability deck (`#1A6FC4`) and the LinkedIn Template Library spec (`#34B77E`) have drifted from it and should be **migrated to match Figma**, not the other way around. This is now a resolved fact, not an open question.

### 1.2 Primary — Azure Blue (brand blue)
| Token | Hex | Verification |
|---|---|---|
| `azure-blue-700` | `#011224` | pixel-sampled |
| `azure-blue-600` | `#032F52` | pixel-sampled |
| `azure-blue-500` | `#075085` | pixel-sampled |
| **`azure-blue-400`** | **`#0F74BD`** | **OCR + pixel confirmed — logo & primary CTA color** |
| `azure-blue-300` | `#179AF8` | OCR confirmed |
| `azure-blue-200` | `#8FBEFE` | pixel-sampled, medium confidence |
| `azure-blue-100` | `#D5E4FE` | pixel-sampled, medium confidence |
| `azure-blue-50` | `#ECF0FE` | pixel-sampled, medium confidence |

### 1.3 Deep Blue (navy — headings, dark emphasis)
| Token | Hex |
|---|---|
| `deep-blue-700` | `#010E31` |
| `deep-blue-600` | `#062667` |
| `deep-blue-500` | `#1043A8` |
| `deep-blue-400` | `#1C62EF` |
| `deep-blue-300` | `#6C8BFA` |
| `deep-blue-200` | `#A5B4FC` |
| `deep-blue-100` | `#D9DEFE` |
| `deep-blue-50` | `#ECF0FE` |

*(All 16 blues OCR- or pixel-verified from `Colors.pdf`.)*

### 1.4 Secondary — Vivid Green (accent / positive)
| Token | Hex |
|---|---|
| `vivid-green-700` | `#011F03` |
| `vivid-green-600` | `#02410A` |
| `vivid-green-500` | `#066716` |
| `vivid-green-400` | `#0C8F22` |
| **`vivid-green-300`** | **`#13BA2F`** — **confirmed live-site match** |
| `vivid-green-200` | `#1BE63D` |
| `vivid-green-100` | `#C1FFC5` |

### 1.5 Tertiary — Golden Amber (illustration accent)
| Token | Hex |
|---|---|
| `amber-700` | `#1A0F00` |
| `amber-600` | `#3E2902` |
| `amber-500` | `#674706` |
| `amber-400` | `#93670D` |
| `amber-300` | `#C28915` |
| `amber-200` | `#F4AD1D` |
| `amber-100` | `#FEDCB9` |

### 1.6 Neutrals — Charcoal Grey
| Token | Hex | Cross-check |
|---|---|---|
| `charcoal-700` | `#101112` | — |
| `charcoal-600` | `#2C2D30` | ≈ PPTX primary text `#2B2B2B` (near-identical) |
| `charcoal-500` | `#4C4D51` | — |
| `charcoal-400` | `#6E7075` | ≈ PPTX secondary text `#6E6E6E` (near-identical) |
| `charcoal-300` | `#92959A` | — |
| `charcoal-200` | `#B9BBBE` | — |
| `charcoal-100` | `#E2E3E4` | — |
| `charcoal-50` | `#FDFEFF` | — |
| `black` | `#000000` | |
| `white` | `#FFFFFF` | |

### 1.7 Semantic tokens (proposed, mapping existing PPTX usage onto the Figma ramp)
The PPTX deck already uses color semantically (green=positive, red=negative, orange=caution). None of those three has a corresponding swatch in the Figma "Primary/Secondary/Tertiary" stack you've shared — red and orange-as-warning aren't present. **This is a real gap**: I'm proposing these rather than asserting them.

| Semantic role | Token | Hex | Status |
|---|---|---|---|
| Positive / success | `color-success` | `vivid-green-400` `#0C8F22` | proposed — nearest Figma-native green to PPTX's `#1A7A4A` |
| Caution / warning | `color-warning` | `amber-300` `#C28915` | proposed — Figma has no orange ramp; nearest is Golden Amber |
| Negative / risk | `color-danger` | *(none in Figma stack)* | **gap — Figma has no red/rust ramp at all.** PPTX uses `#C0442A`. Please confirm whether a red ramp exists elsewhere or should be created. |

---

## 2. Typography Tokens

**Font:** Lexend (confirmed as-is from Figma — treated as source of truth per your instruction). Arial remains the approved substitute for PowerPoint/Word contexts where Lexend isn't embedded/licensed.

*Note: the source Figma table's own column headers are swapped (the "SIZE" column holds the weight name, and the "WEIGHT" column holds the pixel size) — I've relabeled correctly below rather than propagating the error.*

| Style | Use case | Weight | Desktop size / line-height | Mobile size / line-height |
|---|---|---|---|---|
| Display 1 | Landing page hero text | Bold | 76 / 94 | 32 / 48 |
| Display 2 | Service page landing text | Bold | 60 / 72 | 28 / 36 |
| Heading 1 | Value proposition within a section | Medium | 56 / 70 | 28 / 36 |
| Heading 2 | Important boxes & CTA boxes | Light | 48 / 60 | 24 / 32 |
| Heading 3 | Multiple headings in one box | Light | 32 / 40 | 20 / 28 |
| Section Heading | Explaining section/box content | Light | 20 / 32 | 16 / 24 |
| Sub Section Heading | Sub-section within a box | Light | 12 / 20 | 12 / 20 |
| Tab Text | Tab labels, attention headings | Light | 24 / 36 | 16 / 24 |
| Body 1 | Default paragraph after Display text | Light | 20 / 32 | 16 / 24 |
| Body 2 | Default paragraph after Heading 3 | Light | 16 / 24 | 12 / 20 |
| Body 3 | Highlighted/important body text | Medium | 16 / 24 | 12 / 20 |
| Button 1 | Main CTAs | Light | 20 / 32 | 20 / 32 |
| Button 2 | Secondary CTAs | Medium | 16 / 24 | 10 / 16 |

---

## 3. Spacing Tokens
*(Source: your latest, clearer `Spacing.png` export — confirmed.)*

| Token | Use case | Desktop | Tablet | Mobile |
|---|---|---|---|---|
| `space-1` | Main sectional spacing | 64 | — | 32 |
| `space-2` | Section elements spacing | 48 | — | 24 |
| `space-3` | Sub-section elements spacing | 32 | — | 16 |
| `space-4` | Heading & paragraph spacing | 24 | — | 12 |
| `space-5` | Paragraph spacing | 16 | — | 8 |
| `space-6` | Other small spacing | 8 | — | 4 |

**Gap flagged, not filled:** Tablet is "—" (undefined) for every row in your source file. I have not invented tablet values — recommend either interpolating between desktop/mobile or confirming tablet uses the same rules as mobile.

### Padding (cards/tiles)
| Token | Use case | Desktop | Mobile |
|---|---|---|---|
| Pad 1 | Section | 64 | 32 |
| Pad 2 | Box | 48 | 24 |
| Pad 3 | Tiles | 32 | 16 |
| Pad 3 (cards)* | Cards | 24 | 12 |

*Source file labels both the tile and card row "Pad 3" with different values — likely a naming typo in the original (card padding should probably be its own token, e.g. `Pad 4`). Flagging rather than silently renumbering — confirm before this goes into a component library.

### Grid
| Breakpoint | Columns | Margin | Gutter |
|---|---|---|---|
| Desktop | 12 | 48px | 8px |
| Tablet | 8 | 32px | 8px |
| Mobile | 4 | 32px | 8px |

*Note: the source diagram shows two different numbers both labeled "Gutter" per breakpoint (e.g., desktop shows both 48px and 8px). I've interpreted the larger number as margin (confirmed twice, once per edge) and 8px — the value that repeats identically across all three breakpoints — as the true column gutter. This is a reasonable read, not a certainty; flag if wrong.*

---

## 4. Logo & Identity

- **Master asset:** `accelance_logo.png` — wordmark only, transparent background, `#0F74BD` (Azure Blue 400).
- **Tagline retirement — confirmed and binding:** "accelerating digital performance…" is removed from all future assets, including the still-live website footer. Treat any asset still carrying it as legacy/to-be-updated, not as a pattern to repeat.
- **The diamond/rhombus "layered" mark is *not* an official brand submark** — confirmed by you. What *is* official is the **blue → green gradient treatment** it uses. This gradient is now documented as a first-class brand device (see below), independent of any specific shape.
- **Open, still unconfirmed:** clear-space and minimum-size rules (no source provided); reversed/white lockup for dark backgrounds (no live example exists yet, so none is assumed).

### 4.1 The blue → green gradient — now a formal token
Appears in: the LinkedIn "layered ERP" post, the LinkedIn Template Library's signature keyline (all Turn-3 templates), and the AI-image prompts baked into the template spec itself. Formalizing:

```
gradient-brand: linear-gradient(135deg, azure-blue-400 #0F74BD 0%, vivid-green-300 #13BA2F 100%)
```
*(Angle is a reasonable default matching observed examples — confirm/adjust once applied to a real component.)*

---

## 5. Shadows & Corner Radius
*(Per your instruction: treated as final, despite the source filename saying "work in progress.")*

| Token | Use case | Position | Blur | Spread | Color |
|---|---|---|---|---|---|
| `shadow-box` (desktop) | All boxes, small or large | X0 Y4 | 4 | 0 | `#000000` @ 25% |
| `shadow-box` (mobile) | Same | X0 Y2 | 2 | 0 | `#000000` @ 25% |
| `shadow-sectional` | Sections that slide over each other | X-5 Y-1 | 15 | 0 | `#000000` @ 25% |

| Token | Use case | Desktop | Mobile |
|---|---|---|---|
| `radius-box` (CR1) | Corner radius for boxes | 24 | 16 |
| `radius-button` (CR2) | Corner radius for buttons | 12 | 8 |

---

## 6. Icons — unresolved, no source available
You've confirmed there's no existing icon source. Three different icon languages currently exist across your assets (PPTX line icons, the process-mining flyer's icon set, the Company Intro one-pager's icon set) with nothing unifying them.

**Recommendation (proposal, not a decision I'm making for you):** adopt a single existing open icon library as the base rather than commissioning custom icons — it's the fastest way to get instant consistency, and it can always be restyled (stroke weight, corner treatment) to feel bespoke. Given the existing visual language (thin stroke, rounded caps, circular containers, occasional gradient fill for accents), a library like **Lucide** or **Phosphor** (regular weight) would slot in with minimal rework. Happy to prototype a small icon set against real Accelance content once you confirm a direction.

---

## 7. Content Voice — confirmed
Codifying the existing voice as-is (per your confirmation): direct, plain-spoken, confident without jargon. Signature patterns already in use worth preserving as house style:
- Short, declarative contrast statements ("Your ERP isn't outdated. It's just missing a brain.")
- Naming the objection before the client raises it ("no rip-and-replace," "without rebuilding what already works")
- Numbers as proof, not decoration (2–5x, 80–95%, 3–10x pattern)

---

## 8. Still open before deeper builds (PPTX master, web components, etc.)
1. Red/danger color — no ramp exists in the Figma stack; PPTX invented `#C0442A` alone.
2. Tablet spacing values — undefined in source.
3. Grid gutter labeling ambiguity (see §3) — my interpretation, not a confirmed fact.
4. Icon library direction (§6).
5. Logo clear-space/minimum size, and reversed/dark-background lockup.
