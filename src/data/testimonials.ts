import type { Testimonial } from "@/lib/types";

/**
 * Student testimonials for the homepage carousel. The design supplies one
 * testimonial (Daniel Karen) and one portrait asset; additional entries are
 * seeded in-voice and reuse the single supplied portrait so the carousel is
 * meaningful to demonstrate (placeholder imagery noted in the README).
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our team at Victoria College of Arts and Design is passionate about creating innovative projects and generating new ideas. We work with a variety of experts and esteemed companies using a collaborative approach. Located in London's Design District, we have valuable connections within our industry.",
    author: "Daniel Karen",
    role: "Student of VCAD Borough campus",
    image: "/images/testimonial-daniel.webp",
  },
  {
    quote:
      "The studios never really close. There is always someone making something, and the tutors treat you like a practising designer from day one. The live briefs pushed my portfolio further than I thought possible in a single year.",
    author: "Amara Okafor",
    role: "Student of VCAD Canary Wharf campus",
    image: "/images/testimonial-daniel.webp",
  },
  {
    quote:
      "Coming to VCAD connected me with real studios across London. I graduated with a body of work I was proud of and a network that helped me land my first role in branding within weeks.",
    author: "Priya Sharma",
    role: "Graduate, BA (Hons) Graphic Design",
    image: "/images/testimonial-daniel.webp",
  },
];
