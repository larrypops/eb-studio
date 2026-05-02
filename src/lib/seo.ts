import type { Metadata } from "next";
import { STUDIO_INFO } from "@/constants";

const FALLBACK_SITE_URL = "https://eb-studio.vercel.app";
const rawEnvSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function normalizeSiteUrl(url: string) {
  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, "");
}

export const SITE_URL = normalizeSiteUrl(rawEnvSiteUrl || FALLBACK_SITE_URL);
export const SITE_NAME = STUDIO_INFO.name;
export const SITE_DESCRIPTION =
  "Professional photography and cinematic video coverage in Yaounde for weddings, birthdays, corporate events, and family moments.";
export const SITE_OG_IMAGE = "/images/weddings/IMG_4860.jpg";
export const SITE_LOCALE = "en_CM";

export const SITE_KEYWORDS = [
  "photography studio Yaounde",
  "wedding photographer Cameroon",
  "event videography Yaounde",
  "professional photo shoot Cameroon",
  "Ernest and Bros Studio",
  "birthday photography Yaounde",
  "corporate photography Cameroon",
  "photo and video services",
];

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = SITE_OG_IMAGE,
  keywords = SITE_KEYWORDS,
}: PageSeoInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: SITE_LOCALE,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
