import type { Metadata } from "next";
import BlogPageContent from "@/components/pages/BlogPageContent";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog — Engineering & AI Insights from Auravon AI",
  description:
    "Practical articles on AI architecture, Next.js performance, SaaS development, PostgreSQL, RAG systems, and startup engineering from the Auravon AI team.",
  alternates: {
    canonical: "https://auravonai.com/blog",
  },
  openGraph: {
    title: "Blog | Auravon AI",
    description:
      "Engineering and AI insights for founders and product teams. Real experience, practical code.",
    url: "https://auravonai.com/blog",
  },
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Auravon AI Blog",
  description: "Engineering and AI insights for founders and product teams.",
  url: "https://auravonai.com/blog",
  itemListElement: articles.map((article, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://auravonai.com/blog/${article.slug}`,
    name: article.title,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogPageContent />
    </>
  );
}
