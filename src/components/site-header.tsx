"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Menu, Phone, X, ChevronRight } from "lucide-react";
import { MAIN_NAVIGATION } from "@/config/navigation";
import { PHONE_HREF, SITE_ADDRESS, SITE_HOURS, SITE_LOGO, SITE_PHONE } from "@/config/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
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
              className="aibolit-mobile-backdrop"
              style={{ position: "fixed", inset: 0, zIndex: 2147483000, display: "block", width: "100vw", height: "100dvh", margin: 0, padding: 0, border: 0, background: "rgba(22, 42, 33, 0.48)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)" }}
              type="button"
              aria-label="Закрыть меню"
              onClick={closeMenu}
            />
            <nav
              className="aibolit-mobile-drawer mobile-nav-panel"
              style={{ position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 2147483001, display: "flex", flexDirection: "column", width: "min(88vw, 390px)", height: "100dvh", minHeight: "100dvh", boxSizing: "border-box", padding: "max(22px, env(safe-area-inset-top)) 22px max(24px, env(safe-area-inset-bottom))", overflowY: "auto", visibility: "visible", opacity: 1, transform: "none", background: "#ffffff", color: "#20352e", boxShadow: "-18px 0 55px rgba(20, 48, 34, 0.18)" }}
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
                {MAIN_NAVIGATION.map((item) => (
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
                href={PHONE_HREF}
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
            <span><MapPin size={15} /> г. {SITE_ADDRESS.city}, {SITE_ADDRESS.street}</span>
            <a href={PHONE_HREF}><Phone size={15} /> {SITE_PHONE}</a>
            <span className="hours"><Clock3 size={15} /> {SITE_HOURS.weekdays} · {SITE_HOURS.saturday}</span>
          </div>
        </div>

        <div className="container header-main">
          <Link className="brand" href="/" aria-label="Айболит — главная">
            <Image
              src={SITE_LOGO}
              alt="Айболит — детская медицинская служба"
              width={431}
              height={147}
              priority
              unoptimized
              className="brand__logo"
            />
          </Link>

          <nav className="main-nav" aria-label="Основная навигация">
            {MAIN_NAVIGATION.map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            className="phone-link"
            href={PHONE_HREF}
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
