import type { Metadata } from "next";
import ProjectsPageContent from "@/components/pages/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Projects — Portfolio of AI, Web, Mobile & SaaS Work",
  description:
    "Browse Auravon AI's portfolio of web development, mobile apps, AI solutions, and SaaS products. Real projects with measurable results.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
