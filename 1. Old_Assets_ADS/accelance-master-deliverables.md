# ACCELANCE WEBSITE PROJECT — MASTER DELIVERABLES FILE

**All phases, combined for build reference.** Each phase is separated by a full-width divider and a numbered banner heading so you can jump to any section quickly. Use Ctrl+F / Cmd+F on the phase banners (e.g., "PHASE 3 —") to navigate fast.

## Contents
- Phase 1 — Discovery & Competitive Analysis
- Phase 2 — Website Strategy
- Phase 3 — Design System
- Phase 4 — Website UX & Wireframes (documentation; interactive wireframe viewer is a companion HTML file — see note at that section)
- Phase 5 — Complete Copywriting
- Phase 6 — Images & Visual Direction

---



═══════════════════════════════════════════════════════════════════
  PHASE 1 — DISCOVERY & COMPETITIVE ANALYSIS
═══════════════════════════════════════════════════════════════════

# PHASE 1 — DISCOVERY & COMPETITIVE ANALYSIS

> This phase was originally run as internal working analysis (not displayed as a standalone report, per your instruction). It's included here in full so the master file is self-contained for the build.

## 1.1 Evidence Reviewed

- **Accelance (4 screens + brand guide):** homepage hero, trending/insights carousel, "What We Do" tabbed services section, Supplier Collaboration Portal product page, and the full Accelance Brand Standards Guide.
- **Competitors (7 screens):** Bounteous (homepage hero, solutions/industries grid, partner wall), CI&T (contact form), Thoughtworks (AI/works platform page), Publicis Sapient (AI stats section), Tredence (agentic AI services grid).
- Everything below is scoped to this evidence only. Anything beyond it is marked **Evidence not available**.

## 1.2 Accelance — Current-State Findings

- **Hero:** "Future Ready, with Accelance." + "We help businesses transform ERP, CRM and operations into agentified systems that scale, adapt and act." Two CTAs: "Start your transformation" (filled) / "Explore AI Use Cases" (outline).
- **Nav:** Agentified Services, Products, Resources, Company.
- **Trending carousel:** rotating cards ("Emotion-Driven AI Behaviour," "Human-in-the-loop Automation") — the strongest, most differentiated brand-voice content on the site is currently buried in a rotating homepage widget, not leading any page.
- **"What We Do" tabs:** six categories (Process Assessments, AI, CRM, ERP, Custom Software, Cloud & Managed Services). **Critical content gap:** three distinct services (Intelligent BPM, Process Mining, RPA) share identical description copy verbatim — a consultancy-grade site cannot ship this.
- **Product page:** Supplier Collaboration Portal — "Vendors. Compliance. Control." + single CTA ("Request a Demo") — headline style (fragment-based) is inconsistent with the homepage's sentence-based headline, an IA/design-consistency gap.
- **No visible trust strip, client logos, testimonials, or certifications** in any reviewed screen.
- **Brand guide status:** typography and vector logo file both marked "Pending approval." Website and Internal App UI sections both marked "Recommended standard — not yet validated against the real site."

## 1.3 Competitor Pattern Extraction (used as reference, not copied)

| Competitor | Pattern worth learning from |
|---|---|
| **Bounteous** | Verb-led hero + bold color-differentiated qualifier; trust-strip logos placed immediately below the fold, before explanation; proprietary-sounding category names ("Agentic Business Reinvention") for brand differentiation; partner wall pairs cutting-edge AI names (Anthropic, crewAI) with legacy enterprise names (Microsoft, Salesforce) in the same breath |
| **CI&T** | Lead-qualification contact form (Job Level, Topic dropdown) — routes/scores inbound leads rather than a generic "email us" box |
| **Thoughtworks** | Full custom system-architecture illustration as the hero of a platform page — technical depth as credibility, not marketing gloss; dry, self-aware copy tone |
| **Publicis Sapient** | Bold stance headline ("The era of AI experiments is over") immediately backed by named internal products + quantified proof — conviction paired with hard numbers |
| **Tredence** | Flat, consistent icon-led service grid — comprehensiveness over storytelling, useful for dense decision-tree service menus |

## 1.4 Gap Summary Carried Into Later Phases

