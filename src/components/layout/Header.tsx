"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button, ActionButton } from "@/components/ui/Button";
import { Menu, Close } from "@/lib/icons";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * Site header — shared across every page via the root layout. It is transparent
 * over the hero and gains a blurred, bordered background once the page scrolls.
 * The mobile menu is a full-screen overlay toggled by the hamburger button.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-line bg-base/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Brand onNavigate={() => setMenuOpen(false)} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text/80 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#apply" variant="primary" withArrow>
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex size-11 items-center justify-center rounded-full border border-line text-text transition hover:border-pink lg:hidden"
        >
          {menuOpen ? <Close className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-base/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          menuOpen ? "max-h-[80vh]" : "max-h-0 border-t-transparent",
        )}
      >
        <Container className="flex flex-col gap-2 py-6">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-card px-2 py-3 text-lg font-medium text-text/90 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2">
            <ActionButton variant="primary" withArrow onClick={() => setMenuOpen(false)}>
              Apply Now
            </ActionButton>
          </div>
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
      className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={44}
        height={44}
        className="size-10 rounded-full lg:size-11"
      />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-white">VCAD</span>
        <span className="hidden text-[10px] font-medium uppercase tracking-[0.16em] text-text/60 sm:block">
          Victoria College of Arts &amp; Design
        </span>
      </span>
    </Link>
  );
}
