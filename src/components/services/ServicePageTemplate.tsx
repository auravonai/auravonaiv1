"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, MapPin, MessageCircle,
  Star, ChevronRight, Shield, Clock, Globe,
  Users, TrendingUp, Phone,
} from "lucide-react";
import FAQAccordion from "./FAQAccordion";
import StickyServiceBar from "./StickyServiceBar";
import { ServicePageData, getRelatedServices } from "@/lib/digital-agency-data";

// ─── Per-accent palette ─────────────────────────────────────────────────────

type AccentKey = string;
const ACCENTS: Record<AccentKey, {
  text: string; bg: string; border: string; glow: string; badgeBg: string;
}> = {
  violet:  { text:"text-violet-400",  bg:"bg-violet-500/10",  border:"border-violet-500/25",  glow:"rgba(139,92,246,0.22)",  badgeBg:"bg-violet-500/15" },
  blue:    { text:"text-blue-400",    bg:"bg-blue-500/10",    border:"border-blue-500/25",    glow:"rgba(59,130,246,0.22)",   badgeBg:"bg-blue-500/15" },
  emerald: { text:"text-emerald-400", bg:"bg-emerald-500/10", border:"border-emerald-500/25", glow:"rgba(16,185,129,0.22)",   badgeBg:"bg-emerald-500/15" },
  orange:  { text:"text-orange-400",  bg:"bg-orange-500/10",  border:"border-orange-500/25",  glow:"rgba(249,115,22,0.22)",   badgeBg:"bg-orange-500/15" },
  pink:    { text:"text-pink-400",    bg:"bg-pink-500/10",    border:"border-pink-500/25",    glow:"rgba(236,72,153,0.22)",   badgeBg:"bg-pink-500/15" },
  cyan:    { text:"text-cyan-400",    bg:"bg-cyan-500/10",    border:"border-cyan-500/25",    glow:"rgba(6,182,212,0.22)",    badgeBg:"bg-cyan-500/15" },
  amber:   { text:"text-amber-400",   bg:"bg-amber-500/10",   border:"border-amber-500/25",   glow:"rgba(245,158,11,0.22)",   badgeBg:"bg-amber-500/15" },
  rose:    { text:"text-rose-400",    bg:"bg-rose-500/10",    border:"border-rose-500/25",    glow:"rgba(244,63,94,0.22)",    badgeBg:"bg-rose-500/15" },
};

// ─────────────────────────────────────────────────────────────────────────────

