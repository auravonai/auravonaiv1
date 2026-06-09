import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { serviceCategories } from "@/lib/digital-agency-data";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Services in Vadodara, Gujarat | Auravon AI",
  description:
    "Auravon AI offers SEO, Google Ads, Meta Ads, website development, ecommerce, social media management, content marketing, graphic design, and business consulting in Vadodara, Ahmedabad, Gujarat and across India.",
  alternates: { canonical: "https://auravonai.com/services" },
  openGraph: {
    title: "Digital Agency Services — SEO, Ads, Web, Ecommerce & More | Auravon AI",
    description:
      "Complete digital agency services: SEO, Google Ads, Meta Ads, website development, Shopify, Amazon management, social media, content writing, graphic design and business consulting.",
    url: "https://auravonai.com/services",
  },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Digital Agency Services",
  provider: {
    "@type": "ProfessionalService",
    name: "Auravon AI",
    url: "https://auravonai.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
  itemListElement: serviceCategories.map((cat, i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      name: cat.label,
      url: `https://auravonai.com/services/${cat.slug}`,
      description: cat.menuDescription,
    },
  })),
};

const accentMap: Record<string, { text: string; bg: string; border: string }> =
  {
    violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
    blue:   { text: "text-blue-400",   bg: "bg-blue-500/10",   border: "border-blue-500/20" },
    emerald:{ text: "text-emerald-400",bg: "bg-emerald-500/10",border: "border-emerald-500/20" },
    orange: { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    pink:   { text: "text-pink-400",   bg: "bg-pink-500/10",   border: "border-pink-500/20" },
    cyan:   { text: "text-cyan-400",   bg: "bg-cyan-500/10",   border: "border-cyan-500/20" },
    amber:  { text: "text-amber-400",  bg: "bg-amber-500/10",  border: "border-amber-500/20" },
    rose:   { text: "text-rose-400",   bg: "bg-rose-500/10",   border: "border-rose-500/20" },
  };

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />

      <div className="min-h-screen bg-[#030308]">
        {/* ── Hero ── */}
        <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 max-w-7xl mx-auto px-6 md:px-8">
          <div
            className="absolute inset-x-0 top-0 h-96 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="relative text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
              {["Vadodara", "Ahmedabad", "Surat", "Gujarat", "India"].map(
                (loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400"
                  >
                    <MapPin className="w-3 h-3" />
                    {loc}
                  </span>
                )
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-5 text-[#f2f2ff]">
              Digital Agency Services
              <br className="hidden sm:block" />
              <span className="gradient-text"> Built to Grow Your Business</span>
            </h1>

            <p className="text-[#8888a8] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
              From SEO and Google Ads to website development, ecommerce, social
              media, and business consulting — everything your business needs to
              win online.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#48486a] mb-10">
              {[
                "Free consultation",
                "No long-term contracts",
                "Serving Gujarat & India",
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary !py-3.5 !px-8 text-[15px]">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918814012395"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-3.5 !px-8 text-[15px]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* ── Service category cards ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#48486a] mb-8">
            All Service Categories
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {serviceCategories.map((cat) => {
              const ac = accentMap[cat.accent] ?? accentMap.violet;
              return (
                <div
                  key={cat.slug}
                  className="rounded-2xl border border-white/[0.07] bg-[#090918] p-6 hover:border-white/[0.12] transition-all group"
                >
                  {/* Category header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Link
                        href={`/services/${cat.slug}`}
                        className="text-[17px] font-semibold text-[#f2f2ff] hover:text-white transition-colors"
                      >
                        {cat.label}
                      </Link>
                      <p className="text-[13px] text-[#8888a8] mt-1">
                        {cat.menuDescription}
                      </p>
                    </div>
                    <Link
                      href={`/services/${cat.slug}`}
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${ac.bg} ${ac.border} border ${ac.text} hover:opacity-80 transition-opacity`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Sub-services chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.subServices.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/services/${sub.slug}`}
                        className="text-[12px] px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#8888a8] hover:text-white hover:bg-white/[0.07] hover:border-white/[0.1] transition-all"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-20">
          <div className="rounded-2xl border border-white/[0.08] bg-[#090918] p-8 md:p-12 text-center"
            style={{
              background:
                "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(124,58,237,0.1) 0%, #090918 60%)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#f2f2ff] mb-3">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-[#8888a8] text-[15px] max-w-lg mx-auto mb-7">
              Book a free 30-minute consultation. We'll review your business,
              your goals, and recommend exactly what to focus on first.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary !py-3 !px-7">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918814012395"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-3 !px-7"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
