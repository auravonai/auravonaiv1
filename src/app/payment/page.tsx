import type { Metadata } from "next";
import PaymentPageContent from "@/components/pages/PaymentPageContent";

export const metadata: Metadata = {
  title: "Pricing & Payment — Auravon AI Engineering Studio",
  description:
    "Clear, fixed-scope pricing for web apps, AI systems, SaaS products, and mobile apps. Secure checkout via Razorpay. Full code ownership. No hidden fees.",
  openGraph: {
    title: "Pricing | Auravon AI",
    description:
      "High-performance software built at transparent, fixed prices. Web, mobile, AI, and SaaS packages — secured via Razorpay.",
  },
};

export default function PaymentPage() {
  return <PaymentPageContent />;
}
