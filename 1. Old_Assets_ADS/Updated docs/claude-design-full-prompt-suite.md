# Claude Design Prompt Suite — Full Brand System Rollout
### Source of truth: accelance-design-system-v1.0.md + accelance-brand-template-reference.md

**How to use this file:** Load the Brand Kernel once per Claude Design session (attach the two source .md files directly if the tool supports it — more reliable than a pasted summary). Then use whichever deliverable prompt matches what you're producing that session. Each prompt is self-contained but assumes the Kernel is already loaded.

**Before you run any of these at production scale**, two open decisions affect almost everything below: the final typeface (currently defaulting to Arial/Arial — see Module 2) and the vector logo file (currently an interim raster crop — see Module 2). Both are flagged "Pending Brand Approval" in the source doc. Nothing breaks if you proceed now, but expect one pass of rework across every deliverable if either changes later.

---

## Brand Kernel (load once, every session)

> You are generating branded assets for accelance, an IT services and digital transformation consultancy (founded 2019, Reading PA, USA + India presence) specializing in Agentic AI, RPA, and enterprise process modernization. Treat accelance-design-system-v1.0.md and accelance-brand-template-reference.md as the single source of truth — do not invent colors, fonts, or layout patterns absent from these files.
>
> **Core narrative:** augment existing systems (ERP, CRM, RPA) with an intelligent agentic layer rather than replacing them. Never position accelance as rip-and-replace.
> **Tone:** confident, executive-level, consultative, governance-aware (human-in-the-loop, accountability). Use "Agentification" deliberately.
> **Colors:** Accelance Blue `#0052CC` (primary; dark variant `#003A8F` for hover/active — v1.1 values, verify blue against live site before production), Success Green `#1A7A4A`, Alert Orange `#D5680B`, Compliance Teal `#0891B5`, Body Gray `#6B6B6B`, footer/light tint `#C8D8EC`. Colors are semantic (assigned by meaning — orange = business value, green = positive/health, teal = compliance) — never decorative or randomly cycled.
> **Typography:** [Heading Font] = Inter Bold, [Body Font] = Inter Regular (v1.1 default; Arial Bold/Arial as corporate fallback). Minimum 16px body text on web, 11pt in documents.
> **Shape language:** 8px corner radius on cards, rounded tinted-background cards preferred over hard borders, shadows used sparingly (only to lift a card off a busy background). Hub-and-spoke/radial diagrams for "components orbiting a central idea" content; wave/curve banner motif reserved for one-pagers only, never in slide decks.
> **Icons:** Tabler, outline style only, monochrome, housed in colored circles or flat tiles.
> **Logo:** "accelance" (always lowercase), tagline "accelerating digital performance..." Interim raster logo file available; true vector file still pending.
> **Voice:** contrarian-hook headlines (name a misconception, then reframe it), value props pair a capability claim with a risk-reducer, CTAs are confident and verb-first ("Start the no-cost pilot," never "let us know if interested").
> **Confidentiality rule:** never use real client names or logos in generated content unless explicitly marked approved in the source docs — use anonymized role+sector attribution instead (e.g., "VP of Operations, Fortune 500 Manufacturing Client").

---

## 1. Brand-Aligned PowerPoint Prompt

