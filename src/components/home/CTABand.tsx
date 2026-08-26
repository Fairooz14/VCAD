import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contact } from "@/data/navigation";

/**
 * Closing call-to-action band. Serves as the target for the header "Apply Now"
 * (#apply) and the nav "Contact Us" (#contact) links, and ties the page off
 * with a clear next step before the footer.
 */
export function CTABand() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
      <span id="apply" className="block -translate-y-24" aria-hidden />
      <Container className="relative overflow-hidden rounded-card border border-line bg-gradient-to-br from-card via-navy to-plum/60 px-6 py-14 sm:px-12 lg:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink/30 blur-[120px]"
        />
        <div className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
            Ready to start your creative journey?
          </h2>
          <p className="max-w-xl text-pretty text-base text-text/80 sm:text-lg">
            Book an open day, talk to our admissions team, or apply now for
            September entry. We'd love to hear from you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/courses" variant="primary" size="lg" withArrow>
              Browse courses
            </Button>
            <Button href={`mailto:${contact.email}`} variant="light" size="lg">
              Contact admissions
            </Button>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-text/70">
            <a href={`mailto:${contact.email}`} className="transition hover:text-white">
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="transition hover:text-white"
            >
              {contact.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
