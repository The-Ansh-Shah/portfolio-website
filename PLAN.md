# PLAN.md — Apple-Inspired UX Overhaul

## 1. Every Component/Page File and Its Role

### Pages
| File | Role |
|------|------|
| `src/app/layout.tsx` | Root layout — metadata, font, Navbar/Footer/LayoutClient wrapper |
| `src/app/page.tsx` | Home page — renders HomePageClient |
| `src/app/resume/page.tsx` | Resume page — renders ResumePageClient |
| `src/app/not-found.tsx` | 404 error page |
| `src/app/globals.css` | Global styles, CSS custom properties, utility classes |

### Home Page Components
| File | Role |
|------|------|
| `src/components/HomePageClient.tsx` | Orchestrates all home sections, loads StarryBackground |
| `src/components/HeroSection.tsx` | Hero with typewriter animation, gradient name, 3 CTAs |
| `src/components/AboutSection.tsx` | Bio, headshot, stat badges, core competencies pills |
| `src/components/ExperienceSection.tsx` | Container for experience cards, 2-col grid |
| `src/components/ExperienceCard.tsx` | Individual experience card with hover/slide animations |
| `src/components/ProjectsSection.tsx` | Projects grid + modal state management |
| `src/components/ProjectCard.tsx` | Project card with thumbnail, tech pills, "Click to see more" |
| `src/components/ProjectModal.tsx` | Full-screen project detail modal with image carousel |
| `src/components/SkillsSection.tsx` | 4-category skills grid with pill tags |
| `src/components/ContactSection.tsx` | Contact cards, phone reveal, location card |
| `src/components/PipelineSeparator.tsx` | Decorative section separator |

### Shared Components
| File | Role |
|------|------|
| `src/components/Navbar.tsx` | Sticky nav with scroll detection, mobile menu |
| `src/components/Footer.tsx` | Copyright + social links |
| `src/components/LayoutClient.tsx` | Page transition animation wrapper |
| `src/components/PageTransition.tsx` | Slide transition between pages |
| `src/components/AnimatedSection.tsx` | Reusable scroll-triggered fade-in wrapper |
| `src/components/StarryBackground.tsx` | 3D starfield with Three.js |

### Resume Components
| File | Role |
|------|------|
| `src/components/resume/ResumePageClient.tsx` | Resume page orchestrator |
| `src/components/resume/ResumeHero.tsx` | Resume header with contact badges |
| `src/components/resume/ResumeEducation.tsx` | Education section with honors/coursework |
| `src/components/resume/ResumeExperience.tsx` | Experience timeline container |
| `src/components/resume/TimelineItem.tsx` | Vertical timeline entry component |
| `src/components/resume/ResumeProjects.tsx` | Resume project list |
| `src/components/resume/ResumeSkills.tsx` | Tabular skills with icons |
| `src/components/resume/GridBackground.tsx` | 3D grid background (Three.js) |
| `src/components/resume/ScrollProgress.tsx` | Scroll progress bar |
| `src/components/resume/DownloadButton.tsx` | Resume download CTA |
| `src/components/resume/FloatingDownloadButton.tsx` | Floating download button |

### Lib/Data Files
| File | Role |
|------|------|
| `src/lib/content.ts` | All home page data: personalInfo, bio, experience, projects, skills |
| `src/lib/resumeData.ts` | Structured resume data |
| `src/lib/animations.ts` | Shared Framer Motion variants and configs |
| `src/lib/utils.ts` | `cn()` class merging utility |
| `src/hooks/useScrollAnimation.ts` | Custom scroll detection hook |

### Config
| File | Role |
|------|------|
| `tailwind.config.ts` | Tailwind theme: brown palette, Inter font, custom animations |
| `next.config.ts` | Next.js config: image remotes, page extensions |

---

## 2. Which Files Need Changes

