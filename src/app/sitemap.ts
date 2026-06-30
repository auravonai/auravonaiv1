import { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/digital-agency-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://auravonai.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                  priority: 1.0, changeFrequency: "weekly",  lastModified: now },
    { url: `${baseUrl}/services`,    priority: 0.95, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/projects`,    priority: 0.9,  changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/about`,       priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/contact`,     priority: 0.85, changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/payment`,     priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${baseUrl}/blog`,        priority: 0.8,  changeFrequency: "daily",   lastModified: now },
    { url: `${baseUrl}/privacy`,     priority: 0.3,  changeFrequency: "yearly",  lastModified: now },
    { url: `${baseUrl}/terms`,       priority: 0.3,  changeFrequency: "yearly",  lastModified: now },
    { url: `${baseUrl}/refund`,      priority: 0.3,  changeFrequency: "yearly",  lastModified: now },
  ];

  // All service pages (categories + sub-services)
  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  const blogPosts: MetadataRoute.Sitemap = [
    "google-ai-overviews-seo-recovery-2026",
    "ai-agents-for-business-2026",
    "build-ai-chatbot-business-2026",
    "n8n-vs-zapier-make-automation-2026",
    "ai-automations-roi-business-2026",
    "mvp-cost-agency-overcharging-2026",
    "ai-app-development-cost-guide",
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
    priority: 0.6,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [...staticPages, ...servicePages, ...blogPosts];
}
