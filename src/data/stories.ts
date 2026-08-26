import type { Story } from "@/lib/types";

/**
 * Editorial stories for the homepage carousel. The design supplies one story
 * ("Induction in VCAD Canary Wharf campus") and one image asset; additional
 * entries are seeded in-voice and reuse the supplied image so the carousel is
 * meaningful to demonstrate (placeholder imagery noted in the README).
 */
export const stories: Story[] = [
  {
    slug: "induction-canary-wharf",
    title: "Induction in VCAD Canary Wharf campus",
    excerpt:
      "If you join Victoria College of Arts and Design, you can expect the highest calibre of teaching, cutting-edge facilities, and exceptional industry connections, which will help to prepare you for a rewarding career in the creative and tech industries.",
    image: "/images/story-induction.webp",
    href: "#story-induction",
    campus: "Canary Wharf",
  },
  {
    slug: "inside-the-borough-studios",
    title: "Inside the Borough campus studios",
    excerpt:
      "A look behind the scenes at our Borough studios, where fashion, graphic design, and media students share space, kit, and ideas across disciplines throughout the year.",
    image: "/images/story-induction.webp",
    href: "#story-borough",
    campus: "Borough",
  },
  {
    slug: "industry-week-london-studios",
    title: "Industry week: students meet London's studios",
    excerpt:
      "Each year our students spend a week embedded with London design and media studios, working on live briefs and building the industry connections that define a VCAD education.",
    image: "/images/story-induction.webp",
    href: "#story-industry-week",
    campus: "Whitechapel",
  },
];
