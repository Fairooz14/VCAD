import { Hero } from "@/components/home/Hero";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { Mission } from "@/components/home/Mission";
import { CampusCarousel } from "@/components/home/CampusCarousel";
import { Testimonials } from "@/components/home/Testimonials";
import { Partners } from "@/components/home/Partners";
import { Stories } from "@/components/home/Stories";
import { getCourses } from "@/data/courses";
import { campuses } from "@/data/campuses";
import { testimonials } from "@/data/testimonials";
import { stories } from "@/data/stories";

/**
 * Homepage (design frame WEB-234). A server component that reads from the shared
 * data models and passes records down to each section, so every course/campus/
 * story shown here comes from the same source of truth as the other pages.
 */
export default async function HomePage() {
  const courses = await getCourses();

  return (
    <>
      <Hero />
      <CoursesPreview courses={courses} />
      <Mission />
      <CampusCarousel campuses={campuses} />
      <Testimonials testimonials={testimonials} />
      <Partners />
      <Stories stories={stories} />

    </>
  );
}
