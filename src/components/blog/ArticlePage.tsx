"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Copy,
  Check,
  ArrowRight,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import type { Article, ContentBlock } from "@/lib/articles";

const accentMap: Record<string, { text: string; bg: string; border: string; bar: string; glow: string }> = {
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", bar: "bg-violet-500", glow: "shadow-violet-500/10" },
  blue:   { text: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20",   bar: "bg-blue-500",   glow: "shadow-blue-500/10" },
  cyan:   { text: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20",   bar: "bg-cyan-500",   glow: "shadow-cyan-500/10" },
  emerald:{ text: "text-emerald-400",bg: "bg-emerald-500/10",border: "border-emerald-500/20",bar: "bg-emerald-500",glow: "shadow-emerald-500/10" },
  orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20", bar: "bg-orange-500", glow: "shadow-orange-500/10" },
  pink:   { text: "text-pink-400",   bg: "bg-pink-500/10",   border: "border-pink-500/20",   bar: "bg-pink-500",   glow: "shadow-pink-500/10" },
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20", bar: "bg-indigo-500", glow: "shadow-indigo-500/10" },
  rose:   { text: "text-rose-400",   bg: "bg-rose-500/10",   border: "border-rose-500/20",   bar: "bg-rose-500",   glow: "shadow-rose-500/10" },
};

// ── Reading Progress Bar ──────────────────────────────────────────────────────
function ProgressBar({ accent }: { accent: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const ac = accentMap[accent] || accentMap.violet;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className={`fixed top-0 left-0 right-0 h-[3px] z-50 ${ac.bar}`}
    />
  );
}

// ── Code Block with Copy ──────────────────────────────────────────────────────
function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="my-7 rounded-xl overflow-hidden border border-white/[0.08] bg-[#06060f] shadow-xl">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-[#09091a]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] font-mono text-[#48486a] uppercase tracking-wider ml-1">{lang}</span>
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-[11px] text-[#48486a] hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed font-mono text-[#c9d1d9]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────
type TocItem = { id: string; text: string; level: 2 | 3 };

function TableOfContents({
  items,
  activeId,
  accent,
}: {
  items: TocItem[];
  activeId: string;
  accent: string;
}) {
  const ac = accentMap[accent] || accentMap.violet;
  if (items.length === 0) return null;

  return (
    <nav className="hidden xl:block sticky top-28 self-start w-60 shrink-0">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">
        On this page
      </p>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? "12px" : "0" }}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`flex items-center gap-2 text-[12px] leading-relaxed py-1.5 px-2 rounded-lg transition-all ${
                activeId === item.id
                  ? `${ac.text} font-medium ${ac.bg}`
                  : "text-[#48486a] hover:text-[#9898b8] hover:bg-white/[0.03]"
              }`}
            >
              {activeId === item.id && (
                <span className={`w-1 h-1 rounded-full ${ac.bar} shrink-0`} />
              )}
              <span className={activeId === item.id ? "" : "pl-3"}>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ── Content Block Renderer ────────────────────────────────────────────────────
function BlockRenderer({ block, accent }: { block: ContentBlock; accent: string }) {
  const ac = accentMap[accent] || accentMap.violet;

  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[15.5px] leading-[1.85] text-[#b8b8d0] mb-5">{block.text}</p>
      );

    case "heading":
      if (block.level === 2) {
        return (
          <h2
            id={block.id}
            className="text-[22px] font-bold text-white mt-12 mb-4 scroll-mt-28 pb-3 border-b border-white/[0.06]"
          >
            {block.text}
          </h2>
        );
      }
      return (
        <h3
          id={block.id}
          className="text-[17px] font-semibold text-white mt-9 mb-3 scroll-mt-28"
        >
          {block.text}
        </h3>
      );

    case "code":
      return <CodeBlock lang={block.lang} code={block.code} />;

    case "note":
      return (
        <div className={`my-7 px-5 py-4 rounded-xl ${ac.bg} border ${ac.border} relative overflow-hidden`}>
          <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${ac.bar}`} />
          <p className="text-[13.5px] leading-relaxed text-[#c8c8e8] pl-1">{block.text}</p>
        </div>
      );

    case "list":
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed text-[#b8b8d0]">
              <ChevronRight className={`w-4 h-4 ${ac.text} shrink-0 mt-0.5`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote className={`my-8 pl-6 border-l-2 ${ac.border} py-1`}>
          <p className="text-[16px] leading-relaxed text-[#d0d0e8] italic mb-3">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.source && (
            <cite className={`text-[12px] ${ac.text} not-italic font-medium`}>— {block.source}</cite>
          )}
        </blockquote>
      );

    default:
      return null;
  }
}

// ── Related Article Card ──────────────────────────────────────────────────────
function RelatedCard({ article }: { article: Article }) {
  const ac = accentMap[article.accent] || accentMap.violet;
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col rounded-xl bg-[#090918] border border-white/[0.07] overflow-hidden hover:border-white/[0.14] transition-all duration-200 hover:-translate-y-0.5"
    >
      <div className="relative h-32 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090918]/70 to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-0.5 rounded-lg border text-[10px] font-medium ${ac.text} ${ac.bg} ${ac.border}`}>
            {article.category}
          </span>
          <span className="text-[11px] text-[#48486a] flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
        </div>
        <h3 className="text-[13px] font-semibold text-white leading-snug group-hover:text-[#e8e8ff] transition-colors mb-3 line-clamp-2">
          {article.title}
        </h3>
        <div className={`flex items-center gap-1 text-[12px] font-medium ${ac.text}`}>
          Read article <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </Link>
  );
}

// ── Main ArticlePage ──────────────────────────────────────────────────────────
export default function ArticlePage({
  article,
  related,
}: {
  article: Article;
  related: Article[];
}) {
  const ac = accentMap[article.accent] || accentMap.violet;
  const contentRef = useRef<HTMLDivElement>(null);

  const tocItems: TocItem[] = article.content
    .filter((b): b is Extract<ContentBlock, { type: "heading" }> => b.type === "heading")
    .map((b) => ({ id: b.id, text: b.text, level: b.level }));

  const [activeId, setActiveId] = useState(tocItems[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [tocItems]);

  return (
    <>
      <ProgressBar accent={article.accent} />

      <div className="pt-16 min-h-screen bg-[#030308]">
        {/* ── Article Header ── */}
        <div className="border-b border-white/[0.06] bg-[#090918]">
          <div className="max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-14">
            {/* Back nav */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#48486a] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Blog
            </Link>

            {/* Category + read time */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-lg border text-[12px] font-medium ${ac.text} ${ac.bg} ${ac.border}`}>
                {article.category}
              </span>
              <span className="text-[13px] text-[#48486a] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="text-[13px] text-[#48486a] flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight mb-4"
            >
              {article.title}
            </motion.h1>

            {/* Excerpt */}
            <p className="text-[16px] text-[#8888a8] leading-relaxed mb-6 max-w-3xl">
              {article.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[11px] text-[#8888a8] bg-[#0d0d1e] border border-white/[0.06] rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Hero Image ── */}
        <div className="max-w-4xl mx-auto px-6 md:px-8 pt-8">
          <div className={`relative w-full h-[240px] md:h-[380px] rounded-2xl overflow-hidden shadow-2xl ${ac.glow}`}>
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030308]/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* ── Body: TOC + Content ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 flex gap-16 items-start">
          {/* Content */}
          <article ref={contentRef} className="flex-1 min-w-0 max-w-3xl mx-auto xl:mx-0">
            {article.content.map((block, i) => (
              <BlockRenderer key={i} block={block} accent={article.accent} />
            ))}

            {/* Author card */}
            <div className="mt-14 pt-8 border-t border-white/[0.06]">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${ac.bg} border ${ac.border} flex items-center justify-center shrink-0`}>
                  <BookOpen className={`w-5 h-5 ${ac.text}`} />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white">{article.author}</p>
                  <p className="text-[12px] text-[#48486a]">{article.authorRole}</p>
                </div>
              </div>
            </div>
          </article>

          {/* Sticky TOC */}
          <TableOfContents items={tocItems} activeId={activeId} accent={article.accent} />
        </div>

        {/* ── Related Articles ── */}
        {related.length > 0 && (
          <section className="border-t border-white/[0.06] py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((a) => (
                  <RelatedCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Newsletter ── */}
        <section className="border-t border-white/[0.06] py-12 md:py-16">
          <div className="max-w-lg mx-auto px-6 text-center">
            <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-8">
              <span className="section-label">Newsletter</span>
              <h2 className="text-xl font-bold tracking-tight mt-4 mb-2">
                Get Practical Engineering Insights
              </h2>
              <p className="text-[13px] text-[#8888a8] mb-6 leading-relaxed">
                Articles like this one, delivered to your inbox. No filler, no
                news roundups — just engineering practice.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#05050f] border border-white/[0.07] text-white text-[13px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 transition-all"
                />
                <button className="btn-primary shrink-0">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
