import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Pill } from "@/components/ui/Pill";
import { CourseContent } from "@/components/course/CourseContent";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { RelatedCourses } from "@/components/course/RelatedCourses";
import { CTABand } from "@/components/home/CTABand";
import { courses, getCourseBySlug } from "@/data/courses";
import { courseTitle } from "@/lib/utils";

type Params = { slug: string };

// Pre-render a static page per course at build time.
export function generateStaticParams(): Params[] {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return { title: "Course not found" };
  const title = courseTitle(course);
  return {
    title,
    description: course.summary,
    openGraph: { title: `${title} — VCAD`, description: course.summary, images: [course.image] },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) notFound();

  return (
    <>
      <PageHero
        eyebrow={course.level}
        title={course.name}
        description={course.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: courseTitle(course), href: `/courses/${course.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          <Pill tone="outline">{course.school}</Pill>
          <Pill tone="outline">{course.duration}</Pill>
          <Pill tone="outline">{course.studyMode}</Pill>
        </div>
      </PageHero>

      {/* Course banner image (the page's LCP → eager). */}
      <Container>
        <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-line sm:aspect-[21/9]">
          <Image
            src={course.image}
            alt={courseTitle(course)}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base/40 to-transparent" />
        </div>
      </Container>

      {/* Tabbed content + key-facts sidebar. */}
      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
          <CourseContent course={course} />
          <CourseSidebar course={course} />
        </div>
      </Container>

      <RelatedCourses slug={course.slug} />
      <CTABand />
    </>
  );
}
