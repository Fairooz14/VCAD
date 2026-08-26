import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Centres page content in the design's frame and applies the responsive gutters.
 * The Figma frame is 1440px wide; content sits within ~1280px with side margins.
 * `as` lets callers render a semantic element (section/header/footer) while
 * keeping the width + padding rules in one place.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
}: {
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}
