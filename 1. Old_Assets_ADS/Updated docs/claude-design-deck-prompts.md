# Claude Design Handoff — Deck Generation Prompts
### Source of truth: accelance-design-system-v1.0.md + accelance-brand-template-reference.md

**How to use this file:** Paste the "Context Prompt" once at the start of a Claude Design session (or attach the two source .md files directly, if the tool supports file context — that's more reliable than a pasted summary). Then use each "Slide Generation Prompt" individually, in order, to build the deck slide by slide. Do not skip the Context Prompt — the slide prompts assume it's already loaded.

**Typography note (read before using):** Every prompt below references `[Heading Font]` / `[Body Font]` as variables, not hardcoded values. Per the design system, the current default is **Arial Bold / Arial** (Option A — safe, matches existing decks). If the brand owner selects one of the serif pairing options instead (Cambria or Century Schoolbook headings), update the two variables once in the Context Prompt — every slide prompt inherits the change automatically. Do not hardcode a font name into individual slide prompts.

---

## Context Prompt (paste first, once per session)

> You are generating slides for accelance, an IT services and digital transformation consultancy. Treat the attached accelance-design-system-v1.0.md and accelance-brand-template-reference.md as the single source of truth. Do not invent new colors, fonts, or layout patterns not documented in these files. Where a file marks something "Pending Brand Approval" or "Recommended Enterprise Standard," use it as the current working default, but do not treat it as permanently fixed.
>
> **Brand variables for this session:**
> - Primary color: Accelance Blue `#0052CC` (v1.1; dark variant `#003A8F`) — ⚠️ verify against live site, decks measured `#0052CC`
> - Secondary colors: Success Green `#1A7A4A`, Alert Orange `#D5680B`, Compliance Teal `#0891B5`, Body Gray `#6B6B6B`, footer tint `#C8D8EC`
> - [Heading Font]: Inter Bold (v1.1 default; Arial Bold fallback)
> - [Body Font]: Inter Regular (v1.1 default; Arial fallback)
> - Corner radius: 8px on all cards and content blocks
> - Icon set: Tabler, outline style only, monochrome
> - Logo: "accelance" (lowercase), tagline "accelerating digital performance..." — top-right on every slide
> - Footer (every slide except cover): "Prepared by accelance | Confidential | [Year]" bottom-left, page number bottom-right, confidentiality disclaimer bar
> - Spelling: always lowercase "accelance," never "Accelance"
>
> Every slide must use the confirmed rounded-corner tinted-card pattern for grouping content — never hard-bordered boxes as the default treatment. Maintain visual consistency across every slide you generate in this session; if a color, icon style, or layout choice is used on one slide, reuse it identically on every subsequent slide of the same type.

---

## Slide Generation Prompts

### 1. Cover Slide
> Generate a cover slide for a [proposal / capability briefing / solution overview] titled "[TITLE]." Use the plain-white cover treatment: logo top-right, small-caps gray eyebrow label top-left (e.g., "COMMERCIAL PROPOSAL | PREPARED FOR CLIENT"), bold two-line headline in Accelance Blue using [Heading Font], one-line supporting subtitle in Body Gray pairing a value claim with a risk-reducer (e.g., "without rebuilding what already works"), client logo placeholder bottom-right, standard footer. If a full-bleed photographic cover is preferred instead, use a professional technology/human-collaboration photo, color-graded toward Accelance Blue, dark overlay for text legibility, headline in white.

### 2. Agenda Slide
> Generate an agenda slide: simple two-column numbered list of section titles, [Heading Font] for the title "Agenda," [Body Font] for list items, no icons needed, standard footer.

### 3. Section Divider
> Generate a section divider slide: full-bleed Accelance Blue gradient background, large centered section title in white using [Heading Font], no other content, page number only in the footer position.

### 4. Executive Summary (Stat-Strip)
> Generate an executive summary slide: 4-6 metric callout cards in a row, each with a Tabler icon, a large bold number, and a short label beneath, followed by one paragraph of supporting context in [Body Font]. Use rounded 8px cards with light tinted backgrounds.

### 5. Current State / Two-Column
> Generate a "current state" slide: main descriptive content on the left in [Body Font], a highlighted callout box on the right (tinted background, no hard border) listing key challenges or pain points, supporting bullet grid beneath both columns.

### 6. Before / After Comparison
> Generate a before/after comparison slide: two side-by-side cards, left card tinted light red with a red header bar labeled "[Legacy state] — Today" and ✗ bullet points, right card tinted light green with a green header bar labeled "[Future state] — Tomorrow" and ✓ bullet points, large "VS" divider centered between them.

### 7. Architecture / Layered Diagram
> Generate a solution architecture diagram: stacked or connected layered boxes in Accelance Blue tones, arrow-connected to show flow, each layer labeled clearly (e.g., Data Layer, Integration Layer, Agent/Orchestration Layer, Output Layer). Use flat Tabler outline icons for services. Group related components in a lightly tinted bounded container rather than a hard border.

### 8. Colored Component Grid (Specialist Breakdown)
> Generate a grid slide (2x3 or 2x2) breaking down [N] components/agents/services. Each cell uses a distinct accent color from the confirmed palette, with a Tabler icon, bold title, and 2-3 supporting bullet points.

### 9. Phased Roadmap / Timeline
> Generate a delivery roadmap slide using [horizontal phase-block table / chevron arrow timeline with milestone diamonds — pick one] showing [N] phases with dates and short descriptions per phase. Use a distinct accent color per phase block.

### 10. Quadrant KPI Framework
> Generate a KPI framework slide: 2x2 grid of category tables, each with a distinct colored header bar (blue/teal/green/orange — assign by category meaning, not arbitrarily), each table listing KPI / description / target with a pill-style colored target badge.

### 11. Risk Classification Matrix
> Generate a governance/risk slide: 3-column color-graded risk tiers (green = low/autonomous, amber = medium/human-review-required, red = high/mandatory-approval), each column with a header bar, risk label, and one-line description of the governance rule for that tier.

### 12. Categorized Tech Stack
> Generate a technology stack slide: 4-quadrant categorized list (e.g., AI/LLM, Agent Framework, Memory & Knowledge Base, Infrastructure), color-coded per category, listing specific technologies/platforms under each.

### 13. Testimonial
> Generate a testimonial slide: large quotation mark graphic, italicized pull-quote in [Body Font], attribution line using role + sector only (e.g., "VP of Operations, Fortune 500 Manufacturing Client") — never a named individual or company unless explicitly approved. Supporting professional photo (per the confirmed photography direction: blue-toned, technology/collaboration themed).

### 14. Case Study
> Generate a case study slide: label the client as "Client: Confidential — [Industry] sector." Three-panel layout: Challenge / Approach / Outcome, using the confirmed colored-card grid pattern. Bottom stat-strip row with 2-4 quantified results (reuse the executive-summary metric-card style).

### 15. Pricing
> Generate a pricing slide: header "Pricing," one line acknowledging that every engagement is scoped to the client's environment, single clear CTA "Schedule a call with our team," contact block (email/phone, icon-led, matching the confirmed footer icon style). No pricing table, tiers, or numbers.

### 16. Resource / Team Plan
> Generate a resource plan slide: simple table — Role / Responsibility / FTE% / Phase — using an Accelance Blue header row with white text and alternating row shading.

### 17. Client / Partner Logo Wall
> Generate a logo wall slide: horizontal row(s) of technology partner logos (only include logos explicitly confirmed: Microsoft, SAP, UiPath, OutSystems, Salesforce) plus a separate labeled placeholder box reading "Client Logo" for real client logos not yet approved for use.

### 18. Thank You / Closing
> Generate a closing slide in one of two confirmed styles: (a) narrative close — bold centered-left headline (e.g., "Ready to Build."), one-line subtitle, footer only; or (b) contact close — full logo, "Thank you," complete contact block (address, email, phone), supporting professional photo.

---

## Notes for Whoever Runs This Session
- Generate slides **in the order listed** where possible — later prompts (e.g., testimonial, case study) assume the color/icon choices from earlier slides are already locked in for the session.
- If Claude Design produces a color, font, or layout choice not found in the source .md files, flag it for review rather than accepting it as final — per the design system's own rule, nothing should be treated as an official standard unless it traces back to the documentation.
- The font variables are the one thing most likely to change before this goes to production. Confirm the final decision before running this prompt set at scale (e.g., for a real client-facing deck), not after.
