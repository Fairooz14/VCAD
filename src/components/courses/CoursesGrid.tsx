import { CourseCard } from "@/components/courses/CourseCard";
import { getFeaturedCourse } from "@/data/courses";
import type { Course } from "@/lib/types";

/**
 * The asymmetric "Explore Our Courses" grid, composed from data:
 *   feature (large)  +  two stacked cards  +  one expanded card (with badges)
 *   +  any remaining courses flow into a regular responsive grid below.
 *
 * Slots are filled by slicing the course array, so the layout keeps working as
 * courses are added, removed, or reordered:
 *   - 1 course   → feature spans full width
 *   - 2–3        → feature + stacked, expanded/overflow omitted gracefully
 *   - 4          → the exact design layout
 *   - 5+         → extras appear as standard cards underneath
 */
export function CoursesGrid({ courses }: { courses: Course[] }) {
  const feature = getFeaturedCourse(courses);
  const rest = courses.filter((c) => c.slug !== feature?.slug);
  const stacked = rest.slice(0, 2);
  const expanded = rest[2];
  const overflow = rest.slice(3);

  if (!feature) return null;

  return (
    <div className="flex flex-col gap-6">
      {/* Feature + stacked column */}
      <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
        <CourseCard
          course={feature}
          variant="feature"
          eager
          className={stacked.length > 0 ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-3"}
        />
        {stacked.map((course) => (
          <CourseCard key={course.slug} course={course} variant="stacked" />
        ))}
      </div>

      {/* Expanded card with school + duration badges */}
      {expanded && <CourseCard course={expanded} variant="expanded" />}

      {/* Overflow */}
      {overflow.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {overflow.map((course) => (
            <CourseCard key={course.slug} course={course} variant="default" />
          ))}
        </div>
      )}
    </div>
  );
}
