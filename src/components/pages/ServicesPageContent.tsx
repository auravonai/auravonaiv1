"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe, Smartphone, Brain, Code2, Palette, Workflow,
  CheckCircle2, ArrowRight, ChevronDown,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    id: "web", icon: Globe, title: "Web Development",
    headline: "Modern, Scalable Web Experiences",
    description: "High-performance websites and web applications using Next.js, React, and modern backend technologies — from landing pages to full enterprise platforms.",
    benefits: ["99+ Lighthouse performance scores", "SEO-optimized semantic HTML", "Mobile-first responsive design", "Scalable architecture from day one", "Next.js, TypeScript, Tailwind stack", "Third-party API integrations"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel", "AWS"],
    process: ["Discovery", "Architecture", "UI Design", "Development", "QA Testing", "Deployment"],
    faq: [
      { q: "How long does a typical website take?", a: "Simple sites take 1–2 weeks. Complex SaaS platforms or enterprise apps typically take 4–12 weeks depending on scope." },
      { q: "Do you provide post-launch maintenance?", a: "Yes — we offer monthly maintenance plans covering updates, security patches, and feature additions." },
      { q: "Can you migrate my existing website?", a: "Absolutely. We regularly migrate legacy systems to Next.js and modern cloud infrastructure." },
    ],
    accent: "violet",
  },
  {
    id: "mobile", icon: Smartphone, title: "Mobile App Development",
    headline: "Native-Quality Cross-Platform Apps",
    description: "Cross-platform iOS and Android apps that feel native, perform flawlessly, and scale — built with React Native or Flutter.",
    benefits: ["Single codebase for iOS & Android", "Native performance with React Native/Flutter", "Push notifications & offline support", "App Store & Play Store submission", "Backend API integration", "Analytics and crash reporting"],
    technologies: ["React Native", "Flutter", "Expo", "Firebase", "Node.js", "AWS", "Stripe", "OneSignal"],
    process: ["Discovery", "Wireframes", "UI Design", "Development", "Testing", "Store Submission"],
    faq: [
      { q: "React Native or Flutter — which do you use?", a: "Both. We recommend React Native for JavaScript-first teams and Flutter for higher performance requirements. We'll help you choose." },
      { q: "How long does app development take?", a: "A basic app takes 4–8 weeks. Feature-rich apps typically take 3–6 months." },
      { q: "Do you handle App Store submissions?", a: "Yes — we handle the complete submission process for both Apple App Store and Google Play Store." },
    ],
    accent: "blue",
  },
  {
    id: "ai", icon: Brain, title: "AI Solutions",
    headline: "Intelligent Systems That Learn & Scale",
    description: "LLM integrations, RAG chatbots, AI automation, and generative AI systems built into your product as a core feature, not an afterthought.",
    benefits: ["Custom RAG chatbots on your data", "GPT-4, Claude, Gemini integrations", "Document intelligence & analysis", "AI automation workflows", "Vector database search (Pinecone, Weaviate)", "Multi-agent AI systems"],
    technologies: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Weaviate", "Python", "FastAPI", "LlamaIndex"],
    process: ["Use Case Analysis", "Data Strategy", "Model Selection", "Integration", "Testing", "Deployment"],
    faq: [
      { q: "Can you train AI on our proprietary data?", a: "Yes. We build RAG systems that use your knowledge base or fine-tune models on your data." },
      { q: "Is our data secure?", a: "We implement enterprise-grade security and can use private model deployments to keep your data completely private." },
      { q: "What AI use cases have you built?", a: "Support bots, document analysis, sales assistants, HR automation, code review AI, and predictive analytics." },
    ],
    accent: "cyan",
  },
  {
    id: "custom", icon: Code2, title: "Custom Software",
    headline: "Bespoke Software Built for Your Business",
    description: "Custom dashboards, ERP systems, admin panels, internal tools, and business management platforms built exactly to your specifications.",
    benefits: ["Fully custom business logic", "Role-based access control", "Real-time data & analytics", "Third-party system integrations", "Automated reporting & workflows", "Multi-tenant architecture"],
    technologies: ["Next.js", "Node.js", "Fastify", "PostgreSQL", "MongoDB", "Prisma", "Docker", "AWS"],
    process: ["Requirements Analysis", "System Design", "DB Architecture", "Development", "Integration", "Handover"],
    faq: [
      { q: "Can you integrate with our existing systems?", a: "Yes. We integrate with existing CRMs, ERPs, payment gateways, and third-party APIs regularly." },
      { q: "Do you build admin dashboards?", a: "Yes — custom admin panels are one of our most common project types. Full CRUD, roles, analytics." },
      { q: "What's the typical cost?", a: "Custom software varies widely. Contact us for a free estimate based on your requirements." },
    ],
    accent: "emerald",
  },
  {
    id: "design", icon: Palette, title: "UI/UX Design",
    headline: "Interfaces That Convert and Delight",
    description: "User research, wireframing, and pixel-perfect design systems that make your product beautiful, intuitive, and conversion-optimized.",
    benefits: ["User research & personas", "Information architecture", "Wireframes & interactive prototypes", "High-fidelity UI design", "Design systems & component libraries", "Usability testing"],
    technologies: ["Figma", "Framer", "Adobe XD", "Principle", "Lottie", "Storybook"],
    process: ["Research", "User Flows", "Wireframes", "Visual Design", "Prototype", "Dev Handover"],
    faq: [
      { q: "Do you provide design files?", a: "Yes — fully organized Figma files with components, styles, and documentation." },
      { q: "Can you design within our existing brand?", a: "Absolutely. We work within your brand guidelines or help develop brand identity from scratch." },
      { q: "Do you do motion design?", a: "Yes. Animations, micro-interactions, and Lottie files for web and mobile applications." },
    ],
    accent: "pink",
  },
  {
    id: "automation", icon: Workflow, title: "Automation Systems",
    headline: "Automate Everything. Scale Without Limits.",
    description: "Workflow automation, CRM integrations, WhatsApp Business API, email sequences, and productivity solutions that eliminate manual work.",
    benefits: ["End-to-end workflow automation", "WhatsApp Business API integration", "Email marketing automation", "CRM & sales pipeline automation", "Invoice and payment automation", "Custom webhook & API orchestration"],
    technologies: ["n8n", "Zapier", "Make", "WhatsApp API", "SendGrid", "Stripe", "HubSpot", "Notion API"],
    process: ["Process Audit", "Automation Mapping", "Tool Selection", "Build & Configure", "Testing", "Monitoring"],
    faq: [
      { q: "What can be automated?", a: "Lead capture, follow-ups, invoicing, reporting, social posting, customer onboarding — almost any repetitive task." },
      { q: "Do you work with HubSpot or Salesforce?", a: "Yes. We integrate with all major CRMs, marketing tools, and business software." },
      { q: "How long does automation setup take?", a: "Simple automations go live in days. Complex multi-system workflows take 1–3 weeks." },
    ],
    accent: "orange",
  },
];

