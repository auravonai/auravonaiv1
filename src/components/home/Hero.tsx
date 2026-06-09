"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, ShoppingCart, Search, Share2 } from "lucide-react";

const pillars = [
  { value: "7", label: "Service Categories" },
  { value: "34+", label: "Specialist Services" },
  { value: "Global", label: "Client Base" },
];

const resultCards = [
  {
    icon: Search,
    service: "SEO",
    metric: "+342%",
    label: "Organic Traffic",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    icon: TrendingUp,
    service: "Google Ads",
    metric: "3.8x",
    label: "Return on Ad Spend",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "rgba(59,130,246,0.12)",
  },
  {
    icon: ShoppingCart,
    service: "Ecommerce",
    metric: "+280%",
    label: "Online Revenue",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.12)",
  },
  {
    icon: Share2,
    service: "Social Media",
    metric: "22K+",
    label: "Followers Grown",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    glow: "rgba(236,72,153,0.12)",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen min-w-0 overflow-hidden pt-28 md:pt-32 pb-20 md:pb-28">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 hero-grid" />

      <div
        className="absolute top-0 inset-x-0 h-[520px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(124,58,237,0.13) 0%, rgba(124,58,237,0.04) 45%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-0 inset-x-0 h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">

        {/* ── Headline block ── */}
        <div className="text-center mb-10 md:mb-14">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-7"
          >
            <span className="badge">
              <Sparkles className="w-3 h-3" />
              Auravon AI — Full-Service Digital Agency
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.07 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-7"
          >
            Grow Your Business
            <br className="hidden sm:block" />
            {" "}Online{" "}
            <span className="gradient-text">Faster</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#8888a8] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-9"
          >
            SEO, Google Ads, Meta Ads, website development, ecommerce, social media,
            content marketing, and brand design — every digital service your business
            needs to grow, under one roof.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-11"
          >
            <Link href="/contact" className="btn-primary !py-3.5 !px-7 text-[15px]">
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-secondary !py-3.5 !px-7 text-[15px]">
              Explore Services
            </Link>
          </motion.div>

          {/* Pillars row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex items-center justify-center"
          >
            {pillars.map(({ value, label }, i) => (
              <div key={value} className="flex items-center">
                <div className="px-5 md:px-8 text-center">
                  <div className="text-lg md:text-xl font-bold text-white leading-none mb-1">
                    {value}
                  </div>
                  <div className="text-[11px] text-[#48486a] tracking-wide uppercase">
                    {label}
                  </div>
                </div>
                {i < pillars.length - 1 && (
                  <div className="h-8 w-px bg-white/[0.07]" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Results cards mockup ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="rounded-[1.125rem] p-px bg-gradient-to-b from-white/[0.09] to-white/[0.03] shadow-[0_40px_80px_rgba(0,0,0,0.55),0_0_60px_rgba(124,58,237,0.07)]">
              <div className="rounded-2xl bg-[#07071a] overflow-hidden">

                {/* Window chrome */}
                <div className="flex items-center px-5 py-3.5 border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <span className="text-[11px] text-[#48486a] font-mono">
                      campaign-results.dashboard
                    </span>
                  </div>
                  <div className="w-[52px]" />
                </div>

                {/* Results grid */}
                <div className="p-5 grid grid-cols-2 gap-3">
                  {resultCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.service}
                        className={`rounded-xl p-4 border ${card.border} ${card.bg} relative overflow-hidden`}
                        style={{
                          background: `radial-gradient(ellipse 80% 80% at 0% 0%, ${card.glow}, transparent 60%)`,
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center ${card.bg} border ${card.border}`}>
                            <Icon className={`w-3 h-3 ${card.color}`} />
                          </div>
                          <span className="text-[11px] font-medium text-[#8888a8]">
                            {card.service}
                          </span>
                        </div>
                        <div className={`text-2xl font-bold mb-0.5 ${card.color}`}>
                          {card.metric}
                        </div>
                        <div className="text-[11px] text-[#48486a]">
                          {card.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="border-t border-white/[0.06] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-[#48486a] font-medium">
                      Live client results
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-5">
                    {[
                      { label: "No Lock-in", color: "text-violet-400" },
                      { label: "Free Audit", color: "text-sky-400" },
                      { label: "Global Clients", color: "text-emerald-400" },
                    ].map(({ label, color }) => (
                      <div key={label} className="flex items-center gap-1.5">
                        <CheckCircle2 className={`w-3 h-3 ${color}`} />
                        <span className={`text-[11px] font-semibold ${color}`}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
