import Image from "next/image";
import { ArrowRight } from "@/lib/icons";

/**
 * Course Specification download banner matching Figma specs:
 * Background: #040D3D (card-alt), padding: 30px, gap: 8px between icon/text/button
 * Width: 1220px max, Height: 150px, centered with horizontal margin
 */

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: "22px",
        height: "22px",
        backgroundColor: "currentColor",
        maskImage: `url(/images/arrow_${direction}.png)`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: `url(/images/arrow_${direction}.png)`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
      }}
    />
  );
}

export function CourseSpecBanner() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex h-[150px] max-w-[1220px] items-center justify-between gap-8 bg-card-alt px-[30px]">
        {/* Left: Icon + Text */}
        <div className="flex items-center gap-5">
          {/* PDF Icon with gradient circle background */}
          <div className="flex size-[72px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-magenta/25 to-blue/25">
            <Image
              src="/images/course_details/pdf_icon.png"
              alt=""
              width={40}
              height={40}
              className="size-10 object-contain"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-white">
              Course Specification
            </h2>
            <p className="text-sm text-text/70">
              Download the full course specification for detailed information.
            </p>
          </div>
        </div>

        {/* Right: Download Button */}
        <a
          href="#"
          className="group inline-flex h-14 w-fit shrink-0 items-center justify-center gap-10 border border-[#EBECF3] bg-[#051251] px-4 font-semibold text-white transition hover:border-pink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
        >
          <span>Download PDF</span>
          <ArrowIcon direction="right" />
        </a>
      </div>
    </section>
  );
}
