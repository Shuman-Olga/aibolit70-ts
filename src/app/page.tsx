import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";
import { PHONE_HREF, SITE, SITE_NAME, SITE_PHONE, SITE_URL } from "@/config/site";
import { HOME_FEATURES, HOME_SEO, HOME_SERVICES } from "@/data/home";
import styles from "./home.module.scss";

const phoneHref = PHONE_HREF;
export const metadata: Metadata = {
  ...createPageMetadata(routes[0]),
  title: { absolute: HOME_SEO.title },
  description: HOME_SEO.description,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    url: `${SITE_URL}/`,
    images: [
      {
        url: SITE.assets.homeHero,
        width: 972,
        height: 615,
        alt: "Иллюстрация цыплёнка-врача с плюшевым мишкой",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    images: [SITE.assets.homeHero],
  },
  keywords: [...HOME_SEO.keywords],
};

export default function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.decor} aria-hidden="true">
          <span className={styles.decorHeart}>♡</span>
          <span className={styles.decorDot} />
          <span className={styles.decorBlob} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span /> Детская медицинская служба · Томск
            </p>
            <h1 id="home-title">
              Здоровье
              <br />и забота о вашем
              <br />
              <em>ребёнке</em>
            </h1>
            <p className={styles.lead}>
              Педиатр и детские специалисты рядом, когда нужна медицинская
              помощь. Вызов врача на дом и внимательное отношение к маленьким
              пациентам.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={phoneHref}>
                <span aria-hidden="true">☎</span>
                <span>Вызвать врача</span>
                <span aria-hidden="true">›</span>
              </a>
              <Link className={styles.secondary} href="/doctors/">
                <span className={styles.doctorIcon} aria-hidden="true">
                  ♙
                </span>
                <span>
                  Познакомиться
                  <br />с врачами
                </span>
                <span aria-hidden="true">›</span>
              </Link>
            </div>
            <p className={styles.phoneNote}>
              Позвоните нам: <a href={phoneHref}>{SITE_PHONE}</a>
            </p>
          </div>

          <div className={styles.illustration}>
            <div className={styles.illustrationHalo} />
            <Image
              src=SITE.assets.homeHero
              alt="Весёлый цыплёнок в белом халате с фонендоскопом и плюшевым мишкой"
              width={972}
              height={615}
              priority
              sizes="(max-width: 760px) 100vw, 58vw"
              className={styles.chickImage}
            />
          </div>
        </div>

        <div className={`container ${styles.featureWrap}`}>
          <ul className={styles.features}>
            {HOME_FEATURES.map((feature) => (
              <li key={feature.title}>
                <span
                  className={`${styles.featureIcon} ${feature.tone === "yellow" ? styles.yellow : ""}`}
                  aria-hidden="true">
                  {feature.icon}
                </span>
                <span>
                  <strong>{feature.title}</strong>
                  <br />
                  {feature.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`container ${styles.services}`}
        aria-labelledby="services-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Чем мы можем помочь</p>
          <h2 id="services-title">
            Забота о здоровье ребёнка —<br />
            <em>в одном месте</em>
          </h2>
          <p>
            Помогаем родителям заботиться о здоровье детей с вниманием и
            профессиональным подходом.
          </p>
        </div>
        <div className={styles.serviceGrid}>
          {HOME_SERVICES.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <span className={styles.serviceIcon} aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href={service.href}>
                {service.link} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className={`container ${styles.bottomCtaInner}`}>
          <div>
            <p className={styles.eyebrow}>Мы рядом, когда это важно</p>
            <h2>Нужна консультация детского врача?</h2>
            <p>
              Свяжитесь с нами — подскажем, как организовать помощь ребёнку.
            </p>
          </div>
          <a className={styles.primary} href={phoneHref}>
            ☎ Позвонить в «Айболит» <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
