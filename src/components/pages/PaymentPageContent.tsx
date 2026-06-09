"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Shield, ArrowRight,
  User, Mail, Phone, Lock, ChevronDown,
  FileText, MessageSquare, Package, Headphones,
  TrendingUp, Globe, ShoppingCart, Share2,
  Palette, Briefcase, CreditCard, Zap, MessageCircle,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}
interface RazorpayOptions {
  key: string; amount: number; currency: string; order_id: string;
  name: string; description: string;
  handler: (r: RazorpayResponse) => void;
  prefill: { name: string; email: string; contact: string };
  theme: { color: string };
  modal: { ondismiss: () => void };
}
interface RazorpayInstance { open: () => void; }
interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

// ── Services a client can select ──────────────────────────────
const serviceOptions = [
  { icon: TrendingUp, label: "Digital Marketing & SEO" },
  { icon: Globe,      label: "Website Development" },
  { icon: ShoppingCart,label: "Ecommerce Solutions" },
  { icon: Share2,     label: "Social Media Management" },
  { icon: Palette,    label: "Graphic Design & Branding" },
  { icon: Briefcase,  label: "Business Consulting" },
];

const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹2,00,000",
  "₹2,00,000+",
  "Not sure yet",
];

const trustCards = [
  { icon: FileText,     title: "Clear Scope, No Surprises",   desc: "Deliverables and timelines agreed before we start. You always know exactly what's being done and when.", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/15" },
  { icon: MessageSquare,title: "Direct Communication",         desc: "You speak directly to the team building your campaigns — no account managers, no layers of bureaucracy.", color: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/15" },
  { icon: Package,      title: "Measurable Results",           desc: "We report on what matters — leads generated, traffic growth, conversions — not just vanity metrics.", color: "text-emerald-400",bg: "bg-emerald-500/10",border: "border-emerald-500/15" },
  { icon: Headphones,   label: "Ongoing Support",              title: "Ongoing Support",    desc: "We don't disappear after launch. Every engagement includes continued support and regular performance reviews.", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/15" },
];

const faqs = [
  { q: "How soon can you start?",      a: "For most projects, we can begin within 3–5 business days of receiving your brief and completing an initial discovery call. Urgent timelines can be accommodated — mention it in your brief." },
  { q: "Do you offer fixed-price projects?", a: "Yes. After reviewing your brief, we send a fixed-scope proposal outlining exactly what's included, the timeline, and the total investment. No open-ended billing." },
  { q: "Are there any long-term contracts?", a: "No. Monthly retainer services (like SEO or social media management) run month to month. We don't lock you into 6- or 12-month contracts." },
  { q: "What if I only need one service?",  a: "Absolutely fine. Many clients start with a single service — like SEO or website development — and add more as results come in. There's no minimum engagement." },
  { q: "How do I pay for approved work?",   a: "Once a proposal is accepted, we send an invoice you can pay online via UPI, card, net banking, or bank transfer. GST invoices available on request." },
];

const fieldClass =
  "w-full px-4 py-3 rounded-xl bg-[#05050f] border border-white/[0.08] text-white text-[14px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/15 transition-all";
const fieldClassIcon =
  "w-full pl-10 pr-4 py-3 rounded-xl bg-[#05050f] border border-white/[0.08] text-white text-[14px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/15 transition-all";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left group">
        <span className="text-[14px] font-medium text-[#c4c4d8] group-hover:text-white transition-colors pr-6">{q}</span>
        <ChevronDown className={`w-4 h-4 text-[#48486a] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: "easeInOut" }} className="overflow-hidden">
            <p className="text-[13px] text-[#8888a8] leading-relaxed pb-4 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Razorpay Pay Invoice section ─────────────────────────────
function PayInvoiceSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState<{ paymentId: string; amount: string } | null>(null);
  const [payerInfo, setPayerInfo] = useState({ name: "", email: "", phone: "" });
  const [customAmount, setCustomAmount] = useState("");

  const loadRazorpay = (): Promise<boolean> =>
    new Promise((resolve) => {
      if (typeof window !== "undefined" && window.Razorpay) { resolve(true); return; }
      const s = document.createElement("script");
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.body.appendChild(s);
    });

  const handlePayment = async () => {
    if (!payerInfo.name || !payerInfo.email) { alert("Please enter your name and email."); return; }
    const amount = Number(customAmount);
    if (!amount || amount < 1000) { alert("Minimum payment amount is ₹1,000."); return; }
    setIsLoading(true);
    const orderRes = await fetch("/api/create-order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ amount, planName: "Invoice Payment" }) });
    if (!orderRes.ok) { alert("Could not initiate payment. Please try again."); setIsLoading(false); return; }
    const { orderId } = await orderRes.json();
    const loaded = await loadRazorpay();
    if (!loaded) { alert("Payment gateway could not be loaded. Please try again."); setIsLoading(false); return; }
    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: amount * 100, currency: "INR", order_id: orderId,
      name: "Auravon AI", description: "Invoice Payment",
      handler: async (response: RazorpayResponse) => {
        const v = await fetch("/api/verify-payment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(response) });
        if (v.ok) setSuccessState({ paymentId: response.razorpay_payment_id, amount: `₹${amount.toLocaleString("en-IN")}` });
        else alert("Verification failed. Payment ID: " + response.razorpay_payment_id);
        setIsLoading(false);
      },
      prefill: { name: payerInfo.name, email: payerInfo.email, contact: payerInfo.phone },
      theme: { color: "#7c3aed" },
      modal: { ondismiss: () => setIsLoading(false) },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (successState) {
    return (
      <div className="rounded-2xl bg-[#090918] border border-emerald-500/25 p-6 text-center">
        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
        <h3 className="text-white font-bold text-[16px] mb-1">Payment Confirmed</h3>
        <p className="text-[#8888a8] text-[13px] mb-3">We'll be in touch within 24 hours to confirm and get started.</p>
        <p className="text-[11px] text-[#48486a]">Payment ID: <span className="font-mono text-[#8888a8]">{successState.paymentId}</span></p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
          <input type="text" placeholder="Full Name *" value={payerInfo.name} onChange={(e) => setPayerInfo({ ...payerInfo, name: e.target.value })} className={fieldClassIcon} />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
          <input type="email" placeholder="Email Address *" value={payerInfo.email} onChange={(e) => setPayerInfo({ ...payerInfo, email: e.target.value })} className={fieldClassIcon} />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
          <input type="tel" placeholder="Phone (optional)" value={payerInfo.phone} onChange={(e) => setPayerInfo({ ...payerInfo, phone: e.target.value })} className={fieldClassIcon} />
        </div>
      </div>
      <div className="flex gap-3 items-end">
        <div className="flex-1 relative">
          <label className="block text-[11px] font-medium text-[#8888a8] mb-1.5">Invoice Amount (INR) *</label>
          <span className="absolute left-3.5 bottom-3 text-[#8888a8] text-[14px] pointer-events-none">₹</span>
          <input type="number" placeholder="e.g. 25000" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} className="w-full pl-7 pr-4 py-3 rounded-xl bg-[#05050f] border border-white/[0.08] text-white text-[14px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/15 transition-all" />
          <p className="text-[10px] text-[#48486a] mt-1">Minimum: ₹1,000</p>
        </div>
        <button onClick={handlePayment} disabled={isLoading || !customAmount || Number(customAmount) < 1000} className="btn-primary flex items-center gap-2 text-[13px] disabled:opacity-50 shrink-0 mb-5">
          {isLoading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Lock className="w-3.5 h-3.5" /> Pay Invoice</>}
        </button>
      </div>
      <div className="flex flex-wrap gap-4 pt-1">
        {[{ label: "256-bit SSL" }, { label: "Secured by Razorpay" }, { label: "UPI · Cards · Net Banking" }].map(({ label }) => (
          <span key={label} className="flex items-center gap-1.5 text-[11px] text-[#48486a]">
            <Shield className="w-3 h-3 text-emerald-400" />{label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────

export default function PaymentPageContent() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [brief, setBrief] = useState("");
  const [budget, setBudget] = useState("");
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  const toggleService = (label: string) =>
    setSelectedServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.name || !contact.email) { alert("Please enter your name and email."); return; }
    if (selectedServices.length === 0) { alert("Please select at least one service."); return; }

    const msg = encodeURIComponent(
      `Hi Auravon AI,\n\nI'd like to request a proposal.\n\nServices needed: ${selectedServices.join(", ")}\n\nProject brief: ${brief || "—"}\n\nBudget: ${budget || "—"}\n\nName: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone || "—"}`
    );
    window.open(`https://wa.me/918814012395?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-[#030308]">
        <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-md w-full mx-auto px-6 text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl" />
            <div className="relative w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Brief Sent!</h1>
          <p className="text-[#8888a8] mb-8 leading-relaxed">
            Your project brief has been sent via WhatsApp. We typically respond within a few hours with questions or a draft proposal.
          </p>
          <div className="flex gap-3 justify-center">
            <a href="/services" className="px-5 py-2.5 rounded-xl bg-[#090918] border border-white/[0.07] text-[13px] text-white font-medium hover:border-white/[0.14] transition-all">
              Explore Services
            </a>
            <a href="/" className="btn-primary text-[13px] px-5 py-2.5">Back to Home</a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-[#030308]">

      {/* ── Hero ── */}
      <div className="relative border-b border-white/[0.06] bg-[#090918] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 65% at 50% -10%, rgba(124,58,237,0.13), transparent)" }} />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 py-14 md:py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-400 text-[11px] font-semibold uppercase tracking-widest mb-5">
              <MessageCircle className="w-3.5 h-3.5" />
              Free Consultation · No Obligation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight mb-4">
              Request a <span className="gradient-text">Custom Proposal</span>
            </h1>
            <p className="text-[#8888a8] text-[16px] max-w-xl mx-auto mb-7 leading-relaxed">
              No fixed packages. Every engagement is scoped to your specific goals, industry, and budget. Tell us what you need and we'll put together a plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-[12px] text-[#48486a]">
              {["Free consultation included", "Response within 24 hours", "No long-term contracts"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />{t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Inquiry form ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-7">

              {/* Step 1: Services */}
              <div className="rounded-2xl bg-[#090918] border border-white/[0.08] p-6 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-1">Step 1</p>
                <h2 className="text-[16px] font-bold text-white mb-1">Which services do you need?</h2>
                <p className="text-[12px] text-[#48486a] mb-5">Select all that apply — we'll tailor the proposal accordingly.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceOptions.map(({ icon: Icon, label }) => {
                    const selected = selectedServices.includes(label);
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => toggleService(label)}
                        className={`flex items-center gap-2.5 px-3 py-3 rounded-xl border text-left transition-all ${
                          selected
                            ? "bg-violet-500/15 border-violet-500/40 text-white"
                            : "bg-white/[0.03] border-white/[0.07] text-[#8888a8] hover:border-white/[0.13] hover:text-white"
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${selected ? "text-violet-400" : ""}`} />
                        <span className="text-[12.5px] font-medium leading-tight">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Brief + Budget */}
              <div className="rounded-2xl bg-[#090918] border border-white/[0.08] p-6 md:p-8 space-y-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-1">Step 2</p>
                  <h2 className="text-[16px] font-bold text-white mb-4">About your project</h2>
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#8888a8] mb-1.5">What do you want to achieve? (optional)</label>
                  <textarea
                    placeholder="e.g. We want to rank on the first page for keywords related to our products and generate 50+ leads per month..."
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    rows={3}
                    className={`${fieldClass} resize-none`}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#8888a8] mb-1.5">Rough monthly / project budget</label>
                  <select value={budget} onChange={(e) => setBudget(e.target.value)} className={fieldClass}>
                    <option value="" className="bg-[#090918]">Select a range...</option>
                    {budgetRanges.map((r) => (
                      <option key={r} value={r} className="bg-[#090918]">{r}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Contact */}
              <div className="rounded-2xl bg-[#090918] border border-white/[0.08] p-6 md:p-8 space-y-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-1">Step 3</p>
                  <h2 className="text-[16px] font-bold text-white mb-4">Your contact details</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
                    <input type="text" placeholder="Full Name *" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} className={fieldClassIcon} />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
                    <input type="email" placeholder="Email Address *" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className={fieldClassIcon} />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
                    <input type="tel" placeholder="WhatsApp / Phone" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className={fieldClassIcon} />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 pt-2">
                  <Lock className="w-3 h-3 text-[#48486a] shrink-0" />
                  <p className="text-[11px] text-[#48486a]">
                    Your details are only used to respond to this enquiry. We never share or sell contact information.
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="btn-primary flex-1 justify-center !py-3.5 text-[15px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send My Project Brief via WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="/contact"
                  className="btn-secondary !py-3.5 !px-6 text-[14px] text-center"
                >
                  Use Contact Form Instead
                </a>
              </div>

            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Trust cards ── */}
      <section className="py-12 md:py-16 border-t border-white/[0.06] bg-[#090918]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label">Why clients choose Auravon AI</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-2">We work differently</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustCards.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`rounded-2xl bg-[#05050f] border ${item.border} p-5`}>
                  <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-[14px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[12px] text-[#8888a8] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pay Invoice (for existing clients) ── */}
      <section className="py-12 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-[#090918] border border-white/[0.07] overflow-hidden">
              <button
                onClick={() => setShowInvoice(!showInvoice)}
                className="w-full flex items-center justify-between px-6 py-5 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <CreditCard className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[14px] font-semibold text-white">Pay an Invoice</p>
                    <p className="text-[12px] text-[#48486a]">Already have an approved proposal? Pay securely via Razorpay.</p>
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-[#48486a] shrink-0 transition-transform duration-200 ${showInvoice ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {showInvoice && (
                  <motion.div key="inv" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <div className="px-6 pb-6 pt-4 border-t border-white/[0.06]">
                      <PayInvoiceSection />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 md:py-16 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-8">
            <span className="section-label">Before you submit</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">Common Questions</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-2xl bg-[#090918] border border-white/[0.07] px-6 py-1">
              {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-8 text-center">
            <p className="text-[13px] text-[#8888a8] mb-3">Still have questions?</p>
            <a href="https://wa.me/918814012395" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[14px] text-violet-400 hover:text-violet-300 font-medium transition-colors">
              Chat with us on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
