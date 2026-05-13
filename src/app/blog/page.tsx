import type { Metadata } from "next";
import BlogPageContent from "@/components/pages/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog — AI, Web Development, SaaS & Startup Tech Insights",
  description:
    "Expert articles on AI development, web development best practices, SaaS products, startup technology, automation, and mobile apps from the Auravon AI team.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
