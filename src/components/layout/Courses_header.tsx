"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Menu, Close } from "@/lib/icons";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";


const DROPDOWN_LABELS = ["About VCAD", "VCAD Life"];


function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: "22px",
        height: "22px",
        backgroundColor: "currentColor",
        maskImage: `url(/images/arrow_${direction}.png)`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: `url(/images/arrow_${direction}.png)`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 16" fill="none" className={className} aria-hidden>
      <path
        d="M1 8H19M19 8L12.5 1.5M19 8L12.5 14.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while the menu overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-[#030A2E]">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Brand onNavigate={() => setMenuOpen(false)} />

        <div className="flex items-center gap-5 lg:gap-8">
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium uppercase tracking-[0.08em] text-text/80 transition-colors hover:text-white"
              >
                <span className="text-text/50">/</span>
                {link.label}
                {DROPDOWN_LABELS.includes(link.label) && <ChevronRight className="size-4" />}
              </Link>
            ))}
          </nav>

          <Link
            href="/apply"
            className="hidden h-14 w-fit shrink-0 items-center justify-center gap-2.5 border border-[#EBECF3] bg-[#051251] px-4 text-sm font-semibold text-white transition hover:border-pink hover:bg-white/5 sm:flex"
          >
            Apply Now
            <ArrowIcon direction="right" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex size-11 items-center justify-center text-text transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink lg:hidden"
          >
            {menuOpen ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {/* Overlay menu — mobile only, opened by the menu button. */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-[#030A2E] transition-[max-height] duration-300 lg:hidden",
          menuOpen ? "max-h-[80vh]" : "max-h-0 border-t-transparent",
        )}
      >
        <Container className="flex flex-col gap-2 py-6">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-card px-2 py-3 text-lg font-medium uppercase tracking-[0.08em] text-text/90 transition hover:bg-white/5 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <span className="text-text/50">/</span>
                {link.label}
              </span>
              {DROPDOWN_LABELS.includes(link.label) && <ChevronRight className="size-4" />}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-3 border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-pink hover:bg-white/5"
          >
            Apply Now
            <ArrowRight className="size-4" />
          </Link>
        </Container>
      </div>
    </header>
  );
}

function Brand({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label="Victoria College of Arts and Design — home"
      className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
    >
      <Image
        src="/images/header_logo.png"
        alt="Victoria College of Arts and Design"
        width={536}
        height={200}
        loading="eager"
        className="h-11 w-[118px] shrink-0 lg:h-[52px] lg:w-[139px]"
      />
    </Link>
  );
}