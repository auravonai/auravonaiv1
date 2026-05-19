"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe, Smartphone, Brain, Code2, Palette, Workflow,
  CheckCircle2, ArrowRight, ChevronDown,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { servicesData, type ServiceData } from "@/lib/services-data";

type Service = ServiceData & { icon: React.ElementType };

const iconMap: Record<string, React.ElementType> = {
  web: Globe,
  mobile: Smartphone,
  ai: Brain,
  custom: Code2,
  design: Palette,
  automation: Workflow,
};

const services: Service[] = servicesData.map((s) => ({ ...s, icon: iconMap[s.id] }));

const accentMap: Record<string, { badge: string; chip: string; dot: string; text: string }> = {
  violet:  { badge: "text-violet-400 bg-violet-500/10 border-violet-500/15", chip: "bg-violet-500/10 border-violet-500/15 text-violet-300", dot: "bg-violet-500", text: "text-violet-400" },
  blue:    { badge: "text-blue-400 bg-blue-500/10 border-blue-500/15",       chip: "bg-blue-500/10 border-blue-500/15 text-blue-300",       dot: "bg-blue-500",   text: "text-blue-400" },
  cyan:    { badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/15",       chip: "bg-cyan-500/10 border-cyan-500/15 text-cyan-300",       dot: "bg-cyan-500",   text: "text-cyan-400" },
  emerald: { badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/15", chip: "bg-emerald-500/10 border-emerald-500/15 text-emerald-300", dot: "bg-emerald-500", text: "text-emerald-400" },
  pink:    { badge: "text-pink-400 bg-pink-500/10 border-pink-500/15",       chip: "bg-pink-500/10 border-pink-500/15 text-pink-300",       dot: "bg-pink-500",   text: "text-pink-400" },
  orange:  { badge: "text-orange-400 bg-orange-500/10 border-orange-500/15", chip: "bg-orange-500/10 border-orange-500/15 text-orange-300", dot: "bg-orange-500", text: "text-orange-400" },
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
            <span className="section-label">What We Build</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              Software Built for{" "}
              <span className="gradient-text">the Long Run</span>
            </h1>
            <p className="text-[#8888a8] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              We work with founders and engineering teams to build web apps, mobile products,
              AI integrations, and internal tools — without the agency overhead.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-4 py-2 rounded-lg bg-[#05050f] border border-white/[0.07] text-[13px] text-[#8888a8] hover:text-white hover:border-white/[0.12] transition-all"
                >
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
          <section
            key={svc.id}
            id={svc.id}
            className={`py-20 md:py-28 border-b border-white/[0.06] ${i % 2 === 1 ? "bg-[#090918]/60" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* ── Left: overview ── */}
                <AnimatedSection direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-widest mb-5 ${ac.badge}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {svc.title}
                  </div>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
                    {svc.headline}
                  </h2>

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
                    {svc.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </AnimatedSection>

                {/* ── Right: tech + process + FAQ ── */}
                <AnimatedSection direction={i % 2 === 0 ? "right" : "left"} delay={0.12}>
                  <div className="space-y-4">

                    {/* Technologies */}
                    <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6">
                      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {svc.technologies.map((t) => (
                          <span
                            key={t}
                            className={`px-3 py-1.5 rounded-lg border text-[12px] font-medium ${ac.chip}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6">
                      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">
                        How It Works
                      </h3>
                      <div className="grid grid-cols-2 gap-2.5">
                        {svc.process.map(({ step, desc }, j) => (
                          <div
                            key={step}
                            className="p-3 rounded-xl bg-[#0d0d1e] border border-white/[0.05]"
                          >
                            <div className={`text-[10px] font-bold mb-1 ${ac.text}`}>
                              {j + 1}. {step}
                            </div>
                            <p className="text-[11px] text-[#8888a8] leading-relaxed">{desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* FAQ */}
                    <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6">
                      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-2">
                        Common Questions
                      </h3>
                      {svc.faq.map((item) => (
                        <FAQItem key={item.q} {...item} />
                      ))}
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
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-[#8888a8]">
              Taking on new projects · Response within a day
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-[#8888a8] mb-8 leading-relaxed">
            Share what you&apos;re building and we&apos;ll help you figure out the right technical
            approach — no commitment needed, just an honest conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/payment" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
