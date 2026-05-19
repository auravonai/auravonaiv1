import type { Metadata } from "next";
import ProjectsPageContent from "@/components/pages/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects — Engineering Portfolio",
  description:
    "A selection of web apps, mobile products, AI integrations, and internal tools built by Auravon AI for founders and engineering teams.",
  alternates: {
    canonical: "https://auravonai.com/projects",
  },
  openGraph: {
    title: "Projects | Auravon AI",
    description:
      "Real software built for real business problems — web apps, mobile products, AI systems, and internal tools.",
    url: "https://auravonai.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
