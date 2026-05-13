"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote: "Auravon AI delivered our SaaS platform in record time. The AI features they integrated gave us a genuine competitive edge. Their code quality is exceptional — I've worked with many agencies, none come close.",
    name: "Arjun Mehta",
    role: "CEO, FinTech Startup",
    initials: "AM",
    color: "bg-violet-500",
  },
  {
    quote: "The new website converted 3× better than our old one from day one. They understood our users better than we expected and the Lighthouse scores are perfect. Outstanding team.",
    name: "Sarah Thompson",
    role: "Product Manager, E-Commerce Brand",
    initials: "ST",
    color: "bg-blue-500",
  },
  {
    quote: "The AI chatbot system they built handles 80% of our customer queries automatically. Support costs dropped by 65%. The quality of the AI integration is world-class.",
    name: "Ravi Kumar",
    role: "CTO, HealthTech Company",
    initials: "RK",
    color: "bg-cyan-600",
  },
  {
    quote: "From design to deployment in 3 weeks. Auravon understood our vision perfectly and delivered a platform our users love. Their attention to detail is phenomenal.",
    name: "Priya Sharma",
    role: "Founder, EdTech Startup",
    initials: "PS",
    color: "bg-emerald-600",
  },
  {
    quote: "We hired Auravon to revamp our entire tech stack. The result was a 10× improvement in performance and a codebase we can actually maintain. Worth every rupee.",
    name: "Daniel Park",
    role: "Director of Engineering, Logistics Platform",
    initials: "DP",
    color: "bg-orange-500",
  },
  {
    quote: "Our SEO rankings shot up after Auravon rebuilt our site. The technical SEO implementation was thorough and organic traffic grew 200% in 3 months. Incredible team.",
    name: "Neha Gupta",
    role: "Marketing Director, SaaS Company",
    initials: "NG",
    color: "bg-pink-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="section-label">Client stories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Trusted by{" "}
            <span className="gradient-text">Founders & Teams</span>
          </h2>
          <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed">
            Don&apos;t take our word for it — here&apos;s what our clients say about working with Auravon AI.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, initials, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex min-w-0 flex-col rounded-2xl bg-[#090918] border border-white/[0.07] p-6 md:p-7 hover:border-white/[0.12] transition-colors duration-200"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[14px] text-[#c4c4d8] leading-[1.75] mb-6 flex-1">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-[11px] font-bold shrink-0`}>
                  {initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white">{name}</div>
                  <div className="text-[11px] text-[#48486a] mt-0.5">{role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <AnimatedSection delay={0.3} className="relative z-10 mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#090918] border border-white/[0.07]">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-semibold text-sm">5.0</span>
            <span className="text-[#8888a8] text-sm">· 30+ verified client reviews</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
