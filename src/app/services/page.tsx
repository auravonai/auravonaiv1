import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Hire an AI Development Agency — Web, SaaS, Mobile & AI Services | Auravon AI",
  description:
    "Auravon AI is an AI development agency offering custom web apps, SaaS products, mobile app development, AI chatbot services, business automation, and internal tools. Fixed-price. Startup-focused. Ships fast.",
  alternates: {
    canonical: "https://auravonai.com/services",
  },
  openGraph: {
    title: "AI Development Services — Web, SaaS, Mobile & Automation | Auravon AI",
    description:
      "Hire Auravon AI for custom software development: web apps, SaaS, mobile, AI integrations, and automation — fixed-price, production-grade engineering for startups and businesses.",
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
