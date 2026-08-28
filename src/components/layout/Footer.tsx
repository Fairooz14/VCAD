import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  footerColumns,
  socialLinks,
  contact,
  accreditationBadges,
  site,
} from "@/data/navigation";

/** Concentric, off-centre rings — decorative background element sitting in
 *  the top-right corner of the footer, matching the Figma frame's "spiral". */
function SpiralDecoration() {
  const rings = [120, 200, 280, 360, 440, 520];
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -right-24 -top-24 h-[640px] w-[640px] text-line/20 lg:-right-16 lg:-top-32"
      viewBox="0 0 640 640"
      fill="none"
    >
      {rings.map((r) => (
        <circle
          key={r}
          cx="420"
          cy="220"
          r={r}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

/**
 * Site footer — shared across every page via the root layout. Built to the
 * Figma frame: bold headline with a highlighted phrase, background line
 * strips + spiral rings, a social/contact row, a flat 4-column link grid,
 * accreditation badges, and a copyright bar. Content is data-driven (see
 * src/data/navigation.ts).
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep">
      {/* Background vertical line strips */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="relative mx-auto h-full w-full max-w-[1440px]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-line/20"
              style={{ left: `${(i + 1) * 11.11}%` }}
            />
          ))}
        </div>
      </div>

      {/* Background spiral rings */}
      <SpiralDecoration />

      <Container className="relative pt-16 lg:pt-20">
        {/* Logo */}
        <Link href="/" className="inline-flex">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={72}
            height={72}
            className="size-16  lg:size-[72px]"
          />
        </Link>

        {/* Headline */}
        <h2 className="mt-10 max-w-[900px] text-balance text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
          Get creative and <span className="text-pink">turn your passion</span> for
          the Arts into a rewarding career.
        </h2>

        {/* Divider */}
        <div className="mt-14 border-t border-line lg:mt-16" />

        {/* Social/nav column (left) + contact/badges column (right) */}
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: social icons above the nav grid */}
          <div className="flex flex-col gap-5">
            <ul className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-11 shrink-0 items-center justify-center transition hover:opacity-80"
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={44}
                      height={44}
                      className="size-11 shrink-0 object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4">
              {footerColumns.map((column, i) => (
                <ul key={i} className="flex flex-col gap-3">
                  {column.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-medium uppercase tracking-[0.08em] text-text/80 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Right: email above phone above badges */}
          <div className="flex flex-col items-start gap-3 text-left">
            <a
              href={`mailto:${contact.email}`}
              className="text-xl font-bold text-white transition hover:text-pink sm:text-2xl lg:text-3xl"
            >
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="text-sm text-text/70 transition hover:text-white"
            >
              {contact.phone}
            </a>

            <ul className="mt-2 flex flex-wrap items-center justify-end gap-4">
              {accreditationBadges.map((badge, i) => (
                <li key={i}>
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={100}
                    height={44}
                    className="h-10 w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright bar
      <div className="relative mx-14 border-t border-line lg:mx-12">
        <Container className="flex flex-col gap-2 py-6 text-sm text-text/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}.
          </p>
          <p>All rights reserved.</p>
        </Container>
      </div> */}

       {/* Copyright bar */}
      <div className="relative">
        <Container>
          <div className="border-t border-line" />
        </Container>
        <Container className="flex flex-col gap-2 py-6 text-sm text-text/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}.
          </p>
          <p>All rights reserved.</p>
        </Container>
      </div>


    </footer>
  );
}