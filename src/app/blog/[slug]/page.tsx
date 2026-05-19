import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getRelatedArticles, articles } from "@/lib/articles";
import ArticlePage from "@/components/blog/ArticlePage";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Auravon AI Blog`,
    description: article.excerpt,
    alternates: {
      canonical: `https://auravonai.com/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `https://auravonai.com/blog/${slug}`,
      publishedTime: article.date,
      authors: ["Auravon AI"],
      tags: article.tags,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Organization",
      name: "Auravon AI",
      url: "https://auravonai.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Auravon AI",
      url: "https://auravonai.com",
      logo: {
        "@type": "ImageObject",
        url: "https://auravonai.com/logo.png",
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://auravonai.com/blog/${slug}`,
    },
    keywords: article.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://auravonai.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://auravonai.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://auravonai.com/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArticlePage article={article} related={related} />
    </>
  );
}
