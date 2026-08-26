"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconButton } from "@/components/ui/IconButton";
import { Quote } from "@/lib/icons";
import { useCarousel } from "@/lib/useCarousel";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/types";

/**
 * Student testimonials carousel. One testimonial per slide (portrait + quote),
 * looping, with drag/swipe plus arrow and dot controls.
 */
export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const { emblaRef, selectedIndex, scrollSnaps, scrollPrev, scrollNext, scrollTo } =
    useCarousel({ loop: true, align: "start" });

  return (
    <section className="bg-deep py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Student voices"
          title="Life at VCAD, in their words"
          action={
            <>
              <IconButton direction="prev" onClick={scrollPrev} label="Previous testimonial" />
              <IconButton direction="next" onClick={scrollNext} label="Next testimonial" />
            </>
          }
        />

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {testimonials.map((t) => (
              <div key={t.author} className="min-w-0 shrink-0 grow-0 basis-full">
                <figure className="grid items-stretch gap-0 overflow-hidden rounded-card border border-line bg-card sm:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
                  <div className="relative aspect-[4/3] sm:aspect-auto">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      sizes="(max-width: 640px) 90vw, 300px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
                    <Quote className="size-10 text-pink/70" />
                    <blockquote className="text-pretty text-lg font-medium leading-relaxed text-text/90 lg:text-xl">
                      {t.quote}
                    </blockquote>
                    <figcaption className="flex flex-col">
                      <span className="text-base font-semibold text-white">{t.author}</span>
                      <span className="text-sm text-text/60">{t.role}</span>
                    </figcaption>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === selectedIndex}
              className={cn(
                "h-2 rounded-full transition-all",
                i === selectedIndex ? "w-8 bg-pink" : "w-2 bg-line hover:bg-text/40",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
