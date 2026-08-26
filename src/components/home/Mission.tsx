import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Quote } from "@/lib/icons";

/**
 * Mission statement — "A world where everyone has the opportunity to fulfil
 * their potential." Built to the Figma frame: spiral background, faded quote
 * marks, magenta-highlighted text overlaying a collage of three overlapping,
 * tilted photos spread across the section.
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
        {/* Stacked layout: images span full width, text overlays top-left */}
        <div className="relative min-h-[600px] lg:min-h-[700px]">
          {/* Faded quote mark behind everything */}
          <Quote className="absolute left-0 top-0 z-0 size-32 text-white/5 lg:size-40" />

          {/* Headline overlaying top-left */}
          <div className="relative z-10 max-w-2xl pb-12 lg:pb-16">
            <h2 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              A world where{" "}
              <span className="text-magenta-lt">everyone has the opportunity</span> to
              fulfil their potential
            </h2>
          </div>

          {/* Three overlapping tilted images spread across the section */}
          <div className="absolute inset-0 z-0">
            {/* Bottom-left: tilted photo (man with laptop) */}
            <div className="absolute bottom-0 left-0 w-[35%] max-w-[420px] -rotate-6">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/images/mission_left.jpg"
                  alt="Student working on design project"
                  fill
                  sizes="35vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center: tilted photo (woman painting) */}
            <div className="absolute bottom-8 left-[30%] w-[28%] max-w-[350px] rotate-6 lg:left-[35%]">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/images/mission_middle.jpg"
                  alt="Student in creative practice"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Top-right: straight photo with white border (fashion studio) */}
            <div className="absolute right-0 top-12 w-[42%] max-w-[520px] rotate-3 lg:top-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-8 border-white bg-white shadow-2xl">
                <Image
                  src="/images/mission_right.jpg"
                  alt="Students collaborating in fashion studio"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
