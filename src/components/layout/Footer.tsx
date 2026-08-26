import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import {
  footerColumns,
  socialLinks,
  contact,
  accreditationBadges,
  site,
  mainNav,
} from "@/data/navigation";

/**
 * Site footer — shared across every page via the root layout. Brand + contact +
 * social on the left, navigation columns on the right, an accreditation strip,
 * and a copyright bar. All content is data-driven (see src/data/navigation.ts).
 */
export function Footer() {
  return (
    <footer className="border-t border-line bg-deep">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand + contact + social */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt=""
                width={48}
                height={48}
                className="size-12 rounded-full"
              />
              <span className="text-xl font-bold text-white">VCAD</span>
            </Link>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-text/70">
              {site.name} — part of the PEN Group. Creative, media and business
              education across our London campuses.
            </p>

            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="text-text/80 transition hover:text-white"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-text/80 transition hover:text-white"
              >
                {contact.phone}
              </a>
            </div>

            <ul className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-line bg-white/5 transition hover:border-pink hover:bg-white/10"
                  >
                    <Image
                      src={social.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="size-[18px] object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <FooterColumn title="Explore" links={mainNav} />
            {footerColumns.map((column, i) => (
              <FooterColumn key={i} title={["Company", "Discover", "Campuses", "Legal"][i]} links={column} />
            ))}
          </div>
        </div>

        {/* Accreditation strip */}
        <div className="mt-14 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-text/50">
            Accredited &amp; affiliated
          </span>
          <ul className="flex flex-wrap items-center gap-4">
            {accreditationBadges.map((badge, i) => (
              <li
                key={i}
                className="flex h-14 items-center justify-center rounded-card bg-white/95 px-4"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={120}
                  height={48}
                  className="h-9 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Copyright bar */}
      <div className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-text/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; built as a demonstration project.</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-text/50">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-text/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
