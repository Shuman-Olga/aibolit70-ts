import type { SiteRoute } from "@/types/content";

export function PageContent({ route }: { route: SiteRoute }) {
  return (
    <article className="page-content">
      <p className="eyebrow">Детская медицинская служба «Айболит» · Томск</p>
      <h1>{route.crumb}</h1>
      <p className="lead">{route.description}</p>
      <div className="migration-note">
        <strong>Страница подготовлена к переносу.</strong>
        <p>Здесь будет размещён содержательный блок из старого компонента <code>{route.component}</code>.
          При миграции нужно сохранить полезный текст, изображения, документы, внутренние ссылки и действующие URL.</p>
      </div>
    </article>
  );
}
