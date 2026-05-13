import type { Metadata } from "next";
import PrivacyContent from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — How We Collect, Use & Protect Your Data",
  description:
    "Auravon AI's Privacy Policy explains how we collect, use, and protect your personal information. We respect user privacy and safeguard all customer data.",
  alternates: { canonical: "https://auravonai.com/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
