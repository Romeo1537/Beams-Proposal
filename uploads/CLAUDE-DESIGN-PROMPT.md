# Prompt for Claude Design: Beams Interview Landing Page

Copy everything below the line into a new Claude.ai conversation and ask it to build you a React artifact.

---

Build me a single-file React artifact: a personal landing page I am sending to my interviewer at Beams (a home renovation startup in London). The page presents my 30/60/90 day impact plan for their Operations Associate role, themed around moving through a renovated kitchen.

## The Concept

The page is a scroll-driven journey through a stylised, illustrated kitchen. As you scroll, you move from one area of the kitchen to another (wide view, then sink area, then tiled wall, then hob/cooktop). Each kitchen area is the backdrop for a phase of my 30/60/90 day plan. The kitchen illustrations should be FLAT VECTOR STYLE (think Figma illustrations or editorial illustration, not photorealistic). Clean geometric shapes, bold colours, visible outlines. This style is achievable in code and looks intentional.

## Exact Colour Palette (from the Beams website)

Use ONLY these colours:

- Primary gold: #ffb20b (buttons, accents, highlights)
- Primary hover: #ffc055
- Dark foreground: #0f0519 (text, dark sections)
- Muted foreground: #3e3746
- Grey: #86828b
- Background: #ffffff
- Muted bg: #f3f3f3
- Secondary: #e0dfde
- Base secondary (warm cream): #e8e3df
- Base accent: #f9f6f5
- Border: #e6e6e6

