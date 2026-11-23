import Image from "next/image";
import { Manrope } from "next/font/google";
import Link from "next/link";
import {
  Asterisk, ArrowRight, Baby, CalendarCheck, CheckCircle2, Heart,
  HousePlus, MapPin, Phone, Plus, Search, Stethoscope,
} from "lucide-react";
import { getRouteByPath } from "@/routing";
import { ROUTES } from "@/routing/paths";
import { createPageMetadata } from "@/lib/seo";
import { PHONE_HREF, SITE_PHONE } from "@/config/site";
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
const PROCESS_STEPS = [
  { number: "01", title: "Свяжитесь с нами", text: "Позвоните в службу и расскажите, какая помощь нужна ребёнку.", icon: Phone },
  { number: "02", title: "Уточним детали", text: "Обсудим адрес, необходимого специалиста и возможность выезда.", icon: CalendarCheck },
  { number: "03", title: "Согласуем визит", text: "Подберём доступное время и расскажем, как подготовиться к приёму.", icon: CheckCircle2 },
] as const;
const HOME_FAQ = [
  { question: "Как вызвать педиатра на дом?", answer: "Позвоните в детскую медицинскую службу «Айболит». Администратор уточнит адрес, причину обращения и поможет согласовать визит врача." },
  { question: "Выезжает ли врач за пределы Томска?", answer: "Служба работает в Томске и пригороде. Возможность выезда по конкретному адресу лучше уточнить по телефону." },
  { question: "Можно ли обратиться к узкому детскому специалисту?", answer: "Да, на сайте представлены детские специалисты и информация об их направлениях. Посмотрите профили врачей или уточните доступность консультации по телефону." },
  { question: "Где посмотреть стоимость услуг?", answer: "Актуальная информация об услугах и ценах размещена в соответствующем разделе сайта." },
] as const;
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
                <Phone size={19} aria-hidden="true" />
                <span>Вызвать врача</span>
                <ArrowRight size={19} aria-hidden="true" />
              </a>
              <Link className={styles.secondary} href={ROUTES.services}>
                <span>Посмотреть услуги</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <a className={styles.heroPhone} href={phoneHref}>{SITE_PHONE}</a>
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
            <div className={styles.experienceBadge}>
              <span className={styles.experienceBadgeIcon}><Heart size={20} fill="currentColor" /></span>
              <span><strong>С 2001 года</strong><br />заботимся о детях</span>
            </div>
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

      <section className={`container ${styles.services}`} aria-labelledby="services-title">
        <div className={styles.servicesHeader}>
          <div>
            <p className={styles.sectionEyebrow}>Чем мы можем помочь</p>
            <h2 id="services-title">Медицинская забота<br />на каждом этапе</h2>
          </div>
          <p>От консультации педиатра до регулярного наблюдения — выберите то, что нужно вашей семье сейчас.</p>
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
                <Link href={service.href}>{service.link}<ArrowRight size={16} aria-hidden="true" /></Link>
              </article>
            );
          })}
        </div>
        <div className={styles.allServices}>
          <Link href={ROUTES.services}>Все услуги и цены <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={`container ${styles.processInner}`}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Всё просто и понятно</p>
            <h2 id="process-title">Как вызвать <em>врача</em></h2>
            <p>Поможем сориентироваться и организовать визит детского специалиста.</p>
          </div>
          <ol className={styles.processGrid}>
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li className={styles.processCard} key={step.number}>
                  <div className={styles.processCardTop}>
                    <span className={styles.processIcon}><Icon size={24} strokeWidth={1.8} /></span>
                    <span className={styles.processNumber}>{step.number}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              );
            })}
          </ol>
          <div className={styles.processAction}>
            <a className={styles.primary} href={phoneHref}><Phone size={18} /> Позвонить в «Айболит» <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className={`container ${styles.trustSection}`} aria-labelledby="trust-title">
        <div className={styles.trustCopy}>
          <p className={styles.sectionEyebrow}>Знакомы с заботой не понаслышке</p>
          <h2 id="trust-title">Рядом с семьёй<br /><em>с 2001 года</em></h2>
          <p>«Айболит» — детская медицинская служба в Томске. Помогаем родителям организовать медицинскую помощь ребёнку: от вызова педиатра на дом до консультаций детских специалистов.</p>
          <Link href={ROUTES.about} className={styles.textLink}>Подробнее о службе <ArrowRight size={17} /></Link>
        </div>
        <div className={styles.trustFacts}>
          <div className={styles.trustFact}><span className={styles.trustFactIcon}><CalendarCheck size={22} /></span><strong>С 2001 года</strong><span>работаем в Томске</span></div>
          <div className={styles.trustFact}><span className={styles.trustFactIcon}><HousePlus size={22} /></span><strong>На дому</strong><span>вызов детского врача</span></div>
          <div className={styles.trustFact}><span className={styles.trustFactIcon}><Stethoscope size={22} /></span><strong>Специалисты</strong><span>детские направления</span></div>
          <div className={styles.trustFact}><span className={styles.trustFactIcon}><MapPin size={22} /></span><strong>Томск и пригород</strong><span>уточняйте адрес выезда</span></div>
        </div>
      </section>

      <section className={`container ${styles.doctorsSection}`} aria-labelledby="doctors-title">
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Специалисты службы</p>
          <h2 id="doctors-title">Наши <em>педиатры</em></h2>
          <p>Познакомьтесь с врачами, которые заботятся о здоровье детей.</p>
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
                <Link href={doctor.href} className={styles.doctorMore}>Подробнее о враче <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.reviewsSection} aria-labelledby="reviews-title">
        <div className={`container ${styles.reviewsInner}`}>
          <div>
            <p className={styles.sectionEyebrow}>Мнение родителей</p>
            <h2 id="reviews-title">Важно ваше <em>доверие</em></h2>
            <p>Посмотрите отзывы родителей о работе детской медицинской службы «Айболит».</p>
          </div>
          <Link href={ROUTES.reviews} className={styles.reviewLink}>Читать отзывы <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className={`container ${styles.faqSection}`} aria-labelledby="faq-title">
        <div className={styles.faqIntro}>
          <p className={styles.sectionEyebrow}>Подскажем и поможем</p>
          <h2 id="faq-title">Частые <em>вопросы</em></h2>
          <p>Коротко ответили на то, что родители часто хотят узнать перед обращением.</p>
          <Link href={ROUTES.contacts} className={styles.textLink}>Контакты службы <ArrowRight size={17} /></Link>
        </div>
        <div className={styles.faqList}>
          {HOME_FAQ.map((item) => (
            <details className={styles.faqItem} key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className={`container ${styles.bottomCtaInner}`}>
          <div>
            <p className={styles.eyebrow}>Мы рядом, когда это важно</p>
            <h2>Нужна консультация детского врача?</h2>
            <p>Позвоните нам — подскажем, как организовать помощь ребёнку.</p>
          </div>
          <a className={styles.primary} href={phoneHref}><Phone size={18} /> Позвонить в «Айболит» <ArrowRight size={18} /></a>
        </div>
      </section>
    </div>
  );
}
