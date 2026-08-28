import { CourseCard } from "@/components/courses/CourseCard";
import { getFeaturedCourse } from "@/data/courses";
import type { Course } from "@/lib/types";

/**
 * 3-column grid from the Figma frame, at exact card dimensions:
 * - Left & right cards: 411 × 710
 * - Middle column: two 411 × 343 cards stacked with a 10px gap
 *   (343 + 343 + 10 = 696, matching the 710 height of the outer cards)
 */
export function CoursesGrid({ courses }: { courses: Course[] }) {
  const feature = getFeaturedCourse(courses);
  const rest = courses.filter((c) => c.slug !== feature?.slug);
  const middle1 = rest[0];
  const middle2 = rest[1];
  const right = rest[2];
  const overflow = rest.slice(3);

  if (!feature) return null;

  return (
    <div className="flex flex-col gap-10 lg:gap-8">
      {/* Main row: 3 fixed-width columns */}
      <div className="grid gap-10 lg:grid-cols-[411px_411px_411px] lg:justify-center lg:gap-8">
        {/* Left: feature card, 411 × 710 */}
        <CourseCard course={feature} eager className="lg:h-[850px] lg:w-[411px]" />

        {/* Middle: two stacked 411 × 343 cards with a 10px gap */}
        <div className="flex flex-col gap-[15px] lg:w-[411px]">
          {middle1 && <CourseCard course={middle1} className="lg:h-[343px] lg:w-[411px]" />}
          {middle2 && <CourseCard course={middle2} className="lg:h-[343px] lg:w-[411px]" />}
        </div>

        {/* Right: fourth card, 411 × 710 */}
        {right && <CourseCard course={right} className="lg:h-[850px] lg:w-[411px]" />}
      </div>

      {/* Overflow courses in a regular grid */}
      {overflow.length > 0 && (
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {overflow.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}