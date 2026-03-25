# Portfolio Redesign: Apple-Inspired UX Overhaul

## Phase 1: Audit

Read every file in the codebase. Produce `PLAN.md` listing:
1. Every component/page file and its role
2. Which files need changes (1-line each)
3. Execution order (highest visual impact first)

Stop and commit `PLAN.md` before any code changes.

---

## Phase 2: Execute

### A. Design Tokens

Create a shared config (CSS vars or Tailwind theme) with these Apple-derived values:

```
Colors:
  bg-primary:       #FBFBFD       (main background)
  bg-secondary:     #F5F5F7       (alternating sections)
  bg-dark:          #1D1D1F       (dark sections/footer)
  text-primary:     #1D1D1F
  text-secondary:   #6E6E73
  text-tertiary:    #86868B
  accent:           #0071E3       (links, primary CTA)
  accent-hover:     #0077ED
  border:           #D2D2D7
  glass:            rgba(255,255,255,0.72)

Typography:
  font-family: "SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
  h1: 56-80px, weight 600, letter-spacing -0.03em
  h2: 40-48px, weight 600, letter-spacing -0.02em
  h3: 24-28px, weight 600
  body: 17px/1.47, weight 400
  caption: 14px, weight 400, text-secondary color

Spacing: 8px base — 4,8,12,16,24,32,48,64,80,120
Border-radius: cards 18-20px, buttons pill (9999px) or 12px, images 12-16px
Shadows:
  sm: 0 2px 8px rgba(0,0,0,0.04)
  md: 0 4px 24px rgba(0,0,0,0.08)
  lg: 0 8px 40px rgba(0,0,0,0.12)
Content max-width: 980px (text), 680px (paragraphs)
```

### B. Component-by-Component Changes

**Navbar**
- Current: has 6 nav links + "Ansh.dev" branding. Fine structure but needs glass treatment.
- Change: apply `backdrop-filter: blur(20px) saturate(180%)` + `bg-glass` + `border-bottom: 1px solid var(--border)`. Height 48px. Remove "Resume" from nav (keep it as a CTA elsewhere). Reduce to 4 links: About, Experience, Projects, Contact. Logo text: just "Ansh Shah" in weight 500, no ".dev" branding.

**Hero Section**
- Current: "Hi, I'm Ansh Shah" + "Building efficient systems..." + 3 CTA buttons + typing cursor animation.
- Problems: the `|` typing cursor is a cliché. Three CTAs compete for attention. "View Projects" as primary competes with "View Resume".
- Change: Remove typing cursor effect entirely. Single headline: "Ansh Shah" (72px, weight 600, tight tracking). Subline: "Hardware engineer. EECS @ UC Berkeley." (21px, text-secondary). Two CTAs max: "View Resume" as primary pill button (accent-blue, white text), "Get in Touch" as ghost/text link. Kill "View Projects" button — the page scrolls there naturally. Add generous vertical padding (120-200px top/bottom).

**About Section**
- Current: headshot + 3 stat badges (GPA, Standing, Graduation) + "Current Hobby: 🎸 Guitaring" + 3 paragraphs + "Core Competencies" pill tags.
- Problems: stat badges are dashboard-style widgets — too busy for Apple UX. "Guitaring" hobby badge is informal noise. Core Competencies pills duplicate the Skills section below. Three dense paragraphs are too much body text.
- Change: Keep headshot (round crop, subtle shadow, 160-200px). Remove all stat badges. Remove hobby badge. Condense bio to ONE paragraph (4-5 sentences max). Remove "Core Competencies" subsection entirely — Skills section handles this. The image and text should sit side by side on desktop (60/40 split), stacked on mobile.

**Experience Section**
- Current: two roles (SLICE Lab, CS 61C) with role/org/date/bullets. Clean structure.
- Problems: minor — the subheader "Research, teaching, and building systems" is filler.
- Change: Remove the subheader. Keep the cards but simplify styling: no colored accent borders or decorative elements. Company/lab name in weight 600, role in weight 400 text-secondary, date in text-tertiary right-aligned. Bullets: 17px body weight. Generous card padding (32px). Cards should have bg-secondary background + border-radius 20px, no hard borders.

