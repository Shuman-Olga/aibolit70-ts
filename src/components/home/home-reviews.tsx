import { ArrowRight, Star } from "lucide-react";
import styles from "@/app/home.module.scss";

export function HomeReviews() {
  return (
      <section className={styles.reviewsSection} aria-labelledby="reviews-title">
              <div className={`container ${styles.reviewsInner}`}>
                <div className={styles.reviewsIntro}>
                  <p className={styles.sectionEyebrow}>Отзывы родителей</p>
                  <h2 id="reviews-title">Нам доверяют <em>самое важное</em></h2>
                  <p>Спасибо родителям, которые делятся впечатлениями о работе наших врачей.</p>
                  <a className={styles.reviewSourceLink} href="https://like.doctor/tomsk/kliniki/detskaya-meditsinskaya-sluzhba-aybolit" target="_blank" rel="noopener noreferrer">
                    Все отзывы на Like.Доктор <ArrowRight size={17} />
                  </a>
                </div>
                <div className={styles.reviewsContent}>
                  <div className={styles.ratingCard}>
                    <span className={styles.ratingLabel}>Рейтинг клиники</span>
                    <div className={styles.ratingValue}>5,0 <span>/ 5</span></div>
                    <div className={styles.ratingStars} aria-label="5 из 5 звёзд">
                      {Array.from({ length: 5 }, (_, index) => <Star key={index} size={20} fill="currentColor" strokeWidth={1.5} />)}
                    </div>
                    <span className={styles.ratingCount}>На основе 3 отзывов</span>
                    <span className={styles.ratingSource}>По данным Like.Доктор</span>
                  </div>
                  <div className={styles.reviewCards}>
                    <article className={styles.reviewCard}>
                      <div className={styles.reviewCardTop}>
                        <div className={styles.reviewStars} aria-label="5 из 5 звёзд">
                          {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} />)}
                        </div>
                        <span>22 ноября 2023</span>
                      </div>
                      <p>«Прекрасный специалист. Ведёт деток с рождения, всегда на связи и объясняет диагноз простым и доступным языком».</p>
                      <strong>Василий Здвижков</strong>
                      <span className={styles.reviewDoctor}>Отзыв о Петуховой О. В.</span>
                    </article>
                    <article className={styles.reviewCard}>
                      <div className={styles.reviewCardTop}>
                        <div className={styles.reviewStars} aria-label="5 из 5 звёзд">
                          {Array.from({ length: 5 }, (_, index) => <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} />)}
                        </div>
                        <span>2 марта 2019</span>
                      </div>
                      <p>«Всегда доброжелательная, отзывчивая и внимательная к любым жалобам. Спасибо за многолетний труд и заботу о детях».</p>
                      <strong>Татьяна Солнцева</strong>
                      <span className={styles.reviewDoctor}>Отзыв о Тяпкиной В. И.</span>
                    </article>
                  </div>
                </div>
              </div>
            </section>
  );
}
