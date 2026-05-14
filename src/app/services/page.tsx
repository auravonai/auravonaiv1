import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services — Web Apps, AI Integration & Mobile Development",
  description:
    "Auravon AI builds web applications, mobile apps, AI integrations, custom internal tools, UI/UX design, and automation systems. Startup-focused, production-grade engineering.",
  openGraph: {
    title: "Services | Auravon AI",
    description:
      "Web apps, mobile products, AI integrations, and internal tools — built by a small engineering team that ships.",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
