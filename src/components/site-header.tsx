"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Menu, Phone, X, ChevronRight } from "lucide-react";
import { SITE_PHONE } from "@/lib/site";

const navigation = [
  { href: "/o-nas/", label: "О нас" },
  { href: "/uslugi-i-ceny/", label: "Услуги" },
  { href: "/doctors/", label: "Врачи" },
  { href: "/uslugi-i-ceny/", label: "Цены" },
  { href: "/otzyvy/", label: "Отзывы" },
  { href: "/kontakty/", label: "Контакты" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const mobileMenu =
    menuOpen && typeof document !== "undefined"
      ? createPortal(
          <>
            <button
              className="mobile-nav-backdrop"
              type="button"
              aria-label="Закрыть меню"
              onClick={closeMenu}
            />
            <nav
              className="mobile-nav-panel"
              id="mobile-navigation"
              aria-label="Мобильная навигация"
              aria-modal="true"
              role="dialog"
            >
              <div className="mobile-nav-heading">
                <span>Меню сайта</span>
                <button
                  className="mobile-nav-close"
                  type="button"
                  onClick={closeMenu}
                  aria-label="Закрыть меню"
                >
                  <X size={25} />
                </button>
              </div>

              <div className="mobile-nav-links">
                {navigation.map((item) => (
                  <Link
                    key={`mobile-${item.href}-${item.label}`}
                    href={item.href}
                    onClick={closeMenu}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={19} aria-hidden="true" />
                  </Link>
                ))}
              </div>

              <a
                className="mobile-nav-phone"
                href={`tel:${SITE_PHONE.replace(/[^+0-9]/g, "")}`}
              >
                <Phone size={18} /> {SITE_PHONE}
              </a>
              <p className="mobile-nav-caption">
                Детская медицинская служба «Айболит» · Томск
              </p>
            </nav>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <header className="site-header">
        <div className="topline">
          <div className="container topline-inner">
            <span><MapPin size={15} /> г. Томск, ул. Герцена 68, строение 2</span>
            <a href="tel:+73822609243"><Phone size={15} /> +7 (3822) 60-92-43</a>
            <span className="hours"><Clock3 size={15} /> Пн–пт: 08:00–19:00 · Сб: 09:00–14:00</span>
          </div>
        </div>

        <div className="container header-main">
          <Link className="brand" href="/" aria-label="Айболит — главная">
            <Image
              src="https://aibolit70.ru/assets/img/aibolit_logo.8b947efb21c1e40192ec.png"
              alt="Айболит — детская медицинская служба"
              width={431}
              height={147}
              priority
              unoptimized
              className="brand__logo"
            />
          </Link>

          <nav className="main-nav" aria-label="Основная навигация">
            {navigation.map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            className="phone-link"
            href={`tel:${SITE_PHONE.replace(/[^+0-9]/g, "")}`}
          >
            <span aria-hidden="true">☎</span> {SITE_PHONE}
          </a>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
            <span>{menuOpen ? "Закрыть" : "Меню"}</span>
          </button>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