**Projects Section**
- Current: 4 projects with thumbnail images, date labels, tech pills, bullet descriptions, "Click to see more" expand.
- Problems: "Click to see more" is vague — Apple would just show the content or link clearly. The thumbnail images are small. Section subheader "Hardware design, embedded security, and systems programming" is redundant.
- Change: Remove subheader. Make project images larger (full card width, aspect-ratio 16/9, object-fit cover, rounded-t-2xl). Remove "Click to see more" — show all bullets by default (you only have 3-4 per project anyway). Tech tags: plain text in text-tertiary, separated by `·` instead of pills. "Code" link: simple text link in accent-blue, no button styling. Consider making the CPU project a hero/featured card (larger, spanning full width) since it's the strongest.

**Skills Section**
- Current: 4-category grid (Architecture, Hardware Design, Low-Level Systems, Verification) each with pill tags.
- Problems: the pills create visual clutter — ~28 pills total. Feels like a keyword dump.
- Change: Keep the 4 categories but replace pills with plain comma-separated text. Category headers in weight 600, skills in weight 400 text-secondary. Simple 2x2 grid on desktop, stacked on mobile. No background cards — just clean typography with dividers or whitespace.

**Contact Section**
- Current: Email/GitHub/LinkedIn cards + phone "Reveal Contact" + "Based in Berkeley, CA" + "Send me an email" CTA.
- Problems: "Reveal Contact" for phone is friction. The location callout is redundant. Too many elements.
- Change: Simple centered layout. "Get in Touch" heading. One line: `ansh_shah@berkeley.edu` as a large clickable link. Below: GitHub + LinkedIn as simple text links with `·` separator. Remove phone reveal, remove location card, remove duplicate CTA.

**Footer**
- Current: "© 2026 Ansh Shah. Built with Next.js & Framer Motion."
- Change: Keep copyright. Remove "Built with Next.js & Framer Motion". Style in text-tertiary, centered, 48px padding.

**Resume Page**
- Apply same design tokens. Replace pill tags with plain text. Match typography with main page.

### C. Motion & Interactions

Keep Framer Motion but restrain it:
- Page load: fade-in + translateY(12px→0), 0.5s ease-out, stagger 0.08s per section
- Scroll: `IntersectionObserver` reveal, animate once, threshold 0.1
- Project cards hover: `scale(1.01)` + shadow lift, transition 0.3s
- Links: color transition 0.2s
- REMOVE: any parallax, particle effects, typewriter/cursor animations, bouncy spring physics

### D. Deletion List

- Typing cursor `|` animation in hero
- "Current Hobby 🎸 Guitaring" badge
- GPA / Standing / Graduation stat badges (mention GPA naturally in bio text)
- "Core Competencies" pill group in About
- All section subheaders ("Research, teaching, and building systems" / "Hardware design, embedded security..." / "Tools and technologies I work with")
- "Click to see more" expand toggles on project cards
- Phone "Reveal Contact" widget
- "Based in Berkeley, CA" location card
- "Built with Next.js & Framer Motion" footer credit
- `Ansh.dev` branding (replace with "Ansh Shah" plaintext)

### E. Reference

- **apple.com**: whitespace, typography scale, neutral palette
- **brittanychiang.com**: minimal dev portfolio, clean project cards
- **leerob.io**: Next.js portfolio, typographic hierarchy
- Apple HIG: Clarity, Deference, Depth, Consistency

### F. Constraints

- Keep Next.js + Tailwind + Framer Motion — no new dependencies
- Override Tailwind theme config with Apple tokens
- Lighthouse >90
- Responsive: 375px, 768px, 1440px
- Dark mode optional — if present, use #000 bg, #F5F5F7 text

---

## Phase 3: Verify

1. `npm run build` — zero errors
2. Visual check each section at 1440px and 375px
3. All links and routes work
4. Commit: `redesign: apple-inspired ux overhaul`