"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, Brain, Code2, Palette, Workflow, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern responsive websites, enterprise platforms, SaaS products, and scalable web applications with Next.js and modern full-stack tech.",
    tags: ["Next.js", "React", "TypeScript"],
    href: "/services#web",
    color: "violet",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform iOS and Android applications with native performance, modern UI, and seamless backend integration.",
    tags: ["React Native", "Flutter", "iOS/Android"],
    href: "/services#mobile",
    color: "blue",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Intelligent chatbots, LLM integrations, RAG systems, AI automation workflows, and generative AI solutions tailored to your business.",
    tags: ["OpenAI", "LangChain", "RAG"],
    href: "/services#ai",
    color: "cyan",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Custom dashboards, ERP systems, admin panels, internal tools, and business management platforms built to your specifications.",
    tags: ["Node.js", "PostgreSQL", "Prisma"],
    href: "/services#custom",
    color: "emerald",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centric interfaces designed for performance, engagement, and usability — from wireframes to pixel-perfect Figma files.",
    tags: ["Figma", "Framer", "Design Systems"],
    href: "/services#design",
    color: "pink",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    description: "Workflow automation, CRM integrations, WhatsApp Business API, email sequences, and productivity tools that eliminate manual work.",
    tags: ["n8n", "Zapier", "WhatsApp API"],
    href: "/services#automation",
    color: "orange",
  },
];

const iconColors: Record<string, string> = {
  violet: "bg-violet-500/15 text-violet-400",
  blue: "bg-blue-500/15 text-blue-400",
  cyan: "bg-cyan-500/15 text-cyan-400",
  emerald: "bg-emerald-500/15 text-emerald-400",
  pink: "bg-pink-500/15 text-pink-400",
  orange: "bg-orange-500/15 text-orange-400",
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* ── Header ── */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="section-label">What we build</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            End-to-End Digital{" "}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
            From concept to production — every layer of your digital product, built with precision.
          </p>
        </AnimatedSection>

        {/* ── Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, tags, href, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex min-w-0 flex-col rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.12] transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${iconColors[color]}`}>
                <Icon className="w-5 h-5" />
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
              <p className="text-[#8888a8] text-sm leading-relaxed mb-5 flex-1">{description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-[#8888a8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-violet-400 hover:text-violet-300 transition-colors group/link"
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Footer CTA ── */}
        <AnimatedSection delay={0.2} className="text-center mt-14">
          <Link href="/services" className="btn-secondary">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
