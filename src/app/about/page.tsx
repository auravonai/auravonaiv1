import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About — Our Mission, Vision & Engineering Culture",
  description:
    "Learn about Auravon AI — our mission to make premium software accessible, our AI-first engineering philosophy, and our team culture.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
