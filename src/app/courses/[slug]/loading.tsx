import { Container } from "@/components/ui/Container";

/**
 * Loading UI for a course details page — a skeleton that matches the details
 * layout so there's no shift when content arrives. This nested boundary also
 * stops the list skeleton (`courses/(list)/loading.tsx`) from cascading down;
 * the (list) route group already scopes that away, and this keeps it explicit.
 *
 * The detail pages are static (SSG) today, so this rarely shows — but it makes
 * the loading state correct for free once a real, latency-bearing backend is
 * wired in. Per Next's docs, an unknown slug streams a 200 shell and then swaps
 * in the not-found UI (with an injected `noindex`); a hard 404 status would need
 * an existence check before streaming (see README, "What I'd do next").
 */
function Block({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded-card border border-line bg-white/5 ${className}`} />;
}

export default function CourseDetailLoading() {
  return (
    <>
      <section className="relative pt-28 pb-10 sm:pt-32 lg:pt-40" aria-hidden>
        <Container className="flex flex-col gap-6">
          <Block className="h-4 w-56 rounded-chip border-0" />
          <Block className="h-4 w-32 rounded-chip border-0" />
          <Block className="h-12 w-80 max-w-full rounded-lg border-0" />
          <Block className="h-4 w-full max-w-2xl rounded-chip border-0" />
          <div className="flex gap-2">
            <Block className="h-8 w-28 rounded-pill border-0" />
            <Block className="h-8 w-24 rounded-pill border-0" />
            <Block className="h-8 w-24 rounded-pill border-0" />
          </div>
        </Container>
      </section>

      <Container>
        <Block className="aspect-[16/9] sm:aspect-[21/9]" />
      </Container>

      <Container className="py-14 lg:py-20" aria-hidden>
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-14">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 border-b border-line pb-3">
              <Block className="h-6 w-24 rounded-chip border-0" />
              <Block className="h-6 w-32 rounded-chip border-0" />
              <Block className="h-6 w-28 rounded-chip border-0" />
            </div>
            <Block className="h-4 w-full rounded-chip border-0" />
            <Block className="h-4 w-11/12 rounded-chip border-0" />
            <Block className="h-4 w-4/5 rounded-chip border-0" />
            <Block className="mt-4 h-40 w-full" />
          </div>
          <Block className="h-[420px]" />
        </div>
      </Container>
    </>
  );
}
