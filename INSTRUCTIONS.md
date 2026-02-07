# MASTER INSTRUCTIONS — PORTFOLIO REBUILD

You are acting as a senior frontend architect and design engineer.

Your goal is NOT incremental edits — you will REFACTOR and UPGRADE the existing Next.js portfolio into a cohesive, visually impressive, single-page experience while preserving performance, accessibility, and stability.

You must follow ALL instructions strictly.

---

# PRIMARY OBJECTIVE

Transform the existing multi-page portfolio into:

✅ a SINGLE SCROLLABLE PAGE  
✅ smooth anchor navigation instead of page routes  
✅ visually striking but elegant design  
✅ highly animated but performant interface  
✅ cohesive modern design language

The site must feel:

- premium
- fluid
- technical
- clean
- impressive without being overdesigned.

---

# CONTENT SOURCES (AUTHORITATIVE)

Use these sources as truth:

1. Resume (primary source of projects, skills, experience)
2. LinkedIn: https://linkedin.com/in/ansh-shah-eecs

Extract:

- real project descriptions
- technical expertise
- roles and responsibilities
- short professional bio

DO NOT invent information.

Rewrite content to sound:

- concise
- technical
- confident.

---

# HERO SECTION REQUIREMENTS

Top hero text:

Hi, I'm Ansh Shah

CRITICAL:

This text MUST NEVER disappear or conditionally render.

Add typing animation cycling through short descriptors:

Examples (derive from resume):

- "EECS @ UC Berkeley"
- "Computer Architecture Engineer"
- "RISC-V + ASIC Design"
- "Systems Builder"
- "Hardware + Software"

Requirements:

- smooth typewriter animation
- loop infinitely
- no layout shift
- performance optimized.

---

# SITE STRUCTURE (ONE PAGE)

Convert site into sections:

1. Hero
2. About / Bio
3. Skills
4. Experience
5. Projects (primary focus)
6. Contact

Navbar links must:

- smooth-scroll to sections
- NOT navigate routes.

Remove multi-page navigation structure.

---

# NAVBAR

Change home label from:

"Portfolio"

to something more distinctive such as:

"Ansh.dev" or similar professional branding.

Navbar must:

- sticky
- subtle animation on scroll
- active section highlight.

---

# DESIGN THEME

Replace palette with:

https://colorhunt.co/palette/070f2b1b1a55535c919290c3

Colors:

Primary Dark: #070f2b  
Deep Accent: #1b1a55  
Secondary: #535c91  
Muted Light: #9290c3

Design direction:

- modern technical aesthetic
- dark, elegant
- slightly futuristic
- soft gradients allowed.

---

# ANIMATION REQUIREMENTS

Upgrade animation sophistication using Framer Motion.

Use:

- staggered reveal on scroll
- parallax-like subtle motion
- smooth fade + translate transitions
- hover elevation effects
- animated background accents (subtle, not distracting).

Avoid:

- excessive bouncing
- gimmicky motion.

Animations must feel intentional and premium.

---

# PROJECTS SECTION

Populate using resume content.

Each project must include:

- title
- short technical description
- key technologies
- key achievement metric (if present in resume)
- GitHub/demo links when available.

Cards should:

- animate into view
- have hover depth effect
- maintain accessibility.

---

# BIO SECTION

Create short professional bio synthesized from:

- resume
- LinkedIn.

Tone:

- professional
- concise
- technically confident.

---

# TECHNICAL CONSTRAINTS

Maintain:

- Next.js App Router
- Server components where possible
- Client components ONLY for animation/interactivity
- Performance-first design.

---

# STABILITY REQUIREMENT (VERY IMPORTANT)

Before finalizing:

1. Ensure NO content disappears after hydration.
2. Verify hero text remains visible.
3. Confirm no infinite re-renders.
4. Verify no React version conflicts.
5. Confirm smooth scrolling works.

---

# OUTPUT EXPECTATIONS

Modify existing codebase.

DO NOT create an entirely new unrelated project.

Refactor structure safely.

After completion:

- summarize structural changes
- list new components added
- confirm build compatibility with Next.js 15.

