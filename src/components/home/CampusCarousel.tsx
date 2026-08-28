"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useCarousel } from "@/lib/useCarousel";
import { cn } from "@/lib/utils";
import type { Campus } from "@/lib/types";

/** Arrow glyph from the provided PNG asset, filled with the button's text
 *  colour via a CSS mask (so one asset works on any background). */
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
 * "Explore our campuses" — a centred peek carousel. The DISCOVER badge, the
 * prev/next arrows and the campus-name bar are FIXED in the middle of the
 * viewport; the images slide in and out behind them on arrow click / swipe.
 * Whichever image lands in the centre grows taller (and to full opacity) so it
 * pops forward over its dimmed, shorter neighbours — per the Figma frame.
 */
export function CampusCarousel({ campuses }: { campuses: Campus[] }) {
  const { emblaRef, selectedIndex, scrollPrev, scrollNext } = useCarousel({
    loop: true,
    align: "center",
  });

  // Embla's looping peek carousel needs enough slides to always fill both
  // sides of the centred one; with only three campuses it can rest between
  // frames. Repeat the set so a framed image is always centred while looping.
  const copies = Math.max(2, Math.ceil(8 / campuses.length));
  const slides = Array.from({ length: copies }, () => campuses).flat();

  const active = campuses[selectedIndex % campuses.length] ?? campuses[0];

  return (
    <section id="campuses" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
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
        {/* Header: eyebrow + title left, description right */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E646E6]">
              Our Campuses
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Explore our campuses
            </h2>
          </div>
          <p className="max-w-[420px] text-base leading-[1.6] text-text lg:pt-2">
            Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas.
          </p>
        </div>
      </Container>

      {/* Carousel: images slide behind the fixed, centred controls */}
      <div className="relative">
        <div className="h-[480px] overflow-hidden lg:h-[560px]" ref={emblaRef}>
          <div className="flex h-full touch-pan-y items-center">
            {slides.map((campus, i) => {
              const isCenter = i === selectedIndex;
              return (
                <div
                  key={`${campus.slug}-${i}`}
                  className="min-w-0 shrink-0 grow-0 basis-[80%] px-3 sm:basis-[65%] lg:basis-[55%] xl:basis-[50%]"
                >
                  {/* The centred slide grows taller + full opacity → pops forward */}
                  <div
                    className={cn(
                      "relative w-full overflow-hidden transition-all duration-500 ease-out",
                      isCenter
                        ? "h-[480px] opacity-100 shadow-2xl lg:h-[560px]"
                        : "h-[400px] opacity-40 lg:h-[470px]",
                    )}
                  >
                    <Image
                      src={campus.image}
                      alt={campus.name}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 65vw, 50vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fixed overlay, sized + centred to match the middle slide */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="h-[480px] w-[80%] px-3 sm:w-[65%] lg:h-[560px] lg:w-[55%] xl:w-[50%]">
            <div className="relative h-full w-full">
              {/* Prev arrow — blue, turns pink on hover */}
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous campus"
                className="pointer-events-auto absolute left-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#051251] text-white transition-colors hover:bg-[#912491] lg:left-6 lg:size-14"
              >
                <ArrowIcon direction="left" />
              </button>

              {/* Next arrow — blue, turns pink on hover */}
              <button
                type="button"
                onClick={scrollNext}
                aria-label="Next campus"
                className="pointer-events-auto absolute right-4 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#051251] text-white transition-colors hover:bg-[#912491] lg:right-6 lg:size-14"
              >
                <ArrowIcon direction="right" />
              </button>

              {/* Frosted DISCOVER badge — dead centre */}
              <button
                type="button"
                className="pointer-events-auto absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition hover:bg-white/20 lg:size-28"
              >
                Discover
              </button>

              {/* Campus name bar — pinned to the bottom of the centre slide */}
              <div className="absolute inset-x-0 bottom-0 bg-[#384584]/80 px-8 py-5 text-center backdrop-blur-sm">
                <span className="font-['Inter'] text-[24px] font-bold uppercase leading-[100%] tracking-[0%] text-[#EBECF3]">
                  {active.name}
                </span>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
