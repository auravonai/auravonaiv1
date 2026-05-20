"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Zap, Shield, Star, ArrowRight, CreditCard,
  Globe, Smartphone, Brain, Code2, Wrench,
  User, Mail, Phone, Lock, Clock, ChevronDown,
  Package, BadgeCheck, Headphones, FileText, MessageSquare,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description: string;
  handler: (response: RazorpayResponse) => void;
  prefill: { name: string; email: string; contact: string };
  theme: { color: string };
  modal: { ondismiss: () => void };
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

const plans = [
  {
    icon: Globe,
    name: "Starter Website",
    category: "Web Development",
    price: 18000,
    displayPrice: "₹18,000",
    description: "A professional online presence for early-stage startups and solo founders.",
    features: ["Up to 5 pages", "Mobile responsive design", "SEO optimization", "Contact form", "Basic analytics setup"],
    delivery: "3–4 weeks",
    support: "1 month",
    bestFor: "Landing pages & portfolios",
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
    badge: null,
  },
  {
    icon: Globe,
    name: "Business Website",
    category: "Web Development",
    price: 45000,
    displayPrice: "₹45,000",
    description: "Full-featured website with CMS, blog, and advanced features for growing businesses.",
    features: ["Up to 15 pages", "Custom CMS / Admin panel", "Blog with SEO", "Payment integration", "Multi-language support"],
    delivery: "6–8 weeks",
    support: "3 months",
    bestFor: "Agencies, consultancies, e-commerce",
    accentText: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/25",
    badge: "Most Popular",
  },
  {
    icon: Brain,
    name: "AI Integration",
    category: "AI Solutions",
    price: 65000,
    displayPrice: "₹65,000",
    description: "Add AI-powered features to your existing product — chatbots, document intelligence, or automation.",
    features: ["Custom AI chatbot (RAG)", "LLM integration (GPT-4/Claude)", "Document intelligence", "API integration", "Training on your data"],
    delivery: "5–7 weeks",
    support: "3 months",
    bestFor: "SaaS products & support tools",
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/20",
    badge: null,
  },
  {
    icon: Smartphone,
    name: "Mobile App",
    category: "Mobile Development",
    price: 120000,
    displayPrice: "₹1,20,000",
    description: "Cross-platform iOS & Android app with a full backend, designed for production from day one.",
    features: ["iOS & Android (React Native)", "Custom UI/UX design", "Backend API", "Push notifications", "App Store submission"],
    delivery: "10–14 weeks",
    support: "6 months",
    bestFor: "Consumer apps & field services",
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
    badge: null,
  },
  {
    icon: Code2,
    name: "SaaS MVP",
    category: "SaaS Development",
    price: 150000,
    displayPrice: "₹1,50,000+",
    description: "A complete SaaS product with auth, billing, multi-tenancy, and the core features to start selling.",
    features: ["Multi-tenant architecture", "Auth & user management", "Subscription billing", "Admin dashboard", "Email automation"],
    delivery: "12–16 weeks",
    support: "6 months",
    bestFor: "B2B SaaS & startup MVPs",
    accentText: "text-orange-400",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/20",
    badge: "Best Value",
  },
  {
    icon: Wrench,
    name: "Monthly Maintenance",
    category: "Maintenance",
    price: 6000,
    displayPrice: "₹6,000/mo",
    description: "Ongoing engineering care for your live product — bug fixes, updates, and technical support on retainer.",
    features: ["Bug fixes & updates", "Security patches", "Performance monitoring", "Backup management", "2 feature requests/month"],
    delivery: "Ongoing",
    support: "Priority",
    bestFor: "Live products needing continued care",
    accentText: "text-pink-400",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/20",
    badge: null,
  },
];

