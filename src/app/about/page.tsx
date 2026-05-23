import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About Auravon AI — AI Development Agency for Startups & Businesses",
  description:
    "Auravon AI is an AI development agency that helps startups and businesses build web apps, SaaS products, mobile apps, AI chatbots, and automation systems. No retainers. No overhead. Just engineering that ships.",
  alternates: {
    canonical: "https://auravonai.com/about",
  },
  openGraph: {
    title: "About Auravon AI — AI Development Agency for Startups",
    description:
      "Auravon AI is a specialist AI software agency helping startups build web apps, SaaS products, mobile apps, and AI-powered tools. Small team, fast timelines, production-grade code.",
    url: "https://auravonai.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
