import type { Metadata } from "next";
import Services from "@/pages/Services";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Photography & Video Services",
  description:
    "Discover our full range of photography and video services in Yaounde: wedding coverage, event filming, portrait sessions, and premium photo albums.",
  path: "/work",
  keywords: [
    "wedding photographer packages",
    "event videography services",
    "photo shooting Yaounde",
    "professional photo albums",
    "camera crew Cameroon",
  ],
});

export default function WorkPage() {
  return <Services />;
}
