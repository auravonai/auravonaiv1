import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About — Engineering Studio",
  description:
    "Auravon AI is a focused engineering studio helping founders and product teams build web apps, SaaS platforms, mobile products, and internal tools — properly, the first time.",
  alternates: {
    canonical: "https://auravonai.com/about",
  },
  openGraph: {
    title: "About | Auravon AI",
    description:
      "A small, focused engineering studio. We build web apps, SaaS products, mobile apps, and internal tools for founders and engineering teams.",
    url: "https://auravonai.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
