import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Quote } from "@/lib/icons";

/**
 * Mission statement — "A world where everyone has the opportunity to fulfil
 * their potential." Built to the Figma frame: spiral background, faded quote
 * marks, magenta-highlighted text, and three images (two tilted, one straight
 * with a white border).
 */
export function Mission() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-deep py-20 lg:py-32">
      {/* Spiral background motif */}
      <Image
        src="/images/background-spiral.webp"
        alt=""
        aria-hidden
        width={2200}
        height={1636}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Headline with faded quote marks */}
          <div className="relative">
            <Quote className="absolute -left-4 -top-8 size-32 text-white/5 lg:-left-8 lg:-top-12 lg:size-40" />
            <h2 className="relative text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              A world where{" "}
              <span className="text-magenta-lt">everyone has the opportunity</span> to
              fulfil their potential
            </h2>
          </div>

          {/* Right: Three images — two tilted, one straight with border */}
          <div className="relative grid grid-cols-2 gap-6">
            {/* Bottom-left: tilted photo (man with laptop) - already tilted in source */}
            <div className="relative col-span-1 row-start-2 aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src="/images/mission_left.jpg"
                alt="Student working on design project"
                fill
                sizes="(max-width: 1024px) 45vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* Center: tilted photo (woman painting) - already tilted in source */}
            <div className="relative col-span-1 col-start-2 row-span-2 aspect-[2/3] self-center overflow-hidden rounded-lg">
              <Image
                src="/images/mission_middle.jpg"
                alt="Student in creative practice"
                fill
                sizes="(max-width: 1024px) 45vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* Top-right: straight photo with white border (fashion studio) - already tilted in source */}
            <div className="relative col-span-1 col-start-2 row-start-1 aspect-[2/3] overflow-hidden rounded-lg border-8 border-white bg-white shadow-xl">
              <Image
                src="/images/mission_right.jpg"
                alt="Students collaborating in fashion studio"
                fill
                sizes="(max-width: 1024px) 45vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
