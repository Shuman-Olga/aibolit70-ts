import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageContent } from "@/components/page-content";
import { getBreadcrumbs, getRouteBySlug, getStaticRouteParams } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return routes
    .filter((route) => route.path !== "/")
    .map((route) => ({ slug: route.path.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  return route ? createPageMetadata(route) : {};
}

export default async function InnerPage({ params }: PageProps) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  return (
    <div className="container inner-page">
      <Breadcrumbs items={getBreadcrumbs(route)} />
      <PageContent route={route} />
    </div>
  );
}
