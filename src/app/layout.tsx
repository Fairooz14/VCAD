import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

// Inter is the design's typeface throughout. Loaded as a variable font and
// exposed as --font-inter, which globals.css maps onto Tailwind's font-sans.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vcad.example"),
  title: {
    default: "Victoria College of Arts and Design",
    template: "%s — VCAD",
  },
  description:
    "Victoria College of Arts and Design (VCAD) — creative, media and business education across London. Explore our courses in fashion, design, marketing and business.",
  openGraph: {
    title: "Victoria College of Arts and Design",
    description:
      "Creative, media and business education across London. Explore our courses.",
    type: "website",
  },
};

// Header now lives per-section instead of here: `app/(site)/layout.tsx` renders
// the homepage Header, and `app/courses/layout.tsx` renders Courses_header —
// so each section gets its own header without one stomping on the other.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen antialiased">
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
