import Link from "next/link";
import { ArrowRight, CalendarCheck, HousePlus, MapPin, Stethoscope } from "lucide-react";
import { ROUTES } from "@/routing/paths";
import styles from "@/app/home.module.scss";

export function HomeTrust() {
  return (
      <section className={`container ${styles.trustSection}`} aria-labelledby="trust-title">
              <div className={styles.trustCopy}>
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
  );
}
