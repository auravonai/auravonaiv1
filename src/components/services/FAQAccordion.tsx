"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ServiceFAQ } from "@/lib/digital-agency-data";

export default function FAQAccordion({ items }: { items: ServiceFAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  if (!items.length) return null;

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-white/[0.07] bg-[#090918] overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
            aria-expanded={open === i}
          >
            <span className="text-[15px] font-medium text-[#f2f2ff] leading-snug">
              {item.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 shrink-0 text-[#8888a8] transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>

          {open === i && (
            <div className="px-6 pb-5 text-[14px] text-[#8888a8] leading-relaxed border-t border-white/[0.05]">
              <p className="pt-4">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
