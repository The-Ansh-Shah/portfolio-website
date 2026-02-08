# SYSTEM DESIGN DIRECTIVE — ADVANCED PORTFOLIO REFACTOR

You are acting as a senior frontend systems engineer improving an existing Next.js 15 portfolio project.

This is NOT a rewrite. Refactor and upgrade the existing implementation.

Stack:

* Next.js 15 (App Router)
* React 18
* TypeScript
* TailwindCSS
* Framer Motion

There is NO raw HTML. All work must respect React component architecture and server/client boundaries.

---

# PRIMARY OBJECTIVE

Transform this portfolio into a visually stunning, architecture-themed engineering site with:

* Strong visual hierarchy
* Clean system-inspired UI
* Excellent mobile responsiveness
* Advanced yet subtle animations
* High performance.

Design language inspiration:

* hardware architecture diagrams
* blueprint schematics
* Apple-level minimalism.

Avoid:

* cyberpunk styling
* hacker terminal aesthetics
* excessive glow/neon.

---

# GLOBAL FIXES (CRITICAL)

## Prevent horizontal scrolling (MOBILE BUG)

Currently:

* navbar overflows
* page allows sideways scroll
* mobile zoom possible.

Fix across layout:

* replace any `w-screen` with `w-full` where appropriate.
* remove transforms or absolute positioning causing overflow.
* ensure containers use:

  max-w-[...] mx-auto px-4

Add global rule:

```
html, body {
  overflow-x: hidden;
}
```

Ensure layout.tsx contains proper viewport meta tag.

---

## Navbar Refactor

Requirements:

* Responsive hamburger menu below lg breakpoint.
* No overflow.
* Center alignment.
* Rename "Portfolio" home button to something more architectural/system-oriented (e.g. "System", "Overview", "Architecture").

---

# HERO SECTION UPGRADE

Must include:

* Large name headline: "Hi, I'm Ansh Shah"
* Name MUST NEVER disappear due to animation or layout reflow.
* Under name, rotating short descriptors cycling smoothly:

Example concept:

"Computer Architect"
"Systems Builder"
"Silicon Enthusiast"
"EECS @ Berkeley"

Use subtle fade/slide transitions.

Add faint animated blueprint/circuit background.

---

# ABOUT SECTION REFACTOR

Problem:

Too much unused whitespace.

Refactor into responsive grid:

Desktop:

[ profile highlights column ] [ bio text ]

Mobile:

stack vertically.

Include:

* short bio summary (from resume/linkedin when available)
* skills grouped into chips.

---

# PROJECTS SECTION — ADVANCED UX

## Project Card Enhancements

Add overlay metadata:

Top-right bubble:

* term (Fall 2025 / Spring 2025 etc.)
* optional star icon for featured project (RV32I CPU).

Use:

absolute positioning + backdrop blur.

---

## Deep Dive Overlay (IMPORTANT FEATURE)

Clicking a project SHOULD NOT navigate to new page.

Instead:

* blur background
* slide panel from right side.
* overlay modal behavior.

Content:

* project details
* image carousel
* close button.

Implement with Framer Motion.

---

# ARCHITECTURE-THEMED VISUAL DESIGN

Enhancements:

* faint blueprint grid background.
* thin connector lines between sections.
* technical labels:

MODULE: ABOUT
MODULE: PROJECTS

Use mono font for labels.

---

# CONTACT SECTION REFACTOR (SECURITY AWARE)

Goal:

Avoid exposing phone number directly in static markup.

Implement OPTION A:

Client-side phone reconstruction.

Example approach:

```
const phoneParts = ["123","456","7890"]
const phone = phoneParts.join("-")
```

Render phone only after component mounts or when user clicks:

"Reveal Direct Contact".

Primary contact area should include:

* Email button
* LinkedIn button
* Resume download.

---

# MOBILE EXPERIENCE (STRICT REQUIREMENTS)

* No sideways scrolling.
* All CTAs centered.
* Touch-friendly spacing.
* No accidental zoom.
* Layout stacks vertically below md breakpoint.

---

# ANIMATION GUIDELINES

Use Framer Motion.

Preferred:

* fade
* slide
* subtle scale.

Avoid:

* large bounces
* exaggerated motion.

---

# REPOSITORY CLEANUP

Prevent unnecessary local documentation files from being committed.

Update .gitignore to exclude:

* instructions.md
* status.md
* development logs.

They may exist locally but must not be tracked by git.

---

# FINAL GOAL

The portfolio should feel like:

A hardware/software systems engineer designed it with intention and precision.

Elegant.
Technical.
Memorable.

Refactor iteratively while preserving existing working structure.
