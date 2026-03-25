# PLAN.md — Kellie Ho-Inspired Dark Bento Portfolio Redesign

## 1. Component Tree & File Map

### Pages
| File | Role |
|------|------|
| `src/app/layout.tsx` | Root layout — metadata, fonts, Navbar/Footer/LayoutClient |
| `src/app/page.tsx` | Home page — renders HomePageClient |
| `src/app/globals.css` | Global styles, CSS variables, utility classes |
| `src/app/resume/page.tsx` | Resume page wrapper |
| `src/app/not-found.tsx` | 404 page |
| `src/app/projects/page.tsx` | **NEW** — Full project gallery page |

### Home Page Components
| File | Role |
|------|------|
| `src/components/HomePageClient.tsx` | Home page orchestrator — all sections |
| `src/components/HeroSection.tsx` | Hero with bento grid (name, photo, stats, socials) |
| `src/components/AboutSection.tsx` | Identity bento (tagline, location, code snippet, marquee, hobbies) |
| `src/components/ExperienceSection.tsx` | Experience container |
| `src/components/ExperienceCard.tsx` | Individual experience card |
| `src/components/ProjectsSection.tsx` | Projects carousel on home page |
| `src/components/ProjectCard.tsx` | Individual project card (carousel variant) |
| `src/components/SkillsSection.tsx` | Tech stack grid with icon cards |
| `src/components/ContactSection.tsx` | **REMOVE** — replaced by Footer "Let's Talk" |
| `src/components/Footer.tsx` | Full "Let's Talk" footer |

### New Shared Components
| File | Role |
|------|------|
| `src/components/BentoGrid.tsx` | **NEW** — CSS grid container with responsive columns |
| `src/components/BentoCard.tsx` | **NEW** — Base card (dark surface, rounded-2xl, border, hover) |
| `src/components/Marquee.tsx` | **NEW** — Horizontal infinite scroll strip |
| `src/components/ProjectCarousel.tsx` | **NEW** — Horizontal scroll-snap carousel with arrows |
| `src/components/SectionLabel.tsx` | **NEW** — Small caps uppercase section label |
| `src/components/CodeBlock.tsx` | **NEW** — Syntax-highlighted Verilog snippet card |
| `src/components/TechCard.tsx` | **NEW** — Icon + name + description for tech stack |
| `src/components/ReadingList.tsx` | **NEW** — "What I've Been Reading" section |
| `src/components/BeyondTheLab.tsx` | **NEW** — Extracurriculars bento section |

### Existing Shared Components
| File | Role |
|------|------|
| `src/components/Navbar.tsx` | Sticky nav — restyle to dark glass |
| `src/components/AnimatedSection.tsx` | Scroll-triggered animation wrapper |
| `src/components/LayoutClient.tsx` | Page transition wrapper |
| `src/components/PageTransition.tsx` | Fade transition |

### Resume Components (keep, restyle)
| File | Role |
|------|------|
| `src/components/resume/ResumePageClient.tsx` | Resume orchestrator |
| `src/components/resume/ResumeHero.tsx` | Resume header |
| `src/components/resume/ResumeEducation.tsx` | Education section |
| `src/components/resume/ResumeExperience.tsx` | Experience section |
| `src/components/resume/TimelineItem.tsx` | Timeline entry |
| `src/components/resume/ResumeProjects.tsx` | Projects list |
| `src/components/resume/ResumeSkills.tsx` | Skills display |
| `src/components/resume/ScrollProgress.tsx` | Progress bar |
| `src/components/resume/DownloadButton.tsx` | Download CTA |
| `src/components/resume/FloatingDownloadButton.tsx` | Floating download (unused, delete) |

### Lib/Data Files
| File | Role |
|------|------|
| `src/lib/content.ts` | Home page data — add reading list, hobbies, beyond-the-lab, code snippet |
| `src/lib/resumeData.ts` | Resume data (no structural changes) |
| `src/lib/animations.ts` | Framer Motion variants — update easing |
| `src/lib/utils.ts` | `cn()` utility |

### Config
| File | Role |
|------|------|
| `tailwind.config.ts` | Theme: dark palette, Geist font, bento spacing, shadows |
| `next.config.ts` | Next.js config (unchanged) |
| `package.json` | Add `geist` font package |

---

## 2. Per-File Change Summary

