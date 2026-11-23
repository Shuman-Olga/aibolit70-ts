import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { Asterisk, Baby, Heart, HousePlus, MapPin, Plus, Search, Stethoscope } from "lucide-react";
import { getRouteByPath } from "@/routing";
import { ROUTES } from "@/routing/paths";
import { createPageMetadata } from "@/lib/seo";
import { PHONE_HREF } from "@/config/site";
import { HOME_DOCTORS, HOME_FEATURES, HOME_SERVICE_CARDS } from "@/data/home";
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
              <Link className={styles.secondary} href={ROUTES.services}>
                <span>Посмотреть услуги</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className={styles.illustration}>
            <div className={styles.illustrationHalo} />
            <Image
              src="/images/home/chick-doctor-scene.png"
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

      <section className={`container ${styles.doctorsSection}`} aria-labelledby="doctors-title">
        <div className={styles.sectionHeading}>
          <h2 id="doctors-title">Наши <em>педиатры</em></h2>
          <p>Опытные детские врачи, которым родители доверяют здоровье своих детей.</p>
        </div>
        <div className={styles.doctorsGrid}>
          {HOME_DOCTORS.map((doctor) => (
            <article className={styles.doctorCard} key={doctor.href}>
              <Link href={doctor.href} className={styles.doctorPhotoLink} aria-label={`Подробнее о враче: ${doctor.name}`}>
                <Image src={doctor.image} alt={doctor.name} width={320} height={360} sizes="(max-width: 720px) 82vw, (max-width: 980px) 42vw, 240px" className={styles.doctorPhoto} />
              </Link>
              <div className={styles.doctorInfo}>
                <h3><Link href={doctor.href}>{doctor.name}</Link></h3>
                <p>{doctor.role}</p>
                <Link href={doctor.href} className={styles.doctorMore}>Подробнее о враче <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={`container ${styles.services}`} aria-labelledby="services-title">
        <div className={styles.servicesHeader}>
          <h2 id="services-title">Медицинская забота<br />на каждом этапе</h2>
          <p>От консультации педиатра до регулярного наблюдения —<br className={styles.desktopBreak} /> выберите то, что нужно вашей семье сейчас.</p>
        </div>
        <div className={styles.serviceGrid}>
          {HOME_SERVICE_CARDS.map((service) => {
            const Icon = service.icon === "plus" ? Plus : service.icon === "search" ? Search : service.icon === "heart" ? Heart : Asterisk;
            return (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceCardTop}>
                  <span className={styles.serviceIcon} aria-hidden="true"><Icon size={25} strokeWidth={1.7} /></span>
                  <span className={styles.serviceNumber}>{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.href}>{service.link}<span aria-hidden="true"> ⟶</span></Link>
              </article>
            );
          })}
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
