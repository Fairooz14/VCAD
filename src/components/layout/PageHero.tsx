import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

/**
 * Header block for interior pages. Includes the top padding needed to clear the
 * fixed site header, a pink eyebrow, the page title (design "page title" scale),
 * an optional lead, optional breadcrumbs, and an optional trailing slot.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: { label: string; href: string }[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-40", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-10 h-[420px] w-[420px] rounded-full bg-magenta/15 blur-[130px]"
      />
      <Container className="relative flex flex-col gap-6">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-text/50">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden>/</span>}
                  <Link href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="flex flex-col gap-5">
          {eyebrow && (
            <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink">
              <span className="h-px w-6 bg-pink" aria-hidden />
              {eyebrow}
            </span>
          )}
          <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-pretty text-base text-text/75 sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}


// import type { ReactNode } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Container } from "@/components/ui/Container";
// import { cn } from "@/lib/utils";

// /**
//  * Header block for interior pages. Includes the top padding needed to clear the
//  * fixed site header, a pink eyebrow, the page title (design "page title" scale),
//  * an optional lead, optional breadcrumbs, and an optional trailing slot.
//  *
//  * Two features are opt-in so existing/future callers (course details, not-found,
//  * and anything else — e.g. the homepage, which doesn't use this component today)
//  * are unaffected unless they ask for them:
//  *  - `align="center"` — centers the breadcrumb/eyebrow/title/description block.
//  *    Default is `"left"`, i.e. today's behaviour, unchanged.
//  *  - `cornerImages` — the two decorative photos pinned to the top-left/top-right
//  *    of the banner (the "Explore Our Courses" frame). Only rendered when passed;
//  *    desktop-only, since the Figma frame is a fixed 1440px composition.
//  */
// export function PageHero({
//   eyebrow,
//   title,
//   description,
//   breadcrumbs,
//   align = "left",
//   cornerImages,
//   children,
//   className,
// }: {
//   eyebrow?: string;
//   title: ReactNode;
//   description?: ReactNode;
//   breadcrumbs?: { label: string; href: string }[];
//   /** Text alignment for the breadcrumb/eyebrow/title/description block. Defaults
//    *  to "left" (unchanged existing behaviour); pass "center" for banners like
//    *  the courses page that centre this block. */
//   align?: "left" | "center";
//   /** Optional decorative photos for banners that have them (e.g. courses list).
//    *  Omit entirely for pages that don't — nothing renders and nothing shifts. */
//   cornerImages?: { left: string; right: string };
//   children?: ReactNode;
//   className?: string;
// }) {
//   const centered = align === "center";

//   return (
//     <section
//       className={cn(
//         "relative overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-40",
//         cornerImages && "lg:pb-[140px] lg:pt-[140px]",
//         className,
//       )}
//     >
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -right-32 -top-10 h-[420px] w-[420px] rounded-full bg-magenta/15 blur-[130px]"
//       />
//       {cornerImages && (
//         <>
//           <div
//             aria-hidden
//             className="pointer-events-none absolute left-[135px] top-0 hidden h-[195px] w-[208px] overflow-hidden lg:block"
//           >
//             <Image src={cornerImages.left} alt="" fill sizes="208px" className="object-cover" />
//           </div>
//           <div
//             aria-hidden
//             className="pointer-events-none absolute right-[62px] top-[96px] hidden h-[194px] w-[194px] overflow-hidden lg:block"
//           >
//             <Image src={cornerImages.right} alt="" fill sizes="194px" className="object-cover" />
//           </div>
//         </>
//       )}
//       <Container className="relative flex flex-col gap-6">
//         <div className={cn("flex flex-col gap-6", centered && "items-center text-center")}>
//           {breadcrumbs && (
//             <nav aria-label="Breadcrumb">
//               <ol
//                 className={cn(
//                   "flex flex-wrap items-center gap-2 text-sm text-text/50",
//                   centered && "justify-center",
//                 )}
//               >
//                 {breadcrumbs.map((crumb, i) => (
//                   <li key={crumb.href} className="flex items-center gap-2">
//                     {i > 0 && <span aria-hidden>/</span>}
//                     <Link href={crumb.href} className="transition hover:text-white">
//                       {crumb.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ol>
//             </nav>
//           )}
//           <div className={cn("flex flex-col gap-5", centered && "items-center")}>
//             {eyebrow && (
//               <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-pink">
//                 <span className="h-px w-6 bg-pink" aria-hidden />
//                 {eyebrow}
//               </span>
//             )}
//             <h1 className="text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
//               {title}
//             </h1>
//             {description && (
//               <p className="max-w-2xl text-pretty text-base text-text/75 sm:text-lg">
//                 {description}
//               </p>
//             )}
//           </div>
//         </div>
//         {children}
//       </Container>
//     </section>
//   );
// }