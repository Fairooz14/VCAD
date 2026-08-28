"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/lib/icons";
import { courseTitle, cn } from "@/lib/utils";
import type { Course } from "@/lib/types";

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
export function CoursesPreview({ courses }: { courses: Course[] }) {
  const initial = courses.findIndex((c) => c.featured);
  const [openIndex, setOpenIndex] = useState(initial === -1 ? 0 : initial);
  const active = courses[openIndex] ?? courses[0];

  return (
    <section id="courses" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
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
        {/* Header row: eyebrow + title on the left, button top-right */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E646E6]">
              {/* <span className="h-px w-6 bg-pink" aria-hidden /> */}
              Our Courses
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Explore our creative courses
            </h2>
          </div>
          <Link
            href="/courses"
            className="group inline-flex h-14 shrink-0 items-center justify-between gap-4 self-start rounded-none border border-[#ebecf3] bg-[#051251] px-6 text-base font-medium text-white transition hover:border-pink hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink md:self-auto"
          >
            View Courses
            <ArrowIcon direction="right" />
          </Link>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Accordion — no rule above the first item or below the last */}
          <ul className="order-1 flex flex-col divide-y divide-line">
            {courses.map((course, i) => {
              const open = i === openIndex;
              return (
                <li key={course.slug}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      aria-controls={`course-panel-${course.slug}`}
                      className="group flex w-full items-center py-5 text-left"
                    >
                      <span className="text-2xl font-semibold leading-[1.2] text-text">
                        {courseTitle(course)}
                      </span>
                    </button>
                  </h3>

                  {/* Animated panel via grid-rows 0fr -> 1fr */}
                  <div
                    id={`course-panel-${course.slug}`}
                    role="region"
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="flex gap-3 pb-6">
                        <ArrowRight className="mt-1 size-6 shrink-0 text-pink" />
                        <p className="max-w-[555px] text-pretty text-lg font-normal leading-[1.6] text-text">
                          {course.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Preview image — reflects the open course
          <div className="relative order-2">
            <div className="sticky top-28 overflow-hidden rounded-card border border-line">
              <div className="relative aspect-[6/5] w-full">
                {active && (
                  <Image
                    key={active.slug}
                    src={active.image}
                    alt={courseTitle(active)}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div> */}

          {/* Preview image — static */}
          <div className="relative order-2">
            <div className="sticky top-28 overflow-hidden rounded-card border border-line">
              <div className="relative aspect-[6/5] w-full">
                {active && (
                  <Image
                    src="/images/courses.webp"
                    alt={courseTitle(active)}
                    fill
                    sizes="(max-width: 1024px) 90vw, 45vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>


        </div>
      </Container>
    </section>
  );
}