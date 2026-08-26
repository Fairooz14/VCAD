// Shared domain types. These model the design's content so every page can be
// rendered from data rather than hardcoded markup.

/** A unit of study within a course, shown in the "What you'll study" accordion
 *  on the course details page. */
export interface CourseModule {
  title: string;
  description: string;
  /** Optional stage/year label, e.g. "Year 1". */
  stage?: string;
}

/** A labelled fact (fees, next intake, location) shown in the details sidebar. */
export interface CourseFact {
  label: string;
  value: string;
}

/** A course offered by VCAD. The single source of truth is `src/data/courses.ts`;
 *  the same records feed the homepage preview, the courses grid, and course details. */
export interface Course {
  /** URL-safe id, e.g. "ba-hons-fashion-design" — used for /courses/[slug]. */
  slug: string;
  /** Qualification prefix, e.g. "BA (Hons)" or "CertHE". */
  level: string;
  /** Subject, e.g. "Fashion Design". `level + name` forms the display title. */
  name: string;
  /** School the course sits in — shown as a badge on the courses grid. */
  school: string;
  /** Duration, e.g. "3 Years" — shown as a badge on the courses grid. */
  duration: string;
  /** Study mode, e.g. "Full-time". */
  studyMode: string;
  /** One-line summary used in the homepage accordion and course cards. */
  summary: string;
  /** Longer descriptive copy used in the expanded/feature card and details page. */
  description: string;
  /** Path (under /public) to the course image. */
  image: string;
  /** Marks the course that takes the large feature slot on the courses grid. */
  featured?: boolean;

  // ── Course-details content (optional; powers /courses/[slug]) ──────────────
  /** Short "why study this" selling points, shown in the Overview tab. */
  highlights?: string[];
  /** Units of study, shown as an accordion in the "What you'll study" tab. */
  modules?: CourseModule[];
  /** Typical entry requirements, shown in the Entry & Fees tab. */
  entryRequirements?: string[];
  /** Example graduate destinations, shown in the Careers tab. */
  careers?: string[];
  /** Key facts (tuition, next intake, UCAS code…) for the details sidebar. */
  facts?: CourseFact[];
}

/** A physical campus, used by the homepage campuses carousel. */
export interface Campus {
  slug: string;
  name: string;
  location: string;
  image: string;
  href: string;
}

/** A student testimonial, used by the homepage testimonials carousel. */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

/** An editorial story/article, used by the homepage stories carousel. */
export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  campus?: string;
}

/** A navigation link (header, footer). */
export interface NavLink {
  label: string;
  href: string;
}

/** A social media link with its icon path. */
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

/** An accreditation/partner badge shown in the footer. */
export interface Badge {
  alt: string;
  src: string;
}
