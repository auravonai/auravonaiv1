import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  serviceCategories,
} from "@/lib/digital-agency-data";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";

// ─── Static generation ────────────────────────────────────────

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

// ─── Dynamic metadata ─────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const baseUrl = "https://auravonai.com";
  const url = `${baseUrl}/services/${slug}`;

  return {
    title: service.metaTitle || `${service.title} | Auravon AI`,
    description: service.metaDescription || service.tagline,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle || service.title,
      description: service.metaDescription || service.tagline,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle || service.title,
      description: service.metaDescription || service.tagline,
    },
  };
}

// ─── Schema builders ──────────────────────────────────────────

function buildServiceSchema(slug: string) {
  const service = getServiceBySlug(slug)!;
  const baseUrl = "https://auravonai.com";

  // Find parent category label
  const category = serviceCategories.find(
    (c) => c.slug === service.categorySlug
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription || service.tagline,
    url: `${baseUrl}/services/${slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: "Auravon AI",
      url: baseUrl,
      telephone: "+91-8814012395",
      email: "support@auravonai.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      areaServed: service.locations.map((l) => ({
        "@type": "Place",
        name: l,
      })),
    },
    serviceType: category?.label ?? service.title,
    areaServed: service.locations.map((l) => ({ "@type": "Place", name: l })),
  };

  return schema;
}

function buildBreadcrumbSchema(slug: string) {
  const service = getServiceBySlug(slug)!;
  const baseUrl = "https://auravonai.com";

  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${baseUrl}/services`,
    },
  ];

  if (service.type === "service" && service.categorySlug !== slug) {
    const cat = serviceCategories.find((c) => c.slug === service.categorySlug);
    if (cat) {
      items.push({
        "@type": "ListItem",
        position: 3,
        name: cat.label,
        item: `${baseUrl}/services/${cat.slug}`,
      });
      items.push({
        "@type": "ListItem",
        position: 4,
        name: service.title,
        item: `${baseUrl}/services/${slug}`,
      });
    }
  } else {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: service.title,
      item: `${baseUrl}/services/${slug}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function buildFAQSchema(slug: string) {
  const service = getServiceBySlug(slug)!;
  if (!service.faq.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Auravon AI",
    url: "https://auravonai.com",
    telephone: "+91-8814012395",
    email: "support@auravonai.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.3072,
      longitude: 73.1812,
    },
    areaServed: [
      { "@type": "City", name: "Vadodara" },
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "City", name: "Surat" },
      { "@type": "State", name: "Gujarat" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/auravon-ai-tech/",
      "https://github.com/auravonai",
    ],
  };
}

// ─── Page ─────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqSchema = buildFAQSchema(slug);

  return (
    <>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceSchema(slug)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(slug)),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildLocalBusinessSchema()),
        }}
      />

      <ServicePageTemplate service={service} />
    </>
  );
}
