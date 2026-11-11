"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Menu, Phone, X } from "lucide-react";
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

  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline-inner">
          <span>
            <MapPin size={15} /> г. Томск, ул. Герцена 68, строение 2
          </span>
          <a href="tel:+73822609243">
            <Phone size={15} /> +7 (3822) 60-92-43
          </a>
          <span className="hours">
            <Clock3 size={15} /> Пн–пт: 08:00–19:00 · Сб: 09:00–14:00
          </span>
        </div>
      </div>

      <div className="container header-main">
        <Link className="brand" href="/" aria-label="Айболит — главная" onClick={closeMenu}>
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

        <nav className="main-nav" id="main-navigation" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              onClick={closeMenu}
            >
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
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
          <span>{menuOpen ? "Закрыть" : "Меню"}</span>
        </button>

        <div
          className={`mobile-nav-panel${menuOpen ? " is-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          {navigation.map((item) => (
            <Link
              key={`mobile-${item.href}-${item.label}`}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
