import { PageHero } from "@/components/layout/PageHero";
import { CoursesSkeleton } from "@/components/courses/CoursesSkeleton";

/**
 * Route-level loading UI for the courses page. Next renders this while the page's
 * async data resolves (including the deliberate "slow" simulation). The page
 * header stays stable and the grid area shows a shape-matched skeleton.
 */
export default function CoursesLoading() {
  return (
    <>
      <PageHero
        eyebrow="Undergraduate & diploma"
        title="Explore our courses"
        description="Creative, media and business courses built with industry from day one — across our three London campuses."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
        ]}
      >
        <span className="text-sm text-text/50">Loading courses…</span>
      </PageHero>
      <CoursesSkeleton />
    </>
  );
}
