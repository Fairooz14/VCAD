import Image from "next/image";
import Link from "next/link";
import { Pill } from "@/components/ui/Pill";
import { ArrowUpRight } from "@/lib/icons";
import { courseTitle, cn } from "@/lib/utils";
import type { Course } from "@/lib/types";

type Variant = "feature" | "stacked" | "expanded" | "default";

/**
 * A single course card. One component, four presentations, so the asymmetric
 * grid is composed from data rather than bespoke markup:
 *  - feature:  large hero card, image with overlaid content
 *  - stacked:  compact card (image top, minimal content) for the side column
 *  - expanded: wide horizontal card foregrounding the school + duration badges
 *  - default:  standard card for any overflow courses
 */
export function CourseCard({
  course,
  variant = "default",
  className,
  eager = false,
}: {
  course: Course;
  variant?: Variant;
  className?: string;
  /** Marks this card's image as above-the-fold (the courses-grid feature slot),
   *  so it loads eagerly as the LCP instead of lazily. */
  eager?: boolean;
}) {
  const title = courseTitle(course);
  const href = `/courses/${course.slug}`;
  // Next 16: `priority` is deprecated; for the above-the-fold LCP image the guidance
  // is `loading="eager"` + `fetchPriority="high"` (node_modules/next/dist/docs image.md).
  const eagerProps = eager
    ? ({ loading: "eager", fetchPriority: "high" } as const)
    : {};

  // Overlay treatment (feature): content sits on the image with a gradient.
  if (variant === "feature") {
    return (
      <Link
        href={href}
        className={cn(
          "group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-card border border-line lg:min-h-full",
          className,
        )}
      >
        <Image
          src={course.image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          {...eagerProps}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/60 to-transparent" />
        <div className="relative flex flex-col gap-4 p-7 lg:p-9">
          <div className="flex flex-wrap gap-2">
            <Pill tone="solid">{course.level}</Pill>
            <Pill tone="muted">{course.school}</Pill>
          </div>
          <h3 className="text-2xl font-bold text-white lg:text-3xl">{course.name}</h3>
          <p className="max-w-lg text-pretty text-sm leading-relaxed text-text/80 lg:text-base">
            {course.summary}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink transition-all group-hover:gap-2.5">
            View course <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>
    );
  }

  // Wide horizontal card foregrounding the badges.
  if (variant === "expanded") {
    return (
      <Link
        href={href}
        className={cn(
          "group grid overflow-hidden rounded-card border border-line bg-card sm:grid-cols-[40%_1fr]",
          className,
        )}
      >
        <div className="relative aspect-[4/3] sm:aspect-auto">
          <Image
            src={course.image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 40vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-7 lg:p-9">
          <div className="flex flex-wrap gap-2">
            <Pill tone="outline">{course.school}</Pill>
            <Pill tone="outline">{course.duration}</Pill>
            <Pill tone="outline">{course.studyMode}</Pill>
          </div>
          <h3 className="text-xl font-bold text-white lg:text-2xl">{title}</h3>
          <p className="max-w-xl text-pretty text-sm leading-relaxed text-text/75 lg:text-base">
            {course.summary}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink transition-all group-hover:gap-2.5">
            Course details <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>
    );
  }

  // Compact (stacked) and default share an image-top layout; stacked is tighter.
  const compact = variant === "stacked";
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-card border border-line bg-card",
        className,
      )}
    >
      <div className={cn("relative", compact ? "aspect-[16/10]" : "aspect-[4/3]")}>
        <Image
          src={course.image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 50vw, 30vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3">
          <Pill tone="solid">{course.level}</Pill>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-white lg:text-lg">{course.name}</h3>
        {!compact && (
          <div className="flex flex-wrap gap-2">
            <Pill tone="outline">{course.school}</Pill>
            <Pill tone="outline">{course.duration}</Pill>
          </div>
        )}
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-pink transition-all group-hover:gap-2.5">
          Course details <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
