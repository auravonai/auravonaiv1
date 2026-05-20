import type { Metadata } from "next";
import ProjectsPageContent from "@/components/pages/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Software Development Portfolio — AI, Web Apps & Mobile | Auravon AI",
  description:
    "See what Auravon AI has built: custom web applications, AI-powered SaaS products, mobile apps, and automation systems for startups and businesses.",
  alternates: {
    canonical: "https://auravonai.com/projects",
  },
  openGraph: {
    title: "Software Development Portfolio | Auravon AI",
    description:
      "Real projects — AI systems, web apps, mobile products, and automation tools built for founders and businesses.",
    url: "https://auravonai.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
