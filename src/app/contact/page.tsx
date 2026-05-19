import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Start Your Project with Auravon AI",
  description:
    "Get in touch with Auravon AI. Book a free 30-minute strategy call, send a project brief, or reach us on WhatsApp. We respond within 24 hours.",
  alternates: {
    canonical: "https://auravonai.com/contact",
  },
  openGraph: {
    title: "Contact | Auravon AI",
    description:
      "Start your web, mobile, or AI project with Auravon AI. Free strategy call · fast response · no commitment.",
    url: "https://auravonai.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
