import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

/** Concentric ring background decoration, matching the Footer's "spiral" treatment. */
function SpiralDecoration() {
    const rings = [120, 200, 280, 360, 440, 520];
    return (
        <svg
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-40 h-[640px] w-[640px] text-line/20"
            viewBox="0 0 640 640"
            fill="none"
        >
            {rings.map((r) => (
                <circle key={r} cx="420" cy="220" r={r} stroke="currentColor" strokeWidth="1" />
            ))}
        </svg>
    );
}

/**
 * Courses-page banner. Built to the exact Figma frame (1440×452 hug, 140px
 * top/bottom padding on the text column, 80px left/right — which is just
 * `max-w-[1280px]` centred in a 1440 frame, so the text column deliberately
 * doesn't use the shared `Container` component's own side padding, to avoid
 * double-padding it inward). The two photos are absolutely positioned at
 * their measured frame coordinates and intentionally overflow the text
 * column's padding — pinned to the section, not the content. Desktop-only:
 * the frame has no responsive spec, so photos hide below `lg`.
 */
export function CoursesHero({ children }: { children?: ReactNode }) {
    return (
        <section className="relative overflow-hidden bg-[#030A2E] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-[140px] lg:pb-[140px]">
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

            <SpiralDecoration />

            {/* Decorative flanking photos — positioned to the frame's exact measurements */}
            <div className="pointer-events-none absolute left-[150px] top-[70px] hidden h-[195px] w-[207px] overflow-hidden lg:block">
                <Image src="/images/courses/courses_1.jpg" alt="" fill sizes="207px" className="object-cover" />
            </div>
            <div className="pointer-events-none absolute right-[80px] top-[170px] hidden h-[194px] w-[192px] overflow-hidden lg:block">
                <Image src="/images/courses/courses_3.jpg" alt="" fill sizes="192px" className="object-cover" />
            </div>

            {/* Text column — mx-auto max-w-[1280px] reproduces the 80px gutters at
          the 1440px frame width without adding Container's own side padding
          on top of it (which would push the text in further than the spec). */}
            <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-5 text-center sm:px-8 lg:px-0">
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-sm text-text/80">
                        <li>
                            <Link href="/" className="underline underline-offset-2 transition hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden>/</li>
                        <li>Courses</li>
                    </ol>
                </nav>

                <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
                    Explore Our Courses
                </h1>

                <p className="mx-auto max-w-[834px] text-center font-['Inter'] text-[18px] font-medium leading-[26px] tracking-[0%] text-[#EBF7FF]">
                    Join Victoria College of Arts and Design and experience exceptional teaching,
                    cutting-edge facilities, and industry connections that prepare you for a rewarding
                    creative career.
                </p>

                {children}
            </div>
        </section>
    );
}