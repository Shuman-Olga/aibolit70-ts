import Image from "next/image";
import Link from "next/link";
import type { PageContentKey } from "@/types/content";
import { MIGRATED_PAGES } from "@/data/migrated-pages";

export function MigratedPageContent({ pageKey }: { pageKey: PageContentKey }) {
  const page = MIGRATED_PAGES[pageKey];
  if (!page) return null;

  const isOverview = ["About", "Uslugi", "Doctors", "Programs"].includes(pageKey);

  return (
    <div className={["migrated-content", isOverview ? "migrated-content--overview" : "", page.profile ? "migrated-content--profile" : "", pageKey.startsWith("Program") ? "migrated-content--program" : ""].filter(Boolean).join(" ")}>
      <section className="content-hero">
        <div className="content-hero__copy">
          <p className="lead">{page.intro}</p>
        </div>
        {pageKey === "About" ? (
          <div className="content-hero__abstract" aria-hidden="true">
            <span className="content-hero__abstract-orbit" />
            <span className="content-hero__abstract-dot" />
            <span className="content-hero__abstract-leaf" />
          </div>
        ) : <span className="content-hero__decor" aria-hidden="true">✳</span>}
      </section>

      {page.profile && (
        <section className="content-profile">
          {page.profile.image ? (
            <Image
              className="content-profile__photo"
              src={page.profile.image}
              alt={page.profile.name}
              width={112}
              height={140}
              sizes="(max-width: 760px) 76px, 112px"
            />
          ) : <div className="content-profile__avatar" aria-hidden="true">{page.profile.initials}</div>}
          <div className="content-profile__info">
            <p className="content-profile__role">{page.profile.role}</p>
            <p className="content-profile__experience">{page.profile.experience}</p>
            <div className="content-profile__tags">{page.profile.specialties.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>
      )}

      {page.cards && (
        <div className="content-cards">
          {page.cards.map((card, index) => (
            <Link className="content-card" href={card.href} key={card.href}>
              {card.image ? <Image className="content-card__photo" src={card.image} alt={card.title} width={640} height={380} sizes="(max-width: 760px) 100vw, 50vw" /> : <span className="content-card__index">{String(index + 1).padStart(2, "0")}</span>}
              {card.meta && <span className="content-card__meta">{card.meta}</span>}
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <span className="content-card__more">Подробнее <span aria-hidden="true">↗</span></span>
            </Link>
          ))}
        </div>
      )}

      {page.highlights && (
        <div className="content-highlights">
          {page.highlights.map((item) => (
            <article className="content-highlight" key={item.mark}>
              <span className="content-highlight__mark">{item.mark}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      )}

      {page.action && (
        <aside className="content-action">
          <div>
            <h2>{page.action.title}</h2>
            <p>{page.action.description}</p>
          </div>
          <a className="button button--primary content-action__button" href={page.action.href}>
            {page.action.label}<span aria-hidden="true">→</span>
          </a>
        </aside>
      )}

      {page.sections?.map((section, index) => (
        <section className="content-section" key={section.heading ?? index}>
          {section.heading && <div className="content-section__heading"><span aria-hidden="true" /> <h2>{section.heading}</h2></div>}
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && (
            <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
          )}
          {section.links && (
            <ul className="content-link-list">
              {section.links.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          )}
          {section.note && <p className="content-note">{section.note}</p>}
        </section>
      ))}
    </div>
  );
}
