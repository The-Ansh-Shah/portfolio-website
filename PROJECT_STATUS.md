# Project Status & Development Log

## Current Status: ✅ DEPLOYED & LIVE

**Deployment Platform**: Vercel
**Repository**: github.com/The-Ansh-Shah/portfolio-website
**Last Update**: 2026-02-07
**Status**: Production-ready, Single-Page Application

---

## Project Overview

A modern, visually striking single-page portfolio website designed to impress recruiters, built with:
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom dark technical theme)
- **Animations**: Framer Motion (scroll-triggered, staggered reveals)
- **Typewriter**: react-type-animation
- **Icons**: Lucide React
- **Content**: Structured TypeScript data (actual resume content)

### Color Palette (Dark Technical Theme)
- **Primary Dark**: `#070f2b` (Deep navy, almost black)
- **Deep Accent**: `#1b1a55` (Rich purple-navy)
- **Secondary**: `#535c91` (Muted blue-gray)
- **Muted Light**: `#9290c3` (Soft lavender-gray)

---

## Architecture

### Single-Page Structure
```
/                    → Single scrollable page with sections:
                       • Hero (typewriter animation)
                       • About (bio + profile photo + stats)
                       • Experience (SLICE Lab + CS 61C)
                       • Projects (4 major projects)
                       • Skills (4 categories)
                       • Contact
```

