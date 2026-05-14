"use client";

import { motion } from "framer-motion";
import { MessageSquare, Clock, Code2, GitBranch, Layers, Eye } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const principles = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "You'll talk directly to the engineers building your product — no account managers, no layers. Weekly updates, async-friendly, plain language.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Clock,
    title: "Honest Timelines",
    description: "We give realistic estimates and flag blockers early. No overpromising to win the project, no surprises two weeks before launch.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Code2,
    title: "Code You Can Own",
    description: "Clean architecture, consistent patterns, and documented decisions. Any engineer should be able to pick up where we left off.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: GitBranch,
    title: "Ship Early, Iterate",
    description: "We get something real in front of users quickly. MVPs first, polish second — because real feedback beats theoretical perfection.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Layers,
    title: "Modern Tooling as Standard",
    description: "TypeScript, CI/CD, automated testing, and monitoring come as defaults — not extras you have to negotiate for.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Eye,
    title: "No Black Boxes",
    description: "We explain architectural decisions, document trade-offs, and make sure you understand what we've built and why.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="section-label">How we work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Engineering with{" "}
            <span className="gradient-text">Intention</span>
          </h2>
          <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
            The principles that guide every project we take on — from first conversation to final deployment.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map(({ icon: Icon, title, description, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex min-w-0 flex-col rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.12] transition-colors duration-200"
            >
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>

              <h3 className="text-[15px] font-semibold text-white mb-3">{title}</h3>

              <p className="text-[14px] text-[#8888a8] leading-[1.75] flex-1">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="relative z-10 mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#090918] border border-white/[0.07]">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#8888a8] text-sm">Available for new projects · Response within 24 hours</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
