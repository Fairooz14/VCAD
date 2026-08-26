import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Shown when a /courses/[slug] doesn't match any course (via notFound()). */
export default function CourseNotFound() {
  return (
    <>
      <PageHero
        eyebrow="Course not found"
        title="We couldn't find that course"
        description="The course you're looking for may have been renamed or is no longer running. Browse the full list to find your fit."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
        ]}
      />
      <Container className="pb-24">
        <div className="flex flex-wrap gap-4">
          <Button href="/courses" withArrow>
            Explore all courses
          </Button>
          <Button href="/" variant="outline">
            Back to home
          </Button>
        </div>
      </Container>
    </>
  );
}
