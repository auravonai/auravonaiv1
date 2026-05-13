import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Book a Free Consultation",
  description:
    "Get in touch with Auravon AI. Book a free 30-minute strategy consultation, send us a project inquiry, or reach us on WhatsApp. Fast response guaranteed.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
