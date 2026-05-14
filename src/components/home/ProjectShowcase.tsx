"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const projects = [
  {
    title: "AI CRM Dashboard",
    category: "AI Solutions",
    description: "CRM with GPT-4 call summaries, lead scoring, and pipeline forecasting — built for a B2B sales team that outgrew spreadsheets.",
    outcome: "Shipped in 6 weeks",
    tags: ["Next.js", "OpenAI", "PostgreSQL"],
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
  },
  {
    title: "SaaS Analytics Platform",
    category: "SaaS Product",
    description: "Multi-tenant analytics dashboard aggregating data from multiple sources, with AI-generated summaries for non-technical users.",
    outcome: "Multi-tenant, production-ready",
    tags: ["React", "ClickHouse", "Kafka"],
    accentText: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
  },
  {
    title: "AI Support Assistant",
    category: "AI Automation",
    description: "RAG-based chatbot trained on a product knowledge base, deployed across web chat and WhatsApp for a growing SaaS company.",
    outcome: "Web + WhatsApp channels",
    tags: ["LangChain", "Pinecone", "FastAPI"],
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
  },
  {
    title: "E-Commerce Rebuild",
    category: "Web Development",
    description: "Custom Next.js storefront with server components, edge caching, and Stripe — replacing a sluggish Shopify setup that couldn't be customized.",
    outcome: "Faster, fully custom",
    tags: ["Next.js", "Stripe", "Cloudflare"],
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
  },
  {
    title: "HR Management System",
    category: "Custom Software",
    description: "Internal tool covering recruitment pipeline, payroll processing, attendance tracking, and compliance reports for a mid-size services company.",
    outcome: "Replaced 4 separate tools",
    tags: ["Next.js", "MongoDB", "Razorpay"],
    accentText: "text-orange-400",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/20",
  },
  {
    title: "Food Delivery App",
    category: "Mobile App",
    description: "Three-app system — customer ordering, driver tracking, and restaurant dashboard — with real-time GPS and order management built in React Native.",
    outcome: "3-app system, live GPS",
    tags: ["React Native", "Socket.io", "Maps API"],
    accentText: "text-pink-400",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/20",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="section-label">Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Selected{" "}
            <span className="gradient-text">Product Work</span>
          </h2>
          <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
            A sample of the products and systems we&apos;ve designed, built, and shipped.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ title, category, description, outcome, tags, accentText, accentBg, accentBorder }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex min-w-0 flex-col rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.12] transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Category */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-[11px] font-semibold uppercase tracking-widest ${accentText}`}>
                  {category}
                </span>
              </div>

              {/* Visual placeholder */}
              <div className={`w-full h-28 rounded-xl ${accentBg} border ${accentBorder} mb-5 flex items-center justify-center`}>
                <span className={`text-4xl font-black opacity-20 ${accentText}`}>
                  {title.charAt(0)}
                </span>
              </div>

              <h3 className="text-[15px] font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-[#8888a8] leading-relaxed mb-5 flex-1">{description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#8888a8] font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className={`text-sm font-semibold ${accentText}`}>{outcome}</div>
                  <div className="text-[11px] text-[#48486a] mt-0.5">Project highlight</div>
                </div>
                <Link
                  href="/projects"
                  className={`inline-flex items-center gap-1 text-[12px] font-medium ${accentText} hover:opacity-75 transition-opacity`}
                >
                  Details
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="text-center mt-14">
          <Link href="/projects" className="btn-secondary">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
