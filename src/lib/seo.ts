import type { Metadata } from "next";
import type { SiteRoute } from "@/types/content";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export function createPageMetadata(route: SiteRoute): Metadata {
  const canonical = new URL(route.path, SITE_URL).toString();
  const image = new URL(route.image ?? DEFAULT_OG_IMAGE, SITE_URL).toString();

  return {
    title: { absolute: route.title },
    description: route.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "ru_RU",
      siteName: SITE_NAME,
      title: { absolute: route.title },
      description: route.description,
      url: canonical,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: { absolute: route.title },
      description: route.description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Детская медицинская служба «Айболит»",
    url: SITE_URL,
    telephone: "+7 (3822) 60-92-43",
    image: new URL(DEFAULT_OG_IMAGE, SITE_URL).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Герцена 68, строение 2",
      addressLocality: "Томск",
      addressCountry: "RU",
    },
    sameAs: ["https://vk.com/aibolittomsk"],
  };
}
