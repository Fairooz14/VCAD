import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Homepage hero. Left column carries the headline, lead and calls to action;
 * the right column is the design's transparent discipline collage. The collage
 * is the LCP image, so it is preloaded (Next 16 replaces `priority` with
 * `preload`). A soft radial glow sits behind it to lift it off the base colour.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      {/* ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[600px] w-[600px] rounded-full bg-magenta/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-blue/20 blur-[140px]"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-pill border border-line bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky">
            <span className="size-1.5 rounded-full bg-cyan" aria-hidden />
            Victoria College of Arts &amp; Design
          </span>

          <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[4rem]">
            Unlock your{" "}
            <span className="bg-gradient-to-r from-pink via-magenta-lt to-blue bg-clip-text text-transparent">
              creative future
            </span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-text/75 sm:text-lg">
            A London creative college offering degree and diploma courses in
            fashion, design, media, marketing and business — taught alongside
            industry from your very first day.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/courses" variant="primary" size="lg" withArrow>
              Explore our courses
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Book an open day
            </Button>
          </div>

          <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
            <Stat value="6+" label="Creative disciplines" />
            <Stat value="3" label="London campuses" />
            <Stat value="100%" label="Industry-linked briefs" />
          </dl>
        </div>

        <div className="relative">
          <Image
            src="/images/hero-banner.webp"
            alt="VCAD students across fashion, photography, graphic design, media, business, management and marketing"
            width={1800}
            height={1726}
            preload
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="h-auto w-full max-w-[560px] lg:ml-auto"
          />
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <dt className="order-2 text-xs font-medium uppercase tracking-wide text-text/55">
        {label}
      </dt>
      <dd className="order-1 text-2xl font-bold text-white lg:text-3xl">{value}</dd>
    </div>
  );
}