- **Content gap:** duplicate service descriptions (fixed in Phase 5 copywriting)
- **Hierarchy gap:** best brand-voice content buried in a carousel (fixed in Phase 2 messaging hierarchy + Phase 5 Agentic AI / Governance pages)
- **IA gap:** no "Industries" nav pillar despite implied vertical relevance (fixed in Phase 2 IA/sitemap)
- **Trust gap:** no visible logos/proof (fixed in Phase 3 Trust Components + Phase 5 CTA/proof copy, using `Client Success Story Placeholder` where real proof doesn't yet exist)
- **Design-consistency gap:** headline style differs between homepage and product page (addressed via the unified messaging hierarchy and copy voice in Phase 2/5)
- **Positioning gap:** no distinctive claim beyond generic "future ready" language (resolved via the "Agentic AI, Accountable by Design" positioning territory, built from Accelance's own governance system already specified in the brand guide — not borrowed from any competitor)

**Evidence not available (unchanged since Phase 1, still open):** full site navigation beyond what's shown, case studies, blog archive depth, about/leadership content, careers listings, SEO/technical performance data, mobile views, footer content, current certifications, real client outcomes.


═══════════════════════════════════════════════════════════════════
  PHASE 2 — WEBSITE STRATEGY
═══════════════════════════════════════════════════════════════════


**Basis for this document:** Everything below is derived from the Accelance Brand Standards Guide and the four Accelance screenshots reviewed in Phase 1 (homepage hero, trending carousel, "What We Do" service tabs, Supplier Collaboration Portal page), cross-referenced against the structural patterns observed in the seven competitor screenshots (Bounteous, CI&T, Thoughtworks, Publicis Sapient, Tredence). Where a recommendation extends beyond direct evidence, it is marked as a **[Strategic Recommendation]** rather than presented as fact. No client names, statistics, or certifications are invented anywhere in this document.

---

## 1. Brand Positioning

**Current stated position (from evidence):** "Future Ready, with Accelance" + "We help businesses transform ERP, CRM and operations into agentified systems that scale, adapt and act."

**Assessment:** The tagline is aspirational but generic — it could sit on almost any digital transformation vendor's homepage. The subhead is the actually differentiated part: it names concrete systems (ERP, CRM), a coined capability term ("agentified"), and a clear verb chain (scale, adapt, act). The brand guide's own voice standard calls for a *contrarian-hook* pattern ("[Belief] isn't [X]. It's just missing [Y]"), which the current homepage headline does not use — but the trending carousel content ("Agentic AI isn't about replacing people. It's about enabling intelligent collaboration...") *does* use it. The strongest brand voice Accelance already owns is currently buried in a rotating card, not leading the page.

**[Strategic Recommendation] Positioning territory: "Agentic AI, Accountable by Design."**
This is grounded in real, distinctive evidence already in the brand guide — the three-tier approval-color system (green/amber/red), the rule that "every AI-proposed action renders as a distinct confirmation card requiring explicit approval — never silent auto-execution," and the augment-don't-replace narrative. None of the competitor screenshots reviewed foreground governance or approval-gating as a headline claim — Bounteous and Publicis Sapient lead with velocity and scale ("Accelerate," "75% faster"), Thoughtworks leads with technical platform depth. A governance-first stance is a legitimate, evidence-backed white space for Accelance, not a borrowed claim.

**Positioning statement (draft):**
> Accelance turns ERP, CRM, and core operations into agentic systems that act — with every autonomous decision visible, approved, and accountable. We don't replace your systems or your people. We give both a way to work faster, together, without losing control.

---

## 2. Website Vision

The website's job is to do three things a services menu alone cannot:

1. **Convert the "agentified" concept from jargon into a credible category.** Right now "agentified systems" appears once, unexplained, in the hero subhead. The site needs to define, own, and repeatedly reinforce this term the way Thoughtworks owns "AI/works" or Bounteous owns "agentic engineering."
2. **Make governance a visible product feature, not a footnote.** The approval-tier system described in the brand guide is a UI-level trust mechanism — it should appear as an actual visual motif on the marketing site (not just internal app UI), because it's proof, not just a claim.
3. **Fix the "sameness" problem in the service tabs.** The "What We Do" section currently repeats identical description copy ("We transform your workflows into smart, self-improving, scaling systems") across three distinct services (Intelligent BPM, Process Mining, RPA). A consultancy-grade site cannot ship duplicate copy across different offerings — this undermines the "executive-level, consultative" voice the brand guide demands.

**Vision statement:** A site that reads like a governance-literate systems integrator, not a generic "AI transformation" vendor — technical enough to be credible to a CIO, plain-spoken enough to be usable by a COO, and specific enough that no card on the site could be swapped into a competitor's page without editing.

---

## 3. Messaging Hierarchy

| Level | Message | Where it lives |
|---|---|---|
| **Master brand claim** | Agentic AI, Accountable by Design | Homepage hero, nav tagline, About |
| **Pillar 1 — Augment, don't replace** | We modernize what you have — ERP, CRM, core ops — we don't rip and replace it | Homepage proof section, Services intro, every service page's opening line |
| **Pillar 2 — Governance is visible, not implied** | Every autonomous action is approved, logged, and reversible — shown via the 3-tier status system | Agentic AI hub, product pages, case studies |
| **Pillar 3 — Systems that act, not just report** | The shift from dashboards that inform to agents that act | AI/Agentic services pages, industry pages |
| **Proof layer** | Anonymized outcomes (role + sector), partner logos (confirmed only: Microsoft, SAP, UiPath, OutSystems, Salesforce), governance-in-action screenshots | Case studies, homepage trust strip, resource centre |
| **CTA layer** | Verb-first, risk-reduced: "Start the no-cost pilot," "Request a Demo," "Explore AI Use Cases" | Every page, per brand guide button system |

Rule for every page: one master claim reference, one pillar reinforced, one proof point, one CTA. No page should try to carry all three pillars at once — that's how the current service tabs ended up with repeated, unspecific copy.

---

## 4. User Personas

Built directly from Accelance's actual service and product evidence (ERP/CRM services, compliance-tagged color category, Supplier Collaboration Portal), not from invented market research or survey data.

**Persona A — The Operations Modernizer (COO / VP Operations)**
Owns broken or aging process layers (supply chain, procurement, vendor management — evidenced by the Supplier Collaboration Portal's "Vendors. Compliance. Control." framing). Wants measurable process improvement without a multi-year rip-and-replace project. Primary objection: "we already tried automation and it didn't stick."

**Persona B — The Technology Decision-Maker (CIO / VP IT)**
Owns the ERP/CRM/cloud stack. Evaluating whether "agentic AI" is real capability or repackaged RPA. Cares about integration risk, security, and vendor lock-in. Primary objection: "how is this different from the RPA/AI vendors already in my inbox?"

**Persona C — The Risk & Compliance Stakeholder**
Implied by the brand guide's dedicated Compliance Teal category and the internal app's mandatory-approval governance model. Not necessarily the buyer, but frequently a **veto-holder** in enterprise AI deals — needs to see audit trails, approval gates, and reversibility before agentic AI clears procurement. Primary objection: "what happens when the agent gets it wrong?"

**[Evidence not available]** — no seniority, industry vertical, or company-size data exists in current material to further segment these personas quantitatively.

---

## 5. User Journeys

**Journey 1 — Operations Modernizer**
Homepage → "What We Do" (Process/ERP/CRM tab) → Specific service page with a concrete before/after or anonymized outcome → Case study (anonymized) → "Start the no-cost pilot" CTA.

**Journey 2 — Technology Decision-Maker**
Homepage → Agentic AI hub (differentiation: governance framing, not just capability) → Architecture/how-it-works page (the kind of technical-depth page Thoughtworks' AI/works page demonstrates, adapted to Accelance's own systems) → Resource centre (whitepaper/technical doc) → "Explore AI Use Cases" or direct sales contact.

**Journey 3 — Risk/Compliance Stakeholder**
Enters via a shared link (rarely the homepage) → lands directly on Agentic AI governance content → looks for the approval-tier system, audit/reversibility language, confirmed partner/certification logos → exits to send the page to the primary buyer, or fills a qualification-style contact form (CI&T's job-level/topic-qualified form is the right pattern here — this persona needs to self-identify as "risk/compliance" so the reply isn't generic).

---

## 6. Information Architecture

Top-level structure follows the brand guide's existing nav labels (Agentified Services, Products, Resources, Company) with governance elevated as its own recognizable pillar rather than buried inside "Services":

```
Home
├── Agentified Services
│   ├── Process Assessments
│   ├── AI & Agentic Systems
│   │   ├── Agentic AI (flagship — governance positioning lives here)
│   │   ├── Intelligent Business Process Management
│   │   ├── Process Mining
│   │   └── Robotic Process Automation
│   ├── CRM
│   ├── ERP
│   ├── Custom Software
│   └── Cloud & Managed Services
├── Products
│   ├── Supplier Collaboration Portal
│   └── [additional products — Evidence not available]
├── Industries
│   └── [Evidence not available — no industry pages seen; see Section 15]
├── Resources
│   ├── Insights / Blog ("Trending" content lives here, not just homepage carousel)
│   ├── Case Studies (anonymized)
│   ├── Whitepapers
│   └── Events/Webinars
├── Company
│   ├── About
│   ├── Partners (confirmed logos only)
│   ├── Careers
│   └── Contact
└── Contact / Start a Pilot (persistent CTA, not a nav item)
```

**Key structural gap identified:** there is currently no "Industries" pillar in the observed nav, despite Accelance's services clearly implying vertical relevance (supplier/procurement, compliance-heavy operations). Competitors reviewed (Bounteous) treat industry pages as a primary nav-level pillar, not an afterthought.

---

## 7. Navigation

Per brand guide: sticky horizontal bar, logo left, links center/right, one filled CTA far right, hover = blue underline fade-in, mobile collapses to hamburger + full-screen overlay.

**Recommended top nav (5 items + persistent CTA):**
`Agentified Services | Industries | Products | Resources | Company` — plus a single filled CTA button, right-aligned: **"Start the no-cost pilot."**

This adds "Industries" (currently absent) and keeps the CTA singular and verb-first per brand voice rules, replacing any ambiguity about which action the nav wants a visitor to take.

---

## 8. Sitemap

```
/                                   Home
/agentified-services/
  /agentic-ai/                      Flagship — governance-first positioning
  /process-assessments/
  /intelligent-bpm/
  /process-mining/
  /rpa/
  /crm/
  /erp/
  /custom-software/
  /cloud-managed-services/
/industries/                        [New pillar — see Section 15]
  /industries/[vertical]/
/products/
  /supplier-collaboration-portal/
  /[additional products]            [Evidence not available]
/resources/
  /insights/                        Blog / thought leadership
  /case-studies/
  /whitepapers/
  /events/
/company/
  /about/
  /partners/
  /careers/
  /contact/
```

---

## 9. Content Strategy

1. **Kill duplicate service copy immediately.** Every service card needs its own specific 1–2 line description — no shared boilerplate across distinct offerings. This is the single most visible content-quality gap from Phase 1.
2. **Every service page opens with the augment-don't-replace pillar**, stated in the contrarian-hook pattern the brand guide already defines: name the misconception, then reframe it.
3. **Case studies and testimonials stay anonymized by default** (role + sector), per brand guide — but should still carry a quantified outcome where real internal data exists. **[Evidence not available]** — no real outcome figures were provided in Phase 1 material, so none should be invented for the site; placeholder structure only until real data is supplied.
4. **Resource content should visibly ladder up to the three pillars** (augment, governance, act-not-just-report) rather than being a loosely-themed blog — this is what turns "Trending" cards into a strategic content engine instead of decoration.

---

## 10. SEO Strategy

**[Evidence not available]** for current keyword rankings, backlink profile, technical SEO health, or existing metadata — none of this was visible in the screenshots provided. What can be strategically stated from the IA/content work above:

- **Own the term "agentified systems."** If Accelance is coining this term, the site should be the definitive, most complete resource for it — glossary page, pillar page, and consistent internal linking, so search engines associate the term primarily with Accelance rather than ceding it to a competitor's near-identical language later.
- **Service and industry pages need unique, specific on-page copy** (directly tied to the content-strategy fix above) — duplicate or near-duplicate body copy across service pages is both a UX problem and a technical SEO liability (keyword cannibalization, duplicate-content signals).
- Recommend a technical SEO audit (crawlability, page speed, structured data, metadata) as a Phase 3/4 input — this cannot be assessed from screenshots alone.

---

## 11. GEO Strategy (Generative Engine Optimization)

The goal is to be the source an AI answer engine cites when someone asks "what is agentic AI for ERP/CRM" or "how do you govern autonomous AI agents in the enterprise."

- **Write pages that are directly quotable and self-contained** — a clear, definitional paragraph near the top of the Agentic AI hub page (e.g., a crisp definition of "agentified systems" and the three-tier approval model), since generative engines tend to lift concise, well-structured definitional passages.
- **Structured, consistent terminology** across every page (always "agentified systems," never a synonym swapped in) — inconsistent terminology fragments how models associate the concept with the brand.
- **FAQ-style content blocks** on key pages (Agentic AI, governance) formatted as clear question/answer pairs — this format is disproportionately favored by generative answer engines.
- **[Evidence not available]** for any current GEO/citation performance — no data exists yet to benchmark against.

---

## 12. Conversion Strategy

Per brand guide: no pricing table, CTA-only funnel ("Schedule a call with our team" / "Start the no-cost pilot"). This is a **qualification-first, not price-first** funnel by design — matches the CI&T pattern of a qualifying contact form (job level, topic dropdown) rather than a generic "email us" box.

- **Single primary CTA per page**, verb-first, consistent wording site-wide — avoid the current mix of "Start your transformation" / "Explore AI Use Cases" / "Request a Demo" competing for attention without a clear primary/secondary hierarchy. Recommend: one consistent primary CTA ("Start the no-cost pilot") + one consistent secondary/exploratory CTA ("Explore Agentic AI"), reused everywhere, rather than a different phrase per page.
- **Persona-aware form fields** (per Section 4): a lightweight qualifying field distinguishing "operations," "technology," or "risk/compliance" intent lets the same form route differently — directly serving Persona C's need to be routed to the right conversation rather than a generic sales reply.
- **Success state per brand guide**: form submission replaces itself with confirmation + next-step CTA, not just a thank-you message — keeps momentum rather than ending the interaction.

---

## 13. Trust-Building Strategy

- **Confirmed partner logos only** (Microsoft, SAP, UiPath, OutSystems, Salesforce, per brand guide) — displayed prominently, likely earlier in page flow than currently (Bounteous's pattern of placing a trust strip immediately below the hero is worth adopting structurally, populated only with confirmed real partners, never placeholder or invented logos).
- **Governance visualized, not just claimed.** The three-tier approval-color system is currently an internal-app-only spec — bringing a simplified, marketing-safe version of that visual onto the public Agentic AI page turns an internal governance feature into external proof of trustworthiness.
- **Anonymized case studies with real specificity** (role + sector + a described situation) rather than vague claims — specificity reads as credible even without a named client.
- **No invented certifications, badges, or statistics** — per your original instruction, and per the brand guide's own confidentiality rule. Any trust badge (SOC 2, ISO, etc.) must be confirmed as actually held before appearing on the site. **[Evidence not available]** on current certifications.

---

## 14. Resource Centre Strategy

- Elevate the homepage "Trending" carousel content into a proper **Insights/Resources hub** with categorization (by pillar: augment / governance / agentic action), not just a rotating homepage widget.
- **Content types**, per brand guide's LinkedIn template set (which already implies a working content taxonomy): contrarian-hook thought leadership, maturity-shift frameworks (then/now/next), anonymized proof points, framework spotlights. These same templates should anchor the resource centre's content calendar, not just social posts.
- **Whitepapers and technical docs** serve Persona B (Technology Decision-Maker) specifically — this is where governance architecture detail belongs, mirroring how Thoughtworks uses a dedicated platform page for technical depth rather than cramming it into the homepage.
- **[Evidence not available]** on current resource centre volume, cadence, or existing content beyond the two "Trending" cards observed.

---

## 15. Industry Page Strategy

No industry pages were present in reviewed navigation — this is a structural gap, not a content-quality one.

- **[Strategic Recommendation]** Build industry pages around Accelance's *evidenced* service strengths rather than a generic "we serve every industry" list: procurement/supply-chain-heavy sectors (justified by the Supplier Collaboration Portal's compliance/vendor focus) and operations-heavy, compliance-sensitive sectors more broadly (justified by the Compliance Teal category existing as a first-class brand token).
- Each industry page should follow the same pillar structure as service pages: name a sector-specific misconception (contrarian hook), reframe with augment-don't-replace language, show one anonymized proof point, end with the standard CTA.
- **[Evidence not available]** on which specific verticals Accelance currently serves or wants to prioritize — this needs direct input before pages are built, not assumption.

---

## 16. Agentic AI Positioning Strategy

This is the site's central strategic asset, so it gets its own hub page, not just a nav dropdown item.

**Core position:** Agentic AI at Accelance is defined by *visible governance*, not just autonomous capability. The differentiator is not "our agents are smarter" (a capability race Accelance cannot credibly out-claim larger competitors on with current evidence) — it's "our agents are accountable," which is a structural, verifiable claim rooted in the brand guide's own product rules.

**Page architecture for the Agentic AI hub:**
1. Contrarian-hook headline (e.g., reframing the fear that agentic AI means loss of control)
2. Definition block — plain-language, GEO-friendly explanation of "agentified systems"
3. Governance visual — simplified three-tier approval system, translated from internal-app spec to public-facing proof
4. Augment-not-replace reinforcement, tied to real system types (ERP/CRM) already in the brand vocabulary
5. Anonymized proof point
6. Single CTA: "Explore Agentic AI" → routes toward the qualified contact/pilot flow

**What to avoid:** matching competitors' velocity-and-scale framing ("faster," "75% faster delivery") without real, internally-verified numbers to back it — per your no-invented-statistics rule, Accelance's differentiation should lean on the governance claim it can actually prove, not a numbers claim it cannot yet substantiate.

---

## Summary of Flagged Evidence Gaps (carried into Phase 3)

- No industry vertical data
- No confirmed certifications/compliance badges
- No real client outcome statistics
- No current SEO/technical performance data
- No visibility into full existing content library beyond two trending cards
- No mobile-view or footer evidence from Accelance's live site

These should be closed with real input (or explicitly accepted as placeholders) before Phase 3/4 execution work begins.


═══════════════════════════════════════════════════════════════════
  PHASE 3 — DESIGN SYSTEM
═══════════════════════════════════════════════════════════════════


**Mandate:** Preserve Accelance Blue (`#1A6FC4`) as the immovable brand anchor. Everything else — typography, motion, illustration, component shape language — is free to evolve toward enterprise, premium, modern, timeless, technical, elegant, confident, minimal, human. No generic AI clichés anywhere in this system (see the explicit banned-imagery list in Section 8).

This document specifies the system; it does not build the website. Component specs below are ready to hand to engineering/design once you move to build.

---

## 1. Brand Guidelines (Evolved)

**What's preserved from the existing brand guide:**
- Accelance Blue `#1A6FC4` as primary — non-negotiable, per your instruction.
- Semantic-only color use (a color means one thing, everywhere).
- Lowercase wordmark "accelance."
- Augment-don't-replace narrative, contrarian-hook voice, anonymized proof by default.

**What evolves:**
- The palette gains **calibrated tints and dark-mode variants** of every existing color (Section 15) rather than the single-shade system today.
- Corner radius evolves from a flat single value (8px) to a **scaled radius token system** (Section 13) — small elements stay tight and technical, larger surfaces get slightly more generous rounding for a premium, less "form-generated" feel.
- Typography moves away from the Arial default and the serif-pairing options under consideration (Section 2) — reasoning below.
- A **dark mode** is added as a first-class surface, not an afterthought (Section 16).

**Core palette (extended):**

| Token | Hex | Role |
|---|---|---|
| `color.brand.primary` | `#1A6FC4` | Accelance Blue — unchanged anchor |
| `color.brand.primary.deep` | `#124E8F` | Hover/active states, dark-mode primary text-on-light |
| `color.brand.primary.tint` | `#EAF2FB` | Subtle surfaces, selected-state fills (light mode) |
| `color.success` | `#1A7A4A` | Positive states, "future" content, agent-health |
| `color.attention` | `#B85400` | Darkened from `#D5680B` for AA-safe small text; original tint kept for large display use only |
| `color.compliance` | `#0B7690` | Darkened from `#0891B5` for the same reason |
| `color.ink` | `#1C1F23` | Primary text — replaces pure black for a warmer, premium neutral |
| `color.body` | `#5B5F66` | Refined from `#6B6B6B` |
| `color.surface.tint` | `#C8D8EC` | Preserved from existing guide |
| `color.surface.base` | `#FFFFFF` | Light-mode base |

Rationale: the original Alert Orange and Compliance Teal fail AA at small text sizes per the existing guide's own accessibility note. Rather than restrict their use, this system gives each a darker "text-safe" variant so the color story stays intact everywhere, including body copy — an enterprise site cannot afford to quietly avoid its own brand colors in real content.

---

## 2. Typography

**Decision: retire the Arial default and the serif-pairing options under consideration. Move to a two-typeface sans system.**

Reasoning: Arial reads as "unstyled default," which undercuts "premium." A serif heading (Cambria/Century Schoolbook) pulls the brand toward traditional management-consulting — closer to the visual territory of firms like Deloitte or Accenture decks — rather than the technical-modern-elegant target you specified. A confident, slightly technical grotesk sans for display, paired with a highly legible humanist sans for UI/body, hits enterprise + technical + timeless without borrowing either the "generic corporate serif" or "generic AI-startup rounded sans" clichés.

| Role | Typeface | Notes |
|---|---|---|
| Display / Headings | **Space Grotesk** (open-source, Google Fonts) | Slightly technical character in the letterforms without being futuristic/sci-fi; distinctive at large sizes, restrained at small sizes |
| Body / UI | **Inter** (open-source, Google Fonts) | Enterprise-standard legibility, huge weight range, excellent at small sizes for dense enterprise UI (tables, forms, dashboards) |
| Monospace (code/data/IDs) | **IBM Plex Mono** | For technical/data contexts — case IDs, API examples, audit logs in the AI governance components |

Both primary typefaces are free, open-license, and self-hostable — no ongoing licensing risk, unlike the guide's earlier "pending approval" paid-font options.

**Type scale** (1.25 modular ratio, rem-based, 16px root):

| Token | Size | Line-height | Use |
|---|---|---|---|
| `type.display.lg` | 3.5rem / 56px | 1.1 | Homepage hero only |
| `type.display.md` | 2.75rem / 44px | 1.15 | Section headlines |
| `type.h1` | 2.25rem / 36px | 1.2 | Page titles |
| `type.h2` | 1.75rem / 28px | 1.25 | Section titles |
| `type.h3` | 1.375rem / 22px | 1.3 | Card/subsection titles |
| `type.h4` | 1.125rem / 18px | 1.4 | Small headers, labels |
| `type.body.lg` | 1.125rem / 18px | 1.6 | Lead paragraphs |
| `type.body` | 1rem / 16px | 1.6 | Default body — meets the existing 16px minimum |
| `type.body.sm` | 0.875rem / 14px | 1.5 | Secondary/meta text only, never primary content |
| `type.caption` | 0.75rem / 12px | 1.4 | Labels, timestamps — used sparingly |

**Rules:** never set body text below 16px for primary reading content (carried forward from existing guide). Letter-spacing on `display` and `h1` tokens: -1%, tightened for a more engineered, less "web-default" feel at large sizes.

---

## 3. Spacing & Layout Grid

**Base unit: 8px**, preserved from existing guide, extended into a full token scale:

`space.4` (4px) · `space.8` (8px) · `space.12` (12px) · `space.16` (16px) · `space.24` (24px) · `space.32` (32px) · `space.48` (48px) · `space.64` (64px) · `space.96` (96px) · `space.128` (128px)

**Grid:** 12-column, preserved. Gutter: 24px desktop / 16px tablet / 16px mobile. Max content width: **1280px**, with a wider **1440px "showcase" container** reserved specifically for hero visuals and full-bleed illustration bands — this prevents the premium/technical visuals from ever feeling stretched thin on large monitors while keeping reading-width content properly constrained.

**Section padding:** 96px desktop → 64px tablet → 40px mobile (preserved from existing guide — already correct).

---

## 4. Responsive Rules

| Breakpoint | Range | Columns | Notes |
|---|---|---|---|
| Mobile | <768px | 4-col | Single-column stacking, hamburger nav |
| Tablet | 768–1023px | 8-col | 2-across cards, mega menu collapses to accordion |
| Desktop | 1024–1439px | 12-col | Full nav, 3–4-across cards |
| Wide | ≥1440px | 12-col, 1440px max | Extra breathing room, not extra columns — prevents component stretching |

Type scales fluidly between breakpoints using `clamp()` for display/h1 tokens only; all other text sizes are fixed per breakpoint for predictability in dense enterprise layouts (tables, dashboards).

---

## 5. Icons

**Base system preserved:** Tabler Icons, outline style, monochrome, housed in a colored circle/tile — this is a sound, license-safe, comprehensive system and doesn't need replacing.

**Evolution:** standardize stroke weight at **1.75px** across all sizes (Tabler's default varies slightly by size otherwise), and lock three fixed sizes only: `icon.sm` (16px), `icon.md` (24px), `icon.lg` (32px) — no arbitrary in-between sizes, which is what makes an icon system read as "designed" rather than "picked per-instance."

**Governance-specific icon set:** a small custom addition (built in the same stroke weight/style as Tabler, not a mismatched icon pack) for the three approval states — a filled circle (autonomous/green), a half-filled or bordered circle (review-required/amber), and a locked shield outline (mandatory-approval/red). These need to be instantly recognizable as a *system*, since they'll recur across product screenshots, case studies, and the AI components (Section 12).

---

## 6. Illustration Style

**Explicit break from the existing glossy 3D abstract shell/flower motif** on the homepage — it's visually pleasant but generic; it could belong to almost any SaaS brand and doesn't communicate anything about agentic systems, governance, or ERP/CRM specifically.

**New direction: technical line-diagram illustration**, evolving the *existing* "Human-in-the-loop Automation" graphic style (the dashed-line, node-and-connector, isometric-lite illustration already used in one Accelance screenshot) into the system-wide standard, because it's the one existing asset that's both distinctive and on-message.

- Line weight: 1.5–2px, consistent with icon stroke weight
- Palette: brand blue + ink + one accent color per illustration (never more than two colors plus neutrals)
- Subject matter: systems, connections, approval gates, data flow — **never** anthropomorphized robots, glowing brains, or humanoid AI figures
- Motif: nodes/nodes-with-status-color for agent states, dashed lines for "in-progress/pending approval" flows, solid lines for "approved/completed" — this ties illustration directly to the governance system rather than being decorative

---

## 7. Photography Direction

Evolve away from generic "hands on a glowing laptop" or "futuristic AI" stock imagery toward the pattern Bounteous uses well: **real people, real operational contexts, natural light, unstaged-feeling compositions** — warehouse floors, control rooms, someone reviewing a dashboard over a shoulder, supply-chain/procurement settings that connect directly to what Accelance actually sells (ERP, CRM, supplier operations).

- No stock imagery of robot hands, holographic overlays, or humans "high-fiving" AI
- Diverse, real working environments tied to Accelance's actual service areas (operations, compliance, supply chain) rather than generic "office meeting" stock
- Color grading: slightly desaturated, cool-neutral, consistent with the blue brand system — avoids the warm-orange "corporate stock photo" look

---

## 8. Explicit Anti-Cliché Guardrails

Never use, under any circumstance, regardless of who requests it later:
- Glowing/holographic brains or neural-network head silhouettes
- Circuit-board-textured overlays on human faces or hands
- Robot hand touching human hand (or any variant of this composition)
- Floating chat-bubble "AI assistant" avatar orbs
- Matrix-style falling code or green terminal text as decoration
- Overused sparkle/magic-wand icons to signify "AI-powered"
- Generic blue-to-purple gradient blobs used purely as filler background texture without structural meaning

---

## 9. Motion Principles

Motion should feel **engineered, not decorative** — every animation communicates state change, never just "liveliness."

- **Timing tokens:** `motion.instant` 100ms · `motion.fast` 150ms (micro-interactions: button hover, focus) · `motion.standard` 250ms (card reveals, dropdowns) · `motion.slow` 400ms (page-section transitions)
- **Easing:** `ease-out` for anything entering/appearing, `ease-in` for anything exiting, never bounce/elastic/spring easing anywhere — that reads as playful, not confident/enterprise
- **Scroll reveals:** subtle fade + 8px rise, staggered by ~60ms per item in a group — never full-slide-in-from-offscreen, which feels consumer/gimmicky
- **AI/governance components specifically:** a status change (e.g., amber → green when an action is approved) always animates as a **deliberate, slightly slowed color transition** (300ms) rather than an instant snap — this is a trust cue: the system should feel like it's "showing its work," not flickering
- Always respect `prefers-reduced-motion` — replace movement with opacity-only transitions

---

## 10. Core Components — Buttons, Cards, Inputs

**Buttons** (extends existing guide's primary/secondary/ghost system):

| Variant | Style | Use |
|---|---|---|
| Primary | Solid `color.brand.primary`, white text | One per view, main action |
| Secondary | White fill, blue border/text | Supporting action |
| Ghost | Text-only, underline on hover | Tertiary/inline links |
| Destructive | Solid `color.attention` (text-safe shade) | Rare — reject/cancel an AI-proposed action |

Sizes: `sm` (36px height) · `md` (44px height) · `lg` (52px height). Radius: `radius.sm` (6px) on buttons — slightly tighter than the general 8px, so interactive elements feel crisp against softer card surfaces. All states (hover/active/focus/disabled/loading) defined with a visible focus ring (`2px`, offset `2px`, `color.brand.primary`) for accessibility.

**Cards:** base radius `radius.md` (12px, evolved from flat 8px — larger surfaces get slightly more generous rounding, per Section 1). Elevation only on hover for interactive cards (subtle 4px shadow, 8% opacity) — flat by default, matching the existing "flat unless lifting off busy content" rule.

**Inputs:** label-above-input preserved from existing guide (correct, accessible pattern). Height `44px` minimum for touch accessibility. Focus ring matches button focus ring for consistency. Error state: red-bordered + icon + text below field — never color-only, preserved from existing rule.

---

## 11. Navigation, Mega Menus, Footer

**Top navigation:** sticky, logo left, five primary items + one persistent filled CTA (per Phase 2 recommendation: "Start the no-cost pilot"). Height `72px` desktop, `64px` mobile.

**Mega menu structure** (for "Agentified Services" and "Resources," the two nav items with real depth): a 3–4 column panel — column 1: sub-category list (plain links); final column: one **featured content slot** (a single card — e.g., "Agentic AI" pinned as the flagship service, or a featured resource) so the mega menu does promotional work, not just link-dumping. Opens on click, not hover-only (hover-only mega menus are an accessibility and mobile-parity problem).

**Footer:** four columns (Services / Products / Resources / Company) + a fifth narrow column for social + newsletter signup. Bottom bar: lowercase "accelance" copyright, legal links, and — new — a small "confirmed partners" mini-logo row, reinforcing trust even at the page's exit point.

---

## 12. Forms, Tables, Tabs, Charts, Dashboards

**Forms:** persona-aware qualifying field (Phase 2, Section 12) as standard on all primary contact/pilot forms. Inline on-blur validation preserved. Success state replaces form with confirmation + next step, preserved.

**Tables:** blue header row, alternating row shading, preserved from existing guide. New addition: a **status-tag column pattern** using the three-tier governance colors wherever a table represents agent actions or approvals — this is the single most reusable enterprise-data pattern in the system.

**Tabs:** underline-indicator style (matches the existing "What We Do" tab pattern, which is a good structural pattern — its problem was duplicate copy, not the component itself). Active tab: `color.brand.primary` underline, 2px, animated slide between positions (`motion.standard`).

**Charts:** semantic color tokens only — never arbitrary chart-library default palettes. Every chart must be legible without color alone (patterns/textures or direct labeling) for colorblind accessibility. No 3D charts, no unnecessary chart-junk — flat, minimal, data-forward.

**Dashboards** (internal app UI, per existing guide Section 6): card-grid layout, white cards, `radius.md`, agent-status badges using the three-tier system as the dominant visual language. Numbered-circle badges for multi-step flows, preserved from existing guide.

---

## 13. AI Components (Signature System)

This is Accelance's most differentiated component family — it should look and feel like nothing else on the site.

- **AI Action Confirmation Card:** the core component. Every agent-proposed action renders as a distinct card — never a silent toast or auto-applied change. Structure: status icon (Section 5's governance icon set) + plain-language description of the proposed action + explicit **Approve / Reject** buttons + a collapsible "why" detail (reasoning/audit trail). This directly operationalizes the existing brand guide's governance rule — and doubles as the site's strongest visual proof point when shown (simplified) on marketing pages.
- **Agent Status Badge:** small pill component, three fixed states (autonomous/green, review-required/amber, mandatory-approval/red) — used in tables, dashboards, and case study screenshots consistently.
- **Audit Trail Timeline:** a compact vertical log (timestamp + action + approver) — reusable inside the confirmation card's expanded state and in case studies.

---

## 14. Timeline, Case Study, Pricing, CTA, Trust Components

- **Timeline component:** numbered-circle nodes connected by a line — horizontal on desktop, vertical on mobile. Used for roadmaps, process walkthroughs, and (styled down) the AI Audit Trail above.
- **Case Study component:** anonymized-profile header (role + sector icon, never a name/logo unless approved) → Situation/Approach/Outcome three-block layout → optional pull-quote block (blue left-border accent, preserved from existing Word-doc quote style, extended to web).
- **Pricing component:** per brand guide, **no pricing table exists in this system.** The "pricing" component is a single CTA-focused card: headline + one-line value framing + "Schedule a call with our team" button. This is intentional, not a gap — preserves the qualification-first funnel from Phase 2.
- **CTA component:** three variants — banner (full-width section CTA), inline (text-embedded link with arrow), sticky (persistent bottom-corner CTA on long resource/whitepaper pages only, dismissible).
- **Trust component:** confirmed-partner logo strip (grayscale logos, full-color on hover), anonymized testimonial card, and a compliance/security callout block (icon + statement) — never populated with unconfirmed certifications, per Phase 1/2 rules.

---

## 15. Accessibility Guidelines — WCAG AA

- All text-on-background combinations must pass **AA contrast** (4.5:1 normal text, 3:1 large text ≥24px) — this is why Section 1 introduces darker "text-safe" variants of orange and teal rather than restricting their use.
- Minimum touch target: 44×44px for all interactive elements.
- All interactive elements have a visible keyboard focus state (never `outline: none` without a replacement).
- Every AI Action Confirmation Card (Section 13) must be **screen-reader announced** on appearance (`aria-live="polite"`) — this isn't cosmetic, it's core to the governance promise: an approval request must be perceivable by every user, not just sighted mouse users.
- Form errors: icon + text + border, never color-only (preserved).
- Charts: never color-only encoding (preserved from Section 12).
- All imagery requires descriptive alt text; decorative illustration marked `aria-hidden`.

---

## 16. Dark Mode / Light Mode

Light mode is the existing default and remains primary. Dark mode is a **new, first-class addition** — not currently specified anywhere in prior material — built for technical/dashboard contexts (internal app, developer-facing docs) where dark surfaces are an enterprise-software norm.

| Token | Light | Dark |
|---|---|---|
| `color.surface.base` | `#FFFFFF` | `#0F1417` |
| `color.surface.raised` | `#FFFFFF` (with shadow) | `#1A2126` |
| `color.text.primary` | `#1C1F23` | `#EDEFF1` |
| `color.text.secondary` | `#5B5F66` | `#9BA3AB` |
| `color.brand.primary` (on-surface) | `#1A6FC4` | `#5B9EE0` (lightened for AA contrast on dark) |
| `color.success` | `#1A7A4A` | `#3FA873` |
| `color.attention` | `#B85400` | `#E08A45` |
| `color.compliance` | `#0B7690` | `#3FB4CE` |

Dark mode is not a simple inversion — every brand color gets a distinct lightened variant tuned to pass AA against the dark surface tokens, exactly as the light-mode text-safe variants were tuned in Section 1.

---

## 17. Design Tokens (Structure)

Tokens are named `category.role.variant`, platform-agnostic (usable in CSS variables, JSON, or a design-tool token plugin):

```
color.brand.primary        #1A6FC4
color.brand.primary.deep   #124E8F
color.success              #1A7A4A
color.attention            #B85400
color.compliance           #0B7690
color.ink                  #1C1F23
color.body                 #5B5F66

space.4 / space.8 / space.12 / space.16 / space.24 / space.32 / space.48 / space.64 / space.96 / space.128

radius.sm   6px   (buttons, inputs, tags)
radius.md   12px  (cards)
radius.lg   20px  (hero panels, feature banners)
radius.full 999px (pills, avatars, badges)

font.display  "Space Grotesk"
font.body     "Inter"
font.mono     "IBM Plex Mono"

motion.instant   100ms
motion.fast      150ms
motion.standard  250ms
motion.slow      400ms
```

Tokens are the single source of truth referenced by every component spec above — no component should hard-code a raw hex value or pixel size.

---

## 18. Component Naming Convention

Two parallel conventions, kept in sync:

- **Design tool (Figma) naming:** `Component/Variant/Size/State` — e.g., `Button/Primary/Large/Hover`, `Card/CaseStudy/Default/Rest`.
- **Code naming:** kebab-case with an `ac-` namespace prefix to avoid collision with any third-party CSS: `ac-button--primary--lg`, `ac-card--case-study`, `ac-badge--status-amber`.

Every new component must be registered in both places before use — this is a governance rule for the system itself, mirroring the same "nothing ships silently without approval" philosophy the AI components enforce for agent actions.

---

## 19. Design Documentation Standard

- **Living component library** (Figma) as source of truth, versioned, with a changelog — no component edited without a version bump.
- Each component ships with: purpose, anatomy (labeled parts), all states, responsive behavior, accessibility notes, and explicit **do/don't** usage examples (e.g., "don't use the AI Action Confirmation Card for anything that doesn't require real approval — it must stay a trustworthy signal, not decoration").
- A **token reference sheet** (Section 17) kept in sync with the actual codebase tokens — design and engineering reference the identical token names, no translation layer.
- A short **governance note** at the top of the documentation: this system evolved deliberately from the original brand guide, preserving Accelance Blue and the semantic-color and augment-don't-replace principles, while modernizing typography, motion, illustration, and adding dark mode and the AI component family — so future contributors understand what's fixed vs. what was an intentional Phase 3 evolution.

---

## Summary — What Changed vs. What Was Preserved

**Preserved (non-negotiable):** Accelance Blue `#1A6FC4`, semantic color logic, lowercase wordmark, augment-don't-replace voice, anonymized-proof-by-default, no-pricing-table funnel, Tabler icon base, label-above-input forms, color-never-alone accessibility rules.

**Evolved:** typography (Arial/serif → Space Grotesk + Inter), illustration (generic 3D abstract shell → technical line-diagram/node system), photography (implied generic tech stock → real operational contexts), radius (flat 8px → scaled token system), motion (unspecified → fully defined principles), dark mode (absent → first-class), AI components (governance rule only → full signature component family), naming convention and documentation standard (absent → formalized).


═══════════════════════════════════════════════════════════════════
  PHASE 4 — WEBSITE UX & WIREFRAMES
═══════════════════════════════════════════════════════════════════

> **Note:** The interactive low-fi/high-fi wireframe viewer (toggle across Page / Fidelity / Desktop-Tablet-Mobile) is a separate HTML artifact — **accelance-phase4-wireframes.html** — since an interactive tool can't be embedded inside a markdown file. It's included alongside this master file. Everything else from Phase 4 (sitemap, journeys, interaction diagrams, navigation flows, animation ideas, accessibility review) is below in full.


This document covers the non-visual deliverables for Phase 4: sitemap, user journeys, interaction diagrams, navigation flows, animation ideas, and accessibility review. The wireframes themselves (low-fi and high-fi, across desktop/tablet/mobile) are in the companion interactive artifact.

---

## 1. Complete Sitemap

Refined from Phase 2, with URL structure and page-type notes added for build-readiness.

```
/                                          [Homepage]
/agentified-services/                      [Service hub — index]
  /agentified-services/agentic-ai/         [Flagship — governance positioning]
  /agentified-services/process-assessments/
  /agentified-services/intelligent-bpm/
  /agentified-services/process-mining/
  /agentified-services/rpa/
  /agentified-services/crm/
  /agentified-services/erp/
  /agentified-services/custom-software/
  /agentified-services/cloud-managed-services/
/industries/                                [Hub — index]
  /industries/[vertical-slug]/              [Template — repeatable]
/products/                                  [Hub — index]
  /products/supplier-collaboration-portal/
  /products/[additional-product-slug]/      [Template — repeatable, Evidence not available on count]
/resources/                                  [Hub — index]
  /resources/insights/                       [Blog/thought leadership listing]
  /resources/insights/[article-slug]/        [Article template]
  /resources/case-studies/                   [Listing]
  /resources/case-studies/[case-slug]/       [Template — anonymized]
  /resources/whitepapers/                    [Listing + gated download]
  /resources/events/                         [Listing]
/company/
  /company/about/
  /company/partners/
  /company/careers/
  /company/contact/
/start-a-pilot/                              [Persistent CTA destination — qualification form]
/legal/privacy-policy/
/legal/terms/
```

**Page-type count for wireframe scope:** 5 unique templates cover ~90% of the site — Homepage, Service Page (template), Industry/Product Page (shares template), Case Study (template), Contact/Pilot Form. These five are what the companion wireframe artifact renders across fidelity and breakpoint.

---

## 2. User Journeys (Refined from Phase 2, Mapped to URLs)

**Journey 1 — Operations Modernizer (Persona A)**
`/` → `/agentified-services/` (or directly to `/agentified-services/erp/` if arriving via search) → service page's anonymized proof point → `/resources/case-studies/[case-slug]/` → `/start-a-pilot/`

**Journey 2 — Technology Decision-Maker (Persona B)**
`/` → `/agentified-services/agentic-ai/` (governance framing) → `/resources/whitepapers/` (technical depth doc) → `/start-a-pilot/` or `/company/contact/`

**Journey 3 — Risk/Compliance Stakeholder (Persona C)**
Direct entry via shared link → `/agentified-services/agentic-ai/` → scans for governance/approval-tier proof and confirmed partner logos → `/company/contact/` (routed via the persona-aware qualifying field from Phase 2)

**Journey 4 — Referral/GEO-driven arrival** *(new — not in Phase 2)*
Arrives via a generative-engine citation or search result landing directly on a deep page (e.g., `/agentified-services/agentic-ai/` or a `/resources/insights/` article) with **no homepage context at all.** This journey matters structurally: every deep page needs its own complete orientation (clear nav, breadcrumb, and a route back into a persona-appropriate next step) rather than assuming the visitor has seen the homepage's framing first.

---

## 3. Interaction Diagrams

**3.1 — AI Action Confirmation Card (the signature interaction)**

```
[Agent proposes action]
        │
        ▼
  Card renders ── status: AMBER (review-required)
        │
        ├── User clicks "Why?" ──► Audit trail expands (reasoning, data used)
        │                                   │
        │                                   ▼
        │                          User collapses or leaves open
        │
        ├── User clicks "Approve" ──► Card transitions AMBER → GREEN (300ms color transition)
        │                                   │
        │                                   ▼
        │                          Confirmation micro-copy: "Approved — action applied"
        │                                   │
        │                                   ▼
        │                          Card logs to Audit Trail Timeline
        │
        └── User clicks "Reject" ──► Card transitions AMBER → RED
                                            │
                                            ▼
                                   Prompt: reason for rejection (optional, logged)
```

This interaction pattern is used identically wherever agent actions appear (dashboards, product pages, case study screenshots) — one interaction model, never reinvented per surface.

**3.2 — Mega Menu Open/Close**

```
[User clicks "Agentified Services" nav item]
        │
        ▼
  Menu panel expands (250ms ease-out, fade + 8px drop)
        │
        ├── Hover/focus a sub-item ──► underline indicator slides (150ms)
        │
        ├── Click a sub-item ──► navigate, menu closes
        │
        ├── Click elsewhere / press Esc ──► menu closes (150ms fade)
        │
        └── Tab past last item ──► menu closes, focus moves to next nav item (keyboard trap prevention)
```

**3.3 — Multi-Step Qualification Form (`/start-a-pilot/`)**

```
Step 1: "What best describes your goal?" (Operations / Technology / Risk & Compliance)
        │
        ▼
Step 2: Fields adapt based on Step 1 selection (persona-aware routing, Phase 2)
        │
        ▼
Step 3: Contact details + submit
        │
        ▼
Success state replaces form (per brand guide) → confirmation + "what happens next" + calendar link if applicable
```

---

## 4. Navigation Flows

**Primary flow (desktop):** Sticky top nav persists through scroll. On scroll-down past 80px, nav compresses slightly (72px → 56px height) to reclaim vertical space without disappearing — never an auto-hiding nav, which forces users to scroll back up to reorient (a pattern worth avoiding for an enterprise/technical audience that frequently deep-links and scans).

**Mobile flow:** Hamburger → full-screen overlay (per brand guide). Overlay opens as a slide-down panel (not slide-from-side, which can feel like a native-app pattern mismatched to a marketing site), with top-level items expandable in place (accordion) rather than pushing to a second screen — keeps back-navigation simple (one tap to close vs. multiple "back" taps).

**Breadcrumb rule:** every page below the top-level hubs (service pages, case studies, industry pages, articles) carries a breadcrumb — directly serves Journey 4 (GEO/search-driven direct-to-deep-page arrivals), since a breadcrumb is often the *only* orientation a visitor gets.

**Footer as secondary nav:** full sitemap depth is not replicated in the footer — only hub-level links (Services / Products / Resources / Company) plus legal — footer's job is trust reinforcement (Phase 3, Section 11) and exit-orientation, not a duplicate sitemap.

---

## 5. Animation Ideas (Applying Phase 3 Motion Principles to Real Moments)

| Moment | Treatment |
|---|---|
| Homepage hero load | Headline fades + rises 8px (`motion.standard`), staggered 60ms per line; supporting illustration (Phase 3 line-diagram style) draws in with a subtle stroke-path animation — the one "orchestrated moment" per the frontend-design principle of spending boldness in one place |
| Scroll-triggered service cards | Fade + 8px rise, staggered by card, triggered once (no re-animating on scroll-back) |
| AI Action Confirmation Card status change | 300ms deliberate color transition (Phase 3, Section 9) — the most important animation in the system, since it *is* the trust signal |
| Mega menu | 250ms fade + slide, underline indicator slides rather than jumps between items |
| Tab switching ("What We Do" pattern) | Underline slides between tab positions; content cross-fades (150ms) rather than hard-cutting |
| Form success state | Form content fades out, confirmation fades in — no layout jump/reflow |
| Case study pull-quote | Simple fade-in on scroll, no parallax — a technical/enterprise audience reads parallax as decorative, not premium |

**Explicitly avoided:** auto-playing background video loops, cursor-follow effects, parallax scrolling on hero imagery, bounce/spring easing anywhere — all read as consumer/startup, not enterprise-premium, per the brand direction set in Phase 3.

---

## 6. Accessibility Review

Reviewed against WCAG AA and the Phase 3 accessibility guidelines, applied specifically to the interactions and flows above:

| Area | Finding | Action |
|---|---|---|
| AI Action Confirmation Card | Status changes are purely visual (color) by default | Must pair every status with the text label ("Review required," not just amber) and use `aria-live="polite"` so screen readers announce new approval requests — this is load-bearing for the governance promise, not optional |
| Mega menu | Hover-only menus are a known keyboard/mobile-parity failure | Spec already requires click-to-open (Phase 3) — confirmed carried through in this phase's interaction diagram (3.2) |
| Mobile nav overlay | Full-screen overlays can trap focus incorrectly if not managed | Focus must move into the overlay on open and return to the hamburger button on close; Esc key must close it |
| Multi-step qualification form | Step-based forms risk losing users who navigate by keyboard or lose progress on error | Each step needs a visible progress indicator, and validation errors must not clear previously entered data in other steps |
| Breadcrumbs | Currently a new addition (Section 4) | Must use proper semantic markup (`<nav aria-label="Breadcrumb">` with an ordered list) not styled `<div>`s |
| Color-coded governance badges (green/amber/red) | Directly flagged in Phase 3 | Every instance must carry a text label alongside color — never color-only, even in dense dashboard tables |
| Scroll-triggered animations | Can be disorienting for vestibular-sensitive users | Must respect `prefers-reduced-motion` — reveal content statically (opacity only, no motion) when set |
| Sticky/compressing nav | Height change on scroll could shift layout unexpectedly for screen-magnifier users | Compress via transform/padding only, never a reflow-causing height snap |

**Overall assessment:** no critical accessibility blockers found in the flows designed so far — the main disciplines required are (1) never letting the governance color system stand alone without text, and (2) making sure every new interaction pattern introduced in this phase (multi-step form, compressing nav, mega menu) follows through on the keyboard/screen-reader rules Phase 3 already established, rather than treating them as separate one-off components.


═══════════════════════════════════════════════════════════════════
  PHASE 5 — COMPLETE COPYWRITING
═══════════════════════════════════════════════════════════════════


**Rules followed throughout:** every headline uses the brand's contrarian-hook or plain-declarative pattern (never generic AI hype); every CTA is verb-first; every proof point that isn't already-confirmed evidence is marked **`Client Success Story Placeholder`** rather than invented; no statistics, certifications, or client names appear anywhere unless they were already confirmed in Phase 1–4 material (partner names: Microsoft, SAP, UiPath, OutSystems, Salesforce — all others remain placeholders).

---

## 1. Homepage

**Hero**
- Eyebrow: `Agentic AI, Accountable by Design`
- H1: `Autonomous isn't the risk. Unaccountable is.`
- Subhead: `We turn ERP, CRM, and core operations into agentic systems that act — with every decision visible, approved, and reversible. Nothing is replaced. Nothing runs silently.`
- Primary CTA: `Start the no-cost pilot`
- Secondary CTA: `Explore Agentic AI`

**Trust strip**
- Label: `Confirmed Partners`
- Logos: Microsoft · SAP · UiPath · OutSystems · Salesforce

**Section — What We Do**
- Eyebrow: `What We Do`
- H2: `We enable digital progress where it matters most`
- Body: `With a blend of strategy, technology, and execution, Accelance helps organizations digitize smarter, automate faster, and scale with impact — without discarding the systems already carrying the business.`
- Card 1 — Agentic AI: `Governed autonomous agents for core operations, with approval built into every action.`
- Card 2 — Intelligent Business Process Management: `Self-improving workflow orchestration across your existing process layer — no rebuild required.`
- Card 3 — Process Mining: `Surface hidden inefficiencies directly from the event logs your systems already generate.`
- Each card CTA: `Learn more →`

**Section — Governance moment**
- Eyebrow: `How it works`
- H2: `Every agent action starts as a proposal, not a decision`
- Body: `Green means the agent acts on its own. Amber means a person reviews first. Red means it never moves without explicit sign-off. The color changes — the rule never does.`
- CTA: `See the governance model`

**Section — Proof**
- H2: `What this looks like in practice`
- Body block: `Client Success Story Placeholder`
- CTA: `Read the case study`

**Section — Insights**
- Eyebrow: `Insights`
- H2: `Human-in-the-loop automation`
- Body: `Agentic AI isn't about replacing people. It's about enabling intelligent collaboration between humans and systems.`
- CTA: `Explore Insights`

**Closing CTA band**
- H2: `Start where your risk tolerance actually is.`
- Body: `A no-cost pilot on one workflow — not your whole stack.`
- CTA: `Start the no-cost pilot`

---

## 2. About

**Hero**
- H1: `We don't sell replacement. We sell judgment, applied to systems.`
- Subhead: `Accelance exists because most enterprises don't need a new ERP — they need the one they have to act on its own information, safely.`

**Section — Our approach**
- H2: `Augment first. Always.`
- Body: `Every engagement starts with what's already working. We build the agentic layer on top of it — not instead of it. If a system genuinely needs replacing, we'll say so. Most don't.`

**Section — Why governance is a design principle, not a policy**
- H2: `We built the approval model before we built the agents`
- Body: `A system that acts on your ERP or CRM without a visible approval trail isn't a shortcut — it's a liability with a good demo. Every Accelance engagement inherits the same three-tier governance model: autonomous, review-required, mandatory approval. It's not configurable away.`

**Section — Team / credibility**
- H2: `Who we are`
- Body: `[Evidence not available — team bios, leadership names, and headcount require direct input before publishing.]`

**FAQ**
- Q: `Is Accelance a systems integrator or an AI vendor?` A: `Both, by necessity. Agentic AI that touches ERP/CRM without deep integration expertise is how "autonomous" becomes "unaccountable."`
- Q: `Do you require us to migrate off our current systems?` A: `No. Our starting position is augmentation. Migration is only ever a recommendation, never a prerequisite.`

**CTA:** `Talk to our team`

---

## 3. Services (Hub)

**Hero**
- H1: `Six ways to make your systems act, not just report.`
- Subhead: `Every service below solves a distinct operational problem. None of them require starting over.`

**Service list (short-form, hub page):**
1. **Agentic AI** — `Governed autonomous agents for core operations.`
2. **Process Assessments** — `Find out exactly where your process is losing time before you automate anything.`
3. **Intelligent Business Process Management** — `Workflows that improve themselves without losing the logic your teams rely on.`
4. **Process Mining** — `Evidence from your own event data, not assumptions.`
5. **Robotic Process Automation** — `Rules-based automation for the work that doesn't need judgment — freeing agentic AI for the work that does.`
6. **Custom Software** — `Purpose-built systems for the gaps no off-the-shelf platform closes.`
7. **Cloud & Managed Services** — `The operational layer underneath all of the above, kept running.`

**CTA per card:** `Learn more →`
**Page-level CTA:** `Not sure which service fits? Talk to our team`

---

## 4. Solutions

**Hero**
- H1: `Solutions built around a problem, not a product category.`
- Subhead: `Where Services describes what we do, Solutions describes what you're trying to fix.`

**Solution examples (structured, not invented outcomes):**
- **Supplier & Vendor Operations** — `Vendors. Compliance. Control. A modular platform that centralizes supplier operations, compliance, and performance across industries.` CTA: `Request a Demo`
- **Invoice & Exception Handling** — `Reduce the manual review backlog without removing human sign-off from anything that matters.` CTA: `Learn more →`
- **Customer Data Unification (CRM)** — `One governed view of the customer, built on the CRM you already run.` CTA: `Learn more →`

**FAQ**
- Q: `What's the difference between a "Service" and a "Solution" on this site?` A: `A Service is a capability (e.g., Process Mining). A Solution is that capability applied to a named business problem (e.g., supplier compliance).`

---

## 5. Industries

**Hero**
- H1: `Industry-specific challenges require more than industry-specific language.`
- Subhead: `We work across operations-heavy, compliance-sensitive sectors. Below are the areas where our service portfolio applies most directly — this list will grow as we publish verified sector work.`

**Note:** `[Evidence not available — specific vertical case data and named sector prioritization require direct input. The categories below are structural placeholders derived from Accelance's existing service and product focus (supplier/vendor compliance, ERP/CRM-heavy operations), not confirmed vertical wins.]`

**Placeholder industry cards:**
- **Manufacturing & Supply Chain** — `Vendor compliance, procurement exceptions, and process visibility across the supply chain.`
- **Financial & Business Operations** — `Governance-first automation for workflows where an audit trail isn't optional.`
- **Healthcare & Regulated Operations** — `Client Success Story Placeholder`

Each card CTA: `Learn more →`

---

## 6. AI (Hub)

**Hero**
- H1: `AI that touches your systems should have to explain itself.`
- Subhead: `Our AI practice spans process intelligence, predictive operations, and agentic execution — governed the same way, end to end.`

**Section — Capability map**
- Process Intelligence: `Understand what's actually happening in your operations before automating any of it.`
- Predictive Operations: `Forecast the exceptions before they become backlogs.`
- Agentic Execution: `Systems that act on what they find — with approval built in. See Agentic AI →`

**FAQ**
- Q: `Is this generative AI, agentic AI, or traditional automation?` A: `Different problems call for different tools. We use whichever is right for the workflow — most enterprise operations need agentic execution layered on process intelligence, not a chatbot.`

---

## 7. Agentic AI (Flagship)

**Hero**
- Eyebrow: `Agentic AI`
- H1: `Autonomous isn't the risk. Unaccountable is.`
- Subhead: `Every agent-proposed action at Accelance renders as a confirmation — reviewed, approved, or escalated before it ever touches your system of record.`
- CTA: `Start the no-cost pilot`

**Section — Definition (GEO-anchored)**
- H2: `What "agentic AI" means at Accelance`
- Body: `An agentic system doesn't just recommend — it acts, within limits you set. At Accelance, every action an agent takes is tagged with one of three governance states before it executes: autonomous, review-required, or mandatory approval. This is the definition we build to, and the one we're happy to be held to.`

**Section — Three states**
- Autonomous (green): `Low-risk actions the agent completes without waiting on review.`
- Review required (amber): `The agent proposes; a person approves before anything executes.`
- Mandatory approval (red): `High-impact actions that always require an explicit sign-off, with no override.`

**Section — What this looks like**
- H2: `An action, before it happens`
- Card copy: `Reassign 12 overdue supplier invoices to backup approver.` Reasoning line: `Primary approver has been inactive for 6 business days.` Buttons: `Approve` / `Reject`

**FAQ**
- Q: `What happens if the agent is wrong?` A: `Nothing executes without the appropriate approval tier being satisfied first. Mandatory-approval actions cannot bypass a human decision, by design.`
- Q: `Can we change what's autonomous vs. review-required?` A: `Yes — the tiers are configured to your risk tolerance, not fixed by us.`
- Q: `Does this replace our existing automation (RPA)?` A: `No. Rules-based automation still handles the deterministic work. Agentic AI handles the judgment-adjacent work that rules can't.`

---

## 8. Governance

**Hero**
- H1: `The approval model isn't a feature. It's the product.`
- Subhead: `Every autonomous action across every Accelance engagement inherits the same three-tier system — it is not optional styling, and it is not configurable away.`

**Section — The model**
- H2: `Three tiers. One rule: nothing acts silently.`
- Body: `Autonomous actions still log to an audit trail. Review-required actions wait for a named approver. Mandatory-approval actions cannot execute without one. There is no fourth tier that skips this.`

**Section — Audit trail**
- H2: `Every action, timestamped and attributable`
- Body: `Approvals, rejections, and autonomous completions all write to the same audit log — visible to compliance stakeholders, not just engineering.`

**FAQ**
- Q: `Who can see the audit trail?` A: `Whoever your organization designates — typically operations, IT, and risk/compliance stakeholders together.`
- Q: `Is this compliant with [specific regulation]?` A: `[Evidence not available — specific regulatory certifications must be confirmed before being published on this page.]`

**CTA:** `See the governance model in a live pilot`

---

## 9. Resource Centre (Hub)

**Hero**
- H1: `Everything we know, organized by what you're trying to solve.`
- Subhead: `Insights, case studies, and technical documentation — filtered by augmentation, governance, or agentic execution.`

**Section labels:** `Insights` · `Case Studies` · `Whitepapers` · `Events`
**CTA per section:** `Browse →`

---

## 10. Insights

**Hero**
- H1: `Thinking, not press releases.`
- Subhead: `Perspective on agentic AI, governance, and operational modernization — written for people who have to defend the decision internally.`

**Sample article entries (real, publishable headlines — no fabricated stats inside them):**
- `Human-in-the-loop automation: where intelligent systems and human expertise work hand in hand`
- `Emotion-driven AI behaviour: how hidden emotions shape decisions in AI systems`
- `Your ERP isn't outdated. It's just missing a brain.`

**CTA per article:** `Read more →`
**Page CTA:** `Subscribe for new Insights`

---

## 11. Case Studies

**Hero**
- H1: `Real work. Anonymized by default.`
- Subhead: `We publish outcomes by role and sector, not by name, unless a client has explicitly approved otherwise.`

**Listing placeholder:**
- `Client Success Story Placeholder`
- `Client Success Story Placeholder`
- `Client Success Story Placeholder`

**Template structure (for when real cases are supplied):** `Situation → Approach → Outcome`, each anonymized as `[Role], [Sector]`.

**CTA:** `Talk to us about a similar challenge`

---

## 12. Contact

**Hero**
- H1: `Tell us what you're solving for.`
- Subhead: `We'll route you to the right conversation — operations, technology, or governance — not a generic inbox.`

**Form labels:** `What best describes your goal?` (Operations / Technology / Risk & Compliance) · `Work email` · `Company name` · `How can we help?`

**CTA:** `Send`
**Success state copy:** `Received. Someone from the right team will follow up within one business day.`

---

## 13. Careers

**Hero**
- H1: `Build the part of AI that has to be trusted, not just impressive.`
- Subhead: `We hire for judgment as much as engineering skill — because the systems we ship make decisions inside someone else's business.`

**Section — Open roles**
- Body: `[Evidence not available — current open roles must be pulled from the live careers system before publishing; do not list fabricated positions.]`

**Section — Why work here**
- H2: `What we actually value`
- Body: `We'd rather ship something slower and explainable than fast and opaque. If that's backwards to how you want to build, this isn't the right team.`

**CTA:** `View open roles`

---

## 14. Events

**Hero**
- H1: `Where we show the work, live.`
- Subhead: `Webinars and sessions on agentic AI, governance, and process modernization — recordings posted after each one.`

**Listing placeholder:**
- `[Evidence not available — no confirmed upcoming events supplied. Do not publish a fabricated schedule.]`

**CTA:** `Get notified about the next session`

---

## 15. Community

**Hero**
- H1: `A place for the people who have to defend this internally.`
- Subhead: `Practitioners working through the same governance, integration, and change-management questions — not a marketing forum.`

**Section — What happens here**
- Body: `Discussion threads, shared frameworks, and direct access to the Accelance team on implementation questions.`

**CTA:** `Join the community`

**Note:** `[Evidence not available — platform choice (forum, Slack, Discord, etc.) and current membership status require direct input.]`

---

## 16. Developer Portal

**Hero**
- H1: `Build against the same governance model we do.`
- Subhead: `APIs and integration guides for teams extending Accelance's agentic and process layers into their own systems.`

**Section — What's here**
- `API Reference` — `Endpoints for triggering, monitoring, and approving agent actions programmatically.`
- `Webhooks` — `Subscribe to approval-state changes in real time.`
- `SDKs` — `[Evidence not available — confirm supported languages/SDKs before publishing.]`

**CTA:** `Get API access`

---

## 17. Documentation

**Hero**
- H1: `How it actually works, in plain terms.`
- Subhead: `Setup guides, governance configuration, and integration reference — written for the person implementing this, not the person pitching it.`

**Section labels:** `Getting Started` · `Configuring Approval Tiers` · `Integrations` · `Troubleshooting`

**Voice note applied throughout docs:** active voice, exact control names ("Approve," not "Submit"), no marketing language inside technical steps.

**CTA:** `Open documentation`

---

## 18. Customer Portal

**Hero (logged-in context — functional, not sales copy)**
- H1: `Your agents. Your approvals. One view.`
- Subhead: `Everything currently autonomous, waiting on review, or requiring your sign-off.`

**Empty state (per brand voice — invitation, not apology):**
- `No actions waiting on you right now. When an agent needs your review, it'll show up here first.`

**Error state:**
- `This action couldn't be approved. [Reason]. Try again, or contact support.`

**Success state:**
- `Approved. Logged to the audit trail.`

---

## Master CTA Library (Reused Site-Wide)

| CTA | Use |
|---|---|
| `Start the no-cost pilot` | Primary, everywhere |
| `Explore Agentic AI` | Secondary, homepage/services |
| `Request a Demo` | Product pages only |
| `Talk to our team` | About, Services, Careers |
| `Learn more →` | Card-level, inline |
| `Read the case study` / `Read more →` | Resource content |
| `View open roles` | Careers |
| `Get API access` | Developer Portal |
| `Open documentation` | Documentation |
| `Approve` / `Reject` | AI Action Confirmation Card only — never reused elsewhere |

---

## Evidence Gaps Carried Forward (No Fabrication Applied)

- Team bios / leadership names — About
- Specific regulatory certifications — Governance
- Real client outcomes — every Case Study slot (`Client Success Story Placeholder` used throughout)
- Open roles — Careers
- Scheduled events — Events
- Community platform details — Community
- Supported SDKs/languages — Developer Portal


═══════════════════════════════════════════════════════════════════
  PHASE 6 — IMAGES & VISUAL DIRECTION
═══════════════════════════════════════════════════════════════════


Every prompt below inherits the Phase 3 design system (Accelance Blue `#1A6FC4`, the technical line-diagram illustration language, real-operational photography direction, and the explicit anti-cliché guardrails). Negative prompts repeat the Phase 3 banned-imagery list consistently so no generation tool "forgets" the constraint on a one-off image.

---

## Style Definitions

### Photography Style
Documentary-realist, cool-neutral color grading, natural/available light over studio lighting, real operational environments tied to what Accelance actually sells (supply chain, procurement, back-office operations) — never generic "office meeting" or "futuristic AI lab" stock. Subjects are shown doing real work, not posing with technology. Depth of field is used to isolate a task or a screen, not to create generic bokeh atmosphere.

### Illustration Style
Technical line-diagram system, evolved from the existing "Human-in-the-loop Automation" asset (Phase 3, Section 6). Stroke weight 1.5–2px, no more than two accent colors plus neutrals per illustration, isometric-lite perspective (slight depth, not full 3D), node-and-connector visual grammar where node color always maps to the governance system (green/amber/red) when representing agent states. Never anthropomorphic, never a robot/AI character.

### 3D Style
Used sparingly, only for hero-level system diagrams (e.g., the homepage architecture visual) — soft-shaded, low-poly-adjacent geometric forms (cubes, planes, connecting rods) in brand blue with matte, not glossy/chrome, surfaces. This is a deliberate departure from the existing glossy 3D "shell" motif on the current homepage, which reads as generic SaaS abstraction rather than something specific to agentic systems.

### Icons
Tabler-based outline icon system (Phase 3, Section 5), 1.75px stroke, monochrome in a colored circle or tile — not part of the illustration/photography prompt set below, since icons are built as a vector component library, not AI-generated imagery.

### Motion Direction
Applies to any illustration or diagram that will later be animated (per Phase 4, Section 5): connector lines should be drawn with clear start/end points so they can be stroke-animated; node elements should be isolated as separate layers so status-color transitions (green/amber/red) can be applied independently of the rest of the illustration.

---

## Image Prompt Specifications

### 1. Homepage Hero — Agentic Systems Diagram (3D/Illustration Hybrid)

- **Description:** An abstract but legible system diagram showing three to five geometric "nodes" connected by lines, representing agentic actions moving through a governance checkpoint. One node is emphasized mid-frame at a slightly larger scale, colored amber, with a subtle glow-free highlight suggesting "awaiting approval."
- **Mood:** Confident, precise, calm — not urgent or dramatic.
- **Colour palette:** Accelance Blue `#1A6FC4`, Ink `#1C1F23`, Success Green `#1A7A4A`, Attention Amber `#B85400`, white/light-tint background `#EAF2FB`.
- **Camera:** N/A (rendered 3D/vector composition, not photographed) — virtual camera positioned at a slight elevated three-quarter angle, ~30° above horizon.
- **Lens:** N/A — equivalent to a 50mm virtual focal length (minimal distortion, neutral perspective).
- **Composition:** Asymmetric, right-weighted (leaves left third open for headline text), generous negative space, nodes arranged along a gentle diagonal.
- **Lighting:** Soft, single-direction studio-style light from upper left, matte material shading, no lens flare, no glossy highlights.
- **Environment:** Abstract/void — no ground plane, no background scene, pure brand-tinted negative space.
- **Style:** Low-poly-adjacent matte 3D, geometric, technical-illustration hybrid — not photoreal, not cartoon.
- **Negative prompts:** `glowing brain, neural network head silhouette, circuit board texture, robot hand, human hand touching robot hand, holographic UI overlay, chat bubble avatar, sparkle icon, magic wand, gradient blob background, chrome/glossy material, lens flare, humanoid figure, futuristic sci-fi typography`
- **AI prompt:** `Abstract 3D system diagram, four to five matte geometric nodes connected by thin clean lines, one amber node emphasized mid-composition suggesting a pending approval state, brand colors deep blue #1A6FC4 and dark ink with amber #B85400 accent, soft single-direction studio lighting, matte non-glossy surfaces, three-quarter elevated virtual camera angle, asymmetric right-weighted composition with open negative space on the left, light blue-tinted void background, no ground plane, technical and calm mood, no text, no human figures, no robots, no glowing or holographic effects`

---

### 2. Governance Page — Three-Tier Approval Illustration

- **Description:** Three simple geometric shapes (circle, half-filled circle, shield outline) arranged in a horizontal row, each in its governance color, connected by a single thin baseline suggesting a progression rather than a hierarchy.
- **Mood:** Orderly, transparent, reassuring.
- **Colour palette:** Success Green `#1A7A4A`, Attention Amber `#B85400`, Compliance Teal `#0B7690`, Ink outlines, white background.
- **Camera:** N/A — flat 2D vector illustration, no camera/perspective.
- **Lens:** N/A.
- **Composition:** Strict horizontal symmetry, equal spacing, centered on page.
- **Lighting:** N/A (flat vector, no lighting model).
- **Environment:** Pure white/transparent background.
- **Style:** Flat line-icon illustration, 1.75px stroke, no gradients, no shadows.
- **Negative prompts:** `photorealism, 3D rendering, gradient fill, drop shadow, glossy surface, human figures, robot imagery, glowing effects, decorative flourishes`
- **AI prompt:** `Flat vector line illustration, three simple geometric icons in a horizontal row — a filled circle (green #1A7A4A), a half-filled circle (amber #B85400), and a shield outline (teal #0B7690) — connected by a single thin horizontal baseline, 1.75px consistent stroke weight, no gradients, no shadows, no 3D, pure white background, minimal and orderly composition, technical diagram style, no text, no human or robot figures`

---

### 3. Agentic AI Hub — "Action Confirmation" Contextual Illustration

- **Description:** A simplified, illustrated version of the AI Action Confirmation Card component — a rectangle representing a UI card with a status dot, two short line-elements suggesting button shapes, set within a minimal isometric-lite environment suggesting a screen or workspace.
- **Mood:** Precise, trustworthy, unhurried.
- **Colour palette:** Accelance Blue, Attention Amber (status dot), Ink, white/light surfaces.
- **Camera:** N/A — vector/isometric illustration.
- **Lens:** N/A — equivalent 35mm-style flattened perspective, minimal depth.
- **Composition:** Centered card element, slight isometric tilt (10–15°), generous surrounding white space.
- **Lighting:** Flat, even, no directional shadow beyond a subtle 4% opacity drop shadow beneath the card shape.
- **Environment:** Abstract workspace suggestion — a thin line "desk" plane beneath the card, nothing else.
- **Style:** Technical line-diagram illustration, consistent with Phase 3 Section 6.
- **Negative prompts:** `robot assistant character, glowing AI orb, futuristic hologram, human hand pressing button, circuit board pattern, neon colors, photorealistic screen mockup with real UI text`
- **AI prompt:** `Minimal isometric line illustration of an abstract UI card tilted 12 degrees, amber status dot in the top corner, two simple rectangular button shapes at the bottom, thin baseline plane beneath suggesting a desk surface, brand blue #1A6FC4 line work on white background, subtle soft shadow beneath the card only, flat and precise technical illustration style, no text, no human figures, no robot or AI character imagery, no glow or neon effects`

---

### 4. Service Page (Intelligent BPM) — Workflow Illustration

- **Description:** A branching flow diagram — one line splitting into two paths, one path shown as a dashed "before" line looping back on itself, the other as a solid "after" line moving forward cleanly — illustrating self-improving workflow logic.
- **Mood:** Clarifying, forward-moving.
- **Colour palette:** Ink for the "before" dashed line, Accelance Blue for the "after" solid line, light tint background.
- **Camera / Lens:** N/A — flat vector diagram.
- **Composition:** Left-to-right reading order, before/after paths stacked vertically for direct comparison.
- **Lighting:** N/A (flat vector).
- **Environment:** White/transparent background.
- **Style:** Flat technical diagram, consistent stroke weight with Section 2.
- **Negative prompts:** `3D rendering, photorealism, gradient effects, decorative icons unrelated to flow, human figures, arrows with cartoonish styling`
- **AI prompt:** `Flat vector diagram, two horizontal paths stacked vertically — top path shown as a grey dashed line looping back on itself labeled conceptually as "before," bottom path shown as a solid Accelance blue #1A6FC4 line moving cleanly left to right labeled conceptually as "after" — consistent 1.75px stroke weight, no gradients, no 3D, white background, minimal technical diagram style, no text, no human figures`

---

### 5. Industries — Manufacturing & Supply Chain Photography

- **Description:** A warehouse or logistics environment, a worker reviewing a handheld device or tablet showing a supplier/inventory interface, mid-task, unposed.
- **Mood:** Grounded, competent, real.
- **Colour palette:** Cool-neutral grading, desaturated warm tones, brand blue present only incidentally (e.g., on a screen UI, not color-graded into the scene).
- **Camera:** Full-frame mirrorless (e.g., equivalent to Sony A7 series).
- **Lens:** 35mm prime, natural perspective, minimal distortion.
- **Composition:** Rule-of-thirds, subject off-center, environment visible but not cluttered, shallow-to-medium depth of field to keep both subject and device screen legible.
- **Lighting:** Natural/available warehouse lighting, slightly cool color temperature, no artificial studio lighting rig.
- **Environment:** Real logistics/warehouse floor — visible shelving, pallets, or loading-dock context, not a staged office.
- **Style:** Documentary-realist photography, per Phase 3 Section 7.
- **Negative prompts:** `staged corporate stock photo, forced smiling directly at camera, futuristic AI overlay graphics, holographic screen effects, robot hands, glowing interface elements, warm orange stock-photo color grading`
- **AI prompt:** `Documentary-style photograph, a warehouse worker in mid-task reviewing a handheld tablet displaying a supplier/inventory dashboard, unposed and natural expression, shot on a full-frame mirrorless camera with a 35mm prime lens, rule-of-thirds composition with visible warehouse shelving and pallets in the background, natural available light with a cool neutral color grade, shallow depth of field keeping both subject and tablet screen legible, realistic and grounded mood, no visible brand logos, no futuristic overlays, no staged studio lighting`

---

### 6. Industries — Financial & Business Operations Photography

- **Description:** A person at a desk reviewing a compliance/approval dashboard on a laptop, in a real office setting, mid-review rather than posed.
- **Mood:** Focused, careful, quietly serious.
- **Colour palette:** Cool-neutral, slightly desaturated, brand blue incidental via screen content only.
- **Camera:** Full-frame mirrorless.
- **Lens:** 50mm prime, natural compression, minimal background distortion.
- **Composition:** Over-the-shoulder or three-quarter angle, screen content partially visible but not the focal point of legibility (avoids implying fabricated UI as real product screenshot).
- **Lighting:** Soft window light, cool color temperature, minimal fill.
- **Environment:** Real office/operations setting — desk, monitor, everyday clutter kept minimal but present (not a sterile stock-photo desk).
- **Style:** Documentary-realist photography.
- **Negative prompts:** `staged handshake, forced camera-facing smile, futuristic hologram, glowing AI graphics, generic corporate stock photo lighting, fabricated legible software UI text`
- **AI prompt:** `Documentary-style photograph, a person at a desk reviewing a compliance dashboard on a laptop screen, captured from a three-quarter angle with the screen content softly out of sharp focus, shot on a full-frame mirrorless camera with a 50mm prime lens, soft cool window light, realistic office environment with natural desk clutter, quiet and focused mood, no staged poses, no futuristic or holographic effects, no fabricated readable software text`

---

### 7. About Page — Culture/Values Visual

- **Description:** Since no real team photography exists yet, this uses an abstract illustration rather than a staged stock "team photo" — a simple line-diagram of overlapping circles (representing collaboration) rather than generic handshake or team-huddle imagery.
- **Mood:** Understated, collaborative, non-corporate-cliché.
- **Colour palette:** Ink outlines, single Accelance Blue accent circle, white background.
- **Camera / Lens:** N/A — flat vector.
- **Composition:** Three overlapping circles of varying size, asymmetric arrangement, centered in frame.
- **Lighting:** N/A.
- **Environment:** White/transparent background.
- **Style:** Flat technical-adjacent line illustration.
- **Negative prompts:** `stock photo team huddle, staged handshake, group of people looking at laptop smiling, generic corporate diversity stock photography, 3D rendering, human figures`
- **AI prompt:** `Flat vector illustration, three overlapping circles of varying sizes in an asymmetric arrangement, thin ink-colored outlines with one circle filled in Accelance blue #1A6FC4, white background, minimal and understated composition, no human figures, no photorealism, no stock-photo imagery, no text`

**Note:** `[Evidence not available — if real team photography becomes available later, replace this abstract placeholder with actual documentary-style team photography following the Phase 3 photography direction, not staged corporate portraiture.]`

---

### 8. Case Study Header — Generic Anonymized Operational Photography

- **Description:** A close, cropped shot of hands interacting with a physical operational tool (e.g., a scanner, a clipboard, a warehouse terminal) — deliberately anonymized (no visible face) to match the "role + sector, never named" case study rule.
- **Mood:** Authentic, quietly procedural.
- **Colour palette:** Cool-neutral, desaturated.
- **Camera:** Full-frame mirrorless.
- **Lens:** 85mm macro-adjacent, for close cropping with natural background blur.
- **Composition:** Tight crop on hands/tool, face out of frame entirely (not just blurred — genuinely uncaptured, to avoid any anonymization ambiguity).
- **Lighting:** Soft directional, natural.
- **Environment:** Real operational setting appropriate to the case study's sector.
- **Style:** Documentary-realist photography.
- **Negative prompts:** `visible face, identifiable individual, staged posture, futuristic AI overlay, glowing effects, stock-photo hands typing on laptop cliché`
- **AI prompt:** `Documentary-style photograph, a tight crop showing only hands interacting with a handheld warehouse scanning device, no face visible in frame, shot on a full-frame mirrorless camera with an 85mm lens for natural background blur, soft directional natural lighting, cool neutral color grade, realistic operational environment, quiet procedural mood, no identifiable individual, no futuristic overlays or glowing effects`

---

### 9. Insights/Blog Header — Thought Leadership Abstract

- **Description:** A single node with multiple thin lines radiating outward at varying lengths, suggesting an idea branching into implications — used as a repeatable header pattern for article pages.
- **Mood:** Contemplative, precise.
- **Colour palette:** Ink lines, single Accelance Blue node, white background.
- **Camera / Lens:** N/A — flat vector.
- **Composition:** Centered radiating pattern, asymmetric line lengths to avoid a perfectly symmetrical/decorative "starburst" look.
- **Lighting:** N/A.
- **Environment:** White background.
- **Style:** Flat line illustration.
- **Negative prompts:** `lightbulb icon cliché, glowing brain, symmetrical mandala/starburst decoration, 3D rendering, human figures`
- **AI prompt:** `Flat vector illustration, one small filled circle node in Accelance blue #1A6FC4 at the center with six to eight thin ink-colored lines radiating outward at irregular lengths and angles, asymmetric and non-decorative arrangement, white background, minimal technical style, no lightbulb or brain imagery, no symmetrical mandala pattern, no text, no human figures`

---

### 10. Careers Page — Workplace Photography

- **Description:** A candid, real working moment — someone reviewing code or a technical diagram on a monitor, mid-focus, not posed for camera.
- **Mood:** Genuine, calm competence.
- **Colour palette:** Cool-neutral, natural skin tones preserved (not overly graded).
- **Camera:** Full-frame mirrorless.
- **Lens:** 50mm prime.
- **Composition:** Candid three-quarter angle, screen content visible but abstracted/blurred to avoid implying real proprietary software.
- **Lighting:** Natural window light, soft.
- **Environment:** Real, lightly lived-in workspace — not a sterile show-office.
- **Style:** Documentary-realist photography.
- **Negative prompts:** `posed camera-facing smile, staged high-five, generic startup beanbag-chair stock photo, futuristic AI graphics, fabricated readable code/UI text`
- **AI prompt:** `Documentary-style photograph, a person candidly focused on reviewing a technical diagram on a monitor, not looking at camera, shot on a full-frame mirrorless camera with a 50mm prime lens, soft natural window light, realistic lightly lived-in workspace, cool neutral color grade, calm and genuine mood, no posed expression, no fabricated readable text on screen, no futuristic graphic overlays`

---

### 11. Contact Page — Minimal Supporting Illustration

- **Description:** A single thin line forming an open envelope-adjacent abstract shape (not a literal envelope icon) — deliberately restrained, functioning as quiet visual punctuation rather than a feature illustration.
- **Mood:** Calm, unobtrusive.
- **Colour palette:** Single Ink or Accelance Blue line, white background.
- **Camera / Lens:** N/A.
- **Composition:** Small-scale, off-center, intended as a supporting element beside form copy, not a hero visual.
- **Lighting:** N/A.
- **Environment:** White/transparent.
- **Style:** Flat single-line illustration.
- **Negative prompts:** `literal envelope icon cliché, phone/chat bubble icon cliché, 3D rendering, decorative flourish, gradient fill`
- **AI prompt:** `Flat single-line vector illustration, an abstract open geometric shape suggesting correspondence without being a literal envelope icon, one continuous thin line in Accelance blue #1A6FC4, small and understated scale, white background, minimal and quiet composition, no literal icon cliches, no gradients, no text`

---

### 12. Developer Portal / Documentation — Technical Abstract

- **Description:** A grid of small, uniform rectangles with one highlighted in blue, suggesting an API/endpoint structure without depicting fabricated code.
- **Mood:** Orderly, precise, quietly technical.
- **Colour palette:** Ink grid lines, single Accelance Blue highlighted cell, white background.
- **Camera / Lens:** N/A — flat vector.
- **Composition:** Even grid, one cell offset in color only (not position) to draw focus without breaking the order of the grid.
- **Lighting:** N/A.
- **Environment:** White background.
- **Style:** Flat technical grid illustration.
- **Negative prompts:** `fabricated readable code snippet, terminal/matrix aesthetic, glowing circuit pattern, 3D rendering, human figures`
- **AI prompt:** `Flat vector illustration, an even grid of small uniform rectangles in thin ink-colored outlines, one single cell filled in Accelance blue #1A6FC4 to draw focus, no other color variation, white background, orderly and precise technical composition, no fabricated code text, no terminal or matrix aesthetic, no glowing effects, no human figures`

---

## Summary Table

| # | Asset | Type | Primary Use |
|---|---|---|---|
| 1 | Agentic Systems Diagram | 3D/Illustration | Homepage hero |
| 2 | Three-Tier Approval | Flat illustration | Governance page |
| 3 | Action Confirmation Card | Illustration | Agentic AI hub |
| 4 | Before/After Workflow | Flat diagram | Service page (BPM) |
| 5 | Manufacturing & Supply Chain | Photography | Industries |
| 6 | Financial & Business Ops | Photography | Industries |
| 7 | Culture/Values | Illustration (placeholder for real photography) | About |
| 8 | Anonymized Operational Hands | Photography | Case Study header |
| 9 | Thought Leadership Radiate | Flat illustration | Insights header |
| 10 | Workplace Candid | Photography | Careers |
| 11 | Correspondence Abstract | Flat illustration | Contact |
| 12 | API Grid | Flat illustration | Developer Portal / Documentation |

All prompts are ready to paste into a generation tool as-is. Photography prompts (5, 6, 8, 10) should be treated as **direction for a real photo shoot first, AI generation as fallback only** — per the brand guide's confidentiality and authenticity standards, real documentary photography of actual (consented) operations will always outperform AI-generated "realism" for enterprise trust.
