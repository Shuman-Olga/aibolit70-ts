import type { SiteRoute } from "@/types/content";
import { MIGRATED_PAGES } from "@/data/migrated-pages";
import { MigratedPageContent } from "@/components/migrated-page-content";

export function PageContent({ route }: { route: SiteRoute }) {
  const isMigrated = Boolean(MIGRATED_PAGES[route.contentKey]);

  return (
    <article className="page-content">
      <h1>{route.label}</h1>
      {isMigrated ? (
        <MigratedPageContent pageKey={route.contentKey} />
      ) : (
        <p className="lead">{route.description}</p>
      )}
    </article>
  );
}
