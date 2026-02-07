# Project Status & Development Log

## Current Status: ✅ DEPLOYED & LIVE

**Deployment Platform**: Vercel
**Repository**: github.com/The-Ansh-Shah/portfolio-website
**Last Deploy**: Successful (Commit: b89e9aa)
**Status**: Production-ready

---

## Project Overview

A modern, high-performance portfolio website built with:
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom color palette)
- **Animations**: Framer Motion
- **Content**: Markdown-based projects system
- **Icons**: Lucide React

### Color Palette
- Primary Dark: `#19183b`
- Secondary: `#708993`
- Secondary Light: `#a1c2bd`
- Secondary Lighter: `#e7f2ef`

---

## Architecture

### Pages Structure
```
/                    → Home (Hero + Featured Projects)
/projects            → All Projects Listing
/projects/[slug]     → Individual Project Detail
/about               → About Page (Skills, Values)
/contact             → Contact Page (Social Links)
```

### Component Architecture
- **Server Components**: Pages with data fetching (projects)
- **Client Components**: Interactive/animated elements (Navbar, animations)
- **Separation**: Clean server/client boundary for optimal performance

### Key Components
1. `Navbar` - Sticky navigation with active state
2. `Footer` - Social links
3. `HeroSection` - Animated landing section
4. `ProjectCard` - Individual project display with hover effects
5. `ProjectGrid` - Responsive grid layout
6. `SectionContainer` - Consistent page sections
7. `AnimatedSection` - Reusable animation wrapper

### Data System
- **Location**: `content/projects/*.mdx`
- **Parser**: `gray-matter` for frontmatter
- **Renderer**: `react-markdown` with `remark-gfm`
- **Functions**: `getAllProjects()`, `getProjectBySlug()`, `getFeaturedProjects()`

---

## Build Issues Encountered & Fixes

### Issue 1: Invalid CSS Class
**Error**: `The 'border-border' class does not exist`
**Location**: `src/app/globals.css:12`
**Cause**: Used undefined Tailwind class `border-border`
**Fix**: Removed the invalid `@apply border-border;` line
**Learning**: Always verify Tailwind classes exist in config before using them

### Issue 2: Server/Client Component Mismatch
**Error**: `Module not found: Can't resolve 'fs'`
**Location**: `src/app/projects/page.tsx`
**Cause**: Client component (`'use client'`) trying to use Node.js `fs` module
**Fix**:
- Removed `'use client'` from projects page
- Created `AnimatedSection` client component for animations
- Proper server/client component separation
**Learning**: Next.js App Router requires careful server/client boundary management. Server components can use Node.js APIs, client components cannot.

### Issue 3: React Version Mismatch with MDX
**Error**: `A React Element from an older version of React was rendered`
**Location**: Project detail pages during static generation
**Cause**: `next-mdx-remote` v5.0.0 incompatible with Next.js 15
**Fix**:
- Replaced `next-mdx-remote` with `react-markdown`
- Added `remark-gfm` for GitHub Flavored Markdown
**Learning**: Next.js 15 requires careful package selection. `react-markdown` is more stable and lighter than MDX solutions for simple markdown rendering.

---

## Technical Decisions & Rationale

### Why react-markdown over next-mdx-remote?
1. **Stability**: Better compatibility with Next.js 15
2. **Simplicity**: Just rendering markdown, not executing code
3. **Performance**: Lighter bundle size
4. **Reliability**: Well-maintained, no version conflicts

### Why Server Components for Projects?
1. **Performance**: Data fetching on server reduces client-side JS
2. **SEO**: Full HTML rendered on server
3. **Security**: File system access stays on server
4. **Loading**: Faster initial page loads

### Why Framer Motion?
1. **Smooth animations**: Better than CSS alone
2. **React integration**: Works seamlessly with components
3. **Performance**: Hardware-accelerated animations
4. **Developer experience**: Simple, declarative API

---

## File Structure

