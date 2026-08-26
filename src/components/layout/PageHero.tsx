import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

/**
 * Header block for interior pages. Includes the top padding needed to clear the
 * fixed site header, a pink eyebrow, the page title (design "page title" scale),
 * an optional lead, optional breadcrumbs, and an optional trailing slot.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: { label: string; href: string }[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-40", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-10 h-[420px] w-[420px] rounded-full bg-magenta/15 blur-[130px]"
      />
      <Container className="relative flex flex-col gap-6">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-text/50">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  <Link href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="flex flex-col gap-5">
          {eyebrow && (
            <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink">
              <span className="h-px w-6 bg-pink" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-pretty text-base text-text/75 sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
