import Image from "next/image";
import { Container } from "@/components/ui/Container";

/**
 * Partners strip. The design supplies two partner marks (Ravensbourne, Arts
 * University Plymouth); they are shown on light chips so the logos read clearly
 * against the dark surface.
 */
const partners = [
  { name: "Ravensbourne University London", src: "/images/partners/ravensbourne.png" },
  { name: "Arts University Plymouth", src: "/images/partners/arts-plymouth.png" },
];

export function Partners() {
  return (
    <section id="partners" className="scroll-mt-24 py-16 lg:py-20">
      <Container className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pink">
            In partnership with
          </span>
          <p className="max-w-xl text-pretty text-text/70">
            Degrees awarded and validated with our university partners.
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex h-24 w-56 items-center justify-center rounded-card bg-white/95 px-8"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={200}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
