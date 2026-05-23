import type { Metadata } from "next";
import ProjectsPageContent from "@/components/pages/ProjectsPageContent";

export const metadata: Metadata = {
  title: "AI & Software Development Portfolio — Real Projects Built by Auravon AI",
  description:
    "See what Auravon AI has built: AI CRM dashboards, SaaS analytics platforms, AI support chatbots, e-commerce rebuilds, HR management systems, and mobile apps — all shipped to production for real businesses.",
  alternates: {
    canonical: "https://auravonai.com/projects",
  },
  openGraph: {
    title: "AI & Software Projects — Portfolio | Auravon AI",
    description:
      "Real shipped projects from Auravon AI: AI-powered SaaS, custom web apps, mobile products, and automation systems built for startups and businesses.",
    url: "https://auravonai.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
