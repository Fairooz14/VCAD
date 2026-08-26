import { Container } from "@/components/ui/Container";

/**
 * Loading state for the courses page. Rather than a generic spinner, the
 * skeleton mirrors the asymmetric grid's exact shape (feature + two stacked +
 * expanded), so when real content arrives there is no layout shift. Used by the
 * route-level `courses/loading.tsx` and shown during the slow data simulation.
 */
function Block({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-card border border-line bg-white/5 ${className}`} />;
}

export function CoursesSkeleton() {
  return (
    <Container className="pb-24" aria-hidden>
      <div className="flex flex-col gap-6">
        <div className="grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
          <Block className="min-h-[420px] lg:col-span-2 lg:row-span-2 lg:min-h-[540px]" />
          <Block className="min-h-[220px]" />
          <Block className="min-h-[220px]" />
        </div>
        <Block className="min-h-[280px] sm:min-h-[240px]" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Block className="min-h-[300px]" />
          <Block className="min-h-[300px]" />
          <Block className="min-h-[300px]" />
        </div>
      </div>
    </Container>
  );
}
