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
    openGraph: {
      title: article.title,
      description: article.excerpt,
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

  return <ArticlePage article={article} related={related} />;
}
