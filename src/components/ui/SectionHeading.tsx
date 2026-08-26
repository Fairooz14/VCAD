import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Section header used across the homepage: a pink uppercase eyebrow, a large
 * bold title, an optional lead paragraph, and an optional `action` slot on the
 * right (e.g. a "View all" button or carousel controls). `align` centres it for
 * hero-style sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center"
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-4", align === "center" && "items-center")}>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink">
            <span className="h-px w-6 bg-pink" aria-hidden />
            {eyebrow}
          </span>
        )}
        <h2
          className={cn(
            "text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-pretty text-base text-text/70 sm:text-lg">
            {description}
          </p>
        )}
      </div>
      {action && <div className="flex shrink-0 items-center gap-3">{action}</div>}
    </div>
  );
}
