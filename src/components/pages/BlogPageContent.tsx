"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Clock, ArrowRight, TrendingUp, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { articles } from "@/lib/articles";

const categories = ["All", "AI Solutions", "Web Development", "SaaS", "Startup Tech", "Automation", "Mobile Apps"];

const accentMap: Record<string, { text: string; bg: string; border: string }> = {
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/15" },
  blue:   { text: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/15" },
  cyan:   { text: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/15" },
  emerald:{ text: "text-emerald-400",bg: "bg-emerald-500/10",border: "border-emerald-500/15" },
  orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/15" },
  pink:   { text: "text-pink-400",   bg: "bg-pink-500/10",   border: "border-pink-500/15" },
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/15" },
};

export default function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = articles.filter((p) => p.featured);

  return (
    <div className="pt-16">
      {/* ── Page Hero ── */}
      <div className="border-b border-white/[0.06] bg-[#090918]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-label">Insights & Tutorials</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-5">
              Engineering &{" "}
              <span className="gradient-text">AI Insights</span>
            </h1>
            <p className="text-[#8888a8] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Practical articles on AI development, modern web engineering, and building products that hold up in production.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#05050f] border border-white/[0.07] text-white text-[14px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Featured Articles ── */}
      {!searchQuery && activeCategory === "All" && (
        <section className="py-10 border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-4 h-4 text-violet-400" />
              <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a]">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {featured.map((post, i) => {
                const ac = accentMap[post.accent] || accentMap.violet;
                return (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-200 h-full"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium ${ac.text} ${ac.bg} ${ac.border}`}>
                          {post.category}
                        </span>
                        <span className="text-[12px] text-[#48486a] flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                        <span className="text-[12px] text-[#48486a] flex items-center gap-1 ml-auto">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                      </div>
                      <h2 className="text-[17px] font-bold text-white mb-2 leading-snug group-hover:text-[#e8e8ff] transition-colors flex-1">
                        {post.title}
                      </h2>
                      <p className="text-[13px] text-[#8888a8] leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-[11px] text-[#8888a8] bg-[#0d0d1e] border border-white/[0.06] rounded-lg">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className={`inline-flex items-center gap-1 text-[13px] font-medium ${ac.text}`}>
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Filter Bar ── */}
      <div className="sticky top-16 z-30 bg-[#05050f]/90 backdrop-blur-xl border-b border-white/[0.06] py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white"
                    : "bg-[#090918] border border-white/[0.07] text-[#8888a8] hover:text-white hover:border-white/[0.12]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Articles Grid ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatePresence mode="popLayout">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post, i) => {
                const ac = accentMap[post.accent] || accentMap.violet;
                return (
                  <motion.div
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col rounded-2xl bg-[#090918] border border-white/[0.07] p-5 md:p-6 hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-200 h-full"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-0.5 rounded-lg border text-[11px] font-medium ${ac.text} ${ac.bg} ${ac.border}`}>
                          {post.category}
                        </span>
                        <span className="text-[11px] text-[#48486a] flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-[14px] font-semibold text-white mb-1.5 leading-snug group-hover:text-[#e8e8ff] transition-colors flex-1">
                        {post.title}
                      </h3>
                      <p className="text-[12px] text-[#48486a] flex items-center gap-1 mb-3">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </p>
                      <p className="text-[13px] text-[#8888a8] leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-[11px] text-[#48486a] bg-[#0d0d1e] border border-white/[0.06] rounded-lg">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className={`text-[12px] font-medium ${ac.text} flex items-center gap-1`}>
                          Read <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#8888a8]">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-16 md:py-20 border-t border-white/[0.06]">
        <AnimatedSection className="max-w-lg mx-auto px-6 text-center">
          <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-8">
            <span className="section-label">Newsletter</span>
            <h2 className="text-2xl font-bold tracking-tight mt-4 mb-2">
              Get Practical Engineering Insights
            </h2>
            <p className="text-[13px] text-[#8888a8] mb-6 leading-relaxed">
              Articles like these, delivered to your inbox. No filler, no news roundups — just engineering practice you can use.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#05050f] border border-white/[0.07] text-white text-[13px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 transition-all"
              />
              <button className="btn-primary shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
