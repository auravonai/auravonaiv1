"use client";

import { motion } from "framer-motion";
import { Layers, Brain, Zap, GitBranch, Users } from "lucide-react";

const capabilities = [
  { icon: Layers, label: "Scalable Architecture" },
  { icon: Brain, label: "AI Integration" },
  { icon: Zap, label: "Startup Velocity" },
  { icon: GitBranch, label: "Clean Codebase" },
  { icon: Users, label: "Direct Communication" },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-20 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#8888a8] text-base md:text-lg leading-relaxed max-w-xl lg:max-w-sm shrink-0 text-center lg:text-left"
          >
            <span className="text-[#d4d4f0] font-semibold">Auravon AI</span> is a small,
            focused engineering team. We build software that solves real problems — without
            unnecessary complexity or bloated process.
          </motion.p>

          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-white/[0.06] shrink-0" />

          {/* Capabilities */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 flex-1">
            {capabilities.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#090918] border border-white/[0.07] hover:border-white/[0.12] transition-colors cursor-default"
              >
                <div className="w-6 h-6 rounded-md bg-violet-500/15 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <span className="text-[13px] font-medium text-[#c4c4d8]">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
