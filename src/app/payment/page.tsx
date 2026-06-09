import type { Metadata } from "next";
import PaymentPageContent from "@/components/pages/PaymentPageContent";

export const metadata: Metadata = {
  title: "Request a Custom Proposal — Get a Free Quote | Auravon AI",
  description:
    "Request a custom proposal from Auravon AI. No fixed packages — every digital marketing, web development, or ecommerce engagement is scoped to your goals. Free consultation included.",
  openGraph: {
    title: "Request a Proposal | Auravon AI",
    description:
      "Custom proposals tailored to your business goals. Tell us what you need and we'll put together a plan — at no obligation.",
  },
};

export default function PaymentPage() {
  return <PaymentPageContent />;
}
