"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target, Eye, Heart, Zap, Globe, Code2, Layers,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const principles = [
  {
    icon: Code2,
    title: "Maintainability First",
    description:
      "Fast delivery is worth nothing if the codebase is unmanageable in three months. We write code that future engineers — including your team — can understand, extend, and debug.",
    accentText: "text-amber-400",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/15",
  },
  {
    icon: Layers,
    title: "Plan the Architecture First",
    description:
      "We define the data model, system boundaries, and integration points before writing components. Structural decisions are expensive to reverse mid-project.",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/15",
  },
  {
    icon: Globe,
    title: "Design for Growth, Not Over-Engineer",
    description:
      "We architect systems that can scale, but we don't add complexity before it's needed. Premature over-engineering creates its own kind of technical debt.",
    accentText: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/15",
  },
  {
    icon: Heart,
    title: "Direct Communication",
    description:
      "You talk to the engineers building your product. Honest progress updates, early flags when something needs rethinking — no communication through layers of account management.",
    accentText: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/15",
  },
  {
    icon: Zap,
    title: "Ship Working Software Early",
    description:
      "A working build in the first week or two gives you something real to react to. Functional software produces better feedback than months of spec documents.",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/15",
  },
  {
    icon: Target,
    title: "Honest About Tradeoffs",
    description:
      "Every technical choice involves tradeoffs. We name them clearly — including when the simpler approach is better, or when a new tool isn't the right fit for your situation.",
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/15",
  },
];

const milestones = [
  {
    year: "2019",
    title: "First Projects",
    description:
      "Took on the first freelance web and mobile projects. Small scope, real deadlines, learning to deliver consistently and communicate clearly.",
  },
  {
    year: "2020",
    title: "First SaaS Build",
    description:
      "Designed and shipped a complete SaaS product from scratch — an internal tool a founder needed to replace a growing spreadsheet problem.",
  },
  {
    year: "2021",
    title: "International Clients",
    description:
      "First projects outside India. Adapted to async workflows, different time zones, and new ways of collaborating across long-distance engagements.",
  },
  {
    year: "2022",
    title: "Custom Software & Internal Tools",
    description:
      "Expanded into dashboards, admin panels, and internal business software. Longer engagements, more complex systems, deeper client relationships.",
  },
  {
    year: "2023",
    title: "AI Integrations",
    description:
      "Started integrating LLMs into client products — chatbots, document processing, internal search. Learned quickly what AI is actually reliable for in production.",
  },
  {
    year: "2024",
    title: "Focused Studio Model",
    description:
      "Settled into fewer, longer-term engagements. Most new clients arrive through referrals. Technical depth and reliability over volume.",
  },
];

const qualitySignals = [
  {
    icon: Globe,
    title: "Founder-direct",
    description: "You talk to the engineers, not an account manager.",
  },
  {
    icon: Code2,
    title: "Maintainable code",
    description: "Built to be understood and extended, not just shipped.",
  },
  {
    icon: Zap,
    title: "Honest timelines",
    description: "Realistic estimates and early flags — no surprises.",
  },
  {
    icon: Heart,
    title: "Post-launch support",
    description: "We stay reachable after the project wraps.",
  },
];