export default function ServicePageTemplate({ service }: { service: ServicePageData }) {
  const ac = ACCENTS[service.accent] ?? ACCENTS.violet;
  const related = getRelatedServices(service.relatedServices);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[640px]"
          style={{ background: `radial-gradient(ellipse 90% 80% at 50% -10%, ${ac.glow} 0%, transparent 65%)` }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-32 md:pt-36 pb-20 md:pb-28">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-[#48486a] mb-10">
            <Link href="/" className="hover:text-[#8888a8] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 opacity-50" />
            <Link href="/services" className="hover:text-[#8888a8] transition-colors">Services</Link>
            {service.type === "service" && (
              <>
                <ChevronRight className="w-3 h-3 opacity-50" />
                <Link href={`/services/${service.categorySlug}`} className="hover:text-[#8888a8] transition-colors capitalize">
                  {service.categorySlug.replace(/-/g, " ")}
                </Link>
              </>
            )}
            <ChevronRight className="w-3 h-3 opacity-50" />
            <span className="text-[#6868a8]">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-start">

            {/* ── Left copy ── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {service.locations.slice(0, 6).map((loc) => (
                  <span key={loc} className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full ${ac.badgeBg} ${ac.border} border ${ac.text}`}>
                    <MapPin className="w-2.5 h-2.5" />{loc}
                  </span>
                ))}
                {service.locations.length > 6 && (
                  <span className="inline-flex items-center text-[11px] font-medium px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-[#48486a]">
                    +{service.locations.length - 6} more
                  </span>
                )}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="text-4xl md:text-[52px] lg:text-[58px] font-bold tracking-tight leading-[1.07] mb-6 text-[#f2f2ff]"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="text-[#8888a8] text-[17px] md:text-[18px] leading-[1.75] mb-9 max-w-[560px]"
              >
                {service.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <a
                  href="https://wa.me/918814012395?text=Hi%20Auravon%2C%20I%20want%20to%20enquire%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-3.5 !px-7"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <Link href="/contact" className="btn-secondary !py-3.5 !px-7">
                  Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="flex flex-wrap gap-x-6 gap-y-3 text-[12.5px] text-[#48486a]"
              >
                {[
                  { icon: CheckCircle2, color: "text-emerald-400", text: "Free consultation" },
                  { icon: Shield,       color: "text-violet-400",  text: "No lock-in contracts" },
                  { icon: Clock,        color: "text-blue-400",    text: "24 hr response" },
                  { icon: Globe,        color: "text-amber-400",   text: "Worldwide clients" },
                ].map(({ icon: Icon, color, text }) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <Icon className={`w-3.5 h-3.5 ${color}`} />
                    {text}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── Right stats card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:pt-1"
            >
              <div
                className={`rounded-2xl border ${ac.border} overflow-hidden`}
                style={{ background: "rgba(9,9,24,0.9)", backdropFilter: "blur(12px)" }}
              >
                <div className="grid grid-cols-3 divide-x divide-white/[0.05]">
                  {service.heroStats.map((stat) => (
                    <div key={stat.label} className="py-8 px-3 text-center">
                      <div className={`text-[28px] md:text-[32px] font-bold leading-none mb-2 ${ac.text}`}>
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-[#48486a] leading-snug">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#48486a] mb-3.5">Tools & Platforms</p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#6868a8]">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="h-px" style={{ background: "rgba(255,255,255,0.05)" }} />

                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="text-[12px] text-[#48486a]">Ready to get started?</span>
                  <Link href="/contact" className={`flex items-center gap-1 text-[12px] font-semibold ${ac.text} hover:opacity-80 transition-opacity`}>
                    Let's talk <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════ OVERVIEW ════════════════════ */}
      {(service.overview || service.overviewExtra) && (
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24">
            <p className="section-label">Overview</p>
            <div className="max-w-3xl mt-1 space-y-5">
              {service.overview && (
                <p className="text-[#8888a8] text-[16px] md:text-[17px] leading-[1.9]">{service.overview}</p>
              )}
              {service.overviewExtra && (
                <p className="text-[#8888a8] text-[16px] md:text-[17px] leading-[1.9]">{service.overviewExtra}</p>
              )}
            </div>
          </div>
        </Reveal>
      )}

      {/* ════════════════════ BENEFITS ════════════════════ */}
      {service.benefits.length > 0 && (
        <Reveal>
          <div className="py-20 md:py-24" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <p className="section-label">Key Benefits</p>
              <h2 className="text-[26px] md:text-[32px] font-bold text-[#f2f2ff] mt-1 mb-10">What You Get</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {service.benefits.map((b, i) => (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="group relative rounded-xl p-5 border border-white/[0.06] hover:border-white/[0.13] transition-all duration-200 hover:-translate-y-1 cursor-default"
                    style={{ background: "var(--bg)" }}
                  >
                    <span className={`block text-[11px] font-bold ${ac.text} mb-3 tabular-nums`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-[14px] font-semibold text-[#f2f2ff] mb-2 leading-snug">{b.title}</h3>
                    <p className="text-[13px] text-[#8888a8] leading-relaxed">{b.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* ════════════════════ PROCESS ════════════════════ */}
      {service.process.length > 0 && (
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24">
            <p className="section-label">Our Process</p>
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#f2f2ff] mt-1 mb-12">How We Work</h2>

            {/* Desktop horizontal stepper */}
            <div
              className="hidden md:grid gap-x-6"
              style={{ gridTemplateColumns: `repeat(${Math.min(service.process.length, 6)}, 1fr)` }}
            >
              {service.process.map((step, i) => (
                <div key={step.step} className="relative">
                  {i < service.process.length - 1 && (
                    <div className="absolute top-[18px] left-[calc(50%+20px)] right-0 h-px" style={{ background: "var(--border)" }} />
                  )}
                  <div className="pr-4">
                    <div
                      className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold mb-4 ${ac.bg} border ${ac.border} ${ac.text}`}
                      style={{ boxShadow: `0 0 18px ${ac.glow}` }}
                    >
                      {i + 1}
                    </div>
                    <h3 className="text-[13px] font-semibold text-[#f2f2ff] mb-1.5">{step.title}</h3>
                    <p className="text-[12px] text-[#8888a8] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile vertical */}
            <div className="md:hidden space-y-0">
              {service.process.map((step, i) => (
                <div key={step.step} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-[12px] font-bold ${ac.bg} border ${ac.border} ${ac.text}`}>
                      {i + 1}
                    </div>
                    {i < service.process.length - 1 && (
                      <div className="w-px flex-1 my-1.5" style={{ background: "var(--border)" }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-[14px] font-semibold text-[#f2f2ff] mb-1.5">{step.title}</h3>
                    <p className="text-[13px] text-[#8888a8] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* ════════════════════ FEATURES ════════════════════ */}
      {service.features.length > 0 && (
        <Reveal>
          <div className="py-20 md:py-24" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <p className="section-label">What's Included</p>
              <h2 className="text-[26px] md:text-[32px] font-bold text-[#f2f2ff] mt-1 mb-10">Service Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
                    className="flex gap-4 p-5 rounded-xl border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                    style={{ background: "var(--bg)" }}
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${ac.text}`} />
                    <div>
                      <p className="text-[14px] font-semibold text-[#f2f2ff] mb-1">{f.title}</p>
                      <p className="text-[13px] text-[#8888a8] leading-relaxed">{f.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* ════════════════════ WHY CHOOSE US ════════════════════ */}
      {service.whyChooseUs.length > 0 && (
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24">
            <p className="section-label">Why Auravon AI</p>
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#f2f2ff] mt-1 mb-10">Why We're Different</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.whyChooseUs.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex gap-5 p-6 rounded-xl border border-white/[0.06]"
                  style={{ background: "var(--surface)" }}
                >
                  <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-[12px] font-bold ${ac.bg} border ${ac.border} ${ac.text}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#f2f2ff] mb-2">{w.title}</h3>
                    <p className="text-[14px] text-[#8888a8] leading-relaxed">{w.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* ════════════════════ CASE STUDY ════════════════════ */}
      {service.caseStudy && (
        <Reveal>
          <div className="py-20 md:py-24" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <p className="section-label">Case Study</p>
              <h2 className="text-[26px] md:text-[32px] font-bold text-[#f2f2ff] mt-1 mb-10">Results We've Delivered</h2>

              <div className="grid lg:grid-cols-[1fr_340px] gap-5">
                {/* Main card */}
                <div className="rounded-2xl border border-white/[0.08] overflow-hidden" style={{ background: "var(--bg)" }}>
                  <div className="px-7 py-5 border-b border-white/[0.06] flex flex-wrap items-center gap-3">
                    <span className={`text-[12px] font-semibold px-3 py-1.5 rounded-full ${ac.badgeBg} ${ac.border} border ${ac.text}`}>
                      {service.caseStudy.industry}
                    </span>
                    <span className="text-[12px] px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-[#8888a8]">
                      {service.caseStudy.client}
                    </span>
                  </div>
                  <div className="p-7 space-y-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#48486a] mb-2.5">The Challenge</p>
                      <p className="text-[15px] text-[#8888a8] leading-[1.8]">{service.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#48486a] mb-2.5">The Result</p>
                      <p className={`text-[15px] font-semibold leading-[1.8] ${ac.text}`}>{service.caseStudy.result}</p>
                    </div>
                  </div>
                </div>

                {/* Quote card */}
                {service.caseStudy.quote && (
                  <div
                    className={`rounded-2xl border ${ac.border} p-7 flex flex-col`}
                    style={{ background: `radial-gradient(ellipse 120% 80% at 10% 100%, ${ac.glow}, var(--bg) 65%)` }}
                  >
                    <Star className={`w-5 h-5 mb-5 ${ac.text} opacity-80`} />
                    <blockquote className="text-[15px] text-[#d4d4f0] leading-[1.75] italic flex-1 mb-6">
                      "{service.caseStudy.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3 pt-5 border-t border-white/[0.07]">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold ${ac.bg} border ${ac.border} ${ac.text}`}>
                        {service.caseStudy.client[0]}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-[#f2f2ff]">{service.caseStudy.client}</p>
                        <p className="text-[11px] text-[#48486a]">{service.caseStudy.industry}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* ════════════════════ INDUSTRIES ════════════════════ */}
      {service.industries.length > 0 && (
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
            <p className="section-label">Industries Served</p>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {service.industries.map((ind) => (
                <span
                  key={ind}
                  className="text-[13px] px-4 py-2 rounded-full border border-white/[0.07] text-[#8888a8] hover:border-white/[0.14] hover:text-[#f2f2ff] transition-all duration-200 cursor-default"
                  style={{ background: "var(--surface)" }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* ════════════════════ FAQ ════════════════════ */}
      {service.faq.length > 0 && (
        <Reveal>
          <div className="py-20 md:py-24" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <p className="section-label">FAQ</p>
              <h2 className="text-[26px] md:text-[32px] font-bold text-[#f2f2ff] mt-1 mb-10">Frequently Asked Questions</h2>
              <div className="max-w-3xl">
                <FAQAccordion items={service.faq} />
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* ════════════════════ CTA ════════════════════ */}
      <Reveal>
        <div className="relative overflow-hidden py-20 md:py-28" style={{ borderTop: "1px solid var(--border)" }}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 60% 90% at 50% 50%, ${ac.glow} 0%, transparent 65%)` }}
          />
          <div className="relative max-w-7xl mx-auto px-6 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div>
                <p className="section-label">Get Started</p>
                <h2 className="text-[28px] md:text-[38px] font-bold text-[#f2f2ff] leading-[1.15] mt-1 mb-4">
                  {service.cta.heading}
                </h2>
                <p className="text-[#8888a8] text-[16px] leading-[1.75] mb-8 max-w-md">
                  {service.cta.subtext}
                </p>
                <div className="flex flex-wrap gap-3 mb-7">
                  <a
                    href="https://wa.me/918814012395?text=Hi%20Auravon%2C%20I%20want%20to%20enquire%20about%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-3.5 !px-7"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                  <Link href="/contact" className="btn-secondary !py-3.5 !px-7">
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex flex-wrap gap-5 text-[12.5px] text-[#48486a]">
                  <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" />+91 88140 12395</span>
                  <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" />India &amp; Worldwide</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.07] p-7 md:p-8" style={{ background: "var(--surface)" }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#48486a] mb-6">When you reach out</p>
                <ul className="space-y-5">
                  {[
                    { icon: CheckCircle2, color: "text-emerald-400", text: "Free 30-minute discovery call with our specialist team" },
                    { icon: Star,         color: "text-amber-400",   text: "Clear, scoped proposal within 24–48 hours" },
                    { icon: Shield,       color: "text-violet-400",  text: "No pressure — a conversation, not a sales pitch" },
                    { icon: Users,        color: "text-blue-400",    text: "Direct access to the team doing your work" },
                    { icon: TrendingUp,   color: "text-emerald-400", text: "Honest advice on what will actually drive results" },
                  ].map(({ icon: Icon, color, text }) => (
                    <li key={text} className="flex items-start gap-3.5">
                      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${color}`} />
                      <p className="text-[14px] text-[#c4c4d8] leading-snug">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </Reveal>

      {/* ════════════════════ RELATED ════════════════════ */}
      {related.length > 0 && (
        <Reveal>
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
            <p className="section-label">Related Services</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Link
                    href={`/services/${rel.slug}`}
                    className="group flex flex-col gap-2.5 rounded-xl p-5 border border-white/[0.06] hover:border-white/[0.13] transition-all duration-200 hover:-translate-y-1 h-full"
                    style={{ background: "var(--surface)" }}
                  >
                    <h3 className="text-[14px] font-semibold text-[#f2f2ff]">{rel.title}</h3>
                    <p className="text-[12px] text-[#8888a8] leading-relaxed line-clamp-2 flex-1">{rel.tagline}</p>
                    <span className={`flex items-center gap-1 text-[12px] font-semibold mt-1 ${ac.text}`}>
                      Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      <StickyServiceBar serviceTitle={service.title} accentColor={service.accent} />
    </div>
  );
}

// ─── Scroll reveal wrapper ──────────────────────────────────

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}
