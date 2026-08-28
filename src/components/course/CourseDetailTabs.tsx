"use client";

import { useId, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { CourseInfoGrid } from "@/components/course/CourseInfoGrid";
import { cn } from "@/lib/utils";
import type { Course } from "@/lib/types";

/** The three pill tabs from the Figma frame. Only "overview" has content today;
 *  the other two are placeholders until their UI is provided. */
const TABS = [
  { id: "overview", label: "Course Overview" },
  { id: "structure", label: "Course Structure & Details" },
  { id: "admissions", label: "Admissions & Key Details" },
] as const;

/**
 * Course details tab section: a rounded pill tab bar over the "first section"
 * content. Clicking "/ Course Overview" reveals the Course Information grid;
 * the remaining tabs are placeholders for now. Fully keyboard-operable
 * (WAI-ARIA tabs: arrow keys move, Home/End jump, roving tabindex).
 */
export function CourseDetailTabs({ course }: { course: Course }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function focusTab(index: number) {
    const next = (index + TABS.length) % TABS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusTab(active + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusTab(active - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(TABS.length - 1);
        break;
    }
  }

  return (
    <section className="relative overflow-x-clip pb-14 pt-6 lg:pb-20 lg:pt-8">
      {/* Full-bleed #061665 band: starts at mid-height of images, ends at mid-height of tab bar.
          The tab bar straddles the bottom edge of the band (half in blue, half in base navy). */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 h-[157px] w-full -translate-y-[100px] bg-[#061665] lg:h-[175px] lg:-translate-y-[110px]"
      />
      <Container className="relative z-10 flex flex-col gap-12 lg:gap-16">
        {/* Pill tab bar */}
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label="Course details"
            onKeyDown={onKeyDown}
            className="flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-pill border border-line/60 bg-base/50 p-2 backdrop-blur-sm"
          >
            {TABS.map((tab, i) => {
              const selected = i === active;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`${baseId}-tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={cn(
                    "rounded-pill px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink sm:px-6 sm:text-[1rem]",
                    selected
                      ? "text-magenta-lt"
                      : "text-text/90 hover:text-text",
                  )}
                >
                  <span aria-hidden className="text-magenta-lt">/ </span>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panels */}
        <div
          role="tabpanel"
          id={`${baseId}-panel-${TABS[active].id}`}
          aria-labelledby={`${baseId}-tab-${TABS[active].id}`}
          tabIndex={0}
          className="focus-visible:outline-none"
        >
          {active === 0 ? (
            <div className="flex flex-col gap-10 lg:gap-12">
              <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Course Information
                </h2>
                <p className="max-w-2xl text-pretty text-text/70 sm:text-lg">
                  Everything you need to know about this course at a glance
                </p>
              </div>
              <CourseInfoGrid course={course} />
            </div>
          ) : (
            <div className="rounded-[20px] border border-dashed border-line/70 bg-card/20 py-20 text-center">
              <p className="text-text/60">
                This section is coming soon.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
