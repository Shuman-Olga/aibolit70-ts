import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { ArrowRight, Baby, CalendarCheck, HousePlus, MapPin, Stethoscope } from "lucide-react";
import { ROUTES } from "@/routing/paths";
import { HOME_FEATURES } from "@/data/home";
import styles from "@/app/home.module.scss";

const headingFont = Manrope({ subsets: ["cyrillic", "latin"], weight: ["500", "600", "700", "800"], display: "swap" });
const FEATURE_ICONS = {
  home: HousePlus,
  stethoscope: Stethoscope,
  baby: Baby,
  location: MapPin,
} as const;

export function HomeHero() {
  return (
      <section className={styles.hero} aria-labelledby="home-title">
              <div className={styles.decor} aria-hidden="true">
                <span className={styles.decorBlob} />
              </div>
              <div className={`container ${styles.heroInner}`}>
                <div className={styles.copy}>
                  <h1 id="home-title" className={headingFont.className}>
                    Педиатр на дом в Томске —
                    внимательная забота о здоровье ребёнка
                  </h1>
                  <p className={styles.lead}>
                    Работаем в Томске с 2001 года. Вызов педиатра и детских
                    специалистов на дом, консультации врачей и программы наблюдения
                    за здоровьем ребёнка.
                  </p>
                  <div className={styles.actions}>
                    <Link className={styles.primary} href={ROUTES.pediatricianHome}>
                      <CalendarCheck size={19} aria-hidden="true" />
                      <span>Оставить заявку</span>
                      <ArrowRight size={19} aria-hidden="true" />
                    </Link>
                    <Link className={styles.secondary} href={ROUTES.services}>
                      <span>Посмотреть услуги</span>
                      <ArrowRight size={18} aria-hidden="true" />
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
                          return <Icon size={27} strokeWidth={1.8} />;
                        })()}
                      </span>
                      <span><strong>{feature.title}</strong><br />{feature.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
  );
}
