# PLAN — Portfolio Rebuild v4

## Files to MODIFY

| File | Changes |
|------|---------|
| `src/app/globals.css` | Add hobby-scroll keyframes with correct percentages, update CSS vars if needed |
| `tailwind.config.ts` | Update fontSize scale to match spec, fix hobbyScroll keyframes |
| `src/lib/content.ts` | Remove `// ansh_shah.v` from verilogSnippet, update project descriptions to prose (no bullets), update experience data labels |
| `src/app/layout.tsx` | No changes needed — Navbar already in layout |
| `src/components/Navbar.tsx` | Add About (/about or #about) nav item, reorder: Home, About, divider, Mail. Fix icon sizes to 14px, circle to 34px |
| `src/components/HomePageClient.tsx` | Remove MarqueeStrip import/usage, keep section order: Hero, About, Projects, Skills, Experience, BeyondTheLab |
| `src/components/AboutSection.tsx` | Full rewrite → Identity Bento 12-col grid with labels INSIDE cards, correct sizes, left-align About card |
| `src/components/CodeBlock.tsx` | Update to 11px font, correct padding (2px 18px 0 18px), 150px max-height, remove comment line handling |
| `src/components/ProjectsSection.tsx` | Full rewrite → peek carousel (70% active + 15% peek sides), dot indicators, wrap navigation |
| `src/components/ProjectCarousel.tsx` | Full rewrite → state-based carousel with transform positioning, infinite wrap |
| `src/components/ProjectCard.tsx` | Full rewrite → horizontal card (image 55% left, body 45% right), no bullets, prose description |
| `src/components/SkillsSection.tsx` | Full rewrite → toolbox container with macOS-style header bar, 2-col grid, left-aligned, 3 skills per category |
| `src/components/ExperienceSection.tsx` | Rewrite → "Where I've worked" heading (32px), no external SectionLabel, flat list |
| `src/components/ExperienceCard.tsx` | Update → INCOMING badge above title (not inline), correct sizing (9px badge) |
| `src/components/BeyondTheLab.tsx` | Rewrite → "Other things I'm up to..." heading, update HKN card (IR Officer & Treasurer), Spotify card with correct spec |
| `src/components/Footer.tsx` | Rewrite → match spec (LET'S TALK label, 18px email, correct layout, padding 40px 56px) |

## Files to DELETE (or stop importing)

| File | Reason |
|------|--------|
| `src/components/MarqueeStrip.tsx` | Marquee section deleted per instructions |
| `src/components/Marquee.tsx` | No longer used (marquee deleted) |
| `src/components/SectionLabel.tsx` | Labels now inline inside cards, no external section labels |
| `src/components/BentoCard.tsx` | Not used in new layout |
| `src/components/BentoGrid.tsx` | Not used in new layout |
| `src/components/TechCard.tsx` | Replaced by inline skill rows in toolbox |
| `src/components/ReadingList.tsx` | Reading list section deleted |

## Files to KEEP UNCHANGED

| File | Reason |
|------|--------|
| `src/components/HeroSection.tsx` | Hero must not change (per instructions) |
| `src/components/LayoutClient.tsx` | Lenis smooth scroll already correct |
| `src/components/PageTransition.tsx` | Page transitions stay |
| `src/app/layout.tsx` | Root layout stays |
| All resume components | Out of scope |

## Section Order (top to bottom)

1. **Hero** — unchanged
2. **Identity Bento** — 12-col grid (About, Location, Hobbies, Focus, Code block)
3. ~~Marquee~~ — DELETED
4. **Projects** — peek carousel (3 visible: prev peek + active + next peek)
5. **My Toolbox** — container card with header bar
6. **Where I've worked** — flat list, no external labels
7. **Other things I'm up to...** — HKN + Spotify cards
8. **Footer** — LET'S TALK + copyright

## Key Design Rules

- No blue anywhere (except Berkeley blue in HKN badge, Spotify green in equalizer)
- Labels INSIDE cards (11px uppercase), never external section headers above bento
- Font: Geist primary, JetBrains Mono for code only
- Type scale contrast: 11px labels ↔ 24-26px card text
- No bullet points anywhere
- Card hover: scale 1.01, shadow deepen, 0.3s
- Scroll reveals: opacity 0→1, y 20→0, 0.5s, stagger 0.08s, whileInView once amount 0.15

## Final verification

1. `npm run build` — zero errors
2. Hero unchanged
3. No blue on page
4. No bullets anywhere
5. Project carousel shows peek of prev/next cards
6. Toolbox has header bar + container card
7. All labels inside cards
8. Font sizes match type scale
9. Smooth scroll active
