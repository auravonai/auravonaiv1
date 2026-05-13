"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";

const categories = ["All", "AI Solutions", "Web Development", "Mobile App", "SaaS Product", "Custom Software"];

const projects = [
  {
    title: "AI CRM Dashboard",
    category: "AI Solutions",
    description: "Replaced a manual sales process with an AI-powered CRM featuring predictive lead scoring, automated follow-ups, and intelligent deal forecasting.",
    problem: "Sales team spending 60% of time on data entry with no predictive insights.",
    solution: "Built a full AI CRM with GPT-4 integration for call summaries, automatic lead scoring, and pipeline forecasting.",
    technologies: ["Next.js", "OpenAI GPT-4", "PostgreSQL", "Prisma", "Redis", "AWS"],
    duration: "8 weeks",
    teamSize: "3 engineers",
    metrics: [
      { label: "Conversion Increase", value: "+340%" },
      { label: "Time Saved/Week", value: "40hrs" },
      { label: "Data Entry Reduction", value: "60%" },
    ],
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/15",
    dot: "bg-violet-500",
    tags: ["AI", "CRM", "Automation"],
  },
  {
    title: "SaaS Analytics Platform",
    category: "SaaS Product",
    description: "A real-time business intelligence platform aggregating data from 15+ sources into a single unified dashboard with AI-generated insights.",
    problem: "Leadership team had no single source of truth for business metrics across 15 different tools.",
    solution: "Built a multi-tenant SaaS analytics platform with real-time streaming, custom dashboards, and GPT-powered executive summaries.",
    technologies: ["React", "Node.js", "ClickHouse", "Kafka", "D3.js", "Vercel"],
    duration: "12 weeks",
    teamSize: "4 engineers",
    metrics: [
      { label: "Data Points/Day", value: "2M+" },
      { label: "Businesses Onboarded", value: "200+" },
      { label: "Dashboard Load Time", value: "<200ms" },
    ],
    accentText: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/15",
    dot: "bg-blue-500",
    tags: ["SaaS", "Analytics", "Real-time"],
  },
  {
    title: "AI Customer Support Bot",
    category: "AI Solutions",
    description: "Enterprise-grade AI chatbot trained on company documentation, handling multi-channel customer support with human escalation logic.",
    problem: "Support team overwhelmed with 500+ daily repetitive tickets across email, WhatsApp, and web.",
    solution: "RAG-based AI chatbot with LangChain, Pinecone vector DB, trained on company data. Deployed across web, WhatsApp, and email.",
    technologies: ["Python", "LangChain", "Pinecone", "OpenAI", "FastAPI", "WhatsApp API"],
    duration: "6 weeks",
    teamSize: "2 engineers",
    metrics: [
      { label: "Queries Automated", value: "80%" },
      { label: "Cost Reduction", value: "65%" },
      { label: "Response Time", value: "<2sec" },
    ],
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/15",
    dot: "bg-cyan-500",
    tags: ["AI", "Chatbot", "Automation"],
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "High-performance e-commerce platform migrated from Shopify to a custom Next.js solution with advanced features and 3× better performance.",
    problem: "Legacy Shopify store too slow, limited customization, 4.2s load time killing conversions.",
    solution: "Custom Next.js e-commerce with server components, edge caching, Stripe integration, and full admin panel.",
    technologies: ["Next.js 15", "TypeScript", "Stripe", "PostgreSQL", "Cloudflare", "Vercel"],
    duration: "10 weeks",
    teamSize: "3 engineers",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Conversion Increase", value: "+87%" },
      { label: "Page Load Time", value: "0.8s" },
    ],
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/15",
    dot: "bg-emerald-500",
    tags: ["E-Commerce", "Next.js", "Performance"],
  },
  {
    title: "HR Management System",
    category: "Custom Software",
    description: "Complete HR suite covering recruitment, onboarding, payroll, attendance, performance reviews, and compliance reporting.",
    problem: "100-person company managing HR across 8 different spreadsheets with no automation or compliance tracking.",
    solution: "Built a full-featured HR platform with automated payroll, attendance tracking, leave management, and custom reporting.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Razorpay", "AWS S3", "SendGrid"],
    duration: "14 weeks",
    teamSize: "4 engineers",
    metrics: [
      { label: "Time Saved/Week", value: "40hrs" },
      { label: "Audit Time Reduction", value: "90%" },
      { label: "Employee Satisfaction", value: "+40%" },
    ],
    accentText: "text-orange-400",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/15",
    dot: "bg-orange-500",
    tags: ["HR", "Custom Software", "Enterprise"],
  },
  {
    title: "Startup Landing Page",
    category: "Web Development",
    description: "High-converting startup landing page with advanced animations, SEO optimization, and Calendly integration — launched in 5 days.",
    problem: "Startup needed a compelling landing page to support their fundraising pitch and product launch.",
    solution: "Designed and built a pixel-perfect, SEO-optimized landing page with Framer Motion animations and conversion-focused layout.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel", "Calendly API"],
    duration: "5 days",
    teamSize: "2 engineers",
    metrics: [
      { label: "Delivered In", value: "5 days" },
      { label: "Conversion Rate", value: "12%" },
      { label: "Lighthouse Score", value: "98/100" },
    ],
    accentText: "text-pink-400",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/15",
    dot: "bg-pink-500",
    tags: ["Landing Page", "SEO", "Fast Delivery"],
  },
  {
    title: "Food Delivery Mobile App",
    category: "Mobile App",
    description: "Full-stack food delivery app with real-time order tracking, driver app, restaurant dashboard, and payment integration.",
    problem: "Restaurant chain needed their own delivery app to stop paying high commissions to aggregators.",
    solution: "Built a complete 3-app system: customer app, driver app, and restaurant dashboard with real-time GPS tracking.",
    technologies: ["React Native", "Node.js", "Socket.io", "PostgreSQL", "Google Maps API", "Razorpay"],
    duration: "16 weeks",
    teamSize: "4 engineers",
    metrics: [
      { label: "Monthly Savings", value: "₹8L+" },
      { label: "Active Users", value: "10,000+" },
      { label: "Order Fulfillment", value: "98%" },
    ],
    accentText: "text-red-400",
    accentBg: "bg-red-500/10",
    accentBorder: "border-red-500/15",
    dot: "bg-red-500",
    tags: ["Mobile", "Food Tech", "Real-time"],
  },
  {
    title: "FinTech Dashboard",
    category: "Custom Software",
    description: "Real-time financial analytics dashboard with multi-currency support, compliance reporting, and AI-powered anomaly detection.",
    problem: "FinTech startup needed regulatory compliance reporting and real-time transaction monitoring for RBI compliance.",
    solution: "Built a comprehensive fintech dashboard with real-time transaction feeds, compliance reports, and ML-based fraud detection.",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis", "AWS"],
    duration: "20 weeks",
    teamSize: "5 engineers",
    metrics: [
      { label: "Fraud Detection", value: "99.9%" },
      { label: "Compliance Score", value: "100%" },
      { label: "Transaction Latency", value: "<50ms" },
    ],
    accentText: "text-indigo-400",
    accentBg: "bg-indigo-500/10",
    accentBorder: "border-indigo-500/15",
    dot: "bg-indigo-500",
    tags: ["FinTech", "Compliance", "AI"],
  },
];

