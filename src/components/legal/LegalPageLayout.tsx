"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowLeft, ChevronRight } from "lucide-react";

interface Section { id: string; title: string; }
interface Props {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function LegalPageLayout({ badge, title, subtitle, lastUpdated, sections, children }: Props) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pt-16">
      {/* ── Hero strip ── */}
      <div className="border-b border-white/[0.06] bg-[#090918]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-[#8888a8] hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
            <span className="block section-label mb-3">{badge}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">{title}</h1>
            <p className="text-[#8888a8] text-base md:text-lg max-w-2xl leading-relaxed mb-5">{subtitle}</p>
            <div className="flex items-center gap-2 text-[13px] text-[#48486a]">
              <Calendar className="w-3.5 h-3.5" />
              Last updated: {lastUpdated}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-[240px_1fr] gap-12 items-start">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block sticky top-24">
            <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#48486a] mb-3">
                Contents
              </p>
              <nav className="space-y-0.5">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] text-[#8888a8] hover:text-white hover:bg-white/[0.04] transition-all text-left group"
                  >
                    <ChevronRight className="w-3 h-3 text-violet-500/50 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.title}
                  </button>
                ))}
              </nav>
            </div>
            <div className="mt-3 p-4 rounded-2xl bg-[#090918] border border-white/[0.07]">
              <p className="text-[12px] text-[#8888a8] mb-2">Questions about this policy?</p>
              <Link href="/contact" className="text-[13px] text-violet-400 hover:text-violet-300 font-medium transition-colors">
                Contact us →
              </Link>
            </div>
          </aside>

          {/* Prose */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="prose-legal min-w-0"
          >
            {children}
          </motion.article>
        </div>
      </div>
    </div>
  );
}
