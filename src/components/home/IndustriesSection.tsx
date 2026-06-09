"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  ShoppingBag, Building2, Stethoscope, GraduationCap, Utensils,
  Car, Home, Briefcase, Film, Landmark, Shirt, Dumbbell,
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  { icon: ShoppingBag,   label: "E-commerce & Retail",    color: "text-violet-400",  bg: "bg-violet-500/10" },
  { icon: Building2,     label: "Real Estate & Property",  color: "text-blue-400",    bg: "bg-blue-500/10" },
  { icon: Stethoscope,   label: "Healthcare & Wellness",   color: "text-rose-400",    bg: "bg-rose-500/10" },
  { icon: GraduationCap, label: "Education & EdTech",      color: "text-cyan-400",    bg: "bg-cyan-500/10" },
  { icon: Utensils,      label: "Restaurants & Food",      color: "text-orange-400",  bg: "bg-orange-500/10" },
  { icon: Briefcase,     label: "Professional Services",   color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: Car,           label: "Automotive & Mobility",   color: "text-amber-400",   bg: "bg-amber-500/10" },
  { icon: Home,          label: "Interior & Home Decor",   color: "text-pink-400",    bg: "bg-pink-500/10" },
  { icon: Shirt,         label: "Fashion & Lifestyle",     color: "text-indigo-400",  bg: "bg-indigo-500/10" },
  { icon: Landmark,      label: "Finance & Insurance",     color: "text-teal-400",    bg: "bg-teal-500/10" },
  { icon: Film,          label: "Entertainment & Media",   color: "text-purple-400",  bg: "bg-purple-500/10" },
  { icon: Dumbbell,      label: "Fitness & Sports",        color: "text-lime-400",    bg: "bg-lime-500/10" },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#05050f]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <span className="section-label">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
            Your Industry,{" "}
            <span className="gradient-text">Our Expertise</span>
          </h2>
          <p className="text-[#8888a8] text-[16px] max-w-2xl mx-auto leading-relaxed">
            We've helped businesses across 12+ industries grow their online presence, generate qualified
            leads, and scale revenue through targeted digital marketing and web strategies.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
          {industries.map(({ icon: Icon, label, color, bg }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-[#090918] border border-white/[0.06] hover:border-white/[0.12] transition-all group text-center cursor-default"
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${bg}`}>
                <Icon className={`w-4.5 h-4.5 ${color}`} style={{ width: "18px", height: "18px" }} />
              </div>
              <p className="text-[11.5px] font-medium text-[#8888a8] group-hover:text-[#c4c4d8] transition-colors leading-tight">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <p className="text-[13px] text-[#8888a8] mb-4">
            Not seeing your industry? We work with all B2B and B2C businesses.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-violet-400 hover:text-violet-300 transition-colors"
          >
            Talk to us about your business
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
