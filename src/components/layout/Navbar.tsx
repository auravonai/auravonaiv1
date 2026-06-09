"use client";

import { useState, useEffect, useRef, startTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Zap, ArrowRight, ChevronDown,
  TrendingUp, Globe, ShoppingCart, Package,
  Share2, FileText, Palette, Briefcase, Star,
} from "lucide-react";
import { serviceCategories, ServiceCategory } from "@/lib/digital-agency-data";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, Globe, ShoppingCart, Package,
  Share2, FileText, Palette, Briefcase,
};

const accentText: Record<string, string> = {
  violet: "text-violet-400", blue: "text-blue-400",   emerald: "text-emerald-400",
  orange: "text-orange-400", pink: "text-pink-400",   cyan:    "text-cyan-400",
  amber:  "text-amber-400",  rose: "text-rose-400",
};
const accentBg: Record<string, string> = {
  violet: "bg-violet-500/10", blue: "bg-blue-500/10",   emerald: "bg-emerald-500/10",
  orange: "bg-orange-500/10", pink: "bg-pink-500/10",   cyan:    "bg-cyan-500/10",
  amber:  "bg-amber-500/10",  rose: "bg-rose-500/10",
};
const accentBorder: Record<string, string> = {
  violet: "border-violet-500/20", blue: "border-blue-500/20",   emerald: "border-emerald-500/20",
  orange: "border-orange-500/20", pink: "border-pink-500/20",   cyan:    "border-cyan-500/20",
  amber:  "border-amber-500/20",  rose: "border-rose-500/20",
};

// ── Featured services shown in the left panel of mega menu ──
const featuredServices = [
  { label: "SEO Services",          slug: "seo",                  icon: TrendingUp, accent: "violet", desc: "Rank higher, get more traffic" },
  { label: "Google Ads",            slug: "google-ads",            icon: TrendingUp, accent: "blue",   desc: "Paid search that converts" },
  { label: "Website Development",   slug: "website-development",  icon: Globe,      accent: "emerald",desc: "Fast, lead-generating websites" },
  { label: "Shopify Development",   slug: "shopify-development",  icon: ShoppingCart,accent:"orange", desc: "High-converting online stores" },
  { label: "Social Media Mgmt",     slug: "instagram-management", icon: Share2,     accent: "pink",   desc: "Build reach & generate leads" },
  { label: "Meta Ads",              slug: "meta-ads",              icon: Star,       accent: "cyan",   desc: "Facebook & Instagram campaigns" },
];

const staticLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about",    label: "About" },
  { href: "/blog",     label: "Blog" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled,           setScrolled]           = useState(false);
  const [mobileOpen,         setMobileOpen]         = useState(false);
  const [megaOpen,           setMegaOpen]           = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCatOpen,      setMobileCatOpen]      = useState<string | null>(null);
  const pathname = usePathname();
  const megaRef  = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setMobileOpen(false);
      setMegaOpen(false);
      setMobileServicesOpen(false);
      setMobileCatOpen(null);
    });
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const isServicesActive = pathname.startsWith("/services");

  function handleServicesEnter() {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  }
  function handleServicesLeave() {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 120);
  }
  function handleMegaEnter() {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
  }
  function handleMegaLeave() {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 120);
  }

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#05050f]/90 backdrop-blur-xl border-b border-white/[0.07]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex h-16 items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="text-[15px] font-bold tracking-tight hidden sm:block">
                <span className="text-white">Auravon</span>
                <span className="gradient-text-purple"> AI</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
                ref={megaRef}
              >
                <button
                  className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors duration-150 ${
                    isServicesActive || megaOpen
                      ? "text-white bg-white/[0.07]"
                      : "text-[#8888a8] hover:text-[#d4d4f0]"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {staticLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors duration-150 ${
                    isActive(href) ? "text-white" : "text-[#8888a8] hover:text-[#d4d4f0]"
                  }`}
                >
                  {isActive(href) && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-lg bg-white/[0.07]" transition={{ type: "spring", bounce: 0.15, duration: 0.4 }} />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              ))}
            </nav>

            {/* Desktop right CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link href="/contact" className="text-[13px] font-medium text-[#8888a8] hover:text-white transition-colors">
                Get Quote
              </Link>
              <Link href="/contact" className="btn-primary text-[13px] !py-2 !px-4">
                Start a Project
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[#8888a8] hover:text-white hover:bg-white/[0.06] transition-all shrink-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={mobileOpen ? "close" : "open"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── MEGA MENU ── */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
            className="hidden lg:block fixed inset-x-0 top-16 z-40"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="rounded-2xl bg-[#09091a]/98 backdrop-blur-2xl border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden">

                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a]">Services</span>
                    <span className="text-[11px] text-[#48486a]">·</span>
                    <span className="text-[11px] text-[#48486a]">Serving India & Worldwide</span>
                  </div>
                  <Link href="/services" className="text-[12px] font-medium text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors">
                    View all services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Two-panel body */}
                <div className="flex">

                  {/* Left: Featured services */}
                  <div className="w-[280px] shrink-0 border-r border-white/[0.06] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#48486a] mb-3 px-1">
                      Most Requested
                    </p>
                    <div className="space-y-1">
                      {featuredServices.map((fs) => {
                        const Icon = fs.icon;
                        const at = accentText[fs.accent] ?? "text-violet-400";
                        const ab = accentBg[fs.accent]   ?? "bg-violet-500/10";
                        return (
                          <Link
                            key={fs.slug}
                            href={`/services/${fs.slug}`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/feat"
                          >
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${ab}`}>
                              <Icon className={`w-3.5 h-3.5 ${at}`} />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[12.5px] font-semibold text-[#d4d4f0] group-hover/feat:text-white transition-colors leading-none mb-0.5">
                                {fs.label}
                              </p>
                              <p className="text-[11px] text-[#48486a] leading-tight truncate">{fs.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/[0.05]">
                      <Link href="/services" className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-medium text-violet-400 hover:bg-white/[0.04] transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                        All 34 services
                      </Link>
                    </div>
                  </div>

                  {/* Right: All categories — compact 2×4 grid */}
                  <div className="flex-1 min-w-0 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#48486a] mb-3 px-1">
                      All Service Categories
                    </p>
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-1">
                      {serviceCategories.map((cat) => (
                        <MegaCategory key={cat.slug} category={cat} />
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom bar CTA */}
                <div className="flex items-center justify-between px-6 py-3 border-t border-white/[0.06] bg-white/[0.01]">
                  <p className="text-[12px] text-[#48486a]">Not sure what you need? We'll figure it out together.</p>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white bg-violet-600 hover:bg-violet-500 px-4 py-1.5 rounded-lg transition-colors">
                    Book Free Consultation <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden px-4 pt-2 pb-6 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="rounded-2xl bg-[#09091a]/96 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/60 overflow-hidden">
              <div className="p-3">

                {/* Services accordion trigger */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                    isServicesActive
                      ? "bg-white/[0.07] text-white"
                      : "text-[#8888a8] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-1 space-y-0.5 pl-2">
                        {serviceCategories.map((cat) => (
                          <MobileCategoryAccordion
                            key={cat.slug}
                            category={cat}
                            open={mobileCatOpen === cat.slug}
                            onToggle={() =>
                              setMobileCatOpen(mobileCatOpen === cat.slug ? null : cat.slug)
                            }
                          />
                        ))}
                        <Link href="/services" className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] font-medium text-violet-400 hover:bg-white/[0.04] transition-all">
                          <ArrowRight className="w-3.5 h-3.5" />
                          All Services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {staticLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`flex items-center px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                      isActive(href)
                        ? "bg-white/[0.07] text-white"
                        : "text-[#8888a8] hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              <div className="px-3 pb-3 pt-1 border-t border-white/[0.06] flex flex-col gap-2.5 mt-1">
                <Link href="/contact" className="text-center py-2.5 px-4 rounded-xl border border-white/[0.08] text-[13px] font-medium text-[#8888a8] hover:text-white hover:bg-white/[0.04] transition-all">
                  Get Free Quote
                </Link>
                <Link href="/contact" className="btn-primary justify-center !py-2.5 text-[14px]">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ── Compact mega menu category card ─────────────────────────

function MegaCategory({ category }: { category: ServiceCategory }) {
  const Icon = iconMap[category.icon] ?? Globe;
  const at = accentText[category.accent] ?? "text-violet-400";
  const ab = accentBg[category.accent]   ?? "bg-violet-500/10";
  const abr = accentBorder[category.accent] ?? "border-violet-500/20";

  return (
    <div className="p-2 rounded-xl hover:bg-white/[0.03] transition-colors group/col">
      <Link href={`/services/${category.slug}`} className="flex items-center gap-2 mb-2.5 group/cat">
        <div className={`w-6 h-6 rounded-md flex items-center justify-center ${ab} shrink-0`}>
          <Icon className={`w-3 h-3 ${at}`} />
        </div>
        <span className="text-[12px] font-semibold text-[#d4d4f0] group-hover/cat:text-white transition-colors leading-none">
          {category.label}
        </span>
      </Link>

      <ul className="space-y-0.5 pl-8">
        {category.subServices.slice(0, 2).map((sub) => (
          <li key={sub.slug}>
            <Link
              href={`/services/${sub.slug}`}
              className={`block text-[11.5px] text-[#48486a] hover:${at} hover:text-[11.5px] transition-colors leading-snug py-0.5 truncate`}
            >
              {sub.label}
            </Link>
          </li>
        ))}
        {category.subServices.length > 2 && (
          <li>
            <Link href={`/services/${category.slug}`} className={`text-[11px] ${at} opacity-70 hover:opacity-100 transition-opacity`}>
              +{category.subServices.length - 2} more →
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

// ── Mobile category accordion ────────────────────────────────

function MobileCategoryAccordion({
  category, open, onToggle,
}: {
  category: ServiceCategory;
  open: boolean;
  onToggle: () => void;
}) {
  const at = accentText[category.accent] ?? "text-violet-400";

  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-[13px] font-medium text-[#8888a8] hover:text-white hover:bg-white/[0.04] transition-all"
      >
        <span className={open ? "text-white" : ""}>{category.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180 " + at : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden pl-4"
          >
            <div className="py-1 space-y-0.5">
              {category.subServices.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/services/${sub.slug}`}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[12.5px] text-[#8888a8] hover:text-white hover:bg-white/[0.04] transition-all`}
                >
                  <ArrowRight className={`w-3 h-3 ${at}`} />
                  {sub.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
