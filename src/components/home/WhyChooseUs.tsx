"use client";

import { motion } from "framer-motion";
import { Target, Layers, Brain, Rocket, Search, HeartHandshake } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Target,
    title: "Built for Founders",
    description: "You talk directly to the engineers building your product. No account managers, no handoffs. We move at the pace your business needs.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "We think about growth paths early — choosing databases, APIs, and infra that won't become your bottleneck six months after launch.",
  },
  {
    icon: Brain,
    title: "AI Where It Makes Sense",
    description: "We integrate AI when it genuinely improves your product, not just to add a buzzword. We'll tell you when it's the wrong tool for the job.",
  },
  {
    icon: Rocket,
    title: "Consistent Delivery",
    description: "Structured sprints, clear milestones, regular demos. You always know where the project stands — no guessing, no radio silence.",
  },
  {
    icon: Search,
    title: "SEO-First by Default",
    description: "Fast pages, clean semantics, and proper metadata are baseline requirements on every project we build — not a premium add-on.",
  },
  {
    icon: HeartHandshake,
    title: "Reachable Post-Launch",
    description: "We stay available after launch. When you need to add a feature or fix something under load, you're not starting from scratch with a new team.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="section-label">Why Auravon AI</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            A Team That{" "}
            <span className="gradient-text">Gets It Done</span>
          </h2>
          <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
            We care about the work, not just the invoice. Here&apos;s what that looks like in practice.
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
