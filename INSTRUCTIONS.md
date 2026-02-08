# TARGETED DESIGN UPDATE — CLAUDE IMPLEMENTATION INSTRUCTIONS

You are modifying an existing Next.js 15 portfolio project.
DO NOT redesign or restructure the project architecture.
Only implement the specific changes listed below.

---

# 1. RESTORE BRANDING (REQUIRED)

* Restore navbar/home label to:

  **Ansh.dev**

* Remove any replacement labels such as “System”.

* Remove any UI text that labels sections as “MODULE” or similar engineering terminology.

The computer architecture theme must remain subtle and visual only — never literal through labels or naming.

---

# 2. SUBTLE ARCHITECTURE VISUAL STYLE

Implement light architecture-inspired aesthetics WITHOUT making the UI look like a circuit board.

## Blueprint-style grid (very subtle)

Add a faint engineering grid background:

* extremely low opacity
* thin lines
* barely visible
* should feel like precision alignment, not decoration.

Example approach:

* CSS background gradients or pseudo-elements.

## Flow indicators between sections

Add minimal connecting lines between major page sections to imply flow.

Constraints:

* thin lines
* low opacity
* no literal wires or circuit diagrams
* must remain elegant and minimal.

---

# 3. HERO SECTION

Keep headline:

**Hi, I'm Ansh Shah**

Add rotating short descriptors below the name:

* fade or slide animation
* smooth transitions
* professional tone.

Ensure the name never disappears or becomes hidden due to animation or layout behavior.

---

# 4. PROJECT CARD DESIGN ADDITIONS

Add overlay UI elements:

* Small top-right bubble showing project timeframe (e.g., “Spring 2025”).
* Optional star icon for featured projects.

Implementation:

* absolute positioning
* subtle backdrop blur
* clean and minimal styling.

---

# 5. PROJECT EXPANSION INTERACTION

When a project is clicked:

* DO NOT navigate to a new page.
* Open a centered overlay panel.
* Background should blur.
* Panel slides in smoothly (Framer Motion).
* Include visible close (X) button.

Overlay may later support additional images.

---

# 6. MOBILE FIXES (IMPORTANT)

Fix the following mobile issues:

* Remove all horizontal scrolling.
* Prevent page from being scrollable left/right.
* Navbar must fit viewport width.
* Collapse navbar into hamburger menu if necessary.
* Ensure viewport meta tag is correct.
* Center the “Get in Touch” button on mobile.
* Prevent zoom-out behavior caused by layout overflow.

---

# 7. CONTACT SECTION — PHONE NUMBER PROTECTION

Keep phone number visible to users but reduce scraping risk.

Implement client-side reconstruction:

* phone number should NOT appear as a full string in static markup.
* assemble from parts in client-side code after render or on interaction.

Primary contact emphasis should remain email/LinkedIn.

---

# 8. LOCAL IMAGE WORKFLOW FILE (LOCAL ONLY)

Create a file:

```
IMAGE_WORKFLOW.md
```

Contents should explain:

* where images should be stored locally
* directory structure
* naming conventions
* recommended image sizes
* how to reference images in project components.

Create local directory:

```
/local-assets/
```

---

# 9. GITIGNORE UPDATES

Update `.gitignore` to exclude:

* instructions.md
* status.md
* IMAGE_WORKFLOW.md
* /local-assets/

These files must remain local-only and not pushed to GitHub.

---

END OF INSTRUCTIONS.
