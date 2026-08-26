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
            {/* Left: man with laptop - 418×465px, 5px white border, +7.19° rotation */}
            <div className="absolute bottom-0 left-[5%] w-[418px] max-w-[35vw] rotate-[7.19deg]">
              <div className="relative h-[465px] overflow-hidden rounded-lg border-[5px] border-white bg-white shadow-2xl">
                <Image
                  src="/images/mission_left.jpg"
                  alt="Student working on design project"
                  fill
                  sizes="35vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center: woman painting - 409×465px, 5px white border, -11.32° rotation */}
            <div className="absolute bottom-[12%] left-1/2 w-[409px] max-w-[30vw] -translate-x-1/2 -rotate-[11.32deg]">
              <div className="relative h-[465px] overflow-hidden rounded-lg border-[5px] border-white bg-white shadow-2xl">
                <Image
                  src="/images/mission_middle.jpg"
                  alt="Student in creative practice"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: fashion studio - 410×538px, 5px white border, 0° rotation (straight) */}
            <div className="absolute right-[5%] top-[8%] w-[410px] max-w-[35vw]">
              <div className="relative h-[538px] overflow-hidden rounded-lg border-[5px] border-white bg-white shadow-2xl">
                <Image
                  src="/images/mission_right.jpg"
                  alt="Students collaborating in fashion studio"
                  fill
                  sizes="35vw"
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
