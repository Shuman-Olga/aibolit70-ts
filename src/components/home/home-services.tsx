import Link from "next/link";
import { ArrowRight, Asterisk, Heart, Plus, Search } from "lucide-react";
import { ROUTES } from "@/routing/paths";
import { HOME_SERVICE_CARDS } from "@/data/home";
import styles from "@/app/home.module.scss";

export function HomeServices() {
  return (
      <section className={`container ${styles.services}`} aria-labelledby="services-title">
              <div className={styles.servicesHeader}>
                <div>
                  <h2 id="services-title">Забота о здоровье ребёнка</h2>
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
  );
}
