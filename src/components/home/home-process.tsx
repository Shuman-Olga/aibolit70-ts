import { ArrowRight, CalendarCheck, CheckCircle2, ClipboardList, Phone } from "lucide-react";
import { PHONE_HREF } from "@/config/site";
import { ROUTES } from "@/routing/paths";
import styles from "@/app/home.module.scss";

const PROCESS_STEPS = [
  { number: "01", title: "Свяжитесь с нами", text: "Позвоните в службу или оставьте онлайн-заявку на вызов врача.", icon: Phone },
  { number: "02", title: "Уточним детали", text: "Обсудим адрес, необходимого специалиста и возможность выезда.", icon: CalendarCheck },
  { number: "03", title: "Согласуем визит", text: "Подберём доступное время и расскажем, как подготовиться к приёму.", icon: CheckCircle2 },
] as const;
const phoneHref = PHONE_HREF;

export function HomeProcess() {
  return (
    <section className={styles.processSection} aria-labelledby="process-title">
      <div className={`container ${styles.processInner}`}>
        <div className={styles.sectionHeading}>
          <h2 id="process-title">Как вызвать <em>врача</em></h2>
          <p>Выберите удобный способ: позвоните нам или отправьте форму вызова врача.</p>
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
          <a className={styles.secondary} href={ROUTES.pediatricianHome}><ClipboardList size={18} /> Оставить заявку</a>
        </div>
      </div>
    </section>
  );
}
