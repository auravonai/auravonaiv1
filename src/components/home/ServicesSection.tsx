"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp, Globe, ShoppingCart, Share2,
  Palette, Briefcase, ArrowRight, Target,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description:
      "Rank higher on Google, drive organic traffic, and grow leads with data-backed SEO, Google Ads, Meta Ads, and performance marketing campaigns.",
    tags: ["SEO", "Google Ads", "Meta Ads"],
    href: "/services/digital-marketing",
    color: "violet",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-converting, fast-loading business websites built to generate leads — from landing pages and corporate sites to full web portals.",
    tags: ["Next.js", "WordPress", "Custom CMS"],
    href: "/services/website-development",
    color: "blue",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    description:
      "Launch and scale your online store with Shopify, WooCommerce, or a custom platform. We handle development, design, and marketplace management.",
    tags: ["Shopify", "WooCommerce", "Amazon"],
    href: "/services/ecommerce-development",
    color: "emerald",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Build brand authority and generate leads through consistent, strategic content across Instagram, Facebook, and LinkedIn — managed end to end.",
    tags: ["Instagram", "Facebook", "Reels & Ads"],
    href: "/services/social-media-handling",
    color: "pink",
  },
  {
    icon: Target,
    title: "Content Marketing",
    description:
      "SEO-optimised blog posts, website copy, and keyword research that attract buyers at every stage of the funnel — not just website visitors.",
    tags: ["SEO Blogs", "Web Copy", "Keyword Research"],
    href: "/services/content-marketing",
    color: "orange",
  },
  {
    icon: Palette,
    title: "Graphic Design & Branding",
    description:
      "Memorable logos, brand identities, and social media creatives that communicate your value and make your business instantly recognisable.",
    tags: ["Logo Design", "Brand Identity", "Social Creatives"],
    href: "/services/graphic-design",
    color: "cyan",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Growth strategy, digital roadmaps, and market research to help you make the right decisions — and execute them with a clear plan.",
    tags: ["Growth Strategy", "Market Research", "Digital Roadmap"],
    href: "/services/business-consulting",
    color: "amber",
  },
];

const iconColors: Record<string, string> = {
  violet: "bg-violet-500/15 text-violet-400",
  blue:   "bg-blue-500/15 text-blue-400",
  emerald:"bg-emerald-500/15 text-emerald-400",
  pink:   "bg-pink-500/15 text-pink-400",
  orange: "bg-orange-500/15 text-orange-400",
  cyan:   "bg-cyan-500/15 text-cyan-400",
  amber:  "bg-amber-500/15 text-amber-400",
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="section-label">What we do</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Full-Service Digital Agency{" "}
            <span className="gradient-text">For Growing Businesses</span>
          </h2>
          <p className="text-[#8888a8] text-lg max-w-2xl mx-auto leading-relaxed">
            From getting found on Google to closing more sales online — every service your
            business needs to grow, under one roof.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, description, tags, href, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group flex min-w-0 flex-col rounded-2xl bg-[#090918] border border-white/[0.07] p-6 hover:border-white/[0.13] transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${iconColors[color]}`}>
                <Icon className="w-5 h-5" />
              </div>

              <h3 className="text-[15px] font-semibold text-white mb-2">{title}</h3>
              <p className="text-[#8888a8] text-[13px] leading-relaxed mb-5 flex-1">{description}</p>

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

        <AnimatedSection delay={0.2} className="text-center mt-14">
          <Link href="/services" className="btn-secondary">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
