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
    default: 'Auravon AI — AI-Powered Software & Digital Product Studio',
    template: '%s | Auravon AI',
  },
  description:
    'Auravon AI builds scalable websites, SaaS products, AI-powered systems, mobile apps, and automation solutions for startups and businesses. Modern engineering. AI-first approach.',
  keywords: [
    'AI development company',
    'custom software development',
    'web development agency',
    'AI automation services',
    'mobile app development company',
    'SaaS development company',
    'startup software solutions',
    'modern web applications',
    'business automation solutions',
    'scalable software systems',
    'Next.js development',
    'React development agency',
    'AI chatbot development',
    'enterprise software development',
    'digital transformation company',
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
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
                'https://twitter.com/auravonai',
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
