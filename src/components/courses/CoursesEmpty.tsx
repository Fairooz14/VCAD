import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/navigation";

/**
 * Empty state for the courses page (no courses returned). The design doesn't
 * specify this, so the call made here: never a blank page. Explain the situation
 * plainly, keep the brand tone, and always offer a way forward — talk to
 * admissions, or head back home — so the user is never stuck.
 */
export function CoursesEmpty() {
  return (
    <Container className="pb-24">
      <div className="flex flex-col items-center gap-6 rounded-card border border-dashed border-line bg-white/[0.03] px-6 py-20 text-center">
        <div className="flex size-16 items-center justify-center rounded-full border border-line bg-white/5">
          {/* Empty-tray glyph */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-8 text-sky" aria-hidden>
            <path d="M3 14h4l1.5 3h7L17 14h4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 14 6.5 6.5A2 2 0 0 1 8.5 5h7a2 2 0 0 1 2 1.5L19 14v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex max-w-md flex-col gap-3">
          <h2 className="text-2xl font-bold text-white">No courses to show right now</h2>
          <p className="text-pretty text-text/70">
            Our course listings are being updated. New programmes for the next
            intake are added here regularly — in the meantime, our admissions team
            can talk you through your options.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={`mailto:${contact.email}`} variant="primary" withArrow>
            Talk to admissions
          </Button>
          <Button href="/" variant="outline">
            Back to home
          </Button>
        </div>
      </div>
    </Container>
  );
}
