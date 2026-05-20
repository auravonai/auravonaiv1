import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://auravonai.com";
  const now = new Date();

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/projects`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/payment`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "daily" as const },
    { url: `${baseUrl}/privacy`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/refund`, priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const blogPosts = [
    "vibe-coding-ai-development-2025",
    "building-ai-powered-saas-2025",
    "nextjs-performance-optimization",
    "rag-chatbot-langchain-guide",
    "saas-pricing-strategy-startups",
    "whatsapp-automation-business",
    "react-native-vs-flutter-2025",
    "startup-tech-stack-2025",
    "postgresql-performance-tips",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages.map((page) => ({ ...page, lastModified: now })),
    ...blogPosts,
  ];
}
