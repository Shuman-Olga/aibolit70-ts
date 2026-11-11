import type { SiteRoute } from "@/types/content";
import { MigratedPageContent } from "@/data/migrated-pages";

export function PageContent({ route }: { route: SiteRoute }) {
  return (
    <article className="page-content">
      <p className="eyebrow">Детская медицинская служба «Айболит» · Томск</p>
      <h1>{route.crumb}</h1>
      <MigratedPageContent pageKey={route.contentKey} />
    </article>
  );
}
