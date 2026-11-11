import Link from "next/link";
import { ROUTES } from "@/config/paths";
import { PHONE_HREF, SITE_ADDRESS, SITE_FULL_NAME, SITE_PHONE } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong className="footer-brand">Айболит</strong>
          <p>{SITE_FULL_NAME}</p>
          <p>Работаем с 2001 года</p>
        </div>
        <div>
          <strong>Контакты</strong>
          <p><a href={PHONE_HREF}>{SITE_PHONE}</a></p>
          <p>{SITE_ADDRESS.street}, {SITE_ADDRESS.city}</p>
        </div>
        <div>
          <strong>Разделы</strong>
          <p><Link href={ROUTES.services}>Услуги</Link></p>
          <p><Link href={ROUTES.doctors}>Врачи</Link></p>
          <p><Link href={ROUTES.siteMap}>Карта сайта</Link></p>
        </div>
      </div>
      <div className="container footer-bottom">© Айболит · Томск</div>
    </footer>
  );
}
