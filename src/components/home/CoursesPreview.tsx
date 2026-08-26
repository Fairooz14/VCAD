"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Plus, Minus, ArrowUpRight } from "@/lib/icons";
import { courseTitle, cn } from "@/lib/utils";
import type { Course } from "@/lib/types";

/**
 * "Explore our courses" — an interactive accordion driven entirely by the course
 * data. Opening an item reveals its summary and swaps the preview image, so the
 * section stays in sync automatically as courses are added or reordered.
 * Single-open accordion; the featured course starts expanded.
 */
export function CoursesPreview({ courses }: { courses: Course[] }) {
  const initial = courses.findIndex((c) => c.featured);
  const [openIndex, setOpenIndex] = useState(initial === -1 ? 0 : initial);
  const active = courses[openIndex] ?? courses[0];

  return (
    <section id="courses" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="What you'll study"
          title="Explore our courses"
          description="Degree and diploma courses built with industry, across fashion, design, media, marketing and business."
          action={
            <Button href="/courses" variant="secondary" withArrow>
              View all courses
            </Button>
          }
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Preview image — reflects the open course */}
          <div className="relative order-2 lg:order-1">
            <div className="sticky top-28 overflow-hidden rounded-card border border-line">
              <div className="relative aspect-[4/3] w-full">
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
                <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/10 to-transparent" />
                {active && (
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 p-5">
                    <Pill tone="solid">{active.school}</Pill>
                    <Pill tone="muted">{active.duration}</Pill>
                    <Pill tone="muted">{active.studyMode}</Pill>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Accordion */}
          <ul className="order-1 flex flex-col lg:order-2">
            {courses.map((course, i) => {
              const open = i === openIndex;
              return (
                <li key={course.slug} className="border-b border-line first:border-t">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      aria-controls={`course-panel-${course.slug}`}
                      className="group flex w-full items-center gap-4 py-5 text-left"
                    >
                      <span
                        className={cn(
                          "text-xs font-semibold tabular-nums transition-colors",
                          open ? "text-pink" : "text-text/40",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "flex-1 text-lg font-semibold transition-colors sm:text-xl",
                          open ? "text-white" : "text-text/80 group-hover:text-white",
                        )}
                      >
                        {courseTitle(course)}
                      </span>
                      <span
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full border transition",
                          open
                            ? "border-pink bg-pink text-white"
                            : "border-line text-text/70 group-hover:border-pink",
                        )}
                      >
                        {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
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
                      <div className="flex flex-col gap-4 pb-6 pl-8">
                        <p className="max-w-prose text-pretty text-sm leading-relaxed text-text/70 sm:text-base">
                          {course.summary}
                        </p>
                        <Link
                          href={`/courses/${course.slug}`}
                          className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-pink transition hover:gap-2.5"
                        >
                          Course details
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
