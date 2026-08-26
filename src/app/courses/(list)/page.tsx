import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { CoursesGrid } from "@/components/courses/CoursesGrid";
import { CoursesGallery } from "@/components/courses/CoursesGallery";
import { CoursesEmpty } from "@/components/courses/CoursesEmpty";
import { CTABand } from "@/components/home/CTABand";
import { getCourses } from "@/data/courses";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Explore Our Courses",
  description:
    "Browse VCAD degree and diploma courses across fashion, design, media, marketing and business — each built with industry and taught in our London studios.",
};

// Demo toggles for the two deliberately-undesigned states. Exposed via the URL
// (?state=loading | ?state=empty) so the states can be reviewed directly; see README.
const stateTabs = [
  { label: "All courses", value: undefined, href: "/courses" },
  { label: "Loading", value: "loading", href: "/courses?state=loading" },
  { label: "Empty", value: "empty", href: "/courses?state=empty" },
];

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ state?: string }>;
}) {
  const { state } = await searchParams;
  const simulate = state === "empty" ? "empty" : state === "loading" ? "slow" : undefined;
  // A "slow" simulate delays the fetch, so the route-level loading.tsx is shown.
  const courses = await getCourses({ simulate });

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
        <div className="flex flex-wrap items-center gap-3">
          {stateTabs.map((tab) => {
            const active = tab.value === state || (!tab.value && !state);
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className={cn(
                  "rounded-pill border px-4 py-2 text-sm font-medium transition",
                  active
                    ? "border-pink bg-pink/15 text-white"
                    : "border-line text-text/70 hover:border-pink hover:text-white",
                )}
              >
                {tab.label}
              </Link>
            );
          })}
          {courses.length > 0 && (
            <span className="ml-auto text-sm text-text/50">
              {courses.length} {courses.length === 1 ? "course" : "courses"}
            </span>
          )}
        </div>
      </PageHero>

      {courses.length === 0 ? (
        <CoursesEmpty />
      ) : (
        <Container className="pb-8">
          <CoursesGrid courses={courses} />
        </Container>
      )}

      <CoursesGallery />
      <CTABand />
    </>
  );
}
