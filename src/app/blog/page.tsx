import type { Metadata } from "next";
import BlogPageContent from "@/components/pages/BlogPageContent";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "AI Development Blog — SaaS, Startup Software & AI Guides | Auravon AI",
  description:
    "In-depth guides on AI app development cost, SaaS architecture, MVP building, Next.js performance, RAG chatbots, business automation, and startup tech stack — written by the Auravon AI engineering team.",
  alternates: {
    canonical: "https://auravonai.com/blog",
  },
  openGraph: {
    title: "AI Development Blog — Startup Software & AI Guides | Auravon AI",
    description:
      "Practical guides on building AI apps, SaaS products, and MVPs. Real engineering insights from Auravon AI for founders and product teams.",
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
