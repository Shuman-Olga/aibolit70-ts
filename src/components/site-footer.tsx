import Link from "next/link";
import { ArrowUp, Clock3, MapPin, Phone } from "lucide-react";
import { ROUTES } from "@/routing/paths";
import {
  PHONE_HREF, SITE_ADDRESS, SITE_HOURS, SITE_PHONE, SITE_SOCIAL,
} from "@/config/site";

const mapUrl = "https://yandex.ru/maps/?text=%D1%83%D0%BB.%20%D0%93%D0%B5%D1%80%D1%86%D0%B5%D0%BD%D0%B0%2068%2C%20%D0%A2%D0%BE%D0%BC%D1%81%D0%BA";

export function SiteFooter() {
  return (
    <>
      <section className="footer-contact" aria-labelledby="footer-contact-title">
        <div className="container footer-contact__inner">
          <div className="footer-contact__details">
            <div className="footer-contact__heading">
              <span className="footer-contact__eyebrow">Детская медицинская служба «Айболит»</span>
              <h2 id="footer-contact-title">Контакты</h2>
            </div>
            <div className="footer-contact__item">
              <MapPin size={23} aria-hidden="true" />
              <p>{SITE_ADDRESS.city}, {SITE_ADDRESS.street}</p>
            </div>
            <div className="footer-contact__item">
              <Clock3 size={23} aria-hidden="true" />
              <p>{SITE_HOURS.weekdays}<br />{SITE_HOURS.saturday}</p>
            </div>
            <a className="footer-contact__phone" href={PHONE_HREF}>
              <Phone size={20} aria-hidden="true" /><span>{SITE_PHONE}</span>
            </a>
          </div>
          <div className="footer-map">
            <iframe
              title="Расположение детской медицинской службы «Айболит» в Томске"
              src="https://yandex.ru/map-widget/v1/?text=%D1%83%D0%BB.%20%D0%93%D0%B5%D1%80%D1%86%D0%B5%D0%BD%D0%B0%2068%2C%20%D0%A2%D0%BE%D0%BC%D1%81%D0%BA&z=16"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a className="footer-map__label" href={mapUrl} target="_blank" rel="noreferrer">Мы находимся в Томске · Открыть карту</a>
          </div>
        </div>
      </section>
      <footer className="site-footer site-footer--wave">
        <svg className="site-footer__wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 26C105 -8 205 2 315 24C440 50 515 35 625 13C760 -14 845 5 950 25C1070 48 1160 39 1260 18C1340 1 1395 8 1440 22V100H0Z" fill="#BAECDB" />
          <path d="M0 48C130 17 225 28 340 50C465 75 555 66 670 40C790 13 870 24 985 49C1105 76 1195 64 1295 43C1360 30 1405 35 1440 47V100H0Z" fill="#EBF8F1" />
          <path d="M0 70C95 48 205 48 310 72C430 100 520 94 640 68C765 41 865 54 970 77C1080 101 1175 92 1275 70C1345 55 1400 59 1440 71V100H0Z" fill="#3CB197" />
        </svg>
        <div className="container footer-main">
          <Link className="footer-brand" href="/" aria-label="Айболит — главная">
            <svg className="footer-brand__chick" viewBox="0 0 84 76" role="img" aria-label="Цыплёнок в скорлупе">
              <path d="M23 48c-5-6-7-14-5-22 2-10 11-17 23-17s21 7 23 17c2 8 0 16-5 22" fill="#f6d84b" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M38 25l-8-8 1 12z" fill="#e98a9b"/>
              <circle cx="32" cy="34" r="2.2" fill="#315f49"/><circle cx="51" cy="34" r="2.2" fill="#315f49"/>
              <path d="M38 40q4 4 8 0" fill="none" stroke="#315f49" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 42l-5 10 14-2 8 8 10-8 10 8 8-8 14 2-5-10" fill="#b8dec6" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round"/>
              <path d="M14 42l9 5 9-5 9 5 9-5 9 5 9-5" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 18l-5-6M66 17l5-7M42 5V0" stroke="#b8dec6" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <span><strong>Айболит</strong><small>Детская медицинская служба</small></span>
          </Link>
          <nav className="footer-nav" aria-label="Навигация в подвале сайта">
            <Link href={ROUTES.services}>Услуги</Link>
            <Link href={ROUTES.doctors}>Врачи</Link>
            <Link href={ROUTES.observationPrograms}>Программы</Link>
            <Link href={ROUTES.prices}>Цены</Link>
            <Link href={ROUTES.reviews}>Отзывы</Link>
            <Link href={ROUTES.contacts}>Контакты</Link>
          </nav>
          <div className="footer-socials">
            {SITE_SOCIAL.map((url) => (
              <a key={url} href={url} target="_blank" rel="noreferrer" aria-label="Айболит во ВКонтакте">
                <span aria-hidden="true">vk</span>
              </a>
            ))}
          </div>
          <div className="footer-copyright">
            <span>© 2001–{new Date().getFullYear()} «Айболит».</span>
            <span>Все права защищены.</span>
          </div>
          <a className="footer-back-to-top" href="#top" aria-label="Наверх">
            <ArrowUp size={20} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
