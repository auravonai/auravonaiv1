import type { Metadata } from "next";
import BlogPageContent from "@/components/pages/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog — Engineering & AI Insights from Auravon AI",
  description:
    "Practical articles on AI architecture, Next.js performance, SaaS development, PostgreSQL, RAG systems, and startup engineering from the Auravon AI team.",
  openGraph: {
    title: "Blog | Auravon AI",
    description:
      "Engineering and AI insights for founders and product teams. Real experience, practical code.",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
