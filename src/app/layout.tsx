import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PageTransition from "@/components/PageTransition";
import { STUDIO_INFO } from "@/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: STUDIO_INFO.name,
    template: `%s | ${STUDIO_INFO.name}`,
  },
  description:
    "Professional photography and video coverage for weddings, ceremonies, and special events.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black font-sans selection:bg-white selection:text-black">
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
