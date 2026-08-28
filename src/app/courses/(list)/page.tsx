import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { CoursesGrid } from "@/components/courses/CoursesGrid";
import { CoursesGallery } from "@/components/courses/CoursesGallery";
import { CoursesEmpty } from "@/components/courses/CoursesEmpty";
import { getCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Explore Our Courses",
  description:
    "Browse VCAD degree and diploma courses across fashion, design, media, marketing and business — each built with industry and taught in our London studios.",
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <>
      <CoursesHero />

      {courses.length === 0 ? (
        <CoursesEmpty />
      ) : (
        <section className="relative overflow-hidden py-20 lg:py-28">
          {/* Background vertical line strips */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="relative mx-auto h-full w-full max-w-[1440px]">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-line/20"
                  style={{ left: `${(i + 1) * 11.11}%` }}
                />
              ))}
            </div>
          </div>

          <Container className="relative">
            {/* Header: eyebrow + title left, paragraph right */}
            <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#E646E6]">
                  / All Courses
                </span>
                <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  Degree Courses
                </h2>
              </div>
              <p className="max-w-[520px] text-base leading-[1.7] text-text/80 lg:pt-6">
                Join Victoria College of Arts and Design and experience exceptional
                teaching, cutting-edge facilities, and industry connections that prepare
                you for a rewarding creative career.
              </p>
            </div>

            <CoursesGrid courses={courses} />
          </Container>
        </section>
      )}

      <CoursesGallery />
    </>
  );
}