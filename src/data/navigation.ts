import type { Badge, NavLink, SocialLink } from "@/lib/types";

/** Primary navigation shown in the header (and mobile menu). */
export const mainNav: NavLink[] = [
  { label: "About VCAD", href: "#about" },
  { label: "Courses", href: "/courses" },
  { label: "Contact Us", href: "#contact" },
];

/** Footer link columns, matching the design's 4-column layout. */
export const footerColumns: NavLink[][] = [
  [
    { label: "About VCAD", href: "#about" },
    { label: "Career", href: "#career" },
  ],
  [
    { label: "Our Story", href: "#story" },
    { label: "Our Partners", href: "#partners" },
  ],
  [
    { label: "Campuses", href: "#campuses" },
    { label: "Cookies Policy", href: "#cookies" },
  ],
  [
    { label: "Policies", href: "#policies" },
    { label: "FAQs", href: "#faqs" },
  ],
];

/** Social links with icon paths (icons live under /public/images/social). */
export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: "/images/social/facebook.png" },
  { label: "X", href: "#", icon: "/images/social/x.png" },
  { label: "LinkedIn", href: "#", icon: "/images/social/linkedin.png" },
  { label: "Instagram", href: "#", icon: "/images/social/instagram.png" },
  { label: "YouTube", href: "#", icon: "/images/social/youtube.png" },
  { label: "TikTok", href: "#", icon: "/images/social/tiktok.png" },
];

/** Contact details shown in the footer. */
export const contact = {
  email: "enquiry_office@vcad.co.uk",
  phone: "020 3278 9857",
} as const;

/** Accreditation / affiliation badges shown in the footer. */
export const accreditationBadges: Badge[] = [
  { alt: "Advance HE Affiliate Member", src: "/images/badges/advance-he.png" },
  { alt: "Accreditation", src: "/images/badges/badge-2.png" },
  { alt: "Accreditation", src: "/images/badges/badge-3.png" },
];

/** Organisation / site-wide copy used in the footer. */
export const site = {
  name: "Victoria College of Arts and Design",
  copyrightYear: 2025,
} as const;
