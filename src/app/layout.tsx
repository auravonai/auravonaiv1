import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://auravonai.com'),
  title: {
    default: 'AI Development Company & Custom Software Studio | Auravon AI',
    template: '%s | Auravon AI',
  },
  description:
    'Auravon AI is an AI development company building custom software, SaaS products, web apps, mobile apps, and automation systems for startups and businesses. Ship faster with AI-first engineering.',
  keywords: [
    'AI development company',
    'custom AI software development',
    'hire AI developer',
    'AI integration services',
    'web app development company',
    'SaaS development company',
    'AI automation services',
    'mobile app development',
    'startup software development',
    'AI chatbot development',
    'custom software for startups',
    'build SaaS product',
    'AI-powered web applications',
    'Next.js development agency',
    'software development studio',
  ],
  authors: [{ name: 'Auravon AI', url: 'https://auravonai.com' }],
  creator: 'Auravon AI',
  publisher: 'Auravon AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://auravonai.com',
    siteName: 'Auravon AI',
    title: 'Auravon AI — AI-Powered Software & Digital Product Studio',
    description:
      'We build scalable websites, SaaS platforms, AI systems, mobile apps, and automation solutions engineered for growth.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Auravon AI — Build the Future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@auravonai',
    creator: '@auravonai',
    title: 'Auravon AI — AI-Powered Software & Digital Product Studio',
    description:
      'We build scalable websites, SaaS platforms, AI systems, mobile apps, and automation solutions engineered for growth.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://auravonai.com',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Auravon AI',
              url: 'https://auravonai.com',
              logo: 'https://auravonai.com/logo.png',
              description:
                'AI-Powered Software & Digital Product Studio building scalable websites, SaaS products, AI systems, mobile apps, and automation solutions.',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'support@auravonai.com',
                contactType: 'customer support',
              },
              sameAs: [
                'https://x.com/auravonai',
                'https://linkedin.com/company/auravonai',
                'https://github.com/auravonai',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Auravon AI',
              url: 'https://auravonai.com',
              logo: 'https://auravonai.com/logo.png',
              image: 'https://auravonai.com/og-image.png',
              description:
                'AI development company building custom web apps, SaaS products, mobile apps, AI integrations, and automation systems for startups and businesses.',
              priceRange: '$$',
              email: 'support@auravonai.com',
              areaServed: 'Worldwide',
              serviceType: [
                'AI Development',
                'Custom Software Development',
                'Web Application Development',
                'SaaS Development',
                'Mobile App Development',
                'AI Chatbot Development',
                'Business Automation',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Software Development Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Integration & Chatbot Development' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Application Development' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Product Development' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Automation Systems' } },
                ],
              },
              sameAs: [
                'https://x.com/auravonai',
                'https://linkedin.com/company/auravonai',
                'https://github.com/auravonai',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Auravon AI',
              url: 'https://auravonai.com',
              description:
                'AI-Powered Software & Digital Product Studio — web apps, SaaS, mobile, AI systems, and automation.',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://auravonai.com/blog?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#030308] text-[#f0f0ff] antialiased min-h-screen w-full min-w-0">
        <Navbar />
        <main className="w-full min-w-0">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-10N63FS2SB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-10N63FS2SB');
          `}
        </Script>
      </body>
    </html>
  );
}
