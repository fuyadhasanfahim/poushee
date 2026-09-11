"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { LanguageToggle } from "./language-toggle";
import { CallNowButton } from "./call-now-button";
import { useLanguage } from "@/lib/i18n/language-provider";

const NAV = [
  { key: "nav.home", href: "/" },
  { key: "nav.menu", href: "/menu" },
  { key: "nav.about", href: "/#about" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { t, tf } = useLanguage();
  // pages that open on a full-bleed dark hero get the transparent-to-solid
  // treatment; deeper pages (e.g. a single dish) sit on a light background
  // and should stay solid from the start.
  const segments = pathname.split("/").filter(Boolean);
  const hasDarkHero = pathname === "/" || (segments[0] === "menu" && segments.length <= 2);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href === "/menu"
        ? pathname.startsWith("/menu")
        : false;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close the mobile sheet on navigation
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || !hasDarkHero || menuOpen;
  const tone: "light" | "dark" = "light";

  return (
    <>
    <header
      className={`nav-in fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid
          ? "border-b border-cream-50/10 bg-navy-950/90 shadow-[0_10px_40px_-24px_rgba(6,12,34,0.6)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="relative z-50 mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <Logo tone={tone} sub={false} height={28} />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`font-script group relative rounded-full px-4 py-2 text-[1rem] font-medium tracking-tight transition-colors duration-300 ${
                  tone === "light"
                    ? "text-cream-50/85 hover:text-cream-50"
                    : "text-navy-900/72 hover:text-navy-900"
                }`}
              >
                {t(item.key)}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle tone={tone} className="hidden sm:inline-flex" />
          <div className="hidden sm:block">
            <CallNowButton tone="gold" />
          </div>

          <button
            type="button"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
            data-open={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={`menu-btn relative grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors duration-300 lg:hidden ${
              menuOpen
                ? "border-gold-500/40 bg-gold-500/15 text-navy-900"
                : tone === "light"
                  ? "border-white/25 bg-white/10 text-cream-50"
                  : "border-navy-800/15 bg-white/60 text-navy-900"
            }`}
          >
            <span className="menu-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>
    </header>

      <div
        className="navsheet lg:hidden"
        data-open={menuOpen}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="navsheet-scrim"
          aria-label={t("nav.closeMenu")}
          tabIndex={menuOpen ? undefined : -1}
          onClick={() => setMenuOpen(false)}
        />
        <div className="navsheet-panel" role="dialog" aria-modal="true" aria-label={t("nav.menu")}>
          <p className="navsheet-eyebrow">
            {tf({ en: "Navigate", bn: "কোথায় যাবেন" })}
          </p>
          <ul className="navsheet-list">
            {NAV.map((item, i) => {
              const active = isActive(item.href);
              return (
                <li
                  key={item.key}
                  className="navsheet-item"
                  style={
                    { "--ni-d": `${0.07 + i * 0.055}s` } as React.CSSProperties
                  }
                >
                  <Link
                    href={item.href}
                    tabIndex={menuOpen ? undefined : -1}
                    aria-current={active ? "page" : undefined}
                    className={`navsheet-link${active ? " is-active" : ""}`}
                  >
                    <span className="navsheet-bar" aria-hidden="true" />
                    <span className="navsheet-label">{t(item.key)}</span>
                    <svg
                      className="navsheet-arrow"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="navsheet-foot">
            <LanguageToggle tone="dark" />
            <CallNowButton tone="gold" />
          </div>
        </div>
      </div>
    </>
  );
}