```
project-website/
├── src/
│   ├── app/                    # Next.js pages (App Router)
│   │   ├── about/page.tsx      # About page (client)
│   │   ├── contact/page.tsx    # Contact page (client)
│   │   ├── projects/
│   │   │   ├── page.tsx        # Projects listing (server)
│   │   │   └── [slug]/page.tsx # Project detail (server)
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page (server)
│   │   ├── not-found.tsx       # 404 page
│   │   └── globals.css         # Global styles
│   ├── components/             # React components
│   │   ├── Navbar.tsx          # Navigation (client)
│   │   ├── Footer.tsx          # Footer (server)
│   │   ├── HeroSection.tsx     # Hero (client)
│   │   ├── ProjectCard.tsx     # Card (client)
│   │   ├── ProjectGrid.tsx     # Grid (server)
│   │   ├── SectionContainer.tsx # Container (server)
│   │   └── AnimatedSection.tsx # Animation wrapper (client)
│   └── lib/                    # Utilities
│       ├── utils.ts            # Tailwind merge helper
│       └── projects.ts         # Project data functions
├── content/
│   └── projects/               # MDX project files
│       ├── example-project-1.mdx
│       ├── example-project-2.mdx
│       └── example-project-3.mdx
├── public/
│   └── images/projects/        # Project images
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config
├── package.json                # Dependencies
└── DEPLOYMENT.md               # Deployment guide
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
- `react-markdown` (^9.0.1) - Markdown renderer
- `remark-gfm` (^4.0.0) - GitHub Flavored Markdown
- `gray-matter` (^4.0.3) - Frontmatter parser
- `lucide-react` (^0.468.0) - Icons
- `clsx` + `tailwind-merge` - Class name utilities

### Development
- `@tailwindcss/typography` - Prose styling
- `eslint` - Linting
- `eslint-config-next` - Next.js ESLint rules

---

## Performance Optimizations

1. **Server-Side Rendering**: Most pages use SSR for fast initial loads
2. **Static Generation**: Project pages pre-rendered at build time
3. **Image Optimization**: Next.js Image component with lazy loading
4. **Code Splitting**: Automatic via Next.js App Router
5. **Minimal Client JS**: Only interactive components use client-side code
6. **Framer Motion**: Hardware-accelerated animations
7. **Font Optimization**: Inter font loaded via next/font/google

---

## Git History

**Commit 1 (0f57482)**: Initial commit
- Complete project scaffolding
- All components and pages
- Example projects
- Initial deployment attempt (failed)

**Commit 2 (25c0ab4)**: Fix build errors
- Fixed invalid CSS class
- Fixed server/client component separation
- Added AnimatedSection component

**Commit 3 (b89e9aa)**: Replace MDX library
- Replaced next-mdx-remote with react-markdown
- Fixed React version mismatch
- Successful deployment ✅

---

## Next Steps / Future Improvements

### Content
- [ ] Replace example projects with real projects
- [ ] Add real project images
- [ ] Update personal information (name, bio)
- [ ] Update contact links and social media
- [ ] Add resume/CV download option

### Features
- [ ] Add blog section (optional)
- [ ] Add project categories/filtering
- [ ] Add search functionality
- [ ] Add dark mode toggle
- [ ] Add analytics (Google Analytics or Vercel Analytics)
- [ ] Add contact form with backend
- [ ] Add RSS feed for projects/blog

### Performance
- [ ] Add OG images for social sharing
- [ ] Implement ISR (Incremental Static Regeneration) for projects
- [ ] Add loading states for better UX
- [ ] Optimize images (convert to WebP)
- [ ] Add service worker for offline support

### SEO
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Improve meta descriptions
- [ ] Add structured data (JSON-LD)
- [ ] Add canonical URLs

### Code Quality
- [ ] Add unit tests (Jest)
- [ ] Add E2E tests (Playwright)
- [ ] Add Storybook for component documentation
- [ ] Set up CI/CD pipeline
- [ ] Add pre-commit hooks (Husky)

---

## Lessons Learned

### 1. Next.js 15 App Router Specifics
- Server components are default
- Client components need explicit `'use client'`
- Can't mix server-only code (fs) in client components
- Proper separation leads to better performance

### 2. Package Compatibility Matters
- Always check Next.js version compatibility
- Newer isn't always better (next-mdx-remote issue)
- Read changelogs and migration guides
- Simpler solutions often more reliable

### 3. Build Errors Are Learning Opportunities
- CSS errors caught at build time save production bugs
- Module resolution errors show architecture issues
- React errors indicate version/compatibility problems
- Each error teaches proper patterns

### 4. Deployment Best Practices
- Test builds locally before deploying
- Read error messages carefully
- Fix issues incrementally
- Keep deployment logs for debugging

### 5. Developer Experience
- Clear file structure helps navigation
- Type safety catches errors early
- Good documentation prevents confusion
- Separation of concerns enables scaling

---

## Troubleshooting Guide

### Build fails locally
1. Delete `node_modules` and `.next`
2. Run `npm install`
3. Run `npm run build`
4. Check error messages

### Vercel deployment fails
1. Check build logs in Vercel dashboard
2. Verify all dependencies in package.json
3. Ensure no server-only code in client components
4. Test build locally first

### Styling issues
1. Check Tailwind config
2. Verify classes exist
3. Check for typos in class names
4. Ensure CSS is imported in layout

### Animation issues
1. Verify 'use client' directive
2. Check Framer Motion version
3. Test on different browsers
4. Check for conflicting styles

---

## Resources

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [React Markdown Docs](https://github.com/remarkjs/react-markdown)

---

**Last Updated**: 2026-02-07
**Status**: Production Ready ✅
**Maintainer**: Ready for customization and launch