| File | Change |
|------|--------|
| `tailwind.config.ts` | Replace brown palette with Apple design tokens (colors, typography, spacing, shadows, radii) |
| `src/app/globals.css` | Replace dark brown theme with Apple light theme; remove circuit/blueprint/signal utilities; add glass style |
| `src/app/layout.tsx` | Switch font from Inter to SF Pro Display system font stack |
| `src/components/Navbar.tsx` | Glass treatment, reduce to 4 links, rename logo to "Ansh Shah", 48px height |
| `src/components/HeroSection.tsx` | Remove typewriter, single headline, 2 CTAs max, generous padding |
| `src/components/AboutSection.tsx` | Remove stat badges, hobby, core competencies; condense to 1 paragraph; 60/40 layout |
| `src/components/ExperienceSection.tsx` | Remove subheader, simplify card container styling |
| `src/components/ExperienceCard.tsx` | Simplify to bg-secondary + rounded-2xl, remove glow/accent borders, right-align dates |
| `src/components/ProjectsSection.tsx` | Remove subheader, remove modal interaction |
| `src/components/ProjectCard.tsx` | Full-width images, show all bullets, tech as dot-separated text, remove "Click to see more" |
| `src/components/ProjectModal.tsx` | DELETE — no longer needed (all content shown inline) |
| `src/components/SkillsSection.tsx` | Replace pills with comma-separated plain text, clean 2x2 grid |
| `src/components/ContactSection.tsx` | Centered layout, remove phone reveal/location card, simple email + links |
| `src/components/Footer.tsx` | Remove "Built with" credit, text-tertiary, centered, 48px padding |
| `src/components/HomePageClient.tsx` | Remove StarryBackground import, remove gradient overlays, remove PipelineSeparators |
| `src/components/StarryBackground.tsx` | DELETE — removing particle/3D effects |
| `src/components/PipelineSeparator.tsx` | DELETE — removing decorative separators |
| `src/lib/content.ts` | Remove typewriterTexts, trim bio to 1 paragraph, clean up data structures |
| `src/lib/animations.ts` | Restrain animations: simple fadeIn+translateY, remove bouncy springs, remove alternatingSlide |
| `src/components/AnimatedSection.tsx` | Simplify to fade-in + translateY(12px), 0.5s ease-out |
| `src/components/LayoutClient.tsx` | Simplify page transitions (subtle fade only) |
| `src/components/PageTransition.tsx` | Simplify to subtle fade transition |
| `src/app/resume/page.tsx` | No structural change, just inherits new tokens |
| `src/components/resume/ResumePageClient.tsx` | Apply Apple tokens, remove grid background, simplify |
| `src/components/resume/ResumeHero.tsx` | Apply Apple typography, remove gradient text |
| `src/components/resume/ResumeEducation.tsx` | Replace pills with plain text, Apple card styling |
| `src/components/resume/ResumeExperience.tsx` | Simplify timeline styling |
| `src/components/resume/TimelineItem.tsx` | Clean up glow/pulse, use subtle styling |
| `src/components/resume/ResumeProjects.tsx` | Plain text tech tags, Apple card styling |
| `src/components/resume/ResumeSkills.tsx` | Replace chips with plain text, match main skills section |
| `src/components/resume/GridBackground.tsx` | DELETE — removing 3D backgrounds |
| `src/components/resume/ScrollProgress.tsx` | Simplify gradient, use accent color |
| `src/components/resume/DownloadButton.tsx` | Apple pill button styling |
| `src/components/resume/FloatingDownloadButton.tsx` | Apple pill button styling |

---

## 3. Execution Order (Highest Visual Impact First)

### Step 1: Design Tokens (Foundation)
1. `tailwind.config.ts` — Apple color palette, typography, spacing, shadows, radii
2. `src/app/globals.css` — Light theme, remove dark utilities, new CSS variables
3. `src/app/layout.tsx` — SF Pro font stack

### Step 2: Remove 3D/Decorative Elements
4. DELETE `src/components/StarryBackground.tsx`
5. DELETE `src/components/PipelineSeparator.tsx`
6. DELETE `src/components/ProjectModal.tsx`
7. DELETE `src/components/resume/GridBackground.tsx`
8. `src/components/HomePageClient.tsx` — Remove StarryBackground, gradient overlays, separators

### Step 3: Restrain Animations
9. `src/lib/animations.ts` — Simple fade+slide variants only
10. `src/components/AnimatedSection.tsx` — Subtle fade-in

### Step 4: High-Impact Sections (Home Page)
11. `src/components/Navbar.tsx` — Glass nav, 4 links, "Ansh Shah" logo
12. `src/components/HeroSection.tsx` — Clean hero, no typewriter, 2 CTAs
13. `src/components/AboutSection.tsx` — Minimal bio, no badges
14. `src/components/ProjectCard.tsx` + `src/components/ProjectsSection.tsx` — Full-width images, inline content
15. `src/components/ExperienceSection.tsx` + `src/components/ExperienceCard.tsx` — Clean cards
16. `src/components/SkillsSection.tsx` — Plain text grid
17. `src/components/ContactSection.tsx` — Centered minimal contact
18. `src/components/Footer.tsx` — Minimal footer

### Step 5: Data Cleanup
19. `src/lib/content.ts` — Trim bio, remove typewriterTexts

### Step 6: Page Transitions
20. `src/components/LayoutClient.tsx` + `src/components/PageTransition.tsx` — Subtle fade

### Step 7: Resume Page
21. `src/components/resume/ResumePageClient.tsx` — Remove GridBackground, apply tokens
22. `src/components/resume/ResumeHero.tsx` — Apple typography
23. `src/components/resume/ResumeEducation.tsx` — Plain text styling
24. `src/components/resume/ResumeExperience.tsx` + `TimelineItem.tsx` — Clean timeline
25. `src/components/resume/ResumeProjects.tsx` — Plain text tech
26. `src/components/resume/ResumeSkills.tsx` — Plain text skills
27. `src/components/resume/ScrollProgress.tsx` — Accent color bar
28. `src/components/resume/DownloadButton.tsx` + `FloatingDownloadButton.tsx` — Pill buttons
