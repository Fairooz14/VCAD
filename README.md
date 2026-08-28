# VCAD - Victoria College of Arts and Design

A take-home assignment implementing three pages of the VCAD site from Figma frames:
the **Homepage**, **Explore Our Courses**, and **Course Details**.

**Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4.

---

## Run locally

Requires **Node.js 20.9+** (built on 22). No environment variables needed.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To run the production build:

```bash
npm run build && npm run start
```

---

## How far I got & why I prioritised what I did

The brief called for Homepage -> Courses -> Course Details, with *quality over quantity*. I completed all three pages in that order, prioritising:

1. **Exact Figma implementation** - Matched the provided frames pixel-perfectly for layout, spacing, colors, and typography. The Course Details page includes the pill-tab navigation (with the "half blue band" effect where tabs straddle the navy background), the Course Information grid, the Course Specification download banner, and the Ready to Apply CTA - all built to exact Figma specs.

2. **Shared architecture** - Single Header/Footer (with separate headers for homepage vs courses section), one typed data source (`src/data/courses.ts`) that drives every page, and a clean component hierarchy. No duplicated code.

3. **Real interactivity** - Working carousels (Embla - pointer, drag, keyboard), draggable gallery strip, keyboard-navigable tabs with roving focus (arrow keys + Home/End), and a disclosure-pattern accordion. All genuinely operable, not faked.

4. **Data-driven asymmetric grid** - The courses grid derives each card's role (feature / stacked / expanded / overflow) from the data model, so adding/removing/reordering courses re-flows the layout correctly without manual intervention.

5. **Loading and empty states** - Built first-class skeleton loading (mirrors the real grid to prevent layout shift) and an empty state panel with clear next steps, both accessible via `?state=loading|empty` query params.

6. **Responsiveness + accessibility** - Mobile-first responsive design, WAI-ARIA landmarks, keyboard navigation, focus-visible states, and semantic HTML throughout. TypeScript clean, production build green.

7. **Code cleanup** - Final pass removed 9 orphaned components, 6 unused icons, dead exports, and stale commented code (85+ lines), with zero UI impact - verified via geometry fingerprints on all three pages.

All three pages are implemented and shippable. Course content is seeded with realistic placeholder data pending final copy and imagery.

**Note on Course Details tabs:** The pill-tab navigation includes three tabs ("Course Overview", "Course Structure & Details", "Admissions & Key Details"), but only the "Course Overview" tab is fully implemented with the Course Information grid. The other two tabs are placeholder stubs pending their UI designs. Given more time, I would complete these tabs and refactor the codebase to follow a more structured architecture - extracting reusable functions, organizing utilities separately, and establishing clearer separation of concerns across the project. Due to time constraints, I focused on delivering the core functionality and exact Figma implementation rather than comprehensive upfront planning and architectural refinement.

---

## One decision the designs didn't specify: button styling for new sections

The Course Details page required two new sections (Course Specification banner and Ready to Apply CTA) that weren't in the original component library. The Figma frames showed a different button style than the existing `Button.tsx` component (which wraps arrows in a circular `ArrowBadge`).

**Decision:** I implemented custom `<a>` elements with plain inline arrows matching the Figma frames exactly, rather than forcing the existing Button component's circular-arrow pattern where it didn't belong. This keeps the new sections true to the design while preserving the existing Button component for contexts where it's the right choice (like the 404 page and course empty state).

**Why:** The designs are the source of truth for what ships. When a new context has different button affordances, implementing exactly what was designed is more honest than retrofitting an existing pattern that would require the designer to accept a compromise they didn't choose.

---

## What I'd do next given more time

- **Complete the remaining Course Details tabs** - Build out the "Course Structure & Details" and "Admissions & Key Details" tab panels once their UI is provided. The tab infrastructure is in place; adding new panels is a straightforward extension.

- **Refactor for better architecture** - Extract reusable utility functions, organize helpers and constants into separate modules, establish clearer separation of concerns, and create a more maintainable structure. Due to time constraints, I prioritized delivering exact Figma implementation and core functionality over comprehensive upfront architectural planning.

- **Wire real course content and imagery** - Replace seeded placeholder copy in `src/data/courses.ts` with final WEB-594 content and drop real assets into `public/images/`. The data model already has fields for modules, entry requirements, careers, and key facts.

- **Replace in-file data with a real backend/CMS** - The async accessors in `src/data/courses.ts` provide a clean seam; swapping to Contentful/Sanity/a REST API wouldn't touch the page components. Pages already handle loading/empty/not-found states.

- **Fix the hard 404 for unknown course slugs** - Currently unknown slugs stream a `200` shell then swap in not-found UI (Next 16's documented soft-404 pattern). For SEO/analytics correctness, I'd add a lightweight slug-existence check before streaming to return a true `404` status.

- **Add tests** - Unit tests for data accessors and grid role assignment logic, plus accessibility smoke tests (keyboard nav, ARIA, focus management). Playwright E2E for the critical paths (homepage -> courses -> course detail).

- **Wire CTA destinations** - Connect "Apply Now", "Book an open day", and "Contact admissions" buttons to real forms or mailto links with proper tracking.

- **Theme token cleanup** - A few hard-coded hex colors remain in the new Course Details sections (`#051251`, `#EBECF3`). These map to existing theme tokens (`card`, `text`) and could be swapped for consistency, though the current implementation exactly matches the Figma specs.

---

## Project structure

```
src/
├── app/
│   ├── (site)/              # Homepage route group
│   │   ├── layout.tsx       # Homepage-specific header
│   │   └── page.tsx         # Homepage
│   ├── courses/
│   │   ├── (list)/          
│   │   │   └── page.tsx     # Courses list + grid
│   │   ├── [slug]/
│   │   │   ├── page.tsx     # Course details
│   │   │   ├── loading.tsx  # Loading skeleton
│   │   │   └── not-found.tsx
│   │   └── layout.tsx       # Courses-specific header
│   ├── layout.tsx           # Root layout (no header here)
│   └── globals.css          # Theme tokens + Tailwind
├── components/
│   ├── course/              # Course detail components
│   ├── courses/             # Courses list components
│   ├── home/                # Homepage sections
│   ├── layout/              # Header, Footer, PageHero
│   └── ui/                  # Reusable primitives
├── data/                    # Typed data sources
├── lib/                     # Icons, utils, types
└── public/images/           # Static assets
```

---


