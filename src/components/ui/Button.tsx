import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "@/lib/icons";

type Variant = "primary" | "secondary" | "outline" | "light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  // Brand gradient — the primary call to action.
  primary:
    "bg-gradient-to-r from-pink to-magenta text-white hover:brightness-110 focus-visible:outline-pink",
  // Solid navy with a hairline border — secondary actions on dark surfaces.
  secondary:
    "bg-navy text-text border border-line hover:bg-card focus-visible:outline-sky",
  // Transparent with a border — quiet actions.
  outline:
    "bg-transparent text-text border border-line hover:border-pink hover:text-white focus-visible:outline-pink",
  // Light chip on dark sections.
  light: "bg-ice text-base hover:bg-white focus-visible:outline-sky",
};

const sizes: Record<Size, string> = {
  md: "h-11 text-sm gap-2",
  lg: "h-14 text-base gap-3",
};

// Horizontal padding depends on whether the trailing arrow circle is present.
const padding: Record<Size, { plain: string; arrow: string }> = {
  md: { plain: "px-5", arrow: "pl-5 pr-2" },
  lg: { plain: "px-7", arrow: "pl-7 pr-3" },
};

type StyleProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
};

function classesFor({ variant = "primary", size = "md", withArrow, className }: StyleProps) {
  return cn(
    "group inline-flex items-center justify-center rounded-button font-semibold transition",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    sizes[size],
    withArrow ? padding[size].arrow : padding[size].plain,
    className,
  );
}

function ArrowBadge({ variant }: { variant: Variant }) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5",
        variant === "primary" || variant === "light" ? "bg-white/20" : "bg-pink text-white",
      )}
    >
      <ArrowRight className="size-4" />
    </span>
  );
}

/** Anchor/Link button. Internal hrefs use next/link; hash/mailto/tel fall through.
 *  Custom style props are destructured out so only valid anchor attributes are
 *  spread onto the DOM element. */
export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...rest
}: StyleProps & { href: string; children: ReactNode } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >) {
  return (
    <Link href={href} className={classesFor({ variant, size, withArrow, className })} {...rest}>
      <span>{children}</span>
      {withArrow && <ArrowBadge variant={variant} />}
    </Link>
  );
}
