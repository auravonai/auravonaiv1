import type { Metadata } from "next";
import PaymentPageContent from "@/components/pages/PaymentPageContent";

export const metadata: Metadata = {
  title: "Pricing & Payment — Transparent Project Pricing",
  description:
    "View Auravon AI's transparent pricing for web development, mobile apps, AI solutions, and more. Secure payment via Razorpay. Book your project today.",
};

export default function PaymentPage() {
  return <PaymentPageContent />;
}
