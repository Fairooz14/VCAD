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
          <h1 className="text-5xl font-bold uppercase leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-[99px]">
            <span className="block">Welcome</span>
            <span className="block">to VCAD</span>
          </h1>

          <p className="mt-6 max-w-md text-[18px] leading-[1.6] text-text/70 sm:mt-7">
            Our team at Victoria College of Arts and Design is passionate about
            creating innovative projects and generating new ideas. We work with a
            variety of experts and esteemed companies using a collaborative
            approach. Located in London&apos;s Design District, we have valuable
            connections within our industry. Search our latest courses.
          </p>

          {/* CTA · fixed 320×56, #051251 fill with a #EBECF3 hairline border,
              label left + trailing arrow (buttons radius · 20px) */}
          <Link
            href="/courses"
            className="group mt-8 inline-flex h-14 w-80 max-w-full items-center justify-between gap-[10px] self-start rounded-button border border-[#ebecf3] bg-card px-4 text-base font-medium text-white transition hover:border-pink hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink sm:mt-9"
          >
            Explore Courses
            <ArrowRight className="size-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative">
          <Image
            src="/images/hero_banner.png"
            alt="VCAD disciplines: fashion, photography, graphic design, media, business, management and marketing"
            width={2854}
            height={2720}
            preload
            sizes="(max-width: 1024px) 90vw, 50vw"
            className="h-auto w-full lg:ml-auto"
          />
        </div>
      </Container>
    </section>
  );
}
