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

      {/* Spiral background motif */}
      <Image
        src="/images/background-spiral.webp"
        alt=""
        aria-hidden
        width={927}
        height={590}
        className="pointer-events-none absolute inset-0 w-full origin-center object-cover opacity-50"
      />



      <Container className="relative">
        {/* Stacked layout: images span full width, text overlays top-left */}
        <div className="relative min-h-[600px] lg:min-h-[700px]">
          <div className="relative z-10 flex h-[210px] w-full max-w-[765px] items-center pb-12 lg:pb-16">
            {/* Opening quote mark */}
            <Quote className="absolute -left-2 -top-6 z-0 size-16 text-white/10 lg:-left-20 lg:-top-13 lg:size-20" />

            <h2 className="relative z-10 text-balance font-bold leading-[70px] tracking-[0%] text-white font-['Inter'] text-[64px]">
              A world where{" "}
              <span className="text-magenta-lt">everyone has the opportunity</span> to
              fulfil their potential
              {/* Closing quote mark, inline after the last word */}
              <Quote className="ml-2 inline-block size-16 rotate-180 text-white/10 lg:size-20 align-baseline" />
            </h2>
          </div>


          {/* Three overlapping tilted images spread across the section */}
          <div className="absolute inset-0 z-0">
            {/* Left: man with laptop - 418×465px, 5px white border, -7.19° rotation */}
            <div className="absolute bottom-0 left-0 z-30 w-[380px] max-w-[32vw] -rotate-[7.19deg]">
              <div className="relative h-[420px] overflow-hidden  border-[5px] border-white bg-white shadow-2xl">
                <Image
                  src="/images/mission_left.jpg"
                  alt="Student working on design project"
                  fill
                  sizes="32vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center: woman painting - 409×465px, 5px white border, +11.32° rotation, overlaps left photo */}
            <div className="absolute bottom-0 left-[34%] z-20 w-[380px] max-w-[30vw] rotate-[11.32deg]">
              <div className="relative h-[420px] overflow-hidden  border-[5px] border-white bg-white shadow-2xl">
                <Image
                  src="/images/mission_middle.jpg"
                  alt="Student in creative practice"
                  fill
                  sizes="30vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: fashion studio - 410×538px, 5px white border, 0° rotation (straight), separate from the other two */}
            <div className="absolute right-0 top-[4%] z-10 w-[380px] max-w-[32vw]">
              <div className="relative h-[485px] overflow-hidden border-[5px] border-white bg-white shadow-2xl">
                <Image
                  src="/images/mission_right.jpg"
                  alt="Students collaborating in fashion studio"
                  fill
                  sizes="32vw"
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
