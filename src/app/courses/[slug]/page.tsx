import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CourseDetailTabs } from "@/components/course/CourseDetailTabs";
import { CourseSpecBanner } from "@/components/course/CourseSpecBanner";
import { ReadyToApplyCTA } from "@/components/course/ReadyToApplyCTA";
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

  const title = courseTitle(course);
  const gallery = course.gallery ?? [course.image];

  return (
    <>
      {/* First section: centered breadcrumb + title + description + image row. */}
      <section className="relative z-10 overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-magenta/15 blur-[140px]"
        />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-text/50">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/courses" className="transition hover:text-white">
                  Courses
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-text/80">{title}</li>
            </ol>
          </nav>

          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="max-w-3xl text-pretty text-base text-text/75 sm:text-lg">
            {course.description}
          </p>
        </Container>

        {/* Image row */}
        <Container className="relative mt-10 lg:mt-12">
          <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
            {gallery.slice(0, 3).map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-line"
              >
                <Image
                  src={src}
                  alt={`${title} — image ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 411px"
                  className="object-cover"
                  {...(i === 0 ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pill tabs — "/ Course Overview" reveals the Course Information grid. */}
      <CourseDetailTabs course={course} />

      {/* Course Specification download banner */}
      <CourseSpecBanner />

      {/* Ready to Apply CTA */}
      <ReadyToApplyCTA />
    </>
  );
}
