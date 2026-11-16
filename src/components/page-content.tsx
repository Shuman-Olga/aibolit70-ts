import type { SiteRoute } from "@/types/content";
import { MIGRATED_PAGES, MigratedPageContent } from "@/data/migrated-pages";

export function PageContent({ route }: { route: SiteRoute }) {
  const isMigrated = Boolean(MIGRATED_PAGES[route.contentKey]);

  return (
    <article className="page-content">
      <p className="eyebrow">Детская медицинская служба «Айболит» · Томск</p>
      <h1>{route.crumb}</h1>
      {isMigrated ? (
        <MigratedPageContent pageKey={route.contentKey} />
      ) : (
        <p className="lead">{route.description}</p>
      )}
    </article>
  );
}
