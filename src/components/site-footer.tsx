import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Phone } from "lucide-react";
import { ROUTES } from "@/routing/paths";
import {
  PHONE_HREF, SITE_ADDRESS, SITE_FULL_NAME, SITE_HOURS, SITE_LOGO, SITE_PHONE, SITE_SOCIAL,
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
          <path d="M0 48C170 5 250 85 430 54C610 23 690 4 860 43C1030 82 1120 5 1280 25C1350 34 1400 52 1440 42V100H0Z" fill="#20c2c0" />
          <path d="M0 68C170 25 260 100 450 72C630 45 710 24 880 61C1050 98 1150 30 1300 45C1360 51 1405 69 1440 61V100H0Z" fill="#079c9d" />
        </svg>
        <div className="container footer-main">
          <Link className="footer-brand" href="/" aria-label="Айболит — главная">
            <svg className="footer-brand__child" viewBox="0 0 72 72" role="img" aria-label="Рисунок улыбающегося ребёнка">
              <path d="M14 31c-2-12 7-22 21-22s23 10 23 22v11c0 15-10 25-23 25S12 57 12 42V31c0-5 2-9 5-12" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round"/>
              <path d="M17 25c3-2 5-6 6-10 4 4 8 5 13 5 6 0 10-2 14-6 1 5 4 9 8 12" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 39h.5M47 39h.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              <path d="M27 50c5 6 13 6 18 0" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round"/>
              <path d="M9 34c-5 1-7 6-5 11 2 4 5 5 9 4M63 34c5 1 7 6 5 11-2 4-5 5-9 4" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round"/>
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
            <span className="footer-copyright__name">{SITE_FULL_NAME}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
