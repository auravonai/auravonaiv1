import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services — Web Apps, AI Integration & Mobile Development",
  description:
    "Auravon AI builds web applications, mobile apps, AI integrations, custom internal tools, UI/UX design, and automation systems. Startup-focused, production-grade engineering.",
  alternates: {
    canonical: "https://auravonai.com/services",
  },
  openGraph: {
    title: "Services | Auravon AI",
    description:
      "Web apps, mobile products, AI integrations, and internal tools — built by a small engineering team that ships.",
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