const trustReasons = [
  {
    icon: FileText,
    title: "Fixed-Scope Delivery",
    desc: "Deliverables and timeline agreed before work starts. No scope creep, no surprises mid-project.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/15",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    desc: "You speak to the engineers building your product — no account managers, no proxy layers.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/15",
  },
  {
    icon: Package,
    title: "Clean Code Handover",
    desc: "Full ownership of your codebase, deployed infrastructure, and project documentation.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/15",
  },
  {
    icon: Headphones,
    title: "Post-Launch Support",
    desc: "We don't disappear after delivery. Every package includes a dedicated support window.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/15",
  },
];

const faqs = [
  {
    q: "What is your refund policy?",
    a: "We offer a full refund for work not yet started. Once development begins, we invoice proportionally for completed milestones. All terms are outlined in a project agreement before payment.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit and debit cards, UPI, net banking, and EMI options through Razorpay. Bank transfers are available for larger projects. GST invoices are issued on request.",
  },
  {
    q: "How accurate are the delivery timelines?",
    a: "Our timelines assume timely client feedback at each milestone. We share a detailed project plan before work begins and flag any scope changes that could affect the delivery date.",
  },
  {
    q: "How many revisions are included?",
    a: "Each package includes two rounds of revisions per milestone. Additional revision rounds are billed at an agreed hourly rate, discussed and confirmed before the project starts.",
  },
  {
    q: "What does the support period cover?",
    a: "Support covers bug fixes, minor adjustments, and technical questions related to the delivered scope. New features beyond the original scope are quoted separately.",
  },
  {
    q: "Can we start smaller before committing to a full package?",
    a: "Yes — many clients start with a Starter Website or a focused discovery session before committing to a larger engagement. Reach out via the contact page to talk through your options first.",
  },
];

interface SuccessState {
  paymentId: string;
  planName: string;
  amount: string;
}