export default function ProjectsPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      {/* ── Page Hero ── */}
      <div className="border-b border-white/[0.06] bg-[#090918]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-label">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              Products We&apos;ve{" "}
              <span className="gradient-text">Built & Shipped</span>
            </h1>
            <p className="text-[#8888a8] text-lg max-w-2xl mx-auto">
              Real projects, measurable outcomes. A selection of digital products we&apos;ve engineered for clients.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Filter Bar ── */}
      <div className="sticky top-16 z-30 bg-[#05050f]/90 backdrop-blur-xl border-b border-white/[0.06] py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white"
                    : "bg-[#090918] border border-white/[0.07] text-[#8888a8] hover:text-white hover:border-white/[0.12]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projects Grid ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatePresence mode="popLayout">
            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((project, i) => (
                <motion.article
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.12] transition-colors duration-200"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`inline-flex px-2.5 py-1 rounded-lg border text-[11px] font-medium ${project.accentText} ${project.accentBg} ${project.accentBorder} mb-2`}>
                        {project.category}
                      </span>
                      <h2 className="text-[18px] font-bold text-white leading-snug">{project.title}</h2>
                    </div>
                  </div>

                  <p className="text-[14px] text-[#8888a8] leading-relaxed mb-5">{project.description}</p>

                  {/* Problem / Solution */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="p-3.5 rounded-xl bg-red-500/[0.05] border border-red-500/[0.10]">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-red-400 mb-1.5">Problem</div>
                      <p className="text-[12px] text-[#8888a8] leading-relaxed">{project.problem}</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/[0.10]">
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400 mb-1.5">Solution</div>
                      <p className="text-[12px] text-[#8888a8] leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {project.metrics.map(({ label, value }) => (
                      <div key={label} className="text-center p-3 rounded-xl bg-[#0d0d1e] border border-white/[0.06]">
                        <div className={`text-[15px] font-bold ${project.accentText}`}>{value}</div>
                        <div className="text-[10px] text-[#48486a] mt-0.5 leading-tight">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[12px] text-[#48486a] mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {project.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3 h-3" /> {project.teamSize}
                    </span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-[11px] text-[#8888a8] bg-[#0d0d1e] border border-white/[0.06] rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Your Project Could Be Next</h2>
          <p className="text-[#8888a8] mb-8">Let&apos;s build something exceptional together.</p>
          <Link href="/contact" className="btn-primary">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
