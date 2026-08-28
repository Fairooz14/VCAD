import Image from "next/image";
import type { Course } from "@/lib/types";

/** Pull a labelled fact off the course record (used as a fallback source). */
function fact(course: Course, label: string): string | undefined {
  return course.facts?.find((f) => f.label === label)?.value;
}

const CALENDAR = "/images/course_details/calendar.png";
const CLOCK = "/images/course_details/clock.png";

/**
 * "Course Information" — the six at-a-glance info cards shown under the
 * "/ Course Overview" tab. Centered layout per the Figma frame: PNG glyph on top
 * (calendar for the start date, clock for the rest), bold label, muted value.
 * Values are read from the course record (with fallbacks), so each course renders
 * its own figures with no per-page markup.
 */
export function CourseInfoGrid({ course }: { course: Course }) {
  const cards: { icon: string; label: string; value: string }[] = [
    {
      icon: CALENDAR,
      label: "Start Date",
      value: course.startDate ?? fact(course, "Next intake") ?? "—",
    },
    { icon: CLOCK, label: "Duration", value: course.duration },
    { icon: CLOCK, label: "Study Mode", value: course.studyMode },
    {
      icon: CLOCK,
      label: "Locations",
      value: course.location ?? fact(course, "Campus") ?? "—",
    },
    {
      icon: CLOCK,
      label: "Tuition Fee (UK)",
      value: course.tuitionUK ?? fact(course, "Tuition (UK)") ?? "—",
    },
    {
      icon: CLOCK,
      label: "Awarding Body",
      value: course.awardingBody ?? "VCAD",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {cards.map(({ icon, label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-5 rounded-[20px] border border-line/50 bg-card/30 px-6 py-9 text-center lg:py-10"
        >
          <Image
            src={icon}
            alt=""
            width={40}
            height={40}
            className="size-9 object-contain"
          />
          <div className="flex flex-col gap-1.5">
            <p className="text-[15px] font-bold text-white">{label}</p>
            <p className="text-[13px] text-text/55">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
