import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "@/lib/icons";

/**
 * Circular icon button used for carousel prev/next controls. The design shows
 * full-round buttons (~57px) with a hairline border on dark surfaces; the active
 * direction fills with the brand pink.
 */
export function IconButton({
  direction,
  onClick,
  disabled,
  label,
  variant = "outline",
  className,
}: {
  direction: "prev" | "next";
  onClick?: () => void;
  disabled?: boolean;
  label?: string;
  variant?: "outline" | "solid";
  className?: string;
}) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label ?? (direction === "prev" ? "Previous" : "Next")}
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full transition lg:size-14",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink",
        "disabled:cursor-not-allowed disabled:opacity-40",
        variant === "solid"
          ? "bg-pink text-white hover:brightness-110"
          : "border border-line text-text hover:border-pink hover:bg-pink hover:text-white",
        className,
      )}
    >
      <Icon className="size-5" />
    </button>
  );
}
