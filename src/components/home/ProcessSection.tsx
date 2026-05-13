"use client";

import { motion } from "framer-motion";
import { Search, PenLine, Code2, Rocket } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Discovery & Strategy",
    description: "Deep-dive into your business goals, target users, and constraints. We define success metrics and a clear product roadmap.",
  },
  {
    n: "02",
    icon: PenLine,
    title: "Planning & Design",
    description: "Architecture planning, wireframes, and high-fidelity UI/UX designs — all aligned to your brand before development begins.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Development & QA",
    description: "Agile development with continuous testing, code reviews, and milestone reviews. You see progress every week.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Launch & Growth",
    description: "Production deployment, monitoring setup, and ongoing support — we stay with you as your product scales.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="section-label">How we work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Our Development{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
            A proven 4-step process refined across 50+ projects to deliver exceptional results on time.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative pb-10 lg:pb-14">
          {/* Connecting line – desktop only */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] h-px bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-500/20" />

          {steps.map(({ n, icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative flex min-w-0 flex-col rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.12] transition-colors duration-200"
            >
              {/* Step number (background) */}
              <span className="absolute top-5 right-5 text-4xl font-black text-white/[0.03] select-none leading-none">
                {n}
              </span>

              {/* Icon circle */}
              <div className="relative w-14 h-14 rounded-2xl bg-[#0d0d1e] border border-white/[0.07] flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-violet-400" />
                {/* Connector dot */}
                <div className="hidden lg:flex absolute -bottom-[1.8rem] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#05050f] border-2 border-violet-500/40 items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500/60" />
                </div>
              </div>

              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-2">
                Step {n}
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2.5">{title}</h3>
              <p className="text-sm text-[#8888a8] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
