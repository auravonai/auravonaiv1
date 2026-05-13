"use client";

import { motion } from "framer-motion";
import { Target, Layers, Brain, Rocket, Search, HeartHandshake } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Target,
    title: "Startup-Focused Approach",
    description: "We understand startup velocity. We build fast, iterate quickly, and help you get to market before your competition.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Every product we architect scales from day one — built to handle millions of users without a complete rewrite.",
  },
  {
    icon: Brain,
    title: "AI-Integrated Solutions",
    description: "We embed AI directly into your product architecture — making your software smarter and more competitive by default.",
  },
  {
    icon: Rocket,
    title: "Fast Development Cycles",
    description: "Agile sprints, CI/CD pipelines, and modern tooling mean your product ships faster and evolves continuously.",
  },
  {
    icon: Search,
    title: "SEO-First Development",
    description: "Every product ships SEO-optimized — clean semantics, fast performance, and proper metadata as a baseline.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description: "We stay with you post-launch. Maintenance, updates, new features, and technical guidance as your business scales.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="section-label">Why Auravon AI</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Engineering Excellence,{" "}
            <span className="gradient-text">Every Time</span>
          </h2>
          <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
            We combine cutting-edge technology with deep business understanding to build
            digital products that actually drive results.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {features.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group min-w-0 bg-[#05050f] hover:bg-[#090918] p-7 md:p-8 transition-colors duration-200"
            >
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5">
                <Icon className="w-4.5 h-4.5 text-violet-400" style={{ width: "1.125rem", height: "1.125rem" }} />
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-[#8888a8] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