const fieldClass =
  "w-full pl-10 pr-4 py-3 rounded-xl bg-[#05050f] border border-white/[0.08] text-white text-[14px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/15 transition-all";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-[14px] font-medium text-[#c4c4d8] group-hover:text-white transition-colors pr-6">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#48486a] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[13px] text-[#8888a8] leading-relaxed pb-4 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PaymentPageContent() {
  const [selectedPlan, setSelectedPlan] = useState<(typeof plans)[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState<SuccessState | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [projectType, setProjectType] = useState("");
  const [customNotes, setCustomNotes] = useState("");
  const [requestInvoice, setRequestInvoice] = useState(false);
  const [payerInfo, setPayerInfo] = useState({ name: "", email: "", phone: "" });
  const [showCustom, setShowCustom] = useState(false);

  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window !== "undefined" && window.Razorpay) { resolve(true); return; }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (plan: (typeof plans)[0] | null, amount?: number) => {
    if (!payerInfo.name || !payerInfo.email) {
      alert("Please enter your name and email first.");
      return;
    }
    const payAmount = amount || plan?.price || 0;
    const planName = plan?.name || "Custom Payment";
    setIsLoading(true);

    const orderRes = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: payAmount, planName }),
    });
    if (!orderRes.ok) {
      alert("Could not initiate payment. Please try again.");
      setIsLoading(false);
      return;
    }
    const { orderId } = await orderRes.json();

    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Payment gateway could not be loaded. Please try again.");
      setIsLoading(false);
      return;
    }

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: payAmount * 100,
      currency: "INR",
      order_id: orderId,
      name: "Auravon AI",
      description: planName,
      handler: async (response: RazorpayResponse) => {
        const verifyRes = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        if (verifyRes.ok) {
          setSuccessState({
            paymentId: response.razorpay_payment_id,
            planName,
            amount: `₹${payAmount.toLocaleString("en-IN")}`,
          });
        } else {
          alert("Payment verification failed. Contact support with Payment ID: " + response.razorpay_payment_id);
        }
        setIsLoading(false);
      },
      prefill: { name: payerInfo.name, email: payerInfo.email, contact: payerInfo.phone },
      theme: { color: "#7c3aed" },
      modal: { ondismiss: () => setIsLoading(false) },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // ── Success Screen ──────────────────────────────────────────────────────────
  if (successState) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-[#030308]">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-md w-full mx-auto px-6 text-center"
        >
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl" />
            <div className="relative w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">Payment Confirmed</h1>
          <p className="text-[#8888a8] mb-8 leading-relaxed">
            Your payment was processed successfully. We&apos;ll reach out within 24 hours to kick off your project.
          </p>

          <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 text-left mb-6">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">
              Payment Summary
            </p>
            <div className="space-y-0">
              {[
                { label: "Package", value: successState.planName, cls: "text-white" },
                { label: "Amount Paid", value: successState.amount, cls: "text-emerald-400 font-bold" },
                { label: "Payment ID", value: successState.paymentId, cls: "text-white font-mono text-[12px]" },
                { label: "Status", value: "Confirmed ✓", cls: "text-emerald-400" },
              ].map(({ label, value, cls }) => (
                <div key={label} className="flex justify-between items-center py-2.5 border-b border-white/[0.04] last:border-0 text-[13px]">
                  <span className="text-[#8888a8]">{label}</span>
                  <span className={`font-medium ${cls}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[12px] text-[#48486a] mb-6">
            Kickoff details will be sent to{" "}
            <span className="text-violet-400">{payerInfo.email}</span>
          </p>

          <div className="flex gap-3 justify-center">
            <a
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#090918] border border-white/[0.07] text-[13px] text-white font-medium hover:border-white/[0.14] transition-all"
            >
              Contact Us
            </a>
            <a href="/" className="btn-primary text-[13px] px-5 py-2.5">
              Back to Home
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-[#030308]">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <div className="relative border-b border-white/[0.06] bg-[#090918] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 65% at 50% -10%, rgba(124,58,237,0.13), transparent)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-400 text-[11px] font-semibold uppercase tracking-widest mb-5">
              <Shield className="w-3.5 h-3.5" />
              Secure Payment via Razorpay
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight mb-4">
              Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-[#8888a8] text-[16px] max-w-lg mx-auto mb-8 leading-relaxed">
              Clear pricing for high-performance software — web apps, AI systems, SaaS platforms,
              and scalable digital products. No hidden fees.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                { icon: Shield,     label: "Secure Payments",    color: "text-emerald-400" },
                { icon: Globe,      label: "Global Clients",     color: "text-blue-400" },
                { icon: BadgeCheck, label: "Delivered Projects",  color: "text-violet-400" },
                { icon: Headphones, label: "Fast Support",        color: "text-cyan-400" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[12px] text-[#8888a8]"
                >
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Step 1: Client Details ────────────────────────────────────────────── */}
      <section className="py-10 border-b border-white/[0.06]">
        <div className="max-w-2xl mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="rounded-2xl bg-[#090918] border border-white/[0.08] p-6 md:p-8">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                  1
                </div>
                <h2 className="text-[14px] font-semibold text-white">Your Details</h2>
              </div>
              <p className="text-[12px] text-[#48486a] ml-7 mb-6">
                Required before selecting a package
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-medium text-[#8888a8]">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Your name"
                      value={payerInfo.name}
                      onChange={(e) => setPayerInfo({ ...payerInfo, name: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-medium text-[#8888a8]">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={payerInfo.email}
                      onChange={(e) => setPayerInfo({ ...payerInfo, email: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-medium text-[#8888a8]">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="+91 ..."
                      value={payerInfo.phone}
                      onChange={(e) => setPayerInfo({ ...payerInfo, phone: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-white/[0.05]">
                <Lock className="w-3 h-3 text-[#48486a] shrink-0" />
                <p className="text-[11px] text-[#48486a]">
                  We only use this information for project communication and payment processing.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Step 2: Pricing Grid ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection className="flex items-start gap-3 mb-10">
            <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white text-[10px] font-bold shrink-0 mt-0.5">
              2
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-white mb-1">Choose Your Package</h2>
              <p className="text-[13px] text-[#8888a8]">
                All packages include full code ownership and a documented handover.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan?.name === plan.name;
              const isFeatured = !!plan.badge;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`relative flex flex-col rounded-2xl p-6 transition-colors duration-200 ${
                    isSelected
                      ? "bg-[#0c0c20] border border-violet-500/50 shadow-lg shadow-violet-500/10"
                      : isFeatured
                      ? "bg-[#090918] border border-blue-500/25 shadow-md shadow-blue-500/5"
                      : "bg-[#090918] border border-white/[0.07] hover:border-white/[0.13]"
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[11px] font-bold shadow-lg shadow-violet-500/25">
                        <Star className="w-3 h-3" fill="currentColor" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon + category */}
                  <div className={`w-11 h-11 rounded-xl ${plan.accentBg} border ${plan.accentBorder} flex items-center justify-center mb-4 mt-1`}>
                    <Icon className={`w-5 h-5 ${plan.accentText}`} />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-[#48486a] mb-1">
                    {plan.category}
                  </div>

                  {/* Name + price */}
                  <h3 className="text-[18px] font-bold text-white mb-1">{plan.name}</h3>
                  <div className={`text-[32px] font-black leading-none ${plan.accentText} mb-2`}>
                    {plan.displayPrice}
                  </div>

                  {/* Best for */}
                  <p className="text-[11px] text-[#48486a] mb-2">
                    Ideal for: {plan.bestFor}
                  </p>

                  {/* Description */}
                  <p className="text-[13px] text-[#8888a8] leading-relaxed mb-5">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-[#c4c4d8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Delivery + support row */}
                  <div className="flex items-center gap-4 py-3 mb-4 border-y border-white/[0.05]">
                    <span className="flex items-center gap-1.5 text-[11px] text-[#48486a]">
                      <Clock className="w-3 h-3 shrink-0" />
                      {plan.delivery}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-[#48486a]">
                      <Headphones className="w-3 h-3 shrink-0" />
                      {plan.support}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => { setSelectedPlan(plan); handlePayment(plan); }}
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 disabled:opacity-60 ${
                      isFeatured
                        ? "btn-primary hover:shadow-lg hover:shadow-violet-500/20 active:scale-[0.98]"
                        : "bg-white/[0.05] border border-white/[0.08] text-white hover:bg-white/[0.08] hover:border-white/[0.14] active:scale-[0.98]"
                    }`}
                  >
                    {isLoading && selectedPlan?.name === plan.name ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : isFeatured ? (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        Secure This Package
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-3.5 h-3.5" />
                        Start Project
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#48486a] mt-2">
                    {plan.displayPrice} · via Razorpay
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ── Custom Payment Module ─────────────────────────────────────────── */}
          <AnimatedSection delay={0.3} className="mt-10 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-[#090918] border border-white/[0.07] overflow-hidden">
              {/* Header toggle */}
              <button
                onClick={() => setShowCustom(!showCustom)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[13px] font-semibold text-white">Custom Amount</p>
                    <p className="text-[11px] text-[#48486a]">
                      Have a specific quote? Pay a custom amount.
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#48486a] shrink-0 transition-transform duration-200 ${showCustom ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {showCustom && (
                  <motion.div
                    key="custom"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-4 border-t border-white/[0.06] space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Amount */}
                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-medium text-[#8888a8]">
                            Amount (INR) *
                          </label>
                          <div className="relative">
                            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8888a8] text-[14px] pointer-events-none">
                              ₹
                            </span>
                            <input
                              type="number"
                              placeholder="e.g. 45000"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              className="w-full pl-7 pr-4 py-3 rounded-xl bg-[#05050f] border border-white/[0.08] text-white text-[14px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/15 transition-all"
                            />
                          </div>
                          <p className="text-[11px] text-[#48486a]">Minimum: ₹1,000</p>
                        </div>

                        {/* Project type */}
                        <div className="space-y-1.5">
                          <label className="block text-[11px] font-medium text-[#8888a8]">
                            Project Type
                          </label>
                          <div className="relative">
                            <select
                              value={projectType}
                              onChange={(e) => setProjectType(e.target.value)}
                              className="w-full appearance-none px-4 py-3 pr-9 rounded-xl bg-[#05050f] border border-white/[0.08] text-white text-[14px] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/15 transition-all"
                            >
                              <option value="" className="bg-[#090918]">Select type...</option>
                              <option value="website" className="bg-[#090918]">Website</option>
                              <option value="mobile-app" className="bg-[#090918]">Mobile App</option>
                              <option value="ai-integration" className="bg-[#090918]">AI Integration</option>
                              <option value="saas" className="bg-[#090918]">SaaS Product</option>
                              <option value="maintenance" className="bg-[#090918]">Maintenance</option>
                              <option value="other" className="bg-[#090918]">Other</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#48486a] pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="space-y-1.5">
                        <label className="block text-[11px] font-medium text-[#8888a8]">
                          Project Notes <span className="text-[#48486a]">(optional)</span>
                        </label>
                        <textarea
                          placeholder="Brief description of your project scope..."
                          value={customNotes}
                          onChange={(e) => setCustomNotes(e.target.value)}
                          rows={2}
                          className="w-full px-4 py-3 rounded-xl bg-[#05050f] border border-white/[0.08] text-white text-[14px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/15 transition-all resize-none"
                        />
                      </div>

                      {/* Invoice + button */}
                      <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={requestInvoice}
                            onChange={(e) => setRequestInvoice(e.target.checked)}
                            className="rounded border-white/20 bg-[#05050f] text-violet-500 focus:ring-violet-500/30"
                          />
                          <span className="flex items-center gap-1.5 text-[12px] text-[#8888a8]">
                            <FileText className="w-3.5 h-3.5" />
                            Request GST invoice
                          </span>
                        </label>

                        <button
                          onClick={() => handlePayment(null, Number(customAmount))}
                          disabled={!customAmount || Number(customAmount) < 1000 || isLoading}
                          className="btn-primary flex items-center gap-2 text-[13px] disabled:opacity-50 active:scale-[0.98]"
                        >
                          <Lock className="w-3.5 h-3.5" />
                          Continue with Payment
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* ── Security Badges ───────────────────────────────────────────────── */}
          <AnimatedSection delay={0.4} className="mt-8 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-5 px-6 py-4 rounded-2xl bg-[#090918] border border-white/[0.07]">
              {[
                { icon: Shield,       label: "256-bit SSL",         color: "text-emerald-400" },
                { icon: CheckCircle2, label: "Secured by Razorpay", color: "text-emerald-400" },
                { icon: Star,         label: "PCI-DSS Compliant",   color: "text-amber-400" },
                { icon: CreditCard,   label: "UPI · Cards · NB",    color: "text-blue-400" },
              ].map(({ icon: Icon, label, color }) => (
                <span key={label} className="flex items-center gap-1.5 text-[12px] text-[#48486a]">
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  {label}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Trust Auravon AI ─────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-white/[0.06] bg-[#090918]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="section-label">Why clients trust us</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-2">
              Built on engineering you can rely on
            </h2>
            <p className="text-[13px] text-[#8888a8] max-w-md mx-auto">
              From the first call to post-launch support, we work the same way with every client.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustReasons.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-[#05050f] border border-white/[0.07] p-5 hover:border-white/[0.12] transition-colors"
                >
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

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <AnimatedSection className="text-center mb-8">
            <span className="section-label">Before you pay</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">
              Common Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl bg-[#090918] border border-white/[0.07] px-6 py-1">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-8 text-center">
            <p className="text-[13px] text-[#8888a8] mb-3">
              Still have questions before paying?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 text-[14px] text-violet-400 hover:text-violet-300 font-medium transition-colors"
            >
              Talk to us first <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
