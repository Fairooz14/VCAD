"use client";

import { Tabs, type TabItem } from "@/components/ui/Tabs";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Check } from "@/lib/icons";
import type { Course } from "@/lib/types";

/** Bullet list with a pink check glyph, reused across the content tabs. */
function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-pink/15 text-pink">
            <Check className="size-3.5" strokeWidth={2.5} />
          </span>
          <span className="text-pretty text-sm leading-relaxed text-text/80 sm:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * The interactive body of the course details page: a tabbed view over the
 * course's Overview / What you'll study / Entry / Careers content, with the
 * modules rendered as an accordion. All content comes from the course record,
 * and tabs whose data is missing are simply omitted — so a sparse course still
 * renders cleanly.
 */
export function CourseContent({ course }: { course: Course }) {
  const tabs: TabItem[] = [];

  tabs.push({
    id: "overview",
    label: "Overview",
    content: (
      <div className="flex flex-col gap-8">
        <p className="max-w-3xl text-pretty text-base leading-relaxed text-text/80 sm:text-lg">
          {course.description}
        </p>
        {course.highlights && course.highlights.length > 0 && (
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-white">Course highlights</h2>
            <CheckList items={course.highlights} />
          </div>
        )}
      </div>
    ),
  });

  if (course.modules && course.modules.length > 0) {
    const moduleItems: AccordionItem[] = course.modules.map((m, i) => ({
      id: String(i),
      title: m.title,
      meta: m.stage,
      content: m.description,
    }));
    tabs.push({
      id: "study",
      label: "What you'll study",
      content: (
        <div className="flex flex-col gap-5">
          <p className="max-w-3xl text-pretty text-sm text-text/70 sm:text-base">
            The course builds year on year. Expand each unit to see what you&rsquo;ll
            explore.
          </p>
          <Accordion items={moduleItems} defaultOpen={[0]} />
        </div>
      ),
    });
  }

  if (course.entryRequirements && course.entryRequirements.length > 0) {
    tabs.push({
      id: "entry",
      label: "Entry requirements",
      content: (
        <div className="flex flex-col gap-4">
          <p className="max-w-3xl text-pretty text-sm text-text/70 sm:text-base">
            We consider every application on its merits. Typical requirements are:
          </p>
          <CheckList items={course.entryRequirements} />
        </div>
      ),
    });
  }

  if (course.careers && course.careers.length > 0) {
    tabs.push({
      id: "careers",
      label: "Careers",
      content: (
        <div className="flex flex-col gap-5">
          <p className="max-w-3xl text-pretty text-sm text-text/70 sm:text-base">
            Graduates go on to a range of creative and commercial roles, including:
          </p>
          <ul className="flex flex-wrap gap-3">
            {course.careers.map((role) => (
              <li
                key={role}
                className="rounded-pill border border-line bg-white/5 px-4 py-2 text-sm font-medium text-text/85"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      ),
    });
  }

  return <Tabs tabs={tabs} />;
}
