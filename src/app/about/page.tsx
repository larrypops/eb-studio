import type { Metadata } from "next";
import About from "@/pages/About";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Ernest & Bros Studio",
  description:
    "Learn about Ernest & Bros Studio, a Yaounde-based photography and video team focused on quality storytelling for weddings and special events.",
  path: "/about",
  keywords: [
    "about Ernest and Bros Studio",
    "photography team Yaounde",
    "wedding storyteller Cameroon",
    "creative video team",
  ],
});

export default function AboutPage() {
  return <About />;
}
