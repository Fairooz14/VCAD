"use client";

import { useId, useState, type ReactNode } from "react";
import { Plus, Minus } from "@/lib/icons";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: ReactNode;
  /** Optional small label shown before the title (e.g. "Year 1"). */
  meta?: string;
  content: ReactNode;
}

/**
 * An accessible disclosure/accordion (WAI-ARIA pattern). Each header is a button
 * toggling a region; the panel animates height with the grid-rows 0fr↔1fr trick
 * (no fixed max-height guesswork). Multiple panels may be open at once.
 */
export function Accordion({
  items,
  defaultOpen = [],
  className,
}: {
  items: AccordionItem[];
  /** Indices open on first render. */
  defaultOpen?: number[];
  className?: string;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(new Set(defaultOpen));

  function toggle(index: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div
            key={item.id}
            className={cn(
              "overflow-hidden rounded-card border transition-colors",
              isOpen ? "border-line bg-card/60" : "border-line/60 bg-white/[0.02]",
            )}
          >
            <h3>
              <button
                type="button"
                id={`${baseId}-header-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`${baseId}-panel-${item.id}`}
                onClick={() => toggle(i)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink sm:px-6"
              >
                <span className="flex flex-1 flex-col gap-0.5">
                  {item.meta && (
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-pink">
                      {item.meta}
                    </span>
                  )}
                  <span className="text-base font-semibold text-white sm:text-lg">
                    {item.title}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors",
                    isOpen ? "border-pink bg-pink text-white" : "border-line text-text/70",
                  )}
                >
                  {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>
            </h3>
            <div
              id={`${baseId}-panel-${item.id}`}
              role="region"
              aria-labelledby={`${baseId}-header-${item.id}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 text-pretty text-sm leading-relaxed text-text/75 sm:px-6 sm:text-base">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
