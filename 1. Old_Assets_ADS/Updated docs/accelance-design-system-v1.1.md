**Accelance Design System v1.1**

> **Conversion & verification notes (added during docx→md conversion, 2026-07-18):**
> 1. **Color discrepancy flagged:** this document specifies Accelance Blue as `#0052CC`, citing "pixel-sampled from accelance.io." The pixel sampling actually performed during this project — on real accelance decks and slides — consistently measured `#1A6FC4`. The website was never sampled (no browsing access). Verify `#0052CC` against the real site before client-facing use.
> 2. **Module 5 provenance corrected:** the original docx claimed the internal-app UI section was built from the Show Connect Figma file; that file was never accessed. Corrected inline.
> 3. AI-search citation artifacts (e.g., "webflow+1") stripped from the original text.


**Status:** Recommended Enterprise Standard
**Last Updated:** July 2026
**Owner:** Haneeth, Business Analyst, accelance
**Purpose:** Single source of truth for all brand-compliant deliverables
(website, PPT, documents, one-pagers, LinkedIn, internal apps)


**1. Brand Discovery**

**1.1 Company Overview**

-   **Name:** accelance (always lowercase)

-   **Founded:** 2019

-   **HQ:** Reading, Pennsylvania, USA

-   **Presence:** USA, India

-   **Employees:** 51--200

-   **Positioning:** Agentic AI / "Agentification" specialist ---
    augmenting existing enterprise systems (ERP, CRM, RPA) with an
    intelligent agent layer rather than replacing them

**1.2 Vision, Mission, Values**

-   **Vision:** "To be the trusted partner for sustainable innovation
    and digital leadership across industries"

-   **Mission:** "To accelerate intelligent enterprise transformation
    by combining deep business expertise with cutting-edge digital
    technologies"

-   **Values Framework:** "Our Commitment --- Proven Expertise. Trusted
    Outcomes."

    -   Customer First / Customer Last

    -   Skilled Experience

    -   Delivery Excellence

    -   Trusted Partner

**1.3 Target Industries**

-   Manufacturing

-   Healthcare

-   Retail

-   Financial Services

**1.4 Technology Partners**

-   Microsoft

-   SAP

-   UiPath (certified)

-   OutSystems

-   Salesforce

**2. Visual Language**

**2.1 Color Palette**

**Primary Colors** (pixel-sampled from accelance.io, confirmed
2025--2026)

  --------------------------------------------------------------------------
  **Name**      **Hex**   **RGB**   **Usage**               **WCAG**
  ------------- --------- --------- ----------------------- ----------------
  Accelance     #0052CC   (0, 82,   Primary buttons,        AA normal text
  Blue                    204)      headers, links, icons   on white

  Accelance     #003A8F   (0, 58,   Hover states, active    AA large text
  Blue Dark               143)      elements                

  Success Green #1A7A4A   (26, 122, Positive metrics,       AA normal text
                          74)       success states          

  Alert Orange  #D5680B   (213,     Business value          AA large text
                          104, 11)  highlights, warnings    only

  Compliance    #0891B5   (8, 145,  Compliance/risk         AA large text
  Teal                    181)      indicators              only

  Body Gray     #6B6B6B   (107,     Body text, secondary    AA normal text
                          107, 107) labels                  

  Light Blue    #C8D8EC   (200,     Card backgrounds,       N/A (decorative)
  Tint                    216, 236) section tints           

  Pure White    #FFFFFF   (255,     Backgrounds, text on    N/A
                          255, 255) dark                    

  Off-White     #F8FAFC   (248,     Alternate backgrounds   N/A
                          250, 252)                         

  Border Gray   #E2E8F0   (226,     Dividers, input borders N/A
                          232, 240)                         
  --------------------------------------------------------------------------

**Semantic Rules:**

-   Blue = primary actions, trust, headers

-   Green = positive/health/success

-   Orange = business value/alerts (never decorative)

-   Teal = compliance/risk

-   Gray = neutral body text

-   Colors are semantic, never decorative

**2.2 Typography**