For the kitchen illustrations, use warm tones: the creams (#e8e3df, #f9f6f5) for cabinets, #0f0519 dark for countertops/hob, the gold #ffb20b for accent details (handles, pendant light glow, active burner ring). Use soft blues (#b8cfe0, #d4e4f0) for the window/sky.

## Page Structure (5 sections, all full-viewport-height)

### Section 1: Hero (wide kitchen view)
- Full viewport height
- Background: the dark foreground colour (#0f0519) as wall
- SVG/CSS illustrated kitchen panorama: upper cabinets, a window with soft blue light, two pendant lights with gold shades, a countertop, lower cabinets, a small sink, a small hob. Keep it SIMPLE: rectangles with rounded corners, clean lines, no fussy detail
- Overlay text (left-aligned, over the kitchen):
  - Small gold pill badge: "Operations Associate"
  - Large white heading: "Building systems that scale."
  - Subtitle in white/60% opacity: "A 90-day impact plan for Beams, from someone who builds operational infrastructure from scratch."
  - Gold button: "See the plan" with a right arrow
- Subtle scroll indicator at the bottom (thin gold line pulsing)
- Text should animate in on load (fade up, staggered)

### Section 2: Days 1-30 "Understand the plumbing" (sink area)
- Background: warm cream (#f9f6f5 to #ebe4db gradient)
- Right side: larger illustrated sink/tap detail (SVG, flat style, cream and grey tones, gold tap handle)
- Left side content:
  - Phase label: gold dot + "DAYS 1-30" in small caps
  - Heading: "Understand the plumbing." (the word "plumbing" in gold)
  - 4 bullet points with gold circle icons:
    1. "Shadow every stage of the delivery pipeline: from signed contract through builder assignment, materials ordering, milestone approvals, and project close. Map the real process, not the documented one."
    2. "Meet every builder in the active network. Understand their frustrations, their workarounds, and where the Beams process helps or hinders them."
    3. "Identify the top three operational pain points by frequency and severity. Start building the case for what to fix first."
    4. "Audit current tools and systems. Understand what data exists, where it lives, and what is being tracked versus what should be."
  - Two small metric cards: "100% / Pipeline stages shadowed" and "Top 3 / Pain points identified"
- Content should animate in on scroll (fade up, bullet points staggered)

### Section 3: Days 30-60 "Set the pattern" (tiled wall)
- Background: dark (#0f0519), white text
- Right side: a grid of subtle rectangular tiles in varying opacities of gold and white (the backsplash pattern). Some tiles should shimmer gently (opacity animation). Add 2-3 floating colour swatch squares (gold, cream, dark purple) that slowly drift up and down
- Left side content:
  - Phase label: gold dot + "DAYS 30-60"
  - Heading: "Set the pattern." ("pattern" in gold)
  - 4 bullet points:
    1. "Redesign and ship the highest-priority process fix. Not on paper: live, tested, and adopted. Get buy-in from the team and make it stick."
    2. "Take ownership of builder onboarding end to end. Streamline the pipeline from vetting through first project assignment. Become the person builders call."
    3. "Build early warning indicators for live projects: delays, milestone slippage, coordination breakdowns. Surface problems before they reach the customer."
    4. "Establish a regular operational cadence with cross-functional teams: sales handoff reviews, builder check-ins, project health reporting."
  - Two metric cards: "1+ / Process shipped live" and "Owned / Builder onboarding pipeline"

### Section 4: Days 60-90 "Turn up the heat" (hob/cooktop)
- Background: warm cream gradient (#f9f6f5 to white)
- Right side: illustrated cooktop/hob (dark rectangle with 4 circular burners, one glowing gold with a subtle pulse animation). Flat style, clean
- Left side content:
  - Phase label: gold dot + "DAYS 60-90"
  - Heading: "Turn up the heat." ("heat" in gold)
  - 4 bullet points:
    1. "Processes built in month two are running smoothly and scaling. Iterate based on what the data and builder feedback are telling you."
    2. "Root-cause analysis is embedded as a discipline, not a reaction. When something breaks, the system learns. Patterns get fixed, not symptoms."
    3. "Operational reporting gives leadership a clear view of project health, builder performance, and delivery quality. Data wins."
    4. "Teams across Beams come to this person when they need something operational sorted. Trusted by builders, valued by leadership, ready to grow the function."
  - Two metric cards: "Scalable / Processes running" and "Embedded / Root-cause discipline"

### Section 5: Experience + Footer
- Background: dark (#0f0519)
- Heading: "Why me." ("me" in gold)
- 3 cards in a row (dark cards with subtle border, gold top-accent on hover):
  - Card 1: "The Honourable Artillery Company" / "Assistant Operations Manager" / "End-to-end event delivery across spaces from 40 to 2,000 capacity. Built an AI-augmented operations system from scratch using Notion and Claude that the team now uses as its default operating system."
  - Card 2: "Systems Builder" / "AI-Native Workflow Design" / "Maintain a full Claude Code workflow for daily planning, automation, and document production. Built a structured job search pipeline with a 100-point scoring system, automated document generation, and live tracking."
  - Card 3: "Family Catering Business" / "Operations & Client Management" / "Staffing, client events, and website management. Coordinating independent teams across live events with shifting requirements. Influence without authority."
- Footer below: "Romeo Lam" / "Operations Associate | Beams" in gold
- Two small outline buttons: "Email" (link to mailto:romeo.lam556@gmail.com) and "LinkedIn"
- At the very bottom, barely visible (about 18% white opacity, italic), this quote: "Nothing that you ever do with all your heart is done in vain." -- This quote is from Sam's personal website (the interviewer) so it is a deliberate easter egg. It should be barely visible but glow slightly gold on hover.

## Animations and Transitions

- Hero text: fade-up on load, staggered (tag first, then heading, then subtitle, then button)
- All section content: fade-up when scrolling into view using Intersection Observer
- Bullet points: stagger their appearance (each one 150ms after the previous)
- Pendant light shades: subtle glow pulse (box-shadow animation on the gold shades)
- Tile wall: some tiles shimmer with slow opacity changes
- Active hob burner: gold ring with pulsing glow
- Floating colour swatches: gentle vertical drift (translateY oscillation)
- Scroll progress bar: thin gold line at the very top of the page, grows with scroll
- Navigation: transparent at top, becomes dark with backdrop blur on scroll
- Phase dots on right edge: small dots that highlight as you scroll through sections

## Technical Requirements

- Single React component, no external dependencies beyond what is available in the artifact environment
- Use inline SVG for the kitchen illustrations (not CSS hacks with divs)
- Use Intersection Observer for scroll-triggered animations (useEffect + useRef)
- Use CSS transitions, not JS-driven animation loops (lighter, smoother)
- Font: use the system font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- Responsive: hide the right-side illustrations and phase dots on mobile, stack content
- No localStorage or sessionStorage
- No external images or fonts to load

## Common Pitfalls to Avoid

- DO NOT make the SVG kitchen illustrations too detailed. Simple geometric shapes only. A cabinet is a rounded rectangle. A burner is two concentric circles. A window is a rectangle divided by two lines. Keep it clean.
- DO NOT use gradients, drop shadows, or blur filters on the SVG elements. Flat fills only. The style should feel like a Figma illustration.
- DO NOT forget dark mode considerations: the dark sections (#0f0519 background) need white/gold text; the light sections need dark text. Test both mentally.
- DO NOT make the kitchen illustrations dominate the page. They are background atmosphere, not the main content. The content (the 30/60/90 plan) is the star.
- DO NOT use position: fixed for anything that affects layout height.
- DO NOT add excessive animation. Smooth and subtle. The glow on the pendant lights and the active burner are the only looping animations. Everything else triggers once on scroll.
- DO NOT use emojis anywhere.
- The scroll progress bar should be position: fixed, top: 0, z-index high, height: 3px, gold background.
