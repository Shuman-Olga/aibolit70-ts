import type { SiteRoute, BreadcrumbItem } from "@/types/content";
import { routes } from "@/routing/route-registry";

function createRouteIndex(items: readonly SiteRoute[]): ReadonlyMap<string, SiteRoute> {
  const index = new Map<string, SiteRoute>();
  for (const route of items) {
    const path = normalizeRoutePath(route.path);
    if (index.has(path)) throw new Error(`Duplicate route path detected: ${path}`);
    index.set(path, route);
  }
  return index;
}

export const routeByPath = createRouteIndex(routes);

export function normalizeRoutePath(path: string): string {
  const pathname = path.trim().split(/[?#]/, 1)[0].replace(/\/{2,}/g, "/");
  if (!pathname || pathname === "/") return "/";
  return `/${pathname.replace(/^\/+|\/+$/g, "")}/`;
}

/** Resolve a URL path regardless of leading/trailing or repeated slashes. */
export function getRouteByPath(path: string): SiteRoute | undefined {
  return routeByPath.get(normalizeRoutePath(path));
}

/** Resolve Next.js catch-all route segments. */
export function getRouteBySlug(slug: readonly string[]): SiteRoute | undefined {
  return getRouteByPath(slug.join("/"));
}

/** Static params for all registered pages except the separately rendered homepage. */
export function getStaticRouteParams(): { slug: string[] }[] {
  return routes.filter((route) => normalizeRoutePath(route.path) !== "/")
    .map((route) => ({ slug: normalizeRoutePath(route.path).split("/").filter(Boolean) }));
}

/** Build breadcrumbs from explicitly registered parent routes. */
export function getBreadcrumbs(route: SiteRoute): BreadcrumbItem[] {
  const parents: BreadcrumbItem[] = [];
  const visited = new Set<string>([normalizeRoutePath(route.path)]);
  let parentPath = route.parent;
  while (parentPath) {
    const normalized = normalizeRoutePath(parentPath);
    if (visited.has(normalized)) throw new Error(`Circular breadcrumb parent: ${normalized}`);
    visited.add(normalized);
    const parent = routeByPath.get(normalized);
    if (!parent) throw new Error(`Unknown breadcrumb parent: ${normalized}`);
    parents.unshift({ label: parent.crumb, href: normalized });
    parentPath = parent.parent;
  }
  return [...parents, { label: route.crumb }];
}
