"use client";

import { useState, useEffect, startTransition } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setOpen(false);
    });
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#05050f]/85 backdrop-blur-xl border-b border-white/[0.07]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 lg:gap-4">

            {/* ── Logo ── */}
            <Link href="/" className="flex w-fit max-w-full items-center gap-2.5 justify-self-start min-w-0">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="text-[15px] font-bold tracking-tight truncate">
                <span className="text-white">Auravon</span>
                <span className="gradient-text-purple"> AI</span>
              </span>
            </Link>

            {/* ── Center Nav (desktop) — in-flow so links never stack on logo/CTA ── */}
            <nav className="hidden lg:flex items-center justify-center gap-0.5 justify-self-center shrink-0">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors duration-150 whitespace-nowrap ${
                    isActive(href)
                      ? "text-white"
                      : "text-[#8888a8] hover:text-[#d4d4f0]"
                  }`}
                >
                  {isActive(href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/[0.07]"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              ))}
            </nav>

            {/* ── Right: desktop CTA + mobile toggle (same grid cell) ── */}
            <div className="flex items-center justify-end gap-3 shrink-0 justify-self-end min-w-0">
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/payment"
                  className="text-[13px] font-medium text-[#8888a8] hover:text-white transition-colors whitespace-nowrap"
                >
                  Pricing
                </Link>
                <Link href="/contact" className="btn-primary text-[13px] !py-2 !px-4 shrink-0 whitespace-nowrap">
                  Start a Project
                </Link>
              </div>
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[#8888a8] hover:text-white hover:bg-white/[0.06] transition-all shrink-0"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={open ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden px-4 pt-2 pb-4"
          >
            <div className="rounded-2xl bg-[#09091a]/96 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/60 overflow-hidden">
              <nav className="p-3 space-y-0.5">
                {navLinks.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={href}
                      className={`flex items-center px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                        isActive(href)
                          ? "bg-white/[0.07] text-white"
                          : "text-[#8888a8] hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="px-3 pb-3 pt-1 border-t border-white/[0.06] flex flex-col gap-2.5 mt-1">
                <Link
                  href="/payment"
                  className="text-center py-2.5 px-4 rounded-xl border border-white/[0.08] text-[13px] font-medium text-[#8888a8] hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  View Pricing
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
