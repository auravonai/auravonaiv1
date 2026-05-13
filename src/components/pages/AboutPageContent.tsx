"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target, Eye, Heart, Zap, Globe, Brain, Code2,
  ArrowRight, CheckCircle2, Sparkles
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description: "We believe great software shouldn't take years. We move fast, but never cut corners on code quality, security, or performance.",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/15",
  },
  {
    icon: Brain,
    title: "AI-First Thinking",
    description: "Every product we build considers AI from day one — not as an afterthought, but as a core pillar of the architecture.",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/15",
  },
  {
    icon: Globe,
    title: "Built for Scale",
    description: "We architect systems that work at 10 users and 10 million users. Scalability is a default, not a feature request.",
    accentText: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/15",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description: "We treat every client's project as if it were our own startup. Your success is our success — we're in it for the long term.",
    accentText: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/15",
  },
  {
    icon: Code2,
    title: "Engineering Excellence",
    description: "Clean code, proper architecture, comprehensive testing, and thoughtful documentation — standards we hold on every project.",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/15",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    description: "Technology evolves rapidly. We stay at the cutting edge so our clients always have access to the best tools and frameworks.",
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/15",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Auravon AI founded with a vision to democratize premium software for startups." },
  { year: "2020", title: "First AI Product", description: "Built our first AI-powered SaaS product and launched it to 1,000+ users." },
  { year: "2021", title: "10 Clients", description: "Crossed 10 happy clients across India, USA, and UK with zero churn." },
  { year: "2022", title: "Team Expansion", description: "Grew to a team of 8 engineers, designers, and AI specialists." },
  { year: "2023", title: "50 Projects", description: "Delivered 50+ successful projects across web, mobile, AI, and SaaS." },
  { year: "2024", title: "AI-First Pivot", description: "Doubled down on AI-integrated solutions, becoming an AI-first engineering studio." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years of Experience" },
  { value: "8+", label: "Team Members" },
];

export default function AboutPageContent() {
  return (
    <div className="pt-16">
      {/* ── Page Hero ── */}
      <div className="border-b border-white/[0.06] bg-[#090918]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="section-label">About Auravon AI</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-5">
                We Build Software That{" "}
                <span className="gradient-text">Actually Works</span>
              </h1>
              <p className="text-[#8888a8] text-lg leading-relaxed mb-4">
                Auravon AI is a modern software and AI solutions studio that builds scalable websites, SaaS products, AI-powered systems, mobile applications, and automation tools for startups and businesses worldwide.
              </p>
              <p className="text-[#8888a8] leading-relaxed mb-8">
                We combine the speed and agility of a startup with the technical depth of an enterprise engineering team. The result: digital products that are beautiful, performant, and built to last.
              </p>
              <Link href="/contact" className="btn-primary">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="rounded-2xl bg-[#05050f] border border-white/[0.07] p-6 md:p-8 text-center"
                >
                  <div className="text-4xl font-black gradient-text mb-2">{value}</div>
                  <div className="text-[13px] text-[#8888a8]">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <section className="py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection direction="left">
              <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-7 md:p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center mb-5">
                  <Target className="w-5 h-5 text-violet-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                <p className="text-[#8888a8] leading-relaxed mb-6">
                  To make premium, AI-powered software accessible to every startup and business — not just large enterprises with massive budgets. We believe great technology should be democratic.
                </p>
                <ul className="space-y-3">
                  {[
                    "Ship high-quality software faster",
                    "Integrate AI into every product",
                    "Build long-term client partnerships",
                    "Democratize premium engineering",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#c4c4d8]">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-7 md:p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-5">
                  <Eye className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                <p className="text-[#8888a8] leading-relaxed mb-6">
                  To be the world&apos;s most trusted AI-powered software studio — a team that every ambitious startup and growth-focused business turns to when they need technology that genuinely moves the needle.
                </p>
                <ul className="space-y-3">
                  {[
                    "AI in every digital product",
                    "Zero-compromise code quality",
                    "Global client base across 20+ countries",
                    "Category-defining software studio",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[14px] text-[#c4c4d8]">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-14 md:mb-18">
            <span className="section-label">Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4">
              Engineering{" "}
              <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
              The principles that guide every line of code we write and every product we ship.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, description, accentText, accentBg, accentBorder }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.12] transition-colors duration-200"
              >
                <div className={`w-11 h-11 rounded-xl ${accentBg} border ${accentBorder} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${accentText}`} />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">{title}</h3>
                <p className="text-[14px] text-[#8888a8] leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 md:py-28 border-b border-white/[0.06] bg-[#090918]/60">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">History</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-[#8888a8]">From a two-person studio to a full AI software company.</p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-violet-500/20 to-transparent" />
            <div className="space-y-7">
              {milestones.map(({ year, title, description }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5 pl-16 relative"
                >
                  <div className="absolute left-0 top-0 w-[54px] h-[54px] flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-[11px] font-bold border-2 border-[#05050f]">
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-[#090918] border border-white/[0.07] p-4 md:p-5">
                    <div className="text-[11px] font-semibold text-violet-400 mb-1">{year}</div>
                    <h3 className="text-[15px] font-semibold text-white mb-1">{title}</h3>
                    <p className="text-[13px] text-[#8888a8]">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Join Our Client Family</h2>
          <p className="text-[#8888a8] mb-8">Let&apos;s build something that matters together.</p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