| File | Change |
|------|--------|
| `tailwind.config.ts` | Dark color palette (#0a0a0a, #141414, etc.), Geist + JetBrains Mono fonts, bento spacing, card shadows |
| `src/app/globals.css` | Dark theme CSS vars, marquee keyframes, card base styles, syntax highlight colors |
| `src/app/layout.tsx` | Import Geist + JetBrains Mono fonts, dark body background |
| `src/app/page.tsx` | No change |
| `src/app/not-found.tsx` | Restyle to dark theme |
| `src/app/projects/page.tsx` | **CREATE** — Full project gallery page |
| `src/components/HomePageClient.tsx` | Add new sections: Identity, ReadingList, BeyondTheLab; remove ContactSection |
| `src/components/HeroSection.tsx` | Rewrite as bento hero grid (name card, photo card, stats card, social card) |
| `src/components/AboutSection.tsx` | Rewrite as Identity bento (tagline, location, code snippet, marquee, hobbies) |
| `src/components/ExperienceSection.tsx` | Dark cards, SectionLabel, remove Apple styling |
| `src/components/ExperienceCard.tsx` | Dark surface, org name in accent, generous padding |
| `src/components/ProjectsSection.tsx` | Rewrite as carousel wrapper with "View All" link |
| `src/components/ProjectCard.tsx` | Rewrite for carousel format (large image, title, description, link) |
| `src/components/SkillsSection.tsx` | Rewrite as TechCard grid with icons and descriptions |
| `src/components/ContactSection.tsx` | **DELETE** — functionality moves to Footer |
| `src/components/Footer.tsx` | Rewrite as full "Let's Talk" footer with email, socials, avatar, nav, back-to-top |
| `src/components/Navbar.tsx` | Dark glass treatment, add Projects + About links |
| `src/components/AnimatedSection.tsx` | Update easing to [0.25, 0.1, 0.25, 1], y: 30 |
| `src/components/BentoGrid.tsx` | **CREATE** — Responsive CSS grid container |
| `src/components/BentoCard.tsx` | **CREATE** — Base dark card with hover effects |
| `src/components/Marquee.tsx` | **CREATE** — CSS-animated infinite scroll strip |
| `src/components/ProjectCarousel.tsx` | **CREATE** — Scroll-snap horizontal carousel |
| `src/components/SectionLabel.tsx` | **CREATE** — Uppercase small-caps label |
| `src/components/CodeBlock.tsx` | **CREATE** — Verilog syntax-highlighted card |
| `src/components/TechCard.tsx` | **CREATE** — Icon + name + description card |
| `src/components/ReadingList.tsx` | **CREATE** — Reading list section |
| `src/components/BeyondTheLab.tsx` | **CREATE** — Extracurriculars bento section |
| `src/lib/content.ts` | Add readingList, hobbies, beyondTheLab, codeSnippet, techStackDetailed data |
| `src/lib/animations.ts` | Update easing, add card hover variant, marquee timing |
| `src/components/resume/ResumePageClient.tsx` | Dark theme, remove unused imports |
| `src/components/resume/ResumeHero.tsx` | Dark theme typography |
| `src/components/resume/ResumeEducation.tsx` | Dark cards, plain text coursework |
| `src/components/resume/ResumeExperience.tsx` | Dark theme |
| `src/components/resume/TimelineItem.tsx` | Dark theme styling |
| `src/components/resume/ResumeProjects.tsx` | Dark theme, plain text tech |
| `src/components/resume/ResumeSkills.tsx` | Dark theme, plain text skills |
| `src/components/resume/ScrollProgress.tsx` | Accent color bar |
| `src/components/resume/DownloadButton.tsx` | Dark theme pill buttons |
| `src/components/resume/FloatingDownloadButton.tsx` | **DELETE** — unused |

---

## 3. New Files/Components to Create

| File | Purpose |
|------|---------|
| `src/components/BentoGrid.tsx` | CSS grid container — 1col mobile, 2col tablet, 3-4col desktop, gap 16-20px |
| `src/components/BentoCard.tsx` | Dark card base — bg-card, rounded-2xl, border, padding, hover scale+shadow |
| `src/components/Marquee.tsx` | Infinite horizontal scroll — CSS keyframes, pause on hover, duplicate children |
| `src/components/ProjectCarousel.tsx` | Scroll-snap carousel — arrow controls, ~400px card width, optional auto-advance |
| `src/components/SectionLabel.tsx` | Small caps label — 12-13px, uppercase, letter-spacing 0.1em, text-muted |
| `src/components/CodeBlock.tsx` | Verilog code card — monospace, syntax colors, dark bg variant |
| `src/components/TechCard.tsx` | Skill card — 40x40 icon area, name (weight 600), description (14px, muted) |
| `src/components/ReadingList.tsx` | "What I've Been Reading" — dark card with linked article list |
| `src/components/BeyondTheLab.tsx` | Extracurriculars — bento cards for HKN, 3Blue1Brown, CS 61C |
| `src/app/projects/page.tsx` | Full project gallery — vertical layout, expanded details |

---

## 4. Execution Order (Biggest Visual Impact First)

### Step 1: Foundation — Design Tokens + Fonts
1. Install `geist` font package
2. `tailwind.config.ts` — Dark palette, fonts, spacing, shadows, radii
3. `src/app/globals.css` — Dark CSS vars, marquee keyframes, card styles
4. `src/app/layout.tsx` — Geist + JetBrains Mono fonts, dark body

### Step 2: Shared Components (build before sections)
5. `src/components/BentoGrid.tsx` — Grid container
6. `src/components/BentoCard.tsx` — Card base
7. `src/components/SectionLabel.tsx` — Section labels
8. `src/components/Marquee.tsx` — Tech logo marquee
9. `src/components/CodeBlock.tsx` — Verilog snippet
10. `src/components/TechCard.tsx` — Tech stack card
11. `src/components/ProjectCarousel.tsx` — Project carousel

### Step 3: Home Page Sections (top to bottom)
12. `src/components/Navbar.tsx` — Dark glass nav with updated links
13. `src/components/HeroSection.tsx` — Bento hero grid
14. `src/components/AboutSection.tsx` — Identity bento (tagline, location, code, marquee, hobbies)
15. `src/components/ReadingList.tsx` — Reading list section
16. `src/components/ProjectsSection.tsx` — Carousel wrapper
17. `src/components/ProjectCard.tsx` — Carousel project card
18. `src/components/SkillsSection.tsx` — Tech stack grid with TechCards
19. `src/components/ExperienceSection.tsx` + `ExperienceCard.tsx` — Dark experience cards
20. `src/components/BeyondTheLab.tsx` — Extracurriculars bento
21. `src/components/Footer.tsx` — Full "Let's Talk" footer

### Step 4: Orchestration
22. `src/components/HomePageClient.tsx` — Wire all sections, remove ContactSection
23. `src/lib/content.ts` — Add new data (reading list, hobbies, beyond the lab, code snippet, tech descriptions)
24. `src/lib/animations.ts` — Update easing, card hover

### Step 5: New Pages
25. `src/app/projects/page.tsx` — Full project gallery
26. Delete `src/components/ContactSection.tsx`
27. Delete `src/components/resume/FloatingDownloadButton.tsx`

### Step 6: Resume Page (dark theme)
28. All resume components — apply dark theme tokens
29. `src/app/not-found.tsx` — Dark theme

### Step 7: Build & Verify
30. `npm run build` — zero errors
31. Visual review at 1440px, 768px, 375px

---

## 5. Asset Requirements

### Fonts (install)
- `geist` — Vercel's font package (provides Geist Sans + Geist Mono via `next/font`)

### Icons (already installed)
- `lucide-react` — arrow-right, external-link, github, linkedin, mail, map-pin, guitar, brain, graduation-cap, briefcase, cpu, layers, terminal, check-circle, chevron-left, chevron-right, arrow-up

### Tech Logos for Marquee
- Use styled monospace text labels as fallback (per instructions)
- For Rust, C, Python, RISC-V — can use simple SVG icons if available
- Format: `<span class="font-mono text-sm text-muted border border-border px-3 py-1 rounded-lg">Verilog</span>`

### Images (already in `/public/images/`)
- `headshot.jpg` — Hero photo card
- `projects/cpu_par_tb.png` — CPU project
- `projects/cpu_datapath.jpg` — CPU datapath
- `projects/cache_fsm.jpg` — Cache FSM
- `projects/rp2040_poster_tb.jpg` — RP2040 project
- `projects/classifier_tb.png` — Neural network classifier

No new image assets needed.
