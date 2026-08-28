// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Container } from "@/components/ui/Container";
// import { SectionHeading } from "@/components/ui/SectionHeading";
// import { IconButton } from "@/components/ui/IconButton";
// import { Pill } from "@/components/ui/Pill";
// import { ArrowUpRight } from "@/lib/icons";
// import { useCarousel } from "@/lib/useCarousel";
// import { cn } from "@/lib/utils";
// import type { Story } from "@/lib/types";

// /**
//  * "News & stories" — a multi-item carousel of editorial cards, data-driven from
//  * the stories model. Shows one card on mobile and up to three on desktop, with
//  * drag/swipe, arrows and dots.
//  */
// export function Stories({ stories }: { stories: Story[] }) {
//   const { emblaRef, canPrev, canNext, selectedIndex, scrollSnaps, scrollPrev, scrollNext, scrollTo } =
//     useCarousel({ align: "start", containScroll: "trimSnaps" });

//   return (
//     <section id="story" className="scroll-mt-24 py-20 lg:py-28">
//       <Container>
//         <SectionHeading
//           eyebrow="News & stories"
//           title="Life across our campuses"
//           action={
//             <>
//               <IconButton direction="prev" onClick={scrollPrev} disabled={!canPrev} label="Previous story" />
//               <IconButton direction="next" onClick={scrollNext} disabled={!canNext} label="Next story" />
//             </>
//           }
//         />

//         <div className="mt-12 overflow-hidden" ref={emblaRef}>
//           <div className="flex touch-pan-y">
//             {stories.map((story) => (
//               <div
//                 key={story.slug}
//                 className="min-w-0 shrink-0 grow-0 basis-[88%] pl-5 first:pl-0 sm:basis-[60%] lg:basis-[33.333%]"
//               >
//                 <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-card">
//                   <Link href={story.href} className="group relative block aspect-[16/10] overflow-hidden">
//                     <Image
//                       src={story.image}
//                       alt={story.title}
//                       fill
//                       sizes="(max-width: 640px) 88vw, (max-width: 1024px) 60vw, 33vw"
//                       className="object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     {story.campus && (
//                       <span className="absolute left-4 top-4">
//                         <Pill tone="solid">{story.campus}</Pill>
//                       </span>
//                     )}
//                   </Link>
//                   <div className="flex flex-1 flex-col gap-3 p-6">
//                     <h3 className="text-lg font-semibold text-white">
//                       <Link href={story.href} className="transition hover:text-pink">
//                         {story.title}
//                       </Link>
//                     </h3>
//                     <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-text/70">
//                       {story.excerpt}
//                     </p>
//                     <Link
//                       href={story.href}
//                       className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-pink transition hover:gap-2.5"
//                     >
//                       Read more
//                       <ArrowUpRight className="size-4" />
//                     </Link>
//                   </div>
//                 </article>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-8 flex justify-center gap-2">
//           {scrollSnaps.map((_, i) => (
//             <button
//               key={i}
//               type="button"
//               onClick={() => scrollTo(i)}
//               aria-label={`Go to story group ${i + 1}`}
//               aria-current={i === selectedIndex}
//               className={cn(
//                 "h-2 rounded-full transition-all",
//                 i === selectedIndex ? "w-8 bg-pink" : "w-2 bg-line hover:bg-text/40",
//               )}
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ArrowUpRight } from "@/lib/icons";
import { useCarousel } from "@/lib/useCarousel";
import type { Story } from "@/lib/types";

/** Arrow glyph from the provided PNG asset, filled with the button's text
 *  colour via a CSS mask (one asset works on any background). Matches the
 *  prev/next control pair used in the Testimonials section. */
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
 * "Our Stories" — built to the Figma frame: magenta eyebrow, bold heading,
 * and a navy "prev" / magenta "next" pair of round arrows top-right, mirroring
 * the Testimonials section. Each slide pairs a portrait with a title,
 * excerpt, and a "Read Article" pill button. Loops with arrow + drag controls.
 */
export function Stories({ stories }: { stories: Story[] }) {
  const { emblaRef, scrollPrev, scrollNext } = useCarousel({ loop: true, align: "start" });

  return (
    <section id="story" className="relative scroll-mt-24 overflow-hidden bg-deep py-20 lg:py-28">
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
              Stories
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Our Stories
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous story"
              className="flex size-14 items-center justify-center rounded-full bg-[#161f6b] text-white transition hover:bg-[#912491] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink lg:size-16"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next story"
              className="flex size-14 items-center justify-center rounded-full bg-[#161f6b] text-white transition hover:bg-[#912491] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink lg:size-16"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        {/* Carousel — one story per slide */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {stories.map((story) => (
              <div key={story.slug} className="min-w-0 shrink-0 grow-0 basis-full">
                <article className="grid items-stretch gap-6 lg:min-h-[460px] lg:grid-cols-2 lg:gap-16">
                  {/* Portrait */}
                 <Link
                    href={story.href}
                    className="group relative block aspect-[16/11] overflow-hidden border-2 border-white lg:aspect-auto"
                  >
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Content */}
                  <div className="flex flex-col justify-between py-2">
                    <div className="flex flex-col gap-6">
                      <h3 className="text-balance text-5xl font-bold leading-tight text-[#EBECF3] lg:text-[2.25rem]">
                        <Link href={story.href} >
                          {story.title}
                        </Link>
                      </h3>
                      <p className="max-w-[560px] text-pretty text-lg leading-[1.6] text-text/80">
                        {story.excerpt}
                      </p>
                    </div>

                    <Link
                      href={story.href}
                      className="group mt-8 inline-flex h-14 w-50 max-w-full items-center justify-between gap-[5px] self-start  border border-[#ebecf3] bg-card px-4 text-base font-medium text-white transition hover:border-pink hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink sm:mt-9"
                    >
                      Read Article
                      <ArrowIcon direction="right"/>
                    </Link>


                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
