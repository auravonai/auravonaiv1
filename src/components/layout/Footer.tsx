"use client";

import Link from "next/link";
import {
  Zap, X, Globe, Code2, Mail, MessageCircle, ArrowUpRight, Shield, FileText, RotateCcw,
} from "lucide-react";

const services = [
  { label: "Web Development", href: "/services#web" },
  { label: "Mobile Apps", href: "/services#mobile" },
  { label: "AI Solutions", href: "/services#ai" },
  { label: "Custom Software", href: "/services#custom" },
  { label: "UI/UX Design", href: "/services#design" },
  { label: "Automation", href: "/services#automation" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/payment" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy", icon: Shield },
  { label: "Terms & Conditions", href: "/terms", icon: FileText },
  { label: "Refund Policy", href: "/refund", icon: RotateCcw },
];

const emails = [
  { type: "Support", addr: "support@auravonai.com" },
  { type: "Projects", addr: "projects@auravonai.com" },
  { type: "Business", addr: "contacts@auravonai.com" },
  { type: "Careers", addr: "hr@auravonai.com" },
];

const socials = [
  { icon: X, href: "https://x.com/Auravon_Ai", label: "X / Twitter" },
  { icon: Globe, href: "https://www.linkedin.com/company/auravon-ai-tech/", label: "LinkedIn" },
  { icon: Code2, href: "https://github.com/auravonai", label: "GitHub" },
  { icon: MessageCircle, href: "https://wa.me/918814012395", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#05050f]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-20 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 md:gap-8 lg:gap-10 mb-14">

          {/* Brand col */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-2 min-w-0">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="text-[15px] font-bold">
                <span className="text-white">Auravon</span>
                <span className="gradient-text-purple"> AI</span>
              </span>
            </Link>

            <p className="text-[13px] text-[#8888a8] leading-relaxed max-w-[280px] mb-1">
              A small engineering studio building web apps, AI systems, and SaaS products. Based in India, working with founders globally.
            </p>
            <p className="text-[11px] text-[#48486a] mb-6">
              We typically respond within 24 hours.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5 mb-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[#090918] border border-white/[0.07] flex items-center justify-center text-[#8888a8] hover:text-white hover:border-white/[0.12] transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918814012395?text=Hi%20Auravon%20AI%2C%20I%20want%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[12px] font-medium hover:bg-emerald-500/15 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[13px] text-[#8888a8] hover:text-white transition-colors flex items-center gap-1 group">
                    {s.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">Company</p>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-[13px] text-[#8888a8] hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">Legal</p>
              <ul className="space-y-2.5">
                {legal.map(({ label, href, icon: Icon }) => (
                  <li key={href}>
                    <Link href={href} className="text-[13px] text-[#8888a8] hover:text-white transition-colors flex items-center gap-1.5">
                      <Icon className="w-3 h-3 shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0 sm:col-span-2 md:col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">Contact</p>
            <ul className="space-y-3">
              {emails.map(({ type, addr }) => (
                <li key={addr}>
                  <p className="text-[10px] text-[#48486a] uppercase tracking-wider mb-0.5">{type}</p>
                  <a
                    href={`mailto:${addr}`}
                    className="text-[12px] text-[#8888a8] hover:text-violet-400 transition-colors flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3 shrink-0" />
                    {addr}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#48486a]">
            © {new Date().getFullYear()} Auravon AI · Indie engineering studio · India
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Refund Policy", href: "/refund" },
              { label: "Contact", href: "/contact" },
              { label: "Services", href: "/services" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="text-[12px] text-[#48486a] hover:text-[#8888a8] transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-[#48486a]">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
