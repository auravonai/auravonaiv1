"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const pillars = [
  { value: "Ship fast", label: "startup velocity" },
  { value: "AI-native", label: "by design" },
  { value: "Clean code", label: "you can own" },
];

const codeLines = [
  {
    tokens: [
      { t: "const", c: "text-violet-400" }, { t: " app ", c: "text-[#f2f2ff]" },
      { t: "=", c: "text-[#8888a8]" }, { t: " await ", c: "text-violet-400" },
      { t: "auravon", c: "text-sky-400" }, { t: ".build({", c: "text-[#f2f2ff]" },
    ],
  },
  {
    tokens: [
      { t: "  type", c: "text-blue-300" }, { t: ": ", c: "text-[#8888a8]" },
      { t: "'saas-platform'", c: "text-emerald-300" }, { t: ",", c: "text-[#8888a8]" },
    ],
  },
  {
    tokens: [
      { t: "  stack", c: "text-blue-300" }, { t: ": ", c: "text-[#8888a8]" },
      { t: "['Next.js',", c: "text-emerald-300" }, { t: " 'AI',", c: "text-emerald-300" },
      { t: " 'PostgreSQL']", c: "text-emerald-300" }, { t: ",", c: "text-[#8888a8]" },
    ],
  },
  {
    tokens: [
      { t: "  ai", c: "text-blue-300" }, { t: ": ", c: "text-[#8888a8]" },
      { t: "true", c: "text-orange-300" }, { t: ",", c: "text-[#8888a8]" },
    ],
  },
  {
    tokens: [
      { t: "  deploy", c: "text-blue-300" }, { t: ": ", c: "text-[#8888a8]" },
      { t: "'production'", c: "text-emerald-300" },
    ],
  },
  { tokens: [{ t: "});", c: "text-[#f2f2ff]" }] },
  { tokens: [] },
  { tokens: [{ t: "// ✓ Production-ready · type-safe", c: "text-[#48486a]" }] },
  { tokens: [{ t: "// ✓ AI-integrated · clean architecture", c: "text-[#48486a]" }] },
  { tokens: [{ t: "// ✓ Fully documented · yours to maintain", c: "text-[#48486a]" }] },
];

const buildMetrics = [
  { label: "Build", value: "Passing", color: "text-violet-400" },
  { label: "TypeScript", value: "Strict", color: "text-sky-400" },
  { label: "Deploy", value: "Ready", color: "text-emerald-400" },
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
              AI-First Software Studio
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.07 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-7"
          >
            We Build Software
            <br className="hidden sm:block" />
            {" "}That{" "}
            <span className="gradient-text">Actually Ships</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-[#8888a8] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-9"
          >
            We&apos;re a small engineering team that helps founders build web apps,
            AI systems, and SaaS products — from idea to production.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-11"
          >
            <Link href="/contact" className="btn-primary !py-3.5 !px-7 text-[15px]">
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/projects" className="btn-secondary !py-3.5 !px-7 text-[15px]">
              See Our Work
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

        {/* ── Code mockup ── */}
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
                      auravon-build.ts
                    </span>
                  </div>
                  <div className="w-[52px]" />
                </div>

                {/* Code */}
                <div className="px-6 py-5 font-mono text-[12.5px] leading-[1.9]">
                  {codeLines.map((line, i) => (
                    <div key={i}>
                      {line.tokens.length === 0 ? (
                        <span>&nbsp;</span>
                      ) : (
                        line.tokens.map((tok, j) => (
                          <span key={j} className={tok.c}>{tok.t}</span>
                        ))
                      )}
                    </div>
                  ))}
                </div>

                {/* Build status footer */}
                <div className="border-t border-white/[0.06] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-[#48486a] font-medium">Build successful</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-5">
                    {buildMetrics.map(({ label, value, color }) => (
                      <div key={label} className="flex items-center gap-1.5">
                        <CheckCircle2 className={`w-3 h-3 ${color}`} />
                        <span className="text-[11px] text-[#48486a]">{label}</span>
                        <span className={`text-[11px] font-semibold ${color}`}>{value}</span>
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
