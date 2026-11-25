"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Menu, Phone, X, ChevronRight, ChevronDown, Search as SearchIcon } from "lucide-react";
import { MAIN_NAVIGATION, type NavigationItem } from "@/navigation";
import { getRouteByPath } from "@/routing/route-resolver";
import { routes } from "@/routing/route-registry";
import { PHONE_HREF, SITE_ADDRESS, SITE_HOURS, SITE_LOGO, SITE_PHONE } from "@/config/site";


function HeaderSearch({ onNavigate }: { onNavigate?: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("ru");
    if (normalized.length < 2) return [];
    return routes
      .filter((route) => route.path !== "/" && [route.label, route.title, route.description, ...(route.keywords ?? [])].join(" ").toLocaleLowerCase("ru").includes(normalized))
      .slice(0, 7);
  }, [query]);

  return (
    <div className="header-search">
      <label className="header-search__field">
        <SearchIcon size={19} aria-hidden="true" />
        <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Поиск по сайту" aria-label="Поиск по сайту" />
        {query && <button type="button" onClick={() => setQuery("")} aria-label="Очистить поиск"><X size={16} /></button>}
      </label>
      {query.trim().length >= 2 && (
        <div className="header-search__results" aria-live="polite">
          {results.length ? results.map((route) => (
            <Link key={route.path} href={route.path} onClick={onNavigate}>
              <span>{route.label}</span><ChevronRight size={16} aria-hidden="true" />
            </Link>
          )) : <p>По вашему запросу ничего не найдено</p>}
        </div>
      )}
    </div>
  );
}

function getNavigationLabel(href: NavigationItem["href"]): string {
  return getRouteByPath(href)?.label ?? href;
}

function NavigationLinks({ items, onNavigate, className }: { items: readonly NavigationItem[]; onNavigate?: () => void; className?: string }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <div className="mobile-nav-group" key={`${item.href}-${getNavigationLabel(item.href)}`}>
          {item.children?.length ? (
            <details className="mobile-nav-dropdown">
              <summary><span>{getNavigationLabel(item.href)}</span><ChevronDown size={18} aria-hidden="true" /></summary>
              <div className="mobile-nav-submenu">
                <Link href={item.href} onClick={onNavigate}>{getNavigationLabel(item.href)}</Link>
                <NavigationLinks items={item.children} onNavigate={onNavigate} />
              </div>
            </details>
          ) : <Link href={item.href} onClick={onNavigate}><span>{getNavigationLabel(item.href)}</span><ChevronRight size={19} aria-hidden="true" /></Link>}
        </div>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const drawer = drawerRef.current;
    const focusableSelector = 'a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])';
    const getFocusableElements = () =>
      Array.from(drawer?.querySelectorAll<HTMLElement>(focusableSelector) ?? [])
        .filter((element) => element.getAttribute("aria-hidden") !== "true");

    getFocusableElements()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      menuToggleRef.current?.focus();
    };
  }, [menuOpen]);

  const mobileMenu =
    menuOpen && typeof document !== "undefined"
      ? createPortal(
          <>
            <button
              className="aibolit-mobile-backdrop"
              type="button"
              aria-label="Закрыть меню"
              onClick={closeMenu}
            />
            <nav
              ref={drawerRef}
              className="aibolit-mobile-drawer mobile-nav-panel"
              id="mobile-navigation"
              aria-label="Мобильная навигация"
              aria-modal="true"
              role="dialog"
            >
              <div className="mobile-nav-heading mobile-nav-heading--compact">
                <button
                  className="mobile-nav-close"
                  type="button"
                  onClick={closeMenu}
                  aria-label="Закрыть меню"
                >
                  <X size={25} />
                </button>
              </div>

              <div className="mobile-nav-search"><HeaderSearch onNavigate={closeMenu} /></div>
              <NavigationLinks items={MAIN_NAVIGATION} onNavigate={closeMenu} className="mobile-nav-links" />

              <a
                className="mobile-nav-phone"
                href={PHONE_HREF}
                onClick={closeMenu}
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
      <header className="site-header" id="top">
        <div className="topline">
          <div className="container topline-inner">
            <span><MapPin size={15} /> г. {SITE_ADDRESS.city}, {SITE_ADDRESS.street}</span>
            <span className="hours"><Clock3 size={15} /> {SITE_HOURS.weekdays} · {SITE_HOURS.saturday}</span>
            <div className="topline-search"><HeaderSearch /></div>
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
              <div className={item.children ? "main-nav-item has-dropdown" : "main-nav-item"} key={`${item.href}-${getNavigationLabel(item.href)}`}>
                <Link href={item.href}>
                  {getNavigationLabel(item.href)}
                  {item.children && <ChevronDown size={14} aria-hidden="true" />}
                </Link>
                {item.children && (
                  <div className="main-nav-dropdown">
                    {item.children.map((child) => (
                      <div className="main-nav-subgroup" key={`${child.href}-${getNavigationLabel(child.href)}`}>
                        <Link href={child.href}>{getNavigationLabel(child.href)}</Link>
                        {child.children?.length ? <div className="main-nav-dropdown main-nav-dropdown--nested">{child.children.map((nested) => <Link key={`${nested.href}-${getNavigationLabel(nested.href)}`} href={nested.href}>{getNavigationLabel(nested.href)}</Link>)}</div> : null}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <a
            className="phone-link"
            href={PHONE_HREF}
          >
            <span aria-hidden="true">☎</span> {SITE_PHONE}
          </a>

          <button
            ref={menuToggleRef}
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
            
          </button>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
