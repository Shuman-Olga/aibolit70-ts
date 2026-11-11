import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";
import { PHONE_HREF, SITE_PHONE } from "@/config/site";
import { HOME_FEATURES, HOME_SERVICES } from "@/data/home";
import styles from "./home.module.scss";

const phoneHref = PHONE_HREF;
const homeTitle =
  "Вызов педиатра на дом в Томске — детская медицинская служба «Айболит»";
const homeDescription =
  "Детская медицинская служба «Айболит» в Томске. Вызов педиатра и детских врачей на дом, консультации специалистов и программы наблюдения за здоровьем ребёнка. Работаем с 2001 года.";

export const metadata: Metadata = {
  ...createPageMetadata(routes[0]),
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "https://aibolit70.ru/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Айболит",
    title: homeTitle,
    description: homeDescription,
    url: "https://aibolit70.ru/",
    images: [
      {
        url: "/chick-doctor-scene.png",
        width: 972,
        height: 615,
        alt: "Иллюстрация цыплёнка-врача с плюшевым мишкой",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: ["/chick-doctor-scene.png"],
  },
  keywords: [
    "вызов педиатра на дом Томск",
    "детский врач на дом Томск",
    "вызвать педиатра Томск",
    "детская медицинская служба Айболит",
    "детские врачи Томск",
  ],
};

const features = [
  { icon: "▦", title: "Опыт работы", detail: "с 2001 года", tone: "mint" },
  { icon: "⌂", title: "Вызов врача", detail: "на дом", tone: "yellow" },
  { icon: "♧", title: "Детские", detail: "специалисты", tone: "mint" },
  { icon: "♡", title: "Забота", detail: "и внимание", tone: "yellow" },
];

const services = [
  {
    icon: "＋",
    title: "Педиатр на дом",
    text: "Вызов детского врача домой в Томске.",
    href: "/uslugi-i-ceny/vyzov-pediatra-na-dom/",
    link: "Вызвать педиатра",
  },
  {
    icon: "✳",
    title: "Детские специалисты",
    text: "Консультации профильных детских врачей.",
    href: "/doctors/",
    link: "Выбрать врача",
  },
  {
    icon: "♡",
    title: "Программы наблюдения",
    text: "Плановое сопровождение здоровья ребёнка.",
    href: "/programmy-nablyudeniya-za-zdorovem/",
    link: "Подробнее",
  },
];

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
              src="/chick-doctor-scene.png"
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
