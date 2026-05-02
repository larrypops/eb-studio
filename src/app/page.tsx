import type { Metadata } from "next";
import Home from "@/pages/Home";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Wedding & Event Photography in Yaounde",
  description:
    "Ernest & Bros Studio provides premium photography and video coverage in Yaounde for weddings, events, birthdays, and family memories.",
  path: "/",
  keywords: [
    "photographer Yaounde",
    "wedding photography Cameroon",
    "event videography Yaounde",
    "studio photo Yaounde",
    "Ernest and Bros Studio",
  ],
});

export default function HomePage() {
  return <Home />;
}
