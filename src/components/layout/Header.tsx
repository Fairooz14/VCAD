"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Menu, Close } from "@/lib/icons";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * Site header — shared across every page via the root layout. Built to the
 * Figma frame: the college wordmark on the left, the uppercase primary nav and
 * a menu button on the right, sitting on the solid #040D3D ("card-alt") navbar
 * surface. The menu button opens a full-width overlay listing the same links.
 */
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-card-alt">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Brand onNavigate={() => setMenuOpen(false)} />

        <div className="flex items-center gap-5 lg:gap-8">
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.08em] text-text/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex size-11 items-center justify-center text-text transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
          >
            {menuOpen ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {/* Overlay menu — opened by the menu button at every breakpoint. */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-card-alt transition-[max-height] duration-300",
          menuOpen ? "max-h-[80vh]" : "max-h-0 border-t-transparent",
        )}
      >
        <Container className="flex flex-col gap-2 py-6">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-card px-2 py-3 text-lg font-medium uppercase tracking-[0.08em] text-text/90 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
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
