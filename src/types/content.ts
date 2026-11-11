export type SiteRoute = {
  path: `/${string}/` | "/";
  component: string;
  crumb: string;
  title: string;
  description: string;
  image?: string;
};

export type BreadcrumbItem = {
  label: string;
  href?: string;
};
