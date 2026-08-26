import type { Course } from "@/lib/types";
import { delay } from "@/lib/utils";

/**
 * The canonical course catalogue. This is the ONLY place course content lives —
 * the homepage preview, the courses grid, and the course details page all render
 * from these records. Add/remove/reorder here and every page updates.
 *
 * Modelled from the homepage design. `summary`/`description` for BA (Hons) Fashion
 * Design are taken verbatim from the design; the other courses' copy and the
 * `school`/`duration`/`studyMode` fields (which surface as badges on the courses
 * grid) are seeded in-voice and will be reconciled against the "Explore Our
 * Courses" frame. Per-course imagery is a placeholder until that frame arrives.
 */
export const courses: Course[] = [
  {
    slug: "ba-hons-fashion-design",
    level: "BA (Hons)",
    name: "Fashion Design",
    school: "School of Fashion",
    duration: "3 Years",
    studyMode: "Full-time",
    summary:
      "Explore creative practice across the theoretical, practical, and technical foundations of fashion, and build the visual communication skills to bring your ideas to life.",
    description:
      "This course introduces students to creative practice, focusing on theoretical, practical, and technical components. In early stages, students develop essential skills for academic success and personal growth, emphasizing reflection and technical skills like visual communication.",
    image: "/images/courses.webp",
    featured: true,
    highlights: [
      "Industry-standard studios with pattern-cutting, print and digital suites",
      "Live briefs set with fashion houses and independent designers",
      "Showcase your final collection at our end-of-year press show",
      "One-to-one studio mentoring from practising designers",
    ],
    modules: [
      {
        stage: "Year 1",
        title: "Foundations of Fashion Practice",
        description:
          "Establish the core skills of the studio — research, drawing, and material exploration — while building the reflective habits that underpin academic and creative growth.",
      },
      {
        stage: "Year 1",
        title: "Visual Communication",
        description:
          "Develop the visual language to express ideas clearly, from hand drawing to digital tools, and learn to present concepts to a brief.",
      },
      {
        stage: "Year 2",
        title: "Pattern Cutting & Garment Construction",
        description:
          "Translate two-dimensional ideas into three-dimensional garments through technical pattern cutting, toiling, and construction.",
      },
      {
        stage: "Year 2",
        title: "Collection Development",
        description:
          "Research, design and develop a cohesive small collection, making creative decisions from concept through to finished pieces.",
      },
      {
        stage: "Year 3",
        title: "Final Collection",
        description:
          "Conceive and realise a resolved final collection that defines your signature and readiness for the industry.",
      },
      {
        stage: "Year 3",
        title: "Professional Portfolio & Industry",
        description:
          "Build a professional portfolio and prepare for graduate life through industry placements, briefs, and showcase opportunities.",
      },
    ],
    entryRequirements: [
      "112 UCAS points (BBC at A-Level) or a relevant Level 3 diploma",
      "A creative portfolio demonstrating your practice",
      "GCSE English at grade 4 / C or above",
      "International applicants: IELTS 6.0 (no band below 5.5)",
    ],
    careers: [
      "Fashion Designer",
      "Pattern Cutter",
      "Garment Technologist",
      "Creative Director",
      "Fashion Stylist",
    ],
    facts: [
      { label: "UCAS code", value: "W230" },
      { label: "Next intake", value: "September 2026" },
      { label: "Tuition (UK)", value: "£9,250 / year" },
      { label: "Campus", value: "Borough, London" },
    ],
  },
  {
    slug: "ba-hons-fashion-media-and-marketing",
    level: "BA (Hons)",
    name: "Fashion Media and Marketing",
    school: "School of Fashion",
    duration: "3 Years",
    studyMode: "Full-time",
    summary:
      "Combine storytelling, branding, and digital media to shape how fashion is communicated — from campaigns and content to the strategy behind them.",
    description:
      "Fashion Media and Marketing blends creative communication with commercial strategy. You'll develop skills across content creation, brand storytelling, digital marketing, and trend analysis, working on live briefs that mirror the pace of the industry.",
    image: "/images/courses.webp",
    highlights: [
      "Produce campaigns and content in our media and photography studios",
      "Live briefs with brands, agencies, and fashion publications",
      "Learn analytics, social strategy, and trend forecasting",
      "Graduate with a portfolio of published, real-world work",
    ],
    modules: [
      {
        stage: "Year 1",
        title: "Fashion Communication Foundations",
        description:
          "Explore how fashion is communicated across media, and build core skills in writing, image-making, and brand thinking.",
      },
      {
        stage: "Year 2",
        title: "Content Creation & Storytelling",
        description:
          "Plan and produce editorial and social content, developing a distinctive voice across formats and platforms.",
      },
      {
        stage: "Year 2",
        title: "Digital Marketing & Analytics",
        description:
          "Understand audiences, campaigns, and performance — from strategy to measurement — using industry tools.",
      },
      {
        stage: "Year 3",
        title: "Major Project & Portfolio",
        description:
          "Deliver a self-directed major project and a professional portfolio that positions you for the industry.",
      },
    ],
    entryRequirements: [
      "104 UCAS points (BCC at A-Level) or a relevant Level 3 diploma",
      "A short statement or portfolio showing your interest in media",
      "GCSE English at grade 4 / C or above",
      "International applicants: IELTS 6.0 (no band below 5.5)",
    ],
    careers: [
      "Content Creator",
      "Social Media Manager",
      "Brand Marketer",
      "Fashion PR",
      "Trend Analyst",
    ],
    facts: [
      { label: "UCAS code", value: "P920" },
      { label: "Next intake", value: "September 2026" },
      { label: "Tuition (UK)", value: "£9,250 / year" },
      { label: "Campus", value: "Canary Wharf, London" },
    ],
  },
  {
    slug: "ba-hons-graphic-design",
    level: "BA (Hons)",
    name: "Graphic Design",
    school: "School of Design",
    duration: "3 Years",
    studyMode: "Full-time",
    summary:
      "Develop a versatile design practice spanning typography, branding, and digital product, grounded in critical thinking and hands-on craft.",
    description:
      "Graphic Design equips you with a broad visual toolkit — typography, layout, identity, motion, and digital product design. Through studio projects and industry collaboration you'll learn to solve problems with clarity, craft, and conceptual rigour.",
    image: "/images/courses.webp",
    highlights: [
      "Studio-based teaching across print, digital, and motion",
      "Real client briefs and design-studio collaborations",
      "Mac suites with the full industry software stack",
      "Build a portfolio that speaks to studios and agencies",
    ],
    modules: [
      {
        stage: "Year 1",
        title: "Design Foundations & Typography",
        description:
          "Ground your practice in the fundamentals — type, grid, colour, and composition — through focused studio projects.",
      },
      {
        stage: "Year 2",
        title: "Brand & Identity Systems",
        description:
          "Design flexible identity systems and learn to carry a concept consistently across every touchpoint.",
      },
      {
        stage: "Year 2",
        title: "Digital & Motion",
        description:
          "Extend your work into interface, web, and motion, designing for screens and interaction.",
      },
      {
        stage: "Year 3",
        title: "Final Major Project",
        description:
          "Define a self-directed body of work and a portfolio that expresses your point of view as a designer.",
      },
    ],
    entryRequirements: [
      "112 UCAS points (BBC at A-Level) or a relevant Level 3 diploma",
      "A portfolio showing your design thinking and craft",
      "GCSE English at grade 4 / C or above",
      "International applicants: IELTS 6.0 (no band below 5.5)",
    ],
    careers: [
      "Graphic Designer",
      "Brand Designer",
      "Art Director",
      "UI / Product Designer",
      "Motion Designer",
    ],
    facts: [
      { label: "UCAS code", value: "W210" },
      { label: "Next intake", value: "September 2026" },
      { label: "Tuition (UK)", value: "£9,250 / year" },
      { label: "Campus", value: "Borough, London" },
    ],
  },
  {
    slug: "certhe-business-and-management",
    level: "CertHE",
    name: "Business & Management",
    school: "School of Business",
    duration: "1 Year",
    studyMode: "Full-time",
    summary:
      "Build the core business, management, and enterprise skills to launch your career or progress to a full degree, taught with a creative-industries focus.",
    description:
      "This Certificate of Higher Education gives you a grounding in business fundamentals — management, marketing, finance, and enterprise — with a creative-industries lens. It is an ideal entry route into higher education or a stepping stone to a full degree.",
    image: "/images/courses.webp",
    highlights: [
      "One year to build core business and enterprise skills",
      "A creative-industries lens on management and marketing",
      "Progress to year two of a related degree on completion",
      "Small cohorts with close tutor support",
    ],
    modules: [
      {
        stage: "Term 1",
        title: "Principles of Management",
        description:
          "Understand how organisations work and the fundamentals of managing people, projects, and resources.",
      },
      {
        stage: "Term 1",
        title: "Marketing & Enterprise",
        description:
          "Explore marketing fundamentals and the enterprise mindset needed to launch and grow creative ventures.",
      },
      {
        stage: "Term 2",
        title: "Finance for Business",
        description:
          "Get to grips with the numbers — budgeting, costing, and the financial basics every business needs.",
      },
      {
        stage: "Term 2",
        title: "Applied Business Project",
        description:
          "Bring it together in an applied project that mirrors a real business challenge.",
      },
    ],
    entryRequirements: [
      "48 UCAS points (CC at A-Level) or equivalent Level 3 study",
      "A short personal statement outlining your goals",
      "GCSE English and Maths at grade 4 / C or above",
      "International applicants: IELTS 5.5 (no band below 5.0)",
    ],
    careers: [
      "Business Administrator",
      "Marketing Assistant",
      "Junior Project Manager",
      "Entrepreneur",
      "Progression to a full degree",
    ],
    facts: [
      { label: "UCAS code", value: "N120" },
      { label: "Next intake", value: "September 2026" },
      { label: "Tuition (UK)", value: "£7,500 / year" },
      { label: "Campus", value: "Canary Wharf, London" },
    ],
  },
];

