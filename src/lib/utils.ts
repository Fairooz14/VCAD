import type { Course } from "@/lib/types";

/** Tiny classnames joiner — avoids a clsx/tailwind-merge dependency for our needs. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Display title for a course, e.g. "BA (Hons) Fashion Design". Derived so the
 *  title can never drift out of sync with `level`/`name`. */
export function courseTitle(course: Pick<Course, "level" | "name">): string {
  return `${course.level} ${course.name}`;
}

/** Resolves after `ms`. Used to model a real async boundary for the courses page
 *  so the `loading.tsx` skeleton is exercised (see src/data/courses.ts). */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
