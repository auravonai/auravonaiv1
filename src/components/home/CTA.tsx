"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* ── Box ── */}
        <div className="relative rounded-3xl bg-[#090918] border border-white/[0.07] overflow-hidden">
          {/* Subtle purple glow top */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-500/[0.05] to-transparent" />

          <AnimatedSection className="relative px-6 py-16 text-center sm:px-8 md:px-16 md:py-24 md:pb-20">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-[#8888a8]">
                Available for new projects — response within 24 hours
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              Ready to Build Your{" "}
              <span className="gradient-text">Next Digital Product?</span>
            </h2>

            <p className="text-[#8888a8] text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Book a free 30-minute strategy call and get a clear roadmap for your digital product — no commitment required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary text-[15px] !py-3.5 !px-7">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918814012395?text=Hi%20Auravon%20AI%2C%20I%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[15px] !py-3.5 !px-7"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[12px] text-[#48486a]">
              {[
                "Free consultation",
                "No commitment required",
                "Proposal within 3 business days",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
