"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const categories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "text-violet-400",
    dot: "bg-violet-500",
  },
  {
    label: "Backend",
    techs: ["Node.js", "Fastify", "Express", "PostgreSQL", "MongoDB", "Prisma"],
    color: "text-blue-400",
    dot: "bg-blue-500",
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "Vercel", "Cloudflare", "Docker"],
    color: "text-cyan-400",
    dot: "bg-cyan-500",
  },
  {
    label: "AI & Automation",
    techs: ["OpenAI", "LangChain", "Pinecone", "AI Agents"],
    color: "text-emerald-400",
    dot: "bg-emerald-500",
  },
];

const scrollingTechs = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis",
  "Prisma", "Docker", "AWS", "Vercel", "OpenAI", "LangChain",
  "Flutter", "React Native", "Python", "FastAPI", "GraphQL", "Stripe",
  "Razorpay", "Figma", "Framer", "Tailwind CSS", "MongoDB", "Cloudflare",
];

export default function TechStack() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="section-label">Technology</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Architecture That{" "}
            <span className="gradient-text">Grows With You</span>
          </h2>
          <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
            We choose tools based on longevity, community support, and how well they&apos;ll
            serve you three years from now — not what&apos;s trending this quarter.
          </p>
        </AnimatedSection>

        {/* ── Category grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {categories.map(({ label, techs, color, dot }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="min-w-0 rounded-2xl bg-[#090918] border border-white/[0.07] p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-2 h-2 rounded-full ${dot}`} />
                <span className={`text-xs font-semibold uppercase tracking-widest ${color}`}>
                  {label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {techs.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[12px] text-[#c4c4d8] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Scrolling ticker ── */}
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#05050f] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#05050f] to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-3 whitespace-nowrap py-1"
          >
            {[...scrollingTechs, ...scrollingTechs].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-4 py-2 rounded-lg bg-[#090918] border border-white/[0.06] text-[13px] text-[#8888a8] font-medium"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
