import Image from "next/image";
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { courseTitle } from "@/lib/utils";
import type { Course } from "@/lib/types";

function ArrowIcon() {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: "22px",
        height: "22px",
        backgroundColor: "currentColor",
        maskImage: "url(/images/arrow_right.png)",
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: "url(/images/arrow_right.png)",
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

/**
 * Course card matching Figma exactly:
 *
 * DEFAULT: Clean image, faded gradient (bottom ~45%–82%) + title + description, navy arrow
 * HOVER: Taller gradient overlay blending further up the image, + pills + title
 *        + description + School section, pink arrow
 *
 * Sizing (per Figma):
 *  - Left/right (featured) cards: 411 × 710, border-radius 20, border 4px
 *  - Middle stacked cards: 411 × 343 each, 10px gap between them
 *  Width/height are set by the parent grid via `className`; this component
 *  fills whatever box it's given (`h-full w-full`).
 */
export function CourseCard({
  course,
  className,
  eager = false,
}: {
  course: Course;
  className?: string;
  eager?: boolean;
}) {
  const title = courseTitle(course);
  const href = `/courses/${course.slug}`;
  const eagerProps = eager
    ? ({ loading: "eager", fetchPriority: "high" } as const)
    : {};

  return (
    <Link
      href={href}
      className={`group relative flex min-h-[420px] w-full flex-col ${className || ""}`}
    >
      <div className="relative flex h-full w-full flex-1 flex-col overflow-hidden rounded-[20px] ">
        {/* Background image */}
        <Image
          src={course.image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 411px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          {...eagerProps}
        />

        {/* DEFAULT: faded gradient overlay + title + description */}
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 opacity-100 transition-opacity duration-300 group-hover:opacity-0 lg:p-7"
         style={{
            background:
              "linear-gradient(180deg, rgba(3, 14, 71, 0) 0%, rgba(2, 11, 57, 0.55) 32%, rgba(2, 11, 57, 0.85) 65%, rgba(2, 11, 57, 0.9) 100%)",
          }}
        >
          <h3 className="text-lg font-bold text-white lg:text-xl">{title}</h3>
          <p className="text-pretty text-sm leading-relaxed text-text/80">
            {course.description}
          </p>
        </div>

        {/* HOVER: taller, smoother gradient overlay + pills + title + description + School */}
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col gap-3 rounded-[20px] bg-[#030A2E]/60 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:p-7"
        >
          <div className="flex flex-wrap gap-2">
            <Pill tone="outline">{course.school.toUpperCase()}</Pill>
            <Pill tone="outline">{course.duration}</Pill>
          </div>

          <h3 className="text-lg font-bold text-white lg:text-xl">{title}</h3>

          <p className="text-pretty text-sm leading-relaxed text-text/80">
            {course.description}
          </p>

          <div className="mt-1">
            <p className="text-sm font-semibold text-white">School:</p>
            <p className="text-sm text-text/70">{course.school}</p>
          </div>
        </div>
      </div>

      {/* Circular arrow button — navy by default, pink on hover */}
      <span
        aria-hidden
        className="absolute -bottom-2 -right-2 z-20 flex size-16 items-center justify-center rounded-full border-10 border-base bg-[#161f6b] text-white shadow-lg shadow-black/40 transition-all duration-300 group-hover:bg-[#912491] lg:size-[72px]"
      >
        <ArrowIcon />
      </span>
    </Link>
  );
}