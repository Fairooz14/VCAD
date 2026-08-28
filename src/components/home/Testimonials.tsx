"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Quote } from "@/lib/icons";
import { useCarousel } from "@/lib/useCarousel";
import type { Testimonial } from "@/lib/types";

/** Arrow glyph from the provided PNG asset, filled with the button's text
 *  colour via a CSS mask (one asset works on any background). */
function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: "22px",
        height: "22px",
        backgroundColor: "currentColor",
        maskImage: `url(/images/arrow_${direction}.png)`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: `url(/images/arrow_${direction}.png)`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

/**
 * Student testimonials — built to the Figma frame: magenta eyebrow, bold
 * heading, and a navy "prev" / magenta "next" pair of round arrows top-right.
 * Each slide pairs a portrait with a bordered quote card (faded quote mark,
 * quote, then author pinned to the bottom). Loops with arrow + drag controls.
 */
export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const { emblaRef, scrollPrev, scrollNext } = useCarousel({ loop: true, align: "start" });

  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-deep py-20 lg:py-28">
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
        {/* Header: eyebrow + title left, arrow controls top-right */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#E646E6]">
              Students Testimonial
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Our students sharing their thoughts
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
             className="flex size-14 items-center justify-center rounded-full bg-[#161f6b] text-white transition hover:bg-[#912491] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink lg:size-16"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="flex size-14 items-center justify-center rounded-full bg-[#161f6b] text-white transition hover:bg-[#912491] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink lg:size-16"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        {/* Carousel — one testimonial per slide */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {testimonials.map((t) => (
              <div key={t.author} className="min-w-0 shrink-0 grow-0 basis-full">
                <figure className="grid items-stretch gap-6 lg:min-h-[460px] lg:grid-cols-[414px_minmax(0,1fr)] lg:gap-8">
                  {/* Portrait */}
                  <div className="relative aspect-[16/11] lg:aspect-auto">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      sizes="(max-width: 640px) 90vw, 414px"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Quote card */}
                  <div className="flex flex-col justify-between border #D9D9D9 p-8 sm:p-10 lg:p-14">
                    <div className="flex flex-col gap-6">
                      <Quote className="size-12 text-line lg:size-14" />
                      <blockquote className="max-w-[760px] text-pretty text-lg font-normal leading-[1.6] text-text">
                        {t.quote}
                      </blockquote>
                    </div>
                    <figcaption className="flex flex-col gap-1 pt-10">
                      <span className="text-lg font-semibold text-white">{t.author}</span>
                      <span className="text-sm text-text/60">{t.role}</span>
                    </figcaption>
                  </div>


                </figure>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
