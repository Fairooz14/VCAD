"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconButton } from "@/components/ui/IconButton";
import { useCarousel } from "@/lib/useCarousel";

/**
 * The courses-page gallery strip — a free-drag, horizontally scrollable band of
 * "life at VCAD" imagery. Drag/swipe plus arrow controls. These images are
 * presentational (studio/campus life), curated from the supplied assets;
 * captions are written in-voice (noted in the README).
 */
const gallery = [
  { src: "/images/courses.webp", caption: "Guest industry lectures" },
  { src: "/images/campus-center.webp", caption: "Canary Wharf campus" },
  { src: "/images/mission-1.webp", caption: "Studio practice" },
  { src: "/images/story-induction.webp", caption: "Induction week" },
  { src: "/images/mission-3.webp", caption: "A creative community" },
  { src: "/images/campus-left.webp", caption: "Borough campus" },
  { src: "/images/mission-2.webp", caption: "Live client briefs" },
];

export function CoursesGallery() {
  const { emblaRef, canPrev, canNext, scrollPrev, scrollNext } = useCarousel({
    dragFree: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Life at VCAD"
          title="Inside our studios & campuses"
          action={
            <>
              <IconButton direction="prev" onClick={scrollPrev} disabled={!canPrev} label="Scroll gallery left" />
              <IconButton direction="next" onClick={scrollNext} disabled={!canNext} label="Scroll gallery right" />
            </>
          }
        />
      </Container>

      <div className="mt-10 overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4 px-5 sm:px-8 lg:px-12">
          {gallery.map((item, i) => (
            <figure
              key={i}
              className="group relative aspect-[3/4] w-[260px] shrink-0 overflow-hidden rounded-card border border-line sm:w-[300px]"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="300px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-semibold text-white">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
