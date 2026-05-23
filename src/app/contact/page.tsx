import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Hire Auravon AI — Start Your AI, SaaS or Web App Project Today",
  description:
    "Ready to build? Contact Auravon AI — an AI development agency for startups and businesses. Book a free 30-minute strategy call, send a project brief, or message us on WhatsApp. We respond within 24 hours.",
  alternates: {
    canonical: "https://auravonai.com/contact",
  },
  openGraph: {
    title: "Hire Auravon AI — Start Your Software Project",
    description:
      "Contact Auravon AI to build your web app, AI system, SaaS product, or mobile app. Free strategy call · fixed pricing · ships fast.",
    url: "https://auravonai.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
