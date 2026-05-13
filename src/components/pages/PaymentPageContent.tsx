"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Zap, Shield, Star, ArrowRight, CreditCard,
  Globe, Smartphone, Brain, Code2, Wrench,
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
    price: 25000,
    displayPrice: "₹25,000",
    description: "Perfect for startups needing a professional online presence.",
    features: ["Up to 5 pages", "Mobile responsive design", "SEO optimization", "Contact form", "Basic analytics setup", "1 month support"],
    accentText: "text-violet-400",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/15",
    badge: null,
  },
  {
    icon: Globe,
    name: "Business Website",
    category: "Web Development",
    price: 60000,
    displayPrice: "₹60,000",
    description: "Full-featured website with CMS, blog, and advanced features.",
    features: ["Up to 15 pages", "Custom CMS / Admin panel", "Blog with SEO", "Payment integration", "Multi-language support", "3 months support"],
    accentText: "text-blue-400",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/30",
    badge: "Most Popular",
  },
  {
    icon: Brain,
    name: "AI Integration",
    category: "AI Solutions",
    price: 80000,
    displayPrice: "₹80,000",
    description: "Add AI chatbot, automation, or intelligent features to your product.",
    features: ["Custom AI chatbot (RAG)", "LLM integration (GPT-4/Claude)", "Document intelligence", "API integration", "Training on your data", "3 months support"],
    accentText: "text-cyan-400",
    accentBg: "bg-cyan-500/10",
    accentBorder: "border-cyan-500/15",
    badge: null,
  },
  {
    icon: Smartphone,
    name: "Mobile App",
    category: "Mobile Development",
    price: 150000,
    displayPrice: "₹1,50,000",
    description: "Cross-platform iOS & Android app with full backend.",
    features: ["iOS & Android app", "Custom UI/UX design", "Backend API", "Push notifications", "App Store submission", "6 months support"],
    accentText: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/15",
    badge: null,
  },
  {
    icon: Code2,
    name: "SaaS MVP",
    category: "SaaS Development",
    price: 200000,
    displayPrice: "₹2,00,000",
    description: "Full SaaS product with auth, billing, and core features.",
    features: ["Multi-tenant architecture", "Auth & user management", "Subscription billing (Stripe/Razorpay)", "Admin dashboard", "Email automation", "6 months support"],
    accentText: "text-orange-400",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/15",
    badge: "Best Value",
  },
  {
    icon: Wrench,
    name: "Monthly Maintenance",
    category: "Maintenance",
    price: 8000,
    displayPrice: "₹8,000/mo",
    description: "Ongoing maintenance, updates, and technical support.",
    features: ["Bug fixes & updates", "Security patches", "Performance monitoring", "Backup management", "2 feature requests/month", "Priority support"],
    accentText: "text-pink-400",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/15",
    badge: null,
  },
];

interface SuccessState {
  paymentId: string;
  planName: string;
  amount: string;
}

const inputClass = "w-full px-4 py-3 rounded-xl bg-[#05050f] border border-white/[0.07] text-white text-[14px] placeholder-[#48486a] focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all";

