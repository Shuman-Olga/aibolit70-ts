export const ROUTES = {
  home: "/",
  about: "/o-nas/",
  services: "/uslugi-i-ceny/",
  doctors: "/doctors/",
  prices: "/pacientam/prices/",
  reviews: "/pacientam/otzyvy/",
  contacts: "/kontakty/",
  patients: "/pacientam/",
  blog: "/blog/",
  siteMap: "/o-nas/map-site/",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
