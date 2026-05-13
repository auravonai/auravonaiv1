import type { Metadata } from "next";
import RefundContent from "@/components/legal/RefundContent";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — Project & Service Refunds",
  description:
    "Auravon AI's Refund and Cancellation Policy. Due to the digital and customized nature of our services, refunds are subject to project stage and work completed.",
  alternates: { canonical: "https://auravonai.com/refund" },
  robots: { index: true, follow: true },
};

export default function RefundPage() {
  return <RefundContent />;
}
