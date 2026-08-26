"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconButton } from "@/components/ui/IconButton";
import { MapPin, ArrowUpRight } from "@/lib/icons";
import { useCarousel } from "@/lib/useCarousel";
import { cn } from "@/lib/utils";
import type { Campus } from "@/lib/types";

/**
 * "Our campuses" — a looping, center-aligned carousel. Slides are narrower than
 * the viewport so neighbours peek in at the edges; the selected slide is
 * emphasised. Drag/swipe comes from Embla; arrows (in the heading) and dots
 * (below) provide explicit controls.
 */
export function CampusCarousel({ campuses }: { campuses: Campus[] }) {
  const { emblaRef, canPrev, canNext, selectedIndex, scrollSnaps, scrollPrev, scrollNext, scrollTo } =
    useCarousel({ loop: true, align: "center" });

  return (
    <section id="campuses" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Where you'll study"
          title="Our London campuses"
          action={
            <>
              <IconButton direction="prev" onClick={scrollPrev} disabled={!canPrev} label="Previous campus" />
              <IconButton direction="next" onClick={scrollNext} disabled={!canNext} label="Next campus" />
            </>
          }
        />
      </Container>

      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {campuses.map((campus, i) => (
            <div
              key={campus.slug}
              className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 first:pl-5 sm:basis-[70%] lg:basis-[58%] lg:pl-6"
            >
              <article
                className={cn(
                  "group relative aspect-[16/10] overflow-hidden rounded-card border border-line transition-opacity duration-300",
                  i === selectedIndex ? "opacity-100" : "opacity-55",
                )}
              >
                <Image
                  src={campus.image}
                  alt={campus.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 58vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-base/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 lg:p-8">
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-sky">
                      <MapPin className="size-4" />
                      {campus.location}
                    </span>
                    <h3 className="text-xl font-semibold text-white lg:text-2xl">
                      {campus.name}
                    </h3>
                  </div>
                  <Link
                    href={campus.href}
                    aria-label={`Visit ${campus.name}`}
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-pink"
                  >
                    <ArrowUpRight className="size-5" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to campus ${i + 1}`}
            aria-current={i === selectedIndex}
            className={cn(
              "h-2 rounded-full transition-all",
              i === selectedIndex ? "w-8 bg-pink" : "w-2 bg-line hover:bg-text/40",
            )}
          />
        ))}
      </div>
    </section>
  );
}
