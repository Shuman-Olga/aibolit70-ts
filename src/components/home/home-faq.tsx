import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/routing/paths";
import styles from "@/app/home.module.scss";

const HOME_FAQ = [
  { question: "Как вызвать педиатра на дом?", answer: "Позвоните в детскую медицинскую службу «Айболит». Администратор уточнит адрес, причину обращения и поможет согласовать визит врача." },
  { question: "Выезжает ли врач за пределы Томска?", answer: "Служба работает в Томске и пригороде. Возможность выезда по конкретному адресу лучше уточнить по телефону." },
  { question: "Можно ли обратиться к узкому детскому специалисту?", answer: "Да, на сайте представлены детские специалисты и информация об их направлениях. Посмотрите профили врачей или уточните доступность консультации по телефону." },
  { question: "Где посмотреть стоимость услуг?", answer: "Актуальная информация об услугах и ценах размещена в соответствующем разделе сайта." },
] as const;

export function HomeFaq() {
  return (
      <section className={`container ${styles.faqSection}`} aria-labelledby="faq-title">
              <div className={styles.faqIntro}>
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
  );
}
