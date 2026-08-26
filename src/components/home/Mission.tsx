import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Mission / "why VCAD" statement. A centred statement sits over the design's
 * faint spiral motif, with a trio of slightly-rotated studio photographs beneath
 * (the design's second-banner images). Captions are written in-voice.
 */
const pillars = [
  { image: "/images/mission-1.webp", label: "Industry-standard studios", rotate: "-rotate-3" },
  { image: "/images/mission-2.webp", label: "Live client briefs", rotate: "rotate-2" },
  { image: "/images/mission-3.webp", label: "A creative community", rotate: "-rotate-2" },
];

export function Mission() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-deep py-20 lg:py-28">
      {/* Spiral motif */}
      <Image
        src="/images/background-spiral.webp"
        alt=""
        aria-hidden
        width={2200}
        height={1636}
        className="pointer-events-none absolute -right-40 top-0 w-[900px] max-w-none opacity-[0.12]"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink">
            <span className="h-px w-6 bg-pink" aria-hidden />
            Why VCAD
            <span className="h-px w-6 bg-pink" aria-hidden />
          </span>
          <p className="text-balance text-2xl font-semibold leading-snug sm:text-3xl lg:text-[2.5rem] lg:leading-[1.15]">
            We turn creative ambition into industry-ready practice — teaching
            theory, craft and technical skill side by side, in real studios,
            on real briefs.
          </p>
          <Button href="/courses" variant="primary" withArrow>
            Discover your course
          </Button>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <li key={pillar.label} className="flex flex-col items-center gap-4">
              <div
                className={cn(
                  "relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-card border border-line transition-transform duration-300 hover:rotate-0 sm:mx-auto",
                  pillar.rotate,
                )}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.label}
                  fill
                  sizes="(max-width: 640px) 90vw, 30vw"
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-text/85">{pillar.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
