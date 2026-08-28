import Image from "next/image";
import { ArrowRight } from "@/lib/icons";


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

/**
 * "Ready to Apply?" CTA section matching Figma specs:
 * Background: #040D3D (card-alt), Width: 1280px, Height: 340px
 * Padding: 68px top/bottom, 356px left/right, Gap: 10px
 * banner_decore.png decorative elements INSIDE the card on left and right sides
 */
export function ReadyToApplyCTA() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12 pb-20.5">
    
      <div className="relative mx-auto flex h-[340px] max-w-[1280px] flex-col items-center justify-center gap-[10px] overflow-hidden  bg-card-alt px-[356px] py-[68px] text-center">
        {/* Left decorative element INSIDE card */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/2 h-full w-auto -translate-y-1/2 opacity-30"
        >
          <Image
            src="/images/course_details/bannder_decore.png"
            alt=""
            width={150}
            height={300}
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Right decorative element INSIDE card (flipped) */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/2 h-full w-auto -translate-y-1/2 scale-x-[-1] opacity-30"
        >
          <Image
            src="/images/course_details/bannder_decore.png"
            alt=""
            width={150}
            height={300}
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Content - positioned above the decorative elements */}
        <div className="relative z-10 flex flex-col items-center gap-[10px]">
          <h2 className="w-[785px] text-center font-inter text-[36px] font-bold leading-[40px] tracking-normal text-[#FAFDFF]">
            Ready to Apply?
          </h2>

          <p className="w-[749px] text-center font-inter text-[18px] font-medium leading-[26px] tracking-normal text-[#EBF7FF]">
            Take the next step in your creative journey and join Victoria College of Arts and Design.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Apply Now - outline variant with plain arrow */}
            <a

              href="/apply"
              className="group inline-flex h-14 w-fit shrink-0 items-center justify-center gap-7 border border-[#EBECF3] bg-[#051251] px-4 font-semibold text-white transition hover:border-pink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
            >
              <span className="h-6 w-[135px]">Apply Now</span>
              <ArrowIcon direction="right" />
            </a>

            {/* Get more info - primary gradient with plain arrow */}
            <a
              href="/contact"
              className="group inline-flex h-14 w-fit shrink-0 items-center justify-center gap-7 bg-[#912491] px-4 font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink"
            >
              <span>Get more info</span>
              <ArrowIcon direction="right" />
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
