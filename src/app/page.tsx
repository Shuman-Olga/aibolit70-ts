import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { Baby, HousePlus, MapPin, Stethoscope } from "lucide-react";
import { getRouteByPath } from "@/routing";
import { createPageMetadata } from "@/lib/seo";
import { PHONE_HREF } from "@/config/site";
import { HOME_FEATURES, HOME_SERVICES } from "@/data/home";
import styles from "./home.module.scss";

const phoneHref = PHONE_HREF;
const headingFont = Manrope({ subsets: ["cyrillic", "latin"], weight: ["500", "600", "700", "800"], display: "swap" });
const FEATURE_ICONS = {
  home: HousePlus,
  stethoscope: Stethoscope,
  baby: Baby,
  location: MapPin,
} as const;
const homeRoute = getRouteByPath("/");
if (!homeRoute) {
  throw new Error("Homepage route is missing from the route registry.");
}
export const metadata = createPageMetadata(homeRoute);

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
            <p className={styles.eyebrow}>Детская медицинская служба «Айболит» · Томск</p>
            <h1 id="home-title" className={headingFont.className}>
              Педиатр на дом
              <br />
              в Томске —
              <br />
              забота о ребёнке рядом
            </h1>
            <p className={styles.lead}>
              Работаем в Томске с 2001 года. Вызов педиатра и детских
              специалистов на дом, консультации врачей и программы наблюдения
              за здоровьем ребёнка.
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={phoneHref}>
                <span aria-hidden="true">☎</span>
                <span>Вызвать врача</span>
                <span aria-hidden="true">›</span>
              </a>
            </div>
          </div>

          <div className={styles.illustration}>
            <div className={styles.illustrationHalo} />
            <Image
              src="/chick-doctor-scene.png"
              alt="Цыплёнок-врач — персонаж детской медицинской службы «Айболит»"
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
                <span className={styles.featureIcon} aria-hidden="true">
                  {(() => {
                    const Icon = FEATURE_ICONS[feature.icon];
                    return <Icon size={36} strokeWidth={1.8} />;
                  })()}
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