### Navigation
- **Smooth scrolling** to anchor sections (#hero, #about, #experience, etc.)
- **Intersection Observer** for active section tracking
- **Liquid-glass navbar** with backdrop blur and gradient overlay
- No page transitions, just seamless scrolling

### Component Architecture
- **Server Component**: Main page (`src/app/page.tsx`) for initial render
- **Client Components**: All sections (animations, scroll detection, typewriter)
- **Clean separation**: Optimal performance with minimal client-side JS

### Key Components
1. `Navbar` - Liquid-glass sticky nav with active section tracking
2. `Footer` - Social links and copyright
3. `HeroSection` - Streaming gradient name animation + typewriter
4. `AboutSection` - Bio + profile photo + stats cards (GPA, Age, Graduation, Hobby)
5. `ExperienceSection` - Work experience cards with animations
6. `ProjectsSection` - Project grid with image placeholders
7. `ProjectCard` - Enhanced cards with images and hover effects
8. `SkillsSection` - Technical skills categorized by type
9. `ContactSection` - Contact methods with icons
10. `ExperienceCard` - Individual experience display

### Data System
- **Location**: `src/lib/content.ts`
- **Structure**: TypeScript objects with types
- **Content**: Real resume data (Ansh Shah - UC Berkeley EECS)
- **No MDX**: Replaced with structured data for single-page design

---

## Recent Major Transformation

### From Multi-Page to Single-Page SPA

**Date**: 2026-02-07
**Reason**: Create a more impressive, recruiter-stopping portfolio

**Changes Made**:
1. Consolidated all pages into single scrollable page
2. Implemented smooth scroll navigation with anchor links
3. Added streaming gradient animation to hero name
4. Changed color palette to dark technical theme
5. Added typewriter animation cycling through roles
6. Enhanced navbar with liquid-glass effect
7. Added profile photo section with decorative frame
8. Added stats cards (GPA: 3.953, Age: 19, Graduation: May 2027, Hobby: Guitaring)
9. Added image placeholders to project cards
10. Removed all route folders (projects, about, contact)
11. Deleted unused components (ProjectGrid, AnimatedSection, SectionContainer)
12. Replaced MDX system with structured TypeScript data

**Files Deleted**:
- `src/app/projects/` folder
- `src/app/about/` folder
- `src/app/contact/` folder
- `content/projects/` folder (MDX files)
- `src/components/ProjectGrid.tsx`
- `src/components/AnimatedSection.tsx`
- `src/components/SectionContainer.tsx`
- `src/lib/projects.ts`

**Files Created**:
- `src/lib/content.ts` - All resume content
- `src/lib/animations.ts` - Shared animation variants
- `src/components/AboutSection.tsx`
- `src/components/ExperienceSection.tsx`
- `src/components/ExperienceCard.tsx`
- `src/components/ProjectsSection.tsx`
- `src/components/SkillsSection.tsx`
- `src/components/ContactSection.tsx`

---

## Latest UI Enhancements (Feb 7, 2026)

### 1. **Streaming Gradient Animation**
- **Continuous 1-directional flow** (flows to the right)
- Changed from `from-secondary via-muted to-white` to `from-white via-muted to-secondary`
- Uses `linear` timing for constant stream effect
- Animation: `0% → 200%` background-position for seamless loop
- Fixed initial stutter by ensuring gradient is present from start

### 2. **Liquid-Glass Navbar**
- Enhanced transparency: `bg-white/5` (scrolled) and `bg-white/3` (not scrolled)
- Stronger backdrop blur: `backdrop-blur-xl`
- Light gradient overlay using muted/secondary colors
- Soft shadow with lavender tint for depth
- Prevents page darkening with `transition: none !important` on body

### 3. **Profile Photo Stats Cards**
- **GPA**: 3.953
- **Age**: 19
- **Graduation**: May 2027
- **Current Hobby**: 🎸 Guitaring
- Grid layout: 2x2 with some spanning full width
- Matching glass-effect styling with accent borders

### 4. **Project Card Images**
- 200px tall image placeholder at top
- Gradient background using theme colors
- Shows first word of project title as temporary content
- Decorative grid pattern overlay

### 5. **Darkening Bug Fix**
- Added `transition: none !important` to html/body
- Prevents unwanted color transitions during hydration
- Ensures consistent rendering from initial load

---

## Build Issues Encountered & Fixes

### Issue 1: Invalid CSS Class
**Error**: `The 'border-border' class does not exist`
**Fix**: Removed invalid `@apply border-border;` from globals.css

### Issue 2: Server/Client Component Mismatch
**Error**: `Module not found: Can't resolve 'fs'`
**Fix**: Removed `'use client'` from server components, created client wrappers for animations

### Issue 3: React Version Mismatch with MDX
**Error**: `A React Element from an older version of React was rendered`
**Fix**: Replaced `next-mdx-remote` with `react-markdown` + `remark-gfm`

### Issue 4: Module Not Found - SectionContainer
**Error**: 404 page importing deleted component
**Fix**: Inlined styles in not-found.tsx

### Issue 5: Hero Name Disappearing
**Error**: Name vanishing after initial render due to `text-transparent` issues
**Fix**: Added webkit prefixes (`-webkit-background-clip`, `-webkit-text-fill-color`) to globals.css

### Issue 6: Page Darkening After 2 Seconds
**Error**: Entire page suddenly darkens ~2 seconds after load
**Fix**: Added `transition: none !important` to html/body elements to prevent unwanted transitions

---

## Technical Decisions & Rationale

### Why Single-Page Over Multi-Page?
1. **Better UX**: Smooth scrolling is more engaging than page transitions
2. **Stronger Impact**: Cohesive storytelling keeps recruiters engaged
3. **Modern Standard**: SPA portfolios are industry standard for technical roles
4. **Performance**: No page load times between sections
5. **Memorable**: Creates premium, polished impression

### Why Streaming Gradient?
1. **Visual Interest**: Eye-catching effect that draws attention
2. **Professional**: Subtle animation that doesn't distract
3. **Brand**: Matches technical/modern aesthetic
4. **Continuous**: 1-directional flow feels fluid and natural

### Why Liquid-Glass Navbar?
1. **Premium Feel**: Frosted glass effect is modern and elegant
2. **Visibility**: Light enough to see content behind, dark enough to read text
3. **Context**: User can see page content while navigating
4. **Trend**: Glass morphism is current design trend

### Why Dark Theme?
1. **Technical Aesthetic**: Matches computer architecture/systems engineering vibe
2. **Contrast**: Text pops more on dark backgrounds
3. **Modern**: Dark mode is preferred by developers
4. **Professional**: Creates sophisticated, serious tone

---

## File Structure

```
project-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with Inter font
│   │   ├── page.tsx            # Single-page home (all sections)
│   │   ├── not-found.tsx       # 404 page
│   │   └── globals.css         # Global styles + animations
│   ├── components/             # React components
│   │   ├── Navbar.tsx          # Liquid-glass nav (client)
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── HeroSection.tsx     # Hero + typewriter (client)
│   │   ├── AboutSection.tsx    # Bio + photo + stats (client)
│   │   ├── ExperienceSection.tsx   # Work experience (client)
│   │   ├── ExperienceCard.tsx  # Experience card component
│   │   ├── ProjectsSection.tsx # Projects grid (client)
│   │   ├── ProjectCard.tsx     # Project card with image (client)
│   │   ├── SkillsSection.tsx   # Skills categories (client)
│   │   └── ContactSection.tsx  # Contact info (client)
│   └── lib/                    # Utilities & data
│       ├── utils.ts            # Tailwind merge helper
│       ├── content.ts          # All resume content (NEW)
│       └── animations.ts       # Shared Framer Motion variants (NEW)
├── tailwind.config.ts          # Dark theme colors
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config
└── package.json                # Dependencies
```

---

## Dependencies

### Production
- `next` (^15.1.3) - Framework
- `react` (^18.3.1) - UI library
- `react-dom` (^18.3.1) - React renderer
- `typescript` (^5.7.2) - Type safety
- `tailwindcss` (^3.4.17) - Styling
- `framer-motion` (^11.15.0) - Animations
- `react-type-animation` (^3.2.0) - Typewriter effect
- `lucide-react` (^0.468.0) - Icons
- `clsx` + `tailwind-merge` - Class utilities

---

## Content (From Resume)

**Name**: Ansh Shah
**University**: UC Berkeley (EECS)
**GPA**: 3.953/4.0
**Graduation**: May 2027
**Age**: 19
**Organizations**: HKN (Top 25% EECS students)

**Experience**:
1. Undergraduate Researcher - SLICE Lab (Apr 2025 - Present)
2. Undergraduate Course Staff - CS 61C (Aug 2025 - Dec 2025)

**Projects**:
1. RV32I CPU and Direct-Mapped L1 Cache (62.4 MHz, 36% cycle reduction)
2. RP2040 Bootloader Rootkit Analysis (Security research)
3. RISC-V Neural Network Classifier (Assembly implementation)
4. Treble Booster Circuit (Analog filter design)

**Skills**:
- Hardware: Verilog, RISC-V, Chisel, CPU Architecture, CMOS, Synopsys VCS, Cadence Innovus
- Programming: C, Python, Rust, C++, Java
- Tools: Oscilloscopes, RP2040, STM32, Git, Linux, GDB, Valgrind
- Coursework: Digital ICs, Computer Architecture, Embedded Systems, Operating Systems

---

## Animation System

### Shared Variants (`src/lib/animations.ts`)
- `fadeInUp` - Fade in with upward movement
- `staggerContainer` - Stagger children animations
- `cardHover` - Lift and scale on hover
- `sectionReveal` - Section fade-in reveal
- `viewportOnce` - Viewport settings (once: true, margin: 0px)

### Key Animations
1. **Hero Name**: Streaming gradient (3s linear infinite)
2. **Typewriter**: Cycles through 6 role descriptions (2s pause each)
3. **Sections**: Fade + slide up on scroll (viewport trigger)
4. **Cards**: Staggered reveal with index-based delays
5. **Hover**: Lift, scale, shadow effects
6. **Navbar**: Active indicator with spring physics

---

## Performance Optimizations

1. **Server-Side Rendering**: Initial page render on server
2. **Minimal Client JS**: Only interactive sections use client components
3. **Viewport Triggers**: Animations only trigger when scrolled into view
4. **Once Animations**: Most animations don't re-trigger on re-scroll
5. **Hardware Acceleration**: `will-change` for gradient animation
6. **Font Optimization**: Inter loaded via next/font/google
7. **Image Optimization**: Lazy loading for project images (when added)

---

## SEO Optimizations

**Title**: "Ansh Shah | EECS @ UC Berkeley"
**Description**: "Computer Architecture Engineer specializing in RISC-V CPU design, ASIC implementation, and embedded systems security. UC Berkeley EECS student passionate about building efficient systems at the hardware-software interface."

**Metadata** (in layout.tsx):
- Proper title and description
- Language set to "en"
- Font optimization
- Semantic HTML structure

---

## Future Improvements

### Content
- [ ] Add real profile photo
- [ ] Add real project images
- [ ] Add blog section (optional)
- [ ] Add resume download link

### Features
- [ ] Mobile hamburger menu for navbar
- [ ] Dark mode toggle (currently always dark)
- [ ] Project filtering/categories
- [ ] Analytics integration

### Performance
- [ ] Add OG images for social sharing
- [ ] Convert images to WebP
- [ ] Add sitemap.xml
- [ ] Add robots.txt

---

## Lessons Learned

### 1. Single-Page Design
- Requires careful section ID management
- Smooth scroll needs browser compatibility handling
- Intersection Observer is powerful for tracking
- Active state tracking enhances UX

### 2. Gradient Animation on Text
- Requires webkit prefixes for cross-browser support
- `text-transparent` can cause visibility issues
- `will-change` improves performance
- Linear timing better for streaming effects

### 3. Glass Morphism
- Backdrop blur needs careful transparency balance
- Gradient overlays add depth
- Light colors on light backgrounds need shadows
- Test on different content backgrounds

### 4. Hydration Issues
- Body transitions can cause flickering
- `transition: none !important` prevents unwanted animations
- Ensure server/client render consistency

---

## Troubleshooting Guide

### Name disappearing in hero
**Cause**: `text-transparent` without webkit prefixes
**Fix**: Add `-webkit-background-clip: text` and `-webkit-text-fill-color: transparent`

### Page darkening after load
**Cause**: CSS transitions on body/html
**Fix**: Add `transition: none !important` to body/html

### Smooth scroll not working
**Cause**: CSS or browser compatibility
**Fix**: Check `scroll-behavior: smooth` in globals.css, add JS fallback

### Navbar not tracking active section
**Cause**: Intersection Observer not set up properly
**Fix**: Check section IDs match href values, verify observer thresholds

---

**Last Updated**: 2026-02-07
**Status**: Production Ready with Latest UI Enhancements ✅
**Next Deploy**: Ready to push latest changes
