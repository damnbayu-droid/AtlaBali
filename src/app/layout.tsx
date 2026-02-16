import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Editions Atlas - Atlas Bali Beach Club & Visa Services",
    template: "%s | Editions Atlas"
  },
  description: "Official partner for Atlas Bali Beach Club tickets and reservations. Comprehensive Bali visa services, company formation (PT PMA), and business consulting. Experience the best of Bali.",
  keywords: [
    "Atlas Bali",
    "Atlas Beach Fest",
    "Atlas Beach Club",
    "Atlas Bali Tickets",
    "Atlas Bali Reservation",
    "Bali Visa Services",
    "KITAS Indonesia",
    "Company Formation Bali",
    "PT PMA Indonesia",
    "Bali Business Services"
  ],
  authors: [{ name: "Editions Atlas" }],
  creator: "Editions Atlas",
  publisher: "Editions Atlas",
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
  alternates: {
    canonical: "https://editions-atlas.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://editions-atlas.com",
    title: "Editions Atlas - Atlas Bali Beach Club & Visa Services",
    description: "Book Atlas Bali Beach Club tickets. Reliable Bali visa services and company formation. Your gateway to the ultimate Bali lifestyle.",
    siteName: "Editions Atlas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atlas Bali & Business Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editions Atlas - Atlas Bali Beach Club & Visa Services",
    description: "Book Atlas Bali Beach Club tickets. Reliable Bali visa services and company formation.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Business & Lifestyle",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Editions Atlas",
  "url": "https://editions-atlas.com",
  "logo": "https://editions-atlas.com/logo.png",
  "description": "Premier gateway to Bali's lifestyle and business services. Official partner for Atlas Bali Beach Club.",
  "sameAs": [
    "https://web.atlasbeachfest.com/",
    "https://indonesianvisas.com/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0F172A" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
