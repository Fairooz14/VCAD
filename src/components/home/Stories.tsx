"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconButton } from "@/components/ui/IconButton";
import { Pill } from "@/components/ui/Pill";
import { ArrowUpRight } from "@/lib/icons";
import { useCarousel } from "@/lib/useCarousel";
import { cn } from "@/lib/utils";
import type { Story } from "@/lib/types";

/**
 * "News & stories" — a multi-item carousel of editorial cards, data-driven from
 * the stories model. Shows one card on mobile and up to three on desktop, with
 * drag/swipe, arrows and dots.
 */
export function Stories({ stories }: { stories: Story[] }) {
  const { emblaRef, canPrev, canNext, selectedIndex, scrollSnaps, scrollPrev, scrollNext, scrollTo } =
    useCarousel({ align: "start", containScroll: "trimSnaps" });

  return (
    <section id="story" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="News & stories"
          title="Life across our campuses"
          action={
            <>
              <IconButton direction="prev" onClick={scrollPrev} disabled={!canPrev} label="Previous story" />
              <IconButton direction="next" onClick={scrollNext} disabled={!canNext} label="Next story" />
            </>
          }
        />

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {stories.map((story) => (
              <div
                key={story.slug}
                className="min-w-0 shrink-0 grow-0 basis-[88%] pl-5 first:pl-0 sm:basis-[60%] lg:basis-[33.333%]"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-card">
                  <Link href={story.href} className="group relative block aspect-[16/10] overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 60vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {story.campus && (
                      <span className="absolute left-4 top-4">
                        <Pill tone="solid">{story.campus}</Pill>
                      </span>
                    )}
                  </Link>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      <Link href={story.href} className="transition hover:text-pink">
                        {story.title}
                      </Link>
                    </h3>
                    <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-text/70">
                      {story.excerpt}
                    </p>
                    <Link
                      href={story.href}
                      className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-pink transition hover:gap-2.5"
                    >
                      Read more
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </article>
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
              aria-label={`Go to story group ${i + 1}`}
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
