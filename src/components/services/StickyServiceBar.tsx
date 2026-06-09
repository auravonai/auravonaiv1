"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowRight, X } from "lucide-react";

const accentGrad: Record<string, string> = {
  violet:  "from-violet-600 to-indigo-600",
  blue:    "from-blue-600 to-violet-600",
  emerald: "from-emerald-600 to-teal-600",
  orange:  "from-orange-500 to-amber-500",
  pink:    "from-pink-600 to-rose-600",
  cyan:    "from-cyan-600 to-blue-600",
  amber:   "from-amber-500 to-orange-500",
  rose:    "from-rose-600 to-pink-600",
};

interface Props {
  serviceTitle: string;
  accentColor: string;
}

export default function StickyServiceBar({ serviceTitle, accentColor }: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (dismissed) return null;

  const grad = accentGrad[accentColor] ?? accentGrad.violet;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
          className="fixed bottom-0 inset-x-0 z-40 lg:hidden"
        >
          <div className="bg-[#09091a]/96 backdrop-blur-xl border-t border-white/[0.08] px-4 py-3 flex items-center gap-2.5 safe-area-pb">
            <p className="text-[12.5px] text-[#c4c4d8] flex-1 leading-tight min-w-0">
              <span className="text-white font-semibold">Free consultation</span>{" "}
              on {serviceTitle}
            </p>
            <a
              href="https://wa.me/918814012395?text=Hi%20Auravon%2C%20I%20want%20to%20enquire%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r ${grad} text-white text-[12px] font-semibold shadow-lg`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="shrink-0 flex items-center gap-1 px-3 py-2 rounded-xl bg-white/[0.07] border border-white/[0.1] text-white text-[12px] font-medium"
            >
              Enquire
              <ArrowRight className="w-3 h-3" />
            </Link>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="shrink-0 p-1 text-[#48486a] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
