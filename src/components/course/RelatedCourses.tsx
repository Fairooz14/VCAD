import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CourseCard } from "@/components/courses/CourseCard";
import { getRelatedCourses } from "@/data/courses";

/**
 * "Related courses" strip on the details page. Pulls from the same course data
 * (same-school first), reusing the standard CourseCard so it stays consistent
 * with the courses grid. Renders nothing if there are no other courses.
 */
export function RelatedCourses({ slug }: { slug: string }) {
  const related = getRelatedCourses(slug, 3);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-line/60 py-16 lg:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Keep exploring" title="Related courses" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((course) => (
            <CourseCard key={course.slug} course={course} variant="default" />
          ))}
        </div>
      </Container>
    </section>
  );
}