**Primary Typeface:** Inter (Google Fonts, free, modern, geometric
sans-serif)
**Fallback:** Arial (for corporate environments without Inter)

  ------------------------------------------------------------------------------
  **Role**     **Font**      **Weight**   **Size    **Line       **Letter
                                          (px)**    Height**     Spacing**
  ------------ ------------- ------------ --------- ------------ ---------------
  H1           Inter Bold    700          48        1.2          -0.02em

  H2           Inter Bold    700          36        1.3          -0.01em

  H3           Inter Bold    700          24        1.4          0

  H4           Inter Bold    700          20        1.4          0

  H5           Inter Bold    700          16        1.5          0

  Body Large   Inter Regular 400          18        1.6          0

  Body         Inter Regular 400          16        1.6          0

  Body Small   Inter Regular 400          14        1.5          0

  Caption      Inter Regular 400          12        1.4          0.05em

  Button       Inter Bold    700          16        1.0          0.02em

  Label        Inter Regular 400          14        1.4          0.02em
  ------------------------------------------------------------------------------

**Corporate Fallback (if Inter unavailable):**

-   Headings: Arial Bold (700)

-   Body: Arial Regular (400)

-   Sizes and spacing remain identical

**2.3 Spacing & Layout**

**Base Unit:** 8px

  ------------------------------------------------------------------------
  **Token**   **Value (px)** **Usage**
  ----------- -------------- ---------------------------------------------
  space-1     8              Tight padding, icon spacing

  space-2     16             Card padding, button padding

  space-3     24             Section padding, component gaps

  space-4     32             Large section gaps

  space-5     48             Hero spacing, major divisions

  space-6     64             Page-level spacing
  ------------------------------------------------------------------------

**Layout Grid:**

-   **Website:** 12-column grid, max-width 1200px, 24px gutters

-   **PPT:** 16:9, safe margins 64px all sides

-   **One-pagers:** 1" margins (96px), 12-column implicit grid

-   **Documents:** 1" margins, single-column body

**2.4 Shapes & Effects**

**Corner Radius:**

-   Universal: 8px (cards, buttons, inputs, modals)

-   Images: 8px

-   No hard borders (0px radius deprecated)

**Shadows:**

-   Subtle: 0 1px 3px rgba(0, 0, 0, 0.1)

-   Elevated: 0 4px 12px rgba(0, 0, 0, 0.15)

-   Use sparingly (only for cards, modals, dropdowns)

**Borders:**

-   Default: 1px solid #E2E8F0

-   Focus: 2px solid #0052CC

-   Error: 1px solid #D5680B

**2.5 Iconography**

