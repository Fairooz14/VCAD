import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Small pill label. Used for the school and duration badges on the courses grid
 * (the design shows rounded outlined chips), and for the qualification level on
 * course cards. `tone` switches between the outlined and filled treatments.
 */
export function Pill({
  children,
  tone = "outline",
  className,
}: {
  children: ReactNode;
  tone?: "outline" | "solid" | "muted";
  className?: string;
}) {
  const tones = {
    outline: "border border-line text-text/90 bg-white/5",
    solid: "bg-pink text-white",
    muted: "bg-white/10 text-text/80",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-button px-3.5 py-1.5 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
