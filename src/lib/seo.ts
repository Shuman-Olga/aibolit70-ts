import type { Metadata } from "next";
import type { SiteRoute } from "@/types/content";
import { DEFAULT_OG_IMAGE, SITE_FULL_NAME, SITE_NAME, SITE_PHONE, SITE_SOCIAL, SITE_ADDRESS, SITE_URL } from "@/config/site";

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
    name: SITE_FULL_NAME,
    url: SITE_URL,
    telephone: SITE_PHONE,
    image: new URL(DEFAULT_OG_IMAGE, SITE_URL).toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS.street,
      addressLocality: SITE_ADDRESS.city,
      addressCountry: SITE_ADDRESS.country,
    },
    sameAs: [...SITE_SOCIAL],
  };
}