/** Options for the async accessors, used to demonstrate the loading and empty
 *  states that the design deliberately does not specify (see README). */
export interface CourseQuery {
  /** "slow" adds latency so `courses/loading.tsx` is visible; "empty" returns []. */
  simulate?: "slow" | "empty";
}

/**
 * Async accessor for the full catalogue. Real products fetch courses from a CMS
 * or API; modelling this as async keeps the pages honest about loading/empty
 * states and makes swapping in a real backend a one-function change.
 */
export async function getCourses(query: CourseQuery = {}): Promise<Course[]> {
  if (query.simulate === "slow") await delay(1500);
  if (query.simulate === "empty") return [];
  return courses;
}

/** Async accessor for a single course by slug. */
export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  return courses.find((course) => course.slug === slug);
}

/** Related courses for the details page: same school first, then others, so the
 *  strip is always populated. Excludes the current course; capped by `limit`. */
export function getRelatedCourses(slug: string, limit = 3): Course[] {
  const others = courses.filter((course) => course.slug !== slug);
  const current = courses.find((course) => course.slug === slug);
  const sameSchool = others.filter((c) => c.school === current?.school);
  const rest = others.filter((c) => c.school !== current?.school);
  return [...sameSchool, ...rest].slice(0, limit);
}

/** The course that occupies the large feature slot on the courses grid. Falls
 *  back to the first course so the layout is stable even if no course is flagged. */
export function getFeaturedCourse(list: Course[] = courses): Course | undefined {
  return list.find((course) => course.featured) ?? list[0];
}
