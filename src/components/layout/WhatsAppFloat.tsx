"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2"
        >
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="w-5 h-5 rounded-full bg-[#090918]/90 border border-white/[0.12] flex items-center justify-center text-[#48486a] hover:text-white transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <a
            href="https://wa.me/918814012395?text=Hi%20Auravon%20AI%2C%20I%20want%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#22bf5e] shadow-xl shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-white" fill="white" />
            <span className="text-white text-[13px] font-semibold tracking-tight hidden sm:block">
              Chat on WhatsApp
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
