import type { Metadata } from "next";
import Contact from "@/pages/Contact";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Our Studio",
  description:
    "Contact Ernest & Bros Studio in Yaounde for photography and video bookings. Reach us by WhatsApp, phone, or email for availability and pricing.",
  path: "/contact",
  keywords: [
    "contact photographer Yaounde",
    "book wedding photographer Cameroon",
    "photography pricing Yaounde",
    "video coverage contact",
  ],
});

export default function ContactPage() {
  return <Contact />;
}