const studioLines = [
  "We prefer working builds over endless planning documents.",
  "Most of our work comes through repeat clients and referrals.",
  "Small team — you work directly with the engineers building it.",
  "We'll tell you when an approach isn't the right fit.",
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
                A Small Team That{" "}
                <span className="gradient-text">Builds Seriously</span>
              </h1>
              <p className="text-[#8888a8] text-lg leading-relaxed mb-4">
                Auravon AI is a focused engineering studio that helps founders and product teams
                build web apps, SaaS platforms, mobile products, AI integrations, and internal
                tools — built properly, the first time.
              </p>
              <p className="text-[#8888a8] leading-relaxed mb-8">
                We work on a small number of projects at a time, which means the team building
                your product is the team actually thinking about it. No context loss, no hand-offs,
                no account manager translating your requirements into something unrecognizable.
              </p>
              <Link href="/contact" className="btn-primary">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Quality signals — replacing fake stat numbers */}
            <div className="grid grid-cols-2 gap-4">
              {qualitySignals.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="rounded-2xl bg-[#05050f] border border-white/[0.07] p-5 md:p-6 hover:border-white/[0.11] transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="text-[14px] font-semibold text-white mb-1">{title}</div>
                  <div className="text-[12px] text-[#8888a8] leading-relaxed">{description}</div>
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
              <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-7 md:p-8 h-full hover:border-white/[0.11] transition-colors duration-200">
                <div className="w-11 h-11 rounded-xl bg-violet-600/15 border border-violet-500/20 flex items-center justify-center mb-5">
                  <Target className="w-5 h-5 text-violet-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                <p className="text-[#8888a8] leading-relaxed mb-6">
                  To help founders and engineering teams build software that solves real problems
                  — reliably, maintainably, and without unnecessary complexity. We don&apos;t believe
                  in shipping fast and fixing later. We believe in building it properly the first time.
                </p>
                <ul className="space-y-3">
                  {[
                    "Ship quality software on realistic timelines",
                    "Write code other engineers can understand and maintain",
                    "Integrate AI where it genuinely improves the product",
                    "Stay honest and reachable throughout every project",
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
              <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-7 md:p-8 h-full hover:border-white/[0.11] transition-colors duration-200">
                <div className="w-11 h-11 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-5">
                  <Eye className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                <p className="text-[#8888a8] leading-relaxed mb-6">
                  To become the engineering team founders turn to when they want software built
                  properly — a studio known for technical depth, honest communication, and the
                  kind of reliability that makes long-term partnerships actually work.
                </p>
                <ul className="space-y-3">
                  {[
                    "Trusted partner for long-term product development",
                    "Deep technical work across web, mobile, and AI systems",
                    "Processes that keep clients informed and in control",
                    "Software that outlasts the initial project scope",
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

      {/* ── Studio personality strip ── */}
      <div className="border-b border-white/[0.06]">
        <div
          className="max-w-7xl mx-auto px-6 md:px-8 py-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 120% at 50% 0%, rgba(124,58,237,0.04) 0%, transparent 70%)",
          }}
        >
          <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {studioLines.map((line, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-1 h-1 rounded-full bg-violet-400 shrink-0 mt-[7px]" />
                <p className="text-[13px] text-[#8888a8] leading-relaxed">{line}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </div>

      {/* ── Engineering Principles ── */}
      <section className="py-20 md:py-28 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="section-label">Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-4">
              Engineering{" "}
              <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
              Not aspirational posters — actual habits that shape how we approach every project.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map(({ icon: Icon, title, description, accentText, accentBg, accentBorder }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.12] hover:bg-[#0a0a1c] transition-all duration-200"
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
            <p className="text-[#8888a8]">How we got from the first project to where we are now.</p>
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
                  <div className="flex-1 rounded-2xl bg-[#090918] border border-white/[0.07] p-4 md:p-5 hover:border-white/[0.11] transition-colors duration-200">
                    <div className="text-[11px] font-semibold text-violet-400 mb-1">{year}</div>
                    <h3 className="text-[15px] font-semibold text-white mb-1">{title}</h3>
                    <p className="text-[13px] text-[#8888a8] leading-relaxed">{description}</p>
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
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-[#8888a8]">
              Available for new projects · Based in India
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Need a Technical Team{" "}
            <span className="gradient-text">That Ships?</span>
          </h2>
          <p className="text-[#8888a8] mb-8 leading-relaxed">
            Tell us what you&apos;re building and we&apos;ll have an honest conversation about
            whether we&apos;re the right fit — and what the most sensible approach looks like.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/projects" className="btn-secondary">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
