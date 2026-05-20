import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About Auravon AI — AI Software Development Studio for Startups",
  description:
    "Auravon AI is an AI-first software development studio helping founders and product teams build web apps, SaaS platforms, mobile products, and AI-powered tools — properly, from day one.",
  alternates: {
    canonical: "https://auravonai.com/about",
  },
  openGraph: {
    title: "About Auravon AI — AI Software Development Studio",
    description:
      "We help startups and businesses build web apps, SaaS products, mobile apps, and AI-powered tools. Small team, production-grade engineering.",
    url: "https://auravonai.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