> Using the Brand Kernel, generate a [proposal / capability briefing / solution overview] deck for [client/audience]. Structure: Cover → Agenda → Executive Summary (stat-strip) → Current State → Before/After comparison → Architecture diagram → Component breakdown grid → Roadmap/timeline → Risk/governance matrix → Tech stack → Case study (anonymized) → Testimonial (anonymized) → Pricing (CTA-only, "Schedule a call with our team," no numbers) → Resource plan table → Thank-you/closing. Every slide inherits the standard footer ("Prepared by accelance | Confidential | [Year]," page number, confidentiality bar) and logo placement (top-right) from the slide master — do not repeat these per-slide as manual elements. Use the color-coding rules exactly: never assign a color to a category without checking it matches the established meaning (e.g., don't use orange for a compliance section — that's teal's role).
>
> *For a full slide-by-slide breakdown with individual prompts per archetype, see the companion file `claude-design-deck-prompts.md`.*

---

## 2. Brand-Aligned Word Document Prompt

> Using the Brand Kernel, generate a [Proposal / BRD / FRD / Solution Design / Technical Specification / Whitepaper / Meeting Minutes / Status Report] as an accelance Word document, following the Document Design System (Module 4): cover page with logo top-right, document-type label in small-caps gray, bold Accelance Blue title, subtitle in Body Gray, "Prepared by accelance | Confidential | [Year]" footer on every page after the cover, page numbering bottom-right. Heading hierarchy: H1 20pt bold Accelance Blue, H2 16pt bold Accelance Blue, H3 13pt bold Body Gray, H4 11pt bold black, body 11pt regular [Body Font], left-aligned, 1.15 line spacing. Use the light-blue tinted callout box (`#C8D8EC`, no border, 8px radius) for risks/assumptions/key notes. Tables: Accelance Blue header row, white bold text, alternating row shading. Include a revision history table (Version / Date / Author / Description) immediately after the cover page. Tone: confident, executive-level — lead with business outcome before technical detail wherever the document type allows it.
>
> Note: this template is authored as a new v1.0 standard (no legacy Word template existed) — flag any deviation from this spec for review rather than treating an older, unrelated document as a style reference.

---

## 3. Brand-Aligned One-Pager Prompt

> Using the Brand Kernel, generate a one-pager for [topic/service/offer]. Structure: header block with logo + tagline, plus a supporting visual (dashboard screenshot, photo, or relevant graphic). Use bold all-caps white-on-blue section banners with a curved/wave bottom edge as dividers (this motif is reserved for one-pagers only — do not carry it into slide decks). Include a 4-across benefit icon grid (Tabler outline icons, alternating tinted cell backgrounds). If describing a process, use either a numbered checkmark list or a vertical connected-icon timeline. Include a simple 2-column service/description table if relevant. Add a bordered "Why Choose accelance" callout box as a differentiator highlight. Close with a horizontal technology partner logo strip (only confirmed partners: Microsoft, SAP, UiPath, OutSystems, Salesforce) and a full-width footer contact bar (website/email/phone icons).

---

## 4. Accelance Website Prompt

> **Important caveat to include in the session:** no real screenshot, HTML, or CSS from the live accelance.io site has been used to build this specification — it is a Recommended Enterprise Standard (Module 8.5), grounded in the confirmed brand identity but not extracted from the real site. Treat this as a v1.0 proposal to design against, and re-derive it from real evidence the moment site screenshots, exported CSS, or a Figma file become available.
>
> Using the Brand Kernel, generate a homepage layout: sticky nav (logo left, primary links, single filled CTA button right, hover = Accelance Blue underline) → hero (bold headline in Accelance Blue or white-on-image, one-line value prop, single CTA) → service card grid (3-4 across desktop, collapsing to 1 across mobile, Tabler icon + name + 1-2 line description + text-link CTA, hover = subtle elevation) → differentiators/stats band (reuse stat-strip pattern) → anonymized testimonial or case study → partner logo strip → CTA banner (full-width Accelance Blue background, white text, single button) → footer (logo+tagline, link columns, contact block, social icons, legal line in lowercase "accelance," current year). Also generate: a Services index/detail page pair, an About page surfacing the confirmed Vision/Mission language and four-pillar Commitment ribbon graphic, and a Contact page (two-column: form left, contact details + photo right). Forms: label-above-input (not placeholder-as-label), inline on-blur validation, Accelance Blue focus ring, success state replaces the form with a confirmation message + next-step CTA. Buttons: primary (solid Accelance Blue), secondary (blue border/text on white), ghost (text + hover underline) — do not introduce a fourth button style. Breakpoints: mobile <768px, tablet 768-1024px, desktop >1024px.

### ⚠️ Alternative dark-theme override — UNVERIFIED, do not run until the live site is checked
> A separate, unsourced dark-theme direction was proposed for the website: `#07111F`/`#0B1728`/`#111F35` navy backgrounds, `#4E7DFF`/`#7AA2FF` accent blues, `#4CD4B0` trust accent, `#F5F8FF` headline text on dark, `#AAB7D0` muted text. Proposed fonts: Inter/Manrope/Sora (headings), Inter/Source Sans 3 (body). Proposed imagery: abstract digital grids, futuristic AI visuals for hero; dashboards/process maps for service pages; system/agent-orchestration diagrams for process pages. **This directly contradicts the light-theme prompt above and every confirmed light-themed artifact in the design system (all decks, one-pagers, LinkedIn posts).** Do not substitute this into the main Website Prompt above, and do not run it in production, until the real accelance.io site has been visually confirmed to actually be dark-themed. If confirmed, this block replaces the color/imagery portion of the prompt above; if not confirmed, discard it.

---

## 5. LinkedIn Post Templates (10 standard templates, edit-before-posting)

> Using the Brand Kernel, generate 10 distinct, reusable LinkedIn post graphic templates in the confirmed visual style (bold blue/green headline treatment, diamond bullet accent, "accelance.io" wordmark bottom-left, logo bottom-right, white background, thin decorative line/arc accent optional). Each template should have clearly marked editable placeholder fields. The 10 angles:
>
> 1. **Contrarian hook / myth-bust** — "[Common belief] isn't [X]. It's just missing [Y]." (matches the confirmed "Your ERP isn't outdated" pattern)
> 2. **Maturity shift framework** — three-stage THEN / NOW / NEXT progression on a topic, plus one "key insight" callout line
> 3. **Problem → outcome with proof points** — "[Trend] is everywhere. [Real outcome] still isn't." + Problem/Approach/Outcome three-line structure + 3 stat callouts
> 4. **Layered concept diagram** — 3-layer stack graphic (e.g., Data → System → Agentic Layer) illustrating how accelance adds intelligence to an existing system
> 5. **Anonymized proof point** — one quantified result framed generically ("One of our manufacturing clients cut [metric] by [%]") with no named client, paired with a short "how" line
> 6. **Thought-leadership question** — a provocative industry question as the headline, 2-3 short supporting lines, no hard sell, ends on an open note to invite comments
> 7. **Framework/methodology spotlight** — visualize one of accelance's own frameworks (e.g., the risk-classification tiering, or the "augment don't replace" model) as a clean diagram
> 8. **Service/capability spotlight** — single service (e.g., Process Mining, AaaS) with a 3-4 item benefit icon row and one CTA line
> 9. **Event/webinar/announcement** — date/time-forward template with headline, 2-line description, and a clear "Save your spot" style CTA
> 10. **Direct offer / pilot CTA** — short, confident, direct: state the offer (e.g., no-cost pilot), one risk-reducer line, and a single verb-first CTA ("Start the no-cost pilot")
>
> For every template, also generate a matching caption-copy starter (2-4 short paragraphs, ending in the established CTA voice) that a human can lightly edit before posting rather than write from scratch.

---

## 6. Internal Application UI Prompt

> **Important caveat to include in the session:** this specification has zero direct visual extraction behind it — no real product screenshots or a readable Figma export were available when this system was built. It is entirely a Recommended Enterprise Standard / Pending Brand Approval (Module 5) — usable as a v1.0 starting point for internal tooling, but the first thing to revisit if real product UI evidence becomes available.
>
> Using the Brand Kernel, generate a standard internal application UI kit: top bar (logo mark only, not full wordmark, + app name + user menu, Accelance Blue accent line at the bottom edge), sidebar navigation (icon + label, active item = left Accelance Blue bar + light-blue tint background), buttons/forms/tables identical to the website specification above (one consistent system, not a separate one for internal tools), cards (white, 8px radius, 0.5px border, shadow only when lifting off busy content), dialogs (centered, one primary + one secondary action), role-colored notifications (green/amber/red matching the confirmed risk-tier logic), numbered-circle-badge progress indicators for multi-step flows, and empty/loading/error/success states following the "invitation not apology" / "state what happened, what to do next" content principles. For any AI-agent-related screens specifically: render every AI-proposed action as a distinct confirmation card requiring explicit approval (never silent auto-execution), and use the three-tier risk color system (green = autonomous, amber = human-review-required, red = mandatory approval) for agent status indicators — this ties directly to accelance's stated governance positioning and should not be treated as optional styling.

---

## Handoff Notes
- Run the Brand Kernel once per session; don't re-paste it into every individual prompt if the tool retains session context.
- If any output introduces a color, font, or pattern not traceable to the two source .md files, flag it — per the design system's own rule, nothing is an official standard unless it's documented.
- Website and Internal Application prompts (4 and 6) carry the least evidence behind them. Treat outputs from these two sessions as drafts for internal review, not as final production-ready assets, until real site/product evidence closes that gap.
