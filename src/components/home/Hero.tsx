import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/lib/icons";

/**
 * Homepage hero — built to the Figma frame. The left column carries the
 * "WELCOME TO VCAD" display headline, the lead paragraph and the single
 * "Explore Courses" call to action; the right column is the design's
 * transparent discipline collage (the LCP image, so it is preloaded).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-12">
        <div className="flex flex-col">
          {/* Hero display · Inter 68 Bold, uppercase, white */}
          <h1 className="text-5xl font-bold uppercase leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[68px]">
            <span className="block">Welcome</span>
            <span className="block">to VCAD</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-text/70 sm:mt-7 sm:text-lg">
            Our team at Victoria College of Arts and Design is passionate about
            creating innovative projects and generating new ideas. We work with a
            variety of experts and esteemed companies using a collaborative
            approach. Located in London&apos;s Design District, we have valuable
            connections within our industry. Search our latest courses.
          </p>

          {/* Outlined CTA with a trailing arrow (buttons radius · 20px) */}
          <Link
            href="/courses"
            className="group mt-8 inline-flex h-[52px] min-w-[210px] items-center justify-between gap-6 self-start rounded-button border border-line bg-white/[0.03] pl-6 pr-5 text-base font-medium text-white transition hover:border-pink hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink sm:mt-9"
          >
            Explore Courses
            <ArrowRight className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative">
          <Image
            src="/images/hero-banner.webp"
            alt="VCAD disciplines: fashion, photography, graphic design, media, business, management and marketing"
            width={1800}
            height={1726}
            preload
            sizes="(max-width: 1024px) 90vw, 50vw"
            className="h-auto w-full lg:ml-auto"
          />
        </div>
      </Container>
    </section>
  );
}
