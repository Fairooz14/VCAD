import Image from "next/image";
import { Container } from "@/components/ui/Container";

/**
 * "Partner Institutions" — the universities that validate VCAD's degrees.
 * Built to the Figma frame: a magenta eyebrow, bold title and body paragraph on
 * the left; the two partner marks (supplied as white, transparent logos) stacked
 * on the right — all over a deep-navy panel dressed with faint vertical guides
 * and concentric rings that fan out from the right edge behind the logos.
 */
const partners = [
  {
    name: "Ravensbourne University London",
    src: "/images/partners/ravensbourne.png",
    width: 1408,
    height: 344,
    className: "w-[280px] lg:w-[350px]",
  },
  {
    name: "Arts University Plymouth",
    src: "/images/partners/arts-plymouth.png",
    width: 1016,
    height: 344,
    className: "w-[200px] lg:w-[248px]",
  },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="relative scroll-mt-24 overflow-hidden bg-deep py-20 lg:py-28"
    >
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

      {/* Concentric rings, centred on the right edge behind the logos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute right-0 top-1/2">
          {[...Array(4)].map((_, i) => {
            const size = 480 + i * 200;
            return (
              <div
                key={i}
                className="absolute rounded-full border border-line/25"
                style={{ width: size, height: size, left: -size / 2, top: -size / 2 }}
              />
            );
          })}
        </div>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Left: eyebrow + title + paragraph */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#E646E6]">
              Our Partners
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Partner Institutions
            </h2>
            <p className="mt-8 max-w-[600px] text-pretty text-lg leading-[1.7] text-text/80 lg:mt-10">
              Our team at Victoria College of Arts and Design is passionate about
              creating innovative projects and generating new ideas. We work with a
              variety of experts and esteemed companies using a collaborative
              approach. Located in London&apos;s Design District, we have valuable
              connections within our industry.
            </p>
          </div>

          {/* Right: partner logos, stacked and left-aligned */}
          <ul className="flex flex-col items-start gap-10 lg:gap-12">
            {partners.map((partner) => (
              <li key={partner.name}>
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={`h-auto ${partner.className}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
