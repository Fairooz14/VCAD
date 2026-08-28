"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useCarousel } from "@/lib/useCarousel";

/**
 * "Our Gallery" section on the courses page — auto-scrolling horizontal carousel
 * of campus life imagery. Built to the Figma frame: centered header with magenta
 * eyebrow, title, description, and a continuous auto-play carousel of rounded images.
 */
const gallery = [
  { src: "/images/courses/courses_3.jpg", caption: "Student working on design project" },
  { src: "/images/courses/courses_1.jpg", caption: "Students collaborating" },
  { src: "/images/mission_middle.jpg", caption: "Studio practice" },
  { src: "/images/mission_left.jpg", caption: "Fashion design studio" },
  { src: "/images/campus-center.webp", caption: "Canary Wharf campus" },
  { src: "/images/campus-left.webp", caption: "Borough campus" },
];

export function CoursesGallery() {
  const { emblaRef, emblaApi } = useCarousel({
    loop: true,
    align: "start",
    dragFree: false,
  });

  // Auto-scroll every 3 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-deep py-20 lg:py-28">
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

      {/* Concentric rings decoration on the right */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute right-0 top-1/2">
          {[...Array(4)].map((_, i) => {
            const size = 480 + i * 200;
            return (
              <div
                key={i}
                className="absolute rounded-full border border-line/25"
                style={{ width: size, height: size, left: -size / 2, top: -size / 2 }}
              />
            );
          })}
        </div>
      </div>

      <Container className="relative">
        {/* Header: centered eyebrow + title + description */}
        <div className="mb-12 flex flex-col items-center gap-6 text-center lg:mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#E646E6]">
            / Our Gallery
          </span>
          <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Degree Courses
          </h2>
          <p className="max-w-[900px] text-base leading-[1.7] text-text/80">
            Join Victoria College of Arts and Design and experience exceptional teaching, cutting-edge facilities,
            and industry connections that prepare you for a rewarding creative career.
          </p>
        </div>
      </Container>

      {/* Auto-scrolling carousel */}
      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-6 px-5 sm:px-8 lg:px-12">
          {gallery.map((item, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] w-[340px] shrink-0 overflow-hidden rounded-[20px] border border-line lg:w-[380px]"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="380px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
