# Portfolio Redesign Instructions (Claude Implementation Guide)

## Overview

This document defines the design and structural upgrades required for the portfolio website.

Primary goals:

- Achieve S-tier engineering portfolio design
- Emphasize hardware/systems aesthetic
- Improve project discoverability and visual hierarchy
- Maintain performance and simplicity
- Ensure full responsiveness (mobile-first design)
- Focus ONLY on layout, structure, and UI improvements for now
- DO NOT rewrite project content yet

Tech stack:

- Next.js 15
- React 18
- Tailwind CSS
- react-markdown (already implemented)

---

# Core Design Philosophy

This is NOT a generic software portfolio.

Design should communicate:

- systems engineering
- computer architecture
- hardware/software interface
- precision and technical depth

Visual tone:

- clean
- modern
- minimal but technical
- subtle "engineering aesthetic"

Avoid:

- flashy startup landing page style
- excessive gradients
- overly playful UI patterns

---

# HERO SECTION (HIGH PRIORITY)

Update the hero section to immediately establish credibility.

Required layout:

- Name (large)
- Short positioning tagline
- Current role or credibility anchor

Example structure:

Hi, I'm Ansh Shah  
Silicon Product Engineering Intern @ Intel | EECS @ Berkeley  

Building efficient systems at the hardware-software interface.

Add:

- subtle animated background or technical motif allowed
- keep minimal and professional

---

# PROJECTS SECTION (MAJOR REDESIGN)

## Project Cards

Each project card must include:

- Project image/thumbnail
- Title
- Short summary
- Tech tags (optional)
- Date bubble (top-right overlay)

Date bubble format examples:

- Fall 2025
- Spring 2025
- Summer 2024

Implementation:

- Small rounded badge
- Positioned absolutely in top-right corner of image container

---

## Featured Project

Add ability to mark a project as:

⭐ Featured

Requirements:

- small star icon overlay
- RV32I CPU project should be featured
- visual emphasis without breaking layout

---

## Expanded Project View (Deep Dive Overlay)

This replaces separate project pages.

Behavior:

- Clicking project opens overlay modal
- Background blurs
- Page scroll disabled
- Overlay slides in from side or center

Overlay must include:

- close (X) button
- smooth animation
- scrollable content area

Structure:

- title
- description
- image carousel
- space for future deep technical details

IMPORTANT:

Do NOT implement full deep content yet.
Just build expandable framework.

---

## Image Carousel (Inside Expanded View)

Requirements:

- swipe support (mobile)
- arrows for desktop
- responsive sizing
- lightweight library preferred

---

# UX CUES

Add discoverability:

- "Click to see more" hint on project cards
OR
- hover interaction indicating expandability

---

# ARCHITECTURE-THEMED UI AESTHETIC

Introduce subtle systems-inspired design elements:

Examples:

- thin grid lines
- faint signal/path lines
- pipeline-like separators
- structured spacing resembling block diagrams

Guidelines:

- subtle and elegant
- never distracting
- avoid heavy skeuomorphic designs

Optional ideas:

- animated line traces
- structured layout rhythm

---

# STRUCTURAL IMPROVEMENTS

## Skills Section

Reorganize visually into conceptual groupings:

Example:

Architecture  
Hardware Design  
Low-Level Systems  
Verification

Focus on clarity rather than large keyword blocks.

---

# RESPONSIVENESS (MANDATORY)

Mobile-first design.

Requirements:

- all cards stack cleanly on mobile
- overlay modal usable with thumb navigation
- carousel swipe enabled
- no horizontal scroll

Test breakpoints:

- small phone
- large phone
- tablet
- desktop

---

# FUTURE FEATURES (DO NOT IMPLEMENT YET)

These should be planned but NOT built now:

- Interactive architecture diagrams
- Technical blog page
- Experience timeline view

Leave extensibility hooks where reasonable.

---

# ANIMATION GUIDELINES

Allowed:

- smooth fades
- subtle motion
- sliding panels

Avoid:

- excessive motion
- flashy effects
- long animation durations

Target:

- fast and responsive feel.

---

# PERFORMANCE

- Avoid heavy libraries
- Prefer lightweight components
- Maintain fast load times

---

# REPOSITORY RULES

Certain markdown files should exist locally but NOT be committed to GitHub.

Examples:

- Instructions.md
- status.md
- internal planning files

Add/update `.gitignore`:

Instructions.md
project_status.md
*.local.md


Ensure these files remain local-only.

---

# IMPLEMENTATION PRIORITY ORDER

1. Hero section redesign
2. Project card redesign (date badges + featured star)
3. Expandable overlay modal
4. Image carousel inside overlay
5. Architecture-themed aesthetic adjustments
6. Skills section layout improvement
7. Mobile responsiveness refinements

---

# END GOAL

The result should feel like:

- a professional architecture engineer portfolio
- clean, structured, technical
- visually memorable without being flashy
- significantly stronger than typical student portfolios
