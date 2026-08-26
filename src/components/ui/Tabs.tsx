"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  /** Stable key + used to build the ARIA ids. */
  id: string;
  label: string;
  content: ReactNode;
}

/**
 * An accessible, keyboard-operable tab set (WAI-ARIA tabs pattern):
 *  - click or Arrow keys move between tabs, Home/End jump to first/last
 *  - roving tabindex keeps a single tab stop; the active panel is revealed
 * Used on the course details page; kept generic so any page can reuse it.
 */
export function Tabs({ tabs, className }: { tabs: TabItem[]; className?: string }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function focusTab(index: number) {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        focusTab(active + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        focusTab(active - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(tabs.length - 1);
        break;
    }
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Course information"
        onKeyDown={onKeyDown}
        className="flex gap-1 overflow-x-auto border-b border-line [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab, i) => {
          const selected = i === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              type="button"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "relative shrink-0 whitespace-nowrap px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink sm:px-5 sm:text-base",
                selected ? "text-white" : "text-text/60 hover:text-text",
              )}
            >
              {tab.label}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-pink to-magenta transition-opacity",
                  selected ? "opacity-100" : "opacity-0",
                )}
              />
            </button>
          );
        })}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="pt-8 focus-visible:outline-none"
        >
          {/* All panels render (hidden when inactive) so every panel's content is
              in the initial HTML for SEO, and stateful children — like the modules
              accordion — keep their state when switching tabs. */}
          {tab.content}
        </div>
      ))}
    </div>
  );
}
