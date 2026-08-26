# VCAD — Victoria College of Arts and Design

Three pages of the VCAD site (part of PEN Group), built from the Figma frames:
the **Homepage**, **Explore Our Courses**, and **Course Details**.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4.

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

## What's built

| Route | Highlights |
| --- | --- |
| `/` — Homepage | Hero, story/mission, campus + testimonial, partners, and **carousels** (Embla — arrows, drag, and keyboard). |
| `/courses` — Explore Our Courses | The **asymmetric grid** (one feature card, two stacked, one expanded card with **school + duration** badges) and a **draggable gallery strip**. Plus the **loading** and **empty** states (below). |
| `/courses/[slug]` — Course Details | Banner, **tabs** (Overview / What you'll study / Entry requirements / Careers), an **accordion** of modules, a sticky key-facts sidebar, related courses, and a friendly 404 for unknown slugs. |

Cross-cutting:

- **Header and footer are built once** (`src/components/layout/`) and shared by every page — no copy-paste.
- **All course content lives in one place** (`src/data/courses.ts`), behind async accessors. The homepage preview, the grid, the details page, and "related courses" all read from it, so **editing the data updates every page**. The grid derives each card's *role* (feature / stacked / expanded / overflow) from the data — add, remove, or reorder courses and the layout re-flows correctly.
- **Fully responsive** and **keyboard-accessible** (WAI-ARIA tabs with roving tabindex; disclosure-pattern accordion; focus-visible states throughout).
- **Production build is green** — TypeScript clean; course pages pre-rendered as SSG.

---

## How far I got & why I prioritised this way

The brief's order was Homepage → Courses → Course Details, with *quality over quantity*. I built them **in that order and finished each to a shippable standard before moving on**, prioritising in this sequence:

1. **Shared architecture first** — one Header/Footer and a single typed data source, so nothing is duplicated and the data-drives-every-page requirement holds by construction.
2. **Real interactivity** — carousels, the gallery strip, tabs, and the accordion are genuinely operable (pointer + keyboard), not faked.
3. **A data-driven asymmetric grid** — roles come from the data, so it survives content changes.
4. **The two undesigned states** (loading + empty).
5. **Responsiveness + accessibility**, then a clean production build.

All three pages are implemented. **Per-course detail copy and imagery are seeded in-voice against a placeholder image**, pending the real *Course Details (WEB-594)* content and final assets — the data model and layout are in place, so dropping in real content is a data-file edit, not a rebuild.

---

## One decision the designs didn't specify: the loading & empty states

The mockups don't say what `/courses` shows *while data loads* or *when there are no courses*. I treated both as first-class rather than afterthoughts:

- **Loading** (`/courses?state=loading`) — a skeleton that mirrors the real grid's exact layout (feature + stacked + expanded). It matches the destination so there's **no layout shift** when content arrives, and the shape reads as "courses are coming," not "something broke." I chose a matched skeleton over a generic spinner because the grid *is* the page, and a skeleton that matches the target feels calmer and faster.
- **Empty** (`/courses?state=empty`) — instead of a blank page, an on-brand, reassuring panel ("No courses to show right now") with a clear way onward, so a genuinely empty catalogue still feels intentional and shippable.

(The `?state=` query param simply toggles a simulated slow/empty backend in `getCourses()` so both states are easy to review.)

---

## What I'd do next

- **Wire the real WEB-594 content and course imagery** — swap the seeded copy in `src/data/courses.ts` and drop real assets into `public/`; the model already has fields for modules, entry requirements, careers, and key facts.
- **Replace the in-file catalogue with a real backend/CMS** — the async accessors in `src/data/courses.ts` are the single seam to change; the pages already handle loading/empty/not-found.
- **Return a hard `404` status for unknown course slugs.** Today an unknown slug streams a `200` shell and then swaps in the not-found UI with an injected `noindex` — this is Next 16's documented soft-404 (a streamed response's status can't change after headers are sent). For crawler/analytics correctness I'd add an existence check *before* streaming (a lightweight `proxy` slug check, or Cache Components).
- **Tests** — unit-test the data accessors and the grid's role assignment, plus an accessibility smoke test — and wire the "Apply" / "Book an open day" CTAs to real destinations.

---

## Deploy (Vercel)

The repo is a standard Next.js app and deploys with zero config. After pushing to a Git remote:

1. Import the repo at https://vercel.com/new.
2. Framework preset: **Next.js** (auto-detected). No env vars required.
3. Deploy. (Or, from the project root: `npx vercel` then `npx vercel --prod`.)

Netlify and Cloudflare Pages both auto-detect Next.js and work the same way (build command `npm run build`).
