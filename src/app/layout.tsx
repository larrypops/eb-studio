import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageTransition from "@/components/PageTransition";
import { STUDIO_INFO } from "@/constants";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const phoneForSchema = STUDIO_INFO.phone.replace(/\s+/g, "");
const ogImageAbsoluteUrl = `${SITE_URL}${SITE_OG_IMAGE}`;

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  description: SITE_DESCRIPTION,
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  image: ogImageAbsoluteUrl,
  logo: `${SITE_URL}/images/logo.jpg`,
  description: SITE_DESCRIPTION,
  telephone: phoneForSchema,
  email: STUDIO_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Biyem-Assi",
    addressLocality: "Yaounde",
    addressCountry: "CM",
  },
  areaServed: ["Yaounde", "Cameroon"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: phoneForSchema,
    email: STUDIO_INFO.email,
    availableLanguage: ["English", "French"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Photography",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: "website",
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} hero preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} min-h-screen bg-black font-sans selection:bg-white selection:text-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteJsonLd, businessJsonLd]),
          }}
        />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
