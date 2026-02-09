# FEATURE EXPANSION — PROJECT LINKS + INTERACTIVE RESUME PAGE

You are modifying an existing Next.js 15 portfolio project.

DO NOT redesign the entire site.
ONLY implement the additions described below while preserving existing structure, styling, and animation patterns.

---

# 1. ADD GITHUB LINKS TO EXISTING PROJECTS

Integrate repository links into the existing project system.

Add the following GitHub URLs:

* RV32I CPU Project
  [https://github.com/The-Ansh-Shah/rv32i-cpu-and-cache](https://github.com/The-Ansh-Shah/rv32i-cpu-and-cache)

* RP2040 Project
  [https://github.com/The-Ansh-Shah/DAWGkit-RP2040](https://github.com/The-Ansh-Shah/DAWGkit-RP2040)

* RISC-V Neural Network Classifier
  [https://github.com/The-Ansh-Shah/riscv-neural-network-classifier](https://github.com/The-Ansh-Shah/riscv-neural-network-classifier)

## Implementation Requirements

* Each project card must display a small GitHub icon button.

* Button should appear:

  * either on hover (desktop)
  * always visible but subtle on mobile.

* Use Lucide React GitHub icon.

* Open link in new tab.

* Add subtle hover animation (scale or glow).

If project metadata system exists (e.g., frontmatter or data object), add a `github` field rather than hardcoding.

---

# 2. CREATE INTERACTIVE RESUME PAGE

Add a dedicated page:

```
/resume
```

This page must feel premium, interactive, and visually impressive.

Goal:

* downloadable resume
* interactive scroll-based highlight experience.

---

## 2A — DOWNLOADABLE LATEX RESUME

Create structure allowing placement of resume PDF.

Add folder:

```
/public/resume/
```

Expect file:

```
/public/resume/Ansh_Shah_resume.pdf
```

Add prominent button:

* “Download Resume”
* downloads PDF directly.
* include subtle animation on hover.

---

## 2B — INTERACTIVE RESUME EXPERIENCE

The resume page must NOT just embed a PDF.

Instead:

Create an interactive highlight reel based on resume sections:

Sections:

* Education
* Experience
* Projects
* Technical Skills

Layout suggestion:

* Vertical scroll narrative.
* Each section animates into view (Framer Motion).
* Timeline or structured blocks preferred.

Interaction ideas:

* Scroll-triggered animations.
* Section highlights as user scrolls.
* Clean typography.
* Subtle motion — professional tone only.

---

## 2C — RESUME DATA SOURCE

Prepare system so resume content can be customized later.

Implementation guidance:

* Create structured data object (e.g., resumeData.ts).
* Populate initial placeholder content based on provided resume.
* Avoid hardcoding large text directly inside JSX.

---

# 3. OPTIONAL ENHANCEMENT — FEATURED HERO CTA

Add small CTA somewhere in hero or navbar:

“View Resume”

Links to:

```
/resume
```

---

# 4. DESIGN CONSTRAINTS

Resume experience must feel:

* high-end
* technical
* elegant
* minimal.

DO NOT:

* embed raw PDF viewer as primary UI.
* use flashy or excessive animation.
* create overly dense text blocks.

---

END OF INSTRUCTIONS.