const accentMap: Record<string, { badge: string; chip: string; dot: string }> = {
  violet:  { badge: "text-violet-400 bg-violet-500/10 border-violet-500/15", chip: "bg-violet-500/10 border-violet-500/15 text-violet-300", dot: "bg-violet-500" },
  blue:    { badge: "text-blue-400 bg-blue-500/10 border-blue-500/15",       chip: "bg-blue-500/10 border-blue-500/15 text-blue-300",       dot: "bg-blue-500" },
  cyan:    { badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/15",       chip: "bg-cyan-500/10 border-cyan-500/15 text-cyan-300",       dot: "bg-cyan-500" },
  emerald: { badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/15", chip: "bg-emerald-500/10 border-emerald-500/15 text-emerald-300", dot: "bg-emerald-500" },
  pink:    { badge: "text-pink-400 bg-pink-500/10 border-pink-500/15",       chip: "bg-pink-500/10 border-pink-500/15 text-pink-300",       dot: "bg-pink-500" },
  orange:  { badge: "text-orange-400 bg-orange-500/10 border-orange-500/15", chip: "bg-orange-500/10 border-orange-500/15 text-orange-300", dot: "bg-orange-500" },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-[14px] font-medium text-[#c4c4d8] hover:text-white transition-colors"
      >
        {q}
        <ChevronDown className={`w-4 h-4 text-[#48486a] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-4 text-[13px] text-[#8888a8] leading-relaxed"
        >
          {a}
        </motion.div>
      )}
    </div>
  );
}

export default function ServicesPageContent() {
  return (
    <div className="pt-16">
      {/* ── Page Hero ── */}
      <div className="border-b border-white/[0.06] bg-[#090918]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-label">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              Everything You Need to{" "}
              <span className="gradient-text">Build & Scale</span>
            </h1>
            <p className="text-[#8888a8] text-lg max-w-2xl mx-auto mb-8">
              Full-stack development, AI integration, mobile apps, and automation — all under one roof.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {services.map((s) => (
                <a key={s.id} href={`#${s.id}`}
                  className="px-4 py-2 rounded-lg bg-[#05050f] border border-white/[0.07] text-[13px] text-[#8888a8] hover:text-white hover:border-white/[0.12] transition-all">
                  {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Service Sections ── */}
      {services.map((svc, i) => {
        const Icon = svc.icon;
        const ac = accentMap[svc.accent];
        return (
          <section key={svc.id} id={svc.id} className={`py-20 md:py-28 border-b border-white/[0.06] ${i % 2 === 1 ? "bg-[#090918]/60" : ""}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* Left */}
                <AnimatedSection direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-widest mb-5 ${ac.badge}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {svc.title}
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">{svc.headline}</h2>
                  <p className="text-[#8888a8] leading-relaxed mb-7">{svc.description}</p>
                  <ul className="space-y-3 mb-8">
                    {svc.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-[14px] text-[#c4c4d8]">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </AnimatedSection>

                {/* Right */}
                <AnimatedSection direction={i % 2 === 0 ? "right" : "left"} delay={0.12}>
                  <div className="space-y-4">
                    {/* Technologies */}
                    <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6">
                      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {svc.technologies.map((t) => (
                          <span key={t} className={`px-3 py-1.5 rounded-lg border text-[12px] font-medium ${ac.chip}`}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6">
                      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">Process</h3>
                      <div className="flex flex-wrap items-center gap-2">
                        {svc.process.map((step, j) => (
                          <div key={step} className="flex items-center gap-2">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0d0d1e] border border-white/[0.07] text-[12px] text-[#c4c4d8]">
                              <span className={`text-[10px] font-bold ${ac.badge.split(" ")[0]}`}>{j + 1}</span>
                              {step}
                            </span>
                            {j < svc.process.length - 1 && <ArrowRight className="w-3 h-3 text-[#48486a]" />}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* FAQ */}
                    <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6">
                      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-2">FAQ</h3>
                      {svc.faq.map((item) => <FAQItem key={item.q} {...item} />)}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-[#8888a8] mb-8">Let&apos;s discuss your project and build something exceptional together.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">Book Free Consultation <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/payment" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
