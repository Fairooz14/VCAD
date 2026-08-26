import { Button } from "@/components/ui/Button";
import { contact } from "@/data/navigation";
import type { Course } from "@/lib/types";

/**
 * Course details "key facts" panel with the primary calls to action. Sticky on
 * large screens so it stays alongside the tabbed content. Facts come from the
 * course record; if a course has none, only the essentials (duration/study mode)
 * and the CTAs are shown.
 */
export function CourseSidebar({ course }: { course: Course }) {
  const facts = [
    { label: "Qualification", value: course.level },
    { label: "Duration", value: course.duration },
    { label: "Study mode", value: course.studyMode },
    { label: "School", value: course.school },
    ...(course.facts ?? []),
  ];

  const applySubject = encodeURIComponent(`Application enquiry: ${course.level} ${course.name}`);

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="flex flex-col gap-6 rounded-card border border-line bg-card/60 p-6 lg:p-7">
        <div>
          <h2 className="text-lg font-bold text-white">Key facts</h2>
          <dl className="mt-4 flex flex-col divide-y divide-line/70">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-text/60">{fact.label}</dt>
                <dd className="text-right text-sm font-semibold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-3">
          <Button href={`mailto:${contact.email}?subject=${applySubject}`} withArrow className="w-full">
            Apply now
          </Button>
          <Button href="#contact" variant="outline" className="w-full">
            Book an open day
          </Button>
        </div>

        <p className="text-xs leading-relaxed text-text/50">
          Questions about this course? Call us on{" "}
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-sky hover:text-white">
            {contact.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${contact.email}`} className="text-sky hover:text-white">
            {contact.email}
          </a>
          .
        </p>
      </div>
    </aside>
  );
}
