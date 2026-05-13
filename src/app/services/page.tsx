import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services — Web, Mobile, AI, SaaS & Automation Development",
  description:
    "Auravon AI offers full-stack web development, mobile app development, AI solutions, SaaS products, UI/UX design, and business automation. Enterprise-grade quality for startups.",
  openGraph: {
    title: "Services | Auravon AI",
    description: "End-to-end digital services: Web, Mobile, AI, SaaS, Design & Automation.",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