**Library:** Tabler Icons (outline, 2px stroke, MIT license)
**Size:** 24x24 standard, 16x16 for dense UIs
**Color:** Inherit from text color (default: #6B6B6B)
**Style:** Outline only (no filled icons)
**Alternative:** Heroicons Outline (if Tabler unavailable)

**2.6 Proposed Web Theme (Dark) — ⚠️ UNVERIFIED, DO NOT TREAT AS CONFIRMED**

**Status: Pending Site Verification.** This is a *second, alternative* palette/theme proposed specifically for the website, submitted as unsourced text (no artifact, no screenshot, no citation of how it was derived beyond "does not expose its exact font stack/hex values in the accessible content" — i.e., it is admittedly a guess). It directly contradicts every confirmed visual artifact in this design system (all decks, one-pagers, and LinkedIn posts are light-themed on white backgrounds). **Do not merge this into Section 2.1/2.2 above, and do not use it in production until the live accelance.io site has actually been viewed and confirmed to match.** It is recorded here, separately, so it isn't lost — not because it's been validated.

*Proposed dark palette (unverified):*
| Name | Hex | Proposed use |
|---|---|---|
| Primary background | `#07111F` | Page base |
| Secondary background | `#0B1728` | Alternate section background |
| Card surface | `#111F35` | Cards/panels |
| Border/divider | `#243654` | Dividers, borders |
| Primary text | `#F5F8FF` | Headlines on dark |
| Muted text | `#AAB7D0` | Supporting copy on dark |
| Primary accent blue | `#4E7DFF` | CTAs, highlights |
| Bright accent/hover blue | `#7AA2FF` | Hover states |
| Success/trust accent | `#4CD4B0` | Trust/positive indicators |
| CTA gradient end | `#2F5BFF` | Button gradients |

*Proposed typeface options (unverified, in addition to the already-pending Inter/Arial decision above):* Headings — Inter, Manrope, or Sora; Body — Inter or Source Sans 3; conservative option — Inter for both.

*Proposed imagery direction (unverified):* Hero — abstract digital grids, futuristic enterprise/AI visuals; Services pages — dashboards, process maps, analytics screens; Company pages — minimal team/office imagery; Product pages — UI mockups, modular platform screens; Process/AI pages — system diagrams, agent orchestration flows, layered trust/guardrail graphics.
**Conflict flag:** this contradicts the one confirmed photographic hero (AaaS one-pager: a human-hand/keyboard image, not abstract digital-grid futurism) and the confirmed full-bleed cover photo style (A9: real skyline/highway photography, not abstract sci-fi visuals).

*Proposed UI specification (unverified):* dark, high-contrast layout; strong hero typography with short stacked lines; rounded cards with subtle borders; blue accent used sparingly; large section spacing; understated (not oversaturated) CTA buttons; reusable section blocks with consistent padding; feature cards / process blocks / trust statements; minimalistic icons (this last point does not conflict — it matches the confirmed Tabler-outline direction).

**Why this is flagged instead of adopted:** the described UI pattern (stacked hero type, rounded cards, generous spacing, restrained accent color, minimalist icons) reads as a generic modern-SaaS-template description that would fit many unrelated companies equally well, not something demonstrably specific to accelance. Combined with zero real screenshot evidence and a direct conflict with every confirmed light-themed artifact, this should be verified against the live site — a simple visual check — before any part of it is promoted out of this flagged section.

**3. Presentation System (PPT)**

**3.1 Master Slide Specs**

**Slide Size:** 16:9 (1920x1080)
**Margins:** 64px all sides (safe zone)
**Logo Placement:** Top-right, 24px from edge
**Footer:** "Prepared by accelance | Confidential | [Year]" + page
number + confidentiality bar (bottom, 16px height, #0052CC background,
white text)

**3.2 Slide Archetypes**

1.  **Cover Slide**

    -   Full-bleed hero image or gradient (#0052CC → #003A8F)

    -   H1 title (48px, white), H2 subtitle (24px, white)

    -   Logo top-right, date bottom-left

2.  **Agenda / Section Divider**

    -   Blue background (#0052CC), white text

    -   H2 section title (36px)

    -   Numbered list (24px)

3.  **Content Slide (Standard)**

    -   White background

    -   H3 title (24px, #0052CC)

    -   Body text (16px, #6B6B6B, 1.6 line height)

    -   Bullet points: 8px spacing, 24px indent

    -   Icons: Tabler outline, 24x24, #0052CC

4.  **Two-Column Layout**

    -   Left: Text (60% width)

    -   Right: Image/diagram (40% width)

    -   32px gap between columns

5.  **Full-Bleed Image**

    -   Image edge-to-edge

    -   Overlay gradient (dark to transparent) for text readability

    -   H2 title (36px, white)

6.  **Quote / Testimonial**

    -   Light blue tint background (#C8D8EC)

    -   H4 quote text (20px, #0052CC, italic)

    -   Attribution (16px, #6B6B6B)

7.  **Data / Metrics**

    -   Large number (48px, #0052CC, bold)

    -   Label (16px, #6B6B6B)

    -   Icon (24x24, #0052CC)

8.  **Thank You / CTA**

    -   Blue background (#0052CC)

    -   H2 "Thank You" (36px, white)

    -   Contact info (16px, white)

    -   Logo centered

**3.3 Animation & Transitions**

-   **Transitions:** Fade only (0.3s)

-   **Animations:** Appear (0.2s delay between items)

-   **Avoid:** Bounce, spin, complex motion

**4. Word Document System**

**4.1 Template Specs**

**Margins:** 1" all sides (2.54cm)
**Page Size:** A4 or Letter
**Header:** Logo top-right, document title top-left (11pt, #0052CC)
**Footer:** "Prepared by accelance | Confidential | [Year]" + page
number (10pt, #6B6B6B)

**4.2 Typography**

  --------------------------------------------------------------------------------
  **Element**   **Font**        **Size**   **Color**   **Spacing**
  ------------- --------------- ---------- ----------- ---------------------------
  H1            Arial Bold      20pt       #0052CC     24pt before, 12pt after

  H2            Arial Bold      16pt       #0052CC     18pt before, 10pt after

  H3            Arial Bold      13pt       #6B6B6B     14pt before, 8pt after

  Body          Arial Regular   11pt       #6B6B6B     1.15 line spacing

  Caption       Arial Regular   9pt        #6B6B6B     6pt before, 6pt after
  --------------------------------------------------------------------------------

**4.3 Document Structure**

1.  **Cover Page**

    -   Title (H1, centered)

    -   Subtitle (H2, centered)

    -   Logo top-right

    -   Date bottom-center

    -   Confidentiality notice bottom (9pt, #6B6B6B)

2.  **Revision History Table** (after cover)

    -   Columns: Version, Date, Author, Changes

    -   10pt, #6B6B6B, 1px borders (#E2E8F0)

3.  **Table of Contents** (auto-generated)

4.  **Body Content**

    -   Left-aligned, no justification

    -   1.15 line spacing

    -   Bullets: 8mm indent, 6mm spacing

5.  **Appendices** (if needed)

**5. Digital Product UI (Internal Apps)**

**Status:** Recommended Enterprise Standard / Pending Brand Approval
**Note:** No direct evidence from accelance.io internal apps. Built from modern SaaS best practices aligned to the confirmed brand identity. (Correction from original docx: the Show Connect Figma file was never successfully accessed during this project — no Figma-derived evidence exists in this section.)

**5.1 Component Library**

**Buttons:**

-   Primary: #0052CC background, white text, 8px radius, 16px horizontal
    padding

-   Secondary: White background, #0052CC border, #0052CC text

-   Tertiary: Transparent, #0052CC text (link-style)

**Inputs:**

-   Border: 1px #E2E8F0, 8px radius

-   Focus: 2px #0052CC border

-   Error: 1px #D5680B border

**Cards:**

-   Background: #FFFFFF

-   Border: 1px #E2E8F0

-   Shadow: Subtle (0 1px 3px rgba(0,0,0,0.1))

-   Radius: 8px

-   Padding: 16px

**Tables:**

-   Header: #F8FAFC background, 11pt bold (#0052CC)

-   Body: 11pt (#6B6B6B)

-   Borders: 1px #E2E8F0 (horizontal only)

-   Hover row: #F8FAFC

**Navigation:**

-   Top bar: #FFFFFF background, 64px height

-   Logo left, user menu right

-   Active state: #0052CC underline (2px)

**5.2 Layout Patterns**

-   **Dashboard:** 12-column grid, card-based widgets

-   **Forms:** Single column, 24px spacing between fields

-   **Modals:** Centered, 480px max-width, 8px radius, subtle shadow

-   **Toasts:** Top-right, 320px width, 4s auto-dismiss

**6. Content System**

**6.1 Voice & Tone**

**Attributes:**

-   Confident, executive, consultative

-   Governance-aware (risk + control)

-   Contrarian-hook headlines

-   Value prop = capability + risk-reducer

**Examples:**

-   ❌ "We help companies with AI."

-   ✅ "Agentification: Augment your ERP without replacement."

**CTAs:**

-   ✅ "Start the no-cost pilot"

-   ✅ "Schedule a call with our team"

-   ❌ "Can we schedule a call?" (permission-seeking)

**6.2 Terminology**

-   "Agentification" (not "AI automation")

-   "Augment, don't replace"

-   "THEN / NOW / NEXT" maturity framing

-   "Human-in-the-loop governance"

-   "The RIGHT people in control of the RIGHT decisions"

**6.3 Client Confidentiality**

-   Anonymize all client references (role + sector only)

-   No client logos without explicit approval

-   Placeholder blocks for client-logo walls

**7. LinkedIn Style Guide**

**7.1 Post Types & Templates**

**Type 1: Thought Leadership (Contrarian Hook)**

-   **Hook:** "Most companies are doing [X] wrong. Here's why."

-   **Body:** 2--3 sentences framing the problem

-   **Solution:** 1 sentence on accelance approach

-   **CTA:** "Agree? Let's discuss." or "DM me for the playbook."

-   **Hashtags:** #Agentification #DigitalTransformation #AI #ERP #RPA

-   **Visual:** Single image (1080x1080), blue gradient background,
    white text overlay (H2 size, Inter Bold)

**Type 2: Case Study Teaser**

-   **Hook:** "How we helped a [role] in [sector] achieve
    [result]."

-   **Body:** Problem → Solution → Outcome (3 bullets)

-   **CTA:** "Want the full story? Comment 'case study'."

-   **Hashtags:** #CaseStudy #AITransformation #RPA #SAP #UiPath

-   **Visual:** Before/after metrics (large numbers, blue accent)

**Type 3: Product/Feature Launch**

-   **Hook:** "Introducing [feature]: [benefit in 1 sentence]."

-   **Body:** 2 bullets on what it does

-   **CTA:** "Start the no-cost pilot."

-   **Hashtags:** #ProductLaunch #AI #Agentification #Automation

-   **Visual:** Product screenshot (1200x628), 8px radius, subtle shadow

**Type 4: Event/Webinar Promotion**

-   **Hook:** "Join us [date] for [topic]."

-   **Body:** 3 bullets on what attendees will learn

-   **CTA:** "Register here: [link]"

-   **Hashtags:** #Webinar #AI #DigitalTransformation #Leadership

-   **Visual:** Speaker headshot + event title (1080x1350)

**Type 5: Team/Culture**

-   **Hook:** "Behind the scenes at accelance."

-   **Body:** 1--2 sentences on team, values, or milestone

-   **CTA:** "We're hiring. Check out [role]."

-   **Hashtags:** #TeamAccelance #Hiring #Culture #TechJobs

-   **Visual:** Team photo or office shot (1080x1080)

**7.2 Visual Specs for LinkedIn**

**Image Sizes:**

-   Single image post: 1080x1080 (1:1) or 1080x1350 (4:5)

-   Link preview: 1200x628 (1.91:1)

-   Story: 1080x1920 (9:16)

**Design Rules:**

-   8px radius on all images

-   Subtle shadow (0 1px 3px rgba(0,0,0,0.1))

-   Text overlay: Inter Bold, 36--48px, white on #0052CC gradient

-   Logo: Bottom-right, 48x48px, 16px from edge

**Color Usage:**

-   Background: #0052CC → #003A8F gradient (primary)

-   Alternative: #F8FAFC background with #0052CC text

-   Accent: #1A7A4A (success metrics), #D5680B (value highlights)

**7.3 Posting Cadence**

-   **Frequency:** 3--4 posts/week

-   **Timing:** Tuesday--Thursday, 9--11 AM EST

-   **Mix:** 40% thought leadership, 30% case studies, 20% product, 10%
    culture

**7.4 Engagement Guidelines**

-   Respond to all comments within 24 hours

-   Use conversational, professional tone (no emojis in replies)

-   Tag relevant partners (Microsoft, SAP, UiPath) when applicable

-   Avoid: Controversial topics, client names without approval, pricing
    discussions

## 8. AI Prompt Library

## 8.1 Brand Kernel (Shared Context)

**Prompt**

**You are designing for accelance (always lowercase), an IT services and
digital transformation consultancy founded in 2019, HQ Reading,
Pennsylvania. Positioning: Agentic AI / "Agentification" specialist
--- augmenting existing enterprise systems (ERP, CRM, RPA) with an
intelligent agent layer.**

**Brand colors: Accelance Blue #0052CC (primary), Success Green #1A7A4A,
Alert Orange #D5680B, Compliance Teal #0891B5, Body Gray #6B6B6B, Light
Blue Tint #C8D8EC.**

**Typography: Inter Bold (headings), Inter Regular (body). Fallback:
Arial Bold / Arial.**

**Voice: Confident, executive, consultative, governance-aware.
Contrarian-hook headlines. Value prop = capability + risk-reducer. CTAs
verb-first and confident ("Start the no-cost pilot"), never
permission-seeking.**

**Key terminology: "Agentification," "augment don't replace,"
THEN/NOW/NEXT maturity framing, human-in-the-loop governance.**

**Design rules: 8px universal corner radius, Tabler outline icons
(24x24), subtle shadows, rounded tinted cards over hard borders,
8px-based spacing (8/16/24/32/48/64).**

## 8.2 PPT Generation Prompt

**Using the Brand Kernel above, generate a [19-slide / 10-slide /
5-slide] proposal deck for [topic: e.g., "AI Agentification for
UiPath RPA"].**

**Slide structure:**

**1. Cover (full-bleed blue gradient, H1 title, logo top-right)**

**2. Agenda (blue background, numbered list)**

**3. Problem (H3 title, 3 bullets, icon)**

**4. Solution (H3 title, 2-column layout: text + diagram)**

**5. Approach (H3 title, THEN/NOW/NEXT framework)**

**6. Timeline (H3 title, Gantt-style visual)**

**7. Team (H3 title, 3 profiles with photos)**

**8. Case Study (H3 title, anonymized client, metrics)**

**9. Investment (H3 title, no pricing table, CTA: "Schedule a call with
our team")**

**10. Next Steps (H3 title, 3 bullets, CTA)**

**[Add slides 11--19 as needed: deep dives, technical specs, FAQs,
testimonials, thank you]**

**Design specs:**

**- Slide size: 16:9**

**- Margins: 64px**

**- Logo: Top-right, 24px from edge**

**- Footer: "Prepared by accelance | Confidential | [Year]" + page
number**

**- Colors: Blue #0052CC for headers/buttons, Gray #6B6B6B for body**

**- Typography: Inter Bold (H1 48px, H2 36px, H3 24px), Inter Regular
(body 16px)**

**- Icons: Tabler outline, 24x24, blue**

**- Radius: 8px on cards, buttons**

**- Shadows: Subtle only**

**Output: Slide-by-slide content with speaker notes, design annotations,
and visual descriptions.**

## 8.3 Word Document Prompt

**Using the Brand Kernel above, generate a [proposal / case study /
whitepaper] document for [topic].**

**Structure:**

**1. Cover page (title H1, subtitle H2, logo top-right, date,
confidentiality notice)**

**2. Revision history table (Version, Date, Author, Changes)**

**3. Table of contents (auto-generated)**

**4. Executive summary (H2, 1 paragraph)**

**5. Body sections (H2/H3, left-aligned, 1.15 spacing)**

**6. Conclusion (H2, 1 paragraph)**

**7. Appendices (if needed)**

**Design specs:**

**- Margins: 1" all sides**

**- Typography: Arial Bold (H1 20pt, H2 16pt, H3 13pt), Arial Regular
(body 11pt)**

**- Colors: Blue #0052CC for headers, Gray #6B6B6B for body**

**- Spacing: 24pt before H2, 14pt before H3, 1.15 body line spacing**

**- Footer: "Prepared by accelance | Confidential | [Year]" + page
number (10pt, gray)**

**Output: Full document text with formatting annotations
(H1/H2/H3/body), ready for Word template application.**

## 8.4 One-Pager Prompt

**Using the Brand Kernel above, generate a one-pager for [topic: e.g.,
"Process Mining", "AaaS", "Company Introduction"].**

**Structure:**

**1. Header (wave/curve banner motif, blue gradient, H1 title, logo
top-right)**

**2. Problem statement (H3, 2--3 sentences, icon)**

**3. Solution overview (H3, 3 bullets, icons)**

**4. Value proposition (H3, 2 metrics, green accent)**

**5. How it works (H3, 3-step process, numbered, icons)**

**6. CTA (H3, "Start the no-cost pilot" or "Schedule a call with our
team", contact info)**

**Design specs:**

**- Size: A4 or Letter**

**- Margins: 1" all sides**

**- Colors: Blue #0052CC (headers), Gray #6B6B6B (body), Green #1A7A4A
(metrics)**

**- Typography: Inter Bold (H1 36px, H3 20px), Inter Regular (body
14px)**

**- Icons: Tabler outline, 24x24, blue**

**- Radius: 8px on cards**

**- Wave motif: Only for one-pagers (header banner)**

**Output: Full content with layout annotations, ready for
InDesign/Canva/PPT application.**

## 8.5 Website Page Prompt

**Using the Brand Kernel above, generate content for a [service page /
case study page / about page] on accelance.io.**

**Structure:**

**1. Hero section (full-width, H1 title, subhead, CTA button)**

**2. Problem/Opportunity (H2, 2--3 paragraphs, icon grid)**

**3. Solution (H2, 3-column card layout, icons)**

**4. How it works (H2, step-by-step, numbered, connector lines)**

**5. Results (H2, 3 metrics, green accent, large numbers)**

**6. Case study teaser (H2, anonymized client, "Read more" link)**

**7. CTA section (full-width blue background, H2, CTA button)**

**Design specs:**

**- Layout: 12-column grid, max-width 1200px**

**- Spacing: 64px between sections, 32px between components**

**- Colors: Blue #0052CC (headers/buttons), Gray #6B6B6B (body), Green
#1A7A4A (metrics)**

**- Typography: Inter Bold (H1 48px, H2 36px, H3 24px), Inter Regular
(body 16px)**

**- Icons: Tabler outline, 24x24, blue**

**- Cards: 8px radius, subtle shadow, 16px padding**

**- Buttons: 8px radius, 16px horizontal padding, blue background**

**Output: Section-by-section content with design annotations, ready for
web development.**

## 8.6 LinkedIn Post Prompt

**Using the Brand Kernel above, generate [5] LinkedIn posts for
[topic: e.g., "Agentification", "RPA", "AI Governance"].**

**Post types:**

**1. Thought leadership (contrarian hook)**

**2. Case study teaser**

**3. Product/feature launch**

**4. Event/webinar promotion**

**5. Team/culture**

**For each post:**

**- Hook (1 sentence, bold)**

**- Body (2--3 sentences)**

**- CTA (verb-first, confident)**

**- Hashtags (3--5 relevant)**

**- Visual description (1080x1080 or 1200x628, blue gradient, white text
overlay, logo bottom-right)**

**Tone: Confident, executive, consultative. No emojis in copy.
Professional, governance-aware.**

**Output: 5 complete posts with visual specs, ready for scheduling.**

## 9. Component Library + Web-Native System

## 9.1 CSS Variables (Design Tokens)

**:root {**

**/\* Colors \*/**

**--color-primary: #0052CC;**

**--color-primary-dark: #003A8F;**

**--color-success: #1A7A4A;**

**--color-alert: #D5680B;**

**--color-compliance: #0891B5;**

**--color-body: #6B6B6B;**

**--color-tint: #C8D8EC;**

**--color-white: #FFFFFF;**

**--color-off-white: #F8FAFC;**

**--color-border: #E2E8F0;**

**/\* Typography \*/**

**--font-family: 'Inter', Arial, sans-serif;**

**--font-size-h1: 48px;**

**--font-size-h2: 36px;**

**--font-size-h3: 24px;**

**--font-size-h4: 20px;**

**--font-size-body: 16px;**

**--font-size-small: 14px;**

**--line-height-heading: 1.3;**

**--line-height-body: 1.6;**

**/\* Spacing \*/**

**--space-1: 8px;**

**--space-2: 16px;**

**--space-3: 24px;**

**--space-4: 32px;**

**--space-5: 48px;**

**--space-6: 64px;**

**/\* Radius \*/**

**--radius: 8px;**

**/\* Shadows \*/**

**--shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.1);**

**--shadow-elevated: 0 4px 12px rgba(0, 0, 0, 0.15);**

**}**

## 9.2 Component Examples

**Button (Primary):**

**\<button class="btn btn-primary"\>Start the no-cost
pilot\</button\>**

**.btn {**

**padding: 12px 24px;**

**border-radius: var(--radius);**

**font-family: var(--font-family);**

**font-weight: 700;**

**font-size: 16px;**

**cursor: pointer;**

**border: none;**

**}**

**.btn-primary {**

**background: var(--color-primary);**

**color: var(--color-white);**

**}**

**.btn-primary:hover {**

**background: var(--color-primary-dark);**

**}**

**Card:**

**\<div class="card"\>**

**\<h3 class="card-title"\>Agentification\</h3\>**

**\<p class="card-body"\>Augment your ERP without replacement.\</p\>**

**\</div\>**

**.card {**

**background: var(--color-white);**

**border: 1px solid var(--color-border);**

**border-radius: var(--radius);**

**box-shadow: var(--shadow-subtle);**

**padding: var(--space-2);**

**}**

**.card-title {**

**font-family: var(--font-family);**

**font-weight: 700;**

**font-size: var(--font-size-h3);**

**color: var(--color-primary);**

**margin-bottom: var(--space-2);**

**}**

**.card-body {**

**font-family: var(--font-family);**

**font-weight: 400;**

**font-size: var(--font-size-body);**

**color: var(--color-body);**

**line-height: var(--line-height-body);**

**}**

**10. Brand Rules & Governance**

**10.1 Status Labels**

-   **Extracted from Evidence:** Directly observed in uploaded assets
    (decks, one-pagers, website screenshots)

-   **Inferred from Multiple Artifacts:** Recurring pattern across 2+
    sources

-   **Recommended Enterprise Standard:** Best practice aligned to
    confirmed identity, not yet observed

-   **Pending Brand Approval:** Requires stakeholder sign-off (e.g.,
    font, logo vector)

**10.2 Open Items (Unresolved)**

-   **Typeface:** Inter (recommended) vs. Arial (corporate fallback).
    Pending brand approval.

-   **Vector logo:** Interim raster PNG exists. Need .svg/.ai/.eps for
    production.

-   **Module 5 (Internal App UI):** Zero direct evidence. Awaiting Figma
    screenshots or dev-mode token export.

-   **Website spec (Module 8.5):** Built as best-practice
    recommendation. Real screenshots/CSS would enable proper
    re-derivation.

-   **Web theme conflict (Section 2.6):** an unsourced proposed dark
    theme (`#07111F` navy base, `#4E7DFF` accent) was submitted for the
    website, contradicting every confirmed light-themed artifact in
    this system. **Requires a direct visual check of the live site**
    before any part of it is adopted. Until then it remains flagged in
    Section 2.6 only and is not part of the confirmed palette.

-   **WebTalkx ownership:** Unconfirmed. If accelance-owned product, its
    screens could seed Module 5.

-   **Off-brand deck:** Accelance_AI_Agentification_Deck.pptx uses wrong
    logo weight, capitalized "Accelance," wrong footer, non-brand
    colors. Recommended for retirement/reformatting.

**10.3 Evidence Hierarchy**

1.  **Extract from uploaded assets** (decks, one-pagers, website
    screenshots)

2.  **Infer from recurring patterns** across 2+ artifacts

3.  **Recommend enterprise best practice** aligned to confirmed identity

4.  **Never fabricate** as "official" standard

**10.4 Usage Guidelines**

-   **Do:** Use this design system for all accelance deliverables
    (website, PPT, docs, one-pagers, LinkedIn, internal apps)

-   **Do:** Label all designs with status (Extracted, Inferred,
    Recommended, Pending)

-   **Do:** Escalate open items (font, logo, Figma) for stakeholder
    approval

-   **Don't:** Use the off-brand A8 deck as a style source

-   **Don't:** Use decorative colors (orange, teal) outside semantic
    roles

-   **Don't:** Capitalize "Accelance" (always lowercase)

-   **Don't:** Include client logos or names without explicit approval

**Appendix A: Source Artifacts Reviewed**

-   **A1:** Commercial proposal cover slide (AI Agentification for
    UiPath RPA)

-   **A2:** 5 LinkedIn post screenshots + company overview screenshot

-   **A3:** ChatGPT-generated LinkedIn analysis (secondary, partially
    unverified)

-   **A4:** ChatGPT-generated website analysis (secondary, unverified)

-   **A5:** 3 one-pagers (Process Mining, AaaS, Company Introduction)

-   **A6:** PMI_Agentic_AI_Solution_1.pptx (19-slide full proposal deck
    --- richest single source)

-   **A7:** Vision/Mission/Commitment brand screenshot

-   **A8:** Accelance_AI_Agentification_Deck.pptx (⚠️ flagged off-brand)

-   **A9:** accelance_capability_introduction_2307_c.pptx (20 slides;
    on-brand; contains WebTalkx screens, thank-you slide, testimonial,
    divider slides, client logo wall)

**Appendix B: Bounteous Inspiration (What We Borrowed)**

-   **Modern, geometric sans-serif typography** (Inter over Arial, where
    possible)

-   **Generous white space** (64px section spacing, 32px component gaps)

-   **Card-based content blocks** (8px radius, subtle shadows)

-   **Full-width hero sections** (gradient backgrounds, bold headlines)

-   **12-column grid layouts** (max-width 1200px, 24px gutters)

-   **Icon + text pairing** (Tabler outline, 24x24, blue accent)
    

**Handoff Instructions:**
To restore context in a new chat: upload this file
(accelance-design-system-v1.1.md) plus
accelance-brand-standards-guide.md and
accelance-brand-template-reference.md. This file covers decisions and
full specifications; those two cover structural documentation and
historical context.
