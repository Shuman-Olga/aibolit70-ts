import { ArrowRight, Phone } from "lucide-react";
import { PHONE_HREF } from "@/config/site";
import styles from "@/app/home.module.scss";

const phoneHref = PHONE_HREF;

export function HomeCta() {
  return (
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
  );
}
