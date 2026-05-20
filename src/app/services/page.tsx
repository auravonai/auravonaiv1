import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "AI Development Services — Web Apps, SaaS, Mobile & Automation | Auravon AI",
  description:
    "Hire Auravon AI for custom AI development services: web apps, SaaS products, mobile apps, AI chatbot integration, automation systems, and internal tools. Startup-focused, production-grade engineering.",
  alternates: {
    canonical: "https://auravonai.com/services",
  },
  openGraph: {
    title: "AI Development Services | Auravon AI",
    description:
      "Custom web apps, SaaS, mobile products, AI integrations, and automation — built by engineers who ship to production.",
    url: "https://auravonai.com/services",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: servicesData.flatMap((s) =>
    s.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesPageContent />
    </>
  );
}
