"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MessageCircle, Clock, ArrowRight, Send, CheckCircle2,
  MapPin, Calendar, Globe, ChevronDown,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const contactCards = [
  {
    icon: Mail,
    title: "General Support",
    value: "support@auravonai.com",
    href: "mailto:support@auravonai.com",
    description: "General inquiries and support",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/15",
  },
  {
    icon: Mail,
    title: "Project Inquiries",
    value: "projects@auravonai.com",
    href: "mailto:projects@auravonai.com",
    description: "Start a new project with us",
    accentText: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/15",
  },
  {
    icon: Mail,
    title: "Business",
    value: "contacts@auravonai.com",
    href: "mailto:contacts@auravonai.com",
    description: "Partnerships and opportunities",
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/15",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 88140 12395",
    href: "https://wa.me/918814012395?text=Hi%20Auravon%20AI%2C%20I%20want%20to%20discuss%20a%20project",
    description: "Fastest — usually within 1 hour",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/15",
  },
];

const projectTypes = [
  "Website Development", "Mobile App Development", "AI Solutions",
  "SaaS Product", "Custom Software", "UI/UX Design", "Automation", "Other",
];

const budgetRanges = [
  "Under ₹50,000", "₹50,000 – ₹2,00,000", "₹2,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000", "₹10,00,000+", "Let's discuss",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-[#07071a] border border-white/[0.08] text-white text-[14px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/[0.15] transition-all duration-200";

const labelClass = "block text-[12px] font-medium text-[#a0a0c0] mb-1.5";

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    projectType: "", budget: "", message: "", timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-16">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <div className="relative border-b border-white/[0.06] bg-[#090918] overflow-hidden hero-grid">
        {/* Radial violet glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -5%, rgba(124,58,237,0.12), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[13px] font-medium text-[#8888a8]">
                Available for New Projects
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-bold tracking-tight mb-4 leading-[1.08]">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-[#8888a8] text-[16px] max-w-xl mx-auto mb-8 leading-relaxed">
              Book a free 30-minute strategy call, or send us a message. We respond
              within 24 hours — usually much faster.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                { icon: CheckCircle2, text: "Responds within 24 hours", color: "text-emerald-400" },
                { icon: Globe,        text: "Working with startups globally", color: "text-blue-400" },
                { icon: Clock,        text: "Free 30-min strategy call", color: "text-violet-400" },
              ].map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[12px] text-[#8888a8]"
                >
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Contact Cards ─────────────────────────────────────────────────────── */}
      <section className="py-10 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map(
              ({ icon: Icon, title, value, href, description, accentText, accentBg, accentBorder }, i) => (
                <motion.a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="group flex flex-col rounded-2xl bg-[#090918] border border-white/[0.07] p-5 hover:border-white/[0.15] hover:shadow-lg hover:shadow-black/20 transition-colors duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl ${accentBg} border ${accentBorder} flex items-center justify-center mb-3 shrink-0`}
                  >
                    <Icon className={`w-5 h-5 ${accentText}`} />
                  </div>

                  {/* Label + value */}
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-[#48486a] mb-1">
                    {title}
                  </div>
                  <div className={`text-[13px] font-semibold ${accentText} break-all mb-1 flex-1`}>
                    {value}
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.05]">
                    <p className="text-[11px] text-[#48486a] leading-snug">{description}</p>
                    <ArrowRight
                      className={`w-3.5 h-3.5 ${accentText} shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                    />
                  </div>
                </motion.a>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── Form ── */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-7 md:p-8">
                <h2 className="text-[20px] font-bold text-white mb-1">
                  Send Us a Project Brief
                </h2>
                <p className="text-[13px] text-[#8888a8] mb-7">
                  We&apos;ll get back to you within 24 hours with a proposal.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-lg" />
                      <div className="relative w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      </div>
                    </div>
                    <h3 className="text-[20px] font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-[14px] text-[#8888a8] max-w-sm leading-relaxed">
                      We&apos;ll review your project brief and get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          type="text" name="name" required
                          value={formData.name} onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Email Address *</label>
                        <input
                          type="email" name="email" required
                          value={formData.email} onChange={handleChange}
                          placeholder="you@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Phone / WhatsApp</label>
                        <input
                          type="tel" name="phone"
                          value={formData.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Company / Startup</label>
                        <input
                          type="text" name="company"
                          value={formData.company} onChange={handleChange}
                          placeholder="Acme Inc."
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Row 3: Project Type + Budget */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Project Type *</label>
                        <div className="relative">
                          <select
                            name="projectType" required
                            value={formData.projectType} onChange={handleChange}
                            className={`${inputClass} appearance-none pr-10`}
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((t) => (
                              <option key={t} value={t} className="bg-[#090918]">{t}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Budget Range</label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget} onChange={handleChange}
                            className={`${inputClass} appearance-none pr-10`}
                          >
                            <option value="">Select budget range</option>
                            {budgetRanges.map((b) => (
                              <option key={b} value={b} className="bg-[#090918]">{b}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className={labelClass}>Timeline</label>
                      <input
                        type="text" name="timeline"
                        value={formData.timeline} onChange={handleChange}
                        placeholder="e.g., Need to launch in 6 weeks"
                        className={inputClass}
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label className={labelClass}>Project Description *</label>
                      <textarea
                        name="message" required
                        value={formData.message} onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project — what are you building, what problem does it solve, and what do you need from us?"
                        className={`${inputClass} resize-none leading-relaxed`}
                      />
                    </div>

                    {/* Submit */}
                    <div className="space-y-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Project Brief
                          </>
                        )}
                      </button>
                      <p className="text-center text-[11px] text-[#48486a]">
                        We usually respond within 24 hours · No commitment required
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-4">

              {/* Book a call */}
              <AnimatedSection
                direction="right"
                className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 hover:border-white/[0.14] hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/15 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">Book a Free Call</h3>
                <p className="text-[13px] text-[#8888a8] mb-4 leading-relaxed">
                  Prefer to talk? Book a free 30-minute strategy call directly on our calendar.
                </p>
                <a
                  href="https://calendly.com/auravonai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center text-[13px]"
                >
                  Open Calendly <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </AnimatedSection>

              {/* WhatsApp */}
              <AnimatedSection
                direction="right"
                delay={0.08}
                className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">WhatsApp Us</h3>
                <p className="text-[13px] text-[#8888a8] mb-4 leading-relaxed">
                  For the fastest response, message us directly on WhatsApp. We typically reply within 1 hour.
                </p>
                <a
                  href="https://wa.me/918814012395?text=Hi%20Auravon%20AI%2C%20I%20want%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[13px] font-semibold hover:bg-emerald-500/[0.18] hover:border-emerald-500/30 hover:-translate-y-px transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </AnimatedSection>

              {/* What to expect */}
              <AnimatedSection
                direction="right"
                delay={0.15}
                className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 hover:border-white/[0.13] transition-colors duration-300"
              >
                <h3 className="text-[15px] font-semibold text-white mb-4">What to Expect</h3>
                <div className="space-y-3">
                  {[
                    { icon: Clock,        text: "Response within 24 hours",     color: "text-violet-400",  bg: "bg-violet-500/10"  },
                    { icon: CheckCircle2, text: "Free project assessment",       color: "text-emerald-400", bg: "bg-emerald-500/10" },
                    { icon: MessageCircle,text: "No-obligation strategy call",   color: "text-blue-400",    bg: "bg-blue-500/10"    },
                    { icon: ArrowRight,   text: "Clear pricing & timeline",      color: "text-cyan-400",    bg: "bg-cyan-500/10"    },
                  ].map(({ icon: Icon, text, color, bg }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${color}`} />
                      </div>
                      <span className="text-[13px] text-[#c4c4d8]">{text}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Location */}
              <AnimatedSection
                direction="right"
                delay={0.2}
                className="rounded-2xl bg-[#090918] border border-white/[0.07] overflow-hidden hover:border-white/[0.13] transition-colors duration-300"
              >
                <div className="h-28 bg-[#0d0d1e] flex items-center justify-center border-b border-white/[0.06] relative overflow-hidden">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(124,58,237,0.08), transparent)",
                    }}
                  />
                  <div className="text-center relative">
                    <div className="w-10 h-10 rounded-full bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mx-auto mb-2">
                      <MapPin className="w-5 h-5 text-violet-400" />
                    </div>
                    <p className="text-[12px] font-medium text-[#8888a8]">
                      Remote Worldwide
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[12px] text-[#48486a] leading-relaxed">
                    We work remotely with clients globally across Asia, Europe, North America, and beyond.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
