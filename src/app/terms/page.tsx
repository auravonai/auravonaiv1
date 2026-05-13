import type { Metadata } from "next";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions — Service Agreement & Usage Policy",
  description:
    "Read Auravon AI's Terms & Conditions governing our software development and digital services. All project discussions, timelines, and deliverables are finalized before development begins.",
  alternates: { canonical: "https://auravonai.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <TermsContent />;
}
