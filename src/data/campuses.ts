import type { Campus } from "@/lib/types";

/**
 * VCAD campuses shown in the homepage carousel. The design labels the centred
 * slide "Canary Wharf Campus"; the neighbouring campuses reuse the supplied
 * left/right imagery with plausible London locations (placeholder labelling
 * noted in the README).
 */
export const campuses: Campus[] = [
  {
    slug: "canary-wharf",
    name: "Canary Wharf Campus",
    location: "London E14",
    image: "/images/campus-center.webp",
    href: "#canary-wharf",
  },
  {
    slug: "borough",
    name: "Borough Campus",
    location: "London SE1",
    image: "/images/campus-left.webp",
    href: "#borough",
  },
  {
    slug: "whitechapel",
    name: "Whitechapel Campus",
    location: "London E1",
    image: "/images/campus-right.webp",
    href: "#whitechapel",
  },
];