export default function PaymentPageContent() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successState, setSuccessState] = useState<SuccessState | null>(null);
  const [customAmount, setCustomAmount] = useState("");
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

  const handlePayment = async (plan: typeof plans[0] | null, amount?: number) => {
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
          setSuccessState({ paymentId: response.razorpay_payment_id, planName, amount: `₹${payAmount.toLocaleString("en-IN")}` });
        } else {
          alert("Payment verification failed. Please contact support with Payment ID: " + response.razorpay_payment_id);
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

  if (successState) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto px-6 text-center"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
          <p className="text-[#8888a8] mb-8 leading-relaxed">Thank you for your payment. We&apos;ll be in touch within 24 hours to kick off your project.</p>
          <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 text-left mb-6">
            <div className="space-y-3">
              {[
                { label: "Plan", value: successState.planName, color: "text-white" },
                { label: "Amount", value: successState.amount, color: "text-emerald-400" },
                { label: "Payment ID", value: successState.paymentId, color: "text-white font-mono text-[12px]" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex justify-between items-center text-[13px]">
                  <span className="text-[#8888a8]">{label}</span>
                  <span className={`font-medium ${color}`}>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[12px] text-[#48486a]">
            Our team will contact you at <span className="text-violet-400">{payerInfo.email}</span>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* ── Page Hero ── */}
      <div className="border-b border-white/[0.06] bg-[#090918]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/15 text-violet-400 text-[11px] font-semibold uppercase tracking-widest mb-5">
              <Shield className="w-3.5 h-3.5" />
              Secure Payment via Razorpay
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-[#8888a8] text-lg max-w-2xl mx-auto">
              No hidden fees. No surprises. Choose a plan or pay a custom amount securely via Razorpay.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Payer Info ── */}
      <section className="py-10 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <div className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-4">Your Information</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "name", placeholder: "Your Name *", type: "text" },
                { name: "email", placeholder: "Email Address *", type: "email" },
                { name: "phone", placeholder: "Phone / WhatsApp", type: "tel" },
              ].map(({ name, placeholder, type }) => (
                <input
                  key={name}
                  type={type}
                  placeholder={placeholder}
                  value={payerInfo[name as keyof typeof payerInfo]}
                  onChange={(e) => setPayerInfo({ ...payerInfo, [name]: e.target.value })}
                  className={inputClass}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Plans Grid ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              const isSelected = selectedPlan?.name === plan.name;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`relative rounded-2xl bg-[#090918] border p-6 transition-colors duration-200 ${
                    isSelected ? "border-violet-500/60" : "border-white/[0.07] hover:border-white/[0.12]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[11px] font-bold">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className={`w-11 h-11 rounded-xl ${plan.accentBg} border ${plan.accentBorder} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${plan.accentText}`} />
                  </div>

                  <div className="text-[10px] font-semibold uppercase tracking-widest text-[#48486a] mb-1">{plan.category}</div>
                  <h3 className="text-[17px] font-bold text-white mb-1">{plan.name}</h3>
                  <div className={`text-3xl font-black ${plan.accentText} mb-3`}>{plan.displayPrice}</div>
                  <p className="text-[13px] text-[#8888a8] mb-5 leading-relaxed">{plan.description}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-[#c4c4d8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => { setSelectedPlan(plan); handlePayment(plan); }}
                    disabled={isLoading}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-semibold transition-all disabled:opacity-60 ${
                      plan.badge
                        ? "btn-primary"
                        : "bg-white/[0.05] border border-white/[0.07] text-white hover:bg-white/[0.08] hover:border-white/[0.12]"
                    }`}
                  >
                    {isLoading && selectedPlan?.name === plan.name ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        Pay {plan.displayPrice}
                      </>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Custom Amount */}
          <AnimatedSection delay={0.3} className="mt-8 max-w-lg mx-auto">
            <button
              onClick={() => setShowCustom(!showCustom)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#090918] border border-white/[0.07] text-white text-[13px] font-medium hover:border-white/[0.12] transition-all mb-4"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              Pay Custom Amount
            </button>

            <AnimatePresence>
              {showCustom && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="rounded-2xl bg-[#090918] border border-white/[0.07] p-6 overflow-hidden"
                >
                  <h3 className="text-[15px] font-semibold text-white mb-3">Custom Payment</h3>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8888a8] text-[14px]">₹</span>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className={`${inputClass} pl-7`}
                      />
                    </div>
                    <button
                      onClick={() => handlePayment(null, Number(customAmount))}
                      disabled={!customAmount || Number(customAmount) < 1000 || isLoading}
                      className="btn-primary disabled:opacity-50"
                    >
                      Pay Now
                    </button>
                  </div>
                  <p className="text-[12px] text-[#48486a] mt-2">Minimum payment: ₹1,000</p>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedSection>

          {/* Security badges */}
          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3.5 rounded-2xl bg-[#090918] border border-white/[0.07]">
              {[
                { icon: Shield, label: "256-bit SSL Encryption", color: "text-emerald-400" },
                { icon: CheckCircle2, label: "Secured by Razorpay", color: "text-emerald-400" },
                { icon: Star, label: "PCI-DSS Compliant", color: "text-amber-400" },
                { icon: CreditCard, label: "UPI, Cards, Net Banking", color: "text-blue-400" },
              ].map(({ icon: Icon, label, color }) => (
                <span key={label} className="flex items-center gap-1.5 text-[12px] text-[#48486a]">
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  {label}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Bottom CTA */}
          <AnimatedSection delay={0.5} className="mt-14 text-center">
            <p className="text-[#8888a8] text-[14px] mb-3">Need a custom quote or have questions about pricing?</p>
            <a href="/contact" className="inline-flex items-center gap-1.5 text-[14px] text-violet-400 hover:text-violet-300 font-medium transition-colors">
              Talk to us <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
